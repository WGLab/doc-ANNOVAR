# ANNOVAR Documentation

ANNOVAR is an efficient software tool to utilize update-to-date information to functionally annotate genetic variants detected from diverse genomes (including human genome hg18, hg19, hg38, as well as mouse, worm, fly, yeast and many others). Given a list of variants with chromosome, start position, end position, reference nucleotide and observed nucleotides, ANNOVAR can perform:

- Gene-based annotation: identify whether SNPs or CNVs cause protein coding changes and the amino acids that are affected. Users can flexibly use RefSeq genes, UCSC genes, ENSEMBL genes, GENCODE genes, AceView genes, or many other gene definition systems.
- Region-based annotations: identify variants in specific genomic regions, for example, conserved regions among 44 species, predicted transcription factor binding sites, segmental duplication regions, GWAS hits, database of genomic variants, DNAse I hypersensitivity sites, ENCODE H3K4Me1/H3K4Me3/H3K27Ac/CTCF sites, ChIP-Seq peaks, RNA-Seq peaks, or many other annotations on genomic intervals.
- Filter-based annotation: identify variants that are documented in specific databases, for example, whether a variant is reported in dbSNP,  what is the allele frequency in the 1000 Genome Project, NHLBI-ESP 6500 exomes or Exome Aggregation Consortium, calculate the SIFT/PolyPhen/LRT/MutationTaster/MutationAssessor/FATHMM/MetaSVM/MetaLR scores, find intergenic variants with GERP++ score < 2, or many other annotations on specific mutations.
- Other functionalities: Retrieve the nucleotide sequence in any user-specific genomic positions in batch, identify a candidate gene list for Mendelian diseases from exome data, and other utilities.

Please click the menu items to navigate through this website. Check [here](misc/whatsnew.md) to see what is new in ANNOVAR. To recieve program updates, please use the [ANNOVAR mailing list](https://groups.google.com/forum/#!forum/annovar). If you have questions, comments and bug reports, please post them in the Disqus comment form in this website (or email me directly). Thank you very much for your help and support!

---

![new](/img/new.png) 2015Dec14: New ANNOVAR version is available. The major change is to enable multi-threaded ANNOVAR for gene, region and filter annotation. Special thanks to S/W R&D Center, Device Solutions at SAMSUNG; they proposed the change and demonstrated ~8 fold speed improvements in using Samsung 830 SSD drive. I re-implemented their algorithm, and confirmed that >10 fold speed improvement for filter annotation for genomes can be achieved even in a Seagate HDD RAID-6 array.

![new](/img/new.png) 2015Dec11: Updated refGene, knownGene, ensGene definition and FASTA file on hg18/hg19/hg38 coordinates are available to download with '-webfrom annovar' argument. In general, there will be an update every 6 months. However, users can always build the latest version yourself.

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
- Chang X, Wang K. [wANNOVAR: annotating genetic variants for personal genomes via the web](http://jmg.bmj.com/content/49/7/433.long) _Journal of Medical Genetics_, 49:433-436, 2012
- Yang H, Wang K. [Genomic variant annotation and prioritization with ANNOVAR and wANNOVAR](http://www.nature.com/nprot/journal/v10/n10/abs/nprot.2015.105.html) _Nature Protocols_, 10:1556-1566, 2015


<script>
  (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
  (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
  m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
  })(window,document,'script','//www.google-analytics.com/analytics.js','ga');

  ga('create', 'UA-48623707-1', 'openbioinformatics.org');
  ga('send', 'pageview');
</script>
