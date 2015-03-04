## ANNOVAR main package

The latest version of ANNOVAR can be downloaded [here](http://www.openbioinformatics.org/annovar/annovar_download_form.php).

ANNOVAR is written in Perl and can be run as a standalone application on diverse hardware systems where standard Perl modules are installed.

## Additional databases

Many of the databases that ANNOVAR uses can be directly retrieved from UCSC Genome Browser Annotation Database by `-downdb` argument.

Several very commonly used annotation databases for human genomes are additionally provided below. In general, users can use `-downdb -webfrom annovar` in ANNOVAR directly to download these databases.


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
| hg18 | esp6500siv2_ea | alternative allele frequency in European American subjects in the NHLBI-ESP project with 6500 exomes, including the indel calls and the chrY calls. This is lifted over from hg19 by myself. | All files were updated to address concerns on indel mismatch. All database files were manually left-normalized and split by myself (as ESP do not use this practice themselves); so users should left-normalize and allele-split your own VCF files, before annotation, to ensure the most comprehensive matching of indels. | file and index updated 20141222 |
| hg19 | esp6500siv2_ea | same as above | file and index updated 20141222 |
| hg38 | esp6500siv2_ea | same as above, lifted over from hg19 by myself | file and index updated 20141222 |
| hg18 | esp6500siv2_aa | alternative allele frequency in African American subjects in the NHLBI-ESP project with 6500 exomes, including the indel calls and the chrY calls. This is lifted over from hg19 by myself. | All files were updated to address concerns on indel mismatch. All database files were manually left-normalized and split by myself (as ESP do not use this practice themselves); so users should left-normalize and allele-split your own VCF files, before annotation, to ensure the most comprehensive matching of indels. | file and index updated 20141222 |
| hg19 | esp6500siv2_aa | same as above | file and index updated 20141222 |
| hg38 | esp6500siv2_aa | same as above, lifted over from hg19 by myself | file and index updated 20141222 |
| hg18 | esp6500siv2_all | alternative allele frequency in All subjects in the NHLBI-ESP project with 6500 exomes, including the indel calls and the chrY calls. This is lifted over from hg19 by myself. | All files were updated to address concerns on indel mismatch. All database files were manually left-normalized and split by myself (as ESP do not use this practice themselves); so users should left-normalize and allele-split your own VCF files, before annotation, to ensure the most comprehensive matching of indels. | file and index updated 20141222 |
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
| hg19 | 1000g2014oct (6 data sets) | alternative allele frequency data in 1000 Genomes Project for autosomes (ALL, AFR (African), AMR (Admixed American), EAS (East Asian), EUR (European), SAS (South Asian)). Based on 201409 collection v5 (based on 201305 alignment) but including chrX and chrY data finally! | on 20141216, files were updated to address concerns on indel mismatch. All database files were manually left-normalized and split by myself (as 1000G do not use this practice themselves); so users should left-normalize and allele-split your own VCF files, before annotation, to ensure the most comprehensive matching of indels. | file and index updated 20141216 |
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

