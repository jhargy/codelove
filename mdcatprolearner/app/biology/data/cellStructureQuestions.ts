export interface Question {
  id: string;
  question: string;
  options: string[];
  correctAnswer: number;
  explanation: string;
}

export const cellStructureQuestions: Question[] = [
  {
    "id": "cell-compare-1",
    "question": "Which of the following organelles is found in plant cells but NOT in animal cells?",
    "options": [
      "Mitochondria",
      "Golgi apparatus",
      "Chloroplast",
      "Endoplasmic reticulum"
    ],
    "correctAnswer": 2,
    "explanation": "Chloroplasts are the site of photosynthesis and are unique to plant cells and some protists. Animal cells do not perform photosynthesis and therefore lack chloroplasts."
  },
  {
    "id": "cell-compare-2",
    "question": "The rigid outer layer that provides structural support and protection to a plant cell is called the:",
    "options": [
      "Cell membrane",
      "Cytoskeleton",
      "Cell wall",
      "Nuclear envelope"
    ],
    "correctAnswer": 2,
    "explanation": "The cell wall is a rigid structure made primarily of cellulose that surrounds the plant cell membrane. It provides shape, support, and protection, and is absent in animal cells."
  },
  {
    "id": "cell-compare-3",
    "question": "Which of the following is a large, central organelle in plant cells that stores water, nutrients, and waste products?",
    "options": [
      "Lysosome",
      "Central vacuole",
      "Nucleolus",
      "Peroxisome"
    ],
    "correctAnswer": 1,
    "explanation": "The central vacuole is a large, membrane-bound sac that can occupy up to 90% of a plant cell's volume. It maintains turgor pressure, stores compounds, and degrades waste. Animal cells have smaller, multiple vacuoles."
  },
  {
    "id": "cell-compare-4",
    "question": "The primary component of the plant cell wall is:",
    "options": [
      "Chitin",
      "Cellulose",
      "Peptidoglycan",
      "Phospholipids"
    ],
    "correctAnswer": 1,
    "explanation": "The plant cell wall is primarily composed of cellulose, a complex carbohydrate (polysaccharide) that forms strong fibrils. This is a key distinguishing feature from animal cells, which lack a cellulose wall."
  },
  {
    "id": "cell-compare-5",
    "question": "Which structure is present in animal cells but typically absent in plant cells?",
    "options": [
      "Nucleus",
      "Centrioles",
      "Ribosomes",
      "Plastids"
    ],
    "correctAnswer": 1,
    "explanation": "Centrioles are a pair of microtubule-organizing centers found in animal cells. They play a key role in cell division by forming the spindle apparatus. Most plant cells lack centrioles and use other methods to organize their spindle fibers."
  },
  {
    "id": "cell-compare-6",
    "question": "The process of photosynthesis occurs in which plant cell organelle?",
    "options": [
      "Mitochondrion",
      "Chloroplast",
      "Leucoplast",
      "Chromoplast"
    ],
    "correctAnswer": 1,
    "explanation": "Photosynthesis, the process of converting light energy into chemical energy (glucose), takes place in the chloroplasts of plant cells. This organelle contains the green pigment chlorophyll and is not found in animal cells."
  },
  {
    "id": "cell-compare-7",
    "question": "What is the main function of the large central vacuole in a plant cell?",
    "options": [
      "Protein synthesis",
      "ATP production",
      "Maintaining turgor pressure and storage",
      "DNA replication"
    ],
    "correctAnswer": 2,
    "explanation": "The central vacuole's main roles are to maintain turgor pressure against the cell wall (providing rigidity), store water, ions, nutrients, and pigments, and break down waste products. This is a defining feature of plant cells."
  },
  {
    "id": "cell-compare-8",
    "question": "Which of the following is a similarity between animal and plant cells?",
    "options": [
      "Presence of a cell wall",
      "Presence of chloroplasts",
      "Presence of a nucleus",
      "Presence of centrioles"
    ],
    "correctAnswer": 2,
    "explanation": "Both animal and plant cells are eukaryotic, meaning they have a true nucleus that houses their DNA. This is a fundamental similarity, unlike the other options which are differences."
  },
  {
    "id": "cell-compare-9",
    "question": "Plant cells typically have a __________ shape, while animal cells have a __________ shape.",
    "options": [
      "Spherical; rectangular",
      "Fixed/rectangular; irregular/round",
      "Elongated; spherical",
      "Irregular; fixed"
    ],
    "correctAnswer": 1,
    "explanation": "The rigid cell wall gives plant cells a fixed, often rectangular or geometric shape. Animal cells, lacking a cell wall, are more flexible and can have a variety of round, irregular, or branching shapes."
  },
  {
    "id": "cell-compare-10",
    "question": "Which type of plastid is responsible for storing starch in plant cells?",
    "options": [
      "Chloroplast",
      "Chromoplast",
      "Leucoplast",
      "Elaioplast"
    ],
    "correctAnswer": 2,
    "explanation": "Leucoplasts are a type of colorless plastid found in plant cells. Their specialized function is to store materials like starch (amyloplasts), oils (elaioplasts), or proteins (proteinoplasts). Animal cells do not have plastids."
  },
  {
    "id": "cell-compare-11",
    "question": "The organelle responsible for cellular respiration and ATP production in both plant and animal cells is the:",
    "options": [
      "Chloroplast",
      "Nucleus",
      "Mitochondrion",
      "Vacuole"
    ],
    "correctAnswer": 2,
    "explanation": "Mitochondria are the 'powerhouses of the cell,' performing cellular respiration to generate ATP. This is a key similarity, as both plant and animal cells require vast amounts of energy and possess numerous mitochondria."
  },
  {
    "id": "cell-compare-12",
    "question": "Which of the following is NOT a difference between plant and animal cells?",
    "options": [
      "Plant cells have a cell wall; animal cells do not.",
      "Plant cells have chloroplasts; animal cells do not.",
      "Plant cells have a nucleus; animal cells do not.",
      "Plant cells have a large central vacuole; animal cells have small vacuoles."
    ],
    "correctAnswer": 2,
    "explanation": "This is NOT a difference. Both plant and animal cells are eukaryotic and contain a true, membrane-bound nucleus. The other options correctly list major structural differences."
  },
  {
    "id": "cell-compare-13",
    "question": "Plasmodesmata are channels that connect the cytoplasm of adjacent:",
    "options": [
      "Animal cells",
      "Plant cells",
      "Bacterial cells",
      "All cell types"
    ],
    "correctAnswer": 1,
    "explanation": "Plasmodesmata are microscopic channels that traverse the cell walls of plant cells, allowing transport and communication between them. Animal cells use different structures called gap junctions for a similar purpose."
  },
  {
    "id": "cell-compare-14",
    "question": "The green pigment chlorophyll is found within the:",
    "options": [
      "Mitochondria",
      "Cytoplasm",
      "Thylakoid membranes of chloroplasts",
      "Nucleus"
    ],
    "correctAnswer": 2,
    "explanation": "Chlorophyll, the pigment that captures light energy for photosynthesis, is embedded in the thylakoid membranes inside the chloroplast. This is a defining feature of plant cells."
  },
  {
    "id": "cell-compare-15",
    "question": "In an animal cell, the organelles that are involved in organizing microtubules for cell division are the:",
    "options": [
      "Chloroplasts",
      "Centrioles",
      "Leucoplasts",
      "Vacuoles"
    ],
    "correctAnswer": 1,
    "explanation": "Centrioles, found in the centrosome of animal cells, are involved in organizing the microtubules of the mitotic spindle during cell division. This is a key feature distinguishing animal cells from most plant cells."
  },
  {
    "id": "cell-compare-16",
    "question": "Which statement best describes the energy processing of plant cells compared to animal cells?",
    "options": [
      "Plant cells only perform photosynthesis; animal cells only perform cellular respiration.",
      "Plant cells perform both photosynthesis and cellular respiration; animal cells only perform cellular respiration.",
      "Animal cells perform both photosynthesis and cellular respiration; plant cells only perform photosynthesis.",
      "Both cell types perform only cellular respiration."
    ],
    "correctAnswer": 1,
    "explanation": "Plant cells are autotrophic. They use chloroplasts to perform photosynthesis (to make food) and mitochondria to perform cellular respiration (to break down food for ATP). Animal cells are heterotrophic and only perform cellular respiration."
  },
  {
    "id": "cell-compare-17",
    "question": "Storage of pigments that give flowers and fruits their distinctive colors is the function of:",
    "options": [
      "Chloroplasts",
      "Chromoplasts",
      "Leucoplasts",
      "Vacuoles"
    ],
    "correctAnswer": 1,
    "explanation": "Chromoplasts are a type of plastid that synthesize and store pigments like carotenoids (red, orange, yellow), giving color to petals, fruits, and roots. This is a unique feature of plant cells."
  },
  {
    "id": "cell-compare-18",
    "question": "The flexibility and ability to change shape in animal cells is primarily due to the:",
    "options": [
      "Presence of a cell wall",
      "Absence of a cell wall",
      "Presence of a large vacuole",
      "Absence of a nucleus"
    ],
    "correctAnswer": 1,
    "explanation": "The absence of a rigid cell wall is the primary reason animal cells can change shape, move, and engulf particles (phagocytosis). Plant cells are constrained by their cell wall."
  },
  {
    "id": "cell-compare-19",
    "question": "Which organelle is generally larger and more prominent in plant cells than in animal cells?",
    "options": [
      "Nucleus",
      "Golgi apparatus",
      "Vacuole",
      "Lysosome"
    ],
    "correctAnswer": 2,
    "explanation": "The vacuole is a key distinguishing feature. Plant cells have a single, large central vacuole that can occupy most of the cell's volume. Animal cells have smaller, more numerous vacuoles or vesicles."
  },
  {
    "id": "cell-compare-20",
    "question": "The structure that provides external support and prevents a plant cell from bursting under hypotonic conditions is the:",
    "options": [
      "Cell membrane",
      "Contractile vacuole",
      "Cell wall",
      "Cytoskeleton"
    ],
    "correctAnswer": 2,
    "explanation": "The rigid cell wall exerts pressure back on the cell as water enters by osmosis (turgor pressure). This prevents the plant cell from bursting, a phenomenon that can occur in animal cells which lack this wall."
  },
  {
    "id": "cell-compare-21",
    "question": "Which of the following is a structure for cell-to-cell communication found in animal cells but not plant cells?",
    "options": [
      "Plasmodesmata",
      "Gap junctions",
      "Tight junctions",
      "Desmosomes"
    ],
    "correctAnswer": 1,
    "explanation": "Gap junctions are specialized intercellular connections in animal cells that allow small molecules and ions to pass directly between cells. Plant cells use plasmodesmata for a similar function."
  },
  {
    "id": "cell-compare-22",
    "question": "The term 'tonoplast' refers to the:",
    "options": [
      "Membrane of the nucleus",
      "Membrane of the chloroplast",
      "Membrane surrounding the central vacuole",
      "Inner membrane of the mitochondrion"
    ],
    "correctAnswer": 2,
    "explanation": "The tonoplast is the specific name for the membrane that surrounds the large central vacuole in a plant cell. It is a single membrane that regulates the movement of ions and molecules into and out of the vacuole."
  },
  {
    "id": "cell-compare-23",
    "question": "Which of the following is a common storage carbohydrate in plant cells that is not found in animal cells?",
    "options": [
      "Glycogen",
      "Starch",
      "Glucose",
      "Lactose"
    ],
    "correctAnswer": 1,
    "explanation": "Starch is the primary storage polysaccharide in plant cells, formed from glucose. Animal cells store glucose in the form of glycogen, which is a more highly branched molecule."
  },
  {
    "id": "cell-compare-24",
    "question": "The pressure exerted by the central vacuole against the cell wall is known as:",
    "options": [
      "Osmotic pressure",
      "Turgor pressure",
      "Atmospheric pressure",
      "Hydrostatic pressure"
    ],
    "correctAnswer": 1,
    "explanation": "Turgor pressure is the force exerted by the water-filled central vacuole against the rigid cell wall. It is essential for maintaining the structural integrity and rigidity of plant tissues. Animal cells do not experience turgor pressure."
  },
  {
    "id": "cell-compare-25",
    "question": "Which of the following is a key difference in how plant and animal cells undergo cytokinesis (cytoplasmic division)?",
    "options": [
      "Plant cells form a cleavage furrow; animal cells form a cell plate.",
      "Animal cells form a cleavage furrow; plant cells form a cell plate.",
      "Both form a cleavage furrow.",
      "Both form a cell plate."
    ],
    "correctAnswer": 1,
    "explanation": "Animal cells divide by forming a cleavage furrow that pinches the cell in two. Plant cells, because of their rigid cell wall, build a new cell wall structure called a cell plate between the two daughter nuclei, which develops into the new cell wall."
  },
  {
    "id": "cell-compare-26",
    "question": "Which of the following organelles is involved in the synthesis of lipids and detoxification in both plant and animal cells?",
    "options": [
      "Rough endoplasmic reticulum",
      "Smooth endoplasmic reticulum",
      "Golgi apparatus",
      "Lysosome"
    ],
    "correctAnswer": 1,
    "explanation": "The smooth endoplasmic reticulum (SER) is involved in lipid synthesis, carbohydrate metabolism, and detoxification of drugs and poisons. This is a key similarity found in both plant and animal cells."
  },
  {
    "id": "cell-compare-27",
    "question": "The primary function of the Golgi apparatus in both plant and animal cells is:",
    "options": [
      "Protein synthesis",
      "Modifying, sorting, and packaging proteins for secretion",
      "Cellular respiration",
      "Photosynthesis"
    ],
    "correctAnswer": 1,
    "explanation": "The Golgi apparatus acts as the 'post office' of the cell. It modifies proteins and lipids received from the ER, sorts them, and packages them into vesicles for transport to their final destinations (secretion, membrane, lysosomes). This function is essential in both cell types."
  },
  {
    "id": "cell-compare-28",
    "question": "Which of the following is a structure that provides mechanical strength and allows cytoplasmic streaming in plant cells?",
    "options": [
      "Actin filaments",
      "Microtubules",
      "Intermediate filaments",
      "Centrioles"
    ],
    "correctAnswer": 0,
    "explanation": "Actin filaments (microfilaments) are part of the cytoskeleton. In plant cells, they are crucial for cytoplasmic streaming (cyclosis), which facilitates the movement of nutrients and organelles within the large cell. They also provide mechanical support."
  },
  {
    "id": "cell-compare-29",
    "question": "The organelle that contains hydrolytic enzymes for breaking down macromolecules is found in:",
    "options": [
      "Plant cells only",
      "Animal cells only",
      "Both plant and animal cells",
      "Neither plant nor animal cells"
    ],
    "correctAnswer": 2,
    "explanation": "Lysosomes are membrane-bound organelles containing digestive enzymes. They break down worn-out organelles, food particles, and engulfed viruses or bacteria. While more prominent in animal cells, plant cells also contain lysosomal-like vesicles for degradation."
  },
  {
    "id": "cell-compare-30",
    "question": "Which of the following is a key component of the extracellular matrix of animal cells that is not found in plant cell walls?",
    "options": [
      "Cellulose",
      "Collagen",
      "Pectin",
      "Lignin"
    ],
    "correctAnswer": 1,
    "explanation": "Collagen is a fibrous protein that is a major component of the extracellular matrix in animal tissues, providing strength and structural support. Plant cell walls are composed of cellulose, hemicellulose, pectin, and sometimes lignin, but not collagen."
  },
    {
    "id": "cell-compare-31",
    "question": "Which of the following is a key function of the rough endoplasmic reticulum (RER) in both plant and animal cells?",
    "options": [
      "Lipid synthesis",
      "Protein synthesis and initial modification",
      "Detoxification of poisons",
      "ATP production"
    ],
    "correctAnswer": 1,
    "explanation": "The rough endoplasmic reticulum (RER) is studded with ribosomes. Its primary function is the synthesis of proteins that are destined for secretion, insertion into membranes, or packaging into lysosomes. This is a fundamental and shared process in both plant and animal cells."
  },
  {
    "id": "cell-compare-32",
    "question": "The organelle that is the control center of the cell, housing the genetic material (DNA), is the:",
    "options": [
      "Nucleolus",
      "Nucleus",
      "Mitochondrion",
      "Golgi apparatus"
    ],
    "correctAnswer": 1,
    "explanation": "The nucleus is a membrane-bound organelle that contains the cell's chromosomes (DNA). It controls gene expression and mediates the replication of DNA during the cell cycle. This is a defining feature of all eukaryotic cells, including both plants and animals."
  },
  {
    "id": "cell-compare-33",
    "question": "Which of the following is a structure found in both plant and animal cells that is involved in intracellular digestion?",
    "options": [
      "Chloroplast",
      "Lysosome",
      "Central vacuole",
      "Cell wall"
    ],
    "correctAnswer": 1,
    "explanation": "Lysosomes are membrane-bound organelles containing a variety of hydrolytic enzymes. They break down macromolecules, old cell parts, and ingested material through autophagy and phagocytosis. While their role is more emphasized in animal cells, plant cells also contain similar hydrolytic compartments."
  },
  {
    "id": "cell-compare-34",
    "question": "The sites of protein synthesis in both plant and animal cells are the:",
    "options": [
      "Mitochondria",
      "Lysosomes",
      "Ribosomes",
      "Nucleoli"
    ],
    "correctAnswer": 2,
    "explanation": "Ribosomes are non-membrane-bound organelles composed of rRNA and protein. They are the cellular machines that read mRNA sequences and assemble amino acids into polypeptide chains. They are found in the cytoplasm and on the RER in all living cells, including both plants and animals."
  },
  {
    "id": "cell-compare-35",
    "question": "Which of the following is a key difference in how plant and animal cells obtain energy?",
    "options": [
      "Plant cells only perform respiration; animal cells only perform photosynthesis.",
      "Plant cells can produce their own organic molecules via photosynthesis; animal cells must consume organic molecules.",
      "Animal cells can produce their own organic molecules via photosynthesis; plant cells must consume organic molecules.",
      "There is no difference; both obtain energy identically."
    ],
    "correctAnswer": 1,
    "explanation": "This is a fundamental metabolic difference. Plant cells are autotrophic (self-feeders) due to chloroplasts, allowing them to convert solar energy into chemical energy (glucose). Animal cells are heterotrophic (other-feeders) and must ingest other organisms to obtain organic molecules for energy."
  },
  {
    "id": "cell-compare-36",
    "question": "The structure within the nucleus that is responsible for assembling ribosomal subunits is the:",
    "options": [
      "Nuclear pore",
      "Nuclear envelope",
      "Nucleolus",
      "Chromatin"
    ],
    "correctAnswer": 2,
    "explanation": "The nucleolus is a dense region within the nucleus where ribosomal RNA (rRNA) is transcribed and ribosomal subunits are assembled. These subunits are then exported to the cytoplasm to form functional ribosomes. This process is essential and identical in both plant and animal cells."
  },
  {
    "id": "cell-compare-37",
    "question": "Which of the following is a function of the cytoskeleton that is common to both plant and animal cells?",
    "options": [
      "Photosynthesis",
      "Maintaining cell shape and providing internal organization",
      "Synthesis of cellulose",
      "Storage of starch"
    ],
    "correctAnswer": 1,
    "explanation": "The cytoskeleton (composed of microtubules, microfilaments, and intermediate filaments) provides structural support, determines cell shape, facilitates intracellular transport, and enables cell movement (e.g., cytoplasmic streaming in plants, amoeboid movement in animals). These are core functions in both cell types."
  },
  {
    "id": "cell-compare-38",
    "question": "Peroxisomes are organelles found in both plant and animal cells. Their functions include:",
    "options": [
      "Protein synthesis",
      "Breaking down fatty acids and detoxifying harmful substances",
      "Performing photosynthesis",
      "Organizing the mitotic spindle"
    ],
    "correctAnswer": 1,
    "explanation": "Peroxisomes are single-membrane-bound organelles that contain enzymes for beta-oxidation of fatty acids and the conversion of harmful hydrogen peroxide (H₂O₂) into water (H₂O) and oxygen (O₂). They are involved in detoxification and metabolism in both plant and animal cells."
  },
  {
    "id": "cell-compare-39",
    "question": "The double membrane that surrounds the nucleus is called the:",
    "options": [
      "Cell membrane",
      "Nuclear envelope",
      "Tonoplast",
      "Thylakoid membrane"
    ],
    "correctAnswer": 1,
    "explanation": "The nuclear envelope is a double lipid bilayer that separates the contents of the nucleus from the cytoplasm. It is studded with nuclear pores that regulate the transport of molecules. This is a universal feature of eukaryotic cells, including both plants and animals."
  },
  {
    "id": "cell-compare-40",
    "question": "Which of the following is a carbohydrate that animal cells use for energy storage?",
    "options": [
      "Starch",
      "Cellulose",
      "Glycogen",
      "Chitin"
    ],
    "correctAnswer": 2,
    "explanation": "Glycogen is a highly branched polymer of glucose and is the primary short-term energy storage molecule in animal cells and fungi. Plant cells use starch for this purpose. This represents a key biochemical difference in storage products."
  },
  {
    "id": "cell-compare-41",
    "question": "The theory that explains the origin of mitochondria and chloroplasts from ancient prokaryotic cells is called the:",
    "options": [
      "Cell theory",
      "Endosymbiotic theory",
      "Fluid mosaic model",
      "Theory of evolution"
    ],
    "correctAnswer": 1,
    "explanation": "The endosymbiotic theory proposes that mitochondria and chloroplasts were once free-living prokaryotes that were engulfed by a larger host cell. This explains why these organelles have their own DNA, double membranes, and ribosomes similar to prokaryotes. This origin story is a key similarity underlying these organelles in eukaryotes."
  },
  {
    "id": "cell-compare-42",
    "question": "Which of the following is a function of the cell membrane in both plant and animal cells?",
    "options": [
      "Providing rigid structural support",
      "Regulating the passage of materials into and out of the cell",
      "Performing photosynthesis",
      "Synthesizing proteins for export"
    ],
    "correctAnswer": 1,
    "explanation": "The cell (plasma) membrane is a semi-permeable barrier composed of a phospholipid bilayer. Its primary function is to regulate the transport of ions, nutrients, and waste, maintaining homeostasis. This is a fundamental and shared role in all cells, though in plant cells it is internal to the cell wall."
  },
  {
    "id": "cell-compare-43",
    "question": "The movement of chloroplasts within a plant cell is facilitated by:",
    "options": [
      "The cell wall",
      "Cytoplasmic streaming",
      "The large central vacuole",
      "Plasmodesmata"
    ],
    "correctAnswer": 1,
    "explanation": "Cytoplasmic streaming (cyclosis) is the circular movement of the cytoplasm within a plant cell. This process, driven by the cytoskeleton (actin-myosin interactions), helps to distribute nutrients, metabolites, and organelles like chloroplasts to maximize photosynthesis and efficiency."
  },
  {
    "id": "cell-compare-44",
    "question": "Which of the following is a key component of the animal cell extracellular matrix that provides tensile strength?",
    "options": [
      "Cellulose",
      "Collagen",
      "Starch",
      "Lignin"
    ],
    "correctAnswer": 1,
    "explanation": "Collagen is the most abundant protein in the animal kingdom and a primary component of the extracellular matrix (ECM). It forms strong, flexible fibers that provide structural and mechanical support to tissues. Plant cells have a cell wall instead of an extensive ECM."
  },
  {
    "id": "cell-compare-45",
    "question": "The organelle that modifies, sorts, and packages proteins for secretion or delivery to other organelles is the:",
    "options": [
      "Rough endoplasmic reticulum",
      "Smooth endoplasmic reticulum",
      "Golgi apparatus",
      "Lysosome"
    ],
    "correctAnswer": 2,
    "explanation": "The Golgi apparatus (or Golgi complex) receives proteins and lipids from the ER. It modifies them (e.g., adds carbohydrate tags to make glycoproteins), sorts them, and packages them into vesicles for transport to their final cellular destination or for secretion. This is a vital process in both plant and animal cells."
  },
  {
    "id": "cell-compare-46",
    "question": "In plant cells, the additional layer that is sometimes deposited between the primary cell wall and the cell membrane for extra support is the:",
    "options": [
      "Secondary cell wall",
      "Middle lamella",
      "Tertiary cell wall",
      "Cell plate"
    ],
    "correctAnswer": 0,
    "explanation": "Many plant cells, especially in wood and bark, develop a secondary cell wall inside the primary wall. This layer is often thicker, rigid, and impregnated with lignin, providing immense strength and waterproofing. This is a feature not found in animal cells."
  },
  {
    "id": "cell-compare-47",
    "question": "The gelatinous substance that fills the cell and surrounds the organelles is the:",
    "options": [
      "Cytosol",
      "Nucleoplasm",
      "Stroma",
      "Matrix"
    ],
    "correctAnswer": 0,
    "explanation": "The cytosol is the semi-fluid portion of the cytoplasm, excluding the membrane-bound organelles. It is the site of many metabolic reactions and contains the cytoskeleton. This internal environment is a key feature shared by both plant and animal cells."
  },
  {
    "id": "cell-compare-48",
    "question": "Which of the following statements about ribosomes is TRUE for both plant and animal cells?",
    "options": [
      "They are surrounded by a double membrane.",
      "They are found only attached to the endoplasmic reticulum.",
      "They are composed of RNA and protein.",
      "They are the site of lipid synthesis."
    ],
    "correctAnswer": 2,
    "explanation": "Ribosomes are universal cellular structures. They are not membrane-bound and are made up of ribosomal RNA (rRNA) and proteins. They can be found free in the cytosol (making proteins for internal use) or bound to the RER (making proteins for export or membranes)."
  },
  {
    "id": "cell-compare-49",
    "question": "The structure that facilitates the exchange of materials between the nucleus and the cytoplasm is the:",
    "options": [
      "Nuclear pore",
      "Nuclear envelope",
      "Endoplasmic reticulum",
      "Plasmodesmata"
    ],
    "correctAnswer": 0,
    "explanation": "Nuclear pores are large protein complexes that span the nuclear envelope. They act as selective channels, allowing the passage of molecules like mRNA and ribosomal subunits out of the nucleus and proteins into the nucleus. This is a critical feature of all eukaryotic cells."
  },
  {
    "id": "cell-compare-50",
    "question": "Which of the following is a pigment found in chloroplasts that is responsible for capturing light energy?",
    "options": [
      "Melanin",
      "Hemoglobin",
      "Chlorophyll",
      "Carotene"
    ],
    "correctAnswer": 2,
    "explanation": "Chlorophyll a is the primary pigment that absorbs light energy (primarily blue and red light) for photosynthesis. Its green color is reflected, giving plants their characteristic color. This is a defining molecule of plant cells, not found in animal cells."
  },
  {
    "id": "cell-compare-51",
    "question": "The 'powerhouse of the cell' is a nickname for which organelle?",
    "options": [
      "Nucleus",
      "Chloroplast",
      "Mitochondrion",
      "Golgi apparatus"
    ],
    "correctAnswer": 2,
    "explanation": "Mitochondria are often called the powerhouses because they are the site of cellular respiration, where energy (in the form of ATP) is generated from the breakdown of glucose. This is a critical function in both plant and animal cells."
  },
  {
    "id": "cell-compare-52",
    "question": "Which of the following is a function of the smooth endoplasmic reticulum (SER) in animal cells that is less prominent in plant cells?",
    "options": [
      "Protein synthesis",
      "Detoxification of drugs and poisons",
      "Calcium ion storage",
      "Lipid synthesis"
    ],
    "correctAnswer": 1,
    "explanation": "The SER in liver cells of animals is highly developed for detoxifying drugs and metabolic poisons. While plant cells have SER for lipid synthesis and other functions, this specific detoxification role is a major function in animal cells."
  },
  {
    "id": "cell-compare-53",
    "question": "The fluid-filled interior of a chloroplast is called the:",
    "options": [
      "Matrix",
      "Stroma",
      "Cytosol",
      "Thylakoid space"
    ],
    "correctAnswer": 1,
    "explanation": "The stroma is the dense fluid within the inner membrane of the chloroplast that surrounds the thylakoids. It contains the chloroplast DNA, ribosomes, and enzymes required for the light-independent reactions (Calvin cycle) of photosynthesis."
  },
  {
    "id": "cell-compare-54",
    "question": "Which of the following is a key difference in the way plant and animal cells communicate with adjacent cells?",
    "options": [
      "Plant cells use hormones; animal cells use electrical signals.",
      "Plant cells use plasmodesmata; animal cells use gap junctions.",
      "Plant cells use neurotransmitters; animal cells use plasmodesmata.",
      "There is no difference in cellular communication."
    ],
    "correctAnswer": 1,
    "explanation": "Plant cells are connected by plasmodesmata, which are cytoplasmic channels that pass through the cell wall. Animal cells are connected by gap junctions, which are clusters of channels that allow direct cytoplasmic exchange. Both serve a similar purpose of intercellular communication but are structurally different."
  },
  {
    "id": "cell-compare-55",
    "question": "The structure that forms during cell division in plant cells to become the new cell wall is the:",
    "options": [
      "Cleavage furrow",
      "Cell plate",
      "Phragmoplast",
      "Contractile ring"
    ],
    "correctAnswer": 1,
    "explanation": "During cytokinesis in plant cells, vesicles from the Golgi apparatus move to the middle of the cell and fuse to form a cell plate. The cell plate grows outward until it fuses with the existing cell wall, dividing the cell in two and forming new cell walls for the daughter cells."
  },
  {
    "id": "cell-compare-56",
    "question": "Which of the following is a function of the central vacuole in plant cells that is not a primary function of animal cell vacuoles?",
    "options": [
      "Storage of water",
      "Storage of ions",
      "Maintenance of turgor pressure",
      "Intracellular digestion"
    ],
    "correctAnswer": 2,
    "explanation": "The central vacuole's role in maintaining turgor pressure is unique to plant cells. By absorbing water, it pushes the cytoplasm against the rigid cell wall, keeping the cell firm and the plant upright. Animal cells do not have this need or mechanism."
  },
  {
    "id": "cell-compare-57",
    "question": "The organelle that contains its own circular DNA and ribosomes, suggesting an endosymbiotic origin, is the:",
    "options": [
      "Nucleus and Golgi apparatus",
      "Mitochondrion and chloroplast",
      "Lysosome and peroxisome",
      "RER and SER"
    ],
    "correctAnswer": 1,
    "explanation": "Both mitochondria and chloroplasts contain their own small, circular DNA molecules and 70S ribosomes (similar to prokaryotes). This is strong evidence supporting the endosymbiotic theory, which states they were once free-living bacteria. The nucleus has linear DNA and 80S ribosomes."
  },
  {
    "id": "cell-compare-58",
    "question": "Which of the following is a key structural polymer that provides rigidity and is found in the secondary cell walls of woody plants?",
    "options": [
      "Cellulose",
      "Chitin",
      "Lignin",
      "Pectin"
    ],
    "correctAnswer": 2,
    "explanation": "Lignin is a complex polymer that is deposited in the secondary cell walls of many plant cells, especially in wood and bark. It acts as a cement, embedding the cellulose fibers and providing exceptional strength and resistance to compression and decay. This is absent in animal cells."
  },
  {
"id": "cell-compare-59",
"question": "Which of the following structures is unique to plant cells and provides them with a fixed, rectangular shape?",
"options": [
"Cell membrane",
"Cytoskeleton",
"Cell wall",
"Large central vacuole"
],
"correctAnswer": 2,
"explanation": "The cell wall, composed primarily of cellulose, is a rigid outer layer that provides structural support, protection, and defines the shape of the plant cell. Animal cells lack a cell wall, which is why they are more flexible and often rounded."
},
{
"id": "cell-compare-60",
"question": "The process by which plant cells use sunlight to convert carbon dioxide and water into glucose is called:",
"options": [
"Cellular respiration",
"Photosynthesis",
"Phagocytosis",
"Protein synthesis"
],
"correctAnswer": 1,
"explanation": "Photosynthesis is the process carried out by chloroplasts in plant cells. It is the fundamental reason plants are autotrophs. Animal cells cannot perform photosynthesis as they lack chloroplasts."
},
{
"id": "cell-compare-61",
"question": "Which organelle is responsible for breaking down glucose to produce ATP (energy) in both plant and animal cells?",
"options": [
"Chloroplast",
"Nucleus",
"Mitochondrion",
"Golgi apparatus"
],
"correctAnswer": 2,
"explanation": "Mitochondria are the sites of cellular respiration, where glucose and oxygen are used to generate ATP. This process is essential for energy production in all eukaryotic cells, including both plants and animals."
},
{
"id": "cell-compare-62",
"question": "In animal cells, the structure that forms during cytokinesis to pinch the cell into two daughter cells is the:",
"options": [
"Cell plate",
"Cleavage furrow",
"Phragmoplast",
"Middle lamella"
],
"correctAnswer": 1,
"explanation": "Animal cells divide by forming a cleavage furrow. A contractile ring made of actin filaments pinches the cell membrane inward until the cell is cleaved in two. This is a key difference from plant cell cytokinesis, which involves building a new cell wall (cell plate)."
},
{
"id": "cell-compare-63",
"question": "The primary component of the plant cell wall is:",
"options": [
"Chitin",
"Cellulose",
"Phospholipid",
"Glycogen"
],
"correctAnswer": 1,
"explanation": "Cellulose, a polysaccharide made of glucose units, is the main structural fiber that makes up the primary cell wall of plants. It provides tensile strength. Animal cells do not produce cellulose."
},
{
"id": "cell-compare-64",
"question": "Which of the following is a storage polysaccharide found in plant cells?",
"options": [
"Glycogen",
"Starch",
"Chitin",
"Collagen"
],
"correctAnswer": 1,
"explanation": "Plants store excess glucose in the form of starch, which is a polymer of glucose. This is often stored in plastids like leucoplasts or in the vacuole. Animal cells store glucose as glycogen."
},
{
"id": "cell-compare-65",
"question": "The organelle that contains hydrolytic enzymes to break down macromolecules and is more common and prominent in animal cells is the:",
"options": [
"Peroxisome",
"Lysosome",
"Vacuole",
"Glyoxysome"
],
"correctAnswer": 1,
"explanation": "Lysosomes are membrane-bound sacs of digestive enzymes. They are a defining feature of animal cells, where they digest ingested food particles, old organelles, and pathogens. While plant cells have similar vacuolar functions, classic lysosomes are rare."
},
{
"id": "cell-compare-66",
"question": "Which structure allows for direct cytoplasmic connection and communication between adjacent plant cells?",
"options": [
"Tight junctions",
"Plasmodesmata",
"Gap junctions",
"Desmosomes"
],
"correctAnswer": 1,
"explanation": "Plasmodesmata are channels that traverse the cell walls of plant cells, connecting the cytoplasm of neighboring cells and allowing for the transport of ions, molecules, and some proteins. This is the plant cell equivalent of animal cell gap junctions."
},
{
"id": "cell-compare-67",
"question": "The green pigment essential for capturing light energy in plant cells is located within the:",
"options": [
"Mitochondria",
"Chromoplasts",
"Chloroplasts",
"Leucoplasts"
],
"correctAnswer": 2,
"explanation": "Chloroplasts are the organelles that contain chlorophyll, the green pigment that absorbs sunlight. This is the site of photosynthesis and is a definitive organelle that distinguishes plant cells from animal cells."
},
{
"id": "cell-compare-68",
"question": "Which of the following is a function of the large central vacuole in plant cells?",
"options": [
"ATP production",
"Protein synthesis",
"Storage of water and nutrients",
"Detoxification"
],
"correctAnswer": 2,
"explanation": "The large central vacuole is a hallmark of mature plant cells. It stores water, ions, sugars, pigments, and waste products. It also contributes to turgor pressure, which maintains cell rigidity. Animal cells may have small vacuoles, but nothing comparable in size or function."
},
{
"id": "cell-compare-69",
"question": "Centrioles are organelles involved in organizing the mitotic spindle and are found in:",
"options": [
"Plant cells only",
"Animal cells only",
"Both plant and animal cells",
"Neither plant nor animal cells"
],
"correctAnswer": 1,
"explanation": "Centrioles are a pair of microtubule-organized structures that form the centrosome. They are involved in cell division by organizing the spindle fibers. Centrioles are present in animal cells but are absent in most flowering plants."
},
{
"id": "cell-compare-70",
"question": "The 'post office' of the cell, which modifies, sorts, and packages proteins for secretion, is the:",
"options": [
"Rough Endoplasmic Reticulum",
"Smooth Endoplasmic Reticulum",
"Golgi Apparatus",
"Nucleus"
],
"correctAnswer": 2,
"explanation": "The Golgi Apparatus (or Golgi Body) receives proteins from the RER, modifies them (e.g., by adding carbohydrate tags), packages them into vesicles, and directs them to their final destination (e.g., cell membrane for secretion, lysosomes). This function is crucial in both plant and animal cells."
},
{
"id": "cell-compare-71",
"question": "Which type of plastid is responsible for storing starch in plant cells?",
"options": [
"Chloroplast",
"Chromoplast",
"Leucoplast",
"Elaioplast"
],
"correctAnswer": 2,
"explanation": "Leucoplasts are a category of colorless plastids involved in storage. Amyloplasts are a specific type of leucoplast that store starch. This is a structure unique to plant cells."
},
{
"id": "cell-compare-72",
"question": "The semifluid matrix inside the chloroplast where the Calvin cycle takes place is called the:",
"options": [
"Stroma",
"Cytosol",
"Grana",
"Thylakoid lumen"
],
"correctAnswer": 0,
"explanation": "The stroma is the dense fluid surrounding the thylakoid membranes inside the chloroplast. It contains the enzymes necessary for the light-independent reactions (Calvin cycle) of photosynthesis, where sugar is synthesized."
},
{
"id": "cell-compare-73",
"question": "Which of the following is a key difference between the extracellular matrix (ECM) of animal cells and the cell wall of plant cells?",
"options": [
"The ECM is made of cellulose; the cell wall is made of collagen.",
"The ECM is rigid and inflexible; the cell wall is fluid and flexible.",
"The ECM is primarily protein-based (collagen); the cell wall is primarily carbohydrate-based (cellulose).",
"Only the ECM provides structural support."
],
"correctAnswer": 2,
"explanation": "Animal cells secrete an elaborate extracellular matrix (ECM) made mainly of collagen and other proteins, which provides structural and biochemical support. Plant cells have a rigid cell wall external to the membrane, made mainly of the carbohydrate cellulose. Both provide support but are chemically distinct."
},
{
"id": "cell-compare-74",
"question": "The organelle involved in lipid synthesis, detoxification, and calcium storage is the:",
"options": [
"Rough Endoplasmic Reticulum",
"Smooth Endoplasmic Reticulum",
"Golgi Apparatus",
"Peroxisome"
],
"correctAnswer": 1,
"explanation": "The Smooth Endoplasmic Reticulum (SER) lacks ribosomes. Its functions include synthesizing lipids (like steroids), detoxifying drugs and poisons (especially in liver cells), and storing calcium ions. This organelle is present in both plant and animal cells, though its prominence varies."
},
{
"id": "cell-compare-75",
"question": "Which of the following is a structure found in BOTH plant and animal cells?",
"options": [
"Chloroplast",
"Cell wall",
"Large central vacuole",
"Mitochondrion"
],
"correctAnswer": 3,
"explanation": "Mitochondria are found in virtually all eukaryotic cells, including both plants and animals, as they are responsible for producing energy (ATP) through cellular respiration. The other options are unique to plant cells."
},
{
"id": "cell-compare-76",
"question": "The pressure exerted by the central vacuole against the cell wall, which helps keep the plant upright, is called:",
"options": [
"Osmotic pressure",
"Turgor pressure",
"Atmospheric pressure",
"Hydrostatic pressure"
],
"correctAnswer": 1,
"explanation": "Turgor pressure is the force within the cell that pushes the plasma membrane against the cell wall. It is caused by the osmotic flow of water into the central vacuole. This is a critical concept for plant support and rigidity, not applicable to animal cells."
},
{
"id": "cell-compare-77",
"question": "Which of the following is a function of the cytoskeleton?",
"options": [
"Photosynthesis",
"Cellular respiration",
"Cell movement and maintaining shape",
"Protein synthesis"
],
"correctAnswer": 2,
"explanation": "The cytoskeleton, a network of protein filaments (microtubules, microfilaments, intermediate filaments), provides structural support, enables cell movement (e.g., pseudopodia, cytoplasmic streaming), and acts as tracks for organelle transport. This is a vital function in both plant and animal cells."
},
{
"id": "cell-compare-78",
"question": "The structure that controls what enters and leaves the cell is the:",
"options": [
"Cell wall",
"Nuclear envelope",
"Cell membrane",
"Cytoskeleton"
],
"correctAnswer": 2,
"explanation": "The cell membrane (plasma membrane) is a selectively permeable barrier that surrounds the cell. It regulates the passage of materials, such as nutrients and waste, to maintain homeostasis. This is a fundamental feature of ALL cells, both plant and animal."
},
{
"id": "cell-compare-79",
"question": "A typical animal cell is best described as being:",
"options": [
"Rectangular and fixed in shape",
"Spherical or irregular and flexible in shape",
"Always having a green color due to chlorophyll",
"Lacking a nucleus"
],
"correctAnswer": 1,
"explanation": "Because animal cells lack a rigid cell wall, their shape is more flexible and dynamic. They can be spherical, irregular, or have specialized shapes (e.g., nerve cells are long and branched, muscle cells are spindle-shaped)."
},
{
"id": "cell-compare-80",
"question": "Which organelle is the control center of the cell and contains the DNA?",
"options": [
"Nucleolus",
"Nucleus",
"Mitochondrion",
"Golgi Apparatus"
],
"correctAnswer": 1,
"explanation": "The nucleus is a membrane-bound organelle that houses the cell's genetic material (DNA). It controls cellular activities by regulating gene expression. This is a defining feature of all eukaryotic cells, including both plants and animals."
},
{
"id": "cell-compare-81",
"question": "The stacks of thylakoid membranes found inside chloroplasts are called:",
"options": [
"Stroma",
"Grana",
"Cristae",
"Matrix"
],
"correctAnswer": 1,
"explanation": "Grana (singular: granum) are stacks of coin-shaped thylakoid membranes. The thylakoid membranes contain chlorophyll and are the site of the light-dependent reactions of photosynthesis. This structure is unique to chloroplasts in plant cells."
},
{
"id": "cell-compare-82",
"question": "Which of the following is a key metabolic difference between plant and animal cells?",
"options": [
"Plant cells perform cellular respiration; animal cells do not.",
"Animal cells perform photosynthesis; plant cells do not.",
"Plant cells can perform both photosynthesis and cellular respiration; animal cells only perform cellular respiration.",
"There is no metabolic difference."
],
"correctAnswer": 2,
"explanation": "Plant cells are autotrophic. They use chloroplasts for photosynthesis to make their own food (glucose) and then use mitochondria for cellular respiration to break down that glucose for energy. Animal cells are heterotrophic and only perform cellular respiration on consumed organic matter."
},
{
"id": "cell-compare-83",
"question": "The small, membrane-bound sac that transports materials within the cell is called a:",
"options": [
"Vacuole",
"Vesicle",
"Cisterna",
"Plastid"
],
"correctAnswer": 1,
"explanation": "Vesicles are small sacs that bud off from organelles like the ER and Golgi. They transport molecules like proteins and lipids to specific locations within the cell or to the cell membrane for secretion. This transport system is essential in both plant and animal cells."
},
{
"id": "cell-compare-84",
"question": "Which of the following is a feature of a typical plant cell but NOT an animal cell?",
"options": [
"Mitochondria",
"Nucleus",
"Cell membrane",
"Chloroplasts"
],
"correctAnswer": 3,
"explanation": "Chloroplasts are the organelles that carry out photosynthesis. They are a definitive feature of plant cells (and some protists) that is completely absent in animal cells."
},
{
"id": "cell-compare-85",
"question": "The folds of the inner mitochondrial membrane are called:",
"options": [
"Grana",
"Thylakoids",
"Cristae",
"Cisternae"
],
"correctAnswer": 2,
"explanation": "Cristae are the infoldings of the inner mitochondrial membrane. They greatly increase the surface area for the electron transport chain, which is crucial for efficient ATP production. This structure is found in the mitochondria of both plant and animal cells."
},
{
"id": "cell-compare-86",
"question": "Which structure is primarily responsible for the synthesis of proteins that will be exported from the cell?",
"options": [
"Free ribosomes in the cytosol",
"Ribosomes on the Rough Endoplasmic Reticulum",
"Ribosomes in the mitochondria",
"Ribosomes in the nucleus"
],
"correctAnswer": 1,
"explanation": "Ribosomes attached to the Rough ER synthesize proteins that are destined for insertion into membranes, packaging into organelles like lysosomes, or for secretion outside the cell. This pathway is a key feature of the endomembrane system in both plant and animal cells."
},
{
"id": "cell-compare-87",
"question": "The pectin-rich layer that cements adjacent plant cell walls together is called the:",
"options": [
"Secondary cell wall",
"Primary cell wall",
"Middle lamella",
"Plasma membrane"
],
"correctAnswer": 2,
"explanation": "The middle lamella is the outermost layer of the plant cell wall, rich in pectins. It acts like a glue to hold adjacent plant cells together. This intercellular material is not found in animal tissues."
},
{
"id": "cell-compare-88",
"question": "A major energy storage molecule in animal cells is:",
"options": [
"Starch",
"Cellulose",
"Glycogen",
"Triglyceride"
],
"correctAnswer": 2,
"explanation": "Animals store excess glucose in the form of glycogen, a highly branched polymer of glucose, primarily in the liver and muscle cells. This contrasts with plants, which store glucose as starch."
},
{
"id": "cell-compare-89",
"question": "Which of the following is a TRUE statement about plant and animal cells?",
"options": [
"Plant cells have mitochondria and chloroplasts; animal cells have only mitochondria.",
"Animal cells have a cell wall; plant cells do not.",
"Plant cells are generally smaller than animal cells.",
"Animal cells have a large central vacuole; plant cells have many small vacuoles."
],
"correctAnswer": 0,
"explanation": "This is a key comparative fact. Plant cells have both organelles for energy production and conversion. Animal cells rely solely on mitochondria for energy (ATP) production from organic molecules."
},
{
"id": "cell-compare-90",
"question": "The movement of water across a selectively permeable membrane from high to low concentration is called:",
"options": [
"Active transport",
"Osmosis",
"Diffusion",
"Facilitated diffusion"
],
"correctAnswer": 1,
"explanation": "Osmosis is the diffusion of water across a membrane. It is a passive process critical to both plant and animal cells. It is especially important for maintaining turgor pressure in plant cells via the central vacuole."
},
{
"id": "cell-compare-91",
"question": "Which organelle is responsible for producing ribosomal RNA (rRNA)?",
"options": [
"Nucleus",
"Nucleolus",
"Rough ER",
"Golgi Apparatus"
],
"correctAnswer": 1,
"explanation": "The nucleolus is a dense region within the nucleus where ribosomal RNA is transcribed and ribosomal subunits are assembled. This is a vital function for protein synthesis in all eukaryotic cells."
},
{
"id": "cell-compare-92",
"question": "The theory that mitochondria and chloroplasts evolved from free-living prokaryotic cells is known as:",
"options": [
"Cell Theory",
"Germ Theory",
"Endosymbiotic Theory",
"Theory of Evolution"
],
"correctAnswer": 2,
"explanation": "The Endosymbiotic Theory explains the origin of these organelles. Evidence includes their own circular DNA, double membranes, and 70S ribosomes, similar to prokaryotes. This theory highlights a shared evolutionary history in the cells of complex life."
},
{
"id": "cell-compare-93",
"question": "In which organelle does the process of cellular respiration primarily occur?",
"options": [
"Chloroplast",
"Nucleus",
"Mitochondrion",
"Vacuole"
],
"correctAnswer": 2,
"explanation": "Cellular respiration (the breakdown of glucose to produce ATP) occurs primarily in the mitochondria. The Krebs cycle happens in the mitochondrial matrix, and the electron transport chain occurs on the inner mitochondrial membrane (cristae)."
},
{
"id": "cell-compare-94",
"question": "Which of the following is a function shared by the vacuoles in both plant and animal cells?",
"options": [
"Maintaining turgor pressure",
"Storage of materials",
"Photosynthesis",
"Providing rigid support"
],
"correctAnswer": 1,
"explanation": "While the size and prominence differ greatly (large central vacuole in plants vs. small vacuoles/vesicles in animals), the core function of storage is shared. Both can store water, ions, nutrients, and waste products."
},
{
"id": "cell-compare-95",
"question": "The primary role of the cell membrane is to:",
"options": [
"Provide rigid structural support",
"Control the movement of substances in and out of the cell",
"Synthesize proteins for export",
"Produce energy for the cell"
],
"correctAnswer": 1,
"explanation": "The cell membrane's selective permeability is its most critical function. It maintains homeostasis by regulating the entry and exit of ions, nutrients, and wastes. This is a universal function for all cells."
},
{
"id": "cell-compare-96",
"question": "Which structure is found in plant cells but not in animal cells?",
"options": [
"Ribosome",
"Lysosome",
"Plastid",
"Peroxisome"
],
"correctAnswer": 2,
"explanation": "Plastids are a family of organelles in plant cells that include chloroplasts (photosynthesis), chromoplasts (pigment storage), and leucoplasts (starch storage). Animal cells do not possess any form of plastids."
},
{
"id": "cell-compare-97",
"question": "Cellular communication in animal cells via direct cytoplasmic channels is facilitated by:",
"options": [
"Plasmodesmata",
"Gap Junctions",
"Tight Junctions",
"Desmosomes"
],
"correctAnswer": 1,
"explanation": "Gap junctions are specialized intercellular connections in animal cells that allow various molecules and ions to pass directly between the cytoplasm of adjacent cells. This is functionally analogous to plasmodesmata in plant cells."
},
{
"id": "cell-compare-98",
"question": "The organelle that breaks down fatty acids and detoxifies harmful substances like hydrogen peroxide is the:",
"options": [
"Lysosome",
"Peroxisome",
"Glyoxysome",
"Smooth ER"
],
"correctAnswer": 1,
"explanation": "Peroxisomes are single-membrane-bound organelles that contain enzymes for beta-oxidation of fatty acids and the conversion of H₂O₂ to water. They are important for metabolism and detoxification in both plant and animal cells."
},
{
"id": "cell-compare-99",
"question": "A student observes a cell under a microscope and sees a rigid cell wall and chloroplasts. The cell is most likely from:",
"options": [
"A human",
"A mushroom",
"An oak tree",
"A bacterium"
],
"correctAnswer": 2,
"explanation": "The presence of a rigid cell wall and chloroplasts are definitive characteristics of a plant cell. An oak tree is a plant. Human cells (animal) lack both. Mushroom cells (fungi) have a cell wall but no chloroplasts. Bacteria have a cell wall but lack true, membrane-bound chloroplasts."
},
{
"id": "cell-compare-100",
"question": "Which of the following is a key SIMILARITY between plant and animal cells?",
"options": [
"Presence of a cell wall",
"Presence of chloroplasts",
"Presence of a nucleus and other membrane-bound organelles",
"Method of cytokinesis (cell splitting)"
],
"correctAnswer": 2,
"explanation": "Both plant and animal cells are eukaryotic, meaning they have a true nucleus and other membrane-bound organelles (mitochondria, ER, Golgi, etc.). This distinguishes them from prokaryotic cells and is their most fundamental similarity. The other options are key differences."
}
]

  