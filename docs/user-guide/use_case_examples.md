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
| hg38 | refGene | FASTA sequences for all annotated transcripts in RefSeq Gene (last update was 2020-08-17 at UCSC) | 20211019 |
| hg38 | dbnsfp47a | dbNSFP version 4.7a | 20240525 |
| hg38 | gnomad41_exome | version 4.1 whole-exome data | 20240602 |
| hg38 | gnomad41_genome | version 4.1 whole-genome data | 20240602 |
| hg38 | clinvar_20240611 |  Clinvar version 20240611 with separate columns | 20240616 |
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


### Case 1. With a list of variant in vcf format, find gene name and amino acid changes, then interpret and check the results.
Now let's do some annotation on the variants. Make a `mywork` (or any name you like) directory in the `annovar` package folder to store my data and result, then get your vcf file ready.
```
(base) [wangp5@reslnvhpc0202 annovar]$ mkdir mywork
(base) [wangp5@reslnvhpc0202 annovar]$ cd mywork/
(base) [wangp5@reslnvhpc0202 mywork]$ cp /home/wangp5/Downloads/final_annovar_input.vcf .
(base) [wangp5@reslnvhpc0202 mywork]$ ls
final_annovar_input.vcf
```
Take a look on your vcf file first:
```
(base) [wangp5@reslnvhpc0202 mywork]$ head final_annovar_input.vcf 
##fileformat=VCFv4.0
#CHROM	POS	ID	REF	ALT	QUAL	FILTER	INFO
2	162279995	.	C	G	.	.	.
2	162310909	.	T	C	.	.	.
1	11046609	.	T	C	.	.	.
19	19193983	.	A	T	.	.	.
7	147903589	.	T	C	.	.	.
17	82079248	.	G	A	.	.	.
10	63219963	.	G	C	.	.	.
13	101103286	.	T	A	.	.	.
```
There are 8 columns in a normal vcf file, and in this vcf file there is no quality score, id and other info, it only has the chromosome number, position, reference and alterantive allele, but this will be enough for ANNOVAR to run annotation.
Since we only interested in a very simple task: what is the gene and amino acid change (if possible) for these variants. We could run the following command:
```
(base) [wangp5@reslnvhpc0202 annovar]$ perl table_annovar.pl mywork/final_annovar_input.vcf humandb/ -buildver hg38 -out mywork/myanno_out1 -remove -protocol refGene -operation g -nastring . -vcfinput -polish
```
In this command, we used `table_annovar.pl` to perform annotation, the input file is `mywork/final_annovar_input.vcf`, the genome version we used is `hg38`, the output file name and directory `mywork/myanno_out1`. Then the `-protocol` is a key part of running ANNOVAR, it represents what database we will used, here I only used the refGene we downloaded previously, and the `-operation` tag provide instruction of what operation we run for each protocal (i.e., refGene), here we used `g` which means gene-based. Another commonnly used operation is `f` which is filter-based. For details about different type of operation could be found [ANNOVAR startup page](https://annovar.openbioinformatics.org/en/latest/user-guide/startup/). The N/A string will be represented by `.`, which is adjustable by the tag `-nastring`.

Now let's check what is the output looks like.
```
base) [wangp5@reslnvhpc0202 annovar]$ ls mywork/
final_annovar_input.vcf  myanno_out1.avinput  myanno_out1.hg38_multianno.txt  myanno_out1.hg38_multianno.vcf
```
The result is in `myanno_out1.hg38_multianno.txt`, and there will be many columns we are not currently interested, like the Otherinfo columns, let's print all the column out first.
```
(base) [wangp5@reslnvhpc0202 annovar]$ head -n 1 mywork/myanno_out1.hg38_multianno.txt 
Chr	Start	End	Ref	Alt	Func.refGene	Gene.refGene	GeneDetail.refGene	ExonicFunc.refGene	AAChange.refGene	Otherinfo1	Otherinfo2	Otherinfo3	Otherinfo4	Otherinfo5	Otherinfo6	Otherinfo7	Otherinfo8	Otherinfo9	Otherinfo10	Otherinfo11
```
The Otherinfo columns are the original columns from input vcf files, and they were concatinate for each variant at the end of our ANNOVAR regGene annotation. Let's just look at the result from refGene annotation (columns 1-10):
```
(base) [wangp5@reslnvhpc0202 annovar]$ head -n 5 mywork/myanno_out1.hg38_multianno.txt | cut -f 1-10
Chr	Start	End	Ref	Alt	Func.refGene	Gene.refGene	GeneDetail.refGene	ExonicFunc.refGene	AAChange.refGene
2	162279995	162279995	C	G	splicing	IFIH1	NM_022168:exon8:c.1641+1G>C	.	.
2	162310909	162310909	T	C	exonic	IFIH1	.	nonsynonymous SNV	IFIH1:NM_022168:exon2:c.A478G:p.N160D
1	11046609	11046609	T	C	exonic	MASP2	.	nonsynonymous SNV	MASP2:NM_006610:exon3:c.A359G:p.D120G,MASP2:NM_139208:exon3:c.A359G:p.D120G
19	19193983	19193983	A	T	exonic	RFXANK	.	nonsynonymous SNV	RFXANK:NM_001278728:exon2:c.A37T:p.T13S,RFXANK:NM_001370233:exon2:c.A37T:p.T13S,RFXANK:NM_001370234:exon2:c.A37T:p.T13S,RFXANK:NM_001370236:exon2:c.A37T:p.T13S,RFXANK:NM_001370237:exon2:c.A37T:p.T13S,RFXANK:NM_001370238:exon2:c.A37T:p.T13S,RFXANK:NM_001278727:exon3:c.A37T:p.T13S,RFXANK:NM_001370235:exon3:c.A37T:p.T13S,RFXANK:NM_003721:exon3:c.A37T:p.T13S,RFXANK:NM_134440:exon3:c.A37T:p.T13S
```
The first 5 columns describe the chromosome, position, reference allele and alterantive allele for each vairant. The gene name is the 7th column `Gene.refGene`, as we can see 'IFIH1', 'MASP2' and 'RFXANK' are shown. For amino acid change of this variant, we could check the 10th column `AAChange.refGene`, and it will tell us the amino acid change per transcript. Note that the first variant '2	162279995	162279995	C	G' does not have amino acid change becuase it is not in the protein coding region, instead it is in the 'splicing' region. And for the variant '1	11046609	11046609	T	C', there are two protein changes 'p.D120G' and 'p.D120G' and this is because there are 2 transcripts (isoforms) for this MASP2 variant, and in this case they are the same amino acid change in the same position, but sometimes you will see different position for amino acid change in different isoforms. 

### 2. I want to run ANNOVAR using the new database, or a differnet chromosome, how do I do it?

### 3. I have a vcf files, how do I run ANNOVAR using my vcf file directly and get the annotation?

### 4. How do i get the pathogenicity prediction from ANNOVAR, and how do I interpret it?

### 5. I have a very big vcf file/very large list of variants, how do i run ANNOVAR to process it?
