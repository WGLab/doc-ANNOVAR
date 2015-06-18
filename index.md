# ANNOVAR Documentation

ANNOVAR is an efficient software tool to utilize update-to-date information to functionally annotate genetic variants detected from diverse genomes (including human genome hg18, hg19, hg38, as well as mouse, worm, fly, yeast and many others). Given a list of variants with chromosome, start position, end position, reference nucleotide and observed nucleotides, ANNOVAR can perform:

- Gene-based annotation: identify whether SNPs or CNVs cause protein coding changes and the amino acids that are affected. Users can flexibly use RefSeq genes, UCSC genes, ENSEMBL genes, GENCODE genes, AceView genes, or many other gene definition systems.
- Region-based annotations: identify variants in specific genomic regions, for example, conserved regions among 44 species, predicted transcription factor binding sites, segmental duplication regions, GWAS hits, database of genomic variants, DNAse I hypersensitivity sites, ENCODE H3K4Me1/H3K4Me3/H3K27Ac/CTCF sites, ChIP-Seq peaks, RNA-Seq peaks, or many other annotations on genomic intervals.
- Filter-based annotation: identify variants that are documented in specific databases, for example, whether a variant is reported in dbSNP,  what is the allele frequency in the 1000 Genome Project, NHLBI-ESP 6500 exomes or Exome Aggregation Consortium, calculate the SIFT/PolyPhen/LRT/MutationTaster/MutationAssessor/FATHMM/MetaSVM/MetaLR scores, find intergenic variants with GERP++ score < 2, or many other annotations on specific mutations.
- Other functionalities: Retrieve the nucleotide sequence in any user-specific genomic positions in batch, identify a candidate gene list for Mendelian diseases from exome data, and other utilities.

Please click the menu items to navigate through this website. Check [here](misc/whatsnew.md) to see what is new in ANNOVAR. To recieve program updates, please use the [ANNOVAR mailing list](https://groups.google.com/forum/#!forum/annovar). If you have questions, comments and bug reports, please post them in the Disqus comment form in this website (or email me directly). Thank you very much for your help and support!

---

![new](/img/new.png) 2015Jun17: ANNOVAR new version is available at the same download URL as the March version. 

![new](/img/new.png) 2015May20: mitimpact2 (an exhaustive collection of pre-computed pathogenicity predictions of human mitochondrial non-synonymous variants) is updated with header information for use in table_annovar. hg38_ljb26_all is updated to fix missing alt_allele.

![new](/img/new.png) 2015Apr28: Updated COSMIC70, NCI60 and 1000G in hg18/hg38 coordinate are available now!

![new](/img/new.png) 2015Apr20: Updated exac03 database is available, which now include adjusted allelel frequency as ExAC_ALL for ALL population (previously the AF record from ExAC VCF file was annotated as ExAC_Freq). Clinvar20150330 is available in hg19 and hg38. popfreqmax_20150413 and popfreqall_20150413 are available in hg19 coordinate.

<script>
  (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
  (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
  m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
  })(window,document,'script','//www.google-analytics.com/analytics.js','ga');

  ga('create', 'UA-48623707-1', 'openbioinformatics.org');
  ga('send', 'pageview');
</script>
