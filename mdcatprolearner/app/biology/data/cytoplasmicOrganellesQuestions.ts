export interface Question {
  id: string;
  question: string;
  options: string[];
  correctAnswer: number;
  explanation: string;
}

export const cytoplasmicOrganellesQuestions: Question[] = [
 
  {
    "id": "organelles-1",
    "question": "Which of the following is the primary function of the nucleus?",
    "options": [
      "Protein synthesis",
      "Cellular respiration",
      "Storage of genetic information and control of cellular activities",
      "Lipid synthesis"
    ],
    "correctAnswer": 2,
    "explanation": "The nucleus is the control center of the eukaryotic cell. It houses the cell's DNA, which contains the instructions for protein synthesis and regulates all cellular activities."
  },
  {
    "id": "organelles-2",
    "question": "The double membrane that surrounds the nucleus is called the:",
    "options": [
      "Plasma membrane",
      "Nuclear envelope",
      "Tonoplast",
      "Golgi membrane"
    ],
    "correctAnswer": 1,
    "explanation": "The nuclear envelope is a double lipid bilayer that separates the contents of the nucleus from the cytoplasm. It is studded with nuclear pores for regulated transport."
  },
  {
    "id": "organelles-3",
    "question": "Ribosomal RNA (rRNA) is synthesized and ribosomal subunits are assembled in the:",
    "options": [
      "Nuclear pore",
      "Nucleolus",
      "Rough ER",
      "Mitochondrial matrix"
    ],
    "correctAnswer": 1,
    "explanation": "The nucleolus is a dense, spherical structure inside the nucleus where rRNA genes are transcribed and ribosomal subunits are assembled before being exported to the cytoplasm."
  },
  {
    "id": "organelles-4",
    "question": "The 'powerhouse of the cell' is a nickname for which organelle?",
    "options": [
      "Nucleus",
      "Golgi apparatus",
      "Mitochondrion",
      "Endoplasmic reticulum"
    ],
    "correctAnswer": 2,
    "explanation": "Mitochondria are often called the powerhouses because they are the site of cellular respiration, where energy (in the form of ATP) is generated from the breakdown of glucose."
  },
  {
    "id": "organelles-5",
    "question": "The inner membrane of the mitochondrion is highly folded into structures called:",
    "options": [
      "Grana",
      "Cristae",
      "Cisternae",
      "Thylakoids"
    ],
    "correctAnswer": 1,
    "explanation": "Cristae are the infoldings of the inner mitochondrial membrane. They dramatically increase the surface area for the electron transport chain, which is crucial for ATP production."
  },
  {
    "id": "organelles-6",
    "question": "The fluid-filled space inside the inner mitochondrial membrane is called the:",
    "options": [
      "Stroma",
      "Cytosol",
      "Matrix",
      "Intermembrane space"
    ],
    "correctAnswer": 2,
    "explanation": "The mitochondrial matrix contains the mitochondrial DNA, ribosomes, and enzymes necessary for the Krebs cycle (citric acid cycle), a key part of cellular respiration."
  },
  {
    "id": "organelles-7",
    "question": "Which of the following organelles is a network of membranous tubules and sacs that is continuous with the nuclear envelope?",
    "options": [
      "Golgi apparatus",
      "Endoplasmic Reticulum",
      "Lysosome",
      "Peroxisome"
    ],
    "correctAnswer": 1,
    "explanation": "The Endoplasmic Reticulum (ER) is an extensive network of membranes that is physically connected to the outer layer of the nuclear envelope, forming a continuous compartment."
  },
  {
    "id": "organelles-8",
    "question": "The Rough Endoplasmic Reticulum (RER) appears 'rough' because it is studded with:",
    "options": [
      "Lysosomes",
      "Ribosomes",
      "Mitochondria",
      "Golgi vesicles"
    ],
    "correctAnswer": 1,
    "explanation": "The RER has a bumpy appearance due to the presence of ribosomes attached to its cytoplasmic surface. These ribosomes synthesize proteins that are destined for secretion or membranes."
  },
  {
    "id": "organelles-9",
    "question": "The primary function of the Rough Endoplasmic Reticulum is:",
    "options": [
      "Lipid and steroid synthesis",
      "Synthesis of secretory proteins and membrane proteins",
      "Detoxification of drugs",
      "ATP production"
    ],
    "correctAnswer": 1,
    "explanation": "The RER is responsible for the synthesis of proteins that will be secreted from the cell, inserted into membranes, or sent to lysosomes. The ribosomes on its surface carry out this synthesis."
  },
  {
    "id": "organelles-10",
    "question": "The Smooth Endoplasmic Reticulum (SER) is primarily involved in:",
    "options": [
      "Protein synthesis",
      "Cellular respiration",
      "Lipid synthesis, detoxification, and calcium ion storage",
      "Ribosome assembly"
    ],
    "correctAnswer": 2,
    "explanation": "The SER lacks ribosomes and has functions including synthesis of lipids (oils, phospholipids, steroids), detoxification of drugs and poisons, and storage of calcium ions."
  },
  {
    "id": "organelles-11",
    "question": "The organelle that receives, modifies, sorts, and packages proteins into vesicles for delivery is the:",
    "options": [
      "Rough Endoplasmic Reticulum",
      "Smooth Endoplasmic Reticulum",
      "Golgi Apparatus",
      "Nucleus"
    ],
    "correctAnswer": 2,
    "explanation": "The Golgi apparatus acts as the cell's 'post office.' It modifies proteins and lipids from the ER (e.g., by adding carbohydrate tags), sorts them, and packages them into vesicles for transport to their final destination."
  },
  {
    "id": "organelles-12",
    "question": "The Golgi apparatus is composed of flattened, membrane-bound sacs called:",
    "options": [
      "Cristae",
      "Thylakoids",
      "Cisternae",
      "Vesicles"
    ],
    "correctAnswer": 2,
    "explanation": "Cisternae are the stacked, flattened membrane discs that make up the Golgi apparatus. The stack has a cis face (receiving side) and a trans face (shipping side)."
  },
  {
    "id": "organelles-13",
    "question": "Vesicles that bud off from the Golgi apparatus can fuse with the plasma membrane to release their contents outside the cell. This process is called:",
    "options": [
      "Endocytosis",
      "Exocytosis",
      "Osmosis",
      "Phagocytosis"
    ],
    "correctAnswer": 1,
    "explanation": "Exocytosis is the process by which a vesicle fuses with the plasma membrane and releases its contents to the extracellular space. This is how the cell secretes proteins like hormones or neurotransmitters."
  },
  {
    "id": "organelles-14",
    "question": "Which of the following is strong evidence for the endosymbiotic origin of mitochondria?",
    "options": [
      "They have a single membrane.",
      "They contain their own circular DNA and 70S ribosomes.",
      "They are produced by the Golgi apparatus.",
      "They are found in all prokaryotic cells."
    ],
    "correctAnswer": 1,
    "explanation": "Mitochondria have their own small, circular DNA (similar to bacterial chromosomes) and 70S ribosomes (similar to prokaryotic ribosomes), supporting the theory that they were once free-living prokaryotes."
  },
  {
    "id": "organelles-15",
    "question": "The process of cellular respiration, which produces ATP, occurs primarily in the:",
    "options": [
      "Nucleus",
      "Lysosomes",
      "Mitochondria",
      "Smooth ER"
    ],
    "correctAnswer": 2,
    "explanation": "Cellular respiration (glycolysis in cytosol, Krebs cycle in matrix, electron transport chain on cristae) is the process that generates ATP, and its major stages occur within the mitochondria."
  },
  {
    "id": "organelles-16",
    "question": "The nuclear pores embedded in the nuclear envelope function to:",
    "options": [
      "Synthesize ribosomal RNA",
      "Regulate the passage of molecules between the nucleus and cytoplasm",
      "Replicate DNA",
      "Store calcium ions"
    ],
    "correctAnswer": 1,
    "explanation": "Nuclear pores are large protein complexes that act as selective channels, allowing the passage of molecules like mRNA and ribosomal subunits out of the nucleus and proteins into the nucleus."
  },
  {
    "id": "organelles-17",
    "question": "Which organelle would be most abundant in a cell that produces large quantities of steroid hormones, such as in the adrenal gland?",
    "options": [
      "Rough ER",
      "Smooth ER",
      "Golgi apparatus",
      "Lysosomes"
    ],
    "correctAnswer": 1,
    "explanation": "Steroid hormones are lipids. The Smooth ER is the primary site of lipid synthesis, so cells specializing in hormone production would have a well-developed SER."
  },
  {
    "id": "organelles-18",
    "question": "A protein destined for secretion from the cell would follow which pathway?",
    "options": [
      "Golgi → RER → Vesicle → Plasma Membrane",
      "RER → Golgi → Vesicle → Plasma Membrane",
      "SER → Golgi → Vesicle → Plasma Membrane",
      "Nucleus → RER → Vesicle → Plasma Membrane"
    ],
    "correctAnswer": 1,
    "explanation": "The correct secretory pathway is: synthesis on RER ribosomes → transport vesicle buds from ER → fuses with Golgi for modification → vesicle from Golgi → fuses with plasma membrane for exocytosis."
  },
  {
    "id": "organelles-19",
    "question": "The DNA within a eukaryotic cell is primarily organized into a complex with proteins called histones to form:",
    "options": [
      "Chromatin",
      "Ribosomes",
      "Cristae",
      "Cisternae"
    ],
    "correctAnswer": 0,
    "explanation": "In the nucleus, DNA is wound around histone proteins to form chromatin, which condenses into visible chromosomes during cell division. This organization helps pack a long DNA molecule into the nucleus."
  },
  {
    "id": "organelles-20",
    "question": "Which of the following is a function of the mitochondria?",
    "options": [
      "Photosynthesis",
      "Storage of genetic information",
      "Production of ATP through oxidative phosphorylation",
      "Synthesis of proteins for export"
    ],
    "correctAnswer": 2,
    "explanation": "The primary function of mitochondria is to produce ATP, the cell's energy currency. This is achieved through oxidative phosphorylation on the inner mitochondrial membrane."
  },
  {
    "id": "organelles-21",
    "question": "The 'receiving' side of the Golgi apparatus, which faces the ER, is called the:",
    "options": [
      "Trans face",
      "Cis face",
      "Medial region",
      "Forming face"
    ],
    "correctAnswer": 1,
    "explanation": "The Golgi stack has a distinct polarity. The cis face is the receiving end, where vesicles from the ER fuse. The trans face is the shipping end, where modified products depart in new vesicles."
  },
  {
    "id": "organelles-22",
    "question": "A liver cell, which detoxifies drugs and alcohol, would be expected to have a large amount of:",
    "options": [
      "Rough ER",
      "Smooth ER",
      "Mitochondria",
      "Lysosomes"
    ],
    "correctAnswer": 1,
    "explanation": "Detoxification of harmful substances is a key function of the Smooth Endoplasmic Reticulum. Liver cells, which process toxins, are rich in SER."
  },
  {
    "id": "organelles-23",
    "question": "The Endosymbiotic Theory explains the evolutionary origin of:",
    "options": [
      "The nucleus and endoplasmic reticulum",
      "The Golgi apparatus and lysosomes",
      "Mitochondria and chloroplasts",
      "The cell membrane and ribosomes"
    ],
    "correctAnswer": 2,
    "explanation": "The Endosymbiotic Theory proposes that mitochondria and chloroplasts were once free-living prokaryotic organisms that were engulfed by a larger host cell and eventually evolved into organelles."
  },
  {
    "id": "organelles-24",
    "question": "Which organelle is responsible for the initial modification of proteins, such as folding and adding carbohydrate chains?",
    "options": [
      "Golgi apparatus",
      "Nucleus",
      "Endoplasmic Reticulum",
      "Mitochondria"
    ],
    "correctAnswer": 2,
    "explanation": "Proteins enter the ER lumen as they are synthesized. Inside the ER, they fold into their 3D shape and often undergo initial glycosylation (addition of carbohydrate chains)."
  },
  {
    "id": "organelles-25",
    "question": "The space between the two membranes of the nuclear envelope is called the:",
    "options": [
      "Perinuclear space",
      "Intermembrane space",
      "Matrix",
      "Cristae space"
    ],
    "correctAnswer": 0,
    "explanation": "The perinuclear space (or nuclear envelope lumen) is the narrow space between the inner and outer nuclear membranes. It is continuous with the lumen of the Rough ER."
  },
  {
    "id": "organelles-26",
    "question": "A pancreatic cell that secretes digestive enzymes would be expected to have a well-developed:",
    "options": [
      "Smooth ER and Golgi apparatus",
      "Rough ER and Golgi apparatus",
      "Mitochondria and nucleus only",
      "Lysosomes and peroxisomes"
    ],
    "correctAnswer": 1,
    "explanation": "Digestive enzymes are proteins. Cells that secrete large amounts of protein have an extensive Rough ER for synthesis and a prominent Golgi apparatus for processing and packaging those proteins."
  },
  {
    "id": "organelles-27",
    "question": "The Krebs cycle (citric acid cycle) of cellular respiration takes place in the:",
    "options": [
      "Cytosol",
      "Inner mitochondrial membrane",
      "Mitochondrial matrix",
      "Intermembrane space"
    ],
    "correctAnswer": 2,
    "explanation": "The enzymes and reactants for the Krebs cycle are dissolved in the mitochondrial matrix, where this series of chemical reactions occurs."
  },
  {
    "id": "organelles-28",
    "question": "Which structure is responsible for the physical separation of DNA from the metabolic machinery of the cytoplasm?",
    "options": [
      "Nucleolus",
      "Nuclear envelope",
      "Golgi apparatus",
      "Endoplasmic reticulum"
    ],
    "correctAnswer": 1,
    "explanation": "The nuclear envelope creates a separate compartment for the DNA, allowing for complex regulation of gene expression and protecting the genetic material from the potentially disruptive environment of the cytoplasm."
  },
  {
    "id": "organelles-29",
    "question": "The final modification, sorting, and packaging of proteins for secretion occurs in the:",
    "options": [
      "Rough ER",
      "Smooth ER",
      "Golgi apparatus",
      "Nucleus"
    ],
    "correctAnswer": 2,
    "explanation": "While the RER performs initial protein modification, the Golgi apparatus is where final processing (like adding finishing touches to carbohydrate chains), sorting, and packaging into specific vesicles occurs."
  },
  {
    "id": "organelles-30",
    "question": "Which of the following is NOT a component of the endomembrane system?",
    "options": [
      "Nuclear envelope",
      "Endoplasmic Reticulum",
      "Mitochondria",
      "Golgi apparatus"
    ],
    "correctAnswer": 2,
    "explanation": "The endomembrane system includes organelles that work together to modify, package, and transport lipids and proteins. It includes the nuclear envelope, ER, Golgi, lysosomes, vesicles, and plasma membrane. Mitochondria are not part of this system."
  },
  {
    "id": "organelles-31",
    "question": "The electron transport chain, which creates a proton gradient for ATP synthesis, is located on the:",
    "options": [
      "Mitochondrial matrix",
      "Outer mitochondrial membrane",
      "Inner mitochondrial membrane (cristae)",
      "Intermembrane space"
    ],
    "correctAnswer": 2,
    "explanation": "The protein complexes of the electron transport chain are embedded in the inner mitochondrial membrane. The folding of this membrane into cristae provides a large surface area for this process."
  },
  {
    "id": "organelles-32",
    "question": "The nucleolus is a structure found within the:",
    "options": [
      "Mitochondria",
      "Nucleus",
      "Golgi apparatus",
      "Endoplasmic Reticulum"
    ],
    "correctAnswer": 1,
    "explanation": "The nucleolus is a prominent, non-membrane-bound structure located inside the nucleus. A cell can have more than one nucleolus."
  },
  {
    "id": "organelles-33",
    "question": "A muscle cell, which requires vast amounts of energy for contraction, would be expected to have a high number of:",
    "options": [
      "Golgi apparatus",
      "Lysosomes",
      "Mitochondria",
      "Smooth ER"
    ],
    "correctAnswer": 2,
    "explanation": "Mitochondria produce ATP. Tissues with high energy demands, like muscle and nerve tissue, are packed with mitochondria to meet their energy needs."
  },
  {
    "id": "organelles-34",
    "question": "The outer membrane of the mitochondrion is:",
    "options": [
      "Highly folded into cristae",
      "Smooth and contains porin proteins",
      "The site of the electron transport chain",
      "The location of the Krebs cycle enzymes"
    ],
    "correctAnswer": 1,
    "explanation": "The outer mitochondrial membrane is smooth and contains large channel proteins called porins, making it permeable to many small molecules. The inner membrane is the highly selective one with cristae."
  },
  {
    "id": "organelles-35",
    "question": "The process of adding a carbohydrate group to a protein to form a glycoprotein is called:",
    "options": [
      "Phosphorylation",
      "Glycosylation",
      "Acetylation",
      "Methylation"
    ],
    "correctAnswer": 1,
    "explanation": "Glycosylation is the enzymatic process of attaching carbohydrates to proteins. It begins in the RER and is often completed in the Golgi apparatus. This modification is crucial for protein targeting and function."
  },
  {
    "id": "organelles-36",
    "question": "Which organelle is physically connected to the outer nuclear membrane?",
    "options": [
      "Golgi apparatus",
      "Lysosome",
      "Endoplasmic Reticulum",
      "Mitochondrion"
    ],
    "correctAnswer": 2,
    "explanation": "The endoplasmic reticulum is continuous with the outer nuclear membrane, meaning the space inside the ER (the lumen) is directly connected to the perinuclear space."
  },
  {
    "id": "organelles-37",
    "question": "The 'shipping' side of the Golgi apparatus is called the:",
    "options": [
      "Cis face",
      "Trans face",
      "Medial face",
      "Forming face"
    ],
    "correctAnswer": 1,
    "explanation": "The trans face of the Golgi is the 'shipping department.' Here, fully modified products are packaged into vesicles that bud off and travel to their final destinations, such as the plasma membrane or other organelles."
  },
  {
    "id": "organelles-38",
    "question": "A cell is treated with a drug that disrupts the Golgi apparatus. Which process would be most directly affected?",
    "options": [
      "ATP production",
      "DNA replication",
      "Processing and sorting of proteins for secretion",
      "Detoxification of poisons"
    ],
    "correctAnswer": 2,
    "explanation": "The Golgi apparatus is essential for modifying, sorting, and packaging proteins. If it is disrupted, the cell cannot properly process proteins for secretion or for delivery to other organelles like lysosomes."
  },
  {
    "id": "organelles-39",
    "question": "The nucleus contains the cell's genetic material in the form of:",
    "options": [
      "RNA",
      "ATP",
      "DNA",
      "Proteins"
    ],
    "correctAnswer": 2,
    "explanation": "The primary function of the nucleus is to house and protect the cell's DNA, which contains the genes that code for all proteins and RNA molecules."
  },
  {
    "id": "organelles-40",
    "question": "Which of the following is a key difference between the Rough ER and the Smooth ER?",
    "options": [
      "The RER is involved in lipid synthesis; the SER is involved in protein synthesis.",
      "The RER has ribosomes; the SER does not.",
      "The RER is part of the endomembrane system; the SER is not.",
      "The RER produces ATP; the SER stores calcium."
    ],
    "correctAnswer": 1,
    "explanation": "The presence (RER) or absence (SER) of ribosomes on the cytoplasmic surface is the defining structural difference between these two forms of ER, which leads to their different functions."
  },
  {
    "id": "organelles-41",
    "question": "The folds of the inner mitochondrial membrane (cristae) serve to:",
    "options": [
      "Store the mitochondrial DNA",
      "Increase the surface area for ATP production",
      "Protect the organelle from damage",
      "Synthesize phospholipids for the membrane"
    ],
    "correctAnswer": 1,
    "explanation": "The extensive folding of the inner membrane into cristae creates a very large surface area for the attachment of proteins involved in the electron transport chain and ATP synthase, maximizing ATP production."
  },
  {
    "id": "organelles-42",
    "question": "Which organelle is responsible for the synthesis of transport vesicles?",
    "options": [
      "The nucleus buds off vesicles",
      "The Golgi apparatus buds off vesicles from its trans face",
      "Mitochondria produce vesicles for energy transport",
      "Ribosomes directly form vesicles"
    ],
    "correctAnswer": 1,
    "explanation": "A key function of the Golgi apparatus is to package its processed products into transport vesicles that bud from the trans face. These vesicles then travel to and fuse with other membranes, like the plasma membrane."
  },
  {
    "id": "organelles-43",
    "question": "The nucleoplasm is the:",
    "options": [
      "Fluid within the nucleus",
      "Membrane surrounding the nucleus",
      "Fluid within mitochondria",
      "Site of ribosome assembly"
    ],
    "correctAnswer": 0,
    "explanation": "The nucleoplasm is the semi-fluid matrix inside the nuclear envelope, analogous to the cytoplasm. It contains the chromatin and the nucleolus."
  },
  {
    "id": "organelles-44",
    "question": "A protein that will be embedded in the plasma membrane is synthesized by:",
    "options": [
      "Free ribosomes in the cytosol",
      "Ribosomes attached to the Rough ER",
      "Ribosomes inside the mitochondria",
      "Ribosomes in the nucleolus"
    ],
    "correctAnswer": 1,
    "explanation": "Proteins destined for membranes (plasma membrane, organelle membranes) or for secretion are synthesized by ribosomes attached to the RER. They are inserted into the ER membrane as they are made."
  },
  {
    "id": "organelles-45",
    "question": "The Endosymbiotic Theory is supported by the fact that mitochondria:",
    "options": [
      "Are produced by the Golgi apparatus",
      "Have a single membrane",
      "Can survive independently outside the cell",
      "Divide by a process similar to binary fission"
    ],
    "correctAnswer": 3,
    "explanation": "Mitochondria divide independently of the host cell through a process that resembles the binary fission of bacteria, which is strong evidence for their prokaryotic ancestry."
  },
  {
    "id": "organelles-46",
    "question": "The function of the Golgi apparatus is most closely related to the function of the:",
    "options": [
      "Nucleus",
      "Endoplasmic Reticulum",
      "Mitochondria",
      "Cytoskeleton"
    ],
    "correctAnswer": 1,
    "explanation": "The Golgi apparatus and Endoplasmic Reticulum are key partners in the endomembrane system. The ER synthesizes proteins and lipids, and the Golgi receives, modifies, and ships these products."
  },
  {
    "id": "organelles-47",
    "question": "Which of the following is a function of the Smooth Endoplasmic Reticulum in liver cells?",
    "options": [
      "Synthesis of digestive enzymes",
      "Detoxification of drugs and alcohols",
      "Assembly of ribosomal subunits",
      "Production of mRNA"
    ],
    "correctAnswer": 1,
    "explanation": "A major function of the SER in liver cells (hepatocytes) is to detoxify harmful chemicals, such as drugs and alcohol, by using enzymes to convert them into less toxic or water-soluble compounds."
  },
  {
    "id": "organelles-48",
    "question": "The structure that allows mRNA to exit the nucleus is the:",
    "options": [
      "Nuclear pore",
      "Nuclear envelope",
      "Nucleolus",
      "Golgi vesicle"
    ],
    "correctAnswer": 0,
    "explanation": "After transcription, mRNA molecules are processed and then exported through nuclear pores into the cytoplasm, where they can be translated by ribosomes."
  },
  {
    "id": "organelles-49",
    "question": "A cell that is actively secreting antibodies would have a prominent:",
    "options": [
      "Nucleolus and mitochondria",
      "Smooth ER and lysosomes",
      "Rough ER and Golgi apparatus",
      "Cytoskeleton and peroxisomes"
    ],
    "correctAnswer": 2,
    "explanation": "Antibodies are proteins. A cell secreting large amounts of protein (like a plasma cell) requires an extensive Rough ER for synthesis and a large Golgi apparatus for processing and packaging these proteins for secretion."
  },
  {
    "id": "organelles-50",
    "question": "The mitochondrial DNA is located in the:",
    "options": [
      "Intermembrane space",
      "Cristae",
      "Matrix",
      "Outer membrane"
    ],
    "correctAnswer": 2,
    "explanation": "The mitochondrial matrix contains the mitochondrial genome, which is a small, circular DNA molecule that encodes some of the proteins needed for mitochondrial function."
  },
  
  {
    "id": "organelles-51",
    "question": "A signal peptide on a newly synthesized protein directs the ribosome to the:",
    "options": [
      "Golgi apparatus",
      "Mitochondrial matrix",
      "Rough Endoplasmic Reticulum",
      "Nucleolus"
    ],
    "correctAnswer": 2,
    "explanation": "A specific signal peptide at the beginning of a protein's sequence is recognized by a signal-recognition particle (SRP), which directs the ribosome to dock on the RER. The protein is then synthesized directly into the ER lumen."
  },
  {
    "id": "organelles-52",
    "question": "Which of the following statements about the nucleus is FALSE?",
    "options": [
      "It contains chromosomes.",
      "It is surrounded by a double membrane.",
      "It is the site of ATP production.",
      "It controls the activities of the cell."
    ],
    "correctAnswer": 2,
    "explanation": "The nucleus controls cell activities by housing DNA and directing gene expression. ATP production is the function of mitochondria, not the nucleus."
  },
  {
    "id": "organelles-53",
    "question": "The synthesis of phospholipids for cellular membranes occurs in the:",
    "options": [
      "Rough ER",
      "Smooth ER",
      "Golgi apparatus",
      "Mitochondria"
    ],
    "correctAnswer": 1,
    "explanation": "The Smooth Endoplasmic Reticulum is the primary site for the synthesis of lipids, including phospholipids and cholesterol, which are essential components of all cellular membranes."
  },
  {
    "id": "organelles-54",
    "question": "The space between the inner and outer mitochondrial membranes is called the:",
    "options": [
      "Matrix",
      "Cristae",
      "Intermembrane space",
      "Perinuclear space"
    ],
    "correctAnswer": 2,
    "explanation": "The intermembrane space is the compartment between the outer and inner mitochondrial membranes. It has a high proton (H+) concentration during electron transport, which drives ATP synthesis."
  },
  {
    "id": "organelles-55",
    "question": "Which organelle is responsible for the final 'sorting' of proteins, directing them to lysosomes, the plasma membrane, or for secretion?",
    "options": [
      "Rough ER",
      "Smooth ER",
      "Golgi apparatus",
      "Nucleus"
    ],
    "correctAnswer": 2,
    "explanation": "A key function of the Golgi apparatus is to 'tag' and sort proteins into different transport vesicles based on their final destination (e.g., lysosomes, secretion, membrane)."
  },
  {
    "id": "organelles-56",
    "question": "The inner membrane of the mitochondrion is impermeable to most ions and small molecules. This allows it to:",
    "options": [
      "Protect the mitochondrial DNA",
      "Maintain a proton gradient for chemiosmosis",
      "Store calcium ions effectively",
      "Facilitate the rapid diffusion of ATP"
    ],
    "correctAnswer": 1,
    "explanation": "The selective impermeability of the inner mitochondrial membrane is crucial for maintaining the proton (H+) gradient established by the electron transport chain. This gradient is the driving force for ATP synthesis by ATP synthase."
  },
  {
    "id": "organelles-57",
    "question": "A cell is unable to synthesize any new proteins. The most likely organelle to be dysfunctional is the:",
    "options": [
      "Golgi apparatus",
      "Nucleolus",
      "Smooth ER",
      "Mitochondria"
    ],
    "correctAnswer": 1,
    "explanation": "The nucleolus is responsible for producing ribosomal RNA and assembling ribosomal subunits. Without functional ribosomes, which are assembled in the nucleolus, protein synthesis cannot occur."
  },
  {
    "id": "organelles-58",
    "question": "Which of the following is a key difference between mitochondrial DNA and nuclear DNA?",
    "options": [
      "Mitochondrial DNA is linear; nuclear DNA is circular.",
      "Mitochondrial DNA is inherited only from the mother; nuclear DNA is inherited from both parents.",
      "Mitochondrial DNA has introns; nuclear DNA does not.",
      "Mitochondrial DNA is found in the nucleolus; nuclear DNA is in the chromatin."
    ],
    "correctAnswer": 1,
    "explanation": "A key genetic difference is the pattern of inheritance. Mitochondrial DNA is maternally inherited (from the egg cell). Nuclear DNA is a combination of chromosomes from both parents."
  },
  {
    "id": "organelles-59",
    "question": "The function of the endoplasmic reticulum is most closely tied to which other organelle?",
    "options": [
      "Nucleus",
      "Golgi apparatus",
      "Lysosome",
      "All of the above"
    ],
    "correctAnswer": 3,
    "explanation": "The ER is central to the endomembrane system. It receives lipids and proteins from the cytosol (often based on nuclear blueprints), modifies them, and sends them via vesicles to the Golgi, which then sends them to lysosomes, the plasma membrane, etc."
  },
  {
    "id": "organelles-60",
    "question": "The 'post-translational modification' of proteins, such as the addition of phosphate groups, often occurs in the:",
    "options": [
      "Rough ER",
      "Golgi apparatus",
      "Nucleus",
      "Mitochondrial matrix"
    ],
    "correctAnswer": 1,
    "explanation": "While initial modifications like glycosylation start in the RER, the Golgi apparatus is a major site for further post-translational modifications, including phosphorylation (adding phosphate) and sulfation, which can activate or deactivate proteins."
  },
  {
    "id": "organelles-61",
    "question": "A cell has a defect that prevents the Golgi apparatus from forming vesicles. The process that would be most immediately halted is:",
    "options": [
      "Transcription",
      "Exocytosis",
      "ATP production",
      "DNA replication"
    ],
    "correctAnswer": 1,
    "explanation": "The Golgi apparatus packages products into vesicles for transport. If vesicle formation is blocked, the cell cannot export materials via exocytosis, as there are no vesicles to carry the cargo to the plasma membrane."
  },
  {
    "id": "organelles-62",
    "question": "The structure responsible for the synthesis of rRNA is the:",
    "options": [
      "Nuclear pore",
      "Nucleolus",
      "Rough ER",
      "Golgi apparatus"
    ],
    "correctAnswer": 1,
    "explanation": "The nucleolus contains loops of DNA that code for ribosomal RNA (rRNA). This DNA is transcribed, and the rRNA is processed and assembled with proteins to form ribosomal subunits within the nucleolus."
  },
  {
    "id": "organelles-63",
    "question": "Which of the following is a function of the mitochondrial matrix?",
    "options": [
      "Hosting the electron transport chain",
      "Carrying out the Krebs cycle",
      "Performing glycolysis",
      "Synthesizing phospholipids"
    ],
    "correctAnswer": 1,
    "explanation": "The mitochondrial matrix contains the enzymes and reactants necessary to carry out the Krebs cycle (also known as the citric acid cycle), which produces high-energy electron carriers for the electron transport chain."
  },
  {
    "id": "organelles-64",
    "question": "A scientist observes a cell with an exceptionally extensive network of Rough ER. This cell is most likely specialized for:",
    "options": [
      "Lipid storage",
      "Protein secretion",
      "ATP production",
      "Detoxification"
    ],
    "correctAnswer": 1,
    "explanation": "An extensive Rough ER is characteristic of cells that are highly active in protein synthesis for export, such as pancreatic cells (digestive enzymes), plasma cells (antibodies), or cells that secrete collagen."
  },
  {
    "id": "organelles-65",
    "question": "The movement of vesicles from the ER to the Golgi apparatus, and from the Golgi to other destinations, relies on:",
    "options": [
      "The cytoskeleton and motor proteins",
      "Diffusion through the cytosol",
      "The nuclear pores",
      "The mitochondrial proton gradient"
    ],
    "correctAnswer": 0,
    "explanation": "Vesicles are not free-floating. They are actively transported along tracks provided by the cytoskeleton (microtubules and microfilaments) using motor proteins (like kinesin and dynein) that 'walk' the vesicles to their target membranes."
  },
  {
    "id": "organelles-66",
    "question": "The nuclear lamina is a network of protein filaments that:",
    "options": [
      "Synthesizes ribosomal subunits",
      "Provides structural support to the nucleus",
      "Forms the nuclear pores",
      "Is the site of transcription"
    ],
    "correctAnswer": 1,
    "explanation": "The nuclear lamina is a dense fibrillar network inside the nucleus of most cells. It is composed of intermediate filaments and membrane-associated proteins. It provides mechanical support and helps organize the chromatin."
  },
  {
    "id": "organelles-67",
    "question": "Which of the following is NOT a function of the Golgi apparatus?",
    "options": [
      "Modification of glycoproteins",
      "Synthesis of polysaccharides for plant cell walls",
      "Sorting of proteins to their final cellular destination",
      "Synthesis of ribosomal RNA"
    ],
    "correctAnswer": 3,
    "explanation": "Synthesis of ribosomal RNA (rRNA) is the function of the nucleolus within the nucleus. The Golgi apparatus modifies, sorts, and packages products from the ER; in plants, it also synthesizes certain polysaccharides for the cell wall."
  },
  {
    "id": "organelles-68",
    "question": "The proton gradient used to power ATP synthesis is found across the:",
    "options": [
      "Outer mitochondrial membrane",
      "Inner mitochondrial membrane",
      "Nuclear envelope",
      "Golgi membrane"
    ],
    "correctAnswer": 1,
    "explanation": "The electron transport chain pumps protons (H+) from the mitochondrial matrix into the intermembrane space, creating a concentration gradient across the inner mitochondrial membrane. The flow of protons back into the matrix through ATP synthase drives ATP production."
  },
  {
    "id": "organelles-69",
    "question": "A gene is expressed when:",
    "options": [
      "It is replicated in the nucleus",
      "It is transcribed into mRNA in the nucleus",
      "It is translated into protein on the RER",
      "It is packaged by the Golgi apparatus"
    ],
    "correctAnswer": 1,
    "explanation": "Gene expression begins with transcription in the nucleus, where a specific DNA sequence is copied into a messenger RNA (mRNA) molecule. This mRNA is then processed and exported to the cytoplasm for translation."
  },
  {
    "id": "organelles-70",
    "question": "The structure that facilitates the exchange of materials between the nucleus and the cytoplasm is the:",
    "options": [
      "Nuclear pore",
      "Nuclear envelope",
      "Endoplasmic reticulum",
      "Golgi vesicle"
    ],
    "correctAnswer": 0,
    "explanation": "Nuclear pores are large, complex protein assemblies that span the nuclear envelope. They act as selective gates, allowing passage of molecules like RNA and proteins between the nucleoplasm and the cytoplasm."
  },
  {
    "id": "organelles-71",
    "question": "A cell from the small intestine has many finger-like projections to increase absorption. These cells would need a high number of ___ to provide the energy for active transport.",
    "options": [
      "Golgi bodies",
      "Nuclei",
      "Mitochondria",
      "Smooth ER"
    ],
    "correctAnswer": 2,
    "explanation": "Active transport processes, like nutrient absorption in the intestine, require ATP. Mitochondria are the organelles that produce this ATP, so cells performing lots of active transport are rich in mitochondria."
  },
  {
    "id": "organelles-72",
    "question": "The initial step of glycosylation (adding a carbohydrate to a protein) occurs in the:",
    "options": [
      "Golgi apparatus",
      "Rough Endoplasmic Reticulum",
      "Nucleus",
      "Cytosol"
    ],
    "correctAnswer": 1,
    "explanation": "As a protein is being synthesized into the lumen of the Rough ER, a core oligosaccharide chain is often added to it, beginning the process of glycosylation to form a glycoprotein."
  },
  {
    "id": "organelles-73",
    "question": "Which of the following organelles can self-replicate?",
    "options": [
      "Nucleus and Golgi apparatus",
      "Mitochondria and chloroplasts",
      "Endoplasmic reticulum and lysosomes",
      "Ribosomes and peroxisomes"
    ],
    "correctAnswer": 1,
    "explanation": "Mitochondria (and chloroplasts) contain their own DNA and can replicate independently of the cell cycle through a process similar to binary fission. This is a key piece of evidence for their endosymbiotic origin."
  },
  {
    "id": "organelles-74",
    "question": "The 'Nuclear Localization Signal' is a sequence of amino acids that directs a protein to:",
    "options": [
      "The mitochondria",
      "The Golgi apparatus",
      "The nucleus",
      "The Rough ER"
    ],
    "correctAnswer": 2,
    "explanation": "Proteins that function in the nucleus (e.g., transcription factors, histones) possess a nuclear localization signal (NLS). This signal is recognized by importin proteins, which ferry the protein through the nuclear pore complex into the nucleus."
  },
  {
    "id": "organelles-75",
    "question": "The primary role of ATP synthase is to:",
    "options": [
      "Pump protons into the intermembrane space",
      "Synthesize ATP using the energy of a proton gradient",
      "Break down ATP to pump protons",
      "Carry out the reactions of the Krebs cycle"
    ],
    "correctAnswer": 1,
    "explanation": "ATP synthase is a complex enzyme embedded in the inner mitochondrial membrane (and thylakoid membrane in chloroplasts). It acts like a turbine, using the energy from the flow of protons down their gradient to catalyze the synthesis of ATP from ADP and inorganic phosphate."
  },
  {
    "id": "organelles-76",
    "question": "A cell lacks functional mitochondria. Which process would be most severely affected?",
    "options": [
      "Glycolysis",
      "Aerobic respiration",
      "Protein synthesis",
      "Transcription"
    ],
    "correctAnswer": 1,
    "explanation": "While glycolysis can occur in the cytosol without mitochondria, the vast majority of ATP (about 36 out of 38 molecules per glucose) is produced by aerobic respiration within the mitochondria. Without mitochondria, a cell must rely on inefficient anaerobic pathways."
  },
  {
    "id": "organelles-77",
    "question": "The term 'endomembrane system' includes all of the following EXCEPT:",
    "options": [
      "Golgi apparatus",
      "Endoplasmic reticulum",
      "Mitochondria",
      "Nuclear envelope"
    ],
    "correctAnswer": 2,
    "explanation": "The endomembrane system is a group of membranes and organelles that work together to modify, package, and transport lipids and proteins. It includes the nuclear envelope, ER, Golgi, lysosomes, vesicles, and plasma membrane. Mitochondria are not part of this system."
  },
  {
    "id": "organelles-78",
    "question": "The function of the nucleolus is to synthesize _____ and assemble _____.",
    "options": [
      "Proteins; ribosomes",
      "rRNA; ribosomal subunits",
      "mRNA; transcription factors",
      "DNA; chromatin"
    ],
    "correctAnswer": 1,
    "explanation": "The nucleolus is the site of ribosomal RNA (rRNA) synthesis. Here, rRNA genes are transcribed, and the resulting rRNA is combined with proteins imported from the cytoplasm to form the large and small ribosomal subunits."
  },
  {
    "id": "organelles-79",
    "question": "Which of the following is a key structural difference between the RER and SER?",
    "options": [
      "The RER is connected to the nucleus; the SER is not.",
      "The RER has ribosomes; the SER does not.",
      "The RER is involved in detoxification; the SER is involved in protein synthesis.",
      "The RER has a double membrane; the SER has a single membrane."
    ],
    "correctAnswer": 1,
    "explanation": "The presence of bound ribosomes is the defining structural characteristic that distinguishes the Rough ER from the Smooth ER. Both are part of a continuous membrane system connected to the nuclear envelope."
  },
  {
    "id": "organelles-80",
    "question": "The final three-dimensional shape of a protein is primarily determined and checked for quality in the:",
    "options": [
      "Nucleus",
      "Golgi apparatus",
      "Endoplasmic Reticulum",
      "Mitochondria"
    ],
    "correctAnswer": 2,
    "explanation": "As proteins are synthesized into the ER lumen, they fold into their native three-dimensional conformation. Chaperone proteins within the ER help ensure proper folding. Misfolded proteins are often targeted for degradation."
  },
  {
    "id": "organelles-81",
    "question": "The Krebs cycle produces which of the following that are used in the electron transport chain?",
    "options": [
      "Glucose and oxygen",
      "ATP and carbon dioxide",
      "NADH and FADH2",
      "Protons and water"
    ],
    "correctAnswer": 2,
    "explanation": "The main purpose of the Krebs cycle is to produce high-energy electron carriers: NADH and FADH2. These molecules then donate their electrons to the electron transport chain on the inner mitochondrial membrane."
  },
  {
    "id": "organelles-82",
    "question": "A vesicle carrying materials from the Golgi apparatus to the plasma membrane for secretion is called a:",
    "options": [
      "Lysosome",
      "Peroxisome",
      "Secretory vesicle",
      "Transport vesicle"
    ],
    "correctAnswer": 2,
    "explanation": "Secretory vesicles are specialized transport vesicles that bud from the trans face of the Golgi apparatus and carry their cargo to the plasma membrane, where they fuse and release the contents to the outside of the cell via exocytosis."
  },
  {
    "id": "organelles-83",
    "question": "The outer membrane of the nucleus is continuous with the membrane of the:",
    "options": [
      "Golgi apparatus",
      "Lysosome",
      "Rough Endoplasmic Reticulum",
      "Mitochondrion"
    ],
    "correctAnswer": 2,
    "explanation": "The outer nuclear membrane is structurally and functionally continuous with the membrane of the Rough ER. The space between the two nuclear membranes (perinuclear space) is continuous with the lumen of the RER."
  },
  {
    "id": "organelles-84",
    "question": "Which of the following is a correct sequence for a protein that is secreted from the cell?",
    "options": [
      "Ribosome → Golgi → RER → Vesicle → Plasma Membrane",
      "RER → Ribosome → Golgi → Vesicle → Plasma Membrane",
      "Ribosome → RER → Golgi → Vesicle → Plasma Membrane",
      "Golgi → RER → Ribosome → Vesicle → Plasma Membrane"
    ],
    "correctAnswer": 2,
    "explanation": "The correct order is: 1. Synthesis on ribosomes bound to RER. 2. Transport vesicle buds from RER. 3. Vesicle fuses with Golgi for modification. 4. Vesicle buds from Golgi. 5. Vesicle fuses with plasma membrane for exocytosis."
  },
  {
    "id": "organelles-85",
    "question": "The function of the mitochondria is most closely related to the function of the:",
    "options": [
      "Chloroplast",
      "Nucleus",
      "Lysosome",
      "Golgi apparatus"
    ],
    "correctAnswer": 0,
    "explanation": "Both mitochondria and chloroplasts are energy-converting organelles. Mitochondria convert chemical energy from food into ATP (cellular respiration), while chloroplasts convert light energy into chemical energy (photosynthesis). Both also have endosymbiotic origins."
  },
  {
    "id": "organelles-86",
    "question": "A cell is treated with a toxin that clumps the chromatin and disrupts the nuclear envelope. The process most directly affected would be:",
    "options": [
      "ATP production",
      "Gene expression",
      "Lipid synthesis",
      "Protein packaging"
    ],
    "correctAnswer": 1,
    "explanation": "The nucleus houses the DNA (as chromatin) and is the site of transcription. Disrupting its structure would directly interfere with the ability to express genes and produce RNA, impacting all downstream cellular functions."
  },
  {
    "id": "organelles-87",
    "question": "The role of the Golgi apparatus in forming lysosomes is to:",
    "options": [
      "Synthesize the hydrolytic enzymes",
      "Package the hydrolytic enzymes into vesicles",
      "Provide the energy for enzyme activation",
      "Transcribe the genes for the enzymes"
    ],
    "correctAnswer": 1,
    "explanation": "Lysosomal enzymes are synthesized in the RER and modified in the Golgi apparatus. The Golgi packages these enzymes into vesicles that bud off to become lysosomes or deliver enzymes to existing lysosomes."
  },
  {
    "id": "organelles-88",
    "question": "The mitochondrial matrix contains all of the following EXCEPT:",
    "options": [
      "Enzymes for the Krebs cycle",
      "Mitochondrial DNA",
      "70S ribosomes",
      "Enzymes for the electron transport chain"
    ],
    "correctAnswer": 3,
    "explanation": "The enzymes and protein complexes for the electron transport chain are embedded in the inner mitochondrial membrane, not free in the matrix. The matrix contains the components for the Krebs cycle, along with mitochondrial DNA and ribosomes."
  },
  {
    "id": "organelles-89",
    "question": "The structure that gives the nucleus its shape and provides attachment sites for chromatin is the:",
    "options": [
      "Nuclear pore",
      "Nuclear lamina",
      "Nucleolus",
      "Nuclear envelope"
    ],
    "correctAnswer": 1,
    "explanation": "The nuclear lamina is a dense fibrous meshwork of proteins (lamins) lining the inner surface of the nuclear envelope. It provides structural support and helps organize the chromatin by providing attachment sites."
  },
  {
    "id": "organelles-90",
    "question": "Which of the following is a key function of the SER in muscle cells?",
    "options": [
      "Synthesis of steroid hormones",
      "Storage and release of calcium ions",
      "Detoxification of drugs",
      "Synthesis of secretory proteins"
    ],
    "correctAnswer": 1,
    "explanation": "In muscle cells, the Smooth ER is highly specialized and is called the sarcoplasmic reticulum. Its main function is to store calcium ions and release them to trigger muscle contraction when the cell is stimulated."
  },
  {
    "id": "organelles-91",
    "question": "The process of chemiosmosis, which couples electron transport to ATP synthesis, occurs in the:",
    "options": [
      "Nucleus",
      "Golgi apparatus",
      "Mitochondria",
      "Rough ER"
    ],
    "correctAnswer": 2,
    "explanation": "Chemiosmosis is the process where the energy stored in a proton gradient across a membrane is used to drive ATP synthesis. This is the mechanism by which mitochondria (and chloroplasts) produce ATP."
  },
  {
    "id": "organelles-92",
    "question": "A cell is unable to produce any ribosomal subunits. The most likely defect is in the:",
    "options": [
      "Golgi apparatus",
      "Nucleolus",
      "Rough ER",
      "Smooth ER"
    ],
    "correctAnswer": 1,
    "explanation": "The nucleolus is the factory for ribosomal subunit assembly. If it is non-functional, the cell cannot produce new ribosomes, halting all protein synthesis and leading to cell death."
  },
  {
    "id": "organelles-93",
    "question": "The 'gatekeeper' of the nucleus, controlling what enters and exits, is the:",
    "options": [
      "Nuclear envelope",
      "Nuclear pore complex",
      "Nuclear lamina",
      "Nucleolus"
    ],
    "correctAnswer": 1,
    "explanation": "The nuclear pore complex is a sophisticated structure that acts as a selective gate, allowing passive diffusion of small molecules and active, regulated transport of larger molecules like proteins and RNA."
  },
  {
    "id": "organelles-94",
    "question": "Which organelle is primarily responsible for the synthesis of proteins that will be inserted into the cell membrane?",
    "options": [
      "Free cytoplasmic ribosomes",
      "Mitochondrial ribosomes",
      "Ribosomes on the Rough ER",
      "Ribosomes in the nucleolus"
    ],
    "correctAnswer": 2,
    "explanation": "Integral membrane proteins are synthesized by ribosomes attached to the Rough ER. As the protein is made, it is inserted directly into the ER membrane. This membrane can later become part of the plasma membrane via vesicle fusion."
  },
  {
    "id": "organelles-95",
    "question": "The function of the cristae in mitochondria is to:",
    "options": [
      "Store the mitochondrial genome",
      "Increase the surface area for metabolic reactions",
      "Synthesize phospholipids",
      "Package proteins for export"
    ],
    "correctAnswer": 1,
    "explanation": "The highly folded cristae dramatically increase the surface area of the inner mitochondrial membrane. This allows for a much greater capacity to host the protein complexes of the electron transport chain and ATP synthase, maximizing ATP production."
  },
  {
    "id": "organelles-96",
    "question": "The movement of a protein from the RER to the Golgi apparatus occurs via:",
    "options": [
      "Diffusion through the cytosol",
      "Active transport through nuclear pores",
      "Transport vesicles that bud and fuse",
      "Direct connection through the cytoskeleton"
    ],
    "correctAnswer": 2,
    "explanation": "Proteins do not float freely. They are transported between membrane-bound organelles via transport vesicles. A vesicle buds off from the RER, travels through the cytosol, and fuses with the cis face of the Golgi apparatus, delivering its cargo."
  },
  {
    "id": "organelles-97",
    "question": "A cell has a mutation that prevents the formation of a proton gradient in the mitochondria. The direct consequence would be:",
    "options": [
      "Halting of the Krebs cycle",
      "Failure of ATP synthase to produce ATP",
      "Inability to perform glycolysis",
      "Blockage of protein synthesis"
    ],
    "correctAnswer": 1,
    "explanation": "ATP synthase relies on the proton gradient (chemiosmotic gradient) across the inner mitochondrial membrane as its energy source. If the gradient is dissipated, ATP synthase cannot phosphorylate ADP to ATP, halting oxidative phosphorylation."
  },
  {
    "id": "organelles-98",
    "question": "The term 'endomembrane' refers to the idea that these organelles:",
    "options": [
      "Are all involved in energy production",
      "Have membranes that are physically or functionally connected",
      "Are only found in the center of the cell",
      "Are all the same size"
    ],
    "correctAnswer": 1,
    "explanation": "The endomembrane system includes organelles whose membranes are either directly continuous (like the ER and nuclear envelope) or connected through the transfer of vesicles (like the ER, Golgi, and plasma membrane)."
  },
  {
    "id": "organelles-99",
    "question": "Which of the following is a function shared by both the RER and the SER?",
    "options": [
      "Protein synthesis",
      "Lipid synthesis",
      "Detoxification",
      "Forming transport vesicles"
    ],
    "correctAnswer": 3,
    "explanation": "Both the Rough and Smooth ER are involved in forming transport vesicles. The RER packages proteins into vesicles destined for the Golgi. The SER packages lipids into vesicles for transport to various destinations."
  },
  {
    "id": "organelles-100",
    "question": "The overall process of gene expression requires the coordinated function of the:",
    "options": [
      "Nucleus, ribosomes, and RER/Golgi for some proteins",
      "Mitochondria and chloroplasts only",
      "SER and Golgi apparatus only",
      "Lysosomes and peroxisomes"
    ],
    "correctAnswer": 0,
    "explanation": "Gene expression involves transcription of DNA to mRNA in the nucleus, translation of mRNA to protein on ribosomes (free or on RER), and for many proteins, further processing and packaging in the RER and Golgi apparatus. This highlights the functional integration of these organelles."
  }

]