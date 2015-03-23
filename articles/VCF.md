This article describes some thoughts about VCF pre-processing to ensure a more accurate/reliable functional annotation of VCF files.

---

Introduction to VCF file and some of its complications

When ANNOVAR was originally developed, almost all variant callers (SamTools, SOAPSNP, SOLiD BioScope, Illumina CASAVA, CG ASM-var, CG ASM-masterVAR, etc) use a different file format for output files, so ANNOVAR decides to take an extremely simple format (chr, start, end, ref, alt, plus optional fields) as input. Let's call it avinput file for now. Then I provide the convert2annovar.pl program in the ANNOVAR package to faciliate format conversion.

Later on, VCF (Variant Call Format) becomes the main stream format for describing variants. It was originally developed and used by the 1000 Genomes Project, but its specification and extension is currently handled by the Global Alliance for Genomics and Health Data Working group. See [here]( http://www.1000genomes.org/wiki/Analysis/Variant%20Call%20Format/vcf-variant-call-format-version-41) for details on its format specification.

Nowadays, almost everybody who do variant calling uses VCF or MAF formats, which greatly faciliate the exchange and communication between researchers. ANNOVAR does provide functionality for format conversion from VCF/MAF to avinput format, so that users can annotate their VCF files.

However, many users may not fully understand what is a VCF file and do not really have time to read the format specification, and as a result, I got many user emails centering around difficulty in handling VCF files. After communication with several ANNOVAR users, I decided to just write a simple piece to describe some general guidelines for VCF files, to help ANNOVAR users understand how to best annotate VCF files. Of course, if yor read the below and you disagree with me on anything, please feel free to email me and we can discuss further and I am happy to revise the description. After all, everything that I wrote below reflect my own understanding on how things work, and they may be incorrect.

Some basic facts to keep in mind:

1. VCF is a format for describing locus; technically it is not for describing variants or genotype calls, despite the name "Variant Call Format". It is merely optional to include genotype calls (or even variants), and for many non-diploid species or many situations (such as mitochondria or human cancer), it sometimes does not even make sense to have a genotype call. However, the purpose of most variant calling software is to generate genotype calls; they use VCF as the format for output files, but this does not mean that VCF is designed for storing variant calls. This is an important fact to keep in mind.

2. Because VCF is a locus descriptor, there are several consequences. First, there is no line-to-line correspondence with variants. Since multiple variants can be in the same locus, one line in VCF file can in principle describe multiple variants (including wildtype non-variant allele), and multiple types of genotype calls when genotype information is available. For example, take a look at an example VCF line below. It has eight tab-delimited columns. In the ALT column, there are sevearl comma-delimited alternative alleles. So in one single line, several insertions and deletions and a single-nucleotide variant (SNV) are all present.

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

    `bcftools norm -m-both -o ex1.step1.vcf ex1.vcf.gz`

    `bcftools norm -f human_g1k_v37.fasta -o ex1.step2.vcf ex1.step1.vcf`

    The first command split multi-allelic variants calls into separate lines, yet the second command perform the actual left-normalization. The FASTA file is needed in the second command.

    Now after this pre-processing step, you can start annotating ex1.step2.vcf by ANNOVAR.

6. There are several problems with the above approach, that users should keep in mind.

    First, a positive strand gene may well be a negative strand gene in a different genome build (different version of the same reference genome such as hg17/hg18/hg19/hg38, or reference genome from different ethnicity groups such as Caucasian/African/Chinese/Korean/Venter), so that left-normalization results in discordant protein-level annotations; yet if we adopt the HGVS standard, this will not be a problem. In any case, as human genome is relatively mature today, I consider this as a relatively minor issue at least for humans.

    Second, due to the way VCF is designed, left-normalization and spliting software tools are just not as smart as you may think yet, and the INFO field may not be splitted correctly, resulting in future frustrations when interpreting the results. Let's take a simple example from a real ESP6500 file: the record "EA_AC=76,129,1560" may be present in the INFO field in the VCF file, yet it denote counts for alternative allele 1, counts for alternative allele 2, counts for reference allele, respectively (but a software such as bcftools won't be smart to know this hidden info and won't be smart to know the exact order of alleles). Now if you split and left-normalize the VCF, no software tool would be smart enough to re-generate the correct record, so users can no longer correctly interpret the INFO field unless you know exactly what kind of processing has been performed on VCF. To address this, you may want to just re-join the multiple variants at the same locus and generate a new VCF file.

---

Credits: A number of ANNOVAR users participated in the discussion and provided valuable comments on some issues described in this article, including Pär Engström (Stockholm University).


---

<script>
  (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
  (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
  m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
  })(window,document,'script','//www.google-analytics.com/analytics.js','ga');

  ga('create', 'UA-48623707-1', 'openbioinformatics.org');
  ga('send', 'pageview');
</script>

<div id="disqus_thread"></div>
<script type="text/javascript">
    /* * * CONFIGURATION VARIABLES * * */
    var disqus_shortname = 'annovar';
    
    /* * * DON'T EDIT BELOW THIS LINE * * */
    (function() {
        var dsq = document.createElement('script'); dsq.type = 'text/javascript'; dsq.async = true;
        dsq.src = '//' + disqus_shortname + '.disqus.com/embed.js';
        (document.getElementsByTagName('head')[0] || document.getElementsByTagName('body')[0]).appendChild(dsq);
    })();
</script>
<noscript>Please enable JavaScript to view the <a href="https://disqus.com/?ref_noscript" rel="nofollow">comments powered by Disqus.</a></noscript>