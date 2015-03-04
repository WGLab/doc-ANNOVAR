The ANNOVAR package contains several accessary programs to help users convert file formats or perform additional functions. These accessary programs are described below.

## Variants_Reduction: prioritizing causal variants

In October 2012, a new program, variants_reduction.pl, was added into the ANNOVAR package to replace the old auto_annovar.pl. The new program is more flexible to allow users choose customized filtering procedure, and hopefully will be more useful than the old program to help identify causal variants from next-generation sequencing data.

If you are familiar with the annotate_variation.pl program, it should not be too hard to use variants_reduction.pl program. One example is shown below:

```
[kaiwang@biocluster ~/]$ variants_reduction.pl sample.avinput humandb/ -protocol nonsyn_splicing,genomicSuperDups,phastConsElements46way,1000g2012apr_all,esp5400_ea,esp5400_aa,snp135NonFlagged,dominant -operation g,rr,r,f,f,f,f,m -out reduce -buildver hg19
```

This command means to apply a series of filtering procedures to identify a small subset of variants/genes that are likely to be related to diseases. These filtering procedures include: identifying nonsynonymous and splicing variants, removing variants in segmental duplication regions, keeping variants in conserved genomic regions based on 46-way alignment, removing variants not observed in 1000 Genomes Project 2012 April release or ESP5400 European Americans or ESP5400 African Americans, removing variants observed in dbSNP135 Non Flagged set, and then apply a dominant disease model.

The -operation argument instruct what operation are used: gene-based (g), reverse region-based (rr), region-based (r), filter-based (f), filter-based (f), filter-based (f), filter-based (f), model-based (m), respectively.

The output are written to a set of files with reduce* file names.

Another example command is given below:

```
[kaiwang@biocluster ~/]$ variants_reduction.pl sample.avinput humandb -buildver hg19 -protocol nonsyn_splicing,1000g2012apr_all,esp6500_ea,esp6500_aa,snp135NonFlagged,cg46,ljb_sift,ljb_pp2,dominant -operation g,f,f,f,f,f,f,f,m -outfile reduce -genetype knowngene -aaf_threshold 0.01
```

Basically, this command will perform a similar set of operations as above, but additionally remove any variants observed in the CG46 database. Additionally, the AAF threhsold will be applied to all the 1000G, ESP6500 and CG46 databases. Furthermore, variants believed to be likely benign by SIFT or PolyPhen are removed. Finally, the UCSC Known Gene, rather than RefSeq Gene (default), will be used for gene-based annotation.

Notice: Due to user complaints, the -maf_threshold argument is no longer supported in July 2013 version of ANNOVAR. Users need to use --aaf_threshold argument instead, to denote alternative allele frequency, because "minor" allele does not have a clear-cut definition.

As you will see, basically as users, you specify what operations are used by ANNOVAR, and what specfic databases are used by the corresponding operation. Users have somewhat limited ability to select custom thresholds such as different MAF for different databases.

The program is not mature enough and will undergo additional changes in future versions to improve its functionality and to make it compatible in Windows operating system.

 

## Table_Annovar: Conversion of whole-genome data into an Excel file

Previous version of ANNOVAR before May 2013 included the summarize_annovar program. It takes an input file and generates tab-delimited annotation file, where each column represents one type of annotation. This program has been popular among ANNOVAR users, because it allows easy viewing of the results in Excel or other tools. However, summarize_annovar fixed the number and type of annotation, which severely limits user's ability to perform custom annotations.

In May 2013, I released the table_annovar.pl program to address this challenge.

Below I show how to use it on the ex1.avinput file as the input variant file:

```
[kaiwang@biocluster ~/]$ table_annovar.pl example/ex1.avinput humandb/ -buildver hg19 -out myanno -remove -protocol refGene,cytoBand,genomicSuperDups,esp6500si_all,1000g2012apr_all,snp138,ljb23_all -operation g,r,r,f,f,f,f -nastring . 
-----------------------------------------------------------------
NOTICE: Processing operation=g protocol=refGene

NOTICE: Running with system command <annotate_variation.pl -geneanno -buildver hg19 -dbtype refGene -outfile myanno.refGene -exonsort example/ex1.avinput humandb/>
NOTICE: Reading gene annotation from humandb/hg19_refGene.txt ... Done with 48660 transcripts (including 10375 without coding sequence annotation) for 25588 unique genes
NOTICE: Reading FASTA sequences from humandb/hg19_refGeneMrna.fa ... Done with 14 sequences
WARNING: A total of 333 sequences will be ignored due to lack of correct ORF annotation
NOTICE: Finished gene-based annotation on 15 genetic variants in example/ex1.avinput
NOTICE: Output files were written to myanno.refGene.variant_function, myanno.refGene.exonic_variant_function
-----------------------------------------------------------------
NOTICE: Processing operation=r protocol=cytoBand

NOTICE: Running with system command <annotate_variation.pl -regionanno -dbtype cytoBand -buildver hg19 -outfile myanno example/ex1.avinput humandb/>
NOTICE: Reading annotation database humandb/hg19_cytoBand.txt ... Done with 862 regions
NOTICE: Finished region-based annotation on 15 genetic variants in example/ex1.avinput
NOTICE: Output file is written to myanno.hg19_cytoBand
-----------------------------------------------------------------
NOTICE: Processing operation=r protocol=genomicSuperDups

NOTICE: Running with system command <annotate_variation.pl -regionanno -dbtype genomicSuperDups -buildver hg19 -outfile myanno example/ex1.avinput humandb/>
NOTICE: Reading annotation database humandb/hg19_genomicSuperDups.txt ... Done with 51599 regions
NOTICE: Finished region-based annotation on 15 genetic variants in example/ex1.avinput
NOTICE: Output file is written to myanno.hg19_genomicSuperDups
-----------------------------------------------------------------
NOTICE: Processing operation=f protocol=esp6500si_all

NOTICE: Running system command <annotate_variation.pl -filter -dbtype esp6500si_all -buildver hg19 -outfile myanno example/ex1.avinput humandb/>
NOTICE: the --dbtype esp6500si_all is assumed to be in generic ANNOVAR database format
NOTICE: Variants matching filtering criteria are written to myanno.hg19_esp6500si_all_dropped, other variants are written to myanno.hg19_esp6500si_all_filtered
NOTICE: Processing next batch with 15 unique variants in 15 input lines
NOTICE: Database index loaded. Total number of bins is 191802 and the number of bins to be scanned is 11
NOTICE: Scanning filter database humandb/hg19_esp6500si_all.txt...Done
-----------------------------------------------------------------
NOTICE: Processing operation=f protocol=1000g2012apr_all

NOTICE: Running system command <annotate_variation.pl -filter -dbtype 1000g2012apr_all -buildver hg19 -outfile myanno example/ex1.avinput humandb/>
NOTICE: Variants matching filtering criteria are written to myanno.hg19_ALL.sites.2012_04_dropped, other variants are written to myanno.hg19_ALL.sites.2012_04_filtered
NOTICE: Processing next batch with 15 unique variants in 15 input lines
NOTICE: Database index loaded. Total number of bins is 2793037 and the number of bins to be scanned is 15
NOTICE: Scanning filter database humandb/hg19_ALL.sites.2012_04.txt...Done
-----------------------------------------------------------------
NOTICE: Processing operation=f protocol=snp138

NOTICE: Running system command <annotate_variation.pl -filter -dbtype snp138 -buildver hg19 -outfile myanno example/ex1.avinput humandb/>
NOTICE: Variants matching filtering criteria are written to myanno.hg19_snp138_dropped, other variants are written to myanno.hg19_snp138_filtered
NOTICE: Processing next batch with 15 unique variants in 15 input lines
NOTICE: Database index loaded. Total number of bins is 2858459 and the number of bins to be scanned is 15
NOTICE: Scanning filter database humandb/hg19_snp138.txt...Done
-----------------------------------------------------------------
NOTICE: Processing operation=f protocol=ljb23_all

NOTICE: Running system command <annotate_variation.pl -filter -dbtype ljb23_all -buildver hg19 -outfile myanno example/ex1.avinput humandb/ -otherinfo>
NOTICE: the --dbtype ljb23_all is assumed to be in generic ANNOVAR database format
NOTICE: Variants matching filtering criteria are written to myanno.hg19_ljb23_all_dropped, other variants are written to myanno.hg19_ljb23_all_filtered
NOTICE: Processing next batch with 15 unique variants in 15 input lines
NOTICE: Database index loaded. Total number of bins is 195428 and the number of bins to be scanned is 9
NOTICE: Scanning filter database humandb/hg19_ljb23_all.txt...Done
-----------------------------------------------------------------
NOTICE: Multianno output file is written to myanno.hg19_multianno.txt
```

The output file is written to myanno.hg19_multianno.txt. This is a tab-delimited file, where each row represents one variant, and each column represents one annotation task. Table_annovar allows user to specify exactly which columns or annotation tasks are required, and allows user to select multiple versions of the same analysis (such as multiple gene-definition systems or multiple dbSNP databases).

Users can open the file in Excel 2007 (select "tab-delimited" when opening the file). Click the "DATA" tab at the menu bar, then click the big "Filter" button. Then click any one of the headings such as 1000G_CEU or SIFT to filter out variants, essentially by clicking the check boxes. For SIFT score, make sure to use "less than 0.05 OR equal to (blank)" so that variants without SIFT score do not get filtered out. It should be straightfoward to do, but it may need a little practice for users not familiar with Excel.

excel

Sometimes, the input file contains many extra columns (for example, when you convert a VCF file to ANNOVAR input format with -includeinfo argument), and the users may want to keep these extra information in the output. In this case, just add the -otherinfo argument to table_annovar.pl. The extra columns will be appended at the end of the annotation columns.

Next, try add the "-csvout" argument to the above command and run the program again. This time, a CSV file will be generated that can be directly loaded into Excel.

Next, let's try something more complicated, to generate gene-based annotations by different gene definition systems and filter-based annotations by different version of dbSNP:

```
[kaiwang@biocluster ~/]$ table_annovar.pl example/ex1.avinput humandb/ -buildver hg19 -protocol refGene,knownGene,ensGene,wgEncodeGencodeManualV4,gerp++elem,phastConsElements46way,genomicSuperDups,esp6500si_all,1000g2012apr_all,1000g2012apr_eur,1000g2012apr_amr,1000g2012apr_asn,1000g2012apr_afr,cg46,cosmic64,snp129,snp132,snp138,ljb23_all -operation g,g,g,g,r,r,r,f,f,f,f,f,f,f,f,f,f,f,f -csvout
```

Examine the results to see the consistence between different annotation approaches/versions.

The -arg argument is now supported, so that you can supply a list of comma-delimited optional arguments to table_annovar for each of the annotation tasks. For example, adding -arg '-splicing 5',,,,,,,,,,,, to the command will add change the splicing threshold to 5bp for the gene-based annotation. The use of -arg argument allows fully realize the potential of table_annovar to suit user needs in a much more customized manner.

## Handling VCF files

As of July 2014, table_annovar can directly take VCF file as input now, and generate a VCF file as output file, with its INFO field populated with various ANNOVAR annotations.

In the quick start-up guide, we have encountered the following example. The input VCF file contains a few variants for three samples.

```
[kaiwang@biocluster ~/]$ table_annovar.pl example/ex2.vcf humandb/ -buildver hg19 -out myanno -remove -protocol refGene,cytoBand,genomicSuperDups,esp6500si_all,1000g2012apr_all,snp138,ljb23_all -operation g,r,r,f,f,f,f -nastring . -vcfinput
```

Now let's examine the output file in detail. The input line in the VCF file ex4.vcf

```
16 50745926 rs2066844 C T 80 PASS NS=3;DP=14;AF=0.5;DB;H2 GT:GQ:DP:HQ 0|0:48:1:51,51 1|0:48:8:51,51 1/1:43:5:.,.
```

becomes

```
16 50745926 rs2066844 C T 80 PASS NS=3;DP=14;AF=0.5;DB;H2;ANNOVAR_DATE=2014-05-26;Func.refGene=exonic;Gene.refGene=NOD2;GeneDetail.refGene=.;ExonicFunc.refGene=nonsynonymous SNV;AAChange.refGene=NOD2:NM_001293557:exon3:c.C2023T:p.R675W,NOD2:NM_022162:exon4:c.C2104T:p.R702W;cytoBand=16q12.1;genomicSuperDups=.;esp6500si_all=0.031558;1000g2012apr_all=0.02;snp138=rs2066844;LJB23_SIFT_score=0.01;LJB23_SIFT_score_converted=0.99;LJB23_SIFT_pred=D;LJB23_Polyphen2_HDIV_score=0.999;LJB23_Polyphen2_HDIV_pred=D;LJB23_Polyphen2_HVAR_score=0.901;LJB23_Polyphen2_HVAR_pred=P;LJB23_LRT_score=0.993;LJB23_LRT_score_converted=0.503;LJB23_LRT_pred=N;LJB23_MutationTaster_score=1.000;LJB23_MutationTaster_score_converted=0.000;LJB23_MutationTaster_pred=N;LJB23_MutationAssessor_score=2.32;LJB23_MutationAssessor_score_converted=0.683;LJB23_MutationAssessor_pred=M;LJB23_FATHMM_score=-0.62;LJB23_FATHMM_score_converted=0.421;LJB23_FATHMM_pred=T;LJB23_RadialSVM_score=-0.855;LJB23_RadialSVM_score_converted=0.287;LJB23_RadialSVM_pred=T;LJB23_LR_score=0.138;LJB23_LR_pred=T;LJB23_GERP++=3.66;LJB23_PhyloP=1.421;LJB23_SiPhy=6.914;ALLELE_END GT:GQ:DP:HQ 0|0:48:1:51,51 1|0:48:8:51,51 1/1:43:5:.,.
```

in the output file myanno.hg19_multianno.vcf. The ANNOVAR_DATE marks the start of ANNOVAR annotation, whereas ALLELE_END marks the end of ANNOVAR annotation for this variant.

 

Let's take a look at another input line with two alternative alleles. The line

```
20 1110696 rs6040355 A G,T 67 PASS NS=2;DP=10;AF=0.333,0.667;AA=T;DB GT:GQ:DP:HQ 1|2:21:6:23,27 2|1:2:0:18,2 2/2:35:4
```

becomes

```
20 1110696 rs6040355 A G,T 67 PASS NS=2;DP=10;AF=0.333,0.667;AA=T;DB;ANNOVAR_DATE=2014-05-26;Func.refGene=intronic;Gene.refGene=PSMF1;GeneDetail.refGene=.;ExonicFunc.refGene=.;AAChange.refGene=.;cytoBand=20p13;genomicSuperDups=.;esp6500si_all=.;1000g2012apr_all=.;snp138=.;LJB23_SIFT_score=.;LJB23_SIFT_score_converted=.;LJB23_SIFT_pred=.;LJB23_Polyphen2_HDIV_score=.;LJB23_Polyphen2_HDIV_pred=.;LJB23_Polyphen2_HVAR_score=.;LJB23_Polyphen2_HVAR_pred=.;LJB23_LRT_score=.;LJB23_LRT_score_converted=.;LJB23_LRT_pred=.;LJB23_MutationTaster_score=.;LJB23_MutationTaster_score_converted=.;LJB23_MutationTaster_pred=.;LJB23_MutationAssessor_score=.;LJB23_MutationAssessor_score_converted=.;LJB23_MutationAssessor_pred=.;LJB23_FATHMM_score=.;LJB23_FATHMM_score_converted=.;LJB23_FATHMM_pred=.;LJB23_RadialSVM_score=.;LJB23_RadialSVM_score_converted=.;LJB23_RadialSVM_pred=.;LJB23_LR_score=.;LJB23_LR_pred=.;LJB23_GERP++=.;LJB23_PhyloP=.;LJB23_SiPhy=.;ALLELE_END;ANNOVAR_DATE=2014-05-26;Func.refGene=intronic;Gene.refGene=PSMF1;GeneDetail.refGene=.;ExonicFunc.refGene=.;AAChange.refGene=.;cytoBand=20p13;genomicSuperDups=.;esp6500si_all=.;1000g2012apr_all=.;snp138=.;LJB23_SIFT_score=.;LJB23_SIFT_score_converted=.;LJB23_SIFT_pred=.;LJB23_Polyphen2_HDIV_score=.;LJB23_Polyphen2_HDIV_pred=.;LJB23_Polyphen2_HVAR_score=.;LJB23_Polyphen2_HVAR_pred=.;LJB23_LRT_score=.;LJB23_LRT_score_converted=.;LJB23_LRT_pred=.;LJB23_MutationTaster_score=.;LJB23_MutationTaster_score_converted=.;LJB23_MutationTaster_pred=.;LJB23_MutationAssessor_score=.;LJB23_MutationAssessor_score_converted=.;LJB23_MutationAssessor_pred=.;LJB23_FATHMM_score=.;LJB23_FATHMM_score_converted=.;LJB23_FATHMM_pred=.;LJB23_RadialSVM_score=.;LJB23_RadialSVM_score_converted=.;LJB23_RadialSVM_pred=.;LJB23_LR_score=.;LJB23_LR_pred=.;LJB23_GERP++=.;LJB23_PhyloP=.;LJB23_SiPhy=.;ALLELE_END GT:GQ:DP:HQ 1|2:21:6:23,27 2|1:2:0:18,2 2/2:35:4
```

in the output file. Note that two ANNOVAR_DATE and two ALLELE_END are present in the line, corresponding to the two alleles, respectively. This way a user can easily identify the annotations for a specific allele.

 

## Conversion of input file format

The convert2annovar.pl program can be uesd to convert various file formats into ANNOVAR input file format. This topic has been discussed in detail in the [Input](/user-guide/input.md) section.

 

## Retrieval of nucleotide and protein sequences from a particular genomic region

The retrieve_seq_from_fasta.pl program can be used to retrieve genomic nucleotide sequences or cDNA sequences, or translated amino acid sequences (this functionality is currently being developed and will be released in future ANNOVAR version) from many user-specified genomic regions. It can take several different types of region files, hereafter referred to as "simple", "tab", "refGene", "ensGene", "knownGene".

A few examples are given below to illustrate the use of this program. Before running the example, first download the genomic sequences for whole human genome. They will be saved in the `humandb/hg18seq/` directory.

```
[kai@biocluster ~/]$ annotate_variation.pl -downdb seq humandb/hg18seq/
```

1. simple input files

The file list simple regions in the first column of each line (other columns can be present but will not be used). For example,

```
[kai@beta ~/biocluster]$ cat example.simple_region
chr10:4000000-4000100
chr10:7000000-8000000
```

This file contains two genomic regions. To retrieve the sequence for these two regions (100bp and 1Mb, respectively), use

```
[kai@beta ~/biocluster]$ retrieve_seq_from_fasta.pl -format simple -seqdir ../humandb/hg18_seq/ example.simple_region 
NOTICE: The output file is written to example.simple_region.fa (use --outfile to change this)
NOTICE: Finished reading 1 sequences from ../humandb/hg18_seq/chr10.fa
NOTICE: Finished writting FASTA for 2 genomic regions to example.simple_region.fa.

[kai@biocluster ~/]$ head -n 2 example.simple_region.fa 
>chr10:4000000-4000100 Comment: this DNA sequence is generated by ANNOVAR on Thu Aug 5 21:58:08 2010, based on regions speficied in example.simple_region and sequence files stored at ../humandb/hg18_seq/.
CACCATAATCCGTCTCGCCATTCTTTCCCAAGGGGCTTTATTCGTTCTATCTCCATGCTCTTCTCAACATCACCTGCCACTGTTGGCTCGTGGACTTTTT
```

2. tab-delimited input files

The file list chr, start and end position in tab delimited format as the first 3 columns of each line (other columns can be present but will not be used). An example is given below. Note that the -outfile can be used to specify an output file name.

```
[kai@biocluster ~/]$ cat example.tab_region 
chr10 4000000 4000100
chr10 7000000 8000000

[kai@biocluster ~/]$ retrieve_seq_from_fasta.pl -format tab -seqdir ../humandb/hg18_seq/ -outfile example.fa example.tab_region 
NOTICE: Finished reading 1 sequences from ../humandb/hg18_seq/chr10.fa
NOTICE: Finished writting FASTA for 2 genomic regions to example.fa.
```

3. refGene input files

The file is in UCSC refGene format that contains exon start and end positions. The output will be mRNA/cDNA sequences, rather than genomic seqences.

```
[kai@biocluster ~/]$ head hg19_refGene.txt 
971 NR_024227 chr19 - 50595745 50595866 50595866 50595866 1 50595745, 50595866, 0 SNAR-A6unk unk -1,
971 NR_024227 chr19 - 50601082 50601203 50601203 50601203 1 50601082, 50601203, 0 SNAR-A6unk unk -1,
629 NM_001014809 chr4 - 5822491 5894785 5823486 5894696 14 5822491,5827220,5830215,5837641,5838491,5841248,5843034,5844819,5851118,5853134,5857869,5862752,5868394,5894315, 5823578,5827386,5830395,5837812,5838633,5841405,5843155,5844888,5851199,5853196,5858034,5862937,5868483,5894785, CRMP1 cmpl cmpl 1,0,0,0,2,1,0,0,0,1,1,2,0,0,
808 NM_001029883 chr2 - 29284557 29297127 29287734 29297127 2 29284557,29293459, 29287933,29297127, C2orf71 cmpl cmpl 2,0,
705 NM_024329 chr1 + 15736390 15756839 15736467 15755220 4 15736390,15752366,15753645,15755088, 15736775,15752514,15753780,15756839, 0 EFHD2 cmpl cmpl 0,2,0,0,

[kai@biocluster ~/]$ retrieve_seq_from_fasta.pl -format refGene -seqdir hg19_seq/ -outfile example.fa hg19_refGene.txt
NOTICE: Finished reading 1 sequences from hg19_seq/chr1_gl000191_random.fa
NOTICE: Finished reading 1 sequences from hg19_seq/chr22.fa
NOTICE: Finished reading 1 sequences from hg19_seq/chr14.fa
...
...
NOTICE: Finished writting FASTA for 36824 genomic regions to example.fa.
```

4. knownGene input files

The handling of this type of input files is very similar to the refGene input files. Future versions of ANNOVAR may merge these input files together.

5. ensGene inputfiles

The handling of this type of input files is very similar to the refGene input files. Future versions of ANNOVAR may merge these input files together.

6. Others (such as Gencode) input files

Use the genericGene as the `-format` argument.

