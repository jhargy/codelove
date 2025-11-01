export interface Question {
  id: string;
  question: string;
  options: string[];
  correctAnswer: number;
  explanation: string;
}

export const skeletalMusclesQuestions: Question[] = [
  {
    id: "SkeletalMuscles-1",
    question: "Which of the following is the basic functional unit of skeletal muscle?",
    options: ["Myofibril", "Sarcomere", "Myosin", "Actin filament"],
    correctAnswer: 1,
    explanation:
      "The sarcomere is the structural and functional unit of skeletal muscle responsible for contraction, composed of actin and myosin filaments.",
  },
  {
    id: "SkeletalMuscles-2",
    question: "Which band of the sarcomere shortens during muscle contraction?",
    options: ["A band", "I band", "H zone", "Both I band and H zone"],
    correctAnswer: 3,
    explanation:
      "During contraction, the I band and H zone shorten, while the A band remains constant in length.",
  },
  {
    id: "SkeletalMuscles-3",
    question: "Which neurotransmitter is released at the neuromuscular junction?",
    options: ["Dopamine", "Acetylcholine", "Serotonin", "Norepinephrine"],
    correctAnswer: 1,
    explanation:
      "Acetylcholine is released at the neuromuscular junction to stimulate skeletal muscle contraction.",
  },
  {
    id: "SkeletalMuscles-4",
    question: "Which ion is essential for the initiation of skeletal muscle contraction?",
    options: ["Sodium", "Potassium", "Calcium", "Magnesium"],
    correctAnswer: 2,
    explanation:
      "Calcium ions bind to troponin, causing a shift in tropomyosin that exposes binding sites on actin filaments for myosin heads.",
  },
  {
    id: "SkeletalMuscles-5",
    question: "Which protein directly covers the myosin-binding sites on actin filaments?",
    options: ["Myosin", "Tropomyosin", "Troponin", "Actinin"],
    correctAnswer: 1,
    explanation:
      "Tropomyosin covers the myosin-binding sites on actin in a relaxed muscle; calcium binding to troponin moves tropomyosin to allow contraction.",
  },
];
