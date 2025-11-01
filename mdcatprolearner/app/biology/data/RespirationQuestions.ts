
export type Difficulty = keyof typeof respirationQuestions;

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
    question: "Which metabolic pathway is common to the respiration of glucose, proteins, and fats?",
    options: [
      "Glycolysis",
      "Krebs cycle",
      "Electron transport chain",
      "All of the above"
    ],
    correctAnswer: 1,
    explanation: "The Krebs cycle (citric acid cycle) is the common pathway where breakdown products of glucose, proteins, and fats converge to produce energy."
  },
  {
    id: "easy-2",
    question: "How do proteins enter the cellular respiration pathway?",
    options: [
      "Directly as amino acids",
      "After conversion to glucose",
      "After deamination and conversion to Krebs cycle intermediates",
      "As complete protein molecules"
    ],
    correctAnswer: 2,
    explanation: "Proteins undergo deamination (removal of amino groups) and the remaining carbon skeletons are converted to intermediates that enter the Krebs cycle."
  },
  {
    id: "easy-3",
    question: "What is the first step in fat metabolism for energy production?",
    options: [
      "Beta-oxidation",
      "Glycolysis",
      "Deamination",
      "Krebs cycle"
    ],
    correctAnswer: 0,
    explanation: "Fats undergo beta-oxidation, where fatty acids are broken down into two-carbon units that form acetyl-CoA."
  },
  {
    id: "easy-4",
    question: "Which molecule serves as the universal entry point for all fuel molecules into the Krebs cycle?",
    options: [
      "Glucose",
      "Pyruvate",
      "Acetyl-CoA",
      "Oxaloacetate"
    ],
    correctAnswer: 2,
    explanation: "Acetyl-CoA is the central molecule that enters the Krebs cycle, whether derived from glucose, proteins, or fats."
  },
  {
    id: "easy-5",
    question: "What happens to the amino group removed from amino acids during protein catabolism?",
    options: [
      "It is excreted as urea",
      "It enters the electron transport chain",
      "It is converted to glucose",
      "It is stored as glycogen"
    ],
    correctAnswer: 0,
    explanation: "The amino groups removed from amino acids are converted to urea in the liver and excreted by the kidneys."
  },
  {
    id: "easy-6",
    question: "Which energy-rich molecule is produced in greater quantities from fat metabolism compared to carbohydrate metabolism?",
    options: [
      "ATP",
      "NADH",
      "FADH₂",
      "GTP"
    ],
    correctAnswer: 1,
    explanation: "Fat metabolism produces more NADH and FADH₂ molecules per carbon atom, which generate more ATP in the electron transport chain."
  },
  {
    id: "easy-7",
    question: "Where does beta-oxidation of fatty acids occur in the cell?",
    options: [
      "Cytoplasm",
      "Mitochondrial matrix",
      "Nucleus",
      "Endoplasmic reticulum"
    ],
    correctAnswer: 1,
    explanation: "Beta-oxidation occurs in the mitochondrial matrix, where fatty acids are broken down into acetyl-CoA units."
  },
  {
    id: "easy-8",
    question: "Which of these can be converted to pyruvate and enter the respiration pathway?",
    options: [
      "Only glucose",
      "Glucose and some amino acids",
      "Only fats",
      "Only proteins"
    ],
    correctAnswer: 1,
    explanation: "Glucose and certain glucogenic amino acids can be converted to pyruvate, which then forms acetyl-CoA for the Krebs cycle."
  },
  {
    id: "easy-9",
    question: "What is the net ATP yield from one molecule of glucose in aerobic respiration?",
    options: [
      "2 ATP",
      "36-38 ATP",
      "12 ATP",
      "24 ATP"
    ],
    correctAnswer: 1,
    explanation: "Complete oxidation of one glucose molecule yields approximately 36-38 ATP molecules under aerobic conditions."
  },
  {
    id: "easy-10",
    question: "Which process is specific to carbohydrate metabolism and not involved in fat or protein respiration?",
    options: [
      "Krebs cycle",
      "Glycolysis",
      "Electron transport chain",
      "Oxidative phosphorylation"
    ],
    correctAnswer: 1,
    explanation: "Glycolysis is specific to glucose metabolism, whereas fats and proteins enter the pathway at later stages."
  },
  {
    id: "easy-11",
    question: "What is the primary energy storage form in animals?",
    options: [
      "Glycogen",
      "Starch",
      "Triglycerides",
      "Proteins"
    ],
    correctAnswer: 2,
    explanation: "Triglycerides (fats) are the primary long-term energy storage molecules in animals due to their high energy density."
  },
  {
    id: "easy-12",
    question: "Which amino acid carbon skeletons can enter the Krebs cycle as alpha-ketoglutarate?",
    options: [
      "Glutamate and glutamine",
      "Alanine and serine",
      "Leucine and isoleucine",
      "All amino acids"
    ],
    correctAnswer: 0,
    explanation: "Glutamate and glutamine are converted to alpha-ketoglutarate, which directly enters the Krebs cycle."
  },
  {
    id: "easy-13",
    question: "What is the final electron acceptor in aerobic respiration?",
    options: [
      "NAD+",
      "Oxygen",
      "Carbon dioxide",
      "Water"
    ],
    correctAnswer: 1,
    explanation: "Oxygen serves as the final electron acceptor in the electron transport chain, forming water."
  },
  {
    id: "easy-14",
    question: "Which vitamin is essential for the conversion of pyruvate to acetyl-CoA?",
    options: [
      "Vitamin B1 (Thiamine)",
      "Vitamin C",
      "Vitamin D",
      "Vitamin K"
    ],
    correctAnswer: 0,
    explanation: "Thiamine (as TPP) is a cofactor for the pyruvate dehydrogenase complex that converts pyruvate to acetyl-CoA."
  },
  {
    id: "easy-15",
    question: "What happens to excess amino acids that cannot be stored?",
    options: [
      "They are stored as fat",
      "They are converted to glucose or ketone bodies",
      "They are excreted unchanged",
      "They are converted to nucleic acids"
    ],
    correctAnswer: 1,
    explanation: "Excess amino acids are deaminated and their carbon skeletons are converted to glucose (gluconeogenesis) or ketone bodies."
  },
  {
    id: "easy-16",
    question: "Which energy yield is higher per gram: fats or carbohydrates?",
    options: [
      "Carbohydrates",
      "Fats",
      "Proteins",
      "They are equal"
    ],
    correctAnswer: 1,
    explanation: "Fats provide approximately 9 kcal/gram, while carbohydrates provide about 4 kcal/gram, making fats more energy-dense."
  },
  {
    id: "easy-17",
    question: "Where does the Krebs cycle take place?",
    options: [
      "Cytoplasm",
      "Mitochondrial matrix",
      "Inner mitochondrial membrane",
      "Nucleus"
    ],
    correctAnswer: 1,
    explanation: "The Krebs cycle occurs in the mitochondrial matrix of eukaryotic cells."
  },
  {
    id: "easy-18",
    question: "Which molecule is produced from the breakdown of fatty acids and enters the Krebs cycle?",
    options: [
      "Pyruvate",
      "Acetyl-CoA",
      "Glucose",
      "Amino acids"
    ],
    correctAnswer: 1,
    explanation: "Beta-oxidation of fatty acids produces acetyl-CoA, which directly enters the Krebs cycle."
  },
  {
    id: "easy-19",
    question: "What is the primary function of the electron transport chain?",
    options: [
      "To produce ATP directly",
      "To create a proton gradient for ATP synthesis",
      "To break down glucose",
      "To synthesize proteins"
    ],
    correctAnswer: 1,
    explanation: "The electron transport chain creates a proton gradient across the inner mitochondrial membrane, which drives ATP synthesis."
  },
  {
    id: "easy-20",
    question: "Which process describes the conversion of non-carbohydrate precursors to glucose?",
    options: [
      "Glycolysis",
      "Gluconeogenesis",
      "Glycogenesis",
      "Beta-oxidation"
    ],
    correctAnswer: 1,
    explanation: "Gluconeogenesis is the process of generating glucose from non-carbohydrate sources, including amino acids and glycerol from fats."
  },
  {
    id: "easy-21",
    question: "What is the role of oxygen in cellular respiration?",
    options: [
      "To provide carbon for CO2 production",
      "To serve as the final electron acceptor",
      "To break down glucose directly",
      "To activate enzymes in glycolysis"
    ],
    correctAnswer: 1,
    explanation: "Oxygen acts as the final electron acceptor in the electron transport chain, allowing continuous ATP production."
  },
  {
    id: "easy-22",
    question: "Which part of a triglyceride molecule can be converted to glucose?",
    options: [
      "Fatty acids",
      "Glycerol",
      "Both fatty acids and glycerol",
      "Neither"
    ],
    correctAnswer: 1,
    explanation: "The glycerol backbone of triglycerides can be converted to glucose via gluconeogenesis, but fatty acids cannot."
  },
  {
    id: "easy-23",
    question: "What is the net production of ATP in glycolysis from one glucose molecule?",
    options: [
      "1 ATP",
      "2 ATP",
      "4 ATP",
      "8 ATP"
    ],
    correctAnswer: 1,
    explanation: "Glycolysis produces a net gain of 2 ATP molecules per glucose molecule, along with 2 NADH."
  },
  {
    id: "easy-24",
    question: "Which amino acids are considered ketogenic?",
    options: [
      "Those that can be converted to ketone bodies",
      "Those that can be converted to glucose",
      "All amino acids",
      "Only essential amino acids"
    ],
    correctAnswer: 0,
    explanation: "Ketogenic amino acids are those whose carbon skeletons can be converted to ketone bodies, not glucose."
  },
  {
    id: "easy-25",
    question: "Where is the electron transport chain located?",
    options: [
      "Mitochondrial matrix",
      "Cytoplasm",
      "Inner mitochondrial membrane",
      "Outer mitochondrial membrane"
    ],
    correctAnswer: 2,
    explanation: "The electron transport chain is embedded in the inner mitochondrial membrane."
  },
  {
    id: "easy-26",
    question: "What is the primary energy currency of the cell?",
    options: [
      "Glucose",
      "NADH",
      "ATP",
      "FADH2"
    ],
    correctAnswer: 2,
    explanation: "ATP (adenosine triphosphate) is the primary energy currency used for cellular work."
  },
  {
    id: "easy-27",
    question: "Which process occurs in the cytoplasm?",
    options: [
      "Krebs cycle",
      "Electron transport chain",
      "Glycolysis",
      "Beta-oxidation"
    ],
    correctAnswer: 2,
    explanation: "Glycolysis occurs in the cytoplasm, while the other processes occur in the mitochondria."
  },
  {
    id: "easy-28",
    question: "What is the main product of the Krebs cycle that drives ATP production?",
    options: [
      "ATP",
      "NADH and FADH2",
      "Glucose",
      "Pyruvate"
    ],
    correctAnswer: 1,
    explanation: "The Krebs cycle produces reduced coenzymes (NADH and FADH2) that donate electrons to the electron transport chain for ATP production."
  },
  {
    id: "easy-29",
    question: "Which vitamin derivative serves as an electron carrier in the electron transport chain?",
    options: [
      "Vitamin B2 (Riboflavin)",
      "Vitamin B1 (Thiamine)",
      "Vitamin C",
      "Vitamin D"
    ],
    correctAnswer: 0,
    explanation: "Riboflavin (Vitamin B2) is a component of FAD, which serves as an electron carrier in the electron transport chain."
  },
  {
    id: "easy-30",
    question: "What is the end product of anaerobic respiration in muscle cells?",
    options: [
      "Lactic acid",
      "Ethanol",
      "Pyruvate",
      "Acetyl-CoA"
    ],
    correctAnswer: 0,
    explanation: "In muscle cells under anaerobic conditions, pyruvate is reduced to lactic acid to regenerate NAD+ for continued glycolysis."
  },
  {
    id: "easy-31",
    question: "Which molecule is common to the metabolism of carbohydrates, fats, and proteins?",
    options: [
      "Glucose",
      "Pyruvate",
      "Acetyl-CoA",
      "Oxaloacetate"
    ],
    correctAnswer: 2,
    explanation: "Acetyl-CoA is the central converging point where breakdown products of all three macronutrients enter the Krebs cycle."
  },
  {
    id: "easy-32",
    question: "What is the primary source of energy during starvation?",
    options: [
      "Glycogen",
      "Proteins",
      "Fats",
      "Carbohydrates"
    ],
    correctAnswer: 2,
    explanation: "After glycogen stores are depleted, the body primarily uses fats for energy during starvation, with some protein breakdown."
  },
  {
    id: "easy-33",
    question: "Which organ is primarily responsible for converting ammonia to urea?",
    options: [
      "Kidneys",
      "Liver",
      "Pancreas",
      "Muscles"
    ],
    correctAnswer: 1,
    explanation: "The liver converts toxic ammonia to urea through the urea cycle, which is then excreted by the kidneys."
  },
  {
    id: "easy-34",
    question: "What is the role of NAD+ in cellular respiration?",
    options: [
      "Final electron acceptor",
      "Energy storage molecule",
      "Electron carrier",
      "ATP precursor"
    ],
    correctAnswer: 2,
    explanation: "NAD+ serves as an electron carrier, becoming reduced to NADH during various metabolic reactions."
  },
  {
    id: "easy-35",
    question: "Which process describes the synthesis of glucose from non-carbohydrate sources?",
    options: [
      "Glycolysis",
      "Gluconeogenesis",
      "Glycogenolysis",
      "Glycogenesis"
    ],
    correctAnswer: 1,
    explanation: "Gluconeogenesis is the metabolic pathway that generates glucose from non-carbohydrate carbon substrates."
  },
  {
    id: "easy-36",
    question: "What is the primary function of the Krebs cycle?",
    options: [
      "To produce ATP directly",
      "To generate reduced coenzymes and GTP",
      "To break down glucose to pyruvate",
      "To synthesize proteins"
    ],
    correctAnswer: 1,
    explanation: "The main function of the Krebs cycle is to produce reduced coenzymes (NADH, FADH2) and GTP for energy production."
  },
  {
    id: "easy-37",
    question: "Which amino acid can be converted to pyruvate?",
    options: [
      "Alanine",
      "Leucine",
      "Lysine",
      "Phenylalanine"
    ],
    correctAnswer: 0,
    explanation: "Alanine can be transaminated to pyruvate, making it glucogenic."
  },
  {
    id: "easy-38",
    question: "What is the net ATP production from one molecule of NADH in the electron transport chain?",
    options: [
      "1 ATP",
      "2.5 ATP",
      "3 ATP",
      "4 ATP"
    ],
    correctAnswer: 1,
    explanation: "Each NADH molecule produces approximately 2.5 ATP through oxidative phosphorylation."
  },
  {
    id: "easy-39",
    question: "Which process occurs in both aerobic and anaerobic respiration?",
    options: [
      "Krebs cycle",
      "Electron transport chain",
      "Glycolysis",
      "Beta-oxidation"
    ],
    correctAnswer: 2,
    explanation: "Glycolysis occurs in both aerobic and anaerobic conditions, while the other processes require oxygen."
  },
  {
    id: "easy-40",
    question: "What is the primary energy source for the brain under normal conditions?",
    options: [
      "Fatty acids",
      "Ketone bodies",
      "Glucose",
      "Amino acids"
    ],
    correctAnswer: 2,
    explanation: "The brain primarily uses glucose as its energy source under normal physiological conditions."
  },
  {
    id: "easy-41",
    question: "Which molecule is produced in the Krebs cycle and used in gluconeogenesis?",
    options: [
      "Acetyl-CoA",
      "Oxaloacetate",
      "Pyruvate",
      "Glucose"
    ],
    correctAnswer: 1,
    explanation: "Oxaloacetate is a Krebs cycle intermediate that can be used as a precursor for gluconeogenesis."
  },
  {
    id: "easy-42",
    question: "What is the role of FAD in cellular respiration?",
    options: [
      "Final electron acceptor",
      "Electron carrier",
      "Energy storage molecule",
      "ATP precursor"
    ],
    correctAnswer: 1,
    explanation: "FAD serves as an electron carrier, becoming reduced to FADH2 during metabolic reactions."
  },
  {
    id: "easy-43",
    question: "Which vitamin is a component of Coenzyme A?",
    options: [
      "Vitamin B1",
      "Vitamin B5",
      "Vitamin B6",
      "Vitamin B12"
    ],
    correctAnswer: 1,
    explanation: "Pantothenic acid (Vitamin B5) is a component of Coenzyme A, which is essential for acyl group transfer."
  },
  {
    id: "easy-44",
    question: "What is the primary function of oxidative phosphorylation?",
    options: [
      "To produce NADH",
      "To generate ATP using a proton gradient",
      "To break down glucose",
      "To synthesize proteins"
    ],
    correctAnswer: 1,
    explanation: "Oxidative phosphorylation generates ATP using the proton gradient created by the electron transport chain."
  },
  {
    id: "easy-45",
    question: "Which amino acids can be converted to acetyl-CoA?",
    options: [
      "Leucine and lysine",
      "Alanine and serine",
      "Glutamate and aspartate",
      "All amino acids"
    ],
    correctAnswer: 0,
    explanation: "Leucine and lysine are ketogenic amino acids that can be converted directly to acetyl-CoA."
  },
  {
    id: "easy-46",
    question: "What is the main product of beta-oxidation?",
    options: [
      "Glucose",
      "Pyruvate",
      "Acetyl-CoA",
      "Amino acids"
    ],
    correctAnswer: 2,
    explanation: "Beta-oxidation of fatty acids produces acetyl-CoA molecules that enter the Krebs cycle."
  },
  {
    id: "easy-47",
    question: "Which process describes the breakdown of glycogen to glucose?",
    options: [
      "Glycogenesis",
      "Glycolysis",
      "Glycogenolysis",
      "Gluconeogenesis"
    ],
    correctAnswer: 2,
    explanation: "Glycogenolysis is the process of breaking down glycogen to glucose-1-phosphate."
  },
  {
    id: "easy-48",
    question: "What is the primary energy source during high-intensity exercise?",
    options: [
      "Fats",
      "Proteins",
      "Carbohydrates",
      "Ketone bodies"
    ],
    correctAnswer: 2,
    explanation: "Carbohydrates are the primary energy source during high-intensity exercise due to faster ATP production."
  },
  {
    id: "easy-49",
    question: "Which molecule serves as a link between glycolysis and the Krebs cycle?",
    options: [
      "Glucose",
      "Pyruvate",
      "Acetyl-CoA",
      "Oxaloacetate"
    ],
    correctAnswer: 2,
    explanation: "Acetyl-CoA serves as the link between glycolysis (via pyruvate) and the Krebs cycle."
  },
  {
    id: "easy-50",
    question: "What is the primary function of the urea cycle?",
    options: [
      "To produce energy",
      "To detoxify ammonia",
      "To synthesize proteins",
      "To break down fats"
    ],
    correctAnswer: 1,
    explanation: "The urea cycle converts toxic ammonia to urea for excretion, preventing ammonia accumulation."
  },
  {
    id: "easy-51",
    question: "Which vitamin is essential for amino acid metabolism?",
    options: [
      "Vitamin B1",
      "Vitamin B6",
      "Vitamin C",
      "Vitamin D"
    ],
    correctAnswer: 1,
    explanation: "Vitamin B6 (pyridoxine) is essential as a cofactor for transamination and other amino acid metabolism reactions."
  },
  {
    id: "easy-52",
    question: "What is the net ATP yield from one molecule of FADH2 in the electron transport chain?",
    options: [
      "1 ATP",
      "1.5 ATP",
      "2 ATP",
      "2.5 ATP"
    ],
    correctAnswer: 1,
    explanation: "Each FADH2 molecule produces approximately 1.5 ATP through oxidative phosphorylation."
  },
  {
    id: "easy-53",
    question: "Which process describes the synthesis of ketone bodies?",
    options: [
      "Ketogenesis",
      "Ketolysis",
      "Beta-oxidation",
      "Gluconeogenesis"
    ],
    correctAnswer: 0,
    explanation: "Ketogenesis is the process of synthesizing ketone bodies from acetyl-CoA, primarily in the liver."
  },
  {
    id: "easy-54",
    question: "What is the primary energy source during prolonged fasting?",
    options: [
      "Glycogen",
      "Proteins",
      "Fats",
      "Carbohydrates"
    ],
    correctAnswer: 2,
    explanation: "During prolonged fasting, fats become the primary energy source through beta-oxidation and ketone body production."
  },
  {
    id: "easy-55",
    question: "Which amino acid can be converted to oxaloacetate?",
    options: [
      "Aspartate",
      "Leucine",
      "Valine",
      "Methionine"
    ],
    correctAnswer: 0,
    explanation: "Aspartate can be converted to oxaloacetate, a Krebs cycle intermediate."
  },
  {
    id: "easy-56",
    question: "What is the role of ATP synthase in cellular respiration?",
    options: [
      "To break down ATP",
      "To synthesize ATP using a proton gradient",
      "To transport electrons",
      "To break down glucose"
    ],
    correctAnswer: 1,
    explanation: "ATP synthase uses the proton gradient across the inner mitochondrial membrane to synthesize ATP from ADP and Pi."
  },
  {
    id: "easy-57",
    question: "Which process describes the breakdown of proteins to amino acids?",
    options: [
      "Proteolysis",
      "Deamination",
      "Transamination",
      "Beta-oxidation"
    ],
    correctAnswer: 0,
    explanation: "Proteolysis is the breakdown of proteins into individual amino acids."
  },
  {
    id: "easy-58",
    question: "What is the primary energy source for the heart muscle?",
    options: [
      "Glucose",
      "Fatty acids",
      "Amino acids",
      "Ketone bodies"
    ],
    correctAnswer: 1,
    explanation: "Heart muscle primarily uses fatty acids as its energy source due to their high energy yield."
  },
  {
    id: "easy-59",
    question: "Which molecule is the starting point of the Krebs cycle?",
    options: [
      "Acetyl-CoA",
      "Pyruvate",
      "Glucose",
      "Oxaloacetate"
    ],
    correctAnswer: 3,
    explanation: "Oxaloacetate combines with acetyl-CoA to form citrate, initiating the Krebs cycle."
  },
  {
    id: "easy-60",
    question: "What is the primary function of deamination in protein metabolism?",
    options: [
      "To produce energy directly",
      "To remove amino groups for excretion",
      "To synthesize new proteins",
      "To create ketone bodies"
    ],
    correctAnswer: 1,
    explanation: "Deamination removes amino groups from amino acids, allowing the carbon skeletons to be used for energy while the nitrogen is excreted."
  },
  {
    id: "easy-61",
    question: "Which vitamin is essential for the conversion of succinyl-CoA to succinate in the Krebs cycle?",
    options: [
      "Vitamin B1",
      "Vitamin B2",
      "Vitamin B3",
      "Vitamin B5"
    ],
    correctAnswer: 2,
    explanation: "Vitamin B3 (niacin) is a component of NAD+, which is required for the conversion of succinyl-CoA to succinate."
  },
  {
    id: "easy-62",
    question: "What is the primary energy source during low-intensity exercise?",
    options: [
      "Carbohydrates",
      "Fats",
      "Proteins",
      "Ketone bodies"
    ],
    correctAnswer: 1,
    explanation: "During low-intensity exercise, fats are the primary energy source due to their high energy yield and abundant storage."
  },
  {
    id: "easy-63",
    question: "Which process describes the synthesis of proteins from amino acids?",
    options: [
      "Proteolysis",
      "Translation",
      "Transcription",
      "Deamination"
    ],
    correctAnswer: 1,
    explanation: "Translation is the process of synthesizing proteins from amino acids using mRNA templates."
  },
  {
    id: "easy-64",
    question: "What is the primary function of the Cori cycle?",
    options: [
      "To recycle lactate to glucose",
      "To break down fats",
      "To synthesize proteins",
      "To produce ketone bodies"
    ],
    correctAnswer: 0,
    explanation: "The Cori cycle converts lactate produced in muscles back to glucose in the liver during anaerobic conditions."
  },
  {
    id: "easy-65",
    question: "Which amino acid can be converted to glucose through gluconeogenesis?",
    options: [
      "Alanine",
      "Leucine",
      "Lysine",
      "All amino acids"
    ],
    correctAnswer: 0,
    explanation: "Alanine is a glucogenic amino acid that can be converted to glucose via gluconeogenesis."
  },
  {
    id: "easy-66",
    question: "What is the primary energy source for red blood cells?",
    options: [
      "Fatty acids",
      "Amino acids",
      "Glucose",
      "Ketone bodies"
    ],
    correctAnswer: 2,
    explanation: "Red blood cells rely exclusively on glucose for energy because they lack mitochondria."
  },
  {
    id: "easy-67",
    question: "Which process describes the breakdown of glucose to pyruvate?",
    options: [
      "Glycolysis",
      "Gluconeogenesis",
      "Glycogenolysis",
      "Beta-oxidation"
    ],
    correctAnswer: 0,
    explanation: "Glycolysis is the metabolic pathway that breaks down glucose to pyruvate."
  },
  {
    id: "easy-68",
    question: "What is the primary function of transamination in amino acid metabolism?",
    options: [
      "To remove amino groups",
      "To transfer amino groups between molecules",
      "To synthesize proteins",
      "To break down proteins"
    ],
    correctAnswer: 1,
    explanation: "Transamination transfers amino groups between amino acids and keto acids, allowing for amino acid synthesis and degradation."
  },
  {
    id: "easy-69",
    question: "Which molecule is produced in muscle cells during intense exercise?",
    options: [
      "Lactate",
      "Ethanol",
      "Acetyl-CoA",
      "Ketone bodies"
    ],
    correctAnswer: 0,
    explanation: "During intense exercise, muscle cells produce lactate through anaerobic glycolysis when oxygen is limited."
  },
  {
    id: "easy-70",
    question: "What is the primary energy source for the brain during prolonged starvation?",
    options: [
      "Glucose",
      "Fatty acids",
      "Ketone bodies",
      "Amino acids"
    ],
    correctAnswer: 2,
    explanation: "During prolonged starvation, the brain adapts to use ketone bodies as an alternative energy source."
  },
  {
    id: "easy-71",
    question: "Which process describes the synthesis of glycogen from glucose?",
    options: [
      "Glycolysis",
      "Gluconeogenesis",
      "Glycogenolysis",
      "Glycogenesis"
    ],
    correctAnswer: 3,
    explanation: "Glycogenesis is the process of synthesizing glycogen from glucose for storage."
  },
  {
    id: "easy-72",
    question: "What is the primary function of the electron transport chain?",
    options: [
      "To produce ATP directly",
      "To create a proton gradient",
      "To break down glucose",
      "To synthesize proteins"
    ],
    correctAnswer: 1,
    explanation: "The electron transport chain creates a proton gradient across the inner mitochondrial membrane that drives ATP synthesis."
  },
  {
    id: "easy-73",
    question: "Which vitamin is essential for carbohydrate metabolism?",
    options: [
      "Vitamin B1",
      "Vitamin B12",
      "Vitamin C",
      "Vitamin D"
    ],
    correctAnswer: 0,
    explanation: "Vitamin B1 (thiamine) is essential as a cofactor for enzymes in carbohydrate metabolism, including pyruvate dehydrogenase."
  },
  {
    id: "easy-74",
    question: "What is the primary energy source during the absorptive state (after eating)?",
    options: [
      "Fats",
      "Proteins",
      "Carbohydrates",
      "Ketone bodies"
    ],
    correctAnswer: 2,
    explanation: "During the absorptive state, carbohydrates from recently consumed food are the primary energy source."
  },
  {
    id: "easy-75",
    question: "Which amino acid can be converted to succinyl-CoA?",
    options: [
      "Methionine",
      "Alanine",
      "Glutamate",
      "Aspartate"
    ],
    correctAnswer: 0,
    explanation: "Methionine can be converted to succinyl-CoA, a Krebs cycle intermediate."
  },
  {
    id: "easy-76",
    question: "What is the primary function of the Krebs cycle?",
    options: [
      "To produce ATP directly",
      "To generate reduced coenzymes",
      "To break down glucose",
      "To synthesize proteins"
    ],
    correctAnswer: 1,
    explanation: "The Krebs cycle generates reduced coenzymes (NADH, FADH2) that are used in the electron transport chain to produce ATP."
  },
  {
    id: "easy-77",
    question: "Which process describes the breakdown of fats to fatty acids and glycerol?",
    options: [
      "Lipogenesis",
      "Lipolysis",
      "Beta-oxidation",
      "Ketogenesis"
    ],
    correctAnswer: 1,
    explanation: "Lipolysis is the breakdown of triglycerides into fatty acids and glycerol."
  },
  {
    id: "easy-78",
    question: "What is the primary energy source for neurons under normal conditions?",
    options: [
      "Fatty acids",
      "Ketone bodies",
      "Glucose",
      "Amino acids"
    ],
    correctAnswer: 2,
    explanation: "Neurons primarily use glucose as their energy source under normal physiological conditions."
  },
  {
    id: "easy-79",
    question: "Which molecule is the end product of anaerobic respiration in yeast?",
    options: [
      "Lactate",
      "Ethanol",
      "Pyruvate",
      "Acetyl-CoA"
    ],
    correctAnswer: 1,
    explanation: "In yeast, anaerobic respiration produces ethanol and CO2 as end products through alcoholic fermentation."
  },
  {
    id: "easy-80",
    question: "What is the primary function of beta-oxidation?",
    options: [
      "To synthesize fatty acids",
      "To break down fatty acids to acetyl-CoA",
      "To produce glucose",
      "To synthesize proteins"
    ],
    correctAnswer: 1,
    explanation: "Beta-oxidation breaks down fatty acids into acetyl-CoA molecules that enter the Krebs cycle for energy production."
  },
  {
    id: "easy-81",
    question: "Which vitamin is essential for fat metabolism?",
    options: [
      "Vitamin B1",
      "Vitamin B2",
      "Vitamin B3",
      "Vitamin B5"
    ],
    correctAnswer: 3,
    explanation: "Vitamin B5 (pantothenic acid) is a component of Coenzyme A, which is essential for fatty acid metabolism."
  },
  {
    id: "easy-82",
    question: "What is the primary energy source during the postabsorptive state (fasting)?",
    options: [
      "Carbohydrates",
      "Fats",
      "Proteins",
      "Ketone bodies"
    ],
    correctAnswer: 1,
    explanation: "During the postabsorptive state, fats become the primary energy source as glycogen stores are depleted."
  },
  {
    id: "easy-83",
    question: "Which amino acid can be converted to acetyl-CoA?",
    options: [
      "Leucine",
      "Alanine",
      "Aspartate",
      "Glutamate"
    ],
    correctAnswer: 0,
    explanation: "Leucine is a ketogenic amino acid that can be converted directly to acetyl-CoA."
  },
  {
    id: "easy-84",
    question: "What is the primary function of gluconeogenesis?",
    options: [
      "To break down glucose",
      "To synthesize glucose from non-carbohydrate sources",
      "To store glucose as glycogen",
      "To break down glycogen"
    ],
    correctAnswer: 1,
    explanation: "Gluconeogenesis synthesizes glucose from non-carbohydrate precursors to maintain blood glucose levels."
  },
  {
    id: "easy-85",
    question: "Which process describes the synthesis of fatty acids from acetyl-CoA?",
    options: [
      "Beta-oxidation",
      "Lipogenesis",
      "Lipolysis",
      "Ketogenesis"
    ],
    correctAnswer: 1,
    explanation: "Lipogenesis is the synthesis of fatty acids from acetyl-CoA, primarily occurring in the liver and adipose tissue."
  },
  {
    id: "easy-86",
    question: "What is the primary energy source for cardiac muscle?",
    options: [
      "Glucose",
      "Fatty acids",
      "Amino acids",
      "Ketone bodies"
    ],
    correctAnswer: 1,
    explanation: "Cardiac muscle primarily uses fatty acids as its energy source due to their high energy yield."
  },
  {
    id: "easy-87",
    question: "Which molecule is the final product of the electron transport chain?",
    options: [
      "ATP",
      "Water",
      "Oxygen",
      "Carbon dioxide"
    ],
    correctAnswer: 1,
    explanation: "Water is formed when oxygen accepts electrons and combines with protons at the end of the electron transport chain."
  },
  {
    id: "easy-88",
    question: "What is the primary function of the urea cycle?",
    options: [
      "To produce energy",
      "To detoxify ammonia",
      "To synthesize proteins",
      "To break down fats"
    ],
    correctAnswer: 1,
    explanation: "The urea cycle converts toxic ammonia to urea for safe excretion by the kidneys."
  },
  {
    id: "easy-89",
    question: "Which vitamin is essential for protein metabolism?",
    options: [
      "Vitamin B6",
      "Vitamin B12",
      "Vitamin C",
      "Vitamin D"
    ],
    correctAnswer: 0,
    explanation: "Vitamin B6 (pyridoxine) is essential as a cofactor for transamination and other amino acid metabolism reactions."
  },
  
  {
    id: "easy-90",
    question: "What is the primary energy source during short-term fasting?",
    options: [
      "Glycogen",
      "Fats",
      "Proteins",
      "Ketone bodies"
    ],
    correctAnswer: 0,
    explanation: "During short-term fasting, glycogen stores are broken down to maintain blood glucose levels."
  },
  {
    id: "easy-91",
    question: "Which amino acid can be converted to pyruvate?",
    options: [
      "Alanine",
      "Leucine",
      "Lysine",
      "All amino acids"
    ],
    correctAnswer: 0,
    explanation: "Alanine can be transaminated to pyruvate, making it glucogenic."
  },
  {
    id: "easy-92",
    question: "What is the primary function of the Krebs cycle?",
    options: [
      "To produce ATP directly",
      "To generate reduced coenzymes",
      "To break down glucose",
      "To synthesize proteins"
    ],
    correctAnswer: 1,
    explanation: "The Krebs cycle generates reduced coenzymes (NADH, FADH2) that are used in oxidative phosphorylation to produce ATP."
  },
  {
    id: "easy-93",
    question: "Which process describes the breakdown of proteins to amino acids?",
    options: [
      "Proteolysis",
      "Deamination",
      "Transamination",
      "Beta-oxidation"
    ],
    correctAnswer: 0,
    explanation: "Proteolysis is the enzymatic breakdown of proteins into amino acids."
  },
  {
    id: "easy-94",
    question: "What is the primary energy source for the liver?",
    options: [
      "Glucose",
      "Fatty acids",
      "Amino acids",
      "Ketone bodies"
    ],
    correctAnswer: 1,
    explanation: "The liver primarily uses fatty acids as its energy source, allowing it to spare glucose for other tissues."
  },
  {
    id: "easy-95",
    question: "Which molecule serves as the link between protein metabolism and the Krebs cycle?",
    options: [
      "Acetyl-CoA",
      "Pyruvate",
      "Various keto acids",
      "All of the above"
    ],
    correctAnswer: 3,
    explanation: "Amino acids are converted to various intermediates that enter cellular respiration at different points, including pyruvate, acetyl-CoA, and Krebs cycle intermediates."
  },
  {
    id: "easy-96",
    question: "What is the primary function of oxidative phosphorylation?",
    options: [
      "To produce NADH",
      "To generate ATP using a proton gradient",
      "To break down glucose",
      "To synthesize proteins"
    ],
    correctAnswer: 1,
    explanation: "Oxidative phosphorylation generates ATP using the proton gradient created by the electron transport chain."
  },
  {
    id: "easy-97",
    question: "Which vitamin is essential for the electron transport chain?",
    options: [
      "Vitamin B2",
      "Vitamin B6",
      "Vitamin C",
      "Vitamin D"
    ],
    correctAnswer: 0,
    explanation: "Vitamin B2 (riboflavin) is a component of FAD, which serves as an electron carrier in the electron transport chain."
  },
  {
    id: "easy-98",
    question: "What is the primary energy source during prolonged exercise?",
    options: [
      "Carbohydrates",
      "Fats",
      "Proteins",
      "Ketone bodies"
    ],
    correctAnswer: 1,
    explanation: "During prolonged exercise, fats become the primary energy source as glycogen stores are depleted."
  },
  {
    id: "easy-99",
    question: "Which amino acid can be converted to oxaloacetate?",
    options: [
      "Aspartate",
      "Leucine",
      "Valine",
      "Methionine"
    ],
    correctAnswer: 0,
    explanation: "Aspartate can be converted to oxaloacetate, a Krebs cycle intermediate."
  },
  {
    id: "easy-100",
    question: "What is the primary function of the Cori cycle?",
    options: [
      "To recycle lactate to glucose",
      "To break down fats",
      "To synthesize proteins",
      "To produce ketone bodies"
    ],
    correctAnswer: 0,
    explanation: "The Cori cycle converts lactate produced in muscles during anaerobic exercise back to glucose in the liver."
  },

  {
    id: "easy-101",
    question: "Which intermediate allows proteins to enter the Krebs cycle at multiple points unlike glucose?",
    options: [
      "Acetyl-CoA only",
      "Pyruvate only", 
      "Various keto acids",
      "Only through glucose conversion"
    ],
    correctAnswer: 2,
    explanation: "Proteins can enter through multiple intermediates like pyruvate, acetyl-CoA, α-ketoglutarate, succinyl-CoA, fumarate, and oxaloacetate."
  },
  {
    id: "easy-102",
    question: "What is the primary reason fats yield more ATP per carbon than carbohydrates?",
    options: [
      "They contain more oxygen atoms",
      "Fatty acids are more reduced molecules",
      "They require less energy for activation",
      "They bypass glycolysis entirely"
    ],
    correctAnswer: 1,
    explanation: "Fatty acids are more reduced (have more hydrogens) and thus yield more NADH and FADH₂ when oxidized."
  },
  {
    id: "easy-103",
    question: "Which enzyme complex is required for both glucose and some amino acid entry into the Krebs cycle?",
    options: [
      "Pyruvate dehydrogenase complex",
      "Isocitrate dehydrogenase",
      "Succinate dehydrogenase", 
      "Malate dehydrogenase"
    ],
    correctAnswer: 0,
    explanation: "The pyruvate dehydrogenase complex converts both pyruvate (from glucose) and some amino acids to acetyl-CoA."
  },
  {
    id: "easy-104",
    question: "Why can't fatty acids be converted to glucose in humans?",
    options: [
      "They are too large molecules",
      "The reaction is energetically unfavorable",
      "Acetyl-CoA cannot be converted to pyruvate",
      "They are immediately used for energy"
    ],
    correctAnswer: 2,
    explanation: "The pyruvate dehydrogenase reaction is irreversible, so acetyl-CoA cannot be converted back to pyruvate for gluconeogenesis."
  },
  {
    id: "easy-105",
    question: "Which vitamin deficiency would affect the metabolism of all three macronutrients?",
    options: [
      "Vitamin B1 (Thiamine)",
      "Vitamin C",
      "Vitamin D", 
      "Vitamin K"
    ],
    correctAnswer: 0,
    explanation: "Thiamine is a cofactor for pyruvate dehydrogenase and α-ketoglutarate dehydrogenase, affecting glucose, protein, and fat metabolism."
  },
  {
    id: "easy-106",
    question: "What is the significance of glycerol in fat metabolism?",
    options: [
      "It enters glycolysis as DHAP",
      "It directly enters the Krebs cycle",
      "It is converted to acetyl-CoA",
      "It is excreted as waste"
    ],
    correctAnswer: 0,
    explanation: "Glycerol is converted to glyceraldehyde-3-phosphate, which can enter glycolysis or gluconeogenesis."
  },
  {
    id: "easy-107",
    question: "Which organ has the greatest metabolic flexibility in using different fuels?",
    options: [
      "Brain",
      "Liver",
      "Heart",
      "Red blood cells"
    ],
    correctAnswer: 1,
    explanation: "The liver can utilize all three macronutrients and interconvert them based on bodily needs."
  },
  {
    id: "easy-108",
    question: "What is the common product of complete oxidation of all three macronutrients?",
    options: [
      "Glucose",
      "ATP",
      "Pyruvate",
      "Lactate"
    ],
    correctAnswer: 1,
    explanation: "All three macronutrients are ultimately oxidized to produce ATP through cellular respiration."
  },
  {
    id: "easy-109",
    question: "Which metabolic pathway is unique to amino acid catabolism?",
    options: [
      "Deamination",
      "Beta-oxidation",
      "Glycolysis",
      "Krebs cycle"
    ],
    correctAnswer: 0,
    explanation: "Deamination is specific to amino acid metabolism, removing nitrogen before carbon skeletons enter energy pathways."
  },
  {
    id: "easy-110",
    question: "Why are ketone bodies produced during prolonged starvation?",
    options: [
      "To provide water-soluble fuel for the brain",
      "To store excess acetyl-CoA",
      "To eliminate nitrogen waste",
      "To stimulate insulin secretion"
    ],
    correctAnswer: 0,
    explanation: "Ketone bodies are water-soluble molecules that can cross the blood-brain barrier and serve as alternative fuel when glucose is scarce."
  },
  {
    id: "easy-111",
    question: "Which amino acids are both glucogenic and ketogenic?",
    options: [
      "Isoleucine, phenylalanine, tyrosine, threonine",
      "Leucine and lysine only",
      "All essential amino acids",
      "Only non-essential amino acids"
    ],
    correctAnswer: 0,
    explanation: "These four amino acids have carbon skeletons that can be used for both glucose synthesis and ketone body formation."
  },
  {
    id: "easy-112",
    question: "What is the role of carnitine in fat metabolism?",
    options: [
      "It activates fatty acids for beta-oxidation",
      "It transports fatty acids into mitochondria",
      "It converts fatty acids to acetyl-CoA",
      "It regulates lipolysis"
    ],
    correctAnswer: 1,
    explanation: "Carnitine serves as a carrier molecule transporting long-chain fatty acids across the mitochondrial membrane."
  },
  {
    id: "easy-113",
    question: "Which energy calculation is similar for both glucose and palmitic acid?",
    options: [
      "ATP yield per carbon atom",
      "NADH production in Krebs cycle",
      "Activation energy requirement",
      "Oxygen consumption per ATP produced"
    ],
    correctAnswer: 1,
    explanation: "Both glucose and fatty acid-derived acetyl-CoA produce identical amounts of NADH, FADH₂, and GTP per turn of the Krebs cycle."
  },
  {
    id: "easy-114",
    question: "What happens to the carbon skeletons of glucogenic amino acids?",
    options: [
      "They are converted to glucose",
      "They form ketone bodies",
      "They are excreted as urea",
      "They are stored as fat"
    ],
    correctAnswer: 0,
    explanation: "Glucogenic amino acids have carbon skeletons that can be converted to pyruvate or Krebs cycle intermediates for gluconeogenesis."
  },
  {
    id: "easy-115",
    question: "Which metabolic state primarily uses proteins for energy?",
    options: [
      "Early fasting (first 24 hours)",
      "Prolonged starvation (after 3 days)",
      "After carbohydrate-rich meal",
      "During intense exercise"
    ],
    correctAnswer: 1,
    explanation: "In prolonged starvation, proteins become a significant energy source after glycogen and fat stores are depleted."
  },
  {
    id: "easy-116",
    question: "What is the common regulatory point between glucose and fat metabolism?",
    options: [
      "Acetyl-CoA carboxylase",
      "Pyruvate dehydrogenase complex",
      "Hormone-sensitive lipase",
      "All of the above"
    ],
    correctAnswer: 3,
    explanation: "All these enzymes are regulated by insulin/glucagon balance, coordinating glucose and fat metabolism."
  },
  {
    id: "easy-117",
    question: "Which vitamin is crucial for transferring methyl groups in amino acid metabolism?",
    options: [
      "Folic acid",
      "Vitamin B12",
      "Both A and B",
      "Vitamin B6"
    ],
    correctAnswer: 2,
    explanation: "Both folic acid and vitamin B12 are essential for one-carbon metabolism and methyl group transfers in amino acid catabolism."
  },
  {
    id: "easy-118",
    question: "Why does fat oxidation require more oxygen than carbohydrate oxidation?",
    options: [
      "Fats have more carbon-hydrogen bonds to oxidize",
      "Fats are larger molecules",
      "Beta-oxidation consumes extra oxygen",
      "Fats produce more CO2"
    ],
    correctAnswer: 0,
    explanation: "Fats have more reduced carbon atoms (more C-H bonds), requiring more oxygen for complete oxidation to CO₂ and H₂O."
  },
  {
    id: "easy-119",
    question: "Which organ can use the widest variety of fuel molecules?",
    options: [
      "Brain",
      "Liver",
      "Muscle",
      "Heart"
    ],
    correctAnswer: 1,
    explanation: "The liver can utilize glucose, fatty acids, amino acids, lactate, glycerol, and ketone bodies for energy production."
  },
  {
    id: "easy-120",
    question: "What is the respiratory quotient (RQ) for fat metabolism?",
    options: [
      "0.7",
      "1.0",
      "0.85",
      "0.95"
    ],
    correctAnswer: 0,
    explanation: "The RQ for fat is approximately 0.7 because fat oxidation consumes more oxygen per CO₂ produced compared to carbohydrates."
  },
  {
    id: "easy-121",
    question: "Which amino acid provides the fastest connection to the Krebs cycle?",
    options: [
      "Glutamate → α-ketoglutarate",
      "Aspartate → oxaloacetate",
      "Alanine → pyruvate",
      "All are equally fast"
    ],
    correctAnswer: 0,
    explanation: "Glutamate can be rapidly converted to α-ketoglutarate through a single transamination step."
  },
  {
    id: "easy-122",
    question: "What is the effect of insulin on fat and protein metabolism?",
    options: [
      "Stimulates both fat storage and protein synthesis",
      "Stimulates fat breakdown and protein degradation",
      "Inhibits both fat storage and protein synthesis",
      "Has no effect on protein metabolism"
    ],
    correctAnswer: 0,
    explanation: "Insulin promotes anabolic processes: fat storage in adipose tissue and protein synthesis in muscles."
  },
  {
    id: "easy-123",
    question: "Which energy-yielding pathway is common to all three macronutrients during complete oxidation?",
    options: [
      "Glycolysis",
      "Krebs cycle and electron transport chain",
      "Beta-oxidation",
      "Gluconeogenesis"
    ],
    correctAnswer: 1,
    explanation: "All macronutrients eventually feed into the Krebs cycle and electron transport chain for complete oxidation and ATP production."
  },
  {
    id: "easy-124",
    question: "Why is protein not the preferred energy source?",
    options: [
      "Proteins have structural and functional roles",
      "Nitrogen excretion is energetically costly",
      "Amino acid oxidation produces toxic intermediates",
      "All of the above"
    ],
    correctAnswer: 3,
    explanation: "Proteins have important functions, nitrogen disposal requires energy, and some amino acid metabolites can be toxic."
  },
  {
    id: "easy-125",
    question: "Which measurement can distinguish between carbohydrate and fat oxidation?",
    options: [
      "Respiratory quotient (RQ)",
      "Blood glucose level",
      "Heart rate",
      "Body temperature"
    ],
    correctAnswer: 0,
    explanation: "RQ is 1.0 for carbohydrate oxidation and 0.7 for fat oxidation, making it a good indicator of metabolic fuel use."
  },
  {
    id: "easy-126",
    question: "How does the cell prevent simultaneous fat synthesis and oxidation?",
    options: [
      "Compartmentalization in different organelles",
      "Allosteric regulation of key enzymes",
      "Hormonal control of metabolic pathways",
      "All of the above"
    ],
    correctAnswer: 3,
    explanation: "Cells use multiple strategies including compartmentalization, allosteric regulation, and hormonal control to prevent futile cycles."
  },
  {
    id: "easy-127",
    question: "What is the significance of the glucose-alanine cycle?",
    options: [
      "It transfers nitrogen from muscles to liver",
      "It provides energy for muscle contraction",
      "It stores glucose as glycogen",
      "It converts protein to fat"
    ],
    correctAnswer: 0,
    explanation: "The glucose-alanine cycle allows muscles to export nitrogen to the liver while providing carbons for gluconeogenesis."
  },
  {
    id: "easy-128",
    question: "Which metabolic adaptation occurs during prolonged starvation to spare protein?",
    options: [
      "Increased ketone body production",
      "Enhanced gluconeogenesis from amino acids",
      "Upregulation of proteolysis",
      "Activation of muscle protein synthesis"
    ],
    correctAnswer: 0,
    explanation: "Ketone bodies provide alternative fuel for the brain, reducing the need for gluconeogenesis from amino acids and thus sparing muscle protein."
  },
  {
    id: "easy-129",
    question: "How does leptin signaling integrate energy metabolism from all three macronutrients?",
    options: [
      "By regulating hypothalamic neuropeptides that control appetite",
      "By directly activating insulin secretion",
      "By inhibiting glucagon production",
      "By promoting fat oxidation in muscles"
    ],
    correctAnswer: 0,
    explanation: "Leptin acts on the hypothalamus to regulate neuropeptides that control food intake and energy expenditure, indirectly affecting metabolism of all fuels."
  },
  {
    id: "easy-130",
    question: "What is the role of AMPK in coordinating fuel selection?",
    options: [
      "Activates catabolic pathways during energy deficit",
      "Promotes fat storage during energy excess",
      "Stimulates protein synthesis after meals",
      "Inhibits glucose uptake during exercise"
    ],
    correctAnswer: 0,
    explanation: "AMPK is activated during energy depletion and stimulates glucose uptake, fatty acid oxidation, and mitochondrial biogenesis while inhibiting anabolic processes."
  },
  {
    id: "easy-131",
    question: "Why do different tissues have distinct fuel preferences?",
    options: [
      "Differences in enzyme expression and metabolic specialization",
      "Variations in blood supply and oxygen availability",
      "Tissue-specific hormone receptor expression",
      "All of the above"
    ],
    correctAnswer: 3,
    explanation: "Tissue fuel preferences result from differences in enzyme complements, vascularization, oxygen availability, and hormonal responsiveness."
  },
  {
    id: "easy-132",
    question: "How does the Randle cycle regulate fuel selection between glucose and fatty acids?",
    options: [
      "Fatty acids inhibit glucose oxidation",
      "Glucose inhibits fat oxidation",
      "They compete for mitochondrial entry",
      "All of the above"
    ],
    correctAnswer: 3,
    explanation: "The Randle cycle describes the reciprocal inhibition between glucose and fatty acid oxidation, regulating fuel selection based on availability."
  },
  {
    id: "easy-133",
    question: "What is the metabolic advantage of ketone bodies over fatty acids for brain energy?",
    options: [
      "They cross the blood-brain barrier more efficiently",
      "They yield more ATP per molecule",
      "They require less oxygen for oxidation",
      "They produce fewer reactive oxygen species"
    ],
    correctAnswer: 0,
    explanation: "Ketone bodies are water-soluble and cross the blood-brain barrier readily, unlike fatty acids which require special transport mechanisms."
  },
  {
    id: "easy-134",
    question: "How does insulin resistance alter fuel selection among macronutrients?",
    options: [
      "Increases reliance on fat oxidation",
      "Decreases glucose utilization",
      "Promotes protein catabolism",
      "All of the above"
    ],
    correctAnswer: 3,
    explanation: "Insulin resistance impairs glucose uptake and utilization, leading to increased fat oxidation and potentially increased protein breakdown for gluconeogenesis."
  },
  {
    id: "easy-135",
    question: "What is the significance of the citrate shuttle in integrating metabolism?",
    options: [
      "It transports acetyl-CoA equivalents to cytoplasm for fat synthesis",
      "It regulates Krebs cycle flux",
      "It connects mitochondrial and cytosolic NADH/NAD+ ratios",
      "All of the above"
    ],
    correctAnswer: 3,
    explanation: "The citrate shuttle has multiple functions: providing acetyl-CoA for lipogenesis, regulating Krebs cycle activity, and transferring reducing equivalents."
  },
  {
    id: "easy-136",
    question: "How do fasting and feeding cycles coordinate the metabolism of all three macronutrients?",
    options: [
      "Insulin dominates fed state promoting storage",
      "Glucagon dominates fasted state promoting mobilization",
      "They create reciprocal regulation of anabolic/catabolic pathways",
      "All of the above"
    ],
    correctAnswer: 3,
    explanation: "Feeding-fasting cycles create rhythmic hormonal changes that coordinate the storage and mobilization of all energy substrates."
  },
  {
    id: "easy-137",
    question: "What is the role of PPARs in regulating macronutrient metabolism?",
    options: [
      "They are nuclear receptors that regulate gene expression for metabolic enzymes",
      "They directly activate insulin secretion",
      "They inhibit glucagon production",
      "They promote protein degradation"
    ],
    correctAnswer: 0,
    explanation: "PPARs (Peroxisome Proliferator-Activated Receptors) are transcription factors that regulate genes involved in fatty acid oxidation, glucose utilization, and lipid metabolism."
  },
  {
    id: "easy-138",
    question: "How does the energy yield from amino acids compare to carbohydrates?",
    options: [
      "Similar ATP yield per carbon atom after deamination",
      "Lower due to nitrogen excretion energy cost",
      "Higher because of additional metabolic pathways",
      "Variable depending on the amino acid"
    ],
    correctAnswer: 1,
    explanation: "Amino acid oxidation yields slightly less net energy than carbohydrates due to the energy cost of nitrogen excretion as urea."
  },
  {
    id: "easy-139",
    question: "What is the metabolic advantage of using different fuels during different intensities of exercise?",
    options: [
      "High intensity: carbohydrates for rapid ATP production",
      "Low intensity: fats for endurance",
      "Optimal fuel selection improves performance",
      "All of the above"
    ],
    correctAnswer: 3,
    explanation: "Different exercise intensities utilize different fuel mixtures to optimize energy production rates and endurance."
  },
  {
    id: "easy-140",
    question: "How does the liver maintain metabolic homeostasis during transition between fed and fasted states?",
    options: [
      "By storing glycogen after meals",
      "By producing glucose during fasting",
      "By processing nutrients from gut",
      "All of the above"
    ],
    correctAnswer: 3,
    explanation: "The liver plays a central role in metabolic transitions by storing nutrients postprandially and releasing them during fasting."
  },
  {
    id: "easy-141",
    question: "What is the significance of the fact that all metabolic pathways converge on the electron transport chain?",
    options: [
      "It allows efficient energy extraction from diverse fuels",
      "It provides a common point for metabolic regulation",
      "It enables coordination of energy production",
      "All of the above"
    ],
    correctAnswer: 3,
    explanation: "Convergence at the electron transport chain allows efficient energy harvest, coordinated regulation, and metabolic flexibility."
  },
  {
    id: "easy-142",
    question: "How do uncoupling proteins affect the efficiency of energy extraction from different fuels?",
    options: [
      "They dissipate the proton gradient as heat",
      "They reduce ATP yield from oxidative phosphorylation",
      "They allow continued substrate oxidation without ATP production",
      "All of the above"
    ],
    correctAnswer: 3,
    explanation: "Uncoupling proteins uncouple substrate oxidation from ATP synthesis, reducing energy efficiency but generating heat and allowing continued fuel oxidation."
  },
  {
    id: "easy-143",
    question: "What is the metabolic basis of diabetic ketoacidosis?",
    options: [
      "Uncontrolled lipolysis and ketogenesis due to insulin deficiency",
      "Excessive protein breakdown for gluconeogenesis",
      "Impaired glucose utilization despite hyperglycemia",
      "All of the above"
    ],
    correctAnswer: 3,
    explanation: "Diabetic ketoacidosis involves multiple metabolic derangements: uncontrolled lipolysis, excessive ketogenesis, protein catabolism, and impaired glucose utilization."
  },
  {
    id: "easy-144",
    question: "How does the body prioritize fuel use during different physiological states?",
    options: [
      "Postprandial: storage of excess nutrients",
      "Early fasting: glycogen depletion",
      "Prolonged fasting: protein sparing through ketosis",
      "All of the above"
    ],
    correctAnswer: 3,
    explanation: "The body has sophisticated mechanisms to prioritize different fuels based on availability and physiological needs."
  },
  {
    id: "easy-145",
    question: "What is the evolutionary advantage of metabolic flexibility?",
    options: [
      "Survival during variable food availability",
      "Ability to utilize diverse food sources",
      "Maintenance of energy homeostasis",
      "All of the above"
    ],
    correctAnswer: 3,
    explanation: "Metabolic flexibility provides survival advantages by allowing adaptation to changing food availability and composition."
  },
  {
    id: "easy-146",
    question: "How does aging affect the metabolism of different macronutrients?",
    options: [
      "Decreased glucose tolerance and insulin sensitivity",
      "Reduced lean mass and protein turnover",
      "Altered fat distribution and metabolism",
      "All of the above"
    ],
    correctAnswer: 3,
    explanation: "Aging affects all aspects of macronutrient metabolism, leading to glucose intolerance, sarcopenia, and altered lipid metabolism."
  },
  {
    id: "easy-147",
    question: "What is the role of autophagy in integrating macronutrient metabolism during fasting?",
    options: [
      "It recycles cellular components for energy production",
      "It provides amino acids for gluconeogenesis",
      "It maintains cellular homeostasis during nutrient deprivation",
      "All of the above"
    ],
    correctAnswer: 3,
    explanation: "Autophagy is activated during fasting to recycle cellular components, provide substrates for energy production, and maintain cellular function."
  },
  {
    id: "easy-148",
    question: "How do circadian rhythms influence macronutrient metabolism?",
    options: [
      "They create daily cycles of insulin sensitivity",
      "They regulate feeding behavior and energy expenditure",
      "They coordinate metabolic processes with sleep-wake cycles",
      "All of the above"
    ],
    correctAnswer: 3,
    explanation: "Circadian rhythms influence all aspects of metabolism through hormonal regulation, gene expression cycles, and behavioral patterns."
  },
  {
    id: "easy-149",
    question: "What is the metabolic basis of the athlete's paradox?",
    options: [
      "Trained muscles have high glycogen but prefer fat oxidation",
      "They efficiently use both glucose and fatty acids",
      "They have enhanced insulin sensitivity despite high lipid exposure",
      "All of the above"
    ],
    correctAnswer: 3,
    explanation: "The athlete's paradox refers to the ability of trained muscles to store high glycogen while preferentially oxidizing fats and maintaining insulin sensitivity."
  },
  {
    id: "easy-150",
    question: "How does the gut microbiome influence macronutrient metabolism?",
    options: [
      "It produces short-chain fatty acids from fiber",
      "It affects energy harvest from food",
      "It influences host metabolism through signaling molecules",
      "All of the above"
    ],
    correctAnswer: 3,
    explanation: "The gut microbiome significantly influences host metabolism by processing nutrients, producing metabolites, and affecting energy balance and signaling pathways."
  }
];


export const mediumQuestions: Question[] = [

];

export const hardQuestions: Question[] = [
 
];

export const respirationQuestions = {
  easy: easyQuestions,
  medium: mediumQuestions,
  hard: hardQuestions,
} as const;
