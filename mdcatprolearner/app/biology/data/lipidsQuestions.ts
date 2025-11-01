

export type Difficulty = keyof typeof lipidQuestions;

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

];

export const hardQuestions: Question[] = [
 
];

export const lipidQuestions = {
  easy: easyQuestions,
  medium: mediumQuestions,
  hard: hardQuestions,
} as const;
