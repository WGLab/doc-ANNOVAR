# VCF processing

This article describes some thoughts about VCF pre-processing to ensure a more accurate/reliable functional annotation of VCF files.

1. Introduction to VCF file and some of its complications

When ANNOVAR was originally developed, almost all variant callers (SamTools, SOAPSNP, SOLiD BioScope, Illumina CASAVA, CG ASM-var, CG ASM-masterVAR, etc) use a different file format for output files, so ANNOVAR decides to take an extremely simple format (chr, start, end, ref, alt, plus optional fields) as input. Let's call it avinput file for now. Then I provide the convert2annovar.pl program in the ANNOVAR package to faciliate format conversion.

Later on, VCF (Variant Call Format) becomes the main stream format for describing variants. It was originally developed and used by the 1000 Genomes Project, but its specification and extension is currently handled by the Global Alliance for Genomics and Health Data Working group. See http://www.1000genomes.org/wiki/Analysis/Variant%20Call%20Format/vcf-variant-call-format-version-41 for details on its format specification.

Nowadays, almost everybody who do variant calling uses VCF or MAF formats, which greatly faciliate the exchange and communication between researchers. ANNOVAR does provide functionality for format conversion from VCF/MAF to avinput format, so that users can annotate their VCF files.

However, many users may not fully understand what is a VCF file and do not really have time to read the format specification, and as a result, I got many user emails centering around difficulty in handling VCF files. After communication with several ANNOVAR users, I decided to just write a simple piece to describe some general guidelines for VCF files, to help ANNOVAR users understand how to best annotate VCF files. Of course, if yor read the below and you disagree with me on anything, please feel free to email me and we can discuss further and I am happy to revise the description. After all, everything that I wrote below reflect my own understanding on how things work, and they may be incorrect.

Some basic facts to keep in mind:

1. VCF is a format for describing locus; technically it is not for describing variants or genotype calls, despite the name "Variant Call Format". It is merely optional to include genotype calls (or even variants), and for many non-diploid species or many situations (such as mitochondria or human cancer), it sometimes does not even make sense to have a genotype call. However, the purpose of most variant calling software is to generate genotype calls; they use VCF as the format for output files, but this does not mean that VCF is designed for storing variant calls. This is an important fact to keep in mind.

2. Because VCF is a locus descriptor, there are several consequences. First, there is no line-to-line correspondence with variants. Since multiple variants can be in the same locus, one line in VCF file can in principle describe multiple variants (including wildtype non-variant allele), and multiple types of genotype calls when genotype information is available. For example, take a look at an example VCF line below. It has eight tab-delimited columns. In the ALT column, there are sevearl comma-delimited alternative alleles. So in one single line, several insertions and deletions and a single-nucleotide variant (SNV) are all present.

 

#CHROM	POS	ID	REF	ALT	QUAL	FILTER	INFO
1	112240038	.	CTTT	CTTTT,CTTTTT,CTTA,CTT,CT,C	.	PASS	AC=986,3,1249,3,127,3;AF=0.196885,0.000599042,0.249401,0.000599042,0.0253594,0.000599042
A lot of users like to include variant annotation information in VCF files (via the INFO field). So in this situation above, we need to add annotations to all six alleles in the INFO field in the same line, and make sure that users knows which annotation corresponds to which allele. ANNOVAR does handle this correctly via table_annovar.pl.

3. VCF can hijack your variants, turning SNVs into multi-nucleotide variants, and turning simple indels into complicated descriptors. This will pose a challenge for annotation, as ideally one variant should have one and only one way to be described in a given reference genome. Take the CTTT->CTTA change above as an example, it should be simply a T->A SNV, but because the deletion/insertion hijack the locus, it is written as CTTT->CTTA rather than T->A. Considering that an allele frequency database (say 1000 Genomes Project frequency database) would only have T->A but not CTTT->CTTA, then this variant will be missed by annotation software as a private variant, even if it is actually observed in 1000G.

Similarly, the CTTT->CTTTT variant may not be recorded in a database, as C->CT would be the more appropriate way to record this variant.

4. There is no community consensus yet on how to describe an indel in an unique way. Many users prefer to do a left-normalization. Left-normalization means that the start position of a variant should be shifted to the left utill it is no longer possible to do so, so that the smaller the number, the better. However, HGVS clearly specifies that left-normalization would be performed on cDNA (mRNA) coordinate, which means that right-normalization is required for half the genes in human genome. We will just have to accept the fact that people do not agree with each other at this point.

5. After reading these facts, now the question is how do we do annotation on VCF files to ensure the most accurate results?

Since left-normalization is gaining more and more popularity, my suggestion is to just use left-normalization, and that database curators as well as users both use this practice, so that we can compare apples to apples. My second suggestion is that each VCF line describes only one single variant, so that indels do not hijack SNPs, to ensure 1-to-1 matching with databases.

So as ANNOVAR developer, I decided to re-process all 1000 Genomes Project files as well as ESP6500si files as well as dbSNP files, so that each line contains one variant and so that every variant is left-normalized. The updated databases were made available in December 2014.

So as a user, this is what you should do: (1) split VCF lines so that each line contains one and only one variant (2) left-normalize all VCF lines (3) annotate by ANNOVAR.

For example, suppose the input is ex1.vcf.gz (make sure that it is processed by bgzip and then by tabix), this is what you would do:

bcftools norm -m-both -o ex1.step1.vcf ex1.vcf.gz 
bcftools norm -f human_g1k_v37.fasta -o ex1.step2.vcf ex1.step1.vcf

The first command split multi-allelic variants calls into separate lines, yet the second command perform the actual left-normalization. The FASTA file is needed in the second command.

Now after this pre-processing step, you can start annotating ex1.step2.vcf by ANNOVAR.

6. There are several problems with the above approach, that users should keep in mind.

First, a positive strand gene may well be a negative strand gene in a different genome build (different version of the same reference genome such as hg17/hg18/hg19/hg38, or reference genome from different ethnicity groups such as Caucasian/African/Chinese/Korean/Venter), so that left-normalization results in discordant protein-level annotations; yet if we adopt the HGVS standard, this will not be a problem. In any case, as human genome is relatively mature today, I consider this as a relatively minor issue at least for humans.

Second, due to the way VCF is designed, left-normalization and spliting software tools are just not as smart as you may think yet, and the INFO field may not be splitted correctly, resulting in future frustrations when interpreting the results. Let's take a simple example from a real ESP6500 file: the record "EA_AC=76,129,1560" may be present in the INFO field in the VCF file, yet it denote counts for alternative allele 1, counts for alternative allele 2, counts for reference allele, respectively (but a software such as bcftools won't be smart to know this hidden info and won't be smart to know the exact order of alleles). Now if you split and left-normalize the VCF, no software tool would be smart enough to re-generate the correct record, so users can no longer correctly interpret the INFO field unless you know exactly what kind of processing has been performed on VCF. To address this, you may want to just re-join the multiple variants at the same locus and generate a new VCF file.

## Assigning dbSNP identifiers

One common task that many users need to use ANNOVAR for is to assign dbSNP identifiers to variant calls in a VCF file. I often get questions that a specific variant was not assigned a dbSNP rs identifier by ANNOVAR, even though it is supposed to be a "known" SNP. This usually happens for indels, but sometimes happens for SNVs as well.

Before we go too deep into this issue, let's step back and first ask the simple question: what is a dbSNP rs identifier exactly?

If you read dbSNP website, you'll find "official" explanation here:

Reference SNP cluster 'rs' ID's are created by NCBI during periodic 'builds' of the database. Reference SNP clusters define a non-redundant set of markers that are used for annotation of reference genome sequence and integration with other NCBI resources. Novel submissions at new positions in genome sequence will instantiate a new refSNP cluster. New submissions that match existing data will be merged into an existing refSNP cluster. A reference SNP cluster record has the format NCBI | rs[NCBI SNP ID] where 'rs' is always lower case.

Another explanation is given here:

A reference SNP ID number, or “rs” ID, is an identification tag assigned by NCBI to a group (or cluster) of SNPs that map to an identical location. The rs ID number, or rs tag, is assigned after submission. When dbSNP was first released to the public in 1998, every submission that appeared to be unique in the database was assigned separate rs ID numbers. Now that dbSNP has matured with constant submissions, a submitted SNP is evaluated to see if it maps to an identical location as previously submitted SNPs; if it does, then the submitted SNP is linked into the reference set of the existing reference SNP record. These SNP rs IDs are mapped to external resources or databases, including NCBI databases. The SNP rs ID number is noted on the records of these external resources and databases in order to point users back to the original dbSNP records. A reference SNP record has the format NCBI| rs<NCBI SNP ID>. Please note that 'rs' is always in the lower case. For further information on refSNPs, please see our online documentation.(04/05/06)
Basically, my understanding is that if a new user submit a new sequence, NCBI will try to match it against existing records (so-called refSNP cluster), and if there is no match, it will try to assign a new rs identifier to the new submission. The real problem is that most people including myself still do not understand exactly what is dbSNP rs identifier even after reading this paragraph, as these words do not constitute a "definition" by itself. The simple question that I (and many other people) may have is: is rs identifer a stretch of sequence, or a stretch of "consensus" sequence built from many other sequences, or a genomic position, or a collection of genomic positions, or a variant with chr:start-end/ref/alt information, or multiple variants sharing the same positions/locus?

I may guess that rs ID is a strech of 'consensus' sequence; in my humble opinion, it actually makes the most sense as the definition of rs ID (because it is genome agnostic). However, this may not be the case. From my reading of the dbSNP website, dbSNP may want to use rs ID to denote SNPs/variants/mutations. (However, in a separate discussion with dbSNP developers, I was informed that rs ID absolutely does not denote SNPs/variants/mutations, but denotes specific positions in a given reference genome, which contradicts their FAQ in their own website here). So I do not really know how dbSNP think about rs ID exactly. I sent emails to dbSNP to get more clarification.

Back to the real world: the reality is that most researchers use rs ID to denote mutations/variants rather than a locus or a DNA sequence. They say things like rs123456 is associated with elevated blood pressure, they say things like rs123456 creates a new stop codon resulting in truncated protein, they say things like rs123456 has a MAF of 5%, etc. A simple explanation is that traditionally SNPs are biallelic, so by using rs ID one can automatically denote a unique non-reference variant in the genome. dbSNP may not really like this, they would want everybody to say that rs123456 G allele on 1p23.4 creates a new stop codon or that rs123456 T allele on 3q11.2 has MAF of 5%, etc. It is just not that convenient for researchers to say things this way. Ultimately, it boils down to an identifiability issue: with the current dbSNP release, neither rs123456, nor rs123456-G, can uniquely identify a variant in a given reference genome, and the situation can become worse as many rs ID can map to multiple locations in some reference genomes. Based on how dbSNP releases their data, we as users have to make some choices: either rs ID identifies a locus, or rs ID identifiers multiple pre-defined alleles in a locus, or rs ID identifies a set of locus with similar sequence contexts, or rs ID identifiers multiple pre-defined alleles in a set of loci with similar sequence contexts (but not all alleles need to be present at all loci).

Anyway, enough background now. Let's go to the main topic of assigning dbSNP rs ID (say for example, rs1045642) to a new mutation. Below is the record from dbSNP's own VCF file:

```
7 87509329 rs1045642 A G,T . . RS=1045642;RSPOS=87509329;RV;dbSNPBuildID=86;SSR=0;SAO=0;VP=0x05037800030511051f010101;WGT=1;VC=SNV;PM;TPA;PMC;S3D;SLO;REF;SYN;ASP;G5;HD;GNO;KGPhase1;KGPilot123;KGPROD;OTHERKG;PH3;OM
```

Let's just assume that rs1045642 denotes a A->G or A->T mutation at chr7:87509329 (even though dbSNP may or may not think so).

The question is (1) if a user finds a chr7:87509329A->C mutation (2) if a user finds a chr7:87509329delA mutation, would we call that rs1045642 is present in user data?

In some software tools, the answer is yes for 1 only, or yes for both 1 and 2. For dbSNP, my guess is that they'll merge both records to the identical rs ID (rs1045642) in the next release, even though the current dbSNP does not contain such records.

However, in ANNOVAR, the answer is no for both. Remember that in filter-based annotation, ANNOVAR will only identify exact match to a database, which includes not only position but also nucleotide identity. It is important to keep the 'exact match' ability in filter-based annotation, otherwise allele frequency, functional score, etc all lose their identifiability.

For indels, things are bit more complicated; however, if you are willing to perform left-normalization, then I now provide a fully normalized "new" dbSNP, which I refer to as avsnp, to match up against your variants (see previous section for details). This avsnp will ensure better matching of indels for user data against a dbSNP rs ID. Currently, avsnp138 is available for hg19 coordinate, yet avsnp142 is available in hg19 and hg38 coordinate. Additional avsnp will be added in the future. An example usage is given below:

```
annotate_variation.pl -downdb -buildver hg19 avsnp142 humandb/
annotate_variation.pl ex1.avinput humandb/ -filter -build hg19 -dbtype avsnp142
```

For ANNOVAR users, these will be the most "correct" dbSNP release to use to ensure identifiability of rs IDs, regardless of how dbSNP has originally planned to use rs IDs for.

 

Credits: A number of ANNOVAR users participated in the discussion and provided valuable comments on some issues described in this article, including Pär Engström (Stockholm University).

