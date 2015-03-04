## Overview

An important and probably highly desirable feature is that ANNOVAR can help identify subsets of variants based on comparison to other variant databases, for example, variants annotated in dbSNP or variants annotated in 1000 Genome Project. The exact variant, with same start and end positions, and with same observed alleles, will be identified.

These functionalities mentioned above can be performed using the --filter operation in ANNOVAR. The major difference between --filter and --regionanno above is that that --filter operation works on mutations (nucleotide changes), but --regionanno operation works on chromosome locations. For example, --region compare variants with things like chr1:1000-1000, but --filter compare variants with things like A->G change at the position chr1:1000-1000.

## 1000 Genomes Project (2014 Oct) annotations

See general instructions below, but changing command line argument to 1000g2014oct. Note that ANNOVAR does provide 1000g2014sep and 1000g2014aug, but they are obselete now!

The 2014Oct data set contains alternative allele frequency data in 1000 Genomes Project for autosomes and sex chromosomes (ALL, AFR (African), AMR (Admixed American), EAS (East Asian), EUR (European), SAS (South Asian)). The data is based on 201409 collection v5 (based on 201305 alignment).

## 1000 Genomes Project (2012 April) annotations (obselete!)

This is the latest 1000G annotation that ANNOVAR supports. This is based on phase 1 release v3 called from 20101123 alignment, and the database is prepared using input compiled here), thanks to Mehdi Pirooznia @ Hopkins. The populations include ALL, AMR, AFR, ASN and EUR.

In addition, I also performed liftOver and provide these data sets in hg18 coordinate, to faciliate researchers working on hg18 coordinates.

To download the database, use following:

```
[kaiwang@biocluster ~/]$ annotate_variation.pl -downdb 1000g2012apr humandb -buildver hg19
NOTICE: Web-based checking to see whether ANNOVAR new version is available ... Done
NOTICE: Downloading annotation database http://www.openbioinformatics.org/annovar/download/hg19_ALL.sites.2012_04.txt.gz ... OK
NOTICE: Downloading annotation database http://www.openbioinformatics.org/annovar/download/hg19_ALL.sites.2012_04.txt.idx.gz ... OK
NOTICE: Downloading annotation database http://www.openbioinformatics.org/annovar/download/hg19_AMR.sites.2012_04.txt.gz ... OK
NOTICE: Downloading annotation database http://www.openbioinformatics.org/annovar/download/hg19_AMR.sites.2012_04.txt.idx.gz ... OK
NOTICE: Downloading annotation database http://www.openbioinformatics.org/annovar/download/hg19_AFR.sites.2012_04.txt.gz ... OK
NOTICE: Downloading annotation database http://www.openbioinformatics.org/annovar/download/hg19_AFR.sites.2012_04.txt.idx.gz ... OK
NOTICE: Downloading annotation database http://www.openbioinformatics.org/annovar/download/hg19_ASN.sites.2012_04.txt.gz ... OK
NOTICE: Downloading annotation database http://www.openbioinformatics.org/annovar/download/hg19_ASN.sites.2012_04.txt.idx.gz ... OK
NOTICE: Downloading annotation database http://www.openbioinformatics.org/annovar/download/hg19_EUR.sites.2012_04.txt.gz ... OK
NOTICE: Downloading annotation database http://www.openbioinformatics.org/annovar/download/hg19_EUR.sites.2012_04.txt.idx.gz ... OK
NOTICE: Uncompressing downloaded files
NOTICE: Finished downloading annotation files for hg19 build version, with files saved at the 'humandb' directory
```

To annotate a data set called ex1.avinput by the database and generate output file with name starting from ex1, use following:

```
[kaiwang@biocluster ~/]$ annotate_variation.pl -filter -dbtype 1000g2012apr_eur -buildver hg19 -out ex1 example/ex1.avinput humandb/
NOTICE: Variants matching filtering criteria are written to ex1.hg19_EUR.sites.2012_04_dropped, other variants are written to ex1.hg19_EUR.sites.2012_04_filtered
NOTICE: Processing next batch with 15 unique variants in 15 input lines
NOTICE: Database index loaded. Total number of bins is 2766067 and the number of bins to be scanned is 12
NOTICE: Scanning filter database humandb/hg19_EUR.sites.2012_04.txt...Done


[kaiwang@biocluster ~/]$ cat ex1.hg19_EUR.sites.2012_04_dropped
1000g2012apr_eur 0.04 1 1404001 1404001 G T comments: rs149123833, a SNP in 3' UTR of ATAD3C
1000g2012apr_eur 0.87 1 162736463 162736463 C T comments: rs1000050, a SNP in Illumina SNP arrays
1000g2012apr_eur 0.81 1 5935162 5935162 A T comments: rs1287637, a splice site variant in NPHP4
1000g2012apr_eur 0.06 1 67705958 67705958 G A comments: rs11209026 (R381Q), a SNP in IL23R associated with Crohn's disease
1000g2012apr_eur 0.54 1 84875173 84875173 C T comments: rs6576700 or SNP_A-1780419, a SNP in Affymetrix SNP arrays
1000g2012apr_eur 0.96 1 948921 948921 T C comments: rs15842, a SNP in 5' UTR of ISG15
1000g2012apr_eur 0.05 16 50745926 50745926 C T comments: rs2066844 (R702W), a non-synonymous SNP in NOD2
1000g2012apr_eur 0.01 16 50756540 50756540 G C comments: rs2066845 (G908R), a non-synonymous SNP in NOD2
1000g2012apr_eur 0.01 16 50763778 50763778 - C comments: rs2066847 (c.3016_3017insC), a frameshift SNP in NOD2
1000g2012apr_eur 0.53 2 234183368 234183368 A G comments: rs2241880 (T300A), a SNP in the ATG16L1 associated with Crohn's disease
```

The command above annotate the ex1.hg19.avinput file against 1000 Genomes Project 2012 April release on European subjects. Known variants will be written to the *dropped file together with allele frequencies. The variants without matching database entries will be written to the *filtered file.

It is possible to apply a MAF threshold to the filtering procedure:

```
[kaiwang@biocluster ~/]$ annotate_variation.pl -filter -dbtype 1000g2012apr_eur -buildver hg19 -out ex1 example/ex1.avinput humandb/ -maf 0.05
NOTICE: Variants matching filtering criteria are written to ex1.hg19_EUR.sites.2012_04_dropped, other variants are written to ex1.hg19_EUR.sites.2012_04_filtered
NOTICE: Processing next batch with 15 unique variants in 15 input lines
NOTICE: Database index loaded. Total number of bins is 2766067 and the number of bins to be scanned is 12
NOTICE: Scanning filter database humandb/hg19_EUR.sites.2012_04.txt...Done


[kaiwang@biocluster ~/]$ cat ex1.hg19_EUR.sites.2012_04_dropped
1000g2012apr_eur 0.87 1 162736463 162736463 C T comments: rs1000050, a SNP in Illumina SNP arrays
1000g2012apr_eur 0.81 1 5935162 5935162 A T comments: rs1287637, a splice site variant in NPHP4
1000g2012apr_eur 0.06 1 67705958 67705958 G A comments: rs11209026 (R381Q), a SNP in IL23R associated with Crohn's disease
1000g2012apr_eur 0.54 1 84875173 84875173 C T comments: rs6576700 or SNP_A-1780419, a SNP in Affymetrix SNP arrays
1000g2012apr_eur 0.05 16 50745926 50745926 C T comments: rs2066844 (R702W), a non-synonymous SNP in NOD2
1000g2012apr_eur 0.53 2 234183368 234183368 A G comments: rs2241880 (T300A), a SNP in the ATG16L1 associated with Crohn's disease
```

This means that only variants whose allele frequency is higher or equal to 0.05 are printed to the *dropped file.

You can also reverse this threshold:

```
[kaiwang@biocluster ~/]$ annotate_variation.pl -filter -dbtype 1000g2012apr_eur -buildver hg19 -out ex1 example/ex1.avinput humandb/ -maf 0.05 -reverse
NOTICE: Variants matching filtering criteria are written to ex1.hg19_EUR.sites.2012_04_dropped, other variants are written to ex1.hg19_EUR.sites.2012_04_filtered
NOTICE: Processing next batch with 15 unique variants in 15 input lines
NOTICE: Database index loaded. Total number of bins is 2766067 and the number of bins to be scanned is 12
NOTICE: Scanning filter database humandb/hg19_EUR.sites.2012_04.txt...Done


[kaiwang@biocluster ~/]$ cat ex1.hg19_EUR.sites.2012_04_dropped
1000g2012apr_eur 0.04 1 1404001 1404001 G T comments: rs149123833, a SNP in 3' UTR of ATAD3C
1000g2012apr_eur 0.96 1 948921 948921 T C comments: rs15842, a SNP in 5' UTR of ISG15
1000g2012apr_eur 0.05 16 50745926 50745926 C T comments: rs2066844 (R702W), a non-synonymous SNP in NOD2
1000g2012apr_eur 0.01 16 50756540 50756540 G C comments: rs2066845 (G908R), a non-synonymous SNP in NOD2
1000g2012apr_eur 0.01 16 50763778 50763778 - C comments: rs2066847 (c.3016_3017insC), a frameshift SNP in NOD2
```

In this case, only rare variants that are observed in 1000G will be printed out to the \*dropped file. Note that since -maf is used, a SNP with alternative allele frequency of 0.96 will also be printed, as its MAF is 0.04. To only check on alternative allele frequency, rather than MAF, you can use score_threshold:

```
[kaiwang@biocluster ~/]$ annotate_variation.pl -filter -dbtype 1000g2012apr_eur -buildver hg19 -out ex1 example/ex1.avinput humandb/ -score_threshold 0.05 -reverse
NOTICE: Variants matching filtering criteria are written to ex1.hg19_EUR.sites.2012_04_dropped, other variants are written to ex1.hg19_EUR.sites.2012_04_filtered
NOTICE: Processing next batch with 15 unique variants in 15 input lines
NOTICE: Database index loaded. Total number of bins is 2766067 and the number of bins to be scanned is 15
NOTICE: Scanning filter database humandb/hg19_EUR.sites.2012_04.txt...Done

[kaiwang@biocluster ~/]$ cat ex1.hg19_EUR.sites.2012_04_dropped
1000g2012apr_eur 0.04 1 1404001 1404001 G T comments: rs149123833, a SNP in 3' UTR of ATAD3C
1000g2012apr_eur 0.05 16 50745926 50745926 C T comments: rs2066844 (R702W), a non-synonymous SNP in NOD2
1000g2012apr_eur 0.01 16 50756540 50756540 G C comments: rs2066845 (G908R), a non-synonymous SNP in NOD2
1000g2012apr_eur 0.01 16 50763778 50763778 - C comments: rs2066847 (c.3016_3017insC), a frameshift SNP in NOD2
```

Similarly, to switch to other ethnicity groups, use 1000g2012apr_asn, 1000g2012apr_afr, 1000g2012apr_amr or 1000g2012apr_all as the database type. Let's try an example to see if the same sets of variants are observed in asians:

```
[kaiwang@biocluster ~/]$ annotate_variation.pl -filter -dbtype 1000g2012apr_asn -buildver hg19 -out ex1 example/ex1.avinput humandb/
NOTICE: Variants matching filtering criteria are written to ex1.hg19_ASN.sites.2012_04_dropped, other variants are written to ex1.hg19_ASN.sites.2012_04_filtered
NOTICE: Processing next batch with 15 unique variants in 15 input lines
NOTICE: Database index loaded. Total number of bins is 2743052 and the number of bins to be scanned is 12
NOTICE: Scanning filter database humandb/hg19_ASN.sites.2012_04.txt...Done


[kaiwang@biocluster ~/]$ cat ex1.hg19_ASN.sites.2012_04_dropped
1000g2012apr_asn 0.13 1 1404001 1404001 G T comments: rs149123833, a SNP in 3' UTR of ATAD3C
1000g2012apr_asn 0.58 1 162736463 162736463 C T comments: rs1000050, a SNP in Illumina SNP arrays
1000g2012apr_asn 0.83 1 5935162 5935162 A T comments: rs1287637, a splice site variant in NPHP4
1000g2012apr_asn 0.60 1 84875173 84875173 C T comments: rs6576700 or SNP_A-1780419, a SNP in Affymetrix SNP arrays
1000g2012apr_asn 1.00 1 948921 948921 T C comments: rs15842, a SNP in 5' UTR of ISG15
1000g2012apr_asn 0.33 2 234183368 234183368 A G comments: rs2241880 (T300A), a SNP in the ATG16L1 associated with Crohn's disease
```

You'll see that the R381Q in IL23R and R702W in NOD2 (both SNPs are pretty famous) are not found in Asians from the 1000 Genomes Project.

 

## 1000 Genomes Project (2009 release) annotations (obselete)

This section is now obselete and kept here only for historical reasons . Please use the 2012apr dataset instead.

ANNOVAR can annotate variants based on annotated allele frequency in CEU populations used in the 1000 Genome project. This analysis requires downloading the annotation files from the 1000Genome project website (the command is "annotate_variation.pl -downdb 1000g humandb/") The current version of program download the 2009 April annotations.

```
[kai@biocluster ~/]$ annotate_variation.pl -filter -dbtype 1000g_ceu ex1.human humandb/
NOTICE: The --buildver is set as 'hg18' by default
NOTICE: Variants matching filtering criteria are written to ex1.human.hg18_1000g_ceu_dropped, other variants are written to ex1.human.hg18_1000g_ceu_filtered
NOTICE: Processing next batch with 12 variants
NOTICE: Scanning filter database humandb/hg18_CEU.sites.2009_04.txt...Done
```

The ex1.human file contains a few common SNPs that were annotated in the 1000G project on CEU populations. The output file ex1.human.hg18_1000g_ceu_filtered contains a list of SNPs not reported in 1000G_CEU. The output file ex1.human.hg18_1000g_ceu_dropped contains the list of SNPs that are reported and their non-reference allele frequencies (as the second column below):

```
[kai@biocluster ~/]$ cat ex1.human.hg18_1000g_ceu_dropped
1000g_ceu 0.017544 1 67478546 67478546 G A comments: rs11209026 (R381Q), a SNP in IL23R associated with Crohn's disease
1000g_ceu 0.482456 1 84647761 84647761 C T comments: rs6576700 or SNP_A-1780419, a SNP in Affymetrix SNP arrays
1000g_ceu 0.877193 1 161003087 161003087 C T comments: rs1000050, a SNP in Illumina SNP arrays
```

Similarly, change 1000g_ceu to 1000g_yri and 1000g_jptchb can be used to check the allele frequencies in YRI and JPT/CHB populations.

In general, these commands are highly efficient, requiring several minutes to scan 4 million input genetic variants. Additionally, users may use settings such as "-chr 1-9" and "-chr 10-22,X" to run ANNOVAR in selected chromosomes only to further speed up searchers, if knowing that input variants are in specific chromosomes only.

## 1000 Genomes Project (2010 March/July/November and 2011 release) annotations (obselete)

This section is now obselete and kept here only for historical reasons. Please use the 2012apr dataset instead.

The procedure above was originally developed for the April 2009 release of 1000G. In March 2010, a new release of 1000G data is available, so the new keyword "1000g2010" must be used, if the users want to use the new 1000G data for the annotation. Similarly, the new keyword "1000g2010jul" and "1000g2010nov" must be used to handle additional releases. The 2010 November release is no longer a pilot release, but a full project release in hg19 coordinate.

```
[kai@biocluster ~/]$ annotate_variation.pl -downdb 1000g2010 humandb/

[kai@biocluster ~/]$ annotate_variation.pl -filter -dbtype 1000g2010_ceu ex1.hg18.avinput -out ex1 humandb/
NOTICE: The --buildver is set as 'hg18' by default
NOTICE: Variants matching filtering criteria are written to ex1.hg18_1000g2010_ceu_dropped, other variants are written to ex1.hg18_1000g2010_ceu_filtered
NOTICE: Processing next batch with 12 variants
NOTICE: Scanning filter database humandb/hg18_CEU.sites.2010_03.txt...Done
```

The results are below:

```
[kai@biocluster ~/]$ cat ex1.hg18_1000g2010_ceu_dropped
1000g2010_ceu 0.508 1 84647761 84647761 C T comments: rs6576700 or SNP_A-1780419, a SNP in Affymetrix SNP arrays
1000g2010_ceu 0.883 1 161003087 161003087 C T comments: rs1000050, a SNP in Illumina SNP arrays
1000g2010_ceu 0.508 2 233848107 233848107 A G comments: rs2241880 (T300A), a SNP in the ATG16L1 associated with Crohn's disease
1000g2010_ceu 0.083 16 49303427 49303427 C T comments: rs2066844 (R702W), a non-synonymous SNP in NOD2
```

We will note that this result slightly differ from those generated on the 2009 release of 1000G data. This is because the 2009 and 2010 release used different genotype calling algorithms, potentially resulting in false negative calls in both sets. Users should be aware of these differences.

Also note that as far as I can tell, 1000G 2010 March release does not provide chromosome X or chromosome Y calls for SNPs. They do provide chromosome X calls for indels. This should be kept in mind when using ANNOVAR for annotation. The 2010 July and Nov release does contain sex chromosome calls.

Technical notes: Most casual ANNOVAR users can safely ignore these notes. If you want to know in detail how ANNOVAR works, read below. 

Some users may wonder how exactly ANNOVAR handles the different variant call sets in the 1000 Genomes Project. In March 2010 release of 1000 Genomes Project Pilot data, a SNP call file and an indel call file are provided for each of the three HapMap populations. The SNP call file contains consensus calls from 3 groups: a SNP is called only if at least 2 out of 3 groups call it. The indel call file contains many indel calls and it is generated by "Dindel on MAQ Illumina only BAMs ... using candidate indel set". The vast majority of indels (>90%) are annotated with QC-flags, so I decided to take only the most confident set of indels (that is, indels without any QC flags), and then generate a new "sites" file that contains both SNPs and indels. This is what users will get when "-downdb 1000g2010" is used in ANNOVAR (for example, hg18_CEU.sites.2010_03.txt, etc.). Unlike the 2009 release of 1000G data, these files are not downloaded from 1000G directly but from ANNOVAR website. 

The counts of SNPs and indels in March 2010 release in each of the HapMap populations are given below:

CEU: SNPs=7,725,713 indels=751,528 total=8,477,241
YRI: SNPs=10,556,876 indels=978,444 total=11,535,320 
JPTCHB: SNPs= 6,109,233 indels=687,884 total=6,797,117

In comparison, the counts of SNPs in Aprial 2009 release in each of the HapMap populations are given below:

CEU: SNPs=9,633,115
YRI: SNPs=13,759,844 
JPTCHB: SNPs=10,970,708 

So it appears that 2010 release contains fewer number of SNPs compared to the 2009 release, though it provides indel calls. 

The next natural question is how much overlap there is between the 2009 release and the 2010 release. This can be done easily by ANNOVAR. Just make an ANNOVAR input file using 2009 release data, and then scan the 2010 release using the -filter operation in ANNOVAR (command line is "annotate_variation.pl -filter -dbtype 1000g2010_ceu inputfile humandb/"). It takes just 4 minutes in my computer for CEU population, while adding "-batchsize 20m" argument further improves the speed. 

CEU: overlapping SNPs= 6,145,332
YRI: overlapping SNPs=9,155,523
JPTCHB: overlapping SNPs=5,393,065

So the overlap with 2009 release is around 80%-90% for SNPs in the 1000G 2010 release, for each of the three populations. 
1000 Genomes Pilot Proejct continuously to put out updates to their variant calls. The keyword 1000g2010jul was added in July 2010 to handle the new version of data:

```
[kaiwang@biocluster ~/]$ annotate_variation.pl -filter -dbtype 1000g2010jul_ceu ex1.hg18.avinput -out ex1 ~/project/annotate_variation/humandb/

[kaiwang@biocluster ~/]$ cat ex1.hg18_CEU.sites.2010_07_dropped
1000g2010jul_ceu 0.508 1 84647761 84647761 C T comments: rs6576700 or SNP_A-1780419, a SNP in Affymetrix SNP arrays
1000g2010jul_ceu 0.883 1 161003087 161003087 C T comments: rs1000050, a SNP in Illumina SNP arrays
1000g2010jul_ceu 0.508 2 233848107 233848107 A G comments: rs2241880 (T300A), a SNP in the ATG16L1 associated with Crohn's disease
1000g2010jul_ceu 0.083 16 49303427 49303427 C T comments: rs2066844 (R702W), a non-synonymous SNP in NOD2
```

Comparing the 2010 July and 2010 March release, we can see that one additional SNP has been detected in the July release.

Similarly, the non-pilot project also released variant calls in their website (in hg19 coordinate), and users need to use 1000g2010nov to handle the new data, with the '-buildver hg19' argument as well. The 2010Nov data does not separate CEU/YRI/ASN populations though, as they are based on all 1000G populations.

The dbtype should include "all" as suffix as the database are for all subjects without specific popualtion identifiers.

```
[kaiwang@biocluster ~/]$ annotate_variation.pl -filter inputfile humandb/ -dbtype 1000g2010nov_all -buildver hg19

[kaiwang@biocluster ~/]$ annotate_variation.pl -filter inputfile humandb/ -dbtype 1000g2011may_all -buildver hg19 
```

Technical notes: ANNOVAR has the ability to handle VCF file directly. Therefore, you do not need to rely on the datasets that I compile, you can just directly interrogate 1000G data. For example, using 2010 March release of 1000G data

```
[kai@biocluster ~/]$ annotate_variation.pl -filter -dbtype vcf -vcfdbfile hg18_CEU.SRP000031.2010_03.sites.vcf.txt ex1.human humandb/

[kai@biocluster ~/]$ cat ex1.human.hg18_vcf_dropped
vcf 0.508333333333333 1 84647761 84647761 C T comments: rs6576700 or SNP_A-1780419, a SNP in Affymetrix SNP arrays
vcf 0.883333333333333 1 161003087 161003087 C T comments: rs1000050, a SNP in Illumina SNP arrays
vcf 0.0833333333333333 16 49303427 49303427 C T comments: rs2066844 (R702W), a non-synonymous SNP in NOD2 
```

You can do the same thing for 2011 May release of 1000G data:

```
[kaiwang@biocluster ~/]$ annotate_variation.pl inputfile ./ -vcfdbfile ALL.wgs.phase1.projectConsensus.snps.sites.vcf -filter -dbtype vcf
```

So there is no real need to wait for me to update the latest 1000G data in ANNOVAR. Any user can just run ANNOVAR on VCF file downloaded from 1000G yourself.

By default, allele frequency is used as second column in output. But you can use -infoasscore to use the INFO field in VCF file as printed score in output.

 

## dbSNP annotations

ANNOVAR can identify the variant that are already reported in dbSNP and also identify the corresponding rs identifiers. This can be a filtering step, similar to what used in the exome sequening paper to exclude non-pathogenic SNPs in Miller syndrome.

To speed up dbSNP annotation, ANNOVAR provides pre-built indexed files in its database repository. Use "-webfrom annovar" in the command to download these files for use in annotation procedure. Only a few specific versions of dbSNP have been made available, so check download page for these specific versions.

```
[kaiwang@biocluster ~/]$ annotate_variation.pl -downdb -buildver hg19 -webfrom annovar snp138 humandb
NOTICE: Web-based checking to see whether ANNOVAR new version is available ... Done
NOTICE: Downloading annotation database http://www.openbioinformatics.org/annovar/download/hg19_snp138.txt.gz ... OK
NOTICE: Downloading annotation database http://www.openbioinformatics.org/annovar/download/hg19_snp138.txt.idx.gz ... OK
NOTICE: Uncompressing downloaded files
NOTICE: Finished downloading annotation files for hg18 build version, with files saved at the 'humandb' directory

[kaiwang@biocluster ~/]$ annotate_variation.pl -filter -out ex1 -build hg19 -dbtype snp138 example/ex1.avinput humandb/
NOTICE: Variants matching filtering criteria are written to ex1.hg19_snp138_dropped, other variants are written to ex1.hg19_snp138_filtered
NOTICE: Processing next batch with 15 unique variants in 15 input lines
NOTICE: Database index loaded. Total number of bins is 2858459 and the number of bins to be scanned is 12
NOTICE: Scanning filter database humandb/hg19_snp138.txt...Done


[kaiwang@biocluster ~/]$ cat ex1.hg19_snp138_dropped
snp138 rs35561142 1 11403596 11403596 - AT comments: rs35561142, a 2-bp insertion
snp138 rs149123833 1 1404001 1404001 G T comments: rs149123833, a SNP in 3' UTR of ATAD3C
snp138 rs1000050 1 162736463 162736463 C T comments: rs1000050, a SNP in Illumina SNP arrays
snp138 rs1287637 1 5935162 5935162 A T comments: rs1287637, a splice site variant in NPHP4
snp138 rs11209026 1 67705958 67705958 G A comments: rs11209026 (R381Q), a SNP in IL23R associated with Crohn's disease
snp138 rs6576700 1 84875173 84875173 C T comments: rs6576700 or SNP_A-1780419, a SNP in Affymetrix SNP arrays
snp138 rs15842 1 948921 948921 T C comments: rs15842, a SNP in 5' UTR of ISG15
snp138 rs80338939 13 20763686 20763686 G - comments: rs1801002 (del35G), a frameshift mutation in GJB2, associated with hearing loss
snp138 rs2066844 16 50745926 50745926 C T comments: rs2066844 (R702W), a non-synonymous SNP in NOD2
snp138 rs2066845 16 50756540 50756540 G C comments: rs2066845 (G908R), a non-synonymous SNP in NOD2
snp138 rs2066847 16 50763778 50763778 - C comments: rs2066847 (c.3016_3017insC), a frameshift SNP in NOD2
snp138 rs2241880 2 234183368 234183368 A G comments: rs2241880 (T300A), a SNP in the ATG16L1 associated with Crohn's disease
```

Two output files are generated. The ex1.hg19_snp138_filtered file contains SNPs not in dbSNP. The ex1.human.hg18_snp130_dropped file contains variants that are annotated in dbSNP, and print out their rs identifiers (as the second column)

NOTE: dbSNP 129 is generally regarded as the last "clean" dbSNP without "contamination" from 1000 Genomes Project and other large-scale next-generation sequencing projects.

NOTE: Per user request, I now make a dbSNP 129 in hg19 coordinate, so that users can actually use it to benchmark their variant calling algorithms, given that dbSNP 129 does not contain the "contaminations" from variants calls from next-generation sequencing.

Advanced Notes: Since January 2011, per users' request, ANNOVAR now handles tri-allelic or quad-allelic SNPs. For example, rs12931472 can have four alleles (A, C, G, T) with wildtype as A, so any non-A mutation will be filtered by ANNOVAR, and rs12931472 will be printed out during filtering. In previous versions of ANNOVAR, only di-allelic SNPs are handled.

Advanced Notes: These annotations may be assigned to "SNPs" in dbSNP: 'unknown','single','in-del','het','microsatellite','named','mixed','mnp','insertion','deletion'. ANNOVAR will only care about 'single', 'deletion', 'in-del', 'insertion' and ignore others. 'single' SNP accounts for the vast majority of dbSNP entries.

In 2012, sevearl additional "NonFlagged" dbSNP database are provided by me. Basically, these are dbSNP files subtracting Flagged dbSNP entries. Flagged SNPs include SNPs < 1% minor allele frequency (MAF) (or unknown), mapping only once to reference assembly, flagged in dbSnp as "clinically associated". Some users have reported that some SNPs are still flagged as "clinically associated" in the NonFlagged set; this is because these SNPs are not found in the Flagged set from UCSC, possibly because they are more recently associated with diseases so are not recorded in Flagged database yet.

The command line for downloading database and annotation is almost identical to regular dbSNP database. For example, to download the database:

```
[kaiwang@biocluster ~/]$ annotate_variation.pl -downdb -buildver hg19 -webfrom annovar snp135NonFlagged humandb
NOTICE: Web-based checking to see whether ANNOVAR new version is available ... Done
NOTICE: Downloading annotation database http://www.openbioinformatics.org/annovar/download/hg19_snp135NonFlagged.txt.gz ... OK
NOTICE: Downloading annotation database http://www.openbioinformatics.org/annovar/download/hg19_snp135NonFlagged.txt.idx.gz ... OK
NOTICE: Uncompressing downloaded files
NOTICE: Finished downloading annotation files for hg19 build version, with files saved at the 'humandb' directory
```

To give users an idea of the size of the various dbSNP databases prepared by me (first column represents number of variants). It is amazing that the number increased from 13.6 million in dbSNP129 to 63.3 million in dbSNP138 in just a few years!

13602827 hg19_snp129NonFlagged.txt
13610296 hg19_snp129.txt
18396965 hg19_snp130NonFlagged.txt
18404149 hg19_snp130.txt
25301548 hg19_snp131NonFlagged.txt
25312455 hg19_snp131.txt
32249106 hg19_snp132NonFlagged.txt
32267005 hg19_snp132.txt
53473344 hg19_snp135NonFlagged.txt
53502122 hg19_snp135.txt
55415160 hg19_snp137NonFlagged.txt
55449842 hg19_snp137.txt
63224151 hg19_snp138NonFlagged.txt
63289767 hg19_snp138.txt

The dbSNP entries does not include allele frequency measure, so users should exercise caution when using dbSNP as a filtering step to identify causal variants for Mendelian diseases, as some dbSNP entries may well be related to disease susceptibility.


IMPORTANT NOTE: the dbSNP commonSNP track from UCSC is extremely incomplete and users really should not use it for annotation under any circumstance. Use the 1000g2012apr database or better the popfreq_all database provided in ANNOVAR for this purpose instead. 
 

## LJB23 (LJB version 2.3) non-synonymous variants annotation

Starting from June 2013, LJB2 databases are made alive to ANNOVAR users. These include SIFT scores, PolyPhen2 HDIV scores, PolyPhen2 HVAR scores, LRT scores, MutationTaster scores, MutationAssessor score, FATHMM scores, GERP++ scores, PhyloP scores and SiPhy scores. These scores were retrieved from the dbNSFP and big thanks to the authors (Liu, Jian, Boerwinkle), hence the name ljb.

In February 2014, I updated the database to version 2.3, so the new keyword ljb23 is used. There are several differences: (1) additional scores based on latest gene models are added into the version 2.3 file, compared to version 2 file (2) we added two new scores developed in our labs, called MetaSVM and MetaLR scores (4) the version 2.3 scores include raw/original scores, as well as converted scores (normalized to 0-1 range with higher scores indicating more deleterious variants) and categorical predictions. Previous versions of the database lead to a lot of confusion and adds my support burden significantly and I hope that the version will be much easier to understand and use and that I get less support emails.

The keyword used for downloading these data include: ljb23_sift, ljb23_pp2hdiv, ljb23_pp2hvar, ljb23_lrt, ljb23_mt, ljb23_ma, ljb23_fathmm, ljb23_metasvm, ljb23_metalr, ljb23_gerp++, ljb23_phylop, ljb23_siphy, ljb23_all. The ljb23_all includes ALL scores, and it is very useful in table_annovar.pl.

Detailed information for all the LJB23 databases are given below:

Score (dbtype)	# variants in LJB23 build hg19	Categorical Prediction
SIFT (sift)	77593284	D: Deleterious (sift<=0.05); T: tolerated (sift>0.05)
PolyPhen 2 HDIV (pp2_hdiv)	72533732	D: Probably damaging (>=0.957), P: possibly damaging (0.453<=pp2_hdiv<=0.956); B: benign (pp2_hdiv<=0.452)
PolyPhen 2 HVar (pp2_hvar)	72533732	D: Probably damaging (>=0.909), P: possibly damaging (0.447<=pp2_hdiv<=0.909); B: benign (pp2_hdiv<=0.446)
LRT (lrt)	68069321	D: Deleterious; N: Neutral; U: Unknown
MutationTaster (mt)	88473874	A" ("disease_causing_automatic"); "D" ("disease_causing"); "N" ("polymorphism"); "P" ("polymorphism_automatic"
MutationAssessor (ma)	74631375	H: high; M: medium; L: low; N: neutral. H/M means functional and L/N means non-functional
FATHMM (fathmm)	70274896	D: Deleterious; T: Tolerated
MetaSVM (metasvm)	82098217	D: Deleterious; T: Tolerated
MetaLR (metalr)	82098217	D: Deleterious; T: Tolerated
GERP++ (gerp++)	89076718	higher scores are more deleterious
PhyloP (phylop)	89553090	higher scores are more deleterious
SiPhy (siphy)	88269630	higher scores are more deleterious
 

Some examples were given below:

LJB23_SIFT annotation

EXTREMELY IMPORTANT!!!!!! in first version of dbNSFP (ljb_sift), the scores were calculated as 1-SIFT. In the updated version 2 (ljb2_sift), the scores were now the SIFT score itself. In version 2.3, the default scores are also the SIFT score itself, but you can optionally print out the "converted score" which is 1-SIFT, and the categorical prediction. This mean a variant with score\<0.05 is predicted as deleterious.

In the example below, two missense variants were predicted as deleterious based on SIFT scores (\<0.05). The command should take merely a few seconds.

```
[kaiwang@biocluster ~/]$ annotate_variation.pl -filter -dbtype ljb23_sift -buildver hg19 -out ex1 example/ex1.avinput humandb/
NOTICE: the --dbtype ljb23_sift is assumed to be in generic ANNOVAR database format
NOTICE: Variants matching filtering criteria are written to ex1.hg19_ljb23_sift_dropped, other variants are written to ex1.hg19_ljb23_sift_filtered
NOTICE: Processing next batch with 15 unique variants in 15 input lines
NOTICE: Database index loaded. Total number of bins is 187938 and the number of bins to be scanned is 7
NOTICE: Scanning filter database humandb/hg19_ljb23_sift.txt...Done

[kaiwang@biocluster ~/]$ cat ex1.hg19_ljb23_sift_dropped
ljb23_sift 0.1 1 67705958 67705958 G A comments: rs11209026 (R381Q), a SNP in IL23R associated with Crohn's disease
ljb23_sift 0.01 16 50745926 50745926 C T comments: rs2066844 (R702W), a non-synonymous SNP in NOD2
ljb23_sift 0.02 16 50756540 50756540 G C comments: rs2066845 (G908R), a non-synonymous SNP in NOD2
ljb23_sift 0.57 2 234183368 234183368 A G comments: rs2241880 (T300A), a SNP in the ATG16L1 associated with Crohn's disease
```

To show the categorical predictions in the output file, add the -otherinfo argument:

```
[kaiwang@biocluster ~/project/annotate_variation]$ annotate_variation.pl -filter -dbtype ljb23_sift -buildver hg19 -out ex1 example/ex1.avinput humandb/ -otherinfo
NOTICE: the --dbtype ljb23_sift is assumed to be in generic ANNOVAR database format
NOTICE: Variants matching filtering criteria are written to ex1.hg19_ljb23_sift_dropped, other variants are written to ex1.hg19_ljb23_sift_filtered
NOTICE: Processing next batch with 15 unique variants in 15 input lines
NOTICE: Database index loaded. Total number of bins is 187938 and the number of bins to be scanned is 7
NOTICE: Scanning filter database humandb/hg19_ljb23_sift.txt...Done

[kaiwang@biocluster ~/project/annotate_variation]$ cat ex1.hg19_ljb23_sift_dropped
ljb23_sift 0.1,0.90,T 1 67705958 67705958 G A comments: rs11209026 (R381Q), a SNP in IL23R associated with Crohn's disease
ljb23_sift 0.01,0.99,D 16 50745926 50745926 C T comments: rs2066844 (R702W), a non-synonymous SNP in NOD2
ljb23_sift 0.02,0.98,D 16 50756540 50756540 G C comments: rs2066845 (G908R), a non-synonymous SNP in NOD2
ljb23_sift 0.57,0.43,T 2 234183368 234183368 A G comments: rs2241880 (T300A), a SNP in the ATG16L1 associated with Crohn's disease
```

The three comma-separated numbers are raw score, converted score and categorical prediction, respectively. It is clear that the second and third variants are predicted as deleterious.

## PolyPhen 2 annotation

There are two databases for PolyPhen2: HVAR and HDIV. They are explained below:

ljb2_pp2hvar should be used for diagnostics of Mendelian diseases, which requires distinguishing mutations with drastic effects from all the remaining human variation, including abundant mildly deleterious alleles.The authors recommend calling "probably damaging" if the score is between 0.909 and 1, and "possibly damaging" if the score is between 0.447 and 0.908, and "benign" is the score is between 0 and 0.446.

ljb2_pp2hdiv should be used when evaluating rare alleles at loci potentially involved in complex phenotypes, dense mapping of regions identified by genome-wide association studies, and analysis of natural selection from sequence data. The authors recommend calling "probably damaging" if the score is between 0.957 and 1, and "possibly damaging" if the score is between 0.453 and 0.956, and "benign" is the score is between 0 and 0.452.

An example is given below:

```
[kaiwang@biocluster ~/project/annotate_variation]$ annotate_variation.pl -filter -dbtype ljb23_pp2hvar -buildver hg19 -out ex1 example/ex1.avinput humandb/
NOTICE: the --dbtype ljb23_pp2hvar is assumed to be in generic ANNOVAR database format
NOTICE: Variants matching filtering criteria are written to ex1.hg19_ljb23_pp2hvar_dropped, other variants are written to ex1.hg19_ljb23_pp2hvar_filtered
NOTICE: Processing next batch with 15 unique variants in 15 input lines
NOTICE: Database index loaded. Total number of bins is 184437 and the number of bins to be scanned is 7
NOTICE: Scanning filter database humandb/hg19_ljb23_pp2hvar.txt...Done

[kaiwang@biocluster ~/project/annotate_variation]$ cat ex1.hg19_ljb23_pp2hvar_dropped
ljb23_pp2hvar 0.999 1 67705958 67705958 G A comments: rs11209026 (R381Q), a SNP in IL23R associated with Crohn's disease
ljb23_pp2hvar 0.901 16 50745926 50745926 C T comments: rs2066844 (R702W), a non-synonymous SNP in NOD2
ljb23_pp2hvar 0.986 16 50756540 50756540 G C comments: rs2066845 (G908R), a non-synonymous SNP in NOD2
ljb23_pp2hvar 0.005 2 234183368 234183368 A G comments: rs2241880 (T300A), a SNP in the ATG16L1 associated with Crohn's disease
```

As you can see, two of the four missense variants were predicted to have scores higher than 0.909, one has score higher than 0.447.

If you want to have the "probably damaging", "possibly damaging" and "benign" calls, you can add the -otherinfo argument:

```
[kaiwang@biocluster ~/project/annotate_variation]$ annotate_variation.pl -filter -dbtype ljb23_pp2hvar -buildver hg19 -out ex1 example/ex1.avinput humandb/ -otherinfo
NOTICE: the --dbtype ljb23_pp2hvar is assumed to be in generic ANNOVAR database format
NOTICE: Variants matching filtering criteria are written to ex1.hg19_ljb23_pp2hvar_dropped, other variants are written to ex1.hg19_ljb23_pp2hvar_filtered
NOTICE: Processing next batch with 15 unique variants in 15 input lines
NOTICE: Database index loaded. Total number of bins is 184437 and the number of bins to be scanned is 7
NOTICE: Scanning filter database humandb/hg19_ljb23_pp2hvar.txt...Done

[kaiwang@biocluster ~/project/annotate_variation]$ cat ex1.hg19_ljb23_pp2hvar_dropped
ljb23_pp2hvar 0.999,D 1 67705958 67705958 G A comments: rs11209026 (R381Q), a SNP in IL23R associated with Crohn's disease
ljb23_pp2hvar 0.901,P 16 50745926 50745926 C T comments: rs2066844 (R702W), a non-synonymous SNP in NOD2
ljb23_pp2hvar 0.986,D 16 50756540 50756540 G C comments: rs2066845 (G908R), a non-synonymous SNP in NOD2
ljb23_pp2hvar 0.005,B 2 234183368 234183368 A G comments: rs2241880 (T300A), a SNP in the ATG16L1 associated with Crohn's disease
```

In the output, the scores and predictions are separated by comma. There are three possible predictions: "D" ("porobably damaging"), "P" ("possibly damaging") and "B" ("benign").

Technical comments: The original LJB23 database provided by original authors may contain multiple annotations for each mutation. For example, the chr1:67705958G>A mutation has two separate records, one showing E>K amino acid substitution, and the other showing R>Q amino acid substitution. The former does not have any functional scores associated, so in my compilation, only the latter will enter into the database. Next, in the LJB2 database, even for R>Q substution, it can have multiple scores such as "1.0;1.0;1.0;1.0;0.993;1.0;1.0;1.0;0.999" and multiple predictions such as "D;D;D;D;D;D;D;D;D", probably due to multiple transcriptional isoforms. In this case, only the largest score (1 is the largest score among multiple isoforms), as well as its associated D/P/B annotation, will be used in ANNOVAR database.

 

## MutationTaster annotation

This is very similar to SIFT and PolyPhen. One example is shown below.

```
[kaiwang@biocluster ~/project/annotate_variation]$ annotate_variation.pl -filter -dbtype ljb23_mt -buildver hg19 -out ex1 example/ex1.avinput humandb/ -otherinfo
NOTICE: the --dbtype ljb23_mt is assumed to be in generic ANNOVAR database format
NOTICE: Variants matching filtering criteria are written to ex1.hg19_ljb23_mt_dropped, other variants are written to ex1.hg19_ljb23_mt_filtered
NOTICE: Processing next batch with 15 unique variants in 15 input lines
NOTICE: Database index loaded. Total number of bins is 193192 and the number of bins to be scanned is 7
NOTICE: Scanning filter database humandb/hg19_ljb23_mt.txt...Done

[kaiwang@biocluster ~/project/annotate_variation]$ cat ex1.hg19_ljb23_mt_dropped
ljb23_mt 0.559,0.559,D 1 67705958 67705958 G A comments: rs11209026 (R381Q), a SNP in IL23R associated with Crohn's disease
ljb23_mt 1.000,0.000,N 16 50745926 50745926 C T comments: rs2066844 (R702W), a non-synonymous SNP in NOD2
ljb23_mt 1.000,1.000,D 16 50756540 50756540 G C comments: rs2066845 (G908R), a non-synonymous SNP in NOD2
ljb23_mt 0.001,0.999,P 2 234183368 234183368 A G comments: rs2241880 (T300A), a SNP in the ATG16L1 associated with Crohn's disease
```

In the output, the raw scores, converted scores and predictions are separated by comma. There are four possible predictions: "A" ("disease_causing_automatic"), "D" ("disease_causing"), "N" ("polymorphism") or "P" ("polymorphism_automatic").

## MutationAssessor annotation

Again very similar to SIFT and Polyphen. one example is given below:

```
[kaiwang@biocluster ~/project/annotate_variation]$ annotate_variation.pl -filter -dbtype ljb23_ma -buildver hg19 -out ex1 example/ex1.avinput humandb/ -otherinfo
NOTICE: the --dbtype ljb23_ma is assumed to be in generic ANNOVAR database format
NOTICE: Variants matching filtering criteria are written to ex1.hg19_ljb23_ma_dropped, other variants are written to ex1.hg19_ljb23_ma_filtered
NOTICE: Processing next batch with 15 unique variants in 15 input lines
NOTICE: Database index loaded. Total number of bins is 179275 and the number of bins to be scanned is 7
NOTICE: Scanning filter database humandb/hg19_ljb23_ma.txt...Done

[kaiwang@biocluster ~/project/annotate_variation]$ cat ex1.hg19_ljb23_ma_dropped
ljb23_ma 1.935,0.649,M 1 67705958 67705958 G A comments: rs11209026 (R381Q), a SNP in IL23R associated with Crohn's disease
ljb23_ma 2.32,0.683,M 16 50745926 50745926 C T comments: rs2066844 (R702W), a non-synonymous SNP in NOD2
ljb23_ma 1.79,0.637,L 16 50756540 50756540 G C comments: rs2066845 (G908R), a non-synonymous SNP in NOD2
ljb23_ma -0.255,0.459,N 2 234183368 234183368 A G comments: rs2241880 (T300A), a SNP in the ATG16L1 associated with Crohn's disease
```

Due to the use of -otherinfo argument, in the output, the scores and predictions are separated by comma. There are two possible predictions: predicted functional (H, M), predicted non-functional (L, N). Note that in ljb2, these are denoted as high/medium/low/neutral.

## LRT annotation

Again very similar to SIFT and Polyphen. one example is given below:

```
[kaiwang@biocluster ~/project/annotate_variation]$ annotate_variation.pl -filter -dbtype ljb23_lrt -buildver hg19 -out ex1 example/ex1.avinput humandb/ -otherinfo
NOTICE: the --dbtype ljb23_lrt is assumed to be in generic ANNOVAR database format
NOTICE: Variants matching filtering criteria are written to ex1.hg19_ljb23_lrt_dropped, other variants are written to ex1.hg19_ljb23_lrt_filtered
NOTICE: Processing next batch with 15 unique variants in 15 input lines
NOTICE: Database index loaded. Total number of bins is 168542 and the number of bins to be scanned is 7
NOTICE: Scanning filter database humandb/hg19_ljb23_lrt.txt...Done

[kaiwang@biocluster ~/project/annotate_variation]$ cat ex1.hg19_ljb23_lrt_dropped
ljb23_lrt 0.000,1.000,D 1 67705958 67705958 G A comments: rs11209026 (R381Q), a SNP in IL23R associated with Crohn's disease
ljb23_lrt 0.993,0.503,N 16 50745926 50745926 C T comments: rs2066844 (R702W), a non-synonymous SNP in NOD2
ljb23_lrt 0.000,1.000,D 16 50756540 50756540 G C comments: rs2066845 (G908R), a non-synonymous SNP in NOD2
ljb23_lrt 0.070,0.035,N 2 234183368 234183368 A G comments: rs2241880 (T300A), a SNP in the ATG16L1 associated with Crohn's disease
```

Due to the use of -otherinfo argument, in the output, the scores and predictions are separated by comma. There are three possible predictions: D(eleterious), N(eutral) or U(nknown).

## FATHMM annotation

Again very similar to SIFT and Polyphen. one example is given below:

```
[kaiwang@biocluster ~/project/annotate_variation]$ annotate_variation.pl -filter -dbtype ljb23_fathmm -buildver hg19 -out ex1 example/ex1.avinput humandb/ -otherinfo
NOTICE: the --dbtype ljb23_fathmm is assumed to be in generic ANNOVAR database format
NOTICE: Variants matching filtering criteria are written to ex1.hg19_ljb23_fathmm_dropped, other variants are written to ex1.hg19_ljb23_fathmm_filtered
NOTICE: Processing next batch with 15 unique variants in 15 input lines
NOTICE: Database index loaded. Total number of bins is 178425 and the number of bins to be scanned is 7
NOTICE: Scanning filter database humandb/hg19_ljb23_fathmm.txt...Done

[kaiwang@biocluster ~/project/annotate_variation]$ cat ex1.hg19_ljb23_fathmm_dropped
ljb23_fathmm 0.31,0.386,T 1 67705958 67705958 G A comments: rs11209026 (R381Q), a SNP in IL23R associated with Crohn's disease
ljb23_fathmm -0.62,0.421,T 16 50745926 50745926 C T comments: rs2066844 (R702W), a non-synonymous SNP in NOD2
ljb23_fathmm 0.57,0.376,T 16 50756540 50756540 G C comments: rs2066845 (G908R), a non-synonymous SNP in NOD2
ljb23_fathmm 0.81,0.367,T 2 234183368 234183368 A G comments: rs2241880 (T300A), a SNP in the ATG16L1 associated with Crohn's disease
```

If a score is smaller than -1.5 the corresponding NS is predicted as "D(AMAGING)"; otherwise it is predicted as "T(OLERATED)". All the four missense variants were predicted as tolerated by FATHMM. The method is less well known compared to SIFT and PolyPhen, but in our experience it works really well and better than SIFT/PolyPhen.

## MetaSVM annotation

MetaSVM is developed by Coco Dong at my lab in collaboration with Dr. Xiaoming Liu. It is composed of two steps: (1) perform imputation for whole-exome variants and fill out missing scores for SIFT, PolyPhen, MutationAssessor and so on. (2) Normalize all scores to 0-1 range (3) use a radial SVM model to train prediction model using all available scores and some population genetics parameters, and then apply the model on whole-exome variants. We used very high quality training data set for training the model, hence improving the performance of other algorithms.

It has clear advantage over other competing approaches such as SIFT/PolyPhen/CADD/Condel: (1) better performance (2) less missing values than SIFT/PolyPhen/Condel.

In a benchmarking study using manually compiled data set (basically variants published in Nature Genetics in 2011 as true positive), including 244 variants with half being disease causal, our method achieves best performance, compared to all other methods in ljb2 database (SIFT/PolyPhen/MutationTaster/MutationAssessor/LRT/FATHMM), as well as Condel/CADD/KGGSeq/MutPred/SNPGO/SNAP/PhDSNP/PANTHER/PONP. Click the image below to see details.

## ROC comparisonROC comparison

In another benchmarking study using the VariBench data, but excluding cancer mutations and then excluding all mutations reported in UniProt, totalling ~20,000 variants with 1/3 being disease causal, our method also achieves best performance compared to all other methods in ljb2.

ROC comparison

 

An example to use the MetaSVM method is given below:

```
[kaiwang@biocluster ~/project/annotate_variation]$ annotate_variation.pl -filter -dbtype ljb23_metasvm -buildver hg19 -out ex1 example/ex1.avinput humandb/ -otherinfo
NOTICE: the --dbtype ljb23_metasvm is assumed to be in generic ANNOVAR database format
NOTICE: Variants matching filtering criteria are written to ex1.hg19_ljb23_metasvm_dropped, other variants are written to ex1.hg19_ljb23_metasvm_filtered
NOTICE: Processing next batch with 15 unique variants in 15 input lines
NOTICE: Database index loaded. Total number of bins is 194687 and the number of bins to be scanned is 7
NOTICE: Scanning filter database humandb/hg19_ljb23_metasvm.txt...Done

[kaiwang@biocluster ~/project/annotate_variation]$ cat ex1.hg19_ljb23_metasvm_dropped
ljb23_metasvm -0.599,0.351,T 1 67705958 67705958 G A comments: rs11209026 (R381Q), a SNP in IL23R associated with Crohn's disease
ljb23_metasvm -0.855,0.287,T 16 50745926 50745926 C T comments: rs2066844 (R702W), a non-synonymous SNP in NOD2
ljb23_metasvm -0.696,0.327,T 16 50756540 50756540 G C comments: rs2066845 (G908R), a non-synonymous SNP in NOD2
ljb23_metasvm -1.007,0.249,T 2 234183368 234183368 A G comments: rs2241880 (T300A), a SNP in the ATG16L1 associated with Crohn's disease
```

Similarly, the comma-delimited fields are raw score, converted score (0-1 range, higher score denoting more deleterious variants) and predictions. All the missense variants were predicted as tolerated. Note that the model building used variants that are known to cause Mendelian diseases so the method is specifically designed to work for Mendelian diseases but not complex diseases. These variants all lead to increased susceptibility to NOD2 with odds ratio\<2, so they are not predicted as deleterious by MetaSVM.

## MetaLR annotation

Very similar to MetaSVM with similar performance. However, the model is far more interpretable.

```
[kaiwang@biocluster ~/project/annotate_variation]$ annotate_variation.pl -filter -dbtype ljb23_metalr -buildver hg19 -out ex1 example/ex1.avinput humandb/ -otherinfo
NOTICE: the --dbtype ljb23_metalr is assumed to be in generic ANNOVAR database format
NOTICE: Variants matching filtering criteria are written to ex1.hg19_ljb23_metalr_dropped, other variants are written to ex1.hg19_ljb23_metalr_filtered
NOTICE: Processing next batch with 15 unique variants in 15 input lines
NOTICE: Database index loaded. Total number of bins is 194687 and the number of bins to be scanned is 7
NOTICE: Scanning filter database humandb/hg19_ljb23_metalr.txt...Done

[kaiwang@biocluster ~/project/annotate_variation]$ cat ex1.hg19_ljb23_metalr_dropped
ljb23_metalr 0.275,T 1 67705958 67705958 G A comments: rs11209026 (R381Q), a SNP in IL23R associated with Crohn's disease
ljb23_metalr 0.138,T 16 50745926 50745926 C T comments: rs2066844 (R702W), a non-synonymous SNP in NOD2
ljb23_metalr 0.138,T 16 50756540 50756540 G C comments: rs2066845 (G908R), a non-synonymous SNP in NOD2
ljb23_metalr 0.000,T 2 234183368 234183368 A G comments: rs2241880 (T300A), a SNP in the ATG16L1 associated with Crohn's disease
```

Only two comma-delimited fields are shown here, indicating raw score (0-1 range) and binary prediction. All variants were predicted as tolerated.

 

## GERP++ annotation

The ljb23_gerp++ contains only annotation for coding variants!!! If you want to annotate non-coding variants with GERP++ scores as well, read the section below.

Generally the higher the score, the more conserved the site.

```
[kaiwang@biocluster ~/project/annotate_variation]$ annotate_variation.pl -filter -dbtype ljb23_gerp++ -buildver hg19 -out ex1 example/ex1.avinput humandb/ -otherinfo
NOTICE: the --dbtype ljb23_gerp++ is assumed to be in generic ANNOVAR database format
NOTICE: Variants matching filtering criteria are written to ex1.hg19_ljb23_gerp++_dropped, other variants are written to ex1.hg19_ljb23_gerp++_filtered
NOTICE: Processing next batch with 15 unique variants in 15 input lines
NOTICE: Database index loaded. Total number of bins is 194631 and the number of bins to be scanned is 7
NOTICE: Scanning filter database humandb/hg19_ljb23_gerp++.txt...Done

[kaiwang@biocluster ~/project/annotate_variation]$ cat ex1.hg19_ljb23_gerp++_dropped
ljb23_gerp++ 4.93 1 5935162 5935162 A T comments: rs1287637, a splice site variant in NPHP4
ljb23_gerp++ 5.19 1 67705958 67705958 G A comments: rs11209026 (R381Q), a SNP in IL23R associated with Crohn's disease
ljb23_gerp++ 3.66 16 50745926 50745926 C T comments: rs2066844 (R702W), a non-synonymous SNP in NOD2
ljb23_gerp++ 5.91 16 50756540 50756540 G C comments: rs2066845 (G908R), a non-synonymous SNP in NOD2
ljb23_gerp++ -11.4 2 234183368 234183368 A G comments: rs2241880 (T300A), a SNP in the ATG16L1 associated with Crohn's disease
```

The first three missense variants were predicted to be highly conserved and hence more likely to be functionally important.

 

## PhyloP and SiPhy annotation

Both are similar to GERP++ and these three can be considered as competitors of each other (just like SIFT and PolyPhen are competitors of each other).

PhyloP score is based on multiple alignments of 46 genomes. Similarly, SiPhy score is based on 29 mammals genomes. The larger the score, the more conserved the site.

```
[kaiwang@biocluster ~/project/annotate_variation]$ annotate_variation.pl -filter -dbtype ljb23_phylop -buildver hg19 -out ex1 example/ex1.avinput humandb/ -otherinfo
NOTICE: the --dbtype ljb23_phylop is assumed to be in generic ANNOVAR database format
NOTICE: Variants matching filtering criteria are written to ex1.hg19_ljb23_phylop_dropped, other variants are written to ex1.hg19_ljb23_phylop_filtered
NOTICE: Processing next batch with 15 unique variants in 15 input lines
NOTICE: Database index loaded. Total number of bins is 195369 and the number of bins to be scanned is 7
NOTICE: Scanning filter database humandb/hg19_ljb23_phylop.txt...Done

[kaiwang@biocluster ~/project/annotate_variation]$ cat ex1.hg19_ljb23_phylop_dropped
ljb23_phylop 0.745 1 5935162 5935162 A T comments: rs1287637, a splice site variant in NPHP4
ljb23_phylop 2.865 1 67705958 67705958 G A comments: rs11209026 (R381Q), a SNP in IL23R associated with Crohn's disease
ljb23_phylop 1.421 16 50745926 50745926 C T comments: rs2066844 (R702W), a non-synonymous SNP in NOD2
ljb23_phylop 2.813 16 50756540 50756540 G C comments: rs2066845 (G908R), a non-synonymous SNP in NOD2
ljb23_phylop -1.999 2 234183368 234183368 A G comments: rs2241880 (T300A), a SNP in the ATG16L1 associated with Crohn's disease

[kaiwang@biocluster ~/project/annotate_variation]$ annotate_variation.pl -filter -dbtype ljb23_siphy -buildver hg19 -out ex1 example/ex1.avinput humandb/ -otherinfo 
NOTICE: the --dbtype ljb23_siphy is assumed to be in generic ANNOVAR database format
NOTICE: Variants matching filtering criteria are written to ex1.hg19_ljb23_siphy_dropped, other variants are written to ex1.hg19_ljb23_siphy_filtered
NOTICE: Processing next batch with 15 unique variants in 15 input lines
NOTICE: Database index loaded. Total number of bins is 192540 and the number of bins to be scanned is 7
NOTICE: Scanning filter database humandb/hg19_ljb23_siphy.txt...Done

[kaiwang@biocluster ~/project/annotate_variation]$ cat ex1.hg19_ljb23_siphy_dropped
ljb23_siphy 6.573 1 5935162 5935162 A T comments: rs1287637, a splice site variant in NPHP4
ljb23_siphy 14.412 1 67705958 67705958 G A comments: rs11209026 (R381Q), a SNP in IL23R associated with Crohn's disease
ljb23_siphy 6.914 16 50745926 50745926 C T comments: rs2066844 (R702W), a non-synonymous SNP in NOD2
ljb23_siphy 15.796 16 50756540 50756540 G C comments: rs2066845 (G908R), a non-synonymous SNP in NOD2
ljb23_siphy 12.660 2 234183368 234183368 A G comments: rs2241880 (T300A), a SNP in the ATG16L1 associated with Crohn's disease
```

As you can see, SiPhy differs from GERP++ and PhyloP, and predicted that the last variant is also highly conserved. Therefore, even conceptually similar tools may sometimes generate drastically different results. It is a good idea to use several techniques when doing funcitonal annotations of missense variants.

Notes: it is important for users to note that (1) these types of "conservation scores" only considers conservation level at the current base, and they do not care about the actual nucleotide identity so synonymous and non-synonymous variants at the same site will be scored as the same (2) these scores are not designed specifically for finding causal variants for Mendelian diseases, but for finding functionally important sites, so variants that confer increased susceptibility may be scored well.

## ljb23_all

You can also just print out all scores for given variants using ljb23, by adding -otherinfo argument to the -filter annotation.

The columns are LJB23_SIFT_score LJB23_SIFT_score_converted LJB23_SIFT_pred LJB23_Polyphen2_HDIV_score LJB23_Polyphen2_HDIV_pred LJB23_Polyphen2_HVAR_score LJB23_Polyphen2_HVAR_pred LJB23_LRT_score LJB23_LRT_score_converted LJB23_LRT_pred LJB23_MutationTaster_score LJB23_MutationTaster_score_converted LJB23_MutationTaster_pred LJB23_MutationAssessor_score LJB23_MutationAssessor_score_converted LJB23_MutationAssessor_pred LJB23_FATHMM_score LJB23_FATHMM_score_converted LJB23_FATHMM_pred LJB23_RadialSVM_score LJB23_RadialSVM_score_converted LJB23_RadialSVM_pred LJB23_LR_score LJB23_LR_pred LJB23_GERP++ LJB23_PhyloP LJB23_SiPhy.

ESP (exome sequencing project) annotations

The ESP is a NHLBI funded exome sequencing project aiming to identify genetic variants in exonic regions from over 6000 individuals, including healthy ones as well as subjects with different diseases. The variant call data set is constantly being updated. ANNOVAR provide the allele frequency data so that users can evaluate if their variants have been previously observed in large population cohorts. As the size of the database is more than 1000 Genomes Project and the fold coverage is far higher, this data set will be particularly useful for users with exome sequencing data sets. As of October 2012, esp5400 and esp6500 are available, respresnting summary statistics from 5400 exoms and 6500 exomes, respectively. As of Feburary 2013, the most recent version of ESP is esp6500si, so whenever possible, users should use this database for annotation. Compared to esp6500, the esp6500si contains more calls, and indel calls and chrY calls.

The following commands download ESP6500si database for all ethnicity groups, then scan the ex1.hg19.avinput file against the database to find SNPs observed in ESP6500si:

```
[kaiwang@biocluster ~/]$ annotate_variation.pl -downdb -webfrom annovar -build hg19 esp6500si_all humandb/


[kaiwang@biocluster ~/]$ annotate_variation.pl -filter -dbtype esp6500si_all -build hg19 -out ex1 example/ex1.avinput humandb/ 
NOTICE: the --dbtype esp6500si_all is assumed to be in generic ANNOVAR database format
NOTICE: Variants matching filtering criteria are written to ex1.hg19_esp6500si_all_dropped, other variants are written to ex1.hg19_esp6500si_all_filtered
NOTICE: Processing next batch with 15 unique variants in 15 input lines
NOTICE: Database index loaded. Total number of bins is 191802 and the number of bins to be scanned is 8
NOTICE: Scanning filter database humandb/hg19_esp6500si_all.txt...Done


[kaiwang@biocluster ~/]$ cat ex1.hg19_esp6500si_all_dropped
esp6500si_all 0.027945 1 1404001 1404001 G T comments: rs149123833, a SNP in 3' UTR of ATAD3C
esp6500si_all 0.843133 1 5935162 5935162 A T comments: rs1287637, a splice site variant in NPHP4
esp6500si_all 0.046909 1 67705958 67705958 G A comments: rs11209026 (R381Q), a SNP in IL23R associated with Crohn's disease
esp6500si_all 0.885787 1 948921 948921 T C comments: rs15842, a SNP in 5' UTR of ISG15
esp6500si_all 0.007428 13 20763686 20763686 G - comments: rs1801002 (del35G), a frameshift mutation in GJB2, associated with hearing loss
esp6500si_all 0.031558 16 50745926 50745926 C T comments: rs2066844 (R702W), a non-synonymous SNP in NOD2
esp6500si_all 0.010157 16 50756540 50756540 G C comments: rs2066845 (G908R), a non-synonymous SNP in NOD2
esp6500si_all 0.016214 16 50763778 50763778 - C comments: rs2066847 (c.3016_3017insC), a frameshift SNP in NOD2
esp6500si_all 0.456251 2 234183368 234183368 A G comments: rs2241880 (T300A), a SNP in the ATG16L1 associated with Crohn's disease
```

To change to EA (European American) or AA (African American), just change the database name:

```
[kaiwang@biocluster ~/]$ annotate_variation.pl -downdb -webfrom annovar esp6500si_ea humandb/


[kaiwang@biocluster ~/]$ annotate_variation.pl -filter -dbtype esp6500si_ea -build hg19 -out ex1 example/ex1.avinput humandb/ 
NOTICE: the --dbtype esp6500si_ea is assumed to be in generic ANNOVAR database format
NOTICE: Variants matching filtering criteria are written to ex1.hg19_esp6500si_ea_dropped, other variants are written to ex1.hg19_esp6500si_ea_filtered
NOTICE: Processing next batch with 12 unique variants in 12 input lines
NOTICE: Database index loaded. Total number of bins is 186024 and the number of bins to be scanned is 8
NOTICE: Scanning filter database humandb/hg19_esp6500si_ea.txt...Done


[kaiwang@biocluster ~/]$ cat ex1.hg19_esp6500si_ea_dropped
esp6500si_ea 0.029095 1 1404001 1404001 G T comments: rs149123833, a SNP in 3' UTR of ATAD3C
esp6500si_ea 0.817231 1 5935162 5935162 A T comments: rs1287637, a splice site variant in NPHP4
esp6500si_ea 0.063736 1 67705958 67705958 G A comments: rs11209026 (R381Q), a SNP in IL23R associated with Crohn's disease
esp6500si_ea 0.956385 1 948921 948921 T C comments: rs15842, a SNP in 5' UTR of ISG15
esp6500si_ea 0.010783 13 20763686 20763686 G - comments: rs1801002 (del35G), a frameshift mutation in GJB2, associated with hearing loss
esp6500si_ea 0.043488 16 50745926 50745926 C T comments: rs2066844 (R702W), a non-synonymous SNP in NOD2
esp6500si_ea 0.014535 16 50756540 50756540 G C comments: rs2066845 (G908R), a non-synonymous SNP in NOD2
esp6500si_ea 0.022171 16 50763778 50763778 - C comments: rs2066847 (c.3016_3017insC), a frameshift SNP in NOD2
esp6500si_ea 0.523953 2 234183368 234183368 A G comments: rs2241880 (T300A), a SNP in the ATG16L1 associated with Crohn's disease
```

The same six variants are found in esp6500si_all and esp6500si_ea database, but with different allele frequencies.

It is possible to use an allele frequency threshold. Unfortunately, the "maf_threshold" argument is reserved for 1000G data set only. The "score_threshold" argument can be used for all other databases. This is due to historical reasons.

```
[kaiwang@biocluster ~/]$ annotate_variation.pl -filter -dbtype esp6500si_ea -build hg19 -out ex1 example/ex1.avinput humandb/ -score_threshold 0.05
NOTICE: the --dbtype esp6500si_ea is assumed to be in generic ANNOVAR database format
NOTICE: Variants matching filtering criteria are written to ex1.hg19_esp6500si_ea_dropped, other variants are written to ex1.hg19_esp6500si_ea_filtered
NOTICE: Processing next batch with 12 unique variants in 12 input lines
NOTICE: Database index loaded. Total number of bins is 186024 and the number of bins to be scanned is 8
NOTICE: Scanning filter database humandb/hg19_esp6500si_ea.txt...Done


[kaiwang@biocluster ~/]$ cat ex1.hg19_esp6500si_ea_dropped
esp6500si_ea 0.817231 1 5935162 5935162 A T comments: rs1287637, a splice site variant in NPHP4
esp6500si_ea 0.063736 1 67705958 67705958 G A comments: rs11209026 (R381Q), a SNP in IL23R associated with Crohn's disease
esp6500si_ea 0.956385 1 948921 948921 T C comments: rs15842, a SNP in 5' UTR of ISG15
esp6500si_ea 0.523953 2 234183368 234183368 A G comments: rs2241880 (T300A), a SNP in the ATG16L1 associated with Crohn's disease

Compared to the results above, the two SNPs with MAF<0.05 are no longer in the *dropped file. It is also possible to apply a -reverse argument:

[kaiwang@biocluster ~/]$ annotate_variation.pl -filter -dbtype esp6500si_ea -build hg19 -out ex1 example/ex1.avinput humandb/ -score_threshold 0.05 -reverse
NOTICE: the --dbtype esp6500si_ea is assumed to be in generic ANNOVAR database format
NOTICE: Variants matching filtering criteria are written to ex1.hg19_esp6500si_ea_dropped, other variants are written to ex1.hg19_esp6500si_ea_filtered
NOTICE: Processing next batch with 12 unique variants in 12 input lines
NOTICE: Database index loaded. Total number of bins is 186024 and the number of bins to be scanned is 8
NOTICE: Scanning filter database humandb/hg19_esp6500si_ea.txt...Done


[kaiwang@biocluster ~/]$ cat ex1.hg19_esp6500si_ea_dropped
esp6500si_ea 0.029095 1 1404001 1404001 G T comments: rs149123833, a SNP in 3' UTR of ATAD3C
esp6500si_ea 0.010783 13 20763686 20763686 G - comments: rs1801002 (del35G), a frameshift mutation in GJB2, associated with hearing loss
esp6500si_ea 0.043488 16 50745926 50745926 C T comments: rs2066844 (R702W), a non-synonymous SNP in NOD2
esp6500si_ea 0.014535 16 50756540 50756540 G C comments: rs2066845 (G908R), a non-synonymous SNP in NOD2
esp6500si_ea 0.022171 16 50763778 50763778 - C comments: rs2066847 (c.3016_3017insC), a frameshift SNP in NOD2
```

Now, only rare SNPs that are observed in esp6500si_ea are printed to the *dropped file.

 

## GERP++ annotations

GERP identifies constrained elements in multiple alignments by quantifying substitution deficits (see http://mendel.stanford.edu/SidowLab/downloads/gerp/ for details). I made annotation databases for all mutations with GERP++>2 in human genome, as this threshold is typically regarded as evolutioanrily conserved and potentially functional. Anything less than 2 is not informative, which helps reduce file size substantially.

The database (in hg19 or hg18 coordinate) needs to be downloaded first. Note that this is actually a large file (around 36GB) so it may take a while to download and decompress.

```
[kaiwang@biocluster ~/]$ annotate_variation.pl -downdb -buildver hg19 -webfrom annovar gerp++gt2 humandb/
NOTICE: Web-based checking to see whether ANNOVAR new version is available ... Done
NOTICE: Downloading annotation database http://www.openbioinformatics.org/annovar/download/hg19_gerp++gt2.txt.gz ... OK
NOTICE: Downloading annotation database http://www.openbioinformatics.org/annovar/download/hg19_gerp++gt2.txt.idx.gz ... OK
NOTICE: Uncompressing downloaded files
NOTICE: Finished downloading annotation files for hg19 build version, with files saved at the 'humandb' directory
```

Next to annotate an input variant file:

```
[kaiwang@biocluster ~/]$ annotate_variation.pl -filter -dbtype gerp++gt2 -out ex1 -build hg19 example/ex1.avinput humandb/
NOTICE: the --dbtype gerp++gt2 is assumed to be in generic ANNOVAR database format
NOTICE: Variants matching filtering criteria are written to ex1.hg19_gerp++gt2_dropped, other variants are written to ex1.hg19_gerp++gt2_filtered
NOTICE: Processing next batch with 15 unique variants in 15 input lines
NOTICE: Database index loaded. Total number of bins is 1978403 and the number of bins to be scanned is 11
NOTICE: Scanning filter database humandb/hg19_gerp++gt2.txt...Done
```

Despite the large database size, it should take merely seconds to finish the annotation due to the use of indexing features. The conserved variants will be printed to the *dropped file (with the GERP++ scores), yet the other variants will be in the *filtered file.

```
[kaiwang@biocluster ~/]$ cat ex1.hg19_gerp++gt2_dropped
gerp++gt2 2.08 1 162736463 162736463 C T comments: rs1000050, a SNP in Illumina SNP arrays
gerp++gt2 4.93 1 5935162 5935162 A T comments: rs1287637, a splice site variant in NPHP4
gerp++gt2 5.19 1 67705958 67705958 G A comments: rs11209026 (R381Q), a SNP in IL23R associated with Crohn's disease
gerp++gt2 3.66 16 50745926 50745926 C T comments: rs2066844 (R702W), a non-synonymous SNP in NOD2
gerp++gt2 5.91 16 50756540 50756540 G C comments: rs2066845 (G908R), a non-synonymous SNP in NOD2
```

One thing that is very important to note is that, since this is a filter operation, the program only looks to exact matches of SNPs. So if your input contains indels, it will not be in *dropped file.

In general, analyzing GERP++ scores for exome sequencing data should still be pretty fast, but it will be considerably slower for whole-genome seuqencing data due to the way ANNOVAR indexing is implemented.

For example, analyzing a file with 30726 variants from an exome sequencing study, it took two and half minutes by ANNOVAR (see below) in my computer. But it would have taken over 20 minutes for tabix in the same computer in my own benchmarking study (not to mention that you would still need to process tabix results file to find the exact matches of nucleotide since tabix operates on region and does not check nucleotide identity).

```
[kaiwang@biocluster ~/]$ time annotate_variation.pl 84060.avinput humandb/ -dbtype gerp++gt2 -build hg19 -filter
NOTICE: the --dbtype gerp++gt2 is assumed to be in generic ANNOVAR database format
NOTICE: Variants matching filtering criteria are written to 84060.avinput.hg19_gerp++gt2_dropped, other variants are written to 84060.avinput.hg19_gerp++gt2_filtered
NOTICE: Processing next batch with 30726 unique variants in 30726 input lines
NOTICE: Database index loaded. Total number of bins is 1978403 and the number of bins to be scanned is 24095
NOTICE: Scanning filter database humandb/hg19_gerp++gt2.txt...Done

real 3m4.598s
user 2m33.670s
sys 0m2.736s
```
 

 

## CG (complete genomics) frequency annotations

Each technical platform, such as Complete Genomics and Illumina HiSeq, may generate some platform specific sequencing artifacts. Complete genomics provides whole-genome data for a relatively small group of healthy subjects, but this data set can be quite useful to filter out technical artifacts for CG users. Currently, cg46 and cg69 are provided in ANNOVAR, representing allele frequency data from 46 unrelated subjects and 69 related subjects (including the 46 unrelated subjects), respectivly. Remember that 46 subjects have only 92 autosomes, so even if a mutation is observed once, it will still have MAF>1% in this data set!

```
[kaiwang@biocluster ~/]$ annotate_variation.pl -downdb -webfrom annovar -build hg19 cg46 humandb/


[kaiwang@biocluster ~/]$ annotate_variation.pl -filter -out ex1 -dbtype cg46 -build hg19 example/ex1.avinput humandb/
NOTICE: the --dbtype cg46 is assumed to be in generic ANNOVAR database format
NOTICE: Variants matching filtering criteria are written to ex1.hg19_cg46_dropped, other variants are written to ex1.hg19_cg46_filtered
NOTICE: Processing next batch with 12 unique variants in 12 input lines
NOTICE: Database index loaded. Total number of bins is 2783303 and the number of bins to be scanned is 12
NOTICE: Scanning filter database humandb/hg19_cg46.txt...Done


[kaiwang@biocluster ~/]$ cat ex1.hg19_cg46_dropped
cg46 0.011 1 13211293 13211294 TC - comments: rs59770105, a 2-bp deletion
cg46 0.620 1 162736463 162736463 C T comments: rs1000050, a SNP in Illumina SNP arrays
cg46 0.620 1 5935162 5935162 A T comments: rs1287637, a splice site variant in NPHP4
cg46 0.043 1 67705958 67705958 G A comments: rs11209026 (R381Q), a SNP in IL23R associated with Crohn's disease
cg46 0.511 1 84875173 84875173 C T comments: rs6576700 or SNP_A-1780419, a SNP in Affymetrix SNP arrays
cg46 0.793 1 948921 948921 T C comments: rs15842, a SNP in 5' UTR of ISG15
cg46 0.022 16 50745926 50745926 C T comments: rs2066844 (R702W), a non-synonymous SNP in NOD2
cg46 0.304 2 234183368 234183368 A G comments: rs2241880 (T300A), a SNP in the ATG16L1 associated with Crohn's disease
```
 

The commands above first download the "cg46" database to the humandb/ directory, then scan the ex1.avinput file against the database. Variants that are found in cg46, as well as their allele frequencies, are written to the *dropped file:

As you can see, the rs59770105 SNP occured only once in the cg46 database, with allele frequency of 0.011. If you compare the results with the esp6500_ea results, you will see that more SNPs can be identified from cg46 (which is not surprising as cg46 is for whole-genome variants), but the allele frequency measure in esp6500_ea may be more accurate given the larger number of samples from that database.

We can set up a MAF threshold of 0.05, so that only very common SNPs are dropped. We also add -out argument to specify output file name prefix:

```
[kaiwang@biocluster ~/]$ annotate_variation.pl -filter -dbtype cg46 -build hg19 example/ex1.avinput humandb/ -score_threshold 0.05 -out ex1
NOTICE: the --dbtype cg46 is assumed to be in generic ANNOVAR database format
NOTICE: Variants matching filtering criteria are written to ex1.hg19_cg46_dropped, other variants are written to ex1.hg19_cg46_filtered
NOTICE: Processing next batch with 15 unique variants in 15 input lines
NOTICE: Database index loaded. Total number of bins is 2783303 and the number of bins to be scanned is 12
NOTICE: Scanning filter database humandb/hg19_cg46.txt...Done


[kaiwang@biocluster ~/]$ cat ex1.hg19_cg46_dropped
cg46 0.620 1 162736463 162736463 C T comments: rs1000050, a SNP in Illumina SNP arrays
cg46 0.620 1 5935162 5935162 A T comments: rs1287637, a splice site variant in NPHP4
cg46 0.511 1 84875173 84875173 C T comments: rs6576700 or SNP_A-1780419, a SNP in Affymetrix SNP arrays
cg46 0.793 1 948921 948921 T C comments: rs15842, a SNP in 5' UTR of ISG15
cg46 0.304 2 234183368 234183368 A G comments: rs2241880 (T300A), a SNP in the ATG16L1 associated with Crohn's disease
```
 

## Population frequency ensembl annotations

Many users complain that there are too many allele frequency files and that they are too confusing to use, and they just want one single file that have all the available information. I created this file in February 2014 called popfreq_all to solve this problem. This database integrates the following information: PopFreqMax 1000G2012APR_ALL 1000G2012APR_AFR 1000G2012APR_AMR 1000G2012APR_ASN 1000G2012APR_EUR ESP6500si_ALL ESP6500si_AA ESP6500si_EA CG46.

```
[kaiwang@biocluster ~/]$ annotate_variation.pl example/ex1.avinput humandb/ -filter -dbtype popfreq_all -buildver hg19 -out ex1
NOTICE: the --dbtype popfreq_all is assumed to be in generic ANNOVAR database format
NOTICE: Variants matching filtering criteria are written to ex1.hg19_popfreq_all_dropped, other variants are written to ex1.hg19_popfreq_all_filtered
NOTICE: Processing next batch with 15 unique variants in 15 input lines
NOTICE: Database index loaded. Total number of bins is 2816654 and the number of bins to be scanned is 12
NOTICE: Scanning filter database humandb/hg19_popfreq_all.txt...Done


[kaiwang@biocluster ~/]$ cat ex1.hg19_popfreq_all_dropped
popfreq_all 0.011 1 13211293 13211294 TC - comments: rs59770105, a 2-bp deletion
popfreq_all 0.13 1 1404001 1404001 G T comments: rs149123833, a SNP in 3' UTR of ATAD3C
popfreq_all 0.87 1 162736463 162736463 C T comments: rs1000050, a SNP in Illumina SNP arrays
popfreq_all 0.89 1 5935162 5935162 A T comments: rs1287637, a splice site variant in NPHP4
popfreq_all 0.064 1 67705958 67705958 G A comments: rs11209026 (R381Q), a SNP in IL23R associated with Crohn's disease
popfreq_all 0.6 1 84875173 84875173 C T comments: rs6576700 or SNP_A-1780419, a SNP in Affymetrix SNP arrays
popfreq_all 1. 1 948921 948921 T C comments: rs15842, a SNP in 5' UTR of ISG15
popfreq_all 0.011 13 20763686 20763686 G - comments: rs1801002 (del35G), a frameshift mutation in GJB2, associated with hearing loss
popfreq_all 0.05 16 50745926 50745926 C T comments: rs2066844 (R702W), a non-synonymous SNP in NOD2
popfreq_all 0.03 16 50756540 50756540 G C comments: rs2066845 (G908R), a non-synonymous SNP in NOD2
popfreq_all 0.022 16 50763778 50763778 - C comments: rs2066847 (c.3016_3017insC), a frameshift SNP in NOD2
popfreq_all 0.53 2 234183368 234183368 A G comments: rs2241880 (T300A), a SNP in the ATG16L1 associated with Crohn's disease
```

The above command search the ex1.avinput file against the database. In the output file, the first column is database name, while the second column is the maximum allele frequency observed in many databases.

If you want the complete set of information, just add the -otherinfo argument.

```
[kaiwang@biocluster ~/]$ annotate_variation.pl example/ex1.avinput humandb/ -filter -dbtype popfreq_all -buildver hg19 -out ex1 -otherinfo
NOTICE: the --dbtype popfreq_all is assumed to be in generic ANNOVAR database format
NOTICE: Variants matching filtering criteria are written to ex1.hg19_popfreq_all_dropped, other variants are written to ex1.hg19_popfreq_all_filtered
NOTICE: Processing next batch with 15 unique variants in 15 input lines
NOTICE: Database index loaded. Total number of bins is 2816654 and the number of bins to be scanned is 12
NOTICE: Scanning filter database humandb/hg19_popfreq_all.txt...Done


[kaiwang@biocluster ~/]$ cat ex1.hg19_popfreq_all_dropped
popfreq_all 0.011,.,.,.,.,.,.,.,.,0.011 1 13211293 13211294 TC - comments: rs59770105, a 2-bp deletion
popfreq_all 0.13,0.08,0.07,0.09,0.13,0.04,0.028,0.025,0.029,. 1 1404001 1404001 G T comments: rs149123833, a SNP in 3' UTR of ATAD3C
popfreq_all 0.87,0.65,0.39,0.68,0.58,0.87,.,.,.,0.62 1 162736463 162736463 C T comments: rs1000050, a SNP in Illumina SNP arrays
popfreq_all 0.89,0.83,0.88,0.81,0.83,0.81,0.84,0.89,0.82,0.62 1 5935162 5935162 A T comments: rs1287637, a splice site variant in NPHP4
popfreq_all 0.064,0.03,0.01,0.06,.,0.06,0.047,0.014,0.064,0.043 1 67705958 67705958 G A comments: rs11209026 (R381Q), a SNP in IL23R associated with Crohn's disease
popfreq_all 0.6,0.55,0.51,0.54,0.6,0.54,.,.,.,0.51 1 84875173 84875173 C T comments: rs6576700 or SNP_A-1780419, a SNP in Affymetrix SNP arrays
popfreq_all 1.,0.9,0.67,0.93,1.,0.96,0.89,0.75,0.96,0.79 1 948921 948921 T C comments: rs15842, a SNP in 5' UTR of ISG15
popfreq_all 0.011,.,.,.,.,.,0.0074,0.0009,0.011,. 13 20763686 20763686 G - comments: rs1801002 (del35G), a frameshift mutation in GJB2, associated with hearing loss
popfreq_all 0.05,0.02,0.0041,0.03,.,0.05,0.032,0.0082,0.043,0.022 16 50745926 50745926 C T comments: rs2066844 (R702W), a non-synonymous SNP in NOD2
popfreq_all 0.03,0.01,.,0.03,.,0.01,0.01,0.0016,0.015,. 16 50756540 50756540 G C comments: rs2066845 (G908R), a non-synonymous SNP in NOD2
popfreq_all 0.022,0.01,0.01,0.01,.,0.01,0.016,0.0047,0.022,. 16 50763778 50763778 - C comments: rs2066847 (c.3016_3017insC), a frameshift SNP in NOD2
popfreq_all 0.53,0.39,0.25,0.38,0.33,0.53,0.46,0.32,0.52,0.3 2 234183368 234183368 A G comments: rs2241880 (T300A), a SNP in the ATG16L1 associated with Crohn's disease
```

Of course, you can use the popfreq_all database in table_annovar.pl, so that the output file contains all relevant information in Excel compatible format for easy viewing and browsing.

## CLINVAR annotations

The ClinVar database archives and aggregates information about relationships among variation and human health.Accessions, of the format SCV000000000.0, are assigned to each record.

I compiled the database to be used by ANNOVAR. An example command is below:

```
[kaiwang@biocluster ~/]$ annotate_variation.pl example/ex1.avinput humandb/ -filter -dbtype clinvar_20140211 -buildver hg19 -out ex1 
NOTICE: the --dbtype clinvar_20140211 is assumed to be in generic ANNOVAR database format
NOTICE: Variants matching filtering criteria are written to ex1.hg19_clinvar_20140211_dropped, other variants are written to ex1.hg19_clinvar_20140211_filtered
NOTICE: Processing next batch with 15 unique variants in 15 input lines
NOTICE: Database index loaded. Total number of bins is 21199 and the number of bins to be scanned is 6
NOTICE: Scanning filter database humandb/hg19_clinvar_20140211.txt...Done

[kaiwang@biocluster ~/]$ cat ex1.hg19.avinput.hg19_clinvar_20140211_dropped
clinvar_20140211 CLINSIG=other|other;CLNDBN=Inflammatory_bowel_disease_17\x2c_protection_against|Psoriasis\x2c_protection_against;CLNACC=RCV000003254.2|RCV000003255.2 1 67705958 67705958 G A comments: rs11209026 (R381Q), a SNP in IL23R associated with Crohn's disease
clinvar_20140211 CLINSIG=pathogenic|pathogenic|pathogenic|pathogenic;CLNDBN=Deafness\x2c_autosomal_recessive_1A|Deafness\x2c_digenic\x2c_GJB2/GJB6|Hereditary_hearing_loss_and_deafness|not_provided;CLNACC=RCV000018527.27|RCV000018528.27|RCV000037843.1|RCV000080373.1 13 20763686 20763686 comments: rs1801002 (del35G), a frameshift mutation in GJB2, associated with hearing loss
clinvar_20140211 CLINSIG=other;CLNDBN=Inflammatory_bowel_disease_1\x2c_susceptibility_to;CLNACC=RCV000004957.1 16 50745926 50745926 comments: rs2066844 (R702W), a non-synonymous SNP in NOD2
clinvar_20140211 CLINSIG=other;CLNDBN=Inflammatory_bowel_disease_1\x2c_susceptibility_to;CLNACC=RCV000004956.1 16 50756540 50756540 comments: rs2066845 (G908R), a non-synonymous SNP in NOD2
clinvar_20140211 CLINSIG=other;CLNDBN=Inflammatory_bowel_disease_10\x2c_susceptibility_to;CLNACC=RCV000001189.1 2 234183368 234183368 comments: rs2241880 (T300A), a SNP in the ATG16L1 associated with Crohn's diseasee

SIG refers to Variant Clinical Significance, including unknown, untested, non-pathogenic, probable-non-pathogenic, probable-pathogenic, pathogenic, drug-response,histocompatibility, other. CLINDBN refers to Variant disease name, CLINACC refers to Variant Accession and Versions.
```
 

 

## CADD annotations

CADD (Combined Annotation Dependent Depletion) is a score that is based on SVM on multiple other scores. One nice thing about it is that it assigns a score to each possible mutation in the human genome, therefore can evaluate non-coding variants as well as coding ones. The problem with this database is that the size is just too big (350GB in ANNOVAR format). However, several ANNOVAR users requested that I make it available through ANNOVAR, so that they can realistically use CADD in their exome sequencing studies. Therefore, I made the database available in Februray 2014 to ANNOVAR users. Download it by "-downdb cadd -buildver hg19". Unfortunately I do not have the resources to make hg18 scores available.

```
[kaiwang@biocluster ~/]$ annotate_variation.pl example/ex1.avinput humandb/ -filter -dbtype cadd -buildver hg19 -out ex1 
NOTICE: the --dbtype cadd is assumed to be in generic ANNOVAR database format
NOTICE: Variants matching filtering criteria are written to ex1.hg19_cadd_dropped, other variants are written to ex1.hg19_cadd_filtered
NOTICE: Processing next batch with 15 unique variants in 15 input lines
NOTICE: Database index loaded. Total number of bins is 286120 and the number of bins to be scanned is 12
NOTICE: Scanning filter database humandb/hg19_cadd.txt...Done


[kaiwang@biocluster ~/]$ cat ex1.hg19_cadd_dropped 
cadd -0.910814 1 1404001 1404001 G T comments: rs149123833, a SNP in 3' UTR of ATAD3C
cadd 0.515537 1 162736463 162736463 C T comments: rs1000050, a SNP in Illumina SNP arrays
cadd 0.905064 1 5935162 5935162 A T comments: rs1287637, a splice site variant in NPHP4
cadd 4.183326 1 67705958 67705958 G A comments: rs11209026 (R381Q), a SNP in IL23R associated with Crohn's disease
cadd 0.008968 1 84875173 84875173 C T comments: rs6576700 or SNP_A-1780419, a SNP in Affymetrix SNP arrays
cadd 0.175820 1 948921 948921 T C comments: rs15842, a SNP in 5' UTR of ISG15
cadd 3.578490 16 50745926 50745926 C T comments: rs2066844 (R702W), a non-synonymous SNP in NOD2
cadd 4.373037 16 50756540 50756540 G C comments: rs2066845 (G908R), a non-synonymous SNP in NOD2
cadd 1.504884 2 234183368 234183368 A G comments: rs2241880 (T300A), a SNP in the ATG16L1 associated with Crohn's disease
```

It takes less than one minute in my computer to obtain CADD scores for these variants, but 99% of the time was spent on loading index. 5GB memory is required to load index into memory. Please note that only SNPs have CADD scores, as indels/CNVs cannot be matched to CADD database.

To know the phred-scaled CADD score, add -otherinfo argument

```
[kaiwang@biocluster ~/]$ annotate_variation.pl example/ex1.avinput humandb/ -filter -dbtype cadd -buildver hg19 -out ex1 -otherinfo
NOTICE: the --dbtype cadd is assumed to be in generic ANNOVAR database format
NOTICE: Variants matching filtering criteria are written to ex1.hg19_cadd_dropped, other variants are written to ex1.hg19_cadd_filtered
NOTICE: Processing next batch with 12 unique variants in 12 input lines
NOTICE: Database index loaded. Total number of bins is 286120 and the number of bins to be scanned is 12
NOTICE: Scanning filter database humandb/hg19_cadd.txt...Done


[kaiwang@biocluster ~/]$ cat ex1.hg19_cadd_dropped
cadd -0.910814,0.416 1 1404001 1404001 G T comments: rs149123833, a SNP in 3' UTR of ATAD3C
cadd 0.515537,6.794 1 162736463 162736463 C T comments: rs1000050, a SNP in Illumina SNP arrays
cadd 0.905064,8.681 1 5935162 5935162 A T comments: rs1287637, a splice site variant in NPHP4
cadd 4.183326,21.7 1 67705958 67705958 G A comments: rs11209026 (R381Q), a SNP in IL23R associated with Crohn's disease
cadd 0.008968,4.060 1 84875173 84875173 C T comments: rs6576700 or SNP_A-1780419, a SNP in Affymetrix SNP arrays
cadd 0.175820,4.946 1 948921 948921 T C comments: rs15842, a SNP in 5' UTR of ISG15
cadd 3.578490,18.23 16 50745926 50745926 C T comments: rs2066844 (R702W), a non-synonymous SNP in NOD2
cadd 4.373037,23.1 16 50756540 50756540 G C comments: rs2066845 (G908R), a non-synonymous SNP in NOD2
cadd 1.504884,10.98 2 234183368 234183368 A G comments: rs2241880 (T300A), a SNP in the ATG16L1 associated with Crohn's disease
```

The comma-delimited values are raw scores and phred-scaled scores. Basically, for scaled scores, 10 means 10% percentile highest scores, 20 means 1% percentile highest scores, and 30% means 0.1% percentile highest scores. So we do find one \<1% percentile variant in the dataset.

I evaluated the performance to annotate ~30,000 variants from an exome sequencing project. It takes 2.5 minutes in my computer.

```
[kaiwang@biocluster ~/]$ annotate_variation.pl 84060.avinput humandb/ -filter -dbtype cadd -buildver hg19 -out ex1
NOTICE: the --dbtype cadd is assumed to be in generic ANNOVAR database format
NOTICE: Variants matching filtering criteria are written to ex1.hg19_cadd_dropped, other variants are written to ex1.hg19_cadd_filtered
NOTICE: Processing next batch with 30726 unique variants in 30726 input lines
NOTICE: Database index loaded. Total number of bins is 14293554 and the number of bins to be scanned is 27608
NOTICE: Scanning filter database tempdb/hg19_cadd.txt...Done
```

In comparison, it would take 22 minutes in tabix, not to mention the need to post-processing tabix results to filter for nucleotide-level matches. So it seems that ANNOVAR is >8X faster than tabix for this particular data set. Performance-wise, it is practical to use ANNOVAR in at least exome sequencing studies.

## COSMIC annotations

COSMIC refers to "Catalogue Of Somatic Mutations In Cancer". It includes somatic mutations reported in literature in various types of cancers. ANNOVAR users can scan a file with somatic muations against the database, to know whether a mutation has previously been reported or observed, and in what types of cancer, and for how many times.

```
[kaiwang@biocluster ~/]$ annotate_variation.pl -filter -build hg19 -out ex4 -dbtype cosmic68 ex4.avinput humandb/
NOTICE: the --dbtype cosmic68 is assumed to be in generic ANNOVAR database format
NOTICE: Variants matching filtering criteria are written to ex4.hg19_cosmic68_dropped, other variants are written to ex4.hg19_cosmic68_filtered
NOTICE: Processing next batch with 16298 unique variants in 16298 input lines
NOTICE: Database index loaded. Total number of bins is 231486 and the number of bins to be scanned is 1738
NOTICE: Scanning filter database humandb/hg19_cosmic68.txt...Done

[kaiwang@biocluster ~/]$ cat ex4.hg19_cosmic68_dropped 
cosmic68 ID=COSM1356066;OCCURENCE=1(large_intestine) 11 6579854 6579854 C T het
```

The input file contains two variants that were reported in COSMIC database, both reported in cancer involving large inestine only once.

 

## NCI60 annotations

The NCI60 data set was based on this paper. The NCI-60 cell lines are the most frequently studied human tumor cell lines in cancer research. I compiled allele frequency information from these 60 cell lines based on their exome sequencing data. Example usage is below, using the 'nci60' as the keyword.

```
[kaiwang@biocluster ~/]$ annotate_variation.pl -filter -build hg19 -out ex4 -dbtype nci60 ex4.avinput humandb/
NOTICE: the --dbtype nci60 is assumed to be in generic ANNOVAR database format
NOTICE: Variants matching filtering criteria are written to ex4.hg19_nci60_dropped, other variants are written to ex4.hg19_nci60_filtered
NOTICE: Processing next batch with 16298 unique variants in 16298 input lines
NOTICE: Database index loaded. Total number of bins is 81308 and the number of bins to be scanned is 766
NOTICE: Scanning filter database humandb/hg19_nci60.txt...Done
```
 

## Generic mutation annotations

Users have the flexibility to supply a custom-made annotation file, and let ANNOVAR perform filter-based annotation on this annotation file. The "-dbtype" should be specified as "generic". The file format is very simple: first five columns are chr, start, end, reference allele, observed allele, the sixth column (functional score) is optional, other columns are optional as well asn will be ignored. The first ten lines of an example database file is given below:

```
[kai@biocluster ~/]$ head example/hg19_example_db_generic.txt 
16 50756539 50756539 T A 1
16 50756539 50756539 T C 1
16 50756539 50756539 T G 0.04
16 50756540 50756540 G A 0.04
16 50756540 50756540 G C 0.05
16 50756540 50756540 G T 0.05
16 50756541 50756541 G A 0.05
16 50756541 50756541 G C 0.01
16 50756541 50756541 G T 0.01
16 50756542 50756542 G A 0.71

[kaiwang@biocluster ~/]$ annotate_variation.pl -filter -dbtype generic -genericdbfile hg19_example_db_generic.txt -build hg19 -out ex1 example/ex1.avinput example/
NOTICE: Variants matching filtering criteria are written to ex1.hg19_generic_dropped, other variants are written to ex1.hg19_generic_filtered
NOTICE: Processing next batch with 12 unique variants in 12 input lines
NOTICE: Scanning filter database example/hg19_example_db_generic.txt...Done

[kaiwang@biocluster ~/]$ cat ex1.hg19_generic_dropped
generic 0.05 16 50756540 50756540 G C comments: rs2066845 (G908R), a non-synonymous SNP in NOD2
```

Running the above command, we can see that one variant is present in the generic database hg19_example_db_generic.txt, and its function score (as 0.05) is printed as the second column in the output file ex1.hg19_generic_dropped.

When the database file contains the functional importance score column (sixth column in the generic format files), users can use --score_threshold argument to control output: only database records with a higher functional score will be used in filtering query variants. For example, when adding "-score_threshold 0.5" argument to the above command, the output file will be empty.

It is also possible to treat ljb23_pp2, ljb23_lrt, etc as if they are generic database file, and use the "-dbtype generic -genericdbfile hg19_ljb23_pp2hvar.txt" argument to perform PolyPhen annotation of variants.

It is also possible to make two files that each contains a list of variants (five columns in each file), then scan one file against the other, to find the shared variants. This is useful, for example, when comparing two genotype-calling algorithms on the same set of alignment data.

