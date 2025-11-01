export interface Question {
  id: string;
  question: string;
  options: string[];
  correctAnswer: number;
  explanation: string;
}

export const muscleContractionQuestions: Question[] = [
  {
    id: "MuscleContraction-1",
    question: "Which ion is primarily responsible for initiating muscle contraction?",
    options: ["Na⁺", "K⁺", "Ca²⁺", "Mg²⁺"],
    correctAnswer: 2,
    explanation:
      "Calcium ions bind to troponin, leading to the displacement of tropomyosin and exposure of actin binding sites.",
  },
  {
    id: "MuscleContraction-2",
    question: "The sliding filament theory of muscle contraction explains:",
    options: [
      "ATP synthesis in mitochondria",
      "How actin and myosin filaments slide past each other",
      "The breakdown of glycogen",
      "How calcium enters muscle cells",
    ],
    correctAnswer: 1,
    explanation:
      "The sliding filament theory describes how actin and myosin filaments slide past each other to shorten the sarcomere.",
  },
  {
    id: "MuscleContraction-3",
    question: "Which protein blocks the myosin-binding sites on actin in a relaxed muscle?",
    options: ["Troponin", "Tropomyosin", "Actinin", "Myosin"],
    correctAnswer: 1,
    explanation:
      "Tropomyosin covers the binding sites on actin when the muscle is at rest.",
  },
  {
    id: "MuscleContraction-4",
    question: "What happens to the sarcomere during muscle contraction?",
    options: [
      "A band shortens",
      "I band and H zone shorten",
      "Z-lines move apart",
      "Sarcomere length increases",
    ],
    correctAnswer: 1,
    explanation:
      "During contraction, the I band and H zone shorten while the A band remains the same.",
  },
  {
    id: "MuscleContraction-5",
    question: "Which molecule provides energy for muscle contraction?",
    options: ["ADP", "ATP", "Creatine", "NADH"],
    correctAnswer: 1,
    explanation:
      "ATP provides the energy needed for the cross-bridge cycle in muscle contraction.",
  },
  {
    id: "MuscleContraction-6",
    question: "The myosin head binds to which site on actin during contraction?",
    options: ["Troponin site", "Active site", "ATP binding site", "Z-line"],
    correctAnswer: 1,
    explanation:
      "The myosin head attaches to the exposed active sites on actin to form cross-bridges.",
  },
  {
    id: "MuscleContraction-7",
    question: "Which enzyme is present in the myosin head to hydrolyze ATP?",
    options: ["ATP synthase", "ATPase", "Phosphorylase", "Hexokinase"],
    correctAnswer: 1,
    explanation:
      "Myosin ATPase hydrolyzes ATP to provide energy for the power stroke.",
  },
  {
    id: "MuscleContraction-8",
    question: "What causes the detachment of the myosin head from actin?",
    options: ["Release of Ca²⁺", "Binding of ATP", "Hydrolysis of ATP", "Release of ADP"],
    correctAnswer: 1,
    explanation:
      "ATP binding to the myosin head causes it to detach from actin, resetting the cycle.",
  },
  {
    id: "MuscleContraction-9",
    question: "Which structure stores calcium ions required for contraction?",
    options: [
      "Golgi apparatus",
      "Mitochondria",
      "Sarcoplasmic reticulum",
      "Endoplasmic reticulum",
    ],
    correctAnswer: 2,
    explanation:
      "The sarcoplasmic reticulum (SR) stores and releases calcium ions during contraction.",
  },
  {
    id: "MuscleContraction-10",
    question: "Rigor mortis occurs because:",
    options: [
      "ATP is not available to detach myosin from actin",
      "Excess calcium in muscles",
      "Depletion of glycogen",
      "Nerve impulses continue after death",
    ],
    correctAnswer: 0,
    explanation:
      "In rigor mortis, ATP is absent, so myosin heads cannot detach from actin, causing stiffness.",
  },
];
