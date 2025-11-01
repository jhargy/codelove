export interface Question {
  id: string;
  question: string;
  options: string[];
  correctAnswer: number; // index of correct option
  explanation: string;
}

export const musclesQuestions: Question[] = [
  {
    id: "Muscle-1",
    question: "Which type of muscle is involuntary and non-striated?",
    options: [
      "Skeletal muscle",
      "Smooth muscle",
      "Cardiac muscle",
      "Voluntary muscle",
    ],
    correctAnswer: 1,
    explanation:
      "Smooth muscles are involuntary and non-striated. They are found in walls of internal organs like stomach and intestines.",
  },
  {
    id: "Muscle-2",
    question: "The functional contractile unit of a muscle fiber is:",
    options: ["Myofibril", "Sarcomere", "Actin filament", "Myosin filament"],
    correctAnswer: 1,
    explanation:
      "A sarcomere is the basic contractile unit of striated muscle fibers, bounded by Z-lines.",
  },
  {
    id: "Muscle-3",
    question: "Which protein blocks the binding site on actin in a resting muscle?",
    options: ["Troponin", "Tropomyosin", "Myosin", "ATPase"],
    correctAnswer: 1,
    explanation:
      "Tropomyosin blocks the actin binding site in resting muscle. Troponin controls its movement during contraction.",
  },
  {
    id: "Muscle-4",
    question: "Cardiac muscle differs from skeletal muscle because:",
    options: [
      "It is voluntary",
      "It is multinucleated",
      "It has intercalated discs",
      "It lacks striations",
    ],
    correctAnswer: 2,
    explanation:
      "Cardiac muscles are striated and involuntary. Their unique feature is the presence of intercalated discs that help synchronized contraction.",
  },
  {
    id: "Muscle-5",
    question: "Which ion is directly responsible for initiating muscle contraction?",
    options: ["Na⁺", "K⁺", "Ca²⁺", "Mg²⁺"],
    correctAnswer: 2,
    explanation:
      "Calcium ions (Ca²⁺) bind to troponin, causing tropomyosin to shift and expose actin binding sites for myosin.",
  },
];
