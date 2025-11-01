
export type Difficulty = keyof typeof  waterBiologicalImportanceQuestions;

export type Question = {
  id: string;
  question: string;
  options: string[];
  correctAnswer: number;
  explanation: string;
};
export const easyQuestions: Question[] = [
    
  {
    "id": "water-easy-1",
    "question": "What is the chemical formula of a water molecule?",
    "options": [
      "H₂O",
      "CO₂",
      "O₂",
      "H₂O₂"
    ],
    "correctAnswer": 0,
    "explanation": "A single molecule of water is composed of two hydrogen atoms bonded to one oxygen atom, giving it the chemical formula H₂O."
  },
  {
    "id": "water-easy-2",
    "question": "Which property of water allows it to act as a universal solvent?",
    "options": [
      "Its high specific heat capacity",
      "Its polar nature",
      "Its density",
      "Its cohesive forces"
    ],
    "correctAnswer": 1,
    "explanation": "Water is a polar molecule, meaning it has a slightly positive end (hydrogen) and a slightly negative end (oxygen). This allows it to effectively dissolve other polar and ionic substances."
  },
  {
    "id": "water-easy-3",
    "question": "Why does ice float on liquid water?",
    "options": [
      "Ice has a lower density than liquid water",
      "Ice has a higher density than liquid water",
      "Ice is colder",
      "Ice is a solid"
    ],
    "correctAnswer": 0,
    "explanation": "Water is unique because its solid form (ice) is less dense than its liquid form. This is due to the hydrogen bonds forming a crystalline lattice that holds molecules farther apart."
  },
  {
    "id": "water-easy-4",
    "question": "The attraction between water molecules is called:",
    "options": [
      "Adhesion",
      "Cohesion",
      "Surface tension",
      "Density"
    ],
    "correctAnswer": 1,
    "explanation": "Cohesion is the attraction between molecules of the same substance, like water molecules attracting each other through hydrogen bonding."
  },
  {
    "id": "water-easy-5",
    "question": "Which term describes the attraction between water molecules and molecules of a different substance?",
    "options": [
      "Cohesion",
      "Adhesion",
      "Surface tension",
      "Capillary action"
    ],
    "correctAnswer": 1,
    "explanation": "Adhesion is the attraction between molecules of different substances, such as water adhering to the walls of a plant's xylem vessel."
  },
  {
    "id": "water-easy-6",
    "question": "What is the name of the bonds that hold water molecules together?",
    "options": [
      "Ionic bonds",
      "Covalent bonds",
      "Hydrogen bonds",
      "Peptide bonds"
    ],
    "correctAnswer": 2,
    "explanation": "The slightly positive hydrogen of one water molecule is attracted to the slightly negative oxygen of another, forming a hydrogen bond."
  },
  {
    "id": "water-easy-7",
    "question": "Which property of water is responsible for the 'skin' on its surface that allows insects to walk on it?",
    "options": [
      "Adhesion",
      "Cohesion",
      "Surface tension",
      "High heat capacity"
    ],
    "correctAnswer": 2,
    "explanation": "Surface tension is a result of cohesive forces between water molecules at the surface, creating a 'film' that can support small objects."
  },
  {
    "id": "water-easy-8",
    "question": "Water's ability to absorb a large amount of heat without a significant change in temperature is due to its:",
    "options": [
      "Low specific heat capacity",
      "High specific heat capacity",
      "High density",
      "Low density"
    ],
    "correctAnswer": 1,
    "explanation": "High specific heat capacity means water can absorb a lot of heat energy before its temperature rises. This helps organisms regulate their temperature."
  },
  {
    "id": "water-easy-9",
    "question": "In a chemical reaction, if water is used to break apart a polymer into monomers, the reaction is called:",
    "options": [
      "Dehydration synthesis",
      "Hydrolysis",
      "Ionization",
      "Condensation"
    ],
    "correctAnswer": 1,
    "explanation": "Hydrolysis ('water-breaking') is a chemical reaction where a water molecule is used to break a covalent bond, splitting a large molecule into smaller ones."
  },
  {
    "id": "water-easy-10",
    "question": "Which of the following is NOT a property of water?",
    "options": [
      "Universal solvent",
      "Non-polar molecule",
      "High surface tension",
      "Less dense as a solid"
    ],
    "correctAnswer": 1,
    "explanation": "Water is a polar molecule, not non-polar. Its polarity is the key to its other properties."
  }
  // ... 90 more easy questions would follow in this format, covering all basic properties.

];

export const mediumQuestions: Question[] = 
[
  {
    "id": "water-medium-1",
    "question": "The high specific heat capacity of water is primarily a consequence of:",
    "options": [
      "Covalent bonds within the molecule",
      "Hydrogen bonding between molecules",
      "Its low molecular weight",
      "Its polar covalent bonds"
    ],
    "correctAnswer": 1,
    "explanation": "A significant amount of heat energy is required to break the extensive network of hydrogen bonds between water molecules before the molecules can start moving faster (which increases temperature)."
  },
  {
    "id": "water-medium-2",
    "question": "How does the property of water cohesion directly benefit plants?",
    "options": [
      "It allows for evaporative cooling through transpiration.",
      "It helps water rise against gravity in xylem vessels.",
      "It enables photosynthesis to occur in leaves.",
      "It helps roots absorb minerals from the soil."
    ],
    "correctAnswer": 1,
    "explanation": "The cohesive forces between water molecules, combined with adhesive forces between water and xylem walls, create a continuous column that pulls water upward from roots to leaves."
  },
  {
    "id": "water-medium-3",
    "question": "When water ionizes, it forms:",
    "options": [
      "H₂ and O₂ gas",
      "Hydronium (H₃O⁺) and hydroxide (OH⁻) ions",
      "Hydrogen (H⁺) and oxygen (O⁻) ions",
      "Water does not ionize"
    ],
    "correctAnswer": 1,
    "explanation": "Water undergoes autoionization: 2H₂O ⇌ H₃O⁺ + OH⁻. This is crucial for defining acidity and alkalinity in biological systems."
  },
  {
    "id": "water-medium-4",
    "question": "In a dehydration synthesis reaction, water is:",
    "options": [
      "A reactant",
      "A product",
      "A solvent",
      "A catalyst"
    ],
    "correctAnswer": 1,
    "explanation": "Dehydration synthesis (condensation) links monomers together to form polymers, and a water molecule is released as a byproduct."
  },
  {
    "id": "water-medium-5",
    "question": "Why is water's density anomaly (being less dense as a solid) ecologically important?",
    "options": [
      "It allows for capillary action in soil.",
      "It prevents oceans and lakes from freezing solid from the bottom up.",
      "It helps in the dissolution of ionic compounds.",
      "It increases the rate of evaporation."
    ],
    "correctAnswer": 1,
    "explanation": "Ice floating on the surface insulates the liquid water below, allowing aquatic life to survive under the ice during winter."
  },
  {
    "id": "water-medium-6",
    "question": "Water acts as a reagent in which of the following biochemical processes?",
    "options": [
      "The electron transport chain",
      "The light-dependent reactions of photosynthesis",
      "The hydrolysis of ATP to ADP + Pi",
      "The Calvin cycle"
    ],
    "correctAnswer": 2,
    "explanation": "When ATP is hydrolyzed, a water molecule is used to break the high-energy phosphate bond, releasing energy and yielding ADP and inorganic phosphate (Pi)."
  },
  {
    "id": "water-medium-7",
    "question": "The pH of a solution is a measure of the concentration of:",
    "options": [
      "OH⁻ ions",
      "H₃O⁺ ions",
      "H₂O molecules",
      "Dissolved salts"
    ],
    "correctAnswer": 1,
    "explanation": "pH = -log[H⁺], where [H⁺] is often used interchangeably with [H₃O⁺]. It directly measures the concentration of hydronium ions."
  },
  {
    "id": "water-medium-8",
    "question": "Which property of water is most directly responsible for the moderate climate of coastal regions?",
    "options": [
      "Cohesion and adhesion",
      "High latent heat of vaporization",
      "High specific heat capacity",
      "Universal solvent action"
    ],
    "correctAnswer": 2,
    "explanation": "Oceans absorb and store a huge amount of solar heat during the day and release it slowly at night, moderating temperature extremes due to water's high specific heat capacity."
  },
  {
    "id": "water-medium-9",
    "question": "A hydration shell refers to:",
    "options": [
      "The hard shell of a turtle",
      "A layer of water molecules surrounding a dissolved ion",
      "The ice layer on top of a lake",
      "The cohesive water column in a plant"
    ],
    "correctAnswer": 1,
    "explanation": "When an ionic compound dissolves, water molecules orient themselves according to charge (negative oxygen towards cations, positive hydrogen towards anions), forming a sphere of water molecules around each ion."
  },
  {
    "id": "water-medium-10",
    "question": "Sweating cools the body effectively primarily due to water's:",
    "options": [
      "High specific heat capacity",
      "High latent heat of vaporization",
      "Polarity",
      "Surface tension"
    ],
    "correctAnswer": 1,
    "explanation": "A large amount of heat energy (latent heat) is required to convert liquid water in sweat into water vapor. This heat is drawn from the body, providing a cooling effect."
  }
  // ... 40 more medium questions would follow.

];

export const hardQuestions: Question[] = 
[
  {
    "id": "water-hard-1",
    "question": "From a thermodynamic perspective, why does the hydrophobic effect cause non-polar molecules to aggregate in water?",
    "options": [
      "It increases the entropy of the system by minimizing the disruption to the hydrogen-bonding network.",
      "It decreases the free energy by forming covalent bonds with water.",
      "It increases the enthalpy by creating more favorable interactions.",
      "It decreases the entropy of water molecules."
    ],
    "correctAnswer": 0,
    "explanation": "Water molecules form a highly ordered 'cage' around non-polar molecules, decreasing entropy. Aggregation of non-polar molecules minimizes this ordered interface, increasing the overall entropy of the system (water) and making it thermodynamically favorable."
  },
  {
    "id": "water-hard-2",
    "question": "The ion product of water (K_w) is 1.0 x 10⁻¹⁴ at 25°C. What is the [H₃O⁺] in a neutral solution?",
    "options": [
      "1.0 x 10⁻⁷ M",
      "1.0 x 10⁻¹⁴ M",
      "7.0 M",
      "1.0 x 10⁷ M"
    ],
    "correctAnswer": 0,
    "explanation": "In a neutral solution, [H₃O⁺] = [OH⁻]. Since K_w = [H₃O⁺][OH⁻] = 1.0 x 10⁻¹⁴, then [H₃O⁺]² = 1.0 x 10⁻¹⁴, so [H₃O⁺] = 1.0 x 10⁻⁷ M."
  },
  {
    "id": "water-hard-3",
    "question": "How does the precise angle of the H-O-H bond in a water molecule (104.5°) contribute to its overall polarity?",
    "options": [
      "The bent shape concentrates the negative charge on the oxygen and positive charge on the hydrogens.",
      "The angle has no effect on polarity; it only affects density.",
      "A linear molecule (180°) would be more polar.",
      "The angle maximizes the distance between the hydrogen atoms, reducing repulsion but minimizing polarity."
    ],
    "correctAnswer": 0,
    "explanation": "The tetrahedral electron geometry and the bent molecular shape prevent the bond dipoles from canceling each other out. This results in a net molecular dipole moment, making water highly polar."
  },
  {
    "id": "water-hard-4",
    "question": "In the context of enzyme catalysis, water often plays a direct role in the mechanism. This is LEAST likely to involve:",
    "options": [
      "Acting as a nucleophile in hydrolysis reactions.",
      "Stabilizing transition states via hydrogen bonding.",
      "Participating in acid-base catalysis within the active site.",
      "Forming a permanent covalent bond with the substrate."
    ],
    "correctAnswer": 3,
    "explanation": "Water molecules in active sites are crucial for facilitating reactions (as nucleophiles, in H-bonding, in proton transfer) but they do not typically form permanent covalent bonds with the substrate; they are involved in transient interactions."
  },
  {
    "id": "water-hard-5",
    "question": "The concept of 'water activity' (a_w) in food preservation is based on which fundamental property of water?",
    "options": [
      "Its role as a reagent in hydrolysis, which spoils food.",
      "Its effectiveness as a solvent for microbial nutrients.",
      "Its cohesion, which allows microbes to move.",
      "Its specific heat, which affects storage temperature."
    ],
    "correctAnswer": 1,
    "explanation": "Water activity measures the availability of water for microbial growth and biochemical reactions. By reducing a_w (e.g., by salting or drying), water is bound and unavailable to act as a solvent for metabolic processes, thus preserving food."
  },
  {
    "id": "water-hard-6",
    "question": "The dielectric constant of water is exceptionally high (~80). What is the major biological implication of this?",
    "options": [
      "It allows water to solidify at 0°C.",
      "It enables water to weaken electrostatic interactions between ions.",
      "It is the reason for water's high surface tension.",
      "It causes water to have a high boiling point."
    ],
    "correctAnswer": 1,
    "explanation": "A high dielectric constant means water is very effective at screening the attractive forces between oppositely charged ions. This is why it is such a good solvent for ionic compounds like NaCl, facilitating their dissociation and transport in biological systems."
  },
  {
    "id": "water-hard-7",
    "question": "Compared to a neutral solution, in a highly acidic solution (pH=1), the concentration of hydroxide ions (OH⁻) is:",
    "options": [
      "Higher",
      "Lower",
      "The same",
      "Impossible to determine"
    ],
    "correctAnswer": 1,
    "explanation": "The ion product of water is constant: [H₃O⁺][OH⁻] = 10⁻¹⁴. If [H₃O⁺] is very high (10⁻¹ M), then [OH⁻] must be very low (10⁻¹³ M) to maintain this constant."
  },
  {
    "id": "water-hard-8",
    "question": "The movement of water through aquaporins in cell membranes is a classic example of:",
    "options": [
      "Simple diffusion through the lipid bilayer",
      "Facilitated diffusion via channel proteins",
      "Active transport against the concentration gradient",
      "Osmosis driven by protein pumps"
    ],
    "correctAnswer": 1,
    "explanation": "Aquaporins are specific channel proteins that facilitate the passive movement of water molecules down their concentration gradient (osmosis), greatly increasing the rate of transport compared to simple diffusion."
  },
  {
    "id": "water-hard-9",
    "question": "In the reaction: Lactose + H₂O → Glucose + Galactose, water is acting as a:",
    "options": [
      "Solvent",
      "Catalyst",
      "Reagent",
      "Buffer"
    ],
    "correctAnswer": 2,
    "explanation": "In this hydrolysis reaction, a water molecule is consumed and split to break the glycosidic bond in lactose. A substance that is consumed in a reaction is a reagent."
  },
  {
    "id": "water-hard-10",
    "question": "The heat of vaporization of water is 2260 kJ/kg. What does this imply for thermoregulation?",
    "options": [
      "A small amount of sweat can remove a large amount of body heat.",
      "Water heats up very quickly in the sun.",
      "The body must consume large amounts of energy to produce sweat.",
      "Evaporation is an inefficient cooling mechanism."
    ],
    "correctAnswer": 0,
    "explanation": "The extremely high latent heat of vaporization means that for every gram of water that evaporates, 2260 Joules of heat energy is absorbed from the surroundings (the skin). This makes evaporative cooling via sweating incredibly efficient."
  },
  {
    "id": "water-easy-11",
    "question": "What type of bond exists between the oxygen and hydrogen atoms within a single water molecule?",
    "options": [
      "Hydrogen bond",
      "Ionic bond",
      "Polar covalent bond",
      "Van der Waals force"
    ],
    "correctAnswer": 2,
    "explanation": "Within a water molecule, the oxygen and hydrogen atoms share electrons, but unevenly, creating a polar covalent bond."
  },
  {
    "id": "water-easy-12",
    "question": "Which of the following substances is MOST likely to dissolve in water?",
    "options": [
      "Cooking oil",
      "Table salt (NaCl)",
      "Wax",
      "Butter"
    ],
    "correctAnswer": 1,
    "explanation": "Table salt is an ionic compound. Water's polarity allows it to surround and dissociate ionic compounds, making it an excellent solvent for them."
  },
  {
    "id": "water-easy-13",
    "question": "The process where water moves up a narrow tube against gravity due to adhesion and cohesion is called:",
    "options": [
      "Surface tension",
      "Capillary action",
      "Hydrolysis",
      "Density inversion"
    ],
    "correctAnswer": 1,
    "explanation": "Capillary action is the ability of a liquid to flow in narrow spaces without the assistance of, or even in opposition to, external forces like gravity. It occurs because of the interplay between cohesion and adhesion."
  },
  {
    "id": "water-easy-14",
    "question": "Water is a product of which type of reaction?",
    "options": [
      "Hydrolysis",
      "Dehydration synthesis",
      "Ionization",
      "Dissociation"
    ],
    "correctAnswer": 1,
    "explanation": "Dehydration synthesis (condensation reaction) involves the joining of two molecules with the removal of a water molecule."
  },
  {
    "id": "water-easy-15",
    "question": "Which property of water helps to maintain a stable temperature in large bodies of water like lakes and oceans?",
    "options": [
      "High surface tension",
      "High specific heat capacity",
      "Universal solvent",
      "Capillary action"
    ],
    "correctAnswer": 1,
    "explanation": "Water's high specific heat capacity allows it to absorb and store large amounts of heat with only a slight change in temperature, buffering environmental temperature changes."
  },
  {
    "id": "water-easy-16",
    "question": "A pH of 7 indicates a solution is:",
    "options": [
      "Acidic",
      "Basic",
      "Neutral",
      "Ionic"
    ],
    "correctAnswer": 2,
    "explanation": "On the pH scale, 7 is neutral. Values below 7 are acidic, and values above 7 are basic (alkaline)."
  },
  {
    "id": "water-easy-17",
    "question": "Which of the following is a direct result of water's cohesion?",
    "options": [
      "Ice floats",
      "Water can dissolve sugar",
      "Water forms droplets",
      "Water has a high boiling point"
    ],
    "correctAnswer": 2,
    "explanation": "Cohesion is the attraction between water molecules. This attraction pulls molecules inward, minimizing surface area and causing water to form spherical droplets."
  },
  {
    "id": "water-easy-18",
    "question": "Sweating is an effective cooling mechanism for mammals because of water's high:",
    "options": [
      "Surface tension",
      "Latent heat of vaporization",
      "Density",
      "Boiling point"
    ],
    "correctAnswer": 1,
    "explanation": "Latent heat of vaporization is the heat required to convert a liquid into a gas. When sweat evaporates, it absorbs a large amount of heat from the skin, cooling the body."
  },
  {
    "id": "water-easy-19",
    "question": "Which term describes a substance that is repelled by water and does not dissolve in it?",
    "options": [
      "Hydrophilic",
      "Hydrophobic",
      "Hydrated",
      "Polar"
    ],
    "correctAnswer": 1,
    "explanation": "Hydrophobic means 'water-fearing.' Nonpolar molecules, like oils and fats, are hydrophobic and do not mix with water."
  },
  {
    "id": "water-easy-20",
    "question": "The oxygen atom in a water molecule has a slightly ______ charge.",
    "options": [
      "Positive",
      "Negative",
      "Neutral",
      "Variable"
    ],
    "correctAnswer": 1,
    "explanation": "Oxygen is more electronegative than hydrogen, so it pulls the shared electrons closer, giving it a partial negative charge (δ⁻)."
  },
  {
    "id": "water-easy-21",
    "question": "What is the state of water at room temperature (25°C)?",
    "options": [
      "Solid",
      "Liquid",
      "Gas",
      "Plasma"
    ],
    "correctAnswer": 1,
    "explanation": "Due to its hydrogen bonding, water has a relatively high boiling point for its molecular weight, so it remains a liquid at room temperature."
  },
  {
    "id": "water-easy-22",
    "question": "Which property allows a water strider insect to walk on the surface of a pond?",
    "options": [
      "Adhesion",
      "Cohesion",
      "Surface Tension",
      "High Specific Heat"
    ],
    "correctAnswer": 2,
    "explanation": "Surface tension, a result of cohesive forces between water molecules at the surface, creates a 'skin' strong enough to support the insect's weight."
  },
  {
    "id": "water-easy-23",
    "question": "In a neutral solution, the concentration of H⁺ ions is ______ the concentration of OH⁻ ions.",
    "options": [
      "Greater than",
      "Less than",
      "Equal to",
      "Unrelated to"
    ],
    "correctAnswer": 2,
    "explanation": "By definition, a neutral solution has equal concentrations of hydrogen ions (H⁺ or H₃O⁺) and hydroxide ions (OH⁻)."
  },
  {
    "id": "water-easy-24",
    "question": "Water is considered a 'universal solvent' because it:",
    "options": [
      "Dissolves all substances",
      "Dissolves more substances than any other liquid",
      "Is the most abundant solvent on Earth",
      "Is necessary for all life"
    ],
    "correctAnswer": 1,
    "explanation": "While it doesn't dissolve everything (e.g., nonpolar substances), water's polarity allows it to dissolve a wider range of substances than any other common liquid."
  },
  {
    "id": "water-easy-25",
    "question": "The hydrogen atoms in a water molecule have a slightly ______ charge.",
    "options": [
      "Positive",
      "Negative",
      "Neutral",
      "Variable"
    ],
    "correctAnswer": 0,
    "explanation": "Because the oxygen atom pulls electrons away, the hydrogen atoms are left with a partial positive charge (δ⁺)."
  },
  {
    "id": "water-easy-26",
    "question": "Which of these is a direct biological consequence of ice being less dense than water?",
    "options": [
      "Sweat cools the skin",
      "Plants can transport water",
      "Aquatic life survives under frozen lakes",
      "Blood can transport nutrients"
    ],
    "correctAnswer": 2,
    "explanation": "Ice floating on the surface insulates the liquid water below, preventing lakes and oceans from freezing solid and allowing ecosystems to survive winter."
  },
  {
    "id": "water-easy-27",
    "question": "Which of the following is a hydrophilic substance?",
    "options": [
      "Vegetable oil",
      "Table sugar (sucrose)",
      "Wax",
      "Butter"
    ],
    "correctAnswer": 1,
    "explanation": "Table sugar has many polar -OH groups, making it hydrophilic ('water-loving') and highly soluble in water."
  },
  {
    "id": "water-easy-28",
    "question": "The process of breaking down a polymer by adding water is called:",
    "options": [
      "Dehydration synthesis",
      "Hydrolysis",
      "Ionization",
      "Condensation"
    ],
    "correctAnswer": 1,
    "explanation": "Hydrolysis ('to break with water') is the process where a water molecule is used to cleave a polymer into smaller units."
  },
  {
    "id": "water-easy-29",
    "question": "Water's ability to 'stick' to the sides of a glass tube is an example of:",
    "options": [
      "Cohesion",
      "Adhesion",
      "Surface Tension",
      "Specific Heat"
    ],
    "correctAnswer": 1,
    "explanation": "Adhesion is the attraction between water molecules and the molecules of a different substance, like the glass."
  },
  {
    "id": "water-easy-30",
    "question": "A solution with a pH of 2 is considered a(n):",
    "options": [
      "Strong acid",
      "Weak acid",
      "Strong base",
      "Weak base"
    ],
    "correctAnswer": 0,
    "explanation": "The lower the pH, the higher the acidity. A pH of 2 indicates a very high concentration of H⁺ ions, characteristic of a strong acid."
  },
  {
    "id": "water-easy-31",
    "question": "Which property of water is most responsible for the movement of water from plant roots to leaves?",
    "options": [
      "The combined strength of cohesion and adhesion",
      "Its high specific heat capacity",
      "Its role as a solvent for minerals",
      "Its density at 4°C"
    ],
    "correctAnswer": 0,
    "explanation": "The cohesion-tension theory describes how water is pulled upward in plants. Cohesion holds water molecules together, and adhesion holds them to the xylem walls."
  },
  {
    "id": "water-easy-32",
    "question": "Which of these is NOT a function of water in living organisms?",
    "options": [
      "Transport medium in blood",
      "Maintaining body temperature",
      "Providing energy for cells",
      "Acting as a lubricant in joints"
    ],
    "correctAnswer": 2,
    "explanation": "Water itself does not provide energy (it has no calories). It is crucial for transport, temperature regulation, and lubrication, but energy comes from macromolecules like carbohydrates and fats."
  },
  {
    "id": "water-easy-33",
    "question": "The molecular shape of a water molecule is:",
    "options": [
      "Linear",
      "Tetrahedral",
      "Bent",
      "Trigonal planar"
    ],
    "correctAnswer": 2,
    "explanation": "The water molecule has a bent or angular shape due to the two lone pairs of electrons on the oxygen atom that repel the bonding pairs."
  },
  {
    "id": "water-easy-34",
    "question": "Water has a high boiling point because:",
    "options": [
      "It is a small molecule",
      "Of strong hydrogen bonding between molecules",
      "It is a polar molecule",
      "It is an excellent solvent"
    ],
    "correctAnswer": 1,
    "explanation": "A significant amount of energy is required to break the numerous hydrogen bonds between water molecules before they can escape as a gas."
  },
  {
    "id": "water-easy-35",
    "question": "A substance that releases H⁺ ions in water is called a(n):",
    "options": [
      "Acid",
      "Base",
      "Salt",
      "Buffer"
    ],
    "correctAnswer": 0,
    "explanation": "An acid is defined as a substance that increases the hydrogen ion (H⁺) concentration when dissolved in water."
  },
  {
    "id": "water-easy-36",
    "question": "The majority of cellular reactions take place in which medium?",
    "options": [
      "Cytoskeletal matrix",
      "Lipid bilayer",
      "Aqueous cytoplasm",
      "Nuclear envelope"
    ],
    "correctAnswer": 2,
    "explanation": "The cytoplasm is mostly water, providing the aqueous solution necessary for dissolving reactants and allowing biochemical reactions to occur."
  },
  {
    "id": "water-easy-37",
    "question": "Which of the following is a property of acids?",
    "options": [
      "They feel slippery",
      "They taste sour",
      "They turn phenolphthalein pink",
      "They release OH⁻ ions"
    ],
    "correctAnswer": 1,
    "explanation": "A common property of acids is a sour taste (e.g., citric acid in lemons)."
  },
  {
    "id": "water-easy-38",
    "question": "The human body is approximately what percentage of water by weight?",
    "options": [
      "20-30%",
      "40-50%",
      "60-70%",
      "80-90%"
    ],
    "correctAnswer": 2,
    "explanation": "On average, the human adult body is about 60-70% water, highlighting its critical role in human biology."
  },
  {
    "id": "water-easy-39",
    "question": "Which property of water allows it to dissolve ionic compounds like NaCl?",
    "options": [
      "Its high heat capacity",
      "Its polarity",
      "Its cohesion",
      "Its density"
    ],
    "correctAnswer": 1,
    "explanation": "The positive (H) end of water molecules surrounds Cl⁻ ions, and the negative (O) end surrounds Na⁺ ions, pulling them apart and dissolving the crystal."
  },
  {
    "id": "water-easy-40",
    "question": "A solution with a pH of 11 is:",
    "options": [
      "Acidic",
      "Neutral",
      "Basic",
      "Ionic"
    ],
    "correctAnswer": 2,
    "explanation": "A pH above 7 indicates a basic (alkaline) solution, meaning it has a higher concentration of OH⁻ ions than H⁺ ions."
  },
  {
    "id": "water-easy-41",
    "question": "What happens to the density of water as it cools from 4°C to 0°C?",
    "options": [
      "It increases",
      "It decreases",
      "It stays the same",
      "It increases then decreases"
    ],
    "correctAnswer": 1,
    "explanation": "Water is most dense at 4°C. As it cools further to 0°C, it begins to expand and form a crystalline lattice, causing its density to decrease."
  },
  {
    "id": "water-easy-42",
    "question": "Which of these is a property of bases?",
    "options": [
      "They taste sour",
      "They feel slippery",
      "They turn blue litmus red",
      "They release H⁺ ions"
    ],
    "correctAnswer": 1,
    "explanation": "Bases often feel slippery or soapy to the touch (e.g., soap solutions are basic)."
  },
  {
    "id": "water-easy-43",
    "question": "The force that holds water molecules together is a:",
    "options": [
      "Strong covalent bond",
      "Weak hydrogen bond",
      "Strong ionic bond",
      "Peptide bond"
    ],
    "correctAnswer": 1,
    "explanation": "Hydrogen bonds are intermolecular forces that are stronger than van der Waals forces but much weaker than covalent or ionic bonds."
  },
  {
    "id": "water-easy-44",
    "question": "Water is a reactant in the process of:",
    "options": [
      "Dehydration synthesis of a protein",
      "Hydrolysis of a fat",
      "Formation of a disaccharide",
      "Condensation reaction"
    ],
    "correctAnswer": 1,
    "explanation": "In hydrolysis, a water molecule is consumed (is a reactant) to break apart a larger molecule like a fat (lipid)."
  },
  {
    "id": "water-easy-45",
    "question": "The pH scale ranges from:",
    "options": [
      "0 to 7",
      "0 to 14",
      "7 to 14",
      "1 to 10"
    ],
    "correctAnswer": 1,
    "explanation": "The pH scale is a logarithmic scale that typically runs from 0 (very acidic) to 14 (very basic), with 7 being neutral."
  },
  {
    "id": "water-easy-46",
    "question": "Which of these molecules would form hydrogen bonds with water?",
    "options": [
      "CH₄ (Methane)",
      "O₂ (Oxygen gas)",
      "NH₃ (Ammonia)",
      "Oil"
    ],
    "correctAnswer": 2,
    "explanation": "Ammonia (NH₃) has a nitrogen atom bonded to hydrogen. Nitrogen is electronegative, creating a polar molecule capable of forming hydrogen bonds with water."
  },
  {
    "id": "water-easy-47",
    "question": "The ability of water to moderate temperature is crucial for enzymes because enzymes:",
    "options": [
      "Are made of water",
      "Function best within a narrow temperature range",
      "Are hydrophobic",
      "Require water as an energy source"
    ],
    "correctAnswer": 1,
    "explanation": "Enzymes are proteins that catalyze reactions. Their 3D shape, which is essential for function, can be denatured (destroyed) by temperature extremes. Water helps prevent this."
  },
  {
    "id": "water-easy-48",
    "question": "A buffer is a substance that:",
    "options": [
      "Changes color with pH",
      "Releases H⁺ ions in solution",
      "Resists changes in pH",
      "Increases the acidity of a solution"
    ],
    "correctAnswer": 2,
    "explanation": "Buffers are crucial in biological systems (e.g., blood). They are solutions that can absorb small amounts of acid or base without a significant change in pH."
  },
  {
    "id": "water-easy-49",
    "question": "Which of the following is NOT a reason why water is essential for life?",
    "options": [
      "It is a source of hydrogen for photosynthesis",
      "It is the medium for metabolic reactions",
      "It provides structural support in plants",
      "It is non-polar and separates compartments"
    ],
    "correctAnswer": 3,
    "explanation": "Water is polar, not non-polar. Its polarity is the key to its solvent properties. Non-polar substances like lipids are used to separate compartments (e.g., in cell membranes)."
  },
  {
    "id": "water-easy-50",
    "question": "The meniscus that forms in a graduated cylinder is due to:",
    "options": [
      "Cohesion being stronger than adhesion",
      "Adhesion being stronger than cohesion",
      "High surface tension",
      "Low density"
    ],
    "correctAnswer": 1,
    "explanation": "A concave meniscus (where water creeps up the glass sides) forms because the adhesive forces between water and glass are stronger than the cohesive forces between water molecules."
  },
  {
    "id": "water-easy-51",
    "question": "Which of the following best describes a hydrolysis reaction?",
    "options": [
      "A water molecule is released when monomers join.",
      "A water molecule is used to break apart a polymer.",
      "Ions are separated in an aqueous solution.",
      "Water molecules stick to each other."
    ],
    "correctAnswer": 1,
    "explanation": "Hydrolysis is a catabolic process where a water molecule is consumed to break the bonds holding a polymer together."
  },
  {
    "id": "water-easy-52",
    "question": "What is the primary reason water has a high surface tension?",
    "options": [
      "Adhesion to the container",
      "Strong hydrogen bonding between molecules",
      "Its low molecular weight",
      "The presence of dissolved ions"
    ],
    "correctAnswer": 1,
    "explanation": "Surface tension is a result of the cohesive forces between water molecules at the surface, where they are pulled inward by hydrogen bonds."
  },
  {
    "id": "water-easy-53",
    "question": "A substance that can donate a proton (H⁺) is known as a(n):",
    "options": [
      "Base",
      "Salt",
      "Acid",
      "Buffer"
    ],
    "correctAnswer": 2,
    "explanation": "According to the Brønsted-Lowry definition, an acid is a substance that donates a proton (H⁺ ion)."
  },
  {
    "id": "water-easy-54",
    "question": "The process of water molecules sticking to the surface of a leaf is an example of:",
    "options": [
      "Cohesion",
      "Adhesion",
      "Surface tension",
      "Specific heat"
    ],
    "correctAnswer": 1,
    "explanation": "Adhesion is the attraction between water molecules and molecules of a different substance, such as the surface of a leaf."
  },
  {
    "id": "water-easy-55",
    "question": "Which pH value represents the highest concentration of hydrogen ions?",
    "options": [
      "pH 1",
      "pH 7",
      "pH 10",
      "pH 14"
    ],
    "correctAnswer": 0,
    "explanation": "The pH scale is logarithmic and inverse. A lower pH value indicates a higher concentration of H⁺ ions. pH 1 is highly acidic."
  },
  {
    "id": "water-easy-56",
    "question": "Water is a product of which metabolic process in cells?",
    "options": [
      "Glycolysis",
      "Photosynthesis",
      "Cellular respiration",
      "Hydrolysis"
    ],
    "correctAnswer": 2,
    "explanation": "During aerobic cellular respiration, glucose is broken down to produce ATP, with carbon dioxide and water as waste products."
  },
  {
    "id": "water-easy-57",
    "question": "Which property of water enables it to function as an effective lubricant in joints?",
    "options": [
      "High heat of vaporization",
      "Cohesion",
      "Low viscosity",
      "Polarity"
    ],
    "correctAnswer": 2,
    "explanation": "Water's low viscosity (it flows easily) allows it to form a slippery layer between surfaces, reducing friction."
  },
  {
    "id": "water-easy-58",
    "question": "The term 'aqueous solution' means a solution where the solvent is:",
    "options": [
      "Air",
      "Oil",
      "Water",
      "Alcohol"
    ],
    "correctAnswer": 2,
    "explanation": "An aqueous solution is one in which water is the solvent, dissolving another substance (the solute)."
  },
  {
    "id": "water-easy-59",
    "question": "What happens to the pH of water when an acid is added?",
    "options": [
      "The pH increases",
      "The pH decreases",
      "The pH remains the same",
      "The pH becomes neutral"
    ],
    "correctAnswer": 1,
    "explanation": "Adding an acid increases the concentration of H⁺ ions in the solution, which causes the pH to decrease."
  },
  {
    "id": "water-easy-60",
    "question": "Which of these is a direct result of water's high specific heat?",
    "options": [
      "Ice floats on water",
      "Coastal areas have moderate climates",
      "Water dissolves ionic compounds",
      "Water forms droplets"
    ],
    "correctAnswer": 1,
    "explanation": "Oceans absorb and release large amounts of heat with minimal temperature change, moderating the climate of nearby landmasses."
  },
  {
    "id": "water-easy-61",
    "question": "A solution with a pH of 5 is ______ times more acidic than a solution with a pH of 7.",
    "options": [
      "2",
      "10",
      "100",
      "1000"
    ],
    "correctAnswer": 2,
    "explanation": "The pH scale is logarithmic. Each unit change represents a tenfold change in H⁺ concentration. pH 5 is 10 x 10 = 100 times more acidic than pH 7."
  },
  {
    "id": "water-easy-62",
    "question": "The hydrogen atoms in a water molecule are arranged at an angle of approximately:",
    "options": [
      "90 degrees",
      "104.5 degrees",
      "180 degrees",
      "120 degrees"
    ],
    "correctAnswer": 1,
    "explanation": "The bond angle in a water molecule is approximately 104.5 degrees, giving it a bent shape."
  },
  {
    "id": "water-easy-63",
    "question": "Which of the following is a hydrophobic substance?",
    "options": [
      "Table salt",
      "Glucose",
      "Vitamin C (Ascorbic acid)",
      "Vegetable oil"
    ],
    "correctAnswer": 3,
    "explanation": "Vegetable oil is a nonpolar lipid and is therefore hydrophobic and insoluble in water."
  },
  {
    "id": "water-easy-64",
    "question": "The movement of water across a semipermeable membrane from a dilute to a concentrated solution is called:",
    "options": [
      "Diffusion",
      "Active transport",
      "Osmosis",
      "Facilitated diffusion"
    ],
    "correctAnswer": 2,
    "explanation": "Osmosis is the passive movement of water molecules across a membrane down their concentration gradient."
  },
  {
    "id": "water-easy-65",
    "question": "Pure water has a pH of 7 at 25°C because:",
    "options": [
      "It contains no ions",
      "[H₃O⁺] = [OH⁻]",
      "It is a strong acid",
      "It is a strong base"
    ],
    "correctAnswer": 1,
    "explanation": "In pure water, the concentration of hydronium ions [H₃O⁺] equals the concentration of hydroxide ions [OH⁻], making it neutral."
  },
  {
    "id": "water-easy-66",
    "question": "Which property is most important for water's role as a transport medium in blood?",
    "options": [
      "Its transparency",
      "Its ability to act as a solvent",
      "Its density",
      "Its expansion upon freezing"
    ],
    "correctAnswer": 1,
    "explanation": "Blood plasma is mostly water. Its ability to dissolve nutrients, gases, and waste products allows it to transport them throughout the body."
  },
  {
    "id": "water-easy-67",
    "question": "What is the charge on a hydroxide ion?",
    "options": [
      "+1",
      "-1",
      "+2",
      "0"
    ],
    "correctAnswer": 1,
    "explanation": "A hydroxide ion is composed of one oxygen and one hydrogen atom and has gained an extra electron, giving it a charge of -1 (OH⁻)."
  },
  {
    "id": "water-easy-68",
    "question": "Water helps to maintain body temperature primarily through:",
    "options": [
      "Cohesion and adhesion",
      "Evaporation and high heat capacity",
      "Ionization and polarity",
      "Capillary action and surface tension"
    ],
    "correctAnswer": 1,
    "explanation": "Sweat evaporates using body heat (high heat of vaporization), and water in the body absorbs heat without a large temperature change (high specific heat)."
  },
  {
    "id": "water-easy-69",
    "question": "Which of these biological molecules is synthesized by a dehydration reaction?",
    "options": [
      "A protein from amino acids",
      "A triglyceride from fatty acids and glycerol",
      "A polysaccharide from monosaccharides",
      "All of the above"
    ],
    "correctAnswer": 3,
    "explanation": "All major biological polymers (proteins, lipids, carbohydrates, nucleic acids) are formed by dehydration synthesis, where monomers join and release a water molecule."
  },
  {
    "id": "water-easy-70",
    "question": "The 'solvent of life' is a phrase that refers to:",
    "options": [
      "Glucose",
      "Water",
      "DNA",
      "Oxygen"
    ],
    "correctAnswer": 1,
    "explanation": "Because most biological reactions occur in an aqueous environment, water is often called the 'solvent of life' or 'universal solvent.'"
  },
  {
    "id": "water-easy-71",
    "question": "What is the name of the ion formed when water gains a hydrogen ion (H⁺)?",
    "options": [
      "Hydroxide ion (OH⁻)",
      "Hydronium ion (H₃O⁺)",
      "Oxygen ion (O²⁻)",
      "Hydrogen gas (H₂)"
    ],
    "correctAnswer": 1,
    "explanation": "An acid donates a proton (H⁺). This proton immediately attaches to a water molecule, forming a hydronium ion (H₃O⁺)."
  },
  {
    "id": "water-easy-72",
    "question": "Which of the following would decrease the surface tension of water?",
    "options": [
      "Adding salt",
      "Adding soap",
      "Cooling it down",
      "Increasing its purity"
    ],
    "correctAnswer": 1,
    "explanation": "Soap is a surfactant. Its molecules interfere with the hydrogen bonding between water molecules, thereby reducing surface tension."
  },
  {
    "id": "water-easy-73",
    "question": "The property of water that allows it to climb up the walls of a thin tube is due to:",
    "options": [
      "Cohesion only",
      "Adhesion only",
      "Both cohesion and adhesion",
      "High specific heat"
    ],
    "correctAnswer": 2,
    "explanation": "Capillary action requires both adhesion (to stick to the tube walls) and cohesion (to pull other water molecules along)."
  },
  {
    "id": "water-easy-74",
    "question": "In the human body, water is found in the greatest quantity within:",
    "options": [
      "Blood cells",
      "Muscle cells",
      "Fat cells",
      "Bone cells"
    ],
    "correctAnswer": 1,
    "explanation": "Muscle tissue has a very high water content (about 75-80%), making it the largest reservoir of water in the body."
  },
  {
    "id": "water-easy-75",
    "question": "A base is a substance that:",
    "options": [
      "Releases H⁺ ions in water",
      "Accepts H⁺ ions in water",
      "Has a pH less than 7",
      "Tastes sour"
    ],
    "correctAnswer": 1,
    "explanation": "According to the Brønsted-Lowry definition, a base is a substance that accepts a proton (H⁺ ion)."
  },
  {
    "id": "water-easy-76",
    "question": "Which of these is NOT a function of water in plants?",
    "options": [
      "Maintaining turgor pressure",
      "Transporting minerals",
      "Providing energy for growth",
      "Acting as a reactant in photosynthesis"
    ],
    "correctAnswer": 2,
    "explanation": "Water does not provide energy. It provides structure (turgor pressure), transport, and is a raw material in photosynthesis, but energy comes from sunlight."
  },
  {
    "id": "water-easy-77",
    "question": "The density of water is greatest at:",
    "options": [
      "0°C",
      "4°C",
      "10°C",
      "100°C"
    ],
    "correctAnswer": 1,
    "explanation": "Water reaches its maximum density at 4°C. As it cools further to 0°C, it expands and becomes less dense."
  },
  {
    "id": "water-easy-78",
    "question": "Which indicator turns red in an acidic solution?",
    "options": [
      "Phenolphthalein",
      "Litmus",
      "Bromothymol blue",
      "Methyl orange"
    ],
    "correctAnswer": 1,
    "explanation": "Blue litmus paper turns red in the presence of an acidic solution (pH < 7)."
  },
  {
    "id": "water-easy-79",
    "question": "The cohesive property of water is vital for:",
    "options": [
      "The transpiration pull in plants",
      "Dissolving polar molecules",
      "The formation of ice crystals",
      "The ionization of acids"
    ],
    "correctAnswer": 0,
    "explanation": "The cohesion of water molecules allows them to form a continuous column that is pulled upward through the xylem of plants during transpiration."
  },
  {
    "id": "water-easy-80",
    "question": "What is the primary reason that water has a high boiling point?",
    "options": [
      "It has a low molecular weight",
      "It is a small molecule",
      "It forms extensive hydrogen bonds",
      "It is highly polar"
    ],
    "correctAnswer": 2,
    "explanation": "A significant amount of thermal energy is required to break the many hydrogen bonds between water molecules before they can transition to a gaseous state."
  },
  {
    "id": "water-easy-81",
    "question": "A solution with a high concentration of OH⁻ ions is called a(n):",
    "options": [
      "Acid",
      "Base",
      "Salt",
      "Buffer"
    ],
    "correctAnswer": 1,
    "explanation": "A basic (alkaline) solution has a higher concentration of hydroxide ions (OH⁻) than hydronium ions (H₃O⁺)."
  },
  {
    "id": "water-easy-82",
    "question": "Water's ability to dissolve a wide variety of substances is most directly due to its:",
    "options": [
      "Polarity",
      "High specific heat",
      "Density",
      "Transparency"
    ],
    "correctAnswer": 0,
    "explanation": "Water's polar nature allows it to interact with and surround charged or polar molecules, separating them and causing them to dissolve."
  },
  {
    "id": "water-easy-83",
    "question": "Which of the following processes produces water as an end product?",
    "options": [
      "Hydrolysis of ATP",
      "Light-dependent reactions of photosynthesis",
      "Dehydration synthesis of a dipeptide",
      "Ionization of a strong acid"
    ],
    "correctAnswer": 2,
    "explanation": "Dehydration synthesis reactions, such as the formation of a dipeptide from two amino acids, release a molecule of water."
  },
  {
    "id": "water-easy-84",
    "question": "The phenomenon where water forms a spherical droplet on a waxy surface is due to:",
    "options": [
      "Strong adhesion to the wax",
      "Strong cohesion and weak adhesion to the wax",
      "High density of water",
      "Low surface tension of water"
    ],
    "correctAnswer": 1,
    "explanation": "Water is cohesive and forms droplets. On a hydrophobic (waxy) surface, adhesion is weak, so cohesion dominates, pulling the water into a sphere to minimize contact."
  },
  {
    "id": "water-easy-85",
    "question": "Which of these is a direct result of water's high heat of vaporization?",
    "options": [
      "Lakes freeze from the top down",
      "Sweating cools the body efficiently",
      "Water can dissolve salts",
      "Water has a neutral pH"
    ],
    "correctAnswer": 1,
    "explanation": "Because a large amount of heat is needed to evaporate water, the evaporation of sweat effectively removes excess body heat."
  },
  {
    "id": "water-easy-86",
    "question": "The pH of a solution decreases when:",
    "options": [
      "A base is added",
      "An acid is added",
      "Water is added",
      "A buffer is added"
    ],
    "correctAnswer": 1,
    "explanation": "Adding an acid increases the H⁺ ion concentration, which by definition lowers the pH value."
  },
  {
    "id": "water-easy-87",
    "question": "Which part of a water molecule is attracted to a sodium ion (Na⁺)?",
    "options": [
      "The hydrogen atoms (δ⁺)",
      "The oxygen atom (δ⁻)",
      "The entire molecule equally",
      "It is not attracted to ions"
    ],
    "correctAnswer": 1,
    "explanation": "The partially negative oxygen atom of water is electrostatically attracted to the positively charged sodium ion (Na⁺)."
  },
  {
    "id": "water-easy-88",
    "question": "The bond between oxygen and hydrogen in a water molecule is:",
    "options": [
      "Ionic",
      "Nonpolar covalent",
      "Polar covalent",
      "Hydrogen bond"
    ],
    "correctAnswer": 2,
    "explanation": "The electrons are shared between oxygen and hydrogen, but not equally, creating a polar covalent bond with partial charges."
  },
  {
    "id": "water-easy-89",
    "question": "Which of the following is a direct consequence of water's expansion upon freezing?",
    "options": [
      "It has a high boiling point",
      "It can cause rocks to crack",
      "It is an effective solvent",
      "It has high surface tension"
    ],
    "correctAnswer": 1,
    "explanation": "When water in cracks of rocks freezes, it expands. This expansion exerts great pressure, physically weathering the rock and causing it to crack further."
  },
  {
    "id": "water-easy-90",
    "question": "A buffer in blood helps to:",
    "options": [
      "Carry oxygen",
      "Fight infection",
      "Maintain a stable pH",
      "Clot wounds"
    ],
    "correctAnswer": 2,
    "explanation": "The bicarbonate buffer system in blood is crucial for maintaining a pH very close to 7.4, neutralizing small amounts of acid or base from metabolic processes."
  },
  {
    "id": "water-easy-91",
    "question": "Which property allows water to be pulled as a continuous column from the roots to the leaves of a tree?",
    "options": [
      "Adhesion",
      "Cohesion",
      "Specific heat",
      "Polarity"
    ],
    "correctAnswer": 1,
    "explanation": "Cohesion refers to the attraction between water molecules themselves. This allows them to be pulled up in a continuous stream without breaking."
  },
  {
    "id": "water-easy-92",
    "question": "The amount of heat required to raise the temperature of 1 gram of a substance by 1°C is called its:",
    "options": [
      "Heat of vaporization",
      "Specific heat capacity",
      "Boiling point",
      "Density"
    ],
    "correctAnswer": 1,
    "explanation": "Specific heat capacity is defined as the amount of heat energy required to raise the temperature of 1 gram of a substance by 1 degree Celsius."
  },
  {
    "id": "water-easy-93",
    "question": "Which of these is a biological importance of water's density anomaly?",
    "options": [
      "It allows for capillary action",
      "It enables evaporative cooling",
      "It provides habitat for aquatic life in winter",
      "It helps in digestion"
    ],
    "correctAnswer": 2,
    "explanation": "Because ice is less dense, it floats and insulates the water below, preventing lakes and ponds from freezing solid and preserving aquatic ecosystems."
  },
  {
    "id": "water-easy-94",
    "question": "The process of water molecules moving from an area of high concentration to low concentration is:",
    "options": [
      "Osmosis",
      "Active transport",
      "Dialysis",
      "Facilitated diffusion"
    ],
    "correctAnswer": 0,
    "explanation": "Osmosis is the specific term for the diffusion of water across a selectively permeable membrane."
  },
  {
    "id": "water-easy-95",
    "question": "Which of the following is a property of pure water?",
    "options": [
      "It is a good conductor of electricity",
      "It has a pH of exactly 0",
      "It is a nonpolar molecule",
      "It is colorless and odorless"
    ],
    "correctAnswer": 3,
    "explanation": "Pure water (H₂O) is indeed colorless, odorless, and tasteless. It is a poor conductor of electricity unless ions are dissolved in it."
  },
  {
    "id": "water-easy-96",
    "question": "Water is essential for photosynthesis because it:",
    "options": [
      "Releases oxygen",
      "Provides electrons",
      "Absorbs light energy",
      "Cools the plant"
    ],
    "correctAnswer": 1,
    "explanation": "In the light-dependent reactions, water molecules are split (photolysis), providing electrons to replace those lost by chlorophyll and releasing oxygen as a byproduct."
  },
  {
    "id": "water-easy-97",
    "question": "The force of attraction between a water molecule and a potassium ion (K⁺) is:",
    "options": [
      "Covalent",
      "Hydrogen bonding",
      "Ionic",
      "Ion-dipole"
    ],
    "correctAnswer": 3,
    "explanation": "The attraction between an ion (K⁺) and the partial charge on the polar water molecule (δ⁻ on O) is called an ion-dipole interaction."
  },
  {
    "id": "water-easy-98",
    "question": "Which of these would increase the rate of evaporation of a body of water?",
    "options": [
      "Decreasing temperature",
      "Increasing humidity",
      "Increasing surface area",
      "Adding salt"
    ],
    "correctAnswer": 2,
    "explanation": "Increasing the surface area (e.g., spreading water out) exposes more molecules to the surface, allowing more to escape into the air, increasing evaporation."
  },
  {
    "id": "water-easy-99",
    "question": "The primary role of water in the process of digestion is to:",
    "options": [
      "Provide energy",
      "Act as a solvent for enzymes and nutrients",
      "Synthesize new molecules",
      "Regulate body temperature"
    ],
    "correctAnswer": 1,
    "explanation": "Water in saliva and digestive juices provides the aqueous medium necessary for enzymes to break down food and for nutrients to be absorbed."
  },
  {
    "id": "water-easy-100",
    "question": "The unique properties of water are primarily due to:",
    "options": [
      "Its small molecular size",
      "Its polarity and hydrogen bonding",
      "Its abundance on Earth",
      "Its low molecular weight"
    ],
    "correctAnswer": 1,
    "explanation": "The polar nature of the water molecule and its ability to form extensive hydrogen bonding networks are the fundamental reasons for its unique and life-supporting properties."
  }

];
[
  {
    "id": "water-medium-1",
    "question": "The high specific heat capacity of water is primarily a consequence of:",
    "options": [
      "Covalent bonds within the molecule",
      "Hydrogen bonding between molecules",
      "Its low molecular weight",
      "Its polar covalent bonds"
    ],
    "correctAnswer": 1,
    "explanation": "A significant amount of heat energy is required to break the extensive network of hydrogen bonds between water molecules before the molecules can start moving faster (which increases temperature)."
  },
  {
    "id": "water-medium-2",
    "question": "How does the property of water cohesion directly benefit plants?",
    "options": [
      "It allows for evaporative cooling through transpiration.",
      "It helps water rise against gravity in xylem vessels.",
      "It enables photosynthesis to occur in leaves.",
      "It helps roots absorb minerals from the soil."
    ],
    "correctAnswer": 1,
    "explanation": "The cohesive forces between water molecules, combined with adhesive forces between water and xylem walls, create a continuous column that pulls water upward from roots to leaves."
  },
  {
    "id": "water-medium-3",
    "question": "When water ionizes, it forms:",
    "options": [
      "H₂ and O₂ gas",
      "Hydronium (H₃O⁺) and hydroxide (OH⁻) ions",
      "Hydrogen (H⁺) and oxygen (O⁻) ions",
      "Water does not ionize"
    ],
    "correctAnswer": 1,
    "explanation": "Water undergoes autoionization: 2H₂O ⇌ H₃O⁺ + OH⁻. This is crucial for defining acidity and alkalinity in biological systems."
  },
  {
    "id": "water-medium-4",
    "question": "In a dehydration synthesis reaction, water is:",
    "options": [
      "A reactant",
      "A product",
      "A solvent",
      "A catalyst"
    ],
    "correctAnswer": 1,
    "explanation": "Dehydration synthesis (condensation) links monomers together to form polymers, and a water molecule is released as a byproduct."
  },
  {
    "id": "water-medium-5",
    "question": "Why is water's density anomaly (being less dense as a solid) ecologically important?",
    "options": [
      "It allows for capillary action in soil.",
      "It prevents oceans and lakes from freezing solid from the bottom up.",
      "It helps in the dissolution of ionic compounds.",
      "It increases the rate of evaporation."
    ],
    "correctAnswer": 1,
    "explanation": "Ice floating on the surface insulates the liquid water below, allowing aquatic life to survive under the ice during winter."
  },
  {
    "id": "water-medium-6",
    "question": "Water acts as a reagent in which of the following biochemical processes?",
    "options": [
      "The electron transport chain",
      "The light-dependent reactions of photosynthesis",
      "The hydrolysis of ATP to ADP + Pi",
      "The Calvin cycle"
    ],
    "correctAnswer": 2,
    "explanation": "When ATP is hydrolyzed, a water molecule is used to break the high-energy phosphate bond, releasing energy and yielding ADP and inorganic phosphate (Pi)."
  },
  {
    "id": "water-medium-7",
    "question": "The pH of a solution is a measure of the concentration of:",
    "options": [
      "OH⁻ ions",
      "H₃O⁺ ions",
      "H₂O molecules",
      "Dissolved salts"
    ],
    "correctAnswer": 1,
    "explanation": "pH = -log[H⁺], where [H⁺] is often used interchangeably with [H₃O⁺]. It directly measures the concentration of hydronium ions."
  },
  {
    "id": "water-medium-8",
    "question": "Which property of water is most directly responsible for the moderate climate of coastal regions?",
    "options": [
      "Cohesion and adhesion",
      "High latent heat of vaporization",
      "High specific heat capacity",
      "Universal solvent action"
    ],
    "correctAnswer": 2,
    "explanation": "Oceans absorb and store a huge amount of solar heat during the day and release it slowly at night, moderating temperature extremes due to water's high specific heat capacity."
  },
  {
    "id": "water-medium-9",
    "question": "A hydration shell refers to:",
    "options": [
      "The hard shell of a turtle",
      "A layer of water molecules surrounding a dissolved ion",
      "The ice layer on top of a lake",
      "The cohesive water column in a plant"
    ],
    "correctAnswer": 1,
    "explanation": "When an ionic compound dissolves, water molecules orient themselves according to charge (negative oxygen towards cations, positive hydrogen towards anions), forming a sphere of water molecules around each ion."
  },
  {
    "id": "water-medium-10",
    "question": "Sweating cools the body effectively primarily due to water's:",
    "options": [
      "High specific heat capacity",
      "High latent heat of vaporization",
      "Polarity",
      "Surface tension"
    ],
    "correctAnswer": 1,
    "explanation": "A large amount of heat energy (latent heat) is required to convert liquid water in sweat into water vapor. This heat is drawn from the body, providing a cooling effect."
  },
    {
    "id": "water-medium-11",
    "question": "In the reaction: H₂O + CO₂ ⇌ H₂CO₃ ⇌ H⁺ + HCO₃⁻, water acts as a:",
    "options": [
      "Solvent for CO₂",
      "Reactant in the formation of carbonic acid",
      "Medium for the dissociation of ions",
      "All of the above"
    ],
    "correctAnswer": 3,
    "explanation": "In this crucial reaction for transporting CO₂ in blood, water dissolves CO₂, reacts with it to form carbonic acid, and provides the medium for its ionization into bicarbonate and hydrogen ions."
  },
  {
    "id": "water-medium-12",
    "question": "How does the high specific heat of water contribute to thermoregulation in endothermic animals?",
    "options": [
      "It allows for rapid heat loss through conduction.",
      "It enables the body to store heat with minimal temperature change.",
      "It increases the metabolic rate to generate more heat.",
      "It causes blood vessels to constrict to conserve heat."
    ],
    "correctAnswer": 1,
    "explanation": "The water in an animal's body can absorb a large amount of metabolic heat with only a slight increase in temperature, acting as a thermal buffer and helping to maintain a stable internal temperature."
  },
  {
    "id": "water-medium-13",
    "question": "The pH of a solution is calculated as:",
    "options": [
      "log[H⁺]",
      "-log[H⁺]",
      "log[OH⁻]",
      "-log[OH⁻]"
    ],
    "correctAnswer": 1,
    "explanation": "The pH is defined as the negative logarithm (base 10) of the hydrogen ion concentration: pH = -log₁₀[H⁺]. This converts wide concentration ranges into manageable numbers."
  },
  {
    "id": "water-medium-14",
    "question": "What is the primary mechanism by which water dissolves a crystal of sodium chloride (NaCl)?",
    "options": [
      "Formation of covalent bonds with Na⁺ and Cl⁻",
      "Hydrogen bonding with the crystal lattice",
      "Hydration of Na⁺ and Cl⁻ ions, overcoming the ionic bonds",
      "Breaking the ionic bonds through its high kinetic energy"
    ],
    "correctAnswer": 2,
    "explanation": "Water's polar molecules orient around the ions: the δ⁻ oxygen surrounds Na⁺, and the δ⁺ hydrogens surround Cl⁻. This hydration shell pulls the ions away from the crystal and into solution."
  },
  {
    "id": "water-medium-15",
    "question": "A solution with a pH of 4 has how many times more H⁺ ions than a solution with a pH of 6?",
    "options": [
      "2 times",
      "10 times",
      "100 times",
      "1000 times"
    ],
    "explanation": "The pH scale is logarithmic. A difference of 2 pH units represents a 10² = 100-fold difference in hydrogen ion concentration.",
    "correctAnswer": 2
  },
  {
    "id": "water-medium-16",
    "question": "Which statement BEST explains why nonpolar molecules like oils are hydrophobic?",
    "options": [
      "They form strong bonds with each other that water cannot break.",
      "They disrupt the hydrogen-bonding network of water, which is energetically unfavorable.",
      "They are repelled by the negative charge on the oxygen atom in water.",
      "They are too large to fit between water molecules."
    ],
    "correctAnswer": 1,
    "explanation": "Dissolving a nonpolar substance forces water molecules to form a highly ordered, cage-like structure around it, which greatly decreases entropy. To avoid this, the nonpolar molecules aggregate, minimizing their contact with water."
  },
  {
    "id": "water-medium-17",
    "question": "In the context of protein structure, water molecules often:",
    "options": [
      "Form the peptide bonds between amino acids.",
      "Create hydrophobic cores by excluding themselves.",
      "Participate in hydrogen bonding that stabilizes secondary structures like alpha-helices.",
      "Break disulfide bridges through hydrolysis."
    ],
    "correctAnswer": 2,
    "explanation": "Water molecules can form hydrogen bonds with the carbonyl oxygen and amine hydrogen in the protein backbone, helping to stabilize certain secondary structures like alpha-helices and beta-pleated sheets."
  },
  {
    "id": "water-medium-18",
    "question": "The bicarbonate buffer system in blood (H₂CO₃ ⇌ H⁺ + HCO₃⁻) relies on water to:",
    "options": [
      "Act as a source of H⁺ ions.",
      "React with CO₂ to form the weak acid H₂CO₃.",
      "Dilute strong acids that enter the bloodstream.",
      "Hydrate the HCO₃⁻ ions."
    ],
    "correctAnswer": 1,
    "explanation": "The first step of this critical buffer system is the reaction between water and carbon dioxide to form carbonic acid: CO₂ + H₂O ⇌ H₂CO₃."
  },
  {
    "id": "water-medium-19",
    "question": "What is the relationship between pOH and pH in an aqueous solution?",
    "options": [
      "pH + pOH = 7",
      "pH - pOH = 14",
      "pH + pOH = 14",
      "pH * pOH = 1 x 10⁻¹⁴"
    ],
    "correctAnswer": 2,
    "explanation": "Because the ion product of water is constant (K_w = [H⁺][OH⁻] = 1 x 10⁻¹⁴), taking negative logs gives the relationship: -log[H⁺] + -log[OH⁻] = 14, or pH + pOH = 14."
  },
  {
    "id": "water-medium-20",
    "question": "The 'latent heat of fusion' for water is relatively high. What does this mean for ecosystems?",
    "options": [
      "It takes a lot of energy to melt ice, slowing the transition from winter to spring.",
      "It allows water to evaporate quickly from leaves.",
      "It helps water dissolve nutrients in the soil.",
      "It means ice is less dense than water."
    ],
    "correctAnswer": 0,
    "explanation": "The latent heat of fusion is the energy required to melt ice. A high value means a large amount of solar energy is absorbed to melt ice without a temperature rise, moderating the pace of seasonal warming."
  },
  {
    "id": "water-medium-21",
    "question": "How does the polarity of water influence the three-dimensional structure of biological membranes?",
    "options": [
      "It causes phospholipids to form a bilayer with hydrophobic tails facing inward.",
      "It directly forms hydrogen bonds with the fatty acid tails.",
      "It dissolves the membrane, making it fluid.",
      "It covalently bonds to the phosphate heads."
    ],
    "correctAnswer": 0,
    "explanation": "Phospholipids are amphipathic. In water, they spontaneously arrange into a bilayer where the hydrophilic heads face the aqueous environment and the hydrophobic tails are shielded from water in the interior."
  },
  {
    "id": "water-medium-22",
    "question": "If the [H⁺] of a solution is 1 x 10⁻⁹ M, what is the [OH⁻] and what is the nature of the solution?",
    "options": [
      "[OH⁻] = 1 x 10⁻⁵ M, Acidic",
      "[OH⁻] = 1 x 10⁻⁹ M, Neutral",
      "[OH⁻] = 1 x 10⁻⁵ M, Basic",
      "[OH⁻] = 1 x 10⁻¹⁴ M, Acidic"
    ],
    "correctAnswer": 2,
    "explanation": "K_w = [H⁺][OH⁻] = 1 x 10⁻¹⁴. So, [OH⁻] = K_w / [H⁺] = 1 x 10⁻¹⁴ / 1 x 10⁻⁹ = 1 x 10⁻⁵ M. Since [OH⁻] > [H⁺], the solution is basic."
  },
  {
    "id": "water-medium-23",
    "question": "Water's role as a 'reagent' is most directly observed in:",
    "options": [
      "Transporting glucose in blood.",
      "The hydrolysis of ATP during muscle contraction.",
      "Providing buoyancy to aquatic organisms.",
      "Regulating body temperature through vasodilation."
    ],
    "correctAnswer": 1,
    "explanation": "As a reagent, water is a direct participant in a chemical reaction. In the reaction ATP + H₂O → ADP + P_i, a water molecule is consumed to break the phosphate bond, releasing energy."
  },
  {
    "id": "water-medium-24",
    "question": "The concept of 'water potential' in plants integrates which properties of water?",
    "options": [
      "Solvent action and polarity",
      "Density and specific heat",
      "Solute concentration and physical pressure",
      "Cohesion and adhesion"
    ],
    "correctAnswer": 2,
    "explanation": "Water potential (Ψ) is the potential energy of water per unit volume. It is determined mainly by two components: solute potential (Ψs, due to dissolved solutes) and pressure potential (Ψp, due to physical pressure like turgor)."
  },
  {
    "id": "water-medium-25",
    "question": "Why does adding a solute like salt lower the freezing point of water?",
    "options": [
      "The solute molecules break the hydrogen bonds between water molecules.",
      "The solute molecules get in the way of water molecules trying to form the crystalline lattice of ice.",
      "The solute increases the density of the solution.",
      "The solute reacts with water exothermically, releasing heat."
    ],
    "correctAnswer": 1,
    "explanation": "The presence of solute particles disrupts the orderly formation of the ice lattice. The water molecules must be cooled to a lower temperature before they can overcome this disruption and form a solid."
  },
  {
    "id": "water-medium-26",
    "question": "In the process of dialysis, the movement of water and solutes across a membrane is driven by:",
    "options": [
      "Active transport pumps",
      "Diffusion down concentration gradients",
      "Osmosis only",
      "Cohesion and adhesion"
    ],
    "correctAnswer": 1,
    "explanation": "Dialysis separates molecules based on their size and diffusion rates across a semi-permeable membrane. Small molecules like urea and ions diffuse out, following their concentration gradient, while water movement occurs via osmosis."
  },
  {
    "id": "water-medium-27",
    "question": "The high surface tension of water is crucial for:",
    "options": [
      "The function of alveoli in the lungs",
      "The process of photosynthesis",
      "The replication of DNA",
      "The activation of enzymes"
    ],
    "correctAnswer": 0,
    "explanation": "The inner surface of alveoli is coated with a thin film of water. High surface tension helps maintain the spherical shape of the alveoli and plays a role in the pressure changes needed for exhalation."
  },
  {
    "id": "water-medium-28",
    "question": "A solution of acetic acid (CH₃COOH) in water partially dissociates. This is an example of a:",
    "options": [
      "Strong acid",
      "Weak acid",
      "Strong base",
      "Weak base"
    ],
    "correctAnswer": 1,
    "explanation": "A weak acid is one that does not completely dissociate into its ions in an aqueous solution. Acetic acid only partially donates its proton, establishing an equilibrium: CH₃COOH ⇌ H⁺ + CH₃COO⁻."
  },
  {
    "id": "water-medium-29",
    "question": "The process of 'translocation' in plants, which moves sugars through phloem, relies on water to:",
    "options": [
      "Create the transpirational pull.",
      "Act as the solvent for sugars, forming sap.",
      "Provide the energy for active transport.",
      "Hydrolyze the sucrose into glucose and fructose."
    ],
    "correctAnswer": 1,
    "explanation": "Sugars are actively loaded into phloem sieve tubes. This high solute concentration causes water to enter the tubes by osmosis from the xylem, creating a high pressure that pushes the sap (water + sugar solution) to areas of lower pressure (sinks)."
  },
  {
    "id": "water-medium-30",
    "question": "What is the primary biological significance of water's high dielectric constant?",
    "options": [
      "It allows water to solidify upon freezing.",
      "It enables water to weaken ionic bonds and dissolve salts.",
      "It is the reason water has a high surface tension.",
      "It causes water to have a high heat of vaporization."
    ],
    "correctAnswer": 1,
    "explanation": "The high dielectric constant means water is very effective at reducing the attractive force between oppositely charged ions. This allows it to dissociate ionic compounds like NaCl into free-floating Na⁺ and Cl⁻ ions, which is essential for their biological availability and function."
  },
  {
    "id": "water-medium-31",
    "question": "The 'heat of vaporization' is defined as the heat required to:",
    "options": [
      "Melt 1 gram of a solid.",
      "Raise the temperature of 1 gram of a substance by 1°C.",
      "Convert 1 gram of a liquid to a gas at its boiling point.",
      "Sublimate 1 gram of a solid directly to a gas."
    ],
    "correctAnswer": 2,
    "explanation": "The latent heat of vaporization is the energy required to change a substance from the liquid to the gaseous state at its boiling point, without a change in temperature."
  },
  {
    "id": "water-medium-32",
    "question": "How does the presence of dissolved ions affect the electrical conductivity of water?",
    "options": [
      "It decreases conductivity because ions block electron flow.",
      "It increases conductivity because ions can carry current.",
      "It has no effect on conductivity.",
      "It makes water an insulator."
    ],
    "correctAnswer": 1,
    "explanation": "Pure water has very low conductivity. Dissolved ions (e.g., Na⁺, K⁺, Cl⁻, Ca²⁺) are charged particles that can move and carry an electric current, thereby increasing the conductivity of the solution."
  },
  {
    "id": "water-medium-33",
    "question": "The property of water that is most responsible for the cooling effect of transpiration in plants is its:",
    "options": [
      "High specific heat",
      "High latent heat of vaporization",
      "Polarity",
      "Transparency"
    ],
    "correctAnswer": 1,
    "explanation": "As water evaporates from the leaf surface (transpiration), it absorbs a large amount of heat energy from the leaf to change from liquid to vapor. This loss of heat effectively cools the plant."
  },
  {
    "id": "water-medium-34",
    "question": "Which of the following pairs consists of a weak acid and its conjugate base?",
    "options": [
      "HCl and Cl⁻",
      "H₂CO₃ and HCO₃⁻",
      "H₂SO₄ and SO₄²⁻",
      "NaOH and OH⁻"
    ],
    "correctAnswer": 1,
    "explanation": "A conjugate acid-base pair differs by one proton (H⁺). Carbonic acid (H₂CO₃) is a weak acid, and bicarbonate (HCO₃⁻) is its conjugate base (H₂CO₃ ⇌ H⁺ + HCO₃⁻)."
  },
  {
    "id": "water-medium-35",
    "question": "The movement of water through aquaporins is an example of:",
    "options": [
      "Simple diffusion through the lipid bilayer",
      "Facilitated diffusion through channel proteins",
      "Active transport using ATP",
      "Osmosis through a pump"
    ],
    "correctAnswer": 1,
    "explanation": "Aquaporins are specialized channel proteins that provide a passage for water molecules to move rapidly across the membrane down their concentration gradient. This is a form of facilitated diffusion, as it is passive but uses a protein channel."
  },
  {
    "id": "water-medium-36",
    "question": "Why does a solution of a strong acid have a much lower pH than a solution of a weak acid of the same concentration?",
    "options": [
      "The strong acid has a higher molecular weight.",
      "The strong acid completely dissociates, releasing more H⁺ ions.",
      "The weak acid is not soluble in water.",
      "The weak acid reacts with water to form a base."
    ],
    "correctAnswer": 1,
    "explanation": "A strong acid (e.g., HCl) dissociates 100% in water, producing a high [H⁺] and thus a low pH. A weak acid (e.g., CH₃COOH) only partially dissociates, resulting in a lower [H⁺] and a higher pH at the same initial concentration."
  },
  {
    "id": "water-medium-37",
    "question": "The 'colligative properties' of a solution, such as osmotic pressure, depend on:",
    "options": [
      "The identity of the solute particles",
      "The concentration of solute particles, regardless of identity",
      "The temperature of the solution only",
      "The polarity of the solvent"
    ],
    "correctAnswer": 1,
    "explanation": "Colligative properties (boiling point elevation, freezing point depression, osmotic pressure) depend only on the number of solute particles in solution, not on their chemical identity."
  },
  {
    "id": "water-medium-38",
    "question": "In the human kidney, the reabsorption of water from the filtrate back into the blood is primarily driven by:",
    "options": [
      "Active transport of water molecules",
      "Osmosis due to a solute gradient established by the loop of Henle",
      "Diffusion of water down its own concentration gradient",
      "Cohesion between water molecules in the nephron"
    ],
    "correctAnswer": 1,
    "explanation": "The loop of Henle creates a high osmolarity (high solute concentration) in the medulla of the kidney. As filtrate passes through the collecting duct, water moves out by osmosis into the more concentrated surrounding tissue, following the solute gradient."
  },
  {
    "id": "water-medium-39",
    "question": "The 'autoionization' of water refers to the reaction:",
    "options": [
      "H₂O → H₂ + ½O₂",
      "2H₂O ⇌ H₃O⁺ + OH⁻",
      "H₂O + CO₂ ⇌ H₂CO₃",
      "H₂O → H⁺ + OH⁻"
    ],
    "correctAnswer": 1,
    "explanation": "Autoionization (or self-ionization) is the process where two water molecules react to form a hydronium ion (H₃O⁺) and a hydroxide ion (OH⁻). It is the basis for the pH scale."
  },
  {
    "id": "water-medium-40",
    "question": "Which factor would NOT increase the rate of transpiration in a plant?",
    "options": [
      "Increased temperature",
      "Increased wind speed",
      "Increased humidity",
      "Increased light intensity"
    ],
    "correctAnswer": 2,
    "explanation": "High humidity reduces the concentration gradient of water vapor between the leaf's interior and the surrounding air. This decreases the driving force for diffusion, thus slowing the rate of transpiration."
  },
  {
    "id": "water-medium-41",
    "question": "The 'hydration sphere' around an ion involves what type of bonding?",
    "options": [
      "Covalent bonding",
      "Ion-dipole forces",
      "Hydrogen bonding between water molecules",
      "Hydrophobic interactions"
    ],
    "correctAnswer": 1,
    "explanation": "The attraction between an ion (e.g., Na⁺) and the partial charge on the polar water molecule (the δ⁻ oxygen) is an ion-dipole force. This is the primary interaction in hydration shells."
  },
  {
    "id": "water-medium-42",
    "question": "A patient is given an intravenous (IV) drip of a 0.9% saline solution. This solution is:",
    "options": [
      "Hypertonic to blood plasma",
      "Hypotonic to blood plasma",
      "Isotonic to blood plasma",
      "Pure water"
    ],
    "correctAnswer": 2,
    "explanation": "A 0.9% NaCl solution has the same solute concentration (osmolarity) as blood plasma and cytosol. It is isotonic, meaning no net movement of water into or out of red blood cells occurs, preventing them from bursting or shriveling."
  },
  {
    "id": "water-medium-43",
    "question": "The 'meniscus' that forms in a glass graduated cylinder is concave. This is because:",
    "options": [
      "Adhesive forces (water-glass) are stronger than cohesive forces (water-water).",
      "Cohesive forces are stronger than adhesive forces.",
      "The glass is hydrophobic.",
      "Water has a high surface tension."
    ],
    "correctAnswer": 0,
    "explanation": "A concave meniscus (curving upward) occurs when the adhesive forces between the liquid and the container are stronger than the cohesive forces within the liquid itself. Water adheres strongly to glass."
  },
  {
    "id": "water-medium-44",
    "question": "In which of these processes is water acting primarily as a 'solvent' and NOT a 'reagent'?",
    "options": [
      "Hydrolysis of a disaccharide",
      "Dissolving oxygen for aquatic respiration",
      "Photolysis in the light reactions of photosynthesis",
      "The reaction between an acid and a base"
    ],
    "correctAnswer": 1,
    "explanation": "When water dissolves O₂ gas, it is not chemically altering it; it is simply providing a medium for the gas to be transported. The O₂ molecules remain intact. In the other options, water is consumed or produced in a chemical reaction (reagent)."
  },
  {
    "id": "water-medium-45",
    "question": "The 'hardness' of water is primarily caused by dissolved:",
    "options": [
      "Sodium and potassium ions",
      "Calcium and magnesium ions",
      "Chloride and fluoride ions",
      "Nitrate and phosphate ions"
    ],
    "correctAnswer": 1,
    "explanation": "Hard water contains high concentrations of multivalent metal ions, particularly calcium (Ca²⁺) and magnesium (Mg²⁺). These ions interfere with the action of soap by forming precipitates."
  },
  {
    "id": "water-medium-46",
    "question": "What is the primary role of the water molecules shown in the crystal structure of DNA?",
    "options": [
      "To hydrolyze the sugar-phosphate backbone",
      "To form the hydrogen bonds between base pairs",
      "To stabilize the double helix through hydrogen bonding with the bases and backbone",
      "To actively transport nucleotides during replication"
    ],
    "correctAnswer": 2,
    "explanation": "A spine of hydration molecules forms hydrogen bonds with the atoms in the minor groove of the DNA double helix. This water network is crucial for stabilizing the specific conformation of the DNA molecule."
  },
  {
    "id": "water-medium-47",
    "question": "The process where water loss from the leaves pulls water up through the xylem is known as:",
    "options": [
      "Root pressure",
      "Capillary action",
      "Cohesion-tension theory",
      "Translocation"
    ],
    "correctAnswer": 2,
    "explanation": "The cohesion-tension theory describes the primary mechanism of xylem transport. Transpiration (evaporation) creates tension (negative pressure), and cohesion between water molecules pulls the entire column upward from the roots."
  },
  {
    "id": "water-medium-48",
    "question": "A buffer solution resists changes in pH upon addition of small amounts of acid or base by:",
    "options": [
      "Neutralizing all added H⁺ or OH⁻ ions completely.",
      "Converting strong acids/bases into weak ones through a reversible reaction.",
      "Diluting the acid or base with a large volume of water.",
      "Changing color to indicate the pH shift."
    ],
    "correctAnswer": 1,
    "explanation": "A buffer typically contains a weak acid and its conjugate base. Added H⁺ ions are consumed by the base, and added OH⁻ ions are consumed by the weak acid. These reactions convert strong acids/bases into weak ones, minimizing the pH change."
  },
  {
    "id": "water-medium-49",
    "question": "The 'water activity' (a_w) of a food product is a measure of:",
    "options": [
      "The total water content",
      "The availability of water for microbial growth and chemical reactions",
      "The concentration of dissolved minerals in water",
      "The pH of the water contained in the food"
    ],
    "correctAnswer": 1,
    "explanation": "Water activity, not just total water content, determines the shelf life and safety of food. It measures the fraction of water that is unbound and available to act as a solvent and participate in reactions, including supporting microbial growth."
  },
  {
    "id": "water-medium-50",
    "question": "Which statement BEST describes the biological importance of water's thermal properties?",
    "options": [
      "They allow water to be a liquid at most temperatures on Earth.",
      "They enable organisms to regulate temperature and allow aquatic habitats to remain thermally stable.",
      "They make water an effective lubricant in joints and body cavities.",
      "They are the main reason water is a polar molecule."
    ],
    "correctAnswer": 1,
    "explanation": "Water's high specific heat capacity and high latent heat of vaporization are fundamental for homeostasis (internal temperature regulation in organisms) and for stabilizing temperatures in oceans and lakes, creating a habitable environment."
  },
  
];
[
  {
    "id": "water-hard-1",
    "question": "From a thermodynamic perspective, why does the hydrophobic effect cause non-polar molecules to aggregate in water?",
    "options": [
      "It increases the entropy of the system by minimizing the disruption to the hydrogen-bonding network.",
      "It decreases the free energy by forming covalent bonds with water.",
      "It increases the enthalpy by creating more favorable interactions.",
      "It decreases the entropy of water molecules."
    ],
    "correctAnswer": 0,
    "explanation": "Water molecules form a highly ordered 'cage' around non-polar molecules, decreasing entropy. Aggregation of non-polar molecules minimizes this ordered interface, increasing the overall entropy of the system (water) and making it thermodynamically favorable."
  },
  {
    "id": "water-hard-2",
    "question": "The ion product of water (K_w) is 1.0 x 10⁻¹⁴ at 25°C. What is the [H₃O⁺] in a neutral solution?",
    "options": [
      "1.0 x 10⁻⁷ M",
      "1.0 x 10⁻¹⁴ M",
      "7.0 M",
      "1.0 x 10⁷ M"
    ],
    "correctAnswer": 0,
    "explanation": "In a neutral solution, [H₃O⁺] = [OH⁻]. Since K_w = [H₃O⁺][OH⁻] = 1.0 x 10⁻¹⁴, then [H₃O⁺]² = 1.0 x 10⁻¹⁴, so [H₃O⁺] = 1.0 x 10⁻⁷ M."
  },
  {
    "id": "water-hard-3",
    "question": "How does the precise angle of the H-O-H bond in a water molecule (104.5°) contribute to its overall polarity?",
    "options": [
      "The bent shape concentrates the negative charge on the oxygen and positive charge on the hydrogens.",
      "The angle has no effect on polarity; it only affects density.",
      "A linear molecule (180°) would be more polar.",
      "The angle maximizes the distance between the hydrogen atoms, reducing repulsion but minimizing polarity."
    ],
    "correctAnswer": 0,
    "explanation": "The tetrahedral electron geometry and the bent molecular shape prevent the bond dipoles from canceling each other out. This results in a net molecular dipole moment, making water highly polar."
  },
  {
    "id": "water-hard-4",
    "question": "In the context of enzyme catalysis, water often plays a direct role in the mechanism. This is LEAST likely to involve:",
    "options": [
      "Acting as a nucleophile in hydrolysis reactions.",
      "Stabilizing transition states via hydrogen bonding.",
      "Participating in acid-base catalysis within the active site.",
      "Forming a permanent covalent bond with the substrate."
    ],
    "correctAnswer": 3,
    "explanation": "Water molecules in active sites are crucial for facilitating reactions (as nucleophiles, in H-bonding, in proton transfer) but they do not typically form permanent covalent bonds with the substrate; they are involved in transient interactions."
  },
  {
    "id": "water-hard-5",
    "question": "The concept of 'water activity' (a_w) in food preservation is based on which fundamental property of water?",
    "options": [
      "Its role as a reagent in hydrolysis, which spoils food.",
      "Its effectiveness as a solvent for microbial nutrients.",
      "Its cohesion, which allows microbes to move.",
      "Its specific heat, which affects storage temperature."
    ],
    "correctAnswer": 1,
    "explanation": "Water activity measures the availability of water for microbial growth and biochemical reactions. By reducing a_w (e.g., by salting or drying), water is bound and unavailable to act as a solvent for metabolic processes, thus preserving food."
  },
  {
    "id": "water-hard-6",
    "question": "The dielectric constant of water is exceptionally high (~80). What is the major biological implication of this?",
    "options": [
      "It allows water to solidify at 0°C.",
      "It enables water to weaken electrostatic interactions between ions.",
      "It is the reason for water's high surface tension.",
      "It causes water to have a high boiling point."
    ],
    "correctAnswer": 1,
    "explanation": "A high dielectric constant means water is very effective at screening the attractive forces between oppositely charged ions. This is why it is such a good solvent for ionic compounds like NaCl, facilitating their dissociation and transport in biological systems."
  },
  {
    "id": "water-hard-7",
    "question": "Compared to a neutral solution, in a highly acidic solution (pH=1), the concentration of hydroxide ions (OH⁻) is:",
    "options": [
      "Higher",
      "Lower",
      "The same",
      "Impossible to determine"
    ],
    "correctAnswer": 1,
    "explanation": "The ion product of water is constant: [H₃O⁺][OH⁻] = 10⁻¹⁴. If [H₃O⁺] is very high (10⁻¹ M), then [OH⁻] must be very low (10⁻¹³ M) to maintain this constant."
  },
  {
    "id": "water-hard-8",
    "question": "The movement of water through aquaporins in cell membranes is a classic example of:",
    "options": [
      "Simple diffusion through the lipid bilayer",
      "Facilitated diffusion via channel proteins",
      "Active transport against the concentration gradient",
      "Osmosis driven by protein pumps"
    ],
    "correctAnswer": 1,
    "explanation": "Aquaporins are specific channel proteins that facilitate the passive movement of water molecules down their concentration gradient (osmosis), greatly increasing the rate of transport compared to simple diffusion."
  },
  {
    "id": "water-hard-9",
    "question": "In the reaction: Lactose + H₂O → Glucose + Galactose, water is acting as a:",
    "options": [
      "Solvent",
      "Catalyst",
      "Reagent",
      "Buffer"
    ],
    "correctAnswer": 2,
    "explanation": "In this hydrolysis reaction, a water molecule is consumed and split to break the glycosidic bond in lactose. A substance that is consumed in a reaction is a reagent."
  },
  {
    "id": "water-hard-10",
    "question": "The heat of vaporization of water is 2260 kJ/kg. What does this imply for thermoregulation?",
    "options": [
      "A small amount of sweat can remove a large amount of body heat.",
      "Water heats up very quickly in the sun.",
      "The body must consume large amounts of energy to produce sweat.",
      "Evaporation is an inefficient cooling mechanism."
    ],
    "correctAnswer": 0,
    "explanation": "The extremely high latent heat of vaporization means that for every gram of water that evaporates, 2260 Joules of heat energy is absorbed from the surroundings (the skin). This makes evaporative cooling via sweating incredibly efficient."
  },
    {
    "id": "water-hard-11",
    "question": "The Grotthuss mechanism describes:",
    "options": [
      "The rapid self-ionization of water molecules.",
      "The anomalously high mobility of protons (H⁺) in water.",
      "The formation of hydration shells around dissolved ions.",
      "The cooperative nature of hydrogen bond breaking upon heating."
    ],
    "correctAnswer": 1,
    "explanation": "The Grotthuss mechanism explains why H⁺ and OH⁻ ions have exceptionally high mobility in water. A proton doesn't physically diffuse; instead, it 'hops' along a hydrogen-bonded network of water molecules through the rapid reorganization of covalent bonds (e.g., H₃O⁺ + H₂O → H₂O + H₃O⁺)."
  },
  {
    "id": "water-hard-12",
    "question": "The precise value of the bond angle in a water molecule (104.5°) is best explained by:",
    "options": [
      "The tetrahedral electron geometry around the oxygen atom.",
      "The difference in electronegativity between H and O.",
      "The repulsion between the two lone pairs of electrons on oxygen.",
      "The presence of hydrogen bonding in the liquid state."
    ],
    "correctAnswer": 0,
    "explanation": "Oxygen has 6 valence electrons. In water, it forms two covalent bonds and has two lone pairs. These four electron domains arrange themselves in a tetrahedral geometry to minimize repulsion. The lone pairs exert slightly greater repulsion than bonding pairs, compressing the H-O-H angle from the ideal 109.5° to 104.5°."
  },
  {
    "id": "water-hard-13",
    "question": "The osmotic pressure (π) of a solution is given by π = iMRT. In this equation, the van't Hoff factor (i) for a 0.1 M solution of MgCl₂ is:",
    "options": [
      "1, because it dissolves as a single molecule.",
      "2, because it dissociates into Mg²⁺ and Cl⁻.",
      "3, because it dissociates into Mg²⁺ and 2Cl⁻.",
      "It depends on the temperature."
    ],
    "correctAnswer": 2,
    "explanation": "The van't Hoff factor (i) represents the number of particles a compound dissociates into in solution. MgCl₂ is a strong electrolyte that dissociates completely into three ions: one Mg²⁺ cation and two Cl⁻ anions. Therefore, i = 3 for colligative property calculations."
  },
  {
    "id": "water-hard-14",
    "question": "The hydrophobic effect is considered an entropy-driven process. This is because:",
    "options": [
      "Nonpolar molecules have high entropy themselves.",
      "The aggregation of nonpolar molecules releases heat (exothermic).",
      "It minimizes the number of water molecules in a highly ordered, low-entropy state.",
      "It increases the kinetic energy of the water molecules."
    ],
    "correctAnswer": 2,
    "explanation": "Water molecules form a structured, ordered 'clathrate cage' around a nonpolar solute, significantly decreasing the system's entropy. When nonpolar molecules aggregate, they minimize the total surface area exposed to water, reducing the number of water molecules forced into this ordered state. This increase in water's entropy is the major driving force."
  },
  {
    "id": "water-hard-15",
    "question": "In the context of enzyme kinetics, water molecules in the active site can act as:",
    "options": [
      "Non-competitive inhibitors by blocking the substrate.",
      "Part of the catalytic machinery by participating in proton transfer.",
      "Allosteric regulators by changing the enzyme's shape.",
      "Competitive substrates for the reaction."
    ],
    "correctAnswer": 1,
    "explanation": "Water molecules are often an integral part of an enzyme's active site. They can form part of a 'proton relay network,' shuttling protons to and from the substrate, or they can act as nucleophiles themselves in hydrolysis reactions, directly participating in catalysis."
  },
  {
    "id": "water-hard-16",
    "question": "The dielectric constant (ε) of a solvent is a measure of its:",
    "options": [
      "Ability to conduct electricity.",
      "Ability to reduce the force of attraction between opposite charges.",
      "Boiling point.",
      "Viscosity."
    ],
    "correctAnswer": 1,
    "explanation": "The dielectric constant is a measure of a solvent's polarity and its ability to screen electrostatic interactions. Water's high dielectric constant (~80) means it drastically weakens the attractive force between cations and anions, facilitating the dissolution of ionic compounds. The force between two charges is inversely proportional to the dielectric constant (F ∝ 1/ε)."
  },
  {
    "id": "water-hard-17",
    "question": "The pH of a 0.01 M solution of a strong monoprotic acid is:",
    "options": [
      "1.0",
      "2.0",
      "7.0",
      "12.0"
    ],
    "correctAnswer": 1,
    "explanation": "A strong monoprotic acid (like HCl) completely dissociates: HA → H⁺ + A⁻. Therefore, [H⁺] = [acid] = 0.01 M = 1 x 10⁻² M. pH = -log[H⁺] = -log(1 x 10⁻²) = 2.0."
  },
  {
    "id": "water-hard-18",
    "question": "The phenomenon of 'electrostriction' refers to:",
    "options": [
      "The contraction of a solvent around a dissolved ion.",
      "The stretching of water molecules in an electric field.",
      "The movement of water through a membrane under potential difference.",
      "The ionization of water under high pressure."
    ],
    "correctAnswer": 0,
    "explanation": "Electrostriction is the compression or contraction of the solvent structure around a dissolved ion. The strong ion-dipole forces pull water molecules in tightly, increasing the local density and decreasing the volume of the solution. This is a key component of the overall solvation energy."
  },
  {
    "id": "water-hard-19",
    "question": "The isoelectric point (pI) of an amino acid is the pH at which:",
    "options": [
      "It has a net positive charge.",
      "It has a net negative charge.",
      "It has no net charge and is least soluble.",
      "It acts as a buffer."
    ],
    "correctAnswer": 2,
    "explanation": "The pI is the specific pH at which an amino acid or protein has a net charge of zero. At this pH, the number of positive charges equals the number of negative charges. This is the point of minimum solubility because the zwitterionic molecules have no charge to repel each other and can aggregate and precipitate out of solution."
  },
  {
    "id": "water-hard-20",
    "question": "The 'structure maker' (cosmotropic) and 'structure breaker' (chaotropic) effect of ions on water is described by the:",
    "options": [
      "Hofmeister series",
      "Grotthuss mechanism",
      "Van't Hoff equation",
      "Henderson-Hasselbalch equation"
    ],
    "correctAnswer": 0,
    "explanation": "The Hofmeister series ranks ions based on their ability to salt out (precipitate) or salt in (dissolve) proteins. This effect correlates with how the ions alter water's structure: cosmotropic ions (e.g., SO₄²⁻, F⁻) make water more structured, while chaotropic ions (e.g., ClO₄⁻, SCN⁻) disrupt water's hydrogen-bond network."
  },
  {
    "id": "water-hard-21",
    "question": "For a weak acid, HA ⇌ H⁺ + A⁻, the pH can be calculated using the approximation pH = pK_a + log([A⁻]/[HA]). This is known as the:",
    "options": [
      "Michaelis-Menten equation",
      "Nernst equation",
      "Henderson-Hasselbalch equation",
      "Ideal gas law"
    ],
    "correctAnswer": 2,
    "explanation": "The Henderson-Hasselbalch equation is derived from the acid dissociation constant expression (K_a = [H⁺][A⁻]/[HA]). It is immensely useful for calculating the pH of buffer solutions and for understanding the titration curves of weak acids."
  },
  {
    "id": "water-hard-22",
    "question": "The maximum density of water at 4°C is a consequence of:",
    "options": [
      "The complete breakdown of the hydrogen-bonded network.",
      "A balance between the collapse of the open hexagonal lattice and increased molecular motion.",
      "The formation of stable, ice-like clusters.",
      "The dominance of adhesive forces over cohesive forces."
    ],
    "correctAnswer": 1,
    "explanation": "As water cools from room temperature, thermal motion decreases, allowing the hydrogen-bonded network to become more ordered and extensive, which typically increases density. However, water begins to form a transient, open, ice-like structure just before freezing. The density maximum at 4°C represents the optimal trade-off between these two opposing effects: the normal collapse upon cooling and the expansion due to pre-ice structuring."
  },
  {
    "id": "water-hard-23",
    "question": "In the catalytic mechanism of carbonic anhydrase, water plays the role of a:",
    "options": [
      "Product in the hydration of CO₂.",
      "Nucleophile attacking CO₂.",
      "Allosteric inhibitor regulating pH.",
      "Solvent for the reaction only."
    ],
    "correctAnswer": 1,
    "explanation": "Carbonic anhydrase catalyzes CO₂ + H₂O ⇌ H₂CO₃. A zinc ion in the active site coordinates a water molecule, lowering its pK_a and facilitating the formation of a Zn-bound hydroxide ion (OH⁻). This powerful nucleophile then attacks the carbon atom of CO₂, forming bicarbonate (HCO₃⁻)."
  },
  {
    "id": "water-hard-24",
    "question": "The term 'activity' of water (as opposed to concentration) becomes important in:",
    "options": [
      "Dilute ideal solutions.",
      "Concentrated solutions where ion-ion interactions are significant.",
      "Solutions of non-electrolytes only.",
      "Calculating the pH of strong acids."
    ],
    "correctAnswer": 1,
    "explanation": "In concentrated solutions, ions are close together and interact strongly, deviating from ideal behavior. Their 'effective concentration,' or activity, is less than their actual concentration. The activity coefficient (γ) is used to correct for this: activity = γ * concentration. This is crucial for accurate calculations in physical chemistry and biochemistry."
  },
  {
    "id": "water-hard-25",
    "question": "The 'osmotic coefficient' (φ) is used to:",
    "options": [
      "Measure the deviation of a solution's osmotic pressure from ideal behavior.",
      "Calculate the dielectric constant of a solvent.",
      "Determine the van't Hoff factor for non-electrolytes.",
      "Measure the surface tension of a liquid."
    ],
    "correctAnswer": 0,
    "explanation": "The osmotic coefficient (φ) is a correction factor that accounts for non-ideal behavior in solutions, particularly for the calculation of osmotic pressure. It is defined as the ratio of the measured osmotic pressure to the osmotic pressure expected for an ideal solution at the same concentration. φ = 1 for ideal solutions."
  },
  {
    "id": "water-hard-26",
    "question": "The 'lyotropic series' describes the ability of ions to:",
    "options": [
      "Precipitate proteins (salting out).",
      "Increase the solubility of gases in water.",
      "Catalyze the hydrolysis of esters.",
      "Change the color of pH indicators."
    ],
    "correctAnswer": 0,
    "explanation": "The lyotropic series is another name for the Hofmeister series. It orders ions based on their effectiveness in influencing the solubility and conformation of proteins and other macromolecules, primarily through their effects on water structure and consequently on hydrophobic interactions."
  },
  {
    "id": "water-hard-27",
    "question": "The 'hydration energy' of an ion is largely determined by:",
    "options": [
      "The mass of the ion.",
      "The charge density of the ion (charge/radius ratio).",
      "The color of the ion.",
      "The atomic number of the ion."
    ],
    "correctAnswer": 1,
    "explanation": "Hydration energy (the energy released when an ion is dissolved in water) is exothermic and depends on the electrostatic attraction between the ion and water's dipole. A small, highly charged ion (e.g., Al³⁺) has a high charge density and thus a very high (exothermic) hydration energy. A large, singly charged ion (e.g., Cs⁺) has a low charge density and lower hydration energy."
  },
  {
    "id": "water-hard-28",
    "question": "In the 'proton hopping' mechanism (Grotthuss mechanism), the actual species that moves is:",
    "options": [
      "An H⁺ ion diffusing through the solution.",
      "An H₃O⁺ ion diffusing through the solution.",
      "A defect in the hydrogen-bonded network, not a physical particle.",
      "An OH⁻ ion moving in the opposite direction."
    ],
    "correctAnswer": 2,
    "explanation": "The Grotthuss mechanism involves the rapid reorganization of bonds within a pre-existing hydrogen-bonded network. A proton from a hydronium ion (H₃O⁺) is transferred to a neighboring water molecule, effectively passing the 'defect' (the extra proton) along the chain much faster than any single ion could diffuse."
  },
  {
    "id": "water-hard-29",
    "question": "The 'icosahedral' water cluster model is a proposed structure for:",
    "options": [
      "The stable unit of ice-Ih.",
      "A common motif in liquid water's short-range order.",
      "The hydration shell around a sodium ion.",
      "The transition state for water autoionization."
    ],
    "correctAnswer": 1,
    "explanation": "While liquid water is disordered, it has short-range structure. Some models propose that a prevalent, though fleeting, motif is a pentagonal arrangement of water molecules that can form stable, cage-like icosahedral clusters. This is part of the effort to understand the complex structure of liquid water."
  },
  {
    "id": "water-hard-30",
    "question": "The 'Bjerrum defect' in ice refers to:",
    "options": [
      "A missing water molecule in the crystal lattice.",
      "An ionized water molecule (H₃O⁺ or OH⁻) within the lattice.",
      "A pair of adjacent water molecules with no hydrogen bond between them.",
      "An L-shaped defect in the hexagonal ring structure."
    ],
    "correctAnswer": 2,
    "explanation": "A Bjerrum defect is a type of topological defect in the hydrogen-bond network of ice. It occurs when two adjacent water molecules are not connected by a hydrogen bond, violating the 'ice rules' (each O has 2 H donors and 2 H acceptors). This can be a D-defect (two donor H's facing each other) or an L-defect (two acceptor lone pairs facing each other)."
  },
  {
    "id": "water-hard-31",
    "question": "The 'hydration number' of an ion refers to the:",
    "options": [
      "Total number of water molecules in its primary and secondary hydration shells.",
      "Number of water molecules in the primary hydration shell that are immobilized.",
      "Charge on the ion divided by the number of water molecules it attracts.",
      "pK_a of the water molecules in its coordination sphere."
    ],
    "correctAnswer": 1,
    "explanation": "The hydration number is the average number of water molecules that are so strongly bound to an ion in its primary coordination sphere that they move with the ion as a single entity. This number is determined by techniques like NMR and neutron scattering and is distinct from the larger, more dynamic secondary hydration sphere."
  },
  {
    "id": "water-hard-32",
    "question": "According to the 'Frank-Wen model,' the structure of liquid water is best described as:",
    "options": [
      "A continuous, random network.",
      "A mixture of two states: a high-density, disordered structure and a low-density, hydrogen-bonded structure.",
      "A gas-like collection of independent molecules.",
      "A perfect tetrahedral lattice with defects."
    ],
    "correctAnswer": 1,
    "explanation": "The Frank-Wen flickering cluster model proposes that liquid water is a dynamic mixture. It contains short-lived, ice-like clusters with extensive hydrogen bonding (lower density) surrounded by a disordered, more densely packed fluid of molecules with broken hydrogen bonds. This model helps explain water's anomalous properties."
  },
  {
    "id": "water-hard-33",
    "question": "The 'Jones-Dole equation,' η/η₀ = 1 + A√c + Bc, describes the viscosity of electrolyte solutions. The B coefficient is associated with:",
    "options": [
      "The ion-ion interactions at high concentration.",
      "The ion-solvent interactions and is related to the Hofmeister series.",
      "The temperature dependence of viscosity.",
      "The dielectric constant of the solution."
    ],
    "correctAnswer": 1,
    "explanation": "In the Jones-Dole equation, the B coefficient is the Jones-Dole coefficient. It represents the effect of ion-solvent interactions on viscosity. Positive B values indicate structure-making (cosmotropic) ions that increase viscosity, while negative B values indicate structure-breaking (chaotropic) ions that decrease viscosity. Its values follow the Hofmeister series."
  },
  {
    "id": "water-hard-34",
    "question": "The 'Eigen-Weller mechanism' details the kinetics of:",
    "options": [
      "Water autoionization.",
      "Proton transfer reactions in water.",
      "Ice crystal formation.",
      "Enzyme-catalyzed hydrolysis."
    ],
    "correctAnswer": 1,
    "explanation": "The Eigen-Weller mechanism is a model for the ultra-fast kinetics of proton transfer between acids and bases in water. It involves three steps: 1) Diffusive approach of the acid and base to form an encounter complex, 2) Rapid proton transfer within the complex, and 3) Diffusion apart of the products. The proton transfer itself is often faster than diffusion."
  },
  {
    "id": "water-hard-35",
    "question": "The 'isosbestic point' observed in the UV-Vis spectra of a solution whose pH is changing indicates:",
    "options": [
      "The pK_a of the acid.",
      "That two interconverting species have equal molar absorptivity at that wavelength.",
      "The isoelectric point of a protein.",
      "The point of maximum buffering capacity."
    ],
    "correctAnswer": 1,
    "explanation": "An isosbestic point is a specific wavelength at which the absorbance of a solution remains constant as the pH is changed, provided the total concentration of the absorbing species remains constant. It is clear evidence that only two principal species (e.g., HA and A⁻) are interconverting and that they have identical extinction coefficients at that wavelength."
  },
  {
    "id": "water-hard-36",
    "question": "The 'T-jump' (temperature-jump) relaxation method is used to study:",
    "options": [
      "The thermal expansion of water.",
      "The kinetics of very fast reactions, such as proton transfer.",
      "The phase transition between ice and water.",
      "The heat capacity of solutions."
    ],
    "correctAnswer": 1,
    "explanation": "The temperature-jump method is a relaxation technique used to perturb a system at equilibrium by rapidly increasing its temperature (e.g., with a laser pulse). By monitoring the system's return to the new equilibrium (e.g., via spectroscopy), the rate constants of very fast reactions, like those involved in acid-base equilibria or enzyme mechanisms, can be determined."
  },
  {
    "id": "water-hard-37",
    "question": "The 'structure of the hydrated electron' (e⁻_aq) is best described as:",
    "options": [
      "An electron dissolved in the empty spaces between water molecules.",
      "A water molecule that has gained an extra electron in its conduction band.",
      "An electron trapped within a cavity formed by water molecules.",
      "A free radical formed by the breakdown of water."
    ],
    "correctAnswer": 2,
    "explanation": "The hydrated electron is a free electron that has been solvated in water. It is not attached to any specific atom. It is thought to be localized in a cavity or void, with its charge stabilized by the dipole moments of roughly six water molecules that orient their hydrogen atoms toward the center of the cavity."
  },
  {
    "id": "water-hard-38",
    "question": "The 'Kirkwood-Buff theory' provides a link between:",
    "options": [
      "Macroscopic solution properties and molecular distribution functions.",
      "The dielectric constant and the boiling point of a solvent.",
      "Osmotic pressure and vapor pressure lowering.",
      "The Hofmeister series and the lyotropic series."
    ],
    "correctAnswer": 0,
    "explanation": "Kirkwood-Buff theory is a statistical mechanical framework that uses integrals over pair correlation functions (which describe how molecules are distributed relative to each other) to calculate thermodynamic properties of solutions, such as activity coefficients, partial molar volumes, and compressibilities. It connects microscopic structure to macroscopic behavior."
  },
  {
    "id": "water-hard-39",
    "question": "The 'Mayer ion-pair theory' is important for understanding:",
    "options": [
      "The deviation from ideal behavior in solutions of strong electrolytes.",
      "The mechanism of water autoionization.",
      "The structure of the hydration shell.",
      "The temperature of maximum density."
    ],
    "correctAnswer": 0,
    "explanation": "Mayer's theory addresses the Debye-Hückel theory's limitation at higher concentrations. It considers the formation of transient, loosely associated ion pairs (e.g., Na⁺‥Cl⁻) due to electrostatic attraction. The existence of these ion pairs means the effective number of independent particles is less than the nominal dissociation would suggest, explaining non-ideal behavior like the decrease in equivalent conductivity with concentration."
  },
  {
    "id": "water-hard-40",
    "question": "The 'Born model' is used to calculate the:",
    "options": [
      "Solvation energy of a spherical ion in a dielectric continuum.",
      "Osmotic pressure of a macromolecular solution.",
      "Rate of proton diffusion in water.",
      "Surface tension of an electrolyte solution."
    ],
    "correctAnswer": 0,
    "explanation": "The Born model is a simple electrostatic continuum model. It treats the ion as a hard sphere of radius r with charge q, and the solvent as a structureless continuum with a dielectric constant ε. The solvation energy (ΔG_solv) is calculated by the equation ΔG_solv = -(q² / (8πε₀r)) * (1 - 1/ε). It provides a useful first approximation for hydration energies."
  }
  
];

export const  waterBiologicalImportanceQuestions = {
  easy: easyQuestions,
  medium: mediumQuestions,
  hard: hardQuestions,
} as const;
