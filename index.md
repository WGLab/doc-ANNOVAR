# ANNOVAR Documentation

ANNOVAR is an efficient software tool to utilize update-to-date information to functionally annotate genetic variants detected from diverse genomes (including human genome hg18, hg19, hg38, as well as mouse, worm, fly, yeast and many others). Given a list of variants with chromosome, start position, end position, reference nucleotide and observed nucleotides, ANNOVAR can perform:

- **Gene-based annotation**: identify whether SNPs or CNVs cause protein coding changes and the amino acids that are affected. Users can flexibly use RefSeq genes, UCSC genes, ENSEMBL genes, GENCODE genes, AceView genes, or many other gene definition systems.
- **Region-based annotation**: identify variants in specific genomic regions, for example, conserved regions among 44 species, predicted transcription factor binding sites, segmental duplication regions, GWAS hits, database of genomic variants, DNAse I hypersensitivity sites, ENCODE H3K4Me1/H3K4Me3/H3K27Ac/CTCF sites, ChIP-Seq peaks, RNA-Seq peaks, or many other annotations on genomic intervals.
- **Filter-based annotation**: identify variants that are documented in specific databases, for example, whether a variant is reported in dbSNP,  what is the allele frequency in the 1000 Genome Project, NHLBI-ESP 6500 exomes or Exome Aggregation Consortium, calculate the SIFT/PolyPhen/LRT/MutationTaster/MutationAssessor/FATHMM/MetaSVM/MetaLR scores, find intergenic variants with GERP++ score < 2, or many other annotations on specific mutations.
- **Other functionalities**: Retrieve the nucleotide sequence in any user-specific genomic positions in batch, identify a candidate gene list for Mendelian diseases from exome data, and other utilities.

Please click the menu items to navigate through this website. To recieve program updates, please use the [ANNOVAR mailing list](https://groups.google.com/forum/#!forum/annovar). If you have questions, comments and bug reports, please post them in the Disqus comment form in this website (or email me directly). Thank you very much for your help and support!

---

![new](/img/new.png) 2017Jun01: ANNOVAR new version is available now! You can use the old link to download, or you can register again to get download email. Important features include: `gx` operation is added in table_annovar so that xref information for genes (such as gene-disease relationships) can be included (see [quick start-up](user-guide/startup.md) for examples), show complete amino acid change (such as c.35delG:p.G12Vfs\*2) in gene annotaion in table_annovar.pl and coding_change.pl with `-polish` argument, upstream variants now show distance to transcriptional start, splice variants at UTR now shows details, etc. (Update 2017Jun08: some users complained about format change in 2017jun01 version of table_annovar, where semicolon was used instead of comma for gene-based annotation, we have now reverted this change. Additional feature for -xreffile with multiple annotation columns has been implemented. Please re-download the code)

![new](/img/new.png) 2017Jun01: Updated refGene, knownGene, ensGene definition and FASTA file on hg18/hg19/hg38 coordinates are available to download with `-webfrom annovar` argument. However, users can always build the latest version yourself.

![new](/img/new.png) 2017May16: Updated instructions on how to handle noncoding variants in COSMIC version 81 [here](user-guide/filter.md#cosmic-annotations).

![new](/img/new.png) 2017Mar11: gnomAD collection is available at ANNOVAR now, for both hg19 and hg38 coordinates. Use keyword gnomad_exome and gnomad_genome to download and use them.

![new](/img/new.png) 2017Feb21: dbNSFP3.3a is updated for hg18/hg19/hg38 now. We now added the rankscore for each scoring system, and for variants with multiple prediction scores, only the most deleterious (rather than highest) scores are kept.

![new](/img/new.png) 2017Feb15: Clinvar version 20170130 is available for hg19/hg38 now in ANNOVAR with keyword clinvar_20170130 to download.

![new](/img/new.png) 2017Feb02: InterVar automated prediction is available for clinical interpretation of missense variants, with 18 criteria based on 2015 ACMG-AMP guidelines. Use intervar_20170202 keyword to download and use. Read the [InterVar paper](http://www.sciencedirect.com/science/article/pii/S0002929717300046) for details.

![new](/img/new.png) 2017Jan24: dbNSFP version 3.3a is available on hg18, hg19 and hg38 in ANNOVAR, with whole-exome SIFT, PolyPhen2 HDIV, PolyPhen2 HVAR, LRT, MutationTaster, MutationAssessor, FATHMM, PROVEAN, MetaSVM, MetaLR, VEST, M-CAP, CADD, GERP++, DANN, fathmm-MKL, Eigen, GenoCanyon, fitCons, PhyloP and SiPhy scores.

![new](/img/new.png) 2017Jan23: cadd13 (CADD version 1.3), cadd13gt10, cadd13gt20 are slightly updated to fix a format problem with contigs that are not placed on chromosomes.

![new](/img/new.png) 2016Dec05: REVEL (Rare Exome Variant Ensemble Learner) scores for hg19 and hg38 are available from ANNOVAR now with revel keyword.

![new](/img/new.png) 2016Nov04: M-CAP (Mendelian Clinically Applicable Pathogenicity) scores for hg19 and hg38 are available from ANNOVAR now with mcap keyword.

![new](/img/new.png) 2016Oct24: GME (Greater Middle East Variome) is available to download from ANNOVAR now with keyword gme. It contains allele frequency data on NWA (northwest Africa), NEA (northeast Africa), AP (Arabian peninsula), Israel, SD (Syrian desert), TP (Turkish peninsula) and CA (Central Asia).

![new](/img/new.png) 2016Jun22: icgc21 (International Cancer Genome Consortium version 21), cadd13, cadd13gt10, cadd13gt20 (CADD version 1.3) is available to download from ANNOVAR now.

![new](/img/new.png) 2016Jun06: avsnp147 (hg19 and hg38), which is a modified version of dbSNP with left-normalization and allelic splitting, is available to download from ANNOVAR now.

![new](/img/new.png) 2016Apr23: Slightly updated ExAC03 non-TCGA and non-psych datasets are available with modified headers.

![new](/img/new.png) 2016Mar30: Whole-genome Eigen scores are available in ANNOVAR, which uses a spectral approach integrating functional genomic annotations for coding and noncoding variants. See [here](user-guide/filter.md#eigen-score-annotations) for detailed instructions. User contributed SNP database for Indian populations is available in Download page.

![new](/img/new.png) 2016Mar15: Updated whole-genome FATHMM-MKL scores are available, which fixed an error that coding/noncoding scores were reversed.

![new](/img/new.png) 2016Feb01: A user pointed out a bug when more than 6 threads are used in multi-threaded gene-based annotation. This bug was fixed and you can now re-download the ANNOVAR package.

![new](/img/new.png) 2016Jan23: The mitimpact24 (version 2.4) database is made available in ANNOVAR now. It provides effect prediction of mitochondrial variants.

![new](/img/new.png) 2015Dec18: The dbscsnv11 database is made available in ANNOVAR now. It provides splice site effect prediction by AdaBoost and Random Forest from dbscSNV version 1.1.

![new](/img/new.png) 2015Dec14: New ANNOVAR version is available. The major change is to enable multi-threaded ANNOVAR for gene, region and filter annotation. Use an argument such as `-thread 6` to turn on multi-threading with 6 CPU cores. Special thanks to S/W R&D Center, Device Solutions at SAMSUNG for proposing the changes and demonstrating the performance using Samsung 830 SSD drives. I re-implemented their algorithm, and confirmed that >10 fold speed improvement for filter annotation for genomes can be achieved even in a Seagate HDD RAID-6 array.

![new](/img/new.png) 2015Dec11: Updated refGene, knownGene, ensGene definition and FASTA file on hg18/hg19/hg38 coordinates are available to download with `-webfrom annovar` argument. In general, there will be an update every 6 months. However, users can always build the latest version yourself.

![new](/img/new.png) 2015Dec03: A few additional allele frequency databases are available now for filter-based annotation: exac03nontcga (ExAC non-TCGA samples) on hg19 and hg38 coordinate, exac03nonpsych on hg19 and hg38 coordinates, kaviar_20150923 with 170 million variants from 34 projects (13K genomes and 64K exomes) on hg19 and hg38 coordinate, hrcr1 with 40 million variants from 32K samples on hg19 and hg38 coordinates.

![new](/img/new.png) 2015Nov29: Minor change to exac03 dataset was made to fix a bug in calculating allele frequency for multi-allelic variants for minority populations.

![new](/img/new.png) 2015Nov02: The dbSNP144 is available from ANNOVAR now using avsnp144 keyword as -dbtype. Around 630,000 variants in the dataset has been left-normalized.

![new](/img/new.png) 2015Oct22: The GDI (Gene Damaging Index) score is available to download in the [download](user-guide/download.md#user-contributed-datasets) section. GDI describes the accumulated mutational damage for each human gene in the general population, similar to LoFTool and RVIS. The data set includes general damage prediction (low/medium/high) for different disease type (all, Mendelian, cancer, and PID).

![new](/img/new.png) 2015Oct15: The dbNSFP version 3.0a is available in ANNOVAR now! It provides whole-genome functional prediction scores on ~20 different algorithms. Now additions to the database include DANN, PROVEAN, fitConsPlease, etc. use keyword dbnsfp30a to download and use the database.

![new](/img/new.png) 2015Sep26: The SPIDEX dataset (Xiong et al, Science 2015) is available at ANNOVAR now! This dataset provides machine-learning prediction on how genetic variants affect RNA splicing. Please download from [here](http://www.openbioinformatics.org/annovar/spidex_download_form.php).

![new](/img/new.png) 2015Aug24: 1000 Genomes Project version 2015 August data is available! An ANNOVAR user identified bugs in chrX frequency in 1000G data, which I traced back to the distribution of the original data provided by 1000G. The 1000G team has fixed this bug on 8/18/2015, which is now relected in the 1000g2015aug dataset in ANNOVAR.

![new](/img/new.png) 2015Jun23: Whole-genome scores on hg19 coordinate for FATHMM and GWAVA are available in ANNOVAR now. Together with CADD and GERP++ scores, these provide the most comprehensive annotations and prioritization strategies for non-coding variants in human genome. (Warning: each file is over 200G!)

![new](/img/new.png) 2015Jun17: ANNOVAR new version is available at the same download URL as the March version. 

![new](/img/new.png) 2015May20: mitimpact2 (an exhaustive collection of pre-computed pathogenicity predictions of human mitochondrial non-synonymous variants) is updated with header information for use in table_annovar. hg38_ljb26_all is updated to fix missing alt_allele.

![new](/img/new.png) 2015Apr28: Updated COSMIC70, NCI60 and 1000G in hg18/hg38 coordinate are available now!

![new](/img/new.png) 2015Apr20: Updated exac03 database is available, which now include adjusted allelel frequency as ExAC_ALL for ALL population (previously the AF record from ExAC VCF file was annotated as ExAC_Freq). Clinvar20150330 is available in hg19 and hg38. popfreqmax_20150413 and popfreqall_20150413 are available in hg19 coordinate.

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
