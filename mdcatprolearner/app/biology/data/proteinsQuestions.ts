export interface Question {
  id: string;
  question: string;
  options: string[];
  correctAnswer: number;
  explanation: string;
}

export const proteinsQuestions: Question[] = 
 [
  {
    "id": "protein-1",
    "question": "What is the basic building block of proteins?",
    "options": [
      "Nucleotides",
      "Fatty acids",
      "Amino acids",
      "Monosaccharides"
    ],
    "correctAnswer": 2,
    "explanation": "Proteins are polymers, and their monomeric subunits are amino acids. These are linked together by peptide bonds to form polypeptide chains."
  },
  {
    "id": "protein-2",
    "question": "How many amino acids are commonly found in proteins?",
    "options": [
      "10",
      "20",
      "30",
      "40"
    ],
    "correctAnswer": 1,
    "explanation": "There are 20 standard amino acids that are encoded by the genetic code and are commonly incorporated into proteins during translation."
  },
  {
    "id": "protein-3",
    "question": "The general structure of an amino acid includes all of the following EXCEPT:",
    "options": [
      "A central alpha carbon",
      "An amino group (-NH₂)",
      "A carboxyl group (-COOH)",
      "A phosphate group"
    ],
    "correctAnswer": 3,
    "explanation": "All standard amino acids have a central alpha carbon to which an amino group, a carboxyl group, a hydrogen atom, and a variable side chain (R-group) are attached. A phosphate group is not a standard component."
  },
  {
    "id": "protein-4",
    "question": "The unique chemical properties of each amino acid are determined by its:",
    "options": [
      "Amino group",
      "Carboxyl group",
      "Alpha carbon",
      "R-group (side chain)"
    ],
    "correctAnswer": 3,
    "explanation": "The R-group, or side chain, is different for each of the 20 amino acids. Its structure (size, shape, charge, reactivity, hydrophobicity) dictates the unique role and behavior of the amino acid in a protein."
  },
  {
    "id": "protein-5",
    "question": "A molecule that has both a positive and a negative charge is called a:",
    "options": [
      "Cation",
      "Anion",
      "Zwitterion",
      "Free radical"
    ],
    "correctAnswer": 2,
    "explanation": "A zwitterion is a molecule with two or more functional groups that possess both a positive and a negative electrical charge, resulting in a net charge of zero. At physiological pH (around 7.4), amino acids exist as zwitterions, with a protonated amino group (-NH₃⁺) and a deprotonated carboxyl group (-COO⁻)."
  },
  {
    "id": "protein-6",
    "question": "The covalent bond that links two amino acids together is called a:",
    "options": [
      "Glycosidic bond",
      "Ester bond",
      "Peptide bond",
      "Hydrogen bond"
    ],
    "correctAnswer": 2,
    "explanation": "A peptide bond is a covalent chemical bond formed between the carboxyl group of one amino acid and the amino group of another, releasing a molecule of water (H₂O). This is a dehydration synthesis reaction."
  },
  {
    "id": "protein-7",
    "question": "The linear sequence of amino acids in a protein is its:",
    "options": [
      "Primary structure",
      "Secondary structure",
      "Tertiary structure",
      "Quaternary structure"
    ],
    "correctAnswer": 0,
    "explanation": "The primary structure of a protein is the unique, linear sequence of amino acids in a polypeptide chain, held together by peptide bonds. It is the most fundamental level of protein structure and dictates all higher levels of folding."
  },
  {
    "id": "protein-8",
    "question": "Alpha-helices and beta-pleated sheets are examples of a protein's:",
    "options": [
      "Primary structure",
      "Secondary structure",
      "Tertiary structure",
      "Quaternary structure"
    ],
    "correctAnswer": 1,
    "explanation": "Secondary structure refers to local, repetitive folding patterns within a polypeptide chain. The two most common types are the alpha-helix (a right-handed coil) and the beta-pleated sheet (a sheet-like array of strands). These structures are stabilized primarily by hydrogen bonds between the backbone carbonyl and amino groups."
  },
  {
    "id": "protein-9",
    "question": "The overall three-dimensional shape of a single polypeptide chain is its:",
    "options": [
      "Primary structure",
      "Secondary structure",
      "Tertiary structure",
      "Quaternary structure"
    ],
    "correctAnswer": 2,
    "explanation": "Tertiary structure is the complete three-dimensional conformation of a single polypeptide chain. It results from interactions between the side chains (R-groups) of the amino acids, including hydrophobic interactions, hydrogen bonds, ionic bonds, and disulfide bridges."
  },
  {
    "id": "protein-10",
    "question": "Hemoglobin, which is composed of four polypeptide chains, is an example of:",
    "options": [
      "Primary structure",
      "Secondary structure",
      "Tertiary structure",
      "Quaternary structure"
    ],
    "correctAnswer": 3,
    "explanation": "Quaternary structure is the arrangement of multiple folded polypeptide chains (subunits) into a multi-subunit complex. Not all proteins have quaternary structure; it is reserved for proteins like hemoglobin (with 4 subunits), DNA polymerase, and antibody molecules."
  },
  {
    "id": "protein-11",
    "question": "Which type of interaction is primarily responsible for stabilizing the alpha-helix?",
    "options": [
      "Hydrophobic interactions",
      "Hydrogen bonds",
      "Disulfide bonds",
      "Ionic bonds"
    ],
    "correctAnswer": 1,
    "explanation": "The alpha-helix is stabilized by hydrogen bonds that form between the carbonyl oxygen (C=O) of one amino acid and the amide hydrogen (N-H) of an amino acid four residues further along the chain. This creates a regular, repeating pattern."
  },
  {
    "id": "protein-12",
    "question": "Which amino acid has a side chain that can form a disulfide bond?",
    "options": [
      "Cysteine",
      "Serine",
      "Lysine",
      "Glutamic acid"
    ],
    "correctAnswer": 0,
    "explanation": "Cysteine has a thiol (-SH) group in its side chain. Under oxidizing conditions, two cysteine residues can form a covalent disulfide bond (-S-S-), which is important for stabilizing the tertiary and quaternary structure of many proteins (e.g., insulin, antibodies)."
  },
  {
    "id": "protein-13",
    "question": "Amino acids that cannot be synthesized by the human body and must be obtained from the diet are called:",
    "options": [
      "Non-essential amino acids",
      "Essential amino acids",
      "Acidic amino acids",
      "Glucogenic amino acids"
    ],
    "correctAnswer": 1,
    "explanation": "Essential amino acids are those that an organism cannot synthesize de novo (from scratch) in sufficient amounts, and therefore must be supplied in the diet. For humans, there are 9 essential amino acids."
  },
  {
    "id": "protein-14",
    "question": "The loss of a protein's three-dimensional structure due to heat or pH is called:",
    "options": [
      "Hydrolysis",
      "Denaturation",
      "Condensation",
      "Renaturation"
    ],
    "correctAnswer": 1,
    "explanation": "Denaturation is the process by which a protein loses its native secondary, tertiary, and quaternary structure (but not its primary structure) due to the disruption of non-covalent interactions. This results in the loss of biological function. It can be caused by heat, extreme pH, organic solvents, or mechanical stress."
  },
  {
    "id": "protein-15",
    "question": "Which level of protein structure is disrupted by denaturation but not by hydrolysis?",
    "options": [
      "Primary structure",
      "Secondary structure",
      "Tertiary structure",
      "Both B and C"
    ],
    "correctAnswer": 3,
    "explanation": "Denaturation disrupts the weaker non-covalent interactions (hydrogen bonds, hydrophobic, ionic) that stabilize secondary, tertiary, and quaternary structure, leaving the primary structure (peptide bonds) intact. Hydrolysis, in contrast, breaks the strong covalent peptide bonds of the primary structure itself."
  },
  {
    "id": "protein-16",
    "question": "The function of a protein is primarily determined by its:",
    "options": [
      "Size",
      "Amino acid sequence",
      "Color",
      "Source (plant or animal)"
    ],
    "correctAnswer": 1,
    "explanation": "The amino acid sequence (primary structure) dictates how the chain will fold into its specific three-dimensional shape (tertiary structure). This unique shape creates specific binding sites and catalytic surfaces, which in turn determine the protein's specific function (e.g., enzyme catalysis, antibody binding, structural support)."
  },
  {
    "id": "protein-17",
    "question": "Which of the following is a function of proteins?",
    "options": [
      "Energy storage only",
      "Catalyzing biochemical reactions",
      "Insulation",
      "Maintaining membrane fluidity"
    ],
    "correctAnswer": 1,
    "explanation": "Proteins have incredibly diverse functions. One of the most crucial is acting as enzymes, which are biological catalysts that speed up biochemical reactions. While proteins can be used for energy, it is not their primary function. Insulation and membrane fluidity are roles of lipids."
  },
  {
    "id": "protein-18",
    "question": "Which amino acid has a hydrophobic side chain?",
    "options": [
      "Valine",
      "Aspartic acid",
      "Lysine",
      "Glutamine"
    ],
    "correctAnswer": 0,
    "explanation": "Valine is a nonpolar amino acid with an aliphatic hydrocarbon side chain. These hydrophobic side chains tend to cluster together in the interior of water-soluble proteins, away from the aqueous environment, to stabilize the protein's core. Aspartic acid (acidic), Lysine (basic), and Glutamine (polar) are all hydrophilic."
  },
  {
    "id": "protein-19",
    "question": "At a pH below its pI (isoelectric point), an amino acid will have:",
    "options": [
      "A net positive charge",
      "A net negative charge",
      "No net charge",
      "A hydrolyzed peptide bond"
    ],
    "correctAnswer": 0,
    "explanation": "The isoelectric point (pI) is the pH at which an amino acid or protein has no net charge. At a pH lower (more acidic) than the pI, the solution has an excess of H⁺ ions. These will protonate the carboxylate group (-COO⁻ -> -COOH) and any other basic groups, resulting in a net positive charge on the molecule."
  },
  {
    "id": "protein-20",
    "question": "The process of determining the amino acid sequence of a protein is known as:",
    "options": [
      "Protein sequencing",
      "Protein synthesis",
      "Protein denaturation",
      "Protein purification"
    ],
    "correctAnswer": 0,
    "explanation": "Protein sequencing is the practical process of determining the primary structure—the precise order of amino acids—in a protein or peptide. This was first done for insulin by Frederick Sanger, for which he won a Nobel Prize."
  },
    {
    "id": "protein-21",
    "question": "Which of the following amino acids has a charged polar side chain at physiological pH?",
    "options": [
      "Glycine",
      "Glutamate",
      "Alanine",
      "Valine"
    ],
    "correctAnswer": 1,
    "explanation": "Glutamate has a carboxylic acid group in its side chain. At physiological pH (~7.4), this group is deprotonated (-COO⁻), giving it a negative charge. Glycine, Alanine, and Valine have nonpolar, neutral side chains."
  },
  {
    "id": "protein-22",
    "question": "The beta-pleated sheet structure in proteins is stabilized by:",
    "options": [
      "Disulfide bonds between strands",
      "Hydrogen bonds between backbone atoms of adjacent strands",
      "Hydrophobic interactions within a single strand",
      "Ionic bonds between R-groups"
    ],
    "correctAnswer": 1,
    "explanation": "In a beta-sheet, hydrogen bonds form between the carbonyl oxygen atoms of one strand and the amide hydrogen atoms of an adjacent strand. This creates a pleated, sheet-like structure. The strands can be parallel or antiparallel."
  },
  {
    "id": "protein-23",
    "question": "Which amino acid is NOT optically active?",
    "options": [
      "Alanine",
      "Glycine",
      "Serine",
      "Proline"
    ],
    "correctAnswer": 1,
    "explanation": "Optical activity requires a chiral center. Glycine is the simplest amino acid; its R-group is a single hydrogen atom. This means its alpha carbon is bonded to two hydrogen atoms and is not a chiral center. Therefore, glycine is not optically active and does not have D or L isomers."
  },
  {
    "id": "protein-24",
    "question": "The peptide bond has a character that is best described as:",
    "options": [
      "A single bond with free rotation",
      "A double bond with partial double bond character",
      "An ionic bond",
      "A van der Waals interaction"
    ],
    "correctAnswer": 1,
    "explanation": "The peptide bond has partial double bond character due to resonance between the carbonyl oxygen and the amide nitrogen. This restricts rotation around the bond, making it planar and rigid. This rigidity influences the possible conformations of the polypeptide backbone."
  },
  {
    "id": "protein-25",
    "question": "Which of the following is a function of collagen?",
    "options": [
      "Transport of oxygen in blood",
      "Catalysis of metabolic reactions",
      "Providing tensile strength in skin, bones, and tendons",
      "Fighting foreign pathogens"
    ],
    "correctAnswer": 2,
    "explanation": "Collagen is the most abundant protein in the animal kingdom. It is a fibrous protein with a strong, rope-like structure that provides mechanical strength and structural support to connective tissues such as skin, bones, tendons, cartilage, and blood vessels."
  },
  {
    "id": "protein-26",
    "question": "The alpha-keratin protein found in hair and nails is a classic example of a:",
    "options": [
      "Globular protein",
      "Fibrous protein",
      "Membrane protein",
      "Conjugated protein"
    ],
    "correctAnswer": 1,
    "explanation": "Alpha-keratin is a fibrous protein. It is composed of long, insoluble, and durable strands that are excellent for providing structural support and protection. This contrasts with globular proteins, which are compact, soluble, and often functional (like enzymes)."
  },
  {
    "id": "protein-27",
    "question": "A protein that is combined with a non-protein component is called a:",
    "options": [
      "Simple protein",
      "Conjugated protein",
      "Denatured protein",
      "Oligomeric protein"
    ],
    "correctAnswer": 1,
    "explanation": "A conjugated protein has a non-protein component, called a prosthetic group, tightly bound to it. Examples include hemoglobin (protein + heme group), lipoproteins (protein + lipid), and glycoproteins (protein + carbohydrate)."
  },
  {
    "id": "protein-28",
    "question": "Which force is considered the major driving force for the folding of water-soluble globular proteins?",
    "options": [
      "Hydrogen bonding",
      "The hydrophobic effect",
      "Disulfide bond formation",
      "Ionic interactions"
    ],
    "correctAnswer": 1,
    "explanation": "The hydrophobic effect is the tendency of nonpolar (hydrophobic) substances to aggregate in water to minimize their contact with the polar solvent. This is the primary driving force for protein folding, causing hydrophobic amino acid side chains to cluster in the protein's interior, thereby stabilizing the native 3D structure."
  },
  {
    "id": "protein-29",
    "question": "The amino acid proline is often referred to as a 'helix breaker' because:",
    "options": [
      "Its side chain is too bulky",
      "Its side chain bonds back to the amino group, creating a rigid ring",
      "It is highly charged and disrupts hydrogen bonding",
      "It is only found in beta-sheets"
    ],
    "correctAnswer": 1,
    "explanation": "Proline has a unique cyclic structure where its side chain forms a covalent bond with its own amino group. This makes the amino group a secondary amine, which is rigid and cannot participate in the standard hydrogen bonding pattern required for alpha-helix stability. Its fixed geometry often introduces a kink or bend in the chain."
  },
  {
    "id": "protein-30",
    "question": "The specific, biologically active conformation of a protein is called its:",
    "options": [
      "Denatured state",
      "Native state",
      "Random coil",
      "Primary structure"
    ],
    "correctAnswer": 1,
    "explanation": "The native state is the functional, folded conformation of a protein. It is the three-dimensional shape in which a protein is biologically active. Denaturation disrupts this native state, leading to loss of function."
  },
  {
    "id": "protein-31",
    "question": "Which technique is commonly used to determine the three-dimensional structure of a protein at atomic resolution?",
    "options": [
      "Gel electrophoresis",
      "X-ray crystallography",
      "Chromatography",
      "Polymerase chain reaction (PCR)"
    ],
    "correctAnswer": 1,
    "explanation": "X-ray crystallography is a primary method for determining the atomic and molecular structure of a protein crystal by irradiating it with X-rays and analyzing the resulting diffraction pattern. NMR spectroscopy is another powerful technique for this purpose, especially for smaller proteins in solution."
  },
  {
    "id": "protein-32",
    "question": "The disease sickle cell anemia is caused by a single amino acid substitution in the beta-globin chain of hemoglobin. This is a mutation in the protein's:",
    "options": [
      "Primary structure",
      "Secondary structure",
      "Tertiary structure",
      "Quaternary structure"
    ],
    "correctAnswer": 0,
    "explanation": "Sickle cell anemia is a classic example of how a change in the primary structure (the amino acid sequence)—specifically, glutamic acid replaced by valine at position 6—drastically alters the protein's properties. This single change causes hemoglobin to polymerize under low oxygen conditions, distorting red blood cells into a sickle shape."
  },
  {
    "id": "protein-33",
    "question": "Which amino acid is most likely to be found on the surface of a water-soluble globular protein?",
    "options": [
      "Isoleucine",
      "Phenylalanine",
      "Asparagine",
      "Tryptophan"
    ],
    "correctAnswer": 2,
    "explanation": "Asparagine has a polar, uncharged side chain (an amide group). Polar and charged amino acids are hydrophilic and are typically found on the surface of water-soluble proteins, where they can interact with the aqueous environment. Isoleucine, Phenylalanine, and Tryptophan are hydrophobic and are typically buried in the core."
  },
  {
    "id": "protein-34",
    "question": "The Michaelis-Menten model describes the kinetics of:",
    "options": [
      "Protein denaturation",
      "Protein synthesis",
      "Enzyme-catalyzed reactions",
      "Ion channel transport"
    ],
    "correctAnswer": 2,
    "explanation": "The Michaelis-Menten model is a fundamental model of enzyme kinetics. It describes how the rate of an enzyme-catalyzed reaction depends on the concentration of the substrate, leading to the concepts of V_max (maximum velocity) and K_m (Michaelis constant, a measure of enzyme-substrate affinity)."
  },
  {
    "id": "protein-35",
    "question": "In an enzyme, the specific region where substrate binding and catalysis occur is called the:",
    "options": [
      "Allosteric site",
      "Active site",
      "Inhibitor site",
      "Terminal site"
    ],
    "correctAnswer": 1,
    "explanation": "The active site is a unique region of the enzyme, often a cleft or pocket, with a precise three-dimensional shape and chemical environment. It is where the substrate binds and the chemical reaction is catalyzed. Its specificity is due to complementary shape, charge, and hydrophobic/hydrophilic characteristics."
  },
  {
    "id": "protein-36",
    "question": "A competitive inhibitor of an enzyme:",
    "options": [
      "Binds to a site other than the active site",
      "Increases the value of V_max",
      "Binds to the active site and can be overcome by high [S]",
      "Alters the enzyme's primary structure"
    ],
    "correctAnswer": 2,
    "explanation": "A competitive inhibitor binds reversibly to the enzyme's active site, competing directly with the substrate. It does not alter V_max (the maximum rate is still achievable), but it increases the apparent K_m (more substrate is needed to achieve half of V_max). The inhibition can be overcome by increasing the substrate concentration."
  },
  {
    "id": "protein-37",
    "question": "Which level of protein structure is characterized by motifs like the 'beta-alpha-beta' loop?",
    "options": [
      "Primary structure",
      "Secondary structure",
      "Tertiary structure",
      "Quaternary structure"
    ],
    "correctAnswer": 2,
    "explanation": "Supersecondary structures, or motifs, are specific combinations of secondary structures (alpha-helices and beta-sheets) that recur in different proteins. Examples include the beta-alpha-beta loop, beta-hairpin, and Greek key. These are elements of the tertiary structure, representing an intermediate level of organization between secondary and full tertiary structure."
  },
  {
    "id": "protein-38",
    "question": "The amino acid histidine is often found in enzyme active sites because:",
    "options": [
      "It is the largest amino acid",
      "Its side chain has a pKa near physiological pH, allowing it to act as a proton donor/acceptor",
      "It forms very strong disulfide bonds",
      "It is highly hydrophobic"
    ],
    "correctAnswer": 1,
    "explanation": "The imidazole side chain of histidine has a pKa around 6.0, which is close to physiological pH (7.4). This means it can readily act as both a proton donor and a proton acceptor during catalysis, making it a versatile participant in acid-base catalysis mechanisms used by many enzymes."
  },
  {
    "id": "protein-39",
    "question": "Myoglobin and hemoglobin are both oxygen-binding proteins. Myoglobin has ______ structure, while hemoglobin has ______ structure.",
    "options": [
      "Tertiary; quaternary",
      "Quaternary; tertiary",
      "Primary; secondary",
      "Secondary; primary"
    ],
    "correctAnswer": 0,
    "explanation": "Myoglobin is a single polypeptide chain and thus has tertiary structure. Hemoglobin is a tetramer composed of two alpha and two beta chains; the arrangement of these four subunits defines its quaternary structure. This difference is key to their distinct oxygen-binding properties."
  },
  {
    "id": "protein-40",
    "question": "Chaperone proteins assist in the:",
    "options": [
      "Synthesis of amino acids",
      "Formation of peptide bonds",
      "Correct folding of other proteins",
      "Hydrolysis of proteins"
    ],
    "correctAnswer": 2,
    "explanation": "Molecular chaperones are a class of proteins that assist in the proper folding of other proteins. They provide a protected environment for folding to occur and help prevent the aggregation of misfolded proteins, which can be harmful to the cell."
  },
  {
    "id": "protein-41",
    "question": "The isoelectric point (pI) of an amino acid is the pH at which it:",
    "options": [
      "Has a net positive charge",
      "Has a net negative charge",
      "Has no net charge and is least soluble",
      "Is completely denatured"
    ],
    "correctAnswer": 2,
    "explanation": "The isoelectric point (pI) is the specific pH at which an amino acid or protein has a net charge of zero. At this pH, the molecule is zwitterionic. Since the number of positive and negative charges is equal, the molecule has minimal solubility in water and is most likely to precipitate."
  },
  {
    "id": "protein-42",
    "question": "Which pair of amino acids can form a salt bridge (ionic interaction)?",
    "options": [
      "Serine and Threonine",
      "Lysine and Glutamic acid",
      "Leucine and Isoleucine",
      "Cysteine and Cysteine"
    ],
    "correctAnswer": 1,
    "explanation": "A salt bridge is an ionic interaction between oppositely charged R-groups. Lysine has a positively charged amino group (-NH₃⁺) in its side chain, and Glutamic acid has a negatively charged carboxylate group (-COO⁻). These can form a strong electrostatic attraction that stabilizes protein structure."
  },
  {
    "id": "protein-43",
    "question": "The N-terminal end of a polypeptide chain always contains a free:",
    "options": [
      "Carboxyl group",
      "Amino group",
      "R-group",
      "Carbonyl group"
    ],
    "correctAnswer": 1,
    "explanation": "By convention, the end of a polypeptide with a free alpha-amino group (-NH₂ or -NH₃⁺) is called the N-terminus or amino terminus. The other end, with a free alpha-carboxyl group (-COOH or -COO⁻), is the C-terminus."
  },
  {
    "id": "protein-44",
    "question": "Which type of enzyme inhibition involves binding to an allosteric site?",
    "options": [
      "Competitive inhibition",
      "Non-competitive inhibition",
      "Uncompetitive inhibition",
      "Irreversible inhibition"
    ],
    "correctAnswer": 1,
    "explanation": "Non-competitive inhibitors bind to an allosteric site (a site other than the active site) on the enzyme. This binding induces a conformational change in the enzyme that reduces its activity. It does not prevent substrate binding but inhibits the enzyme's ability to catalyze the reaction. V_max is decreased, but K_m is unchanged."
  },
  {
    "id": "protein-45",
    "question": "The protein collagen is rich in the amino acids:",
    "options": [
      "Glycine and Proline",
      "Tryptophan and Cysteine",
      "Lysine and Glutamate",
      "Aspartate and Serine"
    ],
    "correctAnswer": 0,
    "explanation": "Collagen has a unique, repetitive primary structure that is rich in glycine (about every third residue) and proline. This composition is essential for forming its characteristic triple-helix structure. Hydroxyproline and hydroxylysine, modified forms of proline and lysine, are also abundant and important for stability."
  },
  {
    "id": "protein-46",
    "question": "The process of breaking down proteins into their constituent amino acids is called:",
    "options": [
      "Denaturation",
      "Hydrolysis",
      "Transamination",
      "Decarboxylation"
    ],
    "correctAnswer": 1,
    "explanation": "Hydrolysis is the chemical process that breaks down polymers by adding a water molecule to break the bonds between monomers. Proteases (enzymes) catalyze the hydrolysis of peptide bonds in proteins, releasing amino acids."
  },
  {
    "id": "protein-47",
    "question": "An allosteric effector that increases an enzyme's activity is called a(n):",
    "options": [
      "Inhibitor",
      "Activator",
      "Substrate",
      "Coenzyme"
    ],
    "correctAnswer": 1,
    "explanation": "Allosteric effectors are molecules that bind to an enzyme at an allosteric site, causing a change in its activity. An allosteric activator increases the enzyme's activity, often by shifting its conformation to a state with higher affinity for the substrate or increased catalytic rate."
  },
  {
    "id": "protein-48",
    "question": "The coenzyme NAD+ is an example of a:",
    "options": [
      "Prosthetic group",
      "Cosubstrate",
      "Simple protein",
      "Apolipoprotein"
    ],
    "correctAnswer": 1,
    "explanation": "NAD+ (Nicotinamide Adenine Dinucleotide) is a cosubstrate. Unlike a prosthetic group, which is tightly and permanently bound, a cosubstrate binds loosely and dissociates from the enzyme after the reaction is complete, often being regenerated in a separate process. It acts as a mobile carrier of reducing equivalents (electrons)."
  },
  {
    "id": "protein-49",
    "question": "The specificity of an antibody for its antigen is determined by the:",
    "options": [
      "Constant region of the heavy chain",
      "Variable regions of both light and heavy chains",
      "Disulfide bonds between chains",
      "Junction between constant and variable regions"
    ],
    "correctAnswer": 1,
    "explanation": "The antigen-binding site of an antibody is formed by the variable (V) regions of both the heavy and light chains. These regions have hypervariable loops that create a unique binding surface complementary to a specific antigen. This is the basis of the immune system's incredible specificity."
  },
  {
    "id": "protein-50",
    "question": "Prion diseases, such as Creutzfeldt-Jakob disease, are caused by:",
    "options": [
      "A change in the primary structure of a protein",
      "A virus that attacks neurons",
      "A misfolded protein that induces misfolding in normal proteins",
      "A deficiency in a metabolic enzyme"
    ],
    "correctAnswer": 2,
    "explanation": "Prion diseases are neurodegenerative disorders caused by the misfolding of a normal cellular protein (PrP^C) into an abnormal, infectious form (PrP^Sc). The PrP^Sc form acts as a template, inducing the misfolding of normal PrP^C proteins. These misfolded proteins aggregate, forming plaques that damage nerve cells."
  },
    {
    "id": "protein-51",
    "question": "Which of the following is NOT a function of proteins in living organisms?",
    "options": [
      "Catalyzing metabolic reactions",
      "Storing genetic information",
      "Transporting molecules (e.g., O₂)",
      "Providing structural support"
    ],
    "correctAnswer": 1,
    "explanation": "Storing genetic information is the primary function of nucleic acids (DNA and RNA), not proteins. Proteins perform an immense variety of functions including catalysis (enzymes), transport (e.g., hemoglobin), structure (e.g., collagen), defense (antibodies), movement (actin and myosin), and regulation (hormones and receptors)."
  },
  {
    "id": "protein-52",
    "question": "The term 'proteome' refers to:",
    "options": [
      "The study of protein structure",
      "The entire set of proteins expressed by a genome",
      "The process of protein digestion",
      "A single type of protein molecule"
    ],
    "correctAnswer": 1,
    "explanation": "The proteome is the entire complement of proteins that is or can be expressed by a cell, tissue, or organism at a certain time. It is a dynamic entity that changes in response to environmental and developmental cues, reflecting the functional state of the biological system."
  },
  {
    "id": "protein-53",
    "question": "Which amino acid is classified as aromatic due to its side chain?",
    "options": [
      "Lysine",
      "Tyrosine",
      "Threonine",
      "Arginine"
    ],
    "correctAnswer": 1,
    "explanation": "Aromatic amino acids have side chains that include a ring structure with alternating double bonds (a benzene ring). The three aromatic amino acids are Phenylalanine, Tyrosine, and Tryptophan. Their aromatic rings can absorb UV light, which is why proteins have a strong absorbance at 280 nm."
  },
  {
    "id": "protein-54",
    "question": "In the induced fit model of enzyme action:",
    "options": [
      "The active site is a rigid structure",
      "The substrate binds, then the enzyme changes shape",
      "The enzyme and substrate fit together like a lock and key",
      "The substrate changes shape to fit the enzyme"
    ],
    "correctAnswer": 1,
    "explanation": "The induced fit model is a refinement of the lock-and-key model. It proposes that the active site is not a perfectly rigid shape. Instead, the binding of the substrate induces a conformational change in the enzyme. This change shapes the active site into a precise catalytic conformation and can help explain how enzymes catalyze reactions."
  },
  {
    "id": "protein-55",
    "question": "The amino acid serine can often be found participating in:",
    "options": [
      "Disulfide bond formation",
      "Hydrogen bonding due to its hydroxyl group",
      "Salt bridge formation",
      "Hydrophobic interactions"
    ],
    "correctAnswer": 1,
    "explanation": "Serine has a polar, uncharged side chain that terminates in a hydroxyl group (-OH). This group can act as both a hydrogen bond donor and acceptor, allowing serine to form hydrogen bonds with water or other polar groups. This is crucial for its role in the active sites of many enzymes (e.g., serine proteases)."
  },
  {
    "id": "protein-56",
    "question": "A zymogen (or proenzyme) is:",
    "options": [
      "An active enzyme",
      "An inorganic enzyme cofactor",
      "An inactive precursor of an enzyme",
      "An enzyme inhibitor"
    ],
    "correctAnswer": 2,
    "explanation": "A zymogen is an inactive enzyme precursor. It requires a biochemical change (such as hydrolysis of one or more peptide bonds) to become an active enzyme. This mechanism prevents enzymes from digesting the proteins of the cells that synthesize them. Examples include pepsinogen (precursor to pepsin) and trypsinogen (precursor to trypsin)."
  },
  {
    "id": "protein-57",
    "question": "The secondary structure of a protein is primarily stabilized by hydrogen bonds between:",
    "options": [
      "R-groups",
      "Atoms of the peptide backbone",
      "A prosthetic group and the protein",
      "Two different polypeptide chains"
    ],
    "correctAnswer": 1,
    "explanation": "Secondary structure (alpha-helices and beta-sheets) is defined by hydrogen bonding between atoms of the polypeptide backbone. Specifically, the hydrogen bonds form between the carbonyl oxygen (C=O) of one peptide unit and the amide hydrogen (N-H) of another. Interactions involving R-groups are responsible for tertiary and quaternary structure."
  },
  {
    "id": "protein-58",
    "question": "Which technique separates proteins based on their size?",
    "options": [
      "Ion-exchange chromatography",
      "Affinity chromatography",
      "SDS-Polyacrylamide Gel Electrophoresis (SDS-PAGE)",
      "Isoelectric focusing"
    ],
    "correctAnswer": 2,
    "explanation": "SDS-PAGE is a common laboratory technique that separates proteins primarily based on their molecular weight. SDS (sodium dodecyl sulfate) denatures proteins and confers a uniform negative charge. During electrophoresis in a polyacrylamide gel, smaller proteins migrate faster than larger ones, allowing separation by size."
  },
  {
    "id": "protein-59",
    "question": "The amino acid that is a precursor for the synthesis of nitric oxide (NO), a important signaling molecule, is:",
    "options": [
      "Arginine",
      "Histidine",
      "Tryptophan",
      "Methionine"
    ],
    "correctAnswer": 0,
    "explanation": "Arginine is the substrate for the enzyme nitric oxide synthase (NOS). NOS catalyzes the conversion of arginine to citrulline, producing nitric oxide (NO) as a byproduct. NO is a crucial gasotransmitter involved in vasodilation, neurotransmission, and immune response."
  },
  {
    "id": "protein-60",
    "question": "The cooperative binding of oxygen by hemoglobin means that:",
    "options": [
      "Each oxygen bound decreases the affinity for the next",
      "Each oxygen bound increases the affinity for the next",
      "All four binding sites have identical, independent affinity",
      "Only two oxygen molecules can ever bind"
    ],
    "correctAnswer": 1,
    "explanation": "Cooperative binding is a hallmark of hemoglobin. The binding of the first oxygen molecule to one subunit induces a conformational change (from T-state to R-state) that is transmitted to the other subunits, making it easier for subsequent oxygen molecules to bind. This gives the oxygen dissociation curve its characteristic sigmoidal (S-shaped) shape."
  },
  {
    "id": "protein-61",
    "question": "A protein's function is most directly related to its:",
    "options": [
      "Molecular weight",
      "Isoelectric point",
      "Three-dimensional shape",
      "Number of amino acids"
    ],
    "correctAnswer": 2,
    "explanation": "While all the listed properties are characteristics of a protein, its specific three-dimensional shape (conformation) is paramount for function. This shape creates unique pockets and surfaces—like the active site of an enzyme or the binding site of an antibody—that allow the protein to interact specifically with other molecules. The famous principle 'structure dictates function' is central to protein biology."
  },
  {
    "id": "protein-62",
    "question": "Which type of protein structure is described as 'the folding of a single polypeptide chain into a compact, three-dimensional shape'?",
    "options": [
      "Primary",
      "Secondary",
      "Tertiary",
      "Quaternary"
    ],
    "correctAnswer": 2,
    "explanation": "Tertiary structure is the overall three-dimensional conformation of an entire polypeptide chain. It results from interactions between the side chains (R-groups) of amino acids that may be far apart in the primary sequence. These interactions include hydrophobic effects, hydrogen bonds, ionic bonds, and disulfide bridges."
  },
  {
    "id": "protein-63",
    "question": "The amino acid cysteine is important for forming:",
    "options": [
      "Peptide bonds",
      "Hydrogen bonds",
      "Disulfide bonds",
      "Hydrophobic interactions"
    ],
    "correctAnswer": 2,
    "explanation": "Cysteine has a highly reactive thiol (-SH) group in its side chain. Under oxidizing conditions, two cysteine residues can form a covalent disulfide bond (-S-S-), also called a disulfide bridge. These bonds can form within a single polypeptide chain (stabilizing tertiary structure) or between two different chains (stabilizing quaternary structure)."
  },
  {
    "id": "protein-64",
    "question": "An enzyme's turnover number (k_cat) is defined as:",
    "options": [
      "The number of substrate molecules converted to product per enzyme molecule per second",
      "The substrate concentration at half-maximal velocity",
      "The dissociation constant for the enzyme-inhibitor complex",
      "The maximum rate of the reaction"
    ],
    "correctAnswer": 0,
    "explanation": "The turnover number (k_cat) is a measure of an enzyme's catalytic efficiency. It represents the maximum number of chemical conversions of substrate molecules per second that a single catalytic site will execute when the enzyme is saturated with substrate. A higher k_cat means a more efficient enzyme."
  },
  {
    "id": "protein-65",
    "question": "The Michaelis constant (K_m) is:",
    "options": [
      "The maximum rate of the enzyme-catalyzed reaction",
      "The substrate concentration at which the reaction rate is half of V_max",
      "A measure of the enzyme's catalytic efficiency",
      "The dissociation constant for the enzyme-substrate complex"
    ],
    "correctAnswer": 1,
    "explanation": "The Michaelis constant (K_m) is the substrate concentration at which the reaction velocity is half of the maximum velocity (V_max). It is an inverse measure of the enzyme's affinity for its substrate: a low K_m indicates high affinity (the enzyme reaches half its maximum speed at a low substrate concentration), and a high K_m indicates low affinity."
  },
  {
    "id": "protein-66",
    "question": "Which amino acid is the precursor for the neurotransmitter serotonin?",
    "options": [
      "Tyrosine",
      "Tryptophan",
      "Glutamate",
      "Glycine"
    ],
    "correctAnswer": 1,
    "explanation": "Tryptophan is an essential amino acid that serves as the biochemical precursor for serotonin (5-hydroxytryptamine), a key neurotransmitter involved in mood, sleep, and appetite regulation. It is first hydroxylated to form 5-hydroxytryptophan, which is then decarboxylated to form serotonin."
  },
  {
    "id": "protein-67",
    "question": "In a Ramachandran plot, the allowed regions for phi (φ) and psi (ψ) angles represent:",
    "options": [
      "All possible combinations of angles",
      "Sterically allowed conformations for the polypeptide backbone",
      "The angles found only in alpha-helices",
      "The angles that form disulfide bonds"
    ],
    "correctAnswer": 1,
    "explanation": "A Ramachandran plot is a way to visualize the allowed combinations of the backbone dihedral angles phi (φ) and psi (ψ). The plot shows that most combinations are sterically forbidden due to collisions between atoms. The allowed regions correspond to the commonly observed secondary structures: alpha-helices and beta-sheets fall into specific, favorable regions on the plot."
  },
  {
    "id": "protein-68",
    "question": "The protein elastin, which gives tissues like skin and lungs their elasticity, is rich in the amino acids:",
    "options": [
      "Glycine and Proline",
      "Alanine and Valine",
      "Lysine and Glutamate",
      "Cysteine and Methionine"
    ],
    "correctAnswer": 0,
    "explanation": "Similar to collagen, elastin is also rich in glycine and proline. However, its structure is more random and flexible, forming an extensible, rubber-like network. The cross-links in elastin involve modified lysine residues (desmosine and isodesmosine), which connect individual elastin molecules to form a durable, elastic fiber."
  },
  {
    "id": "protein-69",
    "question": "An allosteric enzyme typically has:",
    "options": [
      "A hyperbolic velocity vs. substrate curve",
      "A sigmoidal (S-shaped) velocity vs. substrate curve",
      "Only one active site",
      "No regulatory sites"
    ],
    "correctAnswer": 1,
    "explanation": "Allosteric enzymes do not follow standard Michaelis-Menten kinetics. Their plot of velocity (V₀) vs. substrate concentration ([S]) is sigmoidal (S-shaped), not hyperbolic. This shape reflects cooperative binding of the substrate: binding of the first substrate molecule makes it easier for subsequent molecules to bind, leading to a steep increase in rate over a narrow [S] range."
  },
  {
    "id": "protein-70",
    "question": "The process of adding a phosphate group to a protein is called:",
    "options": [
      "Glycosylation",
      "Phosphorylation",
      "Acetylation",
      "Methylation"
    ],
    "correctAnswer": 1,
    "explanation": "Phosphorylation is a common and reversible post-translational modification where a phosphate group (PO₄³⁻) is covalently added to specific amino acid side chains, most commonly serine, threonine, and tyrosine. It is catalyzed by enzymes called kinases and is a major mechanism for regulating protein activity, often acting as an on/off switch."
  },
  {
    "id": "protein-71",
    "question": "Which amino acid is negatively charged at physiological pH?",
    "options": [
      "Lysine",
      "Arginine",
      "Aspartic acid",
      "Histidine"
    ],
    "correctAnswer": 2,
    "explanation": "Aspartic acid (and its amide, asparagine) has a carboxylic acid group in its side chain. At physiological pH (~7.4), this group is deprotonated (-COO⁻), giving the amino acid a net negative charge. Lysine and Arginine are positively charged (basic), and Histidine can be neutral or positively charged depending on its local environment."
  },
  {
    "id": "protein-72",
    "question": "The protein that stores oxygen in muscle tissue is:",
    "options": [
      "Hemoglobin",
      "Myoglobin",
      "Cytochrome c",
      "Collagen"
    ],
    "correctAnswer": 1,
    "explanation": "Myoglobin is a monomeric heme protein found primarily in muscle tissue. Its main function is to bind oxygen (O₂) that diffuses from the blood into muscle cells and store it as a reserve for times of high metabolic demand, such as during strenuous exercise."
  },
  {
    "id": "protein-73",
    "question": "The 'lock and key' model of enzyme-substrate interaction was proposed by:",
    "options": [
      "Michaelis and Menten",
      "Emil Fischer",
      "Linus Pauling",
      "Frederick Sanger"
    ],
    "correctAnswer": 1,
    "explanation": "The lock and key model was first proposed by the German chemist Emil Fischer in 1894. It suggests that the enzyme (the lock) and the substrate (the key) have complementary geometric shapes that fit perfectly into each other. This model explained enzyme specificity but was later refined by the induced fit model."
  },
  {
    "id": "protein-74",
    "question": "A protein domain is best described as:",
    "options": [
      "A random coil region",
      "A discrete, independently folded functional unit",
      "A single alpha-helix",
      "The active site only"
    ],
    "correctAnswer": 1,
    "explanation": "A protein domain is a conserved part of a protein's sequence and structure that can evolve, function, and exist independently of the rest of the protein chain. A single protein can consist of multiple domains, each often associated with a specific function (e.g., a binding domain, a catalytic domain)."
  },
  {
    "id": "protein-75",
    "question": "Which type of chromatography separates proteins based on their net charge?",
    "options": [
      "Size-exclusion chromatography",
      "Ion-exchange chromatography",
      "Affinity chromatography",
      "Hydrophobic interaction chromatography"
    ],
    "correctAnswer": 1,
    "explanation": "Ion-exchange chromatography separates proteins based on their net surface charge. A charged resin (e.g., positively charged for anion exchange, negatively charged for cation exchange) binds proteins of the opposite charge. Proteins are then eluted by increasing the salt concentration or changing the pH, which competes for binding to the resin."
  },
  {
    "id": "protein-76",
    "question": "The amino acid that is often the first in a polypeptide chain during synthesis is:",
    "options": [
      "Methionine",
      "Cysteine",
      "Glycine",
      "Valine"
    ],
    "correctAnswer": 0,
    "explanation": "In both prokaryotes and eukaryotes, the initiator tRNA carries methionine (formyl-methionine in prokaryotes). Therefore, the start codon (AUG) codes for methionine, making it the first amino acid incorporated into all newly synthesized polypeptide chains. It is often later removed by post-translational modification."
  },
  {
    "id": "protein-77",
    "question": "The Bohr effect describes how hemoglobin's oxygen binding affinity is decreased by:",
    "options": [
      "Increased pH and decreased CO₂",
      "Decreased pH and increased CO₂",
      "Increased temperature only",
      "The presence of myoglobin"
    ],
    "correctAnswer": 1,
    "explanation": "The Bohr effect is a physiological phenomenon where a decrease in pH (increased acidity) or an increase in the partial pressure of carbon dioxide (CO₂) lowers hemoglobin's affinity for oxygen. This promotes oxygen unloading in metabolically active tissues (which are acidic and have high CO₂) and oxygen loading in the lungs (which are more alkaline and have low CO₂)."
  },
  {
    "id": "protein-78",
    "question": "A protein's solubility is often lowest at its:",
    "options": [
      "Isoelectric point (pI)",
      "Maximum charge state",
      "Denaturation temperature",
      "Optimal pH for activity"
    ],
    "correctAnswer": 0,
    "explanation": "At its isoelectric point (pI), a protein has a net charge of zero. Since the molecules have no net charge to repel each other, they can aggregate and precipitate out of solution. This is a common method for precipitating and purifying proteins. Solubility is higher at pH values above or below the pI where the protein carries a net charge."
  },
  {
    "id": "protein-79",
    "question": "The protein insulin is held together by:",
    "options": [
      "Hydrogen bonds only",
      "Peptide bonds within chains and disulfide bonds between chains",
      "Hydrophobic interactions only",
      "Ionic bonds only"
    ],
    "correctAnswer": 1,
    "explanation": "Mature insulin is composed of two polypeptide chains (A and B) linked together by two interchain disulfide bonds. The A chain also contains an intrachain disulfide bond. These covalent disulfide bridges are crucial for maintaining the active structure of the hormone."
  },
  {
    "id": "protein-80",
    "question": "An enzyme that catalyzes the transfer of a phosphate group from ATP to a protein is a:",
    "options": [
      "Phosphatase",
      "Kinase",
      "Protease",
      "Isomerase"
    ],
    "correctAnswer": 1,
    "explanation": "Kinases are a large family of enzymes that catalyze the transfer of a phosphate group from a high-energy donor molecule (like ATP) to a specific substrate. Protein kinases are particularly important in signal transduction pathways, where they phosphorylate other proteins to regulate their activity."
  },
  {
    "id": "protein-81",
    "question": "The amino acid that can be phosphorylated and is often involved in signal transduction is:",
    "options": [
      "Alanine",
      "Serine",
      "Phenylalanine",
      "Leucine"
    ],
    "correctAnswer": 1,
    "explanation": "Serine, along with threonine and tyrosine, is one of the primary amino acids that undergoes phosphorylation. The addition of a phosphate group to the hydroxyl side chain of serine is a reversible modification that dramatically alters the protein's function and is a key mechanism in controlling processes like cell growth, division, and signaling."
  },
  {
    "id": "protein-82",
    "question": "A protein's primary structure can be determined by:",
    "options": [
      "X-ray crystallography",
      "Edman degradation",
      "Circular dichroism",
      "SDS-PAGE"
    ],
    "correctAnswer": 1,
    "explanation": "Edman degradation is a method of sequencing amino acids in a peptide. It involves sequentially removing one residue at a time from the N-terminus of the peptide and identifying it. While automated machines using this principle were historically important, mass spectrometry is now the primary method for protein sequencing."
  },
  {
    "id": "protein-83",
    "question": "The term 'oligomeric protein' refers to a protein with:",
    "options": [
      "Only secondary structure",
      "A single polypeptide chain",
      "Multiple polypeptide subunits",
      "A prosthetic group"
    ],
    "correctAnswer": 2,
    "explanation": "An oligomeric protein is a multi-subunit protein; it consists of more than one polypeptide chain (subunit). These subunits can be identical or different. The arrangement of these subunits constitutes the quaternary structure. Hemoglobin (α₂β₂) and lactate dehydrogenase (a tetramer) are examples."
  },
  {
    "id": "protein-84",
    "question": "Which amino acid is essential for humans?",
    "options": [
      "Glutamine",
      "Valine",
      "Proline",
      "Asparagine"
    ],
    "correctAnswer": 1,
    "explanation": "Valine is one of the nine essential amino acids for humans. Essential amino acids cannot be synthesized by the body and must be obtained from the diet. The nine essentials are: histidine, isoleucine, leucine, lysine, methionine, phenylalanine, threonine, tryptophan, and valine."
  },
  {
    "id": "protein-85",
    "question": "The cofactor heme, found in hemoglobin and myoglobin, is bound to the protein through:",
    "options": [
      "A disulfide bond",
      "A hydrophobic interaction",
      "A coordinate covalent bond to an iron atom",
      "An ionic bond to a histidine residue"
    ],
    "correctAnswer": 2,
    "explanation": "The heme group is a prosthetic group. It is held in place within the protein pocket largely by hydrophobic interactions. The iron atom (Fe²⁺) at the center of heme is coordinated to four nitrogen atoms in the porphyrin ring. The fifth coordination site is bound to a specific histidine residue in the protein (the proximal histidine). The sixth site binds oxygen."
  },
  {
    "id": "protein-86",
    "question": "A non-competitive inhibitor binds to an enzyme at:",
    "options": [
      "The active site",
      "The substrate molecule",
      "An allosteric site",
      "The N-terminus"
    ],
    "correctAnswer": 2,
    "explanation": "A non-competitive inhibitor binds to an allosteric site on the enzyme, which is a site distinct from the active site. This binding changes the enzyme's conformation, reducing its catalytic activity. It does not prevent substrate binding, but it inhibits the enzyme's ability to convert substrate to product. V_max is decreased, but K_m is unchanged."
  },
  {
    "id": "protein-87",
    "question": "The amino acid that is a precursor for the synthesis of melanin and catecholamines (like dopamine) is:",
    "options": [
      "Tryptophan",
      "Tyrosine",
      "Phenylalanine",
      "Histidine"
    ],
    "correctAnswer": 1,
    "explanation": "Tyrosine is the precursor for several important biological molecules. It is converted to DOPA, which is then used to synthesize the pigment melanin or the neurotransmitters dopamine, norepinephrine (noradrenaline), and epinephrine (adrenaline)."
  },
  {
    "id": "protein-88",
    "question": "The process by which a protein achieves its native three-dimensional structure is called:",
    "options": [
      "Denaturation",
      "Folding",
      "Hydrolysis",
      "Transcription"
    ],
    "correctAnswer": 1,
    "explanation": "Protein folding is the physical process by which a polypeptide chain, after being synthesized on a ribosome, folds into its characteristic and functional three-dimensional conformation (native structure). This process is often assisted by chaperone proteins."
  },
  {
    "id": "protein-89",
    "question": "Which of the following is a fibrous protein?",
    "options": [
      "Hemoglobin",
      "Myoglobin",
      "Collagen",
      "Immunoglobulin G (Antibody)"
    ],
    "correctAnswer": 2,
    "explanation": "Collagen is a classic example of a fibrous protein. Fibrous proteins are elongated, insoluble, and have a structural role. The other options—hemoglobin, myoglobin, and antibodies—are all globular proteins, which are compact, soluble, and usually have a dynamic functional role like transport or catalysis."
  },
  {
    "id": "protein-90",
    "question": "The V_max of an enzyme-catalyzed reaction is reached when:",
    "options": [
      "The enzyme is denatured",
      "The substrate concentration is very low",
      "The enzyme is saturated with substrate",
      "An inhibitor is added"
    ],
    "correctAnswer": 2,
    "explanation": "V_max (maximum velocity) is the maximum rate of reaction achieved by the system. It occurs when all available enzyme active sites are occupied by substrate molecules. At this point, the enzyme is saturated, and the rate cannot increase further, even if more substrate is added. The rate is limited by the enzyme's turnover number (k_cat)."
  },
  {
    "id": "protein-91",
    "question": "The amino acid histidine can act as a buffer in many enzyme active sites because its pKa is:",
    "options": [
      "Very low (around 2)",
      "Very high (around 12)",
      "Close to physiological pH (around 6)",
      "The same as glycine"
    ],
    "correctAnswer": 2,
    "explanation": "The side chain of histidine (the imidazole group) has a pKa value of approximately 6.0. This is near physiological pH (7.4), meaning it can easily exist in either the protonated (+1 charge) or deprotonated (neutral) state. This allows it to readily accept and donate protons during enzymatic catalysis, making it a common participant in acid-base reactions."
  },
  {
    "id": "protein-92",
    "question": "A peptide bond is formed by a:",
    "options": [
      "Hydrolysis reaction",
      "Dehydration synthesis reaction",
      "Oxidation reaction",
      "Reduction reaction"
    ],
    "correctAnswer": 1,
    "explanation": "The formation of a peptide bond is a condensation reaction, specifically a dehydration synthesis. It involves the carboxyl group of one amino acid reacting with the amino group of another, releasing a molecule of water (H₂O). The reverse reaction, breaking a peptide bond, is hydrolysis."
  },
  {
    "id": "protein-93",
    "question": "The protein that is responsible for the transport of fatty acids in the bloodstream is:",
    "options": [
      "Hemoglobin",
      "Albumin",
      "Myosin",
      "Insulin"
    ],
    "correctAnswer": 1,
    "explanation": "Serum albumin is the most abundant protein in blood plasma. One of its key functions is to transport hydrophobic molecules, such as free fatty acids, bilirubin, and certain hormones, through the bloodstream. It acts as a carrier, making these insoluble molecules soluble in blood."
  },
  {
    "id": "protein-94",
    "question": "An enzyme that catalyzes the joining of two molecules using ATP is a:",
    "options": [
      "Lyase",
      "Ligase",
      "Transferase",
      "Hydrolase"
    ],
    "correctAnswer": 1,
    "explanation": "Ligases are a class of enzymes that catalyze the joining of two large molecules by forming a new chemical bond, usually accompanied by the hydrolysis of a high-energy triphosphate (like ATP). DNA ligase, which joins DNA fragments, is a classic example."
  },
  {
    "id": "protein-95",
    "question": "The amino acid that can form cross-links in proteins through oxidation is:",
    "options": [
      "Serine",
      "Cysteine",
      "Threonine",
      "Asparagine"
    ],
    "correctAnswer": 1,
    "explanation": "Cysteine residues can be oxidized to form covalent disulfide bonds (cystine) with other cysteine residues. These cross-links can occur within a single polypeptide chain (stabilizing tertiary structure) or between two different chains (stabilizing quaternary structure). This is a key post-translational modification for the stability of many extracellular proteins."
  },
  {
    "id": "protein-96",
    "question": "The isoelectric point (pI) of a protein is the pH where it:",
    "options": [
      "Has maximum activity",
      "Has a net charge of zero",
      "Is completely denatured",
      "Binds to its substrate most tightly"
    ],
    "correctAnswer": 1,
    "explanation": "The isoelectric point (pI) is the specific pH at which a protein or amino acid has no net electrical charge. The positive and negative charges on the molecule are balanced. At this pH, the protein is often least soluble and may precipitate out of solution."
  },
  {
    "id": "protein-97",
    "question": "The protein that makes up the thick filaments in muscle fibers is:",
    "options": [
      "Actin",
      "Myosin",
      "Troponin",
      "Tropomyosin"
    ],
    "correctAnswer": 1,
    "explanation": "Myosin is a motor protein that forms the thick filaments in muscle cells. It interacts with actin (the thin filaments) to generate the force for muscle contraction through a cycle of ATP hydrolysis and conformational changes."
  },
  {
    "id": "protein-98",
    "question": "A reversible inhibitor that binds only to the enzyme-substrate (ES) complex is called a(n):",
    "options": [
      "Competitive inhibitor",
      "Non-competitive inhibitor",
      "Uncompetitive inhibitor",
      "Irreversible inhibitor"
    ],
    "correctAnswer": 2,
    "explanation": "An uncompetitive inhibitor binds exclusively to the enzyme-substrate complex (ES), not to the free enzyme. This binding typically deforms the active site, preventing catalysis. Uncompetitive inhibition lowers both V_max and K_m. This type of inhibition is rare with single substrates but can occur in multi-substrate reactions."
  },
  {
    "id": "protein-99",
    "question": "The amino acid that is often glycosylated (has sugar attached) in glycoproteins is:",
    "options": [
      "Alanine",
      "Asparagine",
      "Valine",
      "Leucine"
    ],
    "correctAnswer": 1,
    "explanation": "N-linked glycosylation, a common post-translational modification, occurs on the amide nitrogen of the side chain of asparagine residues. The consensus sequence for this modification is Asn-X-Ser or Asn-X-Thr, where X is any amino acid except proline."
  },
  {
    "id": "protein-100",
    "question": "The protein that is deficient in individuals with phenylketonuria (PKU) is:",
    "options": [
      "Phenylalanine hydroxylase",
      "Tyrosinase",
      "Dopamine decarboxylase",
      "Hexosaminidase A"
    ],
    "correctAnswer": 0,
    "explanation": "Phenylketonuria (PKU) is an autosomal recessive metabolic disorder caused by a deficiency of the enzyme phenylalanine hydroxylase (PAH). This enzyme normally converts the amino acid phenylalanine to tyrosine. Its deficiency leads to a toxic buildup of phenylalanine and its metabolites, causing intellectual disability if untreated."
  },
  {
    "id": "protein-101",
    "question": "The process of breaking a protein down into its constituent amino acids is an example of:",
    "options": [
      "Dehydration synthesis",
      "Hydrolysis",
      "Phosphorylation",
      "Decarboxylation"
    ],
    "correctAnswer": 1,
    "explanation": "Hydrolysis is the chemical process that breaks down polymers by adding a water molecule to break the bonds between monomers. Proteolytic enzymes (proteases) catalyze the hydrolysis of peptide bonds in proteins, reversing the dehydration synthesis that formed them."
  },
  {
    "id": "protein-102",
    "question": "Which amino acid has an imidazole ring in its side chain?",
    "options": [
      "Tryptophan",
      "Histidine",
      "Proline",
      "Phenylalanine"
    ],
    "correctAnswer": 1,
    "explanation": "Histidine has a side chain containing an imidazole ring, which is a five-membered ring with two nitrogen atoms. This ring is aromatic and can be positively charged, making histidine unique in its ability to act as both a acid and base catalyst near physiological pH."
  },
  {
    "id": "protein-103",
    "question": "The secondary structure element that consists of a sharp turn, often involving glycine and proline, is called a:",
    "options": [
      "Alpha-helix",
      "Beta-sheet",
      "Beta-turn",
      "Random coil"
    ],
    "correctAnswer": 2,
    "explanation": "A beta-turn (or beta-bend) is a common type of secondary structure that allows the polypeptide chain to reverse direction. It typically involves four amino residues, with a hydrogen bond between the first and fourth residue. Glycine (for its flexibility) and proline (for its fixed phi angle) are commonly found in turns."
  },
  {
    "id": "protein-104",
    "question": "Which technique uses antibodies to detect specific proteins?",
    "options": [
      "Western blotting",
      "Southern blotting",
      "Northern blotting",
      "Eastern blotting"
    ],
    "correctAnswer": 0,
    "explanation": "Western blotting (or immunoblotting) is an analytical technique used to detect specific proteins in a sample. Proteins are separated by gel electrophoresis, transferred to a membrane, and then probed with antibodies that bind to the target protein. The antibody is then detected, often with a labeled secondary antibody."
  },
  {
    "id": "protein-105",
    "question": "The amino acid that is a precursor for the synthesis of GABA (gamma-aminobutyric acid), a major inhibitory neurotransmitter, is:",
    "options": [
      "Glutamate",
      "Aspartate",
      "Glycine",
      "Serine"
    ],
    "correctAnswer": 0,
    "explanation": "Gamma-aminobutyric acid (GABA) is synthesized by the decarboxylation of glutamate, catalyzed by the enzyme glutamic acid decarboxylase (GAD). GABA is the primary inhibitory neurotransmitter in the central nervous system."
  },
  {
    "id": "protein-106",
    "question": "The phenomenon where a misfolded protein induces misfolding in normal proteins is characteristic of:",
    "options": [
      "Sickle cell anemia",
      "Cystic fibrosis",
      "Prion diseases",
      "Albinism"
    ],
    "correctAnswer": 2,
    "explanation": "Prion diseases (e.g., Creutzfeldt-Jakob disease in humans, scrapie in sheep, mad cow disease) are caused by an abnormal, misfolded form of a cellular protein (PrP^Sc) that can catalyze the conversion of the normal protein (PrP^C) into the misfolded form, leading to aggregation and neurodegeneration."
  },
  {
    "id": "protein-107",
    "question": "The protein that binds to oxygen in muscle tissue has a dissociation curve that is:",
    "options": [
      "Sigmoidal",
      "Hyperbolic",
      "Linear",
      "Biphasic"
    ],
    "correctAnswer": 1,
    "explanation": "Myoglobin, the oxygen-storage protein in muscle, has a hyperbolic oxygen dissociation curve. This reflects its simple monomeric structure and non-cooperative binding: each oxygen molecule binds independently, and the protein becomes saturated at relatively low oxygen partial pressures."
  },
  {
    "id": "protein-108",
    "question": "The amino acid that is often found in the active sites of enzymes that transfer phosphate groups is:",
    "options": [
      "Cysteine",
      "Histidine",
      "Serine",
      "Aspartic acid"
    ],
    "correctAnswer": 2,
    "explanation": "Serine (and also threonine and tyrosine) is commonly phosphorylated in signal transduction. Furthermore, in enzymes like serine proteases, its hydroxyl group is part of a catalytic triad that performs nucleophilic attack. In phosphatases and kinases, serine can be involved in phosphate transfer mechanisms."
  },
  {
    "id": "protein-109",
    "question": "The constant (K) in the equation for the oxygen dissociation curve of hemoglobin is related to the:",
    "options": [
      "Partial pressure of O₂ at which hemoglobin is 50% saturated (P₅₀)",
      "Maximum oxygen capacity",
      "Number of heme groups",
      "Concentration of myoglobin"
    ],
    "correctAnswer": 0,
    "explanation": "In the Hill equation used to model the oxygen dissociation curve of hemoglobin, the constant K is numerically equal to the partial pressure of oxygen at which hemoglobin is half-saturated, denoted as P₅₀. A lower P₅₀ indicates higher oxygen affinity."
  },
  {
    "id": "protein-110",
    "question": "A protein that is composed of both polypeptide chains and a carbohydrate group is called a:",
    "options": [
      "Lipoprotein",
      "Glycoprotein",
      "Nucleoprotein",
      "Metalloprotein"
    ],
    "correctAnswer": 1,
    "explanation": "Glycoproteins are proteins that have carbohydrate groups (oligosaccharides) covalently attached to their polypeptide chains. This modification (glycosylation) is common for proteins destined for secretion or the cell membrane and affects their stability, solubility, and recognition."
  },
  {
    "id": "protein-111",
    "question": "The amino acid that can be hydroxylated in collagen to form hydroxyproline is:",
    "options": [
      "Lysine",
      "Proline",
      "Arginine",
      "Glutamate"
    ],
    "correctAnswer": 1,
    "explanation": "Proline residues in collagen are often post-translationally modified to hydroxyproline by the enzyme prolyl hydroxylase. This modification requires vitamin C as a cofactor and is crucial for stabilizing the triple-helical structure of collagen by forming additional hydrogen bonds."
  },
  {
    "id": "protein-112",
    "question": "The type of enzyme inhibition that is irreversible usually involves:",
    "options": [
      "Weak non-covalent interactions",
      "Covalent modification of the enzyme",
      "Allosteric regulation",
      "Competition with the substrate"
    ],
    "correctAnswer": 1,
    "explanation": "Irreversible inhibition occurs when an inhibitor forms a strong, stable covalent bond with a specific amino acid residue in the enzyme's active site. This permanently inactivates the enzyme. New enzyme molecules must be synthesized to regain activity. Examples include nerve gases (e.g., DFP) that inhibit acetylcholinesterase."
  },
  {
    "id": "protein-113",
    "question": "The protein that is responsible for the transport of oxygen in the blood is:",
    "options": [
      "Myoglobin",
      "Hemoglobin",
      "Cytochrome c",
      "Albumin"
    ],
    "correctAnswer": 1,
    "explanation": "Hemoglobin is the iron-containing oxygen-transport metalloprotein in the red blood cells of vertebrates. Its quaternary structure and cooperative binding allow it to efficiently pick up oxygen in the lungs and release it in tissues."
  },
  {
    "id": "protein-114",
    "question": "The amino acid that has a sulfhydryl group (-SH) in its side chain is:",
    "options": [
      "Methionine",
      "Cysteine",
      "Serine",
      "Threonine"
    ],
    "correctAnswer": 1,
    "explanation": "Cysteine has a sulfhydryl group (-SH) as its side chain. This group is nucleophilic and can be oxidized to form disulfide bonds (-S-S-) with another cysteine. Methionine contains a thioether group (-S-CH₃), which is not as reactive."
  },
  {
    "id": "protein-115",
    "question": "The process of determining the three-dimensional structure of a protein in solution can be achieved by:",
    "options": [
      "X-ray crystallography",
      "Nuclear Magnetic Resonance (NMR) spectroscopy",
      "SDS-PAGE",
      "Edman degradation"
    ],
    "correctAnswer": 1,
    "explanation": "Nuclear Magnetic Resonance (NMR) spectroscopy is a powerful technique for determining the 3D structure of proteins in solution. It provides information about the distances between atoms and the dynamics of the protein, allowing researchers to calculate the structure without needing to form a crystal."
  },
  {
    "id": "protein-116",
    "question": "The amino acid that is essential for the synthesis of nitric oxide (NO) is:",
    "options": [
      "Arginine",
      "Histidine",
      "Lysine",
      "Glutamine"
    ],
    "correctAnswer": 0,
    "explanation": "Arginine is the substrate for nitric oxide synthase (NOS). NOS catalyzes the five-electron oxidation of the guanidino nitrogen of arginine to produce nitric oxide (NO) and citrulline. NO is a key signaling molecule in vasodilation, neurotransmission, and immune function."
  },
  {
    "id": "protein-117",
    "question": "The protein that makes up the thin filaments in muscle fibers is:",
    "options": [
      "Myosin",
      "Actin",
      "Tropomyosin",
      "Titin"
    ],
    "correctAnswer": 1,
    "explanation": "Actin is a globular protein (G-actin) that polymerizes to form long, double-helical filaments (F-actin). These F-actin filaments are the core of the thin filaments in muscle cells. Myosin heads bind to actin and pull, causing muscle contraction."
  },
  {
    "id": "protein-118",
    "question": "The type of enzyme that catalyzes the rearrangement of atoms within a molecule is a:",
    "options": [
      "Lyase",
      "Ligase",
      "Isomerase",
      "Hydrolase"
    ],
    "correctAnswer": 2,
    "explanation": "Isomerases catalyze the rearrangement of atoms within a molecule, converting one isomer to another. This includes racemases (changing between enantiomers), epimerases, cis-trans isomerases, and mutases (shifting a functional group to a different position within the molecule)."
  },
  {
    "id": "protein-119",
    "question": "The amino acid that is often methylated in histones, affecting gene expression, is:",
    "options": [
      "Lysine",
      "Glycine",
      "Alanine",
      "Valine"
    ],
    "correctAnswer": 0,
    "explanation": "Lysine residues on the tails of histone proteins can be post-translationally modified by the addition of methyl groups. This modification, along with acetylation and phosphorylation, alters chromatin structure and is a key mechanism in epigenetic regulation of gene expression."
  },
  {
    "id": "protein-120",
    "question": "The protein that is deficient in individuals with Tay-Sachs disease is:",
    "options": [
      "Phenylalanine hydroxylase",
      "Hexosaminidase A",
      "Dystrophin",
      "CFTR"
    ],
    "correctAnswer": 1,
    "explanation": "Tay-Sachs disease is a fatal genetic disorder caused by a deficiency of the enzyme hexosaminidase A. This enzyme is responsible for breaking down a fatty substance called GM2 ganglioside. Its deficiency leads to toxic accumulation of this substance in neurons, causing progressive neurodegeneration."
  },
  {
    "id": "protein-121",
    "question": "The amino acid that has an indole ring in its side chain is:",
    "options": [
      "Tyrosine",
      "Tryptophan",
      "Phenylalanine",
      "Histidine"
    ],
    "correctAnswer": 1,
    "explanation": "Tryptophan has a complex side chain that includes an indole ring, which is a bicyclic structure consisting of a benzene ring fused to a pyrrole ring. It is the largest of the standard amino acids and is aromatic, absorbing UV light strongly."
  },
  {
    "id": "protein-122",
    "question": "The process of adding a ubiquitin molecule to a protein targets it for:",
    "options": [
      "Secretion",
      "Activation",
      "Proteasomal degradation",
      "Glycosylation"
    ],
    "correctAnswer": 2,
    "explanation": "Ubiquitination is a post-translational modification where a small protein called ubiquitin is covalently attached to a lysine residue on a target protein. This often serves as a signal marking the protein for degradation by the proteasome, a large cellular complex that breaks down proteins."
  },
  {
    "id": "protein-123",
    "question": "The protein that is mutated in cystic fibrosis is:",
    "options": [
      "Dystrophin",
      "CFTR (Cystic Fibrosis Transmembrane Conductance Regulator)",
      "Spectrin",
      "Fibronectin"
    ],
    "correctAnswer": 1,
    "explanation": "Cystic fibrosis is caused by mutations in the CFTR gene, which encodes the CFTR protein. This protein is a chloride channel found on the surface of epithelial cells. Mutations lead to defective chloride and water transport, resulting in the production of thick, sticky mucus that clogs the lungs and other organs."
  },
  {
    "id": "protein-124",
    "question": "The amino acid that is the least sterically hindered and thus allows for greatest flexibility in protein backbone is:",
    "options": [
      "Glycine",
      "Proline",
      "Tryptophan",
      "Isoleucine"
    ],
    "correctAnswer": 0,
    "explanation": "Glycine has a hydrogen atom as its R-group. This lack of a bulky side chain means there is very little steric hindrance, allowing the phi and psi angles of the polypeptide backbone much greater freedom of rotation. This makes glycine highly flexible and often found in tight turns and loops where other amino acids wouldn't fit."
  },
  {
    "id": "protein-125",
    "question": "The type of enzyme that catalyzes the addition of a group to a double bond or the removal of a group to form a double bond is a:",
    "options": [
      "Transferase",
      "Lyase",
      "Oxidoreductase",
      "Ligase"
    ],
    "correctAnswer": 1,
    "explanation": "Lyases catalyze the cleavage (or formation) of C-C, C-O, C-N, and other bonds by means other than hydrolysis or oxidation. They often form or remove double bonds. Examples include decarboxylases (remove CO₂), aldolases (cleave C-C bonds in sugars), and dehydratases (remove H₂O to form double bonds)."
  },
  {
    "id": "protein-126",
    "question": "The protein that provides structural support to the red blood cell membrane is:",
    "options": [
      "Hemoglobin",
      "Spectrin",
      "Collagen",
      "Keratin"
    ],
    "correctAnswer": 1,
    "explanation": "Spectrin is a cytoskeletal protein that forms a meshwork on the inner surface of the red blood cell membrane. It provides flexibility and mechanical strength to the cell, allowing it to deform and squeeze through narrow capillaries without rupturing. Defects in spectrin can lead to hereditary spherocytosis."
  },
  {
    "id": "protein-127",
    "question": "The amino acid that is often acetylated at the N-terminus of proteins is:",
    "options": [
      "Lysine",
      "Methionine",
      "Serine",
      "Cysteine"
    ],
    "correctAnswer": 1,
    "explanation": "The initiator methionine is frequently removed post-translationally. Subsequently, the new N-terminal amino acid is often acetylated. This acetylation can protect the protein from degradation and influence its interaction with other molecules. Lysine side chains can also be acetylated."
  },
  {
    "id": "protein-128",
    "question": "The protein that is responsible for muscle contraction by sliding along actin filaments is:",
    "options": [
      "Troponin",
      "Myosin",
      "Tropomyosin",
      "Titin"
    ],
    "correctAnswer": 1,
    "explanation": "Myosin is a motor protein. Its globular 'head' domains bind to actin filaments and, through a cycle of ATP hydrolysis, undergo conformational changes that 'walk' along the actin filament. This sliding of myosin thick filaments against actin thin filaments is the fundamental mechanism of muscle contraction."
  },
  {
    "id": "protein-129",
    "question": "The amino acid that is essential for the formation of disulfide bonds is:",
    "options": [
      "Methionine",
      "Cysteine",
      "Serine",
      "Threonine"
    ],
    "correctAnswer": 1,
    "explanation": "Cysteine is the only standard amino acid whose side chain can form covalent disulfide bonds (-S-S-) under oxidizing conditions. These bonds are crucial for stabilizing the tertiary and quaternary structure of many extracellular proteins and secreted peptides (e.g., insulin, antibodies)."
  },
  {
    "id": "protein-130",
    "question": "The protein that is mutated in Duchenne muscular dystrophy is:",
    "options": [
      "Spectrin",
      "Dystrophin",
      "Collagen",
      "Elastin"
    ],
    "correctAnswer": 1,
    "explanation": "Duchenne muscular dystrophy (DMD) is a severe, progressive muscle-wasting disease caused by mutations in the gene encoding dystrophin. Dystrophin is a large protein that links the internal cytoskeleton of muscle fibers to the extracellular matrix, providing structural stability. Its absence leads to muscle cell damage and death."
  },
  {
    "id": "protein-131",
    "question": "The amino acid that is a precursor for the synthesis of histamine is:",
    "options": [
      "Tyrosine",
      "Tryptophan",
      "Histidine",
      "Phenylalanine"
    ],
    "correctAnswer": 2,
    "explanation": "Histamine is synthesized by the decarboxylation of the amino acid histidine, catalyzed by the enzyme histidine decarboxylase. Histamine is a key mediator of allergic reactions, inflammation, and gastric acid secretion."
  },
  {
    "id": "protein-132",
    "question": "The type of enzyme that catalyzes oxidation-reduction reactions is a:",
    "options": [
      "Hydrolase",
      "Transferase",
      "Oxidoreductase",
      "Isomerase"
    ],
    "correctAnswer": 2,
    "explanation": "Oxidoreductases catalyze oxidation-reduction reactions, which involve the transfer of electrons from one molecule (the reductant) to another (the oxidant). This class includes dehydrogenases, oxidases, peroxidases, and reductases. They often use cofactors like NAD+, NADP+, FAD, or FMN."
  },
  {
    "id": "protein-133",
    "question": "The protein that is the main component of hair and nails is:",
    "options": [
      "Collagen",
      "Elastin",
      "Keratin",
      "Myosin"
    ],
    "correctAnswer": 2,
    "explanation": "Keratin is a family of tough, fibrous structural proteins. Alpha-keratin is the key structural material making up hair, nails, horns, claws, hooves, and the outer layer of human skin. It is rich in cysteine residues that form disulfide bonds, giving it high mechanical strength and stability."
  },
  {
    "id": "protein-134",
    "question": "The amino acid that has a guanidino group in its side chain is:",
    "options": [
      "Lysine",
      "Arginine",
      "Histidine",
      "Asparagine"
    ],
    "correctAnswer": 1,
    "explanation": "Arginine has a complex, positively charged side chain that terminates in a guanidino group. This group is highly basic (pKa ~12.5) and can form multiple hydrogen bonds. It is often found in enzyme active sites that bind anions (like phosphate groups) and on the surface of proteins."
  },
  {
    "id": "protein-135",
    "question": "The process of protein synthesis occurs on:",
    "options": [
      "The Golgi apparatus",
      "Ribosomes",
      "The endoplasmic reticulum",
      "The mitochondria"
    ],
    "correctAnswer": 1,
    "explanation": "Ribosomes are the cellular machines responsible for protein synthesis (translation). They read the mRNA sequence and catalyze the formation of peptide bonds between amino acids to build a polypeptide chain. Ribosomes can be free in the cytoplasm or attached to the rough endoplasmic reticulum."
  },
  {
    "id": "protein-136",
    "question": "The protein that is involved in blood clotting and is converted to fibrin is:",
    "options": [
      "Thrombin",
      "Fibrinogen",
      "Prothrombin",
      "Platelets"
    ],
    "correctAnswer": 1,
    "explanation": "Fibrinogen is a soluble plasma glycoprotein. During blood clot formation, the enzyme thrombin cleaves fibrinogen to form insoluble fibrin monomers. These monomers then polymerize to form a mesh that, along with platelets, forms a stable blood clot."
  },
  {
    "id": "protein-137",
    "question": "The amino acid that is often found in the turns of polypeptide chains due to its rigid structure is:",
    "options": [
      "Glycine",
      "Proline",
      "Alanine",
      "Valine"
    ],
    "correctAnswer": 1,
    "explanation": "Proline's side chain bonds back to its own amino group, creating a rigid five-membered ring. This fixes its phi angle and makes it unable to participate in alpha-helical hydrogen bonding. This rigidity often introduces a kink or bend in the polypeptide chain, making it common in beta-turns and loops."
  },
  {
    "id": "protein-138",
    "question": "The type of enzyme that catalyzes the transfer of a functional group from one molecule to another is a:",
    "options": [
      "Lyase",
      "Ligase",
      "Transferase",
      "Hydrolase"
    ],
    "correctAnswer": 2,
    "explanation": "Transferases catalyze the transfer of a functional group (e.g., a methyl, phosphate, acyl, or glycosyl group) from one molecule (the donor) to another (the acceptor). Kinases (transfer phosphate from ATP) and transaminases (transfer amino groups) are prominent examples."
  },
  {
    "id": "protein-139",
    "question": "The protein that is the primary antibody in the immune response is:",
    "options": [
      "IgA",
      "IgG",
      "IgM",
      "IgE"
    ],
    "correctAnswer": 1,
    "explanation": "Immunoglobulin G (IgG) is the most abundant antibody type in blood and extracellular fluid. It is the main antibody involved in the secondary immune response, providing long-term immunity. It can neutralize toxins, opsonize pathogens for phagocytosis, and activate the complement system."
  },
  {
    "id": "protein-140",
    "question": "The amino acid that is a precursor for the synthesis of creatine is:",
    "options": [
      "Glycine",
      "Arginine",
      "Methionine",
      "All of the above"
    ],
    "correctAnswer": 3,
    "explanation": "Creatine synthesis is a multi-step process that involves three amino acids: glycine, arginine, and methionine. The enzyme glycine amidinotransferase uses arginine to donate an amidino group to glycine, forming guanidinoacetate. This is then methylated by guanidinoacetate methyltransferase using S-adenosyl methionine (derived from methionine) to form creatine."
  },
  {
    "id": "protein-141",
    "question": "The protein that stores iron in the liver is:",
    "options": [
      "Transferrin",
      "Ferritin",
      "Hemoglobin",
      "Myoglobin"
    ],
    "correctAnswer": 1,
    "explanation": "Ferritin is a universal intracellular protein that stores iron and releases it in a controlled manner. It is a hollow spherical protein shell that can store up to 4500 iron atoms as a mineral core. It is the primary iron storage protein in animals, found in the liver, spleen, and bone marrow."
  },
  {
    "id": "protein-142",
    "question": "The amino acid that is sulfonated in heparin, contributing to its anticoagulant activity, is:",
    "options": [
      "Serine",
      "Tyrosine",
      "Aspartic acid",
      "Glucosamine (derived from glutamate)"
    ],
    "correctAnswer": 3,
    "explanation": "Heparin is a highly sulfated glycosaminoglycan. Its strong negative charge, crucial for binding and activating the anticoagulant antithrombin III, comes from sulfate groups attached to various positions on its sugar monomers, including N-sulfonation of glucosamine residues."
  },
  {
    "id": "protein-143",
    "question": "The process by which a protein is targeted to its correct cellular location is called:",
    "options": [
      "Translation",
      "Transcription",
      "Protein trafficking",
      "Denaturation"
    ],
    "correctAnswer": 2,
    "explanation": "Protein trafficking (or protein targeting) is the process by which newly synthesized proteins are directed to their proper destinations within the cell (e.g., nucleus, mitochondria, plasma membrane) or for secretion. This is often guided by specific amino acid sequences called signal peptides or targeting sequences."
  },
  {
    "id": "protein-144",
    "question": "The protein that is the central component of the proteasome, which degrades ubiquitinated proteins, is:",
    "options": [
      "Trypsin",
      "Pepsin",
      "Caspase",
      "20S core particle"
    ],
    "correctAnswer": 3,
    "explanation": "The 20S core particle is the barrel-shaped catalytic core of the proteasome. Its inner chambers contain proteolytic active sites (e.g., with threonine residues) that break down ubiquitin-tagged proteins into short peptides. It is capped on either end by regulatory particles (19S) that recognize ubiquitin and unfold proteins."
  },
  {
    "id": "protein-145",
    "question": "The amino acid that can be carboxylated in clotting factors (e.g., Factor II, VII, IX, X) is:",
    "options": [
      "Glutamate",
      "Aspartate",
      "Lysine",
      "Histidine"
    ],
    "correctAnswer": 0,
    "explanation": "Vitamin K is a cofactor for the enzyme gamma-glutamyl carboxylase, which carboxylates specific glutamate residues in clotting factors. This conversion of glutamate to gamma-carboxyglutamate (Gla) allows these proteins to chelate calcium ions, which is essential for their binding to phospholipid membranes and proper function in the blood coagulation cascade."
  },
  {
    "id": "protein-146",
    "question": "The type of enzyme that catalyzes the hydrolysis of peptide bonds within a protein is a:",
    "options": [
      "Glycosidase",
      "Protease",
      "Lipase",
      "Nuclease"
    ],
    "correctAnswer": 1,
    "explanation": "Proteases (or peptidases) are enzymes that catalyze the hydrolysis of peptide bonds in proteins. They are essential for protein digestion (e.g., trypsin, pepsin), blood clotting, apoptosis, and the regulated degradation of cellular proteins. They are classified based on their catalytic mechanism (e.g., serine proteases, cysteine proteases)."
  },
  {
    "id": "protein-147",
    "question": "The protein that is responsible for the movement of vesicles along microtubules is:",
    "options": [
      "Actin",
      "Myosin",
      "Kinesin",
      "Dystrophin"
    ],
    "correctAnswer": 2,
    "explanation": "Kinesin is a motor protein that uses the energy from ATP hydrolysis to 'walk' along microtubules. It typically moves from the center of the cell toward the periphery (the plus end), transporting various cellular cargoes such as vesicles, organelles, and chromosomes."
  },
  {
    "id": "protein-148",
    "question": "The amino acid that is often palmitoylated (addition of a fatty acid) is:",
    "options": [
      "Serine",
      "Threonine",
      "Cysteine",
      "Asparagine"
    ],
    "correctAnswer": 2,
    "explanation": "S-palmitoylation is the post-translational modification of cysteine residues by the addition of a palmitoyl group (a 16-carbon saturated fatty acid). This hydrophobic modification can target proteins to membranes, influence protein-protein interactions, and regulate protein stability and trafficking."
  },
  {
    "id": "protein-149",
    "question": "The protein that is the most abundant in the human body is:",
    "options": [
      "Hemoglobin",
      "Actin",
      "Collagen",
      "Albumin"
    ],
    "correctAnswer": 2,
    "explanation": "Collagen is the most abundant protein in mammals, making up about 25% to 35% of the whole-body protein content. It is the main structural protein in the extracellular space of various connective tissues, including skin, bones, tendons, ligaments, and cartilage."
  },
  {
    "id": "protein-150",
    "question": "The final three-dimensional structure of a protein is ultimately determined by its:",
    "options": [
      "Amino acid sequence",
      "Cellular location",
      "Interaction with chaperones",
      "pH of the environment"
    ],
    "correctAnswer": 0,
    "explanation": "This concept is known as Anfinsen's dogma. The primary structure (the amino acid sequence) contains all the information necessary to dictate the final folded, functional three-dimensional structure (native conformation) under physiological conditions. The physical and chemical properties of the amino acid side chains drive the folding process through hydrophobic interactions, hydrogen bonding, etc. Chaperones assist but do not dictate the final structure."
  }
]