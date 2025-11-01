export interface Question {
  id: string;
  question: string;
  options: string[];
  correctAnswer: number;
  explanation: string;
}

export const enzymeQuestions: Question[] = [
  {
    id: "enzyme-1",
    question: "What is the primary function of enzymes in biological systems?",
    options: [
      "To provide structural support",
      "To catalyze biochemical reactions",
      "To store genetic information",
      "To transport oxygen"
    ],
    correctAnswer: 1,
    explanation: "Enzymes are biological catalysts that speed up biochemical reactions by lowering activation energy without being consumed."
  },
  {
    id: "enzyme-2",
    question: "Enzymes are mainly composed of which type of biological molecule?",
    options: ["Lipids", "Proteins", "Carbohydrates", "Nucleic acids"],
    correctAnswer: 1,
    explanation: "Most enzymes are proteins, although some RNA molecules (ribozymes) can act as enzymes."
  },
  {
    id: "enzyme-3",
    question: "What happens to the activation energy of a reaction when an enzyme is present?",
    options: ["It increases", "It decreases", "It remains the same", "It becomes zero"],
    correctAnswer: 1,
    explanation: "Enzymes lower the activation energy required for a reaction to proceed, making reactions faster."
  },
  {
    id: "enzyme-4",
    question: "Which model explains that the substrate fits exactly into the enzyme’s active site?",
    options: [
      "Fluid mosaic model",
      "Lock-and-Key model",
      "Induced Fit model",
      "Endosymbiotic model"
    ],
    correctAnswer: 1,
    explanation: "The Lock-and-Key model suggests that the substrate fits perfectly into the enzyme’s active site like a key into a lock."
  },
  {
    id: "enzyme-5",
    question: "Which factor does NOT affect enzyme activity?",
    options: ["Temperature", "pH", "Enzyme concentration", "Atomic number"],
    correctAnswer: 3,
    explanation: "Temperature, pH, and enzyme concentration affect enzyme activity. Atomic number is irrelevant."
  },
  {
    id: "enzyme-6",
    question: "Which part of the enzyme binds to the substrate?",
    options: ["Active site", "Allosteric site", "Binding groove", "Catalytic pocket"],
    correctAnswer: 0,
    explanation: "The substrate binds to the enzyme at its active site, forming the enzyme-substrate complex."
  },
  {
    id: "enzyme-7",
    question: "Which of the following describes the Induced Fit model?",
    options: [
      "Substrate and enzyme shape remain rigid",
      "Active site changes shape to fit the substrate",
      "Substrate molds itself to enzyme permanently",
      "No structural changes occur during binding"
    ],
    correctAnswer: 1,
    explanation: "In the Induced Fit model, the active site undergoes conformational change to fit the substrate more closely."
  },
  {
    id: "enzyme-8",
    question: "What is the effect of very high temperature on enzyme activity?",
    options: [
      "It increases indefinitely",
      "It denatures the enzyme",
      "It has no effect",
      "It increases substrate concentration"
    ],
    correctAnswer: 1,
    explanation: "At very high temperatures, enzymes lose their three-dimensional structure and become denatured."
  },
  {
    id: "enzyme-9",
    question: "Which of the following is an example of a coenzyme?",
    options: ["NAD+", "Calcium ion", "Iron atom", "Water molecule"],
    correctAnswer: 0,
    explanation: "Coenzymes are organic molecules like NAD+, FAD, and coenzyme A that assist enzymes."
  },
  {
    id: "enzyme-10",
    question: "Which statement is correct about enzymes?",
    options: [
      "They are consumed in the reaction",
      "They speed up reactions without being used up",
      "They change the equilibrium of the reaction",
      "They work only at high temperatures"
    ],
    correctAnswer: 1,
    explanation: "Enzymes accelerate reactions but remain unchanged at the end, so they can be reused."
  },
  {
    id: "enzyme-11",
    question: "Which type of inhibition can be overcome by increasing substrate concentration?",
    options: [
      "Non-competitive inhibition",
      "Competitive inhibition",
      "Allosteric inhibition",
      "Feedback inhibition"
    ],
    correctAnswer: 1,
    explanation: "In competitive inhibition, inhibitors compete with substrates for the active site. Adding more substrate reduces inhibition."
  },
  {
    id: "enzyme-12",
    question: "What is the optimal pH for pepsin activity?",
    options: ["2", "7", "9", "12"],
    correctAnswer: 0,
    explanation: "Pepsin, found in the stomach, works best in acidic conditions (around pH 2)."
  },
  {
    id: "enzyme-13",
    question: "What happens when an enzyme is denatured?",
    options: [
      "Its primary structure changes",
      "Its active site loses shape",
      "It forms new enzymes",
      "Its DNA mutates"
    ],
    correctAnswer: 1,
    explanation: "Denaturation alters the enzyme’s three-dimensional shape, particularly the active site, making it nonfunctional."
  },
  {
    id: "enzyme-14",
    question: "Which enzyme catalyzes the breakdown of hydrogen peroxide into water and oxygen?",
    options: ["Catalase", "Amylase", "Lipase", "Protease"],
    correctAnswer: 0,
    explanation: "Catalase breaks down hydrogen peroxide (H2O2), a toxic byproduct of metabolism, into harmless water and oxygen."
  },
  {
    id: "enzyme-15",
    question: "What forms when a substrate binds to the enzyme?",
    options: [
      "Enzyme–product complex",
      "Enzyme–substrate complex",
      "Substrate–coenzyme complex",
      "Denatured protein"
    ],
    correctAnswer: 1,
    explanation: "When the substrate binds to the active site, an enzyme–substrate complex is formed before products are released."
  },
  {
    id: "enzyme-16",
    question: "Which property distinguishes enzymes from non-biological catalysts?",
    options: [
      "They lower activation energy",
      "They are highly specific",
      "They are consumed in reactions",
      "They only work at high pressure"
    ],
    correctAnswer: 1,
    explanation: "Enzymes are highly specific to their substrates, unlike inorganic catalysts."
  },
  {
    id: "enzyme-17",
    question: "Which enzyme digests starch into maltose?",
    options: ["Lipase", "Amylase", "Pepsin", "Trypsin"],
    correctAnswer: 1,
    explanation: "Amylase breaks down starch into maltose, a disaccharide."
  },
  {
    id: "enzyme-18",
    question: "Which factor can denature enzymes irreversibly?",
    options: [
      "Mild heating",
      "Drastic pH change",
      "Low substrate concentration",
      "Normal pressure"
    ],
    correctAnswer: 1,
    explanation: "Extreme pH can alter the ionic bonds in enzymes, leading to permanent denaturation."
  },
  {
    id: "enzyme-19",
    question: "What are inorganic helpers required for some enzyme functions called?",
    options: ["Coenzymes", "Cofactors", "Substrates", "Isoenzymes"],
    correctAnswer: 1,
    explanation: "Cofactors are inorganic ions like Mg²⁺ or Zn²⁺ required for enzyme activity."
  },
  {
    id: "enzyme-20",
    question: "Which enzyme model explains flexibility in substrate binding?",
    options: [
      "Lock-and-Key model",
      "Fluid mosaic model",
      "Induced Fit model",
      "Complementary base-pairing model"
    ],
    correctAnswer: 2,
    explanation: "The Induced Fit model explains that the enzyme changes shape slightly to fit the substrate better."
  },
  {
    id: "enzyme-21",
    question: "Which enzyme works best at neutral pH?",
    options: ["Pepsin", "Trypsin", "Salivary amylase", "Lipase"],
    correctAnswer: 2,
    explanation: "Salivary amylase works optimally at around pH 7."
  },
  {
    id: "enzyme-22",
    question: "What term describes enzymes that catalyze the same reaction but have different structures?",
    options: ["Isoenzymes", "Holoenzymes", "Apoenzymes", "Coenzymes"],
    correctAnswer: 0,
    explanation: "Isoenzymes differ in structure but catalyze the same reaction."
  },
  {
    id: "enzyme-23",
    question: "Which site does a non-competitive inhibitor bind to?",
    options: ["Active site", "Substrate-binding site", "Allosteric site", "Cofactor site"],
    correctAnswer: 2,
    explanation: "Non-competitive inhibitors bind to an allosteric site, altering enzyme shape and reducing activity."
  },
  {
    id: "enzyme-24",
    question: "Enzyme activity usually doubles with every ___ increase in temperature until denaturation begins.",
    options: ["2°C", "5°C", "10°C", "20°C"],
    correctAnswer: 2,
    explanation: "A rise of about 10°C usually doubles enzyme activity until the optimum temperature is exceeded."
  },
  {
    id: "enzyme-25",
    question: "Which enzyme digests proteins in the stomach?",
    options: ["Trypsin", "Pepsin", "Amylase", "Lipase"],
    correctAnswer: 1,
    explanation: "Pepsin breaks proteins down into smaller peptides in the stomach."
  },
  {
    id: "enzyme-26",
    question: "Which enzyme catalyzes lipid digestion?",
    options: ["Amylase", "Pepsin", "Lipase", "Catalase"],
    correctAnswer: 2,
    explanation: "Lipase hydrolyzes fats into glycerol and fatty acids."
  },
  {
    id: "enzyme-27",
    question: "What is an apoenzyme?",
    options: [
      "Enzyme with cofactor",
      "Protein part of enzyme without cofactor",
      "Non-protein helper molecule",
      "Inactive enzyme product"
    ],
    correctAnswer: 1,
    explanation: "An apoenzyme is the protein part of an enzyme that requires a cofactor to become active."
  },
  {
    id: "enzyme-28",
    question: "Which factor increases enzyme activity up to an optimum level?",
    options: ["Temperature", "Toxic inhibitors", "Denaturation", "Extreme acidity"],
    correctAnswer: 0,
    explanation: "Increasing temperature increases enzyme activity until the optimum temperature is reached."
  },
  {
    id: "enzyme-29",
    question: "What is the complete, active enzyme called?",
    options: ["Isoenzyme", "Apoenzyme", "Holoenzyme", "Coenzyme"],
    correctAnswer: 2,
    explanation: "A holoenzyme is the complete enzyme, including its apoenzyme and cofactor/coenzyme."
  },
  {
    id: "enzyme-30",
    question: "Which factor can slow down enzyme activity without denaturing the enzyme?",
    options: ["Low temperature", "High heat", "Strong acids", "Strong alkalis"],
    correctAnswer: 0,
    explanation: "Low temperatures reduce kinetic energy, slowing enzyme activity but not denaturing the enzyme."
  },
  {
    id: "enzyme-31",
    question: "Which enzyme hydrolyzes proteins in the small intestine?",
    options: ["Amylase", "Pepsin", "Trypsin", "Lipase"],
    correctAnswer: 2,
    explanation: "Trypsin, secreted by the pancreas, digests proteins in the small intestine."
  },
  {
    id: "enzyme-32",
    question: "Which part of enzyme structure is responsible for its specificity?",
    options: ["Primary structure", "Active site", "Cofactor", "Coenzyme"],
    correctAnswer: 1,
    explanation: "The active site's unique shape determines substrate specificity."
  },
  {
    id: "enzyme-33",
    question: "Feedback inhibition is an example of?",
    options: [
      "Competitive inhibition",
      "Non-competitive inhibition",
      "Activation",
      "Denaturation"
    ],
    correctAnswer: 1,
    explanation: "Feedback inhibition occurs when the end product binds allosterically, stopping enzyme activity."
  },
  {
    id: "enzyme-34",
    question: "Which enzyme digests proteins into peptides in the stomach?",
    options: ["Amylase", "Pepsin", "Lipase", "Maltase"],
    correctAnswer: 1,
    explanation: "Pepsin hydrolyzes proteins into smaller peptides under acidic pH."
  },
  {
    id: "enzyme-35",
    question: "Which molecule is altered by an enzyme during a reaction?",
    options: ["Substrate", "Cofactor", "Apoenzyme", "Coenzyme"],
    correctAnswer: 0,
    explanation: "The substrate is converted into product during the reaction."
  },
  {
    id: "enzyme-36",
    question: "Why are enzymes reusable?",
    options: [
      "They are destroyed after one reaction",
      "They remain unchanged after reactions",
      "They multiply in cells",
      "They convert into cofactors"
    ],
    correctAnswer: 1,
    explanation: "Enzymes remain unchanged after catalysis and can be used repeatedly."
  },
  {
    id: "enzyme-37",
    question: "What is the energy barrier that enzymes help to overcome?",
    options: ["Gibbs free energy", "Bond enthalpy", "Activation energy", "Kinetic energy"],
    correctAnswer: 2,
    explanation: "Enzymes lower the activation energy required to initiate a reaction."
  },
  {
    id: "enzyme-38",
    question: "Which factor determines the rate of enzyme-catalyzed reactions at low substrate concentration?",
    options: ["Enzyme concentration", "pH", "Substrate concentration", "Temperature"],
    correctAnswer: 2,
    explanation: "At low substrate concentration, the rate depends directly on substrate availability."
  },
  {
    id: "enzyme-39",
    question: "Which enzyme is secreted by the salivary glands?",
    options: ["Amylase", "Lipase", "Pepsin", "Trypsin"],
    correctAnswer: 0,
    explanation: "Salivary amylase breaks starch into maltose in the mouth."
  },
  {
    id: "enzyme-40",
    question: "What do inhibitors do to enzymes?",
    options: [
      "Increase enzyme activity",
      "Stop or reduce enzyme activity",
      "Convert enzymes to substrates",
      "Change enzyme concentration"
    ],
    correctAnswer: 1,
    explanation: "Inhibitors reduce or completely stop enzyme activity."
  },
  {
    id: "enzyme-41",
    question: "Which bond is primarily responsible for enzyme three-dimensional structure?",
    options: ["Hydrogen bonds", "Ionic bonds", "Peptide bonds", "Glycosidic bonds"],
    correctAnswer: 0,
    explanation: "Hydrogen bonds maintain enzyme tertiary and quaternary structures."
  },
  {
    id: "enzyme-42",
    question: "Which enzyme helps in clotting of milk protein casein?",
    options: ["Rennin", "Trypsin", "Amylase", "Pepsin"],
    correctAnswer: 0,
    explanation: "Rennin (chymosin) is an enzyme that helps coagulate milk protein casein."
  },
  {
    id: "enzyme-43",
    question: "Which enzyme catalyzes hydrolysis of sucrose?",
    options: ["Maltase", "Sucrase", "Lactase", "Amylase"],
    correctAnswer: 1,
    explanation: "Sucrase (invertase) breaks down sucrose into glucose and fructose."
  },
  {
    id: "enzyme-44",
    question: "Why do enzymes show saturation at high substrate concentrations?",
    options: [
      "Enzymes denature",
      "All active sites are occupied",
      "Substrate concentration decreases",
      "Cofactors are destroyed"
    ],
    correctAnswer: 1,
    explanation: "At high substrate levels, all enzyme active sites are occupied, leading to saturation."
  },
  {
    id: "enzyme-45",
    question: "Which type of protein are enzymes usually?",
    options: ["Fibrous proteins", "Globular proteins", "Structural proteins", "Transport proteins"],
    correctAnswer: 1,
    explanation: "Enzymes are mostly globular proteins with a specific 3D shape."
  },
  {
    id: "enzyme-46",
    question: "What happens to enzyme activity if pH deviates too much from the optimum?",
    options: [
      "It increases indefinitely",
      "It decreases or stops",
      "It forms new substrates",
      "It produces more enzymes"
    ],
    correctAnswer: 1,
    explanation: "Extreme pH changes disrupt ionic bonds, altering active site shape and reducing activity."
  },
  {
    id: "enzyme-47",
    question: "Which enzyme breaks lactose into glucose and galactose?",
    options: ["Amylase", "Maltase", "Lactase", "Lipase"],
    correctAnswer: 2,
    explanation: "Lactase hydrolyzes lactose into glucose and galactose."
  },
  {
    id: "enzyme-48",
    question: "Why are enzymes described as specific?",
    options: [
      "One enzyme catalyzes one type of reaction",
      "They catalyze many unrelated reactions",
      "They act on all types of substrates",
      "They only work in acidic medium"
    ],
    correctAnswer: 0,
    explanation: "Enzymes are specific because each enzyme usually acts on a single type of substrate."
  },
  {
    id: "enzyme-49",
    question: "Which enzyme catalyzes hydrolysis of maltose?",
    options: ["Sucrase", "Maltase", "Lactase", "Lipase"],
    correctAnswer: 1,
    explanation: "Maltase breaks maltose into two glucose molecules."
  },
  {
    id: "enzyme-50",
    question: "Which factor distinguishes enzyme action from ordinary chemical catalysts?",
    options: [
      "They work slowly",
      "They require high temperature",
      "They are highly specific and efficient",
      "They are consumed in reactions"
    ],
    correctAnswer: 2,
    explanation: "Enzymes are unique because of their high specificity and efficiency compared to ordinary catalysts."
  },
  {
    id: "enzyme-51",
    question: "Which statement best defines enzyme specificity?",
    options: [
      "One enzyme catalyzes many unrelated reactions",
      "Each enzyme catalyzes only one type of reaction",
      "Enzymes randomly bind with any substrate",
      "Enzymes are always active regardless of conditions"
    ],
    correctAnswer: 1,
    explanation: "Enzymes show specificity, meaning each enzyme usually acts on a single substrate or a group of closely related substrates."
  },
  {
    id: "enzyme-52",
    question: "What happens when the concentration of substrate is continuously increased while enzyme concentration is fixed?",
    options: [
      "Reaction rate decreases steadily",
      "Reaction rate increases indefinitely",
      "Reaction rate increases then reaches a maximum",
      "Reaction stops immediately"
    ],
    correctAnswer: 2,
    explanation: "As substrate concentration increases, rate rises until all active sites are occupied; then it reaches Vmax."
  },
  {
    id: "enzyme-53",
    question: "What is the function of cofactors in enzyme activity?",
    options: [
      "They store genetic information",
      "They provide structural rigidity",
      "They assist enzymes in catalysis",
      "They convert enzymes into carbohydrates"
    ],
    correctAnswer: 2,
    explanation: "Cofactors, either inorganic ions or organic coenzymes, help enzymes perform catalytic functions."
  },
  {
    id: "enzyme-54",
    question: "Which of the following describes the enzyme–substrate complex?",
    options: [
      "An enzyme after denaturation",
      "A temporary intermediate formed during catalysis",
      "A product formed at the end of a reaction",
      "A permanent bond between enzyme and substrate"
    ],
    correctAnswer: 1,
    explanation: "The enzyme–substrate complex is a temporary state where the substrate binds to the enzyme before conversion into product."
  },
  {
    id: "enzyme-55",
    question: "Which statement about enzymes is correct?",
    options: [
      "They alter the equilibrium constant of a reaction",
      "They lower the activation energy",
      "They change the products of a reaction",
      "They are consumed permanently during catalysis"
    ],
    correctAnswer: 1,
    explanation: "Enzymes lower activation energy but do not affect equilibrium or get consumed."
  },
  {
    id: "enzyme-56",
    question: "Which factor can cause denaturation of enzymes?",
    options: [
      "Mild increase in substrate concentration",
      "Optimal temperature",
      "Extreme pH or high temperature",
      "Normal body temperature"
    ],
    correctAnswer: 2,
    explanation: "Enzymes lose their functional 3D structure when exposed to very high temperatures or extreme pH."
  },
  {
    id: "enzyme-57",
    question: "Which term refers to the minimum energy required to start a chemical reaction?",
    options: [
      "Kinetic energy",
      "Potential energy",
      "Activation energy",
      "Thermal energy"
    ],
    correctAnswer: 2,
    explanation: "Enzymes lower the activation energy needed for a reaction to occur."
  },
  {
    id: "enzyme-58",
    question: "Which enzyme catalyzes the breakdown of starch into maltose?",
    options: [
      "Amylase",
      "Lipase",
      "Protease",
      "Catalase"
    ],
    correctAnswer: 0,
    explanation: "Amylase breaks down starch into the disaccharide maltose during digestion."
  },
  {
    id: "enzyme-59",
    question: "What is feedback inhibition in enzyme regulation?",
    options: [
      "The end product of a pathway inhibits an earlier enzyme",
      "The substrate itself blocks the active site",
      "The enzyme changes shape permanently",
      "The enzyme continues working without regulation"
    ],
    correctAnswer: 0,
    explanation: "In feedback inhibition, the end product of a metabolic pathway binds to an enzyme early in the pathway, slowing down further production."
  },
  {
    id: "enzyme-60",
    question: "Which property distinguishes enzymes from inorganic catalysts?",
    options: [
      "Enzymes are reusable",
      "Enzymes work at high temperatures only",
      "Enzymes are highly specific",
      "Enzymes increase activation energy"
    ],
    correctAnswer: 2,
    explanation: "Enzymes differ from inorganic catalysts because they are highly specific to substrates."
  },
  {
    id: "enzyme-61",
    question: "Which type of inhibitor decreases enzyme activity by binding to the active site?",
    options: [
      "Non-competitive inhibitor",
      "Competitive inhibitor",
      "Allosteric inhibitor",
      "Uncompetitive inhibitor"
    ],
    correctAnswer: 1,
    explanation: "Competitive inhibitors resemble substrates and compete for the active site."
  },
  {
    id: "enzyme-62",
    question: "What is the role of temperature in enzyme activity?",
    options: [
      "It always decreases enzyme activity",
      "It always increases enzyme activity",
      "It affects kinetic energy and enzyme structure",
      "It has no role at all"
    ],
    correctAnswer: 2,
    explanation: "Temperature increases molecular collisions up to an optimum, but extreme heat denatures enzymes."
  },
  {
    id: "enzyme-63",
    question: "What is the primary difference between lock-and-key and induced fit models?",
    options: [
      "Lock-and-key assumes rigid active site, induced fit allows flexibility",
      "Lock-and-key requires cofactors, induced fit does not",
      "Lock-and-key occurs in plants only, induced fit in animals",
      "Lock-and-key is permanent, induced fit is irreversible"
    ],
    correctAnswer: 0,
    explanation: "Lock-and-key suggests a rigid fit, while induced fit describes conformational changes for better binding."
  },
  {
    id: "enzyme-64",
    question: "Which factor does NOT alter enzyme activity?",
    options: [
      "pH",
      "Temperature",
      "Enzyme concentration",
      "Atomic mass of enzyme"
    ],
    correctAnswer: 3,
    explanation: "Enzyme activity depends on pH, temperature, and concentration, not on atomic mass."
  },
  {
    id: "enzyme-65",
    question: "Which of the following best explains why enzymes are reusable?",
    options: [
      "They permanently bind with the substrate",
      "They are not changed during the reaction",
      "They store energy after the reaction",
      "They are produced in excess"
    ],
    correctAnswer: 1,
    explanation: "Enzymes remain unchanged after catalysis, so they can catalyze multiple reactions."
  },
  {
    id: "enzyme-66",
    question: "Which enzyme digests lipids into fatty acids and glycerol?",
    options: [
      "Pepsin",
      "Amylase",
      "Lipase",
      "Maltase"
    ],
    correctAnswer: 2,
    explanation: "Lipase catalyzes the hydrolysis of lipids into fatty acids and glycerol."
  },
  {
    id: "enzyme-67",
    question: "What happens when an enzyme reaches saturation with substrate?",
    options: [
      "The reaction rate decreases",
      "The reaction rate remains constant at maximum",
      "The enzyme denatures immediately",
      "The substrate concentration becomes irrelevant"
    ],
    correctAnswer: 1,
    explanation: "At saturation, all active sites are occupied, and reaction rate remains at maximum (Vmax)."
  },
  {
    id: "enzyme-68",
    question: "Which type of enzyme is RNA-based rather than protein-based?",
    options: [
      "Ribozyme",
      "Lysozyme",
      "Isoenzyme",
      "Coenzyme"
    ],
    correctAnswer: 0,
    explanation: "Ribozymes are RNA molecules that act as enzymes in catalysis."
  },
  {
    id: "enzyme-69",
    question: "Which of the following does an enzyme NOT change?",
    options: [
      "Activation energy",
      "Rate of reaction",
      "Equilibrium position",
      "Reaction speed"
    ],
    correctAnswer: 2,
    explanation: "Enzymes speed up the rate but do not change the equilibrium of a reaction."
  },
  {
    id: "enzyme-70",
    question: "Which enzyme catalyzes the breakdown of lactose into glucose and galactose?",
    options: [
      "Maltase",
      "Lactase",
      "Sucrase",
      "Isomerase"
    ],
    correctAnswer: 1,
    explanation: "Lactase hydrolyzes lactose into glucose and galactose."
  }, {
    id: "enzyme-71",
    question: "What is meant by the optimum temperature of an enzyme?",
    options: [
      "The lowest temperature at which enzyme is inactive",
      "The temperature at which enzyme shows maximum activity",
      "The highest temperature before enzyme denaturation",
      "The temperature at which enzyme binds cofactor"
    ],
    correctAnswer: 1,
    explanation: "Optimum temperature is the point where enzyme activity is maximum before denaturation occurs."
  },
  {
    id: "enzyme-72",
    question: "Which of the following is an irreversible inhibitor of enzymes?",
    options: [
      "Competitive inhibitor",
      "Non-competitive inhibitor",
      "Heavy metal ions like mercury",
      "Allosteric regulator"
    ],
    correctAnswer: 2,
    explanation: "Heavy metals bind permanently to enzymes, altering their structure and causing irreversible inhibition."
  },
  {
    id: "enzyme-73",
    question: "Why do enzymes become inactive at very low temperatures?",
    options: [
      "They are denatured by cold",
      "They freeze and permanently lose structure",
      "Molecular collisions between enzyme and substrate decrease",
      "Substrate concentration decreases"
    ],
    correctAnswer: 2,
    explanation: "At low temperatures, molecular movement slows, reducing collisions and enzyme activity, but the enzyme is not denatured."
  },
  {
    id: "enzyme-74",
    question: "Which enzyme catalyzes the breakdown of proteins into peptides in the small intestine?",
    options: [
      "Trypsin",
      "Pepsin",
      "Lipase",
      "Amylase"
    ],
    correctAnswer: 0,
    explanation: "Trypsin, secreted by the pancreas, digests proteins in the small intestine."
  },
  {
    id: "enzyme-75",
    question: "What is the main difference between an apoenzyme and a holoenzyme?",
    options: [
      "Apoenzyme is inactive, holoenzyme is active",
      "Apoenzyme contains cofactor, holoenzyme does not",
      "Apoenzyme is always a vitamin, holoenzyme is not",
      "Apoenzyme is RNA, holoenzyme is protein"
    ],
    correctAnswer: 0,
    explanation: "An apoenzyme is the inactive protein part alone; when combined with its cofactor, it forms an active holoenzyme."
  },
  {
    id: "enzyme-76",
    question: "Which enzyme catalyzes the breakdown of sucrose into glucose and fructose?",
    options: [
      "Maltase",
      "Lactase",
      "Sucrase",
      "Isomerase"
    ],
    correctAnswer: 2,
    explanation: "Sucrase hydrolyzes sucrose into glucose and fructose."
  },
  {
    id: "enzyme-77",
    question: "What is the effect of increasing enzyme concentration while substrate concentration is constant?",
    options: [
      "Reaction rate decreases",
      "Reaction rate increases proportionally",
      "Reaction rate remains the same after a point",
      "Reaction rate stops completely"
    ],
    correctAnswer: 1,
    explanation: "At constant substrate levels, increasing enzyme concentration increases reaction rate proportionally until substrate becomes limiting."
  },
  {
    id: "enzyme-78",
    question: "Which enzyme catalyzes the hydrolysis of DNA?",
    options: [
      "Protease",
      "DNase",
      "RNase",
      "Ligase"
    ],
    correctAnswer: 1,
    explanation: "DNase breaks down DNA into smaller fragments by hydrolyzing phosphodiester bonds."
  },
  {
    id: "enzyme-79",
    question: "Why are enzymes described as biological catalysts?",
    options: [
      "They are consumed in reactions",
      "They speed up reactions without being used up",
      "They only work outside cells",
      "They change the products of reactions"
    ],
    correctAnswer: 1,
    explanation: "Enzymes act like catalysts, accelerating reactions while remaining unchanged after the process."
  },
  {
    id: "enzyme-80",
    question: "Which enzyme catalyzes the joining of DNA fragments?",
    options: [
      "DNA polymerase",
      "Ligase",
      "Helicase",
      "Topoisomerase"
    ],
    correctAnswer: 1,
    explanation: "DNA ligase catalyzes the joining of Okazaki fragments during DNA replication."
  },
  {
    id: "enzyme-81",
    question: "What type of bonds primarily hold the substrate in the active site?",
    options: [
      "Covalent bonds",
      "Hydrogen bonds and ionic interactions",
      "Peptide bonds",
      "Metallic bonds"
    ],
    correctAnswer: 1,
    explanation: "Substrates are held in active sites by weak interactions such as hydrogen bonds and ionic forces, ensuring reversibility."
  },
  {
    id: "enzyme-82",
    question: "Why are enzymes sensitive to changes in pH?",
    options: [
      "pH changes destroy the primary structure",
      "pH alters the charge and shape of the active site",
      "pH always increases enzyme activity",
      "pH has no effect on enzymes"
    ],
    correctAnswer: 1,
    explanation: "Changes in pH alter the ionization of amino acids at the active site, affecting substrate binding and activity."
  },
  {
    id: "enzyme-83",
    question: "Which enzyme catalyzes the conversion of glucose to glucose-6-phosphate?",
    options: [
      "Amylase",
      "Glucokinase",
      "Hexokinase",
      "Phosphatase"
    ],
    correctAnswer: 2,
    explanation: "Hexokinase phosphorylates glucose to glucose-6-phosphate in glycolysis."
  },
  {
    id: "enzyme-84",
    question: "What is the role of vitamins in enzyme action?",
    options: [
      "They act as structural proteins",
      "They act as coenzymes or precursors of coenzymes",
      "They lower pH of the cell",
      "They provide energy directly"
    ],
    correctAnswer: 1,
    explanation: "Many vitamins serve as coenzymes or their precursors, assisting enzymes in catalysis."
  },
  {
    id: "enzyme-85",
    question: "Which enzyme is inhibited by cyanide poisoning?",
    options: [
      "Cytochrome oxidase",
      "Catalase",
      "Amylase",
      "Pepsin"
    ],
    correctAnswer: 0,
    explanation: "Cyanide blocks cytochrome oxidase in mitochondria, preventing cellular respiration."
  },
  {
    id: "enzyme-86",
    question: "What happens when a competitive inhibitor is added to an enzyme reaction?",
    options: [
      "It binds to an allosteric site permanently",
      "It reduces enzyme-substrate binding by competing for the active site",
      "It denatures the enzyme immediately",
      "It increases Vmax of the reaction"
    ],
    correctAnswer: 1,
    explanation: "Competitive inhibitors resemble substrates and compete for active sites, reducing activity."
  },
  {
    id: "enzyme-87",
    question: "Which enzyme is responsible for hydrolyzing RNA?",
    options: [
      "DNase",
      "RNase",
      "Ligase",
      "Helicase"
    ],
    correctAnswer: 1,
    explanation: "RNase catalyzes the hydrolysis of RNA into smaller fragments."
  },
  {
    id: "enzyme-88",
    question: "What is the significance of enzyme saturation?",
    options: [
      "Enzyme activity becomes unlimited",
      "All active sites are occupied and rate cannot increase further",
      "Substrate concentration decreases automatically",
      "Products stop being formed"
    ],
    correctAnswer: 1,
    explanation: "At saturation, all enzyme active sites are bound, so adding more substrate cannot increase the reaction rate."
  },
  {
    id: "enzyme-89",
    question: "Which enzyme digests nucleic acids into nucleotides?",
    options: [
      "Nuclease",
      "Isomerase",
      "Dehydrogenase",
      "Polymerase"
    ],
    correctAnswer: 0,
    explanation: "Nucleases hydrolyze nucleic acids into nucleotides."
  },
  {
    id: "enzyme-90",
    question: "Why is enzyme activity often measured in the laboratory?",
    options: [
      "To determine concentration of substrates",
      "To diagnose diseases",
      "To increase vitamin levels",
      "To study DNA replication"
    ],
    correctAnswer: 1,
    explanation: "Enzyme activity tests are used clinically to diagnose conditions like liver or heart diseases."
  },
  {
    id: "enzyme-91",
    question: "Which enzyme catalyzes the hydrolysis of urea into ammonia and carbon dioxide?",
    options: [
      "Urease",
      "Amylase",
      "Lipase",
      "Peptidase"
    ],
    correctAnswer: 0,
    explanation: "Urease breaks down urea into ammonia and carbon dioxide."
  },
  {
    id: "enzyme-92",
    question: "Which enzyme unwinds DNA strands during replication?",
    options: [
      "Ligase",
      "Helicase",
      "Primase",
      "Polymerase"
    ],
    correctAnswer: 1,
    explanation: "Helicase unwinds DNA strands to allow replication."
  },
  {
    id: "enzyme-93",
    question: "What is the main feature of allosteric enzymes?",
    options: [
      "They work only in acidic conditions",
      "They have a single active site",
      "They are regulated by molecules binding at non-active sites",
      "They are unaffected by inhibitors"
    ],
    correctAnswer: 2,
    explanation: "Allosteric enzymes have regulatory sites where effectors bind to alter enzyme activity."
  },
  {
    id: "enzyme-94",
    question: "Which enzyme is commonly used in the clotting of milk during cheese production?",
    options: [
      "Rennin",
      "Trypsin",
      "Pepsin",
      "Amylase"
    ],
    correctAnswer: 0,
    explanation: "Rennin is used in dairy industry to clot milk proteins during cheese making."
  },
  {
    id: "enzyme-95",
    question: "Which enzyme catalyzes the breakdown of fats in the small intestine?",
    options: [
      "Pepsin",
      "Amylase",
      "Lipase",
      "Maltase"
    ],
    correctAnswer: 2,
    explanation: "Lipase hydrolyzes fats into fatty acids and glycerol in the small intestine."
  },
  {
    id: "enzyme-96",
    question: "What is the main role of enzyme catalase in cells?",
    options: [
      "Breaking down glucose",
      "Synthesizing proteins",
      "Detoxifying hydrogen peroxide",
      "Hydrolyzing starch"
    ],
    correctAnswer: 2,
    explanation: "Catalase protects cells by breaking down harmful hydrogen peroxide into water and oxygen."
  },
  {
    id: "enzyme-97",
    question: "Which enzyme catalyzes the conversion of pyruvate to acetyl-CoA?",
    options: [
      "Lactase",
      "Pyruvate dehydrogenase",
      "Amylase",
      "Peptidase"
    ],
    correctAnswer: 1,
    explanation: "Pyruvate dehydrogenase converts pyruvate into acetyl-CoA, linking glycolysis and the Krebs cycle."
  },
  {
    id: "enzyme-98",
    question: "What happens if the active site of an enzyme is altered by mutation?",
    options: [
      "The enzyme works more efficiently",
      "The enzyme may lose specificity and function",
      "The enzyme becomes a cofactor",
      "The enzyme produces new amino acids"
    ],
    correctAnswer: 1,
    explanation: "Mutations that change the active site can prevent substrate binding and reduce or abolish activity."
  },
  {
    id: "enzyme-99",
    question: "Why are enzymes effective in very small amounts?",
    options: [
      "They are consumed in large numbers",
      "They can catalyze many reactions repeatedly",
      "They change equilibrium permanently",
      "They act as substrates"
    ],
    correctAnswer: 1,
    explanation: "A single enzyme molecule can catalyze thousands of reactions, making them effective in small amounts."
  },
  {
    id: "enzyme-100",
    question: "Which enzyme catalyzes the replication of DNA?",
    options: [
      "DNA ligase",
      "DNA helicase",
      "DNA polymerase",
      "DNA topoisomerase"
    ],
    correctAnswer: 2,
    explanation: "DNA polymerase adds nucleotides to form new DNA strands during replication."
  },
  {
    id: "enzyme-101",
    question: "What does Km (Michaelis constant) represent in enzyme kinetics?",
    options: [
      "The maximum velocity of the enzyme",
      "The substrate concentration at half Vmax",
      "The enzyme concentration at saturation",
      "The inhibitor concentration that halves activity"
    ],
    correctAnswer: 1,
    explanation: "Km is the substrate concentration at which the reaction rate is half of Vmax, reflecting substrate affinity."
  },
  {
    id: "enzyme-102",
    question: "Which catalytic strategy involves donating or accepting protons to stabilize the transition state?",
    options: [
      "Covalent catalysis",
      "Acid–base catalysis",
      "Metal ion catalysis",
      "Proximity catalysis"
    ],
    correctAnswer: 1,
    explanation: "Acid–base catalysis uses amino acid side chains to donate or accept protons during the reaction."
  },
  {
    id: "enzyme-103",
    question: "Which is an example of covalent catalysis by an enzyme?",
    options: [
      "Formation of a transient enzyme–substrate covalent bond",
      "Binding of a metal ion to stabilize substrate",
      "Enzyme changing shape to bind substrate",
      "Substrate diffusing into the active site"
    ],
    correctAnswer: 0,
    explanation: "Covalent catalysis involves a transient covalent bond between enzyme and substrate that helps reaction proceed."
  },
  {
    id: "enzyme-104",
    question: "What is a zymogen (proenzyme)?",
    options: [
      "An enzyme permanently inactive",
      "A precursor enzyme activated by cleavage",
      "A denatured enzyme",
      "A coenzyme derived from vitamins"
    ],
    correctAnswer: 1,
    explanation: "Zymogens are inactive enzyme precursors that are activated by proteolytic cleavage (e.g., pepsinogen → pepsin)."
  },
  {
    id: "enzyme-105",
    question: "How do metal ions often assist enzyme reactions?",
    options: [
      "By acting as permanent substrates",
      "By stabilizing negative charges or participating in redox",
      "By denaturing the enzyme",
      "By permanently binding and inactivating enzymes"
    ],
    correctAnswer: 1,
    explanation: "Metal ion catalysis stabilizes charges, helps substrate binding, or participates in electron transfer."
  },
  {
    id: "enzyme-106",
    question: "Which effect is expected when a competitive inhibitor is present?",
    options: [
      "Vmax decreases, Km unchanged",
      "Vmax unchanged, Km appears increased",
      "Both Vmax and Km decrease",
      "Both Vmax and Km increase"
    ],
    correctAnswer: 1,
    explanation: "Competitive inhibitors raise apparent Km (lower affinity) but Vmax can be reached with high substrate."
  },
  {
    id: "enzyme-107",
    question: "What is transition state stabilization by an enzyme?",
    options: [
      "Enzyme prevents transition state formation",
      "Enzyme binds most strongly to the transition state lowering activation energy",
      "Enzyme converts transition state to substrate",
      "Enzyme increases activation energy"
    ],
    correctAnswer: 1,
    explanation: "Enzymes often bind and stabilize the transition state more than substrate, reducing required activation energy."
  },
  {
    id: "enzyme-108",
    question: "What is the function of a prosthetic group in enzymes?",
    options: [
      "A detachable substrate",
      "A permanently bound non-protein component required for activity",
      "A lipid anchor for membrane enzymes",
      "A competitive inhibitor"
    ],
    correctAnswer: 1,
    explanation: "Prosthetic groups are tightly or covalently bound non-protein moieties (e.g., heme) essential for catalysis."
  },
  {
    id: "enzyme-109",
    question: "Which statement best describes uncompetitive inhibition?",
    options: [
      "Inhibitor competes with substrate for active site",
      "Inhibitor binds only to enzyme–substrate complex lowering both Vmax and Km",
      "Inhibitor binds allosteric site to increase activity",
      "Inhibitor binds and permanently destroys enzyme"
    ],
    correctAnswer: 1,
    explanation: "Uncompetitive inhibitors bind only to the enzyme–substrate complex, decreasing both Vmax and apparent Km."
  },
  {
    id: "enzyme-110",
    question: "Which of the following is an example of enzyme immobilization benefit in industry?",
    options: [
      "Reduced enzyme reuse",
      "More difficult product purification",
      "Easier enzyme recovery and reuse",
      "Lower reaction specificity"
    ],
    correctAnswer: 2,
    explanation: "Immobilized enzymes are easier to separate from products and can be reused, reducing cost."
  },
  {
    id: "enzyme-111",
    question: "What does a Lineweaver–Burk plot show as the y-intercept?",
    options: [
      "−1/Km",
      "Km/Vmax",
      "1/Vmax",
      "Vmax"
    ],
    correctAnswer: 2,
    explanation: "The Lineweaver–Burk double reciprocal plot has y-intercept equal to 1/Vmax."
  },
  {
    id: "enzyme-112",
    question: "Which specificity type describes an enzyme acting only on a single substrate molecule?",
    options: [
      "Group specificity",
      "Absolute specificity",
      "Linkage specificity",
      "Stereochemical specificity"
    ],
    correctAnswer: 1,
    explanation: "Absolute specificity means the enzyme acts on only one substrate (e.g., urease on urea)."
  },
  {
    id: "enzyme-113",
    question: "How does induced fit facilitate catalysis?",
    options: [
      "By permanently trapping substrate",
      "By causing active site to adjust, increasing catalytic interactions",
      "By removing cofactors",
      "By preventing substrate binding"
    ],
    correctAnswer: 1,
    explanation: "Induced fit improves substrate positioning and stabilizes transition state via conformational changes."
  },
  {
    id: "enzyme-114",
    question: "Which clinical application uses enzyme measurements commonly?",
    options: [
      "Measuring atmospheric oxygen",
      "Diagnosing tissue damage (e.g., ALT, AST)",
      "Predicting lunar phases",
      "Measuring blood sugar only"
    ],
    correctAnswer: 1,
    explanation: "Enzyme levels (e.g., ALT, AST, CK) in blood help diagnose organ damage or disease."
  },
  {
    id: "enzyme-115",
    question: "Which category describes enzymes that require an organic cofactor derived from vitamins?",
    options: [
      "Metal ions",
      "Prosthetic lipids",
      "Coenzymes",
      "Apoenzymes"
    ],
    correctAnswer: 2,
    explanation: "Coenzymes (e.g., NAD⁺, FAD) are organic molecules often derived from vitamins assisting catalysis."
  },
  {
    id: "enzyme-116",
    question: "Which mechanism is used when an enzyme brings two substrates into proper orientation to react?",
    options: [
      "Covalent catalysis",
      "Proximity and orientation effect",
      "Denaturation",
      "Competitive inhibition"
    ],
    correctAnswer: 1,
    explanation: "Proximity and orientation increase effective collisions between substrates, enhancing reaction rate."
  },
  {
    id: "enzyme-117",
    question: "What distinguishes irreversible inhibitors from reversible inhibitors?",
    options: [
      "Irreversible inhibitors bind covalently and permanently reduce activity",
      "Irreversible inhibitors never bind to enzymes",
      "Reversible inhibitors always destroy enzymes",
      "Irreversible inhibitors increase Vmax"
    ],
    correctAnswer: 0,
    explanation: "Irreversible inhibitors often form covalent bonds with active site residues, permanently inactivating the enzyme."
  },
  {
    id: "enzyme-118",
    question: "Which effect does a non-competitive inhibitor have on Vmax and Km?",
    options: [
      "Vmax decreases; Km unchanged",
      "Vmax increases; Km decreases",
      "Km increases; Vmax unchanged",
      "Both Vmax and Km increase"
    ],
    correctAnswer: 0,
    explanation: "Non-competitive inhibitors lower Vmax by reducing active enzyme but do not change substrate affinity (Km)."
  },
  {
    id: "enzyme-119",
    question: "Which experimental method is commonly used to study enzyme activity by measuring product formation over time?",
    options: [
      "Microscopy",
      "Spectrophotometry",
      "X-ray crystallography",
      "Gel electrophoresis"
    ],
    correctAnswer: 1,
    explanation: "Spectrophotometry monitors absorbance changes of substrate or product to measure enzyme activity."
  },
  {
    id: "enzyme-120",
    question: "What is meant by the term ‘turnover number’ (kcat)?",
    options: [
      "Number of enzymes in a cell",
      "Max number of substrate molecules converted per enzyme per second",
      "Substrate concentration at saturation",
      "Number of inhibitors bound per enzyme"
    ],
    correctAnswer: 1,
    explanation: "Turnover number (kcat) is the number of substrate molecules converted to product per enzyme molecule per unit time."
  },
  {
    id: "enzyme-121",
    question: "Which is an example of linkage specificity?",
    options: [
      "An enzyme acting on peptide bonds but not ester bonds",
      "An enzyme acting on any molecule with a hydroxyl group",
      "An enzyme accepting only D-isomers",
      "An enzyme acting on a single substrate only"
    ],
    correctAnswer: 0,
    explanation: "Linkage specificity means the enzyme acts on a particular type of chemical bond (e.g., peptidases on peptide bonds)."
  },
  {
    id: "enzyme-122",
    question: "How do transition state analogs function as inhibitors?",
    options: [
      "They irreversibly denature the enzyme",
      "They bind tightly to the active site mimicking the transition state",
      "They increase enzyme synthesis",
      "They remove cofactors from enzymes"
    ],
    correctAnswer: 1,
    explanation: "Transition state analogs resemble the transition state and bind strongly to the enzyme, inhibiting catalysis."
  },
  {
    id: "enzyme-123",
    question: "Which is a common industrial use of enzymes?",
    options: [
      "Increasing soil acidity",
      "Detergent enzymes for stain removal",
      "Converting enzymes into metals",
      "Decreasing reaction specificity"
    ],
    correctAnswer: 1,
    explanation: "Enzymes (proteases, lipases, amylases) are widely used in detergents to remove stains at moderate conditions."
  },
  {
    id: "enzyme-124",
    question: "What does the term 'holoenzyme' refer to?",
    options: [
      "Inactive protein part alone",
      "The active enzyme with its cofactor(s) bound",
      "An enzyme permanently inactivated",
      "A substrate bound to enzyme"
    ],
    correctAnswer: 1,
    explanation: "A holoenzyme is the complete, active form of an enzyme including its protein (apoenzyme) and cofactors."
  },
  {
    id: "enzyme-125",
    question: "Which amino-acid side chains frequently participate in acid–base catalysis?",
    options: [
      "Glycine and alanine",
      "Lysine, histidine, and aspartate",
      "Proline and valine",
      "Phenylalanine and leucine"
    ],
    correctAnswer: 1,
    explanation: "Histidine, lysine, aspartate, and glutamate commonly act as proton donors/acceptors in catalysis."
  },
  {
    id: "enzyme-126",
    question: "What does 'specific activity' of an enzyme sample indicate?",
    options: [
      "Total protein mass in the sample",
      "Enzyme activity per unit protein",
      "Number of substrates present",
      "Amount of inhibitor present"
    ],
    correctAnswer: 1,
    explanation: "Specific activity measures enzyme activity relative to total protein, indicating purity during purification."
  },
  {
    id: "enzyme-127",
    question: "Which mechanism can regulate enzymes quickly by adding or removing phosphate groups?",
    options: [
      "Allosteric inhibition",
      "Covalent modification (phosphorylation)",
      "Denaturation",
      "Competitive inhibition"
    ],
    correctAnswer: 1,
    explanation: "Phosphorylation (a reversible covalent modification) rapidly alters enzyme activity in signaling pathways."
  },
  {
    id: "enzyme-128",
    question: "Which is true about enzyme substrate specificity in stereochemistry?",
    options: [
      "Enzymes usually accept both enantiomers equally",
      "Enzymes are often stereospecific, acting on one enantiomer only",
      "Enzymes convert L-isomers to D-isomers always",
      "Stereochemistry never affects enzyme action"
    ],
    correctAnswer: 1,
    explanation: "Many enzymes are stereospecific and only recognize one stereoisomer of a substrate (e.g., L-amino acids)."
  },
  {
    id: "enzyme-129",
    question: "Why is the concept of the transition state important in drug design?",
    options: [
      "Transition state is long-lived and easy to isolate",
      "Molecules mimicking it bind tightly to enzymes and inhibit them",
      "Transition state analogs always activate enzymes",
      "Drugs cannot target transition states"
    ],
    correctAnswer: 1,
    explanation: "Transition state analogs can be potent inhibitors because enzymes bind transition states tightly."
  },
  {
    id: "enzyme-130",
    question: "Which parameter increases when an enzyme has a higher affinity for its substrate?",
    options: [
      "Km increases",
      "Km decreases",
      "Vmax decreases",
      "kcat becomes zero"
    ],
    correctAnswer: 1,
    explanation: "Higher affinity means lower Km (less substrate needed to reach half Vmax)."
  },
  {
    id: "enzyme-131",
    question: "Which is true for enzymes found in lysosomes?",
    options: [
      "They are active at neutral pH",
      "They function optimally in acidic pH",
      "They require high temperatures",
      "They do not require cofactors"
    ],
    correctAnswer: 1,
    explanation: "Lysosomal enzymes (acid hydrolases) are adapted to acidic pH inside lysosomes."
  },
  {
    id: "enzyme-132",
    question: "Which process explains how enzymes lower activation energy by forming multiple weak interactions with substrate?",
    options: [
      "Desolvation and induced polarization",
      "Increasing temperature locally",
      "Changing primary sequence",
      "Reducing substrate concentration"
    ],
    correctAnswer: 0,
    explanation: "Desolvation and multiple interactions destabilize substrate ground state and stabilize transition state, lowering activation energy."
  },
  {
    id: "enzyme-133",
    question: "Which statement about isoenzymes (isozymes) is correct?",
    options: [
      "They are identical in amino-acid sequence",
      "They catalyze different reactions",
      "They catalyze same reaction but differ in kinetics and regulation",
      "They are always inactive"
    ],
    correctAnswer: 2,
    explanation: "Isozymes catalyze the same reaction but may differ in kinetics, regulation, tissue distribution, or structure."
  },
  {
    id: "enzyme-134",
    question: "Which laboratory technique can determine enzyme purity during purification?",
    options: [
      "Measuring specific activity",
      "Measuring substrate density",
      "Observing color change only",
      "Counting cells under microscope"
    ],
    correctAnswer: 0,
    explanation: "Specific activity (activity per mg protein) increases as enzyme is purified, indicating purity."
  },
  {
    id: "enzyme-135",
    question: "Which catalytic role do serine, cysteine, and aspartate residues often play in proteases?",
    options: [
      "They act as cofactors",
      "They participate in the catalytic triad for peptide bond hydrolysis",
      "They prevent substrate binding",
      "They bind metal ions only"
    ],
    correctAnswer: 1,
    explanation: "Many proteases use a catalytic triad (e.g., Ser, His, Asp) to hydrolyze peptide bonds."
  },
  {
    id: "enzyme-136",
    question: "What is the likely effect of adding a strong reducing agent to an enzyme containing disulfide bonds essential for structure?",
    options: [
      "It strengthens disulfide bonds",
      "It reduces disulfide bonds, potentially altering activity",
      "It increases enzyme concentration",
      "It converts enzyme to cofactor"
    ],
    correctAnswer: 1,
    explanation: "Reducing agents break disulfide bonds, which can change tertiary structure and reduce activity."
  },
  {
    id: "enzyme-137",
    question: "Which enzyme is routinely used in molecular biology for cutting DNA at specific sequences?",
    options: [
      "DNA ligase",
      "Restriction endonuclease",
      "RNase",
      "Protease"
    ],
    correctAnswer: 1,
    explanation: "Restriction enzymes cleave DNA at specific recognition sequences and are essential molecular biology tools."
  },
  {
    id: "enzyme-138",
    question: "Which term describes enzymes that require a tightly bound metal ion as part of the active site?",
    options: [
      "Zymogens",
      "Metalloenzymes",
      "Isoenzymes",
      "Ribozymes"
    ],
    correctAnswer: 1,
    explanation: "Metalloenzymes contain metal ions (e.g., Zn²⁺, Fe²⁺) essential for catalytic function."
  },
  {
    id: "enzyme-139",
    question: "Which of the following can act as a regulatory molecule by binding at an allosteric site?",
    options: [
      "Substrate only",
      "Allosteric effector",
      "Water molecules",
      "DNA strands"
    ],
    correctAnswer: 1,
    explanation: "Allosteric effectors bind regulatory sites to modulate enzyme activity (activators or inhibitors)."
  },
  {
    id: "enzyme-140",
    question: "Which factor is most likely responsible for enzyme denaturation at high temperature?",
    options: [
      "Increased formation of peptide bonds",
      "Disruption of non-covalent interactions maintaining tertiary structure",
      "Increase in cofactor concentration",
      "Change in substrate chirality"
    ],
    correctAnswer: 1,
    explanation: "High temperatures disrupt hydrogen bonds, ionic interactions and hydrophobic packing, unfolding the protein."
  },
  {
    id: "enzyme-141",
    question: "Which describes the role of NAD⁺ in dehydrogenase reactions?",
    options: [
      "It acts as a metal ion cofactor",
      "It serves as an electron acceptor (coenzyme)",
      "It permanently binds and inactivates the enzyme",
      "It acts as an allosteric inhibitor"
    ],
    correctAnswer: 1,
    explanation: "NAD⁺ is a coenzyme that accepts electrons (is reduced to NADH) during oxidation reactions."
  },
  {
    id: "enzyme-142",
    question: "What does a sigmoidal (S-shaped) enzyme kinetic curve typically indicate?",
    options: [
      "Simple Michaelis–Menten kinetics",
      "Cooperative binding in multi-subunit enzymes",
      "Irreversible inhibition",
      "Complete denaturation"
    ],
    correctAnswer: 1,
    explanation: "Sigmoidal kinetics suggest cooperative substrate binding, as seen in allosteric enzymes like hemoglobin (not an enzyme) or ATCase."
  },
  {
    id: "enzyme-143",
    question: "Which is a disadvantage of using enzymes in industry?",
    options: [
      "High specificity may limit substrate range",
      "They always function at very high temperatures",
      "They cannot be immobilized",
      "They have no pH dependence"
    ],
    correctAnswer: 0,
    explanation: "High specificity can be a limitation when broad substrate processing is desired; conditions must be optimized."
  },
  {
    id: "enzyme-144",
    question: "Which describes 'feedback inhibition' in metabolic pathways?",
    options: [
      "An early enzyme is activated by the end product",
      "The end product inhibits an earlier pathway enzyme to regulate flow",
      "Substrate permanently binds enzyme",
      "Enzyme concentration continually increases"
    ],
    correctAnswer: 1,
    explanation: "Feedback inhibition prevents overaccumulation of end products by inhibiting a key upstream enzyme."
  },
  {
    id: "enzyme-145",
    question: "Which laboratory measurement can show reversible inhibition by a drug?",
    options: [
      "Permanent loss of enzyme protein on SDS-PAGE",
      "Change in Km and/or Vmax that can be reversed by removing inhibitor",
      "Complete denaturation at room temperature",
      "Formation of covalent adducts only"
    ],
    correctAnswer: 1,
    explanation: "Reversible inhibitors change kinetic parameters but activity can be recovered when inhibitor is removed."
  },
  {
    id: "enzyme-146",
    question: "Which enzyme family catalyzes oxidation–reduction reactions using FAD or NAD as cofactors?",
    options: [
      "Transferases",
      "Oxidoreductases (dehydrogenases)",
      "Hydrolases",
      "Isomerases"
    ],
    correctAnswer: 1,
    explanation: "Oxidoreductases transfer electrons and often use NAD⁺/NADP⁺/FAD as coenzymes."
  },
  {
    id: "enzyme-147",
    question: "Which description fits a reaction in which an enzyme stabilizes a negatively charged intermediate by donating a proton?",
    options: [
      "Metal ion catalysis",
      "Acid catalysis",
      "Allosteric activation",
      "Entropy reduction"
    ],
    correctAnswer: 1,
    explanation: "Acid catalysis involves donation of protons (H⁺) to stabilize intermediates during the reaction."
  },
  {
    id: "enzyme-148",
    question: "What is the main advantage of enzyme specificity in biological systems?",
    options: [
      "Random reaction products",
      "Precise control of metabolic pathways",
      "Unlimited substrate range",
      "Constant high activity regardless of conditions"
    ],
    correctAnswer: 1,
    explanation: "Specificity ensures correct reactions occur at the right place and time, maintaining metabolic order."
  },
  {
    id: "enzyme-149",
    question: "Which statement correctly links enzyme structure and function?",
    options: [
      "Only primary structure determines enzyme function",
      "Tertiary and quaternary structures create the active site geometry essential for function",
      "Enzyme function is independent of structure",
      "Function depends only on presence of cofactors"
    ],
    correctAnswer: 1,
    explanation: "Active site geometry arises from tertiary/quaternary folding and is critical for substrate recognition and catalysis."
  },
  {
    id: "enzyme-150",
    question: "Which therapeutic approach uses enzyme inhibitors to treat disease?",
    options: [
      "Using vitamin supplements only",
      "Designing drugs that block specific enzymes (e.g., ACE inhibitors for hypertension)",
      "Increasing enzyme temperature",
      "Removing all cofactors from cells"
    ],
    correctAnswer: 1,
    explanation: "Many drugs target specific enzymes (e.g., ACE inhibitors, statins) to modulate disease-related pathways."
  }
];



