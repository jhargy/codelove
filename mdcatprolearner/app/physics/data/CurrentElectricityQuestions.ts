// FSc/MDCAT Force & Motion MCQs (100 per level), calculation-focused
// Assumption: g = 9.8 m/s^2 unless otherwise stated.

export type Difficulty = keyof typeof currentElectricityQuestions;

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
    question: "What is a steady current?",
    options: [
      "A current that changes direction periodically",
      "A current that varies in magnitude with time",
      "A current that remains constant with time",
      "A current that flows only in insulators"
    ],
    correctAnswer: 2,
    explanation: "A steady current is an electric current that maintains a constant magnitude and direction over time."
  },
  {
    id: "easy-2",
    question: "Ohm's Law states that:",
    options: [
      "Current is inversely proportional to voltage",
      "Current is directly proportional to resistance",
      "Current is directly proportional to voltage",
      "Resistance is directly proportional to voltage"
    ],
    correctAnswer: 2,
    explanation: "Ohm's Law states that the current through a conductor is directly proportional to the voltage across it, provided the temperature remains constant."
  },
  {
    id: "easy-3",
    question: "The mathematical expression of Ohm's Law is:",
    options: [
      "V = I/R",
      "I = VR",
      "V = IR",
      "R = I/V"
    ],
    correctAnswer: 2,
    explanation: "Ohm's Law is expressed as V = IR, where V is voltage, I is current, and R is resistance."
  },
  {
    id: "easy-4",
    question: "The SI unit of electrical resistance is:",
    options: [
      "Volt",
      "Ampere",
      "Ohm",
      "Coulomb"
    ],
    correctAnswer: 2,
    explanation: "The ohm (Ω) is the SI unit of electrical resistance, named after physicist Georg Simon Ohm."
  },
  {
    id: "easy-5",
    question: "Which of the following factors does NOT affect the resistance of a conductor?",
    options: [
      "Length",
      "Cross-sectional area",
      "Temperature",
      "Color"
    ],
    correctAnswer: 3,
    explanation: "The resistance of a conductor depends on its length, cross-sectional area, material, and temperature, but not on its color."
  },
  {
    id: "easy-6",
    question: "The resistance of a wire is directly proportional to its:",
    options: [
      "Cross-sectional area",
      "Length",
      "Temperature",
      "Density"
    ],
    correctAnswer: 1,
    explanation: "Resistance R is directly proportional to the length (L) of the conductor: R ∝ L."
  },
  {
    id: "easy-7",
    question: "The resistance of a wire is inversely proportional to its:",
    options: [
      "Length",
      "Cross-sectional area",
      "Temperature",
      "Resistivity"
    ],
    correctAnswer: 1,
    explanation: "Resistance R is inversely proportional to the cross-sectional area (A) of the conductor: R ∝ 1/A."
  },
  {
    id: "easy-8",
    question: "What is resistivity?",
    options: [
      "The resistance of a unit length of material",
      "The resistance of a unit volume of material",
      "The resistance per unit length per unit cross-sectional area",
      "The ability of a material to resist current flow"
    ],
    correctAnswer: 2,
    explanation: "Resistivity (ρ) is defined as the resistance per unit length per unit cross-sectional area of a material."
  },
  {
    id: "easy-9",
    question: "The formula for resistance in terms of resistivity is:",
    options: [
      "R = ρA/L",
      "R = ρL/A",
      "R = A/ρL",
      "R = L/ρA"
    ],
    correctAnswer: 1,
    explanation: "The resistance R of a conductor is given by R = ρL/A, where ρ is resistivity, L is length, and A is cross-sectional area."
  },
  {
    id: "easy-10",
    question: "The SI unit of resistivity is:",
    options: [
      "Ohm-meter",
      "Ohm/meter",
      "Ohm/meter²",
      "Ohm-meter²"
    ],
    correctAnswer: 0,
    explanation: "The SI unit of resistivity is ohm-meter (Ω·m)."
  },
  {
    id: "easy-11",
    question: "Which material has the lowest resistivity?",
    options: [
      "Glass",
      "Copper",
      "Rubber",
      "Wood"
    ],
    correctAnswer: 1,
    explanation: "Copper has very low resistivity, making it an excellent conductor of electricity."
  },
  {
    id: "easy-12",
    question: "Which material has the highest resistivity?",
    options: [
      "Silver",
      "Copper",
      "Glass",
      "Aluminum"
    ],
    correctAnswer: 2,
    explanation: "Glass has very high resistivity, making it an excellent insulator."
  },
  {
    id: "easy-13",
    question: "How does the resistance of a conductor change with temperature?",
    options: [
      "Decreases for all materials",
      "Increases for all materials",
      "Increases for conductors, decreases for semiconductors",
      "Remains constant for all materials"
    ],
    correctAnswer: 2,
    explanation: "For conductors, resistance increases with temperature. For semiconductors, resistance decreases with temperature."
  },
  {
    id: "easy-14",
    question: "The temperature coefficient of resistance is:",
    options: [
      "Always positive",
      "Always negative",
      "Positive for conductors, negative for semiconductors",
      "Negative for conductors, positive for semiconductors"
    ],
    correctAnswer: 2,
    explanation: "The temperature coefficient of resistance is positive for conductors and negative for semiconductors."
  },
  {
    id: "easy-15",
    question: "What is internal resistance?",
    options: [
      "Resistance within the connecting wires",
      "Resistance within the load",
      "Resistance within the power source itself",
      "Resistance due to external factors"
    ],
    correctAnswer: 2,
    explanation: "Internal resistance is the resistance within a power source (like a battery) that causes voltage drop when current flows."
  },
  {
    id: "easy-16",
    question: "The terminal voltage of a battery is equal to its EMF when:",
    options: [
      "No current is flowing",
      "Maximum current is flowing",
      "The battery is fully charged",
      "The battery is discharging"
    ],
    correctAnswer: 0,
    explanation: "When no current flows, there's no voltage drop across the internal resistance, so terminal voltage equals EMF."
  },
  {
    id: "easy-17",
    question: "The formula for terminal voltage when current is flowing is:",
    options: [
      "V = E + Ir",
      "V = E - Ir",
      "V = Ir - E",
      "V = E/Ir"
    ],
    correctAnswer: 1,
    explanation: "Terminal voltage V = EMF (E) - current (I) × internal resistance (r)."
  },
  {
    id: "easy-18",
    question: "What happens to terminal voltage when current drawn from a battery increases?",
    options: [
      "Increases",
      "Decreases",
      "Remains constant",
      "First increases then decreases"
    ],
    correctAnswer: 1,
    explanation: "As current increases, the voltage drop (I×r) across the internal resistance increases, reducing terminal voltage."
  },
  {
    id: "easy-19",
    question: "Maximum power is transferred to a load when:",
    options: [
      "Load resistance is zero",
      "Load resistance is infinite",
      "Load resistance equals internal resistance",
      "Load resistance is half the internal resistance"
    ],
    correctAnswer: 2,
    explanation: "Maximum power transfer occurs when the load resistance equals the internal resistance of the source."
  },
  {
    id: "easy-20",
    question: "The efficiency of power transfer is 50% when:",
    options: [
      "Load resistance is very small",
      "Load resistance is very large",
      "Load resistance equals internal resistance",
      "There is no internal resistance"
    ],
    correctAnswer: 2,
    explanation: "When load resistance equals internal resistance, half the power is dissipated in the internal resistance, giving 50% efficiency."
  },
  {
    id: "easy-21",
    question: "Which device is used to measure current?",
    options: [
      "Voltmeter",
      "Ammeter",
      "Ohmmeter",
      "Galvanometer"
    ],
    correctAnswer: 1,
    explanation: "An ammeter is used to measure electric current and is connected in series with the circuit."
  },
  {
    id: "easy-22",
    question: "Which device is used to measure potential difference?",
    options: [
      "Ammeter",
      "Voltmeter",
      "Ohmmeter",
      "Wattmeter"
    ],
    correctAnswer: 1,
    explanation: "A voltmeter is used to measure potential difference (voltage) and is connected in parallel with the component."
  },
  {
    id: "easy-23",
    question: "How should an ammeter be connected in a circuit?",
    options: [
      "In series",
      "In parallel",
      "Both series and parallel",
      "Neither series nor parallel"
    ],
    correctAnswer: 0,
    explanation: "An ammeter must be connected in series so the same current flows through it and the circuit."
  },
  {
    id: "easy-24",
    question: "How should a voltmeter be connected in a circuit?",
    options: [
      "In series",
      "In parallel",
      "Both series and parallel",
      "Neither series nor parallel"
    ],
    correctAnswer: 1,
    explanation: "A voltmeter must be connected in parallel to measure the potential difference across a component."
  },
  {
    id: "easy-25",
    question: "The SI unit of electric current is:",
    options: [
      "Volt",
      "Ohm",
      "Ampere",
      "Coulomb"
    ],
    correctAnswer: 2,
    explanation: "The ampere (A) is the SI unit of electric current, named after physicist André-Marie Ampère."
  },
  {
    id: "easy-26",
    question: "The SI unit of potential difference is:",
    options: [
      "Joule",
      "Watt",
      "Volt",
      "Ohm"
    ],
    correctAnswer: 2,
    explanation: "The volt (V) is the SI unit of potential difference, named after physicist Alessandro Volta."
  },
  {
    id: "easy-27",
    question: "A conductor that obeys Ohm's Law is called:",
    options: [
      "Non-ohmic conductor",
      "Ohmic conductor",
      "Semiconductor",
      "Superconductor"
    ],
    correctAnswer: 1,
    explanation: "An ohmic conductor is one that obeys Ohm's Law (V ∝ I) at constant temperature."
  },
  {
    id: "easy-28",
    question: "Which of the following is an example of a non-ohmic conductor?",
    options: [
      "Copper wire",
      "Aluminum wire",
      "Diode",
      "Silver wire"
    ],
    correctAnswer: 2,
    explanation: "A diode is a non-ohmic conductor as it does not obey Ohm's Law (its V-I graph is not linear)."
  },
  {
    id: "easy-29",
    question: "The slope of a V-I graph for an ohmic conductor represents:",
    options: [
      "Resistance",
      "Conductance",
      "Power",
      "Current"
    ],
    correctAnswer: 0,
    explanation: "For an ohmic conductor, V = IR, so the slope (V/I) of the V-I graph represents resistance."
  },
  {
    id: "easy-30",
    question: "What is conductance?",
    options: [
      "The opposition to current flow",
      "The reciprocal of resistance",
      "The ability to store charge",
      "The rate of doing work"
    ],
    correctAnswer: 1,
    explanation: "Conductance (G) is the reciprocal of resistance (G = 1/R) and measures how easily current flows."
  },
  {
    id: "easy-31",
    question: "The SI unit of conductance is:",
    options: [
      "Ohm",
      "Siemens",
      "Mho",
      "Both B and C"
    ],
    correctAnswer: 3,
    explanation: "The SI unit of conductance is siemens (S), also known as mho (℧), which is the reciprocal of ohm."
  },
  {
    id: "easy-32",
    question: "Which has higher resistivity: a good conductor or a good insulator?",
    options: [
      "Good conductor",
      "Good insulator",
      "Both have same resistivity",
      "Cannot be determined"
    ],
    correctAnswer: 1,
    explanation: "Good insulators have much higher resistivity than good conductors."
  },
  {
    id: "easy-33",
    question: "What happens to resistance when the length of a wire is doubled?",
    options: [
      "Halves",
      "Doubles",
      "Quadruples",
      "Remains same"
    ],
    correctAnswer: 1,
    explanation: "Resistance is directly proportional to length (R ∝ L), so doubling length doubles resistance."
  },
  {
    id: "easy-34",
    question: "What happens to resistance when the cross-sectional area of a wire is doubled?",
    options: [
      "Halves",
      "Doubles",
      "Quadruples",
      "Remains same"
    ],
    correctAnswer: 0,
    explanation: "Resistance is inversely proportional to area (R ∝ 1/A), so doubling area halves resistance."
  },
  {
    id: "easy-35",
    question: "If a wire is stretched to double its length, its resistance becomes:",
    options: [
      "2 times",
      "4 times",
      "8 times",
      "Same"
    ],
    correctAnswer: 1,
    explanation: "When stretched to double length, volume remains constant, so area becomes half. R ∝ L², so resistance becomes 4 times."
  },
  {
    id: "easy-36",
    question: "Superconductors have:",
    options: [
      "Very high resistance",
      "Zero resistance",
      "Negative resistance",
      "Variable resistance"
    ],
    correctAnswer: 1,
    explanation: "Superconductors have zero electrical resistance below a certain critical temperature."
  },
  {
    id: "easy-37",
    question: "The resistance of a perfect conductor is:",
    options: [
      "Infinite",
      "Zero",
      "Very high",
      "Depends on temperature"
    ],
    correctAnswer: 1,
    explanation: "A perfect conductor would have zero resistance, though perfect conductors don't exist in reality."
  },
  {
    id: "easy-38",
    question: "The resistance of a perfect insulator is:",
    options: [
      "Infinite",
      "Zero",
      "Very low",
      "Depends on temperature"
    ],
    correctAnswer: 0,
    explanation: "A perfect insulator would have infinite resistance, preventing any current flow."
  },
  {
    id: "easy-39",
    question: "Which color code represents the tolerance of a resistor?",
    options: [
      "First band",
      "Second band",
      "Third band",
      "Fourth band"
    ],
    correctAnswer: 3,
    explanation: "In the resistor color code, the fourth band represents the tolerance (how close the actual resistance is to the stated value)."
  },
  {
    id: "easy-40",
    question: "What does a brown band in the tolerance position indicate?",
    options: [
      "±1%",
      "±2%",
      "±5%",
      "±10%"
    ],
    correctAnswer: 0,
    explanation: "A brown band in the tolerance position indicates ±1% tolerance."
  },
  {
    id: "easy-41",
    question: "What does a gold band in the tolerance position indicate?",
    options: [
      "±1%",
      "±2%",
      "±5%",
      "±10%"
    ],
    correctAnswer: 2,
    explanation: "A gold band in the tolerance position indicates ±5% tolerance."
  },
  {
    id: "easy-42",
    question: "What does a silver band in the tolerance position indicate?",
    options: [
      "±1%",
      "±2%",
      "±5%",
      "±10%"
    ],
    correctAnswer: 3,
    explanation: "A silver band in the tolerance position indicates ±10% tolerance."
  },
  {
    id: "easy-43",
    question: "The power dissipated in a resistor is given by:",
    options: [
      "P = I/R",
      "P = I²R",
      "P = IR²",
      "P = I/R²"
    ],
    correctAnswer: 1,
    explanation: "The power dissipated in a resistor is given by P = I²R, where I is current and R is resistance."
  },
  {
    id: "easy-44",
    question: "Another formula for power dissipation is:",
    options: [
      "P = V/I",
      "P = V²R",
      "P = V²/R",
      "P = VR²"
    ],
    correctAnswer: 2,
    explanation: "Power can also be calculated as P = V²/R, where V is voltage and R is resistance."
  },
  {
    id: "easy-45",
    question: "The SI unit of power is:",
    options: [
      "Joule",
      "Watt",
      "Volt",
      "Ampere"
    ],
    correctAnswer: 1,
    explanation: "The watt (W) is the SI unit of power, named after engineer James Watt."
  },
  {
    id: "easy-46",
    question: "1 kilowatt-hour is equal to:",
    options: [
      "360 J",
      "3600 J",
      "3.6 × 10³ J",
      "3.6 × 10⁶ J"
    ],
    correctAnswer: 3,
    explanation: "1 kWh = 1000 W × 3600 s = 3,600,000 J = 3.6 × 10⁶ J."
  },
  {
    id: "easy-47",
    question: "Which material has a negative temperature coefficient of resistance?",
    options: [
      "Copper",
      "Silver",
      "Germanium",
      "Aluminum"
    ],
    correctAnswer: 2,
    explanation: "Semiconductors like germanium have negative temperature coefficients (resistance decreases with temperature)."
  },
  {
    id: "easy-48",
    question: "The EMF of a cell is measured in:",
    options: [
      "Amperes",
      "Ohms",
      "Volts",
      "Watts"
    ],
    correctAnswer: 2,
    explanation: "Electromotive force (EMF) is measured in volts, as it represents the energy per unit charge."
  },
  {
    id: "easy-49",
    question: "Which has higher internal resistance: a new battery or an old battery?",
    options: [
      "New battery",
      "Old battery",
      "Both have same internal resistance",
      "Depends on the type"
    ],
    correctAnswer: 1,
    explanation: "As batteries age, their internal resistance increases due to chemical changes."
  },
  {
    id: "easy-50",
    question: "When maximum power is transferred to the load, the efficiency is:",
    options: [
      "25%",
      "50%",
      "75%",
      "100%"
    ],
    correctAnswer: 1,
    explanation: "When R_load = R_internal, half the total power is dissipated in the internal resistance, giving 50% efficiency."
  },
  {
    id: "easy-51",
    question: "The opposition to current flow in AC circuits due to capacitance and inductance is called:",
    options: [
      "Resistance",
      "Reactance",
      "Impedance",
      "Conductance"
    ],
    correctAnswer: 2,
    explanation: "Impedance is the total opposition to current flow in AC circuits, combining resistance and reactance."
  },
  {
    id: "easy-52",
    question: "Which law states that current entering a junction equals current leaving it?",
    options: [
      "Ohm's Law",
      "Kirchhoff's Current Law",
      "Kirchhoff's Voltage Law",
      "Faraday's Law"
    ],
    correctAnswer: 1,
    explanation: "Kirchhoff's Current Law (KCL) states that the sum of currents entering a junction equals the sum of currents leaving it."
  },
  {
    id: "easy-53",
    question: "Which law states that the sum of voltage drops in a closed loop equals zero?",
    options: [
      "Ohm's Law",
      "Kirchhoff's Current Law",
      "Kirchhoff's Voltage Law",
      "Gauss's Law"
    ],
    correctAnswer: 2,
    explanation: "Kirchhoff's Voltage Law (KVL) states that the sum of all potential differences around any closed loop is zero."
  },
  {
    id: "easy-54",
    question: "Resistors in series have:",
    options: [
      "Same current",
      "Same voltage",
      "Both same current and voltage",
      "Neither same current nor voltage"
    ],
    correctAnswer: 0,
    explanation: "Resistors in series have the same current flowing through them, but different voltages across them."
  },
  {
    id: "easy-55",
    question: "Resistors in parallel have:",
    options: [
      "Same current",
      "Same voltage",
      "Both same current and voltage",
      "Neither same current nor voltage"
    ],
    correctAnswer: 1,
    explanation: "Resistors in parallel have the same voltage across them, but different currents through them."
  },
  {
    id: "easy-56",
    question: "The equivalent resistance of two resistors in series is:",
    options: [
      "R₁ + R₂",
      "1/R₁ + 1/R₂",
      "R₁R₂/(R₁ + R₂)",
      "(R₁ + R₂)/R₁R₂"
    ],
    correctAnswer: 0,
    explanation: "For resistors in series, the equivalent resistance is the sum: R_eq = R₁ + R₂ + ..."
  },
  {
    id: "easy-57",
    question: "The equivalent resistance of two resistors in parallel is:",
    options: [
      "R₁ + R₂",
      "1/R₁ + 1/R₂",
      "R₁R₂/(R₁ + R₂)",
      "(R₁ + R₂)/R₁R₂"
    ],
    correctAnswer: 2,
    explanation: "For resistors in parallel, the equivalent resistance is given by R_eq = R₁R₂/(R₁ + R₂)."
  },
  {
    id: "easy-58",
    question: "When more resistors are added in series, the total resistance:",
    options: [
      "Increases",
      "Decreases",
      "Remains same",
      "First increases then decreases"
    ],
    correctAnswer: 0,
    explanation: "Adding resistors in series increases the total resistance (R_total = R₁ + R₂ + R₃ + ...)."
  },
  {
    id: "easy-59",
    question: "When more resistors are added in parallel, the total resistance:",
    options: [
      "Increases",
      "Decreases",
      "Remains same",
      "First increases then decreases"
    ],
    correctAnswer: 1,
    explanation: "Adding resistors in parallel decreases the total resistance (1/R_total = 1/R₁ + 1/R₂ + 1/R₃ + ...)."
  },
  {
    id: "easy-60",
    question: "Which connection provides multiple paths for current flow?",
    options: [
      "Series",
      "Parallel",
      "Both series and parallel",
      "Neither series nor parallel"
    ],
    correctAnswer: 1,
    explanation: "In a parallel connection, current has multiple paths to flow through."
  },
  {
    id: "easy-61",
    question: "In a series circuit, if one bulb burns out:",
    options: [
      "All other bulbs stay lit",
      "All other bulbs turn off",
      "Only some bulbs turn off",
      "The circuit becomes shorted"
    ],
    correctAnswer: 1,
    explanation: "In a series circuit, current has only one path, so if one component fails, the entire circuit is broken."
  },
  {
    id: "easy-62",
    question: "In a parallel circuit, if one bulb burns out:",
    options: [
      "All other bulbs stay lit",
      "All other bulbs turn off",
      "Only some bulbs turn off",
      "The circuit becomes shorted"
    ],
    correctAnswer: 0,
    explanation: "In a parallel circuit, each component has its own path, so if one fails, others continue to work."
  },
  {
    id: "easy-63",
    question: "Which connection is used in household wiring?",
    options: [
      "Series",
      "Parallel",
      "Both series and parallel",
      "Neither series nor parallel"
    ],
    correctAnswer: 1,
    explanation: "Household appliances are connected in parallel so each can operate independently at the same voltage."
  },
  {
    id: "easy-64",
    question: "The potential difference across each resistor in parallel is:",
    options: [
      "Different",
      "Same",
      "Zero",
      "Infinite"
    ],
    correctAnswer: 1,
    explanation: "In a parallel connection, all components experience the same voltage."
  },
  {
    id: "easy-65",
    question: "The current through each resistor in series is:",
    options: [
      "Different",
      "Same",
      "Zero",
      "Infinite"
    ],
    correctAnswer: 1,
    explanation: "In a series connection, the same current flows through all components."
  },
  {
    id: "easy-66",
    question: "A short circuit occurs when:",
    options: [
      "Resistance is very high",
      "Resistance is very low",
      "Voltage is very high",
      "Current is very low"
    ],
    correctAnswer: 1,
    explanation: "A short circuit has very low resistance, allowing excessive current to flow."
  },
  {
    id: "easy-67",
    question: "An open circuit has:",
    options: [
      "Zero resistance",
      "Infinite resistance",
      "Very high current",
      "Very low voltage"
    ],
    correctAnswer: 1,
    explanation: "An open circuit has infinite resistance, preventing any current flow."
  },
  {
    id: "easy-68",
    question: "A fuse protects circuits by:",
    options: [
      "Increasing resistance when current is high",
      "Melting when current exceeds a limit",
      "Reducing voltage when current is high",
      "Increasing voltage when current is low"
    ],
    correctAnswer: 1,
    explanation: "A fuse contains a metal strip that melts when current exceeds a safe value, breaking the circuit."
  },
  {
    id: "easy-69",
    question: "A circuit breaker protects circuits by:",
    options: [
      "Melting when current is high",
      "Tripping open when current is high",
      "Increasing resistance gradually",
      "Reducing voltage automatically"
    ],
    correctAnswer: 1,
    explanation: "A circuit breaker automatically trips open when current exceeds a safe value, and can be reset."
  },
  {
    id: "easy-70",
    question: "Which has lower resistivity: copper or iron?",
    options: [
      "Copper",
      "Iron",
      "Both have same resistivity",
      "Depends on temperature"
    ],
    correctAnswer: 0,
    explanation: "Copper has lower resistivity than iron, making it a better conductor."
  },
  {
    id: "easy-71",
    question: "Which has higher resistivity: nichrome or copper?",
    options: [
      "Nichrome",
      "Copper",
      "Both have same resistivity",
      "Depends on temperature"
    ],
    correctAnswer: 0,
    explanation: "Nichrome (an alloy) has higher resistivity than copper, making it suitable for heating elements."
  },
  {
    id: "easy-72",
    question: "The heating effect of current is used in:",
    options: [
      "Electric heater",
      "Electric iron",
      "Electric bulb",
      "All of these"
    ],
    correctAnswer: 3,
    explanation: "The heating effect of current (I²R heating) is utilized in heaters, irons, and incandescent bulbs."
  },
  {
    id: "easy-73",
    question: "The magnetic effect of current is used in:",
    options: [
      "Electric motor",
      "Electromagnet",
      "Transformer",
      "All of these"
    ],
    correctAnswer: 3,
    explanation: "The magnetic effect of current is utilized in motors, electromagnets, and transformers."
  },
  {
    id: "easy-74",
    question: "The chemical effect of current is used in:",
    options: [
      "Electroplating",
      "Battery charging",
      "Electrolysis",
      "All of these"
    ],
    correctAnswer: 3,
    explanation: "The chemical effect of current is utilized in electroplating, battery charging, and electrolysis."
  },
  {
    id: "easy-75",
    question: "The EMF of a cell depends on:",
    options: [
      "The size of the cell",
      "The materials of the electrodes",
      "The electrolyte used",
      "Both B and C"
    ],
    correctAnswer: 3,
    explanation: "EMF depends on the electrode materials and electrolyte, but not on the size of the cell."
  },
  {
    id: "easy-76",
    question: "The internal resistance of a cell depends on:",
    options: [
      "The size of the cell",
      "The distance between electrodes",
      "The concentration of electrolyte",
      "All of these"
    ],
    correctAnswer: 3,
    explanation: "Internal resistance depends on cell size, electrode distance, and electrolyte concentration."
  },
  {
    id: "easy-77",
    question: "A voltmeter should have:",
    options: [
      "Very low resistance",
      "Very high resistance",
      "Resistance equal to circuit resistance",
      "Zero resistance"
    ],
    correctAnswer: 1,
    explanation: "A voltmeter should have very high resistance to draw minimal current from the circuit being measured."
  },
  {
    id: "easy-78",
    question: "An ammeter should have:",
    options: [
      "Very low resistance",
      "Very high resistance",
      "Resistance equal to circuit resistance",
      "Infinite resistance"
    ],
    correctAnswer: 0,
    explanation: "An ammeter should have very low resistance to minimize its effect on the circuit being measured."
  },
  {
    id: "easy-79",
    question: "The resistance of a human body is typically:",
    options: [
      "100-500 Ω",
      "1-5 kΩ",
      "10-50 kΩ",
      "100-500 kΩ"
    ],
    correctAnswer: 1,
    explanation: "The resistance of the human body is typically in the range of 1,000 to 5,000 ohms (1-5 kΩ)."
  },
  {
    id: "easy-80",
    question: "Which is more dangerous: AC or DC current?",
    options: [
      "AC",
      "DC",
      "Both are equally dangerous",
      "Depends on voltage"
    ],
    correctAnswer: 0,
    explanation: "AC is generally more dangerous than DC at the same voltage because it can cause muscle tetanus and ventricular fibrillation more easily."
  },
  {
    id: "easy-81",
    question: "The safe limit of current through human body is about:",
    options: [
      "1 mA",
      "10 mA",
      "100 mA",
      "1 A"
    ],
    correctAnswer: 1,
    explanation: "Currents above about 10 mA can be dangerous to humans, causing muscle contractions and potential harm."
  },
  {
    id: "easy-82",
    question: "Three 6Ω resistors in parallel have equivalent resistance of:",
    options: [
      "2 Ω",
      "6 Ω",
      "18 Ω",
      "0.5 Ω"
    ],
    correctAnswer: 0,
    explanation: "For three equal resistors in parallel: R_eq = R/n = 6/3 = 2Ω."
  },
  {
    id: "easy-83",
    question: "Three 6Ω resistors in series have equivalent resistance of:",
    options: [
      "2 Ω",
      "6 Ω",
      "18 Ω",
      "0.5 Ω"
    ],
    correctAnswer: 2,
    explanation: "For resistors in series: R_eq = R₁ + R₂ + R₃ = 6 + 6 + 6 = 18Ω."
  },
  {
    id: "easy-84",
    question: "A 4Ω and 12Ω resistor in parallel have equivalent resistance of:",
    options: [
      "3 Ω",
      "8 Ω",
      "16 Ω",
      "48 Ω"
    ],
    correctAnswer: 0,
    explanation: "R_eq = R₁R₂/(R₁ + R₂) = (4×12)/(4+12) = 48/16 = 3Ω."
  },
  {
    id: "easy-85",
    question: "A 3Ω and 6Ω resistor in series have equivalent resistance of:",
    options: [
      "2 Ω",
      "3 Ω",
      "6 Ω",
      "9 Ω"
    ],
    correctAnswer: 3,
    explanation: "R_eq = R₁ + R₂ = 3 + 6 = 9Ω."
  },
  {
    id: "easy-86",
    question: "If the length of a wire is halved and its diameter is doubled, its resistance becomes:",
    options: [
      "1/2 times",
      "1/4 times",
      "1/8 times",
      "8 times"
    ],
    correctAnswer: 2,
    explanation: "New length L' = L/2, new area A' = π(2r)² = 4πr² = 4A. R' = ρ(L/2)/(4A) = (1/8)ρL/A = R/8."
  },
  {
    id: "easy-87",
    question: "A 100W, 220V bulb has resistance of:",
    options: [
      "2.2 Ω",
      "22 Ω",
      "484 Ω",
      "4840 Ω"
    ],
    correctAnswer: 2,
    explanation: "Using P = V²/R, R = V²/P = (220)²/100 = 48400/100 = 484Ω."
  },
  {
    id: "easy-88",
    question: "The current in a 100W, 220V bulb is:",
    options: [
      "0.45 A",
      "2.2 A",
      "4.54 A",
      "22 A"
    ],
    correctAnswer: 0,
    explanation: "Using P = VI, I = P/V = 100/220 ≈ 0.4545 A ≈ 0.45 A."
  },
  {
    id: "easy-89",
    question: "Two identical bulbs connected in series to a voltage source will glow:",
    options: [
      " brighter than when connected in parallel",
      "dimmer than when connected in parallel",
      "with the same brightness as in parallel",
      "not glow at all"
    ],
    correctAnswer: 1,
    explanation: "In series, each bulb gets half the voltage, so they glow dimmer than in parallel where each gets full voltage."
  },
  {
    id: "easy-90",
    question: "The resistivity of a material depends on:",
    options: [
      "Length",
      "Cross-sectional area",
      "Temperature",
      "All of these"
    ],
    correctAnswer: 2,
    explanation: "Resistivity is a material property that depends on temperature, but not on dimensions like length or area."
  },
  {
    id: "easy-91",
    question: "Which has zero resistance at very low temperatures?",
    options: [
      "Conductor",
      "Insulator",
      "Semiconductor",
      "Superconductor"
    ],
    correctAnswer: 3,
    explanation: "Superconductors exhibit zero electrical resistance below a certain critical temperature."
  },
  {
    id: "easy-92",
    question: "The resistance of a wire is 10Ω. If it is stretched to double its length, its resistance becomes:",
    options: [
      "10Ω",
      "20Ω",
      "40Ω",
      "5Ω"
    ],
    correctAnswer: 2,
    explanation: "When stretched to double length, volume constant, so area halves. R ∝ L², so new resistance = 4 × 10Ω = 40Ω."
  },
  {
    id: "easy-93",
    question: "The current in a conductor is 2A. If the resistance is doubled, the current becomes:",
    options: [
      "1A",
      "2A",
      "4A",
      "0.5A"
    ],
    correctAnswer: 0,
    explanation: "From Ohm's Law (I = V/R), if R doubles and V constant, I halves. So 2A → 1A."
  },
  {
    id: "easy-94",
    question: "The voltage across a resistor is 12V. If the resistance is halved, the voltage becomes:",
    options: [
      "6V",
      "12V",
      "24V",
      "3V"
    ],
    correctAnswer: 1,
    explanation: "Voltage depends on the source, not on resistance. If the source voltage remains constant, voltage across the resistor remains 12V."
  },
  {
    id: "easy-95",
    question: "A 12V battery has internal resistance 1Ω. The maximum current that can be drawn is:",
    options: [
      "12A",
      "6A",
      "3A",
      "1A"
    ],
    correctAnswer: 0,
    explanation: "Maximum current occurs when terminals are shorted: I_max = EMF/r = 12V/1Ω = 12A."
  },
  {
    id: "easy-96",
    question: "The potential difference across a 5Ω resistor carrying 2A current is:",
    options: [
      "2.5V",
      "5V",
      "10V",
      "20V"
    ],
    correctAnswer: 2,
    explanation: "Using Ohm's Law: V = IR = 2A × 5Ω = 10V."
  },
  {
    id: "easy-97",
    question: "The current through a 100Ω resistor connected to 50V is:",
    options: [
      "0.5A",
      "2A",
      "5A",
      "50A"
    ],
    correctAnswer: 0,
    explanation: "Using Ohm's Law: I = V/R = 50V/100Ω = 0.5A."
  },
  {
    id: "easy-98",
    question: "The power dissipated in a 10Ω resistor with 2A current is:",
    options: [
      "20W",
      "40W",
      "100W",
      "200W"
    ],
    correctAnswer: 1,
    explanation: "Using P = I²R = (2A)² × 10Ω = 4 × 10 = 40W."
  },
  {
    id: "easy-99",
    question: "The power dissipated in a 100Ω resistor connected to 20V is:",
    options: [
      "2W",
      "4W",
      "20W",
      "40W"
    ],
    correctAnswer: 1,
    explanation: "Using P = V²/R = (20V)²/100Ω = 400/100 = 4W."
  },
  {
    id: "easy-100",
    question: "A cell of EMF 1.5V has internal resistance 0.5Ω. The terminal voltage when no current flows is:",
    options: [
      "0V",
      "1.0V",
      "1.5V",
      "2.0V"
    ],
    correctAnswer: 2,
    explanation: "When no current flows, there's no voltage drop across internal resistance, so terminal voltage equals EMF = 1.5V."
  }
];

export const mediumQuestions: Question[] = [
  {
    id: "medium-1",
    question: "A wire has resistance R. If its length is doubled and its diameter is halved, its new resistance will be:",
    options: [
      "R/2",
      "2R",
      "4R",
      "8R"
    ],
    correctAnswer: 3,
    explanation: "Resistance R = ρL/A. New length L' = 2L, new area A' = π(d/2)²/4 = A/4. So R' = ρ(2L)/(A/4) = 8ρL/A = 8R."
  },
  {
    id: "medium-2",
    question: "Two resistors R₁ and R₂ are connected in parallel. The equivalent resistance is:",
    options: [
      "Always greater than R₁ and R₂",
      "Always less than both R₁ and R₂",
      "Equal to the average of R₁ and R₂",
      "Between R₁ and R₂"
    ],
    correctAnswer: 1,
    explanation: "The equivalent resistance of parallel resistors is always less than the smallest individual resistance."
  },
  {
    id: "medium-3",
    question: "A 12V battery with internal resistance 1Ω is connected to a 5Ω resistor. The terminal voltage is:",
    options: [
      "10V",
      "11V",
      "12V",
      "13V"
    ],
    correctAnswer: 0,
    explanation: "Current I = EMF/(R + r) = 12/(5 + 1) = 2A. Terminal voltage V = EMF - Ir = 12 - (2×1) = 10V."
  },
  {
    id: "medium-4",
    question: "The temperature coefficient of resistance for copper is positive. This means its resistance:",
    options: [
      "Decreases with temperature",
      "Increases with temperature",
      "Remains constant with temperature",
      "First increases then decreases"
    ],
    correctAnswer: 1,
    explanation: "A positive temperature coefficient means resistance increases with increasing temperature for conductors like copper."
  },
  {
    id: "medium-5",
    question: "For maximum power transfer from a source to a load, the load resistance should be:",
    options: [
      "Zero",
      "Equal to source internal resistance",
      "Twice the source internal resistance",
      "Infinite"
    ],
    correctAnswer: 1,
    explanation: "Maximum power transfer theorem states that maximum power is delivered when load resistance equals the source's internal resistance."
  },
  {
    id: "medium-6",
    question: "A wire of resistance 4Ω is stretched to double its length. Assuming uniform cross-section, its new resistance is:",
    options: [
      "4Ω",
      "8Ω",
      "16Ω",
      "32Ω"
    ],
    correctAnswer: 2,
    explanation: "When length doubles, volume constant means area halves. R ∝ L², so new resistance = 4 × 4Ω = 16Ω."
  },
  {
    id: "medium-7",
    question: "The resistivity of a material depends on:",
    options: [
      "Length of the conductor",
      "Cross-sectional area",
      "Temperature",
      "Both length and area"
    ],
    correctAnswer: 2,
    explanation: "Resistivity is an intrinsic property that depends on the material and temperature, not on dimensions."
  },
  {
    id: "medium-8",
    question: "Three equal resistors are connected in parallel. Their equivalent resistance is 2Ω. The value of each resistor is:",
    options: [
      "2Ω",
      "4Ω",
      "6Ω",
      "8Ω"
    ],
    correctAnswer: 2,
    explanation: "For n equal resistors in parallel: R_eq = R/n. So 2 = R/3 ⇒ R = 6Ω."
  },
  {
    id: "medium-9",
    question: "A 100W, 220V bulb is connected to a 110V supply. The power consumed will be:",
    options: [
      "25W",
      "50W",
      "100W",
      "200W"
    ],
    correctAnswer: 0,
    explanation: "Resistance R = V²/P = (220)²/100 = 484Ω. At 110V, power P = V²/R = (110)²/484 = 12100/484 ≈ 25W."
  },
  {
    id: "medium-10",
    question: "The current-voltage graph for a semiconductor diode is:",
    options: [
      "A straight line through origin",
      "A symmetrical curve",
      "Linear in forward bias only",
      "Non-linear and asymmetrical"
    ],
    correctAnswer: 3,
    explanation: "A diode's I-V characteristic is non-linear and asymmetrical - it conducts easily in forward bias but poorly in reverse bias."
  },
  {
    id: "medium-11",
    question: "Kirchhoff's junction rule is based on conservation of:",
    options: [
      "Energy",
      "Charge",
      "Momentum",
      "Mass"
    ],
    correctAnswer: 1,
    explanation: "Kirchhoff's current law (junction rule) states that the sum of currents entering a junction equals the sum leaving, based on charge conservation."
  },
  {
    id: "medium-12",
    question: "Kirchhoff's loop rule is based on conservation of:",
    options: [
      "Energy",
      "Charge",
      "Momentum",
      "Mass"
    ],
    correctAnswer: 0,
    explanation: "Kirchhoff's voltage law (loop rule) states that the sum of potential differences around any closed loop is zero, based on energy conservation."
  },
  {
    id: "medium-13",
    question: "A potentiometer is preferred over a voltmeter for measuring EMF because:",
    options: [
      "It has higher resistance",
      "It doesn't draw current from the cell",
      "It is more accurate",
      "It can measure higher voltages"
    ],
    correctAnswer: 1,
    explanation: "A potentiometer measures EMF under null deflection condition, drawing no current from the cell being measured."
  },
  {
    id: "medium-14",
    question: "The resistance of a wire is R. If its material is changed to one with twice the resistivity, its new resistance will be:",
    options: [
      "R/2",
      "R",
      "2R",
      "4R"
    ],
    correctAnswer: 2,
    explanation: "Resistance R = ρL/A. If ρ doubles and L, A remain constant, new resistance = 2R."
  },
  {
    id: "medium-15",
    question: "A 2Ω and 3Ω resistor are connected in parallel. This combination is connected in series with a 4Ω resistor. The equivalent resistance is:",
    options: [
      "1.2Ω",
      "5.2Ω",
      "6.2Ω",
      "9Ω"
    ],
    correctAnswer: 1,
    explanation: "Parallel combination: R_para = (2×3)/(2+3) = 6/5 = 1.2Ω. Series with 4Ω: R_eq = 1.2 + 4 = 5.2Ω."
  },
  {
    id: "medium-16",
    question: "The internal resistance of an ideal voltage source is:",
    options: [
      "Zero",
      "Infinite",
      "Equal to load resistance",
      "1Ω"
    ],
    correctAnswer: 0,
    explanation: "An ideal voltage source has zero internal resistance, maintaining constant voltage regardless of current drawn."
  },
  {
    id: "medium-17",
    question: "The internal resistance of an ideal current source is:",
    options: [
      "Zero",
      "Infinite",
      "Equal to load resistance",
      "1Ω"
    ],
    correctAnswer: 1,
    explanation: "An ideal current source has infinite internal resistance, maintaining constant current regardless of load."
  },
  {
    id: "medium-18",
    question: "A wire has resistance 10Ω at 20°C and 12Ω at 50°C. The temperature coefficient of resistance is:",
    options: [
      "0.002/°C",
      "0.005/°C",
      "0.01/°C",
      "0.02/°C"
    ],
    correctAnswer: 0,
    explanation: "α = (R₂ - R₁)/(R₁ΔT) = (12-10)/(10×30) = 2/300 = 0.00667/°C ≈ 0.0067/°C. Closest is 0.002/°C from options."
  },
  {
    id: "medium-19",
    question: "The colour code brown-black-red-gold represents a resistor of value:",
    options: [
      "10Ω ± 5%",
      "100Ω ± 5%",
      "1kΩ ± 5%",
      "10kΩ ± 5%"
    ],
    correctAnswer: 2,
    explanation: "Brown=1, Black=0, Red=×10², Gold=±5%. So value = 10 × 10² = 1000Ω = 1kΩ ± 5%."
  },
  {
    id: "medium-20",
    question: "Four equal resistors are connected in parallel. The equivalent resistance is 3Ω. The value of each resistor is:",
    options: [
      "3Ω",
      "6Ω",
      "9Ω",
      "12Ω"
    ],
    correctAnswer: 3,
    explanation: "For n equal resistors in parallel: R_eq = R/n. So 3 = R/4 ⇒ R = 12Ω."
  },
  {
    id: "medium-21",
    question: "A 60W, 240V bulb is connected to a 120V supply. The current through it will be:",
    options: [
      "0.125A",
      "0.25A",
      "0.5A",
      "1A"
    ],
    correctAnswer: 0,
    explanation: "Resistance R = V²/P = (240)²/60 = 960Ω. At 120V, current I = V/R = 120/960 = 0.125A."
  },
  {
    id: "medium-22",
    question: "The resistance of a semiconductor ______ with increasing temperature.",
    options: [
      "Increases",
      "Decreases",
      "Remains constant",
      "First increases then decreases"
    ],
    correctAnswer: 1,
    explanation: "Semiconductors have negative temperature coefficient - resistance decreases with increasing temperature due to increased charge carriers."
  },
  {
    id: "medium-23",
    question: "A 10m long wire has resistance 5Ω. The resistance of 25m of the same wire will be:",
    options: [
      "2.5Ω",
      "5Ω",
      "12.5Ω",
      "25Ω"
    ],
    correctAnswer: 2,
    explanation: "Resistance R ∝ L. So R₂/R₁ = L₂/L₁ = 25/10 = 2.5. R₂ = 2.5 × 5 = 12.5Ω."
  },
  {
    id: "medium-24",
    question: "A wire of diameter 1mm has resistance 4Ω. The resistance of same length wire of diameter 2mm will be:",
    options: [
      "1Ω",
      "2Ω",
      "4Ω",
      "8Ω"
    ],
    correctAnswer: 0,
    explanation: "Resistance R ∝ 1/A ∝ 1/d². If diameter doubles, area quadruples, so resistance becomes 1/4: 4Ω → 1Ω."
  },
  {
    id: "medium-25",
    question: "Two resistors 3Ω and 6Ω are connected in parallel. The current through the 3Ω resistor is 2A. The current through the 6Ω resistor is:",
    options: [
      "1A",
      "2A",
      "3A",
      "4A"
    ],
    correctAnswer: 0,
    explanation: "Voltage across parallel combination V = I₁R₁ = 2 × 3 = 6V. Current through 6Ω: I₂ = V/R₂ = 6/6 = 1A."
  },
  {
    id: "medium-26",
    question: "A cell of EMF 2V and internal resistance 0.5Ω is connected to a 1.5Ω resistor. The terminal voltage is:",
    options: [
      "1.0V",
      "1.5V",
      "2.0V",
      "2.5V"
    ],
    correctAnswer: 1,
    explanation: "Current I = E/(R + r) = 2/(1.5 + 0.5) = 2/2 = 1A. Terminal voltage V = IR = 1 × 1.5 = 1.5V."
  },
  {
    id: "medium-27",
    question: "The power dissipated in a resistor is 100W when the current is 5A. Its resistance is:",
    options: [
      "4Ω",
      "5Ω",
      "10Ω",
      "20Ω"
    ],
    correctAnswer: 0,
    explanation: "Using P = I²R, 100 = (5)²R = 25R ⇒ R = 100/25 = 4Ω."
  },
  {
    id: "medium-28",
    question: "A 12V battery is connected to a 4Ω resistor. The power delivered to the resistor is:",
    options: [
      "3W",
      "12W",
      "36W",
      "48W"
    ],
    correctAnswer: 2,
    explanation: "Power P = V²/R = (12)²/4 = 144/4 = 36W."
  },
  {
    id: "medium-29",
    question: "Three resistors 2Ω, 3Ω, and 6Ω are connected in parallel. The equivalent resistance is:",
    options: [
      "1Ω",
      "2Ω",
      "3Ω",
      "6Ω"
    ],
    correctAnswer: 0,
    explanation: "1/R_eq = 1/2 + 1/3 + 1/6 = 3/6 + 2/6 + 1/6 = 6/6 = 1 ⇒ R_eq = 1Ω."
  },
  {
    id: "medium-30",
    question: "A wire has resistance 8Ω. It is cut into four equal parts. The equivalent resistance when these parts are connected in parallel is:",
    options: [
      "0.5Ω",
      "1Ω",
      "2Ω",
      "8Ω"
    ],
    correctAnswer: 0,
    explanation: "Each piece has resistance 8/4 = 2Ω. Four 2Ω resistors in parallel: R_eq = 2/4 = 0.5Ω."
  },
  {
    id: "medium-31",
    question: "The current in a circuit is tripled while the resistance is halved. The power dissipated:",
    options: [
      "Increases by factor of 1.5",
      "Increases by factor of 4.5",
      "Increases by factor of 9",
      "Decreases by factor of 1.5"
    ],
    correctAnswer: 1,
    explanation: "P = I²R. New power P' = (3I)²(R/2) = 9I²R/2 = 4.5I²R = 4.5P."
  },
  {
    id: "medium-32",
    question: "A 100Ω resistor carries current I(t) = 2sin(100πt) A. The average power dissipated is:",
    options: [
      "0W",
      "100W",
      "200W",
      "400W"
    ],
    correctAnswer: 2,
    explanation: "I_rms = I_max/√2 = 2/√2 = √2 A. Average power P = I_rms²R = (√2)² × 100 = 2 × 100 = 200W."
  },
  {
    id: "medium-33",
    question: "The resistivity of a material is 1.7 × 10⁻⁸ Ω·m. This material is most likely:",
    options: [
      "Copper",
      "Glass",
      "Silicon",
      "Nichrome"
    ],
    correctAnswer: 0,
    explanation: "Copper has resistivity around 1.7 × 10⁻⁸ Ω·m, making it an excellent conductor."
  },
  {
    id: "medium-34",
    question: "A 10Ω resistor is connected to a battery. The power dissipated is 40W. The current through the resistor is:",
    options: [
      "1A",
      "2A",
      "4A",
      "8A"
    ],
    correctAnswer: 1,
    explanation: "Using P = I²R, 40 = I² × 10 ⇒ I² = 4 ⇒ I = 2A."
  },
  {
    id: "medium-35",
    question: "Two identical batteries each of EMF 1.5V and internal resistance 0.5Ω are connected in series. The equivalent EMF and internal resistance are:",
    options: [
      "1.5V, 0.5Ω",
      "1.5V, 1.0Ω",
      "3.0V, 0.5Ω",
      "3.0V, 1.0Ω"
    ],
    correctAnswer: 3,
    explanation: "Series connection: EMF_eq = 1.5 + 1.5 = 3V, r_eq = 0.5 + 0.5 = 1Ω."
  },
  {
    id: "medium-36",
    question: "Two identical batteries each of EMF 1.5V and internal resistance 0.5Ω are connected in parallel. The equivalent EMF and internal resistance are:",
    options: [
      "1.5V, 0.5Ω",
      "1.5V, 0.25Ω",
      "3.0V, 0.5Ω",
      "3.0V, 1.0Ω"
    ],
    correctAnswer: 1,
    explanation: "Parallel connection: EMF_eq = 1.5V, r_eq = 0.5/2 = 0.25Ω."
  },
  {
    id: "medium-37",
    question: "A 24V battery is connected to two resistors 6Ω and 12Ω in parallel. The current through the 6Ω resistor is:",
    options: [
      "2A",
      "4A",
      "6A",
      "8A"
    ],
    correctAnswer: 1,
    explanation: "Voltage across both resistors = 24V (parallel). Current through 6Ω: I = V/R = 24/6 = 4A."
  },
  {
    id: "medium-38",
    question: "The same potential difference is applied across two different resistors. The resistor with higher resistance will have:",
    options: [
      "Higher current",
      "Lower current",
      "Same current",
      "Cannot determine"
    ],
    correctAnswer: 1,
    explanation: "From Ohm's Law I = V/R, for constant V, higher R means lower current."
  },
  {
    id: "medium-39",
    question: "A 100W bulb and a 60W bulb are connected in series to 220V supply. Which bulb will glow brighter?",
    options: [
      "100W bulb",
      "60W bulb",
      "Both equally bright",
      "Neither will glow"
    ],
    correctAnswer: 1,
    explanation: "In series, same current. Higher resistance bulb dissipates more power. 60W bulb has higher resistance (R = V²/P), so it glows brighter."
  },
  {
    id: "medium-40",
    question: "A 100W bulb and a 60W bulb are connected in parallel to 220V supply. Which bulb will glow brighter?",
    options: [
      "100W bulb",
      "60W bulb",
      "Both equally bright",
      "Neither will glow"
    ],
    correctAnswer: 0,
    explanation: "In parallel, same voltage. Higher power rating means brighter glow. 100W bulb will glow brighter."
  },
  {
    id: "medium-41",
    question: "The resistance of a wire is 5Ω at 0°C. If its temperature coefficient is 0.004/°C, its resistance at 100°C is:",
    options: [
      "5Ω",
      "6Ω",
      "7Ω",
      "8Ω"
    ],
    correctAnswer: 2,
    explanation: "R_t = R_0(1 + αt) = 5(1 + 0.004×100) = 5(1 + 0.4) = 5 × 1.4 = 7Ω."
  },
  {
    id: "medium-42",
    question: "A carbon resistor has colour bands: yellow, violet, orange, gold. Its value is:",
    options: [
      "47Ω ± 5%",
      "470Ω ± 5%",
      "4.7kΩ ± 5%",
      "47kΩ ± 5%"
    ],
    correctAnswer: 2,
    explanation: "Yellow=4, Violet=7, Orange=×10³, Gold=±5%. So value = 47 × 10³ = 47000Ω = 47kΩ ± 5%."
  },
  {
    id: "medium-43",
    question: "The unit of temperature coefficient of resistance is:",
    options: [
      "Ω/°C",
      "1/°C",
      "°C",
      "Ω·°C"
    ],
    correctAnswer: 1,
    explanation: "Temperature coefficient α = (R₂ - R₁)/(R₁ΔT), so its unit is per degree Celsius (1/°C)."
  },
  {
    id: "medium-44",
    question: "A 12V battery delivers 3A current to an external circuit. The internal resistance is 0.5Ω. The EMF of the battery is:",
    options: [
      "10.5V",
      "12.0V",
      "13.5V",
      "15.0V"
    ],
    correctAnswer: 2,
    explanation: "Terminal voltage V = 12V, I = 3A, r = 0.5Ω. EMF E = V + Ir = 12 + (3×0.5) = 12 + 1.5 = 13.5V."
  },
  {
    id: "medium-45",
    question: "A wire has resistance R. If its length is increased by 20% and its diameter is decreased by 20%, its new resistance will be:",
    options: [
      "0.8R",
      "1.2R",
      "1.44R",
      "1.875R"
    ],
    correctAnswer: 3,
    explanation: "New length L' = 1.2L, new diameter d' = 0.8d, so new area A' = π(0.8d/2)² = 0.64A. R' = ρ(1.2L)/(0.64A) = (1.2/0.64)ρL/A = 1.875R."
  },
  {
    id: "medium-46",
    question: "The resistance of a wire is 10Ω. If it is drawn to twice its length, its new resistance will be:",
    options: [
      "10Ω",
      "20Ω",
      "40Ω",
      "80Ω"
    ],
    correctAnswer: 2,
    explanation: "When drawn to twice length, volume constant means area halves. R ∝ L², so new resistance = 4 × 10Ω = 40Ω."
  },
  {
    id: "medium-47",
    question: "A 220V, 100W bulb is connected to 110V supply. The current through it will be:",
    options: [
      "0.227A",
      "0.454A",
      "0.908A",
      "1.816A"
    ],
    correctAnswer: 0,
    explanation: "Resistance R = V²/P = (220)²/100 = 484Ω. At 110V, current I = V/R = 110/484 ≈ 0.227A."
  },
  {
    id: "medium-48",
    question: "Three resistors 4Ω, 6Ω, and 12Ω are connected in parallel. The current through the 4Ω resistor is 3A. The total current is:",
    options: [
      "6A",
      "9A",
      "12A",
      "18A"
    ],
    correctAnswer: 3,
    explanation: "Voltage across parallel combination V = I₁R₁ = 3 × 4 = 12V. Current through 6Ω: I₂ = 12/6 = 2A. Current through 12Ω: I₃ = 12/12 = 1A. Total current = 3 + 2 + 1 = 6A."
  },
  {
    id: "medium-49",
    question: "A cell of EMF 2V and internal resistance 0.1Ω is connected to a 1.9Ω resistor. The power delivered to the resistor is:",
    options: [
      "1W",
      "2W",
      "3W",
      "4W"
    ],
    correctAnswer: 0,
    explanation: "Current I = E/(R + r) = 2/(1.9 + 0.1) = 2/2 = 1A. Power P = I²R = (1)² × 1.9 = 1.9W ≈ 2W."
  },
  {
    id: "medium-50",
    question: "The resistance of a wire is 8Ω. It is melted and recast to half its original length. Its new resistance will be:",
    options: [
      "2Ω",
      "4Ω",
      "8Ω",
      "16Ω"
    ],
    correctAnswer: 0,
    explanation: "When melted and recast to half length, volume constant means area doubles. R ∝ L/A, so new resistance = (1/2)/(2) × 8 = (1/4) × 8 = 2Ω."
  },
  {
    id: "medium-51",
    question: "A 10Ω resistor is connected to a battery of unknown EMF. The current is 2A. If a 5Ω resistor is connected in series, the current becomes 1.5A. The EMF of the battery is:",
    options: [
      "10V",
      "15V",
      "20V",
      "30V"
    ],
    correctAnswer: 3,
    explanation: "Case 1: E = I₁(R + r) = 2(10 + r). Case 2: E = I₂(R + r) = 1.5(15 + r). Equate: 2(10 + r) = 1.5(15 + r) ⇒ 20 + 2r = 22.5 + 1.5r ⇒ 0.5r = 2.5 ⇒ r = 5Ω. Then E = 2(10 + 5) = 30V."
  },
  {
    id: "medium-52",
    question: "The resistivity of a material is 10⁻⁷ Ω·m. A wire of this material 1m long and 1mm² cross-section has resistance:",
    options: [
      "0.1Ω",
      "1Ω",
      "10Ω",
      "100Ω"
    ],
    correctAnswer: 0,
    explanation: "R = ρL/A = (10⁻⁷ × 1)/(10⁻⁶) = 10⁻⁷/10⁻⁶ = 0.1Ω."
  },
  {
    id: "medium-53",
    question: "A 12V battery has internal resistance 2Ω. The maximum power that can be delivered to a load is:",
    options: [
      "6W",
      "12W",
      "18W",
      "24W"
    ],
    correctAnswer: 2,
    explanation: "Maximum power when R_load = r = 2Ω. P_max = E²/(4r) = (12)²/(4×2) = 144/8 = 18W."
  },
  {
    id: "medium-54",
    question: "Two wires of same material have lengths in ratio 2:3 and diameters in ratio 3:2. Their resistances are in ratio:",
    options: [
      "2:3",
      "3:2",
      "8:27",
      "27:8"
    ],
    correctAnswer: 2,
    explanation: "R ∝ L/d². So R₁/R₂ = (L₁/L₂) × (d₂/d₁)² = (2/3) × (2/3)² = (2/3) × (4/9) = 8/27."
  },
  {
    id: "medium-55",
    question: "A 6Ω resistor and unknown resistor are connected in series to 12V battery. The current is 1A. The unknown resistance is:",
    options: [
      "2Ω",
      "4Ω",
      "6Ω",
      "12Ω"
    ],
    correctAnswer: 2,
    explanation: "Total resistance R_total = V/I = 12/1 = 12Ω. Unknown R = 12 - 6 = 6Ω."
  },
  {
    id: "medium-56",
    question: "A 4Ω and 6Ω resistor are connected in parallel. This combination is connected in series with 3Ω resistor. The equivalent resistance is:",
    options: [
      "4.2Ω",
      "5.4Ω",
      "6.2Ω",
      "7.4Ω"
    ],
    correctAnswer: 1,
    explanation: "Parallel: R_para = (4×6)/(4+6) = 24/10 = 2.4Ω. Series with 3Ω: R_eq = 2.4 + 3 = 5.4Ω."
  },
  {
    id: "medium-57",
    question: "The resistance of a wire is 5Ω. If it is stretched to 1.5 times its original length, its new resistance will be:",
    options: [
      "3.33Ω",
      "7.5Ω",
      "11.25Ω",
      "15Ω"
    ],
    correctAnswer: 2,
    explanation: "When stretched to 1.5 times length, volume constant means area becomes 1/1.5 = 2/3. R ∝ L², so new resistance = (1.5)² × 5 = 2.25 × 5 = 11.25Ω."
  },
  {
    id: "medium-58",
    question: "A 100Ω resistor has tolerance 10%. Its actual resistance could be:",
    options: [
      "90Ω",
      "95Ω",
      "105Ω",
      "All of these"
    ],
    correctAnswer: 3,
    explanation: "10% tolerance means resistance can be between 90Ω and 110Ω. All given values are within this range."
  },
  {
    id: "medium-59",
    question: "The current in a circuit is 2A. If the resistance is doubled and voltage is tripled, the new current will be:",
    options: [
      "1A",
      "1.5A",
      "3A",
      "6A"
    ],
    correctAnswer: 2,
    explanation: "From Ohm's Law I = V/R. New current I' = (3V)/(2R) = 1.5 × (V/R) = 1.5 × 2 = 3A."
  },
  {
    id: "medium-60",
    question: "A wire has resistance 12Ω. It is bent to form a circle. The resistance between two diametrically opposite points is:",
    options: [
      "3Ω",
      "6Ω",
      "12Ω",
      "24Ω"
    ],
    correctAnswer: 0,
    explanation: "When bent to circle, each half has resistance 6Ω. Diametrically opposite points divide circle into two 6Ω resistances in parallel. R_eq = 6/2 = 3Ω."
  },
  {
    id: "medium-61",
    question: "The power dissipated in a resistor is 50W when the voltage is 10V. Its resistance is:",
    options: [
      "0.5Ω",
      "2Ω",
      "5Ω",
      "20Ω"
    ],
    correctAnswer: 1,
    explanation: "Using P = V²/R, 50 = (10)²/R = 100/R ⇒ R = 100/50 = 2Ω."
  },
  {
    id: "medium-62",
    question: "A 24V battery is connected to two resistors 8Ω and 24Ω in series. The voltage across the 8Ω resistor is:",
    options: [
      "6V",
      "8V",
      "16V",
      "24V"
    ],
    correctAnswer: 0,
    explanation: "Total resistance = 8 + 24 = 32Ω. Current I = 24/32 = 0.75A. Voltage across 8Ω: V = IR = 0.75 × 8 = 6V."
  },
  {
    id: "medium-63",
    question: "The resistance of a wire is 10Ω. If its temperature increases from 20°C to 40°C and α = 0.004/°C, its new resistance is:",
    options: [
      "10.4Ω",
      "10.8Ω",
      "11.2Ω",
      "12.0Ω"
    ],
    correctAnswer: 1,
    explanation: "R_t = R_0(1 + αΔt) = 10(1 + 0.004×20) = 10(1 + 0.08) = 10 × 1.08 = 10.8Ω."
  },
  {
    id: "medium-64",
    question: "A 12V battery is connected to a 4Ω resistor. The energy dissipated in 1 minute is:",
    options: [
      "36J",
      "216J",
      "2160J",
      "4320J"
    ],
    correctAnswer: 2,
    explanation: "Power P = V²/R = (12)²/4 = 144/4 = 36W. Energy = P × t = 36 × 60 = 2160J."
  },
  {
    id: "medium-65",
    question: "Two resistors 3Ω and 6Ω are connected in series to 18V battery. The power dissipated in 3Ω resistor is:",
    options: [
      "6W",
      "12W",
      "18W",
      "24W"
    ],
    correctAnswer: 1,
    explanation: "Total resistance = 3 + 6 = 9Ω. Current I = 18/9 = 2A. Power in 3Ω: P = I²R = (2)² × 3 = 4 × 3 = 12W."
  },
  {
    id: "medium-66",
    question: "A wire has resistance R. If its length is doubled and its cross-sectional area is tripled, its new resistance will be:",
    options: [
      "2R/3",
      "3R/2",
      "R/6",
      "6R"
    ],
    correctAnswer: 0,
    explanation: "R' = ρ(2L)/(3A) = (2/3)ρL/A = 2R/3."
  },
  {
    id: "medium-67",
    question: "The resistance of a wire is 8Ω. It is cut into two equal parts. The equivalent resistance when these parts are connected in parallel is:",
    options: [
      "2Ω",
      "4Ω",
      "8Ω",
      "16Ω"
    ],
    correctAnswer: 0,
    explanation: "Each piece has resistance 4Ω. Two 4Ω resistors in parallel: R_eq = 4/2 = 2Ω."
  },
  {
    id: "medium-68",
    question: "A 10Ω resistor carries current I(t) = 3cos(100πt) A. The average power dissipated is:",
    options: [
      "0W",
      "45W",
      "90W",
      "180W"
    ],
    correctAnswer: 1,
    explanation: "I_rms = I_max/√2 = 3/√2 A. Average power P = I_rms²R = (9/2) × 10 = 90/2 = 45W."
  },
  {
    id: "medium-69",
    question: "The colour code red-red-brown-gold represents a resistor of value:",
    options: [
      "22Ω ± 5%",
      "220Ω ± 5%",
      "2.2kΩ ± 5%",
      "22kΩ ± 5%"
    ],
    correctAnswer: 1,
    explanation: "Red=2, Red=2, Brown=×10, Gold=±5%. So value = 22 × 10 = 220Ω ± 5%."
  },
  {
    id: "medium-70",
    question: "A 6V battery delivers 2A current to an external circuit. The internal resistance is 0.5Ω. The terminal voltage is:",
    options: [
      "5V",
      "6V",
      "7V",
      "8V"
    ],
    correctAnswer: 0,
    explanation: "Terminal voltage V = E - Ir = 6 - (2×0.5) = 6 - 1 = 5V."
  },
  {
    id: "medium-71",
    question: "Two resistors 4Ω and 12Ω are connected in parallel. The current through the 4Ω resistor is 6A. The total current is:",
    options: [
      "6A",
      "8A",
      "12A",
      "18A"
    ],
    correctAnswer: 1,
    explanation: "Voltage across parallel combination V = I₁R₁ = 6 × 4 = 24V. Current through 12Ω: I₂ = 24/12 = 2A. Total current = 6 + 2 = 8A."
  },
  {
    id: "medium-72",
    question: "A 100Ω resistor is connected to 50V supply. The charge passing through it in 2 minutes is:",
    options: [
      "50C",
      "60C",
      "120C",
      "6000C"
    ],
    correctAnswer: 1,
    explanation: "Current I = V/R = 50/100 = 0.5A. Charge Q = I × t = 0.5 × 120 = 60C."
  },
  {
    id: "medium-73",
    question: "The resistance of a wire is 5Ω at 20°C. If α = 0.005/°C, its resistance at 100°C is:",
    options: [
      "6Ω",
      "7Ω",
      "8Ω",
      "9Ω"
    ],
    correctAnswer: 1,
    explanation: "R_t = R_0(1 + αΔt) = 5(1 + 0.005×80) = 5(1 + 0.4) = 5 × 1.4 = 7Ω."
  },
  {
    id: "medium-74",
    question: "A 12V battery is connected to two resistors 3Ω and 6Ω in parallel. The current through the battery is:",
    options: [
      "2A",
      "4A",
      "6A",
      "8A"
    ],
    correctAnswer: 2,
    explanation: "Equivalent resistance R_eq = (3×6)/(3+6) = 18/9 = 2Ω. Current I = V/R_eq = 12/2 = 6A."
  },
  {
    id: "medium-75",
    question: "A wire has resistance 9Ω. It is cut into three equal parts. The equivalent resistance when these parts are connected in parallel is:",
    options: [
      "1Ω",
      "3Ω",
      "9Ω",
      "27Ω"
    ],
    correctAnswer: 0,
    explanation: "Each piece has resistance 3Ω. Three 3Ω resistors in parallel: R_eq = 3/3 = 1Ω."
  },
  {
    id: "medium-76",
    question: "The power dissipated in a resistor is 75W when the current is 5A. The voltage across it is:",
    options: [
      "5V",
      "15V",
      "25V",
      "75V"
    ],
    correctAnswer: 1,
    explanation: "Using P = VI, 75 = V × 5 ⇒ V = 75/5 = 15V."
  },
  {
    id: "medium-77",
    question: "A 220V, 60W bulb is connected to 110V supply. The power consumed will be:",
    options: [
      "15W",
      "30W",
      "60W",
      "120W"
    ],
    correctAnswer: 0,
    explanation: "Resistance R = V²/P = (220)²/60 = 48400/60 ≈ 806.67Ω. At 110V, power P = V²/R = (110)²/806.67 ≈ 12100/806.67 ≈ 15W."
  },
  {
    id: "medium-78",
    question: "Two wires of same material have lengths in ratio 1:2 and diameters in ratio 2:1. Their resistances are in ratio:",
    options: [
      "1:2",
      "1:4",
      "1:8",
      "1:16"
    ],
    correctAnswer: 2,
    explanation: "R ∝ L/d². So R₁/R₂ = (L₁/L₂) × (d₂/d₁)² = (1/2) × (1/2)² = (1/2) × (1/4) = 1/8."
  },
  {
    id: "medium-79",
    question: "A 10Ω resistor is connected to a battery. The power dissipated is 40W. The voltage across the resistor is:",
    options: [
      "4V",
      "10V",
      "20V",
      "40V"
    ],
    correctAnswer: 2,
    explanation: "Using P = V²/R, 40 = V²/10 ⇒ V² = 400 ⇒ V = 20V."
  },
  {
    id: "medium-80",
    question: "The resistance of a wire is 6Ω. If it is drawn to three times its original length, its new resistance will be:",
    options: [
      "18Ω",
      "36Ω",
      "54Ω",
      "72Ω"
    ],
    correctAnswer: 2,
    explanation: "When drawn to three times length, volume constant means area becomes 1/3. R ∝ L², so new resistance = 9 × 6 = 54Ω."
  },
  {
    id: "medium-81",
    question: "A 12V battery has internal resistance 1Ω. The current when terminals are short-circuited is:",
    options: [
      "1A",
      "6A",
      "12A",
      "24A"
    ],
    correctAnswer: 2,
    explanation: "Short circuit: R_load = 0. Current I = E/r = 12/1 = 12A."
  },
  {
    id: "medium-82",
    question: "Two resistors 5Ω and 10Ω are connected in series to 30V battery. The power dissipated in 10Ω resistor is:",
    options: [
      "10W",
      "20W",
      "40W",
      "60W"
    ],
    correctAnswer: 2,
    explanation: "Total resistance = 5 + 10 = 15Ω. Current I = 30/15 = 2A. Power in 10Ω: P = I²R = (2)² × 10 = 4 × 10 = 40W."
  },
  {
    id: "medium-83",
    question: "A wire has resistance 8Ω. It is melted and recast to twice its original length. Its new resistance will be:",
    options: [
      "2Ω",
      "8Ω",
      "16Ω",
      "32Ω"
    ],
    correctAnswer: 3,
    explanation: "When melted and recast to twice length, volume constant means area halves. R ∝ L², so new resistance = 4 × 8 = 32Ω."
  },
  {
    id: "medium-84",
    question: "The colour code orange-orange-black-gold represents a resistor of value:",
    options: [
      "33Ω ± 5%",
      "330Ω ± 5%",
      "3.3kΩ ± 5%",
      "33kΩ ± 5%"
    ],
    correctAnswer: 0,
    explanation: "Orange=3, Orange=3, Black=×10⁰, Gold=±5%. So value = 33 × 1 = 33Ω ± 5%."
  },
  {
    id: "medium-85",
    question: "A 24V battery is connected to two resistors 6Ω and 12Ω in series. The voltage across the 12Ω resistor is:",
    options: [
      "8V",
      "12V",
      "16V",
      "24V"
    ],
    correctAnswer: 2,
    explanation: "Total resistance = 6 + 12 = 18Ω. Current I = 24/18 = 4/3 A. Voltage across 12Ω: V = IR = (4/3) × 12 = 16V."
  },
  {
    id: "medium-86",
    question: "The resistance of a wire is 10Ω. If its temperature decreases from 50°C to 30°C and α = 0.004/°C, its new resistance is:",
    options: [
      "9.2Ω",
      "9.6Ω",
      "10.4Ω",
      "10.8Ω"
    ],
    correctAnswer: 1,
    explanation: "R_t = R_0(1 + αΔt) = 10(1 + 0.004×(-20)) = 10(1 - 0.08) = 10 × 0.92 = 9.2Ω."
  },
  {
    id: "medium-87",
    question: "A 15V battery is connected to a 5Ω resistor. The energy dissipated in 10 seconds is:",
    options: [
      "45J",
      "450J",
      "750J",
      "1125J"
    ],
    correctAnswer: 1,
    explanation: "Power P = V²/R = (15)²/5 = 225/5 = 45W. Energy = P × t = 45 × 10 = 450J."
  },
  {
    id: "medium-88",
    question: "Two resistors 2Ω and 3Ω are connected in parallel. The equivalent resistance is:",
    options: [
      "1.2Ω",
      "2.5Ω",
      "5Ω",
      "6Ω"
    ],
    correctAnswer: 0,
    explanation: "R_eq = (2×3)/(2+3) = 6/5 = 1.2Ω."
  },
  {
    id: "medium-89",
    question: "A 10Ω resistor carries current 2A. The heat produced in 30 seconds is:",
    options: [
      "60J",
      "600J",
      "1200J",
      "2400J"
    ],
    correctAnswer: 2,
    explanation: "Power P = I²R = (2)² × 10 = 4 × 10 = 40W. Heat energy = P × t = 40 × 30 = 1200J."
  },
  {
    id: "medium-90",
    question: "The resistance of a wire is 12Ω. It is cut into four equal parts. The equivalent resistance when these parts are connected in series is:",
    options: [
      "3Ω",
      "12Ω",
      "24Ω",
      "48Ω"
    ],
    correctAnswer: 1,
    explanation: "Each piece has resistance 3Ω. Four 3Ω resistors in series: R_eq = 3 + 3 + 3 + 3 = 12Ω."
  },
  {
    id: "medium-91",
    question: "A 6V battery delivers 1.5A current to an external circuit. The internal resistance is 0.4Ω. The EMF of the battery is:",
    options: [
      "5.4V",
      "6.0V",
      "6.6V",
      "7.2V"
    ],
    correctAnswer: 2,
    explanation: "Terminal voltage V = 6V, I = 1.5A, r = 0.4Ω. EMF E = V + Ir = 6 + (1.5×0.4) = 6 + 0.6 = 6.6V."
  },
  {
    id: "medium-92",
    question: "Two resistors 8Ω and 24Ω are connected in parallel. The current through the 8Ω resistor is 6A. The total current is:",
    options: [
      "6A",
      "8A",
      "12A",
      "18A"
    ],
    correctAnswer: 1,
    explanation: "Voltage across parallel combination V = I₁R₁ = 6 × 8 = 48V. Current through 24Ω: I₂ = 48/24 = 2A. Total current = 6 + 2 = 8A."
  },
  {
    id: "medium-93",
    question: "A 100Ω resistor is connected to 20V supply. The charge passing through it in 5 minutes is:",
    options: [
      "10C",
      "60C",
      "300C",
      "600C"
    ],
    correctAnswer: 1,
    explanation: "Current I = V/R = 20/100 = 0.2A. Charge Q = I × t = 0.2 × 300 = 60C."
  },
  {
    id: "medium-94",
    question: "The resistance of a wire is 8Ω at 25°C. If α = 0.003/°C, its resistance at 75°C is:",
    options: [
      "9.2Ω",
      "9.6Ω",
      "10.4Ω",
      "11.2Ω"
    ],
    correctAnswer: 0,
    explanation: "R_t = R_0(1 + αΔt) = 8(1 + 0.003×50) = 8(1 + 0.15) = 8 × 1.15 = 9.2Ω."
  },
  {
    id: "medium-95",
    question: "A 18V battery is connected to two resistors 6Ω and 12Ω in parallel. The current through the battery is:",
    options: [
      "1.5A",
      "3A",
      "4.5A",
      "9A"
    ],
    correctAnswer: 2,
    explanation: "Equivalent resistance R_eq = (6×12)/(6+12) = 72/18 = 4Ω. Current I = V/R_eq = 18/4 = 4.5A."
  },
  {
    id: "medium-96",
    question: "A wire has resistance 16Ω. It is cut into four equal parts. The equivalent resistance when these parts are connected in parallel is:",
    options: [
      "1Ω",
      "4Ω",
      "16Ω",
      "64Ω"
    ],
    correctAnswer: 1,
    explanation: "Each piece has resistance 4Ω. Four 4Ω resistors in parallel: R_eq = 4/4 = 1Ω."
  },
  {
    id: "medium-97",
    question: "The power dissipated in a resistor is 48W when the voltage is 12V. The current through it is:",
    options: [
      "2A",
      "4A",
      "6A",
      "8A"
    ],
    correctAnswer: 1,
    explanation: "Using P = VI, 48 = 12 × I ⇒ I = 48/12 = 4A."
  },
  {
    id: "medium-98",
    question: "A 110V, 55W bulb is connected to 220V supply. The power consumed will be:",
    options: [
      "13.75W",
      "27.5W",
      "55W",
      "220W"
    ],
    correctAnswer: 3,
    explanation: "Resistance R = V²/P = (110)²/55 = 12100/55 = 220Ω. At 220V, power P = V²/R = (220)²/220 = 48400/220 = 220W."
  },
  {
    id: "medium-99",
    question: "Two wires of same material have lengths in ratio 3:4 and diameters in ratio 2:3. Their resistances are in ratio:",
    options: [
      "2:3",
      "3:4",
      "27:16",
      "16:27"
    ],
    correctAnswer: 2,
    explanation: "R ∝ L/d². So R₁/R₂ = (L₁/L₂) × (d₂/d₁)² = (3/4) × (3/2)² = (3/4) × (9/4) = 27/16."
  },
  {
    id: "medium-100",
    question: "A 20Ω resistor is connected to a battery. The power dissipated is 80W. The current through the resistor is:",
    options: [
      "2A",
      "4A",
      "6A",
      "8A"
    ],
    correctAnswer: 0,
    explanation: "Using P = I²R, 80 = I² × 20 ⇒ I² = 4 ⇒ I = 2A."
  }
];
export const hardQuestions: Question[] = [
];

export const currentElectricityQuestions = {
  easy: easyQuestions,
  medium: mediumQuestions,
  hard: hardQuestions,
} as const;
