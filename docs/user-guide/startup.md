## annotate_variation

For impatient users, here is a quick start-up guide to show what ANNOVAR can do. One set of basic examples and one set of advanced examples are provided below. Assuming that a Linux computer is used and that the computer is connected to Internet, go to the ANNOVAR directory, then run the following commands one by one. (Note that if you already added ANNOVAR path into your system executable path, then typing "annotate_variation.pl" would be okay instead of typing "perl annotate_variation.pl"). Internet connection is required for those commands involving the -downdb operation.

```
annotate_variation.pl -geneanno -buildver hg19 example/ex1.avinput humandb/

annotate_variation.pl -downdb -buildver hg19 cytoBand humandb/
annotate_variation.pl -regionanno -dbtype cytoBand -buildver hg19 example/ex1.avinput humandb/ 

annotate_variation.pl -downdb -buildver hg19 1000g2012apr humandb/
annotate_variation.pl -filter -dbtype 1000g2012apr_all -buildver hg19 example/ex1.avinput humandb/
```

Hopefully you can get a rough idea what ANNOVAR can do after doing these exercises. Note that these commands correspond to gene-based, region-based and filter-based annotations.

The first command annotates the 12 variants in ex1.avinput file and classify them as intergenic, intronic, non-synonymous SNP, frameshift deletion, large-scale duplication, etc. Examine the ex1.avinput file to see the simple text format, one variant per line. The annotation procedure should take a few seconds in a typical modern computer. Two output files are generated as ex1.avinput.variant_function and ex1.avinput.exonic_variant_function. Examine the two output files in example/ directory to see what they contain: In the variant_function file, the first and second column annotate variant effects on gene structure and the genes that are affected, yet the other columns are reproduced from input file. In the exonic_variant_function file, the first, second and third column annotate variant line number in input file, the variant effects on coding sequences and the gene/transcript being affected, yet the other columns are reproduced from input file.

>>>Note that he ANNOVAR package already contains a humandb/ directory with RefSeq library files (so that users can start running gene-based annotation in ANNOVAR immediately without doing "-downdb gene" first); the other commands below requires -downdb argument to download database files from Internet first.

Next, the program downloads cytogenetic band annotation databases from the UCSC Genome Browser and saves it to the humandb/ directory as hg19_cytoBand.txt file, then annotates variants in ex1.avinput file and idenifies the cytogenetic band for these variants. The annotation procedure should take a few seconds. Examine the output file ex1.avinput.hg19_cytoBand to see what it contains. The first column shows "cytoBand", the second column shows the annotation results, and the other columns are reproduced from input file.

Next, the program downloads 1000 Genome Projects allele frequency annotations (users need to be patient again, as the file is large), and then identify a subset of variants in ex1.human that are not observed in 1000G version 2012April populations (saved in ex1.avinput.hg1g_ALL.sites.2012_04_filtered) and those that are observed with allele frequencies (saved in ex1.avinput.hg19_ALL.sites.2012_04_dropped file).

>>>Note: By default, ANNOVAR annotates variant on hg18 (human genome NCBI build 36) coordinate. Since the input file is in hg19 coordinate, we added "-buildver hg19" in every command above. Similarly, if you generated variant calls from human GRCh38 coordinate, add -buildver hg38' in every command, if your variant file is from fly, add "-buildver dm3" in every command that you use; if your variant file is from mouse, add "-buildver mm9" in every command that you use ......

The commands above represent a set of basic examples on how ANNOVAR can help researchers annoate genetic variants generated from high-throughput sequencing data.

## table_annovar

Below is an example on using the TABLE_ANNOVAR program, which takes an input variant file and generate an output annotation file with many columns, each representing one set of annotations. First, we need to download appropriate database files, and next we will run the table_annovar.pl program to annotate the variants in the `example/ex1_hg19.human` file.

```
[kaiwang@biocluster ~/]$ annotate_variation.pl -buildver hg19 -downdb -webfrom annovar refGene humandb/

[kaiwang@biocluster ~/]$ annotate_variation.pl -buildver hg19 -downdb genomicSuperDups humandb/ 

[kaiwang@biocluster ~/]$ annotate_variation.pl -buildver hg19 -downdb -webfrom annovar snp138 humandb/ 

[kaiwang@biocluster ~/]$ annotate_variation.pl -buildver hg19 -downdb -webfrom annovar ljb23_all humandb/

[kaiwang@biocluster ~/]$ annotate_variation.pl -buildver hg19 -downdb -webfrom annovar esp6500si_all humandb/

[kaiwang@biocluster ~/]$ table_annovar.pl example/ex1.avinput humandb/ -buildver hg19 -out myanno -remove -protocol refGene,cytoBand,genomicSuperDups,esp6500si_all,1000g2012apr_all,snp138,ljb23_all -operation g,r,r,f,f,f,f -nastring . -csvout
```

Run the above commands one by one. The first a few commands download appropriate databases into the humandb/ directory. The final command run TABLE_ANNOVAR, using dbSNP version 138, 1000 Genomes Project 2012 April version, NHLBI 6500 exome database (referred to as esp6400si), dbNFSP (referred to as ljb23) databases and remove all temporary files, and generates the output file: myanno.hg19_multianno.txt. Fields that does not have any annotation will be filled by "." string. Open the output file in Excel and see what it contains. The expected output file that I generated can be downloaded here: myanno.hg19_multianno.csv. A screen shot of the first a few columns is shown below:

![table_annovar](docs/img/table_annovar.PNG)

The output file contains multiple columns. The first a few columns are your input column. Each of the following columns corresponds on one of the "protocol" that user specified in the command line. For example, esp6500si_all means allele frequency in the ESP6500 database. The snp138 means the SNP identifier in the dbSNP version 138. The LJB23* columns contains prediction scores for non-synonymous variants using several widely used tools, including SIFT scores, PolyPhen2 HDIV scores, PolyPhen2 HVAR scores, LRT scores, MutationTaster scores, MutationAssessor score, FATHMM scores, GERP++ scores, PhyloP scores and SiPhy scores. The "-operation" argument tells ANNOVAR which operations to use for each of the protocols: g means gene-based, r means region-based and f means filter-based. You will find details on what are gene/region/filter-based annotations in the other web pages.

Some times, users want tab-delimited files rather than comma-delimited files. This can be easily done by removing -csvout argument to the above command.

As of July 2014, per user requests, TABLE_ANNOVAR can directly support input and output of VCF files (the annotation will be written to the INFO field of the output VCF file). Let's try this:

```
[kaiwang@biocluster ~/]$ table_annovar.pl example/ex2.vcf humandb/ -buildver hg19 -out myanno -remove -protocol refGene,cytoBand,genomicSuperDups,esp6500si_all,1000g2012apr_all,snp138,ljb23_all -operation g,r,r,f,f,f,f -nastring . -vcfinput
```

You can download the output file here: myanno.hg19_multianno.vcf. You can download the output file here. You can open the file in a text editor and check what has been changed in the file: the INFO field in the VCF file now contains annotations that you desired, starting with the string ANNOVAR_DATE and ending with the notation ALLELE_END. If multiple alleles are in the same locus, you will see multiple such notations in the INFO field. A screen shot is shown below:

![table_vcf](docs/img/table_vcf.PNG)

Hopefully, after you finish this set of exercises above, you now have a better idea what ANNOVAR is, and can start enjoy the journey of annotating your variants.

Of course ANNOVAR can do much more than what's shown in the example above, so if you are interested, click the banner to the left to learn the input formats and see what additional things ANNOVAR can do for your research...
