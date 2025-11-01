export interface Question {
  id: string;
  question: string;
  options: string[];
  correctAnswer: number;
  explanation: string;
}

export const chromosomesQuestions: Question[] = 
[
  {
    "id": "chromosomes-1",
    "question": "What is the primary chemical component of a eukaryotic chromosome?",
    "options": [
      "Lipids",
      "Carbohydrates",
      "DNA and proteins",
      "RNA only"
    ],
    "correctAnswer": 2,
    "explanation": "Chromosomes are not made of pure DNA. They are complexes of DNA and proteins, primarily histones, which together form chromatin. This packaging is essential for fitting long DNA molecules into the nucleus."
  },
  {
    "id": "chromosomes-2",
    "question": "The functional, uncoiled form of DNA that is active in transcription is called:",
    "options": [
      "Chromatid",
      "Chromatin",
      "Chromosome",
      "Centromere"
    ],
    "correctAnswer": 1,
    "explanation": "Chromatin is the material that makes up chromosomes. When it is in a loose, diffuse state (euchromatin), the DNA is accessible to the transcription machinery and genes can be expressed."
  },
  {
    "id": "chromosomes-3",
    "question": "The region of a chromosome where the two sister chromatids are held together is called the:",
    "options": [
      "Telomere",
      "Centriole",
      "Centromere",
      "Kinetochore"
    ],
    "correctAnswer": 2,
    "explanation": "The centromere is the constricted region of a chromosome that holds the two sister chromatids together after DNA replication. It is also the site for the attachment of spindle fibers during cell division."
  },
  {
    "id": "chromosomes-4",
    "question": "Which of the following proteins are primarily responsible for the packaging of DNA into nucleosomes?",
    "options": [
      "Actins",
      "Histones",
      "Keratin",
      "Collagen"
    ],
    "correctAnswer": 1,
    "explanation": "Histones are positively charged proteins that DNA wraps around to form nucleosomes, the fundamental unit of chromatin packaging. This helps organize and condense the long DNA molecule."
  },
  {
    "id": "chromosomes-5",
    "question": "A nucleosome core particle consists of DNA wrapped around a core of how many histone molecules?",
    "options": [
      "Two",
      "Four",
      "Six",
      "Eight"
    ],
    "correctAnswer": 3,
    "explanation": "A nucleosome core is made up of eight histone proteins: two copies each of H2A, H2B, H3, and H4. DNA wraps around this core approximately 1.65 times."
  },
  {
    "id": "chromosomes-6",
    "question": "The ends of eukaryotic chromosomes are protected by special structures called:",
    "options": [
      "Centromeres",
      "Telomeres",
      "Kinetochores",
      "Centrioles"
    ],
    "correctAnswer": 1,
    "explanation": "Telomeres are repetitive nucleotide sequences (e.g., TTAGGG in humans) at the ends of chromosomes. They protect the chromosomes from deterioration and from fusing with each other."
  },
  {
    "id": "chromosomes-7",
    "question": "The main function of chromosomes is to:",
    "options": [
      "Produce energy for the cell",
      "Store and transmit genetic information",
      "Synthesize proteins",
      "Provide structural support to the nucleus"
    ],
    "correctAnswer": 1,
    "explanation": "Chromosomes are the vehicles of heredity. They carry genes, which are the units of genetic information, and ensure this information is accurately duplicated and passed on to daughter cells during cell division."
  },
  {
    "id": "chromosomes-8",
    "question": "During which stage of the cell cycle do chromosomes replicate?",
    "options": [
      "G1 phase",
      "S phase",
      "G2 phase",
      "M phase"
    ],
    "correctAnswer": 1,
    "explanation": "The S phase (Synthesis phase) of interphase is dedicated to DNA replication. During this time, each chromosome is duplicated, resulting in two identical sister chromatids joined at the centromere."
  },
  {
    "id": "chromosomes-9",
    "question": "The highly condensed, transcriptionally inactive form of chromatin is called:",
    "options": [
      "Euchromatin",
      "Heterochromatin",
      "Nucleochromatin",
      "Karyochromatin"
    ],
    "correctAnswer": 1,
    "explanation": "Heterochromatin is a tightly packed form of DNA that is genetically inactive because its genes cannot be accessed for transcription. Euchromatin is the less condensed, active form."
  },
  {
    "id": "chromosomes-10",
    "question": "The number of chromosomes in a human somatic (body) cell is:",
    "options": [
      "22",
      "23",
      "44",
      "46"
    ],
    "correctAnswer": 3,
    "explanation": "Human somatic cells are diploid (2n) and contain 46 chromosomes, which consist of 23 pairs—one set inherited from each parent."
  },
  {
    "id": "chromosomes-11",
    "question": "A photograph of an individual's chromosomes arranged in pairs is called a:",
    "options": [
      "Chromatogram",
      "Karyotype",
      "Genotype",
      "Phenotype"
    ],
    "correctAnswer": 1,
    "explanation": "A karyotype is an organized profile of an individual's chromosomes, arranged in order from largest to smallest and numbered. It is used to check for chromosomal abnormalities."
  },
  {
    "id": "chromosomes-12",
    "question": "The protein structure that forms on the centromere and serves as the attachment site for spindle microtubules is the:",
    "options": [
      "Telomere",
      "Kinetochore",
      "Chromatid",
      "Aster"
    ],
    "correctAnswer": 1,
    "explanation": "The kinetochore is a complex protein structure that assembles on the centromere. It is the actual site where microtubules from the mitotic spindle attach to pull the chromosomes apart during cell division."
  },
  {
    "id": "chromosomes-13",
    "question": "Which of the following is a function of telomeres?",
    "options": [
      "To hold sister chromatids together",
      "To prevent the loss of genes during DNA replication",
      "To serve as the origin of replication",
      "To code for ribosomal proteins"
    ],
    "correctAnswer": 1,
    "explanation": "Due to the 'end-replication problem,' DNA polymerase cannot fully replicate the ends of linear chromosomes. Telomeres, as disposable buffers, prevent the loss of essential genetic information located further inward."
  },
  {
    "id": "chromosomes-14",
    "question": "The 'beads-on-a-string' appearance of chromatin is due to the formation of:",
    "options": [
      "Nucleosomes",
      "Centromeres",
      "Telomeres",
      "Kinetochores"
    ],
    "correctAnswer": 0,
    "explanation": "The fundamental first level of DNA packing is the nucleosome. When viewed under an electron microscope, chromatin looks like a string of beads, where each 'bead' is a nucleosome and the 'string' is the linker DNA."
  },
  {
    "id": "chromosomes-15",
    "question": "A gene is best defined as:",
    "options": [
      "A type of histone",
      "A segment of DNA that codes for a functional product (RNA or protein)",
      "The entire DNA sequence of an organism",
      "A condensed chromosome"
    ],
    "correctAnswer": 1,
    "explanation": "A gene is the basic physical and functional unit of heredity. It is a specific sequence of DNA nucleotides that codes for a specific RNA molecule or protein polypeptide chain."
  },
  {
    "id": "chromosomes-16",
    "question": "The enzyme that adds repetitive DNA sequences to the ends of chromosomes (telomeres) is called:",
    "options": [
      "DNA polymerase",
      "Telomerase",
      "Helicase",
      "Ligase"
    ],
    "correctAnswer": 1,
    "explanation": "Telomerase is a special enzyme (a ribonucleoprotein) that adds telomeric repeat sequences to the 3' end of DNA strands. It helps compensate for the end-replication problem in cells that need to divide many times (e.g., stem cells)."
  },
  {
    "id": "chromosomes-17",
    "question": "In a human karyotype, the 23rd pair of chromosomes determines:",
    "options": [
      "Blood type",
      "Eye color",
      "Biological sex",
      "Height"
    ],
    "correctAnswer": 2,
    "explanation": "The 23rd pair are the sex chromosomes. Females have two X chromosomes (XX), and males have one X and one Y chromosome (XY). This pair determines the genetic sex of an individual."
  },
  {
    "id": "chromosomes-18",
    "question": "The complex of DNA and its associated proteins is called:",
    "options": [
      "Nucleolus",
      "Chromatin",
      "Cytosol",
      "Ribosome"
    ],
    "correctAnswer": 1,
    "explanation": "Chromatin is the term for the entire complex of DNA, histones, and non-histone proteins that make up the contents of the nucleus of a eukaryotic cell. Chromosomes are condensed chromatin."
  },
  {
    "id": "chromosomes-19",
    "question": "Which level of chromatin packaging is the most condensed?",
    "options": [
      "Nucleosome (beads-on-a-string)",
      "30nm fiber",
      "Looped domains",
      "Metaphase chromosome"
    ],
    "correctAnswer": 3,
    "explanation": "Chromosomes reach their highest level of condensation during metaphase of mitosis. This extreme packaging ensures that the duplicated chromosomes can be moved and segregated accurately without becoming tangled or broken."
  },
  {
    "id": "chromosomes-20",
    "question": "A chromosome that has its centromere located near the middle is called:",
    "options": [
      "Telocentric",
      "Acrocentric",
      "Submetacentric",
      "Metacentric"
    ],
    "correctAnswer": 3,
    "explanation": "Chromosomes are classified based on centromere position. Metacentric chromosomes have a centromere in the middle, creating arms of approximately equal length."
  },
  {
    "id": "chromosomes-21",
    "question": "The shortening of telomeres is associated with:",
    "options": [
      "Increased cancer risk",
      "Cellular aging and senescence",
      "Enhanced gene expression",
      "Faster cell division"
    ],
    "correctAnswer": 1,
    "explanation": "In most somatic cells, telomeres shorten with each cell division due to the lack of telomerase activity. When telomeres become critically short, the cell stops dividing (senescence) or undergoes apoptosis, which is a key aspect of aging."
  },
  {
    "id": "chromosomes-22",
    "question": "Which of the following is NOT a component of a nucleosome core?",
    "options": [
      "H1 histone",
      "H2A histone",
      "H3 histone",
      "H4 histone"
    ],
    "correctAnswer": 0,
    "explanation": "The nucleosome core consists of an octamer of two molecules each of H2A, H2B, H3, and H4. The H1 histone is a linker histone that binds to the DNA where it enters and exits the nucleosome core, helping to stabilize higher-order packing."
  },
  {
    "id": "chromosomes-23",
    "question": "The specific location of a gene on a chromosome is called its:",
    "options": [
      "Allele",
      "Locus",
      "Variant",
      "Centromere"
    ],
    "correctAnswer": 1,
    "explanation": "A locus (plural: loci) is the specific, fixed physical position of a gene or other significant DNA sequence on a chromosome. For example, the gene for beta-globin is located on chromosome 11 at a specific locus."
  },
  {
    "id": "chromosomes-24",
    "question": "Which of the following statements about homologous chromosomes is TRUE?",
    "options": [
      "They are identical in DNA sequence.",
      "They are found in haploid cells.",
      "They pair up during meiosis.",
      "They are produced by DNA replication."
    ],
    "correctAnswer": 2,
    "explanation": "Homologous chromosomes (homologs) are a pair of chromosomes, one from each parent, that are similar in shape, size, and gene loci. They pair up and may exchange genetic material (crossing over) during prophase I of meiosis."
  },
  {
    "id": "chromosomes-25",
    "question": "The chemical composition of a chromosome includes:",
    "options": [
      "DNA only",
      "DNA and RNA",
      "DNA, RNA, and proteins",
      "Proteins and lipids"
    ],
    "correctAnswer": 2,
    "explanation": "Chromosomes are composed of DNA, histone proteins, non-histone proteins, and also contain a small amount of RNA associated with the structure and regulation of the chromosome."
  },
  {
    "id": "chromosomes-26",
    "question": "The function of the centromere is to:",
    "options": [
      "Protect the ends of the chromosome",
      "Be the site of rRNA synthesis",
      "Allow for proper segregation of chromosomes during cell division",
      "Initiate DNA replication"
    ],
    "correctAnswer": 2,
    "explanation": "The centromere's primary function is to ensure accurate chromosome segregation. It is the attachment point for spindle fibers via the kinetochore, which is essential for moving chromosomes to opposite poles during mitosis and meiosis."
  },
  {
    "id": "chromosomes-27",
    "question": "A person with Down syndrome has an extra copy of chromosome 21. This chromosomal abnormality is called:",
    "options": [
      "Monosomy",
      "Trisomy",
      "Triploidy",
      "Tetrasomy"
    ],
    "correctAnswer": 1,
    "explanation": "Trisomy is the condition of having three copies of a particular chromosome instead of the normal two. Trisomy 21 is the most common cause of Down syndrome."
  },
  {
    "id": "chromosomes-28",
    "question": "The histone proteins are rich in which amino acids that give them a positive charge?",
    "options": [
      "Acidic amino acids",
      "Basic amino acids (Lysine and Arginine)",
      "Non-polar amino acids",
      "Sulfur-containing amino acids"
    ],
    "correctAnswer": 1,
    "explanation": "Histones are rich in the basic (positively charged) amino acids lysine and arginine. This positive charge allows them to bind tightly to the negatively charged phosphate groups of DNA, facilitating packaging."
  },
  {
    "id": "chromosomes-29",
    "question": "During cell division, the replicated chromosomes appear as two identical:",
    "options": [
      "Homologous chromosomes",
      "Sister chromatids",
      "Daughter chromosomes",
      "Non-sister chromatids"
    ],
    "correctAnswer": 1,
    "explanation": "After DNA replication in S phase, each chromosome consists of two identical copies called sister chromatids. They are held together by cohesin proteins at the centromere until anaphase."
  },
  {
    "id": "chromosomes-30",
    "question": "The human X and Y chromosomes are collectively known as:",
    "options": [
      "Autosomes",
      "Sex chromosomes",
      "Homologous chromosomes",
      "Mitochondrial chromosomes"
    ],
    "correctAnswer": 1,
    "explanation": "The X and Y chromosomes are the sex chromosomes because they carry genes that determine the biological sex of an individual. The other 22 pairs are called autosomes."
  },
  
  {
    "id": "chromosomes-31",
    "question": "The 30-nanometer fiber in chromatin is stabilized by which histone protein?",
    "options": [
      "H1",
      "H2A",
      "H3",
      "H4"
    ],
    "correctAnswer": 0,
    "explanation": "The linker histone H1 plays a crucial role in the next level of packing beyond the nucleosome. It binds to the nucleosome and the linker DNA, helping to coil the 'beads-on-a-string' into a more compact 30nm fiber."
  },
  {
    "id": "chromosomes-32",
    "question": "Which of the following is a function of non-histone chromosomal proteins?",
    "options": [
      "Forming the core of the nucleosome",
      "Neutralizing the charge of DNA",
      "Scaffolding for chromosome structure and regulation of gene expression",
      "Adding telomeric repeats to chromosome ends"
    ],
    "correctAnswer": 2,
    "explanation": "Non-histone proteins are a diverse group that includes scaffolding proteins, DNA polymerase, repair enzymes, and transcription factors. They are involved in chromosome structure, DNA replication, transcription, and repair."
  },
  {
    "id": "chromosomes-33",
    "question": "A chromosome with a centromere very close to one end is classified as:",
    "options": [
      "Metacentric",
      "Submetacentric",
      "Acrocentric",
      "Telocentric"
    ],
    "correctAnswer": 2,
    "explanation": "Acrocentric chromosomes have a centromere located very near one end, resulting in one very long arm and one very short arm. In humans, chromosomes 13, 14, 15, 21, and 22 are acrocentric."
  },
  {
    "id": "chromosomes-34",
    "question": "The complete set of genetic material present in a cell or organism is called its:",
    "options": [
      "Karyotype",
      "Proteome",
      "Genome",
      "Transcriptome"
    ],
    "correctAnswer": 2,
    "explanation": "The genome is the entirety of an organism's hereditary information, encoded in its DNA (or RNA for some viruses). It includes both the genes and the non-coding sequences."
  },
  {
    "id": "chromosomes-35",
    "question": "The process by which homologous chromosomes exchange genetic material during meiosis is called:",
    "options": [
      "Crossing over",
      "Synapsis",
      "Cytokinesis",
      "Binary fission"
    ],
    "correctAnswer": 0,
    "explanation": "Crossing over (or recombination) is the exchange of genetic material between non-sister chromatids of homologous chromosomes during prophase I of meiosis. This increases genetic diversity."
  },
  {
    "id": "chromosomes-36",
    "question": "The Barr body in female mammalian cells is an example of:",
    "options": [
      "Euchromatin",
      "Facultative heterochromatin",
      "Constitutive heterochromatin",
      "A nucleosome"
    ],
    "correctAnswer": 1,
    "explanation": "A Barr body is an inactivated, condensed X chromosome. It is facultative heterochromatin because it is not permanently inactive; the same DNA is euchromatic and active in other cells (or in the other X chromosome in the same cell)."
  },
  {
    "id": "chromosomes-37",
    "question": "The number of chromosomes in a human gamete (sperm or egg) is:",
    "options": [
      "22",
      "23",
      "44",
      "46"
    ],
    "correctAnswer": 1,
    "explanation": "Gametes are haploid (n) cells. They contain half the number of chromosomes found in diploid somatic cells. In humans, the haploid number is 23."
  },
  {
    "id": "chromosomes-38",
    "question": "Which of the following statements about the Y chromosome is TRUE?",
    "options": [
      "It is larger than the X chromosome.",
      "It contains the SRY gene that triggers male development.",
      "It is present in two copies in female cells.",
      "It is highly gene-rich compared to the X chromosome."
    ],
    "correctAnswer": 1,
    "explanation": "The Y chromosome is much smaller than the X and contains far fewer genes. Its most critical gene is the SRY (Sex-determining Region Y) gene, which acts as a master switch to initiate the development of male characteristics."
  },
  {
    "id": "chromosomes-39",
    "question": "The 'beads-on-a-string' structure of chromatin has a diameter of approximately:",
    "options": [
      "2 nm",
      "11 nm",
      "30 nm",
      "700 nm"
    ],
    "correctAnswer": 1,
    "explanation": "The nucleosome core particle with DNA wrapped around it is about 11 nanometers in diameter. This is the first and most fundamental level of eukaryotic DNA packaging."
  },
  {
    "id": "chromosomes-40",
    "question": "The failure of chromosomes to separate properly during cell division is called:",
    "options": [
      "Translocation",
      "Non-disjunction",
      "Replication",
      "Transcription"
    ],
    "correctAnswer": 1,
    "explanation": "Non-disjunction is the failure of homologous chromosomes or sister chromatids to separate during meiosis or mitosis. This error leads to daughter cells with an abnormal number of chromosomes (aneuploidy)."
  },
  {
    "id": "chromosomes-41",
    "question": "Which of the following is a characteristic of constitutive heterochromatin?",
    "options": [
      "It is genetically active.",
      "It is found at the centromeres and telomeres.",
      "Its condensation state can change.",
      "It contains most of the actively transcribed genes."
    ],
    "correctAnswer": 1,
    "explanation": "Constitutive heterochromatin is permanently condensed and transcriptionally inactive. It is always found in the same locations, such as centromeres, telomeres, and other specific regions of chromosomes."
  },
  {
    "id": "chromosomes-42",
    "question": "The protein that holds sister chromatids together after DNA replication is:",
    "options": [
      "Histone",
      "Cohesin",
      "Kinetochore",
      "Telomerase"
    ],
    "correctAnswer": 1,
    "explanation": "Cohesin is a multi-protein complex that forms a ring around the two sister chromatids, holding them together from the time they are synthesized in S phase until anaphase, when it is cleaved to allow separation."
  },
  {
    "id": "chromosomes-43",
    "question": "A chromosome that loses its centromere will likely:",
    "options": [
      "Become more active in transcription",
      "Be unable to segregate properly during cell division",
      "Gain extra telomeres",
      "Replicate faster"
    ],
    "correctAnswer": 1,
    "explanation": "The centromere is essential for attachment to the spindle apparatus. An acentric chromosome (without a centromere) will not be drawn to either pole during cell division and will likely be lost, resulting in chromosomal abnormalities."
  },
  {
    "id": "chromosomes-44",
    "question": "The human genome is composed of approximately how many pairs of chromosomes?",
    "options": [
      "21",
      "22",
      "23",
      "46"
    ],
    "correctAnswer": 2,
    "explanation": "The human genome is organized into 23 pairs of chromosomes, for a total of 46 chromosomes in a diploid somatic cell. This includes 22 pairs of autosomes and 1 pair of sex chromosomes."
  },
  {
    "id": "chromosomes-45",
    "question": "The process of X-chromosome inactivation in female mammals involves the conversion of one X chromosome into:",
    "options": [
      "A nucleolus",
      "A Barr body",
      "A telomere",
      "A kinetochore"
    ],
    "correctAnswer": 1,
    "explanation": "X-chromosome inactivation is the process by which one of the two X chromosomes in female mammals is epigenetically silenced and condensed into a densely staining mass of heterochromatin known as a Barr body. This ensures dosage compensation."
  },
  {
    "id": "chromosomes-46",
    "question": "Which of the following is NOT a function of chromosomes?",
    "options": [
      "Storage of genetic information",
      "Accurate segregation of genetic material during cell division",
      "Execution of metabolic reactions for energy production",
      "Control of gene expression through packaging"
    ],
    "correctAnswer": 2,
    "explanation": "Chromosomes are involved in storing, replicating, expressing, and transmitting genetic information. Metabolic reactions for energy production (like glycolysis or the Krebs cycle) are carried out by enzymes in the cytoplasm and mitochondria, not by the chromosomes themselves."
  },
  {
    "id": "chromosomes-47",
    "question": "The 'arms' of a chromosome are defined relative to the position of the:",
    "options": [
      "Telomere",
      "Centromere",
      "Kinetochore",
      "Nucleosome"
    ],
    "correctAnswer": 1,
    "explanation": "The centromere divides the chromosome into two sections, called arms. The shorter arm is designated the 'p arm' (petit), and the longer arm is the 'q arm'."
  },
  {
    "id": "chromosomes-48",
    "question": "The chemical bonds that hold DNA to histone proteins in a nucleosome are primarily:",
    "options": [
      "Covalent bonds",
      "Hydrogen bonds",
      "Ionic bonds",
      "Peptide bonds"
    ],
    "correctAnswer": 2,
    "explanation": "The association is primarily ionic (electrostatic). The negatively charged phosphate groups of the DNA backbone are attracted to the positively charged amino acids (like lysine and arginine) on the surface of the histone octamer."
  },
  {
    "id": "chromosomes-49",
    "question": "A diploid cell contains:",
    "options": [
      "One set of chromosomes",
      "Two sets of chromosomes",
      "Four sets of chromosomes",
      "A variable number of chromosomes"
    ],
    "correctAnswer": 1,
    "explanation": "A diploid cell (2n) contains two complete sets of chromosomes, one set inherited from each parent. Somatic (body) cells in animals are diploid."
  },
  {
    "id": "chromosomes-50",
    "question": "The complex of proteins and DNA that makes up a chromosome is essential for:",
    "options": [
      "Preventing DNA from becoming tangled",
      "Fitting the long DNA molecule into the nucleus",
      "Regulating gene expression",
      "All of the above"
    ],
    "correctAnswer": 3,
    "explanation": "Chromosomal packaging serves multiple critical functions: it organizes and compacts the extremely long DNA molecules to fit within the nucleus, prevents them from becoming tangled, and helps regulate gene expression by controlling access to the DNA."
  },
  {
    "id": "chromosomes-51",
    "question": "Which of the following is a common feature of both prokaryotic and eukaryotic chromosomes?",
    "options": [
      "They are linear.",
      "They are composed of DNA and associated proteins.",
      "They are housed within a membrane-bound nucleus.",
      "They have multiple origins of replication."
    ],
    "correctAnswer": 1,
    "explanation": "Both prokaryotic and eukaryotic genetic material is composed of DNA associated with proteins. However, prokaryotic chromosomes are typically circular and not enclosed in a nucleus, while eukaryotic chromosomes are linear and are within a nucleus."
  },
  {
    "id": "chromosomes-52",
    "question": "The phenomenon where the expression of a gene depends on whether it is inherited from the mother or the father is called:",
    "options": [
      "X-inactivation",
      "Genomic imprinting",
      "Non-disjunction",
      "Crossing over"
    ],
    "correctAnswer": 1,
    "explanation": "Genomic imprinting is an epigenetic phenomenon where genes are expressed in a parent-of-origin-specific manner. The allele from one parent is silenced, and only the allele from the other parent is expressed."
  },
  {
    "id": "chromosomes-53",
    "question": "The most highly condensed form of chromatin is observed during which stage of mitosis?",
    "options": [
      "Prophase",
      "Metaphase",
      "Anaphase",
      "Telophase"
    ],
    "correctAnswer": 1,
    "explanation": "Chromosomes reach their maximum condensation during metaphase. This ensures they are sturdy and compact, allowing for their precise alignment at the metaphase plate and subsequent separation without breakage or tangling."
  },
  {
    "id": "chromosomes-54",
    "question": "A change in the structure of a chromosome, such as a deletion or inversion, is called a:",
    "options": [
      "Point mutation",
      "Chromosomal aberration",
      "Frame shift mutation",
      "Silent mutation"
    ],
    "correctAnswer": 1,
    "explanation": "Chromosomal aberrations (or mutations) are changes involving the structure or number of entire chromosomes or large segments of them. This includes deletions, duplications, inversions, and translocations."
  },
  {
    "id": "chromosomes-55",
    "question": "The nucleolus organizer region (NOR) is a part of the chromosome that contains genes for:",
    "options": [
      "Transfer RNA (tRNA)",
      "Ribosomal RNA (rRNA)",
      "Messenger RNA (mRNA)",
      "Telomerase RNA"
    ],
    "correctAnswer": 1,
    "explanation": "The nucleolus organizer region contains multiple copies of the genes that code for ribosomal RNA (rRNA). This is the region around which the nucleolus, the site of ribosome assembly, forms."
  },
  {
    "id": "chromosomes-56",
    "question": "The term 'sister chromatids' refers to:",
    "options": [
      "Homologous chromosomes",
      "The two identical copies of a duplicated chromosome",
      "The X and Y chromosomes",
      "Maternal and paternal chromosomes"
    ],
    "correctAnswer": 1,
    "explanation": "Sister chromatids are two identical copies of a single chromosome that are joined together at the centromere after DNA replication. They are eventually separated and distributed to daughter cells."
  },
  {
    "id": "chromosomes-57",
    "question": "The presence of a nucleosome affects gene expression by:",
    "options": [
      "Making the DNA more accessible to transcription factors",
      "Preventing RNA polymerase from binding to the DNA",
      "Actively promoting transcription initiation",
      "Splicing out introns from the mRNA"
    ],
    "correctAnswer": 1,
    "explanation": "Nucleosomes generally act as repressors of transcription. By wrapping DNA around them, they make the DNA sequence less accessible to the transcription machinery, such as RNA polymerase and transcription factors."
  },
  {
    "id": "chromosomes-58",
    "question": "In a karyotype, chromosomes are arranged and numbered based on their:",
    "options": [
      "Gene content",
      "Size and centromere position",
      "Time of replication",
      "Color"
    ],
    "correctAnswer": 1,
    "explanation": "In a standard karyotype, chromosomes are arranged in pairs from largest (chromosome 1) to smallest (chromosome 22), followed by the sex chromosomes. The position of the centromere is also a key identifying feature."
  },
  {
    "id": "chromosomes-59",
    "question": "The enzyme that adds DNA nucleotides to the ends of chromosomes during replication is:",
    "options": [
      "DNA polymerase",
      "Telomerase",
      "Helicase",
      "Ligase"
    ],
    "correctAnswer": 0,
    "explanation": "While telomerase provides the template for adding telomeric repeats, it is DNA polymerase that actually catalyzes the addition of nucleotides to the 3' end of the DNA strand, using the RNA template provided by telomerase."
  },
  {
    "id": "chromosomes-60",
    "question": "The 'primary constriction' visible on a chromosome indicates the location of the:",
    "options": [
      "Telomere",
      "Centromere",
      "Nucleolar organizer",
      "Kinetochore"
    ],
    "correctAnswer": 1,
    "explanation": "The centromere appears as a primary constriction, a pinched-in region where the two sister chromatids are most tightly connected. This is the region that is attached to the spindle fibers."
  },
  {
    "id": "chromosomes-61",
    "question": "Which of the following is a key difference between mitosis and meiosis in terms of chromosomes?",
    "options": [
      "Mitosis produces haploid cells; meiosis produces diploid cells.",
      "In meiosis, homologous chromosomes pair up and cross over; in mitosis, they do not.",
      "DNA replication occurs before meiosis but not before mitosis.",
      "Sister chromatids separate in meiosis I and homologous chromosomes separate in meiosis II."
    ],
    "correctAnswer": 1,
    "explanation": "A key event in prophase I of meiosis is synapsis, where homologous chromosomes pair up tightly, forming a tetrad. This allows for crossing over between non-sister chromatids. This pairing does not occur in mitosis."
  },
  {
    "id": "chromosomes-62",
    "question": "The concept that genes are located on chromosomes is known as the:",
    "options": [
      "Cell Theory",
      "Chromosomal Theory of Inheritance",
      "Theory of Evolution",
      "Central Dogma"
    ],
    "correctAnswer": 1,
    "explanation": "The Chromosomal Theory of Inheritance, first proposed by Walter Sutton and Theodor Boveri, states that genes are located on specific loci on chromosomes and that the behavior of chromosomes during meiosis accounts for Mendel's laws of inheritance."
  },
  {
    "id": "chromosomes-63",
    "question": "A person with Klinefelter syndrome has the sex chromosome constitution:",
    "options": [
      "XO",
      "XXY",
      "XYY",
      "XXX"
    ],
    "correctAnswer": 1,
    "explanation": "Klinefelter syndrome is a condition in males caused by the presence of an extra X chromosome, resulting in a 47,XXY karyotype. It is an example of aneuploidy of the sex chromosomes."
  },
  {
    "id": "chromosomes-64",
    "question": "The protein that protects telomeres from being recognized as DNA damage and repaired is:",
    "options": [
      "Cohesin",
      "Shelterin",
      "Histone",
      "Kinetochore"
    ],
    "correctAnswer": 1,
    "explanation": "The shelterin complex is a group of six proteins that specifically bind to telomeric DNA. They form a protective 'cap' that prevents the chromosome ends from being mistakenly identified as double-strand breaks and triggering a DNA damage response."
  },
  {
    "id": "chromosomes-65",
    "question": "The human chromosomes that are not sex chromosomes are called:",
    "options": [
      "Allosomes",
      "Autosomes",
      "Heterochromosomes",
      "Metacentric chromosomes"
    ],
    "correctAnswer": 1,
    "explanation": "Autosomes are chromosomes that are not involved in sex determination. In humans, the 22 pairs of chromosomes that are identical in males and females are autosomes. The 23rd pair are the sex chromosomes (allosomes)."
  },
  {
    "id": "chromosomes-66",
    "question": "The process of DNA replication results in each chromosome consisting of:",
    "options": [
      "One chromatid",
      "Two sister chromatids",
      "Two homologous chromosomes",
      "Four daughter chromosomes"
    ],
    "correctAnswer": 1,
    "explanation": "During the S phase of the cell cycle, each chromosome is replicated. After replication, each chromosome is composed of two identical DNA molecules, each called a chromatid, which are joined at the centromere."
  },
  {
    "id": "chromosomes-67",
    "question": "The specific banding patterns seen on stained chromosomes (G-banding) are caused by:",
    "options": [
      "Differences in gene density and base composition",
      "The presence of telomeres",
      "The location of the centromere",
      "The number of nucleosomes"
    ],
    "correctAnswer": 0,
    "explanation": "G-bands (Giemsa bands) are dark staining regions that are rich in A-T base pairs and are more condensed (heterochromatic). The light bands are rich in G-C base pairs, less condensed (euchromatic), and more gene-rich. This pattern is unique to each chromosome."
  },
  {
    "id": "chromosomes-68",
    "question": "A chromosome that has been broken and has lost a segment has undergone a:",
    "options": [
      "Duplication",
      "Deletion",
      "Inversion",
      "Translocation"
    ],
    "correctAnswer": 1,
    "explanation": "A deletion is a mutation where a part of a chromosome is lost. This can result from errors in meiosis, or from breakage due to mutagens. Deletions often cause serious genetic disorders due to the loss of multiple genes."
  },
  {
    "id": "chromosomes-69",
    "question": "The fundamental repeating unit of chromatin is the:",
    "options": [
      "Centromere",
      "Nucleosome",
      "Telomere",
      "Kinetochore"
    ],
    "correctAnswer": 1,
    "explanation": "The nucleosome is the basic structural unit of chromatin. It consists of ~146 base pairs of DNA wrapped around an octamer of histone proteins. This repeating unit is the first level of DNA compaction."
  },
  {
    "id": "chromosomes-70",
    "question": "The term 'ploidy' refers to the:",
    "options": [
      "Size of chromosomes",
      "Number of sets of chromosomes in a cell",
      "Position of the centromere",
      "Level of chromatin condensation"
    ],
    "correctAnswer": 1,
    "explanation": "Ploidy is the number of complete sets of chromosomes in a cell. Haploid (n) has one set, diploid (2n) has two sets, triploid (3n) has three sets, etc. Somatic human cells are diploid, while gametes are haploid."
  },
  {
    "id": "chromosomes-71",
    "question": "Which of the following is a potential consequence of a translocation?",
    "options": [
      "A gene may be placed next to a new regulatory sequence, altering its expression.",
      "The chromosome will lose its telomeres.",
      "The centromere will be duplicated.",
      "The nucleosomes will disassemble."
    ],
    "correctAnswer": 0,
    "explanation": "In a translocation, a piece of one chromosome breaks off and attaches to another chromosome. This can place a gene into a new chromosomal environment, potentially bringing it under the control of different regulatory elements (e.g., strong enhancers), which can lead to its overexpression and diseases like cancer."
  },
  {
    "id": "chromosomes-72",
    "question": "The histone code refers to:",
    "options": [
      "The DNA sequence that codes for histone proteins",
      "The specific combination of chemical modifications on histone tails",
      "The number of histones in a nucleosome",
      "The ratio of histone H1 to core histones"
    ],
    "correctAnswer": 1,
    "explanation": "The histone code is a hypothesis that specific combinations of covalent modifications (e.g., acetylation, methylation, phosphorylation) on the tails of histone proteins influence chromatin structure and gene expression by recruiting other proteins."
  },
  {
    "id": "chromosomes-73",
    "question": "A cell that contains only one set of chromosomes is described as:",
    "options": [
      "Diploid",
      "Haploid",
      "Polyploid",
      "Aneuploid"
    ],
    "correctAnswer": 1,
    "explanation": "A haploid cell has a single set of unpaired chromosomes. In humans, gametes (sperm and egg cells) are haploid, containing 23 chromosomes."
  },
  {
    "id": "chromosomes-74",
    "question": "The structure that ensures each new cell receives one copy of each chromosome during cell division is the:",
    "options": [
      "Nucleolus",
      "Spindle apparatus",
      "Nuclear envelope",
      "Endoplasmic reticulum"
    ],
    "correctAnswer": 1,
    "explanation": "The mitotic spindle, composed of microtubules, is responsible for moving and segregating the chromosomes. It attaches to the kinetochores on the centromeres and pulls the sister chromatids apart to opposite poles of the cell."
  },
  {
    "id": "chromosomes-75",
    "question": "The chemical composition of a telomere is:",
    "options": [
      "A protein cap",
      "A repetitive non-coding DNA sequence",
      "A cluster of rRNA genes",
      "A region of highly active genes"
    ],
    "correctAnswer": 1,
    "explanation": "Telomeres consist of hundreds to thousands of repeats of a short, non-coding DNA sequence (TTAGGG in vertebrates). This DNA sequence is bound by the shelterin protein complex which forms the protective cap."
  },
  {
    "id": "chromosomes-76",
    "question": "The condition of having an abnormal number of chromosomes is called:",
    "options": [
      "Polyploidy",
      "Aneuploidy",
      "Haploidy",
      "Diploidy"
    ],
    "correctAnswer": 1,
    "explanation": "Aneuploidy is the condition where a cell has an number of chromosomes that is not an exact multiple of the haploid number. Examples include trisomy (e.g., Down syndrome - three copies of chromosome 21) and monosomy (e.g., Turner syndrome - one X chromosome)."
  },
  {
    "id": "chromosomes-77",
    "question": "The function of the nucleosome is to:",
    "options": [
      "Initiate DNA replication",
      "Package DNA into a more compact form",
      "Serve as the attachment site for the spindle",
      "Protect the ends of chromosomes"
    ],
    "correctAnswer": 1,
    "explanation": "The primary function of the nucleosome is to package the long DNA molecule into a more compact, organized, and manageable form that can fit within the nucleus. This is the first order of DNA packaging."
  },
  {
    "id": "chromosomes-78",
    "question": "In which of the following cells would you expect to find highly active telomerase?",
    "options": [
      "Adult nerve cells",
      "Adult muscle cells",
      "Germ cells (sperm and egg precursors)",
      "Red blood cells"
    ],
    "correctAnswer": 2,
    "explanation": "Telomerase is highly active in germ cells, stem cells, and certain immune cells. This ensures that the chromosomes in gametes have long telomeres, which is crucial for the viability of the offspring and for maintaining the germline."
  },
  {
    "id": "chromosomes-79",
    "question": "The short arm of a chromosome is denoted as the:",
    "options": [
      "p arm",
      "q arm",
      "s arm",
      "r arm"
    ],
    "correctAnswer": 0,
    "explanation": "By convention, the shorter arm of a chromosome is called the 'p arm' (from the French 'petit', meaning small). The longer arm is called the 'q arm' (simply the next letter in the alphabet)."
  },
  {
    "id": "chromosomes-80",
    "question": "A gene's position on a chromosome is most accurately called its:",
    "options": [
      "Allele",
      "Locus",
      "Variant",
      "Homolog"
    ],
    "correctAnswer": 1,
    "explanation": "A locus is the specific physical location of a gene or other DNA sequence on a chromosome, like a specific address. For example, the locus of the ABO gene for blood group is on chromosome 9."
  },
  {
    "id": "chromosomes-81",
    "question": "The structure that holds two homologous chromosomes together during prophase I of meiosis is the:",
    "options": [
      "Kinetochore",
      "Synaptonemal complex",
      "Centromere",
      "Telomere"
    ],
    "correctAnswer": 1,
    "explanation": "The synaptonemal complex is a protein structure that forms between homologous chromosomes during prophase I of meiosis. It zips them together, facilitating synapsis and enabling crossing over to occur."
  },
  {
    "id": "chromosomes-82",
    "question": "Histone acetylation generally leads to:",
    "options": [
      "Increased chromatin condensation and gene silencing",
      "Decreased chromatin condensation and increased gene expression",
      "Formation of the 30nm fiber",
      "Recruitment of DNA methyltransferases"
    ],
    "correctAnswer": 1,
    "explanation": "Acetylation of lysine residues on histone tails neutralizes their positive charge, reducing the affinity between histones and DNA. This leads to a more relaxed chromatin structure (euchromatin) that is more accessible for transcription, generally promoting gene expression."
  },
  {
    "id": "chromosomes-83",
    "question": "A human cell in G1 phase of the cell cycle has:",
    "options": [
      "23 chromosomes, each with one chromatid",
      "23 chromosomes, each with two chromatids",
      "46 chromosomes, each with one chromatid",
      "46 chromosomes, each with two chromatids"
    ],
    "correctAnswer": 2,
    "explanation": "In the G1 phase (before S phase), the cell has not yet replicated its DNA. Therefore, it has its full diploid number of 46 chromosomes, and each chromosome consists of a single chromatid."
  },
  {
    "id": "chromosomes-84",
    "question": "The chromosomal abnormality that results from the exchange of segments between non-homologous chromosomes is a:",
    "options": [
      "Deletion",
      "Inversion",
      "Translocation",
      "Duplication"
    ],
    "correctAnswer": 2,
    "explanation": "A translocation occurs when a segment of one chromosome is transferred to a non-homologous chromosome. A reciprocal translocation involves an exchange of segments between two different chromosomes."
  },
  {
    "id": "chromosomes-85",
    "question": "The centromere is composed primarily of:",
    "options": [
      "Euchromatin",
      "A unique type of DNA called satellite DNA",
      "Ribosomal RNA genes",
      "Telomeric repeats"
    ],
    "correctAnswer": 1,
    "explanation": "Centromeric regions are composed of long, tandemly repeated sequences of DNA known as satellite DNA. This DNA does not code for proteins but is essential for kinetochore assembly and chromosome segregation."
  },
  {
    "id": "chromosomes-86",
    "question": "The function of the kinetochore is to:",
    "options": [
      "Hold sister chromatids together",
      "Protect chromosome ends",
      "Attach the chromosome to the spindle microtubules",
      "Package DNA into nucleosomes"
    ],
    "correctAnswer": 2,
    "explanation": "The kinetochore is a massive protein complex that assembles on the centromere. Its primary function is to serve as the attachment site for microtubules of the mitotic spindle, which pull the chromosomes apart during cell division."
  },
  {
    "id": "chromosomes-87",
    "question": "A human cell in G2 phase of the cell cycle has:",
    "options": [
      "23 chromosomes, each with one chromatid",
      "23 chromosomes, each with two chromatids",
      "46 chromosomes, each with one chromatid",
      "46 chromosomes, each with two chromatids"
    ],
    "correctAnswer": 3,
    "explanation": "After DNA replication in S phase, each of the 46 chromosomes has been duplicated. In G2 phase, the cell still has 46 chromosomes, but each now consists of two identical sister chromatids joined at the centromere."
  },
  {
    "id": "chromosomes-88",
    "question": "The phenomenon where a piece of one chromosome breaks off and attaches to another chromosome is called:",
    "options": [
      "Deletion",
      "Inversion",
      "Translocation",
      "Non-disjunction"
    ],
    "correctAnswer": 2,
    "explanation": "Translocation is a type of chromosomal aberration where a segment from one chromosome is detached and becomes attached to a different, non-homologous chromosome. This can disrupt gene function or regulation."
  },
  {
    "id": "chromosomes-89",
    "question": "The main reason why chromosomes condense during cell division is to:",
    "options": [
      "Make them more transcriptionally active",
      "Prevent DNA replication",
      "Facilitate their movement and prevent entanglement",
      "Protect them from mutation"
    ],
    "correctAnswer": 2,
    "explanation": "Condensation ensures that the long, delicate DNA molecules become compact, robust structures. This prevents the chromosomes from becoming tangled or broken during the intricate process of being pulled apart and distributed to daughter cells."
  },
  {
    "id": "chromosomes-90",
    "question": "The number of chromosomes in a fertilized human egg (zygote) is:",
    "options": [
      "22",
      "23",
      "44",
      "46"
    ],
    "correctAnswer": 3,
    "explanation": "A zygote is formed by the fusion of two haploid gametes (sperm with 23 chromosomes and egg with 23 chromosomes). This restores the diploid number of 46 chromosomes in the resulting zygote."
  },
  {
    "id": "chromosomes-91",
    "question": "A chromosome that has its centromere at the very end is called:",
    "options": [
      "Metacentric",
      "Submetacentric",
      "Acrocentric",
      "Telocentric"
    ],
    "correctAnswer": 3,
    "explanation": "Telocentric chromosomes have the centromere at the very end of the chromosome. It is important to note that true telocentric chromosomes are not found in human karyotypes; human chromosomes are metacentric, submetacentric, or acrocentric."
  },
  {
    "id": "chromosomes-92",
    "question": "The role of the centromere in cell division is to:",
    "options": [
      "Initiate transcription",
      "Serve as the site for spindle attachment",
      "Protect the chromosome ends",
      "Package DNA into chromatin"
    ],
    "correctAnswer": 1,
    "explanation": "The centromere's primary role is in cell division. It is the site where the kinetochore assembles, which in turn is the attachment point for spindle microtubules. This is essential for the movement and segregation of chromosomes."
  },
  {
    "id": "chromosomes-93",
    "question": "The term 'chromatin' refers to:",
    "options": [
      "The DNA only within the nucleus",
      "The DNA and its associated proteins",
      "The condensed chromosomes during mitosis",
      "The region where chromosomes are attached to the spindle"
    ],
    "correctAnswer": 1,
    "explanation": "Chromatin is the complex of DNA, histone proteins, non-histone proteins, and RNA found within the nucleus of a eukaryotic cell. It is the material from which chromosomes are formed."
  },
  {
    "id": "chromosomes-94",
    "question": "A person with Turner syndrome has the sex chromosome constitution:",
    "options": [
      "XO",
      "XXY",
      "XYY",
      "XXX"
    ],
    "correctAnswer": 0,
    "explanation": "Turner syndrome is a condition in females caused by the complete or partial absence of one X chromosome, resulting in a 45,X karyotype. It is an example of monosomy."
  },
  {
    "id": "chromosomes-95",
    "question": "The main function of histone proteins is to:",
    "options": [
      "Catalyze DNA replication",
      "Package and order DNA into nucleosomes",
      "Form the spindle apparatus",
      "Act as transcription factors"
    ],
    "correctAnswer": 1,
    "explanation": "The primary function of histone proteins is structural. They act as spools around which DNA winds to form nucleosomes, which compact the DNA and help regulate access to the genetic information."
  },
  {
    "id": "chromosomes-96",
    "question": "The structure of a chromosome is maintained by interactions between:",
    "options": [
      "DNA and histone proteins",
      "RNA and lipid molecules",
      "Carbohydrates and nucleic acids",
      "Water and ions"
    ],
    "correctAnswer": 0,
    "explanation": "The structure of a chromosome is primarily maintained by the ionic interactions between the negatively charged phosphate groups of DNA and the positively charged amino acids (e.g., lysine, arginine) on histone proteins, forming nucleosomes and higher-order structures."
  },
  {
    "id": "chromosomes-97",
    "question": "The process of crossing over contributes to genetic variation by:",
    "options": [
      "Creating new alleles",
      "Reassorting alleles between homologous chromosomes",
      "Increasing the rate of mutation",
      "Decreasing the number of chromosomes"
    ],
    "correctAnswer": 1,
    "explanation": "Crossing over, or recombination, occurs between non-sister chromatids of homologous chromosomes during meiosis. It exchanges blocks of genes, creating new combinations of alleles on a chromosome that differ from those in either parent."
  },
  {
    "id": "chromosomes-98",
    "question": "The chemical composition of the chromosome backbone includes:",
    "options": [
      "Lipids",
      "Double-stranded DNA",
      "Single-stranded RNA",
      "Polysaccharides"
    ],
    "correctAnswer": 1,
    "explanation": "The fundamental component of a chromosome is a single, continuous, double-stranded DNA molecule. This DNA molecule forms the backbone to which the various packaging and regulatory proteins are attached."
  },
  {
    "id": "chromosomes-99",
    "question": "The function of telomeres can be compared to:",
    "options": [
      "A zipper that holds chromosomes together",
      "The engine that drives chromosome movement",
      "The aglet on a shoelace that prevents fraying",
      "A factory that produces ribosomal subunits"
    ],
    "correctAnswer": 2,
    "explanation": "Telomeres are often analogized to the plastic aglets at the ends of shoelaces. Just as an aglet prevents the lace from fraying and falling apart, telomeres protect the ends of chromosomes from deterioration and from being mistaken for broken DNA."
  },
  {
    "id": "chromosomes-100",
    "question": "Which of the following best describes the relationship between genes and chromosomes?",
    "options": [
      "A chromosome is a single gene.",
      "Genes are located on chromosomes.",
      "Chromosomes are made of genes.",
      "Genes and chromosomes are the same thing."
    ],
    "correctAnswer": 1,
    "explanation": "Genes are segments of DNA that code for functional products. Chromosomes are much larger structures that are made up of DNA and proteins; they contain many genes arranged in a linear sequence along their length, as well as non-coding DNA."
  },
  

]