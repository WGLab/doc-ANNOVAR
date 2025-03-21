# ANNOVAR Documentation

ANNOVAR is an efficient software tool to utilize update-to-date information to functionally annotate genetic variants detected from diverse genomes (including human genome hg18, hg19, hg38, hs1 (T2T-CHM13) as well as mouse, worm, fly, yeast, SARS-CoV-2, and many others). Given a list of variants with chromosome, start position, end position, reference nucleotide and observed nucleotides, ANNOVAR can perform:

- **Gene-based annotation**: identify whether SNPs or CNVs cause protein coding changes and the amino acids that are affected. Users can flexibly use RefSeq genes, UCSC genes, Ensembl/Gencode genes, or custom gene definition system.
- **Region-based annotation**: identify variants in specific genomic regions, for example, conserved regions among multiple species, predicted transcription factor binding sites, segmental duplication regions, database of genomic variants, DNAse I hypersensitivity sites, ENCODE H3K4Me1/H3K4Me3/H3K27Ac/CTCF sites, ChIP-Seq peaks, RNA-Seq peaks, ENCODE cCRE sites, or many other annotations on genomic intervals.
- **Filter-based annotation**: identify variants that are documented in specific databases, for example, whether a variant is reported in dbSNP,  what is the allele frequency in the 1000 Genome Project, NHLBI-ESP 6500 exomes or Exome Aggregation Consortium (ExAC) or Genome Aggregation Database (gnomAD), calculate the SIFT/PolyPhen/LRT/MutationTaster/MutationAssessor/FATHMM/MetaSVM/MetaLR/MetaRNN scores, find pathogenic mutations from ClinVar, identify recurrent somatic mutations in COSMIC in specific cancer types, or many other annotations on specific mutations.
- **Other functionalities**: Retrieve the nucleotide sequence in any user-specific genomic positions in batch, identify a candidate gene list for Mendelian diseases from exome data, and other utilities.

Please click the menu items to navigate through this website. If you have questions, comments and bug reports, please post them in the Disqus comment form in this website (if you do not receive a reply within 7 days, post it again, since sometimes I miss the Disqus notification email or I click the notification email but cannot find the question if a page has too many Disqus posts) or you can just email me directly kaichop gmail.com. Thank you very much for your help and support!

If you are a new user of ANNOVAR, make sure to read the [quick startup guide](user-guide/startup.md) first!

If you want to learn advanced functions in ANNOVAR, such as preparing custom ANNOVAR annotation database, performing whole exome annotation, annotating noncoding variants from GWAS, or annotating a file in T2T-CHM13 coordinates, read the [Use Cases](user-guide/use_case.md).

---

![new](img/new.png)2025Mar21: Allele frequency data with population breakdown from the first ~250k srWGS in All of Us is available at ANNOVAR now. There are ~1.1 billion unique variants. Use dbtype keyword `allofus` and genome build `hg38` to use it in ANNOVAR. Additionally, Regeneron allele frequency data is also available at ANNOVAR now. Use dbtype keyword `regeneron` and genome build `hg38` to download and use in ANNOVAR.

![new](img/new.png)2025Mar02: new ANNOVAR version is available. Compared to 2020Jun08 version, it has minor changes in handling URL in annotate_variation.pl and addressed a problem in calculating protein sequences for variants in multi-mapping transcripts in coding_change.pl. Additionally it also packaged hg38_refGeneWithVer by default so that users do not need to download it yourself.

![new](img/new.png)2024Oct14: GTEx_v8_eQTL and GTEx_v8_sQTL are availabe in ANNOVAR now for hg38 coordinate. It provides filter-based annotation for eQTL and sQTL based on GTEx v8.

![new](img/new.png)2024Sep24: clinvar_20240917 is availabe in ANNOVAR now for hg19/hg38 coordinate. In addition to germline variants, this version adds interpretation for oncogenecity variants and somatic variants.

![new](img/new.png)2024Jun17: Interpro domain annotation from dbNSFP v4.7 is availabe in ANNOVAR now for hg19/hg38 coordinate.

![new](img/new.png)2024Jun02: gnomAD versino 4.1 is availabe in ANNOVAR now for both genome and exome. There was a bug in allele frequency calculation in version 4.0 so the gnomAD team released v4.1.

![new](img/new.png)2024May25: dbSNFP version 4.7a and 4.7c (keyword: dbnsfp47a/dbnsfp47c) are available in ANNOVAR now on hg19 and hg38 coordinate, including new scores such as AlphaMissese and ESM1b. The avsnp151 is available in ANNOVAR now to assign dbSNP identifiers to variants on hg19 and hg38 coordinate.

![new](img/new.png)2024Feb19: [prepare_annovar_user.pl](http://www.openbioinformatics.org/annovar/download/prepare_annovar_user.pl) is updated to handle new COSMIC format.

![new](img/new.png)2023Nov25: wANNOVAR server is now functional.

![new](img/new.png)2023Nov18: gnomAD v4.0 (hg38 coordinate) is available through ANNOVAR now. Use 'gnomad40_genome' and 'gnomad40_exome' as the keyword to download and annotate your variants. It is compiled from exome sequencing data from 730,947 individuals and genome sequencing data from 76,215 individuals, and includes additional global diversity such as middle easterns.

![new](img/new.png)2023Oct10: wANNOVAR server is currently down and I am in the process of setting up a new server in a new host. Please be patient.

![new](img/new.png)2023Aug30: gnomAD on CHM13-T2T coordinate is available in ANNOVAR now. Use '-build hs1 -downdb gnomad' to download. Please report issues if you find any.

![new](img/new.png)2023Aug11: Use '-build hs1' if you want to annotate your variants are called against the T2TCHM13v2.0 human reference genome. Please report issues if you find any.

![new](img/new.png)2023Mar15: The gene definition annotation in ANNOVAR is updated (main changes are for hg19/38_ensGene from Gencode v41 to v43). Note that the previous version is now referred to as ensGene41/ensGene40 if users want to use the earlier one.

![new](img/new.png)2023Jan05: The Clinvar annotation in ANNOVAR is updated to 20221231 on hg19/hg38.

![new](img/new.png)2022Dec28: The gnomAD whole-genome version 3.1.2 is available in ANNOVAR with build of hg38 and keyword of gnomad312_genome. This includes gender-specific, ethnicity-specific and popmax allele frequencies from 76,156 whole genomes without exomes.

![new](img/new.png)2022Oct05: The gene definition annotation in ANNOVAR is updated (main changes are for hg19/38_ensGene from Gencode v40 to v41). Note that the previous version is now referred to as ensGene40 if users want to use the earlier one.

![new](img/new.png)2022Aug02: An increasing number of users reported problems to download ANNOVAR databases from institutional computing clusters. This is due to automated re-direction of http traffic to https, and that ANNOVAR server's https (which uses a free service) is not recognized as valid by some institutions. For this reason, the download URL that uses http will no longer be re-directed to https traffic in ANNOVAR server; this is the easiest way to ensure backward compatibility for users. If you absolutely need to use https for any reason, you can edit the source code of ANNOVAR to use https in the URL.

![new](img/new.png)2022Aug02: ANNOVAR reached over 10,000 citations in [Google Scholar](https://scholar.google.com/citations?view_op=view_citation&hl=en&user=J_veo1sAAAAJ&citation_for_view=J_veo1sAAAAJ:UebtZRa9Y70C) now, which is a milestone achievement!

![new](img/new.png)2022Aug02: The gene definition annotation in ANNOVAR is updated (main changes are for hg19/38_ensGene and hg38_knownGene). Note that ensGene is the same as gencodeGeneBasic in ANNOVAR.

![new](img/new.png)2022Mar30: The Clinvar annotation in ANNOVAR is updated to 20220320 on hg19/hg38 (hg38 has no MT variants though).

![new](img/new.png)2021Oct19: The Gene Annotations, including refGene, refGeneWithVer, knownGene, ensGene (hg18, hg19, hg38) are updated. Contact me if you need archival version (the last one is December 2019).

![new](img/new.png)2021Jul10: The dbNSFP 4.2a and 4.2c (hg18, hg19, hg38) are available in ANNOVAR for annotation.

![new](img/new.png)2021May07: The Clinvar 20210501 version is available in ANNOVAR in hg19/hg38 coordinates (file updated 20210507).

![new](img/new.png)2021Feb02: The Clinvar 20210123 version is available in ANNOVAR in hg19/hg38 coordinates (file updated 20210204).

![new](img/new.png)2021Jan27: The ANNOVAR annotation databases are being moved to a new hosting server. We plan to still keep the old S3-based server as a CDN for Asia and Middle East to improve download speed; you can explicitly specify www2 (instead of default www) in the -downdb command line.

![new](img/new.png)2021Jan22: International Cancer Genome Consortium version 28 (for hg19 and hg38) are available in ANNOVAR now. 

![new](img/new.png)2020Oct07: The dbNSFP v4.1 is available in ANNOVAR for annotation on hg19 and hg38 coordinate (keyword dbnsfp41a is for academic use, dbnsfp41c is for commercial use).

![new](img/new.png)2020Jun08: The gene annotation for SARS-CoV-2 are updated at the annotation files [avGene.txt.gz](http://www.openbioinformatics.org/annovar/download/NC_045512v2_avGene.txt.gz) and [avGeneMrna.fa.gz](http://www.openbioinformatics.org/annovar/download/NC_045512v2_avGeneMrna.fa.gz), so that nsp1-nsp16 can all be annotated now, in addition to ORF1ab and ORF1a. Additionally, new ANNOVAR version is available: I made very minor change to increase compatibility of ANNOVAR in Windows Powershell. 

![new](img/new.png)2020Apr28: A number of ANNOVAR users asked how to analyze mutations in SARS-CoV-2. In general this can be done following the procedure described in the ["Gene-based Annotation"](user-guide/gene.md) page for expert users, but it requires some tweaking of the GFF files provided by NCBI's gene annotation (because NCBI's file treat ORF1a and ORF1ab as two isoforms of a single gene named ORF1ab, and because there is a ribosome slippage event in ORF1ab that creates a scenraio where the same base can belong to two adjacent codons). To make things easier for ANNOVAR users, I now manually created the gene annotation called avGene and provide the annotation files [avGene.txt.gz](http://www.openbioinformatics.org/annovar/download/NC_045512v2_avGene.txt.gz) and [avGeneMrna.fa.gz](http://www.openbioinformatics.org/annovar/download/NC_045512v2_avGeneMrna.fa.gz). Please note that (1) to be consistent with UCSC Genome Browser's reference [FASTA](http://hgdownload.soe.ucsc.edu/goldenPath/wuhCor1/chromosomes/NC_045512v2.fa.gz), you must use NC_045512v2 rather than NC_045512.2 as the reference chromosome name in your input file to ANNOVAR; (2) I use the known names of four structural proteins as spike glycoprotein (S), matrix protein (M), envelope protein (E), and nucleocapsid protein (N), rather than ORF2, ORF4, ORF5 and ORF9; (3) I feel it is more appropriate to call the two overlapping genes/isoforms and protein products as ORF1ab and ORF1a rather than calling them both as ORF1ab, and treat the 16 non-structural proteins (NSPs) as secondary post-translation mature products of ORF1ab/ORF1a protein (In June update described above, this scenario is now handled). To give an example, you can use `NC_045512v2 29095 29095 C T` as the input file to ANNOVAR command `table_annovar.pl -buildver NC_045512v2 mut1.avinput sarscov2db/ -protocol avGene -operation g`, and see the annotation as "N:YP_009724397.2:exon1:c.C822C:p.F274F" in the output. Next try `NC_045512v2 26144 26144 G T` and see what you get. Finally, try `NC_045512v2 28144 28144 T C` as the input. Note that these mutations were reported in a recently published paper but there are some mistakes in their strand assignment and annotation.

![new](img/new.png)2020Apr01: Clinvar annotation (version 20200316) is available in ANNOVAR now.

![new](img/new.png)2019Dec03: ANNOVAR download consistently exceeds >10TB/month over the past two months and the cost for hosting it at AWS is absurdly high (unfortunately currently no grant funding is available to support ANNOVAR). During the next a few days, I will migrate ANNOVAR out of AWS to a new CDN provider and test it over the next two months. Expect some connection issues when you do -downdb depending on your geographical locations over the next a few days. (Update 2019Dec06: Migration is completed successfully, please report issues if you encounter any).

![new](img/new.png)2019Nov27: A slight change was made to coding_change.pl to fix the 'argument G is not numeric in numeric gt (>)' bug for startloss mutations, and you can download the updated file [here](http://www.openbioinformatics.org/annovar/download/coding_change.pl). Please report additioanl bugs on the 2019Oct24 version to me if you find any.

![new](img/new.png)2019Nov04: gnomAD version 3.0 on hg38 coordinate is available in ANNOVAR (use gnomad30_genome to download). Only variants from whole-genome (but not whole-exome) sequencing are available.

![new](img/new.png)2019Nov01: gene4denovo annotation database with 580K de novo mutations for hg19/hg38 are available in ANNOVAR (use hg19_gene4denovo201907 and hg38_gene4denovo201907 keywords to download). Read [here](https://academic.oup.com/nar/advance-article/doi/10.1093/nar/gkz923/5603227) for more information.


![new](img/new.png)2019Oct24: New ANNOVAR version (20191024) is available. It should be considered as a release candidate for public testing. Please report bugs and comments and thank you in advance!!! Major changes: allow refGeneWithVer as a valid gene annotation when using -downdb argument in annotate_variation.pl; add -intronhgvs argument to print out HGVS notations for intronic variants; add startloss and startgain as functional consequences that affects the first ATG codon; add -nofirstcodondel to table_annovar by default to enable calculation of amino acid changes for certain variants previously annotated as 'wholegene'; minor adjustment on nonframeshift vs startloss vs stopgain for certain variants with multiple valid notations; changed p. notation for block substitution that does not cause protein change; changed table_annovar so that ExAC and gnomAD are treated as float fields in VCF annotation; allow genericdb for region annotation; allow chromosome name to contain . or - for certain species; the -polish argument is ON by default in table_annovar.pl; table_annovar.pl can generate column headers such as Otherinfo, Otherinfo2, Otherinfo3, etc; fixed a bug of cdot notation for block substitutions that cover 5UTR and start codon

![new](img/new.png)2019Sep29: All ANNOVAR databases are transferred to AWS S3, including large files. The refGene, refGeneWithVer, knownGene and ensGene (same as GencodeBasicV31) for hg18/hg19/hg38 are updated to the latest version.

![new](img/new.png)2019Jun17: All ANNOVAR databases are transferred to AWS S3, except a few large (>100GB) files. Please report any problem that you see.

June 16 2019: The hosting provider deleted all ANNOVAR files and I am in the process of finding alternative solutions. Hopefully ANNOVAR database will be online again early next week.

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
