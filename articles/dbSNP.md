One common task that many users need to use ANNOVAR for is to assign dbSNP identifiers to variant calls in a VCF file. I often get questions that a specific variant was not assigned a dbSNP rs identifier by ANNOVAR, even though it is supposed to be a "known" SNP. This usually happens for indels, but sometimes happens for SNVs as well.

Before we go too deep into this issue, let's step back and first ask the simple question: what is a dbSNP rs identifier exactly?

If you read dbSNP website, you'll find "official" explanation here:

> *Reference SNP cluster 'rs' ID's are created by NCBI during periodic 'builds' of the database. Reference SNP clusters define a non-redundant set of markers that are used for annotation of reference genome sequence and integration with other NCBI resources. Novel submissions at new positions in genome sequence will instantiate a new refSNP cluster. New submissions that match existing data will be merged into an existing refSNP cluster. A reference SNP cluster record has the format NCBI | rs[NCBI SNP ID] where 'rs' is always lower case.*

Another explanation is given here:

> *A reference SNP ID number, or “rs” ID, is an identification tag assigned by NCBI to a group (or cluster) of SNPs that map to an identical location. The rs ID number, or rs tag, is assigned after submission. When dbSNP was first released to the public in 1998, every submission that appeared to be unique in the database was assigned separate rs ID numbers. Now that dbSNP has matured with constant submissions, a submitted SNP is evaluated to see if it maps to an identical location as previously submitted SNPs; if it does, then the submitted SNP is linked into the reference set of the existing reference SNP record. These SNP rs IDs are mapped to external resources or databases, including NCBI databases. The SNP rs ID number is noted on the records of these external resources and databases in order to point users back to the original dbSNP records. A reference SNP record has the format NCBI| rs<NCBI SNP ID>. Please note that 'rs' is always in the lower case. For further information on refSNPs, please see our online documentation.(04/05/06)*

Basically, my understanding is that if a new user submit a new sequence, NCBI will try to match it against existing records (so-called refSNP cluster), and if there is no match, it will try to assign a new rs identifier to the new submission. The real problem is that most people including myself still do not understand exactly what is dbSNP rs identifier even after reading this paragraph, as these words do not constitute a "definition" by itself. The simple question that I (and many other people) may have is: is rs identifer a stretch of sequence, or a stretch of "consensus" sequence built from many other sequences, or a genomic position, or a collection of genomic positions, or a variant with chr:start-end/ref/alt information, or multiple variants sharing the same positions/locus?

I may guess that rs ID is a strech of 'consensus' sequence; in my humble opinion, it actually makes the most sense as the definition of rs ID (because it is genome agnostic). However, this may not be the case. From my reading of the dbSNP website, dbSNP may want to use rs ID to denote SNPs/variants/mutations. (However, in a separate discussion with dbSNP developers, I was informed that rs ID absolutely does not denote SNPs/variants/mutations, but denotes specific positions in a given reference genome, which contradicts their FAQ in their own website here). So I do not really know how dbSNP think about rs ID exactly. I sent emails to dbSNP to get more clarification.

Back to the real world: the reality is that most researchers use rs ID to denote mutations/variants rather than a locus or a DNA sequence. They say things like rs123456 is associated with elevated blood pressure, they say things like rs123456 creates a new stop codon resulting in truncated protein, they say things like rs123456 has a MAF of 5%, etc. A simple explanation is that traditionally SNPs are biallelic, so by using rs ID one can automatically denote a unique non-reference variant in the genome. dbSNP may not really like this, they would want everybody to say that rs123456 G allele on 1p23.4 creates a new stop codon or that rs123456 T allele on 3q11.2 has MAF of 5%, etc. It is just not that convenient for researchers to say things this way. Ultimately, it boils down to an identifiability issue: with the current dbSNP release, neither rs123456, nor rs123456-G, can uniquely identify a variant in a given reference genome, and the situation can become worse as many rs ID can map to multiple locations in some reference genomes. Based on how dbSNP releases their data, we as users have to make some choices: either rs ID identifies a locus, or rs ID identifiers multiple pre-defined alleles in a locus, or rs ID identifies a set of locus with similar sequence contexts, or rs ID identifiers multiple pre-defined alleles in a set of loci with similar sequence contexts (but not all alleles need to be present at all loci).

Anyway, enough background now. Let's go to the main topic of assigning dbSNP rs ID (say for example, rs1045642) to a new mutation. Below is the record from dbSNP's own VCF file:

```
7 87509329 rs1045642 A G,T . . RS=1045642;RSPOS=87509329;RV;dbSNPBuildID=86;SSR=0;SAO=0;VP=0x05037800030511051f010101;WGT=1;VC=SNV;PM;TPA;PMC;S3D;SLO;REF;SYN;ASP;G5;HD;GNO;KGPhase1;KGPilot123;KGPROD;OTHERKG;PH3;OM
```

Let's just assume that rs1045642 denotes a A->G or A->T mutation at chr7:87509329 (even though dbSNP may or may not think so).

The question is (1) if a user finds a chr7:87509329A->C mutation (2) if a user finds a chr7:87509329delA mutation, would we call that rs1045642 is present in user data?

In some software tools, the answer is yes for 1 only, or yes for both 1 and 2. For dbSNP, my guess is that they'll merge both records to the identical rs ID (rs1045642) in the next release, even though the current dbSNP does not contain such records.

However, in ANNOVAR, the answer is no for both. Remember that in filter-based annotation, ANNOVAR will only identify exact match to a database, which includes not only position but also nucleotide identity. It is important to keep the 'exact match' ability in filter-based annotation, otherwise allele frequency, functional score, etc all lose their identifiability.

For indels, things are bit more complicated; however, if you are willing to perform left-normalization, then I now provide a fully normalized "new" dbSNP, which I refer to as `avsnp`, to match up against your variants (see [this page](../articles/VCF.md) for details). This `avsnp` will ensure better matching of indels for user data against a dbSNP rs ID. Currently, `avsnp138` is available for hg19 coordinate, yet `avsnp142` is available in hg19 and hg38 coordinate. Additional avsnp will be added in the future. An example usage is given below:

```
annotate_variation.pl -downdb -buildver hg19 avsnp142 humandb/
annotate_variation.pl ex1.avinput humandb/ -filter -build hg19 -dbtype avsnp142
```

For ANNOVAR users, these will be the most "correct" dbSNP release to use to ensure identifiability of rs IDs, regardless of how dbSNP has originally planned to use rs IDs for.



---

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
    var disqus_identifier = 'dbSNP';
    var disqus_title = 'Assigning dbSNP identifiers';
    
    /* * * DON'T EDIT BELOW THIS LINE * * */
    (function() {
        var dsq = document.createElement('script'); dsq.type = 'text/javascript'; dsq.async = true;
        dsq.src = '//' + disqus_shortname + '.disqus.com/embed.js';
        (document.getElementsByTagName('head')[0] || document.getElementsByTagName('body')[0]).appendChild(dsq);
    })();
</script>
<noscript>Please enable JavaScript to view the <a href="https://disqus.com/?ref_noscript" rel="nofollow">comments powered by Disqus.</a></noscript>