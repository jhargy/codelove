export interface Question {
  id: string;
  question: string;
  options: string[];
  correctAnswer: number;
  explanation: string;
}

export const enzymeRateFactorsQuestions: Question[] = [
  {
    id: "factor-inhibitor-1",
    question: "What happens to most enzymes when temperature is increased beyond their optimum?",
    options: [
      "Their activity remains constant",
      "They denature due to disruption of bonds",
      "They become more stable",
      "They permanently increase activity"
    ],
    correctAnswer: 1,
    explanation: "Excess heat breaks hydrogen bonds and other interactions in proteins, leading to enzyme denaturation."
  },
  {
    id: "factor-inhibitor-2",
    question: "What is the typical optimum temperature for most human enzymes?",
    options: [
      "37°C",
      "25°C",
      "50°C",
      "10°C"
    ],
    correctAnswer: 0,
    explanation: "Human enzymes usually work best at normal body temperature of about 37°C."
  },
  {
    id: "factor-inhibitor-3",
    question: "What happens to enzyme activity if the pH is far from the optimum?",
    options: [
      "Activity increases indefinitely",
      "Active site is disrupted, lowering activity",
      "Activity remains unaffected",
      "Enzyme concentration increases"
    ],
    correctAnswer: 1,
    explanation: "Changes in pH alter ionization of amino acid side chains, disturbing active site geometry and lowering activity."
  },
  {
    id: "factor-inhibitor-4",
    question: "Which enzyme works best in highly acidic pH of the stomach?",
    options: [
      "Lipase",
      "Amylase",
      "Pepsin",
      "Maltase"
    ],
    correctAnswer: 2,
    explanation: "Pepsin functions optimally around pH 1.5–2.0 in the acidic gastric environment."
  },
  {
    id: "factor-inhibitor-5",
    question: "How does increasing substrate concentration affect enzyme activity at low levels?",
    options: [
      "It decreases reaction rate",
      "It increases reaction rate linearly",
      "It prevents product formation",
      "It denatures the enzyme"
    ],
    correctAnswer: 1,
    explanation: "At low substrate concentrations, more substrate molecules increase collisions with active sites, raising reaction rate."
  },
  {
    id: "factor-inhibitor-6",
    question: "What happens when substrate concentration is very high and enzymes are saturated?",
    options: [
      "Reaction reaches Vmax",
      "Reaction rate keeps increasing forever",
      "Km decreases to zero",
      "All enzyme molecules denature"
    ],
    correctAnswer: 0,
    explanation: "At saturation, all active sites are occupied, so reaction reaches maximum velocity (Vmax)."
  },
  {
    id: "factor-inhibitor-7",
    question: "What effect does increasing enzyme concentration have when substrate is abundant?",
    options: [
      "Reaction rate increases proportionally",
      "Reaction rate decreases",
      "Reaction stops completely",
      "Enzyme denatures immediately"
    ],
    correctAnswer: 0,
    explanation: "More enzyme molecules provide more active sites, raising reaction rate as long as substrate is sufficient."
  },
  {
    id: "factor-inhibitor-8",
    question: "Which inhibitor binds to the active site, competing with the substrate?",
    options: [
      "Non-competitive inhibitor",
      "Competitive inhibitor",
      "Uncompetitive inhibitor",
      "Irreversible inhibitor"
    ],
    correctAnswer: 1,
    explanation: "Competitive inhibitors resemble the substrate and bind to the active site, blocking substrate binding."
  },
  {
    id: "factor-inhibitor-9",
    question: "How can the effect of a competitive inhibitor be reduced?",
    options: [
      "Lowering temperature",
      "Increasing substrate concentration",
      "Adding more inhibitor",
      "Changing enzyme structure"
    ],
    correctAnswer: 1,
    explanation: "High substrate concentration can outcompete the inhibitor at the active site, restoring activity."
  },
  {
    id: "factor-inhibitor-10",
    question: "Which inhibitor reduces Vmax but does not change Km?",
    options: [
      "Competitive inhibitor",
      "Non-competitive inhibitor",
      "Uncompetitive inhibitor",
      "Feedback inhibitor"
    ],
    correctAnswer: 1,
    explanation: "Non-competitive inhibitors reduce the number of functional enzyme molecules, lowering Vmax."
  },
  {
    id: "factor-inhibitor-11",
    question: "Which type of inhibition is seen in feedback control of metabolic pathways?",
    options: [
      "Irreversible inhibition",
      "Feedback inhibition by end product",
      "Uncompetitive inhibition",
      "Competitive inhibition"
    ],
    correctAnswer: 1,
    explanation: "Feedback inhibition occurs when the final product of a pathway inhibits an enzyme at the start of the pathway."
  },
  {
    id: "factor-inhibitor-12",
    question: "At very low temperatures, enzyme activity is low mainly because:",
    options: [
      "Enzymes are denatured",
      "Molecules move slowly, lowering collisions",
      "Enzyme concentration decreases",
      "Substrate is destroyed"
    ],
    correctAnswer: 1,
    explanation: "At low temperatures, molecular motion is reduced, lowering enzyme-substrate collisions and slowing reactions."
  },
  {
    id: "factor-inhibitor-13",
    question: "Why does high temperature cause permanent enzyme denaturation?",
    options: [
      "It breaks peptide bonds",
      "It disrupts hydrogen and ionic bonds maintaining structure",
      "It increases enzyme concentration",
      "It doubles enzyme size"
    ],
    correctAnswer: 1,
    explanation: "High temperature disrupts non-covalent interactions, unfolding the protein irreversibly."
  },
  {
    id: "factor-inhibitor-14",
    question: "Which factor determines the optimum pH of an enzyme?",
    options: [
      "Ionization state of active site residues",
      "Concentration of substrate",
      "Temperature of reaction",
      "Enzyme concentration"
    ],
    correctAnswer: 0,
    explanation: "Optimum pH depends on ionization of amino acids in the active site that are essential for catalysis."
  },
  {
    id: "factor-inhibitor-15",
    question: "Which enzyme works optimally in alkaline pH, such as in the intestine?",
    options: [
      "Amylase",
      "Pepsin",
      "Lipase",
      "Trypsin"
    ],
    correctAnswer: 3,
    explanation: "Trypsin is a protease that functions best in slightly alkaline pH of the small intestine."
  },
  {
    id: "factor-inhibitor-16",
    question: "Which factor affects both enzyme and substrate collisions directly?",
    options: [
      "pH",
      "Enzyme concentration",
      "Temperature",
      "Feedback inhibition"
    ],
    correctAnswer: 2,
    explanation: "Temperature influences molecular motion and collision frequency, directly affecting reaction rate."
  },
  {
    id: "factor-inhibitor-17",
    question: "Which inhibitor type is usually permanent and covalently binds to enzymes?",
    options: [
      "Irreversible inhibitor",
      "Competitive inhibitor",
      "Non-competitive inhibitor",
      "Feedback inhibitor"
    ],
    correctAnswer: 0,
    explanation: "Irreversible inhibitors covalently modify enzymes, permanently inactivating them."
  },
  {
    id: "factor-inhibitor-18",
    question: "Which parameter changes in competitive inhibition?",
    options: [
      "Km increases",
      "Km decreases",
      "Vmax decreases",
      "Both Km and Vmax decrease"
    ],
    correctAnswer: 0,
    explanation: "Competitive inhibitors increase the apparent Km, showing reduced substrate affinity."
  },
  {
    id: "factor-inhibitor-19",
    question: "Why does enzyme activity decrease sharply after optimum pH?",
    options: [
      "Peptide bonds break",
      "Enzyme undergoes conformational change at active site",
      "More substrate binds",
      "Temperature decreases suddenly"
    ],
    correctAnswer: 1,
    explanation: "Deviation from optimum pH alters ionization and structure of the active site, reducing function."
  },
  {
    id: "factor-inhibitor-20",
    question: "Which is an industrial advantage of immobilized enzymes regarding inhibitors?",
    options: [
      "They are more easily inhibited",
      "They are protected against some inhibitors",
      "They denature faster",
      "They cannot be reused"
    ],
    correctAnswer: 1,
    explanation: "Immobilization often increases enzyme stability and resistance against inhibitors or harsh conditions."
  },
  {
    id: "factor-inhibitor-21",
    question: "Why does enzyme activity not increase further beyond optimum temperature?",
    options: [
      "Enzyme concentration decreases",
      "Active site loses shape due to denaturation",
      "Substrate concentration decreases to zero",
      "Enzyme converts to a hormone"
    ],
    correctAnswer: 1,
    explanation: "Beyond optimum temperature, the enzyme’s active site denatures, preventing further catalysis."
  },
  {
    id: "factor-inhibitor-22",
    question: "What happens to enzyme activity if the substrate concentration is lower than enzyme concentration?",
    options: [
      "Reaction proceeds at maximum velocity",
      "Many active sites remain unoccupied",
      "Reaction becomes irreversible",
      "Reaction stops completely"
    ],
    correctAnswer: 1,
    explanation: "When substrate is insufficient, some active sites remain empty, limiting reaction rate."
  },
  {
    id: "factor-inhibitor-23",
    question: "What is the main effect of pH extremes on enzyme structure?",
    options: [
      "Increases substrate concentration",
      "Destroys ionic and hydrogen bonds",
      "Forms more peptide bonds",
      "Reverses enzyme function"
    ],
    correctAnswer: 1,
    explanation: "Extremely high or low pH alters ionic interactions, disrupting enzyme folding and function."
  },
  {
    id: "factor-inhibitor-24",
    question: "Why do reactions slow down when product accumulates?",
    options: [
      "Enzyme is permanently destroyed",
      "Product competes with substrate or causes feedback inhibition",
      "Temperature decreases automatically",
      "Substrate becomes more reactive"
    ],
    correctAnswer: 1,
    explanation: "Accumulated product may inhibit the enzyme or shift equilibrium, slowing further reaction."
  },
  {
    id: "factor-inhibitor-25",
    question: "Which factor increases the frequency of effective enzyme-substrate collisions?",
    options: [
      "Low substrate concentration",
      "Increased temperature within optimum range",
      "Reduced enzyme concentration",
      "Presence of inhibitors"
    ],
    correctAnswer: 1,
    explanation: "Moderate increase in temperature raises molecular motion and effective collisions."
  },
  {
    id: "factor-inhibitor-26",
    question: "What is a key characteristic of non-competitive inhibition?",
    options: [
      "Inhibitor competes with substrate for active site",
      "Inhibitor binds elsewhere, changing enzyme conformation",
      "Enzyme permanently loses active site",
      "Km is always reduced"
    ],
    correctAnswer: 1,
    explanation: "Non-competitive inhibitors bind at an allosteric site, changing enzyme shape and reducing activity."
  },
  {
    id: "factor-inhibitor-27",
    question: "Which type of inhibition lowers both Km and Vmax?",
    options: [
      "Competitive",
      "Non-competitive",
      "Uncompetitive",
      "Irreversible"
    ],
    correctAnswer: 2,
    explanation: "Uncompetitive inhibitors bind only to enzyme-substrate complexes, lowering both Km and Vmax."
  },
  {
    id: "factor-inhibitor-28",
    question: "Why is enzyme activity usually low at very low substrate concentrations?",
    options: [
      "Enzymes denature at low concentration",
      "Few collisions occur between substrate and enzyme",
      "Km is zero at low concentration",
      "Enzyme concentration decreases"
    ],
    correctAnswer: 1,
    explanation: "At low substrate concentrations, fewer enzyme-substrate collisions occur, reducing reaction rate."
  },
  {
    id: "factor-inhibitor-29",
    question: "Which graph best represents enzyme activity vs. temperature?",
    options: [
      "Bell-shaped curve",
      "Straight upward line",
      "Flat line",
      "Zigzag curve"
    ],
    correctAnswer: 0,
    explanation: "Enzyme activity rises with temperature to an optimum, then decreases as denaturation occurs, forming a bell-shaped curve."
  },
  {
    id: "factor-inhibitor-30",
    question: "Which factor can sometimes stabilize enzymes at higher temperatures?",
    options: [
      "Competitive inhibitors",
      "Cofactors or stabilizing proteins",
      "Low substrate concentration",
      "High pH"
    ],
    correctAnswer: 1,
    explanation: "Certain cofactors or proteins help stabilize enzyme structure, allowing activity at higher temperatures."
  },
  {
    id: "factor-inhibitor-31",
    question: "What is the primary effect of increasing enzyme concentration with fixed substrate?",
    options: [
      "Reaction stops",
      "Initial rate increases until substrate is limiting",
      "Km decreases to zero",
      "Vmax decreases"
    ],
    correctAnswer: 1,
    explanation: "More enzymes provide more active sites, raising rate until substrate becomes limiting."
  },
  {
    id: "factor-inhibitor-32",
    question: "What is the role of feedback inhibition in cells?",
    options: [
      "To permanently stop enzyme synthesis",
      "To regulate metabolic pathways efficiently",
      "To increase enzyme denaturation",
      "To change Km permanently"
    ],
    correctAnswer: 1,
    explanation: "Feedback inhibition conserves resources by turning off pathways when end products accumulate."
  },
  {
    id: "factor-inhibitor-33",
    question: "Why does Vmax remain unchanged in competitive inhibition?",
    options: [
      "Inhibitor binds irreversibly",
      "Excess substrate can outcompete inhibitor",
      "Km decreases drastically",
      "Enzyme is destroyed permanently"
    ],
    correctAnswer: 1,
    explanation: "At high substrate concentration, substrate can outcompete the inhibitor, so Vmax is unchanged."
  },
  {
    id: "factor-inhibitor-34",
    question: "What happens if enzyme concentration doubles while substrate is abundant?",
    options: [
      "Reaction rate doubles",
      "Reaction stops",
      "Vmax decreases",
      "Km becomes zero"
    ],
    correctAnswer: 0,
    explanation: "More enzymes provide double the active sites, doubling reaction rate if substrate is not limiting."
  },
  {
    id: "factor-inhibitor-35",
    question: "Which enzyme has optimum pH around 7 in saliva?",
    options: [
      "Pepsin",
      "Salivary amylase",
      "Lipase",
      "Trypsin"
    ],
    correctAnswer: 1,
    explanation: "Salivary amylase functions best at neutral pH around 7."
  },
  {
    id: "factor-inhibitor-36",
    question: "Why does enzyme activity decrease when pH shifts from optimum?",
    options: [
      "Substrate concentration decreases",
      "Ionization of amino acids in active site changes",
      "Temperature decreases",
      "Enzyme concentration decreases"
    ],
    correctAnswer: 1,
    explanation: "pH alters ionization states of amino acids critical for enzyme activity, lowering efficiency."
  },
  {
    id: "factor-inhibitor-37",
    question: "Which factor is most likely to denature enzymes permanently?",
    options: [
      "Moderate temperature increase",
      "Extreme pH changes",
      "Low substrate concentration",
      "Low enzyme concentration"
    ],
    correctAnswer: 1,
    explanation: "Extreme pH alters bonds irreversibly, denaturing enzymes permanently."
  },
  {
    id: "factor-inhibitor-38",
    question: "Which of the following is an irreversible inhibitor?",
    options: [
      "Cyanide binding to cytochrome oxidase",
      "Substrate competing at active site",
      "End product of pathway",
      "Uncompetitive inhibitor"
    ],
    correctAnswer: 0,
    explanation: "Cyanide forms a permanent complex with cytochrome oxidase, irreversibly blocking respiration."
  },
  {
    id: "factor-inhibitor-39",
    question: "Why does enzyme activity plateau at high substrate concentration?",
    options: [
      "All active sites are occupied",
      "Substrate denatures enzyme",
      "Km increases continuously",
      "Vmax decreases"
    ],
    correctAnswer: 0,
    explanation: "At high substrate levels, all enzymes are saturated and reaction rate reaches Vmax."
  },
  {
    id: "factor-inhibitor-40",
    question: "Which factor is considered a limiting factor at low substrate concentration?",
    options: [
      "Enzyme concentration",
      "Substrate concentration",
      "Temperature",
      "pH"
    ],
    correctAnswer: 1,
    explanation: "At low substrate concentration, the limiting factor is substrate availability."
  },
  {
    id: "factor-inhibitor-41",
    question: "Why does enzyme activity rise with increasing temperature up to optimum?",
    options: [
      "More active sites form",
      "More collisions occur due to higher kinetic energy",
      "Substrate concentration increases",
      "Km decreases"
    ],
    correctAnswer: 1,
    explanation: "Temperature increases molecular motion, raising collision rate and enzyme activity until denaturation occurs."
  },
  {
    id: "factor-inhibitor-42",
    question: "Which type of inhibition cannot be overcome by increasing substrate concentration?",
    options: [
      "Competitive",
      "Non-competitive",
      "Mixed",
      "Reversible"
    ],
    correctAnswer: 1,
    explanation: "Non-competitive inhibition binds outside the active site, so excess substrate cannot remove the inhibitor."
  },
  {
    id: "factor-inhibitor-43",
    question: "What happens to enzyme activity when pH changes slightly from optimum?",
    options: [
      "No effect at all",
      "Gradual decrease in activity",
      "Immediate denaturation",
      "Sudden increase in activity"
    ],
    correctAnswer: 1,
    explanation: "Even slight deviation from optimum pH reduces enzyme activity gradually."
  },
  {
    id: "factor-inhibitor-44",
    question: "Which statement describes the effect of irreversible inhibitors?",
    options: [
      "They lower Vmax temporarily",
      "They permanently inactivate the enzyme",
      "They always decrease Km",
      "They only work at low temperatures"
    ],
    correctAnswer: 1,
    explanation: "Irreversible inhibitors covalently modify enzymes, permanently blocking activity."
  },
  {
    id: "factor-inhibitor-45",
    question: "How does high fever affect enzyme activity in humans?",
    options: [
      "Enzymes denature, lowering activity",
      "Enzyme concentration increases",
      "Km decreases to zero",
      "Enzyme activity increases without limit"
    ],
    correctAnswer: 0,
    explanation: "High fever raises body temperature beyond optimum, causing enzyme denaturation and reduced activity."
  },
  {
    id: "factor-inhibitor-46",
    question: "Why does enzyme activity decrease if enzyme concentration is fixed but substrate concentration is very high?",
    options: [
      "All active sites become saturated",
      "Enzyme denatures instantly",
      "Km decreases continuously",
      "Product destroys enzyme"
    ],
    correctAnswer: 0,
    explanation: "With fixed enzyme, high substrate concentration saturates all active sites, limiting reaction to Vmax."
  },
  {
    id: "factor-inhibitor-47",
    question: "Which factor directly affects the shape of the enzyme’s active site?",
    options: [
      "Substrate concentration",
      "pH",
      "Enzyme concentration",
      "Product concentration"
    ],
    correctAnswer: 1,
    explanation: "pH changes ionization and bonding within the protein, altering active site shape."
  },
  {
    id: "factor-inhibitor-48",
    question: "Which statement best describes feedback inhibition?",
    options: [
      "It increases enzyme concentration",
      "It regulates pathways by end-product inhibition",
      "It permanently denatures enzymes",
      "It prevents substrate from binding at all times"
    ],
    correctAnswer: 1,
    explanation: "Feedback inhibition allows end-products to regulate metabolic pathways by inhibiting the first enzyme."
  },
  {
    id: "factor-inhibitor-49",
    question: "What happens to Km during non-competitive inhibition?",
    options: [
      "Km increases",
      "Km decreases",
      "Km remains unchanged",
      "Km becomes zero"
    ],
    correctAnswer: 2,
    explanation: "Non-competitive inhibition does not change substrate affinity, so Km remains the same."
  },
  {
    id: "factor-inhibitor-50",
    question: "Which of the following is a common competitive inhibitor of succinate dehydrogenase?",
    options: [
      "Cyanide",
      "Malonate",
      "Fluoride",
      "Arsenic"
    ],
    correctAnswer: 1,
    explanation: "Malonate closely resembles succinate and competitively inhibits succinate dehydrogenase."
  },
  {
    id: "factor-inhibitor-51",
    question: "Why does cooling not permanently denature enzymes?",
    options: [
      "Hydrogen bonds reform when temperature rises again",
      "Enzyme concentration increases",
      "Km decreases permanently",
      "Substrate converts into enzyme"
    ],
    correctAnswer: 0,
    explanation: "Cooling only slows molecular motion but does not destroy bonds, so activity can be restored when temperature returns to optimum."
  },
  {
    id: "factor-inhibitor-52",
    question: "Which type of inhibitor binds covalently and cannot be removed?",
    options: [
      "Non-competitive",
      "Irreversible",
      "Competitive",
      "Feedback"
    ],
    correctAnswer: 1,
    explanation: "Irreversible inhibitors form strong covalent bonds, permanently inactivating enzymes."
  },
  {
    id: "factor-inhibitor-53",
    question: "Why is enzyme activity highest at optimum pH?",
    options: [
      "Active site residues have proper ionization",
      "Enzyme concentration is maximum",
      "Substrate concentration becomes zero",
      "Temperature decreases"
    ],
    correctAnswer: 0,
    explanation: "Optimum pH ensures correct ionization of active site amino acids necessary for catalysis."
  },
  {
    id: "factor-inhibitor-54",
    question: "What is the effect of increasing enzyme concentration when substrate is limiting?",
    options: [
      "No significant change in reaction rate",
      "Reaction rate doubles",
      "Km decreases",
      "Enzyme denatures"
    ],
    correctAnswer: 0,
    explanation: "If substrate is insufficient, adding more enzyme has little effect as there are not enough molecules to bind."
  },
  {
    id: "factor-inhibitor-55",
    question: "Which enzyme functions best in strongly alkaline pH of the intestine?",
    options: [
      "Trypsin",
      "Amylase",
      "Pepsin",
      "Catalase"
    ],
    correctAnswer: 0,
    explanation: "Trypsin works optimally at alkaline pH in the small intestine."
  },
  {
    id: "factor-inhibitor-56",
    question: "Why does substrate concentration affect reaction rate at low levels?",
    options: [
      "Because more active sites are available than substrates",
      "Because enzymes denature",
      "Because Km becomes zero",
      "Because temperature decreases"
    ],
    correctAnswer: 0,
    explanation: "At low substrate concentrations, many active sites are empty, limiting collisions and reaction rate."
  },
  {
    id: "factor-inhibitor-57",
    question: "Which inhibitor binds at an allosteric site and changes enzyme conformation?",
    options: [
      "Non-competitive inhibitor",
      "Competitive inhibitor",
      "Uncompetitive inhibitor",
      "Reversible inhibitor"
    ],
    correctAnswer: 0,
    explanation: "Non-competitive inhibitors alter the enzyme’s shape, reducing its catalytic efficiency."
  },
  {
    id: "factor-inhibitor-58",
    question: "How does enzyme activity change with mild heating before optimum?",
    options: [
      "It decreases sharply",
      "It increases due to more kinetic energy",
      "It becomes zero",
      "It permanently denatures"
    ],
    correctAnswer: 1,
    explanation: "Mild heating increases kinetic energy, leading to more collisions and faster reaction."
  },
  {
    id: "factor-inhibitor-59",
    question: "Why do enzymes have different optimum pH values?",
    options: [
      "They have different amino acid compositions",
      "All enzymes are the same",
      "Substrate changes pH",
      "Temperature controls pH"
    ],
    correctAnswer: 0,
    explanation: "Different enzymes have different amino acid residues in their active sites, giving them unique pH optima."
  },
  {
    id: "factor-inhibitor-60",
    question: "Which type of inhibition reduces both Km and Vmax?",
    options: [
      "Competitive",
      "Uncompetitive",
      "Non-competitive",
      "Feedback"
    ],
    correctAnswer: 1,
    explanation: "Uncompetitive inhibitors bind only to enzyme-substrate complexes, lowering both Km and Vmax."
  },
  {
    id: "factor-inhibitor-61",
    question: "Why does enzyme activity decrease beyond optimum temperature?",
    options: [
      "Hydrogen bonds in protein structure break",
      "Substrate concentration decreases",
      "Enzyme concentration increases",
      "pH becomes neutral"
    ],
    correctAnswer: 0,
    explanation: "Excess heat breaks weak bonds stabilizing the enzyme, leading to denaturation."
  },
  {
    id: "factor-inhibitor-62",
    question: "Which inhibitor type resembles the substrate in structure?",
    options: [
      "Competitive inhibitor",
      "Non-competitive inhibitor",
      "Uncompetitive inhibitor",
      "Irreversible inhibitor"
    ],
    correctAnswer: 0,
    explanation: "Competitive inhibitors mimic the substrate and compete for binding at the active site."
  },
  {
    id: "factor-inhibitor-63",
    question: "Why does Vmax decrease in non-competitive inhibition?",
    options: [
      "Some enzymes are permanently inactivated",
      "Substrate concentration decreases",
      "pH changes",
      "Km decreases"
    ],
    correctAnswer: 0,
    explanation: "Non-competitive inhibition reduces the total number of functional enzyme molecules, lowering Vmax."
  },
  {
    id: "factor-inhibitor-64",
    question: "Which enzyme has optimum pH around 2?",
    options: [
      "Trypsin",
      "Amylase",
      "Pepsin",
      "Lipase"
    ],
    correctAnswer: 2,
    explanation: "Pepsin functions in the stomach’s acidic environment, with optimum pH near 2."
  },
  {
    id: "factor-inhibitor-65",
    question: "What happens to enzyme-substrate collisions at very low temperatures?",
    options: [
      "They stop completely",
      "They slow down due to reduced kinetic energy",
      "They increase rapidly",
      "They denature enzymes"
    ],
    correctAnswer: 1,
    explanation: "Low temperatures reduce molecular motion, lowering collision frequency and slowing the reaction."
  },
  {
    id: "factor-inhibitor-66",
    question: "Which type of inhibition is usually reversible by dialysis?",
    options: [
      "Irreversible",
      "Competitive",
      "Non-competitive",
      "Feedback"
    ],
    correctAnswer: 1,
    explanation: "Competitive inhibitors are reversible and can often be removed, restoring activity."
  },
  {
    id: "factor-inhibitor-67",
    question: "Why does enzyme activity remain low even at high substrate concentration if inhibitors are present?",
    options: [
      "Inhibitors block enzyme function",
      "Enzymes become more active",
      "Km decreases",
      "Temperature drops"
    ],
    correctAnswer: 0,
    explanation: "Inhibitors interfere with active sites or enzyme conformation, limiting activity despite substrate abundance."
  },
  {
    id: "factor-inhibitor-68",
    question: "Which inhibitor type is important in drug design?",
    options: [
      "Non-competitive",
      "Competitive",
      "Irreversible",
      "All of the above"
    ],
    correctAnswer: 3,
    explanation: "Drugs may use competitive, non-competitive, or irreversible inhibition to block specific enzymes."
  },
  {
    id: "factor-inhibitor-69",
    question: "What happens when enzyme concentration increases but substrate is constant?",
    options: [
      "Reaction rate rises initially then plateaus",
      "Reaction stops",
      "Km decreases",
      "Enzyme denatures"
    ],
    correctAnswer: 0,
    explanation: "Rate increases as more active sites are available, but plateaus when substrate becomes limiting."
  },
  {
    id: "factor-inhibitor-70",
    question: "Which enzyme is inhibited by cyanide?",
    options: [
      "Catalase",
      "Cytochrome oxidase",
      "Amylase",
      "Lipase"
    ],
    correctAnswer: 1,
    explanation: "Cyanide irreversibly inhibits cytochrome oxidase, blocking cellular respiration."
  },
  {
    id: "factor-inhibitor-71",
    question: "Why does enzyme activity decline at extremely high pH?",
    options: [
      "Active site loses proper charge distribution",
      "Substrate concentration becomes zero",
      "Enzyme doubles in size",
      "Km decreases"
    ],
    correctAnswer: 0,
    explanation: "Extreme pH alters charges on amino acids in the active site, distorting enzyme structure."
  },
  {
    id: "factor-inhibitor-72",
    question: "Which factor is often limiting at high enzyme concentration?",
    options: [
      "Substrate concentration",
      "Temperature",
      "pH",
      "Km value"
    ],
    correctAnswer: 0,
    explanation: "At high enzyme levels, reaction rate depends mainly on availability of substrate."
  },
  {
    id: "factor-inhibitor-73",
    question: "Which inhibitor binds only after enzyme-substrate complex formation?",
    options: [
      "Uncompetitive inhibitor",
      "Competitive inhibitor",
      "Non-competitive inhibitor",
      "Irreversible inhibitor"
    ],
    correctAnswer: 0,
    explanation: "Uncompetitive inhibitors bind exclusively to enzyme-substrate complexes, preventing product release."
  },
  {
    id: "factor-inhibitor-74",
    question: "Why does enzyme activity decrease in the presence of heavy metals like mercury?",
    options: [
      "They form irreversible bonds with enzymes",
      "They lower substrate concentration",
      "They reduce enzyme concentration",
      "They increase optimum pH"
    ],
    correctAnswer: 0,
    explanation: "Heavy metals bind sulfhydryl groups in enzymes, causing irreversible inhibition."
  },
  {
    id: "factor-inhibitor-75",
    question: "Why does enzyme activity initially rise with substrate concentration?",
    options: [
      "More enzyme molecules are formed",
      "More enzyme-substrate complexes are formed",
      "Enzymes denature",
      "pH changes"
    ],
    correctAnswer: 1,
    explanation: "At increasing substrate levels, more collisions lead to more enzyme-substrate complexes, raising rate."
  },
  {
    id: "factor-inhibitor-76",
    question: "Which parameter does competitive inhibition affect?",
    options: [
      "Increases Km but leaves Vmax unchanged",
      "Decreases both Km and Vmax",
      "Decreases Vmax only",
      "Increases both Km and Vmax"
    ],
    correctAnswer: 0,
    explanation: "Competitive inhibition raises apparent Km, but Vmax remains constant."
  },
  {
    id: "factor-inhibitor-77",
    question: "Why is enzyme activity very sensitive to temperature changes?",
    options: [
      "Weak hydrogen bonds are easily disrupted",
      "Substrate concentration changes",
      "Enzyme concentration doubles",
      "Km decreases automatically"
    ],
    correctAnswer: 0,
    explanation: "Weak non-covalent bonds stabilizing enzyme structure are easily broken by heat."
  },
  {
    id: "factor-inhibitor-78",
    question: "Which inhibitor is used as a pesticide by blocking acetylcholinesterase?",
    options: [
      "Malathion",
      "Cyanide",
      "Aspirin",
      "Methanol"
    ],
    correctAnswer: 0,
    explanation: "Malathion irreversibly inhibits acetylcholinesterase, causing nervous system failure in pests."
  },
  {
    id: "factor-inhibitor-79",
    question: "What is the main effect of substrate concentration on reaction velocity?",
    options: [
      "Velocity increases until saturation",
      "Velocity decreases continuously",
      "Velocity remains constant",
      "Velocity becomes zero at high concentration"
    ],
    correctAnswer: 0,
    explanation: "Reaction velocity rises with substrate concentration until enzyme active sites are saturated."
  },
  {
    id: "factor-inhibitor-80",
    question: "Which factor influences the bell-shaped curve of enzyme activity vs pH?",
    options: [
      "Denaturation at extreme pH",
      "Substrate increase",
      "Km decrease",
      "Enzyme concentration increase"
    ],
    correctAnswer: 0,
    explanation: "Activity rises to optimum and falls at extremes due to denaturation, forming a bell-shaped curve."
  },
  {
    id: "factor-inhibitor-81",
    question: "Why does enzyme activity plateau even if substrate keeps increasing?",
    options: [
      "All active sites are saturated",
      "Enzyme concentration doubles",
      "Km decreases",
      "Temperature increases"
    ],
    correctAnswer: 0,
    explanation: "When all enzyme active sites are occupied, reaction reaches Vmax and cannot increase further."
  },
  {
    id: "factor-inhibitor-82",
    question: "Which inhibitor type is aspirin an example of?",
    options: [
      "Irreversible inhibitor",
      "Competitive inhibitor",
      "Non-competitive inhibitor",
      "Uncompetitive inhibitor"
    ],
    correctAnswer: 0,
    explanation: "Aspirin irreversibly acetylates cyclooxygenase, blocking prostaglandin synthesis."
  },
  {
    id: "factor-inhibitor-83",
    question: "Why does enzyme activity often decrease gradually with time in vitro?",
    options: [
      "Enzyme slowly denatures or loses activity",
      "Substrate concentration increases",
      "Km decreases",
      "pH stabilizes"
    ],
    correctAnswer: 0,
    explanation: "Enzymes lose activity over time due to gradual denaturation or instability outside the cell."
  },
  {
    id: "factor-inhibitor-84",
    question: "Which factor can overcome competitive inhibition?",
    options: [
      "Increasing substrate concentration",
      "Increasing enzyme concentration",
      "Decreasing temperature",
      "Adding more inhibitors"
    ],
    correctAnswer: 0,
    explanation: "Higher substrate concentration outcompetes inhibitors at the active site."
  },
  {
    id: "factor-inhibitor-85",
    question: "Why does enzyme activity drop at very high salt concentrations?",
    options: [
      "Ionic bonds are disrupted",
      "Substrate is destroyed",
      "Km decreases",
      "Temperature drops"
    ],
    correctAnswer: 0,
    explanation: "Excess salts disrupt ionic interactions, destabilizing enzyme structure."
  },
  {
    id: "factor-inhibitor-86",
    question: "Which inhibitor binds only to free enzyme molecules?",
    options: [
      "Competitive",
      "Uncompetitive",
      "Non-competitive",
      "Irreversible"
    ],
    correctAnswer: 0,
    explanation: "Competitive inhibitors bind only to free enzymes, not enzyme-substrate complexes."
  },
  {
    id: "factor-inhibitor-87",
    question: "Why do immobilized enzymes sometimes resist inhibition better?",
    options: [
      "Their active sites are shielded",
      "They have no active sites",
      "Km decreases permanently",
      "Substrate concentration decreases"
    ],
    correctAnswer: 0,
    explanation: "Immobilization may protect active sites from inhibitors, increasing resistance."
  },
  {
    id: "factor-inhibitor-88",
    question: "Which enzyme is inhibited by fluoride ions?",
    options: [
      "Enolase",
      "Pepsin",
      "Amylase",
      "Lipase"
    ],
    correctAnswer: 0,
    explanation: "Fluoride inhibits enolase, an enzyme of glycolysis."
  },
  {
    id: "factor-inhibitor-89",
    question: "Why does enzyme activity slow down when substrate is nearly used up?",
    options: [
      "Enzyme concentration decreases",
      "Fewer collisions occur as substrate becomes scarce",
      "Km decreases",
      "Temperature increases"
    ],
    correctAnswer: 1,
    explanation: "As substrate depletes, fewer collisions occur with enzymes, slowing the reaction."
  },
  {
    id: "factor-inhibitor-90",
    question: "Which type of inhibition is caused by the antibiotic penicillin?",
    options: [
      "Irreversible inhibition",
      "Competitive inhibition",
      "Non-competitive inhibition",
      "Uncompetitive inhibition"
    ],
    correctAnswer: 0,
    explanation: "Penicillin irreversibly inhibits enzymes involved in bacterial cell wall synthesis."
  },
  {
    id: "factor-inhibitor-91",
    question: "Why is enzyme activity often measured at optimum pH?",
    options: [
      "Maximum enzyme-substrate interaction occurs",
      "Enzyme concentration is higher",
      "Substrate is destroyed",
      "Km becomes zero"
    ],
    correctAnswer: 0,
    explanation: "Optimum pH provides the best ionization state for enzyme-substrate binding and catalysis."
  },
  {
    id: "factor-inhibitor-92",
    question: "Which factor lowers enzyme stability at extreme pH?",
    options: [
      "Disruption of ionic bonds and hydrogen bonds",
      "Km decreases",
      "Enzyme concentration increases",
      "Temperature decreases"
    ],
    correctAnswer: 0,
    explanation: "Extreme pH disrupts ionic and hydrogen bonds, destabilizing enzyme structure."
  },
  {
    id: "factor-inhibitor-93",
    question: "Why is Vmax unaffected in competitive inhibition?",
    options: [
      "Inhibitor does not permanently bind",
      "Km decreases",
      "All enzymes are destroyed",
      "Temperature increases"
    ],
    correctAnswer: 0,
    explanation: "Competitive inhibitors are reversible and can be outcompeted at high substrate concentration."
  },
  {
    id: "factor-inhibitor-94",
    question: "Which inhibitor is used to treat bacterial infections by targeting folate synthesis?",
    options: [
      "Sulfonamides",
      "Cyanide",
      "Arsenic",
      "Fluoride"
    ],
    correctAnswer: 0,
    explanation: "Sulfonamides act as competitive inhibitors in folate synthesis pathways of bacteria."
  },
  {
    id: "factor-inhibitor-95",
    question: "What happens to enzyme activity when body temperature rises slightly during exercise?",
    options: [
      "Activity increases as kinetic energy rises",
      "Activity decreases",
      "Enzymes denature",
      "Km decreases"
    ],
    correctAnswer: 0,
    explanation: "Mild rise in body temperature enhances molecular motion, slightly boosting enzyme activity."
  },
  {
    id: "factor-inhibitor-96",
    question: "Which enzyme is inhibited by lead poisoning?",
    options: [
      "δ-ALA dehydratase",
      "Pepsin",
      "Lipase",
      "Amylase"
    ],
    correctAnswer: 0,
    explanation: "Lead inhibits δ-ALA dehydratase, impairing heme synthesis."
  },
  {
    id: "factor-inhibitor-97",
    question: "Why does enzyme activity increase in a narrow temperature range?",
    options: [
      "More molecular collisions occur",
      "Km decreases",
      "Enzymes multiply",
      "Substrate concentration decreases"
    ],
    correctAnswer: 0,
    explanation: "Within a moderate temperature range, kinetic energy rises, causing more enzyme-substrate collisions."
  },
  {
    id: "factor-inhibitor-98",
    question: "Which inhibitor lowers Km without affecting Vmax?",
    options: [
      "Uncompetitive",
      "Competitive",
      "Non-competitive",
      "Irreversible"
    ],
    correctAnswer: 0,
    explanation: "Uncompetitive inhibition decreases Km by stabilizing the enzyme-substrate complex, but Vmax also decreases."
  },
  {
    id: "factor-inhibitor-99",
    question: "Why does enzyme activity eventually level off with increasing substrate?",
    options: [
      "Enzyme active sites become saturated",
      "Km decreases",
      "Substrate becomes toxic",
      "Enzyme concentration increases"
    ],
    correctAnswer: 0,
    explanation: "At saturation, all enzyme molecules are working at maximum capacity, fixing the rate at Vmax."
  },
  {
    id: "factor-inhibitor-100",
    question: "Which inhibitor is present in methotrexate therapy?",
    options: [
      "Competitive inhibitor of dihydrofolate reductase",
      "Non-competitive inhibitor of cytochrome oxidase",
      "Irreversible inhibitor of lipase",
      "Uncompetitive inhibitor of amylase"
    ],
    correctAnswer: 0,
    explanation: "Methotrexate acts as a competitive inhibitor of dihydrofolate reductase, blocking DNA synthesis."
  },
  {
    id: "factor-inhibitor-101",
    question: "Which factor primarily determines the rate of enzyme activity at very low substrate concentration?",
    options: [
      "Enzyme concentration",
      "Substrate concentration",
      "Temperature",
      "pH"
    ],
    correctAnswer: 1,
    explanation: "At low substrate levels, the limiting factor is substrate concentration because few enzyme-substrate collisions occur."
  },
  {
    id: "factor-inhibitor-102",
    question: "Why does enzyme activity fall sharply at temperatures above 50°C in humans?",
    options: [
      "Substrate evaporates",
      "Enzyme denaturation destroys the active site",
      "pH becomes alkaline",
      "Cofactors become inactive"
    ],
    correctAnswer: 1,
    explanation: "High heat disrupts hydrogen and ionic bonds in enzymes, denaturing their active sites."
  },
  {
    id: "factor-inhibitor-103",
    question: "Which factor is altered in competitive inhibition?",
    options: [
      "Km increases",
      "Km decreases",
      "Vmax decreases",
      "Enzyme concentration decreases"
    ],
    correctAnswer: 0,
    explanation: "In competitive inhibition, more substrate is required to achieve half-maximal velocity, so Km increases."
  },
  {
    id: "factor-inhibitor-104",
    question: "Which enzyme works best at highly acidic pH around 2?",
    options: [
      "Pepsin",
      "Salivary amylase",
      "Trypsin",
      "Lipase"
    ],
    correctAnswer: 0,
    explanation: "Pepsin in the stomach functions optimally at very low pH (acidic conditions)."
  },
  {
    id: "factor-inhibitor-105",
    question: "What effect does increasing enzyme concentration have when substrate is already saturating?",
    options: [
      "No further increase in rate",
      "Vmax decreases",
      "Km becomes zero",
      "Reaction reverses direction"
    ],
    correctAnswer: 0,
    explanation: "At saturating substrate, adding more enzyme does not raise rate since all substrate is already bound."
  },
  {
    id: "factor-inhibitor-106",
    question: "Which type of inhibitor binds covalently to enzymes?",
    options: [
      "Irreversible inhibitors",
      "Competitive inhibitors",
      "Non-competitive inhibitors",
      "Uncompetitive inhibitors"
    ],
    correctAnswer: 0,
    explanation: "Irreversible inhibitors form covalent bonds, permanently inactivating enzymes."
  },
  {
    id: "factor-inhibitor-107",
    question: "Why is optimum pH important for enzyme function?",
    options: [
      "Maintains the correct charge of amino acids in the active site",
      "Increases substrate concentration",
      "Decreases enzyme concentration",
      "Denatures substrate"
    ],
    correctAnswer: 0,
    explanation: "Optimum pH preserves proper ionization of amino acids in the active site, ensuring efficient catalysis."
  },
  {
    id: "factor-inhibitor-108",
    question: "Which statement describes feedback inhibition?",
    options: [
      "The end product of a pathway inhibits the first enzyme",
      "The first enzyme increases substrate supply",
      "The product denatures all enzymes",
      "The pathway becomes irreversible"
    ],
    correctAnswer: 0,
    explanation: "Feedback inhibition regulates pathways by end product binding to the first enzyme, stopping further synthesis."
  },
  {
    id: "factor-inhibitor-109",
    question: "What happens to Vmax in non-competitive inhibition?",
    options: [
      "Vmax decreases",
      "Vmax increases",
      "Vmax remains unchanged",
      "Vmax becomes infinite"
    ],
    correctAnswer: 0,
    explanation: "Non-competitive inhibitors reduce the number of functional enzymes, lowering Vmax."
  },
  {
    id: "factor-inhibitor-110",
    question: "Which inhibitor resembles the substrate in shape?",
    options: [
      "Competitive inhibitor",
      "Non-competitive inhibitor",
      "Uncompetitive inhibitor",
      "Irreversible inhibitor"
    ],
    correctAnswer: 0,
    explanation: "Competitive inhibitors structurally mimic substrates and bind the active site."
  },
  {
    id: "factor-inhibitor-111",
    question: "Why does reaction rate increase when temperature is raised slightly (below optimum)?",
    options: [
      "Substrate becomes more concentrated",
      "Collisions between enzyme and substrate become more frequent",
      "Enzyme concentration doubles",
      "Km decreases instantly"
    ],
    correctAnswer: 1,
    explanation: "Moderate heating increases kinetic energy, boosting enzyme-substrate collisions."
  },
  {
    id: "factor-inhibitor-112",
    question: "Which inhibitor cannot be overcome by adding more substrate?",
    options: [
      "Non-competitive",
      "Competitive",
      "Substrate",
      "Feedback"
    ],
    correctAnswer: 0,
    explanation: "Non-competitive inhibitors bind outside the active site, so excess substrate cannot remove them."
  },
  {
    id: "factor-inhibitor-113",
    question: "What happens if pH deviates greatly from optimum?",
    options: [
      "Enzyme denatures",
      "Substrate denatures",
      "Km increases but enzyme is stable",
      "Vmax increases"
    ],
    correctAnswer: 0,
    explanation: "Large pH shifts alter bonding and denature the enzyme permanently."
  },
  {
    id: "factor-inhibitor-114",
    question: "Which enzyme is irreversibly inhibited by cyanide?",
    options: [
      "Cytochrome oxidase",
      "Salivary amylase",
      "Pepsin",
      "Catalase"
    ],
    correctAnswer: 0,
    explanation: "Cyanide forms a stable complex with cytochrome oxidase, blocking respiration."
  },
  {
    id: "factor-inhibitor-115",
    question: "What does an increase in Km indicate?",
    options: [
      "Lower substrate affinity",
      "Higher substrate affinity",
      "Increase in Vmax",
      "Decrease in enzyme concentration"
    ],
    correctAnswer: 0,
    explanation: "An increased Km means the enzyme requires more substrate to reach half Vmax, reflecting lower affinity."
  },
  {
    id: "factor-inhibitor-116",
    question: "Which type of inhibition decreases both Km and Vmax?",
    options: [
      "Uncompetitive inhibition",
      "Competitive inhibition",
      "Non-competitive inhibition",
      "Irreversible inhibition"
    ],
    correctAnswer: 0,
    explanation: "Uncompetitive inhibitors bind to the enzyme-substrate complex, lowering both Km and Vmax."
  },
  {
    id: "factor-inhibitor-117",
    question: "What happens when all enzyme active sites are occupied?",
    options: [
      "Reaction rate reaches Vmax",
      "Reaction stops",
      "Km decreases to zero",
      "Enzyme denatures"
    ],
    correctAnswer: 0,
    explanation: "When enzymes are saturated, reaction rate levels off at Vmax."
  },
  {
    id: "factor-inhibitor-118",
    question: "Which factor explains reduced enzyme activity in very high fevers?",
    options: [
      "Enzyme denaturation due to high heat",
      "Increased Km at normal pH",
      "Substrate absence",
      "Product inhibition only"
    ],
    correctAnswer: 0,
    explanation: "High body temperature denatures enzymes, decreasing activity."
  },
  {
    id: "factor-inhibitor-119",
    question: "Which of the following drugs is a competitive inhibitor?",
    options: [
      "Sulfa drugs inhibiting folate synthesis",
      "Cyanide inhibiting cytochrome oxidase",
      "Fluoride inhibiting enolase",
      "Heavy metals inhibiting SH-groups"
    ],
    correctAnswer: 0,
    explanation: "Sulfa drugs mimic PABA and competitively inhibit folate synthesis in bacteria."
  },
  {
    id: "factor-inhibitor-120",
    question: "Why does enzyme activity drop at very low temperatures?",
    options: [
      "Molecules move slowly, reducing collisions",
      "Enzymes denature instantly",
      "Km becomes zero",
      "Vmax doubles"
    ],
    correctAnswer: 0,
    explanation: "At low temperature, molecular motion is reduced, lowering enzyme-substrate collision frequency."
  },
  {
    id: "factor-inhibitor-121",
    question: "Which factor can increase enzyme activity temporarily without altering structure?",
    options: [
      "Raising substrate concentration",
      "Changing pH by 3 units",
      "Heating above 70°C",
      "Adding irreversible inhibitors"
    ],
    correctAnswer: 0,
    explanation: "Higher substrate levels increase reaction rate until enzymes are saturated."
  },
  {
    id: "factor-inhibitor-122",
    question: "Which inhibitor is used in treatment of hypertension?",
    options: [
      "ACE inhibitors",
      "Cyanide",
      "Lead",
      "Arsenic"
    ],
    correctAnswer: 0,
    explanation: "ACE inhibitors reduce angiotensin II formation, lowering blood pressure."
  },
  {
    id: "factor-inhibitor-123",
    question: "Which statement explains why Vmax stays constant in competitive inhibition?",
    options: [
      "Excess substrate can displace inhibitor",
      "Inhibitor denatures enzyme permanently",
      "Km becomes zero",
      "Enzyme concentration decreases"
    ],
    correctAnswer: 0,
    explanation: "High substrate outcompetes the inhibitor, so Vmax remains achievable."
  },
  {
    id: "factor-inhibitor-124",
    question: "Which enzyme is inhibited by fluoride?",
    options: [
      "Enolase",
      "Lipase",
      "Trypsin",
      "Pepsin"
    ],
    correctAnswer: 0,
    explanation: "Fluoride ions inhibit the glycolytic enzyme enolase."
  },
  {
    id: "factor-inhibitor-125",
    question: "Why does enzyme activity gradually decrease as products accumulate?",
    options: [
      "Products may act as inhibitors",
      "Substrate concentration rises",
      "Enzyme concentration doubles",
      "Km decreases"
    ],
    correctAnswer: 0,
    explanation: "End products can inhibit enzyme activity or shift equilibrium, reducing further reaction."
  },
  {
    id: "factor-inhibitor-126",
    question: "Which factor is constant for a given enzyme regardless of substrate concentration?",
    options: [
      "Km value",
      "Reaction velocity",
      "Enzyme concentration",
      "Product formation rate"
    ],
    correctAnswer: 0,
    explanation: "Km is a constant reflecting enzyme-substrate affinity."
  },
  {
    id: "factor-inhibitor-127",
    question: "Which inhibitor binds only after enzyme-substrate complex forms?",
    options: [
      "Uncompetitive inhibitor",
      "Competitive inhibitor",
      "Non-competitive inhibitor",
      "Irreversible inhibitor"
    ],
    correctAnswer: 0,
    explanation: "Uncompetitive inhibitors bind exclusively to enzyme-substrate complexes."
  },
  {
    id: "factor-inhibitor-128",
    question: "Why do most enzymes have a sharp optimum temperature?",
    options: [
      "Balance between collision frequency and denaturation",
      "Substrate disappears instantly",
      "Enzyme doubles in number",
      "Km decreases infinitely"
    ],
    correctAnswer: 0,
    explanation: "At optimum, enzyme activity is maximized; above it, denaturation outweighs benefits of collisions."
  },
  {
    id: "factor-inhibitor-129",
    question: "Which enzyme inhibitor is used in chemotherapy?",
    options: [
      "Methotrexate",
      "Cyanide",
      "Lead",
      "Arsenic"
    ],
    correctAnswer: 0,
    explanation: "Methotrexate competitively inhibits dihydrofolate reductase, blocking DNA synthesis in cancer cells."
  },
  {
    id: "factor-inhibitor-130",
    question: "Which factor explains reduced enzyme activity at pH far below optimum?",
    options: [
      "Altered ionization of amino acids in active site",
      "Loss of substrate concentration",
      "Km becomes zero",
      "Temperature increases"
    ],
    correctAnswer: 0,
    explanation: "Extreme pH disrupts ionic bonding, altering the active site shape."
  },
  {
    id: "factor-inhibitor-131",
    question: "Which statement about irreversible inhibitors is correct?",
    options: [
      "They permanently inactivate enzymes",
      "They only bind loosely",
      "They are always competitive",
      "They increase Vmax"
    ],
    correctAnswer: 0,
    explanation: "Irreversible inhibitors covalently modify enzymes, causing permanent loss of activity."
  },
  {
    id: "factor-inhibitor-132",
    question: "Which factor does not affect Km?",
    options: [
      "Enzyme concentration",
      "Type of inhibitor",
      "pH affecting binding",
      "Temperature near optimum"
    ],
    correctAnswer: 0,
    explanation: "Km is independent of enzyme concentration but depends on enzyme-substrate affinity and inhibitors."
  },
  {
    id: "factor-inhibitor-133",
    question: "Which inhibitor binds at an allosteric site?",
    options: [
      "Non-competitive inhibitor",
      "Competitive inhibitor",
      "Uncompetitive inhibitor",
      "Irreversible inhibitor"
    ],
    correctAnswer: 0,
    explanation: "Non-competitive inhibitors attach at allosteric sites, altering enzyme conformation."
  },
  {
    id: "factor-inhibitor-134",
    question: "Which enzyme is inhibited by arsenic?",
    options: [
      "Pyruvate dehydrogenase complex",
      "Pepsin",
      "Lipase",
      "Amylase"
    ],
    correctAnswer: 0,
    explanation: "Arsenic interferes with lipoic acid, inhibiting pyruvate dehydrogenase complex."
  },
  {
    id: "factor-inhibitor-135",
    question: "What happens to enzyme activity when temperature falls below optimum?",
    options: [
      "Enzyme activity decreases due to slower collisions",
      "Enzymes denature irreversibly",
      "Km becomes zero",
      "Vmax increases"
    ],
    correctAnswer: 0,
    explanation: "Low temperature reduces kinetic energy, slowing enzyme-substrate collisions."
  },
  {
    id: "factor-inhibitor-136",
    question: "Which inhibitor acts by permanently modifying SH-groups of enzymes?",
    options: [
      "Heavy metal ions",
      "Fluoride",
      "Cyanide",
      "Methotrexate"
    ],
    correctAnswer: 0,
    explanation: "Heavy metals like Hg²⁺ and Pb²⁺ bind to SH-groups, irreversibly inactivating enzymes."
  },
  {
    id: "factor-inhibitor-137",
    question: "Why does enzyme activity decrease when enzyme concentration is fixed but substrate concentration becomes limiting?",
    options: [
      "Not all active sites can bind substrate",
      "Km decreases",
      "Enzymes denature",
      "Vmax increases"
    ],
    correctAnswer: 0,
    explanation: "When substrate is scarce, many enzyme active sites remain unoccupied."
  },
  {
    id: "factor-inhibitor-138",
    question: "Which factor determines the sharpness of enzyme activity curve with temperature?",
    options: [
      "Sensitivity of enzyme bonds to heat",
      "Substrate concentration",
      "Km changes",
      "Feedback inhibition"
    ],
    correctAnswer: 0,
    explanation: "The heat sensitivity of hydrogen and ionic bonds defines how quickly enzymes denature above optimum."
  },
  {
    id: "factor-inhibitor-139",
    question: "Which inhibitor is used in treatment of gout?",
    options: [
      "Allopurinol",
      "Methotrexate",
      "Cyanide",
      "Fluoride"
    ],
    correctAnswer: 0,
    explanation: "Allopurinol inhibits xanthine oxidase, reducing uric acid production in gout treatment."
  },
  {
    id: "factor-inhibitor-140",
    question: "Why do extreme alkaline conditions reduce enzyme activity?",
    options: [
      "Ionization changes disrupt active site structure",
      "Substrate is destroyed",
      "Km becomes zero",
      "Temperature decreases"
    ],
    correctAnswer: 0,
    explanation: "Strongly alkaline pH alters ionization, distorting enzyme active sites."
  },
  {
    id: "factor-inhibitor-141",
    question: "Which inhibitor resembles the transition state of a substrate?",
    options: [
      "Transition state analogs",
      "Competitive inhibitors",
      "Irreversible inhibitors",
      "Non-competitive inhibitors"
    ],
    correctAnswer: 0,
    explanation: "Transition state analogs bind strongly to enzymes, blocking reactions."
  },
  {
    id: "factor-inhibitor-142",
    question: "Which enzyme is competitively inhibited by malonate?",
    options: [
      "Succinate dehydrogenase",
      "Amylase",
      "Trypsin",
      "Lipase"
    ],
    correctAnswer: 0,
    explanation: "Malonate resembles succinate and competitively inhibits succinate dehydrogenase."
  },
  {
    id: "factor-inhibitor-143",
    question: "Why does enzyme activity not increase further at high substrate concentration?",
    options: [
      "All active sites are occupied",
      "Km decreases continuously",
      "Enzyme concentration doubles",
      "Substrate denatures enzyme"
    ],
    correctAnswer: 0,
    explanation: "When active sites are saturated, additional substrate cannot increase the rate beyond Vmax."
  },
  {
    id: "factor-inhibitor-144",
    question: "Which inhibitor reduces enzyme activity by binding at a site different from the substrate?",
    options: [
      "Non-competitive inhibitor",
      "Competitive inhibitor",
      "Uncompetitive inhibitor",
      "Irreversible inhibitor"
    ],
    correctAnswer: 0,
    explanation: "Non-competitive inhibitors bind allosterically, changing enzyme conformation and reducing activity."
  },
  {
    id: "factor-inhibitor-145",
    question: "Which factor explains why pepsin does not work in the intestine?",
    options: [
      "Intestinal pH is alkaline, denaturing pepsin",
      "Substrate is absent",
      "Km is zero in intestine",
      "Temperature is too high"
    ],
    correctAnswer: 0,
    explanation: "Pepsin requires acidic pH; in the alkaline intestine it denatures and becomes inactive."
  },
  {
    id: "factor-inhibitor-146",
    question: "Which inhibitor is used in treatment of Parkinson’s disease?",
    options: [
      "MAO inhibitors",
      "Allopurinol",
      "Cyanide",
      "Fluoride"
    ],
    correctAnswer: 0,
    explanation: "MAO inhibitors prevent dopamine breakdown, helping Parkinson’s patients."
  },
  {
    id: "factor-inhibitor-147",
    question: "Which statement explains enzyme saturation kinetics?",
    options: [
      "Beyond a certain substrate level, enzymes are fully occupied",
      "Enzymes multiply with more substrate",
      "Km becomes zero at saturation",
      "Enzyme denatures immediately"
    ],
    correctAnswer: 0,
    explanation: "At saturation, every enzyme is occupied, and rate plateaus at Vmax."
  },
  {
    id: "factor-inhibitor-148",
    question: "Which enzyme is inhibited by penicillin?",
    options: [
      "Transpeptidase",
      "Amylase",
      "Pepsin",
      "Lipase"
    ],
    correctAnswer: 0,
    explanation: "Penicillin irreversibly inhibits bacterial transpeptidase, blocking cell wall synthesis."
  },
  {
    id: "factor-inhibitor-149",
    question: "Which factor makes enzyme inhibition reversible?",
    options: [
      "Non-covalent binding of inhibitor",
      "Covalent permanent binding",
      "Denaturation of enzyme",
      "Active site destruction"
    ],
    correctAnswer: 0,
    explanation: "Reversible inhibitors bind weakly (non-covalently), allowing enzyme activity to return."
  },
  {
    id: "factor-inhibitor-150",
    question: "Which factor explains why extreme pH can permanently stop enzyme function?",
    options: [
      "Disruption of ionic and hydrogen bonds",
      "Substrate concentration drops",
      "Enzyme concentration decreases",
      "Km becomes zero"
    ],
    correctAnswer: 0,
    explanation: "Extreme pH alters bonding, changing enzyme shape irreversibly and stopping activity."
  }
];




