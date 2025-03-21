## ANNOVAR main package

You can post questions through Disqus in this website or just email me directly.

The latest version of ANNOVAR can always be downloaded [here](https://www.openbioinformatics.org/annovar/annovar_download_form.php) (registration required).

ANNOVAR is written in Perl and can be run as a standalone application on diverse hardware systems where standard Perl modules are installed.

## Additional databases

Many of the databases that ANNOVAR uses can be directly retrieved from UCSC Genome Browser Annotation Database by `-downdb` argument.

Several very commonly used annotation databases for human genomes are additionally provided below. In general, users can use `-downdb -webfrom annovar` in ANNOVAR directly to download these databases. To view of full list of databases (and their size and last changed date) prepared by ANNOVAR developers, use `avdblist` keyword in `-downdb` operation.

NOTE: several whole-genome databases (cadd, cadd13, fathmm, dann, eigen, gerp++, etc.) are available for download after server migration in June 2019. Please do NOT download unless you absolutely need to use them in your whole genome analysis (note that each file is ~200GB in your local computer), since each download will cost me a few dollars now.

### - For gene-based annotation

| Build | Table Name | Explanation | Date |
|---|---|---|---|
| hg18 | refGene | FASTA sequences for all annotated transcripts in RefSeq Gene (last update was 2020-08-22 at UCSC) | 20211019 |
| hg19 | refGene | same as above (last update was 2020-08-17 at UCSC) | 20211019 |
| hg38 | refGene | same as above (last update was 2020-08-17 at UCSC) | 20211019 |
| hg18 | refGeneWithVer | FASTA sequences for all annotated transcripts in RefSeq Gene with version number (last update was 2020-08-22 at UCSC) | 20211019 |
| hg19 | refGeneWithVer | same as above (the last update was 2020-08-17 at UCSC) | 20211019 |
| hg38 | refGeneWithVer | same as above  (last update was 2020-08-17 at UCSC) | 20211019 |
| hg18 | knownGene | FASTA sequences for all annotated transcripts in UCSC Known Gene (last update was 2009-05-10 at UCSC) | 20211019 |
| hg19 | knownGene | same as above (last update was 2013-06-30 at UCSC) | 20211019 |
| hg38 | knownGene | same as above (last update was 2022-05-15 at UCSC) | 20211019 |
| hg18 | ensGene | FASTA sequences for all annotated transcripts in wgEncodeGencodeManualV3 collection (last update was 2010-02-28 at UCSC) | 20211019 |
| hg19 | ensGene | FASTA sequences for all annotated transcripts in Gencode v46 Basic collection lifted over to hg19 (last update was 2024-05-13 at UCSC) | 20241008 |
| hg38 | ensGene | FASTA sequences for all annotated transcripts in Gencode v46 Basic collection (last update was 2024-05-13 at UCSC) | 20241008 |
| hg19 | ensGene45 | FASTA sequences for all annotated transcripts in Gencode v45 Basic collection lifted over to hg19 (last update was 2024-01-11 at UCSC) | 20241008 |
| hg38 | ensGene45 | FASTA sequences for all annotated transcripts in Gencode v45 Basic collection (last update was 2024-01-11 at UCSC) | 20241008 |
| hg19 | ensGene44 | FASTA sequences for all annotated transcripts in Gencode v44 Basic collection lifted over to hg19 (last update was 2023-08-07 at UCSC) | 20241008 |
| hg38 | ensGene44 | FASTA sequences for all annotated transcripts in Gencode v44 Basic collection (last update was 2023-07-18 at UCSC) | 20241008 |
| hg19 | ensGene43 | FASTA sequences for all annotated transcripts in Gencode v43 Basic collection lifted over to hg19 (last update was 2023-02-15 at UCSC) | 20230315 |
| hg38 | ensGene43 | FASTA sequences for all annotated transcripts in Gencode v43 Basic collection (last update was 2023-02-15 at UCSC) | 20230315 |
| hg19 | ensGene40 | FASTA sequences for all annotated transcripts in Gencode v40 Basic collection lifted up to hg19 (last update was 2022-04-28 at UCSC) | 20220802 |
| hg38 | ensGene40 | FASTA sequences for all annotated transcripts in Gencode v40 Basic collection (last update was 2022-04-21 at UCSC) | 20220802 |
| hg19 | ensGene41 | FASTA sequences for all annotated transcripts in Gencode v41 Basic collection lifted up to hg19 (last update was 2022-07-12 at UCSC) | 20221005 |
| hg38 | ensGene41 | FASTA sequences for all annotated transcripts in Gencode v41 Basic collection (last update was 2022-07-12 at UCSC) | 20221005 |
| hs1 | refGene | FASTA sequences for all annotated transcripts in RefSeq Gene in CHM13-T2T reference genome (last update was 2023-05-29 at UCSC) | 20230811 |
---

### - For filter-based annotation

| Build | Table Name | Explanation | Date |
|---|---|---|---|
| hg18 | avsift | whole-exome SIFT scores for non-synonymous variants (obselete and should not be uesd any more) | 20120222 |
| hg19	| avsift	|	same as above	| 20120222 |
| hg18 | ljb26_all | whole-exome SIFT, PolyPhen2 HDIV, PolyPhen2 HVAR, LRT, MutationTaster, MutationAssessor, FATHMM, MetaSVM, MetaLR, VEST, CADD, GERP++, PhyloP and SiPhy scores from dbNSFP version 2.6 | 20140925 |
| hg19 | ljb26_all | same as above |  20140925 |
| hg38 | ljb26_all | same as above | 20150520 |
| hg18 | dbnsfp30a | whole-exome SIFT, PolyPhen2 HDIV, PolyPhen2 HVAR, LRT, MutationTaster, MutationAssessor, FATHMM, MetaSVM, MetaLR, VEST, CADD, GERP++, DANN, fitCons, PhyloP and SiPhy scores from dbNSFP version 3.0a | 20151015 |
| hg19 | dbnsfp30a | same as above |  20151015 |
| hg38 | dbnsfp30a | same as above | 20151015 |
| hg19 | dbnsfp31a_interpro | protein domain for variants | 20151219 |
| hg38 | dbnsfp31a_interpro | same as above | 20151219 |
| hg19 | dbnsfp47a_interpro | protein domain for variants | 20240617 |
| hg38 | dbnsfp47a_interpro | same as above | 20240617 |
| hg18 | dbnsfp33a | whole-exome SIFT, PolyPhen2 HDIV, PolyPhen2 HVAR, LRT, MutationTaster, MutationAssessor, FATHMM, PROVEAN, MetaSVM, MetaLR, VEST, M-CAP, CADD, GERP++, DANN, fathmm-MKL, Eigen, GenoCanyon, fitCons, PhyloP and SiPhy scores from dbNSFP version 3.3a | 20170221 |
| hg19 | dbnsfp33a | same as above |  20170221 |
| hg38 | dbnsfp33a | same as above | 20170221 |
| hg18 | dbnsfp35a | same as above |  20180921 |
| hg19 | dbnsfp35a | same as above |  20180921 |
| hg38 | dbnsfp35a | same as above | 20180921 |
| hg18 | dbnsfp35c | same as above, suitable for commercial use| 20181023 |
| hg19 | dbnsfp35c | same as above | 20181023 |
| hg38 | dbnsfp35c | same as above | 20181023 |
| hg19 | dbnsfp41a | same as above | 20201007 |
| hg38 | dbnsfp41a | same as above | 20201007 |
| hg19 | dbnsfp41c | same as above, suitable for commerical use | 20201007 |
| hg38 | dbnsfp41c | same as above | 20201007 |
| hg18 | dbnsfp42a | reformatted to include more columns than dbnsfp41a | 20210710 |
| hg19 | dbnsfp42a | same as above | 20210710 |
| hg38 | dbnsfp42a | same as above | 20210710 |
| hg18 | dbnsfp42c | reformatted to include more columns than dbnsfp41a, commerical use | 20210710 |
| hg19 | dbnsfp42c | same as above | 20210710 |
| hg38 | dbnsfp42c | same as above | 20210710 |
| hg19 | dbnsfp47a | dbNSFP version 4.7a | 20240525 |
| hg38 | dbnsfp47a | same as above | 20240525 |
| hg19 | dbnsfp42c | dbNSFP version 4.7c for commercial use | 20240525 |
| hg38 | dbnsfp42c | same as above | 20240525 |
| hg19 | dbscsnv11 | dbscSNV version 1.1 for splice site prediction by AdaBoost and Random Forest | 20151218 |
| hg38 | dbscsnv11 | same as above | 20151218 |
| hg38 | GTEx_v8_eQTL | Expression Quantitative Trait Loci (eQTL) across tissues based on GTEx v8 | 20241014 |
| hg38 | GTEx_v8_sQTL | Splicing Quantitative Trait Loci (sQTL) across tissues based on GTEx v8 | 20241014 |
| hg19 | intervar_20170202 | InterVar: clinical interpretation of missense variants (indels not supported)| 20170202 |
| hg19 | intervar_20180118 | InterVar: clinical interpretation of missense variants (indels not supported) | 20180325 |
| hg38 | intervar_20180118 | InterVar: clinical interpretation of missense variants (indels not supported)| 20180325 |
| hg18 | cg46 | alternative allele frequency in 46 unrelated human subjects sequenced by Complete Genomics | 20120222 |
| hg19 | cg46 | same as above | index updated 2012Feb22 |
| hg18 | cg69 | allele frequency in 69 human subjects sequenced by Complete Genomics | 20120222 |
| hg19 | cg69 | same as above | 20120222 |
| hg19 | cosmic64 | COSMIC database version 64 | 20130520 |
| hg19 | cosmic65 | COSMIC database version 65 | 20130706 |
| hg19 | cosmic67 | COSMIC database version 67 | 20131117 |
| hg19 | cosmic67wgs | COSMIC database version 67 on WGS data | 20131117 |
| hg19 | cosmic68 | COSMIC database version 68 | 20140224 |
| hg19 | cosmic68wgs | COSMIC database version 68 on WGS data | 20140224 |
| hg19 | cosmic70 | same as above | 20140911 |
| hg18 | cosmic70 | same as above | 20150428 |
| hg38 | cosmic70 | same as above | 20150428 |
| hg19/hg38 | cosmic71, 72, ..., 80 | read [here](http://annovar.openbioinformatics.org/en/latest/user-guide/filter/#cosmic-annotations) | |
| hg18 | esp6500siv2_ea | alternative allele frequency in European American subjects in the NHLBI-ESP project with 6500 exomes, including the indel calls and the chrY calls. This is lifted over from hg19 by myself | 20141222 |
| hg19 | esp6500siv2_ea | same as above | 20141222 |
| hg38 | esp6500siv2_ea | same as above, lifted over from hg19 by myself |  20141222 |
| hg18 | esp6500siv2_aa | alternative allele frequency in African American subjects in the NHLBI-ESP project with 6500 exomes, including the indel calls and the chrY calls. This is lifted over from hg19 by myself. | 20141222 |
| hg19 | esp6500siv2_aa | same as above | 20141222 |
| hg38 | esp6500siv2_aa | same as above, lifted over from hg19 by myself | 20141222 |
| hg18 | esp6500siv2_all | alternative allele frequency in All subjects in the NHLBI-ESP project with 6500 exomes, including the indel calls and the chrY calls. This is lifted over from hg19 by myself. | 20141222 |
| hg19 | esp6500siv2_all | same as above | 20141222 |
| hg38 | esp6500siv2_all | same as above, lifted over from hg19 by myself | 20141222 |
| hg19 | exac03 | ExAC 65000 exome allele frequency data for ALL, AFR (African), AMR (Admixed American), EAS (East Asian), FIN (Finnish), NFE (Non-finnish European), OTH (other), SAS (South Asian)). version 0.3. Left normalization done. | 20151129 |
| hg18 | exac03 | same as above | 20151129 |
| hg38 | exac03 | same as above | 20151129 |
| hg19 | exac03nontcga | ExAC on non-TCGA samples (updated header) | 20160423 |
| hg38 | exac03nontcga | same as above | 20160423 |
| hg19 | exac03nonpsych | ExAC on non-Psychiatric disease samples (updated header) | 20160423 |
| hg38 | exac03nonpsych | same as above | 20160423 |
| hg38 | exac10 | No difference as exac03 based on [this](ftp://ftp.broadinstitute.org/pub/ExAC_release/release1/README.new_annotations); use exac03 instead | X |
| hg19 | gene4denovo201907 | [gene4denovo](https://academic.oup.com/nar/advance-article/doi/10.1093/nar/gkz923/5603227) database | 20191101 |
| hg38 | gene4denovo201907 | gene4denovo database | 20191101 |
| hg19 | gnomad_exome | gnomAD exome collection (v2.0.1) | 20170311 |
| hg38 | gnomad_exome | gnomAD exome collection (v2.0.1) | 20170311 |
| hg19 | gnomad_genome | gnomAD genome collection (v2.0.1) | 20170311 |
| hg38 | gnomad_genome | gnomAD genome collection (v2.0.1) | 20170311 |
| hg19 | gnomad211_exome | gnomAD exome collection (v2.1.1), with "AF AF_popmax AF_male AF_female AF_raw AF_afr AF_sas AF_amr AF_eas AF_nfe AF_fin AF_asj AF_oth non_topmed_AF_popmax non_neuro_AF_popmax non_cancer_AF_popmax controls_AF_popmax" header | 20190318 |
| hg19 | gnomad211_genome | same as above | 20190323 |
| hg38 | gnomad211_exome | same as above | 20190409 |
| hg38 | gnomad211_genome | same as above | 20190409 |
| hg38 | gnomad30_genome | version 3.0 whole-genome data | 20191104 |
| hg38 | gnomad312_genome | version 3.1.2 whole-genome data | 20221228 |
| hg38 | gnomad40_exome | version 4.0 whole-exome data | 20231127 |
| hg38 | gnomad40_genome | version 4.0 whole-genome data | 20231127 |
| hg38 | gnomad41_exome | version 4.1 whole-exome data | 20240602 |
| hg38 | gnomad41_genome | version 4.1 whole-genome data | 20240602 |
| hs1 | gnomad | whole-genome data from [here](https://ftp.ensembl.org/pub/rapid-release/species/Homo_sapiens/GCA_009914755.4/ensembl/variation/2022_10/vcf/Homo_sapiens-GCA_009914755.4-2022_10-gnomad.vcf.gz) | 20230830 |
| hg38 | allofus | whole-genome data from first ~250k srWGS in All of Us | 20250321 |
| hg38 | regeneron | regeneron exome | 20250321 |
| hg19 | kaviar_20150923 | 170 million Known VARiants from 13K genomes and 64K exomes in 34 projects | 20151203 |
| hg38 | kaviar_20150923 | same as above | 20151203 |
| hg19 | hrcr1 | 40 million variants from 32K samples in haplotype reference consortium | 20151203 |
| hg38 | hrcr1 | same as above | 20151203 |
| hg19 | abraom | 2.3 million [Brazilian genomic variants](https://www.ncbi.nlm.nih.gov/pubmed/28332257) | 20181204 |
| hg38 | abraom | liftOver from above | 20181204 |
| hg18 | 1000g (3 data sets) | alternative allele frequency data in 1000 Genomes Project | 20120222 |
| hg18 | 1000g2010 (3 data sets) | same as above | 20120222 |
| hg18 | 1000g2010jul (3 data sets) | same as above | 20120222 |
| hg18 | 1000g2012apr | I lifted over the latest 1000 Genomes Project data to hg18, to help researchers working with hg18 coordinates | 20120820 |
| hg19 | 1000g2010nov | same as above | 20120222 |
| hg19 | 1000g2011may | same as above | 20120222 |
| hg19 | 1000g2012feb | same as above | 20130308 |
| hg18 | 1000g2012apr (5 data sets) | This is done by liftOver of the hg19 data below. It contains alternative allele frequency data in 1000 Genomes Project for ALL, AMR (admixed american), EUR (european), ASN (asian), AFR (african) populations | 20130508 |
| hg19 | 1000g2012apr (5 data sets) | alternative allele frequency data in 1000 Genomes Project for ALL, AMR (admixed american), EUR (european), ASN (asian), AFR (african) populations | 20120525 |
| hg19 | 1000g2014aug (6 data sets) | alternative allele frequency data in 1000 Genomes Project for autosomes (ALL, AFR (African), AMR (Admixed American), EAS (East Asian), EUR (European), SAS (South Asian)). Based on 201408 collection v4 (based on 201305 alignment) | 20140915 |
| hg19 | 1000g2014sep (6 data sets) | alternative allele frequency data in 1000 Genomes Project for autosomes (ALL, AFR (African), AMR (Admixed American), EAS (East Asian), EUR (European), SAS (South Asian)). Based on 201409 collection v5 (based on 201305 alignment) | 20140925 |
| hg19 | 1000g2014oct (6 data sets) | alternative allele frequency data in 1000 Genomes Project for autosomes (ALL, AFR (African), AMR (Admixed American), EAS (East Asian), EUR (European), SAS (South Asian)). Based on 201409 collection v5 (based on 201305 alignment) but including chrX and chrY data finally! | 20141216 |
| hg18 | 1000g2014oct (6 data sets) | same as above | 20150428 |
| hg38 | 1000g2014oct (6 data sets) | same as above | 20150424 |
| hg19 | 1000g2015aug (6 data sets) | The 1000G team fixed a bug in chrX frequency calculation. Based on 201508 collection v5b (based on 201305 alignment) | 20150824 |
| hg38 | 1000g2015aug (6 data sets) | same as above | 20150824 |
| hg19 | gme | [Great Middle East](https://www.ncbi.nlm.nih.gov/pubmed/27428751) allele frequency including NWA (northwest Africa), NEA (northeast Africa), AP (Arabian peninsula), Israel, SD (Syrian desert), TP (Turkish peninsula) and CA (Central Asia) | 20161024 |
| hg38 | gme | same as above | 20161024 |
| hg19 | mcap | [M-CAP scores](http://bejerano.stanford.edu/mcap/index.html) for non-synonymous variants | 20161104 |
| hg38 | mcap | same as above | 20161104 |
| hg19 | mcap13 | [M-CAP scores v1.3] | 20181203 |
| hg19 | revel | [REVEL scores](https://sites.google.com/site/revelgenomics/about) for non-synonymous variants | 20161205 |
| hg38 | revel | same as above | 20161205 |
| hg18 | snp128 | dbSNP with ANNOVAR index files | 20120222 |
| hg18 | snp129 | same as above | 20120222 |
| hg19 | snp129 | liftover from hg18_snp129.txt | 20120809 |
| hg18 | snp130 | same as above | 20120222 |
| hg19 | snp130 | same as above | 20120222 |
| hg18 | snp131 | same as above | 20120222 |
| hg19 | snp131 | same as above | 20120222 |
| hg18 | snp132 | same as above | 20120222 |
| hg19 | snp132 | same as above | 20120222 |
| hg18 | snp135 | I lifted over SNP135 to hg18 | 20120820 |
| hg19 | snp135 | same as above | 20120222 |
| hg19 | snp137 | same as above | 20130109 |
| hg18 | snp138 | I lifted over SNP138 to hg18 | 20140910 |
| hg19 | snp138 | same as above | file and index updated 20140910 |
| hg19 | avsnp138 | dbSNP138 with allelic splitting and left-normalization | 20141223 |
| hg19 | avsnp142 | dbSNP142 with allelic splitting and left-normalization | 20141228 | 
| hg19 | avsnp144 | dbSNP144 with allelic splitting and left-normalization (careful with [bugs](../articles/dbSNP.md#additional-discussions)!) | 20151102 | 
| hg38 | avsnp144 | same as above | 20151102 | 
| hg19 | avsnp147 | dbSNP147 with allelic splitting and left-normalization | 20160606 |
| hg38 | avsnp142 | dbSNP142 with allelic splitting and left-normalization | 20160106 |
| hg38 | avsnp144 | dbSNP144 with allelic splitting and left-normalization | 20151102 |
| hg38 | avsnp147 | dbSNP147 with allelic splitting and left-normalization | 20160606 |
| hg19 | avsnp150 | dbSNP150 with allelic splitting and left-normalization | 20170929 |
| hg38 | avsnp150 | dbSNP150 with allelic splitting and left-normalization | 20170929 |
| hg19 | avsnp151 | dbSNP151 with allelic splitting | 20240525 |
| hg38 | avsnp151 | dbSNP151 with allelic splitting | 20240525 |
| hg18 | snp128NonFlagged | dbSNP with ANNOVAR index files, after removing those flagged SNPs (SNPs < 1% minor allele frequency (MAF) (or unknown), mapping only once to reference assembly, flagged in dbSnp as "clinically associated") | 20120524 |
| hg18 | snp129NonFlagged | same as above | 20120524 |
| hg18 | snp130NonFlagged | same as above | 20120524 |
| hg19 | snp130NonFlagged | same as above | 20120524 |
| hg18 | snp131NonFlagged | same as above | 20120524 |
| hg19 | snp131NonFlagged | same as above | 20120524 |
| hg18 | snp132NonFlagged | same as above | 20120524 |
| hg19 | snp132NonFlagged | same as above | 20120524 |
| hg19 | snp135NonFlagged | same as above | 20120524 |
| hg19 | snp137NonFlagged | same as above | 20130109 |
| hg19 | snp138NonFlagged | same as above | 20140222 |
| hg19 | nci60 | NCI-60 human tumor cell line panel exome sequencing allele frequency data | 20130724 |
| hg18 | nci60 | same as above | 20150428 |
| hg38 | nci60 | same as above | 20150428 |
| hg19 | icgc21 | International Cancer Genome Consortium version 21 | 20160622 | 
| hg19 | icgc28 | International Cancer Genome Consortium version 28 | 20210122 | 
| hg38 | icgc28 | International Cancer Genome Consortium version 28 | 20210122 | 
| hg19 | clinvar_20131105 | CLINVAR database with Variant Clinical Significance (unknown, untested, non-pathogenic, probable-non-pathogenic, probable-pathogenic, pathogenic, drug-response, histocompatibility, other) and Variant disease name | 20140430 |
| hg19 | clinvar_20140211 | same as above | 20140430 |
| hg19 | clinvar_20140303 | same as above | 20140430 |
| hg19 | clinvar_20140702 | same as above | 20140712 |
| hg38 | clinvar_20140702 | same as above | 20140712 |
| hg19 | clinvar_20140902 | same as above | 20140911 |
| hg38 | clinvar_20140902 | same as above | 20140911 |
| hg19 | clinvar_20140929 | same as above | 20141002 |
| hg19 | clinvar_20150330 | same as above but with variant normalization | 20150413 |
| hg38 | clinvar_20150330 | same as above but with variant normalization | 20150413 |
| hg19 | clinvar_20150629 | same as above but with variant normalization | 20150724 |
| hg38 | clinvar_20150629 | same as above but with variant normalization | 20150724 |
| hg19 | clinvar_20151201 | Clinvar version 20151201 with separate columns (CLINSIG CLNDBN  CLNACC  CLNDSDB CLNDSDBID) | 20160303 |
| hg38 | clinvar_20151201 | same as avove| 20160303 |
| hg19 | clinvar_20160302 | Clinvar version 20160302 with separate columns (CLINSIG CLNDBN  CLNACC  CLNDSDB CLNDSDBID) | 20171003 | 
| hg38 | clinvar_20160302 | same as above (updated 20171003 to handle multi-allelic variants) | 20171003 |
| hg19 | clinvar_20161128 | Clinvar version 20161128 with separate columns (CLINSIG CLNDBN  CLNACC  CLNDSDB CLNDSDBID) | 20171003 |
| hg38 | clinvar_20161128 | same as above (updated 20170215 to add missing header line; 20171003 to handle multi-allelic variants) | 20171003 |
| hg19 | clinvar_20170130 | Clinvar version 20170130 with separate columns (CLINSIG CLNDBN  CLNACC  CLNDSDB CLNDSDBID) | 20171003 |
| hg38 | clinvar_20170130 | same as above | 20171003 |
| hg19 | clinvar_20170501 | Clinvar version 20170130 with separate columns (CLINSIG CLNDBN  CLNACC  CLNDSDB CLNDSDBID) | 20171003 |
| hg38 | clinvar_20170501 | same as above | 20171003 |
| hg19 | clinvar_20170905 | Clinvar version 20170905 with separate columns (CLINSIG CLNDBN  CLNACC  CLNDSDB CLNDSDBID) | 20171003 |
| hg38 | clinvar_20170905 | same as above | 20171003 |
| hg19 | clinvar_20180603 |  Clinvar version 20180603 with separate columns (CLNALLELEID CLNDN CLNDISDB CLNREVSTAT CLNSIG) | 20180708 |
| hg38 | clinvar_20180603 |  same as above | 20180708 |
| hg19 | clinvar_20190305 |  Clinvar version 20190305 with separate columns (CLNALLELEID CLNDN CLNDISDB CLNREVSTAT CLNSIG) | 20190311 |
| hg38 | clinvar_20190305 |  same as above | 20190316 |
| hg19 | clinvar_20200316 |  Clinvar version 20200316 with separate columns (CLNALLELEID CLNDN CLNDISDB CLNREVSTAT CLNSIG) | 20200401 |
| hg38 | clinvar_20200316 |  same as above | 20200401 |
| hg19 | clinvar_20210123 |  Clinvar version 20210123 with separate columns (CLNALLELEID CLNDN CLNDISDB CLNREVSTAT CLNSIG) | 20210202 |
| hg38 | clinvar_20210123 |  same as above | 20210202 |
| hg19 | clinvar_20210501 |  Clinvar version 20210501 with separate columns (CLNALLELEID CLNDN CLNDISDB CLNREVSTAT CLNSIG) | 20210507 |
| hg38 | clinvar_20210501 |  same as above | 20210507 |
| hg19 | clinvar_20220320 |  Clinvar version 20220320 with separate columns (CLNALLELEID CLNDN CLNDISDB CLNREVSTAT CLNSIG) | 20220330 |
| hg38 | clinvar_20220320 |  same as above | 20220320 |
| hg19 | clinvar_20221231 |  Clinvar version 20221231 with separate columns (CLNALLELEID CLNDN CLNDISDB CLNREVSTAT CLNSIG) | 20230105 |
| hg38 | clinvar_20221231 |  same as above | 20240616 |
| hg19 | clinvar_20240611 |  Clinvar version 20240611 with separate columns (CLNALLELEID CLNDN CLNDISDB CLNREVSTAT CLNSIG) | 20240616 |
| hg38 | clinvar_20240611 |  same as above | 20240616 |
| hg19 | clinvar_20240917 |  Clinvar version 20240917 with separate columns for germline variants, oncogenecity variants and somatic variants) | 20240924 |
| hg38 | clinvar_20240917 |  same as above | 20240924 |
| hg19 | popfreq_max_20150413 |  A database containing the maximum allele frequency from 1000G, ESP6500, ExAC and CG46 | 20150413 |
| hg19 | popfreq_all_20150413 |  A database containing all allele frequency from 1000G, ESP6500, ExAC and CG46  | 20150413 |
| hg19 | mitimpact2 | pathogenicity predictions of human mitochondrial missense variants (see [here](http://www.ncbi.nlm.nih.gov/m/pubmed/25516408/)  | 20150520 |
| hg19 | mitimpact24 | same as above with version 2.4  | 20160123 |
| hg19 | regsnpintron | prioritize the disease-causing probability of intronic SNVs | 20180920 |
| hg38 | regsnpintron | lifeOver of above | 20180922 |
| hg18 | gerp++elem | conserved genomic regions by GERP++ | 20140223 |
| hg19 | gerp++elem | same as above | 20140223 |
| mm9 | gerp++elem | same as above | 20140223 |
| hg18 | gerp++gt2 | whole-genome GERP++ scores greater than 2 (RS score threshold of 2 provides high sensitivity while still strongly enriching for truly constrained sites. ) | 20120621 |
| hg19 | gerp++gt2 | same as above | 20120621 |
| hg19 | caddgt20 | with score>20 | 20160607 |
| hg19 | caddgt10 | CADD with score>10 | 20160607 |
| hg19 | cadd | CADD | 20140223 |
| hg19 | cadd13 | CADD version 1.3 | 20170123 |
| hg19 | cadd13gt10 | CADD version 1.3 score>10 | 20170123 |
| hg19 | cadd13gt20 | CADD version 1.3 score>20 | 20170123 |
| hg19 | caddindel | removed | 20150505 |
| hg19 | fathmm | whole-genome FATHMM_coding and FATHMM_noncoding scores (noncoding and coding scores in the 2015 version was reversed) | 20160315 |
| hg19 | gwava | whole genome GWAVA_region_score and GWAVA_tss_score (GWAVA_unmatched_score has bug in file), see [ref](http://www.nature.com/nmeth/journal/v11/n3/abs/nmeth.2832.html). | 20150623 |
| hg19 | eigen | whole-genome Eigen scores, see [ref](http://www.ncbi.nlm.nih.gov/pubmed/26727659) | 20160330 |

## User-contributed datasets

Several generous ANNOVAR users provide additional annotation datasets that may help other users. These datasets are described below:

* MitImpact2: pathogenicity predictions of human mitochondrial missense variants. This is prepared as filter-based annotation format and users can directly download from ANNOVAR (see table above).
* regsnpintron: [regSNP-intron](http://clark.compbio.iupui.edu/regsnp_intron_web/) uses a machine learning algorithm to prioritize the disease-causing probability of intronic SNVs. The columns are "fpr (False positive rate), disease Disease category (B: benign [FPR > 0.1]; PD: Possibly Damaging [0.05 < FPR <= 0.1]; D: Damaging [FPR <= 0.05]), splicing_site Splicing site (on/off). Splicing sites are defined as -3 to +7 for donor sites, -13 to +1 for acceptor sites.". This is prepared as filter-based annotation format and users can directly download from ANNOVAR (see table above).
* LoFtool score: gene loss-of-function score percentiles. The smaller the percentile, the most intolerant is the gene to functional variation. The file can be downloaded [here](http://www.openbioinformatics.org/annovar/download/LoFtool_scores.txt.gz). Manuscript in preparation (please contact Dr. Joao Fadista - joao.fadista@med.lu.se). The authors would like to thank the Exome Aggregation Consortium and the groups that provided exome variant data for comparison. A full list of contributing groups can be found at http://exac.broadinstitute.org/about.
* RVIS-ESV score: RVIS score measures genetic intolerance of genes to functional mutations, as described in [Petrovski et al](http://journals.plos.org/plosgenetics/article?id=10.1371/journal.pgen.1003709). Original RVIS was constructed based on patterns of standing variation in 6503 samples. The authors have recently constructed scores based on the ~61,000 samples from ExAC. There is high correlation, but more resolution for many genes. The ExAC cohort implementation is what we consider RVIS (v2). It can be downloaded [here](http://www.openbioinformatics.org/annovar/download/RVIS_ExAC_4KW.txt.gz).
* GDI score: the gene damage index (GDI) is describing the accumulated mutational damage for each human gene in the general population, and shows that highly mutated/damaged genes are unlikely to be disease-causing and yet they generate a big proportion of false positive variants harbored in such genes. Therefore removing high GDI genes is a very effective way to remove confidently false positives from WES/WGS data. More details were given in [this paper](http://www.pnas.org/content/early/2015/10/14/1518646112.abstract). The data set includes general damage prediction (low/medium/high) for different disease type (all, Mendelian, cancer, and PID) and can be downloaded from [here](http://www.openbioinformatics.org/annovar/download/GDI_full_10282015.txt.gz).
* TMC-SNPDB: SNP database from whole exome data of 62 normal samples derived from cancer patients of Indian origin, representing 114, 309 unique germline variants. Read the manuscript [here](http://database.oxfordjournals.org/content/2016/baw104.full). It is useful for exome sequencing studies on Indian populations and can be downloaded from [here](http://www.openbioinformatics.org/annovar/download/hg38_tmcsnpdb.txt.gz).
* GenoNet Scores: cell-specific functional elements predicted by [GenoNet](https://www.nature.com/articles/s41467-018-07349-w) organized by chromosomes in many cell types. You must use the specific [link](http://www.openbioinformatics.org/annovar/download/GenoNetScores/ByChr/index.html) to download the files.

## Third-party datasets

Several third-party researchers have provided additional annotation datasets that can be used by ANNOVAR directly. However, users need to agree to specific license terms set forth by the third parties:

* SPIDEX: SPIDEX 1.0 - Deep Genomics : (Xiong et al, Science 2015) Machine-learning prediction on how genetic variants affect RNA splicing. This dataset can be downloaded [here](https://www.openbioinformatics.org/annovar/spidex_download_form.php).

## Third-party software tools

Customprodbj is a Java-based tool for customized protein database construction. It can build the database on a single or multiple VCF files on single or multiple individuals. It can be accessed at [here](https://github.com/wenbostar/customprodbj). Command line example: `java -jar customprodbj.jar -f input_variant_file_list.txt -d annovar_database/humandb/hg19_refGeneMrna.fa -r annovar_database/humandb/hg19_refGene.txt -t -o out/`.

David Baux created a convenient script to automate the procedure of generating ClinVar databases in ANNOVAR. The scripts are available [here](https://github.com/mobidic/update_annovar_db).

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
    var disqus_identifier = 'download';
    var disquss_title = 'Download ANNOVAR';
    
    /* * * DON'T EDIT BELOW THIS LINE * * */
    (function() {
        var dsq = document.createElement('script'); dsq.type = 'text/javascript'; dsq.async = true;
        dsq.src = '//' + disqus_shortname + '.disqus.com/embed.js';
        (document.getElementsByTagName('head')[0] || document.getElementsByTagName('body')[0]).appendChild(dsq);
    })();
</script>
<noscript>Please enable JavaScript to view the <a href="https://disqus.com/?ref_noscript" rel="nofollow">comments powered by Disqus.</a></noscript>
