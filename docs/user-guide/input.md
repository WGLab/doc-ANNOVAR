## VCF file

The `table_annovar.pl` program can take VCF files and annotate them (with `-vcfinput` argument). Nowadays, [VCF](http://vcftools.sourceforge.net/specs.html) is already a gold standard format that most researchers use. For additional recommendations to process VCF file, please see "[VCF Processing Guide](../articles/VCF.md)" the article.


## ANNOVAR input file

The `annotate_variation.pl` program requires a simple text-based format, which we refer to as ANNOVAR input format. In this file, each line corresponds to one variant. On each line, the first five space- or tab- delimited columns represent chromosome, start position, end position, the reference nucleotides and the observed nucleotides. Additional columns can be supplied and will be printed out in identical form. For convenience, users can use “0” to fill in the reference nucleotides, if this information is not readily available. Insertions, deletions or block substitutions can be readily represented by this simple file format, by using “–” to represent a null nucleotide. One example is given below (this example is included as `ex1.avinput` file in the ANNOVAR package), with extra columns that serve as comments on the variants. By default, 1-based coordinate system is used.

The ANNOVAR package contains a few example input files. For example, the content of the `ex1.avinput` file is below:

```
[kaiwang@biocluster ~/]$ cat example/ex1.avinput
1 948921 948921 T C comments: rs15842, a SNP in 5' UTR of ISG15
1 1404001 1404001 G T comments: rs149123833, a SNP in 3' UTR of ATAD3C
1 5935162 5935162 A T comments: rs1287637, a splice site variant in NPHP4
1 162736463 162736463 C T comments: rs1000050, a SNP in Illumina SNP arrays
1 84875173 84875173 C T comments: rs6576700 or SNP_A-1780419, a SNP in Affymetrix SNP arrays
1 13211293 13211294 TC - comments: rs59770105, a 2-bp deletion
1 11403596 11403596 - AT comments: rs35561142, a 2-bp insertion
1 105492231 105492231 A ATAAA comments: rs10552169, a block substitution
1 67705958 67705958 G A comments: rs11209026 (R381Q), a SNP in IL23R associated with Crohn's disease
2 234183368 234183368 A G comments: rs2241880 (T300A), a SNP in the ATG16L1 associated with Crohn's disease
16 50745926 50745926 C T comments: rs2066844 (R702W), a non-synonymous SNP in NOD2
16 50756540 50756540 G C comments: rs2066845 (G908R), a non-synonymous SNP in NOD2
16 50763778 50763778 - C comments: rs2066847 (c.3016_3017insC), a frameshift SNP in NOD2
13 20763686 20763686 G - comments: rs1801002 (del35G), a frameshift mutation in GJB2, associated with hearing loss
13 20797176 21105944 0 - comments: a 342kb deletion encompassing GJB6, associated with hearing loss
```

The first five space or tab delimited fields are Chromosome ("chr" prefix is optional), Start, End, Reference Allelel, Alternative Allele. The rest of the columns are completely optional.

The example above contains several genetic variants. The first variant is a single nucleotide variant, with a substitution of C in reference genome to T. The third variant is a 2-bp deletion, with the observed nucleotides being represented by "-". The fourth variant is a 2-bp insertion, since the reference nucleotide in the reference genome is represented by “–”. The last variant is a large-scale deletion, but the reference allele is represented by “0”, eliminating the need to include reference nucleotides on this line.

Another example is shown below. Note that the first five columns conform to the specification above, yet all other columns are totally optional and the user can put anything there.

```
[kaiwang@biocluster ~/]$ cat ex3.avinput
7 92570705 92570705 T C 7 3 43 D G SAMD9 1.56
7 98870495 98870495 G A 26 16 62 R C PTCD1 3.06
7 99835402 99835402 C T 13 6 46 P L PILRA 1.75
7 100122289 100122289 - CCT 5 3 60 EQ ERQ GIGYF1 3.98
7 100209410 100209410 G A 15 8 53 R H ZAN 1.81
7 100473466 100473466 A G 38 13 34 T A MUC17 0.60
7 105066159 105066160 TC - 19 3 16 E X ATXN7L1 4.92
7 113306419 113306419 C T 15 6 40 S N PPP1R3A 1.05
7 115411632 115411632 C T 14 5 36 D N TFEC -0.45
7 119702880 119702880 T C 29 3 10 C R KCND2 5.00
7 120216091 120216091 C G 20 10 50 A P TSPAN12 5.32
7 120555712 120555712 T C 10 3 30 L S C7orf58 3.00
7 128099699 128099699 C G 7 5 71 I M FAM71F2 0.42
7 128221650 128221650 T C 13 3 23 L P CCDC136 1.26
```

In some cases, users may want to specify only positions but not the actual nucleotides. In that case, "0" can be used to fill in the 4th and 5th column. ANNOVAR can still run on this input file, but obviously there is no output on amino acid changes. Additionally, the observed amino acid will be assumed to be of equal length of the wildtype allele (as specified by the start and end position at each line).

If ANNOVAR encounters an invalid input line, it will write the invalid line into a file called `<outfile>.invalid_input` where `<outfile>` is specified by the `--outfile` argument. If all input lines are of valid format, this output file will not exist. Therefore, even if the input file contains empty lines or invalid format, ANNOVAR can still proceed with the next input line.

The download package contains several example input files. The users can check them out.

## Format Conversion

The `convert2annovar.pl` script can convert other "genotype calling" format into ANNOVAR format. Currently, the program can handle Samtools genotype-calling pileup format, Illumina CASAVA format, SOLiD GFF genotype-calling format, Complete Genomics variant format, SOAPsnp format, MAQ format and VCF format. Additionally, the program can generate ANNOVAR input files from a list of dbSNP identifiers, or from transcript identifiers, or from a genomic region. It should be emphasized that nowadays VCF is the most widely used file format, and most other formats are no longer being used.

### - VCF4 format

The `-format vcf4` argument can be used to convert VCF files to ANNOVAR input format. The ANNOVAR package should contain an example VCF file in the example/ directory. We can use this file as an example:

```
[kaiwang@biocluster ~/]$ cat example/ex2.vcf 
##fileformat=VCFv4.0
##fileDate=20090805
##source=myImputationProgramV3.1
##reference=1000GenomesPilot-NCBI36
##phasing=partial
##INFO=<ID=NS,Number=1,Type=Integer,Description="Number of Samples With Data">
##INFO=<ID=DP,Number=1,Type=Integer,Description="Total Depth">
##INFO=<ID=AF,Number=.,Type=Float,Description="Allele Frequency">
##INFO=<ID=AA,Number=1,Type=String,Description="Ancestral Allele">
##INFO=<ID=DB,Number=0,Type=Flag,Description="dbSNP membership, build 129">
##INFO=<ID=H2,Number=0,Type=Flag,Description="HapMap2 membership">
##FILTER=<ID=q10,Description="Quality below 10">
##FILTER=<ID=s50,Description="Less than 50% of samples have data">
##FORMAT=<ID=GT,Number=1,Type=String,Description="Genotype">
##FORMAT=<ID=GQ,Number=1,Type=Integer,Description="Genotype Quality">
##FORMAT=<ID=DP,Number=1,Type=Integer,Description="Read Depth">
##FORMAT=<ID=HQ,Number=2,Type=Integer,Description="Haplotype Quality">
#CHROM POS ID REF ALT QUAL FILTER INFO FORMAT NA00001 NA00002 NA00003
16 50745926 rs2066844 C T 80 PASS NS=3;DP=14;AF=0.5;DB;H2 GT:GQ:DP:HQ 0|0:48:1:51,51 1|0:48:8:51,51 1/1:43:5:.,.
20 14370 rs6054257 G A 29 PASS NS=3;DP=14;AF=0.5;DB;H2 GT:GQ:DP:HQ 0|0:48:1:51,51 1|0:48:8:51,51 1/1:43:5:.,.
20 17330 . T A 3 q10 NS=3;DP=11;AF=0.017 GT:GQ:DP:HQ 0|0:49:3:58,50 0|1:3:5:65,3 0/0:41:3
20 1110696 rs6040355 A G,T 67 PASS NS=2;DP=10;AF=0.333,0.667;AA=T;DB GT:GQ:DP:HQ 1|2:21:6:23,27 2|1:2:0:18,2 2/2:35:4
20 1230237 . T G 47 PASS NS=3;DP=13;AA=T GT:GQ:DP:HQ 0|0:54:7:56,60 0|0:48:4:51,51 0/0:61:2
20 1230288 . T . 50 PASS NS=3;DP=13;AA=T GT:GQ:DP:HQ 0|0:54:7:56,60 0|0:48:4:51,51 0/0:61:2
20 1234567 microsat1 GTCT G,GTACT 50 PASS NS=3;DP=9;AA=G GT:GQ:DP 0/1:35:4 0/2:17:2 1/1:40:3
```

More detailed explanation of this VCF file is given at [here](http://vcftools.sourceforge.net/specs.html). You can see that seven loci are contained within the file, together with many comment lines.

Now let's do the conversion:

```
[kaiwang@biocluster ~/]$ convert2annovar.pl -format vcf4 example/ex2.vcf > ex2.avinput
WARNING to old ANNOVAR users: this program no longer does line-to-line conversion for multi-sample VCF files. If you want to include all variants in output, use '-format vcf4old' or use '-format vcf4 -allsample -withfreq' instead.
NOTICE: Finished reading 25 lines from VCF file
NOTICE: A total of 7 locus in VCF file passed QC threshold, representing 6 SNPs (3 transitions and 3 transversions) and 3 indels/substitutions
NOTICE: Finished writing 2 SNPs (1 transitions and 1 transversions) and 1 indels/substitutions for 1 sample (but input contains 3 samples)
WARNING: Skipped 1 invalid alternative alleles found in input file

[kaiwang@biocluster ~/]$ cat ex2.avinput 
20 1110696 1110696 A G het 67 6
20 1110696 1110696 A T het 67 6
20 1234568 1234570 TCT - het 50 4
```

The above command takes `ex2.vcf` as input file, and generate the `ex2.avinput` as output file. The 3 extra columns are zygosity status, genotype quality and read depth.

If you read the screen message carefully, it tells that only 1 out of 3 samples have been processed in this VCF file. By default, only the first sample in VCF file will be written to output file. The input contains seven loci, but many of them do not have non-reference genotypes for the first sample, and that is why the output contains only 3 variants.

Instead of using redirection, we can also do this to write the output into the `ex2.avinput` file:

```
[kaiwang@biocluster ~/]$ convert2annovar.pl -format vcf4 example/ex2.vcf -outfile ex2.avinput
```

Now, if we want to write all 3 samples into the output file (as three separate output files), we can add the `-allsample` argument

```
[kaiwang@biocluster ~/]$ convert2annovar.pl -format vcf4 example/ex2.vcf -outfile ex2 -allsample
NOTICE: output files will be written to ex2.<samplename>.avinput
NOTICE: Finished reading 25 lines from VCF file
NOTICE: A total of 7 locus in VCF file passed QC threshold, representing 6 SNPs (3 transitions and 3 transversions) and 3 indels/substitutions
NOTICE: Finished writing 10 SNPs (6 transitions and 4 transversions) and 3 indels/substitutions for 3 samples
WARNING: Skipped 1 invalid alternative alleles found in input file

[kaiwang@biocluster ~/]$ cat ex2.NA00001.avinput 
20 1110696 1110696 A G het 67 6
20 1110696 1110696 A T het 67 6
20 1234568 1234570 TCT - het 50 4

[kaiwang@biocluster ~/]$ cat ex2.NA00002.avinput 
16 50745926 50745926 C T het 80 8
20 14370 14370 G A het 29 8
20 17330 17330 T A het 3 5
20 1110696 1110696 A G het 67 0
20 1110696 1110696 A T het 67 0
20 1234567 1234570 GTCT GTACT het 50 2

[kaiwang@biocluster ~/]$ cat ex2.NA00003.avinput 
16 50745926 50745926 C T hom 80 5
20 14370 14370 G A hom 29 5
20 1110696 1110696 A T hom 67 4
20 1234568 1234570 TCT - hom 50 3
```

Clearly, the input VCF file has seven loci. One of them has unknown alternative allele so it is excluded from output. The other two each has two alternative alleles, so in total there are 9 variants, including 6 SNPs and 3 indels. Three output files are generated.

Pay attention to chr20:1110696 in NA0002. There are two alternative alleles for this locus, so two output lines are present, each for one mutation. Both of them are heterozygotes:

```
20 1110696 1110696 A G het 67 0
20 1110696 1110696 A T het 67 0
```

If you need the output file to contain the all information as the VCF file, you can add `-includeinfo` argument:

```
[kaiwang@biocluster ~/]$ convert2annovar.pl -format vcf4 example/ex2.vcf -outfile ex2 -allsample -includeinfo
NOTICE: output files will be written to ex2.<samplename>.avinput
NOTICE: Finished reading 25 lines from VCF file
NOTICE: A total of 7 locus in VCF file passed QC threshold, representing 6 SNPs (3 transitions and 3 transversions) and 3 indels/substitutions
NOTICE: Finished writing 10 SNPs (6 transitions and 4 transversions) and 3 indels/substitutions for 3 samples
WARNING: Skipped 1 invalid alternative alleles found in input file

[kaiwang@biocluster ~/]$ cat ex2.NA00001.avinput
20 1110696 1110696 A G 20 1110696 rs6040355 A G 67 PASS NS=2;DP=10;AF=0.333,0.667;AA=T;DB GT:GQ:DP:HQ 1|2:21:6:23,27
20 1110696 1110696 A T 20 1110696 rs6040355 A T 67 PASS NS=2;DP=10;AF=0.333,0.667;AA=T;DB GT:GQ:DP:HQ 1|2:21:6:23,27
20 1234568 1234570 TCT - 20 1234567 microsat1 GTCT G 50 PASS NS=3;DP=9;AA=G GT:GQ:DP 0/1:35:4
```

If you need the zygosity, quality and read coverage information in the output line as well, add the `-withzyg` argument:

```
[kaiwang@biocluster ~/]$ convert2annovar.pl -format vcf4 example/ex2.vcf -outfile ex2 -allsample -include -withzyg
NOTICE: output files will be written to ex2.<samplename>.avinput
NOTICE: Finished reading 25 lines from VCF file
NOTICE: A total of 7 locus in VCF file passed QC threshold, representing 6 SNPs (3 transitions and 3 transversions) and 3 indels/substitutions
NOTICE: Finished writing 10 SNPs (6 transitions and 4 transversions) and 3 indels/substitutions for 3 samples
WARNING: Skipped 1 invalid alternative alleles found in input file

[kaiwang@biocluster ~/]$ cat ex2.NA00001.avinput 
20 1110696 1110696 A G het 67 6 20 1110696 rs6040355 A G 67 PASS NS=2;DP=10;AF=0.333,0.667;AA=T;DB GT:GQ:DP:HQ 1|2:21:6:23,27
20 1110696 1110696 A T het 67 6 20 1110696 rs6040355 A T 67 PASS NS=2;DP=10;AF=0.333,0.667;AA=T;DB GT:GQ:DP:HQ 1|2:21:6:23,27
20 1234568 1234570 TCT - het 50 4 20 1234567 microsat1 GTCT G 50 PASS NS=3;DP=9;AA=G GT:GQ:DP 0/1:35:4
```

Now, here is one very very important argument: `-withfreq`. When `-withfreq` is set, it will print out the allele frequency of each SNP in the VCF file, based on all samples within the file. Because we are not looking at all samples as a whole, the individual genotypes will not be considered here, so the output file should contain all loci from the input file:

```
[kaiwang@biocluster ~/]$ convert2annovar.pl -format vcf4 example/ex2.vcf -outfile ex2.avinput -allsample -withfreq
NOTICE: Finished reading 25 lines from VCF file
NOTICE: A total of 7 locus in VCF file passed QC threshold, representing 6 SNPs (3 transitions and 3 transversions) and 3 indels/substitutions
NOTICE: Finished writing 17 SNPs (8 transitions and 9 transversions) and 6 indels/substitutions for 3 samples
WARNING: Skipped 1 invalid alternative alleles found in input file

[kaiwang@biocluster ~/]$ cat ex2.avinput 
16 50745926 50745926 C T 0.5 80 5
20 14370 14370 G A 0.5 29 5
20 17330 17330 T A 0.1667 3 3
20 1110696 1110696 A G 0.5 67 0
20 1110696 1110696 A T 0.6667 67 4
20 1230237 1230237 T G 0 47 2
20 1230288 1230288 T 0 0 50 2
20 1234568 1234570 TCT - 0.75 50 3
20 1234567 1234570 GTCT GTACT 0.5 50 2
```

In practice, you probably want to add `-includeinfo` so that all genotype records for all samples are included in the final output file:

```
[kaiwang@biocluster ~/]$ convert2annovar.pl -format vcf4 example/ex2.vcf -outfile ex2.avinput -allsample -withfreq -include
NOTICE: Finished reading 25 lines from VCF file
NOTICE: A total of 7 locus in VCF file passed QC threshold, representing 6 SNPs (3 transitions and 3 transversions) and 3 indels/substitutions
NOTICE: Finished writing 17 SNPs (8 transitions and 9 transversions) and 6 indels/substitutions for 3 samples
WARNING: Skipped 1 invalid alternative alleles found in input file

[kaiwang@biocluster ~/]$ cat ex2.avinput
16 50745926 50745926 C T 0.5 80 5 16 50745926 rs2066844 C T 80 PASS NS=3;DP=14;AF=0.5;DB;H2 GT:GQ:DP:HQ 0|0:48:1:51,51 1|0:48:8:51,51 1/1:43:5:.,.
20 14370 14370 G A 0.5 29 5 20 14370 rs6054257 G A 29 PASS NS=3;DP=14;AF=0.5;DB;H2 GT:GQ:DP:HQ 0|0:48:1:51,51 1|0:48:8:51,51 1/1:43:5:.,.
20 17330 17330 T A 0.1667 3 3 20 17330 . T A 3 q10 NS=3;DP=11;AF=0.017 GT:GQ:DP:HQ 0|0:49:3:58,50 0|1:3:5:65,3 0/0:41:3
20 1110696 1110696 A G 0.5 67 0 20 1110696 rs6040355 A G,T 67 PASS NS=2;DP=10;AF=0.333,0.667;AA=T;DB GT:GQ:DP:HQ 1|2:21:6:23,27 2|1:2:0:18,2 2/2:35:4
20 1110696 1110696 A T 0.6667 67 4 20 1110696 rs6040355 A G,T 67 PASS NS=2;DP=10;AF=0.333,0.667;AA=T;DB GT:GQ:DP:HQ 1|2:21:6:23,27 2|1:2:0:18,2 2/2:35:4
20 1230237 1230237 T G 0 47 2 20 1230237 . T G 47 PASS NS=3;DP=13;AA=T GT:GQ:DP:HQ 0|0:54:7:56,60 0|0:48:4:51,51 0/0:61:2
20 1230288 1230288 T 0 0 50 2 20 1230288 . T . 50 PASS NS=3;DP=13;AA=T GT:GQ:DP:HQ 0|0:54:7:56,60 0|0:48:4:51,51 0/0:61:2
20 1234568 1234570 TCT - 0.75 50 3 20 1234567 microsat1 GTCT G,GTACT 50 PASS NS=3;DP=9;AA=G GT:GQ:DP 0/1:35:4 0/2:17:2 1/1:40:3
20 1234567 1234570 GTCT GTACT 0.5 50 2 20 1234567 microsat1 GTCT G,GTACT 50 PASS NS=3;DP=9;AA=G GT:GQ:DP 0/1:35:4 0/2:17:2 1/1:40:3
```

Again, note that there are two lines for chr20:1110696, because there are two alleles at the same locus. Similarly, there are two lines (chr20:1234568 and chr20:1234567) for the same VCF record, because there are two alleles (indels) at the same locus.

If you need the VCF header information, just add the `-comment` argument:

```
[kaiwang@biocluster ~/]$ convert2annovar.pl -format vcf4 example/ex2.vcf -outfile ex2 -allsample -include -comment
NOTICE: output files will be written to ex2.<samplename>.avinput
NOTICE: Finished reading 25 lines from VCF file
NOTICE: A total of 7 locus in VCF file passed QC threshold, representing 6 SNPs (3 transitions and 3 transversions) and 3 indels/substitutions
NOTICE: Finished writing 10 SNPs (6 transitions and 4 transversions) and 3 indels/substitutions for 3 samples
WARNING: Skipped 1 invalid alternative alleles found in input file

[kaiwang@biocluster ~/]$ cat ex2.NA00001.avinput
##fileformat=VCFv4.0
##fileDate=20090805
##source=myImputationProgramV3.1
##reference=1000GenomesPilot-NCBI36
##phasing=partial
##INFO=<ID=NS,Number=1,Type=Integer,Description="Number of Samples With Data">
##INFO=<ID=DP,Number=1,Type=Integer,Description="Total Depth">
##INFO=<ID=AF,Number=.,Type=Float,Description="Allele Frequency">
##INFO=<ID=AA,Number=1,Type=String,Description="Ancestral Allele">
##INFO=<ID=DB,Number=0,Type=Flag,Description="dbSNP membership, build 129">
##INFO=<ID=H2,Number=0,Type=Flag,Description="HapMap2 membership">
##FILTER=<ID=q10,Description="Quality below 10">
##FILTER=<ID=s50,Description="Less than 50% of samples have data">
##FORMAT=<ID=GT,Number=1,Type=String,Description="Genotype">
##FORMAT=<ID=GQ,Number=1,Type=Integer,Description="Genotype Quality">
##FORMAT=<ID=DP,Number=1,Type=Integer,Description="Read Depth">
##FORMAT=<ID=HQ,Number=2,Type=Integer,Description="Haplotype Quality">
#CHROM POS ID REF ALT QUAL FILTER INFO FORMAT NA00001
20 1110696 1110696 A G 20 1110696 rs6040355 A G 67 PASS NS=2;DP=10;AF=0.333,0.667;AA=T;DB GT:GQ:DP:HQ 1|2:21:6:23,27
20 1110696 1110696 A T 20 1110696 rs6040355 A T 67 PASS NS=2;DP=10;AF=0.333,0.667;AA=T;DB GT:GQ:DP:HQ 1|2:21:6:23,27
20 1234568 1234570 TCT - 20 1234567 microsat1 GTCT G 50 PASS NS=3;DP=9;AA=G GT:GQ:DP 0/1:35:4
```

Note that the output file contains only VCF information for that particular sample (in other word, only the GT:GQ:DP:HQ information for sample NA00001 is in the `ex2.NA00001.avinput` output file).

Therefore, in practice, you could use `convert2annovar.pl` program as a way to split a huge VCF files into many parts, each for one particular sample, by back-converting the ANNOVAR input file into a VCF file for a particular sample. In a sense, it is similar to the `vcf-subset` program in VCFtools, but in this case ANNOVAR will be far more efficient, especially when handling large VCF files like those over 1TB. See below:

```
[kaiwang@biocluster ~/]$ grep -P '^#' example1.NA00001.avinput > example1.NA00002.vcf
[kaiwang@biocluster ~/]$ grep -v -P '^#' example1.NA00001.avinput | cut -f 6- >> example1.NA00002.vcf
[kaiwang@biocluster ~/]$ grep -P '^#' example1.NA00002.avinput > example1.NA00002.vcf
[kaiwang@biocluster ~/]$ grep -v -P '^#' example1.NA00002.avinput | cut -f 6- >> example1.NA00002.vcf
[kaiwang@biocluster ~/]$ grep -P '^#' example1.NA00003.avinput > example1.NA00003.vcf
[kaiwang@biocluster ~/]$ grep -v -P '^#' example1.NA00003.avinput | cut -f 6- >> example1.NA00003.vcf

[kaiwang@biocluster ~/]$ cat example1.NA00003.vcf 
##fileformat=VCFv4.0
##fileDate=20090805
##source=myImputationProgramV3.1
##reference=1000GenomesPilot-NCBI36
##phasing=partial
##INFO=<ID=NS,Number=1,Type=Integer,Description="Number of Samples With Data">
##INFO=<ID=DP,Number=1,Type=Integer,Description="Total Depth">
##INFO=<ID=AF,Number=.,Type=Float,Description="Allele Frequency">
##INFO=<ID=AA,Number=1,Type=String,Description="Ancestral Allele">
##INFO=<ID=DB,Number=0,Type=Flag,Description="dbSNP membership, build 129">
##INFO=<ID=H2,Number=0,Type=Flag,Description="HapMap2 membership">
##FILTER=<ID=q10,Description="Quality below 10">
##FILTER=<ID=s50,Description="Less than 50% of samples have data">
##FORMAT=<ID=GT,Number=1,Type=String,Description="Genotype">
##FORMAT=<ID=GQ,Number=1,Type=Integer,Description="Genotype Quality">
##FORMAT=<ID=DP,Number=1,Type=Integer,Description="Read Depth">
##FORMAT=<ID=HQ,Number=2,Type=Integer,Description="Haplotype Quality">#CHROM POS ID REF ALT QUAL FILTER INFO FORMAT NA00003
20 14370 rs6054257 G A 29 PASS NS=3;DP=14;AF=0.5;DB;H2 GT:GQ:DP:HQ 1/1:43:5:.,.
20 1110696 rs6040355 A T 67 PASS NS=2;DP=10;AF=0.333,0.667;AA=T;DB GT:GQ:DP:HQ 2/2:35:4
20 1234567 microsat1 GTCT G 50 PASS NS=3;DP=9;AA=G GT:GQ:DP 1/1:40:3
```

### - dbSNP identifiers

Many users have a list of dbSNP rs identifiers and want to annotate functionality of these SNPs. This can be achieved by `convert2annovar.pl` with the `-format rsid` argument:

```
[kaiwang@biocluster ~/]$ cat example/snplist.txt 
rs74487784
rs41534544
rs4308095
rs12345678

[kaiwang@biocluster ~/]$ convert2annovar.pl -format rsid example/snplist.txt -dbsnpfile humandb/hg19_snp138.txt > snplist.avinput 
NOTICE: Scanning dbSNP file humandb/hg19_snp138.txt...
NOTICE: input file contains 4 rs identifiers, output file contains information for 4 rs identifiers
WARNING: 1 rs identifiers have multiple records (due to multiple mapping) and they are all written to output

[kaiwang@biocluster ~/]$ cat snplist.avinput 
chr2 186229004 186229004 C T rs4308095
chr7 6026775 6026775 T C rs41534544
chr7 6777183 6777183 G A rs41534544
chr9 3901666 3901666 T C rs12345678
chr22 24325095 24325095 A G rs74487784
```

As you can see above, the new file has the first five columns as chr, start, end, ref, alt, and the sixth column as dbSNP identifier. The LOG message tells us that 1 SNP (rs41534544) has multiple mappings to genome, and as a result, it has two entries in the output file.

### - All variants in a genomic region

Suppose that I am interested in annotating all SNP, 1-bp insertions and 1-bp deletions in a 3-bp genomic region chr1:2000001-2000003. This can be easily done in `convert2annovar.pl` now:

```
[kaiwang@biocluster ~/]$ convert2annovar.pl -format region -seqdir humandb/hg19_seq/ chr1:2000001-2000003
NOTICE: Reading region from STDIN ... Done with 1 regions from 1 chromosomes
NOTICE: Finished reading 1 sequences from humandb/hg19_seq/chr1.fa
NOTICE: Finished writting FASTA for 1 genomic regions to stdout
1 2000001 2000001 A C
1 2000001 2000001 A G
1 2000001 2000001 A T
1 2000002 2000002 T A
1 2000002 2000002 T C
1 2000002 2000002 T G
1 2000003 2000003 C A
1 2000003 2000003 C G
1 2000003 2000003 C T
```

For adding x-bp insertions and deletions to this, use `-inssize x` and `-delsize x`, where x is an integer.

```
[kaiwang@biocluster ~/]$ convert2annovar.pl -format region -seqdir humandb/hg19_seq/ chr1:2000001-2000003 -inssize 1 -delsize 2
NOTICE: Reading region from STDIN ... Done with 1 regions from 1 chromosomes
NOTICE: Finished reading 1 sequences from humandb/hg19_seq/chr1.fa
NOTICE: Finished writting FASTA for 1 genomic regions to stdout
1 2000001 2000001 A C
1 2000001 2000001 A G
1 2000001 2000001 A T
1 2000002 2000002 T A
1 2000002 2000002 T C
1 2000002 2000002 T G
1 2000003 2000003 C A
1 2000003 2000003 C G
1 2000003 2000003 C T
1 2000001 2000001 AT -
1 2000002 2000002 TC -
1 2000001 2000001 - A
1 2000001 2000001 - C
1 2000001 2000001 - G
1 2000001 2000001 - T
1 2000002 2000002 - A
1 2000002 2000002 - C
1 2000002 2000002 - G
1 2000002 2000002 - T
1 2000003 2000003 - A
1 2000003 2000003 - C
1 2000003 2000003 - G
1 2000003 2000003 - T
```

If you only want 2-bp deletions but not SNVs and insertions, use `-subsize 0 -delsize 2`. By default, `-subsize` is set as 1 to indicate that SNVs are always desired.

### - All variants in a transcript

Similar to the `-format region` above, users can generate ANNOVAR input files for all possible variants in exons (plus splicing variants) of a transcript. Let's take NM_022162 as an example:

```
[kaiwang@biocluster ~/]$ convert2annovar.pl -format transcript NM_022162 -gene humandb/hg19_refGene.txt -seqdir humandb/hg19_seq/ > NM_022162.avinput
NOTICE: 12 regions will be analyzed for possible mutations
NOTICE: Reading region from STDIN ... Done with 1 regions from 1 chromosomes
NOTICE: Finished reading 1 sequences from humandb/hg19_seq/chr16.fa
NOTICE: Finished writting FASTA for 1 genomic regions to stdout
NOTICE: Reading region from STDIN ... Done with 1 regions from 1 chromosomes
NOTICE: Finished reading 1 sequences from humandb/hg19_seq/chr16.fa
NOTICE: Finished writting FASTA for 1 genomic regions to stdout
NOTICE: Reading region from STDIN ... Done with 1 regions from 1 chromosomes
NOTICE: Finished reading 1 sequences from humandb/hg19_seq/chr16.fa
NOTICE: Finished writting FASTA for 1 genomic regions to stdout
NOTICE: Reading region from STDIN ... Done with 1 regions from 1 chromosomes
NOTICE: Finished reading 1 sequences from humandb/hg19_seq/chr16.fa
NOTICE: Finished writting FASTA for 1 genomic regions to stdout
NOTICE: Reading region from STDIN ... Done with 1 regions from 1 chromosomes
NOTICE: Finished reading 1 sequences from humandb/hg19_seq/chr16.fa
NOTICE: Finished writting FASTA for 1 genomic regions to stdout
NOTICE: Reading region from STDIN ... Done with 1 regions from 1 chromosomes
NOTICE: Finished reading 1 sequences from humandb/hg19_seq/chr16.fa
NOTICE: Finished writting FASTA for 1 genomic regions to stdout
NOTICE: Reading region from STDIN ... Done with 1 regions from 1 chromosomes
NOTICE: Finished reading 1 sequences from humandb/hg19_seq/chr16.fa
NOTICE: Finished writting FASTA for 1 genomic regions to stdout
NOTICE: Reading region from STDIN ... Done with 1 regions from 1 chromosomes
NOTICE: Finished reading 1 sequences from humandb/hg19_seq/chr16.fa
NOTICE: Finished writting FASTA for 1 genomic regions to stdout
NOTICE: Reading region from STDIN ... Done with 1 regions from 1 chromosomes
NOTICE: Finished reading 1 sequences from humandb/hg19_seq/chr16.fa
NOTICE: Finished writting FASTA for 1 genomic regions to stdout
NOTICE: Reading region from STDIN ... Done with 1 regions from 1 chromosomes
NOTICE: Finished reading 1 sequences from humandb/hg19_seq/chr16.fa
NOTICE: Finished writting FASTA for 1 genomic regions to stdout
NOTICE: Reading region from STDIN ... Done with 1 regions from 1 chromosomes
NOTICE: Finished reading 1 sequences from humandb/hg19_seq/chr16.fa
NOTICE: Finished writting FASTA for 1 genomic regions to stdout
NOTICE: Reading region from STDIN ... Done with 1 regions from 1 chromosomes
NOTICE: Finished reading 1 sequences from humandb/hg19_seq/chr16.fa
NOTICE: Finished writting FASTA for 1 genomic regions to stdout
```

By default, splicing site (2-bp outside of each exon) is also processed. If you do not want them, or want to chagne the definition of splicing, use the `-splicing_threshold` argument.

Similar to the `-format region` above, `-delsize` and `-dupsize` and `-subsize` are all supported, so that you can customize the output file.

One great utility of using `-format region` is that users can back-convert protein or cDNA mutation nomenclature back to genomic coordinate. To do this, one just need to generate all possible mutations for a transcript, and then annotate the resulting \*.avinput file, and then search through this file for matches.

 
### - SAMtools pileup format

This section is obselete now, and in fact samtools now uses mpileup, rather than the "old" pileup.

Note that there are many different pileup formats, but here we are dealing with the (obselete as of 2011) "genotype-calling" pileup which contains the variant calls in one of the columns. A more detailed description is given at the Samtools website. An example to generate the "genotype-calling" pileup file is shown below:

```
samtools pileup -vcf ref.fa aln.bam > raw.pileup
```

The commands generates pileup files that contain the consensus calls with the model implemented in MAQ (there are certainly many other specified SNP callers available as well that users can freely choose). An example genotype-calling pileup format generated from SamTools is illustrated below:

```
chr1 556674 G G 54 0 60 16 a,.....,...,.... (B%A+%7B;0;%=B<:
chr1 556675 C C 55 0 60 16 ,,..A..,...,.... CB%%5%,A/+,%....
chr1 556676 C C 59 0 60 16 g,.....,...,.... .B%%.%.?.=/%...1
chr1 556677 G G 75 0 60 16 ,$,.....,...,.... .B%%9%5A6?)%;?:<
chr1 556678 G K 60 60 60 24 ,$.....,...,....^~t^~t^~t^~t^~t^~t^~t^~t^~t B%%B%<A;AA%??<=??;BA%B89
chr1 556679 C C 61 0 60 23 .....a...a....,,,,,,,,, %%1%&?*:2%*&)(89/1A@B@@
chr1 556680 G K 88 93 60 23 ..A..,..A,....ttttttttt %%)%7B:B0%55:7=>>A@B?B;
chr1 556681 C C 102 0 60 25 .$....,...,....,,,,,,,,,^~,^~. %%3%.B*4.%.34.6./B=?@@>5.
chr1 556682 A A 70 0 60 24 ...C,...,....,,,,,,,,,,. %:%(B:A4%7A?;A><<999=<<'
chr1 556683 G G 99 0 60 24 ....,...,....,,,,,,,,,,. %A%3B@%?%C?AB@BB/./-1A7?
```

The columns are chromosome, 1-based coordinate, reference base, consensus base (IUPAC nomenclature for nucleotides), consensus quality, SNP quality, maximum mapping quality of the reads covering the sites, the number of reads covering the site, read bases and base qualities.

The `convert2annovar.pl` program can convert the pileup file format to ANNOVAR input files. By default, the `-snpqual 20` argument will be imposed, so that only SNPs reaching quality score >=20 will be processed and written to output files. The output varlist file contains the called mutations in ANNOVAR format (non-mutations are obviously not in the output file).

In the 2011 Januaray version of ANNOVAR, the format for handling pileup file has been quite mature/fixed. Note that the first five columns conform to the standard ANNOVAR input format, yet the sixth and following columns give information on the alleles.

```
[kaiwang@biocluster ~/]$ convert2annovar.pl 84060.pileup -coverage 10 | head
NOTICE: the default --format argument is set as 'pileup'
NOTICE: the default --snpqual argument for pileup format is set as 20
NOTICE: Column 6-9 in output are heterozygosity status, SNP quality, total reads, reads with mutation
1 20139 20140 CA - het 563 53 10
1 59374 59374 A G hom 129 39 37
1 798677 798677 T G het 30 26 4
1 798785 798785 G A hom 132 38 37
1 798791 798791 C T hom 156 46 45
1 799544 799544 G A het 35 39 7
1 799550 799550 G C het 64 38 8
1 799595 799595 T C het 24 28 5
1 861034 861034 A C het 46 14 4
```

The NOTICE line aboves tells the user what the columns 6-9 means in the output. In the first line, we see an indel with depth coverage of 53, and 10 of them support the indel. In the second line, we see a SNP with depth coverage of 39, and 37 of them supports the alternative allele (G). These additional numbers after column 6 helps user decide whether the variant calls are reliable or not.

The `-fraction` argument can be used to filter out variants whose alternative allele has too low percentage among all reads. For example, if we suppose that all variant calls must be supported by at least 40% reads covering a site, we can use:

```
[kaiwang@biocluster ~/]$ convert2annovar.pl 84060.pileup -coverage 10 -fraction 0.4 | head
NOTICE: the default --format argument is set as 'pileup'
NOTICE: the default --snpqual argument for pileup format is set as 20
NOTICE: Column 6-9 in output are heterozygosity status, SNP quality, total reads, reads with mutation
1 59374 59374 A G hom 129 39 37
1 798785 798785 G A hom 132 38 37
1 798791 798791 C T hom 156 46 45
1 871781 871781 G A het 198 13 8
1 873954 873954 C G het 211 16 7
1 873964 873964 A C het 172 17 8
1 877423 877423 A C hom 84 19 19
1 877664 877664 A G hom 63 12 12
1 878502 878502 T C hom 69 14 14
1 881483 881483 C A het 228 24 10
```

As can be seen by comparing the two output files, the first line of indel is no longer in output, because 10/53<40%.

Some additional useful arguments include: `--altcov`, which specifies the minimum coverage for the alternative allele (the `--coverage` specifies coverage for all reads regardless of whether they support reference allele or alternative allele); `--maxcoverage`, which specifies the maximum coverage level to print out this variant; `--includeinfo`, which specifies that all information in the input line should be included in the output line by appending them after the printed columns.

After the program finishes, it will print out some statistics. Normally, for whole-genome sequencing on humans, the heterozytoes:homozygotes ratio should be around 2:1, the transitions:transversions ratio should be 2:1.

> *Advanced Notes: When the chromosome is "M", ANNOVAR will not print out "hom" or "het", instead, it will print out a number between 0 and 1 that suggest the fraction of reads that support alternative alleles. Use `-chrmt` argument if mitochondria is not annotated as M in your alignment.*

 
### - Complete Genomics format

The complete genomics company provides many genotyping-calling files for their customers. Among them is an var\*ASM.tsv file that looks like below.

```
[kai@beta ~/]$ head -n 20 var-GS000000088-ASM.tsv
#BUILD 1.5.0.5
#GENERATED_AT 2009-Nov-03 19:52:21.722927
#GENERATED_BY dbsnptool
#TYPE VAR-ANNOTATION
#VAR_ANN_SET /Proj/Pipeline/Production_Data/REF/HUMAN-F_06-REF/dbSNP.csv
#VAR_ANN_TYPE dbSNP
#VERSION 0.3
>locus ploidy haplotype chromosome begin end varType reference alleleSeq totalScore hapLink xRef
1 2 all chr1 0 959 no-call = ?
2 2 all chr1 959 972 = = =
3 2 all chr1 972 1001 no-call = ?
4 2 all chr1 1001 1008 = = =
5 2 all chr1 1008 1114 no-call = ?
6 2 all chr1 1114 1125 = = =
7 2 all chr1 1125 1191 no-call = ?
8 2 all chr1 1191 1225 = = =
9 2 all chr1 1225 1258 no-call = ?
10 2 all chr1 1258 1267 = = =
12 2 all chr1 1267 1275 no-call = ?
```

The `convert2annovar.pl` program can be used to convert this file to ANNOVAR format, using the `-format cg` argument. The output file looks like this:

```
[kai@beta ~/]$ head var-GS000000088-ASM.tsv.snp 
1 28095 28095 A G snp 67 dbsnp:rs806727 hom
1 31844 31844 A G snp 133 dbsnp:rs806721 hom
1 37155 37155 T G snp 51 dbsnp:rs2691275 het 
1 44449 44449 T C snp 74 het 
1 45679 45679 G A snp 191 dbsnp:rs3020699 het 
1 45713 45713 C G snp 191 het 
1 45789 45789 T C snp 138 dbsnp:rs3020698 hom
1 46662 46662 T C snp 69 dbsnp:rs2691309 het 
1 47109 47109 C G snp 56 dbsnp:rs2691313 het 
1 47815 47815 A C snp 67 dbsnp:rs2691334 hom
```

An example command line session is given below:

```
[kaiwang@biocluster ~/]$ convert2annovar.pl -format cg -out GS000000455.query var-GS000000455-ASM.tsv
NOTICE: Converting variants from var-GS000000455-ASM.tsv
NOTICE: Done with 25667914 lines

[kaiwang@biocluster ~/]$ wc -l GS000000455.query 
3728645 GS000000455.query
```

In this example, 25.6 million lines from the var\*ASM.tsv file from Complete Genomics data are processed, and 3.7 million variants are written to the output file in ANNOVAR input format.

### - GFF3-SOLiD calling format

This section is also obselete as few people work on SOLiD data nowadays. SOLiD BioScope generates genotype calls in GFF3 format, which we refer to as GFF3-SOLiD here. (This input file should not be confused with a GFF3 annotation database, as they serve different purposes. Here we are dealing with input files only.) For example, SOLiD provides SNP variant calls in the following format:

```
[kaiwang@biocluster ~/]$ head -n 20 var/Yoruban_snp_18x.gff 
##gff-version 3
##solid-gff-version 0.3
##source-version 2
##type DNA
##date 2009-03-13
##time 0:0:0
##feature-ontology http://song.cvs.sourceforge.net/*checkout*/song/ontology/sofa.obo?revision=1.141
##reference-file 
##input-files /data/results3/yoruban_strikes_back/files_for_Aaron/NA18507_18x_SOLiD_SNP_calls_hg18_dbSNP129_annotated.txt
##run-path 
1 AB_SOLiD SNP caller SNP 997 997 1 . . coverage=3;ref_base=A; ref_score=0.3359;ref_confi=0.9528;ref_single=0/0;ref_paired=1/1;consen_base=G; consen_score=0.6641;consen_confi=0.9420;consen_single=0/0;consen_paired=2/2
1 AB_SOLiD SNP caller SNP 1371 1371 1 . . coverage=2;ref_base=A; ref_score=0.0000;ref_confi=0.0000;ref_single=0/0;ref_paired=0/0;consen_base=G; consen_score=1.0000;consen_confi=0.8717;consen_single=0/0;consen_paired=2/2
1 AB_SOLiD SNP caller SNP 2061 2061 1 . . coverage=2;ref_base=G; ref_score=0.0000;ref_confi=0.0000;ref_single=0/0;ref_paired=0/0;consen_base=C; consen_score=1.0000;consen_confi=0.9138;consen_single=0/0;consen_paired=2/2
1 AB_SOLiD SNP caller SNP 4770 4770 1 . . coverage=2;ref_base=A; ref_score=0.0000;ref_confi=0.0000;ref_single=0/0;ref_paired=0/0;consen_base=G; consen_score=1.0000;consen_confi=0.8699;consen_single=0/0;consen_paired=2/2
1 AB_SOLiD SNP caller SNP 4793 4793 1 . . coverage=16;ref_base=A; ref_score=0.0689;ref_confi=0.9384;ref_single=0/0;ref_paired=1/1;consen_base=G; consen_score=0.6858;consen_confi=0.8494;consen_single=0/0;consen_paired=11/10
1 AB_SOLiD SNP caller SNP 5074 5074 1 . . coverage=4;ref_base=T; ref_score=0.5165;ref_confi=0.9355;ref_single=2/2;ref_paired=0/0;consen_base=K; consen_score=0.4835;consen_confi=0.8759;consen_single=1/1;consen_paired=1/1
1 AB_SOLiD SNP caller SNP 6241 6241 1 . . coverage=5;ref_base=T; ref_score=0.4450;ref_confi=0.9383;ref_single=0/0;ref_paired=2/2;consen_base=Y; consen_score=0.3646;consen_confi=0.7688;consen_single=0/0;consen_paired=2/2
1 AB_SOLiD SNP caller SNP 9089 9089 1 . . coverage=5;ref_base=T; ref_score=0.4260;ref_confi=0.9483;ref_single=1/1;ref_paired=1/1;consen_base=W; consen_score=0.3639;consen_confi=0.8100;consen_single=1/1;consen_paired=1/1
1 AB_SOLiD SNP caller SNP 9131 9131 1 . . coverage=8;ref_base=C; ref_score=0.7547;ref_confi=0.9306;ref_single=3/3;ref_paired=3/3;consen_base=Y; consen_score=0.2453;consen_confi=0.9073;consen_single=0/0;consen_paired=2/2
1 AB_SOLiD SNP caller SNP 18426 18426 1 . . coverage=3;ref_base=A; ref_score=0.0000;ref_confi=0.0000;ref_single=0/0;ref_paired=0/0;consen_base=G; consen_score=1.0000;consen_confi=0.8163;consen_single=0/0;consen_paired=3/3
```

The conversion can be done using `-format gff3-solid` argument.

```
[kaiwang@biocluster ~/]$ convert2annovar.pl var/Yoruban_snp_18x.gff -format gff3-solid | head
1 997 997 A G hom
1 1371 1371 A G hom
1 2061 2061 G C hom
1 4770 4770 A G hom
1 4793 4793 A G hom
1 5074 5074 T G het
1 6241 6241 T C het
1 9089 9089 T A het
1 9131 9131 C T het
1 18426 18426 A G hom
```

Adding the `--includeinfo` argument will print out an additional column with the detailed attribute of the calls.

### - SOAPsnp calling format

The Short Oligonucleotide Analysis Package (SOAP) suite is developed by BGI, and SOAPsnp is a component that generates variant calls. An example of the genotype call file is given below:

```
chr10 84026 G R 55 A 32 9 9 G 29 3 5 14 0.275000 1.42857 1 81
chr10 84541 C M 45 C 27 5 5 A 25 3 4 9 0.285714 1.11111 1 4
chr10 284953 A G 76 G 33 26 26 A 0 0 0 26 1.00000 1.00000 1 9472
chr10 313283 A R 99 G 32 15 15 A 28 8 8 23 0.162302 1.00000 1 28330
chr10 363048 T Y 99 T 26 12 12 C 30 10 10 22 0.461435 1.00000 1 14012
chr10 377060 G A 55 A 33 11 11 G 0 0 0 11 1.00000 1.00000 1 7654
chr10 384714 G A 74 A 33 18 18 G 0 0 0 18 1.00000 1.00000 1 552
chr10 418503 A G 34 G 34 4 4 A 0 0 0 4 1.00000 1.00000 1 7377
chr10 434997 C Y 73 T 26 5 5 C 26 4 4 9 0.682540 1.00000 1 64
chr10 435061 C T 36 T 30 16 16 C 0 0 0 16 1.00000 1.00000 1 64
```

The `convert2annovar.pl` program can handle this format, using the `-format soapsnp` argument. An example of the output file is given below:

```
10 84026 84026 G A het
10 84541 84541 C A het
10 284953 284953 A G hom
10 313283 313283 A G het
10 363048 363048 T C het
10 377060 377060 G A hom
10 384714 384714 G A hom
10 418503 418503 A G hom
10 434997 434997 C T het
10 435061 435061 C T hom
```

Note that is `--includeinfo` argument is used, all the information from input file will be included in the output file.

### - MAQ calling format

The `convert2annovar.pl` program can handle this format, using the `-format maq` argument. Both SNPs and indels can be correctly processed.

### - CASAVA calling format

The `convert2annovar.pl` program can handle this format, using the `-format casava` argument and also specifying the chromosome by `--chr` argument, since CASAVA call file per se does not contain chromosome information. Both SNPs and indels can be correctly processed.


---

<script>
  (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
  (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
  m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
  })(window,document,'script','//www.google-analytics.com/analytics.js','ga');

  ga('create', 'UA-48623707-1', 'openbioinformatics.org');
  ga('send', 'pageview');
</script>

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
    var disqus_identifier = 'input';
    var disqus_title = 'Prepare Input Files';
    
    /* * * DON'T EDIT BELOW THIS LINE * * */
    (function() {
        var dsq = document.createElement('script'); dsq.type = 'text/javascript'; dsq.async = true;
        dsq.src = '//' + disqus_shortname + '.disqus.com/embed.js';
        (document.getElementsByTagName('head')[0] || document.getElementsByTagName('body')[0]).appendChild(dsq);
    })();
</script>
<noscript>Please enable JavaScript to view the <a href="https://disqus.com/?ref_noscript" rel="nofollow">comments powered by Disqus.</a></noscript>









