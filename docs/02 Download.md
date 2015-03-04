# Download ANNOVAR and related data sets

## ANNOVAR main package

The latest version of ANNOVAR can be downloaded [here](http://www.openbioinformatics.org/annovar/annovar_download_form.php).

ANNOVAR is written in pure Perl and can be run as a standalone application on diverse hardware systems where standard Perl modules are installed.

## Additional databases

Most of the databases that ANNOVAR uses can be directly retrieved from UCSC Genome Browser Annotation Database. In general, users can use "-downdb" in ANNOVAR to download these files. As of Feb2012, there are 6418 databases for hg19, 6443 databases for hg18, 1841 databases for mm9, etc.

Several very commonly used annotation databases for human genomes are additionally provided by me as described below. In general, users can use `-downdb -webfrom annovar` in ANNOVAR directly to download these files.


| Genome Build | Table Name | Explanation | Additional Comments |
|---|---|---|---|
| hg18 | avsift | whole-exome SIFT scores for non-synonymous variants (obselete and should not be uesd any more) | file updated 2011Mar01, index updated 2012Feb22 |
| hg19	|	avsift	|	same as above	file updated 2011Mar01, index updated 2012Feb22 |
| hg18	|	ljb_sift	|	whole-exome LJBSIFT scores (which corresponds to 1-SIFT !!!!!)	|	file and index updated 2012Feb22 |
| hg19 | ljb_sift | same as above | file and index updated 2012Feb22 |
| hg18 | ljb2_sift | whole-exome SIFT scores (version 2) | file and index updated 2013Jun21 |
| hg19 | ljb2_sift | same as above | file and index updated 2013Jun21 |
| hg18 | ljb23_sift | whole-exome SIFT scores with missing values imputed (version 2.3) , inccluding raw score, transformed score (0-1, higher values more deleterious, calculated as 1-SIFT) and categorical prediction | file and index updated 20140222 |
| hg19 | ljb23_sift | same as above | file and index updated 20140222 |
| hg18 | ljb26_sift | whole-exome SIFT scores with missing values imputed, inccluding raw score and categorical prediction | file and index udpated 20140925 |
| hg19 | ljb26_sift | samea s above | file and index udpated 20140925 |
| hg18 | ljb_pp2 | whole-exome PolyPhen scores | file updated 2011May11, index updated 2012Feb22 |
| hg19 | ljb_pp2 | same as above | file updated 2011May11, index updated 2012Feb22 |
| hg18 | ljb2_pp2hdiv | whole-exome PolyPhen scores built on HumanDiv database (for complex phenotypes) | file and index updated 2013Jun21 |
| hg19 | ljb2_pp2hdiv | same as above | file and index updated 2013Jun21 |
| hg18 | ljb23_pp2hdiv | whole-exome PolyPhen 2 scores built on HumanDiv database (for complex phenotypes) (version 2.3), inccluding raw score and categorical prediction | file and index updated 20140222 |
| hg19 | ljb23_pp2hdiv | same as above | file and index updated 20140222 |
| hg18 | ljb26_pp2hdiv | same as above | file and index updated 20140925 |
| hg19 | ljb26_pp2hdiv | same as above | file and index updated 20140925 |
| hg18 | ljb2_pp2hvar | whole-exome PolyPhen version 2 scores built on HumanVar database (for Mendelian phenotypes) | file and index updated 2013Jun21 |
| hg19 | ljb2_pp2hvar | same as above | file and index updated 2013Jun21 |
| hg18 | ljb23_pp2hvar | whole-exome PolyPhen 2 scores built on HumanVar database (for Mendelian phenotypes) (version 2.3), inccluding raw score and categorical prediction | file and index updated 20140222 |
| hg19 | ljb23_pp2hvar | same as above | file and index updated 20140222 |
| hg19 | ljb26_pp2hvar | same as above | file and index updated 20140925 |
| hg19 | ljb26_pp2hvar | same as above | file and index updated 20140925 |
| hg18 | ljb26_cadd | whole-exome CADD scores, including raw score and categorical prediction | file and index udpated 20140915 |
| hg18 | ljb_phylop | whole-exome PhyloP scores | file updated 2011May11, index updated 2012Feb22 |
| hg19 | ljb_phylop | same as above | file updated 2011May11, index updated 2012Feb22 |
| hg18 | ljb2_phylop | whole-exome PhyloP scores (version 2) | file and index updated 2013Jun21 |
| hg19 | ljb2_phylop | same as above | file and index updated 2013Jun21 |
| hg18 | ljb23_phylop | whole-exome PhyloP scores (version 2.3) | file and index updated 20140222 |
| hg19 | ljb23_phylop | same as above | file and index updated 20140222 |
| hg18 | ljb26_phylop46way_placental | whole-exome PhyloP scores based on 46-way alignment placental subset | file and index updated 20140925 |
| hg19 | ljb26_phylop46way_placental | same as above | file and index updated 20140925 |
| hg18 | ljb26_phylop100way_vertebrate | whole-exome PhyloP scores based on 100-way alignment vertebrate subset | file and index updated 20140925 |
| hg19 | ljb26_phylop100way_vertebrate | same as above | file and index updated 20140925 |
| hg18 | ljb_lrt | whole-exome LRT scores | file updated 2011May11, index updated 2012Feb22 |
| hg19 | ljb_lrt | same as above | file updated 2011May11, index updated 2012Feb22 |
| hg18 | ljb2_lrt | whole-exome LRT scores (version 2) | file and index updated 2013Jun21 |
| hg19 | ljb2_lrt | same as above | file and index updated 2013Jun21 |
| hg18 | ljb23_lrt | whole-exome LRT scores (version 2.3), inccluding raw score, transformed scores (0-1, with higher values more deleterious) and categorical prediction | file and index updated 20140222 |
| hg19 | ljb23_lrt | same as above | file and index updated 20140222 |
| hg18 | ljb26_lrt | whole-exome LRT scores inccluding raw score and categorical prediction | file and index updated 20140915 |
| hg19 | ljb26_lrt | same as above | file and index updated 20140915 |
| hg18 | ljb_mt | whole-exome MutationTaster scores | file updated 2011May11, index updated 2012Feb22 |
| hg19 | ljb_mt | same as above | file updated 2011May11, index updated 2012Feb22 |
| hg18 | ljb2_mt | whole-exome MutationTaster scores (version 2) | file and index updated 2013Jun21 |
| hg19 | ljb2_mt | same as above | file and index updated 2013Jun21 |
| hg18 | ljb23_mt | whole-exome MutationTaster scores (version 2.3), inccluding raw score, transformed scores (0-1, with higher values more deleterious) and categorical prediction | file and index updated 20140222 |
| hg19 | ljb23_mt | same as above | file and index updated 20140222 |
| hg18 | ljb26_mt | whole-exome MutationTaster scores inccluding raw score and categorical prediction | file and index updated 20140925 |
| hg19 | ljb26_mt | same as above | file and index updated 20140925 |
| hg18 | ljb2_ma | whole-exome MutationAssessor scores (version 2) | file and index updated 2013Jun21 |
| hg19 | ljb2_ma | same as above | file and index updated 20140915 |
| hg18 | ljb23_ma | whole-exome MutationAssessor scores (version 2.3), inccluding raw score, transformed scores (0-1, with higher values more deleterious) and categorical prediction | file and index updated 20140222 |
| hg19 | ljb23_ma | same as above | file and index updated 20140222 |
| hg18 | ljb26_ma | whole-exome MutationAssessor scores inccluding raw score and categorical prediction | file and index updated 20140925 |
| hg19 | ljb26_ma | same as above | file and index updated 20140925 |
| hg18 | ljb2_fathmm | whole-exome FATHMM scores | file and index updated 2013Jun21 |
| hg19 | ljb2_fathmm | same as above | file and index updated 2013Jun21 |
| hg18 | ljb23_fathmm | whole-exome FATHMM scores (version 2.3), inccluding raw score, transformed scores (0-1, with higher values more deleterious) and categorical prediction | file and index updated 2014Feb22 |
| hg19 | ljb23_fathmm | same as above | file and index updated 2014Feb22 |
| hg18 | ljb26_fathmm | whole-exome FATHMM scores inccluding raw score and categorical prediction | file and index updated 20140925 |
| hg19 | ljb26_fathmm | same as above | file and index updated 20140925 |
| hg18 | ljb2_siphy | whole-exome SiPhy scores | file and index updated 2013Jun21 |
| hg19 | ljb2_siphy | same as above | file and index updated 2013Jun21 |
| hg18 | ljb23_siphy | whole-exome SiPhy scores (version 2.3) | file and index updated 2014Feb22 |
| hg19 | ljb23_siphy | same as above | file and index updated 2014Feb22 |
| hg18 | ljb26_siphy | whole-exome SiPhy scores | file and index updated 20140925 |
| hg19 | ljb26_siphy | same as above | file and index updated 20140925 |
| hg18 | ljb_gerp++ | whole-exome GERP++ scores | file and index updated 2012Feb22 |
| hg19 | ljb_gerp++ | same as above | file and index updated 2012Feb22 |
| hg18 | ljb2_gerp++ | whole-exome GERP++ scores (version 2) | file and index updated 2013Jun21 |
| hg19 | ljb2_gerp++ | same as above | file and index updated 2013Jun21 |
| hg18 | ljb23_gerp++ | whole-exome GERP++ scores (version 2.3) | file and index updated 2014Feb22 |
| hg19 | ljb23_gerp++ | same as above | file and index updated 2014Feb22 |
| hg18 | ljb26_gerp++ | whole-exome GERP++ scores | file and index updated 20140925 |
| hg19 | ljb26_gerp++ | same as above | file and index updated 20140925 |
| hg18 | ljb23_metasvm | whole-exome MetaSVM scores, including raw score, transformed scores (0-1, with higher values more deleterious) and categorical prediction | file and index updated 2014Feb22 |
| hg19 | ljb23_metasvm | same as above | file and index updated 2014Feb22 |
| hg18 | ljb26_metasvm | whole-exome MetaSVM scores, including raw score and categorical prediction | file and index updated 20140925 |
| hg19 | ljb26_metasvm | same as above | file and index updated 20140925 |
| hg18 | ljb23_metalr | whole-exome MetaLR scores, including raw score, transformed scores (0-1, with higher values more deleterious) and categorical prediction | file and index updated 2014Feb22 |
| hg19 | ljb23_metalr | same as above | file and index updated 2014Feb22 |
| hg18 | ljb26_metalr | whole-exome MetaLR scores, including raw score and categorical prediction | file and index updated 20140925 |
| hg19 | ljb26_metalr | same as above | file and index updated 20140925 |
| hg18 | ljb26_vest | whole-exome VEST scores | file and index updated 20140925 |
| hg19 | ljb26_vest | same as above | file and index updated 20140925 |
| hg18 | ljb26_cadd | whole-exome CADD scores | file and index updated 20140925 |
| hg19 | ljb26_cadd | same as above | file and index udpated 20140925 |
| hg18 | ljb_all | whole-exome LJBSIFT, PolyPhen, PhyloP, LRT, MutationTaster, GERP++ scores | file and index updated 2012Feb22 |
| hg19 | ljb_all | same as above | file and index updated 2012Feb22 |
| hg18 | ljb2_all | whole-exome SIFT scores, PolyPhen2 HDIV scores, PolyPhen2 HVAR scores, LRT scores, MutationTaster scores, MutationAssessor score, FATHMM scores, GERP++ scores, PhyloP scores and SiPhy scores | file and index updated 2013Jun21 |
| hg19 | ljb2_all | same as above | file and index updated 2013Jun21 |
| hg18 | ljb23_all | whole-exome SIFT scores, PolyPhen2 HDIV scores, PolyPhen2 HVAR scores, LRT scores, MutationTaster scores, MutationAssessor score, FATHMM scores, MetaSVM scores, MetaLR scores, GERP++ scores, PhyloP scores and SiPhy scores | file and index updated 2014Feb22 |
| hg19 | ljb23_all | same as above | file and index updated 2014Feb22 |
| hg18 | ljb26_all | whole-exome SIFT scores, PolyPhen2 HDIV scores, PolyPhen2 HVAR scores, LRT scores, MutationTaster scores, MutationAssessor score, FATHMM scores, MetaSVM scores, MetaLR scores, VEST scores, CADD scores, GERP++ scores, PhyloP scores and SiPhy scores from dbsnp version 2.6 | file and index updated 20140925 |
| hg19 | ljb26_all | same as above | file and index updated 20140925 |
| hg18 | cg46 | alternative allele frequency in 46 unrelated human subjects sequenced by Complete Genomics | index updated 2012Feb22 |
| hg19 | cg46 | same as above | index updated 2012Feb22 |
| hg18 | cg69 | allele frequency in 69 human subjects sequenced by Complete Genomics | index updated 2012Feb22 |
| hg19 | cg69 | same as above | index updated 2012Feb22 |
| hg19 | cosmic64 | COSMIC database version 64 (previously observed cancer mutations, their identifiers in COSMIC, how many times are observed, and in which cancer tissues are observed). Including non-coding variants. | file and index updated 20130520 |
| hg19 | cosmic65 | COSMIC database version 65. | file and index updated 20130706 |
| hg19 | cosmic67 | COSMIC database version 67 | file and index updated 20131117 |
| hg19 | cosmic67wgs | COSMIC database version 67 on WGS data | file and index updated 20131117 |
| hg19 | cosmic68 | COSMIC database version 68 | file and index updated 20140224 |
| hg19 | cosmic68wgs | COSMIC database version 68 on WGS data | file and index updated 20140224 |
| hg19 | cosmic70 | same as above | file and index udpated 20140911 |
| hg18 | esp5400_aa | alternative allele frequency in African Americans in the NHLBI-ESP project with 5400 exomes | file and index updated 2012Jul11 |
| hg19 | esp5400_aa | same as above | file and index updated 2012Jul11 |
| hg18 | esp5400_ea | alternative allele frequency in European Americans in the NHLBI-ESP project with 5400 exomes | file and index updated 2012Jul11 |
| hg19 | esp5400_ea | same as above | file and index updated 2012Jul11 |
| hg18 | esp5400_all | alternative allele frequency in all subjects in the NHLBI-ESP project with 5400 exomes | file and index updated 2012Jul11 |
| hg19 | esp5400_all | same as above | file and index updated 2012Jul11 |
| hg18 | esp6500_aa | alternative allele frequency in African Americans in the NHLBI-ESP project with 6500 exomes | index updated 2012Jun21 |
| hg19 | esp6500_aa | same as above | index updated 2012Jun21 |
| hg18 | esp6500_ea | alternative allele frequency in European Americans in the NHLBI-ESP project with 6500 exomes | index updated 2012Jun21 |
| hg19 | esp6500_ea | same as above | index updated 2012Jun21 |
| hg18 | esp6500_all | alternative allele frequency in all subjects in the NHLBI-ESP project with 6500 exomes | index updated 2012Jun21 |
| hg19 | esp6500_all | same as above | index updated 2012Jun21 |
| hg18 | esp6500si_aa | alternative allele frequency in African Americans in the NHLBI-ESP project with 6500 exomes, including the indel calls and the chrY calls | file and index updated 2013Jan22 |
| hg19 | esp6500si_aa | same as above | file and index updated 2013Jan22 |
| hg18 | esp6500si_ea | alternative allele frequency in European Americans in the NHLBI-ESP project with 6500 exomes, including the indel calls and the chrY calls | file and index updated 2013Jan22 |
| hg19 | esp6500si_ea | same as above | file and index updated 2013Jan22 |
| hg18 | esp6500si_all | alternative allele frequency in all subjects in the NHLBI-ESP project with 6500 exomes, including the indel calls and the chrY calls | file and index updated 2013Jan22 |
| hg19 | esp6500si_all | same as above | file and index updated 2013Jan22 |
| hg18 | esp6500siv2_ea |
| alternative allele frequency in European American subjects in the NHLBI-ESP project with 6500 exomes, including the indel calls and the chrY calls. This is lifted over from hg19 by myself. |
|  |
| All files were updated to address concerns on indel mismatch. All database files were manually left-normalized and split by myself (as ESP do not use this practice themselves); so users should left-normalize and allele-split your own VCF files, before annotation, to ensure the most comprehensive matching of indels. |
|  |
| file and index updated 20141222 |
| hg19 | esp6500siv2_ea | same as above | file and index updated 20141222 |
| hg38 | esp6500siv2_ea | same as above, lifted over from hg19 by myself | file and index updated 20141222 |
| hg18 | esp6500siv2_aa |
| alternative allele frequency in African American subjects in the NHLBI-ESP project with 6500 exomes, including the indel calls and the chrY calls. This is lifted over from hg19 by myself. |
|  |
| All files were updated to address concerns on indel mismatch. All database files were manually left-normalized and split by myself (as ESP do not use this practice themselves); so users should left-normalize and allele-split your own VCF files, before annotation, to ensure the most comprehensive matching of indels. |
|  |
| file and index updated 20141222 |
| hg19 | esp6500siv2_aa | same as above | file and index updated 20141222 |
| hg38 | esp6500siv2_aa | same as above, lifted over from hg19 by myself | file and index updated 20141222 |
| hg18 | esp6500siv2_all |
| alternative allele frequency in All subjects in the NHLBI-ESP project with 6500 exomes, including the indel calls and the chrY calls. This is lifted over from hg19 by myself. |
|  |
| All files were updated to address concerns on indel mismatch. All database files were manually left-normalized and split by myself (as ESP do not use this practice themselves); so users should left-normalize and allele-split your own VCF files, before annotation, to ensure the most comprehensive matching of indels. |
|  |
| file and index updated 20141222 |
| hg19 | esp6500siv2_all | same as above | file and index updated 20141222 |
| hg38 | esp6500siv2_all | same as above, lifted over from hg19 by myself | file and index updated 20141222 |
| hg19 | exac01 | ExAC 65000 exome allele frequency data for ALL, AFR (African), AMR (Admixed American), EAS (East Asian), FIN (Finnish), NFE (Non-finnish European), OTH (other), SAS (South Asian)). | file and index updated 20141101 |
| hg19 | exac02 | same as above but for version v0.2 | file and index updated 20141101 |
| hg19 | exac03 | same as above but for version 0.3 | file and index udpated 20150302 |
| hg18 | 1000g (3 data sets) | alternative allele frequency data in 1000 Genomes Project | index updated 2012Feb22 |
| hg18 | 1000g2010 (3 data sets) | same as above | index updated 2012Feb22 |
| hg18 | 1000g2010jul (3 data sets) | same as above | index updated 2012Feb22 |
| hg18 | 1000g2012apr | I lifted over the latest 1000 Genomes Project data to hg18, to help researchers working with hg18 coordinates | file and index updated 20120820 |
| hg19 | 1000g2010nov | same as above | index updated 2012Feb22 |
| hg19 | 1000g2011may | same as above | index updated 2012Feb22 |
| hg19 | 1000g2012feb | same as above | file and index updated 2012Mar08 |
| hg18 | 1000g2012apr (5 data sets) | This is done by liftOver of the hg19 data below. It contains alternative allele frequency data in 1000 Genomes Project for ALL, AMR (admixed american), EUR (european), ASN (asian), AFR (african) populations | file and index updated 2013May08 |
| hg19 | 1000g2012apr (5 data sets) | alternative allele frequency data in 1000 Genomes Project for ALL, AMR (admixed american), EUR (european), ASN (asian), AFR (african) populations | file and index updated 2012May25 |
| hg19 | 1000g2014aug (6 data sets) | alternative allele frequency data in 1000 Genomes Project for autosomes (ALL, AFR (African), AMR (Admixed American), EAS (East Asian), EUR (European), SAS (South Asian)). Based on 201408 collection v4 (based on 201305 alignment) | file and index udpated 20140915 |
| hg19 | 1000g2014sep (6 data sets) | alternative allele frequency data in 1000 Genomes Project for autosomes (ALL, AFR (African), AMR (Admixed American), EAS (East Asian), EUR (European), SAS (South Asian)). Based on 201409 collection v5 (based on 201305 alignment) | file and index udpated 20140925 |
| hg19 | 1000g2014oct (6 data sets) |
| alternative allele frequency data in 1000 Genomes Project for autosomes (ALL, AFR (African), AMR (Admixed American), EAS (East Asian), EUR (European), SAS (South Asian)). Based on 201409 collection v5 (based on 201305 alignment) but including chrX and chrY data finally! |
|  |
| on 20141216, files were updated to address concerns on indel mismatch. All database files were manually left-normalized and split by myself (as 1000G do not use this practice themselves); so users should left-normalize and allele-split your own VCF files, before annotation, to ensure the most comprehensive matching of indels. |
|  |
| file and index updated 20141216 |
| hg18 | snp128 | dbSNP with ANNOVAR index files | index updated 2012Feb22 |
| hg18 | snp129 | same as above | index updated 2012Feb22 |
| hg19 | snp129 | liftover from hg18_snp129.txt. This is the last pristine dbSNP to be used in benchmarking studies, etc | file and index updated 2012Aug09 |
| hg18 | snp130 | same as above | index updated 2012Feb22 |
| hg19 | snp130 | same as above | index updated 2012Feb22 |
| hg18 | snp131 | same as above | index updated 2012Feb22 |
| hg19 | snp131 | same as above | index updated 2012Feb22 |
| hg18 | snp132 | same as above | index updated 2012Feb22 |
| hg19 | snp132 | same as above | index updated 2012Feb22 |
| hg18 | snp135 | I lifted over SNP135 to hg18, to help researchers working with hg18 coordinates | index and file updated 20120820 |
| hg19 | snp135 | same as above | file and index updated 2012Feb22 |
| hg19 | snp137 | same as above | file and index updated 20130109 |
| hg18 | snp138 | I lifted over SNP138 to hg18, to help researchers working with hg18 coordinates | file and index updated 20140910 |
| hg19 | snp138 | same as above | file and index updated 20140910 |
| hg18 | snp128NonFlagged | dbSNP with ANNOVAR index files, after removing those flagged SNPs (SNPs < 1% minor allele frequency (MAF) (or unknown), mapping only once to reference assembly, flagged in dbSnp as "clinically associated") | file and index updated 2012May24 |
| hg18 | snp129NonFlagged | same as above | file and index updated 2012May24 |
| hg18 | snp130NonFlagged | same as above | file and index updated 2012May24 |
| hg19 | snp130NonFlagged | same as above | file and index updated 2012May24 |
| hg18 | snp131NonFlagged | same as above | file and index updated 2012May24 |
| hg19 | snp131NonFlagged | same as above | file and index updated 2012May24 |
| hg18 | snp132NonFlagged | same as above | file and index updated 2012May24 |
| hg19 | snp132NonFlagged | same as above | file and index updated 2012May24 |
| hg19 | snp135NonFlagged | same as above | file and index updated 2012May24 |
| hg19 | snp137NonFlagged | same as above | file and index updated 20130109 |
| hg19 | snp138NonFlagged | same as above | file and index updated 20140222 |
| hg19 | nci60 | NCI-60 human tumor cell line panel exome sequencing allele frequency data | file and index updated 20130724 |
| hg19 | clinvar_20131105 | CLINVAR database with Variant Clinical Significance (unknown, untested, non-pathogenic, probable-non-pathogenic, probable-pathogenic, pathogenic, drug-response, histocompatibility, other) and Variant disease name | file and index updated 20140430 |
| hg19 | clinvar_20140211 | same as above | file and index updated 20140430 |
| hg19 | clinvar_20140303 | same as above | file and index updated 20140430 |
| hg19 | clinvar_20140702 | same as above | file and index updatd 20140712 |
| hg38 | clinvar_20140702 | same as above | file and index updated 20140712 |
| hg19 | clinvar_20140902 | same as above | file and index updated 20140911 |
| hg38 | clinvar_20140902 | same as above | file and index updated 20140911 |
| hg19 | clinvar_20140929 | same as above | file and index updated 20141002 |
| hg18 | popfreq_max | A database containing the maximum allele frequency from these tables: 1000G2012APR_ALL 1000G2012APR_AFR 1000G2012APR_AMR 1000G2012APR_ASN 1000G2012APR_EUR ESP6500si_ALL ESP6500si_AA ESP6500si_EA CG46 | file and index updated 20130821 |
| hg19 | popfreq_max | same as above | file and index updated 20130821 |
| hg18 | popfreq_all | A database containing the all allele frequency from these tables: popfreq_max, 1000G2012APR_ALL 1000G2012APR_AFR 1000G2012APR_AMR 1000G2012APR_ASN 1000G2012APR_EUR ESP6500si_ALL ESP6500si_AA ESP6500si_EA CG46 | file and index updated 2014Feb23 |
| hg19 | popfreq_all | same as above | file and index updated 2014Feb23 |
| hg18 | refGene | FASTA sequences for all annotated transcripts in RefSeq Gene | file updated 20141105 |
| hg19 | refGene | same as above | file updated 20141105 |
| hg38 | refGene | save as above | file updated 20141105 |
| hg18 | knownGene | FASTA sequences for all annotated transcripts in UCSC Known Gene | file updated 20141105 |
| hg19 | knownGene | same as above | file updated 20141105 |
| hg38 | knownGene | same as above | file updated 20141105 |
| hg18 | ensGene | FASTA sequences for all annotated transcripts in ENSEMBL Gene | file updated 20141105 |
| hg19 | ensGene | same as above | file updated 20141105 |
| hg18 | gerp++elem | conserved genomic regions by GERP++ | this is region-based score, not base-level score |
| hg19 | gerp++elem | same as above | same as above |
| mm9 | gerp++elem | same as above | same as above |
| hg18 | gerp++gt2 | whole-genome GERP++ scores greater than 2 (RS score threshold of 2 provides high sensitivity while still strongly enriching for truly constrained sites. ) | file and index updated 2012jun21 |
| hg19 | gerp++gt2 | same as above | file and index updated 2012jun21 |
| hg19 | caddgt20 | whole-genome CADD scores that are within top 1% percentile, for most likely functional variants | file and index updated 20140310 |
| hg19 | caddgt10 | whole-genome CADD scores that are within top 10% percentile, for most likely functional variants | file and index updated 20140310 |
| hg19 | cadd | whole-genome CADD scores (350GB file, make sure you have sufficient disk space before downloading) | file and index updated 2014Feb23 |


## Version history

Idea was conceived in 2009, motivated by several whole-genome sequencing paper and whole-exome sequencing paper.

On 2010Feb15, first public release of ANNOVAR.

On 2010Mar07, new release (subversion 322) fixed -regionanno issues.

On 2010Mar27, major updated release is uploaded.

On 2010Mar30, updated the auto_annovar script and improved ANNOVAR memory management so that it runs in environment with limited memory.

On 2010Jun02, the functionality of ANNOVAR is greatly improved, and now includes an optional step to implement SIFT-based annotation of non-synonymous SNPs (that is, predict whether non-synonymous SNPs are detrimental or tolerated), as well as the ability to examine GFF3 databases.

On 2010Jun06, several bugs have been fixed, and the convert2annovar.pl program has been added. ANNOVAR can now handle March 2010 release of the 1000 Genomes Project data.

On 2010Jun30, several functions were enhanced and bugs were fixed. This version fixed a problem downloading Ensembl annotations, added the functionality to handle VCF file as annotation database directly, improved the functionality of -downdb operation, fixed gene-based annotation issues due to errors in the FASTA files provided by UCSC. An update is also provided for convert2annovar.pl. This fixed an issue when handling pileup format files with indels.

On 2010Aug06, added the summarize_annovar.pl program to convert whole-genome variants data into an Excel file that users can examine using Excel "filter" functions to identify causal mutations. Major changes to the retrieve_seq_from_fasta.pl file such that it can handle several different types of input files, and that it knows how to handle whole-genome sequence files for several irregularly formatted model organisms (such as chimp), and that is produce FASTA records with time stamps. Several known minor bug fixes for the annotate_variation.pl program are also implemented. convert2annovar.pl can now handle MAQ genotype calling output files.

On 2010Sep29, minor bug fixes and function enhancement. convert2annovar.pl can now handle CAVASA and VCF version 4 genotype call files, but these functionalities are not mature yet and are being rigorously tested.

On 2010Dec02, added support for defining custom precedence in gene-based annotation, changed defult precedence as exonic=splicing > ncrna > utr5=utr3 > intronic > upstream=downstream > intergenic; fixed bugs in annotating intronic variants between two UTR-exons as UTR-variants; fixed bugs in reporting amino acid change for reverse strand insertions; added support for 1000G hg19 coordinate (Nov 2010 release); added support for SIFT hg19 coordinate; changed exonic variant annotation (adding cDNA level annotations to amino acid annotations) per user requests; fixed bugs in handling lower-case letters in --genericdbfile.

On 2011Jan17, added -colsWanted argument for users to choose the desired output column in DB file, added chrX data to 1000G Nov 2011 data set (use -downdb to re-download the data set), updated gene definition and FASTA file for human and mouse, changed filter operation to handle SNPs with 3 or 4 alleles annotated in dbSNP, changed "stop lost" to "stop loss" in exonic annotation, fixed a bug in summarize_annovar.pl in handling older 1000G files, fixed a bug in convert2annovar.pl in handling insertions for VCF4 files, changed default 1000G file as 2010jul for hg18 in summarize_annovar.pl.

On 2011Jan31, fixed the "counts cannot be inferred" issue in convert2annovar.pl, more informative conversion for SamTools pileup file in convert2annovar.pl, added ability to handle the newer version of SOLiD GFF file in convert2annovar.pl, added protein level annotation for exonic deletion, fixed the bug in handling negative strand in dbSNP records. On 2011Jan31 3PM PST, a small bug was discovered and the package was re-uploaded.

On 2011Feb11, fixed a bug that was introducted in the 2011-01-31 version to handle dbSNP filtering.

On 2011Feb20, changed convert2annovar.pl for more informative handling of pileup files and VCF4 files, changed exonic annotation for frameshift stopgain/stoploss mutations by printing amino acids before stop codon, changed "database annotation error" warning (due to for example co-existence of chr6 and chr6_cox_hap1), ANNOVAR now only examine the first occurence of a transcript, if the transcript is mapped to multiple locations with discordant sequence length, added functionality to perform gene-based annotations using GENCODE or other gene annotation systems, region-based annotation no longer prints Score=0 in the second column, changed output file name for region-based annotation using mceXway, tfbs, band, segdup keywords, fixed a bug in filter-based annotation for block substitution on single nucleotide, retrieve_seq_from_fasta.pl: added warning message to sequence that occur multiple times with discordant lengths, retrieve_seq_from_fasta.pl: no longer process 'alternative haplotype' chromosomes such as chr6_cox_hap1 by default, fixed a bug in having negative values in cDNA positions when annotating long indels, fixed the bug in not printing out normalized scores when annotating phastCons regions. (Note that a small issue was found after uploading, so an updated file was uploaded on 2011Feb22).

On 2011May06, fixed the problem downloading bosTau4 sequence for cow genome, fixed the -separate argument that print line column twice in exonic annotation, the ./. genotype in VCF file is annotated as "unknown" in updated convert2annovar.pl, fixed a bug in retrieve_seq_from_db.pl in handling ENSEMBL gene for yeast, added -exonsort argument to sort exon number in output line for gene-based annotation, replaced Em: to Em. for very rare scenarios where UCSC Gene name is prefixed with Em:, fixed auto_annovar bug in handling wrong mce file name due to changes in annotate_variation.pl, fixed problem on handling snp132 files due to different file format, updated convert2annovar.pl to enhance functionality to handle VCF files, updated summarize_annovar.pl to incorporate additional scoring methods in Excel output, added ljb scoring system in filter-based annotation

On 2011Jun18, improved the annotation of splicing variants, added -reverse argument to better control -score_threshold argument, added coding_change.pl program to print out protein sequence before and after mutation, added -exonsort argument to annotate_variation.pl to make results stable, added -bedfile argument for region based annotation using BED files as database, fixed a bug in processing VCF files in annotate_variation.pl directly, fixed issues in convert2annovar.pl to handle zygosity status in mpileup file generated by Samtools, added functions to process BED file directly in region annotation

On 2011Sep11, significant speedup of filter operation for certain databases (dbSNP, SIFT, PolyPhen, etc), added warning message if user inputs wrong reference allele for exonic mutations, added exon number to splicing annotation in gene-based annotation, changed ncRNA to ncRNA_exon and ncRNA_intron in gene-based annotation, added support for cg69 (complete genomics) database and GERP++ database

On 2011Oct02, fixed the cDNA off-by-one error for splicing annotation for acceptor site splicing variants, fixed bug in summarize_annovar.pl when -step argument is used, ANNOVAR now prints out examples when exonic SNPs have WRONG reference alleles specified in your input file, fixed the bug on indexing-based filter search on dbSNP (indexing-based search now requires '-webfrom annovar' when -downdb is used), fixed certain ncRNA annotation errors (such as ncRNA_UTR5, ncRNA_exonic) when the variant hits both coding and noncoding gene, fixed the bug to annotate ncRNA_exonic with exonic_variant_function, only coding transcripts will be used in gene-based annotation if a gene has coding and noncoding transcripts

On 2011Nov20, mRNA FASTA sequences without complete ORF annotation will no longer be used in exonic annotation, fixed the bug in specifying ensgene in command line in auto_annovar and summarize_annovar, fixed the problem in handling dbSNP132 in hg19 coordinate, slightly changed the "exonic SNPs have WRONG reference alleles" warning message to be more clear, retrieve_seq_from_fasta.pl now reports transcripts whose ORF have premature stop codon, fixed the hg18_cg69 and hg19_cg69 allele frequency error, convert2annovar.pl supports GFF3 files generated by 5500SOLiD and the LifeScope software

On 2012Feb23, added esp5400_ea, esp5400_aa, esp5400_all keywords for allele frequencies in 5400 exomes, added ljb_sift, ljb_gerp++, ljb_all databases for faster/easier retrieval of whole-exome functional scores, updated mRNA sequence files for hg18 and hg19 gene definitions, all custom databases have newer/faster index and default -indexfilter argument is now 0.9, add -otherinfo argument for -filter operation to print additional information in annotation, slight changes to convert2annovar.pl to better handle CASAVA files, fixed the problem in handling UCSC genes whose names contain space fixed the bug that -reverse does not work for "-dbtype avsift" other minor bug fixes

On 2012Mar08, added ability to handle 1000G 2012feb version, fixed bug in -allallele argument in convert2annovar.pl when handling more than two alternative alleles in VCF files, slight change to handle latest knowngene annotation due to format change of kgXref file, -verbose now print out noncoding transcripts that are ignored in analysis in gene-based annotation

On 2012May25, -downdb works for 1000g2012apr now, mutations in beginning or end of transcript are no longer reported as splicing variants, added -seq_padding argument to pad flanking amino-acid sequence around indels, added -indel_splicing_threshold argument to better annotate splicing variants around indels, the -colWanted argument now works on BED database files, fixed problem with -colWanted argument if the desired column contains comma, minor fix to region annotation when the region in database itself is a zero-length insertion, fixed the bug in complaining "wholegene," in annotation output, enhanced handling of errors in VCF4 files (such as presence of N in alleles) in convert2annvar.pl, added -infoasscore argument for printing entire INFO field in VCF database files

On 2012Oct23, added -veresp argument to summarize_annovar.pl to suppert esp6500 data set, added -aamatrixfile argument to print out amino acid substitution scores such as Gratham scores, changed UCSC download from FTP to HTTP to help users with firewall settings, fixed a problem handling genericdb file when chr prefix is present for chromosomes, fixed a problem downloading index for gerp++gt2 files, added variants_reduction.pl program

On 2013Feb11, mitochondria genome is now supported, the -zerostart argument is no longer supported, better handling of GFF3 files with undefined scores, added -gff3attr argument so that attribute field from GFF3 file can be printed in output, changed summarize_annovar.pl to take -alltranscript argument to print out all isoforms for exonic variants, summarize_annovar.pl now takes esp6500si and snp137NonFlagged as databases, exonic variant near intron/exon boundary are no longer reported as splicing, unless -exonicsplicing is set, fixed a minor issue in finding tar program in BSD-derived operating system, convert2annovar.pl now handles *.gz file or handles stdin as input file name, convert2annovar.pl accepts -comment argument to keep comment lines in VCF4 file in output.

On 2013Feb21, fixed a bug that exonic variants at exon end were annotated as splicing when -exonicsplicing is not set.

On 2013May09, fixed a bug in line count of exonic_variant_function when handling more than 5 million variants, table_annovar.pl is implemented to replace summarize_annovar.pl
changed -downdb behavior on 1000G data sets, convert2annovar.pl now handles soap format with 17 fields, corrected some typos in help message, fixed a bug that exonic variants at exon end were annotated as splicing when -exonicsplicing is not set

On 2013Jun21, fixed a bug in table_annovar to have empty output when input is in five-column format, fixed a bug in table_annovar fo avsift output, fixed a bug when handling start position for multi-allelic SNPs in dbSNP, fixed a bug when scanning indels with multi-allelic variants in VCF DB file, fixed a bug when chr prefix is present in filter database, fixed a bug in annotate_variation.pl to report position of coding insertions in negative strand, small change to retrieve_seq_from_fasta so it handles zebrafish correctly

On 2013Jul28, much improved VCF conversion function in convert2annovar.pl, improved functionality of table_annovar including support for ljb2* databases, new databases such as nci60 and popfreq_all are now supported, disabled -sortout in table_annovar due to many bugs, updated Gratham matrix due to inconsistencies with original publication

On 2013Aug23, convert2annovar.pl no longer complains when VCF file does not have a valid header, fixed a small bug in convert2annovar.pl to handle certain classes of indels, table_annovar now works on non-human species, minor fix in annovar to handle certain mouse mutations, ccdsGene annotation uses transcript ID as gene name due to lack of gene name in previous versions, implement dup keyword in exonic variant annotation to better conform to HGVS standards

On 2014Jul14, table_annovar now supports -tempdir argument, table_annovar now supports VCF input format and write to output VCF file, table_annovar now use separate column for splicing/UTR notations, convert2annovar can generate all possible SNVs/indels in a genomic region or in a transcript, convert2annovar can generate ANNOVAR input files for list of dbSNP identifiers, improve convert2annovar to better handle block indel/substitution in VCF4, changed 'stopgain SNV' and 'stoploss SNV' to 'stopgain' and 'stoploss' as they apply to both SNVs and indels, add -withfilter argument to convert2annovar to print out FILTER field in output for VCF files, fixed bug to handle VCFdbfile when AF record is in scientific notation, add UTR cdot annotation, improved table_annovar to print out correct column headers when the database file has the information, fixed a convert2annovar bug when VCF file does not have valid VCF header but -includeinfo is specified, add details for splicing variant when -separate flag is used, minor bug fix for dup annotation for insertions in negative strand, minor change to default parameters in table_annovar.pl for ljb2_pp2, fixed an error in convert2annovar to handle multi-sample VCF files

On 2014Nov12, fixed a problem of convert2annovar with some NR records in VCF file, fixed a bug in handling dup variants in coding_change.pl, improved the ability to handle VCF file in able_annovar.pl, significantly reduce memory usage for filter annotation, improve compatibility for unconventional chromosome names for species such as tomato, fixed a problem in annotating against multi-allelic indels in VCF file, fixed a problem in exon numbering for splice variants in reverse strand, refGene version file included in -downdb

## Credit

The ANNOVAR software is originally designed by Dr. Kai Wang. Other developers and significant contributors include Dr. German Gaston Leparc, Paul Leo and Jamie Teer. The index-based filter operation were designed by Allen Day, Marine Huang and Stephen Weinberg at Ion Flux. Mehdi Pirooznia from Johnas Hopkins provided 1000g2012apr population-specific allele frequency files, Magali Olivier from International Agency for Research on Cancer and the COSMIC teamprovided COSMIC61 database and instructions on generating COSMIC63 database, Jun Ding from NIH/National Institute of Aging compiled human mitochondria gene annotation file on 1000 Genomes Project reference (GRCh37), Konrad Herbst from German Cancer Research Center compiled human mitochondria gene annotation file on UCSC hg19 coordiante (AF347015.1 or NC001807). Numerous other ANNOVAR users have provided feedbacks, bug reports, code snipets and suggestions to improve the functionality of ANNOVAR and I am indebted to them for their invaluable help.

