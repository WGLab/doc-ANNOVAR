To easily get started with ANNOVAR, there might be some common cases you will consider to do using ANNOVAR. Here, we provide a start to end example for you to follow.
### 0. (Before we get started) Understand the ANNOVAR package and download the dataset/annotation of your interest
When you have requested the ANNOVAR from the website and downloaded it, you will have a file that look like this:
```
(base) [wangp5@reslnvhpc0202 ANNOVAR_tutorial]$ ls -lh
total 156M
-rw-r--r-- 1 wangp5 wang_lab_hpc 136M Sep 22 21:21 annovar.latest.tar.gz
```
First you will need to unzip it, you can use the command like `tar -xvzf annovar.latest.tar.gz` to do it. Once you unzip it, the annovar package will show up as a folder and it will look like this:
```
(base) [wangp5@reslnvhpc0202 ANNOVAR_tutorial]$ ls -1 annovar
annotate_variation.pl
coding_change.pl
convert2annovar.pl
example
humandb
retrieve_seq_from_fasta.pl
table_annovar.pl
variants_reduction.pl
``` 
In the `annovar` folder, the files end with `.pl` are the perl scripts that we could run. The `example` contains different input file examples and parameter confis examples. The `humandb` is our warehouse, it stores all the database of interest so ANNOVAR know how to annotate the variants based on the annotation we required. Therefore, before we begin, we need to understand what database we neend, and what version of that database we need, as well as the genome version.

For example, if I would like to annotate my variants with ClinVar and gnomAD database, and I know my variants are from genome version hg38. You will then need to check which version you would like to use in [ANNOVAR addional database page](https://annovar.openbioinformatics.org/en/latest/user-guide/download/#additional-databases). 
And I found the latest database for ClinVar and gnomAD will be:
| Build | Table Name | Explanation | Date |
|---|---|---|---|
| hg38 | refGene | same as above (last update was 2020-08-17 at UCSC) | 20211019 |
| hg38 | dbnsfp47a | same as above | 20240525 |
| hg38 | gnomad41_exome | version 4.1 whole-exome data | 20240602 |
| hg38 | gnomad41_genome | version 4.1 whole-genome data | 20240602 |
| hg38 | clinvar_20240611 |  same as above | 20240616 |
| hg38 | cytoBand |||

To download these databases, you will enter into the `annovar/` package folder and tun the following commands:
```
(base) [wangp5@reslnvhpc0202 annovar]$ perl annotate_variation.pl -buildver hg38 -downdb -webfrom annovar refGene humandb/
(base) [wangp5@reslnvhpc0202 annovar]$ perl annotate_variation.pl -buildver hg38 -downdb cytoBand humandb/
(base) [wangp5@reslnvhpc0202 annovar]$ perl annotate_variation.pl -buildver hg38 -downdb -webfrom annovar gnomad41_exome humandb/
(base) [wangp5@reslnvhpc0202 annovar]$ perl annotate_variation.pl -buildver hg38 -downdb -webfrom annovar clinvar_20240611 humandb/
```
Now check if the databases have been downloaded correctly:
```
(base) [wangp5@reslnvhpc0202 annovar]$ ls humandb/
annovar_downdb.log           hg19_example_db_gff3.txt  hg19_refGeneVersion.txt        hg38_cytoBand.txt            hg38_refGeneVersion.txt
genometrax-sample-files-gff  hg19_MT_ensGeneMrna.fa    hg19_refGeneWithVerMrna.fa     hg38_gnomad41_exome.txt
GRCh37_MT_ensGeneMrna.fa     hg19_MT_ensGene.txt       hg19_refGeneWithVer.txt        hg38_gnomad41_exome.txt.idx
GRCh37_MT_ensGene.txt        hg19_refGeneMrna.fa       hg38_clinvar_20240611.txt      hg38_refGeneMrna.fa
hg19_example_db_generic.txt  hg19_refGene.txt          hg38_clinvar_20240611.txt.idx  hg38_refGene.txt
````
As we can see, in the `humandb\` folder, the `hg38_clinvar_20240611.txt`, `hg38_cytoBand.txt`, `hg38_gnomad41_exome.txt` and `hg38_refGene.txt` have been downloaded correctly. 


### 1. I have a list of varaints, how do I get population and clinical information for these variants?

### 2. I want to run ANNOVAR using the new database, or a differnet chromosome, how do I do it?

### 3. I have a vcf files, how do I run ANNOVAR using my vcf file directly and get the annotation?

### 4. How do i get the pathogenicity prediction from ANNOVAR, and how do I interpret it?

### 5. I have a very big vcf file/very large list of variants, how do i run ANNOVAR to process it?
