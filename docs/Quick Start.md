## Quick Start-up Guide

For impatient users, here is a quick start-up guide to show what ANNOVAR can do. One set of basic examples and one set of advanced examples are provided below. Assuming that a Linux computer is used and that the computer is connected to Internet, go to the ANNOVAR directory, then run the following commands one by one. (Note that if you already added ANNOVAR path into your system executable path, then typing "annotate_variation.pl" would be okay instead of typing "perl annotate_variation.pl"). Internet connection is required for those commands involving the -downdb operation.

```
annotate_variation.pl -geneanno -buildver hg19 example/ex1.avinput humandb/

annotate_variation.pl -downdb -buildver hg19 cytoBand humandb/
annotate_variation.pl -regionanno -dbtype cytoBand -buildver hg19 example/ex1.avinput humandb/ 
```

annotate_variation.pl -downdb -buildver hg19 1000g2012apr humandb/
annotate_variation.pl -filter -dbtype 1000g2012apr_all -buildver hg19 example/ex1.avinput humandb/
Hopefully you can get a rough idea what ANNOVAR can do after doing these exercises. Note that these commands correspond to gene-based, region-based and filter-based annotations.

The first command annotates the 12 variants in ex1.avinput file and classify them as intergenic, intronic, non-synonymous SNP, frameshift deletion, large-scale duplication, etc. Examine the ex1.avinput file to see the simple text format, one variant per line. The annotation procedure should take a few seconds in a typical modern computer. Two output files are generated as ex1.avinput.variant_function and ex1.avinput.exonic_variant_function. Examine the two output files in example/ directory to see what they contain: In the variant_function file, the first and second column annotate variant effects on gene structure and the genes that are affected, yet the other columns are reproduced from input file. In the exonic_variant_function file, the first, second and third column annotate variant line number in input file, the variant effects on coding sequences and the gene/transcript being affected, yet the other columns are reproduced from input file.

Note that he ANNOVAR package already contains a humandb/ directory with RefSeq library files (so that users can start running gene-based annotation in ANNOVAR immediately without doing "-downdb gene" first); the other commands below requires -downdb argument to download database files from Internet first.

Next, the program downloads cytogenetic band annotation databases from the UCSC Genome Browser and saves it to the humandb/ directory as hg19_cytoBand.txt file, then annotates variants in ex1.avinput file and idenifies the cytogenetic band for these variants. The annotation procedure should take a few seconds. Examine the output file ex1.avinput.hg19_cytoBand to see what it contains. The first column shows "cytoBand", the second column shows the annotation results, and the other columns are reproduced from input file.





<div id="disqus_thread"></div>
<script type="text/javascript">
    /* * * CONFIGURATION VARIABLES * * */
    var disqus_shortname = 'annovar';
    
    /* * * DON'T EDIT BELOW THIS LINE * * */
    (function() {
        var dsq = document.createElement('script'); dsq.type = 'text/javascript'; dsq.async = true;
        dsq.src = '//' + disqus_shortname + '.disqus.com/embed.js';
        (document.getElementsByTagName('head')[0] || document.getElementsByTagName('body')[0]).appendChild(dsq);
    })();
</script>
<noscript>Please enable JavaScript to view the <a href="https://disqus.com/?ref_noscript" rel="nofollow">comments powered by Disqus.</a></noscript>
