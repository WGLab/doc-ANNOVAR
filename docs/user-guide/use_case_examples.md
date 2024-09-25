To easily get started with ANNOVAR, there might be some common use cases you will consider to do using ANNOVAR. Here, we provide a start to end example for you to follow. The use cases include:

* **Case 1. With a list of variant in vcf format, find gene name and amino acid changes, then interpret and check the results.**
* **Case 2. Runing ANNOVAR annotation on human exome VCF file, consider both intronic and exonic regions, with a downstream analysis on all variants.**
  * Downstream analysis includes chromosome distribution, variant type ditritbution, clinvar pathogenicity, CADD score, MetaRNN/AlphaMissense score, etc.
* **Case 3. Prepared and update the latestes annotation database (such as ClinVar) to use in ANNOVAR using prepare_annovar_user.pl**
* **Case 4. Annotate the amino acid changes for all exome vairants.**
* **Case 5. Annotate the coding and noncoding variants from a list of RSID from genome-wide association studies, and make hypothesis for causal variants vs. variants that regulate genome function.**


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
| hg38 | refGeneWithVer | same as above  (last update was 2020-08-17 at UCSC) | 20211019 |
| hg38 | dbnsfp47a | dbNSFP version 4.7a | 20240525 |
| hg38 | gnomad41_exome | version 4.1 whole-exome data | 20240602 |
| hg38 | gnomad41_genome | version 4.1 whole-genome data | 20240602 |
| hg38 | clinvar_20240611 |  Clinvar version 20240611 with separate columns | 20240616 |

To download these databases, you will enter into the `annovar/` package folder and tun the following commands:
```
(base) [wangp5@reslnvhpc0202 annovar]$ perl annotate_variation.pl -buildver hg38 -downdb -webfrom annovar refGene humandb/
(base) [wangp5@reslnvhpc0202 annovar]$ perl annotate_variation.pl -buildver hg38 -downdb -webfrom annovar refGeneWithVer humandb/
(base) [wangp5@reslnvhpc0202 annovar]$ perl annotate_variation.pl -buildver hg38 -downdb -webfrom annovar dbnsfp47a humandb/
(base) [wangp5@reslnvhpc0202 annovar]$ perl annotate_variation.pl -buildver hg38 -downdb -webfrom annovar gnomad41_exome humandb/
(base) [wangp5@reslnvhpc0202 annovar]$ perl annotate_variation.pl -buildver hg38 -downdb -webfrom annovar clinvar_20240611 humandb/
```
Now check if the databases have been downloaded correctly:
```
(base) [wangp5@reslnvhpc0202 annovar]$ ls humandb/
annovar_downdb.log           hg19_MT_ensGeneMrna.fa      hg19_refGeneWithVer.txt        hg38_dbnsfp47a.txt           hg38_refGeneVersion.txt
genometrax-sample-files-gff  hg19_MT_ensGene.txt         hg38_avsnp147.txt              hg38_dbnsfp47a.txt.idx       hg38_refGeneWithVerMrna.fa
GRCh37_MT_ensGeneMrna.fa     hg19_refGeneMrna.fa         hg38_avsnp147.txt.idx          hg38_gnomad41_exome.txt      hg38_refGeneWithVer.txt
GRCh37_MT_ensGene.txt        hg19_refGene.txt            hg38_clinvar_20240611.txt      hg38_gnomad41_exome.txt.idx
hg19_example_db_generic.txt  hg19_refGeneVersion.txt     hg38_clinvar_20240611.txt.idx  hg38_refGeneMrna.fa
hg19_example_db_gff3.txt     hg19_refGeneWithVerMrna.fa  hg38_cytoBand.txt              hg38_refGene.txt
````
As we can see, in the `humandb\` folder, the `hg38_clinvar_20240611.txt`, `hg38_cytoBand.txt`, `hg38_gnomad41_exome.txt` and `hg38_refGene.txt` have been downloaded correctly. Note that we will use `hg38_refGeneWithVer.txt` for all future ANNOVAR annotation so it could provide the transcript version for variants.


### Case 1. With a list of variant in vcf format, find gene name and amino acid changes, then interpret and check the results.
Now let's do some annotation on the variants. Make a `mywork` (or any name you like) directory in the `annovar` package folder to store the input data and result.
```
(base) [wangp5@reslnvhpc0202 annovar]$ mkdir mywork
(base) [wangp5@reslnvhpc0202 annovar]$ cd mywork/
(base) [wangp5@reslnvhpc0202 mywork]$ cp /home/wangp5/Downloads/final_annovar_input.vcf .
(base) [wangp5@reslnvhpc0202 mywork]$ ls
final_annovar_input.vcf
```
In here the vcf file we used is from this [paper](https://www.sciencedirect.com/science/article/pii/S2153353922007246) which evaluated the ANNOVAR using 298 variants with ground truth of variant annotation, however they might run ANNOVAR in inappropriate way so they had a wrong conclusion about ANNOVAR. Here we used the exact vcf file they provided to do a demo so we could get the proper variant annotation (DNA change, amino acid change) , with transcript version provided. Take a look on our vcf file  first:
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
(base) [wangp5@reslnvhpc0202 annovar]$ perl table_annovar.pl mywork/final_annovar_input.vcf humandb/ -buildver hg38 -out mywork/myanno_withVer -remove -protocol refGeneWithVer -operation g -nastring . -vcfinput -polish
```
In this command, we used `table_annovar.pl` to perform annotation, the input file is `mywork/final_annovar_input.vcf`, the genome version we used is `hg38`, the output file name and directory `mywork/myanno_out1`. Then the `-protocol` is a key part of running ANNOVAR, it represents what database we will used, here I only used the refGene we downloaded previously, and the `-operation` tag provide instruction of what operation we run for each protocal (i.e., refGeneWithVer), here we used `g` which means gene-based. Another commonnly used operation is `f` which is filter-based, which we will use later. For details about different type of operation could be found [ANNOVAR startup page](https://annovar.openbioinformatics.org/en/latest/user-guide/startup/). The N/A string will be represented by `.`, which is adjustable by the tag `-nastring`. Also the `-polish` command shows complete amino acid change (such as c.35delG:p.G12Vfs*2) in gene annotation, and this has long been turned on by defalt since 2019.

Now let's check what is the output looks like.
```
(base) [wangp5@reslnvhpc0202 annovar]$ ls mywork/
final_annovar_input.vcf  myanno_withVer.avinput  myanno_withVer.hg38_multianno.txt  myanno_withVer.hg38_multianno.vcf
```
The result is in `myanno_out1.hg38_multianno.txt`, and there will be many columns we are not currently interested, like the Otherinfo columns, let's print all the column out first.
```
(base) [wangp5@reslnvhpc0202 annovar]$ head -n 1 mywork/myanno_withVer.hg38_multianno.txt 
Chr	Start	End	Ref	Alt	Func.refGeneWithVer	Gene.refGeneWithVer	GeneDetail.refGeneWithVer	ExonicFunc.refGeneWithVer	AAChange.refGeneWithVer	Otherinfo1	Otherinfo2	Otherinfo3	Otherinfo4	Otherinfo5	Otherinfo6	Otherinfo7	Otherinfo8Otherinfo9	Otherinfo10	Otherinfo11
```
The Otherinfo columns are the original columns from input vcf files, and they were concatinate for each variant at the end of our ANNOVAR regGene annotation. Let's just look at the result from refGene annotation (columns 1-10):
```
(base) [wangp5@reslnvhpc0202 annovar]$ head -n 5 mywork/myanno_out1.hg38_multianno.txt | cut -f 1-10
(base) [wangp5@reslnvhpc0202 annovar]$ head -n 5 mywork/myanno_withVer.hg38_multianno.txt | cut -f 1-10
Chr	Start	End	Ref	Alt	Func.refGeneWithVer	Gene.refGeneWithVer	GeneDetail.refGeneWithVer	ExonicFunc.refGeneWithVer	AAChange.refGeneWithVer
2	162279995	162279995	C	G	splicing	IFIH1	NM_022168.4:exon8:c.1641+1G>C	.	.
2	162310909	162310909	T	C	exonic	IFIH1	.	nonsynonymous SNV	IFIH1:NM_022168.4:exon2:c.A478G:p.N160D
1	11046609	11046609	T	C	exonic	MASP2	.	nonsynonymous SNV	MASP2:NM_006610.4:exon3:c.A359G:p.D120G,MASP2:NM_139208.3:exon3:c.A359G:p.D120G
19	19193983	19193983	A	T	exonic	RFXANK	.	nonsynonymous SNV	RFXANK:NM_001278728.1:exon2:c.A37T:p.T13S,RFXANK:NM_001370233.1:exon2:c.A37T:p.T13S,RFXANK:NM_001370234.1:exon2:c.A37T:p.T13S,RFXANK:NM_001370236.1:exon2:c.A37T:p.T13S,RFXANK:NM_001370237.1:exon2:c.A37T:p.T13S,RFXANK:NM_001370238.1:exon2:c.A37T:p.T13S,RFXANK:NM_001278727.1:exon3:c.A37T:p.T13S,RFXANK:NM_001370235.1:exon3:c.A37T:p.T13S,RFXANK:NM_003721.4:exon3:c.A37T:p.T13S,RFXANK:NM_134440.2:exon3:c.A37T:p.T13S
```
The first 5 columns describe the chromosome, position, reference allele and alterantive allele for each vairant. The gene name is the 7th column `Gene.refGeneWithVer`, as we can see 'IFIH1', 'MASP2' and 'RFXANK' were shown. For amino acid change of this variant, we could check the 10th column `AAChange.refGeneWithVer`, and it will tell us the amino acid change per transcript. Note that the first variant '2	162279995	162279995	C	G' does not have amino acid change becuase it is not in the protein coding region, instead it is in the 'splicing' region. And for the variant '1	11046609	11046609	T	C', there are two protein changes 'p.D120G' and 'p.D120G' and this is because there are 2 transcripts (isoforms) for this MASP2 variant, and in this case they are the same amino acid change in the same position, but sometimes you will see different position for amino acid change in different isoforms. 

### 2. Runing ANNOVAR annotation on human exome VCF file, consider both intronic and exonic regions, with a downstream distribution analysis on all variants. 
Downstream analysis includes chromosome distribution, variant type ditritbution, clinvar pathogenicity, CADD score, MetaRNN/AlphaMissense score, etc.(including HGVS annotations for intronic variants, then evaluate all variants for the chromosome distribution, variant type distribution, ClinVar distribution)

Before we run the human exome annotation, we need to download the data we need, we can run this command to download the data into `mywork/`:
```
(base) [wangp5@reslnvhpc0202 annovar]$ wget http://molecularcasestudies.cshlp.org/content/suppl/2016/10/11/mcs.a001131.DC1/Supp_File_2_KBG_family_Utah_VCF_files.zip -O mywork/Supp_File_2_KBG_family_Utah_VCF_files.zip
```
To give some background information, this is a zip file as supplementary material of a published paper on exome sequencing of a family with undiagnosed genetic diseases. Through analysis of the exome data, the proband was confirmed to have KBG syndrome, a disease caused by loss of function mutations in ANKRD11 gene. There are several VCF files contained in the zip file, including those for parents, silings and the proband. We will only analyze proband in this exercise, but if you are interested, you may want to check whether this is a de novo mutation by analyzing parental genomes.

Then we can unzip it and take a look what it has:
```
(base) [wangp5@reslnvhpc0202 annovar]$ unzip mywork/Supp_File_2_KBG_family_Utah_VCF_files.zip
(base) [wangp5@reslnvhpc0202 annovar]$ mv 'File 2_KBG family Utah_VCF files'/ mywork/VCF_files
(base) [wangp5@reslnvhpc0202 annovar]$ ls mywork/VCF_files/
proband.vcf  Unaffected_brother.vcf  Unaffected_father.vcf  Unaffected_mother.vcf  Unaffected_sister1.vcf  Unaffected_sister2.vcf
```

Because this vcf file used hg19 as reference, we will need to downloading corresponding hg19 databases for proper results:
```
(base) [wangp5@reslnvhpc0202 annovar]$ perl annotate_variation.pl -buildver hg19 -downdb -webfrom annovar refGeneWithVer humandb/; perl annotate_variation.pl -buildver hg19 -downdb -webfrom annovar dbnsfp47a humandb/; perl annotate_variation.pl -buildver hg19 -downdb -webfrom annovar gnomad211_exome humandb/; perl annotate_variation.pl -buildver hg19 -downdb -webfrom annovar clinvar_20240917 humandb/
```

Now we have prepared all the datasets we need, let's run `table_annovar.pl` on the exome sequencing of proband `proband.vcf`. We will want to have gene annotation (`refGeneWithVer` operation), ClinVar annotation (`clinvar_20240917` operation), gnomADv2.1.1 exome annotation (`gnomad211_exome` operation), and pathogenicity preditions from various tools (`dbnsfp47a` operation). Note that we could give arguement for a specific operation, in here we use `-arg '-hgvs',,,` to the `refGeneWithVer` operation so that the output is in HGVS format (e.g., c.122C>T rather than c.C122T). Moreover, we want to have HGVS formmat for our intronic region as well, so we use `-intronhgvs` tag seperately and give a range of 100 which means anywhere within 100 bp away from the intron/extron boundary will have HGVS format annotation.

Then we can finnally run our command:
```
(base) [wangp5@reslnvhpc0202 annovar]$ perl table_annovar.pl mywork/VCF_files/proband.vcf humandb/ -buildver hg19 -out mywork/proband.annovar -remove -protocol refGeneWithVer,clinvar_20240917,gnomad211_exome,dbnsfp47a -operation g,f,f,f -arg '-hgvs',,, -polish -nastring . -vcfinput -intronhgvs 100
```
The `proband.annovar.hg19_multianno.txt` file contains annotations for this exome. Compared to previous command, note that here we have 4 protocols, and the operations for these protocols are gene-based, filter-based, filter-based, filter-based respectively. 

We can use `less mywork/proband.annovar.hg19_multianno.txt` to check what the output looks like:
![image](https://github.com/user-attachments/assets/826fddc4-d926-4e9d-9983-634e44664295)

The screenshot showed us the complete columns and the partial of the first variant. We see some familiar columns from **Case 1**, such as variant basic information (first 5 columns), refGeneWithVer annotation, and otherinfo columns at the end. The new columns that start with `CLN` are from ClinVar annotation, the columns that start with `gnomad41` are from gnomADv4.1 annotation. And the rest of the columns are from the `dbnsfp47a` annotations, they are the pathogenic classification (end with `_pred`) or predicted score (end with `_score` or `_rankscore`) from various tools or methods.

#### Downstream Analysis and Visualization
- Chromosome distribution
  Start from here, one could have various way to perform the downstream analysis, such as python or R or excel. Here, we use a simple command line to get the chromosome distribution. We used `awk` to count the number of variants per chromosome then pipe (`|`) it into a `sort` to sort the output based on chromosome number (`-V` stands for version numbers). At last, we use `>` to save our result into a file named `variant_counts.txt`.
```
(base) [wangp5@reslnvhpc0202 annovar]$ cd mywork/
(base) [wangp5@reslnvhpc0202 annovar]$ awk 'NR>1 {chromosome_count[$1]++} END {for (chr in chromosome_count) {print chr, chromosome_count[chr]}}' proband.annovar.hg19_multianno.txt | sort -V > variant_counts.txt
(base) [wangp5@reslnvhpc0202 annovar]$ cat variant_counts.txt
chr1 2274
chr2 1418
chr3 1225
chr4 866
chr5 1038
chr6 966
chr7 947
chr8 751
chr9 896
chr10 894
chr11 1606
chr12 1081
chr13 382
chr14 770
chr15 727
chr16 915
chr17 1258
chr18 339
chr19 1786
chr20 572
chr21 338
chr22 471
chrX 273
```

We can see that the number of variants per chromosome is shown in the output, you could change the `sort -V` into `sort -k2,2n` to sort the result based on number of variants. The variants are not distributed evenly: chr1 has the highest number of variants, while chrX has the lowest number of vairants. With this distribution, one could easily visulize it in various way. Here we used python to visualize the result (`matplotlib` required).

Create a python script `plot_variants.py` with the following scripts (make sure you have `matplotlib` install. if not, use `pip install matplotlib` to install first):
```
#pip install matplotlib 
import matplotlib.pyplot as plt

# Initialize lists to store chromosomes and their corresponding variant counts
chromosomes = []
variant_counts = []

# Read the data from the file
with open("variant_counts.txt", "r") as file:
    for line in file:
        chr_name, count = line.split()
        chromosomes.append(chr_name)
        variant_counts.append(int(count))

# Create a bar plot
plt.figure(figsize=(10, 6))
plt.bar(chromosomes, variant_counts, color='skyblue')

# Add labels and title
plt.xlabel('Chromosomes')
plt.ylabel('Number of Variants')
plt.title('Variant Count Distribution Across Chromosomes')

# Rotate the x-axis labels for better visibility
plt.xticks(rotation=45, ha='right')

# Display the plot
plt.tight_layout()
plt.savefig("variant_distribution.png", format='png', dpi=300)

print("Plot saved as 'variant_distribution.png'")
```

Then run the python script and check the output plot.
```
(base) [wangp5@reslnvhpc0202 mywork]$ python plot_variants.py 
Plot saved as 'variant_distribution.png'
```

Now we can open the 'variant_distribution.png' to have a good look on the variant distribution across chromosomes:

![variant_distribution](https://github.com/user-attachments/assets/a04cd817-8329-4813-b89f-c8c0ce41e5e3)


- Variant Type Distribution
  Another useful information for an exome annotation will be the variant type distribution. We could follow the similar procedures like above but we focus on `Func.refGeneWithVer` column this time.
```
(base) [wangp5@reslnvhpc0202 mywork]$ awk 'NR>1 {variant_type_count[$6]++} END {for (type in variant_type_count) {print type, variant_type_count[type]}}' proband.annovar.hg19_multianno.txt | sort -k2,2nr > variant_type_counts.txt
(base) [wangp5@reslnvhpc0202 mywork]$ cat variant_type_counts.txt 
exonic 18598
intron 2264
UTR3 396
splicing 158
ncRNA_exonic 130
intronic 71
exonic;splicing 64
intergenic 34
ncRNA_intronic 29
upstream 20
UTR5 18
downstream 7
ncRNA_splicing 2
ncRNA_exonic;splicing 1
upstream;downstream 1
```
As we can see, there are 2264 'intron', this is because we set the `-intronhgvs 100` so that most variants in intronic region will have a HGVS annotation in `GeneDetail.refGeneWithVer` column (like NM_015658.4:exon8:c.888+3T>G). Intead, 71 'intronic' varaints will not have information in `GeneDetail.refGeneWithVer` becasue they are out of the 100 bp boundary of slicing site and there is no HGVS annotation for them.

- Allele Frequency (AF) Distribution for different variant types (nonsynanamous variants, synanamous variants, and intronic variants)
  We could run the following python script to get the AF distribution for different variants types (make sure you have both `pandas` and `matplotlib` installed in python):
```
import pandas as pd
import matplotlib.pyplot as plt

# Load your data (assuming it's a CSV file with appropriate headers)
data = pd.read_csv('proband.annovar.hg19_multianno.txt', sep='\t', na_values='.', low_memory=False)

# Filter the allele frequencies for each type
af_syn = data[data['ExonicFunc.refGeneWithVer'] == 'synonymous SNV']['AF'].dropna().astype(float)
af_nonsyn = data[data['ExonicFunc.refGeneWithVer'] == 'nonsynonymous SNV']['AF'].dropna().astype(float)
af_intron = data[(data['Func.refGeneWithVer'] == 'intron') | (data['Func.refGeneWithVer'] == 'intronic')]['AF'].dropna().astype(float)

# Create the plots
fig, axs = plt.subplots(3, 1, figsize=(8, 6))
plt.subplots_adjust(hspace=0.5)

# Set a logarithmic y-scale
#log_base = 10

# Plot Synonymous SNV
axs[0].hist(af_syn, bins=500, range=(0, 1), color='black')
axs[0].set_title('Synonymous SNV')
axs[0].set_xlabel('Allele frequency')
axs[0].set_ylabel('Frequency (log scale)')
#axs[0].set_yscale('log', base=log_base)

# Plot Non-synonymous SNV
axs[1].hist(af_nonsyn, bins=500, range=(0, 1), color='black')
axs[1].set_title('nonSynonymous SNV')
axs[1].set_xlabel('Allele frequency')
axs[1].set_ylabel('Frequency (log scale)')
#axs[1].set_yscale('log', base=log_base)

# Plot Intronic
axs[2].hist(af_intron, bins=500, range=(0, 1), color='black')
axs[2].set_title('Intronic')
axs[2].set_xlabel('Allele frequency')
axs[2].set_ylabel('Frequency (log scale)')
#axs[2].set_yscale('log', base=log_base)

# Save the plot as a PNG file
plt.tight_layout()
#plt.show()
plt.savefig('allele_frequency_distribution_log_scale.png', dpi=300)

print("Plot saved as 'allele_frequency_distribution_log_scale.png'")
```

Run the script using python and you should have a plot similar to this:

![image](https://github.com/user-attachments/assets/539e849a-b2b8-4bd6-9eeb-a88de4fee89b)

- Get the distribution of variant across race
Here we choose the first varaint from gene `NRXN2` as an example, you could choose your own varaint of interest. 

```
import pandas as pd
import matplotlib.pyplot as plt

# Load your data (assuming it's a CSV file with appropriate headers)
data = pd.read_csv('proband.annovar.hg19_multianno.txt', sep='\t', na_values='.', low_memory=False)

# Choose the variant for the gene of interest
res_sub = data[data['Gene.refGeneWithVer'] == 'NRXN2'].iloc[0]

# Extract allele frequencies for different races (the last 8 columns are AF for differnet race)
race_AF_list=[x for x in data.columns if x[:2]=='AF'][-8:]
allele_frequencies = res_sub[race_AF_list].astype(float)

# Set the corresponding race labels
race_labels = [
    "African/African-American", 
    "South Asian", 
    "Latino/Admixed American", 
    "East Asian", 
    "Non-Finnish European", 
    "Finnish", 
    "Ashkenazi Jewish", 
    "Other"
]

# Get the variant name from Otherinfo6 (assuming it's at index 5)
variantname = res_sub['Gene.refGeneWithVer']+': '+res_sub['Otherinfo6']

# Create a bar plot
plt.figure(figsize=(8, 6))
plt.bar(race_labels, allele_frequencies, color='gray')

# Add labels and title
plt.ylabel('Allele frequency')
plt.title(variantname)
plt.xticks(rotation=45, ha='right')  # Rotate x-axis labels for better visibility

# Adjust the margins
plt.tight_layout()

# Save the plot as a PNG file
#plt.show()
plt.savefig('allele_frequency_by_race.png', dpi=300)

print("Plot saved as 'allele_frequency_by_race.png'")

```

You should have a plot similar to this one:

![image](https://github.com/user-attachments/assets/2faa89ad-2e96-4923-bf6b-005689cda5d6)

- Evalaute the AF distribution stratified by SIFT score
Next, we can examine the allele frequency distributions stratified by SIFT scores, which predict the impact of amino acid substitutions on protein function based on sequence homology and the physical properties of amino acids. We expect variants associated with more deleterious effects (SIFT score < 0.05) to be rarer. Run the following python script to get the result (make sure you also have `numpy` module this time):

```
import pandas as pd
import numpy as np
import matplotlib.pyplot as plt

# Load the annovar output txt file
data = pd.read_csv('proband.annovar.hg19_multianno.txt', sep='\t', na_values='.', low_memory=False)

# Filter the data based on SIFT score
res_tolerate = data[(data['SIFT_score'] > 0.05) & (data['SIFT_score'].notna())]
res_deleterious = data[(data['SIFT_score'] < 0.05) & (data['SIFT_score'].notna())]

# Convert allele frequencies to numeric values
af_tolerate = pd.to_numeric(res_tolerate['AF'], errors='coerce').dropna()
af_deleterious = pd.to_numeric(res_deleterious['AF'], errors='coerce').dropna()

# Create histograms (without plotting)
bins = np.arange(0, 1.001, 0.001)  # bin size (0.001)
hist_tolerate, _ = np.histogram(af_tolerate, bins=bins)
hist_deleterious, _ = np.histogram(af_deleterious, bins=bins)

# Create the plot
plt.figure(figsize=(10, 6))

# Plot the "tolerate" SIFT score histogram
plt.bar(bins[:-1], hist_tolerate, width=0.001, color="green", label="SIFT > 0.05", edgecolor='none')

# Plot the "deleterious" SIFT score histogram
plt.bar(bins[:-1], hist_deleterious, width=0.001, color="red", label="SIFT < 0.05", edgecolor='none')

# Set labels and title
plt.xlabel('Allele Frequency')
plt.ylabel('Frequency')
plt.title('Allele Frequency Distribution')

# Set x and y limits
plt.xlim(0, 1)
plt.ylim(0, max(max(hist_tolerate), max(hist_deleterious)))

# Add a legend
plt.legend(loc='upper right')

# Save the plot
plt.tight_layout()
#plt.show()
plt.savefig('allele_frequency_distribution_sift.png', dpi=300)

print("Plot saved as 'allele_frequency_distribution_sift.png'")

```

You should have a similar plot like this:
![image](https://github.com/user-attachments/assets/c41fe51e-92e0-4ee9-9346-a9bdf1790ea9)

- Comparison of Pathogenicity Predition (MetaRNN vs. AlphaMissense)
We next use `seaborn` package to compare allele frequency distributions stratified by two other predictive scores: MetaRNN and AlphaMissense. We can similarly find lower allele frequencies for predicted pathogenic variants (MetaRNN: T(olerated) and D(amaging), AlphaMissense: likely (B)enign, (A)mbiguous, or likely (P)athogenic ).

```
import pandas as pd
import seaborn as sns
import matplotlib.pyplot as plt

# Load the annovar output txt file
data = pd.read_csv('proband.annovar.hg19_multianno.txt', sep='\t', na_values='.', low_memory=False)

# Filter out rows with missing values for the predictive scores
data_metarnn = data[data['MetaRNN_pred'].notna()]
data_alphamissense = data[data['AlphaMissense_pred'].notna()]

# Set up the figure and axes for two plots side by side
fig, axes = plt.subplots(1, 2, figsize=(10, 6))

# Create the boxplot for MetaRNN_pred
sns.boxplot(x='MetaRNN_pred', y='AF', data=data_metarnn, ax=axes[0], width=0.3)
axes[0].set_title('MetaRNN_pred')

# Create the boxplot for AlphaMissense_pred
sns.boxplot(x='AlphaMissense_pred', y='AF', data=data_alphamissense, ax=axes[1], width=0.3)
axes[1].set_title('AlphaMissense_pred')

# Adjust layout to ensure no overlap
plt.tight_layout()

# Save the plot
#plt.show()
plt.savefig('AF_boxplots_MetaRNNvsAlphaMissense.png', dpi=300)

print("Plot saved as 'AF_boxplots_MetaRNNvsAlphaMissense.png'")
```

- Compare model performance based on clinical impact (ClinVar)
  Moving further, we could compare the model performance by considering ClinVar clinical significance (`CLNSIG` column) as 'gold standard'. Note that we just assume the `CLNSIG` as 'gold standard' for tutorial purpose, in reality this might be complicated and you need to consider many other aspects (like review status on ClinVar) as well. As we only have very few 'Pathonigenic' variants, we will only focus on the 'Benign' variants, and we assume better tool will classify these variants all as 'Benign' variants and they should have relative high AF. Run the folloing python script to get the result:

```
import pandas as pd
import seaborn as sns
import matplotlib.pyplot as plt

# Load the annovar output txt file
data = pd.read_csv('proband.annovar.hg19_multianno.txt', sep='\t', na_values='.', low_memory=False)

# Filter the data to include only Benign variants from CLNSIG
benign_variants = data[data['CLNSIG'] == 'Benign']

# Prepare the data for combined plotting
# Create a new DataFrame for AlphaMissense_pred
alpha_missense_data = benign_variants[['AlphaMissense_pred', 'AF']].copy()
alpha_missense_data['Tool'] = 'AlphaMissense'
alpha_missense_data = alpha_missense_data.rename(columns={'AlphaMissense_pred': 'Prediction'})

# Create a new DataFrame for MetaRNN_pred
metarnn_data = benign_variants[['MetaRNN_pred', 'AF']].copy()
metarnn_data['Tool'] = 'MetaRNN'
metarnn_data = metarnn_data.rename(columns={'MetaRNN_pred': 'Prediction'})

# Combine both DataFrames into one, making sure no duplicate entries are there
combined_data = pd.concat([alpha_missense_data, metarnn_data], ignore_index=True)

# Ensure there are no NaNs or invalid entries in the 'Prediction' column
combined_data = combined_data.dropna(subset=['Prediction'])

# Set up the plot
plt.figure(figsize=(10, 6))

# Create the boxplot, using color to distinguish between the two tools
sns.boxplot(x='Prediction', y='AF', hue='Tool', data=combined_data, palette={'AlphaMissense': 'blue', 'MetaRNN': 'orange'}, width=0.4, showfliers=True)

# Add title and adjust layout
plt.title('Comparison of AlphaMissense and MetaRNN Predictions for Benign Variants')

# Add the number of variants on top of each box
# For each group and tool, calculate the count and add it to the plot
for tool in combined_data['Tool'].unique():
    for prediction in combined_data['Prediction'].unique():
        count = combined_data[(combined_data['Tool'] == tool) & (combined_data['Prediction'] == prediction)].shape[0]
        if count > 0:
            x_pos = combined_data['Prediction'].unique().tolist().index(prediction)  # x-axis position for the prediction
            y_pos = combined_data[combined_data['Prediction'] == prediction]['AF'].max()  # y-axis position above the box
            plt.text(x_pos, y_pos, f'n={count}', ha='center')

plt.tight_layout()

# Save the plot
plt.savefig('combined_predictions_with_counts.png', dpi=300)

print("Plot saved as 'combined_predictions_with_counts.png'")
```

Your plot should look similar to this one. We find MetaRNN's preditions are all T(olerated), which competely align with ClinVar classification, and the AF for these variants are reasonably high. Similarly, AlphaMissense predicted most of Benign variants as (B)enign, despite there are a few (A)mbiguous and (P)athogenic preditions.

![image](https://github.com/user-attachments/assets/19d1cb4b-0eb9-4295-baf9-69c2c524b1dc)



### 3. I have a vcf files, how do I run ANNOVAR using my vcf file directly and get the annotation?

### 4. How do i get the pathogenicity prediction from ANNOVAR, and how do I interpret it?

### 5. I have a very big vcf file/very large list of variants, how do i run ANNOVAR to process it?
