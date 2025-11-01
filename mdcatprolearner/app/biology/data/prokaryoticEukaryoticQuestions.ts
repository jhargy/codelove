export interface Question {
  id: string;
  question: string;
  options: string[];
  correctAnswer: number;
  explanation: string;
}

export const prokaryoticEukaryoticQuestions: Question[] = [
 
  {
    "id": "proc-euk-compare-1",
    "question": "Which of the following is a key structural difference between prokaryotic and eukaryotic cells?",
    "options": [
      "Presence of a cell membrane",
      "Presence of ribosomes",
      "Presence of a true, membrane-bound nucleus",
      "Presence of genetic material (DNA)"
    ],
    "correctAnswer": 2,
    "explanation": "The most fundamental distinction is that eukaryotic cells have a true nucleus enclosed in a double membrane, while prokaryotic cells have a nucleoid region where DNA is located, but it is not membrane-bound."
  },
  {
    "id": "proc-euk-compare-2",
    "question": "In which type of cell is the genetic material typically organized as a single, circular chromosome?",
    "options": [
      "Eukaryotic animal cells",
      "Eukaryotic plant cells",
      "Prokaryotic cells",
      "Both prokaryotic and eukaryotic cells"
    ],
    "correctAnswer": 2,
    "explanation": "Prokaryotic cells typically have a single, circular chromosome located in the nucleoid. Eukaryotic cells have multiple linear chromosomes housed within the nucleus."
  },
  {
    "id": "proc-euk-compare-3",
    "question": "Which of the following organelles is found in eukaryotic cells but is absent in prokaryotic cells?",
    "options": [
      "Ribosomes",
      "Mitochondria",
      "Cytoplasm",
      "Cell membrane"
    ],
    "correctAnswer": 1,
    "explanation": "Membrane-bound organelles like mitochondria, the endoplasmic reticulum, Golgi apparatus, and chloroplasts are defining features of eukaryotic cells and are completely absent in prokaryotes."
  },
  {
    "id": "proc-euk-compare-4",
    "question": "The size range for most prokaryotic cells is:",
    "options": [
      "1-10 μm",
      "10-100 μm",
      "0.1-1.0 μm",
      "100-1000 μm"
    ],
    "correctAnswer": 0,
    "explanation": "Prokaryotic cells are generally much smaller, typically 0.1-5.0 μm in diameter. Eukaryotic cells are larger, typically 10-100 μm."
  },
  {
    "id": "proc-euk-compare-5",
    "question": "Ribosomes in prokaryotic cells are:",
    "options": [
      "80S",
      "70S",
      "60S",
      "50S"
    ],
    "correctAnswer": 1,
    "explanation": "A key biochemical difference is the size of ribosomes. Prokaryotes have 70S ribosomes (composed of 50S and 30S subunits), while eukaryotes have larger 80S ribosomes (composed of 60S and 40S subunits)."
  },
  {
    "id": "proc-euk-compare-6",
    "question": "The complex cell wall containing peptidoglycan is a characteristic feature of:",
    "options": [
      "Animal cells",
      "Plant cells",
      "Fungal cells",
      "Bacterial cells"
    ],
    "correctAnswer": 3,
    "explanation": "Many prokaryotes, like bacteria, have a cell wall made of peptidoglycan. Eukaryotic cells have different wall compositions (e.g., cellulose in plants, chitin in fungi) or no wall at all (animal cells)."
  },
  {
    "id": "proc-euk-compare-7",
    "question": "Which cellular process can be performed by both prokaryotic and eukaryotic cells?",
    "options": [
      "Mitosis",
      "Meiosis",
      "Transcription and Translation",
      "Endocytosis"
    ],
    "correctAnswer": 2,
    "explanation": "The central dogma of biology (DNA → RNA → Protein) occurs in all cells. However, in prokaryotes, transcription and translation are coupled and occur in the cytoplasm, while in eukaryotes they are separated by the nuclear envelope."
  },
  {
    "id": "proc-euk-compare-8",
    "question": "The flagella of prokaryotic cells:",
    "options": [
      "Are composed of microtubules in a 9+2 arrangement",
      "Are used for cell division",
      "Are composed of the protein flagellin",
      "Are identical in structure to eukaryotic flagella"
    ],
    "correctAnswer": 2,
    "explanation": "This is a key structural difference. Prokaryotic flagella are made of flagellin and rotate like a propeller. Eukaryotic flagella are membrane-bound extensions containing microtubules (9+2 array) and move in a whip-like motion."
  },
  {
    "id": "proc-euk-compare-9",
    "question": "Which of the following is a feature of BOTH prokaryotic and eukaryotic cells?",
    "options": [
      "Endoplasmic reticulum",
      "Golgi apparatus",
      "Plasma membrane",
      "Lysosomes"
    ],
    "correctAnswer": 2,
    "explanation": "All cells, without exception, are surrounded by a plasma membrane (cell membrane) that regulates the passage of materials. The other options are membrane-bound organelles unique to eukaryotes."
  },
  {
    "id": "proc-euk-compare-10",
    "question": "The region in a prokaryotic cell where the chromosomal DNA is concentrated is called the:",
    "options": [
      "Nucleus",
      "Nucleolus",
      "Nucleoid",
      "Nuclear pore"
    ],
    "correctAnswer": 2,
    "explanation": "The nucleoid is an irregularly-shaped region within a prokaryote that holds the circular DNA chromosome. It is not separated from the rest of the cytoplasm by a membrane."
  },
  {
    "id": "proc-euk-compare-11",
    "question": "Which type of cell division is typical for prokaryotes?",
    "options": [
      "Mitosis",
      "Meiosis",
      "Binary fission",
      "Budding"
    ],
    "correctAnswer": 2,
    "explanation": "Prokaryotes reproduce asexually through binary fission, a process where the cell replicates its DNA and simply divides into two identical daughter cells. Mitosis and meiosis are forms of nuclear division in eukaryotes."
  },
  {
    "id": "proc-euk-compare-12",
    "question": "Extra-chromosomal, small circular DNA molecules found in some prokaryotes are called:",
    "options": [
      "Histones",
      "Plasmids",
      "Ribosomes",
      "Lysosomes"
    ],
    "correctAnswer": 1,
    "explanation": "Plasmids are small, circular, double-stranded DNA molecules that are physically separate from chromosomal DNA. They often carry genes for antibiotic resistance and are important tools in genetic engineering."
  },
  {
    "id": "proc-euk-compare-13",
    "question": "The endosymbiotic theory best explains the origin of which eukaryotic organelles?",
    "options": [
      "Nucleus and endoplasmic reticulum",
      "Golgi apparatus and lysosomes",
      "Mitochondria and chloroplasts",
      "Vacuoles and vesicles"
    ],
    "correctAnswer": 2,
    "explanation": "The endosymbiotic theory proposes that mitochondria and chloroplasts evolved from free-living prokaryotes that were engulfed by a larger host cell. Evidence includes their own DNA, double membranes, and 70S ribosomes."
  },
  {
    "id": "proc-euk-compare-14",
    "question": "Which of the following is a compartmentalized structure found only in eukaryotic cells?",
    "options": [
      "Cytosol",
      "Ribosome",
      "Cytoskeleton",
      "Golgi apparatus"
    ],
    "correctAnswer": 3,
    "explanation": "Compartmentalization is a key feature of eukaryotes. The Golgi apparatus is a membrane-bound organelle that modifies, sorts, and packages proteins. While prokaryotes have a cytosol, ribosomes, and a primitive cytoskeleton, they lack such complex internal membranes."
  },
  {
    "id": "proc-euk-compare-15",
    "question": "The process of phagocytosis, where a cell engulfs large particles, is a characteristic of:",
    "options": [
      "Prokaryotic cells",
      "Eukaryotic cells",
      "Both prokaryotic and eukaryotic cells",
      "Neither type of cell"
    ],
    "correctAnswer": 1,
    "explanation": "Phagocytosis requires a flexible cell membrane and a cytoskeleton to form pseudopodia. This is a capability of certain eukaryotic cells (e.g., white blood cells). Prokaryotes are too small and rigid to perform this."
  },
  {
    "id": "proc-euk-compare-16",
    "question": "In eukaryotic cells, the DNA is complexed with proteins called histones to form:",
    "options": [
      "Plasmids",
      "Chromatin",
      "Nucleoids",
      "Ribosomes"
    ],
    "correctAnswer": 1,
    "explanation": "Eukaryotic DNA is linear and wound around histone proteins to form chromatin, which condenses into chromosomes during cell division. Prokaryotic DNA is naked and not associated with histones."
  },
  {
    "id": "proc-euk-compare-17",
    "question": "Which of the following statements about ribosomes is correct?",
    "options": [
      "Eukaryotic ribosomes are larger than prokaryotic ribosomes.",
      "Prokaryotic ribosomes are only found attached to the rough ER.",
      "The antibiotic streptomycin has no effect on prokaryotic 70S ribosomes.",
      "Eukaryotic ribosomes are 70S, with 50S and 30S subunits."
    ],
    "correctAnswer": 0,
    "explanation": "Eukaryotic ribosomes (80S) are larger than prokaryotic ribosomes (70S). This size difference is why some antibiotics can target bacterial (70S) ribosomes without harming the host's eukaryotic (80S) ribosomes."
  },
  {
    "id": "proc-euk-compare-18",
    "question": "A mesosome in a prokaryotic cell is an:",
    "options": [
      "Organelle for photosynthesis",
      "Infolding of the plasma membrane",
      "Extra-chromosomal DNA element",
      "Type of ribosome"
    ],
    "correctAnswer": 1,
    "explanation": "Mesosomes are infoldings of the plasma membrane in prokaryotes. They are involved in cellular processes like respiration, cell division, and DNA replication, increasing the surface area for these activities."
  },
  {
    "id": "proc-euk-compare-19",
    "question": "The cytoskeleton, a network of protein filaments important for cell shape and division, is:",
    "options": [
      "Well-developed only in prokaryotes",
      "Well-developed only in eukaryotes",
      "Absent in both cell types",
      "Identical in structure in both cell types"
    ],
    "correctAnswer": 1,
    "explanation": "Eukaryotes have a complex and highly developed cytoskeleton made of microtubules, microfilaments, and intermediate filaments. Prokaryotes have primitive cytoskeletal elements, but they are not as complex or diverse."
  },
  {
    "id": "proc-euk-compare-20",
    "question": "Which kingdom of life is exclusively composed of prokaryotic organisms?",
    "options": [
      "Protista",
      "Fungi",
      "Monera (or Bacteria/Archaea)",
      "Plantae"
    ],
    "correctAnswer": 2,
    "explanation": "The domains Bacteria and Archaea (formerly grouped as Kingdom Monera) consist solely of prokaryotic organisms. All other kingdoms (Protista, Fungi, Plantae, Animalia) are eukaryotic."
  },
  {
    "id": "proc-euk-compare-21",
    "question": "The process of converting sunlight into chemical energy (photosynthesis) occurs:",
    "options": [
      "Only in eukaryotic chloroplasts",
      "Only in prokaryotic cyanobacteria",
      "In both prokaryotic and eukaryotic cells",
      "Neither, it only occurs in plants"
    ],
    "correctAnswer": 2,
    "explanation": "Photosynthesis is not limited by cell type. Some prokaryotes (e.g., cyanobacteria) perform photosynthesis using thylakoid membranes within their cytoplasm, while eukaryotes (plants, algae) use specialized chloroplasts."
  },
  {
    "id": "proc-euk-compare-22",
    "question": "The glycocalyx, a sticky outer layer, is more commonly associated and well-defined in:",
    "options": [
      "Eukaryotic animal cells",
      "Eukaryotic plant cells",
      "Prokaryotic cells",
      "All cells equally"
    ],
    "correctAnswer": 2,
    "explanation": "Many prokaryotes have a glycocalyx, which can be a loose slime layer or a firm capsule. This layer helps them adhere to surfaces and provides protection. In eukaryotes, it is more of a carbohydrate coat on animal cells."
  },
  {
    "id": "proc-euk-compare-23",
    "question": "Which of the following is a key difference in gene regulation between prokaryotes and eukaryotes?",
    "options": [
      "Prokaryotes have introns and exons; eukaryotes do not.",
      "Eukaryotes have operons for coordinated gene expression; prokaryotes do not.",
      "In eukaryotes, transcription and translation are spatially separated.",
      "Prokaryotes undergo extensive RNA processing after transcription."
    ],
    "correctAnswer": 2,
    "explanation": "In eukaryotes, transcription occurs in the nucleus and translation occurs in the cytoplasm. This allows for RNA processing (splicing, capping, tailing). In prokaryotes, translation can begin on mRNA while it is still being transcribed."
  },
  {
    "id": "proc-euk-compare-24",
    "question": "The organelle responsible for intracellular digestion in eukaryotic cells is the:",
    "options": [
      "Peroxisome",
      "Lysosome",
      "Vacuole",
      "Golgi apparatus"
    ],
    "correctAnswer": 1,
    "explanation": "Lysosomes are membrane-bound organelles containing digestive enzymes. They break down macromolecules, old organelles, and pathogens. Prokaryotes lack such specialized digestive organelles."
  },
  {
    "id": "proc-euk-compare-25",
    "question": "Which structure is primarily involved in protein synthesis in ALL living cells?",
    "options": [
      "Mitochondria",
      "Nucleus",
      "Ribosomes",
      "Endoplasmic Reticulum"
    ],
    "correctAnswer": 2,
    "explanation": "Ribosomes are universal cellular structures found in the cytoplasm of all cells (prokaryotes and eukaryotes) and on the RER of eukaryotes. They are essential for translating mRNA into proteins."
  },
  {
    "id": "proc-euk-compare-26",
    "question": "The presence of 80S ribosomes is a characteristic of:",
    "options": [
      "Bacteria",
      "Archaea",
      "Cyanobacteria",
      "Human cells"
    ],
    "correctAnswer": 3,
    "explanation": "80S ribosomes are found in the cytoplasm of eukaryotic cells. All options A, B, and C are types of prokaryotes, which possess 70S ribosomes."
  },
  {
    "id": "proc-euk-compare-27",
    "question": "Which of the following is NOT a feature of prokaryotic cells?",
    "options": [
      "Peptidoglycan cell wall",
      "Membrane-bound organelles",
      "Circular DNA",
      "70S ribosomes"
    ],
    "correctAnswer": 1,
    "explanation": "The defining absence in prokaryotes is membrane-bound organelles. They have a cell wall (often with peptidoglycan), circular DNA, and 70S ribosomes, but these are not enclosed within internal membranes."
  },
  {
    "id": "proc-euk-compare-28",
    "question": "The genetic material in a prokaryotic cell is:",
    "options": [
      "Linear DNA with histones",
      "Circular DNA with histones",
      "Linear DNA without histones",
      "Circular DNA without histones"
    ],
    "correctAnswer": 3,
    "explanation": "Prokaryotic DNA is typically a single, circular chromosome that is 'naked,' meaning it is not associated with histone proteins. Eukaryotic DNA is linear and complexed with histones."
  },
  {
    "id": "proc-euk-compare-29",
    "question": "Cilia and flagella used for locomotion in eukaryotic cells have a characteristic:",
    "options": [
      "9+0 arrangement of microtubules",
      "9+2 arrangement of microtubules",
      "Structure made of flagellin",
      "Simple rotary motor mechanism"
    ],
    "correctAnswer": 1,
    "explanation": "Eukaryotic cilia and flagella have a core of microtubules arranged in a '9+2' array (9 outer doublets and 2 central singlets). This is structurally distinct from the simple, solid prokaryotic flagellum made of flagellin."
  },
  {
    "id": "proc-euk-compare-30",
    "question": "Which of the following processes is unique to eukaryotic cells?",
    "options": [
      "Binary fission",
      "Meiosis",
      "Asexual reproduction",
      "Conjugation"
    ],
    "correctAnswer": 1,
    "explanation": "Meiosis is a specialized type of cell division that reduces chromosome number and produces gametes for sexual reproduction. It is a feature of eukaryotes. Prokaryotes can undergo genetic recombination (e.g., conjugation) but not meiosis."
  },
  {
    "id": "proc-euk-compare-31",
    "question": "The organelle that modifies, packages, and secretes cellular products is the:",
    "options": [
      "Rough Endoplasmic Reticulum",
      "Smooth Endoplasmic Reticulum",
      "Golgi Apparatus",
      "Lysosome"
    ],
    "correctAnswer": 2,
    "explanation": "The Golgi Apparatus is a key part of the endomembrane system in eukaryotic cells. It receives vesicles from the ER, modifies their contents, and directs them to their final destination. Prokaryotes lack this organelle."
  },
  {
    "id": "proc-euk-compare-32",
    "question": "A key difference between Archaebacteria and Eubacteria is:",
    "options": [
      "Archaebacteria are eukaryotic",
      "Eubacteria have no cell wall",
      "The composition of their cell walls and membranes",
      "Archaebacteria have a true nucleus"
    ],
    "correctAnswer": 2,
    "explanation": "Both are prokaryotic. A major difference is that the cell walls of Archaebacteria lack peptidoglycan and their membrane lipids have a different chemical structure compared to Eubacteria."
  },
  {
    "id": "proc-euk-compare-33",
    "question": "The theory that eukaryotic cells evolved from prokaryotic ancestors through inward folds of the plasma membrane is related to the origin of the:",
    "options": [
      "Mitochondria",
      "Chloroplasts",
      "Endomembrane system",
      "Cytoskeleton"
    ],
    "correctAnswer": 2,
    "explanation": "The endomembrane system (ER, Golgi, lysosomes, vesicles) is thought to have evolved from infoldings of the plasma membrane of a prokaryotic ancestor. This is separate from the endosymbiotic origin of mitochondria and chloroplasts."
  },
  {
    "id": "proc-euk-compare-34",
    "question": "Which of the following is a feature found in both prokaryotic and eukaryotic cell membranes?",
    "options": [
      "Cholesterol",
      "A phospholipid bilayer",
      "A thick peptidoglycan layer",
      "Photosynthetic pigments"
    ],
    "correctAnswer": 1,
    "explanation": "The fundamental structure of the cell membrane is a phospholipid bilayer. This is a universal feature of all cells. Cholesterol is specific to animal eukaryotic membranes, and peptidoglycan is for bacterial cell walls."
  },
  {
    "id": "proc-euk-compare-35",
    "question": "The site of aerobic respiration in eukaryotic cells is the:",
    "options": [
      "Chloroplast",
      "Nucleus",
      "Mitochondrion",
      "Ribosome"
    ],
    "correctAnswer": 2,
    "explanation": "Mitochondria are the 'powerhouses' of the eukaryotic cell, where the Krebs cycle and electron transport chain occur to produce ATP. Prokaryotes perform respiration on their plasma membrane."
  },
  {
    "id": "proc-euk-compare-36",
    "question": "In prokaryotes, the small, hairlike structures on the surface that are used for attachment are called:",
    "options": [
      "Flagella",
      "Cilia",
      "Pili",
      "Microvilli"
    ],
    "correctAnswer": 2,
    "explanation": "Pili (or fimbriae) are short, hair-like structures on the surface of many prokaryotes. They are primarily used for attachment to surfaces or other cells (e.g., in conjugation), not for locomotion."
  },
  {
    "id": "proc-euk-compare-37",
    "question": "Which of the following is generally LARGER in size?",
    "options": [
      "A typical bacterium",
      "A typical mitochondrion",
      "A typical human red blood cell",
      "A typical virus"
    ],
    "correctAnswer": 2,
    "explanation": "This highlights size differences. A typical mitochondrion (1-10 μm) is often larger than a virus (20-300 nm). A human red blood cell (~7-8 μm) is larger than a typical bacterium (1-2 μm)."
  },
  {
    "id": "proc-euk-compare-38",
    "question": "The presence of a nuclear envelope is a defining characteristic of:",
    "options": [
      "Prokaryotes",
      "Eukaryotes",
      "Viruses",
      "Bacteria"
    ],
    "correctAnswer": 1,
    "explanation": "The term 'eukaryote' means 'true kernel' or 'true nucleus.' The presence of a double-membrane nuclear envelope that encloses the genetic material is the most fundamental feature that distinguishes them from prokaryotes ('before nucleus')."
  },
  {
    "id": "proc-euk-compare-39",
    "question": "Which of the following is a similarity between prokaryotic and eukaryotic cells?",
    "options": [
      "Presence of a cell wall made of cellulose",
      "Identical methods of cell division",
      "Use of DNA as the genetic material",
      "Presence of identical flagellar structure"
    ],
    "correctAnswer": 2,
    "explanation": "The use of DNA as the hereditary material is a universal constant across all domains of life. The other options are key differences (cell wall composition, division methods, flagellar structure)."
  },
  {
    "id": "proc-euk-compare-40",
    "question": "Antibiotics that specifically target the 70S ribosome are effective against:",
    "options": [
      "Human cells",
      "Fungal cells",
      "Bacterial cells",
      "Plant cells"
    ],
    "correctAnswer": 2,
    "explanation": "This is a crucial medical application. Bacterial (prokaryotic) cells have 70S ribosomes, while human (eukaryotic) cells have 80S ribosomes. Antibiotics like tetracycline and streptomycin exploit this difference to selectively inhibit bacterial protein synthesis."
  },
  {
    "id": "proc-euk-compare-41",
    "question": "The organelle that detoxifies harmful substances like hydrogen peroxide in eukaryotic cells is the:",
    "options": [
      "Lysosome",
      "Peroxisome",
      "Smooth ER",
      "Golgi apparatus"
    ],
    "correctAnswer": 1,
    "explanation": "Peroxisomes contain enzymes like catalase that break down hydrogen peroxide (H₂O₂) into water and oxygen. While some prokaryotes have similar enzymes, the peroxisome as a distinct organelle is a eukaryotic feature."
  },
  {
    "id": "proc-euk-compare-42",
    "question": "The cellular process of transcription (DNA to RNA):",
    "options": [
      "Occurs on 70S ribosomes in prokaryotes",
      "Occurs in the cytoplasm in eukaryotes",
      "Occurs in the nucleus in eukaryotes",
      "Is identical in both cell types with no post-transcriptional modification"
    ],
    "correctAnswer": 2,
    "explanation": "In eukaryotes, transcription occurs within the nucleus. The primary RNA transcript then undergoes processing (capping, splicing, polyadenylation) before being exported to the cytoplasm for translation."
  },
  {
    "id": "proc-euk-compare-43",
    "question": "A structure that might be found in both a prokaryotic and a eukaryotic cell is:",
    "options": [
      "A cell wall for structural support",
      "A contractile vacuole for water balance",
      "A chloroplast for energy production",
      "A nucleolus for ribosome assembly"
    ],
    "correctAnswer": 0,
    "explanation": "Many prokaryotes and some eukaryotes (plants, fungi) have a cell wall, though their chemical composition differs (peptidoglycan vs. cellulose/chitin). The other options are specific to certain eukaryotes."
  },
  {
    "id": "proc-euk-compare-44",
    "question": "The group of prokaryotes that can live in extreme environments (e.g., hot springs, high salt) are:",
    "options": [
      "Eubacteria",
      "Cyanobacteria",
      "Archaebacteria",
      "Protists"
    ],
    "correctAnswer": 2,
    "explanation": "Archaebacteria (or Archaea) are a domain of prokaryotes known for thriving in extreme environments, such as high temperatures (thermophiles), high salt (halophiles), or producing methane (methanogens)."
  },
  {
    "id": "proc-euk-compare-45",
    "question": "The 'powerhouse of the cell' (mitochondrion) is absent in:",
    "options": [
      "Plant cells",
      "Animal cells",
      "Prokaryotic cells",
      "Fungal cells"
    ],
    "correctAnswer": 2,
    "explanation": "Prokaryotic cells do not have mitochondria. They perform aerobic respiration using enzymes embedded in their plasma membrane and cytoplasm. All eukaryotic cells contain mitochondria (or derived organelles)."
  },
  {
    "id": "proc-euk-compare-46",
    "question": "Which of the following is a key functional advantage of compartmentalization in eukaryotic cells?",
    "options": [
      "It allows for smaller cell size.",
      "It separates incompatible metabolic reactions.",
      "It eliminates the need for a cell membrane.",
      "It makes DNA replication slower and more accurate."
    ],
    "correctAnswer": 1,
    "explanation": "Membrane-bound organelles allow eukaryotic cells to isolate and specialize functions. For example, digestive enzymes are sequestered in lysosomes to prevent them from digesting the cell itself, and photosynthesis is contained within chloroplasts."
  },
  {
    "id": "proc-euk-compare-47",
    "question": "The first step of protein synthesis (translation) begins in the:",
    "options": [
      "Nucleus of eukaryotes and cytoplasm of prokaryotes",
      "Cytoplasm of both eukaryotes and prokaryotes",
      "Rough ER of eukaryotes and nucleoid of prokaryotes",
      "Golgi apparatus of eukaryotes and mesosome of prokaryotes"
    ],
    "correctAnswer": 1,
    "explanation": "Translation always occurs on ribosomes in the cytoplasm. In prokaryotes, since there is no nucleus, transcription and translation are coupled in the cytoplasm. In eukaryotes, translation occurs in the cytoplasm after processed mRNA is exported from the nucleus."
  },
  {
    "id": "proc-euk-compare-48",
    "question": "A student observes a unicellular organism with a nucleus and chloroplasts. It must be:",
    "options": [
      "A prokaryote",
      "A bacterium",
      "A eukaryotic autotroph",
      "A eukaryotic heterotroph"
    ],
    "correctAnswer": 2,
    "explanation": "The presence of a nucleus defines it as eukaryotic. The presence of chloroplasts defines it as photosynthetic, or an autotroph (e.g., a green alga or Euglena). Prokaryotes like cyanobacteria have photosynthesis but no true nucleus or chloroplasts."
  },
  {
    "id": "proc-euk-compare-49",
    "question": "The genetic material in a virus is:",
    "options": [
      "Always DNA",
      "Always RNA",
      "Always surrounded by a nuclear envelope",
      "Either DNA or RNA, but not both"
    ],
    "correctAnswer": 3,
    "explanation": "This question distinguishes cells from non-living particles. Viruses are not cells. They can have DNA or RNA, but never both. They lack a nucleus, cytoplasm, ribosomes, and other cellular machinery, relying entirely on a host cell to replicate."
  },
  {
    "id": "proc-euk-compare-50",
    "question": "Which of the following is a feature of a typical plant cell but NOT a typical prokaryotic cell?",
    "options": [
      "Cytoplasm",
      "Ribosomes",
      "Large central vacuole",
      "DNA"
    ],
    "correctAnswer": 2,
    "explanation": "The large, fluid-filled central vacuole is a prominent organelle in mature plant cells (eukaryotic) involved in storage and turgor pressure. Prokaryotes may have small vacuoles, but nothing comparable. The other three are common to both."
  },
  {
    "id": "proc-euk-compare-51",
    "question": "The structure that provides shape, support, and prevents bursting in a hypotonic environment is the ___ in prokaryotes and the ___ in plant cells.",
    "options": [
      "Cell wall; cell wall",
      "Cell membrane; cell membrane",
      "Cell wall; large vacuole",
      "Capsule; cellulose wall"
    ],
    "correctAnswer": 0,
    "explanation": "Both prokaryotes and plant cells have a rigid cell wall that provides structural integrity. In a hypotonic environment, water enters the cell. The wall prevents it from bursting, while animal cells (lacking a wall) would lyse."
  },
  {
    "id": "proc-euk-compare-52",
    "question": "The organelle that is a network of membranes involved in protein and lipid synthesis is the:",
    "options": [
      "Golgi apparatus",
      "Endoplasmic Reticulum",
      "Lysosome",
      "Vacuole"
    ],
    "correctAnswer": 1,
    "explanation": "The Endoplasmic Reticulum (ER) is an extensive network of membranes continuous with the nuclear envelope. The RER has ribosomes for protein synthesis, and the SER is involved in lipid synthesis and detoxification. This is a eukaryotic feature."
  },
  {
    "id": "proc-euk-compare-53",
    "question": "Which of the following is NOT a component of the endomembrane system in eukaryotic cells?",
    "options": [
      "Nuclear envelope",
      "Endoplasmic Reticulum",
      "Mitochondria",
      "Golgi apparatus"
    ],
    "correctAnswer": 2,
    "explanation": "The endomembrane system includes organelles that are either continuous or connected via vesicle transfer: nuclear envelope, ER, Golgi, lysosomes, vacuoles, and the plasma membrane. Mitochondria and chloroplasts are not part of this system; they have their own membranes and DNA."
  },
  {
    "id": "proc-euk-compare-54",
    "question": "The process by which some prokaryotes can take up DNA from their environment is called:",
    "options": [
      "Conjugation",
      "Transduction",
      "Transformation",
      "Binary fission"
    ],
    "correctAnswer": 2,
    "explanation": "Transformation is a form of horizontal gene transfer where a prokaryote takes up free DNA from its environment. This is one way antibiotic resistance can spread. Conjugation involves direct contact, and transduction involves viruses."
  },
  {
    "id": "proc-euk-compare-55",
    "question": "A major difference between the DNA of prokaryotes and eukaryotes is that eukaryotic DNA:",
    "options": [
      "Is circular",
      "Lacks non-coding regions (introns)",
      "Contains non-coding regions (introns)",
      "Is not replicated semi-conservatively"
    ],
    "correctAnswer": 2,
    "explanation": "Eukaryotic genes often contain introns (non-coding sequences) that are spliced out of the mRNA before translation. Prokaryotic genes are typically continuous (no introns), which is one reason they can transcribe and translate simultaneously."
  },
  {
    "id": "proc-euk-compare-56",
    "question": "Which of the following is a storage inclusion found in some prokaryotes?",
    "options": [
      "Mitochondrion",
      "Glycogen granule",
      "Lysosome",
      "Nucleolus"
    ],
    "correctAnswer": 1,
    "explanation": "Prokaryotes can store nutrients in inclusions within their cytoplasm. These can be glycogen granules, lipid droplets, or phosphate granules. The other options are eukaryotic organelles."
  },
  {
    "id": "proc-euk-compare-57",
    "question": "The site of lipid synthesis in a eukaryotic cell is the:",
    "options": [
      "Rough ER",
      "Smooth ER",
      "Golgi apparatus",
      "Mitochondrion"
    ],
    "correctAnswer": 1,
    "explanation": "The Smooth Endoplasmic Reticulum (SER) is responsible for synthesizing lipids, including phospholipids and steroids. It also detoxifies chemicals. Prokaryotes perform lipid synthesis in their cytoplasm or on the plasma membrane."
  },
  {
    "id": "proc-euk-compare-58",
    "question": "A key characteristic used to classify organisms into the three domains (Bacteria, Archaea, Eukarya) is:",
    "options": [
      "Presence or absence of a cell wall",
      "Cellular organization (prokaryotic vs. eukaryotic)",
      "The type of ribosomes present",
      "All of the above"
    ],
    "correctAnswer": 3,
    "explanation": "The three-domain system is based on fundamental genetic and biochemical differences. It considers cell organization (Bacteria & Archaea are prokaryotic; Eukarya are eukaryotic), ribosomal RNA sequences, membrane lipid structure, and cell wall composition."
  },
  {
    "id": "proc-euk-compare-59",
    "question": "Which of the following is a feature of ALL cells?",
    "options": [
      "Mitochondria",
      "Ribosomes",
      "Lysosomes",
      "Nuclear membrane"
    ],
    "correctAnswer": 1,
    "explanation": "Ribosomes are absolutely essential for protein synthesis and are therefore found in all cells on Earth. The other structures are specific to eukaryotic cells."
  },
  {
    "id": "proc-euk-compare-60",
    "question": "The structure that allows for the exchange of materials between the nucleus and the cytoplasm is the:",
    "options": [
      "Nuclear pore",
      "Nuclear envelope",
      "Endoplasmic reticulum",
      "Plasmodesmata"
    ],
    "correctAnswer": 0,
    "explanation": "Nuclear pores are large protein complexes that span the nuclear envelope. They regulate the transport of molecules like mRNA, ribosomal subunits, and proteins into and out of the nucleus. This is a defining feature of eukaryotic cells."
  },
  {
    "id": "proc-euk-compare-61",
    "question": "Which of the following is a key difference in how plants and cyanobacteria perform photosynthesis?",
    "options": [
      "Plants use chlorophyll a; cyanobacteria use chlorophyll b.",
      "Cyanobacteria produce oxygen; plants do not.",
      "Plants use chloroplasts; cyanobacteria use thylakoids not enclosed in an organelle.",
      "Only plants can perform photosynthesis."
    ],
    "correctAnswer": 2,
    "explanation": "This highlights the prokaryotic/eukaryotic difference. Cyanobacteria (prokaryotes) perform photosynthesis on internal thylakoid membranes within their cytoplasm. Plants (eukaryotes) perform photosynthesis within specialized chloroplast organelles, which evolved from cyanobacteria."
  },
  {
    "id": "proc-euk-compare-62",
    "question": "The 'control center' of the eukaryotic cell is the:",
    "options": [
      "Nucleolus",
      "Nucleus",
      "Mitochondrion",
      "Golgi apparatus"
    ],
    "correctAnswer": 1,
    "explanation": "The nucleus is the control center because it houses the vast majority of the cell's DNA, which contains the instructions for protein synthesis and cellular activities. Prokaryotes control their functions from the nucleoid region."
  },
  {
    "id": "proc-euk-compare-63",
    "question": "A prokaryotic cell is preparing to divide. What must it do first?",
    "options": [
      "Form a mitotic spindle",
      "Duplicate its organelles",
      "Replicate its single circular chromosome",
      "Condense its chromosomes with histones"
    ],
    "correctAnswer": 2,
    "explanation": "Before binary fission, the prokaryote must replicate its DNA so that each daughter cell will receive a complete copy of the circular chromosome. They do not use a mitotic spindle or have numerous organelles to duplicate."
  },
  {
    "id": "proc-euk-compare-64",
    "question": "Which of the following is a structure used for attachment and DNA transfer between prokaryotic cells?",
    "options": [
      "Flagellum",
      "Pilus",
      "Cilium",
      "Mesosome"
    ],
    "correctAnswer": 1,
    "explanation": "A sex pilus is a specialized type of pilus that forms a connection between two prokaryotic cells during conjugation, allowing for the transfer of plasmid DNA."
  },
  {
    "id": "proc-euk-compare-65",
    "question": "The fluid matrix inside the inner mitochondrial membrane is called the:",
    "options": [
      "Stroma",
      "Matrix",
      "Cytosol",
      "Cristae"
    ],
    "correctAnswer": 1,
    "explanation": "The mitochondrial matrix is the space inside the inner membrane. It contains the mitochondrial DNA, ribosomes, and enzymes for the Krebs cycle. This compartmentalization is a key feature of the eukaryotic organelle."
  },
  {
    "id": "proc-euk-compare-66",
    "question": "Which of the following is a feature of BOTH chloroplasts and mitochondria?",
    "options": [
      "They are found in all prokaryotic cells.",
      "They have a single membrane.",
      "They contain their own DNA and ribosomes.",
      "They are involved in protein synthesis for the cell."
    ],
    "correctAnswer": 2,
    "explanation": "This is key evidence for the endosymbiotic theory. Both mitochondria and chloroplasts have their own circular DNA and 70S ribosomes, similar to prokaryotes, suggesting they were once free-living organisms."
  },
  {
    "id": "proc-euk-compare-67",
    "question": "The group of prokaryotes responsible for the initial oxygenation of Earth's atmosphere were the:",
    "options": [
      "Archaebacteria",
      "Cyanobacteria",
      "Chemosynthetic bacteria",
      "Pathogenic bacteria"
    ],
    "correctAnswer": 1,
    "explanation": "Cyanobacteria are photosynthetic prokaryotes that began producing oxygen as a byproduct billions of years ago, which dramatically changed Earth's atmosphere and allowed for the evolution of aerobic life."
  },
  {
    "id": "proc-euk-compare-68",
    "question": "A key function of the cytoskeleton in eukaryotic cells that is not possible in prokaryotes to the same degree is:",
    "options": [
      "Protein synthesis",
      "Active transport",
      "Organelle movement and cell shape changes",
      "DNA replication"
    ],
    "correctAnswer": 2,
    "explanation": "The complex eukaryotic cytoskeleton (microtubules, microfilaments) acts as a track system for motor proteins to move vesicles and organelles. It also allows for dramatic cell shape changes (e.g., pseudopodia, cytokinesis). Prokaryotes have a more primitive cytoskeleton."
  },
  {
    "id": "proc-euk-compare-69",
    "question": "Which of the following is a key difference in how proteins are targeted to their destination?",
    "options": [
      "In eukaryotes, signal sequences are used; in prokaryotes, they are not.",
      "In prokaryotes, all proteins are synthesized on the RER.",
      "In eukaryotes, proteins destined for secretion are synthesized on free ribosomes.",
      "In eukaryotes, proteins have signal sequences that direct them to organelles like the ER."
    ],
    "correctAnswer": 3,
    "explanation": "Eukaryotic cells use specific signal sequences on proteins to direct them to the correct organelle (e.g., a signal peptide directs ribosomes to the RER). Prokaryotes, lacking most organelles, have simpler targeting mechanisms."
  },
  {
    "id": "proc-euk-compare-70",
    "question": "The presence of a well-defined nucleus is a characteristic of:",
    "options": [
      "All living organisms",
      "Only multicellular organisms",
      "Eukaryotic cells",
      "Prokaryotic cells"
    ],
    "correctAnswer": 2,
    "explanation": "This is the core definition. The term 'eukaryote' means 'true nucleus.' The presence of a membrane-bound nucleus is the single most important feature that distinguishes eukaryotes from prokaryotes."
  },
  {
    "id": "proc-euk-compare-71",
    "question": "Which of the following is a key similarity between the plasma membranes of prokaryotes and eukaryotes?",
    "options": [
      "The presence of cholesterol for stability",
      "The use of a phospholipid bilayer as the foundational structure",
      "Identical protein and lipid composition",
      "The presence of a thick peptidoglycan layer associated with it"
    ],
    "correctAnswer": 1,
    "explanation": "The phospholipid bilayer is a universal structural component of all biological membranes. The specific lipids and proteins (like cholesterol) embedded in this bilayer vary between domains of life."
  },
  {
    "id": "proc-euk-compare-72",
    "question": "The organelle that is the primary site of ATP synthesis in eukaryotic cells is the:",
    "options": [
      "Chloroplast",
      "Nucleus",
      "Mitochondrion",
      "Ribosome"
    ],
    "correctAnswer": 2,
    "explanation": "Mitochondria generate most of the cell's supply of ATP through aerobic respiration. Chloroplasts produce ATP and NADPH for photosynthesis, but mitochondria are the universal energy producers in eukaryotes."
  },
  {
    "id": "proc-euk-compare-73",
    "question": "In which of the following would you expect to find a cell wall composed of chitin?",
    "options": [
      "Bacteria",
      "Plants",
      "Fungi",
      "Animals"
    ],
    "correctAnswer": 2,
    "explanation": "This tests knowledge of eukaryotic diversity. Fungal cell walls are made of chitin. Bacterial walls are made of peptidoglycan. Plant cell walls are made of cellulose. Animal cells lack a cell wall."
  },
  {
    "id": "proc-euk-compare-74",
    "question": "The process of generating ATP using energy from sunlight is called ___ and occurs in ___.",
    "options": [
      "Respiration; mitochondria",
      "Photosynthesis; chloroplasts",
      "Fermentation; cytoplasm",
      "Chemosynthesis; ribosomes"
    ],
    "correctAnswer": 1,
    "explanation": "Photosynthesis is the process of converting light energy into chemical energy (glucose). In eukaryotic cells, this occurs in the chloroplasts. Some prokaryotes (cyanobacteria) also perform photosynthesis, but not in a chloroplast."
  },
  {
    "id": "proc-euk-compare-75",
    "question": "Which of the following is NOT a known function of the prokaryotic cell wall?",
    "options": [
      "Maintaining cell shape",
      "Preventing bursting in hypotonic environments",
      "Protein synthesis",
      "Providing physical protection"
    ],
    "correctAnswer": 2,
    "explanation": "The cell wall's functions are primarily structural and protective. Protein synthesis is the function of ribosomes, which are not part of the cell wall."
  },
  {
    "id": "proc-euk-compare-76",
    "question": "The study of bacteria and archaea falls under the field of:",
    "options": [
      "Virology",
      "Mycology",
      "Bacteriology",
      "Botany"
    ],
    "correctAnswer": 2,
    "explanation": "Bacteriology is the branch of microbiology concerned with the study of bacteria (and often archaea, which were previously grouped with bacteria). Mycology is the study of fungi, virology of viruses, and botany of plants."
  },
  {
    "id": "proc-euk-compare-77",
    "question": "A major difference between DNA replication in prokaryotes and eukaryotes is:",
    "options": [
      "Prokaryotes have multiple origins of replication; eukaryotes have one.",
      "Eukaryotes have multiple origins of replication; prokaryotes have one.",
      "Only eukaryotes replicate their DNA semi-conservatively.",
      "Only prokaryotes use DNA polymerase."
    ],
    "correctAnswer": 1,
    "explanation": "Due to their much larger, linear genomes, eukaryotic chromosomes have multiple origins of replication to speed up the process. The single, circular chromosome of a prokaryote has only one origin of replication."
  },
  {
    "id": "proc-euk-compare-78",
    "question": "Which of the following is a structure found in some prokaryotes that provides resistance to phagocytosis?",
    "options": [
      "Slime layer",
      "Capsule",
      "Cell wall",
      "Pilus"
    ],
    "correctAnswer": 1,
    "explanation": "A capsule is a dense, well-defined layer of polysaccharides outside the cell wall. It helps pathogenic bacteria adhere to host tissues and resist ingestion and killing by phagocytic white blood cells."
  },
  {
    "id": "proc-euk-compare-79",
    "question": "The organelle that stores water, ions, and nutrients in plant cells is the:",
    "options": [
      "Lysosome",
      "Golgi apparatus",
      "Central vacuole",
      "Peroxisome"
    ],
    "correctAnswer": 2,
    "explanation": "The central vacuole is a very large organelle in plant cells that stores water, creates turgor pressure, and stores ions, nutrients, and waste products. It is a defining feature of plant eukaryotic cells."
  },
  {
    "id": "proc-euk-compare-80",
    "question": "Which of the following is a key feature of the domain Archaea?",
    "options": [
      "Their cell walls contain peptidoglycan.",
      "Their membrane lipids are identical to those of bacteria.",
      "They are often extremophiles.",
      "They are all pathogens."
    ],
    "correctAnswer": 2,
    "explanation": "Many archaea are known for living in extreme environments (extreme heat, salt, acidity). Their membrane lipids are unique and different from both bacteria and eukaryotes, and their cell walls lack peptidoglycan."
  },
  {
    "id": "proc-euk-compare-81",
    "question": "The movement of a bacterial cell towards a nutrient source is an example of:",
    "options": [
      "Cytoplasmic streaming",
      "Chemotaxis",
      "Photosynthesis",
      "Phagocytosis"
    ],
    "correctAnswer": 1,
    "explanation": "Chemotaxis is the movement of an organism in response to a chemical gradient. Prokaryotes can move towards attractants (like nutrients) or away from repellents (like toxins) using their flagella."
  },
  {
    "id": "proc-euk-compare-82",
    "question": "Which of the following is a key difference in respiratory machinery?",
    "options": [
      "Eukaryotes perform respiration on the plasma membrane.",
      "Prokaryotes perform respiration on the plasma membrane.",
      "Only eukaryotes can perform aerobic respiration.",
      "Only prokaryotes can perform anaerobic respiration."
    ],
    "correctAnswer": 1,
    "explanation": "Prokaryotes lack mitochondria. The enzymes for the electron transport chain are embedded in their plasma membrane. In eukaryotes, these enzymes are located on the inner mitochondrial membrane."
  },
  {
    "id": "proc-euk-compare-83",
    "question": "The structure that facilitates the exchange of genetic material between two bacterial cells is the:",
    "options": [
      "Flagellum",
      "Sex pilus",
      "Capsule",
      "Mesosome"
    ],
    "correctAnswer": 1,
    "explanation": "A sex pilus is a hollow appendage used in bacterial conjugation. It forms a bridge between two cells, through which a plasmid or other DNA element can be transferred."
  },
  {
    "id": "proc-euk-compare-84",
    "question": "Which of the following is a feature of a typical animal cell but NOT a typical prokaryotic cell?",
    "options": [
      "Cell membrane",
      "Ribosomes",
      "Lysosomes",
      "Cytoplasm"
    ],
    "correctAnswer": 2,
    "explanation": "Lysosomes are membrane-bound organelles containing digestive enzymes, found in animal cells (eukaryotic). Prokaryotes may have digestive enzymes, but they are not packaged into a specialized organelle like a lysosome."
  },
  {
    "id": "proc-euk-compare-85",
    "question": "The 'rough' appearance of the Rough Endoplasmic Reticulum is due to the presence of:",
    "options": [
      "Lysosomes",
      "Ribosomes",
      "Mitochondria",
      "Golgi vesicles"
    ],
    "correctAnswer": 1,
    "explanation": "The RER is 'rough' because it is studded with ribosomes on its cytoplasmic surface. These ribosomes are synthesizing proteins that are being inserted into the ER lumen for processing and transport. This is a eukaryotic feature."
  },
  {
    "id": "proc-euk-compare-86",
    "question": "A student identifies a cell that lacks a nucleus and has a cell wall made of peptidoglycan. This cell belongs to the domain:",
    "options": [
      "Archaea",
      "Eukarya",
      "Bacteria",
      "Fungi"
    ],
    "correctAnswer": 2,
    "explanation": "The absence of a nucleus defines it as a prokaryote. The presence of a peptidoglycan cell wall is a characteristic of the domain Bacteria. Archaea have different cell wall compositions."
  },
  {
    "id": "proc-euk-compare-87",
    "question": "The organelle that is the site of ribosomal RNA (rRNA) synthesis is the:",
    "options": [
      "Nucleus",
      "Nucleolus",
      "Rough ER",
      "Golgi apparatus"
    ],
    "correctAnswer": 1,
    "explanation": "The nucleolus is a dense region within the nucleus where ribosomal RNA is transcribed and ribosomal subunits are assembled. This is a key function in the nuclei of eukaryotic cells."
  },
  {
    "id": "proc-euk-compare-88",
    "question": "Which of the following is a key difference in how genetic diversity is generated?",
    "options": [
      "Prokaryotes rely solely on mutation.",
      "Eukaryotes rely solely on sexual reproduction.",
      "Prokaryotes can use horizontal gene transfer (conjugation, transformation, transduction).",
      "Eukaryotes cannot undergo genetic recombination."
    ],
    "correctAnswer": 2,
    "explanation": "Prokaryotes, which primarily reproduce asexually, can acquire new genetic material through horizontal gene transfer methods like conjugation (direct contact), transformation (uptake of DNA), and transduction (via viruses)."
  },
  {
    "id": "proc-euk-compare-89",
    "question": "The fluid portion of the cytoplasm, excluding the organelles, is called the:",
    "options": [
      "Nucleoplasm",
      "Cytosol",
      "Stroma",
      "Matrix"
    ],
    "correctAnswer": 1,
    "explanation": "The cytosol is the aqueous, gel-like substance that makes up the ground material of the cytoplasm. It is the site of many metabolic reactions and is present in both prokaryotic and eukaryotic cells."
  },
  {
    "id": "proc-euk-compare-90",
    "question": "Which of the following is a key characteristic of eukaryotic chromosomes that is not true for prokaryotic chromosomes?",
    "options": [
      "They are made of DNA.",
      "They are circular in shape.",
      "They are linear and associated with histone proteins.",
      "They contain genes."
    ],
    "correctAnswer": 2,
    "explanation": "Eukaryotic chromosomes are linear and tightly bound to histone proteins to form chromatin. Prokaryotic chromosomes are typically circular and 'naked,' meaning they are not associated with histones."
  },
  {
    "id": "proc-euk-compare-91",
    "question": "The theory that suggests mitochondria and chloroplasts were once free-living bacteria is called the:",
    "options": [
      "Cell Theory",
      "Germ Theory",
      "Endosymbiotic Theory",
      "Theory of Evolution"
    ],
    "correctAnswer": 2,
    "explanation": "The Endosymbiotic Theory is a fundamental concept in biology that explains the origin of these organelles from symbiotic prokaryotes. Evidence includes their own DNA, ribosomes, and double membranes."
  },
  {
    "id": "proc-euk-compare-92",
    "question": "Which of the following is a structure found in both Gram-positive and Gram-negative bacteria?",
    "options": [
      "Outer membrane",
      "A thick layer of peptidoglycan",
      "A plasma membrane",
      "Lipopolysaccharides (LPS)"
    ],
    "correctAnswer": 2,
    "explanation": "All living cells have a plasma membrane. The other options are distinguishing features: Gram-positive bacteria have a thick peptidoglycan layer, while Gram-negative bacteria have a thin peptidoglycan layer plus an outer membrane containing LPS."
  },
  {
    "id": "proc-euk-compare-93",
    "question": "The process by which a white blood cell engulfs a bacterium is called:",
    "options": [
      "Phagocytosis",
      "Pinocytosis",
      "Exocytosis",
      "Osmosis"
    ],
    "correctAnswer": 0,
    "explanation": "Phagocytosis ('cell eating') is a form of endocytosis where a cell engulfs large particles like bacteria. This is a capability of certain eukaryotic cells (like macrophages) that is not seen in prokaryotes."
  },
  {
    "id": "proc-euk-compare-94",
    "question": "Which of the following is a key functional advantage of being multicellular and eukaryotic?",
    "options": [
      "Faster reproduction",
      "Smaller size",
      "Cellular specialization (division of labor)",
      "Simpler organization"
    ],
    "correctAnswer": 2,
    "explanation": "Eukaryotic cells can form complex multicellular organisms where cells become specialized for specific functions (e.g., muscle cells for contraction, nerve cells for signaling). This division of labor allows for incredible complexity."
  },
  {
    "id": "proc-euk-compare-95",
    "question": "A structure that might be used for motility in both prokaryotes and eukaryotes is a:",
    "options": [
      "Flagellum",
      "Pilus",
      "Cilium",
      "Pseudopod"
    ],
    "correctAnswer": 0,
    "explanation": "Both prokaryotes and eukaryotes can have flagella for movement. However, as emphasized in other questions, their structure (flagellin vs. 9+2 microtubules) and mechanism (rotation vs. whip-like bending) are completely different."
  },
  {
    "id": "proc-euk-compare-96",
    "question": "The first life forms on Earth were most likely:",
    "options": [
      "Eukaryotic",
      "Multicellular",
      "Prokaryotic",
      "Photosynthetic plants"
    ],
    "correctAnswer": 2,
    "explanation": "The fossil evidence indicates that the first living organisms were simple prokaryotic cells. Eukaryotes evolved from prokaryotes much later in Earth's history."
  },
  {
    "id": "proc-euk-compare-97",
    "question": "Which of the following is a key difference in the initiation of protein synthesis?",
    "options": [
      "In prokaryotes, the initiator tRNA carries formylmethionine.",
      "In eukaryotes, the initiator tRNA carries methionine.",
      "Both A and B are correct.",
      "Neither A nor B is correct."
    ],
    "correctAnswer": 2,
    "explanation": "This is a subtle biochemical difference. In prokaryotes, translation starts with a modified amino acid, formylmethionine. In eukaryotes, translation starts with the regular amino acid methionine."
  },
  {
    "id": "proc-euk-compare-98",
    "question": "The organelle that can convert hydrogen peroxide (H₂O₂) into water and oxygen is the:",
    "options": [
      "Lysosome",
      "Peroxisome",
      "Golgi apparatus",
      "Smooth ER"
    ],
    "correctAnswer": 1,
    "explanation": "Peroxisomes contain the enzyme catalase, which breaks down toxic hydrogen peroxide, a byproduct of metabolic reactions, into harmless water and oxygen. This is a function of this eukaryotic organelle."
  },
  {
    "id": "proc-euk-compare-99",
    "question": "Which of the following is a feature of ALL prokaryotic cells?",
    "options": [
      "They are pathogenic.",
      "They have a cell wall made of peptidoglycan.",
      "They lack a membrane-bound nucleus.",
      "They are multicellular."
    ],
    "correctAnswer": 2,
    "explanation": "The defining feature of a prokaryote is the absence of a membrane-bound nucleus. Not all are pathogenic (A is false), not all have peptidoglycan (Archaea don't) (B is false), and they are almost exclusively unicellular (D is false)."
  },
  {
    "id": "proc-euk-compare-100",
    "question": "A major structural difference between plant and animal eukaryotic cells is the presence of:",
    "options": [
      "A nucleus in plant cells only",
      "Mitochondria in animal cells only",
      "A cell wall and chloroplasts in plant cells",
      "Ribosomes in animal cells only"
    ],
    "correctAnswer": 2,
    "explanation": "This question links the two topics. While both are eukaryotic, plant cells have unique structures not found in animal cells: a rigid cell wall and chloroplasts for photosynthesis. Both have nuclei, mitochondria, and ribosomes."
  }
];