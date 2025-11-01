export interface Question {
  id: string;
  question: string;
  options: string[];
  correctAnswer: number;
  explanation: string;
}

export const conjugatedMoleculesQuestions: Question[] = [
  
  {
    "id": "conj-1",
    "question": "What are conjugated molecules?",
    "options": [
      "Molecules made only of carbon and hydrogen",
      "Simple proteins without any additions",
      "Molecules composed of a protein or lipid covalently bonded to a carbohydrate",
      "Pure carbohydrate chains"
    ],
    "correctAnswer": 2,
    "explanation": "Conjugated molecules, or conjugates, are biomolecules formed by the covalent attachment of a carbohydrate (sugar) to another biomolecule, most commonly a protein (forming a glycoprotein) or a lipid (forming a glycolipid)."
  },
  {
    "id": "conj-2",
    "question": "A molecule consisting of a carbohydrate covalently linked to a protein is called a:",
    "options": [
      "Glycolipid",
      "Glycoprotein",
      "Lipoprotein",
      "Nucleoprotein"
    ],
    "correctAnswer": 1,
    "explanation": "A glycoprotein is a conjugated molecule where one or more carbohydrate chains (oligosaccharides) are covalently attached to a protein backbone. The carbohydrate part is called a glycan."
  },
  {
    "id": "conj-3",
    "question": "A molecule consisting of a carbohydrate covalently linked to a lipid is called a:",
    "options": [
      "Glycoprotein",
      "Glycolipid",
      "Phospholipid",
      "Triglyceride"
    ],
    "correctAnswer": 1,
    "explanation": "A glycolipid is a type of conjugated lipid where a carbohydrate is attached by a glycosidic bond to a lipid molecule, such as a sphingosine (in sphingoglycolipids) or a glycerol derivative."
  },
  {
    "id": "conj-4",
    "question": "The carbohydrate component in conjugated molecules is often referred to as a:",
    "options": [
      "Monomer",
      "Glycan",
      "Fatty acid",
      "Peptide"
    ],
    "correctAnswer": 1,
    "explanation": "The term 'glycan' refers to the carbohydrate or oligosaccharide chain that is covalently linked to the non-carbohydrate part (protein or lipid) in a conjugated molecule like a glycoprotein or glycolipid."
  },
  {
    "id": "conj-5",
    "question": "Where are glycolipids primarily found in animal cells?",
    "options": [
      "Mitochondrial matrix",
      "Cytosol",
      "Outer leaflet of the plasma membrane",
      "Nuclear envelope"
    ],
    "correctAnswer": 2,
    "explanation": "In animal cells, glycolipids are located almost exclusively in the outer leaflet of the plasma membrane. Their sugar groups are exposed on the cell surface, where they play crucial roles in cell recognition and communication."
  },
  {
    "id": "conj-6",
    "question": "The primary function of glycoproteins on the cell surface is:",
    "options": [
      "Energy storage",
      "Cell recognition and adhesion",
      "Membrane fluidity",
      "DNA replication"
    ],
    "correctAnswer": 1,
    "explanation": "Cell surface glycoproteins are crucial for recognition and adhesion. Their diverse carbohydrate chains act like unique molecular 'ID cards,' allowing cells to recognize each other, adhere to form tissues, and interact with the immune system."
  },
  {
    "id": "conj-7",
    "question": "Which type of bond links the carbohydrate to the protein in a glycoprotein?",
    "options": [
      "Peptide bond",
      "Ester bond",
      "Glycosidic bond",
      "Phosphodiester bond"
    ],
    "correctAnswer": 2,
    "explanation": "The carbohydrate chain (glycan) is attached to the protein via a glycosidic bond. This bond forms between the anomeric carbon of a sugar and a functional group on an amino acid side chain (e.g., -OH of serine/threonine for O-linkage, or -NH₂ of asparagine for N-linkage)."
  },
  {
    "id": "conj-8",
    "question": "Which amino acid is commonly involved in O-linked glycosylation?",
    "options": [
      "Asparagine",
      "Serine",
      "Lysine",
      "Glutamic acid"
    ],
    "correctAnswer": 1,
    "explanation": "In O-linked glycosylation, the sugar chain is attached to the oxygen atom in the hydroxyl group (-OH) of the amino acids serine or threonine."
  },
  {
    "id": "conj-9",
    "question": "Which amino acid is the site for N-linked glycosylation?",
    "options": [
      "Serine",
      "Threonine",
      "Asparagine",
      "Tyrosine"
    ],
    "correctAnswer": 2,
    "explanation": "In N-linked glycosylation, the sugar chain is attached to the nitrogen atom in the amide group (-NH₂) of the amino acid asparagine. The consensus sequence for N-glycosylation is Asn-X-Ser/Thr, where X is any amino acid except proline."
  },
  {
    "id": "conj-10",
    "question": "Which of the following is a classic example of a glycolipid?",
    "options": [
      "Collagen",
      "Cerebroside",
      "Hemoglobin",
      "Insulin"
    ],
    "correctAnswer": 1,
    "explanation": "Cerebrosides are a type of glycolipid. They are composed of a monosaccharide (usually glucose or galactose) linked to a ceramide lipid (sphingosine + fatty acid). They are abundant in the myelin sheath of nerve cells."
  },
  {
    "id": "conj-11",
    "question": "The ABO blood group antigens are determined by:",
    "options": [
      "The protein sequence of hemoglobin",
      "The lipid composition of the membrane",
      "Specific sugar sequences on glycolipids and glycoproteins",
      "The DNA sequence in the nucleus"
    ],
    "correctAnswer": 2,
    "explanation": "A, B, and O blood types are determined by the specific structure of oligosaccharide chains (antigens) present on glycolipids and glycoproteins on the surface of red blood cells. The difference between type A and B is a single sugar residue."
  },
  {
    "id": "conj-12",
    "question": "Which of the following is a function of glycolipids?",
    "options": [
      "Catalyzing metabolic reactions",
      "Providing energy",
      "Acting as receptors for toxins and hormones",
      "Storing genetic information"
    ],
    "correctAnswer": 2,
    "explanation": "Glycolipids, with their sugar head groups exposed on the cell surface, often serve as receptors. They can bind to specific molecules like hormones, neurotransmitters, and even bacterial toxins (e.g., cholera toxin binds to GM1 ganglioside), initiating cellular responses."
  },
  {
    "id": "conj-13",
    "question": "The process of adding a carbohydrate group to a protein is called:",
    "options": [
      "Glycosylation",
      "Phosphorylation",
      "Acetylation",
      "Methylation"
    ],
    "correctAnswer": 0,
    "explanation": "Glycosylation is the enzymatic process of attaching a carbohydrate (glycan) to a protein or lipid molecule to form a glycoconjugate (glycoprotein or glycolipid). It is a common post-translational modification."
  },
  {
    "id": "conj-14",
    "question": "Mucins are glycoproteins that are major components of:",
    "options": [
      "Cytoskeleton",
      "Mucus secretions",
      "Ribosomes",
      "Chromatin"
    ],
    "correctAnswer": 1,
    "explanation": "Mucins are heavily glycosylated glycoproteins. They are the main macromolecular components of mucus, the slippery secretion that coats the surfaces of epithelial cells in the respiratory, digestive, and reproductive tracts, providing lubrication and protection."
  },
  {
    "id": "conj-15",
    "question": "Which lipid backbone is most common for animal glycolipids?",
    "options": [
      "Glycerol",
      "Sphingosine",
      "Cholesterol",
      "Fatty acid"
    ],
    "correctAnswer": 1,
    "explanation": "The most common glycolipids in animals are sphingoglycolipids. These are based on a sphingosine backbone (a long-chain amino alcohol), not glycerol. A fatty acid is attached to sphingosine via an amide bond to form a ceramide, and the sugar is attached to the ceramide."
  },
  {
    "id": "conj-16",
    "question": "Gangliosides are complex glycolipids that contain:",
    "options": [
      "Only glucose",
      "Amino sugars and sialic acid",
      "Pure fatty acid chains",
      "No carbohydrates"
    ],
    "correctAnswer": 1,
    "explanation": "Gangliosides are the most complex glycolipids. They are characterized by the presence of one or more sialic acid residues (e.g., N-acetylneuraminic acid, NANA) in their oligosaccharide head group, along with other sugars like glucose, galactose, and N-acetylgalactosamine."
  },
  {
    "id": "conj-17",
    "question": "The 'glycocalyx' is a term referring to the:",
    "options": [
      "Inner mitochondrial membrane",
      "Sugar-rich coating on the cell surface",
      "Nuclear pore complex",
      "Core of a ribosome"
    ],
    "correctAnswer": 1,
    "explanation": "The glycocalyx is a carbohydrate-rich layer that coats the outer surface of the plasma membrane. It is composed of the carbohydrate moieties of membrane-bound glycolipids and glycoproteins, as well as secreted glycoproteins. It is crucial for protection, cell adhesion, and recognition."
  },
  {
    "id": "conj-18",
    "question": "Which organelle is primarily responsible for the glycosylation of proteins?",
    "options": [
      "Mitochondria",
      "Endoplasmic Reticulum and Golgi apparatus",
      "Nucleus",
      "Peroxisome"
    ],
    "correctAnswer": 1,
    "explanation": "Protein glycosylation is a major function of the endomembrane system. N-linked glycosylation begins in the endoplasmic reticulum (ER) and is often modified in the Golgi apparatus. O-linked glycosylation primarily occurs in the Golgi apparatus."
  },
  {
    "id": "conj-19",
    "question": "A deficiency in breaking down glycolipids leads to their accumulation in lysosomes, causing:",
    "options": [
      "Cystic fibrosis",
      "Sickle cell anemia",
      "Lysosomal storage diseases (e.g., Tay-Sachs)",
      "Diabetes mellitus"
    ],
    "correctAnswer": 2,
    "explanation": "Lysosomal storage diseases are often caused by deficiencies in enzymes that break down glycolipids. For example, Tay-Sachs disease results from a lack of the enzyme hexosaminidase A, leading to the accumulation of GM2 ganglioside in neurons, causing severe neurological symptoms."
  },
  {
    "id": "conj-20",
    "question": "Which of the following is NOT a conjugated molecule?",
    "options": [
      "A antibody (Immunoglobulin)",
      "A cerebroside",
      "A ganglioside",
      "A triglyceride"
    ],
    "correctAnswer": 3,
    "explanation": "Antibodies are glycoproteins. Cerebrosides and gangliosides are glycolipids. A triglyceride is a simple lipid, composed only of glycerol and three fatty acids; it does not have a carbohydrate component and is therefore not a conjugated molecule."
  },
    {
    "id": "conj-21",
    "question": "Which sugar is uniquely found in the glycolipids that determine the ABO blood group system?",
    "options": [
      "Glucose",
      "Fucose",
      "Ribose",
      "Sucrose"
    ],
    "correctAnswer": 1,
    "explanation": "L-Fucose is a deoxy sugar that is a key component of the H antigen, the precursor to the A and B blood group antigens. Its specific linkage and presence are crucial for defining the blood type."
  },
  {
    "id": "conj-22",
    "question": "The core carbohydrate structure that is first added to an asparagine residue during N-linked glycosylation is a:",
    "options": [
      "Single glucose",
      "Complex oligosaccharide",
      "High-mannose oligosaccharide",
      "Dolichol-linked oligosaccharide"
    ],
    "correctAnswer": 3,
    "explanation": "N-linked glycosylation begins in the ER with the assembly of a large, branched oligosaccharide attached to a lipid carrier called dolichol phosphate. This pre-formed core oligosaccharide (Glc₃Man₉GlcNAc₂) is then enzymatically transferred en bloc to the asparagine residue of the growing polypeptide chain."
  },
  {
    "id": "conj-23",
    "question": "Which of the following is a major component of the extracellular matrix and is a heavily glycosylated protein?",
    "options": [
      "Hemoglobin",
      "Collagen",
      "Trypsin",
      "Actin"
    ],
    "correctAnswer": 1,
    "explanation": "Collagen, the most abundant protein in the animal kingdom, is actually a glycoprotein. It contains carbohydrate attachments (typically galactose and glucose) on some of its hydroxylysine residues, which are important for its stability and organization in the extracellular matrix."
  },
  {
    "id": "conj-24",
    "question": "The glycolipid GM1 acts as a cell surface receptor for:",
    "options": [
      "Insulin",
      "Cholera toxin",
      "Oxygen",
      "DNA"
    ],
    "correctAnswer": 1,
    "explanation": "The GM1 ganglioside is the specific receptor on intestinal epithelial cells for the cholera toxin produced by Vibrio cholerae. Binding of the toxin to GM1 triggers a signaling cascade that leads to severe diarrhea."
  },
  {
    "id": "conj-25",
    "question": "Lectins are proteins that specifically bind to:",
    "options": [
      "Lipids",
      "Carbohydrates",
      "Nucleic acids",
      "Amino acids"
    ],
    "correctAnswer": 1,
    "explanation": "Lectins are carbohydrate-binding proteins that are highly specific for particular sugar moieties. They play roles in biological recognition phenomena involving cells and proteins, such as cell adhesion, immune response, and glycoprotein synthesis."
  },
  {
    "id": "conj-26",
    "question": "The difference between a proteoglycan and a glycoprotein is that a proteoglycan has:",
    "options": [
      "A protein attached to a lipid",
      "A much higher carbohydrate-to-protein ratio",
      "No protein component",
      "Carbohydrates attached via nitrogen"
    ],
    "correctAnswer": 1,
    "explanation": "While both are glycoconjugates, proteoglycans are a distinct class where the carbohydrate component is the dominant feature. They consist of a core protein with one or more covalently attached glycosaminoglycan (GAG) chains, which are long, linear, highly negatively charged polysaccharides. The carbohydrate content can be up to 95% of the molecule's weight."
  },
  {
    "id": "conj-27",
    "question": "Which of these glycosaminoglycans (GAGs) is a major component of joint fluid and acts as a shock absorber?",
    "options": [
      "Hyaluronic acid",
      "Heparin",
      "Chondroitin sulfate",
      "Keratan sulfate"
    ],
    "correctAnswer": 0,
    "explanation": "Hyaluronic acid (or hyaluronan) is a non-sulfated GAG that forms a viscous, slippery solution. It is a major component of the synovial fluid in joints, where it provides lubrication and shock absorption. It is also a key part of the extracellular matrix."
  },
  {
    "id": "conj-28",
    "question": "Sialic acid is often found at the terminal end of glycan chains on glycoproteins and glycolipids. Its negative charge:",
    "options": [
      "Increases membrane permeability",
      "Confers a negative surface charge to cells, preventing unwanted aggregation",
      "Makes the molecule hydrophobic",
      "Has no effect on cell surface properties"
    ],
    "correctAnswer": 1,
    "explanation": "Sialic acid residues, with their carboxylic acid groups, contribute a significant negative charge to the cell surface. This creates charge repulsion between cells, helping to keep them separated and preventing non-specific aggregation. It also plays roles in recognition and signaling."
  },
  {
    "id": "conj-29",
    "question": "The disease I-cell disease (Mucolipidosis II) is caused by a defect in:",
    "options": [
      "Glycolipid synthesis",
      "The enzyme that adds mannose-6-phosphate to lysosomal enzymes",
      "Collagen cross-linking",
      "Antibody production"
    ],
    "correctAnswer": 1,
    "explanation": "I-cell disease is a lysosomal storage disorder. It results from a defect in the enzyme (N-acetylglucosamine-1-phosphotransferase) that adds a mannose-6-phosphate (M6P) tag to lysosomal enzymes. This tag is essential for targeting these glycoproteins to the lysosome. Without it, enzymes are secreted outside the cell, and undigested materials accumulate in the lysosomes."
  },
  {
    "id": "conj-30",
    "question": "Which type of glycolipid contains multiple sugar residues, including sialic acid, and is abundant in the nervous system?",
    "options": [
      "Cerebroside",
      "Ganglioside",
      "Sulfatide",
      "Globoside"
    ],
    "correctAnswer": 1,
    "explanation": "Gangliosides are the most complex class of glycolipids. They contain a ceramide lipid anchor and an oligosaccharide head group that always includes one or more sialic acid residues. They are particularly abundant in the ganglia (nerve tissues) of the central nervous system, where they modulate cell signaling."
  },
  {
    "id": "conj-31",
    "question": "The carbohydrate chains of glycoproteins and glycolipids are highly diverse. This diversity arises from:",
    "options": [
      "Only 2 different monosaccharides",
      "The variety of monosaccharides, their linkages, and branching patterns",
      "Their identical structure in all organisms",
      "Their simple linear structure"
    ],
    "correctAnswer": 1,
    "explanation": "The incredible diversity of glycans (the 'glycome') comes from many factors: the number of different monosaccharides (over 10 common ones), the different anomeric linkages (alpha or beta), the different carbon atoms that can be linked (1-2, 1-3, 1-4, 1-6), and the potential for extensive branching. This allows for massive informational capacity."
  },
  {
    "id": "conj-32",
    "question": "Which of the following is a function of proteoglycans in the extracellular matrix?",
    "options": [
      "Oxygen transport",
      "Providing tensile strength",
      "Binding growth factors and resisting compression",
      "Catalyzing metabolic reactions"
    ],
    "correctAnswer": 2,
    "explanation": "Proteoglycans, with their highly hydrated GAG chains, form a gel-like matrix that resists compressive forces (e.g., in cartilage). They also bind and store growth factors, regulating their availability to cells, and interact with other matrix components like collagen to organize the ECM."
  },
  {
    "id": "conj-33",
    "question": "The selectin family of proteins is involved in:",
    "options": [
      "DNA replication",
      "White blood cell adhesion to blood vessel walls",
      "Muscle contraction",
      "Photosynthesis"
    ],
    "correctAnswer": 1,
    "explanation": "Selectins are a family of lectin-like cell adhesion molecules (CAMs) found on white blood cells (leukocytes) and endothelial cells that line blood vessels. They recognize and bind to specific carbohydrate ligands (like sialyl Lewis X) on opposing cells, enabling the initial 'rolling' adhesion of leukocytes before they migrate into tissues during inflammation."
  },
  {
    "id": "conj-34",
    "question": "A globoside is a type of glycolipid that contains:",
    "options": [
      "Only one sugar (monosaccharide)",
      "Two or more sugars, including at least one sialic acid",
      "Two or more sugars, but no sialic acid",
      "No sugar"
    ],
    "correctAnswer": 2,
    "explanation": "Globosides are neutral glycolipids. They are ceramide oligosaccharides that contain two or more sugar residues, typically a combination of glucose, galactose, and N-acetylgalactosamine. They are distinct from gangliosides because they lack sialic acid."
  },
  {
    "id": "conj-35",
    "question": "The 'H antigen' in the ABO blood group system is the precursor structure. Individuals with which blood type have ONLY the H antigen?",
    "options": [
      "Type A",
      "Type B",
      "Type AB",
      "Type O"
    ],
    "correctAnswer": 3,
    "explanation": "The H antigen is the foundational structure. The I gene (FUT1) codes for an enzyme (fucosyltransferase) that adds fucose to create the H antigen. Individuals with type O blood have a functional H gene but possess non-functional A and B alleles. Therefore, their red blood cells express the H antigen but cannot convert it to A or B antigens."
  },
  {
    "id": "conj-36",
    "question": "Which of the following is a sulfated glycosaminoglycan (GAG) that acts as a potent anticoagulant?",
    "options": [
      "Hyaluronic acid",
      "Heparin",
      "Chondroitin sulfate",
      "Cellulose"
    ],
    "correctAnswer": 1,
    "explanation": "Heparin is a highly sulfated GAG that is stored in the mast cells of various tissues. It is a powerful anticoagulant that is used clinically to prevent blood clots. It works by activating the plasma protein antithrombin III, which then inhibits several clotting factors."
  },
  {
    "id": "conj-37",
    "question": "The process of trimming and modifying the initial oligosaccharide added in N-linked glycosylation occurs in the:",
    "options": [
      "Cytoplasm",
      "Endoplasmic Reticulum and Golgi apparatus",
      "Nucleus",
      "Mitochondria"
    ],
    "correctAnswer": 1,
    "explanation": "After the core oligosaccharide is transferred to the protein in the ER, it undergoes trimming (e.g., removal of glucose and some mannose residues). The glycoprotein is then transported to the Golgi apparatus, where the oligosaccharide is further modified and built into its mature, complex form by the addition and removal of specific sugars."
  },
  {
    "id": "conj-38",
    "question": "A glycoprotein hormone that stimulates the production of red blood cells is:",
    "options": [
      "Insulin",
      "Erythropoietin",
      "Glucagon",
      "Growth hormone"
    ],
    "correctAnswer": 1,
    "explanation": "Erythropoietin (EPO) is a glycoprotein hormone produced primarily by the kidneys. Its carbohydrate content is essential for its stability in the bloodstream. It acts on bone marrow to stimulate the production of red blood cells (erythropoiesis)."
  },
  {
    "id": "conj-39",
    "question": "The inherited disorder Leukocyte Adhesion Deficiency (LAD) is often caused by a defect in:",
    "options": [
      "Hemoglobin structure",
      "The synthesis of selectin ligands (e.g., sialyl Lewis X)",
      "Antibody diversity",
      "Collagen cross-linking"
    ],
    "correctAnswer": 1,
    "explanation": "Leukocyte Adhesion Deficiency Type II (LAD II) is specifically caused by a defect in the fucose metabolism pathway. This prevents the synthesis of fucosylated carbohydrate ligands, such as sialyl Lewis X, which are necessary for selectin-mediated adhesion of leukocytes. This results in a severely impaired immune response."
  },
  {
    "id": "conj-40",
    "question": "Which of the following techniques is commonly used to detect specific glycoproteins on cell surfaces or in mixtures?",
    "options": [
      "Southern blotting (for DNA)",
      "Northern blotting (for RNA)",
      "Western blotting (using antibodies)",
      "Eastern blotting (for glycoconjugates)"
    ],
    "correctAnswer": 2,
    "explanation": "Western blotting (immunoblotting) is widely used to detect specific proteins, including glycoproteins. Proteins are separated by gel electrophoresis, transferred to a membrane, and then probed with an antibody that recognizes the protein component of the glycoprotein. Lectin blotting can also be used to detect the glycan component."
  },
  {
    "id": "conj-41",
    "question": "The presence of carbohydrates on the surface of many viruses (viral glycoproteins) is important for:",
    "options": [
      "Viral genome replication",
      "Host cell recognition and entry",
      "Packaging viral DNA",
      "Energy production for the virus"
    ],
    "correctAnswer": 1,
    "explanation": "Many viruses have envelopes studded with glycoproteins (e.g., the spike protein of SARS-CoV-2, hemagglutinin of influenza). These viral glycoproteins bind to specific receptors (often themselves glycoproteins or glycolipids) on the surface of host cells, mediating viral attachment and entry."
  },
  {
    "id": "conj-42",
    "question": "A glycosphingolipid is a glycolipid that contains which lipid backbone?",
    "options": [
      "Glycerol",
      "Sphingosine",
      "Cholesterol",
      "Isoprene"
    ],
    "correctAnswer": 1,
    "explanation": "Glycosphingolipids (GSLs) are a major class of glycolipids based on the lipid ceramide, which is composed of the long-chain amino alcohol sphingosine linked to a fatty acid via an amide bond. The sugar unit is attached to the primary hydroxyl group of ceramide. Cerebrosides and gangliosides are types of glycosphingolipids."
  },
  {
    "id": "conj-43",
    "question": "The carbohydrate moiety of a glycoconjugate can influence the protein's:",
    "options": [
      "Stability and resistance to proteolysis",
      "Amino acid sequence",
      "Genetic code",
      "Rate of transcription"
    ],
    "correctAnswer": 0,
    "explanation": "The attached glycan can protect the polypeptide chain from digestion by proteases, thereby increasing its half-life in the harsh extracellular environment. It can also promote correct protein folding and stability within the polypeptide."
  },
  {
    "id": "conj-44",
    "question": "Which of the following is a common monosaccharide found in the glycan chains of glycoconjugates?",
    "options": [
      "N-acetylneuraminic acid (Sialic acid)",
      "Uracil",
      "Adenine",
      "Palmitic acid"
    ],
    "correctAnswer": 0,
    "explanation": "N-acetylneuraminic acid (NANA) is a common form of sialic acid, a nine-carbon monosaccharide derivative. It is frequently found as the terminal sugar on the glycan chains of both glycoproteins and glycolipids, where it contributes a negative charge and is involved in recognition events."
  },
  {
    "id": "conj-45",
    "question": "In a membrane, the glycolipid molecule is oriented with:",
    "options": [
      "The sugar group in the hydrophobic core",
      "The fatty acid chains facing the extracellular space",
      "The sugar group extending into the extracellular space",
      "The entire molecule inside the cytoplasm"
    ],
    "correctAnswer": 2,
    "explanation": "Like phospholipids, glycolipids are amphipathic. Their fatty acid chains are hydrophobic and embed in the lipid bilayer. Their carbohydrate head groups are hydrophilic and project outward into the extracellular aqueous environment, where they can participate in recognition and signaling."
  },
  {
    "id": "conj-46",
    "question": "The disease Agammaglobulinemia is characterized by a lack of:",
    "options": [
      "Red blood cells",
      "Glycolipids",
      "Antibodies (which are glycoproteins)",
      "Lysosomal enzymes"
    ],
    "correctAnswer": 2,
    "explanation": "Agammaglobulinemia is an immunodeficiency disorder where the body produces very low levels of antibodies (immunoglobulins). Since antibodies are glycoproteins, this disease represents a severe deficiency in a major class of glycoconjugates, leading to recurrent infections."
  },
  {
    "id": "conj-47",
    "question": "Chondroitin sulfate is a glycosaminoglycan (GAG) commonly found in:",
    "options": [
      "Plasma membrane",
      "Cartilage, tendons, and ligaments",
      "The nucleolus",
      "Mitochondria"
    ],
    "correctAnswer": 1,
    "explanation": "Chondroitin sulfate is a sulfated GAG that is a major component of the extracellular matrix in connective tissues such as cartilage, tendons, ligaments, and bone. It provides resistance to compression and contributes to the tensile strength of these tissues."
  },
  {
    "id": "conj-48",
    "question": "The 'Lewis antigen system' is another blood group system based on:",
    "options": [
      "The structure of hemoglobin",
      "Glycolipids present in secretions and on red blood cells",
      "The sequence of ribosomal RNA",
      "Mitochondrial DNA"
    ],
    "correctAnswer": 1,
    "explanation": "The Lewis system is based on carbohydrates (fucosylated oligosaccharides) attached to glycolipids. These antigens are synthesized in other tissues and then adsorbed onto the surface of red blood cells from the plasma. They are also found in body secretions."
  },
  {
    "id": "conj-49",
    "question": "Which organelle contains enzymes that are responsible for the degradation of glycolipids and glycoproteins?",
    "options": [
      "Peroxisome",
      "Lysosome",
      "Golgi apparatus",
      "Smooth Endoplasmic Reticulum"
    ],
    "correctAnswer": 1,
    "explanation": "Lysosomes are the digestive organelles of the cell. They contain a vast array of hydrolytic enzymes (glycosidases, proteases, lipases) that break down all types of biological polymers, including the carbohydrate and lipid components of glycoconjugates that are delivered to them."
  },
  {
    "id": "conj-50",
    "question": "The specificity of an antibody's interaction with an antigen can be influenced by:",
    "options": [
      "Only the protein part of the antibody",
      "Only the carbohydrate part of the antibody",
      "Both the protein and the carbohydrate parts",
      "Neither part; it is random"
    ],
    "correctAnswer": 0,
    "explanation": "The antigen-binding site of an antibody is formed solely by the variable regions of its protein heavy and light chains. The carbohydrate chains attached to the antibody's constant region (making it a glycoprotein) can influence its stability, half-life, and effector functions (like complement activation), but not the specificity of antigen binding itself."
  },
    {
    "id": "conj-51",
    "question": "Which of the following is a key difference between O-linked and N-linked glycosylation?",
    "options": [
      "O-linked occurs in the nucleus, N-linked in the cytoplasm",
      "O-linked uses mannose only, N-linked uses galactose only",
      "O-linked involves step-wise addition of sugars, while N-linked uses a pre-formed oligosaccharide block",
      "N-linked is simpler and has no core structure"
    ],
    "correctAnswer": 2,
    "explanation": "A major difference is in their biosynthesis. N-linked glycosylation begins with the en bloc transfer of a large, pre-assembled oligosaccharide (Glc₃Man₉GlcNAc₂) from a dolichol carrier to an asparagine residue. O-linked glycosylation, in contrast, involves the sequential addition of monosaccharides one by one directly to a serine or threonine residue in the Golgi apparatus."
  },
  {
    "id": "conj-52",
    "question": "The 'Rh factor' in blood typing is determined by:",
    "options": [
      "A specific glycolipid on the red blood cell surface",
      "The presence or absence of the D antigen, a transmembrane protein",
      "The amount of hemoglobin in the blood",
      "The type of O-linked glycans on immunoglobulins"
    ],
    "correctAnswer": 1,
    "explanation": "Unlike the ABO system, which is based on glycolipids and glycoproteins, the Rh factor (specifically the RhD antigen) is determined by the presence or absence of the RhD protein, an integral transmembrane protein, on the surface of red blood cells. There is no carbohydrate involvement in the Rh antigenic determinant itself."
  },
  {
    "id": "conj-53",
    "question": "A sulfatide is a type of glycolipid that is:",
    "options": [
      "Sulfated on its sugar residue",
      "Sulfated on its ceramide backbone",
      "Always contains sialic acid",
      "Found only in plants"
    ],
    "correctAnswer": 0,
    "explanation": "Sulfatides are sulfated glycolipids. They are cerebrosides (galactosylceramide) where the hydroxyl group on the C3 of the galactose residue is esterified to a sulfate group. They are abundant in the myelin sheath of neurons and in kidney tissue."
  },
  {
    "id": "conj-54",
    "question": "The 'sialyl-Lewis X' antigen is a carbohydrate motif that is a ligand for:",
    "options": [
      "Hemoglobin",
      "Selectins (e.g., E-selectin)",
      "DNA polymerase",
      "Insulin receptor"
    ],
    "correctAnswer": 1,
    "explanation": "Sialyl-Lewis X (sLe^x) is a tetrasaccharide carbohydrate structure often found on the glycoproteins and glycolipids of white blood cells (leukocytes). It serves as the primary ligand for E-selectin and P-selectin on activated endothelial cells, mediating the rolling phase of leukocyte extravasation during inflammation."
  },
  {
    "id": "conj-55",
    "question": "Which vitamin is essential as a cofactor for adding gamma-carboxy groups to glutamate residues in certain clotting factors?",
    "options": [
      "Vitamin A",
      "Vitamin C",
      "Vitamin K",
      "Vitamin D"
    ],
    "correctAnswer": 2,
    "explanation": "Vitamin K is a essential cofactor for the enzyme gamma-glutamyl carboxylase. This enzyme carboxylates specific glutamate residues in the clotting factors II, VII, IX, and X, as well as in proteins C and S. This modification allows these proteins to bind calcium and function properly in the coagulation cascade."
  },
  {
    "id": "conj-56",
    "question": "The process of removing sialic acid residues from glycoconjugates is catalyzed by enzymes called:",
    "options": [
      "Kinases",
      "Sialyltransferases",
      "Sialidases (Neuraminidases)",
      "Phosphatases"
    ],
    "correctAnswer": 2,
    "explanation": "Sialidases, also known as neuraminidases, are glycosidases that catalyze the hydrolysis of the glycosidic linkages that attach sialic acid residues to the underlying sugar chain. This process, called desialylation, can expose underlying sugars for recognition or mark a glycoprotein for degradation."
  },
  {
    "id": "conj-57",
    "question": "A glycoprotein that is involved in iron transport in the blood is:",
    "options": [
      "Ferritin",
      "Transferrin",
      "Hemoglobin",
      "Myoglobin"
    ],
    "correctAnswer": 1,
    "explanation": "Transferrin is a glycoprotein produced in the liver. It binds iron ions (Fe³⁺) absorbed from the diet or released from aged red blood cells and transports them through the blood to various tissues, particularly the bone marrow for hemoglobin synthesis."
  },
  {
    "id": "conj-58",
    "question": "The glycosaminoglycan (GAG) that is covalently linked to a core protein to form the aggregate aggrecan in cartilage is:",
    "options": [
      "Hyaluronic acid",
      "Chondroitin sulfate",
      "Heparin",
      "Dermatan sulfate"
    ],
    "correctAnswer": 1,
    "explanation": "Aggrecan is a massive proteoglycan found in cartilage. Its core protein is attached to numerous chains of chondroitin sulfate and keratan sulfate glycosaminoglycans. Hundreds of aggrecan molecules can then non-covalently bind to a single long filament of hyaluronic acid, forming huge complexes that provide cushioning and resistance to compression."
  },
  {
    "id": "conj-59",
    "question": "The inherited disorder known as 'Congenital Disorders of Glycosylation' (CDG) primarily affect:",
    "options": [
      "The structure of DNA",
      "The synthesis or processing of protein-linked glycans",
      "The beta-oxidation of fatty acids",
      "The citric acid cycle"
    ],
    "correctAnswer": 1,
    "explanation": "CDGs are a large group of rare genetic metabolic disorders characterized by defects in the complex process of building glycans onto proteins (glycosylation). This can involve enzymes required for synthesizing the sugar precursors, building the oligosaccharide, or transferring it to the protein. The effects are multisystemic and often severe."
  },
  {
    "id": "conj-60",
    "question": "Which of the following is NOT a function of the glycocalyx?",
    "options": [
      "Protection against mechanical and chemical damage",
      "Mediating cell-cell recognition and adhesion",
      "Acting as a permeability barrier for the cell membrane",
      "Storing the cell's genetic information"
    ],
    "correctAnswer": 3,
    "explanation": "The glycocalyx has numerous functions: it protects the cell surface, is involved in cell recognition, acts as a barrier to particles, and contains receptors. However, storing genetic information is the function of nucleic acids (DNA and RNA) within the nucleus, not the glycocalyx."
  },
  {
    "id": "conj-61",
    "question": "The ' Bombay phenotype ' in blood grouping refers to individuals who:",
    "options": [
      "Have both A and B antigens",
      "Lack the H antigen (and therefore cannot make A or B antigens)",
      "Have an extra-strong expression of the Rh antigen",
      "Have glycolipids without any sugars"
    ],
    "correctAnswer": 1,
    "explanation": "The rare Bombay phenotype (hh) occurs in individuals who are homozygous for a defective allele of the FUT1 gene. They cannot produce the H antigen (the precursor to A and B antigens). Therefore, their red blood cells type as O even if they possess functional A or B transferase enzymes, because there is no foundation (H antigen) to modify."
  },
  {
    "id": "conj-62",
    "question": "The enzyme that catalyzes the transfer of galactose to ceramide to form galactocerebroside is called:",
    "options": [
      "Galactocerebrosidase",
      "Galactosyltransferase",
      "Sialyltransferase",
      "Hexosaminidase"
    ],
    "correctAnswer": 1,
    "explanation": "Galactosyltransferases are a family of enzymes that catalyze the transfer of galactose from a donor molecule (like UDP-galactose) to an acceptor molecule. Specifically, UDP-galactose:ceramide galactosyltransferase catalyzes the final step in the synthesis of galactocerebroside, a major glycolipid in myelin."
  },
  {
    "id": "conj-63",
    "question": "A major function of glycoconjugates on the surface of red blood cells is to:",
    "options": [
      "Carry oxygen",
      "Generate ATP",
      "Determine blood group antigens",
      "Replicate DNA"
    ],
    "correctAnswer": 2,
    "explanation": "The glycoproteins and glycolipids on the surface of red blood cells are where the carbohydrate-based blood group antigens (ABO, Lewis, P, etc.) are displayed. The specific structure of these glycan chains determines an individual's blood type, which is critical for safe blood transfusions."
  },
  {
    "id": "conj-64",
    "question": "Which of these molecules is a proteoglycan?",
    "options": [
      "Collagen",
      "Aggrecan",
      "Hemoglobin",
      "Immunoglobulin G"
    ],
    "correctAnswer": 1,
    "explanation": "Aggrecan is a classic and massive example of a proteoglycan. It has a core protein to which many long chains of the glycosaminoglycans chondroitin sulfate and keratan sulfate are attached. It is a major component of the extracellular matrix in cartilage."
  },
  {
    "id": "conj-65",
    "question": "The process by which cells release glycoproteins to the exterior is called:",
    "options": [
      "Endocytosis",
      "Exocytosis",
      "Phagocytosis",
      "Pinocytosis"
    ],
    "correctAnswer": 1,
    "explanation": "Exocytosis is the process where intracellular vesicles containing synthesized molecules (like glycoproteins destined for secretion or for the membrane) fuse with the plasma membrane, releasing their contents to the cell exterior or inserting them into the membrane."
  },
  {
    "id": "conj-66",
    "question": "A deficiency in the enzyme glucocerebrosidase leads to the accumulation of glucocerebroside and causes:",
    "options": [
      "Tay-Sachs disease",
      "Gaucher's disease",
      "Niemann-Pick disease",
      "Fabry disease"
    ],
    "correctAnswer": 1,
    "explanation": "Gaucher's disease is the most common lysosomal storage disease. It is caused by a deficiency of the enzyme glucocerebrosidase (also called beta-glucosidase). This leads to the accumulation of its substrate, the glycolipid glucocerebroside, primarily in macrophages, causing organ enlargement and bone lesions."
  },
  {
    "id": "conj-67",
    "question": "The 'core pentasaccharide' region that is common to all N-linked glycoproteins is:",
    "options": [
      "Man₃GlcNAc₂",
      "Glc₃Man₃",
      "Sia₂Gal₂",
      "Fuc₁GalNAc₁"
    ],
    "correctAnswer": 0,
    "explanation": "After processing in the ER and Golgi, all mature N-linked glycans retain a common core structure. This core is composed of three mannose (Man) residues and two N-acetylglucosamine (GlcNAc) residues: Manα1-6(Manα1-3)Manβ1-4GlcNAcβ1-4GlcNAcβ1-Asn. This is attached to the asparagine residue of the protein."
  },
  {
    "id": "conj-68",
    "question": "Which of the following is a characteristic of glycosaminoglycans (GAGs)?",
    "options": [
      "They are neutral and hydrophobic",
      "They are highly negatively charged and hydrophilic",
      "They are short, branched chains",
      "They are found only in the nucleus"
    ],
    "correctAnswer": 1,
    "explanation": "GAGs are long, unbranched polysaccharides composed of repeating disaccharide units. They are highly hydrophilic and carry a strong negative charge due to the presence of sulfate and carboxyl groups on many of their sugar residues. This allows them to bind large amounts of water and cations."
  },
  {
    "id": "conj-69",
    "question": "The influenza virus has a surface glycoprotein called neuraminidase. Its function is to:",
    "options": [
      "Bind to host cell sialic acids for entry",
      "Cleave sialic acid to release new viral particles",
      "Replicate the viral genome",
      "Package viral proteins"
    ],
    "correctAnswer": 1,
    "explanation": "Neuraminidase (NA) is an enzyme on the surface of influenza viruses. Its primary function is to cleave (hydrolyze) the glycosidic linkages of sialic acids on the host cell surface and on the newly formed viral particles. This prevents newly assembled viruses from clumping together and facilitates their release from the infected cell to spread the infection."
  },
  {
    "id": "conj-70",
    "question": "A lectin that is found in jack beans and is used in laboratories to detect specific sugars is:",
    "options": [
      "Insulin",
      "Concanavalin A (ConA)",
      "Hemagglutinin",
      "Ricin"
    ],
    "correctAnswer": 1,
    "explanation": "Concanavalin A (ConA) is a lectin isolated from the jack bean (Canavalia ensiformis). It specifically binds to alpha-D-mannose and alpha-D-glucose residues. It is widely used in biochemistry and cell biology to purify glycoproteins, agglutinate cells, and study carbohydrate-mediated processes."
  },
  {
    "id": "conj-71",
    "question": "The glycosphingolipid GM2 ganglioside accumulates in the lysosomes in Tay-Sachs disease due to a deficiency of:",
    "options": [
      "Alpha-galactosidase A",
      "Hexosaminidase A",
      "Glucocerebrosidase",
      "Alpha-iduronidase"
    ],
    "correctAnswer": 1,
    "explanation": "Tay-Sachs disease is caused by a deficiency in the enzyme hexosaminidase A. This enzyme is responsible for breaking down GM2 ganglioside by removing the terminal N-acetylgalactosamine residue. Without this enzyme, GM2 ganglioside accumulates to toxic levels in the lysosomes of neurons, leading to progressive neurodegeneration."
  },
  {
    "id": "conj-72",
    "question": "The carbohydrate moiety of a glycoconjugate is synthesized by enzymes called:",
    "options": [
      "Polymerases",
      "Glycosyltransferases",
      "Proteases",
      "Kinases"
    ],
    "correctAnswer": 1,
    "explanation": "Glycosyltransferases are the enzymes responsible for synthesizing the carbohydrate chains of glycoconjugates. They catalyze the transfer of a monosaccharide from an activated donor molecule (e.g., UDP-glucose, GDP-mannose) to a specific acceptor molecule, which can be a growing glycan chain, a protein, or a lipid."
  },
  {
    "id": "conj-73",
    "question": "Dermatan sulfate is a glycosaminoglycan (GAG) found primarily in:",
    "options": [
      "Cartilage",
      "Skin, blood vessels, and heart valves",
      "Synovial fluid",
      "The vitreous humor of the eye"
    ],
    "correctAnswer": 1,
    "explanation": "Dermatan sulfate is a sulfated GAG found in many tissues but is particularly abundant in the skin, blood vessels, and heart valves. It contributes to the structural integrity and resilience of these tissues. It is also involved in wound repair and coagulation."
  },
  {
    "id": "conj-74",
    "question": "The ' antennary structure ' of a complex N-linked glycan refers to its:",
    "options": [
      "Linear, unbranched form",
      "Number of branches (antennae) stemming from the core pentasaccharide",
      "Attachment to the lipid bilayer",
      "Ability to absorb light"
    ],
    "correctAnswer": 1,
    "explanation": "Complex N-linked glycans are characterized by having two or more branches (antennae) attached to the core pentasaccharide (Man₃GlcNAc₂). These antennae are typically formed by the addition of GlcNAc residues and can be further elaborated with galactose, sialic acid, fucose, etc. The number and structure of these antennae contribute to the glycan's diversity and function."
  },
  {
    "id": "conj-75",
    "question": "A function of the carbohydrate chains on IgG antibodies is to:",
    "options": [
      "Bind antigen",
      "Mediate effector functions like complement activation",
     "Determine the antibody's variable region sequence",
      "Act as a transcription factor"
    ],
    "correctAnswer": 1,
    "explanation": "The antigen-binding site is formed by the protein's variable regions. The N-linked glycans attached to the constant region (Fc) of the antibody, however, are crucial for mediating effector functions. They influence the antibody's ability to bind to Fc receptors on immune cells and to activate the complement system, which helps clear pathogens."
  },
  {
    "id": "conj-76",
    "question": "Keratan sulfate is a glycosaminoglycan (GAG) that is unique because it:",
    "options": [
      "Contains no sulfate groups",
      "Uses galactose instead of glucuronic acid as a repeating unit",
      "Is synthesized in the nucleus",
      "Is the only GAG not linked to a protein"
    ],
    "correctAnswer": 1,
    "explanation": "Keratan sulfate (KS) is unique among GAGs because it does not contain uronic acid. Its repeating disaccharide unit is Galβ1-4GlcNAc. This disaccharide is then sulfated to varying degrees. It is found in the cornea, cartilage, and bone."
  },
  {
    "id": "conj-77",
    "question": "The ' class switching ' of antibodies from IgM to IgG involves changes in:",
    "options": [
      "The antigen-binding site",
      "The constant region of the heavy chain",
      "The carbohydrate attached to the light chain",
      "The variable region sequence"
    ],
    "correctAnswer": 1,
    "explanation": "Class switching is a genetic recombination process that changes the constant region (Fc) of the antibody heavy chain. This changes the antibody's isotype (e.g., from IgM to IgG, IgA, or IgE), which alters its effector functions (like complement activation or crossing the placenta) and its glycosylation pattern, without changing the antigen-binding specificity."
  },
  {
    "id": "conj-78",
    "question": "The plant toxin ricin is deadly because it:",
    "options": [
      "Is a lectin that inhibits protein synthesis",
      "Destroys all glycolipids",
      "Acts as a protease",
      "Blocks DNA replication"
    ],
    "correctAnswer": 0,
    "explanation": "Ricin is a highly toxic lectin from castor beans. It has two chains: a B chain that binds to galactose residues on cell surface glycoproteins/glycolipids, facilitating entry into the cell, and an A chain that is an enzyme which irreversibly inactivates ribosomes, halting protein synthesis and killing the cell."
  },
  {
    "id": "conj-79",
    "question": "The glycosylation of proteins in the ER serves as a quality control mechanism because:",
    "options": [
      "Only glycosylated proteins can be transcribed",
      "Misfolded proteins are deglycosylated and retained for refolding or degradation",
      "It adds energy for the protein to fold",
      "It changes the genetic code of the protein"
    ],
    "correctAnswer": 1,
    "explanation": "The ER has a quality control system for glycoproteins. Chaperones like calnexin and calreticulin bind to the monoglucosylated N-glycans on newly synthesized proteins. Properly folded proteins are deglycosylated and allowed to exit the ER. Misfolded proteins are reglucosylated, rebind to chaperones, and are given more chances to fold correctly. Persistently misfolded proteins are retrotranslocated to the cytoplasm and degraded by the proteasome."
  },
  {
    "id": "conj-80",
    "question": "A proteoglycan found in mast cells that stores histamine and other inflammatory mediators is:",
    "options": [
      "Aggrecan",
      "Serglycin",
      "Decorin",
      "Versican"
    ],
    "correctAnswer": 1,
    "explanation": "Serglycin is a unique proteoglycan that is the major constituent of secretory granules in mast cells, cytotoxic T cells, and other hematopoietic cells. Its highly negatively charged GAG chains (usually heparin or chondroitin sulfate) bind and store positively charged inflammatory mediators like histamine, proteases, and cytokines, releasing them upon cell activation."
  },
  {
    "id": "conj-81",
    "question": "The ' glycosynapse ' is a concept that describes:",
    "options": [
      "A structure for energy production",
      "Glycolipid- and glycoprotein-enriched microdomains on the cell surface that facilitate signal transduction",
      "The site of protein synthesis",
      "The nuclear pore complex"
    ],
    "correctAnswer": 1,
    "explanation": "The term 'glycosynapse' refers to specialized, dynamic microdomains on the cell surface that are enriched in glycoconjugates (glycolipids and glycoproteins) and signaling molecules. These domains facilitate cell adhesion and transmit signals from the outside to the inside of the cell, influencing processes like growth, motility, and apoptosis."
  },
  {
    "id": "conj-82",
    "question": "The enzyme that is deficient in Fabry disease, leading to the accumulation of globotriaosylceramide, is:",
    "options": [
      "Alpha-galactosidase A",
      "Beta-galactosidase",
      "Alpha-fucosidase",
      "Beta-hexosaminidase"
    ],
    "correctAnswer": 0,
    "explanation": "Fabry disease is an X-linked lysosomal storage disorder caused by a deficiency of the enzyme alpha-galactosidase A. This enzyme is responsible for breaking down globotriaosylceramide (Gb3). Its deficiency leads to the accumulation of Gb3 in the lysosomes of cells throughout the body, particularly affecting the kidneys, heart, and nervous system."
  },
  {
    "id": "conj-83",
    "question": "The carbohydrate recognition domain (CRD) is a feature of:",
    "options": [
      "All enzymes",
      "Lectins",
      "DNA-binding proteins",
      "Motor proteins"
    ],
    "correctAnswer": 1,
    "explanation": "The carbohydrate recognition domain (CRD) is a specialized protein domain found in lectins. It is responsible for the specific binding to carbohydrate moieties on glycoconjugates. The structure of the CRD determines the lectin's specificity for particular sugar residues and their linkages."
  },
  {
    "id": "conj-84",
    "question": "Which of the following is a method used to analyze the carbohydrate composition of a glycoconjugate?",
    "options": [
      "Edman degradation",
      "Gas chromatography-mass spectrometry (GC-MS) after hydrolysis and derivatization",
      "Western blotting without antibodies",
      "Polymerase chain reaction (PCR)"
    ],
    "correctAnswer": 1,
    "explanation": "To analyze glycan composition, the glycoconjugate is first hydrolyzed to release individual monosaccharides. These sugars are then chemically derivatized (e.g., to volatile derivatives) and separated by gas chromatography (GC). The separated derivatives are identified and quantified by mass spectrometry (MS). This provides a monosaccharide composition profile."
  },
  {
    "id": "conj-85",
    "question": "The ' glycosylphosphatidylinositol (GPI) anchor ' is a mechanism to:",
    "options": [
      "Attach a protein to the outer surface of the plasma membrane",
      "Initiate protein synthesis",
      "Degrade glycogen",
      "Form a peptide bond"
    ],
    "correctAnswer": 0,
    "explanation": "A GPI anchor is a complex glycolipid that is post-translationally added to the C-terminus of some proteins in the ER. It anchors the protein to the external leaflet of the plasma membrane. The core structure of GPI contains ethanolamine phosphate, a glycan chain (mannose, glucosamine), and phosphatidylinositol, which embeds in the lipid bilayer."
  },
  {
    "id": "conj-86",
    "question": "The presence of alpha-1,6-linked fucose on the core GlcNAc of an N-linked glycan is a common modification that:",
    "options": [
      "Creates a ligand for selectins",
      "Is known as core fucosylation and can affect antibody function",
      "Marks the protein for degradation",
      "Prevents the glycan from being synthesized"
    ],
    "correctAnswer": 1,
    "explanation": "Core fucosylation is the addition of a fucose residue in an alpha-1,6 linkage to the first (asn-linked) GlcNAc residue of the N-glycan core. This modification is very common in mammalian glycoproteins. In antibodies, the absence of core fucose on the Fc N-glycan dramatically enhances its affinity for Fcγ receptors, increasing antibody-dependent cellular cytotoxicity (ADCC)."
  },
  {
    "id": "conj-87",
    "question": "A proteoglycan that regulates collagen fibril formation and binds TGF-β in the extracellular matrix is:",
    "options": [
      "Aggrecan",
      "Decorin",
      "Serglycin",
      "Heparan sulfate"
    ],
    "correctAnswer": 1,
    "explanation": "Decorin is a small leucine-rich proteoglycan (SLRP) that decorates the surface of collagen fibrils. It regulates fibrillogenesis (the assembly of collagen fibrils). It also binds to transforming growth factor-beta (TGF-β), sequestering it in the ECM and thus modulating its activity and availability to cells."
  },
  {
    "id": "conj-88",
    "question": "The ' Lewis gene ' (FUT3) encodes an enzyme that transfers fucose to create Lewis blood group antigens. This enzyme is a:",
    "options": [
      "Fucosyltransferase",
      "Sialyltransferase",
      "Galactosyltransferase",
      "Sulfotransferase"
    ],
    "correctAnswer": 0,
    "explanation": "The Lewis gene (FUT3) encodes a fucosyltransferase enzyme. This enzyme adds fucose residues to specific positions on the precursor carbohydrate chains to form the Lewis a (Le^a) and Lewis b (Le^b) antigens, which are found on glycolipids in secretions and adsorbed onto red blood cells."
  },
  {
    "id": "conj-89",
    "question": "The glycoprotein hormone human chorionic gonadotropin (hCG) is produced by:",
    "options": [
      "The pancreas",
      "The placenta",
      "The liver",
      "Red blood cells"
    ],
    "correctAnswer": 1,
    "explanation": "Human chorionic gonadotropin (hCG) is a glycoprotein hormone produced by the syncytiotrophoblast cells of the placenta during pregnancy. Its carbohydrate content is essential for its stability and bioactivity. It is the hormone detected by pregnancy tests and is crucial for maintaining the corpus luteum in early pregnancy."
  },
  {
    "id": "conj-90",
    "question": "The process of ' glycan remodeling ' is particularly important for:",
    "options": [
      "The production of therapeutic antibodies with enhanced effector functions",
      "DNA replication",
      "The citric acid cycle",
      "Fatty acid synthesis"
    ],
    "correctAnswer": 0,
    "explanation": "Glycan remodeling is a bioengineering approach used in the production of therapeutic glycoproteins, especially monoclonal antibodies. By manipulating the culture conditions or using enzymes, the native glycan structures are modified (e.g., reducing core fucose, increasing sialylation) to optimize therapeutic properties like enhanced antibody-dependent cellular cytotoxicity (ADCC) or increased serum half-life."
  },
  {
    "id": "conj-91",
    "question": "The glycosaminoglycan heparan sulfate is known for its ability to:",
    "options": [
      "Bind to and regulate the activity of a wide range of proteins (e.g., growth factors)",
      "Carry oxygen in the blood",
      "Store iron in the liver",
      "Catalyze the hydrolysis of ATP"
    ],
    "correctAnswer": 0,
    "explanation": "Heparan sulfate (HS) proteoglycans are ubiquitous on cell surfaces and in the ECM. Their HS chains have immense diversity and can bind to and regulate the activity of a vast array of proteins, including growth factors (e.g., FGF), cytokines, enzymes, and pathogens. This binding can concentrate ligands, present them to receptors, or inhibit their activity."
  },
  {
    "id": "conj-92",
    "question": "A ' glycoside ' is a molecule in which:",
    "options": [
      "A sugar is bound to a non-carbohydrate moiety via a glycosidic bond",
      "Two amino acids are linked",
      "A fatty acid is esterified to glycerol",
      "A phosphate group is added to a nucleotide"
    ],
    "correctAnswer": 0,
    "explanation": "A glycoside is a general term for any molecule in which a sugar (glycone) is linked to another functional group or molecule (aglycone) via a glycosidic bond. Glycoproteins and glycolipids are specific types of glycosides where the aglycone is a protein or lipid, respectively."
  },
  {
    "id": "conj-93",
    "question": "The ' missing self hypothesis ' in immunology relates to:",
    "options": [
      "The absence of MHC class I glycoproteins on target cells leading to NK cell activation",
      "The lack of antibodies in the blood",
      "The loss of glycolipids in the membrane",
      "A deficiency in complement proteins"
    ],
    "correctAnswer": 0,
    "explanation": "Natural Killer (NK) cells have receptors that recognize MHC class I glycoproteins (which are present on almost all healthy nucleated cells). This interaction delivers an inhibitory signal. The 'missing self' hypothesis states that if a cell loses expression of its MHC class I molecules (e.g., due to viral infection or cancer), the absence of this inhibitory signal allows NK cells to become activated and kill the target cell."
  },
  {
    "id": "conj-94",
    "question": "The enzyme peptide-N-glycosidase F (PNGase F) is used in research to:",
    "options": [
      "Add glycans to proteins",
      "Cleave all N-linked glycans from glycoproteins",
      "Synthesize DNA",
      "Break down lipids"
    ],
    "correctAnswer": 1,
    "explanation": "PNGase F is an enzyme that cleaves the glycosidic bond between the innermost GlcNAc residue of an N-linked glycan and the asparagine residue of the protein. It hydrolyzes this bond, releasing the intact glycan and converting asparagine to aspartic acid. It is a crucial tool for analyzing N-linked glycosylation and deglycosylating proteins."
  },
  {
    "id": "conj-95",
    "question": "The ' jelly coat ' surrounding many animal eggs is rich in:",
    "options": [
      "Glycolipids",
      "Glycoproteins",
      "Triglycerides",
      "Nucleic acids"
    ],
    "correctAnswer": 1,
    "explanation": "The vitelline layer or jelly coat surrounding many animal eggs is composed largely of glycoproteins and proteoglycans. These glycoconjugates play critical roles in species-specific sperm recognition and binding, the acrosome reaction in sperm, and blocking polyspermy (fertilization by more than one sperm)."
  },
  {
    "id": "conj-96",
    "question": "The proteoglycan perlecan is a major component of:",
    "options": [
      "The synaptic cleft",
      "Basement membranes",
      "The nucleolus",
      "Mitochondria"
    ],
    "correctAnswer": 1,
    "explanation": "Perlecan is a large, multidomain heparan sulfate proteoglycan that is a key structural and functional component of all basement membranes. It interacts with other basement membrane components (like collagen IV and laminin) and binds growth factors, playing roles in tissue organization, filtration, and cell signaling."
  },
  {
    "id": "conj-97",
    "question": "The ' glycome ' refers to:",
    "options": [
      "The entire set of genes in an organism",
      "The entire set of proteins in an organism",
      "The entire set of carbohydrates an organism produces",
      "The entire set of lipids in an organism"
    ],
    "correctAnswer": 2,
    "explanation": "The glycome is the entire complement of sugars, whether free or present in more complex molecules like glycoconjugates, that is produced by an organism. It is analogous to the genome (all genes), transcriptome (all RNAs), and proteome (all proteins)."
  },
  {
    "id": "conj-98",
    "question": "A ' glycoform ' is:",
    "options": [
      "A different three-dimensional shape of a sugar",
      "A variant of a protein that differs only in its glycan structure",
      "A type of lipid without any sugar",
      "An enzyme that synthesizes glycogen"
    ],
    "correctAnswer": 1,
    "explanation": "Most glycoproteins exist as multiple glycoforms. These are different versions of the same protein polypeptide that differ in the structure, composition, or attachment site of their covalently bound glycan chains. This microheterogeneity arises from the imperfect control of glycosylation biosynthesis."
  },
  {
    "id": "conj-99",
    "question": "The carbohydrate portion of proteoglycans is characterized by a repeating disaccharide unit that contains:",
    "options": [
      "An amino sugar and a uronic acid",
      "Two glucose molecules",
      "A fatty acid and a sugar",
      "A nitrogenous base and a sugar"
    ],
    "correctAnswer": 0,
    "explanation": "The glycosaminoglycan (GAG) chains of proteoglycans are long, linear polymers composed of repeating disaccharide units. Each unit typically consists of an amino sugar (either N-acetylglucosamine or N-acetylgalactosamine) and a uronic acid (either glucuronic acid or its epimer iduronic acid). These units are often sulfated."
  },
  {
    "id": "conj-100",
    "question": "The study of the structure and function of glycoconjugates is called:",
    "options": [
      "Genomics",
      "Proteomics",
      "Glycobiology",
      "Lipidomics"
    ],
    "correctAnswer": 2,
    "explanation": "Glycobiology is the scientific discipline that focuses on the study of the structure, biosynthesis, and biological functions of glycans (sugar chains) and their conjugates (glycoproteins, glycolipids, proteoglycans). It explores how these molecules participate in health and disease."
  },
    {
    "id": "conj-101",
    "question": "The 'H antigen' in the ABO blood group system is formed by the addition of fucose to a precursor chain. This addition is catalyzed by:",
    "options": [
      "A glycosyltransferase encoded by the FUT1 gene",
      "A sialyltransferase",
      "The enzyme hexosaminidase A",
      "A protease"
    ],
    "correctAnswer": 0,
    "explanation": "The H antigen is created by the action of a fucosyltransferase enzyme encoded by the FUT1 gene (also known as the H gene). This enzyme adds a fucose residue in an alpha-1,2 linkage to the terminal galactose of the precursor oligosaccharide chain on glycolipids and glycoproteins."
  },
  {
    "id": "conj-102",
    "question": "Which of the following is a characteristic of O-linked glycosylation compared to N-linked?",
    "options": [
      "It begins with a dolichol-linked precursor",
      "It has a consensus sequence (Asn-X-Ser/Thr)",
      "It is initiated by the addition of N-acetylgalactosamine (GalNAc) to Ser/Thr",
      "It always produces complex, branched structures"
    ],
    "correctAnswer": 2,
    "explanation": "A key characteristic of mucin-type O-linked glycosylation is that it is initiated in the Golgi apparatus by the enzyme UDP-GalNAc:polypeptide N-acetylgalactosaminyltransferase, which transfers N-acetylgalactosamine (GalNAc) to the hydroxyl group of serine or threonine residues. There is no consensus sequence as strict as for N-glycosylation, and no large pre-formed block is transferred."
  },
  {
    "id": "conj-103",
    "question": "The proteoglycan syndecan is an example of a:",
    "options": [
      "Secreted proteoglycan",
      "Cell surface heparan sulfate proteoglycan (HSPG)",
      "Nuclear proteoglycan",
      "Proteoglycan found only in cartilage"
    ],
    "correctAnswer": 1,
    "explanation": "Syndecans are a family of transmembrane cell surface heparan sulfate proteoglycans. They have a core protein that spans the membrane once, with an intracellular domain and an extracellular domain that is modified with heparan sulfate (and sometimes chondroitin sulfate) GAG chains. They act as co-receptors for growth factors and mediate cell adhesion."
  },
  {
    "id": "conj-104",
    "question": "The disease known as 'I-cell disease' (Mucolipidosis II) is characterized by the presence of inclusion bodies in cells and is caused by a defect in:",
    "options": [
      "The enzyme that degrades glycolipids",
      "The tag (M6P) used to target enzymes to the lysosome",
      "Collagen synthesis",
      "Antibody production"
    ],
    "correctAnswer": 1,
    "explanation": "I-cell disease is caused by a deficiency in N-acetylglucosamine-1-phosphotransferase. This enzyme adds a mannose-6-phosphate (M6P) tag to lysosomal enzymes in the Golgi apparatus. Without this tag, the enzymes are not correctly targeted to lysosomes and are instead secreted into the extracellular space. This leads to an accumulation of undigested substrates (including glycoconjugates) within the lysosomes, forming dense inclusions ('inclusion bodies')."
  },
  {
    "id": "conj-105",
    "question": "The 'glycosphingolipidoses' are a group of lysosomal storage diseases that result from defects in:",
    "options": [
      "The synthesis of glycosphingolipids",
      "The degradation of glycosphingolipids",
      "The synthesis of all membrane lipids",
      "Protein glycosylation"
    ],
    "correctAnswer": 1,
    "explanation": "Glycosphingolipidoses are a subgroup of lysosomal storage diseases specifically caused by deficiencies in the enzymes that catalyze the stepwise degradation of glycosphingolipids (e.g., cerebrosides, gangliosides). Examples include Tay-Sachs, Gaucher, Fabry, and Niemann-Pick diseases. The substrate for the missing enzyme accumulates in the lysosomes."
  },
  {
    "id": "conj-106",
    "question": "The carbohydrate chains of glycoconjugates can be involved in cell adhesion by:",
    "options": [
      "Forming covalent bonds with the cytoskeleton",
      "Binding to lectins on opposing cells",
      "Acting as ion channels",
      "Generating ATP for the process"
    ],
    "correctAnswer": 1,
    "explanation": "A primary mechanism for carbohydrate-mediated cell adhesion is the binding of glycans (on glycoproteins or glycolipids of one cell) to lectin-like adhesion molecules (e.g., selectins, galectins) on the surface of an opposing cell. This is a specific, non-covalent interaction that does not require energy (ATP) and is crucial in processes like inflammation and development."
  },
  {
    "id": "conj-107",
    "question": "The enzyme glucocerebrosidase is deficient in Gaucher's disease. Its normal substrate is:",
    "options": [
      "GM2 ganglioside",
      "Glucocerebroside (glucosylceramide)",
      "Sphingomyelin",
      "Galactocerebroside"
    ],
    "correctAnswer": 1,
    "explanation": "Glucocerebrosidase (or beta-glucosidase) is the enzyme that hydrolyzes the beta-glycosidic bond in glucocerebroside (also called glucosylceramide), releasing glucose and ceramide. A deficiency in this enzyme causes Gaucher's disease, leading to the accumulation of glucocerebroside primarily in macrophages."
  },
  {
    "id": "conj-108",
    "question": "The 'core structure' of a proteoglycan refers to the:",
    "options": [
      "Central lipid component",
      "Protein to which GAG chains are attached",
      "First sugar added in glycosylation",
      "Nuclear localization signal"
    ],
    "correctAnswer": 1,
    "explanation": "In proteoglycans, the 'core' is the polypeptide chain (the protein). This core protein is synthesized on ribosomes and then post-translationally modified by the covalent attachment of one or more glycosaminoglycan (GAG) chains at specific serine residues. The type and number of GAG chains define the proteoglycan's identity and function."
  },
  {
    "id": "conj-109",
    "question": "The process of adding sulfate groups to glycosaminoglycans (GAGs) is called:",
    "options": [
      "Sulfation",
      "Phosphorylation",
      "Acetylation",
      "Glycosylation"
    ],
    "correctAnswer": 0,
    "explanation": "Sulfation is the enzymatic transfer of a sulfate group from the donor molecule 3'-phosphoadenosine-5'-phosphosulfate (PAPS) to a hydroxyl or amino group on a sugar residue within a GAG chain. This reaction is catalyzed by sulfotransferases and is crucial for giving GAGs their high negative charge."
  },
  {
    "id": "conj-110",
    "question": "A 'glycosidase' is an enzyme that:",
    "options": [
      "Synthesizes glycosidic bonds",
      "Hydrolyzes glycosidic bonds",
      "Adds sulfate groups",
      "Phosphorylates sugars"
    ],
    "correctAnswer": 1,
    "explanation": "Glycosidases (also called glycoside hydrolases) are a large class of enzymes that catalyze the hydrolysis of glycosidic bonds, breaking down oligosaccharides, polysaccharides, and glycoconjugates into smaller sugars. They are essential for digestion and for the lysosomal degradation of glycoconjugates."
  },
  {
    "id": "conj-111",
    "question": "The glycoprotein thyroglobulin is essential for:",
    "options": [
      "Oxygen transport",
      "The synthesis of thyroid hormones (T3 and T4)",
      "Blood clotting",
      "Muscle contraction"
    ],
    "correctAnswer": 1,
    "explanation": "Thyroglobulin is a large, glycosylated protein produced by the thyroid gland. It serves as the precursor for the thyroid hormones thyroxine (T4) and triiodothyronine (T3). Iodine atoms are added to tyrosine residues on thyroglobulin, and the hormones are later cleaved from it for secretion."
  },
  {
    "id": "conj-112",
    "question": "The 'sialyl-Lewis a' antigen is associated with:",
    "options": [
      "Certain types of cancer (e.g., pancreatic, colon)",
      "Sickle cell anemia",
      "Cystic fibrosis",
      "Diabetes insipidus"
    ],
    "correctAnswer": 0,
    "explanation": "The sialyl-Lewis a (sLe^a) antigen is a carbohydrate antigen that is not normally expressed in most adult tissues but is often overexpressed on the surface of cancer cells from carcinomas of the pancreas, colon, stomach, and other organs. Its presence is associated with metastasis and poor prognosis, and it is the basis of the CA19-9 tumor marker test."
  },
  {
    "id": "conj-113",
    "question": "The 'LAMP' proteins (Lysosome-Associated Membrane Proteins) are heavily glycosylated to:",
    "options": [
      "Protect the lysosomal membrane from degradation by its own enzymes",
      "Carry oxygen within the lysosome",
      "Synthesize new lysosomal enzymes",
      "Act as transcription factors"
    ],
    "correctAnswer": 0,
    "explanation": "LAMP-1 and LAMP-2 are major glycoproteins that coat the inner surface of the lysosomal membrane. Their extensive glycosylation (with N-linked glycans) forms a thick glycocalyx that protects the membrane from being digested by the hydrolytic enzymes active within the lysosome lumen."
  },
  {
    "id": "conj-114",
    "question": "The 'glycosylphosphatidylinositol (GPI) anchor' is attached to the:",
    "options": [
      "N-terminus of a protein",
      "C-terminus of a protein",
      "Side chain of a serine residue",
      "Sugar moiety of a glycolipid"
    ],
    "correctAnswer": 1,
    "explanation": "The GPI anchor is post-translationally added to the C-terminus of a protein in the endoplasmic reticulum. The C-terminal amino acid of the mature protein is covalently linked to the ethanolamine phosphate component of the GPI anchor, which in turn is linked to the glycan core and the lipid tail that inserts into the membrane."
  },
  {
    "id": "conj-115",
    "question": "The proteoglycan aggrecan provides resistance to compression in cartilage primarily because:",
    "options": [
      "Its protein core is very strong",
      "Its negatively charged GAG chains attract cations and bind water, creating a hydrated gel",
      "It forms covalent cross-links with collagen",
      "It contains iron ions"
    ],
    "correctAnswer": 1,
    "explanation": "Aggrecan's function is due to its glycosaminoglycan (GAG) chains, particularly chondroitin sulfate. These chains are highly negatively charged due to sulfate and carboxylate groups. This charge attracts a cloud of positively charged ions (cations), which in turn draws in a large amount of water by osmosis. This creates a hydrated, gel-like matrix that resists compressive forces."
  },
  {
    "id": "conj-116",
    "question": "The enzyme neuraminidase is a key drug target for influenza because:",
    "options": [
      "It helps the virus enter the cell",
      "It cleaves sialic acid to release new viral particles from the host cell",
      "It replicates the viral RNA",
      "It packages the viral genome"
    ],
    "correctAnswer": 1,
    "explanation": "Neuraminidase (NA) on the surface of influenza viruses cleaves sialic acid residues from host cell glycoconjugates and from the newly formed viral glycoproteins. This prevents the newly assembled virions from aggregating and from remaining attached to the host cell debris, allowing them to escape and infect new cells. Drugs like oseltamivir (Tamiflu) inhibit neuraminidase."
  },
  {
    "id": "conj-117",
    "question": "The 'calnexin/calreticulin cycle' is part of the quality control system for:",
    "options": [
      "N-linked glycoproteins in the endoplasmic reticulum",
      "O-linked glycoproteins in the Golgi",
      "Glycolipids in the plasma membrane",
      "mRNA splicing in the nucleus"
    ],
    "correctAnswer": 0,
    "explanation": "The calnexin/calreticulin cycle is a crucial quality control mechanism in the ER for proteins that have acquired N-linked glycans. The chaperones calnexin (membrane-bound) and calreticulin (soluble) bind to monoglucosylated N-glycans on folding intermediates. This binding promotes proper folding and prevents aggregation. Properly folded proteins are deglycosylated and released. Misfolded proteins are reglucosylated for another round of chaperone binding or targeted for degradation."
  },
  {
    "id": "conj-118",
    "question": "A 'glycomimetic' drug is designed to:",
    "options": [
      "Mimic the structure of a sugar and block carbohydrate-protein interactions",
      "Stimulate glycogen synthesis",
      "Break down all glycoproteins",
      "Add extra sugars to cells"
    ],
    "correctAnswer": 0,
    "explanation": "Glycomimetics are synthetic molecules designed to mimic the structure of bioactive carbohydrates. They are developed as drugs to inhibit the interactions between carbohydrates and their binding proteins (e.g., lectins, glycosidases). Examples include antiviral drugs that block viral attachment and anti-inflammatory drugs that block selectin-mediated leukocyte adhesion."
  },
  {
    "id": "conj-119",
    "question": "The glycoprotein fibrinogen is converted to fibrin during blood clotting. Fibrin:",
    "options": [
      "Is a soluble precursor",
      "Forms an insoluble mesh that traps platelets and blood cells",
      "Acts as an enzyme to dissolve clots",
      "Carries oxygen in the blood"
    ],
    "correctAnswer": 1,
    "explanation": "Fibrinogen is a soluble glycoprotein present in blood plasma. During clotting, the enzyme thrombin cleaves fibrinogen to form fibrin monomers. These monomers spontaneously polymerize to form long, insoluble strands of fibrin. This fibrin mesh forms the structural basis of a blood clot, trapping platelets and blood cells to stop bleeding."
  },
  {
    "id": "conj-120",
    "question": "The 'glycosylation site occupancy' refers to:",
    "options": [
      "The number of people in a glycosylation lab",
      "The proportion of potential glycosylation sites on a protein that are actually modified",
      "The size of a glycan chain",
      "The rate of sugar absorption in the intestine"
    ],
    "correctAnswer": 1,
    "explanation": "Glycosylation site occupancy is a measure of the efficiency with which a potential glycosylation site (e.g., an Asn-X-Ser/Thr sequon for N-glycosylation) is actually utilized. Not all sequons are glycosylated; occupancy can be influenced by protein structure, folding, and the cellular environment. It is a key parameter for characterizing recombinant glycoprotein therapeutics."
  },
  {
    "id": "conj-121",
    "question": "The proteoglycan betaglycan acts as a:",
    "options": [
      "Co-receptor for TGF-β (Transforming Growth Factor-beta)",
      "Component of the myelin sheath",
      "Shock absorber in joints",
      "Receptor for LDL cholesterol"
    ],
    "correctAnswer": 0,
    "explanation": "Betaglycan, also known as TGF-β type III receptor, is a transmembrane proteoglycan. It can present TGF-β to its signaling receptors (Type I and II). It often carries chondroitin sulfate and heparan sulfate chains, and its role is to modulate cellular responses to TGF-β, a cytokine involved in cell growth and differentiation."
  },
  {
    "id": "conj-122",
    "question": "The 'glycosphingolipid globotriaosylceramide (Gb3)' is also known as:",
    "options": [
      "CD77",
      "GM1",
      "Sulfatide",
      "Cerebroside"
    ],
    "correctAnswer": 0,
    "explanation": "Globotriaosylceramide (Gb3), with the structure Galα1-4Galβ1-4Glcβ1-Cer, is also known as CD77. It is the receptor for Shiga toxin (produced by Shigella dysenteriae and certain strains of E. coli). The binding of the toxin to Gb3 on kidney endothelial cells can lead to hemolytic-uremic syndrome (HUS)."
  },
  {
    "id": "conj-123",
    "question": "The enzyme O-GlcNAc transferase (OGT) adds a single N-acetylglucosamine:",
    "options": [
      "To serine and threonine residues of nuclear and cytoplasmic proteins",
      "To asparagine residues in the ER",
      "To the ceramide backbone of glycolipids",
      "To the ends of glycosaminoglycan chains"
    ],
    "correctAnswer": 0,
    "explanation": "O-GlcNAcylation is a unique form of O-linked glycosylation. It involves the addition of a single β-N-acetylglucosamine (O-GlcNAc) residue to serine or threonine residues of intracellular proteins in the nucleus and cytoplasm. It is dynamic and reversible, akin to phosphorylation, and regulates processes like transcription, signaling, and stress response."
  },
  {
    "id": "conj-124",
    "question": "The 'glycosylation pattern' of a glycoprotein can affect its:",
    "options": [
      "Stability, solubility, and half-life in circulation",
      "Amino acid sequence",
      "Genetic code",
      "Rate of transcription"
    ],
    "correctAnswer": 0,
    "explanation": "The pattern of glycosylation (the structures of the glycans and their attachment sites) profoundly influences the physicochemical and biological properties of a glycoprotein. Glycans can increase solubility, protect against protease digestion (increasing half-life), promote correct folding, and modulate biological activity and recognition by receptors."
  },
  {
    "id": "conj-125",
    "question": "The proteoglycan versican is found in:",
    "options": [
      "The nucleus",
      "The extracellular matrix of soft tissues",
      "The mitochondrial matrix",
      "The synaptic vesicles"
    ],
    "correctAnswer": 1,
    "explanation": "Versican is a large chondroitin sulfate proteoglycan that is a major component of the extracellular matrix in many soft tissues, including blood vessels, skin, and the brain. It contributes to tissue volume, provides hydration, and helps create open, expansive matrices that are important during development and wound healing."
  },
  {
    "id": "conj-126",
    "question": "The 'glycoengineering' of therapeutic antibodies aims to:",
    "options": [
      "Change their antigen-binding specificity",
      "Modify their glycosylation to enhance efficacy and safety",
      "Make them resistant to all proteases",
      "Convert them into enzymes"
    ],
    "correctAnswer": 1,
    "explanation": "Glycoengineering involves deliberately altering the glycosylation pattern of therapeutic antibodies (like IgG) to improve their therapeutic properties. For example, producing antibodies without core fucose enhances their ability to kill target cells (ADCC). Increasing sialylation can reduce inflammation. This is done by engineering cell lines or controlling bioreactor conditions."
  },
  {
    "id": "conj-127",
    "question": "The glycoprotein transferrin receptor is involved in:",
    "options": [
      "Iron uptake by cells",
      "Oxygen transport",
      "Blood clotting",
      "Muscle contraction"
    ],
    "correctAnswer": 0,
    "explanation": "The transferrin receptor is a cell surface glycoprotein that binds iron-loaded transferrin from the blood. The receptor-transferrin complex is internalized via endocytosis. Inside the acidic endosome, iron is released from transferrin. The receptor is then recycled back to the cell surface. This is the primary mechanism for cellular iron uptake."
  },
  {
    "id": "conj-128",
    "question": "The 'glycosylase' activity involved in DNA repair refers to enzymes that:",
    "options": [
      "Add sugars to DNA",
      "Remove incorrect bases from DNA",
      "Synthesize glycoproteins",
      "Break down glycogen"
    ],
    "correctAnswer": 1,
    "explanation": "DNA glycosylases are a family of enzymes involved in base excision repair. They are not related to carbohydrate metabolism. They recognize and catalyze the hydrolysis of the N-glycosidic bond between a damaged or incorrect base and the deoxyribose sugar in DNA, initiating the repair process. The name comes from their mechanism of cleaving a glycosidic bond, not from working on sugars."
  },
  {
    "id": "conj-129",
    "question": "The proteoglycan neurocan is important for:",
    "options": [
      "Cartilage function",
      "Nervous system development and plasticity",
      "Blood filtration in the kidney",
      "Light transmission in the cornea"
    ],
    "correctAnswer": 1,
    "explanation": "Neurocan is a chondroitin sulfate proteoglycan that is predominantly expressed in the central nervous system. It is a component of the extracellular matrix and is believed to play important roles in neuronal development, axon guidance, and synaptic plasticity by inhibiting neurite outgrowth and modulating cell adhesion."
  },
  {
    "id": "conj-130",
    "question": "The 'glycosylation disorder' known as CDG-Ia (PMM2-CDG) is caused by a deficiency in:",
    "options": [
      "An enzyme involved in synthesizing the dolichol-linked oligosaccharide precursor",
      "A lysosomal glycosidase",
      "A Golgi glycosyltransferase",
      "A transcription factor"
    ],
    "correctAnswer": 0,
    "explanation": "CDG-Ia (the most common Congenital Disorder of Glycosylation) is caused by a deficiency in phosphomannomutase 2 (PMM2). This enzyme converts mannose-6-phosphate to mannose-1-phosphate, a crucial step in generating GDP-mannose, which is a donor substrate for building the dolichol-linked oligosaccharide precursor for N-linked glycosylation. This defect leads to under-glycosylation of proteins."
  },
  {
    "id": "conj-131",
    "question": "The glycoprotein hormone lutropin (LH) is produced by the pituitary gland and functions to:",
    "options": [
      "Stimulate ovulation and progesterone production",
      "Lower blood glucose",
      "Stimulate milk production",
      "Regulate calcium levels"
    ],
    "correctAnswer": 0,
    "explanation": "Luteinizing hormone (LH or lutropin) is a glycoprotein hormone secreted by the anterior pituitary gland. In females, it triggers ovulation and stimulates the corpus luteum to produce progesterone. In males, it stimulates testosterone production. Its carbohydrate content is essential for its biological activity and metabolic clearance."
  },
  {
    "id": "conj-132",
    "question": "The 'glycosylation sequon' for N-linked glycosylation is:",
    "options": [
      "Asn-X-Ser/Thr",
      "Ser-X-Asn",
      "Asp-X-Glu",
      "His-X-Cys"
    ],
    "correctAnswer": 0,
    "explanation": "The consensus sequence for N-linked glycosylation is Asn-X-Ser/Thr, where Asn is asparagine, X can be any amino acid except proline, and Ser/Thr is serine or threonine. This triplet sequence is necessary (but not always sufficient) for the oligosaccharyltransferase enzyme to transfer the glycan precursor to the asparagine residue."
  },
  {
    "id": "conj-133",
    "question": "The proteoglycan biglycan gets its name because it:",
    "options": [
      "Is very large",
      "Contains two glycosaminoglycan (GAG) chains",
      "Is found in 'big' tissues like bone",
      "Was discovered by Dr. Big"
    ],
    "correctAnswer": 1,
    "explanation": "Biglycan is a small leucine-rich proteoglycan (SLRP). Its name derives from the fact that it typically carries two glycosaminoglycan (GAG) chains (either chondroitin sulfate or dermatan sulfate). ('Bi' meaning two, 'glycan' referring to the GAG chains). It is involved in collagen fibrillogenesis and bone formation."
  },
  {
    "id": "conj-134",
    "question": "The 'glycome' of a cell is dynamic and can change in response to:",
    "options": [
      "Cellular state, differentiation, and disease",
      "Only the genetic code, which is static",
      "The temperature of the environment only",
      "The pH of the culture medium only"
    ],
    "correctAnswer": 0,
    "explanation": "The glycome is highly dynamic. The patterns of glycosylation on a cell's glycoproteins and glycolipids can change dramatically during development, cellular differentiation, activation (e.g., of immune cells), and in disease states like cancer and inflammation. This reflects changes in the expression of glycosyltransferases and other enzymes in the glycosylation machinery."
  },
  {
    "id": "conj-135",
    "question": "The glycoprotein known as 'erythropoietin' (EPO) is clinically used to:",
    "options": [
      "Treat anemia by stimulating red blood cell production",
      "Dissolve blood clots",
      "Lower blood pressure",
      "Stimulate white blood cell production"
    ],
    "correctAnswer": 0,
    "explanation": "Recombinant human erythropoietin (rhEPO) is a glycoprotein therapeutic used to treat anemia, particularly in patients with chronic kidney disease or undergoing chemotherapy. It works by binding to receptors on erythroid progenitor cells in the bone marrow, stimulating their proliferation and differentiation into red blood cells. Its glycosylation is critical for stability and activity."
  },
  {
    "id": "conj-136",
    "question": "The 'glycosphingolipid microdomain' or 'lipid raft' in the membrane is enriched in:",
    "options": [
      "Glycosphingolipids and cholesterol",
      "Phosphatidylcholine only",
      "Triglycerides",
      "Free fatty acids"
    ],
    "correctAnswer": 0,
    "explanation": "Lipid rafts are small, dynamic, ordered microdomains within the plasma membrane. They are enriched in sphingolipids (including glycosphingolipids), cholesterol, and certain types of proteins. The saturated hydrocarbon chains of sphingolipids and the rigid ring structure of cholesterol allow them to pack tightly together, forming a more ordered platform than the surrounding disordered membrane. These rafts are involved in signal transduction and membrane trafficking."
  },
  {
    "id": "conj-137",
    "question": "The enzyme hyaluronidase:",
    "options": [
      "Synthesizes hyaluronic acid",
      "Degrades hyaluronic acid",
      "Adds sulfate to hyaluronic acid",
      "Binds to hyaluronic acid but does not change it"
    ],
    "correctAnswer": 1,
    "explanation": "Hyaluronidase is a family of enzymes that catalyze the hydrolysis of hyaluronic acid (hyaluronan). They break the β-1,4 linkages between the sugar units, depolymerizing the large polymer into smaller fragments. This activity is important in tissue remodeling, fertilization (helping sperm penetrate the egg's protective layer), and is used by some pathogens to spread through tissues."
  },
  {
    "id": "conj-138",
    "question": "The glycoprotein 'ZP3' (Zona Pellucida Glycoprotein 3) is crucial for:",
    "options": [
      "Species-specific sperm binding to the egg",
      "Oxygen transport in the fetus",
      "Blood clotting",
      "Muscle contraction"
    ],
    "correctAnswer": 0,
    "explanation": "ZP3 is a major glycoprotein component of the zona pellucida, the thick extracellular matrix surrounding the mammalian oocyte. It acts as the primary receptor for sperm. The oligosaccharide chains on ZP3 are responsible for the species-specific binding of sperm to the egg, triggering the sperm's acrosome reaction, which is necessary for fertilization."
  },
  {
    "id": "conj-139",
    "question": "The 'glycosylation index' of a protein can be used as:",
    "options": [
      "A biomarker for certain diseases, like cancer",
      "A measure of protein synthesis rate",
      "A unit for DNA length",
      "A score for enzyme efficiency"
    ],
    "correctAnswer": 0,
    "explanation": "Altered glycosylation is a hallmark of many diseases, especially cancer. Tumor cells often display abnormal glycan structures on their surface glycoproteins and glycolipids (e.g., increased sialylation, branched N-glycans, expression of oncofetal antigens). Therefore, measuring specific glycan patterns (a glycosylation index) in blood tests (like CA19-9, PSA) can serve as biomarkers for disease detection, prognosis, and monitoring."
  },
  {
    "id": "conj-140",
    "question": "The proteoglycan 'perlecan' has a name that reflects its:",
    "options": [
      "Function in perception",
      "Appearance under the electron microscope like a string of pearls",
      "Discovery in pearls",
      "High sugar content like a pearl"
    ],
    "correctAnswer": 1,
    "explanation": "Perlecan gets its name from its appearance in rotary-shadowed electron micrographs. Its core protein has a series of globular domains separated by rod-like segments, giving it a distinct 'string of pearls' morphology. It is a major heparan sulfate proteoglycan of basement membranes."
  },
  {
    "id": "conj-141",
    "question": "The 'glycosylation-dependent cell adhesion molecule' known as 'glycocalycin' is another name for:",
    "options": [
      "Hemoglobin",
      "Epithelial cadherin (E-cadherin)",
      "A component of the glycocalyx",
      "A mitochondrial protein"
    ],
    "correctAnswer": 2,
    "explanation": "The term 'glycocalycin' is not a standard specific name but is sometimes used to refer to the entire glycocalyx or its components. The glycocalyx itself is the carbohydrate-rich layer on the cell surface, composed of the glycoconjugates (glycoproteins and glycolipids) and their associated water layer. It is fundamental for adhesion and protection."
  },
  {
    "id": "conj-142",
    "question": "The enzyme 'fucosyltransferase' is responsible for adding:",
    "options": [
      "Fucose residues to growing glycan chains",
      "Phosphate groups to sugars",
      "Sialic acid to proteins",
      "Galactose to ceramide"
    ],
    "correctAnswer": 0,
    "explanation": "Fucosyltransferases are a family of glycosyltransferases that catalyze the transfer of L-fucose from GDP-fucose to accepting molecules, which can be glycoproteins, glycolipids, or oligosaccharides. They are responsible for creating important antigenic determinants like the H, Lewis, and sialyl-Lewis blood group antigens."
  },
  {
    "id": "conj-143",
    "question": "The glycoprotein 'avidity' in the context of antibody-antigen binding can be increased by:",
    "options": [
      "The presence of multiple antigen-binding sites",
      "A single, high-affinity binding site",
      "The lack of glycosylation",
      "The protein core only"
    ],
    "correctAnswer": 0,
    "explanation": "Avidity is the overall strength of the binding between a multivalent antibody and a multivalent antigen. It is enhanced by the presence of multiple antigen-binding sites on the antibody (e.g., IgG has 2, IgM has 10) that can simultaneously engage multiple epitopes on a target (like a cell surface covered in glycoproteins). This is distinct from affinity, which is the strength of a single binding site interaction."
  },
  {
    "id": "conj-144",
    "question": "The proteoglycan 'fibromodulin' is involved in:",
    "options": [
      "Regulating collagen fibril formation in tendons and ligaments",
      "Carrying oxygen",
      "Blood clotting",
      "Neuronal signaling"
    ],
    "correctAnswer": 0,
    "explanation": "Fibromodulin is a small leucine-rich proteoglycan (SLRP) found in connective tissues like tendons, ligaments, and cartilage. It carries keratan sulfate chains. It binds to collagen fibrils and regulates fibrillogenesis (the process of fibril assembly and growth), helping to determine the final diameter and organization of the collagen fibrils."
  },
  {
    "id": "conj-145",
    "question": "The 'glycosylation shift' observed in some cancers refers to:",
    "options": [
      "A change to a simpler, less processed form of glycosylation",
      "A switch from N-linked to O-linked glycosylation",
      "The complete loss of all glycosylation",
      "A change in the genetic code"
    ],
    "correctAnswer": 0,
    "explanation": "In many cancers, there is a shift in glycosylation patterns. One common change is the under-processing or truncation of glycans. For example, there might be an increase in high-mannose type N-glycans (which are early biosynthetic intermediates) instead of the more mature, complex-type glycans typically seen in normal adult tissues. This is due to altered expression of glycosyltransferases in tumor cells."
  },
  {
    "id": "conj-146",
    "question": "The glycoprotein 'selectin' family (E-selectin, P-selectin, L-selectin) mediates:",
    "options": [
      "The rolling adhesion of leukocytes on blood vessel walls",
      "The tight binding of cells in epithelia",
      "The transport of ions across membranes",
      "The contraction of muscles"
    ],
    "correctAnswer": 0,
    "explanation": "Selectins are calcium-dependent lectins. E-selectin (on endothelial cells), P-selectin (on platelets and endothelial cells), and L-selectin (on leukocytes) bind to carbohydrate ligands (like sialyl-Lewis X) on opposing cells. This binding is characterized by fast on-and-off rates, which allows leukocytes to roll along the vascular endothelium, the first step in exiting the bloodstream to sites of infection or injury."
  },
  {
    "id": "conj-147",
    "question": "The 'glycosyltransferase' enzyme uses an activated sugar nucleotide donor, such as:",
    "options": [
      "UDP-glucose or GDP-mannose",
      "ATP or GTP",
      "NAD+ or FAD",
      "Acetyl-CoA"
    ],
    "correctAnswer": 0,
    "explanation": "Glycosyltransferases require activated sugar nucleotides as high-energy donor substrates for the glycosyl group transfer. Common donors include UDP-glucose, UDP-galactose, GDP-mannose, GDP-fucose, UDP-GlcNAc, UDP-GalNAc, and CMP-sialic acid. The energy from the hydrolysis of the nucleotide-sugar bond drives the formation of the new glycosidic bond."
  },
  {
    "id": "conj-148",
    "question": "The proteoglycan 'phosphacan' is expressed in the:",
    "options": [
      "Brain and nervous system",
      "Liver only",
      "Heart muscle",
      "Pancreatic beta cells"
    ],
    "correctAnswer": 0,
    "explanation": "Phosphacan is a chondroitin sulfate proteoglycan that is a soluble splice variant of a receptor-type protein tyrosine phosphatase (RPTPζ/β). It is abundantly expressed in the brain, particularly during development. It is thought to play important roles in neuronal migration, axon guidance, and the formation of neural networks by modulating cell-cell and cell-matrix interactions."
  },
  {
    "id": "conj-149",
    "question": "The 'glycosylation status' of a protein can be analyzed using a method called:",
    "options": [
      "Lectinol blotting",
      "Southern blotting",
      "DNA sequencing",
      "Polymerase chain reaction (PCR)"
    ],
    "correctAnswer": 0,
    "explanation": "Lectinol blotting (or lectin blotting) is a technique analogous to Western blotting. After proteins are separated by gel electrophoresis and transferred to a membrane, the membrane is probed with labeled lectins (e.g., ConA, WGA) instead of antibodies. This allows for the detection of specific carbohydrate motifs on glycoproteins."
  },
  {
    "id": "conj-150",
    "question": "The field of 'glycobiology' has expanded greatly due to the understanding that glycans are involved in:",
    "options": [
      "Nearly every biological process, including cell communication, immunity, and development",
      "Only energy storage",
      "Only structural roles",
      "Only plant biology"
    ],
    "correctAnswer": 0,
    "explanation": "Glycobiology has moved from a niche field to a central discipline in molecular biology. It is now clear that glycans on glycoproteins and glycolipids are not just inert decorations. They are involved in virtually every biological process, including cell adhesion, signaling, host-pathogen interactions, immune recognition, inflammation, cancer metastasis, and development. Their complexity allows them to store vast amounts of biological information."
  }
  ];