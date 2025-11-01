// FSc/MDCAT Force & Motion MCQs (100 per level), calculation-focused
// Assumption: g = 9.8 m/s^2 unless otherwise stated.

export type Difficulty = keyof typeof electronicsQuestions;

export interface Question {
  id: string;
  question: string;
  options: string[];
  correctAnswer: number;
  explanation: string;
}

export const easyQuestions: Question[] = [
  {
    id: "easy-1",
    question: "What is the process of converting alternating current (AC) to direct current (DC) called?",
    options: [
      "Amplification",
      "Rectification",
      "Modulation",
      "Oscillation"
    ],
    correctAnswer: 1,
    explanation: "Rectification is the process of converting alternating current (AC) to direct current (DC) using electronic components like diodes."
  },
  {
    id: "easy-2",
    question: "Which electronic component is primarily used for rectification?",
    options: [
      "Transistor",
      "Resistor",
      "Diode",
      "Capacitor"
    ],
    correctAnswer: 2,
    explanation: "Diodes are used for rectification because they allow current to flow in only one direction, which is essential for converting AC to DC."
  },
  {
    id: "easy-3",
    question: "What is formed at the boundary between P-type and N-type semiconductor materials?",
    options: [
      "Transistor junction",
      "PN junction",
      "Capacitor plate",
      "Resistive layer"
    ],
    correctAnswer: 1,
    explanation: "A PN junction is formed when P-type and N-type semiconductor materials are joined together, creating a boundary with unique electrical properties."
  },
  {
    id: "easy-4",
    question: "In which bias does a PN junction allow current to flow easily?",
    options: [
      "Reverse bias",
      "Forward bias",
      "Zero bias",
      "Alternating bias"
    ],
    correctAnswer: 1,
    explanation: "In forward bias, the PN junction allows current to flow easily because the external voltage reduces the depletion region barrier."
  },
  {
    id: "easy-5",
    question: "How many diodes are required for half-wave rectification?",
    options: [
      "One",
      "Two",
      "Four",
      "Eight"
    ],
    correctAnswer: 0,
    explanation: "Half-wave rectification requires only one diode, which allows current to flow during only one half of the AC cycle."
  },
  {
    id: "easy-6",
    question: "What is the main disadvantage of half-wave rectification?",
    options: [
      "High cost",
      "Large size",
      "Low efficiency",
      "Complex circuitry"
    ],
    correctAnswer: 2,
    explanation: "Half-wave rectification has low efficiency because it utilizes only one half of the AC input cycle, wasting the other half."
  },
  {
    id: "easy-7",
    question: "How many diodes are used in a full-wave bridge rectifier?",
    options: [
      "One",
      "Two",
      "Four",
      "Six"
    ],
    correctAnswer: 2,
    explanation: "A full-wave bridge rectifier uses four diodes arranged in a bridge configuration to rectify both halves of the AC cycle."
  },
  {
    id: "easy-8",
    question: "In reverse bias, the depletion region of a PN junction:",
    options: [
      "Disappears",
      "Becomes narrower",
      "Becomes wider",
      "Changes color"
    ],
    correctAnswer: 2,
    explanation: "In reverse bias, the depletion region becomes wider because the applied voltage attracts charge carriers away from the junction."
  },
  {
    id: "easy-9",
    question: "What type of current does a rectifier produce?",
    options: [
      "Pure AC",
      "Pure DC",
      "Pulsating DC",
      "Alternating DC"
    ],
    correctAnswer: 2,
    explanation: "A rectifier produces pulsating DC, which is DC that varies in magnitude but not in direction."
  },
  {
    id: "easy-10",
    question: "What is added to a rectifier circuit to smooth the pulsating DC?",
    options: [
      "Resistor",
      "Inductor",
      "Capacitor",
      "Transistor"
    ],
    correctAnswer: 2,
    explanation: "A capacitor is added across the output to act as a filter, smoothing the pulsating DC into a more steady DC voltage."
  },
  {
    id: "easy-11",
    question: "Which rectifier configuration uses a center-tapped transformer?",
    options: [
      "Half-wave rectifier",
      "Full-wave bridge rectifier",
      "Center-tapped full-wave rectifier",
      "Voltage doubler"
    ],
    correctAnswer: 2,
    explanation: "A center-tapped full-wave rectifier uses a transformer with a center tap on the secondary winding and two diodes."
  },
  {
    id: "easy-12",
    question: "In forward bias, the positive terminal of the battery is connected to the:",
    options: [
      "N-type material",
      "P-type material",
      "Depletion region",
      "Junction boundary"
    ],
    correctAnswer: 1,
    explanation: "In forward bias, the positive terminal of the battery is connected to the P-type material, and the negative terminal to the N-type material."
  },
  {
    id: "easy-13",
    question: "What is the efficiency of a half-wave rectifier?",
    options: [
      "25.6%",
      "40.6%",
      "81.2%",
      "100%"
    ],
    correctAnswer: 1,
    explanation: "The maximum efficiency of a half-wave rectifier is approximately 40.6%, which is quite low compared to full-wave rectifiers."
  },
  {
    id: "easy-14",
    question: "What is the efficiency of a full-wave rectifier?",
    options: [
      "40.6%",
      "81.2%",
      "90.5%",
      "100%"
    ],
    correctAnswer: 1,
    explanation: "The maximum efficiency of a full-wave rectifier is approximately 81.2%, which is significantly higher than half-wave rectification."
  },
  {
    id: "easy-15",
    question: "The region around a PN junction that is depleted of charge carriers is called:",
    options: [
      "Conduction region",
      "Depletion region",
      "Saturation region",
      "Active region"
    ],
    correctAnswer: 1,
    explanation: "The depletion region is the area around the PN junction that becomes devoid of free charge carriers due to diffusion and recombination."
  },
  {
    id: "easy-16",
    question: "Which bias condition produces a very small reverse saturation current?",
    options: [
      "Forward bias",
      "Reverse bias",
      "Zero bias",
      "Alternating bias"
    ],
    correctAnswer: 1,
    explanation: "In reverse bias, a very small current called reverse saturation current flows due to minority carriers."
  },
  {
    id: "easy-17",
    question: "What is the typical value of forward voltage for a silicon diode?",
    options: [
      "0.3 V",
      "0.7 V",
      "1.2 V",
      "2.0 V"
    ],
    correctAnswer: 1,
    explanation: "A silicon diode typically requires about 0.7 volts of forward bias to start conducting significantly."
  },
  {
    id: "easy-18",
    question: "What is the typical value of forward voltage for a germanium diode?",
    options: [
      "0.3 V",
      "0.7 V",
      "1.2 V",
      "2.0 V"
    ],
    correctAnswer: 0,
    explanation: "A germanium diode typically requires about 0.3 volts of forward bias to start conducting significantly."
  },
  {
    id: "easy-19",
    question: "Which rectifier has better voltage regulation?",
    options: [
      "Half-wave rectifier",
      "Full-wave rectifier",
      "Both have same regulation",
      "Neither has regulation"
    ],
    correctAnswer: 1,
    explanation: "Full-wave rectifiers have better voltage regulation because they produce less ripple and utilize both halves of the AC cycle."
  },
  {
    id: "easy-20",
    question: "What happens to a PN junction in reverse bias when the voltage exceeds the breakdown voltage?",
    options: [
      "It stops conducting",
      "It conducts heavily",
      "It becomes unstable",
      "It changes polarity"
    ],
    correctAnswer: 1,
    explanation: "When reverse bias voltage exceeds the breakdown voltage, the junction experiences avalanche or zener breakdown and conducts heavily."
  },
  {
    id: "easy-21",
    question: "Which device uses the reverse breakdown characteristic of a PN junction for voltage regulation?",
    options: [
      "LED",
      "Zener diode",
      "Rectifier diode",
      "Photodiode"
    ],
    correctAnswer: 1,
    explanation: "Zener diodes are specifically designed to operate in the reverse breakdown region and are used for voltage regulation."
  },
  {
    id: "easy-22",
    question: "In a half-wave rectifier, the output frequency is:",
    options: [
      "Equal to input frequency",
      "Twice the input frequency",
      "Half the input frequency",
      "Four times the input frequency"
    ],
    correctAnswer: 0,
    explanation: "In a half-wave rectifier, the output frequency is equal to the input AC frequency since only one half-cycle is rectified."
  },
  {
    id: "easy-23",
    question: "In a full-wave rectifier, the output frequency is:",
    options: [
      "Equal to input frequency",
      "Twice the input frequency",
      "Half the input frequency",
      "Four times the input frequency"
    ],
    correctAnswer: 1,
    explanation: "In a full-wave rectifier, the output frequency is twice the input AC frequency because both half-cycles are rectified."
  },
  {
    id: "easy-24",
    question: "What is the purpose of a transformer in a rectifier circuit?",
    options: [
      "To convert DC to AC",
      "To step up or step down AC voltage",
      "To filter the output",
      "To amplify the current"
    ],
    correctAnswer: 1,
    explanation: "A transformer is used to step up or step down the AC voltage before rectification to achieve the desired DC output voltage."
  },
  {
    id: "easy-25",
    question: "Which rectifier configuration does not require a center-tapped transformer?",
    options: [
      "Half-wave rectifier",
      "Center-tapped full-wave rectifier",
      "Bridge rectifier",
      "Both A and C"
    ],
    correctAnswer: 3,
    explanation: "Both half-wave rectifiers and bridge rectifiers do not require a center-tapped transformer."
  },
  {
    id: "easy-26",
    question: "The knee voltage for a silicon diode is approximately:",
    options: [
      "0.3 V",
      "0.7 V",
      "1.4 V",
      "2.1 V"
    ],
    correctAnswer: 1,
    explanation: "The knee voltage (or cut-in voltage) for a silicon diode is approximately 0.7 volts, where it begins to conduct significantly."
  },
  {
    id: "easy-27",
    question: "What is the primary function of a diode in a rectifier circuit?",
    options: [
      "To amplify current",
      "To store charge",
      "To allow current in one direction only",
      "To regulate voltage"
    ],
    correctAnswer: 2,
    explanation: "The primary function of a diode in a rectifier is to allow current to flow in only one direction, converting AC to pulsating DC."
  },
  {
    id: "easy-28",
    question: "Which type of biasing causes the depletion region to narrow?",
    options: [
      "Reverse bias",
      "Forward bias",
      "Zero bias",
      "Breakdown bias"
    ],
    correctAnswer: 1,
    explanation: "Forward bias causes the depletion region to narrow as the applied voltage opposes the built-in potential of the junction."
  },
  {
    id: "easy-29",
    question: "What is the main advantage of a bridge rectifier over a center-tapped rectifier?",
    options: [
      "Higher efficiency",
      "Lower cost",
      "No need for center-tapped transformer",
      "Smaller size"
    ],
    correctAnswer: 2,
    explanation: "The main advantage of a bridge rectifier is that it doesn't require a center-tapped transformer, which can be more expensive and bulky."
  },
  {
    id: "easy-30",
    question: "Which current flows through a diode in reverse bias?",
    options: [
      "Forward current",
      "Reverse saturation current",
      "Breakdown current",
      "Zero current"
    ],
    correctAnswer: 1,
    explanation: "In reverse bias, a very small current called reverse saturation current flows due to minority carriers."
  },
  {
    id: "easy-31",
    question: "What is the typical value of reverse saturation current for a silicon diode?",
    options: [
      "1 μA",
      "10 μA",
      "1 mA",
      "10 mA"
    ],
    correctAnswer: 0,
    explanation: "The reverse saturation current for a silicon diode is typically in the nanoampere to microampere range (very small)."
  },
  {
    id: "easy-32",
    question: "Which material is commonly used for making semiconductor diodes?",
    options: [
      "Copper",
      "Silicon",
      "Aluminum",
      "Iron"
    ],
    correctAnswer: 1,
    explanation: "Silicon is the most commonly used material for making semiconductor diodes due to its suitable properties and abundance."
  },
  {
    id: "easy-33",
    question: "What happens to the resistance of a PN junction in forward bias?",
    options: [
      "Increases",
      "Decreases",
      "Remains constant",
      "Becomes infinite"
    ],
    correctAnswer: 1,
    explanation: "In forward bias, the resistance of the PN junction decreases significantly, allowing current to flow easily."
  },
  {
    id: "easy-34",
    question: "What happens to the resistance of a PN junction in reverse bias?",
    options: [
      "Increases",
      "Decreases",
      "Remains constant",
      "Becomes zero"
    ],
    correctAnswer: 0,
    explanation: "In reverse bias, the resistance of the PN junction increases greatly, allowing only a very small current to flow."
  },
  {
    id: "easy-35",
    question: "Which component is used to convert pulsating DC to smooth DC?",
    options: [
      "Rectifier",
      "Filter",
      "Amplifier",
      "Oscillator"
    ],
    correctAnswer: 1,
    explanation: "A filter circuit (typically using capacitors) is used to convert pulsating DC to smooth DC by reducing the ripple."
  },
  {
    id: "easy-36",
    question: "What is the ripple factor of a half-wave rectifier?",
    options: [
      "0.482",
      "0.812",
      "1.21",
      "1.57"
    ],
    correctAnswer: 2,
    explanation: "The ripple factor for a half-wave rectifier is approximately 1.21, indicating significant AC component in the output."
  },
  {
    id: "easy-37",
    question: "What is the ripple factor of a full-wave rectifier?",
    options: [
      "0.482",
      "0.812",
      "1.21",
      "1.57"
    ],
    correctAnswer: 0,
    explanation: "The ripple factor for a full-wave rectifier is approximately 0.482, indicating less AC component compared to half-wave rectification."
  },
  {
    id: "easy-38",
    question: "Which rectifier has higher ripple content in the output?",
    options: [
      "Half-wave rectifier",
      "Full-wave rectifier",
      "Both have same ripple",
      "Neither has ripple"
    ],
    correctAnswer: 0,
    explanation: "Half-wave rectifiers have higher ripple content (ripple factor 1.21) compared to full-wave rectifiers (ripple factor 0.482)."
  },
  {
    id: "easy-39",
    question: "What is the peak inverse voltage (PIV) for a half-wave rectifier?",
    options: [
      "V_m",
      "2V_m",
      "V_m/2",
      "4V_m"
    ],
    correctAnswer: 0,
    explanation: "The peak inverse voltage (PIV) for a half-wave rectifier is V_m, the maximum value of the input AC voltage."
  },
  {
    id: "easy-40",
    question: "What is the peak inverse voltage (PIV) for a center-tapped full-wave rectifier?",
    options: [
      "V_m",
      "2V_m",
      "V_m/2",
      "4V_m"
    ],
    correctAnswer: 1,
    explanation: "The PIV for a center-tapped full-wave rectifier is 2V_m, which is twice the maximum value of the input AC voltage."
  },
  {
    id: "easy-41",
    question: "What is the peak inverse voltage (PIV) for a bridge rectifier?",
    options: [
      "V_m",
      "2V_m",
      "V_m/2",
      "4V_m"
    ],
    correctAnswer: 0,
    explanation: "The PIV for a bridge rectifier is V_m, the maximum value of the input AC voltage, which is an advantage over center-tapped configuration."
  },
  {
    id: "easy-42",
    question: "Which rectifier configuration has the highest PIV rating requirement?",
    options: [
      "Half-wave rectifier",
      "Bridge rectifier",
      "Center-tapped full-wave rectifier",
      "All have same PIV"
    ],
    correctAnswer: 2,
    explanation: "The center-tapped full-wave rectifier requires diodes with PIV rating of 2V_m, which is higher than other configurations."
  },
  {
    id: "easy-43",
    question: "What is the form factor of a half-wave rectifier?",
    options: [
      "1.11",
      "1.57",
      "1.73",
      "2.22"
    ],
    correctAnswer: 1,
    explanation: "The form factor for a half-wave rectifier is π/2 ≈ 1.57, which is the ratio of RMS value to average value of output."
  },
  {
    id: "easy-44",
    question: "What is the form factor of a full-wave rectifier?",
    options: [
      "1.11",
      "1.57",
      "1.73",
      "2.22"
    ],
    correctAnswer: 0,
    explanation: "The form factor for a full-wave rectifier is π/(2√2) ≈ 1.11, which is lower than that of half-wave rectification."
  },
  {
    id: "easy-45",
    question: "Which rectifier has better form factor?",
    options: [
      "Half-wave rectifier",
      "Full-wave rectifier",
      "Both have same form factor",
      "Form factor is not applicable"
    ],
    correctAnswer: 1,
    explanation: "Full-wave rectifiers have a better (lower) form factor (1.11) compared to half-wave rectifiers (1.57)."
  },
  {
    id: "easy-46",
    question: "What is the peak factor of a half-wave rectified sine wave?",
    options: [
      "1.414",
      "2.0",
      "1.57",
      "1.11"
    ],
    correctAnswer: 1,
    explanation: "The peak factor (crest factor) for a half-wave rectified sine wave is 2.0, which is the ratio of peak value to RMS value."
  },
  {
    id: "easy-47",
    question: "What is the peak factor of a full-wave rectified sine wave?",
    options: [
      "1.414",
      "2.0",
      "1.57",
      "1.11"
    ],
    correctAnswer: 0,
    explanation: "The peak factor for a full-wave rectified sine wave is √2 ≈ 1.414, which is the same as for a pure sine wave."
  },
  {
    id: "easy-48",
    question: "Which device is used to protect circuits from reverse voltage?",
    options: [
      "Transistor",
      "Capacitor",
      "Diode",
      "Resistor"
    ],
    correctAnswer: 2,
    explanation: "Diodes are often used as protection devices to prevent damage from reverse voltage by blocking current flow in the reverse direction."
  },
  {
    id: "easy-49",
    question: "What is the typical reverse breakdown voltage for a standard rectifier diode?",
    options: [
      "0.7 V",
      "5-10 V",
      "50-100 V",
      "1000 V"
    ],
    correctAnswer: 2,
    explanation: "Standard rectifier diodes typically have reverse breakdown voltages in the range of 50-100 volts or higher, depending on the specific diode."
  },
  {
    id: "easy-50",
    question: "Which type of diode is specifically designed for rectification purposes?",
    options: [
      "Zener diode",
      "LED",
      "Rectifier diode",
      "Photodiode"
    ],
    correctAnswer: 2,
    explanation: "Rectifier diodes are specifically designed and optimized for power rectification applications, with appropriate current and voltage ratings."
  },
  {
    id: "easy-51",
    question: "In a PN junction, the potential barrier is due to:",
    options: [
      "Applied voltage",
      "Diffusion of charges",
      "Recombination of charges",
      "Formation of depletion region"
    ],
    correctAnswer: 3,
    explanation: "The potential barrier in a PN junction is due to the formation of the depletion region, which creates an electric field that opposes further diffusion."
  },
  {
    id: "easy-52",
    question: "What is the typical width of the depletion region in a PN junction?",
    options: [
      "1-10 μm",
      "0.1-1 μm",
      "1-10 nm",
      "10-100 nm"
    ],
    correctAnswer: 1,
    explanation: "The depletion region in a typical PN junction is about 0.1 to 1 micrometer wide, depending on the doping concentrations."
  },
  {
    id: "easy-53",
    question: "Which bias condition is used in voltage regulation applications?",
    options: [
      "Forward bias",
      "Reverse bias below breakdown",
      "Reverse bias at breakdown",
      "Zero bias"
    ],
    correctAnswer: 2,
    explanation: "Reverse bias at breakdown is used in Zener diodes for voltage regulation applications, where the voltage remains constant despite current changes."
  },
  {
    id: "easy-54",
    question: "What is the main application of half-wave rectifiers?",
    options: [
      "High power applications",
      "Low power applications",
      "Voltage doubling",
      "Current amplification"
    ],
    correctAnswer: 1,
    explanation: "Half-wave rectifiers are mainly used in low power applications where efficiency is not critical, due to their simplicity but low efficiency."
  },
  {
    id: "easy-55",
    question: "What is the main application of full-wave rectifiers?",
    options: [
      "Low power applications",
      "High power applications",
      "Signal detection",
      "Voltage regulation"
    ],
    correctAnswer: 1,
    explanation: "Full-wave rectifiers are used in high power applications where better efficiency and lower ripple are required."
  },
  {
    id: "easy-56",
    question: "Which type of rectifier is commonly used in power supplies for electronic equipment?",
    options: [
      "Half-wave rectifier",
      "Bridge rectifier",
      "Center-tapped rectifier",
      "Voltage doubler"
    ],
    correctAnswer: 1,
    explanation: "Bridge rectifiers are commonly used in power supplies for electronic equipment due to their high efficiency and no requirement for center-tapped transformers."
  },
  {
    id: "easy-57",
    question: "What is the effect of temperature on the forward voltage drop of a diode?",
    options: [
      "Increases with temperature",
      "Decreases with temperature",
      "Remains constant",
      "Becomes zero"
    ],
    correctAnswer: 1,
    explanation: "The forward voltage drop of a diode decreases with increasing temperature (approximately -2 mV/°C for silicon diodes)."
  },
  {
    id: "easy-58",
    question: "What is the effect of temperature on reverse saturation current?",
    options: [
      "Increases with temperature",
      "Decreases with temperature",
      "Remains constant",
      "Becomes zero"
    ],
    correctAnswer: 0,
    explanation: "Reverse saturation current approximately doubles for every 10°C increase in temperature, making it highly temperature dependent."
  },
  {
    id: "easy-59",
    question: "Which material has higher reverse saturation current at room temperature?",
    options: [
      "Silicon diode",
      "Germanium diode",
      "Both have same",
      "Cannot be determined"
    ],
    correctAnswer: 1,
    explanation: "Germanium diodes have significantly higher reverse saturation current compared to silicon diodes at room temperature."
  },
  {
    id: "easy-60",
    question: "What is the typical operating temperature range for silicon diodes?",
    options: [
      "-55°C to +75°C",
      "-65°C to +150°C",
      "-25°C to +50°C",
      "0°C to +100°C"
    ],
    correctAnswer: 1,
    explanation: "Silicon diodes typically have an operating temperature range of -65°C to +150°C, making them suitable for various environments."
  },
  {
    id: "easy-61",
    question: "Which type of rectifier has higher transformer utilization factor?",
    options: [
      "Half-wave rectifier",
      "Full-wave rectifier",
      "Both have same",
      "Transformer utilization is not applicable"
    ],
    correctAnswer: 1,
    explanation: "Full-wave rectifiers have higher transformer utilization factor because both halves of the secondary winding are used effectively."
  },
  {
    id: "easy-62",
    question: "What is the typical value of transformer utilization factor for half-wave rectifier?",
    options: [
      "0.287",
      "0.693",
      "0.812",
      "1.0"
    ],
    correctAnswer: 0,
    explanation: "The transformer utilization factor for half-wave rectifier is approximately 0.287, indicating poor utilization of the transformer."
  },
  {
    id: "easy-63",
    question: "What is the typical value of transformer utilization factor for full-wave rectifier?",
    options: [
      "0.287",
      "0.693",
      "0.812",
      "1.0"
    ],
    correctAnswer: 1,
    explanation: "The transformer utilization factor for full-wave rectifier is approximately 0.693, indicating better utilization than half-wave rectification."
  },
  {
    id: "easy-64",
    question: "Which rectifier has better transformer utilization?",
    options: [
      "Half-wave rectifier",
      "Full-wave rectifier",
      "Both have same utilization",
      "Utilization is not important"
    ],
    correctAnswer: 1,
    explanation: "Full-wave rectifiers have better transformer utilization factor (0.693) compared to half-wave rectifiers (0.287)."
  },
  {
    id: "easy-65",
    question: "What is the purpose of a heat sink in power rectifier circuits?",
    options: [
      "To increase efficiency",
      "To reduce ripple",
      "To dissipate heat",
      "To improve regulation"
    ],
    correctAnswer: 2,
    explanation: "Heat sinks are used to dissipate heat generated by power diodes during operation, preventing thermal damage and ensuring reliable performance."
  },
  {
    id: "easy-66",
    question: "Which type of diode has the fastest switching speed?",
    options: [
      "Standard rectifier diode",
      "Zener diode",
      "Schottky diode",
      "LED"
    ],
    correctAnswer: 2,
    explanation: "Schottky diodes have the fastest switching speed because they are majority carrier devices with no minority carrier storage time."
  },
  {
    id: "easy-67",
    question: "What is the typical forward voltage drop of a Schottky diode?",
    options: [
      "0.2-0.3 V",
      "0.7 V",
      "1.2 V",
      "2.0 V"
    ],
    correctAnswer: 0,
    explanation: "Schottky diodes have a lower forward voltage drop (typically 0.2-0.3 volts) compared to standard PN junction diodes."
  },
  {
    id: "easy-68",
    question: "Which application typically uses Schottky diodes?",
    options: [
      "High voltage rectification",
      "High frequency rectification",
      "Voltage regulation",
      "Light emission"
    ],
    correctAnswer: 1,
    explanation: "Schottky diodes are used in high frequency applications due to their fast switching speed and low forward voltage drop."
  },
  {
    id: "easy-69",
    question: "What is the main disadvantage of Schottky diodes?",
    options: [
      "High forward voltage",
      "High reverse leakage current",
      "Slow switching speed",
      "Large size"
    ],
    correctAnswer: 1,
    explanation: "Schottky diodes have relatively high reverse leakage current compared to PN junction diodes, which can be a disadvantage in some applications."
  },
  {
    id: "easy-70",
    question: "Which type of rectifier is used in battery charging circuits?",
    options: [
      "Half-wave rectifier",
      "Full-wave rectifier",
      "Both can be used",
      "Neither is used"
    ],
    correctAnswer: 2,
    explanation: "Both half-wave and full-wave rectifiers can be used in battery charging circuits, depending on the specific requirements and cost considerations."
  },
  {
    id: "easy-71",
    question: "What is the purpose of a freewheeling diode in rectifier circuits?",
    options: [
      "To improve efficiency",
      "To protect against voltage spikes",
      "To reduce ripple",
      "To increase voltage"
    ],
    correctAnswer: 1,
    explanation: "Freewheeling diodes are used to protect circuits from voltage spikes that occur when inductive loads are switched off."
  },
  {
    id: "easy-72",
    question: "Which parameter indicates the quality of DC output from a rectifier?",
    options: [
      "Efficiency",
      "Ripple factor",
      "Form factor",
      "Peak factor"
    ],
    correctAnswer: 1,
    explanation: "The ripple factor indicates the quality of DC output - a lower ripple factor means smoother DC output with less AC component."
  },
  {
    id: "easy-73",
    question: "What is the ideal value of ripple factor?",
    options: [
      "0",
      "1",
      "0.5",
      "2"
    ],
    correctAnswer: 0,
    explanation: "The ideal value of ripple factor is 0, which would indicate pure DC output with no AC component."
  },
  {
    id: "easy-74",
    question: "Which filter is most effective for reducing ripple in rectifier output?",
    options: [
      "Capacitor filter",
      "Inductor filter",
      "LC filter",
      "RC filter"
    ],
    correctAnswer: 2,
    explanation: "LC filters (inductor-capacitor filters) are most effective for reducing ripple as they provide better filtering action compared to single-component filters."
  },
  {
    id: "easy-75",
    question: "What is the typical value of smoothing capacitor in power supply filters?",
    options: [
      "1-10 pF",
      "10-100 nF",
      "100-1000 μF",
      "1-10 mF"
    ],
    correctAnswer: 2,
    explanation: "Smoothing capacitors in power supply filters are typically in the range of 100 to 1000 microfarads, depending on the current requirements."
  },
  {
    id: "easy-76",
    question: "Which type of biasing is used in photodiodes for light detection?",
    options: [
      "Forward bias",
      "Reverse bias",
      "Zero bias",
      "Alternating bias"
    ],
    correctAnswer: 1,
    explanation: "Photodiodes are typically operated in reverse bias for light detection applications, where light intensity affects the reverse current."
  },
  {
    id: "easy-77",
    question: "What happens to the reverse saturation current when light falls on a reverse-biased PN junction?",
    options: [
      "Decreases",
      "Increases",
      "Remains constant",
      "Becomes zero"
    ],
    correctAnswer: 1,
    explanation: "When light falls on a reverse-biased PN junction, it generates electron-hole pairs, increasing the reverse current proportionally to light intensity."
  },
  {
    id: "easy-78",
    question: "Which device converts light energy directly into electrical energy?",
    options: [
      "LED",
      "Photodiode",
      "Zener diode",
      "Rectifier diode"
    ],
    correctAnswer: 1,
    explanation: "Photodiodes convert light energy directly into electrical energy through the photovoltaic effect when operated in reverse bias."
  },
  {
    id: "easy-79",
    question: "What is the typical response time of a photodiode?",
    options: [
      "1-10 ms",
      "1-10 μs",
      "1-10 ns",
      "1-10 ps"
    ],
    correctAnswer: 2,
    explanation: "Photodiodes have fast response times, typically in the nanosecond range (1-10 ns), making them suitable for high-speed light detection."
  },
  {
    id: "easy-80",
    question: "Which type of diode emits light when forward biased?",
    options: [
      "Zener diode",
      "LED",
      "Photodiode",
      "Rectifier diode"
    ],
    correctAnswer: 1,
    explanation: "Light Emitting Diodes (LEDs) emit light when forward biased due to recombination of electrons and holes in the PN junction."
  },
  {
    id: "easy-81",
    question: "What determines the color of light emitted by an LED?",
    options: [
      "Forward current",
      "Reverse voltage",
      "Bandgap energy of semiconductor",
      "Size of the diode"
    ],
    correctAnswer: 2,
    explanation: "The color of light emitted by an LED is determined by the bandgap energy of the semiconductor material used in its construction."
  },
  {
    id: "easy-82",
    question: "Which material is used for making red LEDs?",
    options: [
      "Gallium Arsenide Phosphide (GaAsP)",
      "Gallium Nitride (GaN)",
      "Silicon (Si)",
      "Germanium (Ge)"
    ],
    correctAnswer: 0,
    explanation: "Red LEDs are typically made from Gallium Arsenide Phosphide (GaAsP) compounds, which have the appropriate bandgap for red light emission."
  },
  {
    id: "easy-83",
    question: "What is the typical forward voltage drop for a red LED?",
    options: [
      "1.8-2.2 V",
      "2.2-2.6 V",
      "3.0-3.4 V",
      "4.0-4.4 V"
    ],
    correctAnswer: 0,
    explanation: "Red LEDs typically have a forward voltage drop of about 1.8-2.2 volts when conducting."
  },
  {
    id: "easy-84",
    question: "What is the typical forward voltage drop for a blue LED?",
    options: [
      "1.8-2.2 V",
      "2.2-2.6 V",
      "3.0-3.4 V",
      "4.0-4.4 V"
    ],
    correctAnswer: 2,
    explanation: "Blue LEDs typically have a higher forward voltage drop of about 3.0-3.4 volts due to their larger bandgap energy."
  },
  {
    id: "easy-85",
    question: "Why is a current-limiting resistor used with LEDs?",
    options: [
      "To reduce voltage",
      "To limit current and prevent damage",
      "To change color",
      "To increase brightness"
    ],
    correctAnswer: 1,
    explanation: "A current-limiting resistor is used in series with LEDs to limit the current flow and prevent damage from excessive current."
  },
  {
    id: "easy-86",
    question: "What is the typical operating current for standard LEDs?",
    options: [
      "1-5 mA",
      "10-20 mA",
      "50-100 mA",
      "200-500 mA"
    ],
    correctAnswer: 1,
    explanation: "Standard LEDs typically operate at currents of 10-20 milliamps, though this can vary depending on the specific LED type and brightness requirements."
  },
  {
    id: "easy-87",
    question: "Which type of diode has a negative resistance region?",
    options: [
      "Zener diode",
      "Tunnel diode",
      "Rectifier diode",
      "Photodiode"
    ],
    correctAnswer: 1,
    explanation: "Tunnel diodes exhibit a negative resistance region in their current-voltage characteristic, where current decreases with increasing voltage."
  },
  {
    id: "easy-88",
    question: "What is the main application of tunnel diodes?",
    options: [
      "Power rectification",
      "High frequency oscillators",
      "Voltage regulation",
      "Light emission"
    ],
    correctAnswer: 1,
    explanation: "Tunnel diodes are used in high frequency oscillator and amplifier applications due to their negative resistance characteristics and fast switching speed."
  },
  {
    id: "easy-89",
    question: "Which type of diode is used for microwave applications?",
    options: [
      "Zener diode",
      "Varactor diode",
      "Rectifier diode",
      "LED"
    ],
    correctAnswer: 1,
    explanation: "Varactor diodes are used in microwave applications for voltage-controlled tuning, as their capacitance varies with applied reverse voltage."
  },
  {
    id: "easy-90",
    question: "What is the principle of operation of a varactor diode?",
    options: [
      "Voltage-dependent resistance",
      "Voltage-dependent capacitance",
      "Current-dependent inductance",
      "Light-dependent resistance"
    ],
    correctAnswer: 1,
    explanation: "Varactor diodes operate on the principle of voltage-dependent capacitance, where the junction capacitance varies with the applied reverse bias voltage."
  },
  {
    id: "easy-91",
    question: "Which type of diode is used for overvoltage protection?",
    options: [
      "LED",
      "Zener diode",
      "Varactor diode",
      "Tunnel diode"
    ],
    correctAnswer: 1,
    explanation: "Zener diodes are commonly used for overvoltage protection by clamping the voltage to their breakdown level when reverse biased."
  },
  {
    id: "easy-92",
    question: "What is the typical operating current for a Zener diode in regulation mode?",
    options: [
      "1-5 mA",
      "5-20 mA",
      "50-100 mA",
      "200-500 mA"
    ],
    correctAnswer: 1,
    explanation: "Zener diodes typically operate in the 5-20 milliampere range when used for voltage regulation, though this depends on the specific diode and power rating."
  },
  {
    id: "easy-93",
    question: "Which type of rectifier is used in automotive alternators?",
    options: [
      "Half-wave rectifier",
      "Bridge rectifier",
      "Center-tapped rectifier",
      "Voltage doubler"
    ],
    correctAnswer: 1,
    explanation: "Bridge rectifiers are commonly used in automotive alternators to convert the AC output to DC for charging the battery and powering electrical systems."
  },
  {
    id: "easy-94",
    question: "What is the typical output voltage of a silicon diode in forward conduction?",
    options: [
      "0.7 V",
      "1.4 V",
      "2.1 V",
      "5.0 V"
    ],
    correctAnswer: 0,
    explanation: "A silicon diode in forward conduction typically has a voltage drop of about 0.7 volts across it when conducting significant current."
  },
  {
    id: "easy-95",
    question: "Which test is used to identify the anode and cathode of an unknown diode?",
    options: [
      "Voltage test",
      "Current test",
      "Continuity test with multimeter",
      "Resistance test"
    ],
    correctAnswer: 2,
    explanation: "A multimeter's continuity or diode test function can be used to identify the anode and cathode by showing low resistance in one direction and high resistance in the other."
  },
  {
    id: "easy-96",
    question: "What should be the resistance reading when a multimeter is connected to a good diode in forward bias?",
    options: [
      "Very high resistance",
      "Very low resistance",
      "Infinite resistance",
      "Zero resistance"
    ],
    correctAnswer: 1,
    explanation: "A good diode should show very low resistance when forward biased (typically a few hundred ohms or less, depending on the meter)."
  },
  {
    id: "easy-97",
    question: "What should be the resistance reading when a multimeter is connected to a good diode in reverse bias?",
    options: [
      "Very high resistance",
      "Very low resistance",
      "Zero resistance",
      "Negative resistance"
    ],
    correctAnswer: 0,
    explanation: "A good diode should show very high resistance (typically several hundred kilohms or more) when reverse biased."
  },
  {
    id: "easy-98",
    question: "What does a very low resistance reading in both directions indicate for a diode?",
    options: [
      "The diode is good",
      "The diode is open",
      "The diode is shorted",
      "The diode is reversed"
    ],
    correctAnswer: 2,
    explanation: "Very low resistance in both directions indicates that the diode is shorted and needs to be replaced."
  },
  {
    id: "easy-99",
    question: "What does a very high resistance reading in both directions indicate for a diode?",
    options: [
      "The diode is good",
      "The diode is open",
      "The diode is shorted",
      "The diode is reversed"
    ],
    correctAnswer: 1,
    explanation: "Very high resistance in both directions indicates that the diode is open (failed) and needs to be replaced."
  },
  {
    id: "easy-100",
    question: "Which safety precaution is important when working with power rectifier circuits?",
    options: [
      "Wearing sunglasses",
      "Discharging capacitors before working",
      "Using plastic tools",
      "Working in wet conditions"
    ],
    correctAnswer: 1,
    explanation: "It's crucial to discharge large capacitors before working on power rectifier circuits, as they can store dangerous voltages even when the power is off."
  }
];

export const mediumQuestions: Question[] = [
   {
    id: "medium-1",
    question: "In a PN junction under thermal equilibrium, what is the relationship between drift and diffusion currents?",
    options: [
      "Drift current > Diffusion current",
      "Drift current < Diffusion current",
      "Drift current = Diffusion current",
      "No relationship exists"
    ],
    correctAnswer: 2,
    explanation: "Under thermal equilibrium, the drift current due to the built-in electric field exactly balances the diffusion current, resulting in zero net current."
  },
  {
    id: "medium-2",
    question: "What is the primary mechanism of current conduction in a forward-biased PN junction?",
    options: [
      "Drift of minority carriers",
      "Diffusion of majority carriers",
      "Tunneling effect",
      "Avalanche breakdown"
    ],
    correctAnswer: 1,
    explanation: "In forward bias, the primary conduction mechanism is diffusion of majority carriers across the junction where they become minority carriers."
  },
  {
    id: "medium-3",
    question: "The built-in potential barrier in a PN junction depends on:",
    options: [
      "Doping concentrations only",
      "Junction area only",
      "Both doping concentrations and temperature",
      "Applied voltage only"
    ],
    correctAnswer: 2,
    explanation: "The built-in potential V_bi = (kT/q)ln(N_A N_D/n_i²), so it depends on doping concentrations (N_A, N_D), temperature (T), and intrinsic carrier concentration (n_i)."
  },
  {
    id: "medium-4",
    question: "What is the mathematical expression for the ideal diode equation?",
    options: [
      "I = I_s(e^(V/V_T) - 1)",
      "I = I_s(e^(V/V_T) + 1)",
      "I = I_s(1 - e^(V/V_T))",
      "I = I_s(e^(V/V_T))"
    ],
    correctAnswer: 0,
    explanation: "The ideal diode equation is I = I_s(e^(V/ηV_T) - 1), where for ideal diode η=1, giving I = I_s(e^(V/V_T) - 1)."
  },
  {
    id: "medium-5",
    question: "In a full-wave bridge rectifier with capacitor filter, what happens to the ripple voltage when load current increases?",
    options: [
      "Ripple voltage decreases",
      "Ripple voltage increases",
      "Ripple voltage remains constant",
      "Ripple voltage becomes zero"
    ],
    correctAnswer: 1,
    explanation: "Ripple voltage V_r = I_L/(fC), so it increases proportionally with load current I_L and decreases with increasing frequency f and capacitance C."
  },
  {
    id: "medium-6",
    question: "What is the primary cause of reverse saturation current in a PN junction?",
    options: [
      "Majority carrier diffusion",
      "Minority carrier drift",
      "Thermal generation of electron-hole pairs",
      "Impact ionization"
    ],
    correctAnswer: 2,
    explanation: "Reverse saturation current is primarily due to thermal generation of electron-hole pairs in the depletion region and their subsequent drift under the electric field."
  },
  {
    id: "medium-7",
    question: "In a half-wave rectifier with capacitor input filter, the diode conduction angle:",
    options: [
      "Increases with increasing load current",
      "Decreases with increasing load current",
      "Is always 180 degrees",
      "Is independent of load current"
    ],
    correctAnswer: 1,
    explanation: "As load current increases, the capacitor discharges more quickly, reducing the time during which the diode conducts, thus decreasing the conduction angle."
  },
  {
    id: "medium-8",
    question: "What is the effect of temperature on the reverse saturation current I_s of a silicon diode?",
    options: [
      "I_s decreases with temperature",
      "I_s increases exponentially with temperature",
      "I_s remains constant",
      "I_s decreases linearly with temperature"
    ],
    correctAnswer: 1,
    explanation: "Reverse saturation current approximately doubles for every 10°C rise in temperature due to increased thermal generation of electron-hole pairs."
  },
  {
    id: "medium-9",
    question: "The depletion region width in a PN junction varies with applied bias as:",
    options: [
      "W ∝ √(V_bi + V_R) for reverse bias",
      "W ∝ √(V_bi - V_F) for forward bias",
      "W ∝ (V_bi + V_R) for reverse bias",
      "W is constant regardless of bias"
    ],
    correctAnswer: 0,
    explanation: "The depletion width W ∝ √(V_bi + V_R) for reverse bias and decreases in forward bias as W ∝ √(V_bi - V_F)."
  },
  {
    id: "medium-10",
    question: "What is the primary advantage of a bridge rectifier over a center-tapped full-wave rectifier?",
    options: [
      "Higher efficiency",
      "Lower PIV rating requirements",
      "No need for center-tapped transformer",
      "Better voltage regulation"
    ],
    correctAnswer: 2,
    explanation: "The main advantage is that a bridge rectifier doesn't require a center-tapped transformer, making it more cost-effective and simpler in design."
  },
  {
    id: "medium-11",
    question: "In a Zener diode voltage regulator, what happens to the series current when load resistance decreases?",
    options: [
      "Series current decreases",
      "Series current increases",
      "Series current remains constant",
      "Zener current becomes zero"
    ],
    correctAnswer: 1,
    explanation: "When load resistance decreases, load current increases. To maintain constant output voltage, the Zener current decreases, but the total series current from the source increases."
  },
  {
    id: "medium-12",
    question: "What is the primary mechanism of breakdown in a Zener diode with breakdown voltage < 5V?",
    options: [
      "Avalanche breakdown",
      "Zener breakdown",
      "Thermal breakdown",
      "Tunneling breakdown"
    ],
    correctAnswer: 3,
    explanation: "For breakdown voltages below about 5V, the primary mechanism is Zener breakdown (quantum mechanical tunneling), while avalanche breakdown dominates above 7V."
  },
  {
    id: "medium-13",
    question: "The dynamic resistance of a diode in forward bias is given by:",
    options: [
      "r_d = V_T/I",
      "r_d = I/V_T",
      "r_d = V_T/I_D",
      "r_d = I_D/V_T"
    ],
    correctAnswer: 2,
    explanation: "The dynamic resistance r_d = dV/dI ≈ ηV_T/I_D, which for η=1 gives r_d ≈ V_T/I_D, where V_T is the thermal voltage (kT/q ≈ 26mV at room temperature)."
  },
  {
    id: "medium-14",
    question: "What is the primary cause of the depletion region formation in a PN junction?",
    options: [
      "Applied external voltage",
      "Diffusion of majority carriers",
      "Drift of minority carriers",
      "Thermal generation"
    ],
    correctAnswer: 1,
    explanation: "The depletion region forms due to diffusion of majority carriers across the junction, leaving behind immobile ions that create the space charge region."
  },
  {
    id: "medium-15",
    question: "In a full-wave rectifier, the ripple frequency is:",
    options: [
      "Equal to input frequency",
      "Twice the input frequency",
      "Half the input frequency",
      "Four times the input frequency"
    ],
    correctAnswer: 1,
    explanation: "Since both half-cycles of the input AC are rectified, the output ripple frequency is twice the input frequency (2f for 50/60Hz input)."
  },
  {
    id: "medium-16",
    question: "What is the effect of increasing doping concentration on the depletion region width?",
    options: [
      "Increases depletion width",
      "Decreases depletion width",
      "No effect on depletion width",
      "Makes depletion width oscillate"
    ],
    correctAnswer: 1,
    explanation: "Higher doping concentrations result in narrower depletion regions because fewer carriers need to diffuse to establish the equilibrium condition."
  },
  {
    id: "medium-17",
    question: "The capacitance of a reverse-biased PN junction is primarily due to:",
    options: [
      "Diffusion capacitance",
      "Transition capacitance",
      "Storage capacitance",
      "Barrier capacitance"
    ],
    correctAnswer: 1,
    explanation: "In reverse bias, the dominant capacitance is transition capacitance (also called depletion capacitance or junction capacitance), which varies with applied voltage."
  },
  {
    id: "medium-18",
    question: "What is the primary application of a varactor diode?",
    options: [
      "Voltage regulation",
      "Rectification",
      "Voltage-controlled capacitance",
      "Current amplification"
    ],
    correctAnswer: 2,
    explanation: "Varactor diodes are used as voltage-controlled capacitors in tuning circuits, oscillators, and frequency multipliers due to their voltage-dependent capacitance."
  },
  {
    id: "medium-19",
    question: "In a PN junction, the diffusion current is proportional to:",
    options: [
      "The electric field",
      "The concentration gradient",
      "The temperature gradient",
      "The applied voltage"
    ],
    correctAnswer: 1,
    explanation: "Diffusion current follows Fick's law and is proportional to the concentration gradient of the charge carriers (dn/dx or dp/dx)."
  },
  {
    id: "medium-20",
    question: "What is the primary disadvantage of a half-wave rectifier compared to a full-wave rectifier?",
    options: [
      "Higher cost",
      "Larger size",
      "Poor transformer utilization",
      "Complex circuitry"
    ],
    correctAnswer: 2,
    explanation: "Half-wave rectifiers have poor transformer utilization factor (TUF ≈ 0.287) because only one half of the secondary winding is used during each cycle."
  },
  {
    id: "medium-21",
    question: "The breakdown voltage of a PN junction increases with:",
    options: [
      "Increasing doping concentration",
      "Decreasing doping concentration",
      "Increasing temperature",
      "Decreasing junction area"
    ],
    correctAnswer: 1,
    explanation: "Breakdown voltage increases with decreasing doping concentration because lower doping results in a wider depletion region that can sustain higher voltages."
  },
  {
    id: "medium-22",
    question: "What is the primary mechanism of current conduction in a reverse-biased PN junction?",
    options: [
      "Diffusion of majority carriers",
      "Drift of minority carriers",
      "Tunneling through barrier",
      "Thermal generation in depletion region"
    ],
    correctAnswer: 1,
    explanation: "In reverse bias, the primary conduction mechanism is drift of minority carriers that are generated in the depletion region or diffuse to its edges."
  },
  {
    id: "medium-23",
    question: "In a full-wave bridge rectifier, the peak inverse voltage (PIV) across each diode is:",
    options: [
      "V_m",
      "2V_m",
      "V_m/2",
      "4V_m"
    ],
    correctAnswer: 0,
    explanation: "In a bridge rectifier, the PIV rating required for each diode is V_m (the peak input voltage), which is an advantage over center-tapped configurations."
  },
  {
    id: "medium-24",
    question: "What is the effect of temperature on the forward voltage drop of a silicon diode?",
    options: [
      "Increases by 2mV/°C",
      "Decreases by 2mV/°C",
      "Remains constant",
      "Increases exponentially"
    ],
    correctAnswer: 1,
    explanation: "The forward voltage drop of a silicon diode decreases by approximately 2mV per °C increase in temperature due to increased intrinsic carrier concentration."
  },
  {
    id: "medium-25",
    question: "The transition capacitance of a reverse-biased PN junction varies with applied voltage as:",
    options: [
      "C_T ∝ V^(-1/2)",
      "C_T ∝ V^(-1)",
      "C_T ∝ V^(-2)",
      "C_T ∝ V^(1/2)"
    ],
    correctAnswer: 0,
    explanation: "For an abrupt junction, transition capacitance C_T ∝ 1/√(V_bi + V_R), so it varies inversely with the square root of the total reverse voltage."
  },
  {
    id: "medium-26",
    question: "What is the primary advantage of a Schottky diode over a PN junction diode?",
    options: [
      "Higher reverse breakdown voltage",
      "Lower forward voltage drop",
      "Higher current handling capability",
      "Better temperature stability"
    ],
    correctAnswer: 1,
    explanation: "Schottky diodes have lower forward voltage drop (0.2-0.3V vs 0.7V for silicon) and faster switching speed due to majority carrier operation."
  },
  {
    id: "medium-27",
    question: "In a voltage doubler circuit, what is the approximate DC output voltage?",
    options: [
      "V_m",
      "2V_m",
      "V_m/2",
      "4V_m"
    ],
    correctAnswer: 1,
    explanation: "A voltage doubler circuit produces DC output voltage approximately equal to twice the peak input voltage (2V_m), though with significant ripple."
  },
  {
    id: "medium-28",
    question: "What is the primary cause of avalanche breakdown in a PN junction?",
    options: [
      "Quantum mechanical tunneling",
      "Impact ionization",
      "Thermal generation",
      "Field emission"
    ],
    correctAnswer: 1,
    explanation: "Avalanche breakdown occurs due to impact ionization, where high-energy carriers create additional electron-hole pairs through collisions with atoms."
  },
  {
    id: "medium-29",
    question: "The efficiency of a half-wave rectifier is approximately:",
    options: [
      "25.6%",
      "40.6%",
      "81.2%",
      "100%"
    ],
    correctAnswer: 1,
    explanation: "The maximum theoretical efficiency of a half-wave rectifier is 40.6%, which is significantly lower than the 81.2% efficiency of full-wave rectifiers."
  },
  {
    id: "medium-30",
    question: "What is the primary function of a snubber circuit in rectifier applications?",
    options: [
      "To improve efficiency",
      "To suppress voltage spikes",
      "To reduce ripple",
      "To increase output voltage"
    ],
    correctAnswer: 1,
    explanation: "Snubber circuits are used to suppress voltage spikes and transients that can occur during diode switching, protecting the diodes from overvoltage damage."
  },
  {
    id: "medium-31",
    question: "In a PN junction, the diffusion capacitance is significant in:",
    options: [
      "Reverse bias only",
      "Forward bias only",
      "Both forward and reverse bias",
      "Zero bias only"
    ],
    correctAnswer: 1,
    explanation: "Diffusion capacitance is significant only in forward bias and is due to the storage of minority carriers in the neutral regions near the junction."
  },
  {
    id: "medium-32",
    question: "What is the typical value of the ideality factor (η) for a silicon diode?",
    options: [
      "0.5-1.0",
      "1.0-2.0",
      "2.0-3.0",
      "3.0-4.0"
    ],
    correctAnswer: 1,
    explanation: "The ideality factor η typically ranges from 1.0 to 2.0 for silicon diodes, with η=1 for ideal diodes and higher values indicating recombination effects."
  },
  {
    id: "medium-33",
    question: "The reverse recovery time of a diode is primarily determined by:",
    options: [
      "Junction capacitance",
      "Minority carrier storage",
      "Series resistance",
      "Breakdown voltage"
    ],
    correctAnswer: 1,
    explanation: "Reverse recovery time is mainly determined by the time required to remove stored minority carriers from the depletion region when switching from forward to reverse bias."
  },
  {
    id: "medium-34",
    question: "What is the primary advantage of using a center-tapped full-wave rectifier over a bridge rectifier?",
    options: [
      "Lower cost",
      "Fewer diodes",
      "Better efficiency",
      "Lower voltage drop"
    ],
    correctAnswer: 3,
    explanation: "A center-tapped configuration has only one diode drop in the current path (compared to two in a bridge rectifier), resulting in lower forward voltage loss."
  },
  {
    id: "medium-35",
    question: "The thermal voltage V_T at room temperature (300K) is approximately:",
    options: [
      "26 mV",
      "52 mV",
      "100 mV",
      "200 mV"
    ],
    correctAnswer: 0,
    explanation: "Thermal voltage V_T = kT/q ≈ 26 mV at room temperature (300K), where k is Boltzmann's constant and q is electron charge."
  },
  {
    id: "medium-36",
    question: "What is the primary mechanism of current flow in a tunnel diode?",
    options: [
      "Diffusion",
      "Drift",
      "Quantum mechanical tunneling",
      "Thermionic emission"
    ],
    correctAnswer: 2,
    explanation: "Tunnel diodes operate based on quantum mechanical tunneling through the very narrow depletion region created by heavy doping."
  },
  {
    id: "medium-37",
    question: "In a Zener voltage regulator, the minimum Zener current required for proper regulation is typically:",
    options: [
      "I_Z(min) = 0",
      "I_Z(min) = I_Z(max)/10",
      "I_Z(min) = I_Z(max)/2",
      "I_Z(min) = I_Z(max)"
    ],
    correctAnswer: 1,
    explanation: "For proper regulation, the Zener current should be maintained above a minimum value, typically around I_Z(min) ≈ I_Z(max)/10, to stay in the breakdown region."
  },
  {
    id: "medium-38",
    question: "What is the primary disadvantage of a bridge rectifier compared to a center-tapped rectifier?",
    options: [
      "Higher cost",
      "More diode drops",
      "Lower efficiency",
      "Poor voltage regulation"
    ],
    correctAnswer: 1,
    explanation: "A bridge rectifier has two diode drops in series (≈1.4V for silicon), compared to one diode drop (≈0.7V) in a center-tapped configuration, resulting in higher power loss."
  },
  {
    id: "medium-39",
    question: "The cut-in voltage of a germanium diode is approximately:",
    options: [
      "0.3 V",
      "0.7 V",
      "1.2 V",
      "2.0 V"
    ],
    correctAnswer: 0,
    explanation: "Germanium diodes have a lower cut-in voltage of approximately 0.3V compared to 0.7V for silicon diodes, due to their smaller bandgap."
  },
  {
    id: "medium-40",
    question: "What is the primary application of a PIN diode?",
    options: [
      "Rectification",
      "RF switching",
      "Voltage regulation",
      "Light emission"
    ],
    correctAnswer: 1,
    explanation: "PIN diodes are primarily used as RF switches and attenuators due to their variable resistance characteristic under forward bias and fast switching speed."
  },
  {
    id: "medium-41",
    question: "The ripple factor of a full-wave rectifier with capacitor filter is approximately:",
    options: [
      "1.21",
      "0.482",
      "0.1",
      "0.01"
    ],
    correctAnswer: 1,
    explanation: "The theoretical ripple factor for a full-wave rectifier is 0.482, which is significantly better than the 1.21 ripple factor of a half-wave rectifier."
  },
  {
    id: "medium-42",
    question: "What is the primary cause of the reverse recovery current spike in diodes?",
    options: [
      "Junction capacitance",
      "Stored minority charge",
      "Series resistance",
      "Thermal effects"
    ],
    correctAnswer: 1,
    explanation: "The reverse recovery current spike occurs due to the rapid removal of stored minority carriers when the diode switches from forward to reverse bias."
  },
  {
    id: "medium-43",
    question: "In a PN junction, the electric field in the depletion region points from:",
    options: [
      "P-side to N-side",
      "N-side to P-side",
      "Both directions simultaneously",
      "No electric field exists"
    ],
    correctAnswer: 1,
    explanation: "The built-in electric field points from the N-side to the P-side, opposing the diffusion of majority carriers and causing drift of minority carriers."
  },
  {
    id: "medium-44",
    question: "What is the typical value of the reverse saturation current for a silicon power diode?",
    options: [
      "1 nA-1 μA",
      "1 μA-1 mA",
      "1 mA-10 mA",
      "10 mA-100 mA"
    ],
    correctAnswer: 0,
    explanation: "Silicon diodes typically have reverse saturation currents in the nanoampere to microampere range, which is very small compared to forward currents."
  },
  {
    id: "medium-45",
    question: "The form factor of a half-wave rectified sine wave is:",
    options: [
      "1.11",
      "1.57",
      "1.73",
      "2.22"
    ],
    correctAnswer: 1,
    explanation: "Form factor = RMS value/Average value. For half-wave rectification, this equals (I_m/2)/(I_m/π) = π/2 ≈ 1.57."
  },
  {
    id: "medium-46",
    question: "What is the primary advantage of using a full-wave rectifier over a half-wave rectifier?",
    options: [
      "Lower cost",
      "Smaller size",
      "Higher efficiency",
      "Simpler design"
    ],
    correctAnswer: 2,
    explanation: "Full-wave rectifiers have higher efficiency (81.2% vs 40.6%) and better ripple characteristics because they utilize both halves of the input cycle."
  },
  {
    id: "medium-47",
    question: "In a PN junction, the width of the depletion region is:",
    options: [
      "Equal on both sides",
      "Larger on the heavily doped side",
      "Larger on the lightly doped side",
      "Independent of doping"
    ],
    correctAnswer: 2,
    explanation: "The depletion region extends further into the lightly doped side because more space is needed to expose sufficient ions to balance the charge."
  },
  {
    id: "medium-48",
    question: "What is the primary mechanism of current flow in a photodiode?",
    options: [
      "Diffusion",
      "Drift",
      "Photovoltaic effect",
      "Thermionic emission"
    ],
    correctAnswer: 2,
    explanation: "Photodiodes operate based on the photovoltaic effect, where incident light generates electron-hole pairs that are separated by the built-in field, creating current."
  },
  {
    id: "medium-49",
    question: "The peak inverse voltage (PIV) rating of a diode must be:",
    options: [
      "Equal to the maximum reverse voltage",
      "Greater than the maximum reverse voltage",
      "Less than the maximum reverse voltage",
      "Unrelated to the reverse voltage"
    ],
    correctAnswer: 1,
    explanation: "The PIV rating must be greater than the maximum reverse voltage the diode will experience to prevent breakdown and ensure reliable operation."
  },
  {
    id: "medium-50",
    question: "What is the primary application of a step recovery diode?",
    options: [
      "Power rectification",
      "Frequency multiplication",
      "Voltage regulation",
      "Current limiting"
    ],
    correctAnswer: 1,
    explanation: "Step recovery diodes are used for frequency multiplication in microwave applications due to their abrupt turn-off characteristics and harmonic generation."
  },
  {
    id: "medium-51",
    question: "In a half-wave rectifier with capacitive filter, the diode conducts for:",
    options: [
      "180° of the input cycle",
      "90° of the input cycle",
      "Less than 90° of the input cycle",
      "The entire cycle"
    ],
    correctAnswer: 2,
    explanation: "With a capacitive filter, the diode conducts only during a short period (typically less than 90°) when the input voltage exceeds the capacitor voltage."
  },
  {
    id: "medium-52",
    question: "What is the effect of increasing temperature on the breakdown voltage of a Zener diode?",
    options: [
      "Breakdown voltage increases",
      "Breakdown voltage decreases",
      "Breakdown voltage remains constant",
      "Breakdown voltage becomes negative"
    ],
    correctAnswer: 1,
    explanation: "The breakdown voltage of Zener diodes has a negative temperature coefficient, meaning it decreases with increasing temperature."
  },
  {
    id: "medium-53",
    question: "The diffusion capacitance of a forward-biased diode is proportional to:",
    options: [
      "The forward current",
      "The reverse voltage",
      "The junction area",
      "The temperature"
    ],
    correctAnswer: 0,
    explanation: "Diffusion capacitance C_D ∝ I_F (forward current) because it's related to the stored minority charge, which is proportional to current."
  },
  {
    id: "medium-54",
    question: "What is the primary advantage of using a full-wave bridge rectifier in power supplies?",
    options: [
      "Lower cost",
      "Higher output voltage",
      "Better efficiency",
      "No center-tapped transformer required"
    ],
    correctAnswer: 3,
    explanation: "The main advantage is that a bridge rectifier doesn't require a center-tapped transformer, making the power supply design simpler and more cost-effective."
  },
  {
    id: "medium-55",
    question: "In a PN junction, the saturation current I_s is proportional to:",
    options: [
      "n_i²",
      "n_i",
      "1/n_i",
      "1/n_i²"
    ],
    correctAnswer: 0,
    explanation: "The reverse saturation current I_s ∝ n_i², where n_i is the intrinsic carrier concentration, making it highly temperature dependent."
  },
  {
    id: "medium-56",
    question: "What is the typical operating temperature range for power rectifier diodes?",
    options: [
      "-25°C to +50°C",
      "-55°C to +150°C",
      "-65°C to +175°C",
      "0°C to +100°C"
    ],
    correctAnswer: 2,
    explanation: "Power rectifier diodes typically have an operating temperature range of -65°C to +175°C, with some high-temperature variants going even higher."
  },
  {
    id: "medium-57",
    question: "The efficiency of a rectifier circuit is defined as:",
    options: [
      "DC output power/AC input power",
      "AC input power/DC output power",
      "RMS output voltage/Average output voltage",
      "Peak output voltage/RMS output voltage"
    ],
    correctAnswer: 0,
    explanation: "Rectifier efficiency η = (DC output power)/(AC input power) × 100%, representing how effectively AC power is converted to DC power."
  },
  {
    id: "medium-58",
    question: "What is the primary cause of the forward voltage drop in a PN junction diode?",
    options: [
      "Junction capacitance",
      "Series resistance",
      "Potential barrier",
      "Minority carrier injection"
    ],
    correctAnswer: 2,
    explanation: "The forward voltage drop is primarily due to the potential barrier that must be overcome for current to flow, plus additional drops due to series resistance."
  },
  {
    id: "medium-59",
    question: "In a full-wave rectifier, the average output voltage is:",
    options: [
      "V_m/π",
      "2V_m/π",
      "V_m/2",
      "V_m"
    ],
    correctAnswer: 1,
    explanation: "For a full-wave rectifier, the average output voltage V_dc = (2V_m)/π, where V_m is the peak input voltage."
  },
  {
    id: "medium-60",
    question: "What is the primary application of a current-limiting diode?",
    options: [
      "Voltage regulation",
      "Current regulation",
      "Power rectification",
      "Frequency modulation"
    ],
    correctAnswer: 1,
    explanation: "Current-limiting diodes (CLDs) are two-terminal devices that maintain a constant current over a wide range of voltage variations."
  },
  {
    id: "medium-61",
    question: "The transition capacitance of a PN junction is significant in:",
    options: [
      "Forward bias only",
      "Reverse bias only",
      "Both forward and reverse bias",
      "Zero bias only"
    ],
    correctAnswer: 1,
    explanation: "Transition capacitance is significant primarily in reverse bias, where it represents the capacitance of the depletion region acting as a dielectric."
  },
  {
    id: "medium-62",
    question: "What is the effect of increasing the filter capacitance on the ripple voltage?",
    options: [
      "Ripple voltage increases",
      "Ripple voltage decreases",
      "Ripple voltage remains constant",
      "Ripple voltage becomes zero"
    ],
    correctAnswer: 1,
    explanation: "Ripple voltage V_r = I_L/(fC), so increasing capacitance C decreases the ripple voltage proportionally."
  },
  {
    id: "medium-63",
    question: "In a half-wave rectifier, the RMS output voltage is:",
    options: [
      "V_m/2",
      "V_m/√2",
      "V_m/π",
      "V_m/2√2"
    ],
    correctAnswer: 0,
    explanation: "For a half-wave rectifier, the RMS output voltage V_rms = V_m/2, where V_m is the peak input voltage."
  },
  {
    id: "medium-64",
    question: "What is the primary disadvantage of using germanium diodes?",
    options: [
      "High forward voltage drop",
      "High reverse leakage current",
      "Low breakdown voltage",
      "Slow switching speed"
    ],
    correctAnswer: 1,
    explanation: "Germanium diodes have significantly higher reverse leakage current compared to silicon diodes, especially at elevated temperatures."
  },
  {
    id: "medium-65",
    question: "The built-in potential of a PN junction:",
    options: [
      "Increases with temperature",
      "Decreases with temperature",
      "Is independent of temperature",
      "Becomes zero at high temperature"
    ],
    correctAnswer: 1,
    explanation: "The built-in potential V_bi decreases with increasing temperature because the intrinsic carrier concentration n_i increases exponentially with temperature."
  },
  {
    id: "medium-66",
    question: "What is the primary application of a backward diode?",
    options: [
      "Power rectification",
      "Low-voltage rectification",
      "Voltage regulation",
      "Current amplification"
    ],
    correctAnswer: 1,
    explanation: "Backward diodes are used for low-voltage rectification and detection applications where their low forward voltage drop is advantageous."
  },
  {
    id: "medium-67",
    question: "In a full-wave rectifier with capacitive filter, the peak diode current is:",
    options: [
      "Equal to the load current",
      "Less than the load current",
      "Much greater than the load current",
      "Unrelated to the load current"
    ],
    correctAnswer: 2,
    explanation: "The peak diode current can be much larger than the average load current due to the short conduction period when the capacitor is being charged."
  },
  {
    id: "medium-68",
    question: "What is the typical reverse recovery time for fast-recovery diodes?",
    options: [
      "1-10 μs",
      "100-500 ns",
      "10-50 ns",
      "1-5 ns"
    ],
    correctAnswer: 2,
    explanation: "Fast-recovery diodes typically have reverse recovery times in the range of 10-50 nanoseconds, making them suitable for high-frequency applications."
  },
  {
    id: "medium-69",
    question: "The maximum efficiency of a full-wave rectifier is:",
    options: [
      "40.6%",
      "81.2%",
      "90.5%",
      "100%"
    ],
    correctAnswer: 1,
    explanation: "The maximum theoretical efficiency of a full-wave rectifier is 81.2%, which is significantly higher than the 40.6% efficiency of half-wave rectifiers."
  },
  {
    id: "medium-70",
    question: "What is the primary cause of the temperature dependence of the forward voltage drop?",
    options: [
      "Change in series resistance",
      "Change in intrinsic carrier concentration",
      "Change in junction capacitance",
      "Change in breakdown voltage"
    ],
    correctAnswer: 1,
    explanation: "The temperature dependence of forward voltage is primarily due to the exponential increase in intrinsic carrier concentration n_i with temperature."
  },
  {
    id: "medium-71",
    question: "In a PN junction, the drift current is proportional to:",
    options: [
      "The concentration gradient",
      "The electric field",
      "The temperature gradient",
      "The applied current"
    ],
    correctAnswer: 1,
    explanation: "Drift current follows Ohm's law and is proportional to the electric field (J_drift = σE), where σ is the conductivity."
  },
  {
    id: "medium-72",
    question: "What is the primary advantage of using a Schottky diode in switching power supplies?",
    options: [
      "Higher breakdown voltage",
      "Lower forward voltage drop",
      "Higher reverse leakage",
      "Larger size"
    ],
    correctAnswer: 1,
    explanation: "Schottky diodes have lower forward voltage drop and faster switching speed, making them ideal for high-efficiency switching power supplies."
  },
  {
    id: "medium-73",
    question: "The ripple factor of a half-wave rectifier is:",
    options: [
      "0.482",
      "1.21",
      "1.57",
      "2.22"
    ],
    correctAnswer: 1,
    explanation: "The theoretical ripple factor for a half-wave rectifier is 1.21, indicating significant AC component in the output."
  },
  {
    id: "medium-74",
    question: "What is the typical operating current range for Zener diodes in regulation applications?",
    options: [
      "1-5 μA",
      "5-20 mA",
      "50-100 mA",
      "200-500 mA"
    ],
    correctAnswer: 1,
    explanation: "Zener diodes typically operate in the 5-20 milliampere range for voltage regulation, though this depends on their power rating and application."
  },
  {
    id: "medium-75",
    question: "In a PN junction, the width of the depletion region is minimum when:",
    options: [
      "Reverse biased",
      "Forward biased",
      "Zero biased",
      "Breakdown occurs"
    ],
    correctAnswer: 1,
    explanation: "The depletion region width is minimum under forward bias because the applied voltage reduces the barrier potential, narrowing the space charge region."
  },
  {
    id: "medium-76",
    question: "What is the primary application of a constant-current diode?",
    options: [
      "Voltage regulation",
      "Current regulation",
      "Power amplification",
      "Frequency generation"
    ],
    correctAnswer: 1,
    explanation: "Constant-current diodes (also called current-regulator diodes) maintain a nearly constant current over a wide range of voltage variations."
  },
  {
    id: "medium-77",
    question: "The form factor of a full-wave rectified sine wave is:",
    options: [
      "1.11",
      "1.57",
      "1.73",
      "2.22"
    ],
    correctAnswer: 0,
    explanation: "Form factor = RMS value/Average value. For full-wave rectification, this equals (I_m/√2)/(2I_m/π) = π/(2√2) ≈ 1.11."
  },
  {
    id: "medium-78",
    question: "What is the effect of increasing the load resistance on the ripple factor?",
    options: [
      "Ripple factor increases",
      "Ripple factor decreases",
      "Ripple factor remains constant",
      "Ripple factor becomes zero"
    ],
    correctAnswer: 1,
    explanation: "As load resistance increases (load current decreases), the ripple factor decreases because the capacitor discharges more slowly between charging cycles."
  },
  {
    id: "medium-79",
    question: "In a half-wave rectifier, the average output current is:",
    options: [
      "I_m/π",
      "2I_m/π",
      "I_m/2",
      "I_m/√2"
    ],
    correctAnswer: 0,
    explanation: "For a half-wave rectifier, the average output current I_dc = I_m/π, where I_m is the peak current."
  },
  {
    id: "medium-80",
    question: "What is the primary advantage of using a center-tapped transformer in rectifier circuits?",
    options: [
      "Lower cost",
      "Better isolation",
      "Higher efficiency",
      "Ground reference availability"
    ],
    correctAnswer: 3,
    explanation: "A center-tapped transformer provides a natural ground reference point, which can simplify circuit design and improve safety."
  },
  {
    id: "medium-81",
    question: "The reverse saturation current in a PN junction is primarily due to:",
    options: [
      "Majority carrier injection",
      "Minority carrier diffusion",
      "Thermal generation in depletion region",
      "Impact ionization"
    ],
    correctAnswer: 2,
    explanation: "Reverse saturation current is mainly due to thermal generation of electron-hole pairs in the depletion region and their subsequent drift under the electric field."
  },
  {
    id: "medium-82",
    question: "What is the typical forward voltage drop for a GaAs Schottky diode?",
    options: [
      "0.2-0.3 V",
      "0.7-0.8 V",
      "1.2-1.4 V",
      "2.0-2.2 V"
    ],
    correctAnswer: 2,
    explanation: "Gallium Arsenide (GaAs) Schottky diodes have higher forward voltage drops (typically 1.2-1.4V) compared to silicon Schottky diodes."
  },
  {
    id: "medium-83",
    question: "In a full-wave rectifier, the peak output voltage is:",
    options: [
      "V_m",
      "2V_m",
      "V_m/2",
      "V_m/√2"
    ],
    correctAnswer: 0,
    explanation: "For both half-wave and full-wave rectifiers (without filter), the peak output voltage equals the peak input voltage V_m."
  },
  {
    id: "medium-84",
    question: "What is the primary disadvantage of using a bridge rectifier in low-voltage applications?",
    options: [
      "High cost",
      "High forward voltage drop",
      "Large size",
      "Complex drive circuitry"
    ],
    correctAnswer: 1,
    explanation: "The two-diode voltage drop (≈1.4V for silicon) in series can be significant in low-voltage applications, reducing efficiency and output voltage."
  },
  {
    id: "medium-85",
    question: "The dynamic resistance of a forward-biased diode decreases with:",
    options: [
      "Increasing current",
      "Decreasing current",
      "Increasing temperature",
      "Decreasing temperature"
    ],
    correctAnswer: 0,
    explanation: "Dynamic resistance r_d = V_T/I_D, so it decreases as the forward current I_D increases."
  },
  {
    id: "medium-86",
    question: "What is the typical operating frequency range for microwave diodes?",
    options: [
      "1-10 kHz",
      "1-10 MHz",
      "1-10 GHz",
      "1-10 THz"
    ],
    correctAnswer: 2,
    explanation: "Microwave diodes are designed to operate in the GHz frequency range (1-100 GHz), with some specialized types reaching into THz frequencies."
  },
  {
    id: "medium-87",
    question: "In a PN junction, the electric field is maximum at:",
    options: [
      "The edges of depletion region",
      "The center of depletion region",
      "The metallurgical junction",
      "The neutral regions"
    ],
    correctAnswer: 2,
    explanation: "The electric field is maximum at the metallurgical junction (where P and N materials meet) and decreases linearly toward the edges of the depletion region."
  },
  {
    id: "medium-88",
    question: "What is the primary application of a Gunn diode?",
    options: [
      "Rectification",
      "Microwave oscillation",
      "Voltage regulation",
      "Current limiting"
    ],
    correctAnswer: 1,
    explanation: "Gunn diodes are used as microwave oscillators due to their negative differential resistance characteristic in certain bias conditions."
  },
  {
    id: "medium-89",
    question: "The transition capacitance of a PN junction varies with doping concentration as:",
    options: [
      "C_T ∝ √(N_A N_D)",
      "C_T ∝ 1/√(N_A N_D)",
      "C_T ∝ (N_A N_D)",
      "C_T ∝ 1/(N_A N_D)"
    ],
    correctAnswer: 0,
    explanation: "For an abrupt junction, transition capacitance C_T ∝ √(εqN_A N_D/2(V_bi+V_R)), so it increases with the square root of the product of doping concentrations."
  },
  {
    id: "medium-90",
    question: "What is the effect of increasing temperature on the reverse recovery time of a diode?",
    options: [
      "Increases reverse recovery time",
      "Decreases reverse recovery time",
      "No effect on reverse recovery time",
      "Makes reverse recovery time unpredictable"
    ],
    correctAnswer: 0,
    explanation: "Reverse recovery time increases with temperature because higher temperatures increase minority carrier lifetime and storage effects."
  },
  {
    id: "medium-91",
    question: "In a half-wave rectifier with capacitive filter, the diode must withstand a peak current of approximately:",
    options: [
      "I_dc",
      "2I_dc",
      "5-10 times I_dc",
      "100 times I_dc"
    ],
    correctAnswer: 2,
    explanation: "Due to the short conduction angle, the peak diode current can be 5-10 times the average DC current, requiring diodes with adequate peak current rating."
  },
  {
    id: "medium-92",
    question: "What is the primary advantage of using a full-wave rectifier in battery charging applications?",
    options: [
      "Lower cost",
      "Faster charging",
      "Better battery life",
      "Higher efficiency"
    ],
    correctAnswer: 1,
    explanation: "Full-wave rectification provides smoother DC with less ripple, allowing for more efficient and faster battery charging compared to half-wave rectification."
  },
  {
    id: "medium-93",
    question: "The built-in potential of a silicon PN junction at room temperature is typically in the range:",
    options: [
      "0.1-0.3 V",
      "0.5-0.8 V",
      "1.0-1.2 V",
      "1.5-2.0 V"
    ],
    correctAnswer: 1,
    explanation: "The built-in potential for silicon PN junctions is typically in the range of 0.5-0.8 volts, depending on the doping concentrations."
  },
  {
    id: "medium-94",
    question: "What is the primary mechanism of current flow in a backward diode?",
    options: [
      "Diffusion",
      "Drift",
      "Quantum mechanical tunneling",
      "Thermionic emission"
    ],
    correctAnswer: 2,
    explanation: "Backward diodes operate based on quantum mechanical tunneling, similar to tunnel diodes, but with modified doping profiles for different characteristics."
  },
  {
    id: "medium-95",
    question: "In a full-wave rectifier, the transformer utilization factor is approximately:",
    options: [
      "0.287",
      "0.693",
      "0.812",
      "1.0"
    ],
    correctAnswer: 1,
    explanation: "The transformer utilization factor for a full-wave rectifier is approximately 0.693, indicating better utilization than the 0.287 factor of half-wave rectifiers."
  },
  {
    id: "medium-96",
    question: "What is the effect of increasing the filter inductance on the ripple current?",
    options: [
      "Ripple current increases",
      "Ripple current decreases",
      "Ripple current remains constant",
      "Ripple current becomes zero"
    ],
    correctAnswer: 1,
    explanation: "Increasing filter inductance decreases ripple current because inductors oppose changes in current, smoothing the output."
  },
  {
    id: "medium-97",
    question: "The peak factor of a full-wave rectified sine wave is:",
    options: [
      "1.414",
      "2.0",
      "1.57",
      "1.11"
    ],
    correctAnswer: 0,
    explanation: "Peak factor = Peak value/RMS value. For full-wave rectification, this equals I_m/(I_m/√2) = √2 ≈ 1.414."
  },
  {
    id: "medium-98",
    question: "What is the primary application of a varicap diode?",
    options: [
      "Voltage regulation",
      "Frequency tuning",
      "Power rectification",
      "Current limiting"
    ],
    correctAnswer: 1,
    explanation: "Varicap diodes (varactor diodes) are used for electronic frequency tuning in oscillators, filters, and phase-locked loops due to their voltage-dependent capacitance."
  },
  {
    id: "medium-99",
    question: "In a PN junction, the diffusion current dominates when:",
    options: [
      "Reverse biased",
      "Forward biased",
      "Zero biased",
      "Breakdown occurs"
    ],
    correctAnswer: 1,
    explanation: "Diffusion current dominates in forward bias, while drift current dominates in reverse bias. At zero bias, they are equal and opposite."
  },
  {
    id: "medium-100",
    question: "What is the typical switching speed of a PIN diode?",
    options: [
      "1-10 μs",
      "100-500 ns",
      "10-100 ns",
      "1-5 ns"
    ],
    correctAnswer: 1,
    explanation: "PIN diodes typically have switching speeds in the range of 100-500 nanoseconds, making them suitable for RF switching applications but slower than Schottky diodes."
  }

];

export interface Question {
  id: string;
  question: string;
  options: string[];
  correctAnswer: number;
  explanation: string;
}

export const hardQuestions: Question[] = [
  {
    id: "hard-1",
    question: "For a PN junction with non-uniform doping profile, the built-in potential is given by:",
    options: [
      "V_bi = (kT/q)ln(N_A N_D/n_i²)",
      "V_bi = ∫(1/q)(dE_c/dx)dx",
      "V_bi = (ε/2q)(x_n² + x_p²)",
      "V_bi = (kT/q)ln(N_D/N_A)"
    ],
    correctAnswer: 1,
    explanation: "For non-uniform doping, the built-in potential must be calculated by integrating the electric field: V_bi = -∫E(x)dx = ∫(1/q)(dE_c/dx)dx, where E_c is the conduction band edge."
  },
  {
    id: "hard-2",
    question: "The exact solution for the current in a PN junction under high-level injection conditions requires solving:",
    options: [
      "Ohm's law only",
      "The ideal diode equation",
      "The ambipolar diffusion equation",
      "Poisson's equation only"
    ],
    correctAnswer: 2,
    explanation: "Under high-level injection, both electrons and holes contribute significantly to current flow, requiring solution of the ambipolar diffusion equation to account for the coupled behavior of both carriers."
  },
  {
    id: "hard-3",
    question: "The quantum efficiency of a photodiode is maximized when the depletion region width satisfies:",
    options: [
      "W << 1/α",
      "W ≈ 1/α",
      "W >> 1/α",
      "W = constant regardless of α"
    ],
    correctAnswer: 1,
    explanation: "Maximum quantum efficiency occurs when the depletion width W is approximately equal to the absorption length 1/α, ensuring most photons are absorbed within the high-field region where carriers are efficiently collected."
  },
  {
    id: "hard-4",
    question: "The small-signal equivalent circuit of a PN junction diode at high frequencies must include:",
    options: [
      "Only junction capacitance",
      "Junction capacitance and series resistance",
      "Junction capacitance, diffusion capacitance, and series resistance",
      "Only diffusion capacitance"
    ],
    correctAnswer: 2,
    explanation: "At high frequencies, the complete small-signal model includes junction capacitance (C_j), diffusion capacitance (C_d), series resistance (R_s), and the dynamic resistance (r_d), as all contribute to the frequency response."
  },
  {
    id: "hard-5",
    question: "The reverse recovery time t_rr of a diode is related to the minority carrier lifetime τ by:",
    options: [
      "t_rr = τ",
      "t_rr = 2τ",
      "t_rr = τln(1 + I_F/I_R)",
      "t_rr = √(τ)"
    ],
    correctAnswer: 2,
    explanation: "The reverse recovery time is given by t_rr = τln(1 + I_F/I_R), where τ is the minority carrier lifetime, I_F is the forward current before switching, and I_R is the reverse current after switching."
  },
  {
    id: "hard-6",
    question: "In a PIN diode, the I-region thickness affects the device performance such that:",
    options: [
      "Breakdown voltage ∝ W²",
      "Switching speed ∝ W²",
      "Capacitance ∝ 1/W",
      "All of the above"
    ],
    correctAnswer: 3,
    explanation: "For PIN diodes: Breakdown voltage V_BR ∝ W², switching time t ∝ W²/2D (where D is diffusion coefficient), and capacitance C ∝ 1/W, making all relationships correct."
  },
  {
    id: "hard-7",
    question: "The exact calculation of depletion region width in a linearly graded junction requires solving:",
    options: [
      "Laplace's equation",
      "The diffusion equation",
      "Poisson's equation with ρ = ax",
      "The continuity equation"
    ],
    correctAnswer: 2,
    explanation: "For linearly graded junctions where doping varies as N_D - N_A = ax, Poisson's equation becomes d²ψ/dx² = -(q/ε)ax, which must be solved with appropriate boundary conditions."
  },
  {
    id: "hard-8",
    question: "The modulation bandwidth of a photodiode is ultimately limited by:",
    options: [
      "RC time constant only",
      "Carrier transit time only",
      "Whichever is larger: RC time constant or carrier transit time",
      "The product of RC time constant and carrier transit time"
    ],
    correctAnswer: 2,
    explanation: "The bandwidth is limited by both the RC time constant and the carrier transit time, and the overall bandwidth is approximately f_3dB = 1/√((1/2πRC)² + (0.44/τ_tr)²), dominated by the slower mechanism."
  },
  {
    id: "hard-9",
    question: "The temperature coefficient of the forward voltage drop in a diode is given by:",
    options: [
      "dV_f/dT = -V_g0/T + 3k/q",
      "dV_f/dT = -2mV/°C",
      "dV_f/dT = V_f/T",
      "dV_f/dT = constant"
    ],
    correctAnswer: 0,
    explanation: "The exact temperature dependence is dV_f/dT = -V_g0/T + (3k/q) - (k/q)ln(N_c N_v/n_i²), which for silicon simplifies to approximately -2mV/°C, but the full expression shows the fundamental physics."
  },
  {
    id: "hard-10",
    question: "The noise equivalent power (NEP) of a photodiode is minimized when:",
    options: [
      "Dark current is maximized",
      "Quantum efficiency is minimized",
      "The device is operated at zero bias",
      "The device is cooled to reduce shot noise"
    ],
    correctAnswer: 3,
    explanation: "NEP is minimized by reducing all noise sources. Cooling reduces dark current and shot noise, while optimizing quantum efficiency and bandwidth also contribute to lower NEP."
  },
  {
    id: "hard-11",
    question: "The exact distribution of electric field in a reverse-biased PN junction with avalanche breakdown is described by:",
    options: [
      "The ionization integral ∫α dx = 1",
      "Poisson's equation only",
      "The diffusion equation",
      "Ohm's law"
    ],
    correctAnswer: 0,
    explanation: "Avalanche breakdown occurs when the ionization integral ∫α dx over the depletion region equals 1, where α is the ionization coefficient. This is the fundamental criterion for breakdown."
  },
  {
    id: "hard-12",
    question: "The switching speed of a Schottky diode is primarily limited by:",
    options: [
      "Minority carrier storage",
      "Junction capacitance",
      "Series resistance",
      "Thermal effects"
    ],
    correctAnswer: 1,
    explanation: "Schottky diodes are majority carrier devices with negligible minority carrier storage. Their switching speed is primarily limited by the RC time constant involving junction capacitance and series resistance."
  },
  {
    id: "hard-13",
    question: "The quantum mechanical tunneling probability through a potential barrier depends exponentially on:",
    options: [
      "Barrier height only",
      "Barrier width only",
      "Both barrier height and width",
      "Carrier effective mass only"
    ],
    correctAnswer: 2,
    explanation: "The tunneling probability T ∝ exp(-2∫√(2m*(V-E)/ħ² dx), showing exponential dependence on both barrier height (V-E) and barrier width."
  },
  {
    id: "hard-14",
    question: "The exact solution for the current in a short-base diode requires:",
    options: [
      "Solving the minority carrier diffusion equation with boundary conditions",
      "Using the ideal diode equation only",
      "Considering only drift current",
      "Neglecting recombination"
    ],
    correctAnswer: 0,
    explanation: "For short-base diodes where the neutral region length is less than the diffusion length, the minority carrier distribution becomes linear, and current is found by solving the diffusion equation with appropriate boundary conditions."
  },
  {
    id: "hard-15",
    question: "The frequency response of a varactor diode is ultimately limited by:",
    options: [
      "Series resistance only",
      "Junction capacitance only",
      "The cutoff frequency f_c = 1/(2πR_sC_j)",
      "Carrier transit time"
    ],
    correctAnswer: 2,
    explanation: "The quality factor Q and frequency response are limited by the cutoff frequency f_c = 1/(2πR_sC_j), where R_s is series resistance and C_j is junction capacitance."
  },
  {
    id: "hard-16",
    question: "The exact calculation of Zener breakdown voltage requires knowledge of:",
    options: [
      "Doping concentrations only",
      "The electric field at which tunneling probability becomes significant",
      "The avalanche multiplication factor",
      "The bandgap energy only"
    ],
    correctAnswer: 1,
    explanation: "Zener breakdown occurs when the electric field is high enough (~10⁶ V/cm) that the tunneling probability becomes significant, requiring quantum mechanical calculation of the tunneling current."
  },
  {
    id: "hard-17",
    question: "The harmonic distortion in a diode rectifier circuit is primarily caused by:",
    options: [
      "The non-linear I-V characteristic",
      "Series resistance",
      "Junction capacitance",
      "Temperature variations"
    ],
    correctAnswer: 0,
    explanation: "The exponential I-V relationship of diodes introduces harmonic distortion, generating higher-order harmonics of the input frequency in the output current."
  },
  {
    id: "hard-18",
    question: "The exact calculation of storage time in a switching diode requires solving:",
    options: [
      "The charge control equation",
      "Ohm's law",
      "The diffusion equation with time-dependent boundary conditions",
      "Poisson's equation"
    ],
    correctAnswer: 2,
    explanation: "Storage time is determined by solving the time-dependent diffusion equation for minority carriers with the boundary condition changing abruptly at the switching instant."
  },
  {
    id: "hard-19",
    question: "The maximum theoretical efficiency of a solar cell is limited by:",
    options: [
      "The Shockley-Queisser limit",
      "The diode ideality factor",
      "Series resistance",
      "Quantum efficiency"
    ],
    correctAnswer: 0,
    explanation: "The Shockley-Queisser limit gives the maximum theoretical efficiency of a single-junction solar cell as ~33.7% for AM1.5 spectrum, due to fundamental thermodynamic constraints."
  },
  {
    id: "hard-20",
    question: "The noise spectral density in a photodiode includes contributions from:",
    options: [
      "Shot noise only",
      "Thermal noise only",
      "Both shot noise and thermal noise",
      "Generation-recombination noise only"
    ],
    correctAnswer: 2,
    explanation: "The total noise includes shot noise (2q(I_dark + I_photo)), thermal noise (4kT/R_L), and sometimes 1/f noise, requiring careful analysis of all contributions."
  },
  {
    id: "hard-21",
    question: "The exact solution for the capacitance of a hyperabrupt junction varactor shows:",
    options: [
      "C ∝ V^{-1/2}",
      "C ∝ V^{-1}",
      "C ∝ V^{-n} with n > 1/2",
      "C ∝ V^{-2}"
    ],
    correctAnswer: 2,
    explanation: "Hyperabrupt junctions are designed with special doping profiles to achieve C ∝ V^{-n} with n > 1/2, providing greater tuning range than standard abrupt junctions."
  },
  {
    id: "hard-22",
    question: "The quantum efficiency of an avalanche photodiode (APD) includes the multiplication factor M such that:",
    options: [
      "η_APD = Mη",
      "η_APD = η/M",
      "η_APD = M²η",
      "η_APD = η regardless of M"
    ],
    correctAnswer: 0,
    explanation: "The external quantum efficiency of an APD is η_APD = Mη, where η is the primary quantum efficiency and M is the avalanche multiplication factor."
  },
  {
    id: "hard-23",
    question: "The exact calculation of the built-in potential in a heterojunction requires:",
    options: [
      "Considering the band alignment and interface states",
      "Using the same formula as homojunctions",
      "Neglecting the band offset",
      "Considering only the doping concentrations"
    ],
    correctAnswer: 0,
    explanation: "Heterojunctions have band offsets (ΔE_c, ΔE_v) and interface states that significantly affect the built-in potential, requiring modified calculations compared to homojunctions."
  },
  {
    id: "hard-24",
    question: "The temperature dependence of the Zener breakdown voltage is characterized by:",
    options: [
      "Positive temperature coefficient",
      "Negative temperature coefficient",
      "Zero temperature coefficient",
      "Non-monotonic temperature dependence"
    ],
    correctAnswer: 1,
    explanation: "Zener breakdown has a negative temperature coefficient (breakdown voltage decreases with temperature) due to increased phonon scattering reducing mean free path."
  },
  {
    id: "hard-25",
    question: "The exact analysis of a rectifier circuit with complex load requires:",
    options: [
      "Solving the differential equation for the circuit",
      "Using the ideal diode equation only",
      "Neglecting diode capacitance",
      "Assuming constant load current"
    ],
    correctAnswer: 0,
    explanation: "Complex loads (RLC) require solving the circuit differential equations with the diode's non-linear characteristics, often using numerical methods or piecewise linear approximations."
  },
  {
    id: "hard-26",
    question: "The maximum frequency of operation of a tunnel diode oscillator is limited by:",
    options: [
      "The negative resistance cutoff frequency",
      "Junction capacitance only",
      "Series resistance only",
      "Carrier lifetime"
    ],
    correctAnswer: 0,
    explanation: "The maximum oscillation frequency is given by f_max = 1/2π√(L_pC_j) where L_p is the parasitic inductance, but fundamentally limited by when the negative resistance vanishes at high frequencies."
  },
  {
    id: "hard-27",
    question: "The exact calculation of photocurrent in a PIN photodiode requires solving:",
    options: [
      "The continuity equation with generation term",
      "Ohm's law only",
      "The ideal diode equation",
      "Poisson's equation only"
    ],
    correctAnswer: 0,
    explanation: "Photocurrent calculation requires solving the continuity equations for both electrons and holes with the optical generation term G(x) = αΦ₀exp(-αx) included."
  },
  {
    id: "hard-28",
    question: "The harmonic generation efficiency in a step recovery diode is maximized when:",
    options: [
      "The minority carrier lifetime is very long",
      "The diode is operated near breakdown",
      "The snap-off time is much shorter than the RF period",
      "The diode has high series resistance"
    ],
    correctAnswer: 2,
    explanation: "Step recovery diodes generate high harmonics efficiently when the storage time is properly adjusted so the snap-off occurs rapidly compared to the RF period, producing sharp current pulses rich in harmonics."
  },
  {
    id: "hard-29",
    question: "The exact calculation of the space charge limited current in a PIN diode requires:",
    options: [
      "Solving the drift-diffusion equations with space charge effects",
      "Using Ohm's law only",
      "Neglecting diffusion current",
      "Assuming charge neutrality"
    ],
    correctAnswer: 0,
    explanation: "At high injection levels, space charge effects become important, requiring solution of the complete drift-diffusion equations including Poisson's equation for self-consistent field calculation."
  },
  {
    id: "hard-30",
    question: "The temperature dependence of the avalanche breakdown voltage is characterized by:",
    options: [
      "Positive temperature coefficient",
      "Negative temperature coefficient",
      "Zero temperature coefficient",
      "Temperature-independent behavior"
    ],
    correctAnswer: 0,
    explanation: "Avalanche breakdown has a positive temperature coefficient (breakdown voltage increases with temperature) due to increased phonon scattering reducing impact ionization efficiency."
  },
  {
    id: "hard-31",
    question: "The exact calculation of the cutoff frequency for a varactor diode requires:",
    options: [
      "f_c = 1/(2π√(L_sC_j))",
      "f_c = 1/(2πR_sC_j)",
      "f_c = 1/(2π√(R_sC_j))",
      "f_c = R_s/(2πL_s)"
    ],
    correctAnswer: 1,
    explanation: "The cutoff frequency is defined as f_c = 1/(2πR_sC_j), where R_s is the series resistance and C_j is the junction capacitance at a specified bias."
  },
  {
    id: "hard-32",
    question: "The quantum efficiency of a photodiode at short wavelengths is limited by:",
    options: [
      "Surface recombination",
      "Bulk recombination",
      "Carrier diffusion",
      "Junction depth"
    ],
    correctAnswer: 0,
    explanation: "Short-wavelength light is absorbed near the surface, making quantum efficiency sensitive to surface recombination velocity and surface treatment quality."
  },
  {
    id: "hard-33",
    question: "The exact analysis of a rectifier circuit with non-sinusoidal input requires:",
    options: [
      "Fourier analysis of the input waveform",
      "Assuming sinusoidal input only",
      "Neglecting diode non-linearity",
      "Using DC analysis only"
    ],
    correctAnswer: 0,
    explanation: "Non-sinusoidal inputs require Fourier decomposition and analysis of each harmonic component's interaction with the non-linear diode characteristics."
  },
  {
    id: "hard-34",
    question: "The maximum power handling capability of a rectifier diode is limited by:",
    options: [
      "Thermal resistance and junction temperature",
      "Breakdown voltage only",
      "Forward current only",
      "Junction capacitance"
    ],
    correctAnswer: 0,
    explanation: "Power handling is ultimately limited by thermal considerations: P_max = (T_jmax - T_a)/θ_JA, where θ_JA is the junction-to-ambient thermal resistance."
  },
  {
    id: "hard-35",
    question: "The exact calculation of the diffusion capacitance requires:",
    options: [
      "C_d = (τ_T/2V_T)I_F",
      "C_d = (τ_T/V_T)I_F",
      "C_d = (τ_T/4V_T)I_F",
      "C_d = (V_T/τ_T)I_F"
    ],
    correctAnswer: 1,
    explanation: "For a long-base diode, the diffusion capacitance is C_d = (τ_T/V_T)I_F, where τ_T is the mean transit time and V_T is the thermal voltage."
  },
  {
    id: "hard-36",
    question: "The noise figure of a mixer diode is minimized when:",
    options: [
      "The conversion loss is minimized",
      "The diode has high series resistance",
      "The LO power is maximized",
      "The junction capacitance is maximized"
    ],
    correctAnswer: 0,
    explanation: "The noise figure F = L(C)(T_d/T_0 + F_IF - 1), where L(C) is conversion loss, so minimizing conversion loss minimizes noise figure."
  },
  {
    id: "hard-37",
    question: "The exact solution for the electric field in a punch-through diode requires:",
    options: [
      "Solving Poisson's equation with boundary conditions",
      "Assuming constant electric field",
      "Neglecting space charge",
      "Using depletion approximation only"
    ],
    correctAnswer: 0,
    explanation: "Punch-through diodes require exact solution of Poisson's equation with appropriate boundary conditions, as the depletion region extends through the entire lightly doped region."
  },
  {
    id: "hard-38",
    question: "The temperature coefficient of the reverse saturation current is approximately:",
    options: [
      "dI_s/dT ∝ I_s/T",
      "dI_s/dT ∝ I_s",
      "dI_s/dT ∝ 1/I_s",
      "dI_s/dT = constant"
    ],
    correctAnswer: 1,
    explanation: "Since I_s ∝ n_i² ∝ T³exp(-E_g/kT), the temperature coefficient dI_s/dT ∝ I_s(3/T + E_g/kT²), showing proportionality to I_s itself."
  },
  {
    id: "hard-39",
    question: "The maximum efficiency of a rectenna system is fundamentally limited by:",
    options: [
      "The diode's cutoff frequency",
      "The impedance matching between antenna and diode",
      "The quantum efficiency of rectification",
      "The thermal noise floor"
    ],
    correctAnswer: 2,
    explanation: "Rectenna efficiency is ultimately limited by the quantum efficiency of the rectification process, which has fundamental thermodynamic limits similar to solar cells."
  },
  {
    id: "hard-40",
    question: "The exact calculation of the storage time in a diode requires solving:",
    options: [
      "The charge control equation with initial condition Q(0) = τI_F",
      "The diffusion equation with time-dependent boundary conditions",
      "Ohm's law only",
      "The ideal diode equation"
    ],
    correctAnswer: 1,
    explanation: "Storage time is found by solving the time-dependent diffusion equation with the boundary condition changing from forward bias to reverse bias at t=0."
  },
  {
    id: "hard-41",
    question: "The frequency response of a photodiode is affected by the carrier drift velocity through:",
    options: [
      "The transit time limit f_max = 0.44v_d/W",
      "The RC time constant only",
      "The diffusion time only",
      "The junction capacitance only"
    ],
    correctAnswer: 0,
    explanation: "The transit time limit is f_max = 0.44v_d/W, where v_d is the drift velocity and W is the depletion width, representing the fundamental speed limit due to carrier transit."
  },
  {
    id: "hard-42",
    question: "The exact calculation of the avalanche multiplication factor M requires solving:",
    options: [
      "The ionization integral ∫(α - β)dx = ln(M)",
      "M = 1/(1 - ∫αdx)",
      "The breakdown condition only",
      "Ohm's law"
    ],
    correctAnswer: 1,
    explanation: "For electron injection, M_n = 1/[1 - ∫α_n dx], and similarly for holes, where the ionization integrals are taken over the depletion region."
  },
  {
    id: "hard-43",
    question: "The harmonic distortion in a diode detector is characterized by:",
    options: [
      "The Taylor series expansion of the I-V characteristic",
      "The ideality factor only",
      "The series resistance only",
      "The junction capacitance"
    ],
    correctAnswer: 0,
    explanation: "Harmonic distortion can be analyzed by Taylor series expansion of I = I_s(exp(V/ηV_T) - 1) around the operating point, with coefficients determining distortion products."
  },
  {
    id: "hard-44",
    question: "The maximum operating frequency of a Schottky diode mixer is limited by:",
    options: [
      "f_max = 1/(2πR_sC_j)",
      "f_max = v_sat/2πL",
      "f_max = 1/(2π√(L_sC_j))",
      "f_max = R_s/2πL_s"
    ],
    correctAnswer: 0,
    explanation: "The cutoff frequency f_max = 1/(2πR_sC_j) determines the maximum frequency where the diode can efficiently rectify signals."
  },
  {
    id: "hard-45",
    question: "The exact calculation of the built-in potential in a metal-semiconductor junction requires:",
    options: [
      "Considering the work function difference and interface states",
      "Using the same formula as PN junctions",
      "Neglecting the Schottky barrier lowering",
      "Assuming flat band conditions"
    ],
    correctAnswer: 0,
    explanation: "Schottky barrier height φ_B = φ_m - χ for ideal metal-semiconductor junctions, but real devices require consideration of interface states and Fermi-level pinning."
  },
  {
    id: "hard-46",
    question: "The temperature dependence of the Schottky barrier height is given by:",
    options: [
      "dφ_B/dT = -dχ/dT - (1/2q)dE_g/dT",
      "dφ_B/dT = constant",
      "dφ_B/dT = 0",
      "dφ_B/dT = dφ_m/dT"
    ],
    correctAnswer: 0,
    explanation: "The temperature coefficient involves the temperature dependence of the electron affinity χ and the bandgap E_g: dφ_B/dT = -dχ/dT - (1/2q)dE_g/dT."
  },
  {
    id: "hard-47",
    question: "The quantum efficiency of a solar cell is maximized when:",
    options: [
      "The depletion region width is optimized for the solar spectrum",
      "The series resistance is minimized",
      "The shunt resistance is maximized",
      "All of the above"
    ],
    correctAnswer: 3,
    explanation: "Maximum quantum efficiency requires optimal depletion width for absorption, minimal series resistance for current collection, and maximal shunt resistance to prevent leakage."
  },
  {
    id: "hard-48",
    question: "The exact analysis of a voltage multiplier circuit requires:",
    options: [
      "Solving the transient charging equations for each stage",
      "Assuming steady-state operation only",
      "Neglecting diode voltage drops",
      "Using DC analysis only"
    ],
    correctAnswer: 0,
    explanation: "Voltage multipliers require transient analysis of the capacitor charging through each diode stage, considering the phase relationships and diode conduction angles."
  },
  {
    id: "hard-49",
    question: "The noise in an avalanche photodiode is characterized by the excess noise factor:",
    options: [
      "F = M[1 - (1 - k)(M - 1)²/M²]",
      "F = M",
      "F = M²",
      "F = kM"
    ],
    correctAnswer: 0,
    explanation: "The excess noise factor F = M[1 - (1 - k)(M - 1)²/M²] where k is the ionization ratio, accounting for the stochastic nature of avalanche multiplication."
  },
  {
    id: "hard-50",
    question: "The maximum power point of a solar cell occurs when:",
    options: [
      "dP/dV = 0",
      "I = I_sc",
      "V = V_oc",
      "R_L = R_s"
    ],
    correctAnswer: 0,
    explanation: "The maximum power point is found by solving dP/dV = d(IV)/dV = 0, which gives the operating point where the product of current and voltage is maximized."
  },
  {
    id: "hard-51",
    question: "The exact calculation of the switching losses in a power diode requires:",
    options: [
      "Integration of v(t)i(t) during switching transitions",
      "Considering only forward voltage drop",
      "Neglecting reverse recovery",
      "Using DC analysis only"
    ],
    correctAnswer: 0,
    explanation: "Switching losses E_sw = ∫v(t)i(t)dt during turn-on and turn-off transitions, requiring detailed knowledge of the switching waveforms."
  },
  {
    id: "hard-52",
    question: "The frequency response of a PIN diode switch is limited by:",
    options: [
      "The carrier lifetime in the I-region",
      "The RC time constant of the reverse-biased capacitance",
      "The forward resistance recovery time",
      "All of the above"
    ],
    correctAnswer: 3,
    explanation: "PIN diode switching speed is affected by carrier lifetime (forward bias), junction capacitance (reverse bias), and the time to sweep carriers out of the I-region."
  },
  {
    id: "hard-53",
    question: "The exact calculation of the photocurrent in a quantum well photodiode requires:",
    options: [
      "Solving the Schrödinger equation for confined states",
      "Using classical absorption coefficient only",
      "Neglecting quantum effects",
      "Assuming bulk material properties"
    ],
    correctAnswer: 0,
    explanation: "Quantum well photodiodes require quantum mechanical calculation of absorption coefficients and escape probabilities from the confined states."
  },
  {
    id: "hard-54",
    question: "The temperature dependence of the impact ionization coefficients is given by:",
    options: [
      "α, β ∝ exp(-b/E)",
      "α, β ∝ T^{-1/2}",
      "α, β ∝ T",
      "α, β = constant"
    ],
    correctAnswer: 0,
    explanation: "The ionization coefficients follow α, β = A exp(-b/E), where E is the electric field, and both A and b have temperature dependencies."
  },
  {
    id: "hard-55",
    question: "The maximum theoretical efficiency of a rectifier circuit is limited by:",
    options: [
      "The diode's ideality factor",
      "The fundamental quantum limit of rectification",
      "The series resistance only",
      "The junction capacitance"
    ],
    correctAnswer: 1,
    explanation: "There is a fundamental quantum limit to rectification efficiency related to the uncertainty principle and the diode's nonlinearity, beyond which higher efficiency is impossible."
  },
  {
    id: "hard-56",
    question: "The exact analysis of a diode ring mixer requires:",
    options: [
      "Balanced circuit analysis with transformer symmetry",
      "Single diode analysis only",
      "Neglecting LO pumping effects",
      "DC analysis only"
    ],
    correctAnswer: 0,
    explanation: "Diode ring mixers require balanced circuit analysis considering transformer symmetry, diode matching, and the large-signal LO pumping effects on each diode."
  },
  {
    id: "hard-57",
    question: "The noise in a diode mixer is dominated by:",
    options: [
      "Shot noise from the DC bias current",
      "Thermal noise from the series resistance",
      "LO noise converted to IF",
      "All of the above"
    ],
    correctAnswer: 3,
    explanation: "Mixer noise includes shot noise from rectified current, thermal noise from loss elements, and converted LO noise, requiring careful analysis of all contributions."
  },
  {
    id: "hard-58",
    question: "The maximum frequency of operation of a backward diode is limited by:",
    options: [
      "The tunneling time",
      "The RC time constant",
      "The carrier transit time",
      "The quantum capacitance"
    ],
    correctAnswer: 0,
    explanation: "Backward diodes are limited by the tunneling time τ_t ≈ ħ/ΔE, where ΔE is the energy range over which tunneling occurs, typically giving very high frequency capability."
  },
  {
    id: "hard-59",
    question: "The exact calculation of the open-circuit voltage in a solar cell requires:",
    options: [
      "Solving I_ph - I_s(exp(V_oc/ηV_T) - 1) = 0",
      "V_oc = ηV_Tln(I_ph/I_s)",
      "V_oc = I_phR_sh",
      "V_oc = constant"
    ],
    correctAnswer: 1,
    explanation: "The open-circuit voltage is found from I_ph = I_s(exp(V_oc/ηV_T) - 1), giving V_oc ≈ ηV_Tln(I_ph/I_s) for I_ph >> I_s."
  },
  {
    id: "hard-60",
    question: "The temperature coefficient of the solar cell efficiency is:",
    options: [
      "Negative due to decreasing V_oc",
      "Positive due to increasing I_sc",
      "Zero",
      "Non-monotonic"
    ],
    correctAnswer: 0,
    explanation: "Solar cell efficiency typically decreases with temperature due to the dominant effect of decreasing V_oc (≈ -2.3mV/°C for silicon) outweighing the small increase in I_sc."
  },
  {
    id: "hard-61",
    question: "The exact calculation of the series resistance in a solar cell requires:",
    options: [
      "R_s = -dV/dI at I = I_sc",
      "R_s = V_oc/I_sc",
      "R_s = constant",
      "R_s = 0"
    ],
    correctAnswer: 0,
    explanation: "Series resistance can be extracted from the I-V curve as R_s = -dV/dI measured at I = I_sc, where the diode is effectively short-circuited."
  },
  {
    id: "hard-62",
    question: "The harmonic balance analysis of a diode mixer requires:",
    options: [
      "Solving for multiple frequency components simultaneously",
      "DC analysis only",
      "Small-signal analysis only",
      "Linear circuit theory"
    ],
    correctAnswer: 0,
    explanation: "Harmonic balance methods solve for the steady-state solution by balancing currents at all significant harmonics, essential for mixer analysis with large LO signals."
  },
  {
    id: "hard-63",
    question: "The maximum efficiency of a parametric diode converter is limited by:",
    options: [
      "The Manley-Rowe relations",
      "The diode's breakdown voltage",
      "The series resistance",
      "The junction capacitance"
    ],
    correctAnswer: 0,
    explanation: "The Manley-Rowe relations provide fundamental limits on power conversion in nonlinear reactances: ∑(mP_m/ω_m) = 0 for lossless converters."
  },
  {
    id: "hard-64",
    question: "The exact calculation of the third-order intercept point in a diode mixer requires:",
    options: [
      "Taylor series expansion to third order",
      "Small-signal analysis only",
      "DC analysis only",
      "Linear analysis"
    ],
    correctAnswer: 0,
    explanation: "The third-order intercept point is found from the third-order term in the Taylor expansion of the diode's nonlinear characteristic."
  },
  {
    id: "hard-65",
    question: "The quantum limit of detection for a photodiode is:",
    options: [
      "NEP = hf/η√(2Δf)",
      "NEP = hf/η",
      "NEP = kT/Δf",
      "NEP = constant"
    ],
    correctAnswer: 0,
    explanation: "The quantum limit for a perfect photodiode (η=1) is NEP = hf√(2Δf), representing the minimum detectable power for a given bandwidth."
  },
  {
    id: "hard-66",
    question: "The exact analysis of a diode frequency multiplier requires:",
    options: [
      "Large-signal analysis with harmonic generation",
      "Small-signal analysis only",
      "DC analysis only",
      "Linear circuit theory"
    ],
    correctAnswer: 0,
    explanation: "Frequency multipliers operate in large-signal regime where the diode is driven into strong nonlinearity, requiring analysis of harmonic generation."
  },
  {
    id: "hard-67",
    question: "The temperature dependence of the solar cell's fill factor is:",
    options: [
      "Decreasing with temperature",
      "Increasing with temperature",
      "Constant",
      "Non-monotonic"
    ],
    correctAnswer: 0,
    explanation: "Fill factor typically decreases with increasing temperature due to the decreasing V_oc and the diode's ideality factor temperature dependence."
  },
  {
    id: "hard-68",
    question: "The exact calculation of the conversion loss in a diode mixer requires:",
    options: [
      "L_c = P_RF/P_IF",
      "L_c = P_LO/P_RF",
      "L_c = P_IF/P_RF",
      "L_c = constant"
    ],
    correctAnswer: 0,
    explanation: "Conversion loss L_c = P_RF(input)/P_IF(output), typically expressed in dB, and depends on diode parameters, matching, and LO power."
  },
  {
    id: "hard-69",
    question: "The maximum theoretical efficiency of a betavoltaic cell is limited by:",
    options: [
      "The semiconductor bandgap",
      "The beta particle energy spectrum",
      "The junction depth",
      "All of the above"
    ],
    correctAnswer: 3,
    explanation: "Betavoltaic efficiency is limited by the bandgap (for carrier generation), the beta spectrum (energy deposition), and junction design (collection efficiency)."
  },
  {
    id: "hard-70",
    question: "The exact analysis of a diode detector's video resistance requires:",
    options: [
      "R_v = 1/(dI/dV) at the operating point",
      "R_v = V/I",
      "R_v = constant",
      "R_v = 0"
    ],
    correctAnswer: 0,
    explanation: "The video resistance is the small-signal resistance at the operating point: R_v = 1/(dI/dV) = ηV_T/(I + I_s)."
  },
  {
    id: "hard-71",
    question: "The quantum efficiency of a single photon avalanche diode (SPAD) is given by:",
    options: [
      "η_SPAD = η_trigger × η_geometric",
      "η_SPAD = η_trigger only",
      "η_SPAD = η_geometric only",
      "η_SPAD = constant"
    ],
    correctAnswer: 0,
    explanation: "SPAD quantum efficiency includes the trigger probability η_trigger (avalanche initiation) and geometric efficiency η_geometric (photon absorption)."
  },
  {
    id: "hard-72",
    question: "The exact calculation of the diode's junction temperature requires:",
    options: [
      "T_j = T_a + P_d × θ_JA",
      "T_j = T_a only",
      "T_j = constant",
      "T_j = P_d/R_th"
    ],
    correctAnswer: 0,
    explanation: "Junction temperature is calculated from ambient temperature plus the power dissipation times the junction-to-ambient thermal resistance: T_j = T_a + P_d × θ_JA."
  },
  {
    id: "hard-73",
    question: "The frequency response of a photoconductive detector is limited by:",
    options: [
      "The carrier lifetime",
      "The RC time constant",
      "The transit time",
      "All of the above"
    ],
    correctAnswer: 3,
    explanation: "Photoconductive detectors are limited by carrier lifetime (gain-bandwidth product), RC time constant, and sometimes transit time effects."
  },
  {
    id: "hard-74",
    question: "The exact analysis of a diode's reverse recovery requires solving:",
    options: [
      "The continuity equation with time-dependent boundary conditions",
      "Ohm's law only",
      "The ideal diode equation",
      "DC analysis only"
    ],
    correctAnswer: 0,
    explanation: "Reverse recovery analysis requires solving the continuity equations for minority carriers with the boundary condition changing abruptly at switching."
  },
  {
    id: "hard-75",
    question: "The maximum power handling of a varactor diode is limited by:",
    options: [
      "Thermal considerations",
      "Breakdown voltage",
      "The maximum RF voltage swing",
      "All of the above"
    ],
    correctAnswer: 3,
    explanation: "Varactor power handling is limited by thermal dissipation, breakdown voltage not being exceeded, and the maximum RF swing staying within the useful capacitance range."
  },
  {
    id: "hard-76",
    question: "The exact calculation of the diode's series resistance requires:",
    options: [
      "R_s = dV/dI at high forward current",
      "R_s = V/I at low current",
      "R_s = constant",
      "R_s = 0"
    ],
    correctAnswer: 0,
    explanation: "Series resistance is extracted from the high-current region where the I-V curve becomes linear: R_s = dV/dI for I >> I_s."
  },
  {
    id: "hard-77",
    question: "The quantum efficiency of an organic photodiode is limited by:",
    options: [
      "The exciton diffusion length",
      "The charge collection efficiency",
      "The electrode transparency",
      "All of the above"
    ],
    correctAnswer: 3,
    explanation: "Organic photodiodes have efficiency limited by exciton diffusion to interfaces, charge separation efficiency, and electrode transparency for light absorption."
  },
  {
    id: "hard-78",
    question: "The exact analysis of a diode's temperature distribution requires solving:",
    options: [
      "The heat diffusion equation",
      "Ohm's law only",
      "The ideal diode equation",
      "Poisson's equation"
    ],
    correctAnswer: 0,
    explanation: "Temperature distribution requires solution of the heat diffusion equation ∇·(κ∇T) = -q, where q is the heat generation rate per unit volume."
  },
  {
    id: "hard-79",
    question: "The maximum frequency of operation of a IMPATT diode is given by:",
    options: [
      "f_max = v_sat/2πL",
      "f_max = 1/(2π√(LC))",
      "f_max = 1/2τ_d",
      "f_max = v_sat/2W"
    ],
    correctAnswer: 2,
    explanation: "IMPATT diode maximum frequency is f_max = 1/2τ_d, where τ_d is the transit time through the drift region, typically giving operation up to several hundred GHz."
  },
  {
    id: "hard-80",
    question: "The exact calculation of the diode's junction capacitance requires:",
    options: [
      "C_j = dQ/dV = εA/W",
      "C_j = constant",
      "C_j = I/V",
      "C_j = Q/V"
    ],
    correctAnswer: 0,
    explanation: "Junction capacitance is C_j = dQ/dV = εA/W, where W is the depletion width that varies with applied voltage."
  },
  {
    id: "hard-81",
    question: "The quantum efficiency of a quantum dot photodiode is enhanced by:",
    options: [
      "Intermediate band absorption",
      "Carrier multiplication",
      "Tunable absorption spectrum",
      "All of the above"
    ],
    correctAnswer: 3,
    explanation: "Quantum dot photodiodes can achieve enhanced efficiency through intermediate bands, carrier multiplication (impact ionization), and spectrum tuning via size control."
  },
  {
    id: "hard-82",
    question: "The exact analysis of a diode's noise performance requires:",
    options: [
      "Calculation of the noise spectral density",
      "DC analysis only",
      "Small-signal analysis only",
      "Linear analysis"
    ],
    correctAnswer: 0,
    explanation: "Noise analysis requires calculation of the spectral density of noise currents and voltages, including correlations between different noise sources."
  },
  {
    id: "hard-83",
    question: "The maximum efficiency of a thermophotovoltaic cell is limited by:",
    options: [
      "The Carnot efficiency",
      "The semiconductor bandgap",
      "The photon recycling efficiency",
      "All of the above"
    ],
    correctAnswer: 3,
    explanation: "Thermophotovoltaic efficiency is fundamentally limited by Carnot efficiency, practically limited by bandgap matching to the thermal spectrum, and can be enhanced by photon recycling."
  },
  {
    id: "hard-84",
    question: "The exact calculation of the diode's thermal resistance requires:",
    options: [
      "θ_JA = (T_j - T_a)/P_d",
      "θ_JA = constant",
      "θ_JA = R_th",
      "θ_JA = 0"
    ],
    correctAnswer: 0,
    explanation: "Thermal resistance is defined as θ_JA = (T_j - T_a)/P_d, where P_d is the power dissipation, and depends on package and cooling design."
  },
  {
    id: "hard-85",
    question: "The quantum efficiency of a superconducting nanowire single photon detector is:",
    options: [
      "η_SNSPD = η_absorption × η_trigger",
      "η_SNSPD = constant",
      "η_SNSPD = 1",
      "η_SNSPD = 0"
    ],
    correctAnswer: 0,
    explanation: "SNSPD quantum efficiency includes photon absorption probability and the trigger probability for creating a normal hotspot that leads to detection."
  },
  {
    id: "hard-86",
    question: "The exact analysis of a diode's harmonic generation requires:",
    options: [
      "Large-signal analysis with Volterra series",
      "Small-signal analysis only",
      "DC analysis only",
      "Linear analysis"
    ],
    correctAnswer: 0,
    explanation: "Harmonic generation analysis requires large-signal methods like Volterra series or harmonic balance to account for the strong nonlinearity."
  },
  {
    id: "hard-87",
    question: "The maximum power density of a laser diode is limited by:",
    options: [
      "Catastrophic optical damage",
      "Thermal rollover",
      "Series resistance",
      "All of the above"
    ],
    correctAnswer: 3,
    explanation: "Laser diode power is limited by catastrophic optical damage at the facets, thermal rollover from heating, and series resistance causing excessive voltage drop."
  },
  {
    id: "hard-88",
    question: "The exact calculation of the diode's series inductance requires:",
    options: [
      "L_s = (1/2π)√(1/f_r² - R_s²C_j²)",
      "L_s = constant",
      "L_s = 0",
      "L_s = R_s/2πf"
    ],
    correctAnswer: 0,
    explanation: "Series inductance can be extracted from the self-resonant frequency f_r: L_s = (1/2π)²(1/f_r² - R_s²C_j²)/C_j."
  },
  {
    id: "hard-89",
    question: "The quantum efficiency of a photomultiplier tube is given by:",
    options: [
      "η_PMT = η_cathode × (δ)^n",
      "η_PMT = constant",
      "η_PMT = 1",
      "η_PMT = 0"
    ],
    correctAnswer: 0,
    explanation: "PMT quantum efficiency includes the photocathode efficiency η_cathode multiplied by the gain from n stages with secondary emission ratio δ."
  },
  {
    id: "hard-90",
    question: "The exact analysis of a diode's intermodulation distortion requires:",
    options: [
      "Two-tone analysis with Volterra series",
      "Single-tone analysis only",
      "DC analysis only",
      "Linear analysis"
    ],
    correctAnswer: 0,
    explanation: "Intermodulation distortion analysis requires two-tone excitation and nonlinear analysis methods like Volterra series to calculate the IMD products."
  },
  {
    id: "hard-91",
    question: "The maximum efficiency of a rectifier at mm-wave frequencies is limited by:",
    options: [
      "The diode's cutoff frequency",
      "Impedance matching losses",
      "Parasitic capacitances and inductances",
      "All of the above"
    ],
    correctAnswer: 3,
    explanation: "Mm-wave rectifier efficiency is limited by diode f_max, matching network losses, and parasitic effects that become significant at high frequencies."
  },
  {
    id: "hard-92",
    question: "The exact calculation of the diode's noise temperature requires:",
    options: [
      "T_n = (F - 1)T_0",
      "T_n = constant",
      "T_n = 0",
      "T_n = T_0"
    ],
    correctAnswer: 0,
    explanation: "Noise temperature is related to noise figure by T_n = (F - 1)T_0, where T_0 is the reference temperature (290K)."
  },
  {
    id: "hard-93",
    question: "The quantum efficiency of a transition edge sensor is:",
    options: [
      "η_TES = η_absorption × η_thermalization",
      "η_TES = constant",
      "η_TES = 1",
      "η_TES = 0"
    ],
    correctAnswer: 0,
    explanation: "TES quantum efficiency includes photon absorption probability and the efficiency of energy thermalization in the absorber."
  },
  {
    id: "hard-94",
    question: "The exact analysis of a diode's phase noise requires:",
    options: [
      "Calculation of the noise spectral density around the carrier",
      "DC analysis only",
      "Small-signal analysis only",
      "Linear analysis"
    ],
    correctAnswer: 0,
    explanation: "Phase noise analysis requires calculation of the noise spectral density in the frequency domain around the oscillation frequency."
  },
  {
    id: "hard-95",
    question: "The maximum power added efficiency of a diode amplifier is:",
    options: [
      "PAE = (P_out - P_in)/P_DC",
      "PAE = P_out/P_in",
      "PAE = constant",
      "PAE = 0"
    ],
    correctAnswer: 0,
    explanation: "Power added efficiency PAE = (P_out - P_in)/P_DC, accounting for both RF output power and DC power consumption."
  },
  {
    id: "hard-96",
    question: "The exact calculation of the diode's conversion efficiency requires:",
    options: [
      "η_conv = P_out/P_in",
      "η_conv = constant",
      "η_conv = 1",
      "η_conv = 0"
    ],
    correctAnswer: 0,
    explanation: "Conversion efficiency is defined as η_conv = P_out/P_in for power converters, or η_conv = V_out/V_in for voltage multipliers."
  },
  {
    id: "hard-97",
    question: "The quantum efficiency of a single electron transistor is:",
    options: [
      "η_SET = η_tunneling × η_electrostatic",
      "η_SET = constant",
      "η_SET = 1",
      "η_SET = 0"
    ],
    correctAnswer: 0,
    explanation: "SET quantum efficiency includes the tunneling probability and the electrostatic coupling efficiency to the sensing electrode."
  },
  {
    id: "hard-98",
    question: "The exact analysis of a diode's stability requires:",
    options: [
      "Nyquist analysis of the small-signal equivalent circuit",
      "DC analysis only",
      "Large-signal analysis only",
      "Linear analysis"
    ],
    correctAnswer: 0,
    explanation: "Stability analysis requires Nyquist analysis of the small-signal equivalent circuit to determine if oscillations will occur."
  },
  {
    id: "hard-99",
    question: "The maximum quantum efficiency of an ideal photodiode is:",
    options: [
      "100%",
      "50%",
      "25%",
      "0%"
    ],
    correctAnswer: 0,
    explanation: "An ideal photodiode can have 100% quantum efficiency if every photon creates an electron-hole pair that is collected."
  },
  {
    id: "hard-100",
    question: "The exact calculation of the diode's ultimate frequency limit requires:",
    options: [
      "f_max = 1/(2πτ_min)",
      "f_max = constant",
      "f_max = 0",
      "f_max = 1/RC"
    ],
    correctAnswer: 0,
    explanation: "The ultimate frequency limit is set by the minimum response time τ_min of the diode's physical processes, giving f_max = 1/(2πτ_min)."
  }
];

export const electronicsQuestions = {
  easy: easyQuestions,
  medium: mediumQuestions,
  hard: hardQuestions,
} as const;
