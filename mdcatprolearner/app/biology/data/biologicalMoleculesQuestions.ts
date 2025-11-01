
export type Difficulty = keyof typeof biologicalMoleculesQuestions;

export type Question = {
  id: string;
  question: string;
  options: string[];
  correctAnswer: number;
  explanation: string;
};
export const easyQuestions: Question[] = [
  {
    id: "easy-1",
    question: "What are lipids primarily composed of?",
    options: [
      "Carbon, hydrogen, and oxygen",
      "Nitrogen, phosphorus, and sulfur", 
      "Sodium, potassium, and chloride",
      "Calcium, magnesium, and iron"
    ],
    correctAnswer: 0,
    explanation: "Lipids are organic compounds primarily composed of carbon, hydrogen, and oxygen atoms, though they have a higher proportion of carbon and hydrogen compared to oxygen."
  },
  {
    id: "easy-2",
    question: "Which type of lipid forms the main structural component of cell membranes?",
    options: [
      "Triglycerides",
      "Phospholipids",
      "Waxes",
      "Steroids"
    ],
    correctAnswer: 1,
    explanation: "Phospholipids are the main structural components of cell membranes, forming a phospholipid bilayer that creates a barrier between the cell and its environment."
  },
  {
    id: "easy-3",
    question: "What is the basic structure of a triglyceride?",
    options: [
      "Glycerol + 2 fatty acids",
      "Glycerol + 3 fatty acids", 
      "Glycerol + phosphate group",
      "Glycerol + carbohydrate"
    ],
    correctAnswer: 1,
    explanation: "A triglyceride consists of one glycerol molecule esterified with three fatty acid molecules through ester linkages."
  },
  {
    id: "easy-4",
    question: "Which alcohol forms the backbone of triglycerides and phospholipids?",
    options: [
      "Ethanol",
      "Methanol",
      "Glycerol",
      "Cholesterol"
    ],
    correctAnswer: 2,
    explanation: "Glycerol (a three-carbon alcohol) forms the backbone of both triglycerides and phospholipids."
  },
  {
    id: "easy-5",
    question: "What type of bond links fatty acids to glycerol in triglycerides?",
    options: [
      "Peptide bond",
      "Glycosidic bond",
      "Ester bond",
      "Hydrogen bond"
    ],
    correctAnswer: 2,
    explanation: "Fatty acids are linked to glycerol through ester bonds (esterification) in triglycerides."
  },
  {
    id: "easy-6",
    question: "Which of these is a saturated fatty acid?",
    options: [
      "Oleic acid",
      "Linoleic acid",
      "Stearic acid",
      "Linolenic acid"
    ],
    correctAnswer: 2,
    explanation: "Stearic acid is a saturated fatty acid with no double bonds between carbon atoms, while the others are unsaturated."
  },
  {
    id: "easy-7",
    question: "What makes phospholipids amphipathic molecules?",
    options: [
      "They contain both protein and lipid components",
      "They have both hydrophilic and hydrophobic regions",
      "They can function in both plants and animals",
      "They contain both saturated and unsaturated fatty acids"
    ],
    correctAnswer: 1,
    explanation: "Phospholipids are amphipathic because they have a hydrophilic (water-loving) phosphate head and hydrophobic (water-fearing) fatty acid tails."
  },
  {
    id: "easy-8",
    question: "Which process forms ester bonds in lipids?",
    options: [
      "Hydrolysis",
      "Esterification",
      "Oxidation",
      "Reduction"
    ],
    correctAnswer: 1,
    explanation: "Esterification is the chemical process that forms ester bonds between alcohols and carboxylic acids (like fatty acids)."
  },
  {
    id: "easy-9",
    question: "What is the primary function of triglycerides in the body?",
    options: [
      "Structural support",
      "Energy storage",
      "Cell signaling",
      "Enzyme catalysis"
    ],
    correctAnswer: 1,
    explanation: "Triglycerides primarily function as energy storage molecules, providing concentrated energy reserves in adipose tissue."
  },
  {
    id: "easy-10",
    question: "Which component distinguishes phospholipids from triglycerides?",
    options: [
      "Glycerol backbone",
      "Fatty acid chains",
      "Phosphate group",
      "Ester bonds"
    ],
    correctAnswer: 2,
    explanation: "The phosphate group distinguishes phospholipids from triglycerides, making them amphipathic and suitable for membrane formation."
  },
  {
    id: "easy-11",
    question: "What type of fatty acid has one or more double bonds between carbon atoms?",
    options: [
      "Saturated fatty acid",
      "Unsaturated fatty acid",
      "Trans fatty acid",
      "Essential fatty acid"
    ],
    correctAnswer: 1,
    explanation: "Unsaturated fatty acids have one or more double bonds between carbon atoms in their hydrocarbon chains."
  },
  {
    id: "easy-12",
    question: "Which lipid is solid at room temperature?",
    options: [
      "Oil",
      "Fat",
      "Both oil and fat",
      "Neither oil nor fat"
    ],
    correctAnswer: 1,
    explanation: "Fats are typically solid at room temperature, while oils are liquid. Fats usually contain more saturated fatty acids."
  },
  {
    id: "easy-13",
    question: "What is the chemical formula of glycerol?",
    options: [
      "C₃H₈O₃",
      "C₂H₆O₂",
      "C₃H₆O₃",
      "C₄H₁₀O₄"
    ],
    correctAnswer: 0,
    explanation: "Glycerol has the chemical formula C₃H₈O₃, with three carbon atoms, eight hydrogen atoms, and three hydroxyl groups."
  },
  {
    id: "easy-14",
    question: "Which process breaks ester bonds in lipids?",
    options: [
      "Esterification",
      "Hydrolysis",
      "Dehydration synthesis",
      "Oxidation"
    ],
    correctAnswer: 1,
    explanation: "Hydrolysis breaks ester bonds by adding water molecules, separating fatty acids from glycerol."
  },
  {
    id: "easy-15",
    question: "What is the main difference between oils and fats?",
    options: [
      "Oils are from plants, fats are from animals",
      "Oils are liquid at room temperature, fats are solid",
      "Oils have shorter fatty acid chains",
      "Oils contain more saturated fatty acids"
    ],
    correctAnswer: 1,
    explanation: "The main difference is that oils are liquid at room temperature while fats are solid, primarily due to their fatty acid composition."
  },
  {
    id: "easy-16",
    question: "Which of these is a polyunsaturated fatty acid?",
    options: [
      "Palmitic acid",
      "Oleic acid",
      "Linoleic acid",
      "Stearic acid"
    ],
    correctAnswer: 2,
    explanation: "Linoleic acid is a polyunsaturated fatty acid with two double bonds in its carbon chain."
  },
  {
    id: "easy-17",
    question: "What is the function of the phosphate group in phospholipids?",
    options: [
      "Provides energy",
      "Forms hydrophobic region",
      "Creates hydrophilic head",
      "Stores genetic information"
    ],
    correctAnswer: 2,
    explanation: "The phosphate group creates the hydrophilic (water-loving) head of phospholipids, which faces outward in membranes."
  },
  {
    id: "easy-18",
    question: "How many fatty acids are attached to glycerol in a phospholipid?",
    options: [
      "1",
      "2",
      "3",
      "4"
    ],
    correctAnswer: 1,
    explanation: "Phospholipids have two fatty acids attached to glycerol, with the third position occupied by a phosphate group."
  },
  {
    id: "easy-19",
    question: "Which type of lipid is cholesterol?",
    options: [
      "Phospholipid",
      "Triglyceride",
      "Steroid",
      "Wax"
    ],
    correctAnswer: 2,
    explanation: "Cholesterol is a steroid lipid, characterized by a four-ring structure, not a triglyceride or phospholipid."
  },
  {
    id: "easy-20",
    question: "What is the primary structural difference between saturated and unsaturated fatty acids?",
    options: [
      "Chain length",
      "Presence of double bonds",
      "Number of oxygen atoms",
      "Type of alcohol component"
    ],
    correctAnswer: 1,
    explanation: "The primary difference is the presence of double bonds - saturated fatty acids have no double bonds, while unsaturated ones have one or more."
  },
  {
    id: "easy-21",
    question: "Which lipid is the main component of biological membranes?",
    options: [
      "Triglycerides",
      "Phospholipids",
      "Waxes",
      "Steroids"
    ],
    correctAnswer: 1,
    explanation: "Phospholipids are the main components of biological membranes, forming the phospholipid bilayer structure."
  },
  {
    id: "easy-22",
    question: "What is the process called when three fatty acids join with glycerol?",
    options: [
      "Hydrolysis",
      "Esterification",
      "Oxidation",
      "Saponification"
    ],
    correctAnswer: 1,
    explanation: "Esterification is the process where three fatty acids join with glycerol through ester bonds to form a triglyceride."
  },
  {
    id: "easy-23",
    question: "Which of these is NOT a function of lipids?",
    options: [
      "Energy storage",
      "Structural component of membranes",
      "Enzyme catalysis",
      "Hormone production"
    ],
    correctAnswer: 2,
    explanation: "Lipids do not function as enzymes; proteins serve enzymatic functions. Lipids store energy, form membranes, and some act as hormones."
  },
  {
    id: "easy-24",
    question: "What type of alcohol is glycerol?",
    options: [
      "Monohydric alcohol",
      "Dihydric alcohol",
      "Trihydric alcohol",
      "Polyhydric alcohol"
    ],
    correctAnswer: 2,
    explanation: "Glycerol is a trihydric alcohol because it contains three hydroxyl (-OH) groups."
  },
  {
    id: "easy-25",
    question: "Which fatty acid is essential for humans?",
    options: [
      "Stearic acid",
      "Palmitic acid",
      "Linoleic acid",
      "Oleic acid"
    ],
    correctAnswer: 2,
    explanation: "Linoleic acid is an essential fatty acid that humans cannot synthesize and must obtain from diet."
  },
  {
    id: "easy-26",
    question: "What is the main storage form of lipids in animals?",
    options: [
      "Phospholipids",
      "Triglycerides",
      "Waxes",
      "Steroids"
    ],
    correctAnswer: 1,
    explanation: "Triglycerides are the main storage form of lipids in animals, stored in adipose tissue for energy."
  },
  {
    id: "easy-27",
    question: "Which part of a phospholipid is hydrophobic?",
    options: [
      "Phosphate group",
      "Glycerol backbone",
      "Fatty acid tails",
      "Polar head"
    ],
    correctAnswer: 2,
    explanation: "The fatty acid tails of phospholipids are hydrophobic (water-fearing) and face inward in membranes."
  },
  {
    id: "easy-28",
    question: "What is the general formula for fatty acids?",
    options: [
      "R-COOH",
      "R-OH",
      "R-NH₂",
      "R-CHO"
    ],
    correctAnswer: 0,
    explanation: "Fatty acids have the general formula R-COOH, where R is a hydrocarbon chain and COOH is the carboxylic acid group."
  },
  {
    id: "easy-29",
    question: "Which process converts oils to fats?",
    options: [
      "Hydrolysis",
      "Hydrogenation",
      "Oxidation",
      "Esterification"
    ],
    correctAnswer: 1,
    explanation: "Hydrogenation adds hydrogen to unsaturated bonds, converting liquid oils to solid fats."
  },
  {
    id: "easy-30",
    question: "What is the primary function of phospholipids?",
    options: [
      "Energy storage",
      "Membrane formation",
      "Hormone production",
      "Insulation"
    ],
    correctAnswer: 1,
    explanation: "The primary function of phospholipids is to form biological membranes through the phospholipid bilayer structure."
  },
  {
    id: "easy-31",
    question: "Which lipid is liquid at room temperature?",
    options: [
      "Butter",
      "Lard",
      "Olive oil",
      "Animal fat"
    ],
    correctAnswer: 2,
    explanation: "Olive oil is liquid at room temperature because it contains predominantly unsaturated fatty acids."
  },
  {
    id: "easy-32",
    question: "How many ester bonds are in a triglyceride?",
    options: [
      "1",
      "2",
      "3",
      "4"
    ],
    correctAnswer: 2,
    explanation: "A triglyceride contains three ester bonds, one for each fatty acid attached to glycerol."
  },
  {
    id: "easy-33",
    question: "Which vitamin is fat-soluble?",
    options: [
      "Vitamin C",
      "Vitamin B",
      "Vitamin D",
      "Vitamin B12"
    ],
    correctAnswer: 2,
    explanation: "Vitamin D is fat-soluble, along with vitamins A, E, and K. Vitamin C and B vitamins are water-soluble."
  },
  {
    id: "easy-34",
    question: "What is the main difference between fats and oils?",
    options: [
      "Fats are from animals, oils are from plants",
      "Fats are saturated, oils are unsaturated",
      "Fats are solid at room temperature, oils are liquid",
      "Fats have longer carbon chains"
    ],
    correctAnswer: 2,
    explanation: "The main difference is physical state: fats are solid at room temperature, while oils are liquid."
  },
  {
    id: "easy-35",
    question: "Which lipid is used to make soap?",
    options: [
      "Phospholipids",
      "Triglycerides",
      "Steroids",
      "Waxes"
    ],
    correctAnswer: 1,
    explanation: "Triglycerides are used in saponification (soap-making) where they react with bases to produce soap and glycerol."
  },
  {
    id: "easy-36",
    question: "What is the alcohol component in waxes?",
    options: [
      "Glycerol",
      "Cholesterol",
      "Long-chain alcohol",
      "Ethanol"
    ],
    correctAnswer: 2,
    explanation: "Waxes consist of long-chain fatty acids esterified with long-chain alcohols, not glycerol."
  },
  {
    id: "easy-37",
    question: "Which lipid is amphipathic?",
    options: [
      "Triglyceride",
      "Phospholipid",
      "Steroid",
      "Wax"
    ],
    correctAnswer: 1,
    explanation: "Phospholipids are amphipathic, having both hydrophilic (phosphate head) and hydrophobic (fatty acid tails) regions."
  },
  {
    id: "easy-38",
    question: "What is the primary source of energy in triglycerides?",
    options: [
      "Glycerol",
      "Fatty acids",
      "Phosphate group",
      "Ester bonds"
    ],
    correctAnswer: 1,
    explanation: "Fatty acids provide the primary energy source in triglycerides, yielding more energy per gram than carbohydrates."
  },
  {
    id: "easy-39",
    question: "Which process breaks down triglycerides?",
    options: [
      "Esterification",
      "Hydrolysis",
      "Hydrogenation",
      "Oxidation"
    ],
    correctAnswer: 1,
    explanation: "Hydrolysis breaks down triglycerides into glycerol and fatty acids by adding water molecules."
  },
  {
    id: "easy-40",
    question: "What is the main function of subcutaneous fat?",
    options: [
      "Energy storage",
      "Insulation",
      "Protection",
      "All of the above"
    ],
    correctAnswer: 3,
    explanation: "Subcutaneous fat serves multiple functions including energy storage, insulation, and protection of internal organs."
  },
  {
    id: "easy-41",
    question: "Which lipid is a component of cell membranes?",
    options: [
      "Triglyceride",
      "Phospholipid",
      "Both",
      "Neither"
    ],
    correctAnswer: 1,
    explanation: "Phospholipids are the main components of cell membranes, while triglycerides are storage lipids."
  },
  {
    id: "easy-42",
    question: "What is the chemical reaction that forms esters?",
    options: [
      "Alcohol + acid → ester + water",
      "Ester + water → alcohol + acid",
      "Alcohol + base → salt + water",
      "Acid + base → salt + water"
    ],
    correctAnswer: 0,
    explanation: "Esterification: Alcohol + carboxylic acid → ester + water (dehydration reaction)."
  },
  {
    id: "easy-43",
    question: "Which fatty acid has the most double bonds?",
    options: [
      "Stearic acid (18:0)",
      "Oleic acid (18:1)",
      "Linoleic acid (18:2)",
      "Linolenic acid (18:3)"
    ],
    correctAnswer: 3,
    explanation: "Linolenic acid (18:3) has three double bonds, making it the most unsaturated among these options."
  },
  {
    id: "easy-44",
    question: "What is the main structural difference between phospholipids and triglycerides?",
    options: [
      "Number of fatty acids",
      "Type of glycerol",
      "Presence of phosphate group",
      "Type of ester bonds"
    ],
    correctAnswer: 2,
    explanation: "The main difference is that phospholipids have a phosphate group instead of a third fatty acid."
  },
  {
    id: "easy-45",
    question: "Which lipid is used for long-term energy storage?",
    options: [
      "Glycogen",
      "Triglycerides",
      "Phospholipids",
      "Glucose"
    ],
    correctAnswer: 1,
    explanation: "Triglycerides are used for long-term energy storage, while glycogen provides short-term energy storage."
  },
  {
    id: "easy-46",
    question: "What is the alcohol in phospholipids?",
    options: [
      "Ethanol",
      "Methanol",
      "Glycerol",
      "Cholesterol"
    ],
    correctAnswer: 2,
    explanation: "Glycerol is the alcohol backbone in both phospholipids and triglycerides."
  },
  {
    id: "easy-47",
    question: "Which lipid is NOT derived from fatty acids?",
    options: [
      "Triglycerides",
      "Phospholipids",
      "Steroids",
      "Waxes"
    ],
    correctAnswer: 2,
    explanation: "Steroids are not derived from fatty acids; they have a completely different four-ring structure."
  },
  {
    id: "easy-48",
    question: "What is the main function of the lipid bilayer?",
    options: [
      "Energy production",
      "Cellular communication",
      "Selective barrier",
      "Protein synthesis"
    ],
    correctAnswer: 2,
    explanation: "The lipid bilayer acts as a selective barrier, controlling what enters and leaves the cell."
  },
  {
    id: "easy-49",
    question: "Which process makes margarine from vegetable oil?",
    options: [
      "Hydrolysis",
      "Hydrogenation",
      "Oxidation",
      "Esterification"
    ],
    correctAnswer: 1,
    explanation: "Hydrogenation adds hydrogen to unsaturated bonds in vegetable oil, making it solid like margarine."
  },
  {
    id: "easy-50",
    question: "What is the primary component of animal fat?",
    options: [
      "Phospholipids",
      "Triglycerides",
      "Steroids",
      "Waxes"
    ],
    correctAnswer: 1,
    explanation: "Animal fat primarily consists of triglycerides made from saturated fatty acids."
  },
  {
    id: "easy-51",
    question: "Which lipid is most abundant in cell membranes?",
    options: [
      "Cholesterol",
      "Triglycerides",
      "Phospholipids",
      "Glycolipids"
    ],
    correctAnswer: 2,
    explanation: "Phospholipids are the most abundant lipids in cell membranes, forming the basic bilayer structure."
  },
  {
    id: "easy-52",
    question: "What is the result of complete hydrolysis of a triglyceride?",
    options: [
      "Glycerol + 3 fatty acids",
      "Glycerol + 2 fatty acids",
      "Monoglyceride + 2 fatty acids",
      "Diglyceride + 1 fatty acid"
    ],
    correctAnswer: 0,
    explanation: "Complete hydrolysis breaks all three ester bonds, yielding glycerol and three fatty acid molecules."
  },
  {
    id: "easy-53",
    question: "Which fatty acid is saturated?",
    options: [
      "Oleic acid",
      "Linoleic acid",
      "Palmitic acid",
      "Linolenic acid"
    ],
    correctAnswer: 2,
    explanation: "Palmitic acid (16:0) is a saturated fatty acid with no double bonds."
  },
  {
    id: "easy-54",
    question: "What is the main function of cholesterol in membranes?",
    options: [
      "Energy storage",
      "Fluidity regulation",
      "Receptor signaling",
      "Enzyme activation"
    ],
    correctAnswer: 1,
    explanation: "Cholesterol helps regulate membrane fluidity by preventing fatty acid chains from packing too tightly."
  },
  {
    id: "easy-55",
    question: "Which lipid is used to make hormones?",
    options: [
      "Triglycerides",
      "Phospholipids",
      "Steroids",
      "Waxes"
    ],
    correctAnswer: 2,
    explanation: "Steroids (like cholesterol derivatives) are used to make steroid hormones such as estrogen and testosterone."
  },
  {
    id: "easy-56",
    question: "What is the chemical nature of fatty acids?",
    options: [
      "Alcohols",
      "Carboxylic acids",
      "Esters",
      "Aldehydes"
    ],
    correctAnswer: 1,
    explanation: "Fatty acids are carboxylic acids with long hydrocarbon chains."
  },
  {
    id: "easy-57",
    question: "Which lipid is most energy-dense?",
    options: [
      "Carbohydrates",
      "Proteins",
      "Triglycerides",
      "Nucleic acids"
    ],
    correctAnswer: 2,
    explanation: "Triglycerides are the most energy-dense macromolecules, providing 9 kcal/gram compared to 4 kcal/gram for carbs and proteins."
  },
  {
    id: "easy-58",
    question: "What is the main difference between cis and trans fats?",
    options: [
      "Number of carbon atoms",
      "Position of hydrogen atoms around double bonds",
      "Type of alcohol component",
      "Presence of phosphate groups"
    ],
    correctAnswer: 1,
    explanation: "The difference is in the configuration around double bonds: cis fats have hydrogens on the same side, trans fats on opposite sides."
  },
  {
    id: "easy-59",
    question: "Which process occurs when fats become rancid?",
    options: [
      "Hydrolysis",
      "Oxidation",
      "Hydrogenation",
      "Esterification"
    ],
    correctAnswer: 1,
    explanation: "Rancidity occurs when fats undergo oxidation, producing unpleasant odors and flavors."
  },
  {
    id: "easy-60",
    question: "What is the primary storage site for triglycerides in humans?",
    options: [
      "Liver",
      "Muscles",
      "Adipose tissue",
      "Blood"
    ],
    correctAnswer: 2,
    explanation: "Adipose tissue is the primary storage site for triglycerides in the human body."
  },
  {
    id: "easy-61",
    question: "Which lipid is a major component of nerve cell membranes?",
    options: [
      "Triglycerides",
      "Phospholipids",
      "Waxes",
      "Terpenes"
    ],
    correctAnswer: 1,
    explanation: "Phospholipids are major components of all cell membranes, including nerve cells."
  },
  {
    id: "easy-62",
    question: "What is the alcohol in triglycerides?",
    options: [
      "Ethanol",
      "Glycerol",
      "Cholesterol",
      "Methanol"
    ],
    correctAnswer: 1,
    explanation: "Glycerol is the alcohol component in triglycerides, forming ester bonds with three fatty acids."
  },
  {
    id: "easy-63",
    question: "Which fatty acid is omega-3?",
    options: [
      "Oleic acid",
      "Linoleic acid",
      "Linolenic acid",
      "Arachidonic acid"
    ],
    correctAnswer: 2,
    explanation: "Linolenic acid is an omega-3 fatty acid with its first double bond at the third carbon from the methyl end."
  },
  {
    id: "easy-64",
    question: "What is the main function of waxes in plants?",
    options: [
      "Energy storage",
      "Waterproof coating",
      "Membrane formation",
      "Hormone production"
    ],
    correctAnswer: 1,
    explanation: "Waxes provide a waterproof coating on leaves and fruits in plants, preventing water loss."
  },
  {
    id: "easy-65",
    question: "Which lipid is NOT a polymer?",
    options: [
      "Triglyceride",
      "Glycogen",
      "Protein",
      "Nucleic acid"
    ],
    correctAnswer: 0,
    explanation: "Triglycerides are not polymers; they are simple lipids made from glycerol and fatty acids."
  },
  {
    id: "easy-66",
    question: "What is the primary structural role of phospholipids?",
    options: [
      "Energy storage",
      "Forming membranes",
      "Hormone synthesis",
      "Insulation"
    ],
    correctAnswer: 1,
    explanation: "The primary structural role of phospholipids is forming the lipid bilayer of cell membranes."
  },
  {
    id: "easy-67",
    question: "Which process is used to make biodiesel?",
    options: [
      "Hydrolysis",
      "Transesterification",
      "Hydrogenation",
      "Oxidation"
    ],
    correctAnswer: 1,
    explanation: "Transesterification converts triglycerides into biodiesel by reacting with alcohols."
  },
  {
    id: "easy-68",
    question: "What is the main difference between fats and oils?",
    options: [
      "Fats have more double bonds",
      "Oils have shorter chains",
      "Fats are more saturated",
      "Oils are from animals"
    ],
    correctAnswer: 2,
    explanation: "Fats typically contain more saturated fatty acids, making them solid at room temperature."
  },
  {
    id: "easy-69",
    question: "Which lipid is used in cell signaling?",
    options: [
      "Triglycerides",
      "Phospholipids",
      "Steroids",
      "All of the above"
    ],
    correctAnswer: 3,
    explanation: "All these lipids can participate in cell signaling: triglycerides as energy signals, phospholipids in second messengers, steroids as hormones."
  },
  {
    id: "easy-70",
    question: "What is the alcohol component in cholesterol esters?",
    options: [
      "Glycerol",
      "Cholesterol",
      "Ethanol",
      "Methanol"
    ],
    correctAnswer: 1,
    explanation: "In cholesterol esters, cholesterol itself acts as the alcohol component, esterified with a fatty acid."
  },
  {
    id: "easy-71",
    question: "Which fatty acid is essential?",
    options: [
      "Palmitic acid",
      "Stearic acid",
      "Linoleic acid",
      "Oleic acid"
    ],
    correctAnswer: 2,
    explanation: "Linoleic acid is an essential fatty acid that must be obtained from the diet."
  },
  {
    id: "easy-72",
    question: "What is the main function of triglycerides in animals?",
    options: [
      "Membrane formation",
      "Energy storage",
      "Hormone production",
      "Enzyme activation"
    ],
    correctAnswer: 1,
    explanation: "Triglycerides primarily function as energy storage molecules in animals."
  },
  {
    id: "easy-73",
    question: "Which lipid is amphipathic?",
    options: [
      "Triglyceride",
      "Cholesterol",
      "Phospholipid",
      "Wax"
    ],
    correctAnswer: 2,
    explanation: "Phospholipids are amphipathic, having both hydrophilic and hydrophobic regions."
  },
  {
    id: "easy-74",
    question: "What is the process of breaking down fats?",
    options: [
      "Lipogenesis",
      "Lipolysis",
      "Esterification",
      "Hydrogenation"
    ],
    correctAnswer: 1,
    explanation: "Lipolysis is the process of breaking down triglycerides into glycerol and fatty acids."
  },
  {
    id: "easy-75",
    question: "Which lipid is a component of myelin sheath?",
    options: [
      "Triglycerides",
      "Phospholipids",
      "Waxes",
      "Terpenes"
    ],
    correctAnswer: 1,
    explanation: "Phospholipids are major components of the myelin sheath that insulates nerve fibers."
  },
  {
    id: "easy-76",
    question: "What is the alcohol in phospholipids?",
    options: [
      "Ethanol",
      "Glycerol",
      "Cholesterol",
      "Inositol"
    ],
    correctAnswer: 1,
    explanation: "Glycerol is the alcohol backbone in phospholipids, though some phospholipids use other alcohols like inositol."
  },
  {
    id: "easy-77",
    question: "Which fatty acid has the highest melting point?",
    options: [
      "Linolenic acid (18:3)",
      "Linoleic acid (18:2)",
      "Oleic acid (18:1)",
      "Stearic acid (18:0)"
    ],
    correctAnswer: 3,
    explanation: "Stearic acid (saturated) has the highest melting point due to straight chains that pack tightly."
  },
  {
    id: "easy-78",
    question: "What is the main structural component of lipoproteins?",
    options: [
      "Triglycerides",
      "Phospholipids",
      "Cholesterol",
      "Proteins"
    ],
    correctAnswer: 1,
    explanation: "Phospholipids form the structural shell of lipoproteins, with their hydrophilic heads facing outward."
  },
  {
    id: "easy-79",
    question: "Which process makes soap from fats?",
    options: [
      "Esterification",
      "Saponification",
      "Hydrogenation",
      "Oxidation"
    ],
    correctAnswer: 1,
    explanation: "Saponification converts triglycerides into soap (fatty acid salts) and glycerol using strong bases."
  },
  {
    id: "easy-80",
    question: "What is the primary function of adipose tissue?",
    options: [
      "Energy storage",
      "Insulation",
      "Protection",
      "All of the above"
    ],
    correctAnswer: 3,
    explanation: "Adipose tissue stores energy, provides insulation, and protects organs."
  },
  {
    id: "easy-81",
    question: "Which lipid is most abundant in animal cell membranes?",
    options: [
      "Triglycerides",
      "Phospholipids",
      "Cholesterol",
      "Glycolipids"
    ],
    correctAnswer: 1,
    explanation: "Phospholipids are the most abundant lipids in animal cell membranes."
  },
  {
    id: "easy-82",
    question: "What is the result of partial hydrolysis of a triglyceride?",
    options: [
      "Glycerol + 3 fatty acids",
      "Monoglyceride + 2 fatty acids",
      "Diglyceride + 1 fatty acid",
      "Both B and C"
    ],
    correctAnswer: 3,
    explanation: "Partial hydrolysis can produce either monoglycerides + 2 fatty acids or diglycerides + 1 fatty acid."
  },
  {
    id: "easy-83",
    question: "Which fatty acid is monounsaturated?",
    options: [
      "Palmitic acid",
      "Stearic acid",
      "Oleic acid",
      "Linoleic acid"
    ],
    correctAnswer: 2,
    explanation: "Oleic acid (18:1) is monounsaturated with one double bond."
  },
  {
    id: "easy-84",
    question: "What is the role of bile salts in lipid digestion?",
    options: [
      "Enzyme activation",
      "Emulsification",
      "Hydrolysis",
      "Absorption"
    ],
    correctAnswer: 1,
    explanation: "Bile salts emulsify fats, breaking them into small droplets for enzymatic digestion."
  },
  {
    id: "easy-85",
    question: "Which lipid is used to make vitamin D?",
    options: [
      "Triglycerides",
      "Phospholipids",
      "Cholesterol",
      "Waxes"
    ],
    correctAnswer: 2,
    explanation: "Cholesterol is the precursor for vitamin D synthesis."
  },
  {
    id: "easy-86",
    question: "What is the chemical nature of the hydrophilic head in phospholipids?",
    options: [
      "Hydrophobic",
      "Polar",
      "Nonpolar",
      "Neutral"
    ],
    correctAnswer: 1,
    explanation: "The phosphate head is polar and hydrophilic (water-loving)."
  },
  {
    id: "easy-87",
    question: "Which lipid provides the most energy per gram?",
    options: [
      "Carbohydrates",
      "Proteins",
      "Triglycerides",
      "Nucleic acids"
    ],
    correctAnswer: 2,
    explanation: "Triglycerides provide 9 kcal/gram, more than carbs or proteins (4 kcal/gram)."
  },
  {
    id: "easy-88",
    question: "What is the main difference between omega-3 and omega-6 fatty acids?",
    options: [
      "Chain length",
      "Position of first double bond",
      "Number of double bonds",
      "Melting point"
    ],
    correctAnswer: 1,
    explanation: "The difference is in the position of the first double bond from the methyl end: omega-3 at carbon 3, omega-6 at carbon 6."
  },
  {
    id: "easy-89",
    question: "Which process prevents fat rancidity?",
    options: [
      "Hydrogenation",
      "Antioxidant addition",
      "Refrigeration",
      "All of the above"
    ],
    correctAnswer: 3,
    explanation: "All these methods can help prevent fat rancidity by reducing oxidation."
  },
  {
    id: "easy-90",
    question: "What is the primary form of circulating lipids in blood?",
    options: [
      "Free fatty acids",
      "Triglycerides",
      "Phospholipids",
      "Lipoproteins"
    ],
    correctAnswer: 3,
    explanation: "Lipoproteins are the primary form for transporting lipids in the bloodstream."
  },
  {
    id: "easy-91",
    question: "Which lipid is a major component of lung surfactant?",
    options: [
      "Triglycerides",
      "Phospholipids",
      "Waxes",
      "Steroids"
    ],
    correctAnswer: 1,
    explanation: "Phospholipids, particularly dipalmitoylphosphatidylcholine, are major components of lung surfactant."
  },
  {
    id: "easy-92",
    question: "What is the alcohol in waxes?",
    options: [
      "Glycerol",
      "Long-chain alcohol",
      "Cholesterol",
      "Ethanol"
    ],
    correctAnswer: 1,
    explanation: "Waxes consist of long-chain fatty acids esterified with long-chain alcohols."
  },
  {
    id: "easy-93",
    question: "Which fatty acid is omega-6?",
    options: [
      "Linolenic acid",
      "Linoleic acid",
      "Oleic acid",
      "Palmitic acid"
    ],
    correctAnswer: 1,
    explanation: "Linoleic acid is an omega-6 fatty acid with its first double bond at the sixth carbon from the methyl end."
  },
  {
    id: "easy-94",
    question: "What is the main function of cuticular wax in plants?",
    options: [
      "Energy storage",
      "Water conservation",
      "Membrane formation",
      "Hormone production"
    ],
    correctAnswer: 1,
    explanation: "Cuticular wax forms a waterproof layer that reduces water loss from plant surfaces."
  },
  {
    id: "easy-95",
    question: "Which lipid is a simple lipid?",
    options: [
      "Triglyceride",
      "Phospholipid",
      "Lipoprotein",
      "Glycolipid"
    ],
    correctAnswer: 0,
    explanation: "Triglycerides are simple lipids, while the others are complex or compound lipids."
  },
  {
    id: "easy-96",
    question: "What is the primary structural role of cholesterol in membranes?",
    options: [
      "Energy storage",
      "Fluidity buffer",
      "Receptor sites",
      "Enzyme activation"
    ],
    correctAnswer: 1,
    explanation: "Cholesterol acts as a fluidity buffer, maintaining optimal membrane fluidity."
  },
  {
    id: "easy-97",
    question: "Which process converts fatty acids to ketone bodies?",
    options: [
      "Beta-oxidation",
      "Ketogenesis",
      "Lipogenesis",
      "Esterification"
    ],
    correctAnswer: 1,
    explanation: "Ketogenesis converts fatty acids into ketone bodies during starvation or low carbohydrate intake."
  },
  {
    id: "easy-98",
    question: "What is the main difference between saturated and unsaturated fats?",
    options: [
      "Energy content",
      "Physical state at room temperature",
      "Chemical formula",
      "Biological function"
    ],
    correctAnswer: 1,
    explanation: "Saturated fats are typically solid at room temperature, while unsaturated fats are liquid."
  },
  {
    id: "easy-99",
    question: "Which lipid is used as a precursor for eicosanoids?",
    options: [
      "Triglycerides",
      "Phospholipids",
      "Arachidonic acid",
      "Cholesterol"
    ],
    correctAnswer: 2,
    explanation: "Arachidonic acid (from phospholipids) is the precursor for eicosanoids like prostaglandins."
  },
  {
    id: "easy-100",
    question: "What is the alcohol component in glycolipids?",
    options: [
      "Glycerol",
      "Sphingosine",
      "Cholesterol",
      "Either A or B"
    ],
    correctAnswer: 3,
    explanation: "Glycolipids can have either glycerol or sphingosine as their alcohol backbone, with attached carbohydrates."
  }
];

export const mediumQuestions: Question[] = [
  {
    id: "medium-1",
    question: "Which level of protein structure is stabilized by hydrogen bonds between amino and carbonyl groups of the backbone?",
    options: [
      "Primary structure",
      "Secondary structure",
      "Tertiary structure",
      "Quaternary structure"
    ],
    correctAnswer: 1,
    explanation: "Secondary structure (alpha-helices and beta-sheets) is stabilized by hydrogen bonds between the backbone amino and carbonyl groups."
  },
  {
    id: "medium-2",
    question: "What type of lipid is characterized by a four-ring structure and includes hormones like estrogen and testosterone?",
    options: [
      "Phospholipids",
      "Triglycerides",
      "Steroids",
      "Waxes"
    ],
    correctAnswer: 2,
    explanation: "Steroids have a characteristic four-ring structure and include important hormones like estrogen, testosterone, and cortisol."
  },
  {
    id: "medium-3",
    question: "Which carbohydrate polymer is used for structural support in plants and is indigestible by humans?",
    options: [
      "Starch",
      "Glycogen",
      "Cellulose",
      "Chitin"
    ],
    correctAnswer: 2,
    explanation: "Cellulose provides structural support in plant cell walls and humans lack the enzyme cellulase to digest it."
  },
  {
    id: "medium-4",
    question: "What is the fundamental difference between DNA and RNA nucleotides?",
    options: [
      "DNA has deoxyribose sugar, RNA has ribose sugar",
      "DNA has uracil, RNA has thymine",
      "DNA is single-stranded, RNA is double-stranded",
      "DNA has phosphate groups, RNA does not"
    ],
    correctAnswer: 0,
    explanation: "DNA nucleotides contain deoxyribose sugar while RNA nucleotides contain ribose sugar, which has an extra hydroxyl group."
  },
  {
    id: "medium-5",
    question: "Which type of protein structure involves the arrangement of multiple polypeptide chains?",
    options: [
      "Primary structure",
      "Secondary structure",
      "Tertiary structure",
      "Quaternary structure"
    ],
    correctAnswer: 3,
    explanation: "Quaternary structure involves the arrangement and interaction of multiple polypeptide chains in a protein complex."
  },
  {
    id: "medium-6",
    question: "What is the primary function of phospholipids in biological systems?",
    options: [
      "Long-term energy storage",
      "Formation of cell membranes",
      "Hormone production",
      "Thermal insulation"
    ],
    correctAnswer: 1,
    explanation: "Phospholipids are the main structural components of cell membranes, forming the phospholipid bilayer."
  },
  {
    id: "medium-7",
    question: "Which monosaccharide is known as blood sugar and is the primary energy source for cells?",
    options: [
      "Fructose",
      "Galactose",
      "Glucose",
      "Ribose"
    ],
    correctAnswer: 2,
    explanation: "Glucose is the primary circulating sugar in blood and serves as the main energy source for cellular respiration."
  },
  {
    id: "medium-8",
    question: "What type of bond connects amino acids in a protein chain?",
    options: [
      "Glycosidic bond",
      "Peptide bond",
      "Ester bond",
      "Phosphodiester bond"
    ],
    correctAnswer: 1,
    explanation: "Peptide bonds form between the carboxyl group of one amino acid and the amino group of another during protein synthesis."
  },
  {
    id: "medium-9",
    question: "Which nucleic acid is involved in protein synthesis as a messenger between DNA and ribosomes?",
    options: [
      "mRNA",
      "tRNA",
      "rRNA",
      "DNA"
    ],
    correctAnswer: 0,
    explanation: "Messenger RNA (mRNA) carries genetic information from DNA to ribosomes for protein synthesis."
  },
  {
    id: "medium-10",
    question: "What is the term for the process where a protein loses its structure and function due to factors like heat or pH change?",
    options: [
      "Hydrolysis",
      "Denaturation",
      "Deamination",
      "Decarboxylation"
    ],
    correctAnswer: 1,
    explanation: "Denaturation is the process where proteins lose their secondary, tertiary, or quaternary structure, resulting in loss of function."
  },
  {
    id: "medium-11",
    question: "Which type of lipid is composed of a glycerol molecule bonded to three fatty acids?",
    options: [
      "Phospholipid",
      "Triglyceride",
      "Steroid",
      "Glycolipid"
    ],
    correctAnswer: 1,
    explanation: "Triglycerides consist of a glycerol backbone esterified with three fatty acid molecules."
  },
  {
    id: "medium-12",
    question: "What is the main difference between saturated and unsaturated fatty acids?",
    options: [
      "Number of carbon atoms",
      "Presence of double bonds",
      "Length of carbon chain",
      "Type of glycerol attachment"
    ],
    correctAnswer: 1,
    explanation: "Saturated fatty acids have no double bonds between carbon atoms, while unsaturated fatty acids have one or more double bonds."
  },
  {
    id: "medium-13",
    question: "Which carbohydrate is stored in animal liver and muscles as an energy reserve?",
    options: [
      "Starch",
      "Cellulose",
      "Glycogen",
      "Chitin"
    ],
    correctAnswer: 2,
    explanation: "Glycogen is the polysaccharide storage form of glucose in animals, primarily stored in liver and muscle tissue."
  },
  {
    id: "medium-14",
    question: "What is the role of tRNA in protein synthesis?",
    options: [
      "Carries genetic information from nucleus",
      "Forms the structure of ribosomes",
      "Brings amino acids to the ribosome",
      "Catalyzes peptide bond formation"
    ],
    correctAnswer: 2,
    explanation: "Transfer RNA (tRNA) molecules bring specific amino acids to the ribosome during translation."
  },
  {
    id: "medium-15",
    question: "Which level of protein structure is determined by the sequence of amino acids?",
    options: [
      "Primary structure",
      "Secondary structure",
      "Tertiary structure",
      "Quaternary structure"
    ],
    correctAnswer: 0,
    explanation: "Primary structure refers to the linear sequence of amino acids in a polypeptide chain."
  },
  {
    id: "medium-16",
    question: "What type of lipid forms waterproof coatings on leaves and feathers?",
    options: [
      "Phospholipids",
      "Triglycerides",
      "Waxes",
      "Steroids"
    ],
    correctAnswer: 2,
    explanation: "Waxes form waterproof coatings on various biological surfaces including plant leaves and animal feathers."
  },
  {
    id: "medium-17",
    question: "Which disaccharide is composed of glucose and fructose units?",
    options: [
      "Maltose",
      "Lactose",
      "Sucrose",
      "Cellobiose"
    ],
    correctAnswer: 2,
    explanation: "Sucrose (table sugar) is a disaccharide composed of one glucose and one fructose molecule."
  },
  {
    id: "medium-18",
    question: "What is the function of ribosomal RNA (rRNA)?",
    options: [
      "Carries genetic code to ribosomes",
      "Transports amino acids",
      "Catalyzes protein synthesis",
      "Stores genetic information"
    ],
    correctAnswer: 2,
    explanation: "rRNA forms the catalytic core of ribosomes and helps catalyze the formation of peptide bonds during protein synthesis."
  },
  {
    id: "medium-19",
    question: "Which force is primarily responsible for maintaining tertiary protein structure?",
    options: [
      "Hydrogen bonds",
      "Disulfide bridges",
      "Hydrophobic interactions",
      "All of the above"
    ],
    correctAnswer: 3,
    explanation: "Tertiary structure is maintained by various forces including hydrophobic interactions, hydrogen bonds, disulfide bridges, and ionic bonds."
  },
  {
    id: "medium-20",
    question: "What is the main function of cholesterol in animal cell membranes?",
    options: [
      "Energy storage",
      "Membrane fluidity regulation",
      "Cell recognition",
      "Signal transduction"
    ],
    correctAnswer: 1,
    explanation: "Cholesterol helps maintain membrane fluidity by preventing phospholipid packing at low temperatures and disruption at high temperatures."
  },
  {
    id: "medium-21",
    question: "Which type of carbohydrate cannot be hydrolyzed into simpler sugars?",
    options: [
      "Polysaccharides",
      "Disaccharides",
      "Oligosaccharides",
      "Monosaccharides"
    ],
    correctAnswer: 3,
    explanation: "Monosaccharides are the simplest form of carbohydrates and cannot be hydrolyzed into smaller carbohydrate units."
  },
  {
    id: "medium-22",
    question: "What is the significance of the anticodon region in tRNA?",
    options: [
      "It binds to specific amino acids",
      "It recognizes the codon on mRNA",
      "It attaches to the ribosome",
      "It stabilizes the tRNA structure"
    ],
    correctAnswer: 1,
    explanation: "The anticodon region of tRNA base-pairs with the complementary codon on mRNA during translation."
  },
  {
    id: "medium-23",
    question: "Which protein structure involves the overall three-dimensional shape of a single polypeptide chain?",
    options: [
      "Primary structure",
      "Secondary structure",
      "Tertiary structure",
      "Quaternary structure"
    ],
    correctAnswer: 2,
    explanation: "Tertiary structure refers to the overall three-dimensional conformation of a single polypeptide chain."
  },
  {
    id: "medium-24",
    question: "What is the main difference between starch and cellulose?",
    options: [
      "Type of glycosidic bonds",
      "Number of glucose units",
      "Type of monosaccharide",
      "Solubility in water"
    ],
    correctAnswer: 0,
    explanation: "Starch has alpha-glycosidic bonds while cellulose has beta-glycosidic bonds, making them digestible and indigestible respectively."
  },
  {
    id: "medium-25",
    question: "Which nitrogenous base is found in RNA but not in DNA?",
    options: [
      "Adenine",
      "Guanine",
      "Cytosine",
      "Uracil"
    ],
    correctAnswer: 3,
    explanation: "Uracil replaces thymine in RNA and pairs with adenine in RNA molecules."
  },
  {
    id: "medium-26",
    question: "What is the function of regulatory proteins?",
    options: [
      "Structural support",
      "Enzyme catalysis",
      "Cellular communication and control",
      "Transport of molecules"
    ],
    correctAnswer: 2,
    explanation: "Regulatory proteins control and coordinate cellular activities, including gene expression and metabolic pathways."
  },
  {
    id: "medium-27",
    question: "Which lipid type is amphipathic and forms the basis of cellular membranes?",
    options: [
      "Triglycerides",
      "Phospholipids",
      "Steroids",
      "Waxes"
    ],
    correctAnswer: 1,
    explanation: "Phospholipids are amphipathic molecules with hydrophilic heads and hydrophobic tails that form lipid bilayers."
  },
  {
    id: "medium-28",
    question: "What is the primary function of fibrous proteins?",
    options: [
      "Enzyme catalysis",
      "Structural support",
      "Transport of oxygen",
      "Immune defense"
    ],
    correctAnswer: 1,
    explanation: "Fibrous proteins provide structural support and mechanical strength to tissues and cells."
  },
  {
    id: "medium-29",
    question: "Which carbohydrate is the main component of the exoskeleton of arthropods?",
    options: [
      "Cellulose",
      "Starch",
      "Glycogen",
      "Chitin"
    ],
    correctAnswer: 3,
    explanation: "Chitin is a structural polysaccharide that forms the exoskeleton of insects and crustaceans."
  },
  {
    id: "medium-30",
    question: "What is the role of DNA polymerase in nucleic acid metabolism?",
    options: [
      "Unwinds DNA double helix",
      "Synthesizes new DNA strands",
      "Breaks down DNA molecules",
      "Repairs RNA molecules"
    ],
    correctAnswer: 1,
    explanation: "DNA polymerase catalyzes the synthesis of new DNA strands during replication by adding nucleotides to a growing chain."
  },
  {
    id: "medium-31",
    question: "Which type of protein structure is characterized by alpha-helices and beta-pleated sheets?",
    options: [
      "Primary structure",
      "Secondary structure",
      "Tertiary structure",
      "Quaternary structure"
    ],
    correctAnswer: 1,
    explanation: "Secondary structure includes regular repeating patterns like alpha-helices and beta-pleated sheets stabilized by hydrogen bonds."
  },
  {
    id: "medium-32",
    question: "What is the main function of lipoproteins in the bloodstream?",
    options: [
      "Transport lipids",
      "Digest fats",
      "Synthesize cholesterol",
      "Store energy"
    ],
    correctAnswer: 0,
    explanation: "Lipoproteins transport water-insoluble lipids through the aqueous environment of the bloodstream."
  },
  {
    id: "medium-33",
    question: "Which monosaccharide is a component of RNA nucleotides?",
    options: [
      "Deoxyribose",
      "Ribose",
      "Glucose",
      "Fructose"
    ],
    correctAnswer: 1,
    explanation: "Ribose is the pentose sugar found in RNA nucleotides, while deoxyribose is found in DNA."
  },
  {
    id: "medium-34",
    question: "What is the significance of the R-group in amino acids?",
    options: [
      "Determines amino acid properties",
      "Forms peptide bonds",
      "Maintains primary structure",
      "All of the above"
    ],
    correctAnswer: 0,
    explanation: "The R-group (side chain) determines the unique chemical properties and reactivity of each amino acid."
  },
  {
    id: "medium-35",
    question: "Which type of bond connects nucleotides in a nucleic acid chain?",
    options: [
      "Peptide bond",
      "Glycosidic bond",
      "Phosphodiester bond",
      "Ester bond"
    ],
    correctAnswer: 2,
    explanation: "Phosphodiester bonds connect the 3' carbon of one nucleotide to the 5' carbon of the next in nucleic acids."
  },
  {
    id: "medium-36",
    question: "What is the function of contractile proteins?",
    options: [
      "Structural support",
      "Cellular movement",
      "Enzyme catalysis",
      "Molecular transport"
    ],
    correctAnswer: 1,
    explanation: "Contractile proteins, like actin and myosin, enable cellular movement and muscle contraction."
  },
  {
    id: "medium-37",
    question: "Which lipid derivative functions as local hormones in inflammation response?",
    options: [
      "Phospholipids",
      "Prostaglandins",
      "Steroids",
      "Triglycerides"
    ],
    correctAnswer: 1,
    explanation: "Prostaglandins are lipid-derived local hormones that mediate inflammation and other physiological processes."
  },
  {
    id: "medium-38",
    question: "What is the main difference between globular and fibrous proteins?",
    options: [
      "Amino acid composition",
      "Three-dimensional shape",
      "Solubility in water",
      "All of the above"
    ],
    correctAnswer: 3,
    explanation: "Globular proteins are spherical, water-soluble, and often functional, while fibrous proteins are elongated, insoluble, and structural."
  },
  {
    id: "medium-39",
    question: "Which carbohydrate is known as fruit sugar?",
    options: [
      "Glucose",
      "Fructose",
      "Galactose",
      "Sucrose"
    ],
    correctAnswer: 1,
    explanation: "Fructose is commonly known as fruit sugar and is found in many fruits and honey."
  },
  {
    id: "medium-40",
    question: "What is the role of helicase in DNA replication?",
    options: [
      "Synthesizes new DNA strands",
      "Unwinds the DNA double helix",
      "Proofreads newly synthesized DNA",
      "Joins Okazaki fragments"
    ],
    correctAnswer: 1,
    explanation: "Helicase unwinds the DNA double helix by breaking hydrogen bonds between base pairs during replication."
  },
  {
    id: "medium-41",
    question: "Which type of protein structure involves interactions between multiple polypeptide chains?",
    options: [
      "Primary structure",
      "Secondary structure",
      "Tertiary structure",
      "Quaternary structure"
    ],
    correctAnswer: 3,
    explanation: "Quaternary structure involves the arrangement and interaction of multiple polypeptide chains in a functional protein complex."
  },
  {
    id: "medium-42",
    question: "What is the function of bile salts in lipid digestion?",
    options: [
      "Enzyme activation",
      "Emulsification of fats",
      "Direct hydrolysis of triglycerides",
      "Absorption of fatty acids"
    ],
    correctAnswer: 1,
    explanation: "Bile salts emulsify fats, breaking them into smaller droplets to increase surface area for enzymatic digestion."
  },
  {
    id: "medium-43",
    question: "Which nitrogenous base pairs with cytosine in DNA?",
    options: [
      "Adenine",
      "Thymine",
      "Guanine",
      "Uracil"
    ],
    correctAnswer: 2,
    explanation: "Guanine forms three hydrogen bonds with cytosine in DNA base pairing."
  },
  {
    id: "medium-44",
    question: "What is the significance of the peptide bond in protein structure?",
    options: [
      "It is rigid and planar",
      "It allows free rotation",
      "It is easily broken",
      "It determines protein function"
    ],
    correctAnswer: 0,
    explanation: "The peptide bond has partial double bond character, making it rigid and planar, which influences protein folding."
  },
  {
    id: "medium-45",
    question: "Which type of lipid is a precursor for steroid hormones?",
    options: [
      "Phospholipids",
      "Triglycerides",
      "Cholesterol",
      "Waxes"
    ],
    correctAnswer: 2,
    explanation: "Cholesterol serves as the precursor for the synthesis of all steroid hormones."
  },
  {
    id: "medium-46",
    question: "What is the main function of storage proteins?",
    options: [
      "Structural support",
      "Store amino acids and ions",
      "Enzyme catalysis",
      "Cellular transport"
    ],
    correctAnswer: 1,
    explanation: "Storage proteins store amino acids (e.g., casein in milk) and ions for later use by the organism."
  },
  {
    id: "medium-47",
    question: "Which disaccharide is composed of glucose and galactose?",
    options: [
      "Maltose",
      "Lactose",
      "Sucrose",
      "Trehalose"
    ],
    correctAnswer: 1,
    explanation: "Lactose (milk sugar) is composed of one glucose and one galactose molecule."
  },
  {
    id: "medium-48",
    question: "What is the role of ligase in DNA replication?",
    options: [
      "Unwinds DNA helix",
      "Synthesizes RNA primer",
      "Joins Okazaki fragments",
      "Proofreads DNA synthesis"
    ],
    correctAnswer: 2,
    explanation: "DNA ligase joins Okazaki fragments on the lagging strand during DNA replication."
  },
  {
    id: "medium-49",
    question: "Which force is primarily responsible for the stability of the DNA double helix?",
    options: [
      "Covalent bonds",
      "Hydrogen bonds",
      "Ionic bonds",
      "Hydrophobic interactions"
    ],
    correctAnswer: 1,
    explanation: "Hydrogen bonds between complementary base pairs provide stability to the DNA double helix."
  },
  {
    id: "medium-50",
    question: "What is the function of protective proteins?",
    options: [
      "Structural support",
      "Immune defense",
      "Enzyme catalysis",
      "Molecular transport"
    ],
    correctAnswer: 1,
    explanation: "Protective proteins, such as antibodies and clotting factors, provide immune defense and protection against pathogens."
  }
];

export const hardQuestions: Question[] = [
  {
    id: "hard-1",
    question: "What is the thermodynamic explanation for the spontaneous formation of the phospholipid bilayer in aqueous environments?",
    options: [
      "Decrease in free energy due to hydrophobic effect",
      "Increase in entropy of water molecules",
      "Formation of favorable electrostatic interactions",
      "Both A and B"
    ],
    correctAnswer: 3,
    explanation: "The hydrophobic effect causes phospholipids to form bilayers spontaneously, increasing water entropy and decreasing free energy."
  },
  {
    id: "hard-2",
    question: "How does the Michaelis-Menten equation describe enzyme kinetics for proteins acting as biological catalysts?",
    options: [
      "It models substrate saturation kinetics",
      "It describes allosteric regulation",
      "It predicts reaction equilibrium",
      "It calculates activation energy"
    ],
    correctAnswer: 0,
    explanation: "The Michaelis-Menten equation describes how reaction velocity varies with substrate concentration in enzyme-catalyzed reactions."
  },
  {
    id: "hard-3",
    question: "What is the molecular basis for the higher energy yield from complete oxidation of fatty acids compared to carbohydrates?",
    options: [
      "Higher reduction state of carbon atoms",
      "More efficient ATP synthesis",
      "Lower activation energy for oxidation",
      "Direct entry into electron transport chain"
    ],
    correctAnswer: 0,
    explanation: "Fatty acids have more highly reduced carbon atoms (more C-H bonds), yielding more electrons for oxidative phosphorylation."
  },
  {
    id: "hard-4",
    question: "How do chaperonin proteins assist in proper protein folding at the molecular level?",
    options: [
      "By providing an isolated hydrophobic environment",
      "By catalyzing disulfide bond formation",
      "By hydrolyzing ATP to drive conformational changes",
      "All of the above"
    ],
    correctAnswer: 3,
    explanation: "Chaperonins create isolated folding environments, facilitate correct disulfide bonding, and use ATP hydrolysis to assist folding."
  },
  {
    id: "hard-5",
    question: "What is the structural basis for the catalytic efficiency of ribozymes compared to protein enzymes?",
    options: [
      "Metal ion coordination in active sites",
      "Formation of precise tertiary structures",
      "Ability to undergo conformational changes",
      "All of the above"
    ],
    correctAnswer: 3,
    explanation: "Ribozymes achieve catalytic efficiency through metal ion coordination, precise folding, and conformational flexibility like protein enzymes."
  },
  {
    id: "hard-6",
    question: "How does the allosteric regulation of hemoglobin demonstrate the relationship between protein structure and function?",
    options: [
      "Quaternary structure changes affect oxygen binding",
      "Cooperativity enhances oxygen delivery",
      "Heme-heme interaction regulates function",
      "All of the above"
    ],
    correctAnswer: 3,
    explanation: "Hemoglobin's allosteric regulation shows how quaternary structure changes, cooperativity, and heme interactions optimize oxygen binding and release."
  },
  {
    id: "hard-7",
    question: "What is the biochemical rationale for the inability of humans to synthesize essential amino acids?",
    options: [
      "Lack of specific enzymatic pathways",
      "Energy conservation strategy",
      "Evolutionary loss of synthetic capability",
      "All of the above"
    ],
    correctAnswer: 3,
    explanation: "Humans lack enzymes for synthesizing essential amino acids, representing an evolutionary adaptation for energy conservation."
  },
  {
    id: "hard-8",
    question: "How does the genetic code demonstrate the molecular connection between nucleic acids and proteins?",
    options: [
      "Triplet codons specify amino acids",
      "Universal code with minor variations",
      "Degeneracy minimizes mutation effects",
      "All of the above"
    ],
    correctAnswer: 3,
    explanation: "The genetic code links nucleic acid sequences to protein sequences through triplet codons, with universality and degeneracy properties."
  },
  {
    id: "hard-9",
    question: "What is the structural basis for the difference in stability between DNA and RNA?",
    options: [
      "2'-OH group in RNA promotes hydrolysis",
      "Deoxyribose confers greater stability",
      "Double-stranded nature of DNA",
      "All of the above"
    ],
    correctAnswer: 3,
    explanation: "DNA's stability comes from deoxyribose (lacks 2'-OH), double-stranded structure, and repair mechanisms, while RNA is more labile."
  },
  {
    id: "hard-10",
    question: "How do lipid rafts demonstrate the functional importance of membrane lipid composition?",
    options: [
      "They organize signaling complexes",
      "They facilitate membrane trafficking",
      "They affect membrane fluidity",
      "All of the above"
    ],
    correctAnswer: 3,
    explanation: "Lipid rafts show how specific lipid compositions create microdomains that organize signaling, trafficking, and regulate fluidity."
  },
  {
    id: "hard-11",
    question: "What is the molecular mechanism behind prion diseases and protein misfolding?",
    options: [
      "Template-directed misfolding",
      "Formation of amyloid fibrils",
      "Loss of normal function",
      "All of the above"
    ],
    correctAnswer: 3,
    explanation: "Prions demonstrate how misfolded proteins can template further misfolding, form toxic aggregates, and cause loss of function."
  },
  {
    id: "hard-12",
    question: "How does the process of alternative splicing expand protein diversity from a limited genome?",
    options: [
      "Different exon combinations",
      "Tissue-specific protein isoforms",
      "Increased functional diversity",
      "All of the above"
    ],
    correctAnswer: 3,
    explanation: "Alternative splicing allows multiple proteins from one gene through different exon combinations, increasing proteome diversity."
  },
  {
    id: "hard-13",
    question: "What is the biochemical basis for the high energy cost of protein synthesis compared to other macromolecules?",
    options: [
      "Multiple ATP equivalents per peptide bond",
      "Proofreading and editing mechanisms",
      "Ribosome assembly and function",
      "All of the above"
    ],
    correctAnswer: 3,
    explanation: "Protein synthesis consumes ~4 ATP equivalents per peptide bond due to activation, translocation, and quality control processes."
  },
  {
    id: "hard-14",
    question: "How do post-translational modifications regulate protein function and cellular signaling?",
    options: [
      "Phosphorylation alters activity",
      "Glycosylation affects recognition",
      "Ubiquitination targets degradation",
      "All of the above"
    ],
    correctAnswer: 3,
    explanation: "PTMs like phosphorylation, glycosylation, and ubiquitination dynamically regulate protein function, localization, and turnover."
  },
  {
    id: "hard-15",
    question: "What is the molecular basis for the specificity of enzyme-substrate interactions?",
    options: [
      "Complementary shape and charge distribution",
      "Induced fit mechanism",
      "Specificity pockets and catalytic groups",
      "All of the above"
    ],
    correctAnswer: 3,
    explanation: "Enzyme specificity arises from precise structural complementarity, induced fit conformational changes, and specialized active sites."
  },
  {
    id: "hard-16",
    question: "How does the electron transport chain demonstrate the integration of carbohydrate and lipid metabolism?",
    options: [
      "Common final pathway for reduced coenzymes",
      "ATP synthesis from NADH/FADH2",
      "Convergence of metabolic pathways",
      "All of the above"
    ],
    correctAnswer: 3,
    explanation: "The ETC integrates metabolism by accepting electrons from NADH/FADH2 generated from both carbohydrate and lipid oxidation."
  },
  {
    id: "hard-17",
    question: "What is the structural basis for the different functions of globular vs fibrous proteins?",
    options: [
      "Amino acid composition and sequence",
      "Three-dimensional folding patterns",
      "Solubility and structural roles",
      "All of the above"
    ],
    correctAnswer: 3,
    explanation: "Globular and fibrous proteins differ in composition, folding, and properties that determine their functional specialization."
  },
  {
    id: "hard-18",
    question: "How does the process of β-oxidation demonstrate the metabolic adaptation for energy extraction from fats?",
    options: [
      "Sequential removal of two-carbon units",
      "High yield of reduced coenzymes",
      "Integration with Krebs cycle",
      "All of the above"
    ],
    correctAnswer: 3,
    explanation: "β-oxidation efficiently extracts energy from fats by sequential cleavage, generating abundant NADH/FADH2 for ATP production."
  },
  {
    id: "hard-19",
    question: "What is the molecular mechanism behind the action of statin drugs on cholesterol biosynthesis?",
    options: [
      "Competitive inhibition of HMG-CoA reductase",
      "Reduction of mevalonate production",
      "Decreased cholesterol synthesis",
      "All of the above"
    ],
    correctAnswer: 3,
    explanation: "Statins competitively inhibit HMG-CoA reductase, the rate-limiting enzyme in cholesterol biosynthesis pathway."
  },
  {
    id: "hard-20",
    question: "How does the process of photosynthesis demonstrate the conversion of light energy into chemical energy in carbohydrates?",
    options: [
      "Light-dependent ATP and NADPH production",
      "Carbon fixation in Calvin cycle",
      "Formation of energy-rich sugars",
      "All of the above"
    ],
    correctAnswer: 3,
    explanation: "Photosynthesis converts light energy to chemical energy through light reactions (ATP/NADPH) and carbon fixation (sugar synthesis)."
  },
  {
    id: "hard-21",
    question: "What is the biochemical basis for the different physical properties of saturated vs unsaturated fats?",
    options: [
      "Degree of chain packing",
      "Melting point differences",
      "Membrane fluidity effects",
      "All of the above"
    ],
    correctAnswer: 3,
    explanation: "Saturation affects fatty acid packing, melting points, and membrane properties due to kinks from double bonds."
  },
  {
    id: "hard-22",
    question: "How do G-protein coupled receptors demonstrate the role of proteins in signal transduction?",
    options: [
      "Ligand binding-induced conformational changes",
      "Activation of intracellular signaling cascades",
      "Amplification of extracellular signals",
      "All of the above"
    ],
    correctAnswer: 3,
    explanation: "GPCRs show how proteins transduce signals through conformational changes, cascade activation, and signal amplification."
  },
  {
    id: "hard-23",
    question: "What is the molecular basis for the anti-parallel arrangement of DNA strands?",
    options: [
      "Complementary base pairing",
      "5'→3' polarity of synthesis",
      "Structural stability considerations",
      "All of the above"
    ],
    correctAnswer: 3,
    explanation: "DNA's anti-parallel arrangement allows complementary base pairing, reflects synthesis polarity, and optimizes structural stability."
  },
  {
    id: "hard-24",
    question: "How does the process of gluconeogenesis demonstrate the metabolic interconversion of biological molecules?",
    options: [
      "Conversion of amino acids to glucose",
      "Glycerol from fats to glucose",
      "Lactate to glucose conversion",
      "All of the above"
    ],
    correctAnswer: 3,
    explanation: "Gluconeogenesis shows how various precursors (amino acids, glycerol, lactate) can be converted to glucose when needed."
  },
  {
    id: "hard-25",
    question: "What is the structural basis for the different functions of the various RNA types?",
    options: [
      "Sequence specificity",
      "Secondary and tertiary structures",
      "Protein interaction capabilities",
      "All of the above"
    ],
    correctAnswer: 3,
    explanation: "Different RNA types have unique sequences, structures, and interaction properties that determine their specific functions."
  },
  {
    id: "hard-26",
    question: "How does the process of oxidative phosphorylation demonstrate the chemiosmotic theory?",
    options: [
      "Proton gradient drives ATP synthesis",
      "Membrane potential energy conversion",
      "Coupling of electron transport to phosphorylation",
      "All of the above"
    ],
    correctAnswer: 3,
    explanation: "Oxidative phosphorylation demonstrates chemiosmosis where electron transport creates a proton gradient that drives ATP synthesis."
  },
  {
    id: "hard-27",
    question: "What is the molecular basis for the specificity of immune recognition by antibodies?",
    options: [
      "Hypervariable regions in antigen binding",
      "Complementarity-determining regions",
      "Conformational flexibility and specificity",
      "All of the above"
    ],
    correctAnswer: 3,
    explanation: "Antibody specificity arises from hypervariable regions that create precise antigen-binding sites with high complementarity."
  },
  {
    id: "hard-28",
    question: "How does the process of DNA repair demonstrate the importance of molecular fidelity?",
    options: [
      "Proofreading during replication",
      "Mismatch repair mechanisms",
      "Maintenance of genetic integrity",
      "All of the above"
    ],
    correctAnswer: 3,
    explanation: "DNA repair systems maintain genetic fidelity through proofreading, mismatch correction, and various repair pathways."
  },
  {
    id: "hard-29",
    question: "What is the biochemical basis for the different energy yields from aerobic vs anaerobic metabolism?",
    options: [
      "Complete vs partial oxidation",
      "Electron acceptor efficiency",
      "ATP yield per glucose molecule",
      "All of the above"
    ],
    correctAnswer: 3,
    explanation: "Aerobic metabolism yields more ATP due to complete oxidation and efficient electron transfer to oxygen."
  },
  {
    id: "hard-30",
    question: "How do molecular chaperones demonstrate the importance of protein quality control?",
    options: [
      "Prevention of aggregation",
      "Assistance in proper folding",
      "Targeting of damaged proteins",
      "All of the above"
    ],
    correctAnswer: 3,
    explanation: "Chaperones maintain protein quality by preventing aggregation, assisting folding, and targeting misfolded proteins for degradation."
  },
  {
    id: "hard-31",
    question: "What is the structural basis for the different catalytic mechanisms of serine proteases?",
    options: [
      "Catalytic triad organization",
      "Oxyanion hole stabilization",
      "Substrate specificity pockets",
      "All of the above"
    ],
    correctAnswer: 3,
    explanation: "Serine proteases use precisely organized catalytic triads, oxyanion stabilization, and specificity pockets for efficient catalysis."
  },
  {
    id: "hard-32",
    question: "How does the process of protein targeting demonstrate cellular compartmentalization?",
    options: [
      "Signal sequences for localization",
      "Membrane transport mechanisms",
      "Organelle-specific functions",
      "All of the above"
    ],
    correctAnswer: 3,
    explanation: "Protein targeting shows cellular organization through signal sequences, transport systems, and functional compartmentalization."
  },
  {
    id: "hard-33",
    question: "What is the molecular basis for the different types of enzyme inhibition?",
    options: [
      "Competitive inhibition at active site",
      "Allosteric regulation at other sites",
      "Reversible and irreversible mechanisms",
      "All of the above"
    ],
    correctAnswer: 3,
    explanation: "Enzyme inhibition occurs through various mechanisms including competitive, allosteric, and reversible/irreversible modes."
  },
  
   {
    "id": "hard-34",
    "question": "How does the process of RNA interference demonstrate regulatory functions of nucleic acids?",
    "options": [
      "Gene silencing mechanisms",
      "Post-transcriptional regulation",
      "Defense against viruses",
      "All of the above"
    ],
    "correctAnswer": 3,
    "explanation": "RNAi shows nucleic acid regulatory functions through gene silencing, post-transcriptional control, and antiviral defense."
  },
  {
    "id": "hard-35",
    "question": "What is the fundamental chemical property that classifies a molecule as a carbohydrate?",
    "options": [
      "It contains an amine group and a carboxylic acid group.",
      "It has the empirical formula (CH₂O)ₙ or a derivative thereof.",
      "It is a polymer of isoprene units.",
      "It is built from nucleotide monomers."
    ],
    "correctAnswer": 1,
    "explanation": "Carbohydrates are polyhydroxy aldehydes or ketones, and their name derives from their basic formula, which is a hydrate of carbon: Cₙ(H₂O)ₙ."
  },
  {
    "id": "hard-36",
    "question": "The α-helix and β-pleated sheet are classic examples of a protein's:",
    "options": [
      "Primary structure, defined by peptide bonds.",
      "Secondary structure, stabilized by hydrogen bonds.",
      "Tertiary structure, formed by R-group interactions.",
      "Quaternary structure, involving multiple polypeptides."
    ],
    "correctAnswer": 1,
    "explanation": "Secondary structure refers to local, repetitive folding patterns within a polypeptide chain, primarily stabilized by hydrogen bonds between the backbone carbonyl and amino groups."
  },
  {
    "id": "hard-37",
    "question": "From a biochemical perspective, why is water considered the most important biological molecule?",
    "options": [
      "It is the universal solvent for metabolic reactions.",
      "Its high specific heat capacity helps regulate temperature.",
      "Its polarity and hydrogen bonding are crucial for macromolecule structure.",
      "All of the above."
    ],
    "correctAnswer": 3,
    "explanation": "Water's unique properties—its solvent capabilities, thermal buffering, and role in hydrophobic interactions—make it indispensable for all known life forms and biochemical processes."
  },
  {
    "id": "hard-38",
    "question": "Which class of lipids is characterized by a four-ring core structure and includes molecules like cholesterol and steroid hormones?",
    "options": [
      "Phospholipids",
      "Triacylglycerols",
      "Steroids",
      "Waxes"
    ],
    "correctAnswer": 2,
    "explanation": "Steroids are a class of lipids distinguished by their molecular structure containing four fused carbon rings. Cholesterol is a key steroid and a precursor for others like estrogen and testosterone."
  },
  {
    "id": "hard-39",
    "question": "The specific role of a nucleic acid, such as whether it acts as genetic material (DNA) or in protein synthesis (mRNA, tRNA, rRNA), is primarily determined by its:",
    "options": [
      "Type of sugar (deoxyribose vs. ribose)",
      "Sequence of nitrogenous bases",
      "Presence of a single or double strand",
      "Overall three-dimensional shape"
    ],
    "correctAnswer": 1,
    "explanation": "The information stored in a nucleic acid is encoded in the specific sequence of its bases (A, T, C, G in DNA; A, U, C, G in RNA). This sequence dictates its function, such as which gene is encoded or which amino acid a tRNA carries."
  },
  {
    "id": "hard-40",
    "question": "What is the primary energetic reason for the extensive use of ATP as the universal energy currency in cells?",
    "options": [
      "Its hydrolysis releases a large amount of free energy.",
      "It is the most stable nucleotide triphosphate.",
      "Its synthesis is coupled to endergonic reactions.",
      "It contains high-energy phosphoanhydride bonds."
    ],
    "correctAnswer": 3,
    "explanation": "ATP's energy currency role stems from its phosphoanhydride bonds, which are high-energy. Hydrolysis of these bonds releases significant free energy that can be coupled to drive endergonic cellular processes."
  },
  {
    "id": "hard-41",
    "question": "In the context of enzyme kinetics, what does a low Km value signify about an enzyme's interaction with its substrate?",
    "options": [
      "The enzyme has a low catalytic efficiency (kcat).",
      "The enzyme requires a high substrate concentration to reach Vmax.",
      "The enzyme has a high affinity for its substrate.",
      "The reaction is likely irreversible."
    ],
    "correctAnswer": 2,
    "explanation": "The Michaelis constant (Km) is inversely related to affinity. A low Km indicates that the enzyme requires only a low concentration of substrate to become saturated, meaning it binds the substrate very tightly (high affinity)."
  },
  {
    "id": "hard-42",
    "question": "What critical role do biological molecules like NADH and FADH2 play in cellular respiration?",
    "options": [
      "They are the final electron acceptors.",
      "They directly phosphorylate ADP to make ATP.",
      "They act as reduced coenzymes that carry high-energy electrons to the ETC.",
      "They catalyze the decarboxylation reactions in the Krebs cycle."
    ],
    "correctAnswer": 2,
    "explanation": "NADH and FADH2 are not energy currency themselves but are electron carriers. They are reduced during glycolysis and the Krebs cycle and then donate their electrons to the electron transport chain, which drives ATP synthesis."
  },
  {
    "id": "hard-43",
    "question": "The fundamental difference between competitive and non-competitive enzyme inhibition lies in:",
    "options": [
      "Whether the inhibition is reversible or irreversible.",
      "The location where the inhibitor binds relative to the active site.",
      "The effect of the inhibitor on the measured Vmax of the reaction.",
      "Both B and C."
    ],
    "correctAnswer": 3,
    "explanation": "Competitive inhibitors bind at the active site, competing with the substrate. This can be overcome by high [S], so Vmax is unchanged but Km increases. Non-competitive inhibitors bind elsewhere, altering the enzyme's shape and reducing Vmax, but Km remains the same."
  },
  {
    "id": "hard-44",
    "question": "How does the structure of cellulose, a polysaccharide, relate to its function as a structural component in plant cell walls?",
    "options": [
      "Its β-1,4-glycosidic linkages form straight, rigid chains that group into strong microfibrils.",
      "Its branched structure allows for compact energy storage.",
      "It is easily hydrolyzed by enzymes to provide quick energy.",
      "Its α-1,4-glycosidic linkages form helical structures that trap water."
    ],
    "correctAnswer": 0,
    "explanation": "The β-configuration of cellulose's glycosidic linkages allows adjacent glucose monomers to be flipped, promoting the formation of straight chains. These chains form extensive hydrogen bonds with each other, creating incredibly strong and rigid microfibrils ideal for structural support."
  },
  {
    "id": "hard-45",
    "question": "What is the central dogma of molecular biology, which describes the flow of genetic information?",
    "options": [
      "DNA → RNA → Protein",
      "RNA → DNA → Protein",
      "Protein → RNA → DNA",
      "The flow of information is reversible between all molecules."
    ],
    "correctAnswer": 0,
    "explanation": "The central dogma states that genetic information flows from DNA to RNA (transcription) and then from RNA to protein (translation). This defines the functional relationships between the major biological macromolecules."
  },
  {
    "id": "hard-46",
    "question": "The amphipathic nature of a phospholipid is best described as:",
    "options": [
      "Being both acidic and basic.",
      "Having both hydrophilic and hydrophobic regions.",
      "Being able to form both esters and phosphoesters.",
      "Acting as both a reactant and a catalyst."
    ],
    "correctAnswer": 1,
    "explanation": "Amphipathic molecules have dual solubility. A phospholipid has a hydrophilic (water-loving) phosphate head and hydrophobic (water-fearing) hydrocarbon tails. This property is essential for forming the lipid bilayer of membranes."
  },
  {
    "id": "hard-47",
    "question": "What is the primary function of glycogen and starch, and how does their branched structure facilitate this?",
    "options": [
      "Structural support; branching increases tensile strength.",
      "Energy storage; branching creates numerous ends for rapid enzymatic hydrolysis.",
      "Cell signaling; branching allows for specific molecular recognition.",
      "Insulation; branching traps heat more effectively."
    ],
    "correctAnswer": 1,
    "explanation": "Glycogen (in animals) and starch (in plants) are energy storage polysaccharides. Their highly branched structure provides a multitude of non-reducing ends, which are the sites where enzymes like glycogen phosphorylase can simultaneously act to rapidly release glucose units when energy is needed."
  },
  {
    "id": "hard-48",
    "question": "In a DNA double helix, the two strands are said to be complementary and anti-parallel. This means:",
    "options": [
      "The 5' end of one strand is paired with the 3' end of the other.",
      "A purine on one strand always pairs with a purine on the other.",
      "The strands are identical in base sequence.",
      "The hydrogen bonds between bases are covalent."
    ],
    "correctAnswer": 0,
    "explanation": "Anti-parallel means the two strands run in opposite directions. One strand runs 5' to 3', while its complementary partner runs 3' to 5'. This arrangement is essential for the precise pairing of bases (A-T, G-C) and the overall stability of the helix."
  },
  {
    "id": "hard-49",
    "question": "What is the key functional difference between the roles of tRNA and mRNA in protein synthesis?",
    "options": [
      "tRNA carries the genetic code, while mRNA carries the amino acids.",
      "mRNA carries the genetic code from DNA, while tRNA translates that code by bringing specific amino acids.",
      "Both carry genetic code, but tRNA does so in the nucleus.",
      "mRNA forms the core of the ribosome, while tRNA is the template."
    ],
    "correctAnswer": 1,
    "explanation": "mRNA (messenger RNA) is a transcript of a gene and carries the codon sequence. tRNA (transfer RNA) has an anticodon that base-pairs with the mRNA codon and carries the corresponding specific amino acid to the growing polypeptide chain."
  },
  {
    "id": "hard-50",
    "question": "Beyond energy storage, what is a critical function of lipids that is essential for complex multicellular life?",
    "options": [
      "Serving as primary structural components of cellular membranes.",
      "Acting as the main information storage molecules.",
      "Functioning as the primary catalysts for metabolic reactions.",
      "Providing the main source of nitrogen for amino acid synthesis."
    ],
    "correctAnswer": 0,
    "explanation": "While some lipids store energy, the most fundamental function is forming the phospholipid bilayer of all cellular membranes. This compartmentalization is absolutely essential for separating the cell from its environment and creating specialized organelles within eukaryotic cells, enabling the complexity of multicellular organisms."
  }

  ];

export const biologicalMoleculesQuestions = {
  easy: easyQuestions,
  medium: mediumQuestions,
  hard: hardQuestions,
} as const;
