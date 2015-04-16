1. How to report a bug or to ask a question?

    The best way is: First, do read the website thoroughly especially FAQ. I received too many emails whose answers can easily be found in FAQ. Second, if you cannot find answer in FAQ or do not understand the answer well, then drop me an email  as which should contain (1) command line argument (2) error message in screen or the LOG file (3) sometimes example inputfile (4) in case you use Mac or Windows, let me know. The reason is that I can fix something or diagnose something only if I can understand the question and reproduce the results. So do yourself a favor and do me a favor, include details in your email to avoid wasting our mutual time sending multiple emails.

    There is no such thing as "ANNOVAR development team", as I am the only person who reply user emails, address user questions, and fix bugs. As of April 2015, I have communicated over 13,399 emails with ANNOVAR users. If you read FAQ #1 before sending me an email, it will save both of us a lot of valuable time.

1. How to annotate variants in a VCF file?

    The easiest way is to use `table_annovar.pl`: just add `-vcfinput` argument and supply a VCF file as input file, and your ouput file will be in VCF format with INFO field populated with ANNOVAR annotations that you have specified in `-protocol` argument. One additional output file called \*multianno.txt will be in tab-delimited text format for easier manual examination in Excel or other programs.

    It is also possible to handle VCF file manually when retrieving a subset of records from VCF file without altering its content. For example, I want to find out all novel variants (not in dbSNP135 and not in 1000G and not in NHLBI-ESP5400) in a VCF file, but without changing the VCF format. This can be done using `convert2annovar.pl` with the `-includeinfo` argument, so that you convert VCF file to ANNOVAR inputfile without losing any VCF-specific information. Then annotate the inputfile by a series of filter operation, then convert the outputfile to VCF file using the `cut -f 3-` command in Linux system.

1. Why I cannot download the databases listed in your download page?

    What is your command line? Did you add "-webfrom annovar"?

1. How to find frequency information from 1000 Genomes Projec data?

    The instructions were described in [this page](../user-guide/filter.md). But one important thing to emphasize is that due to historical reasons, one must use something like `-dbtype 1000g2014oct_all`, not `-dbtype ALL.sites.2014_10` for annotation.

1. What is the difference between vcf4 and vcf4old format in convert2annovar.pl?

    In August 2013, I changed the VCF4 conversion subroutine in `convert2annovar.pl`, but I kept the vcf4old format for users who like the "old-fashion" conversion. The difference is that nowadays people tend to do multi-sample calling or candidate variant calling, so that the variants listed in the VCF4 file do not necessarily have mutations for a specific sample. This happens when genotype call is 0/0 (reference/reference). I got some complaints from users about the inability to process multi-sample VCF files, so I decided to make this change.

    By default "vcf4" will only process the first sample, and will only print out mutations that exist in the first sample. So if you have a multi-sample VCF file, then usually only a subset of lines will exist in the output file. The `-format vcf4` can be combined with `-allsample` argument, which will print out a separate output file for each sample in the VCF4 file (again by default, only the first sample in the VCF4 file will be processed). More importantly, if you use `-format vcf4 -allsample -withfreq`, then all input lines from VCF will be kept in output lines, yet an allele frequency measure is included in each line calculating the frequency of each variant among all the samples in the VCF file.

    In general, `-format vcf4old` should be considered as obselete and should not be used by most users, since `-format vcf4` can now accomplish everything that `-format vcf4old` can do with appropriate combinations of arguments.

1. How to back convert cDNA coordinate such as c.385A>G to genomic coordinate such as chr1:123456A>G?

    Read "all variants in a transcript" section from [this page](../user-guide/input.md). 

1. Why my run of gene-based annotation differ slightly from those shown in website?

    UCSC database updates constantly and ANNOVAR executable also updates constantly, so it is expected that ANNOVAR output format or the annotations may change slightly over time.

1. Why ANNOVAR produced different non-synonymous SNP annotations than another software?

    For example, ANNOVAR may report a mutation as W185R mutation, but another software may report the same mutation as R285W mutation. This could be due to a variety of reasons: (1) the use of different gene-definition systems. Depending on your command line argument, ANNOVAR always use the lastest refGene, knownGene or ensGene to ensure that the information is up to date. You should check what gene definition system is used by the other annotation software. (2) Even if both software tools are using Ensembl, they could be using different versions of the gene definition. (3) ANNOVAR automatically excludes any transcript in gene definition file that does not have a complete coding sequence or has a premature stop codon (since this means the protein annotation is wrong). Each gene definition (especially Ensembl) has a lot of such transcripts. (4) ANNOVAR uses precedence rules, so if a variant is intronic for one transcript but coding for another transcript, it will be reported as coding only. You need to use `-separate` argument to show all annotations if this is of interest to you. (5) This also could be due to the presence of bugs in one software or the other. If there is a potential bug that you find in ANNOVAR, please report to me.

1. How to infer the version number for RefSeq transcripts in ANNOVAR annotation results?

    Run this command (for human hg19 build): 

```
mysql --user=genomep --password=password --host=genome-mysql.cse.ucsc.edu -A -D hg19 -e 'select distinct refGene.name,gbCdnaInfo.version from refGene,gbCdnaInfo WHERE refGene.name=gbCdnaInfo.acc' > refseq_version.txt
```

    Starting from Nov 2014, when you download refGene for human (hg18/hg19/hg38), the corresponding `refGeneVersion.txt` file will be automatically downloaded to help users who cannot figure out how to run mysql. However, you will need to run the MySQL command manually for other species.

1. Why ANNOVAR says "WARNING: A total of 7 sequences cannot be found in mRNA.fa file"?

    When you issue `-downdb` command without `-webfrom annovar`, ANNOVAR downloads gene definitions from UCSC website, yet download FASTA files from ANNOVAR website. UCSC may update far more frequently then I update FASTA files, so sometimes some sequences cannot be found in the FASTA file. Users should use `retrieve_seq_from_fasta.pl` to generate your own set of most updated FASTA files for your genome of interests. To avoid this problem, for human genome, user should add `-webfrom annovar` in `-downdb` command, so that these gene definitions are downloaded from ANNOVAR site to be fully synchronized with the mRNA FASTA file.

1. It should be amino acid X in this position but ANNOVAR reports Y in this position!

    For example, ANNOVAR reports p.X100Z as the amino acid change, but another web resource shows that position 100 should have wildtype of Y not X.

    Whichever website you use, regardless of whether it is swissprot, refseq or whatever, remember that they always have their own way to collect proteome data and compile data, and these ways may result in slight discordance to theoretical protein sequence. Sometimes, these websites may directly translate a RefSeq transcript such as NM_123456 to a protein sequence and present it, but although ANNOVAR uses NM_123456 as well it uses the "theroteical mRNA sequence" inferred by ANNOVAR as opposed to those provided in RefSeq. By "theoretical", I mean a protein sequence that is translated from the "theoretical" mRNA sequence which is specified by a gene model as well as a whole-genome DNA sequence given a specific genome build. ANNOVAR is a software that produces this "theoretical" protein sequence, so if you want to stick with a specific genome build and a specific gene definition system, then ANNOVAR gives the correct results.

    Exceptions exist when the gene model is not annotated correctly. In other word, when the exon start site, end site, splicing site have some slight errors. In this case, the protein sequence produced by ANNOVAR may be wrong and may contain pre-mature stop codons. (There are many many reasons this may happen) If you ever encounter such a variant, just try a different gene model (for example, using `-dbtype knowngene` or `-dbtype ensgene`) to reannotate this variant. If you want to investigate this variant even more closely, considering using the `coding_change.pl` program in ANNOVAR, which will print out the theoretical protein sequence before mutation and after mutation, and will flag any potentially wrong theoretical protein sequence with WARNING messages.

    In Nov 2011, I updated ANNOVAR so that any reference transcripts with premature stop codon (potential gene model annotation error or transcript-to-genome mapping error) will no longer be used in `exonic_variant_function` output file.

1. Why ANNOVAR reports a 3-bp deletion as frameshift deletion?

    For example, "9      5720612 5720614 AGT     -" (hg19 coordinate) is annotated as non-frameshift deletion by CLCbio but ANNOVAR thinks it is a frameshift deletion. Biologically, a 3-bp frameshift deletion is indeed possible: This could happen, for example, when the 3-bp deletion covers only 1 or 2 bp in exons, and indeed this is the case for this deletion. ANNOVAR knows how to handle these types of complicated situations but other software may not.

1. Why ANNOVAR reports T182A,T190A,T300A as the amino acid change but another web server reports only T300A?

    Alternative splicing is prevalent in human genome and as a result, it is best to annotate amino acid change with respect to a certain transcript rather than gene. Other servers or software may randomly pick one script as the representative "gene" and gives one single answer. ANNOVAR tries to be comprehensive and always accompany annotation by transcript names, and it is up to the user which representative transcript they want to use or if they want to use all.

    There has never been a concensus in the field which transcript should be used to represent a gene when multiple transcripts are available. The most popular approach is to use the longest transcript nowadays. However, in the medical genetics field, for certain specific diseases and specific genes, there are 'canonical' transcripts that everybody uses by default for historical reasons, and you will need to manually select this canonical transcript from ANNOVAR output file to communicate with the rest of the field.

1. Why ANNOVAR reports c.C100T when my input is G to A change?

    The c.C100T is a cDNA (actually, mRNA) level change. ANNOVAR input (G to A) has to be in the forward strand, and if the transcript is in the reverse strand, there will be a C to T change in the mRNA.

- Why ANNOVAR reports c.T5997G when my input is T to C change in chr14:31582550-31582550 in hg19 coordinate?

    First, this transcript is in the reverse strand, so the mutation is changed to "G". Second, your input is wrong: this position should be A in hg19, so c.T5997 should be the reference base. Maybe you used a wrong genome build, or your genotype calling software has a bug. ANNOVAR did it correctly. Starting from September 2011, ANNOVAR will try to print out WARNING messages telling user that they used wrong reference alleles in their input file for exonic variants.

1. Why my mutation gets lost by ANNOVAR?

    A user reported that the input "17      16256671        16256671        C       G" in hg19 coordinate was reported as a "CENPV:NM_181716:exon1:c.C80C " mutation, so the C->G change gets lost by ANNOVAR. Read the FAQ item above: the input is wrong, as this position should be a G wildtype in reference genome, so the C80C mutation is the correct mutation in the opposite strand.

1. Why only one isoform is in exonic_variant_function but two in variant_function?

    A user reporetd that the input "1 14143003 14143003 A G" in hg19 coordinate was reported to hit "NM_001135610,NM_012231" in variant function, but only NM_001135610 in exonic_variant_function file (when `-transcript` argument was used). If you add `-separate` argument, you'll see that the change on NM_012231 is synonymous, so it is not printed out due to precedence rule.

1. Why ANNOVAR reports "unknown" in exonic_variant_function?

    "unknown" means that the gene structure is not correctly annotated (complete ORF information is not available). Previous versions of ANNOVAR will always give an answer such as non-synonymous SNVs, etc, but I got too many user emails complaining about "bugs" (even though ANNOVAR is innocent in this case). So after December 2011, if errors exists in gene structure annotation (RefSeq, Ensembl, UCSC, etc), ANNOVAR will just report unknown for exonic_variant_function; in other word, although the variant is clearly within an exon, we cannot say for sure how it affects protein sequence as the ORF annotation is not correct.

1. Why ANNOVAR reports the same function for two different mutations in two sites?

    Sometimes different mutations are reported to have the same function in gene-based annotation. For example, these mutations at chromsome 4 at coordiante 8945506, 8950251, 8954996, 8959741, 8964486, 8969231, 8973977 are all reported to be USP17:NM_001105662:exon1:c.A25G:p.R9G. There is nothing wrong: if you check the USP17 gene in genome browser, you'll see that there are at least 9 copies of the gene in each haplotype. So all the mutations (if they are real) all have the same function. In reality, it is likely that these mutations are not real, but are rather artifacts of base-level differences between any random two copies of the same gene.

1. Why ANNOVAR complains that "wildtype base is not part of the allele description" in filter-based annotation?

    When `-verbose` is used, ANNOVAR may complain that "wildtype base is not part of the allele description" in filter-based annotation using dbSNP. For example, this may occur for the SNP rs61747618. If you look at the actual snp130.txt file downloaded by ANNOVAR, you'll see

```
1194    chr17   79891146        79891147        rs61747618      0 +       T       T       A/G     genomic single  unknown      0       0 coding-synon,intron     exact   1
```

    So the reference allele "T" is not part of the "allele description" in dbSNP. If you further go to Genome Browser page for this particular SNP, you'll see that there is a specific warning message that " UCSC reference allele does not match any observed allele from dbSNP.". So essentially there is a potential annotation error in dbSNP (at least that's what UCSC thinks), where none of the alleles for this SNP is in the reference human genome. It is possible that this is a tri-allelic SNP (although dbSNP could have annotated this as tri-allelic), or it is possible that this is merely an alignment issue (UCSC and dbSNP did their alignment independently so their top alignments may not be identical to each other). There is really nothing that ANNOVAR can do, except to throw a warning message if you turn on `-verbose`.

1. Why ANNOVAR complains "exonic SNPs have WRONG reference alleles " in gene-based annotation?

    This happens when ANNOVAR thinks the "reference allele" in your input does not fit the "reference allele" in the mRNA FASTA file in ANNOVAR's database. This could be due to several reason, (1) wrong `-buildver`, or (2) you did not specify the correct reference allele, or (3) mRNA FASTA file is outdated as the gene model gets updated pretty quickly by UCSC.

    To solve this problem, first check (1) and (2) to make sure that you did have the correct input. If you cannot find an error, then update the FASTA file by `retrieve_seq_from_fasta.pl` command, with more details here.

1. Why FASTA sequence in ANNOVAR differ from those in public databases?

    For example, the mRNA of the MYBPC3 gene (NM_000256) extracted from ucsc and the other one extracted from annovar `hg18_refGeneMrna.txt` file differ. The reason is simple: FASTA in ANNOVAR is built from ANNOVAR using chr:start-end records, not copied/pasted from any public database. Any errors in chr:start-end will lead to errors in ANNOVAR-compiled FASTA. To avoid future complaints, FASTA sequences with premature stop codon will no longer be used in exonic annotation, although they still exists in the FASTA file.

1. Why ANNOVAR's TFBS annotation differ from what I have from another web server?

    There are MANY different transcription binding sites (TFBS) annotations generated by hundreds of research groups in the world. ANNOVAR used a keyword "TFBS" for only one specific type of annotation that have a long history in Genome Browser, but it does not mean that this is the ultimate solution for TFBS prediction. ANNOVAR can certainly take many other types of TFBS annotations for but it won't use the keyword "tfbs" for that. In fact, as you can see from the region-based annotation page, ANNOVAR can also annotate TFBS ChIP-Seq from the ENCODE project.

    The take home message is that there are many annotations on TFBS, and they may differ from each other substantially. Use caution when interpreting the data. Ultimately, it is the biologist himself/herself who can decide whether or not the annotation makes sense; ANNOVAR faciliate this process but it cannot make the decision for you.

1. Why the SIFT/PolyPhen scores in ANNOVAR differ from those obtained from another website?

    The AVSIFT scores (now obselete!) in ANNOVAR was based on Ensembl55 database, and sometimes there are major differences from those computed from ensembl63 (default in SIFT website). If you selecte ensembl55 from SIFT website you'll see that the scores are consistent and identical. The LJB_SIFT scores in ANNOVAR was based on the original Liu et al paper, so read the paper for details on how they compile the scores.

    But in general, calculation of scores depend on version of software, parameters of program, source of data files, definition of gene structure, handling of alternative transcripts and multiple scores, so there are many reasons why there are differences in scores calculated by different people. ANNOVAR now tries to be syncrhonized with the ljb\* database, so the scores may be different from another web server.

1. How to infer base-level GERP scores and phastCons scores in ANNOVAR?

    On Dec 20, 2011, I made whole-exome GERP++ scores available to ANNOVAR users for exome annotation. Use `-downdb ljb_gerp++` with appropriate -buildver. Later on, I made whole-genome GERP++ scores that are greater than 2 available to ANNOAR users for genome annotation (those with score\<2 is not generally regarded as important). Use `-downdb gerp++gt2` with appropriate `-buildver`.

1. Can ANNOVAR identify all SNPs annotated within dbSNP in a given region (say chr1:3751541-3751607)?

    In ANNOVAR, filter annotation identifes exact matches including base pair identity, yet region annotation identify overlapping regions. When you use `--filter`, the program will tell whether the region chr1:3751541-3751607 is a SNP within dbSNP (highly unlikely to be the case). In more recent versions of ANNOVAR, region annotation can handle snp130 now. For example, just try `annotate_variation.pl ex1.human humandb/ -region -dbtype snp130`. However, this command require about 10GB memory to run.

    However, if you are only looking at one single specific region, a simple script can be used to address this question, after using `-downdb snp130` in ANNOVAR:

```
[kai@biocluster ~/]$ perl -ne '@a=split(/\t/,$_); $a[1] eq "chr1" and $a[3]>=3751541 and $a[3]<=3751607 and print $a[4],"\n"' < hg18_snp130.txt
```

1. How to annotate simple repeat regions in human genome?

    Read these pages: http://www.genome.ucsc.edu/cgi-bin/hgTrackUi?hgsid=199336701&c=chr1&g=simpleRepeat, http://www.genome.ucsc.edu/cgi-bin/hgTrackUi?hgsid=199336701&c=chr1&g=rmsk, http://www.genome.ucsc.edu/cgi-bin/hgTrackUi?hgsid=199336701&c=chr1&g=rmskRM327, then pick one that matches your goal, then annotate by ANNOVAR. 

1. How to handle E. coli, Arabidopsis thaliana and other genomes not in UCSC?

    For gene-based annotations (say for example, `-dbtype refGene`), ANNOVAR requires 2 files: a refGene file specifying gene model, and a FASTA file with sequence for each transcript. You can make 3 files for the genome using the following rules:

    For refGene file, each line has 16 tab-delimited columns: $bin, $name, $chr, $dbstrand, $txstart, $txend, $cdsstart, $cdsend, $exoncount, $exonstart, $exonend, $id, $name2, $cdsstartstat, $cdsendstat, $exonframes. The only real important thing is $name (transcript name), $chr (chromosome), $dbstrand (strand of the transcript in reference genome), $txstart, $txend (transcription start and end), $cdsstart, $cdsend (translation start and end, remember that there are 5/3-UTR in each transcript so the $cdsstart is not the same as $txstart), $exoncount (number of exoms), $exonstart $exonend (comma-delimited exon start and end sites). Remember that all start sites use zero-based coordinates.

    For refLink file, you can make anything. The file will be ignored. (It is important for very old genome annotations when name2 field is not present in refGene, but it is not really useful today as people will not use old genome assembly nowadays).

    For FASTA file, make sure that the $name in ">$name" matches the refGene file, in a case-sensitive manner. You can build the file yourself, or you can directly use `retrieve_seq_from_db.pl` in ANNOVAR to generate this file, given a FASTA file for the genome. Make sure that strand is correct in the cDNA if you build the file yourself.

    After you have three three files, you can directly run ANNOVAR by specifying `-buildver` argument to match your file prefix.

    If you have GFF3 files, then convert it to UCSC compatile format first (try the http://hgdownload.soe.ucsc.edu/admin/exe/linux.x86_64/gff3ToGenePred tool). This is the easiest thing to do and multiple users have reported success on multiple novel species.

    **Trouble shooting**: If you can generate variant_function annotation but not exonic_variant_function annotation, then double check the GFF file. The gff3ToGenePred requires gene/mRNA/CDS/exon notation, but some GFF3 files use "transcript" rather than "mRNA" resulting in lack of coding information in output files. Manually change "transcript" to "mRNA" in GFF3 will solve this problem.

1. Why the total number of homozygous and heterozygous variants is more than the number of variant site (convert2annovar.pl)?

    Suppose we see 30 reads in a site, and 10 are A, 10 are G and 10 are C. This is one site, but may be presented as two heterozygous mutations from the genotype calling algorithm. This could be due to a tri-allelic SNP, or a genomic duplication, or just sequencing error.

1. Can ANNOVAR handle IUPAC code in input?

    No. ANNOVAR is a variant annotation program, not a genotype annotation program. It needs to see A, C, G, T, not a IUPAC code representing ambiguity of an allele, or an IUPAC code representing a genotype call.

1. Can ANNOVAR handle genotype calls in input?

    No. ANNOVAR is a variant annotation program, not a genotype annotation program. You can only specify the allele of an observed variant (such as A, G, etc), not a genotype on a specific position (such as AG genotype).

1. How to handle two very close SNPs in the same codon?

    If two SNPs are separetd by only one or two nucleotides, it is best to treat them as a block substituion, rather than two separate variants. Otherwise, the annotation may not be correct if the two SNPs happen to impact the same codon.

1. How to select the X-way phastCons conservation track in ANNOVAR?

    This totally depends on the genome build, and you need to check genome browser for the number of tracks. For example, for chicken genome, if you select galGal3 as the --buildver, then you'll see in the genome brower page (by hovering mouse on top of "Most Conserved") that it is 7way.

1. Can ANNOVAR print out translated protein sequence?

    `annotate_variation.pl` cannot do that directly, and it is very difficult to modify the existing exonic annotation subroutine to do this. Therefore, in June 2011 version of ANNOVAR, I added the `coding_change.pl` program to infer translated protein sequence before and after mutation occur.

1. Is it possible to add column names to the input file that are carried through the processing?

    Some users routinely use extra columns and would like to include the column headers rather than having to edit the resulting ANNOVAR output (usually ANNOVAR will treat the line with column names as "invalid" line and put it into the invalid_input file). This can be done with the `-comment` argument, which treats any input line starting with "#" as the comment line and do not discard it.

1. Can ANNOVAR call genotypes from sequencing data?

    ANNOVAR does NOT generate "genotype calling". Dozens of other software tools can perform SNP calling from sequencing data. However, if the user refers to "assigning rs identifiers to SNPs", ANNOVAR can certainly be very helpful (see the example on filtering against dbSNP).

1. How to check if new version of ANNOVAR is available?

    Either go to ANNOVAR website to see what's the latest version and compare to your current version (type `annotate_variation.pl` without argument will print out version information). Or use `annotate_variation.pl -downdb null . ` to enable automatic web-based checking of new version without downloading any database.

1. How to list all annotation databases in ANNOVAR web server?

    You can use `-webfrom annovar -downdb avdblist` to see a list of files, file sizes and time stamp. This only works on human genome though.

1. How to handle OMIM data?

    Many people studying Mendelian diseases perhaps are interested in annotating variants against the OMIM database. However, the 16 June 2011 News from UCSC shows that although they released newly re-engineered OMIM tracks for both hg18 and hg19, "the OMIM data are the property of Johns Hopkins University and will not be available for download from UCSC". For now, you can just go to http://omim.org/downloads, fill out the forms and get a copy of the data. I cannot make a derivative database for you, per their guideline. If you only need a gene symbol to OMIM ID mapping, you can get that data from HGNC here: http://www.genenames.org/cgi-bin/hgnc_downloads

1. What is the version of ENSEMBL used in ANNOVAR?

    ANNOVAR retrieves ensGene definition from UCSC, so it depends on the version that UCSC has used. For human hg19 build, just go to http://www.genome.ucsc.edu/cgi-bin/hgTrackUi?hgsid=211204337&g=ensGene, and see what is the latest release for Ensembl gene prediction.

1. How ANNOVAR handles different coordinate systems for mitochondria?

    UCSC's build (for example, hg19) differ from NCBI's build (for example NCBI 37) in a few subtle manners, for example, replacing contigs by chr_random, and the use of different mitochondia assemblies. UCSC's hg19 assembly used the old version mitochondria genome (NC_001807), but 1000 genomes cosortium has replace the chrM with the latest Cambridge Reference Sequence version (NC_012920). So if you align your sequence data and call variants against the NC_012920, then you cannot really annotate your variants using UCSC's gene definition. It is necessary to stick with the identical coordinate. For autosomes and chrX/Y, this is not a real issue as they are pretty consistent.

    In addition, For most organisms the "stop codons" are “UAA”, “UAG”, and “UGA”. In vertebrate mitochondria “AGA” and “AGG” are also stop codons, but not “UGA”, which codes for tryptophan instead. “AUA” codes for isoleucine in most organisms but for methionine in vertebrate mitochondrial mRNA.

1. How to get -downdb to work if I am behind a proxy server?

    The -downdb use `wget` by default without any argument. You can add `-nowget` in the command line, so that Perl HTTP/FTP modules will be used instead which should handle proxy well. Or you can modify the ANNOVAR source code to use wget with proxy functionality.

1. How to handle MAF files from TCGA?

    You can use [this script](http://www.openbioinformatics.org/annovar/download/maf2annovar.pl) to convert MAF to ANNOVAR input format and then annotate the file.

1. How to support ANNOVAR?

    If ANNOVAR is helpful to your work or research, please cite it in your powerpoint slides, or in your published scientific manuscripts. This means a lot to me.

1. How to license ANNOVAR?

    If you are a commercial user, please contact BIOBASE (info@biobase-international.com) directly for license related issues.



<script>
  (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
  (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
  m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
  })(window,document,'script','//www.google-analytics.com/analytics.js','ga');

  ga('create', 'UA-48623707-1', 'openbioinformatics.org');
  ga('send', 'pageview');
</script>
