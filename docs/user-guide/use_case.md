## Advanced Use Case Tutorial

This tutorial is for advanced use of ANNOVAR, for start up of using ANNOVAR please refer to the [Start-Up Guide](startup.md). The advanced use cases include:

- Case 1. Downstream analysis of exome VCF annotation
  - Downstream analysis includes chromosome distribution, variant type ditritbution, clinvar pathogenicity, CADD score, MetaRNN/AlphaMissense score, etc.

- Case 2. Prepare and update the latestes annotation database (such as ClinVar) using `prepare_annovar_user.pl`

- Case 3. Create customized ANNOVAR database for filter-based operation
  - For example, the GTEX_v8_eQTL and GTEX_v8_sQTL database for tissue-specific gene-regulation of variants.

- Case 4. Perform gene anotation for the whole human exome
  - Create a gene annotation database for all single nucleotide mutations (SNPs) in whole human exome.

- Case 5. Annotate RSIDs/SNP IDs from genome-wide association studies (GWAS)
  - Conver RSIDs to variants, and perform functional analysis on these variants using ANNOVAR

- Case 6. Using T2T genome build (hs1) for annotation


## Case 1. Downstream analysis of exome VCF annotation

This is the downstream analysis of the exome VCF annotation, we will require the ANNOVAR output `proband.annovar.hg19_multianno.txt` for downstream analysis. If you do not have this file already, please follow the **Annotate exome VCF file** section in [Start-Up Guide](startup.md) to generate the ANNOVAR output.

### Chromosome distribution
  
Start from here, one could have various way to perform the downstream analysis, such as python or R or excel. Here, we use a simple command line to get the chromosome distribution. We used `awk` to count the number of variants per chromosome then pipe (`|`) it into a `sort` to sort the output based on chromosome number (`-V` stands for version numbers). At last, we use `>` to save our result into a file named `variant_counts.txt`.

```
awk -F '\t' 'NR>1 {chromosome_count[$1]++} END {for (chr in chromosome_count) {print chr, chromosome_count[chr]}}' proband.annovar.hg19_multianno.txt | sort -V > variant_counts.txt
cat variant_counts.txt
```
```
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
python plot_variants.py
```

Now we can open the 'variant_distribution.png' to have a good look on the variant distribution across chromosomes:

![variant_distribution](https://github.com/user-attachments/assets/a04cd817-8329-4813-b89f-c8c0ce41e5e3)


### Variant Type Distribution
  
Another useful information for an exome annotation will be the variant type distribution. We could follow the similar procedures like above but we focus on `Func.refGeneWithVer` column this time.

```
awk -F '\t' 'NR>1 {variant_type_count[$6]++} END {for (type in variant_type_count) {print type, variant_type_count[type]}}' proband.annovar.hg19_multianno.txt | sort -k2,2nr > variant_type_counts.txt
cat variant_type_counts.txt
```
```
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

As we can see, there are 2264 'intron' variants, this is because we set the `-intronhgvs 100` so that most variants in intronic region will have a HGVS annotation in `GeneDetail.refGeneWithVer` column (like NM_015658.4:exon8:c.888+3T>G). On the contrary, 71 'intronic' varaints will not have information in `GeneDetail.refGeneWithVer` becasue they are out of the 100 bp boundary of slicing site and there is no HGVS annotation for them.


### Allele Frequency (AF) Distribution for different variant types (nonsynanamous variants, synanamous variants, and intronic variants)
  
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


### Get the distribution of variant across race
  
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


### Evalaute the AF distribution stratified by SIFT score
  
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


### Comparison of Pathogenicity Predition (MetaRNN vs. AlphaMissense)
  
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

Your result should be similar to this one.
![image](https://github.com/user-attachments/assets/71be17e4-e32a-486a-a079-8a574d49c427)


### Compare model performance based on clinical impact (ClinVar)

  Moving further, we could compare the model performance by considering ClinVar clinical significance (`CLNSIG` column) as 'gold standard'. Note that we just assume the `CLNSIG` as 'gold standard' for tutorial purpose, in reality this might be complicated and you need to consider many other aspects (like review status on ClinVar) as well. If you want to further filter the ClinVar annotation with the "review status" (also called Star in ClinVar), you could use the column `CLNREVSTAT`. The `CLNREVSTAT` will a be string and the tranform table could be found on the website here (https://www.ncbi.nlm.nih.gov/clinvar/docs/review_status/).

As we only have very few 'Pathonigenic' variants, we will only focus on the 'Benign' variants, and we assume better tool will classify these variants all as 'Benign' variants and they should have relative high AF. Run the folloing python script to get the result:

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


## Case 2. Update ClinVar database

In this section, we have this use case: Prepared and update the latestes annotation database (such as ClinVar) to use in ANNOVAR using `prepare_annovar_user.pl`.

Sometimes, we might need to have our own dataset intergrated into the ANNOVAR or you might need the latest version of a database that ANNOVAR is not yet updated, this could be done by using `prepare_annovar_user.pl` script. Here, we denmonstrate how we annotate the latest ClinVar database as a case study, and if you want to know more details about filter-based annotation, you could refer to [Filter-based Annotation](https://annovar.openbioinformatics.org/en/latest/user-guide/filter/) for details.

To check the lastest version of ClinVar database, you could check [here](https://ftp.ncbi.nlm.nih.gov/pub/clinvar/). In this case, we will download and prepare the CinVar version `clinvar_20240917` for hg38. To do the task, we need [prepare_annovar_user.pl](http://www.openbioinformatics.org/annovar/download/prepare_annovar_user.pl) and [index_annovar.pl](https://github.com/WGLab/doc-ANNOVAR/files/6670482/index_annovar.txt), we will download them using `wget` but make sure your are in the `annovar` folder.

We will also use [comment_clinvar_20240917.txt](http://www.openbioinformatics.org/annovar/download/comment_clinvar_20240917.txt) in the last index step. It is different from previous versions of ClinVar due to the addition of six columns for oncogenecity variants and for somatic variants.

```
wget ftp://ftp.ncbi.nlm.nih.gov/pub/clinvar/vcf_GRCh38/clinvar_20240917.vcf.gz
wget ftp://ftp.ncbi.nlm.nih.gov/pub/clinvar/vcf_GRCh38/clinvar_20240917.vcf.gz.tbi
wget http://www.openbioinformatics.org/annovar/download/comment_clinvar_20240917.txt

wget http://www.openbioinformatics.org/annovar/download/prepare_annovar_user.pl
wget -O index_annovar.pl https://github.com/WGLab/doc-ANNOVAR/files/6670482/index_annovar.txt
chmod +x prepare_annovar_user.pl
chmod +x index_annovar.pl

gunzip clinvar_20240917.vcf.gz
prepare_annovar_user.pl -dbtype clinvar2 clinvar_20240917.vcf.gz -out hg38_clinvar_20240917_raw.txt
index_annovar.pl hg38_clinvar_20240917_raw.txt -out hg38_clinvar_20240917.txt -comment comment_clinvar_20240917.txt

mv hg38_clinvar_20240917.txt* humandb/
mkdir prepare_db
mv *clinvar_20240917* prepare_db/
```

If you get an error `Can't exec "convert2annovar.pl"` while running `prepare_annovar_user.pl`, make sure you move `prepare_annovar_user.pl` to the `annovar` folder together with other sciprts. If you still have the issue, try to add the scripts to your PATH directly using `export PATH=$PATH:/path/to/your/annovar/` (change the path accordingly to where you put `annovar` package). For more questions regarding to the filter-based annotation, please refer to the [Filter-based Annotation](https://annovar.openbioinformatics.org/en/latest/user-guide/filter/) page in ANNOVAR website.

Once we create the clinvar annotation, we could check if it works by using the example vcf file we have. 

```
table_annovar.pl mywork/PMID_36268089.vcf \
  humandb/ \
  -buildver hg38 \
  -out mywork/myanno_withVer_clinvar \
  -remove \
  -protocol refGeneWithVer,clinvar_20240917 \
  -operation g,f \
  -nastring . -vcfinput -polish
```
```
head mywork/myanno_withVer_clinvar.hg38_multianno.txt
```

Congratualations! You just created your own ClinVar database and got the annotation.


## Case 3. Adding GTEx_v8_eQTL and GTEx_v8_sQTL database

In this case, we will show how to prepare the annotation database for ANNOVAR and save it for easy and quick future ANNOVAR annotation. We will denmentrate how to create a database for Expression Quantitative Trait Loci (eQTL) and Splicing Quantitative Trait Loci (sQTL) for different tissues from GTEx portol. We will need the `GTEx_Analysis_v8_eQTL.tar` and `GTEx_Analysis_v8_sQTL.tar` files downloaded from the [GTEx website](https://www.gtexportal.org/home/downloads/adult-gtex/qtl). After download, unzip these two in the `annovar/` folder. For database download and more information about the GTEx eQTL/sQTL, please refer to their website. 

Before we begin, it's better to know the objectives of having this type of variant catalog of tissue-specific gene regulation. We would like to have a database in ANNOVAR, so everytime we have a new list of variants, we could easily know which variant in our list is likely to influence gene regulation and in which tissues these genes are influenced.


### eQTL

The eQTL contains two type of compressed files, first is the file ending with ".v8.egenes.txt.gz" and another ending with ".v8.signif_variant_gene_pairs.txt.gz". The forther one contains information about all deteced genes for a tissue, we will use this to get the gene_name based on gene_id. And the second one is a variant-gene pair that tells what are the variants (locis) that significantly influence a gene expression. We will use this file to get the variant-gene pair, note that the gene here is represented by gene_id (GENCODE/Ensembl gene ID) and that's why we will need to use the first file to convert the gene_id to gene_name (GENCODE gene name). We will use a python script to convert and preprocess all the seperated tissue files into a raw_annovar input file like we did before for clinvar database. There are 49 tissues in total, so it will have 98 files in the `GTEx_Analysis_v8_eQTL` folder afte decompressed.

Python script `process_eQTL.py` for eQTL:

```
import os
import pandas as pd
from multiprocessing import Pool
import gzip

# set the number of cpu to use
num_cpu = 64

# set the output foler, gene gz file suffix, varianet_gene_pair gz file suffix
output_dir = "eQTL_catalog_py_output"
eQTL_files_path = "GTEx_Analysis_v8_eQTL"
gene_file_suffix=".v8.egenes.txt.gz"
var_gene_pair_suffix=".v8.signif_variant_gene_pairs.txt.gz"

os.makedirs(output_dir, exist_ok=True)

# List all egenes (or sgenes) and variant-gene-pairs files
egenes_files = [eQTL_files_path+'/'+f for f in os.listdir(eQTL_files_path) if f.endswith(gene_file_suffix)]
variant_files = [f.replace(gene_file_suffix, var_gene_pair_suffix) for f in egenes_files]

def process_tissue(files):
    """Process one tissue to extract and merge egenes and variant-gene pairs information."""
    egenes_file, variant_file = files
    tissue_prefix = egenes_file.split('/')[-1].replace(gene_file_suffix, '')

    # Step 1: Extract gene_id and gene_name from egenes file
    gene_ref = []
    with gzip.open(egenes_file, 'rt') as f:
        next(f)  # Skip the first row
        for line in f:
            gene_id, gene_name = line.strip().split()[:2]
            gene_ref.append((gene_id, gene_name))

    gene_ref_df = pd.DataFrame(gene_ref, columns=['gene_id', 'gene_name'])

    # Step 2: Extract variant_id and gene_id from variant-gene-pairs file
    variant_gene_pairs = []
    with gzip.open(variant_file, 'rt') as f:
        next(f)  # Skip the first row
        for line in f:
            variant_id, gene_id = line.strip().split()[:2]
            variant_gene_pairs.append((variant_id, gene_id))

    variant_gene_df = pd.DataFrame(variant_gene_pairs, columns=['variant_id', 'gene_id'])

    # Step 3: Merge gene name into the variant-gene pairs table
    merged_df = pd.merge(variant_gene_df, gene_ref_df, on="gene_id", how="left")
    # Warning if the corresponding gene_name was not found for variants
    num_unfound_gene_name=merged_df['gene_name'].isna().sum()
    if num_unfound_gene_name!=0:
        print(f'WARNING: {num_unfound_gene_name} gene_name unfound in {tissue_prefix}')

    # Step 4: Create the final table with unique variant_id and concatenated gene names
    final_catalog = (
        merged_df.groupby('variant_id')['gene_name']
        .agg(lambda x: '|'.join(set(x.astype(str).str.strip())))  # Use set to drop duplicates
        .reset_index()
    )
    final_catalog.columns = ['var_id', f'{tissue_prefix}_eQTL_gene']

    final_catalog=final_catalog.sort_values(by='var_id',ascending=True)

    # Save the result
    final_catalog.to_csv(f"{output_dir}/{tissue_prefix}_final_catalog.txt", sep='\t', index=False)

    print(f"Processed {tissue_prefix}")

    
def merge_catalogs():
    """Merge all final catalog files into a single file with unique variants."""
    final_catalog_files = [f for f in os.listdir(output_dir) if f.endswith('_final_catalog.txt')]

    # Initialize with the first file
    merged_df = pd.read_csv(os.path.join(output_dir, final_catalog_files[0]), sep="\t")

    # Merge the rest of the files
    for file in final_catalog_files[1:]:
        tissue_df = pd.read_csv(os.path.join(output_dir, file), sep="\t")
        merged_df = pd.merge(merged_df, tissue_df, on="var_id", how="outer")
        merged_df.fillna('.', inplace=True)  # Fill NaN values with '.'
        print(f'Finished {file}')    
    # Save the merged result
    merged_df.to_csv(f"{output_dir}/final_merged_catalog.txt", sep="\t", index=False)

    
def split_variant_columns():
    """Split the var_id column into Chr, Start, End, Ref, and Alt columns."""
    # Load the final merged catalog
    df = pd.read_csv(f"{output_dir}/final_merged_catalog.txt", sep="\t")
    
    # Split var_id into Chr, Start, Ref, and Alt
    df[['Chr', 'Start', 'Ref', 'Alt']] = df['var_id'].str.extract(r'chr(\w+)_(\d+)_([A-Z]+)_([A-Z]+)')
    
    # Convert Start to int and calculate End
    df['Start'] = df['Start'].astype(int)
    df['End'] = df['Start'] + df['Ref'].str.len() - 1
    
    # Reorder columns to put the new columns at the front
    df = df[['Chr', 'Start', 'End', 'Ref', 'Alt'] + [col for col in df.columns if col not in ['Chr', 'Start', 'End', 'Ref', 'Alt', 'var_id']]]
    
    # Sort the DataFrame by 'Chr', 'Start', and 'End' in ascending order
    df = df.sort_values(by=['Chr', 'Start', 'End'], ascending=[True, True, True])
    
    # Save the updated file
    df.to_csv(f"{output_dir}/final_eQTL_annovar_raw.txt", sep="\t", index=False, header=False)
    print(f"Final merged catalog saved to {output_dir}/final_eQTL_annovar_raw.txt")
    
    # Save the columns into comment file
    header = '#' + '\t'.join(df.columns)

    # Write the header to the file
    with open(f"{output_dir}/final_eQTL_annovar_comment.txt", 'w') as f:
        f.write(header + '\n')
    print(f"Comment (header) of final merged catalog saved to {output_dir}/final_eQTL_annovar_comment.txt")


if __name__ == "__main__":
    # Step 1: Process tissues in parallel using multiprocessing
    files_to_process = list(zip(egenes_files, variant_files))
    
    with Pool(processes=num_cpu) as pool:
        pool.map(process_tissue, files_to_process)

    # Step 2: Merge all final catalog files
    merge_catalogs()

    # Step 3: Split var_id into Chr, Start, End, Ref, and Alt columns
    split_variant_columns()
```

Save this script for now, we will run it later.


### sQTL

And then we will take a look at the sQTL, it actually has simillar files like eQTL. However, the suffix of the sQTL file is different from eQTL, in `GTEx_Analysis_v8_sQTL` folder, there will be two types of file, one end with ".v8.sgenes.txt.gz" and another end with ".v8.sqtl_signifpairs.txt.gz". The first type of file contains information about all detected genes in a particular tissue, we will use it to match the "phenotype_id" to the influenced "gene_name". Notice that in sQTL, they use "LeafCutter intron excision phenotypes" to describe the influenced splicing, and they will have unique "phenotype_id". And then in the second type of file, we could know what are the varaints that cause different splicings, which will be the variant-phenotype pair. Therefore, similarly, we will use these two files for 49 tissues, and recover which gene will be influenced by a specific variant for different tissue types.

Python script `process_sQTL.py` for sQTL:

```
import os
import pandas as pd
from multiprocessing import Pool
import gzip

# set the number of cpu to use
num_cpu = 64

# set the output foler, gene gz file suffix, varianet_gene_pair gz file suffix
output_dir = "sQTL_catalog_py_output"
sQTL_files_path = "GTEx_Analysis_v8_sQTL"
gene_file_suffix=".v8.sgenes.txt.gz"
var_gene_pair_suffix=".v8.sqtl_signifpairs.txt.gz"

os.makedirs(output_dir, exist_ok=True)

# List all egenes (or sgenes) and variant-gene-pairs files
egenes_files = [sQTL_files_path+'/'+f for f in os.listdir(sQTL_files_path) if f.endswith(gene_file_suffix)]
variant_files = [f.replace(gene_file_suffix, var_gene_pair_suffix) for f in egenes_files]

def process_tissue(files):
    """Process one tissue to extract and merge sgenes and variant-gene pairs information. In sQTL, the phenotype_id instead of gene_id is used to link the genes and variants, even though we still name it as gene_id."""
    egenes_file, variant_file = files
    tissue_prefix = egenes_file.split('/')[-1].replace(gene_file_suffix, '')

    # Step 1: Extract gene_id and gene_name from egenes file
    gene_ref = []
    with gzip.open(egenes_file, 'rt') as f:
        next(f)  # Skip the first row
        for line in f:
            gene_id, gene_name = line.strip().split()[:2]
            gene_ref.append((gene_id, gene_name))

    gene_ref_df = pd.DataFrame(gene_ref, columns=['gene_id', 'gene_name'])

    # Step 2: Extract variant_id and gene_id from variant-gene-pairs file
    variant_gene_pairs = []
    with gzip.open(variant_file, 'rt') as f:
        next(f)  # Skip the first row
        for line in f:
            variant_id, gene_id = line.strip().split()[:2]
            variant_gene_pairs.append((variant_id, gene_id))

    variant_gene_df = pd.DataFrame(variant_gene_pairs, columns=['variant_id', 'gene_id'])

    # Step 3: Merge gene name into the variant-gene pairs table
    merged_df = pd.merge(variant_gene_df, gene_ref_df, on="gene_id", how="left")
    # Warning if the corresponding gene_name was not found for variants
    num_unfound_gene_name=merged_df['gene_name'].isna().sum()
    if num_unfound_gene_name!=0:
        print(f'WARNING: {num_unfound_gene_name} gene_name unfound in {tissue_prefix}')

    # Step 4: Create the final table with unique variant_id and concatenated gene names
    final_catalog = (
        merged_df.groupby('variant_id')['gene_name']
        .agg(lambda x: '|'.join(set(x.astype(str).str.strip())))  # Use set to drop duplicates
        .reset_index()
    )
    final_catalog.columns = ['var_id', f'{tissue_prefix}_sQTL_gene']

    final_catalog=final_catalog.sort_values(by='var_id',ascending=True)

    # Save the result
    final_catalog.to_csv(f"{output_dir}/{tissue_prefix}_final_catalog.txt", sep='\t', index=False)

    print(f"Processed {tissue_prefix}")

    
def merge_catalogs():
    """Merge all final catalog files into a single file with unique variants."""
    final_catalog_files = [f for f in os.listdir(output_dir) if f.endswith('_final_catalog.txt')]

    # Initialize with the first file
    merged_df = pd.read_csv(os.path.join(output_dir, final_catalog_files[0]), sep="\t")

    # Merge the rest of the files
    for file in final_catalog_files[1:]:
        tissue_df = pd.read_csv(os.path.join(output_dir, file), sep="\t")
        merged_df = pd.merge(merged_df, tissue_df, on="var_id", how="outer")
        merged_df.fillna('.', inplace=True)  # Fill NaN values with '.'
        print(f'Finished {file}')    
    # Save the merged result
    merged_df.to_csv(f"{output_dir}/final_merged_catalog.txt", sep="\t", index=False)

    
def split_variant_columns():
    """Split the var_id column into Chr, Start, End, Ref, and Alt columns."""
    # Load the final merged catalog
    df = pd.read_csv(f"{output_dir}/final_merged_catalog.txt", sep="\t", low_memory=False)
    
    # Split var_id into Chr, Start, Ref, and Alt
    df[['Chr', 'Start', 'Ref', 'Alt']] = df['var_id'].str.extract(r'chr(\w+)_(\d+)_([A-Z]+)_([A-Z]+)')
    
    # Convert Start to int and calculate End
    df['Start'] = df['Start'].astype(int)
    df['End'] = df['Start'] + df['Ref'].str.len() - 1
    
    # Reorder columns to put the new columns at the front
    df = df[['Chr', 'Start', 'End', 'Ref', 'Alt'] + [col for col in df.columns if col not in ['Chr', 'Start', 'End', 'Ref', 'Alt', 'var_id']]]
    
    # Sort the DataFrame by 'Chr', 'Start', and 'End' in ascending order
    df = df.sort_values(by=['Chr', 'Start', 'End'], ascending=[True, True, True])
    
    # Save the updated file
    df.to_csv(f"{output_dir}/final_sQTL_annovar_raw.txt", sep="\t", index=False, header=False)
    print(f"Final merged catalog saved to {output_dir}/final_sQTL_annovar_raw.txt")
    
    # Save the columns into comment file
    header = '#' + '\t'.join(df.columns)

    # Write the header to the file
    with open(f"{output_dir}/final_sQTL_annovar_comment.txt", 'w') as f:
        f.write(header + '\n')
    print(f"Comment (header) of final merged catalog saved to {output_dir}/final_sQTL_annovar_comment.txt")

if __name__ == "__main__":
    # Step 1: Process tissues in parallel using multiprocessing
    files_to_process = list(zip(egenes_files, variant_files))
    
    with Pool(processes=num_cpu) as pool:
        pool.map(process_tissue, files_to_process)

    # Step 2: Merge all final catalog files
    merge_catalogs()

    # Step 3: Split var_id into Chr, Start, End, Ref, and Alt columns
    split_variant_columns()
```


### Run the scripts

Now we have both the datasets and scripts ready, let's run these scripts. I am using 64 cpus to parallel the process, you can choose your own specification. Note that we are in `annovar/` folder.

```
### sQTL
python process_sQTL.py
index_annovar.pl sQTL_catalog_py_output/final_sQTL_annovar_raw.txt -outfile humandb/hg38_sQTL.txt --commentfile sQTL_catalog_py_output/final_sQTL_annovar_comment.txt

### eQTL
python process_eQTL.py
perl index_annovar.pl eQTL_catalog_py_output/final_eQTL_annovar_raw.txt -outfile humandb/hg38_eQTL.txt --commentfile eQTL_catalog_py_output/final_eQTL_annovar_comment.txt
```

After the index step, we will have these 4 extra files in our `humandb\` folder:

```
hg38_eQTL.txt
hg38_eQTL.txt.idx
hg38_sQTL.txt
hg38_sQTL.txt.idx
```

With these extra files, we could easily run table_annovar.pl to do the annotation, simply adding an extra filter-based operation `eQTL` and `sQTL`. For example, you could run annovar with eQTL and sQTL annotations like this:

```
table_annovar.pl mywork/PMID_36268089.vcf \
  humandb/ \
  -buildver hg38 \
  -out mywork/myanno_eQTL_sQTL \
  -remove \
  -protocol refGeneWithVer,eQTL,sQTL \
  -operation g,f,f \
  -nastring . -vcfinput -polish
```

And you should have a result similar to this:
![image](https://github.com/user-attachments/assets/c542669d-8889-44ad-8a9f-b09104c170ae)

As you can see, the results showed that first two varaints in position `11863` did not influence the gene expression and slicing in any cell type. However, for the varaint `14677` in the non-coding (nc) exnoic region of gene `WASH7P`, it influenced the gene `RP11-34P13.13` and `RP11-206L10.2` in majority of the tissue types. More interestingly, the next variant in position `135203` on the opposite, influences the expression of `WASH7P` in Thyroid. This is just a very small showcase, but you can see how useful this database will be, and how easily you could run ANNOVAR to get a tissue_specific gene interation network for your variants of interest.


## Case 4. Annotate the amino acid changes for whole exome vairants

We will use hg38 to generate whole exome variants, with the `hg38_refGene.txt` file, but with 10bp as the intron/exon boundaries. I run the following commands to perform whole exome varaint annotation, note that there are in total 11 commands and a clean up section (delete temp file). You will need to go to the `annovar/` package folder, and change the `/path/to/Ref_Genome/fasta/GRCh38/GRCh38.fa` in 6th command into your path to the GRCh38 fasta file. Also note that in 9th and 11th commands, we speed the process up by running commands in parallel using 28 processors.

```
#!/bin/bash

# 1st command: extract exome regions and save to hg38_exome.bed
perl -ne '@a=split(/\t/,$_); @start=split(/,/,$a[9]); @end=split(/,/,$a[10]); @start=map{$_-1
0}@start; @end=map{$_+10}@end; for $i(0..@start-1){print "$a[2]\t$start[$i]\t$end[$i]\n"}' < 
humandb/hg38_refGene.txt > hg38_exome.bed

# 2nd command: Sort the exome bed file
sort -k1,1 -k2,2n hg38_exome.bed > hg38_exome_sorted.bed

# 3rd command: Filter chromosomes and create hg38_exome_sorted1.bed
perl -ne 'm/^chr(\d+|X|Y)\s/ and print' < hg38_exome_sorted.bed > hg38_exome_sorted1.bed

# 4th command: Count lines and output the result
wc hg38_exome_sorted.bed hg38_exome_sorted1.bed

# 5th command: Merge exome intervals with bedtools
bedtools merge -i hg38_exome_sorted1.bed > hg38_exome_merge.bed

# 6th command: Retrieve sequences from fasta
## result being write to hg38_exome_merge.bed.fa
retrieve_seq_from_fasta.pl -format tab -seqfile /path/to/Ref_Genome/fasta/GRCh38/GRCh38.fa hg38_exome_merge.bed

# 7th command: Perform variant calls using Perl
perl -ne 'chomp; if (m/^>chr(\w+):(\d+)\-(\d+)/) {($chr,$start,$end)=($1,$2,$3)} elsif (m/^([ACGTN]+)$/) {$seq=$1; @seq=split(//,$seq); @seq==$end-$start+1 or die "length=".length($seq)." start=$start end=$end"; for $i(0..@seq-1){ for $alt(qw/A C G T/) {$seq[$i] eq $alt and next; $seq[$i] eq 'N' and next; print "$chr\t", $start+$i, "\t", $start+$i, "\t", $seq[$i], "\t$alt\n"}}} elsif (m/^N+$/) {next} else {die "$_"}' < hg38_exome_merge.bed.fa > hg38_exome_merge.avinput

# 8th command: Split large avinput file
split -l 10000000 -d hg38_exome_merge.avinput

# 9th command: Run batch jobs with repeat_jobs.pl
ls x* | xargs -P 28 -I {} sh -c 'table_annovar.pl {} humandb/ -build hg38 -out {} -remove -protocol refGeneWithVer -operation g -nastring . -arg "-batch 1m -hgvs" -intronhgvs 20'

# 10th command: Copy the output file
cp x00.hg38_multianno.txt  hg38_exome.hg38_multianno.txt

# 11th command: Concatenate results from all jobs
seq -w 01 27 | xargs -P 27 -I {} sh -c 'tail -n +2 x{}.hg38_multianno.txt' >> hg38_exome.hg38_multianno.txt

# Clean up the temp file
mv hg38_exome.hg38_multianno.txt mywork/
rm x*
mkdir whole_exome_files
mv hg38_exome* whole_exome_files/
mv whole_exome_files/ mywork/
```

After the annotation, you will have the result in `mywork/hg38_exome.hg38_multianno.txt`. All bed files and fasta files for this whole exome annotation will be in `mywork/whole_exome_files`. From these whole exome annotation, we could use it as a catelog to search a corespondding AA change based on a DNA change, or on the opposite, search a DNA change based on a AA change.

Similarly, you could follow the step in **Case 4** and create a database yourself for this whole exome annotation, which will serve the purpose of provinding you the information about gene annotation for all possible SNPs in human exome.


## Case 5. Annotate RSID/SNP ID from GWAS

The use case for this section will be: Annotate the coding and noncoding variants from a list of RSID from genome-wide association studies, and make hypothesis for causal variants vs. variants that regulate genome function.

First we will need a list of RSID (or SNP ID) to get start with, we will use 30 novel susceptibility loci (P < 5.0 × 10E−8) from a recent Genome-wide association study (GWAS) about breast cancer ([https://www.nature.com/articles/s41588-020-0609-2]), note that 2 loci were removed because they did not have RSID. And most of these loci are found to associate with tumor. We could run pathogenicity predition for these SNP to see how is their predicted pathogenicity score.

```
rs5776993
rs10838267
rs11065822
rs1061657
rs11652463
rs12962334
rs17743054
rs9712235
rs4602255
rs13039563
rs9808759
rs34052812
rs1375631
rs2886671
rs7760611
rs188092014
rs79518236
rs13277568
rs142890050
rs13256025
rs4742903
rs7924772
rs78378222
rs206435
rs141526427
rs6065254
rs495367
rs138044103
rs17215231
rs2464195
```

Now we have all the SNPs, we will need to transfer these RSID into ANNOVAR input. This can be achieved by `convert2annovar.pl` with the `-format rsid` argument. Before we conver the RSID into the annoar input, we need to download the dbSNP database `avsnp151` first, then we run  `convert2annovar.pl`, at last we run `table_annovar.pl`:

```
annotate_variation.pl -buildver hg38 -downdb -webfrom annovar avsnp151 humandb/
convert2annovar.pl -format rsid mywork/snplist.txt -avsnpfile humandb/hg38_avsnp151.txt > mywork/snplist_avsnp151_convert.avinput
```

After we run convert, we will have our ANNOVAR input file `mywork/snplist_avsnp151_convert.avinput`. There are 44 rows for provided 30 RSID, because some RSID has multiple identifiers and they were all written into output. To check which RSID has multiple records, we could run this simple command:

```
cat mywork/snplist_avsnp151_convert.avinput |cut -f 6|uniq -c|cut -d ' ' -f 7-|grep -v '^1'
```
```
2 rs5776993
2 rs34052812
2 rs495367
2 rs138044103
2 rs17215231
2 rs79518236
2 rs4742903
2 rs12962334
6 rs141526427
2 rs6065254
3 rs9808759
```

The number in the first column represents the frequency of the RSID. We could pass this output to the grep command again and show the variant pos, ref, alt information.

```
cat mywork/snplist_avsnp151_convert.avinput |cut -f 6|uniq -c|cut -d ' ' -f 7-|grep -v '^1'| \
  cut -d ' ' -f 2 |grep -f /dev/stdin mywork/snplist_avsnp151_convert.avinput
```
```
1	109680279	109680280	CA	C	rs5776993
1	109680280	109680280	A	-	rs5776993
3	156818169	156818170	AT	A	rs34052812
3	156818170	156818170	T	-	rs34052812
4	1985245	1985245	A	G	rs495367
4	1985245	1985245	A	T	rs495367
5	68128293	68128293	C	CTG	rs138044103
5	68128293	68128293	-	TG	rs138044103
6	33272092	33272092	C	A	rs17215231
6	33272092	33272092	C	T	rs17215231
7	98397242	98397244	ACT	A	rs79518236
7	98397243	98397244	CT	-	rs79518236
9	104094512	104094512	G	A	rs4742903
9	104094512	104094512	G	C	rs4742903
18	22897971	22897971	G	A	rs12962334
18	22897971	22897971	G	C	rs12962334
20	11521970	11521970	A	AACACAC	rs141526427
20	11521970	11521970	A	AACAC	rs141526427
20	11521970	11521970	A	AAC	rs141526427
20	11521970	11521970	-	ACACAC	rs141526427
20	11521970	11521970	-	ACAC	rs141526427
20	11521970	11521970	-	AC	rs141526427
20	40619625	40619625	G	A	rs6065254
20	40619625	40619625	G	C	rs6065254
21	46360308	46360308	T	A	rs9808759
21	46360308	46360308	T	C	rs9808759
21	46360308	46360308	T	G	rs9808759
```

Note that rs138044103 has two records in avsnp151, one is `5	68128293	68128293	C	CTG` and another is `5	68128293	68128293	-	TG`. They represents the same variant, you could choose to remove one of them now or remove it after ANNOVAR (ANNOVAR will have same annotation for these two variants). In here we choose to remove it before ANNOVAR.

After remove the duplicate variant for rs138044103, we could run ANNOVAR using the `mywork/snplist_avsnp151_convert.avinput` as input (43 variants). We want to get the pathogenicity prediction so we used `dbnsfp47a`, and we want to know the ClinVar status from `clinvar_20240917` and Allele Frequency (AF) information from `gnomad41_genome`. We use gnomAD genome becuase many of the variants are in the intronic and intergenic region. 

```
table_annovar.pl mywork/snplist_avsnp151_convert.avinput \
  humandb/ \
  -buildver hg38 \
  -out mywork/snplist_avsnp151_convert.annovar \
  -remove \
  -protocol refGeneWithVer,avsnp151,clinvar_20240917,gnomad41_genome,dbnsfp47a \
  -operation g,f,f,f,f \
  -polish -nastring . 
```

The result will be written to `mywork/snplist_avsnp151_convert.annovar.hg38_multianno.txt`. Please recall the downstream analysis in Case#1, we could quickly check the chromosome distribution and genetic function annotation. 

```
awk -F '\t' 'NR>1 {variant_type_count[$6]++} END {for (type in variant_type_count) {print type, variant_type_count[type]}}' mywork/snplist_avsnp151_convert.annovar.hg38_multianno.txt | sort -k2,2nr
```
```
intergenic 19
intronic 18
ncRNA_intronic 2
UTR3 2
UTR5 2
```

Most of the variants are in intergenic region or intronic region, and 2 in non-coding RNA intronic region, 2 in 3' UTR and 2 in 5' UTR. Non of these variants are from exonic regions.

Simillarly, we can run the chromosome distribution analysis in **Case#1**, and visulize it:

![snp_variant_distribution](https://github.com/user-attachments/assets/4572be8b-c43b-46ce-b606-b71865613fe9)

We could also check the allel frequency (AF) of intergenic region, intronic region and others.

![snp_allele_frequency_distribution](https://github.com/user-attachments/assets/38ffaa75-989b-4aa0-a155-4becbdcb4b0f)

We could see the the AF of these variants are not very low, surprisingly they are quite high. One challange of these variants are because they are motly intergenic region, and may ot them are not single nucleotide mutations, so almost all of them did not have pathogenicity prediction, except `rs2464195`.


## Case 6. Adding T2T genome annotation database.

ANNOVAR supports annotation using T2T genome (hs1), if you want to analysis the variants using hs1 genome build, your variants should also use T2T genome coordinates. You could convert the genome coordinate using [UCSC liftover tools](https://genome.ucsc.edu/cgi-bin/hgLiftOver). For demontration purpose, we use th first 3 variants from our `example/ex1.avinput` (hg19) and convert it to T2T genome build (hs1). You should prepare the vairants in BED format ("0-base") or format of the position box ("1-base"). Here we use the latter one. This is our variants in hg19 genome:

```
chr1:948921-948921
chr1:1404001-1404001
chr1:5935162-5935162
```

After liftover, we have these coordinates in hs1 genome:

```
chr1:443672-443672
chr1:902994-902994
chr1:5399587-5399587
```

For ANNOVAR input, please use this ``:

```
1       443672  443672  T       C
1       902994 902994 G       T
1       5399587 5399587 A       T
```

To run ANNOVAR using hs1 genome, you will need to download the database in this format first. And then run ANNOVAR using the hs1 as genome. Please follow the command to download `hs1_refGene` and `hs1_gnomad_genome` and run ANNOVAR using hs1 genome:

```
#download hs1_gnomad
annotate_variation.pl --buildver hs1 --downdb -webfrom annovar gnomad humandb/

#download hs1_refGene (currently we will use wget to download)
wget http://www.openbioinformatics.org/annovar/download/hs1_refGene.txt.gz
wget www.openbioinformatics.org/annovar/download/hs1_refGeneMrna.fa.gz
gzip -d hs1_refGene*gz
mv hs1_refGene* humandb/
```

Let's run ANNOVAR using hs1 (T2T) genome build using the liftover variants we prepared.

```
table_annovar.pl mywork/hs1_example.avinput \
  humandb/ \
  -buildver hs1 \
  -out mywork/hs1_example_anno \
  -remove \
  -protocol refGene,gnomad \
  -operation g,f \
  -nastring . -polish
```

You should have the result in `mywork/hs1_example_anno.hs1_multianno.txt`, and it should look similar to this:

<img width="1435" alt="image" src="https://github.com/user-attachments/assets/54d365df-e76f-437d-8295-41e84092b03a">


---

Congratulation! You just finished your ANNOVAR advanced use case tutorial, and I hope you got more insights about how to use ANNOVAR to facilitate your own analysis pipeline. If you have any question, feel free to leave a comment or post an issue in ANNOVAR github page.
