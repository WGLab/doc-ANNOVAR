# Download ANNOVAR and related data sets

## ANNOVAR main package

The latest version of ANNOVAR can be downloaded [here](http://www.openbioinformatics.org/annovar/annovar_download_form.php).

ANNOVAR is written in pure Perl and can be run as a standalone application on diverse hardware systems where standard Perl modules are installed.

## Additional databases

Most of the databases that ANNOVAR uses can be directly retrieved from UCSC Genome Browser Annotation Database. In general, users can use "-downdb" in ANNOVAR to download these files. As of Feb2012, there are 6418 databases for hg19, 6443 databases for hg18, 1841 databases for mm9, etc.

Several very commonly used annotation databases for human genomes are additionally provided by me as described below. In general, users can use `-downdb -webfrom annovar` in ANNOVAR directly to download these files.

| Tables   |      Are      |  Cool |
|----------|:-------------:|------:|
| col 1 is |  left-aligned | $1600 |
| col 2 is |    centered   |   $12 |
| col 3 is | right-aligned |    $1 |

| Genome Build   |      Table Name      |  Explanation | Additional Comments |
|---|---|---|
| hg18 |  avsift | $whole-exome SIFT scores for non-synonymous variants (obselete and should not be uesd any more) | file updated 2011Mar01, index updated 2012Feb22 |
| col 2 is |    centered   |   $12 |
| col 3 is | right-aligned |    $1 |



| Genome Build | Table Name | Explanation | Additional Comments |
|---|---|---|
| hg18 | avsift | whole-exome SIFT scores for non-synonymous variants (obselete and should not be uesd any more) | file updated 2011Mar01, index updated 2012Feb22 |


| hg19	|	avsift	|	same as above	file updated 2011Mar01, index updated 2012Feb22 |
| hg18	|	ljb_sift	|	whole-exome LJBSIFT scores (which corresponds to 1-SIFT !!!!!)	|	file and index updated 2012Feb22 |

## Version history

Idea was conceived in 2009, motivated by several whole-genome sequencing paper and whole-exome sequencing paper.

On 2010Feb15, first public release of ANNOVAR.

On 2010Mar07, new release (subversion 322) fixed -regionanno issues.

On 2010Mar27, major updated release is uploaded.

On 2010Mar30, updated the auto_annovar script and improved ANNOVAR memory management so that it runs in environment with limited memory.
