export type Difficulty = keyof typeof carbohydratesQuestions;
export interface Question {
  id: string;
  question: string;
  options: string[];
  correctAnswer: number;
  explanation: string;
}

export const carbohydratesQuestions: Question[] = [
  
  {
    "id": "carb-1",
    "question": "What is the general empirical formula for most carbohydrates?",
    "options": [
      "(C₂H₂O)ₙ",
      "(CH₂O)ₙ",
      "(C₆H₁₂O₆)ₙ",
      "(CO₂)ₙ"
    ],
    "correctAnswer": 1,
    "explanation": "The name 'carbohydrate' comes from the observation that their empirical formula is typically (CH₂O)ₙ, meaning they are hydrates of carbon."
  },
  {
    "id": "carb-2",
    "question": "Which of the following is a hexose monosaccharide?",
    "options": [
      "Glyceraldehyde",
      "Ribose",
      "Glucose",
      "Dihydroxyacetone"
    ],
    "correctAnswer": 2,
    "explanation": "Glucose (C₆H₁₂O₆) is a hexose sugar, meaning it contains six carbon atoms. Glyceraldehyde and dihydroxyacetone are trioses (3C), and ribose is a pentose (5C)."
  },
  {
    "id": "carb-3",
    "question": "The difference between D-glucose and L-glucose is based on:",
    "options": [
      "The number of chiral carbon atoms",
      "The configuration around the anomeric carbon",
      "The configuration around the penultimate carbon",
      "Their ability to rotate plane-polarized light"
    ],
    "correctAnswer": 2,
    "explanation": "The D/L designation is determined by the configuration of the chiral carbon farthest from the carbonyl group (the penultimate carbon). If the -OH group on this carbon is on the right in a Fischer projection, it is a D-sugar."
  },
  {
    "id": "carb-4",
    "question": "What type of isomers are glucose and fructose?",
    "options": [
      "Anomers",
      "Enantiomers",
      "Epimers",
      "Functional group isomers"
    ],
    "correctAnswer": 3,
    "explanation": "Glucose is an aldose (has an aldehyde group) and fructose is a ketose (has a ketone group). They have the same molecular formula (C₆H₁₂O₆) but different functional groups, making them functional group isomers."
  },
  {
    "id": "carb-5",
    "question": "The cyclic form of glucose is created by a reaction between:",
    "options": [
      "Two alcohol groups",
      "The aldehyde group and an alcohol group",
      "The ketone group and an alcohol group",
      "The aldehyde group and the terminal CH₂OH group"
    ],
    "correctAnswer": 1,
    "explanation": "The carbonyl group (aldehyde in glucose, ketone in fructose) reacts with a hydroxyl group on the same molecule to form a cyclic hemiacetal or hemiketal structure. This is a intramolecular reaction."
  },
  {
    "id": "carb-6",
    "question": "The carbon atom that becomes chiral upon cyclization of a monosaccharide is called the:",
    "options": [
      "Penultimate carbon",
      "Anomeric carbon",
      "Chiral center",
      "Glycosidic carbon"
    ],
    "correctAnswer": 1,
    "explanation": "The anomeric carbon is the former carbonyl carbon (C1 in aldoses, C2 in ketoses). It becomes a new chiral center during cyclization, giving rise to alpha and beta anomers."
  },
  {
    "id": "carb-7",
    "question": "Sucrose is composed of which two monosaccharides?",
    "options": [
      "Glucose + Glucose",
      "Glucose + Galactose",
      "Glucose + Fructose",
      "Galactose + Fructose"
    ],
    "correctAnswer": 2,
    "explanation": "Sucrose, common table sugar, is a disaccharide made from one molecule of α-D-glucose and one molecule of β-D-fructose joined by a glycosidic bond."
  },
  {
    "id": "carb-8",
    "question": "The bond linking two monosaccharides is called a:",
    "options": [
      "Peptide bond",
      "Ester bond",
      "Glycosidic bond",
      "Phosphodiester bond"
    ],
    "correctAnswer": 2,
    "explanation": "A glycosidic bond is a covalent bond formed between the anomeric carbon of one sugar and a hydroxyl group of another sugar, with the loss of a water molecule (dehydration synthesis)."
  },
  {
    "id": "carb-9",
    "question": "Lactose, the sugar in milk, is a disaccharide of:",
    "options": [
      "Glucose + Glucose",
      "Glucose + Galactose",
      "Glucose + Fructose",
      "Galactose + Fructose"
    ],
    "correctAnswer": 1,
    "explanation": "Lactose is composed of β-D-galactose linked to α/β-D-glucose via a β(1→4) glycosidic bond."
  },
  {
    "id": "carb-10",
    "question": "Which disaccharide is a reducing sugar?",
    "options": [
      "Sucrose",
      "Lactose",
      "Both A and B",
      "None of the above"
    ],
    "correctAnswer": 1,
    "explanation": "A reducing sugar has a free anomeric carbon that can act as a reducing agent. Lactose has a free anomeric carbon on its glucose unit. Sucrose does not, as both anomeric carbons are involved in the glycosidic bond."
  },
  {
    "id": "carb-11",
    "question": "Starch is a polymer of:",
    "options": [
      "α-D-glucose",
      "β-D-glucose",
      "Fructose",
      "Galactose"
    ],
    "correctAnswer": 0,
    "explanation": "Starch is a polysaccharide composed exclusively of α-D-glucose monomers. It is the main energy storage molecule in plants."
  },
  {
    "id": "carb-12",
    "question": "Which component of starch is branched?",
    "options": [
      "Amylose",
      "Amylopectin",
      "Cellulose",
      "Chitin"
    ],
    "correctAnswer": 1,
    "explanation": "Starch consists of two components: amylose (linear chains of α(1→4) linked glucose) and amylopectin (highly branched chains with α(1→4) links and α(1→6) branches)."
  },
  {
    "id": "carb-13",
    "question": "Glycogen is structurally similar to:",
    "options": [
      "Amylose",
      "Amylopectin but more highly branched",
      "Cellulose",
      "Chitin"
    ],
    "correctAnswer": 1,
    "explanation": "Glycogen is the storage polysaccharide in animals and fungi. It is highly branched, like amylopectin, but has even more frequent α(1→6) branching, allowing for rapid mobilization of glucose."
  },
  {
    "id": "carb-14",
    "question": "Cellulose is a polymer of:",
    "options": [
      "α-D-glucose with β(1→4) linkages",
      "β-D-glucose with α(1→4) linkages",
      "β-D-glucose with β(1→4) linkages",
      "α-D-glucose with α(1→4) linkages"
    ],
    "correctAnswer": 2,
    "explanation": "Cellulose is a structural polysaccharide in plants, made of β-D-glucose monomers linked by β(1→4) glycosidic bonds. This configuration allows for extensive hydrogen bonding between chains, making it very strong and indigestible by humans."
  },
  {
    "id": "carb-15",
    "question": "Humans cannot digest cellulose because they lack the enzyme:",
    "options": [
      "Amylase",
      "Cellulase",
      "Sucrase",
      "Lactase"
    ],
    "correctAnswer": 1,
    "explanation": "Cellulase is the enzyme required to hydrolyze the β(1→4) glycosidic bonds in cellulose. Humans do not produce this enzyme, making cellulose (dietary fiber) indigestible."
  },
  {
    "id": "carb-16",
    "question": "The Benedict's test is used to identify:",
    "options": [
      "Proteins",
      "Lipids",
      "Reducing sugars",
      "Non-reducing sugars"
    ],
    "correctAnswer": 2,
    "explanation": "Benedict's reagent (alkaline copper sulfate) is reduced by the free aldehyde or ketone group of a reducing sugar, producing a colored precipitate of copper(I) oxide (from green to brick red)."
  },
  {
    "id": "carb-17",
    "question": "Which monosaccharide is known as 'blood sugar'?",
    "options": [
      "Fructose",
      "Galactose",
      "Glucose",
      "Sucrose"
    ],
    "correctAnswer": 2,
    "explanation": "Glucose is the primary sugar circulating in the bloodstream and is the main source of energy for the body's cells."
  },
  {
    "id": "carb-18",
    "question": "Invert sugar is a mixture of glucose and fructose formed by the hydrolysis of:",
    "options": [
      "Maltose",
      "Lactose",
      "Sucrose",
      "Cellulose"
    ],
    "correctAnswer": 2,
    "explanation": "Sucrose is hydrolyzed (inverted) by acid or the enzyme invertase to yield an equimolar mixture of glucose and fructose. This mixture is called invert sugar and is sweeter than sucrose itself."
  },
  {
    "id": "carb-19",
    "question": "The inability to digest lactose due to deficiency of lactase enzyme is called:",
    "options": [
      "Diabetes mellitus",
      "Lactose intolerance",
      "Galactosemia",
      "Celiac disease"
    ],
    "correctAnswer": 1,
    "explanation": "Lactose intolerance is a common condition where the body produces low levels of lactase, the enzyme needed to hydrolyze lactose into glucose and galactose for absorption."
  },
  {
    "id": "carb-20",
    "question": "Chitin is a structural polysaccharide found in arthropods and fungi. It is a polymer of:",
    "options": [
      "N-acetylglucosamine",
      "N-acetylgalactosamine",
      "Glucose with nitrogen groups",
      "Galactose with sulfate groups"
    ],
    "correctAnswer": 0,
    "explanation": "Chitin is a long-chain polymer of N-acetylglucosamine, a derivative of glucose. It is similar to cellulose but has an acetamide group instead of a hydroxyl group on each monomer, making it even tougher."
  },
  {
    "id": "carb-21",
    "question": "Which of the following is a triose sugar?",
    "options": [
      "Erythrose",
      "Ribose",
      "Glyceraldehyde",
      "Fructose"
    ],
    "correctAnswer": 2,
    "explanation": "Glyceraldehyde is the simplest aldose sugar, containing three carbon atoms. Erythrose is a tetrose (4C), ribose is a pentose (5C), and fructose is a hexose (6C)."
  },
  {
    "id": "carb-22",
    "question": "The interconversion between the alpha and beta anomers of a sugar in solution is called:",
    "options": [
      "Epimerization",
      "Mutarotation",
      "Inversion",
      "Glycosylation"
    ],
    "correctAnswer": 1,
    "explanation": "Mutarotation is the change in the optical rotation of a solution due to the interconversion between the α and β anomers of a sugar, through the open-chain form, until an equilibrium is reached."
  },
  {
    "id": "carb-23",
    "question": "Which carbon atoms are involved in the glycosidic bond of sucrose?",
    "options": [
      "C1 of glucose & C4 of fructose",
      "C1 of glucose & C2 of fructose",
      "C1 of galactose & C4 of glucose",
      "C1 of glucose & C6 of fructose"
    ],
    "correctAnswer": 1,
    "explanation": "In sucrose, the anomeric carbon of glucose (C1) and the anomeric carbon of fructose (C2) are linked together. This is a unique 1,2-glycosidic linkage, making sucrose a non-reducing sugar."
  },
  {
    "id": "carb-24",
    "question": "The structural difference between amylose and amylopectin lies in:",
    "options": [
      "The type of glucose isomer used",
      "The presence or absence of branching",
      "The type of glycosidic linkage only",
      "The length of the polymer chain only"
    ],
    "correctAnswer": 1,
    "explanation": "Amylose is a linear polymer with only α(1→4) linkages. Amylopectin is a branched polymer with α(1→4) linkages in the chains and α(1→6) linkages at the branch points every 24-30 glucose units."
  },
  {
    "id": "carb-25",
    "question": "Iodine test is used to identify starch. What color indicates a positive test?",
    "options": [
      "Green",
      "Blue-Black",
      "Brick Red",
      "Violet"
    ],
    "correctAnswer": 1,
    "explanation": "Iodine (I₂) fits into the coiled structure of the amylose component of starch, forming a complex that produces a characteristic intense blue-black color."
  },
  {
    "id": "carb-26",
    "question": "Which polysaccharide is the most abundant organic compound on Earth?",
    "options": [
      "Starch",
      "Glycogen",
      "Cellulose",
      "Chitin"
    ],
    "correctAnswer": 2,
    "explanation": "Cellulose is the primary structural component of the cell walls of green plants and many forms of algae. This makes it the most abundant polysaccharide and organic compound on the planet."
  },
  {
    "id": "carb-27",
    "question": "Raffinose is an example of a(n):",
    "options": [
      "Monosaccharide",
      "Disaccharide",
      "Trisaccharide",
      "Polysaccharide"
    ],
    "correctAnswer": 2,
    "explanation": "Raffinose is a trisaccharide composed of galactose, glucose, and fructose. It is found in beans, cabbage, and other vegetables and is not digested by humans, leading to gas production."
  },
  {
    "id": "carb-28",
    "question": "The sweetness of different sugars is compared relative to:",
    "options": [
      "Glucose",
      "Fructose",
      "Sucrose",
      "Lactose"
    ],
    "correctAnswer": 2,
    "explanation": "Sucrose (table sugar) is arbitrarily assigned a sweetness value of 1 (or 100%). The sweetness of all other sweeteners is measured relative to sucrose. Fructose is sweeter, while lactose is less sweet."
  },
  {
    "id": "carb-29",
    "question": "Which of the following is NOT a function of carbohydrates?",
    "options": [
      "Energy storage",
      "Structural support",
      "Cell recognition and signaling",
      "Catalyzing biochemical reactions"
    ],
    "correctAnswer": 3,
    "explanation": "Carbohydrates serve many functions (energy storage as starch/glycogen, structure as cellulose/chitin, and recognition as glycoproteins/glycolipids). However, catalysis is the function of enzymes, which are proteins (or occasionally RNA)."
  },
  {
    "id": "carb-30",
    "question": "The process of breaking down glycogen into glucose is called:",
    "options": [
      "Glycogenesis",
      "Glycogenolysis",
      "Gluconeogenesis",
      "Glycolysis"
    ],
    "correctAnswer": 1,
    "explanation": "Glycogenolysis is the biochemical pathway in which glycogen stored in the liver and muscles is broken down into glucose-1-phosphate and then into glucose to be used for energy."
  },
  {
    "id": "carb-31",
    "question": "Which of the following is a deoxy sugar?",
    "options": [
      "Ribose",
      "Glucose",
      "2-deoxyribose",
      "Fructose"
    ],
    "correctAnswer": 2,
    "explanation": "Deoxy sugars are sugars where an oxygen atom has been replaced by a hydrogen atom. 2-Deoxyribose is a component of DNA, where the hydroxyl group on the 2' carbon of ribose is replaced by a hydrogen."
  },
  {
    "id": "carb-32",
    "question": "The carbon atom in a sugar that determines its D or L configuration is:",
    "options": [
      "The anomeric carbon",
      "The carbonyl carbon",
      "The chiral carbon farthest from the carbonyl group",
      "The first carbon of the chain"
    ],
    "correctAnswer": 2,
    "explanation": "In a Fischer projection, the D/L designation is based on the configuration of the hydroxyl group on the highest-numbered chiral carbon (the carbon farthest from the carbonyl group). If the -OH is on the right, it is a D-sugar."
  },
  {
    "id": "carb-33",
    "question": "Maltose, a disaccharide produced during starch digestion, is made of:",
    "options": [
      "Two glucose molecules linked by an α(1→4) bond",
      "Glucose and fructose linked by a β(1→2) bond",
      "Glucose and galactose linked by a β(1→4) bond",
      "Two fructose molecules"
    ],
    "correctAnswer": 0,
    "explanation": "Maltose is a disaccharide composed of two α-D-glucose units linked by an α(1→4) glycosidic bond. It is produced enzymatically from starch."
  },
  {
    "id": "carb-34",
    "question": "In the Haworth projection of β-D-glucopyranose, the -OH group on the anomeric carbon is:",
    "options": [
      "Below the plane of the ring",
      "Above the plane of the ring",
      "Part of the CH₂OH group",
      "Not present"
    ],
    "correctAnswer": 1,
    "explanation": "In the Haworth projection for D-sugars, the anomeric hydroxyl group is drawn downward for the α-anomer and upward for the β-anomer. For glucose, the β-anomer is more stable and predominant at equilibrium."
  },
  {
    "id": "carb-35",
    "question": "Which property is common to both starch and glycogen?",
    "options": [
      "They are both structural polymers.",
      "They are both made of β-glucose monomers.",
      "They are both energy storage polymers with α-glycosidic linkages.",
      "They are both indigestible by humans."
    ],
    "correctAnswer": 2,
    "explanation": "Both starch (plant storage) and glycogen (animal storage) are polymers of α-D-glucose linked by α-glycosidic bonds. This configuration allows them to be compact and easily hydrolyzed for energy release."
  },
  {
    "id": "carb-36",
    "question": "The difference between cellobiose and maltose is:",
    "options": [
      "The monosaccharides they are made from",
      "The type of glycosidic linkage (α vs β)",
      "The number of carbon atoms",
      "One is reducing, the other is not"
    ],
    "correctAnswer": 1,
    "explanation": "Both cellobiose and maltose are disaccharides of glucose. Maltose has an α(1→4) linkage, while cellobiose has a β(1→4) linkage. Cellobiose is the repeating unit of cellulose."
  },
  {
    "id": "carb-37",
    "question": "Heparin is an example of a:",
    "options": [
      "Storage polysaccharide",
      "Structural polysaccharide",
      "Glycosaminoglycan (GAG)",
      "Triacylglycerol"
    ],
    "correctAnswer": 2,
    "explanation": "Heparin is a highly sulfated glycosaminoglycan (GAG). It is used medically as an anticoagulant (blood thinner). GAGs are linear polysaccharides made of repeating disaccharide units, often found in connective tissues."
  },
  {
    "id": "carb-38",
    "question": "The 'sugar-phosphate backbone' of nucleic acids (DNA/RNA) is formed by:",
    "options": [
      "Glycosidic bonds",
      "Peptide bonds",
      "Phosphodiester bonds",
      "Ester bonds"
    ],
    "correctAnswer": 2,
    "explanation": "Nucleotides are linked together by phosphodiester bonds, which connect the 5' phosphate group of one nucleotide to the 3' hydroxyl group of the next. The alternating sugar and phosphate units form the backbone."
  },
  {
    "id": "carb-39",
    "question": "Which carbohydrate is a key component of the Rh antigen on red blood cells?",
    "options": [
      "Glucose",
      "Fructose",
      "N-acetylgalactosamine",
      "Sucrose"
    ],
    "correctAnswer": 2,
    "explanation": "The Rh factor antigen on red blood cells involves complex oligosaccharide chains. The presence or absence of specific sugars, like N-acetylgalactosamine, determines the Rh+ or Rh- blood type."
  },
  {
    "id": "carb-40",
    "question": "The phenomenon where a high blood glucose level leads to glucose being excreted in urine is called:",
    "options": [
      "Glycosuria",
      "Ketosis",
      "Hypoglycemia",
      "Gluconeogenesis"
    ],
    "correctAnswer": 0,
    "explanation": "Glycosuria (or glucosuria) is the excretion of glucose into the urine. It occurs when the blood glucose level exceeds the renal threshold (~180 mg/100mL), which is a common symptom of uncontrolled diabetes mellitus."
  },
  {
    "id": "carb-41",
    "question": "Which of the following is an epimer of glucose?",
    "options": [
      "Fructose",
      "Mannose",
      "Ribose",
      "Sucrose"
    ],
    "correctAnswer": 1,
    "explanation": "Epimers are sugars that differ in configuration at only one chiral center. D-Glucose and D-Mannose are epimers at carbon 2. D-Glucose and D-Galactose are epimers at carbon 4."
  },
  {
    "id": "carb-42",
    "question": "The hydrolysis of lactose yields:",
    "options": [
      "Glucose + Glucose",
      "Glucose + Fructose",
      "Glucose + Galactose",
      "Fructose + Galactose"
    ],
    "correctAnswer": 2,
    "explanation": "Lactose is a disaccharide composed of β-D-galactose and α/β-D-glucose. Hydrolysis by the enzyme lactase breaks the β(1→4) glycosidic bond, releasing the monomers glucose and galactose."
  },
  {
    "id": "carb-43",
    "question": "In which form is glucose stored in animal cells?",
    "options": [
      "Starch",
      "Cellulose",
      "Glycogen",
      "Maltose"
    ],
    "correctAnswer": 2,
    "explanation": "Glycogen is the main storage polysaccharide in animals and fungi. It is a highly branched polymer of α-D-glucose and is primarily stored in the liver and muscle cells."
  },
  {
    "id": "carb-44",
    "question": "The anomeric carbon in a fructose molecule involved in sucrose formation is:",
    "options": [
      "C1",
      "C2",
      "C5",
      "C6"
    ],
    "correctAnswer": 1,
    "explanation": "In the cyclic form of fructose (fructofuranose), the anomeric carbon is C2. In sucrose, this carbon (C2 of fructose) is linked to the anomeric carbon (C1) of glucose, forming a disaccharide with no free anomeric carbons."
  },
  {
    "id": "carb-45",
    "question": "Which test is specifically used to distinguish between aldoses and ketoses?",
    "options": [
      "Benedict's test",
      "Iodine test",
      "Seliwanoff's test",
      "Biuret test"
    ],
    "correctAnswer": 2,
    "explanation": "Seliwanoff's test uses resorcinol in hydrochloric acid. Ketoses (like fructose) dehydrate more rapidly than aldoses, forming a red-colored product. Aldoses react slowly to give a faint pink color."
  },
  {
    "id": "carb-46",
    "question": "The rigid structure of plant cell walls is primarily due to:",
    "options": [
      "Starch",
      "Glycogen",
      "Cellulose",
      "Chitin"
    ],
    "correctAnswer": 2,
    "explanation": "Cellulose microfibrils, composed of linear chains of β(1→4) linked glucose, form a strong, rigid network that provides structural support and shape to plant cells. This is the primary component of the cell wall."
  },
  {
    "id": "carb-47",
    "question": "Which disaccharide is also known as 'malt sugar'?",
    "options": [
      "Sucrose",
      "Lactose",
      "Maltose",
      "Cellobiose"
    ],
    "correctAnswer": 2,
    "explanation": "Maltose is often called malt sugar. It is produced during the enzymatic hydrolysis of starch (e.g., in germinating barley) and is a key component in the brewing industry."
  },
  {
    "id": "carb-48",
    "question": "A carbohydrate that gives a positive Benedict's test must have:",
    "options": [
      "A free anomeric carbon",
      "A ketone group",
      "At least six carbon atoms",
      "A glycosidic bond"
    ],
    "correctAnswer": 0,
    "explanation": "A positive Benedict's test indicates the presence of a free aldehyde or ketone group that can act as a reducing agent. In cyclic sugars, this requires the anomeric carbon to be free (not involved in a glycosidic bond)."
  },
  {
    "id": "carb-49",
    "question": "The process of converting non-carbohydrate precursors into glucose is called:",
    "options": [
      "Glycolysis",
      "Glycogenolysis",
      "Gluconeogenesis",
      "Glycogenesis"
    ],
    "correctAnswer": 2,
    "explanation": "Gluconeogenesis is the metabolic pathway that generates glucose from non-carbohydrate carbon substrates like lactate, glycerol, and glucogenic amino acids. It occurs mainly in the liver."
  },
  {
    "id": "carb-50",
    "question": "Which of the following is a heteropolysaccharide?",
    "options": [
      "Cellulose",
      "Glycogen",
      "Hyaluronic acid",
      "Amylose"
    ],
    "correctAnswer": 2,
    "explanation": "Heteropolysaccharides (heteroglycans) are composed of more than one type of monosaccharide. Hyaluronic acid is a glycosaminoglycan (GAG) made of repeating units of D-glucuronic acid and N-acetyl-D-glucosamine."
  },
  {
    "id": "carb-51",
    "question": "The sweetness level of fructose, compared to sucrose, is:",
    "options": [
      "Less sweet",
      "Equally sweet",
      "More sweet",
      "It has no sweetness"
    ],
    "correctAnswer": 2,
    "explanation": "Fructose is the sweetest of all natural sugars. It is often estimated to be about 1.2 to 1.8 times sweeter than sucrose (table sugar), which is why it's used in many sweeteners."
  },
  {
    "id": "carb-52",
    "question": "The primary function of glycogen in the liver is to:",
    "options": [
      "Provide structural support",
      "Store energy for muscle contraction only",
      "Maintain blood glucose levels",
      "Aid in digestion"
    ],
    "correctAnswer": 2,
    "explanation": "Hepatic glycogen stores are broken down (glycogenolysis) to release glucose into the bloodstream, which is crucial for maintaining blood glucose levels between meals and during fasting."
  },
  {
    "id": "carb-53",
    "question": "The bond that links glucose molecules in cellulose is:",
    "options": [
      "α-1,4-glycosidic bond",
      "β-1,4-glycosidic bond",
      "α-1,6-glycosidic bond",
      "β-1,6-glycosidic bond"
    ],
    "correctAnswer": 1,
    "explanation": "Cellulose is a linear, unbranched polymer of thousands of β-D-glucose molecules linked by β(1→4) glycosidic bonds. This configuration allows for extensive interchain hydrogen bonding."
  },
  {
    "id": "carb-54",
    "question": "Which of the following is a source of galactose?",
    "options": [
      "Honey",
      "Milk",
      "Table sugar",
      "Fruits"
    ],
    "correctAnswer": 1,
    "explanation": "Galactose is not found freely in nature in large amounts. It is primarily obtained through the hydrolysis of lactose, the disaccharide sugar found in milk and dairy products."
  },
  {
    "id": "carb-55",
    "question": "The cyclic structure of glucose is a result of the formation of a(n):",
    "options": [
      "Acetal",
      "Hemiacetal",
      "Ketal",
      "Hemiketal"
    ],
    "correctAnswer": 1,
    "explanation": "An aldehyde can react with an alcohol to form a hemiacetal. In glucose (an aldose), the aldehyde group at C1 reacts with the hydroxyl group on C5, forming a cyclic hemiacetal structure (a six-membered pyranose ring)."
  },
  {
    "id": "carb-56",
    "question": "Which of these is a non-reducing disaccharide?",
    "options": [
      "Maltose",
      "Lactose",
      "Sucrose",
      "Cellobiose"
    ],
    "correctAnswer": 2,
    "explanation": "Sucrose is non-reducing because its anomeric carbons (C1 of glucose and C2 of fructose) are involved in the glycosidic bond. This leaves no free anomeric carbon to act as a reducing agent."
  },
  {
    "id": "carb-57",
    "question": "Amylose and amylopectin are both components of:",
    "options": [
      "Glycogen",
      "Starch",
      "Cellulose",
      "Chitin"
    ],
    "correctAnswer": 1,
    "explanation": "Starch is a mixture of two polymers: amylose (10-20%, linear, α-1,4-linked) and amylopectin (80-90%, branched with α-1,4 and α-1,6 links). This mixture is the energy storage polysaccharide in plants."
  },
  {
    "id": "carb-58",
    "question": "The disease caused by a deficiency of the enzyme that breaks down glycogen is called:",
    "options": [
      "Diabetes mellitus",
      "Galactosemia",
      "Glycogen storage disease",
      "Lactose intolerance"
    ],
    "correctAnswer": 2,
    "explanation": "Glycogen storage diseases (GSDs) are a group of inherited metabolic disorders caused by deficiencies of enzymes involved in glycogen synthesis or breakdown. This leads to abnormal accumulation of glycogen in tissues."
  },
  {
    "id": "carb-59",
    "question": "In a Fischer projection of a D-sugar, the -OH group on the highest numbered chiral carbon is:",
    "options": [
      "On the left",
      "On the right",
      "Not present",
      "It depends on the sugar"
    ],
    "correctAnswer": 1,
    "explanation": "By convention, in a Fischer projection, if the -OH group on the highest-numbered chiral carbon (the penultimate carbon) is on the right, the sugar is designated as a D-sugar. If it is on the left, it is an L-sugar."
  },
  {
    "id": "carb-60",
    "question": "Which carbohydrate is a major component of the exoskeleton of insects?",
    "options": [
      "Cellulose",
      "Starch",
      "Chitin",
      "Glycogen"
    ],
    "correctAnswer": 2,
    "explanation": "Chitin is a long-chain polymer of N-acetylglucosamine. It is a primary component of the exoskeletons of arthropods (such as insects and crustaceans) and the cell walls of fungi."
  },
  {
    "id": "carb-61",
    "question": "The breakdown of glucose to pyruvate in the cytoplasm is known as:",
    "options": [
      "Gluconeogenesis",
      "Glycogenolysis",
      "Glycolysis",
      "Citric Acid Cycle"
    ],
    "correctAnswer": 2,
    "explanation": "Glycolysis is the universal metabolic pathway that occurs in the cytosol, where one molecule of glucose is broken down into two molecules of pyruvate, producing a net gain of 2 ATP and 2 NADH."
  },
  {
    "id": "carb-62",
    "question": "The 'α' and 'β' designation in sugars refers to the configuration of the:",
    "options": [
      "Hydroxyl group on the penultimate carbon",
      "Hydroxyl group on the anomeric carbon relative to the CH₂OH group",
      "Carbonyl group in the open chain form",
      "First carbon of the chain"
    ],
    "correctAnswer": 1,
    "explanation": "In the cyclic form, the anomeric hydroxyl group can be in one of two stereochemical configurations. In the standard Haworth projection for D-sugars, the α-anomer has the -OH group trans to the CH₂OH group (down), and the β-anomer has it cis (up)."
  },
  {
    "id": "carb-63",
    "question": "Which of the following is a pentose sugar found in RNA?",
    "options": [
      "Deoxyribose",
      "Ribose",
      "Fructose",
      "Glucose"
    ],
    "correctAnswer": 1,
    "explanation": "Ribose is a five-carbon pentose sugar. Its phosphate-derivative, ribose-5-phosphate, is a component of RNA (ribonucleic acid) nucleotides."
  },
  {
    "id": "carb-64",
    "question": "The storage form of glucose in plants is:",
    "options": [
      "Glycogen",
      "Starch",
      "Cellulose",
      "Maltose"
    ],
    "correctAnswer": 1,
    "explanation": "Starch is the primary storage polysaccharide in plants. It is synthesized and stored in chloroplasts (in leaves) and amyloplasts (in roots and seeds) to provide energy for the plant."
  },
  {
    "id": "carb-65",
    "question": "A carbohydrate that cannot be hydrolyzed into simpler sugars is called a:",
    "options": [
      "Disaccharide",
      "Oligosaccharide",
      "Polysaccharide",
      "Monosaccharide"
    ],
    "correctAnswer": 3,
    "explanation": "Monosaccharides are the simplest form of carbohydrates. They are the building blocks of more complex carbs and cannot be hydrolyzed into smaller carbohydrate units. Examples are glucose, fructose, and galactose."
  },
  {
    "id": "carb-66",
    "question": "The enzyme responsible for breaking the α-1,6 glycosidic bonds in glycogen is:",
    "options": [
      "Amylase",
      "Glycogen phosphorylase",
      "Debranching enzyme",
      "Lactase"
    ],
    "correctAnswer": 2,
    "explanation": "Glycogen phosphorylase can only break α(1→4) linkages until it reaches a point 4 glucose units from a branch point. The debranching enzyme then has two activities: it transfers a block of three glucose units to another chain (transferase activity) and then hydrolyzes the remaining α(1→6) bond (glucosidase activity)."
  },
  {
    "id": "carb-67",
    "question": "Which of the following is a homopolysaccharide?",
    "options": [
      "Hyaluronic acid",
      "Heparin",
      "Chondroitin sulfate",
      "Cellulose"
    ],
    "correctAnswer": 3,
    "explanation": "Homopolysaccharides are composed of only one type of monosaccharide monomer. Cellulose is a homopolysaccharide made exclusively of D-glucose. The other options are heteropolysaccharides (GAGs) made from different sugar derivatives."
  },
  {
    "id": "carb-68",
    "question": "The conversion of glucose to glycogen for storage is called:",
    "options": [
      "Glycogenolysis",
      "Glycogenesis",
      "Gluconeogenesis",
      "Glycolysis"
    ],
    "correctAnswer": 1,
    "explanation": "Glycogenesis is the process of synthesizing glycogen from glucose monomers. It occurs primarily in the liver and muscle cells when blood glucose levels are high, such as after a meal."
  },
  {
    "id": "carb-69",
    "question": "Which of the following is NOT a polysaccharide?",
    "options": [
      "Dextran",
      "Inulin",
      "Raffinose",
      "Chitin"
    ],
    "correctAnswer": 2,
    "explanation": "Raffinose is a trisaccharide (an oligosaccharide) composed of galactose, glucose, and fructose. Dextran (bacterial polysaccharide), inulin (plant storage polysaccharide), and chitin are all polysaccharides."
  },
  {
    "id": "carb-70",
    "question": "The specific type of linkage found in the branch points of glycogen and amylopectin is:",
    "options": [
      "α-1,4-glycosidic",
      "β-1,4-glycosidic",
      "α-1,6-glycosidic",
      "β-1,6-glycosidic"
    ],
    "correctAnswer": 2,
    "explanation": "The linear chains in glycogen and amylopectin are connected by α(1→4) linkages. The branch points, which occur every 8-12 residues in glycogen and every 24-30 in amylopectin, are created by α(1→6) glycosidic linkages."
  },
  {
    "id": "carb-71",
    "question": "A positive iodine test (blue-black color) indicates the presence of:",
    "options": [
      "Reducing sugars",
      "Starch",
      "Protein",
      "Lipids"
    ],
    "correctAnswer": 1,
    "explanation": "The iodine test is specific for starch. Iodine molecules get trapped in the coiled helical structure of the amylose component, forming a starch-iodine complex that produces a characteristic blue-black color."
  },
  {
    "id": "carb-72",
    "question": "Which monosaccharide is a component of the disaccharide sucrose and the polysaccharide inulin?",
    "options": [
      "Glucose",
      "Galactose",
      "Fructose",
      "Mannose"
    ],
    "correctAnswer": 2,
    "explanation": "Fructose is a component of sucrose (glucose + fructose) and is the sole monomer of the polysaccharide inulin, which is a storage polymer in plants like onions and garlic."
  },
  {
    "id": "carb-73",
    "question": "The inability to metabolize galactose due to a deficiency of galactose-1-phosphate uridylyltransferase leads to:",
    "options": [
      "Lactose intolerance",
      "Galactosemia",
      "Diabetes",
      "Glycogen storage disease"
    ],
    "correctAnswer": 1,
    "explanation": "Classic galactosemia is an inherited metabolic disorder caused by a deficiency of the enzyme galactose-1-phosphate uridylyltransferase (GALT). This leads to the toxic accumulation of galactose-1-phosphate, causing liver damage, cataracts, and intellectual disability."
  },
  {
    "id": "carb-74",
    "question": "The number of chiral carbon atoms in an open-chain glucose molecule is:",
    "options": [
      "2",
      "3",
      "4",
      "5"
    ],
    "correctAnswer": 2,
    "explanation": "An open-chain aldohexose like glucose has four chiral carbon atoms (C2, C3, C4, and C5). The carbonyl carbon (C1) is not chiral in the open-chain form, but becomes chiral (the anomeric carbon) upon cyclization."
  },
  {
    "id": "carb-75",
    "question": "Carbohydrates are often linked to proteins to form glycoproteins. This linkage most commonly involves:",
    "options": [
      "The anomeric carbon of sugar and the OH group of serine/threonine",
      "The anomeric carbon of sugar and the NH₂ group of asparagine",
      "A peptide bond",
      "An ester bond"
    ],
    "correctAnswer": 1,
    "explanation": "In N-linked glycoproteins, the carbohydrate chain is attached to the nitrogen atom in the side chain of the amino acid asparagine. This is a very common form of glycosylation in proteins destined for secretion or the cell membrane."
  },
  {
    "id": "carb-76",
    "question": "Which of the following is a source of fructose?",
    "options": [
      "Milk",
      "Honey",
      "Beans",
      "Wood"
    ],
    "correctAnswer": 1,
    "explanation": "Honey is a natural source of fructose and glucose. It contains approximately 40% fructose and 30% glucose, with the rest being water and other minor components. The high fructose content contributes to its sweetness."
  },
  {
    "id": "carb-77",
    "question": "The term 'dextrorotatory' means that a compound:",
    "options": [
      "Rotates plane-polarized light to the right",
      "Rotates plane-polarized light to the left",
      "Does not rotate plane-polarized light",
      "Is optically inactive"
    ],
    "correctAnswer": 0,
    "explanation": "Dextrorotatory (d- or (+)) compounds rotate the plane of plane-polarized light in a clockwise direction (to the right). Levorotatory (l- or (-)) compounds rotate it counterclockwise (to the left)."
  },
  {
    "id": "carb-78",
    "question": "The polysaccharide used in agar plates for growing bacteria is derived from:",
    "options": [
      "Animals",
      "Insects",
      "Plants",
      "Seaweed"
    ],
    "correctAnswer": 3,
    "explanation": "Agar is a heteropolysaccharide derived from the cell walls of certain species of red algae (seaweed). It is composed of agarose and agaropectin and is used extensively in microbiology as a solidifying agent for culture media."
  },
  {
    "id": "carb-79",
    "question": "Which of the following statements about cellulose is TRUE?",
    "options": [
      "It is digestible by human enzymes.",
      "It is a branched polymer.",
      "It is made of β-glucose units.",
      "It is a storage polysaccharide."
    ],
    "correctAnswer": 2,
    "explanation": "Cellulose is a linear, unbranched polymer of β-D-glucose units linked by β(1→4) glycosidic bonds. Humans lack the enzyme cellulase to break this bond, so it is indigestible and serves as dietary fiber."
  },
  {
    "id": "carb-80",
    "question": "The initial substrate for glycolysis is:",
    "options": [
      "Glycogen",
      "Glucose",
      "Fructose-6-phosphate",
      "Pyruvate"
    ],
    "correctAnswer": 1,
    "explanation": "Glycolysis begins with the phosphorylation of glucose to form glucose-6-phosphate. This is the first committed step of the pathway, catalyzed by the enzyme hexokinase (or glucokinase in the liver)."
  },
    {
    "id": "carb-81",
    "question": "Which carbon in a nucleoside is involved in the glycosidic bond with the nitrogenous base?",
    "options": [
      "C1' of the sugar",
      "C2' of the sugar",
      "C3' of the sugar",
      "C4' of the sugar"
    ],
    "correctAnswer": 0,
    "explanation": "In a nucleoside, the anomeric carbon (C1') of the pentose sugar (ribose or deoxyribose) forms an N-glycosidic bond with the nitrogen atom (N9 of purines or N1 of pyrimidines) of the nitrogenous base."
  },
  {
    "id": "carb-82",
    "question": "The phenomenon where a molecule has both a positive and negative charge but overall is neutral is called:",
    "options": [
      "Anomerization",
      "Tautomerization",
      "Zwitterion formation",
      "Mutarotation"
    ],
    "correctAnswer": 2,
    "explanation": "A zwitterion is a molecule with two or more functional groups, where one is positively charged and another is negatively charged, resulting in a net charge of zero. While common in amino acids, the concept can apply to other molecules with acidic and basic groups."
  },
  {
    "id": "carb-83",
    "question": "Which of the following is a ketohexose?",
    "options": [
      "Glucose",
      "Galactose",
      "Ribose",
      "Fructose"
    ],
    "correctAnswer": 3,
    "explanation": "A ketohexose is a six-carbon sugar with a ketone functional group. Fructose is the most common ketohexose. Glucose and galactose are aldohexoses, and ribose is an aldopentose."
  },
  {
    "id": "carb-84",
    "question": "The 'liver isoform' of the enzyme that phosphorylates glucose is called:",
    "options": [
      "Hexokinase",
      "Glucokinase",
      "Phosphofructokinase",
      "Pyruvate kinase"
    ],
    "correctAnswer": 1,
    "explanation": "Glucokinase is a specific isoform of hexokinase found in liver cells. It has a lower affinity for glucose (higher Km) than other hexokinases, allowing it to act primarily when blood glucose levels are high, thus helping to regulate glycogen synthesis."
  },
  {
    "id": "carb-85",
    "question": "The bond between the anomeric carbon of a sugar and an -OH group of an alcohol is a(n):",
    "options": [
      "O-glycosidic bond",
      "N-glycosidic bond",
      "Phosphoester bond",
      "Peptide bond"
    ],
    "correctAnswer": 0,
    "explanation": "An O-glycosidic bond is formed between the anomeric carbon of a carbohydrate and the hydroxyl group of another molecule (which can be another sugar or an alcohol). This is the bond that links monosaccharides in disaccharides and polysaccharides."
  },
  {
    "id": "carb-86",
    "question": "Which of the following sugars is a component of the disaccharide lactose and a glycolipid?",
    "options": [
      "Glucose",
      "Fructose",
      "Galactose",
      "Mannose"
    ],
    "correctAnswer": 2,
    "explanation": "Galactose is a component of the disaccharide lactose (glucose-galactose) and is also a key component of cerebrosides, which are glycolipids found abundantly in the myelin sheath of nerve cells."
  },
  {
    "id": "carb-87",
    "question": "The process by which glucose is converted into starch in plants is analogous to:",
    "options": [
      "Glycolysis in animals",
      "Glycogenesis in animals",
      "Gluconeogenesis in animals",
      "Glycogenolysis in animals"
    ],
    "correctAnswer": 1,
    "explanation": "Glycogenesis is the process of converting glucose to glycogen for storage in animal cells. The analogous process in plant cells is the conversion of glucose to starch (composed of amylose and amylopectin) for storage."
  },
  {
    "id": "carb-88",
    "question": "A carbohydrate that yields many monosaccharides upon hydrolysis is called a:",
    "options": [
      "Monosaccharide",
      "Disaccharide",
      "Oligosaccharide",
      "Polysaccharide"
    ],
    "correctAnswer": 3,
    "explanation": "Polysaccharides are carbohydrates composed of long chains of monosaccharide units (more than ten) bonded together by glycosidic linkages. Examples include starch, glycogen, and cellulose."
  },
  {
    "id": "carb-89",
    "question": "The specific type of glucose transporter that is insulin-dependent is:",
    "options": [
      "GLUT1",
      "GLUT2",
      "GLUT4",
      "GLUT5"
    ],
    "correctAnswer": 2,
    "explanation": "GLUT4 is the insulin-responsive glucose transporter found primarily in adipose tissue and striated muscle (skeletal and cardiac). Insulin signaling causes vesicles containing GLUT4 to fuse with the plasma membrane, increasing glucose uptake."
  },
  {
    "id": "carb-90",
    "question": "Which of the following is a feature of amylopectin but NOT amylose?",
    "options": [
      "α-1,4 glycosidic linkages",
      "Linear structure",
      "Branched structure",
      "Component of starch"
    ],
    "correctAnswer": 2,
    "explanation": "Amylose is a linear polymer of glucose with only α-1,4 linkages. Amylopectin is a branched polymer, containing both α-1,4 linkages in its chains and α-1,6 linkages at its branch points. Both are components of starch."
  },
  {
    "id": "carb-91",
    "question": "The sugar present in DNA is:",
    "options": [
      "Ribose",
      "Deoxyribose",
      "Glucose",
      "Fructose"
    ],
    "correctAnswer": 1,
    "explanation": "Deoxyribose is the pentose sugar found in DNA (deoxyribonucleic acid). It is called 'deoxy' because it lacks a hydroxyl group on the 2' carbon, compared to ribose which has a hydroxyl group at that position."
  },
  {
    "id": "carb-92",
    "question": "The hydrolysis of sucrose to glucose and fructose is catalyzed by the enzyme:",
    "options": [
      "Lactase",
      "Maltase",
      "Sucrase",
      "Amylase"
    ],
    "correctAnswer": 2,
    "explanation": "Sucrase (also known as invertase) is the enzyme that catalyzes the hydrolysis of the glycosidic bond in sucrose, yielding one molecule of glucose and one molecule of fructose."
  },
  {
    "id": "carb-93",
    "question": "Which of the following is a reducing disaccharide?",
    "options": [
      "Sucrose",
      "Trehalose",
      "Lactose",
      "Raffinose"
    ],
    "correctAnswer": 2,
    "explanation": "Lactose is a reducing disaccharide because the anomeric carbon of its glucose unit is free and not involved in the glycosidic bond. Sucrose and trehalose are non-reducing disaccharides, and raffinose is a non-reducing trisaccharide."
  },
  {
    "id": "carb-94",
    "question": "The primary energy source for the brain under normal conditions is:",
    "options": [
      "Fatty acids",
      "Ketone bodies",
      "Glucose",
      "Amino acids"
    ],
    "correctAnswer": 2,
    "explanation": "Under normal physiological conditions, the brain relies almost exclusively on glucose for energy. It requires a constant supply from the blood, as it has limited stored glycogen and cannot use fatty acids for energy."
  },
  {
    "id": "carb-95",
    "question": "The number of molecules of ATP required to activate one molecule of glucose at the start of glycolysis is:",
    "options": [
      "0",
      "1",
      "2",
      "4"
    ],
    "correctAnswer": 2,
    "explanation": "The first step of glycolysis requires energy investment. One ATP is used to phosphorylate glucose to glucose-6-phosphate, and a second ATP is used to phosphorylate fructose-6-phosphate to fructose-1,6-bisphosphate. This is a total of 2 ATP consumed per glucose molecule in the 'investment phase'."
  },
  {
    "id": "carb-96",
    "question": "Which of the following is a structural polysaccharide found in bacteria?",
    "options": [
      "Glycogen",
      "Peptidoglycan",
      "Starch",
      "Inulin"
    ],
    "correctAnswer": 1,
    "explanation": "Peptidoglycan (or murein) is a heteropolysaccharide that forms a strong mesh-like layer outside the plasma membrane of most bacteria, forming the cell wall. It is composed of alternating N-acetylglucosamine (NAG) and N-acetylmuramic acid (NAM) residues cross-linked by short peptides."
  },
  {
    "id": "carb-97",
    "question": "The final product of glycolysis under aerobic conditions is:",
    "options": [
      "Lactate",
      "Ethanol",
      "Acetyl-CoA",
      "Pyruvate"
    ],
    "correctAnswer": 3,
    "explanation": "Glycolysis, the breakdown of glucose, ends with the production of pyruvate. Under aerobic conditions, pyruvate is then transported into the mitochondria to be converted to acetyl-CoA for entry into the citric acid cycle."
  },
  {
    "id": "carb-98",
    "question": "The sugar alcohol derived from glucose, often used as a sweetener in 'sugar-free' products, is:",
    "options": [
      "Sorbitol",
      "Mannitol",
      "Xylitol",
      "Inositol"
    ],
    "correctAnswer": 0,
    "explanation": "Sorbitol (glucitol) is a sugar alcohol derived from glucose by reduction of the aldehyde group to a hydroxyl group. It is often used as a sweetener in diabetic foods because it is absorbed slowly and does not cause a rapid spike in blood glucose."
  },
  {
    "id": "carb-99",
    "question": "The Cori cycle involves the conversion of lactate produced in muscles to glucose in the:",
    "options": [
      "Heart",
      "Liver",
      "Kidneys",
      "Brain"
    ],
    "correctAnswer": 1,
    "explanation": "The Cori cycle is a metabolic pathway where lactate produced by anaerobic glycolysis in active muscles is transported to the liver. The liver then converts lactate back into glucose via gluconeogenesis. This glucose can be released back into the bloodstream for use by other tissues."
  },
  {
    "id": "carb-100",
    "question": "Which of the following is a homopolysaccharide used for energy storage in brown algae?",
    "options": [
      "Agar",
      "Alginic acid",
      "Laminarin",
      "Carrageenan"
    ],
    "correctAnswer": 2,
    "explanation": "Laminarin is a storage polysaccharide of brown algae. It is a linear polymer of glucose, with β(1→3) linkages and some β(1→6) branches. It serves as the primary energy reserve, similar to starch in plants."
  },
  {
    "id": "carb-101",
    "question": "The 'anomeric effect' refers to the preference for:",
    "options": [
      "The axial position of the anomeric substituent in certain sugars",
      "The equatorial position of all substituents",
      "The β-anomer always being more stable",
      "The open-chain form over the cyclic form"
    ],
    "correctAnswer": 0,
    "explanation": "The anomeric effect is a stereoelectronic effect that dictates that for a sugar pyranose ring, an electronegative substituent (like an -OH or -OR group) on the anomeric carbon prefers the axial orientation, which is sterically less favorable but electronically stabilized. This is why the α-anomer of some sugars can be favored."
  },
  {
    "id": "carb-102",
    "question": "The disease diabetes mellitus is characterized by:",
    "options": [
      "Low blood glucose levels",
      "High blood glucose levels",
      "Inability to digest lactose",
      "Defective glycogen breakdown"
    ],
    "correctAnswer": 1,
    "explanation": "Diabetes mellitus is a group of metabolic disorders characterized by hyperglycemia (high blood glucose levels) resulting from defects in insulin secretion, insulin action, or both. This leads to the classic symptoms of polyuria, polydipsia, and polyphagia."
  },
  {
    "id": "carb-103",
    "question": "The specific type of glycosidic bond in trehalose is:",
    "options": [
      "α,α-1,1-glycosidic",
      "α,β-1,2-glycosidic",
      "β,β-1,1-glycosidic",
      "α-1,4-glycosidic"
    ],
    "correctAnswer": 0,
    "explanation": "Trehalose is a non-reducing disaccharide found in insects, fungi, and some plants. It consists of two glucose molecules linked by an α,α-1,1-glycosidic bond. This bond involves both anomeric carbons, making it non-reducing."
  },
  {
    "id": "carb-104",
    "question": "The net ATP yield from the complete aerobic oxidation of one molecule of glucose is approximately:",
    "options": [
      "2 ATP",
      "8 ATP",
      "30-32 ATP",
      "100 ATP"
    ],
    "correctAnswer": 2,
    "explanation": "The complete aerobic oxidation of glucose (via glycolysis, pyruvate decarboxylation, the citric acid cycle, and oxidative phosphorylation) has a theoretical maximum yield of about 30-32 ATP per glucose molecule. The exact number depends on the shuttle system used for NADH from glycolysis."
  },
  {
    "id": "carb-105",
    "question": "Which of the following is a derivative of glucose used in the synthesis of glycosaminoglycans?",
    "options": [
      "Glucuronic acid",
      "Gluconic acid",
      "Glucaric acid",
      "Saccharic acid"
    ],
    "correctAnswer": 0,
    "explanation": "Glucuronic acid is a carboxylic acid derived from glucose by oxidation of the C6 primary alcohol group to a carboxyl group. It is a common component of glycosaminoglycans (GAGs) like hyaluronic acid, chondroitin sulfate, and heparin."
  },
  {
    "id": "carb-106",
    "question": "The 'branching enzyme' involved in glycogen synthesis is:",
    "options": [
      "Glycogen synthase",
      "Glycogen phosphorylase",
      "Amylo-(1,4→1,6)-transglycosylase",
      "Debranching enzyme"
    ],
    "correctAnswer": 2,
    "explanation": "The branching enzyme, officially known as amylo-(1,4→1,6)-transglycosylase, creates the α-1,6 glycosidic bonds at the branch points of glycogen. It transfers a terminal segment of about 7 glucose residues from a growing chain to a more interior site on the same or another chain."
  },
  {
    "id": "carb-107",
    "question": "A sugar that rotates plane-polarized light to the left is said to be:",
    "options": [
      "Dextrorotatory",
      "Levorotatory",
      "Meso",
      "Achiral"
    ],
    "correctAnswer": 1,
    "explanation": "Levorotatory (l- or (-)) compounds rotate the plane of plane-polarized light counterclockwise (to the left). The D/L designation (based on configuration) is independent of the (+) or (-) designation (based on optical rotation). For example, D-fructose is levorotatory."
  },
  {
    "id": "carb-108",
    "question": "The primary regulatory enzyme of glycolysis is:",
    "options": [
      "Hexokinase",
      "Phosphofructokinase-1 (PFK-1)",
      "Pyruvate kinase",
      "Aldolase"
    ],
    "correctAnswer": 1,
    "explanation": "Phosphofructokinase-1 (PFK-1) catalyzes the committed step of glycolysis (fructose-6-phosphate → fructose-1,6-bisphosphate). It is the most important control point and is allosterically inhibited by ATP and citrate and activated by AMP and fructose-2,6-bisphosphate."
  },
  {
    "id": "carb-109",
    "question": "Which of the following is a heteropolysaccharide used as a blood plasma substitute?",
    "options": [
      "Dextran",
      "Cellulose",
      "Glycogen",
      "Inulin"
    ],
    "correctAnswer": 0,
    "explanation": "Dextran is a branched polymer of glucose synthesized by certain bacteria. It has α-1,6 linkages with α-1,3 branches. Certain fractions of dextran are used clinically as plasma volume expanders to treat hypovolemia (low blood volume)."
  },
  {
    "id": "carb-110",
    "question": "The sugar found in the glycolipids that determine ABO blood groups is:",
    "options": [
      "Glucose",
      "Fructose",
      "N-acetylgalactosamine",
      "L-fucose"
    ],
    "correctAnswer": 3,
    "explanation": "The specificity of ABO blood group antigens is determined by the terminal sugar on glycolipids present on the surface of red blood cells. The H antigen has L-fucose as its terminal sugar. The A antigen adds N-acetylgalactosamine, and the B antigen adds galactose."
  },
  {
    "id": "carb-111",
    "question": "The process of converting pyruvate back to glucose is called:",
    "options": [
      "Glycolysis",
      "Gluconeogenesis",
      "Glycogenolysis",
      "Glycogenesis"
    ],
    "correctAnswer": 1,
    "explanation": "Gluconeogenesis is the synthesis of new glucose from non-carbohydrate precursors. Pyruvate is a key gluconeogenic precursor. The pathway bypasses the irreversible steps of glycolysis using different enzymes, such as pyruvate carboxylase and phosphoenolpyruvate carboxykinase (PEPCK)."
  },
  {
    "id": "carb-112",
    "question": "Which of the following is a feature of glycogen but NOT amylopectin?",
    "options": [
      "α-1,4 glycosidic linkages",
      "α-1,6 glycosidic linkages",
      "More frequent branching",
      "Made of glucose units"
    ],
    "correctAnswer": 2,
    "explanation": "Both glycogen and amylopectin are branched polymers of α-D-glucose with α-1,4 and α-1,6 linkages. The key difference is the degree of branching: glycogen has branches every 8-12 glucose residues, while amylopectin has branches every 24-30 residues. Glycogen is more highly branched."
  },
  {
    "id": "carb-113",
    "question": "The 'pentose phosphate pathway' is important for generating:",
    "options": [
      "ATP",
      "NADH and pyruvate",
      "NADPH and ribose-5-phosphate",
      "Acetyl-CoA"
    ],
    "correctAnswer": 2,
    "explanation": "The pentose phosphate pathway (PPP) runs parallel to glycolysis. Its primary functions are: 1) To generate NADPH for reductive biosynthesis (e.g., fatty acid synthesis) and antioxidant systems, and 2) To provide ribose-5-phosphate for nucleotide synthesis."
  },
  {
    "id": "carb-114",
    "question": "The inability to properly metabolize fructose due to a deficiency of aldolase B causes:",
    "options": [
      "Galactosemia",
      "Essential fructosuria",
      "Hereditary fructose intolerance",
      "Fructose-1,6-bisphosphatase deficiency"
    ],
    "correctAnswer": 2,
    "explanation": "Hereditary fructose intolerance (HFI) is an autosomal recessive disorder caused by a deficiency of aldolase B in the liver, kidney, and intestine. This leads to the accumulation of fructose-1-phosphate, causing hypoglycemia, liver failure, and a strong aversion to sweet foods."
  },
  {
    "id": "carb-115",
    "question": "The carbon atom that is asymmetric in glyceraldehyde but not in dihydroxyacetone is:",
    "options": [
      "C1",
      "C2",
      "C3",
      "All are asymmetric"
    ],
    "correctAnswer": 1,
    "explanation": "Glyceraldehyde (an aldotriose) has one chiral center at C2. Dihydroxyacetone (a ketotriose) has no chiral centers because its carbonyl group is at C2, making C2 symmetric (it has two identical -CH₂OH groups)."
  },
  {
    "id": "carb-116",
    "question": "The specific type of linkage between N-acetylglucosamine (NAG) and N-acetylmuramic acid (NAM) in peptidoglycan is:",
    "options": [
      "α-1,4-glycosidic",
      "β-1,4-glycosidic",
      "α-1,6-glycosidic",
      "β-1,6-glycosidic"
    ],
    "correctAnswer": 1,
    "explanation": "The backbone of peptidoglycan is composed of alternating units of N-acetylglucosamine (NAG) and N-acetylmuramic acid (NAM) linked by β(1→4) glycosidic bonds. This structure is cross-linked by short peptide chains."
  },
  {
    "id": "carb-117",
    "question": "The 'limit dextrin' is the product left after the action of:",
    "options": [
      "α-amylase on starch",
      "β-amylase on starch",
      "Glycogen phosphorylase on glycogen",
      "Debranching enzyme on glycogen"
    ],
    "correctAnswer": 2,
    "explanation": "Glycogen phosphorylase can only break α-1,4 linkages until it reaches a point 4 glucose residues away from a branch point. The structure that remains, which contains the branch points, is called a limit dextrin. The debranching enzyme is then required to hydrolyze the α-1,6 linkages."
  },
  {
    "id": "carb-118",
    "question": "Which of the following is a uronic acid?",
    "options": [
      "Gluconic acid",
      "Glucuronic acid",
      "Saccharic acid",
      "Ascorbic acid"
    ],
    "correctAnswer": 1,
    "explanation": "Uronic acids are sugar acids where the terminal -CH₂OH group has been oxidized to a carboxylic acid while the aldehyde group remains unchanged. Glucuronic acid is a common uronic acid derived from glucose. Gluconic acid has the aldehyde oxidized, and saccharic acid has both ends oxidized."
  },
  {
    "id": "carb-119",
    "question": "The 'reducing end' of a polysaccharide has:",
    "options": [
      "A free anomeric carbon",
      "A branch point",
      "An α-1,6 linkage",
      "A modified sugar"
    ],
    "correctAnswer": 0,
    "explanation": "The reducing end of a polysaccharide chain has a free anomeric carbon that is not involved in a glycosidic bond. This end can therefore act as a reducing agent and undergo reactions like mutarotation. The other end is called the non-reducing end."
  },
  {
    "id": "carb-120",
    "question": "The hormone that stimulates the breakdown of glycogen to glucose in the liver is:",
    "options": [
      "Insulin",
      "Glucagon",
      "Epinephrine",
      "Both B and C"
    ],
    "correctAnswer": 3,
    "explanation": "Glycogenolysis in the liver is stimulated by the hormones glucagon (secreted by the pancreas in response to low blood sugar) and epinephrine (adrenaline, secreted by the adrenal medulla in response to stress). These hormones activate glycogen phosphorylase."
  },
  {
    "id": "carb-121",
    "question": "The sugar component of the coenzyme FAD (Flavin Adenine Dinucleotide) is:",
    "options": [
      "Ribose",
      "Deoxyribose",
      "Glucose",
      "Fructose"
    ],
    "correctAnswer": 0,
    "explanation": "FAD is a redox cofactor. Its name, Flavin Adenine Dinucleotide, indicates it is composed of a flavin mononucleotide (FMN) moiety and an adenosine monophosphate (AMP) moiety. The AMP portion contains the pentose sugar ribose."
  },
  {
    "id": "carb-122",
    "question": "The 'Wohl degradation' is a method used to:",
    "options": [
      "Shorten the carbon chain of a sugar",
      "Lengthen the carbon chain of a sugar",
      "Oxidize the aldehyde group of a sugar",
      "Reduce the ketone group of a sugar"
    ],
    "correctAnswer": 0,
    "explanation": "The Wohl degradation is a chemical reaction that shortens an aldose chain by one carbon atom. It involves the conversion of an aldose to the next lower aldose. The opposite reaction, chain lengthening, is achieved by the Kiliani-Fischer synthesis."
  },
  {
    "id": "carb-123",
    "question": "Which of the following is a deoxy sugar found in certain bacterial cell walls?",
    "options": [
      "Rhamnose",
      "Fucose",
      "Xylose",
      "Arabinose"
    ],
    "correctAnswer": 0,
    "explanation": "Rhamnose (6-deoxy-L-mannose) is a deoxy sugar that is a component of the polysaccharides in the cell walls of some bacteria and plants. L-Fucose is also a deoxy sugar (6-deoxy-L-galactose) found in ABO blood group antigens."
  },
  {
    "id": "carb-124",
    "question": "The 'Fehling's test' and 'Benedict's test' are both used to detect:",
    "options": [
      "Starch",
      "Reducing sugars",
      "Proteins",
      "Lipids"
    ],
    "correctAnswer": 1,
    "explanation": "Both Fehling's test and Benedict's test are classic qualitative tests used to detect the presence of reducing sugars. They are based on the reduction of Cu²⁺ (blue) in the reagent to Cu⁺, which forms a precipitate of red copper(I) oxide (Cu₂O)."
  },
  {
    "id": "carb-125",
    "question": "The primary function of fructose-2,6-bisphosphate is to:",
    "options": [
      "Inhibit glycolysis",
      "Activate gluconeogenesis",
      "Activate phosphofructokinase-1 (PFK-1)",
      "Inhibit hexokinase"
    ],
    "correctAnswer": 2,
    "explanation": "Fructose-2,6-bisphosphate (F2,6BP) is a powerful allosteric activator of phosphofructokinase-1 (PFK-1), the rate-limiting enzyme of glycolysis. It simultaneously inhibits fructose-1,6-bisphosphatase, a key enzyme of gluconeogenesis. It is a key regulator of the glycolytic/gluconeogenic switch."
  },
  {
    "id": "carb-126",
    "question": "The 'Haworth projection' represents the:",
    "options": [
      "Open-chain form of a sugar",
      "Cyclic form of a sugar",
      "Fischer projection of a sugar",
      "3D structure of a sugar"
    ],
    "correctAnswer": 1,
    "explanation": "The Haworth projection is a common way to represent the cyclic structure of monosaccharides. It depicts the ring as a flat plane (usually a hexagon for pyranoses or a pentagon for furanoses) viewed edge-on, with substituents shown as being above or below this plane."
  },
  {
    "id": "carb-127",
    "question": "A sugar that is NOT a reducing sugar because it has no free anomeric carbon is:",
    "options": [
      "Maltose",
      "Lactose",
      "Sucrose",
      "Cellobiose"
    ],
    "correctAnswer": 2,
    "explanation": "Sucrose is a non-reducing disaccharide because the anomeric carbons of both monosaccharide units (glucose and fructose) are involved in the glycosidic bond (α1-β2). This means neither ring can open to form a free aldehyde or ketone group, so it cannot act as a reducing agent."
  },
  {
    "id": "carb-128",
    "question": "The 'Osazone test' is used to:",
    "options": [
      "Distinguish between reducing and non-reducing sugars",
      "Identify specific monosaccharides based on crystal shape",
      "Measure the concentration of glucose in blood",
      "Detect the presence of starch"
    ],
    "correctAnswer": 1,
    "explanation": "The osazone test involves the reaction of a reducing sugar with phenylhydrazine to form osazone crystals. Different sugars form osazone crystals with characteristic shapes and melting points, which can be used for their identification (e.g., glucosazone, maltosazone)."
  },
  {
    "id": "carb-129",
    "question": "The process of breaking down starch into smaller dextrins and maltose is initiated by:",
    "options": [
      "Sucrase",
      "Lactase",
      "Salivary amylase",
      "Pancreatic lipase"
    ],
    "correctAnswer": 2,
    "explanation": "Digestion of starch begins in the mouth with the enzyme salivary amylase (ptyalin). It hydrolyzes internal α-1,4 glycosidic linkages in starch, producing a mixture of smaller dextrins, maltose, and some glucose."
  },
  {
    "id": "carb-130",
    "question": "The 'glycemic index' of a food refers to its ability to:",
    "options": [
      "Cause allergic reactions",
      "Raise blood glucose levels",
      "Provide essential vitamins",
      "Stimulate insulin secretion directly"
    ],
    "correctAnswer": 1,
    "explanation": "The glycemic index (GI) is a measure that ranks carbohydrate-containing foods by how much they raise blood glucose levels compared to a reference food (usually pure glucose). High-GI foods cause a rapid spike in blood sugar, while low-GI foods cause a slower, more gradual increase."
  },
  {
    "id": "carb-131",
    "question": "Which of the following is an amino sugar?",
    "options": [
      "Glucuronic acid",
      "N-acetylneuraminic acid",
      "Glucosamine",
      "Fructose-6-phosphate"
    ],
    "correctAnswer": 2,
    "explanation": "Amino sugars have an amino group (-NH₂) replacing a hydroxyl group. Glucosamine is an amino sugar derived from glucose, where the hydroxyl group on C2 is replaced by an amino group. It is a component of glycosaminoglycans like hyaluronic acid."
  },
  {
    "id": "carb-132",
    "question": "The 'Leloir pathway' is involved in the metabolism of:",
    "options": [
      "Glucose",
      "Fructose",
      "Galactose",
      "Mannose"
    ],
    "correctAnswer": 2,
    "explanation": "The Leloir pathway is the main pathway for the metabolism of galactose. It involves the enzymes galactokinase, galactose-1-phosphate uridylyltransferase (GALT), and UDP-galactose 4-epimerase, which ultimately convert galactose to glucose-1-phosphate for entry into glycolysis."
  },
  {
    "id": "carb-133",
    "question": "A sugar that has the same molecular formula and functional groups but differs in spatial configuration is a(n):",
    "options": [
      "Conformational isomer",
      "Structural isomer",
      "Stereoisomer",
      "Polymer"
    ],
    "correctAnswer": 2,
    "explanation": "Stereoisomers are molecules that have the same molecular formula and sequence of bonded atoms (constitution) but differ in the three-dimensional orientations of their atoms in space. Enantiomers and diastereomers (including epimers) are types of stereoisomers."
  },
  {
    "id": "carb-134",
    "question": "The 'in vivo' regulator of glycogen synthase is:",
    "options": [
      "ATP",
      "Glucose-6-phosphate",
      "cAMP",
      "Glycogen itself"
    ],
    "correctAnswer": 1,
    "explanation": "Glycogen synthase, the enzyme that adds glucose units to a growing glycogen chain, is allosterically activated by glucose-6-phosphate. This means when energy is abundant (high G6P), glycogen synthesis is promoted."
  },
  {
    "id": "carb-135",
    "question": "Which of the following is a characteristic of fiber?",
    "options": [
      "It is digestible by human enzymes",
      "It is primarily composed of α-linked glucose polymers",
      "It provides 4 kcal of energy per gram",
      "It is primarily composed of β-linked glucose polymers"
    ],
    "correctAnswer": 3,
    "explanation": "Dietary fiber refers to carbohydrates that are indigestible by human enzymes. A major component is cellulose, which is a polymer of β-linked glucose. Other components include hemicellulose, pectin, and lignin. It does not provide significant calories but is important for digestive health."
  },
  {
    "id": "carb-136",
    "question": "The 'Krebs cycle' is also known as the:",
    "options": [
      "Glycolytic cycle",
      "Citric acid cycle",
      "Cori cycle",
      "Pentose phosphate pathway"
    ],
    "correctAnswer": 1,
    "explanation": "The Krebs cycle, named after Hans Krebs, is also called the citric acid cycle or the tricarboxylic acid (TCA) cycle. It is the second stage of cellular respiration, where acetyl-CoA is oxidized to produce ATP, NADH, FADH₂, and CO₂."
  },
  {
    "id": "carb-137",
    "question": "The sugar present in ATP is:",
    "options": [
      "Deoxyribose",
      "Ribose",
      "Glucose",
      "Fructose"
    ],
    "correctAnswer": 1,
    "explanation": "ATP (Adenosine Triphosphate) is composed of adenine (a nitrogenous base), ribose (a pentose sugar), and three phosphate groups. The sugar component is always ribose."
  },
  {
    "id": "carb-138",
    "question": "The 'HMP shunt' is another name for the:",
    "options": [
      "Glycolytic pathway",
      "Pentose phosphate pathway",
      "Cori cycle",
      "Krebs cycle"
    ],
    "correctAnswer": 1,
    "explanation": "The HMP shunt stands for Hexose Monophosphate Shunt. This is an alternative name for the pentose phosphate pathway (PPP), reflecting that glucose-6-phosphate (a hexose monophosphate) is the entry point into this shunt pathway."
  },
  {
    "id": "carb-139",
    "question": "A patient presents with a high blood lactate level after exercise. This is most likely due to:",
    "options": [
      "Aerobic metabolism",
      "Anaerobic glycolysis",
      "Gluconeogenesis",
      "Glycogen synthesis"
    ],
    "correctAnswer": 1,
    "explanation": "During intense exercise, when oxygen demand outstrips supply (anaerobic conditions), muscle cells rely heavily on glycolysis. Pyruvate, the end product of glycolysis, is converted to lactate by the enzyme lactate dehydrogenase (LDH) to regenerate NAD⁺ needed to keep glycolysis running. This leads to a temporary buildup of lactate."
  },
  {
    "id": "carb-140",
    "question": "The 'Michaelis-Menten constant' (Km) for an enzyme is:",
    "options": [
      "The maximum rate of the reaction",
      "The substrate concentration at which the reaction rate is half of Vmax",
      "The turnover number of the enzyme",
      "The dissociation constant for the enzyme-inhibitor complex"
    ],
    "correctAnswer": 1,
    "explanation": "The Michaelis constant (Km) is defined as the substrate concentration at which the reaction velocity is half of the maximum velocity (Vmax). It is an inverse measure of the enzyme's affinity for its substrate; a low Km indicates high affinity."
  },
  {
    "id": "carb-141",
    "question": "Which of the following is a glycosaminoglycan (GAG) that acts as an anticoagulant?",
    "options": [
      "Hyaluronic acid",
      "Chondroitin sulfate",
      "Heparin",
      "Keratan sulfate"
    ],
    "correctAnswer": 2,
    "explanation": "Heparin is a highly sulfated glycosaminoglycan that is stored in the mast cells of various tissues. It is a powerful anticoagulant that is often used clinically to prevent and treat blood clots. It works by activating antithrombin III, which inhibits clotting factors."
  },
  {
    "id": "carb-142",
    "question": "The 'Wood-Werkman reaction' is an important anaplerotic reaction that adds carbon to the citric acid cycle by converting pyruvate to:",
    "options": [
      "Lactate",
      "Acetyl-CoA",
      "Oxaloacetate",
      "Malate"
    ],
    "correctAnswer": 2,
    "explanation": "The pyruvate carboxylase reaction (sometimes referred to in the context of the Wood-Werkman reaction) is a crucial anaplerotic reaction. It replenishes the citric acid cycle intermediate oxaloacetate by catalyzing: Pyruvate + CO₂ + ATP → Oxaloacetate + ADP + Pi."
  },
  {
    "id": "carb-143",
    "question": "A sugar that contains an aldehyde group is called a(n):",
    "options": [
      "Aldose",
      "Ketose",
      "Sugar alcohol",
      "Deoxy sugar"
    ],
    "correctAnswer": 0,
    "explanation": "An aldose is a monosaccharide that contains an aldehyde functional group at the end of the carbon chain. Examples include glucose, galactose, and ribose. A ketose contains a ketone functional group (e.g., fructose)."
  },
  {
    "id": "carb-144",
    "question": "The 'Pasteur effect' describes:",
    "options": [
      "The inhibition of glycolysis by oxygen",
      "The stimulation of fermentation by oxygen",
      "The conversion of sugar to alcohol by yeast",
      "The sterilization of food by heat"
    ],
    "correctAnswer": 0,
    "explanation": "The Pasteur effect is the observation that aerobic conditions inhibit the rate of glycolysis and fermentation. In the presence of oxygen (which allows for much more efficient ATP production via oxidative phosphorylation), yeast and other cells slow down their glycolytic rate."
  },
  {
    "id": "carb-145",
    "question": "The 'Fischer projection' represents a molecule using:",
    "options": [
      "A series of wedges and dashes",
      "Horizontal and vertical lines",
      "A hexagonal ring",
      "A 3D ball-and-stick model"
    ],
    "correctAnswer": 1,
    "explanation": "A Fischer projection is a two-dimensional representation of a three-dimensional organic molecule, specifically sugars and amino acids. Horizontal lines represent bonds projecting out of the plane (toward the viewer), and vertical lines represent bonds projecting behind the plane."
  },
  {
    "id": "carb-146",
    "question": "The disease 'Pompe disease' is a glycogen storage disease caused by a deficiency of:",
    "options": [
      "Glucose-6-phosphatase",
      "Acid α-glucosidase (lysosomal)",
      "Liver phosphorylase",
      "Debranching enzyme"
    ],
    "correctAnswer": 1,
    "explanation": "Pompe disease (Glycogen storage disease type II) is caused by a deficiency of acid α-glucosidase (GAA), a lysosomal enzyme. This leads to the accumulation of glycogen within lysosomes, particularly affecting cardiac and skeletal muscles, and is often fatal in infancy."
  },
  {
    "id": "carb-147",
    "question": "The 'Ruff degradation' is a method for:",
    "options": [
      "Oxidizing the aldose to aldonic acid",
      "Shortening an aldose chain by one carbon",
      "Lengthening an aldose chain by one carbon",
      "Reducing the aldose to sugar alcohol"
    ],
    "correctAnswer": 1,
    "explanation": "The Ruff degradation is a chemical method used to shorten the chain of an aldose by one carbon atom. It involves oxidation of the aldose to an aldonic acid, followed by decarboxylation with hydrogen peroxide and ferric salt to yield the next lower aldose."
  },
  {
    "id": "carb-148",
    "question": "The 'glycocalyx' is a layer on the cell surface composed primarily of:",
    "options": [
      "Phospholipids",
      "Proteins",
      "Carbohydrates",
      "Nucleic acids"
    ],
    "correctAnswer": 2,
    "explanation": "The glycocalyx is a glycoprotein and glycolipid coating that surrounds the cell membranes of some bacteria, epithelia, and other cells. It is composed of carbohydrate moieties of membrane glycoproteins and glycolipids, and it plays roles in cell protection, adhesion, and recognition."
  },
  {
    "id": "carb-149",
    "question": "The 'Crabtree effect' is the phenomenon where:",
    "options": [
      "Aerobic conditions inhibit fermentation",
      "High glucose levels inhibit respiration and promote fermentation, even under aerobic conditions",
      "Oxygen is required for fermentation",
      "Glycolysis is always aerobic"
    ],
    "correctAnswer": 1,
    "explanation": "The Crabtree effect describes the inhibition of respiration by high levels of glucose, leading to enhanced fermentation (lactate production in animals, ethanol production in yeast) even in the presence of oxygen. This is in contrast to the Pasteur effect."
  },
  {
    "id": "carb-150",
    "question": "The 'Meyerhof quotient' is defined as:",
    "options": [
      "The ratio of lactate produced to glucose consumed",
      "The ratio of ATP produced to oxygen consumed",
      "The ratio of glycogen to glucose in the liver",
      "The ratio of NADH to NAD⁺ in the cell"
    ],
    "correctAnswer": 0,
    "explanation": "The Meyerhof quotient (QM) is used in studies of muscle metabolism. It is the ratio of lactic acid formed to glycogen disappeared (or glucose consumed). Under anaerobic conditions, the theoretical QM is 2.0, as one glucose yields two lactate molecules."
  },
  {
    "id": "carb-151",
    "question": "In the liver, the GLUT2 transporter and the enzyme glucokinase work together to:",
    "options": [
      "Respond rapidly to small increases in blood glucose",
      "Ensure glucose uptake only during starvation",
      "Act as a glucose sensor, allowing uptake only when blood glucose is high",
      "Export glucose out of hepatocytes"
    ],
    "correctAnswer": 2,
    "explanation": "GLUT2 is a low-affinity, high-capacity glucose transporter. Glucokinase has a high Km for glucose, meaning it only works significantly at high glucose concentrations. This duo acts as a glucose sensor for the liver, promoting glycogen synthesis and glycolysis only when blood glucose levels are elevated after a meal, preventing the liver from consuming glucose during fasting."
  },
  {
    "id": "carb-152",
    "question": "A molecule is identified as an aldopentose. How many chiral centers and how many possible stereoisomers does it have?",
    "options": [
      "2 chiral centers; 4 stereoisomers",
      "3 chiral centers; 8 stereoisomers",
      "4 chiral centers; 16 stereoisomers",
      "5 chiral centers; 32 stereoisomers"
    ],
    "correctAnswer": 1,
    "explanation": "An aldopentose has 5 carbon atoms. Carbon 1 is the aldehyde (not chiral in open chain), and carbon 5 is a CH₂OH group (not chiral). Carbons 2, 3, and 4 are chiral centers. The number of possible stereoisomers is 2ⁿ, where n is the number of chiral centers. Therefore, 2³ = 8 possible stereoisomers."
  },
  {
    "id": "carb-153",
    "question": "The primary reason cellulose provides structural strength while starch is primarily for storage is due to their differing:",
    "options": [
      "Monosaccharide units",
      "Types of glycosidic linkages and resulting overall structure",
      "Molecular weights",
      "Locations in the cell"
    ],
    "correctAnswer": 1,
    "explanation": "Starch (amylose) uses α-1,4 linkages, which create a helical structure. Cellulose uses β-1,4 linkages, which allow the molecules to form straight, extended chains. These straight chains can form extensive inter- and intramolecular hydrogen bonds, bundling into tough, insoluble microfibrils ideal for structural support. The helical structure of starch is more compact and accessible for enzymatic breakdown."
  },
  {
    "id": "carb-154",
    "question": "A solution contains a mixture of sugars. After hydrolysis, the products give a positive Benedict's test. The original solution could have contained:",
    "options": [
      "Only sucrose",
      "Only maltose",
      "Sucrose and cellulose",
      "Lactose and glycogen"
    ],
    "correctAnswer": 3,
    "explanation": "Hydrolysis breaks glycosidic bonds. Sucrose and cellulose are both non-reducing in their native form, but hydrolysis would release their reducing monomers (glucose/fructose from sucrose; glucose from cellulose), yielding a positive test. Maltose is already reducing, so hydrolysis isn't needed. Lactose (reducing) and glycogen (non-reducing, but releases reducing glucose upon hydrolysis) would also yield a positive test after hydrolysis."
  },
  {
    "id": "carb-155",
    "question": "The hormone glucagon primarily targets the liver to elevate blood sugar by activating:",
    "options": [
      "Glycogen synthase and inhibiting glycogen phosphorylase",
      "Glycogen phosphorylase and inhibiting glycogen synthase",
      "Glycolysis and inhibiting gluconeogenesis",
      "Insulin secretion"
    ],
    "correctAnswer": 1,
    "explanation": "Glucagon is released in response to low blood sugar. It binds to receptors on liver cells, triggering a cAMP-mediated cascade that leads to the phosphorylation and activation of glycogen phosphorylase (to break down glycogen) and the phosphorylation and inactivation of glycogen synthase (to stop glycogen synthesis). This net effect releases glucose into the bloodstream."
  },
  {
    "id": "carb-156",
    "question": "Why does a diet high in amylose have a lower glycemic index compared to one high in amylopectin?",
    "options": [
      "Amylose is sweeter, so less is consumed",
      "Amylose is indigestible by humans",
      "The tight helical structure of amylose is less accessible to digestive enzymes",
      "Amylose inhibits intestinal glucose transporters"
    ],
    "correctAnswer": 2,
    "explanation": "The linear, helical structure of amylose packs tightly and has fewer endpoints for enzymatic attack compared to the highly branched structure of amylopectin. This results in a slower rate of enzymatic digestion by amylase and subsequent enzymes, leading to a more gradual release and absorption of glucose, and thus a lower glycemic index."
  },
  {
    "id": "carb-157",
    "question": "The 'branching enzyme' (amylo-(1,4→1,6)-transglycosylase) is essential for glycogen synthesis because it:",
    "options": [
      "Forms the initial glycogen primer",
      "Creates α-1,4 linkages in the main chain",
      "Introduces α-1,6 linkages to create branch points",
      "Hydrolyzes α-1,6 linkages during glycogen breakdown"
    ],
    "correctAnswer": 2,
    "explanation": "Glycogen synthase can only add glucose units in α-1,4 linkages. The branching enzyme is required to create branches. It cleaves an oligosaccharide (about 7 glucose units long) from the end of a growing chain and reattaches it via an α-1,6 glycosidic linkage to a more interior glucose residue on the same or another chain. This dramatically increases solubility and the number of non-reducing ends for rapid synthesis and degradation."
  },
  {
    "id": "carb-158",
    "question": "In the context of the ABO blood group system, the difference between type A and type B antigens is a single:",
    "options": [
      " Glucose molecule",
      "N-acetylgalactosamine vs. galactose terminal sugar",
      "Fucose molecule",
      "Sialic acid molecule"
    ],
    "correctAnswer": 1,
    "explanation": "The ABO blood group antigens are glycolipids on the surface of red blood cells. They share a common core structure (the H antigen, which has a terminal fucose). Type A antigen has an additional N-acetylgalactosamine (GalNAc) linked to the core. Type B antigen has an additional galactose (Gal) linked instead. This tiny difference is what the immune system recognizes."
  },
  {
    "id": "carb-159",
    "question": "A patient has a genetic defect affecting the first enzyme in the pentose phosphate pathway (G6PD deficiency). This patient would be most susceptible to:",
    "options": [
      "Hypoglycemia",
      "Oxidative stress and hemolytic anemia",
      "Lactic acidosis",
      "Glycogen accumulation"
    ],
    "correctAnswer": 1,
    "explanation": "Glucose-6-phosphate dehydrogenase (G6PD) is the rate-limiting enzyme of the pentose phosphate pathway (PPP). Its primary role is to generate NADPH. NADPH is essential for maintaining reduced glutathione, which protects cells (especially red blood cells) from oxidative damage. A deficiency leads to oxidative stress, causing hemoglobin to denature and form Heinz bodies, leading to hemolysis (hemolytic anemia)."
  },
  {
    "id": "carb-160",
    "question": "The Cori cycle is a crucial metabolic partnership between muscle and liver. In this cycle, lactate produced in muscles is converted in the liver to glucose. This process is an example of:",
    "options": [
      "Glycolysis",
      "Gluconeogenesis",
      "Glycogenolysis",
      "Beta-oxidation"
    ],
    "correctAnswer": 1,
    "explanation": "The Cori cycle involves the liver using lactate (a waste product from anaerobic glycolysis in muscle) as a substrate to synthesize new glucose. The metabolic pathway that synthesizes glucose from non-carbohydrate precursors (like lactate, glycerol, and amino acids) is called gluconeogenesis. This glucose can then be returned to the muscles via the bloodstream."
  }
];