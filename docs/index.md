# ANNOVAR Documentation

ANNOVAR is an efficient software tool to utilize update-to-date information to functionally annotate genetic variants detected from diverse genomes (including human genome hg18, hg19, hg38, as well as mouse, worm, fly, yeast and many others). Given a list of variants with chromosome, start position, end position, reference nucleotide and observed nucleotides, ANNOVAR can perform:

- **Gene-based annotation**: identify whether SNPs or CNVs cause protein coding changes and the amino acids that are affected. Users can flexibly use RefSeq genes, UCSC genes, ENSEMBL genes, GENCODE genes, AceView genes, or many other gene definition systems.
- **Region-based annotation**: identify variants in specific genomic regions, for example, conserved regions among 44 species, predicted transcription factor binding sites, segmental duplication regions, GWAS hits, database of genomic variants, DNAse I hypersensitivity sites, ENCODE H3K4Me1/H3K4Me3/H3K27Ac/CTCF sites, ChIP-Seq peaks, RNA-Seq peaks, or many other annotations on genomic intervals.
- **Filter-based annotation**: identify variants that are documented in specific databases, for example, whether a variant is reported in dbSNP,  what is the allele frequency in the 1000 Genome Project, NHLBI-ESP 6500 exomes or Exome Aggregation Consortium, calculate the SIFT/PolyPhen/LRT/MutationTaster/MutationAssessor/FATHMM/MetaSVM/MetaLR scores, find intergenic variants with GERP++ score < 2, or many other annotations on specific mutations.
- **Other functionalities**: Retrieve the nucleotide sequence in any user-specific genomic positions in batch, identify a candidate gene list for Mendelian diseases from exome data, and other utilities.

Please click the menu items to navigate through this website. If you have questions, comments and bug reports, please post them in the Disqus comment form in this website (if you do not receive a reply within 7 days, post it again, since sometimes I miss the Disqus notification email) or email me directly kaichop gmail.com. Thank you very much for your help and support!

---

May 2019: We are in the process of moving ANNOVAR server to a different hosting vendor. There is no need to email me about the -downdb problem. If you have an urgent need for the software itself, you can email me to get a URL link to download, but the DB will not be available for a few days.

![new](img/new.png) 2019Apr09: gnomAD exome and genome collection (v2.1.1) on hg38 through liftover is available in ANNOVAR now.

![new](img/new.png) 2019Mar23: gnomAD genome collection (v2.1.1) of 262 million variants, with "AF AF_popmax AF_male AF_female AF_raw AF_afr AF_sas AF_amr AF_eas AF_nfe AF_fin AF_asj AF_oth non_topmed_AF_popmax non_neuro_AF_popmax non_cancer_AF_popmax controls_AF_popmax" header is available from ANNOVAR with keyword gnomad211_genome.

![new](img/new.png) 2019Mar18: gnomAD exome collection (v2.1.1) of 17.2 million variants, with "AF AF_popmax AF_male AF_female AF_raw AF_afr AF_sas AF_amr AF_eas AF_nfe AF_fin AF_asj AF_oth non_topmed_AF_popmax non_neuro_AF_popmax non_cancer_AF_popmax controls_AF_popmax" header is available from ANNOVAR with keyword gnomad211_exome.

![new](img/new.png) 2019Mar16: The Clinvar scores (hg19/hg38) are updated to 20190305 version.

![new](img/new.png) 2018Dec04: The ABRAOM score (Brazilian genomic variants) is updated (~1000 lines in previous version do not have abraom_cegh_filter).

![new](img/new.png) 2018Dec03: The MCAP score v1.3 is available for hg19 coordinate (use mcap13 keyword to download).

2018Nov19: **ANNOVAR** is back online and all databases should be available now. Please report any problem that you encounter.

2018Nov15: **ANNOVAR** (downdb function to download databases) is temporarily down and we are finding replacement servers at the moment. Please check back to the page for updates.

![new](img/new.png) 2018Oct23: The non-commercial dbSNFP scores in ANNOVAR is updated to version 3.5c (use dbnsfp35c to download).

![new](img/new.png) 2018Sep20: The dbSNFP scores in ANNOVAR is updated to version 3.5a (use dbnsfp35a to download). The regsnpintron database is updated to fix problems in certain lines of the file.

![new](img/new.png) 2018Jul08: ClinVar version 20180603 is available for use in ANNOVAR, with slight format changes compared to previous versions. Note that users are advised to use prepare_annovar_user.pl to make your own ClinVar databases for use in ANNOVAR (see [details here](user-guide/filter.md#clinvar-annotations), so you do not need to wait for me to update.

![new](img/new.png) 2018Apr16: ANNOVAR new version is available now! You can use the old link to download, or you can register again to get download email. This release contins some minor fixes and improvements.

![new](img/new.png) 2018Mar25: pre-computed intervar scores (version 20180118) is available on both hg19 and hg38 now with intervar_20180118 keyword. Only missense variants are included, and this is meant for a quick-and-dirty analysis of most missense variants. For a more comprehensive/formal calculation of scores, download [https://github.com/WGLab/InterVar](InterVar) instead.

![new](img/new.png) 2018Mar02: About 2.4 million Brazilian genomic variants with allele frequencies are available now in hg19/hg38 coordinate. The data set comprises exomic variants of 609 elderly individuals from a census-based sample from the city of São Paulo. Please use `abraom` as the keyword to download and annotate, and refer to the [original publication](https://www.ncbi.nlm.nih.gov/pubmed/28332257) for details.

![new](img/new.png) 2017Oct03: Latest clinvar (20170905) is available now through ANNOVAR in hg19 and hg38 coordinates. A long-standing problem on multi-allelic variants in ClinVar is now addressed, so that multi-allelic variants are now correctly assigned to the corresponding benign/pathogenic categories. The 20170130/20170501 versions are also updated to resolve this issue.

![new](img/new.png) 2017Sep29: avsnp150 is available through ANNOVAR now in hg19 and hg38 coordinate, to annotate your variants with dbSNP identifiers.

![new](img/new.png) 2017Sep12: Per user request, we have now made hg38 version of ensGene available through ANNOVAR directly so that users do not need to build it themselves.

![new](img/new.png) 2017Jul16: ANNOVAR new version is available now! You can use the old link to download, or you can register again to get download email. This release contins some minor fixes and improvements: fixed a bug in calculating upstream distance that print when -separate is specified in annotate_variation.pl, improvements to coding_change.pl to report more stopgain/stoploss and fix use-of-uninitialized-value issue, slight change to convert2annovar.pl to handle mal-formed VCF file.

![new](img/new.png) 2017Jun01: ANNOVAR new version is available now! You can use the old link to download, or you can register again to get download email. Important features include: `gx` operation is added in table_annovar so that xref information for genes (such as gene-disease relationships) can be included (see [quick start-up](user-guide/startup.md) for examples), show complete amino acid change (such as c.35delG:p.G12Vfs\*2) in gene annotaion in table_annovar.pl and coding_change.pl with `-polish` argument, upstream variants now show distance to transcriptional start, splice variants at UTR now shows details, etc. (Update 2017Jun08: some users complained about format change in 2017jun01 version of table_annovar, where semicolon was used instead of comma for gene-based annotation, we have now reverted this change. Additional feature for -xreffile with multiple annotation columns has been implemented. Please re-download the code)

![new](img/new.png) 2017Jun01: Updated refGene, knownGene, ensGene definition and FASTA file on hg18/hg19/hg38 coordinates are available to download with `-webfrom annovar` argument. However, users can always build the latest version yourself.

![new](img/new.png) 2017May16: Updated instructions on how to handle noncoding variants in COSMIC version 81 [here](user-guide/filter.md#cosmic-annotations).

![new](img/new.png) 2017Mar11: gnomAD collection is available at ANNOVAR now, for both hg19 and hg38 coordinates. Use keyword gnomad_exome and gnomad_genome to download and use them.

![new](img/new.png) 2017Feb21: dbNSFP3.3a is updated for hg18/hg19/hg38 now. We now added the rankscore for each scoring system, and for variants with multiple prediction scores, only the most deleterious (rather than highest) scores are kept.

![new](img/new.png) 2017Feb15: Clinvar version 20170130 is available for hg19/hg38 now in ANNOVAR with keyword clinvar_20170130 to download.

![new](img/new.png) 2017Feb02: InterVar automated prediction is available for clinical interpretation of missense variants, with 18 criteria based on 2015 ACMG-AMP guidelines. Use intervar_20170202 keyword to download and use. Read the [InterVar paper](http://www.sciencedirect.com/science/article/pii/S0002929717300046) for details.

![new](img/new.png) 2017Jan24: dbNSFP version 3.3a is available on hg18, hg19 and hg38 in ANNOVAR, with whole-exome SIFT, PolyPhen2 HDIV, PolyPhen2 HVAR, LRT, MutationTaster, MutationAssessor, FATHMM, PROVEAN, MetaSVM, MetaLR, VEST, M-CAP, CADD, GERP++, DANN, fathmm-MKL, Eigen, GenoCanyon, fitCons, PhyloP and SiPhy scores.

![new](img/new.png) 2017Jan23: cadd13 (CADD version 1.3), cadd13gt10, cadd13gt20 are slightly updated to fix a format problem with contigs that are not placed on chromosomes.

![new](img/new.png) 2016Dec05: REVEL (Rare Exome Variant Ensemble Learner) scores for hg19 and hg38 are available from ANNOVAR now with revel keyword.

![new](img/new.png) 2016Nov04: M-CAP (Mendelian Clinically Applicable Pathogenicity) scores for hg19 and hg38 are available from ANNOVAR now with mcap keyword.

![new](img/new.png) 2016Oct24: GME (Greater Middle East Variome) is available to download from ANNOVAR now with keyword gme. It contains allele frequency data on NWA (northwest Africa), NEA (northeast Africa), AP (Arabian peninsula), Israel, SD (Syrian desert), TP (Turkish peninsula) and CA (Central Asia).

![new](img/new.png) 2016Jun22: icgc21 (International Cancer Genome Consortium version 21), cadd13, cadd13gt10, cadd13gt20 (CADD version 1.3) is available to download from ANNOVAR now.

![new](img/new.png) 2016Jun06: avsnp147 (hg19 and hg38), which is a modified version of dbSNP with left-normalization and allelic splitting, is available to download from ANNOVAR now.

![new](img/new.png) 2016Apr23: Slightly updated ExAC03 non-TCGA and non-psych datasets are available with modified headers.

![new](img/new.png) 2016Mar30: Whole-genome Eigen scores are available in ANNOVAR, which uses a spectral approach integrating functional genomic annotations for coding and noncoding variants. See [here](user-guide/filter.md#eigen-score-annotations) for detailed instructions. User contributed SNP database for Indian populations is available in Download page.

![new](img/new.png) 2016Mar15: Updated whole-genome FATHMM-MKL scores are available, which fixed an error that coding/noncoding scores were reversed.

![new](img/new.png) 2016Feb01: A user pointed out a bug when more than 6 threads are used in multi-threaded gene-based annotation. This bug was fixed and you can now re-download the ANNOVAR package.

![new](img/new.png) 2016Jan23: The mitimpact24 (version 2.4) database is made available in ANNOVAR now. It provides effect prediction of mitochondrial variants.



---

## Reference

- Wang K, Li M, Hakonarson H. [ANNOVAR: Functional annotation of genetic variants from next-generation sequencing data](http://nar.oxfordjournals.org/content/38/16/e164) _Nucleic Acids Research_, 38:e164, 2010


<script>
  (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
  (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
  m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
  })(window,document,'script','//www.google-analytics.com/analytics.js','ga');

  ga('create', 'UA-48623707-1', 'openbioinformatics.org');
  ga('send', 'pageview');
</script>
