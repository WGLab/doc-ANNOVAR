### Basic Information

#### Email

What should be noticed is, as the program usually takes more than
    5 minutes, thus a valid email is required here, in case you forgot the link. If the program runs very well, we will send you an email later.

#### Identifier

Identifier is just the name of your program. You can give a name as to your own preference, like 'Jim's awesome run', 
      'My first run', '1122233', so on. When you click the 'Monitor Progress' button, you can recognize your program by your 
      specific identifier.

      ![](/images/identifier.png)</img>

#### Input file or paste variant

      This is the place where you should submit your variant calls, either by a file or through paste.

      Five different types of formats could be accepted here, separately, vcf, tsv, annovar, gff3 and masterVar.
      The details of these formats could be seen through the Zoom In icon in the Parameter Setting section.

### Phenotype/Disease Specific Prioritization (Call Phenolyzer)

#### Overview

Phenolyzer stands for Phenotype Based Gene Analyzer, a new software developed by us, which can prioritize genes based on specific diseases or phenotypes.
   Call Phenolyzer is a pipeline connecting wANNOVAR with Phenolyzer, discovering genes directly from wANNOVAR output.
   It is extremely helpful if the user provides some short disease/phenotype terms together with the variant file,
   then robust ontology searching and machine learning method is used to discover the candidate genes. 

   To see more Phenolyzer examples, please click this [link](http://phenolyzer.usc.edu/example.php)

   To see the FAQ of Phenolyzer, please click this [link](http://phenolyzer.usc.edu/FAQ.php)

#### Enter Phenotypes

 Enter Phenotypes or Diseases here. Please enter some terms here if you already have an idea about which disease/phenotype you 
   are interested in or already observed. Several kinds of terms are accepted here, including:

 1) disease names: like alzheimer, parkinson, chron, and so on;

 2) phenotype names: like fatigure, Blood pressure. Any HPO (Human Phenotype Ontology) term is also accepted.

 3) OMIM IDs: like 114480 for'breast cancer'.

   Please use Enter or ';' as separators, some other non-word characters are also acepted like '|'.

Please try to use short terms instead a very long term. As the first step of Phenolyzer is to do word match between your
   word and the names in our database. Thus super long names might not have any results. 

For example, **'X-linked intellectual deficiency'** is better to be separated into 
   **'X-linked'** and **'intellectual deficiency'**.

#### Understand Results

If any Phenotype/Disease terms are entered, there will be an addtional section in the result, named 'Phenotype/disease Prioritization Result'.

     ![](/images/phenolyzer_result.png)</img>

     The first row 'Input Gene List' is the gene list extracted from the ANNOVAR output variant calling list. 

<span class='text-danger'> Tip: After your first run of wANNOVAR, you can run Phenotype/Disease specific prioritization with some other terms without the need to run wANNOVAR, which is 
     more time and computation efficient as Phenolyzer could finish in one minute and wANNOVAR usuually takes more than 5 minutes. What you need to do is just
     take the **Input Gene List** here, go to Phenolyzer website and submit it and your new phenotypes there! </span> 

     'Result Gene List' is the output from Phenolyzer, with the information of ranks, gene names, NCBI IDs, and scores. 

     'Show' will lead you to the Phenolyzer's network visualization. You could do interactive research there, like finding all
     the genes and diseases interacting with one gene by **double click** the gene. You can also see the details about how one gene is discovered
     through the prioritization algorithm.  

### Parameter Setting

          This part is mainly for advanced settings of wANNOVAR. You can change the genome build, input format, gene definition, and disease filter here.

 The details of them could be found by clicking the 'Zoom in' button following each input element.

<span class="text-primary">NOTICE: If you use the custom filtering option, please at least choose a filter step in
          the section below, or use a control file. </span>

#### Reference Genome

*   **hg18:**The Homo Sapiens hg18 genome assembly[https://genome.ucsc.edu/cgi-bin/hgGateway?db=hg18](https://genome.ucsc.edu/cgi-bin/hgGateway?db=hg18)
          <li>**hg19:**The Homo Sapiens hg19 genome assembly[https://genome.ucsc.edu/cgi-bin/hgGateway?db=hg19](https://genome.ucsc.edu/cgi-bin/hgGateway?db=hg19)

#### Input Format

#### Gene Definition

#### Disease Model

#### Custom Filtering

Table below lists the some columns of variants annotation from wANNOVAR. For other details, please see ANNOVAR website: 
     	[region based annotation](http://www.openbioinformatics.org/annovar/annovar_region.html) and 
     	[filter based annotation](http://www.openbioinformatics.org/annovar/annovar_filter.html).

    |Column Name|Explanation|
    | ------------- |------------------------------------------------|
    |Func|Variant function (exonic, intronic, intergenic, UTR,  etc)|
    |Gene|Gene Name. By default, RefSeq gene definition is used, but users can choose from other gene definition systems.|
    |ExonicFunc|Exonic variant function (non-synonymous, synonymous, etc)|
    |AAChange|Amino acid changes|
    |Conserved|Region-level phastCons LOD scores|


*   [Basic Information](#basic-info)

        *   [Email](#email)
    *   [Identifier](#identifier)
    *   [Variant Call](#variant-call)

*   [Call Phenolyzer](#phenolyzer)

        *   [Overview](#overview)
    *   [Enter Phenotypes](#enter-phenotype)
    *   [Understand Results](#understand-result)

*   [Parameter Setting](#parameter-setting)

        *   [Reference Genome ](#ref_genome)
    *   [Input Format ](#input_format)
    *   [Gene Definition](#gene_def)
    *   [Disease Model](#disease_model)
    *   [Custom Filtering](#custom_filtering)

