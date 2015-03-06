The table_annovar.pl program can optionally take VCF files and annotate them (with `-vcfinput` argument). The annotate_variation.pl program requires a simple text-based format described below.

ANNOVAR (annotate_variation.pl) takes text-based input files, where each line corresponds to one variant. On each line, the first five space- or tab- delimited columns represent chromosome, start position, end position, the reference nucleotides and the observed nucleotides. Additional columns can be supplied and will be printed out in identical form. For convenience, users can use “0” to fill in the reference nucleotides, if this information is not readily available. Insertions, deletions or block substitutions can be readily represented by this simple file format, by using “–” to represent a null nucleotide. One example is given below (this example is included as ex1.human file in the ANNOVAR package), with extra columns that serve as comments on the variants. By default, 1-based coordinate system will be assumed; if --zerostart argument is issued, a half-open zero-based coordinate system will be used in ANNOVAR instead.

The ANNOVAR package contains a few example input files. For example, the content of the ex1.human file is below:

```
[kai@biocluster ~/]$ cat example/ex1.avinput
1 948921 948921 T C comments: rs15842, a SNP in 5' UTR of ISG15
1 1404001 1404001 G T comments: rs149123833, a SNP in 3' UTR of ATAD3C
1 5935162 5935162 A T comments: rs1287637, a splice site variant in NPHP4
1 162736463 162736463 C T comments: rs1000050, a SNP in Illumina SNP arrays
1 84875173 84875173 C T comments: rs6576700 or SNP_A-1780419, a SNP in Affymetrix SNP arrays
1 13211293 13211294 TC - comments: rs59770105, a 2-bp deletion
1 11403596 11403596 - AT comments: rs35561142, a 2-bp insertion
1 105492231 105492231 A ATAAA comments: rs10552169, a block substitution
1 67705958 67705958 G A comments: rs11209026 (R381Q), a SNP in IL23R associated with Crohn's disease
2 234183368 234183368 A G comments: rs2241880 (T300A), a SNP in the ATG16L1 associated with Crohn's disease
16 50745926 50745926 C T comments: rs2066844 (R702W), a non-synonymous SNP in NOD2
16 50756540 50756540 G C comments: rs2066845 (G908R), a non-synonymous SNP in NOD2
16 50763778 50763778 - C comments: rs2066847 (c.3016_3017insC), a frameshift SNP in NOD2
13 20763686 20763686 G - comments: rs1801002 (del35G), a frameshift mutation in GJB2, associated with hearing loss
13 20797176 21105944 0 - comments: a 342kb deletion encompassing GJB6, associated with hearing loss
```

The first five space or tab delimited fields are Chromosome ("chr" prefix is optional), Start, End, Reference Allelel, Alternative Allele. The rest of the columns are completely optional

The example above contains several genetic variants. The first variant is a single nucleotide variant, with a substitution of C in reference genome to T. The third variant is a 2-bp deletion, with the observed nucleotides being represented by "-". The fourth variant is a 2-bp insertion, since the reference nucleotide in the reference genome is represented by “–”. The last variant is a large-scale deletion, but the reference allele is represented by “0”, eliminating the need to include reference nucleotides on this line.

