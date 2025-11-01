export interface Question {
  id: string;
  question: string;
  options: string[];
  correctAnswer: number;
  explanation: string;
}

export const arthritisQuestions: Question[] = [
  {
    id: "Arthritis-1",
    question: "What is the general definition of arthritis?",
    options: [
      "Inflammation of bones",
      "Inflammation of joints",
      "Degeneration of muscles",
      "Swelling of ligaments",
    ],
    correctAnswer: 1,
    explanation: "Arthritis is the inflammation of one or more joints, causing pain and stiffness.",
  },
  {
    id: "Arthritis-2",
    question: "Which type of arthritis is an autoimmune disorder?",
    options: [
      "Osteoarthritis",
      "Rheumatoid arthritis",
      "Gout",
      "Septic arthritis",
    ],
    correctAnswer: 1,
    explanation: "Rheumatoid arthritis is an autoimmune disease where the immune system attacks joint tissues.",
  },
  {
    id: "Arthritis-3",
    question: "Which type of arthritis is caused by the deposition of uric acid crystals?",
    options: ["Rheumatoid arthritis", "Osteoarthritis", "Gout", "Septic arthritis"],
    correctAnswer: 2,
    explanation: "Gout is caused by uric acid crystal deposition in joints, often affecting the big toe.",
  },
  {
    id: "Arthritis-4",
    question: "Which of the following is the most common form of arthritis in elderly people?",
    options: ["Osteoarthritis", "Rheumatoid arthritis", "Gout", "Septic arthritis"],
    correctAnswer: 0,
    explanation: "Osteoarthritis is the most common arthritis in older people due to wear and tear of cartilage.",
  },
  {
    id: "Arthritis-5",
    question: "Which symptom is most commonly associated with arthritis?",
    options: ["Shortness of breath", "Joint pain and stiffness", "Vision loss", "Muscle paralysis"],
    correctAnswer: 1,
    explanation: "Joint pain, swelling, and stiffness are classic symptoms of arthritis.",
  },
  {
    id: "Arthritis-6",
    question: "Which diagnostic test is commonly used for detecting rheumatoid arthritis?",
    options: ["X-ray", "MRI", "Rheumatoid factor blood test", "Ultrasound"],
    correctAnswer: 2,
    explanation: "Rheumatoid factor and anti-CCP antibody tests are useful in diagnosing rheumatoid arthritis.",
  },
  {
    id: "Arthritis-7",
    question: "In osteoarthritis, which structure of the joint is primarily affected?",
    options: ["Synovial membrane", "Cartilage", "Ligaments", "Tendons"],
    correctAnswer: 1,
    explanation: "Osteoarthritis results from the degeneration of articular cartilage covering bones.",
  },
  {
    id: "Arthritis-8",
    question: "Which type of arthritis can occur due to bacterial infection?",
    options: ["Osteoarthritis", "Rheumatoid arthritis", "Gout", "Septic arthritis"],
    correctAnswer: 3,
    explanation: "Septic arthritis occurs when bacteria infect a joint, causing pain, redness, and swelling.",
  },
  {
    id: "Arthritis-9",
    question: "Which lifestyle modification is most recommended for arthritis patients?",
    options: [
      "Complete bed rest",
      "Regular low-impact exercise",
      "Avoid all movement",
      "High-calorie diet",
    ],
    correctAnswer: 1,
    explanation: "Low-impact exercises like swimming or walking help maintain joint flexibility in arthritis patients.",
  },
  {
    id: "Arthritis-10",
    question: "Which vitamin deficiency may worsen arthritis symptoms due to poor bone health?",
    options: ["Vitamin A", "Vitamin C", "Vitamin D", "Vitamin K"],
    correctAnswer: 2,
    explanation: "Vitamin D deficiency weakens bones and may worsen arthritis symptoms.",
  },
];
