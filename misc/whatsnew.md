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

![new](/img/new.png) 2015Jul29: The exac03 datasets are updated to fix a bug on inconsistent allele frequency in the exac03 data for certain multi-allelic variants.

![new](/img/new.png) 2015Jun23: Whole-genome scores on hg19 coordinate for FATHMM and GWAVA are available in ANNOVAR now. Together with CADD and GERP++ scores, these provide the most comprehensive annotations and prioritization strategies for non-coding variants in human genome. (Warning: each file is over 200G!)

![new](/img/new.png) 2015Jun17: ANNOVAR new version is available at the same download URL as the March version. Major changes include: improve convert2annovar to handle CASAVA format better, enable convert2annovar to handle ANNOVAR to VCF conversion for specific input files, improve backward compatibility of table_annovar.pl for ljb* and popfreq* databases, add avdblist keyword to list all databases provided by '-webfrom annovar', add tilde expansion for annotate_variation.pl, fix bug in convert2annovar to handle gz files, add ability to handle vcf.gz file for table_annovar, change exit code for failure to downdb in annotate_variation, improve variants_reduction.pl to handle more genome builds, change FASTA line to indicate mutation position in coding_change.pl, fix exon count bug for splice variant on negative strand, improve compatibility for certain plant genomes

![new](/img/new.png) 2015May20: mitimpact2 is updated with header information for use in table_annovar. hg38_ljb26_all is updated to fix missing alt_allele.

![new](/img/new.png) 2015May14: mitimpact2 (an exhaustive collection of pre-computed pathogenicity predictions of human mitochondrial non-synonymous variants) is available now on hg19 coordiante!

![new](/img/new.png) 2015Apr28: Updated COSMIC70, NCI60 and 1000G in hg18/hg38 coordinate are available now!

![new](/img/new.png) 2015Apr24: COSMIC70, NCI60 and 1000G in hg38 coordinate are available now!

![new](/img/new.png) 2015Apr20: Updated exac03 database is available, which now include adjusted allelel frequency as ExAC_ALL for ALL population (previously the AF record from ExAC VCF file was annotated as ExAC_Freq). Clinvar20150330 is available in hg19 and hg38. popfreqmax_20150413 and popfreqall_20150413 are available in hg19 coordinate.

![new](/img/new.png) 2015Mar22: ANNOVAR new version is available, with minor function improvements and bug fixes. Registered users should receive an email within a week with updated link, otherwise you can re-register to get the link immediately. New ANNOVAR website becomes available to improve the readibility of the documentation, and offers search and comment functionality.

![new](/img/new.png) 2015Feb17: The ExAC03 that has indel left-realigned is now available in ANNOVAR. It includes all populations and seven subpopulations (AFR,AMR,EAS,FIN,NFE,OTH,SAS). (Update 20150218: file was updated due to a user-reported bug, please download again). (Update 20150302: multiple users reported that chrX contains only ALL population, so I updated the file again, and please download again. Thanks for the bug report)

![new](/img/new.png) 2015Jan06: I wrote a new article with some thoughts and guidelines on processing VCF files and assigning dbSNP identifiers to variants. You can take a look by clicking the "VCF Processing" menu to the left.

![new](/img/new.png) 2014Dec22: I now created new dbSNP that has indel left-realigned and provide to ANNOVAR users, including avsnp138 in hg19 coordiante and avsnp142 in hg19 and hg38 coordinate. Please read "VCF Processing" menu to the left.

![new](/img/new.png) 2014Dec16: Updated 1000g2014oct are available now that addressed some issues with indel mismatch. Please read "VCF Processing" menu to the left. In addition, esp6500siv2_all, esp6500siv2_aa, esp6500siv2_ea are available, and both hg19 and hg38 are available to download now.

![new](/img/new.png) 2014Nov12: ANNOVAR new version is available, with significantly reduce memory usage for filter annotation, improved compatibility for unconventional chromosome names for species such as tomato, fixed a problem in exon numbering for splice variants in reverse strand. Registered users will receive an email with link to download.

![new](/img/new.png) 2014Nov05: updated refGene, knownGene and ensGene files for hg18/hg19/hg38 are available to download. Users can always build these yourself with some efforts though.

![new](/img/new.png) 2014Nov01: 1000 Genomes Project 2014Oct version is available to download now (use -downdb 1000g2014oct), which now finally includes chrX and chrY markers for all populations and five subpopulations (AFR,AMR,EAS,EUR,SAS).

![new](/img/new.png) 2014Nov01: ExAC 65000 exomes allele frequency data is available to download now (use "-downdb exac02" for version 0.2 ), which includes all populations and seven subpopulations (AFR,AMR,EAS,FIN,NFE,OTH,SAS).

![new](/img/new.png) 2014Oct02: Clinvar 20140929 (hg19 only) are available to download now.

![new](/img/new.png) 2014Sep25: Updated ljb26 databases from dbnsfp indexed by annovar is available to download now (the previous one dated Sep15 has column heading errors, so if you downloaded the file before 2014Sep25, you need to download again). 1000Genomes 2014 September version (based on 20130502 alignment phase 3 version 5, with high coverage exome sequencing data) is available to download now. Use '-downdb -build hg19 1000g2014sep' to download it. Currently it has ALL populations and ethnicity-specific files for five sub-populations (AFR,AMR,EAS,EUR,SAS)!

![new](/img/new.png) 2014Sep15: ljb26 databases from dbnsfp indexed by annovar is available to download now. 1000Genomes 2014 August version (with high coverage exome sequencing data) is available to download now. About 36M variants were in 2012 version, but 45M are new. Use '-downdb -build hg19 1000g2014aug' to download it. Currently it has ALL populations and ethnicity-specific files for five sub-populations (AFR,AMR,EAS,EUR,SAS)!

![new](/img/new.png) 2014Sep10: Cosmic70 is available to download now. Clinvar 20140902 (both hg19 and hg38) are available to download now.

![new](/img/new.png) 2014Jul22: An updated table_annovar is available that fixes an issue with invalid characters (space, semicolon, equal sign) in INFO field in VCF output files. If you downloaded ANNOVAR between 7/14-7/22, you can click here to download this file only.

![new](/img/new.png) 2014Jul14: ANNOVAR new version is available with several new functionalities, including the ability to input VCF files and generate annotated VCF files, generate input files for all all possible SNVs/indels in a region or a transcript to faciliate back-convert cDNA/protein change to genomic coordiantes, generate UTR cDNA annotation, etc. Registered users should receive an email within a week with updated link, otherwise you can re-register to get the link immediately.

![new](/img/new.png) 2014Jul12: CLINVAR databases (clinvar_20140702) is available to download now in hg19 and hg38 coordinate, with 80491 SNPs and 7686 indels.

![new](/img/new.png) 2014Jul12: Pre-built FASTA files are available for refGene and knownGene in hg38 coordinate. Use '-downdb -webfrom annovar -buildver hg38' to download each.

![new](/img/new.png) 2014Apr30: CLINVAR databases (clinvar_20140303/clinvar_20140211/clinvar_20131105) have minor bug fixes (previous version displays only one annotation when a mutation has multiple significance annotations). Please redownload them.

![new](/img/new.png) 2014Mar10: Per user requests, whole-genome CADD scores that are within 1% highest percentile (3.3GB) or 10% highest scores (33GB) is available to download by keyword caddgt20 and caddgt10, respectively.

![new](/img/new.png) 2014Feb24: ljb23 (version 2.3) database is available to download in ANNOVAR: Compared to version 2, it includes both raw/original score and converted (0-1 scale, higher scores are more damaging) scores to reduce confusion, and updates scores for some methods. Additionally, we introduce two new scores MetaSVM and MetaLR which has the best performance in finding Mendelian disease variants over all other methods we tested (some details here). Use this updated table_annovar.pl to annotate ljb23.

![new](/img/new.png) 2014Feb24: Per user requests, whole-genome CADD database (350GB) is available to download, see instructions here. My test shows that is is 8X faster than tabix on a variant file from exome sequencing. Updated CLINVAR (-dbtype clinvar_20140211) is available to download with 48K variants. dbSNP138 and its NonFlagged versions are available to download. COSMIC68 and COSMIC68WGS databases are available to download now. Rewrite large portion of the website tutorial to be more updated.

![new](/img/new.png) 2013Nov17: COSMIC67 database is available to download. Use "-downdb cosmic67 . -webfrom annovar -build hg19" or "-downdb cosmic67wgs . -webfrom annovar -build hg19"

![new](/img/new.png) 2013Nov11: CLINVAR database is available to download. Use "-downdb clinvar_20131105 . -webfrom annovar -build hg19". Annotations include Variant Clinical Significance (unknown, untested, non-pathogenic, probable-non-pathogenic, probable-pathogenic, pathogenic, drug-response, histocompatibility, other) and Variant disease name.

![new](/img/new.png) 2013Aug23: New ANNOVAR version is available. Registered users will get an email with download links soon. convert2annovar.pl no longer complains when VCF file does not have a valid header, fixed a small bug in convert2annovar.pl to handle certain classes of indels, table_annovar now works on non-human species, minor fix in annovar to handle certain mouse mutations, ccdsGene annotation uses transcript ID as gene name due to lack of gene name in previous versions, implement dup keyword in exonic variant annotation to better conform to HGVS standards. (A bug was identified in convert2annovar when handling multi-sample VCF files with -allsample argument as output files are empty, so this file was replaced on 9/11).

![new](/img/new.png) 2013Jul28: New ANNOVAR version is available. Registered users will get an email with download links soon. The convert2annovar.pl can handle VCF file with many samples now and can address the multiple alternative allele issue appropriately.

![new](/img/new.png) 2013Jul27: NCI-60 exome allele frequency data is available from ANNOVAR users analyzing cancer somatic mutations. Read details here which used ANNOVAR for variant annotation. Use argument "-downdb -buildver hg19 nci60" to download. COSMIC65 is also available for ANNOVAR users to download now.

![new](/img/new.png) 2013Jun21: New ANNOVAR version is available. Registered users will get an email with download links soon. The LJB version 2 databases are now available from ANNOVAR. These include whole-exome SIFT scores, PolyPhen2 HDIV scores, PolyPhen2 HVAR scores, LRT scores, MutationTaster scores, MutationAssessor score, FATHMM scores, GERP++ scores, PhyloP scores and SiPhy scores.

![new](/img/new.png) 2013May20: COSMIC64 is updated to fix a bug in position for certain indels, use -downdb cosmic64 to download.

![new](/img/new.png) 2013May08: New ANNOVAR version is available. The most important change is the replacement of summarize_annovar by table_annovar (instruction here), which allows better flexibility for users to specify annotation tasks.

![new](/img/new.png) 2013Apr08: COSMIC64 is uploaded, use -downdb cosmic64 to download.

![new](/img/new.png) 2013Mar07: COSMIC63 is uploaded, use -downdb cosmic63 to download. It includes both coding and non-coding variants, and doubles the size for version 61.

![new](/img/new.png) 2013Feb21: New ANNOVAR version is available, which fixed a bug that exonic variants at exon end were annotated as splicing when -exonicsplicing is not set. Registered users will get an email notification on Feb 27, as an email server issue has caused this delay. But as usual, whenever you do a "annotate_variation.pl -downdb null ." you will know if new version is available.

![new](/img/new.png) 2013Feb11: New ANNOVAR version is available. Registered users will get an email with download links soon. Changes include: mitochondria genome is now supported, the -zerostart argument is no longer supported, better handling of GFF3 files with undefined scores, added -gff3attr argument so that attribute field from GFF3 file can be printed in output, changed summarize_annovar.pl to take -alltranscript argument to print out all isoforms for exonic variants, summarize_annovar.pl now takes esp6500si and snp137NonFlagged as databases, exonic variant near intron/exon boundary are no longer reported as splicing, unless -exonicsplicing is set, fixed a minor issue in finding tar program in BSD-derived operating system, convert2annovar.pl now handles *.gz file or handles stdin as input file name, convert2annovar.pl accepts -comment argument to keep comment lines in VCF4 file in output.

![new](/img/new.png) 2013Jan24: The updated summarize_annovar.pl can take arguments such as "-verdbsnp 137NonFlagged -veresp 6500si".

![new](/img/new.png) 2013Jan22: The ESP6500si database is updated, to fix a bug in annotating insertions (previously there was a one-bp error in position for insertions when reference allele is one single base) .

![new](/img/new.png) 2013Jan07: The dbSNP version 137 is available from ANNOVAR now! Use keyword snp137 to download and annotate. The COSMIC version 61 is available from ANNOVAR now! It helps cancer researchers identify if their somatic mutations have been previously observed, how many times are observed, and in which cancer tissues are observed. Use keyword cosmic61 to download and annotate by filter-based annotation.

![new](/img/new.png) 2012Nov04: The NHLBI 6500 Exome data sets with indels and chrY calls is available from ANNOVAR now! Use keyword esp6500si_ea, esp6500si_aa and esp6500si_all to download and annotate.

![new](/img/new.png) 2012Oct23: New ANNOVAR version is available. Registered users will get an email with download links. I also updated large portions of the website to provide updated information to ANNOVAR beginners. The major changes include: added -veresp argument to summarize_annovar.pl to suppert esp6500 data set, added -aamatrixfile argument to print out amino acid substitution scores such as Gratham scores, changed UCSC download from FTP to HTTP to help users with firewall settings, fixed a problem handling genericdb file when chr prefix is present for chromosomes, fixed a problem downloading index for gerp++gt2 files, added variants_reduction.pl program. Updated Oct25: the previous program cannot handle -veresp argument correctly, please download again from the same URL link. Update Nov01: I updated summarize_annovar.pl to take -alltranscript argument to print out all isoforms for exonic variants and to fix slight problems in variants_reduction.pl. Please download again with the same URL link.

![new](/img/new.png) 2012Jun24: The NHLBI 6500 Exome data sets is re-uploaded as the previous version (2012Jun21) has only chr22 data. Please download again.

![new](/img/new.png) 2012Jun21: The NHLBI 6500 Exome data sets are available to download now. Use commands like "annotate_variation.pl -downdb esp6500_ea humandb -webfrom annovar -buildver hg19". You can change hg19 to hg18 or change "ea" to "aa" or "all". The whole-genome GERP++ scores are available to download now but I only include those with RS>=2! User commands like "annotate_variation.pl -downdb gerp++gt2 humandb/ -webfrom annovar -buildver hg19" to download and use "annotate_variation.pl -filter inputfile humandb/ -dbtype gerp++gt2 -buildver hg19" to anntoate your inputfile. See download page.

![new](/img/new.png) 2012Jun21: A slight bug fix to `convert2annovar.pl` is available to download.

![new](/img/new.png) 2012May25: The 1000 Genomes Project 2012 Aprial data sets are available download (this is based on phase 1 release v3 called from 20101123 alignment). The populations include ALL, AMR, AFR, ASN and EUR. Use latest version of ANNOVAR and "-downdb 1000g2012apr" to download and "-filter -dbtype 1000g2012apr_eur" and so on to annotate. Additionally, 9 NonFlagged dbSNP data sets are available to download. See download page for details.

![new](/img/new.png) 2012May25: A new version of ANNOVAR is available. Existing users will receive an email with link to download. The -seq_padding argument and -indel_splicing_threshold arguments were added, and a bug to report beginning/end of transcript as splicing variants was fixed, thanks to Jamie Teer @ NIH. The dbtype of 1000g2012apr is now supported with five populations (based on files from here), thanks to Mehdi Pirooznia @ Hopkins.

![new](/img/new.png) 2012Apr17: New mRNA FASTA files were uploaded for hg18 and hg19 (refseq, knowngene, ensgene), given recent update in gene annotations. Users can always generate the latest files using retrieve_seq_from_fasta.pl by yourself. Updated hg18/hg19 SNP130/131/132/135 index files are uploaded, as the previous version has a minor issue that may miss a tiny fraction of SNPs during filter-based operation.

![new](/img/new.png) 2012Mar08: New ANNOVAR is available with minor feature enhancements. The variation database 1000g2012feb is now available for ANNOVAR users (for 1000 Genomes Project Feb 2012 variant call release, with 38 million SNPs and 3.8 million indels).

![new](/img/new.png) 2012Feb23: New ANNOVAR is available with cumulative bug fixes and many function enhancements. All indexes for ANNOVAR annotation databases have been updated to further improve speed for whole-exome sequencing data, see here for details. New summarize_annovar generates more informative results.

![new](/img/new.png) 2011Dec20: Whole-exome GERP++ scores can be downloaded and annotated by ANNOVAR now for both hg18/hg19. Additionally, allele frequency data for the 5400 exomes from NHLBI (for European Americans, African Americans and all ethnicity) can be downloaded and annotated by ANNOVAR now for both hg18/hg19.

![new](/img/new.png) 2011Dec20: A new generation of variants annotator called ANNOVAR++ is being developed and will be tested by certain avid users. Most known limitations in ANNOVAR will be solved by using this fundamentally new framework for annotation. Users will be able to specify your own customized workflow (summarize_annovar, auto_annovar, index_annovar, etc) in the future.

![new](/img/new.png) 2011Nov20: New version of ANNOVAR is realeased. Major changes include: mRNA FASTA sequences without complete ORF annotation will no longer be used in exonic annotation, retrieve_seq_from_fasta.pl now reports transcripts whose ORF have premature stop codon, fixed the hg18_cg69 and hg19_cg69 allele frequency error and others. See the download page.

![new](/img/new.png) 2011Oct02: The last Version of ANNOVAR has introduced some bugs related to ncRNA annotation, which subsequently affects exonic/splicing annotation. An updated version is released. Please report bugs to me if you still see problems.

![new](/img/new.png) 2011Sep11: New Version of ANNOVAR is released with significant speedup of filter operation for certain databases (dbSNP, SIFT, PolyPhen, 1000G, etc), thanks to Ion Flux for the speed improvements. In previous version of ANNOVAR, filter-based annotation for ex1.human (12 variants) requires ~10 minutes for snp132, sift or polyphen. In the new version, it takes 1 second only! Performance improvements for larger query file will be less apparent. To use the new version, it is necessary to re-download the databases by -downdb. See details here. (Updated 2011Sep14: User reports that the previously uploaded program cannot download index file correctly and was fixed. Please download annovar program again).

![new](/img/new.png) 2011Jun18: New Version of ANNOVAR is released with some function enhancements. New mRNA FASTA files were uploaded for hg18 and hg19 (refseq, knowngene, ensgene), given recent update in gene annotations.

![new](/img/new.png) 2011Jun18: The 1000g2010nov file was updated to include indel calls. Now it has 26.1 million SNPs (released by 1000G in Nov 2011 based on Aug 2011 alignments) and 3.7 million indels (released by 1000G in Feb 2011 based on Aug 2010 alignments). A new 1000g2011may file was provided with 39 million SNPs. Read details here.

![new](/img/new.png) 2011May06: New version of ANNOVAR is released with minor bug fixes and feature enhancements. Whole-exome pre-computed PolyPhen v2, MutationTaster, LRT, PhyloP scores are available as ANNOVAR annotation database to give more detailed annotation of non-synonymous mutations in humans, in addition to SIFT. Use "-downdb ljb_pp2 -webfrom annovar", "-downdb ljb_lrt -webfrom annovar", "-downdb ljb_mt -webfrom annovar", "-downdb ljb_phylop -webfrom annovar" to download them. Add "-buildver hg19" to download them in hg19 coordinate. The annotation database ljb refers to Liu, Jian, Boerwinkle paper in Human Mutation with pubmed ID 21520341. Cite this paper if you use the scores; higher scores (0-1) represent functionally more deleterious predictions. (2011May11: There is a bug in the hg18_lrt_pp2 file which has been fixed now; if you download before this date, please download file again. Please report other bugs).

![new](/img/new.png) 2011May03: Fourty six whole-genome (variant calls and allele frequency information) from Complete Genomics are now available as a ANNOVAR annotation database. Users need to use "-downdb cg46 -webfrom annovar" (with either '-buildver hg18' or '-buildver hg19') to download the file. For filter-based annotation, use "-dbtype generic -genericdbfile hg18_cg46.txt" for annotation. The -score_threshold argument can be used to apply a MAF threshold.

![new](/img/new.png) 2011Apr18: New mRNA FASTA files were uploaded for hg18 and hg19 (refseq, knowngene, ensgene), given recent update in gene annotations. Users can always generate the latest files using retrieve_seq_from_fasta.pl by yourself.

![new](/img/new.png) 2011Mar25: dbSNP version 132 in hg19 coordinate with >30 million SNPs (more than double of dbSNP131). Download the files from the download page, or use "-downdb -webfrom annovar" in ANNOVAR to download directly (as the file is from ANNOVAR not UCSC).

![new](/img/new.png) 2011Mar18: dbSNP version 131 and 132 in hg18 coordinate! There is a huge community demand to have latest dbSNP in hg18 (NCBI 36), but unfortunately dbSNP elected to work on hg19 only. Dr. Leparc lifted over the latest dbSNP files and provided the dbSNP131 and dbSNP132 file in hg18 coordinate for use in ANNOVAR. Download the files from the download page, or use "-downdb -webfrom annovar" in ANNOVAR to download directly (-webfrom is required as the file is from ANNOVAR website).

![new](/img/new.png) 2011Mar01: Small update to AVSIFT database based on updated annotations at http://sift-dna.org/.




<script>
  (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
  (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
  m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
  })(window,document,'script','//www.google-analytics.com/analytics.js','ga');

  ga('create', 'UA-48623707-1', 'openbioinformatics.org');
  ga('send', 'pageview');
</script>
