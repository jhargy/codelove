export interface Question {
  id: string;
  question: string;
  options: string[];
  correctAnswer: number;
  explanation: string;
}

export const jointsQuestions: Question[] = [
  {
    id: "Joints-1",
    question: "Which type of joint allows movement in only one plane, such as the elbow?",
    options: ["Ball and socket joint", "Hinge joint", "Pivot joint", "Gliding joint"],
    correctAnswer: 1,
    explanation: "Hinge joints, like the elbow and knee, allow movement in a single plane (flexion and extension).",
  },
  {
    id: "Joints-2",
    question: "Which joint connects the skull to the vertebral column and allows nodding of the head?",
    options: ["Atlas-axis joint", "Atlanto-occipital joint", "Temporomandibular joint", "Sacroiliac joint"],
    correctAnswer: 1,
    explanation: "The atlanto-occipital joint between the atlas and occipital bone allows nodding movements of the head.",
  },
  {
    id: "Joints-3",
    question: "Which type of joint is found between the atlas and axis, allowing rotation of the head?",
    options: ["Pivot joint", "Hinge joint", "Saddle joint", "Ball and socket joint"],
    correctAnswer: 0,
    explanation: "The atlas-axis joint is a pivot joint, allowing rotational movement of the head side to side.",
  },
  {
    id: "Joints-4",
    question: "The shoulder and hip joints are examples of:",
    options: ["Saddle joints", "Ball and socket joints", "Hinge joints", "Gliding joints"],
    correctAnswer: 1,
    explanation: "Ball and socket joints allow movement in all directions, such as the hip and shoulder joints.",
  },
  {
    id: "Joints-5",
    question: "Which type of joint is found in the wrist between carpal bones?",
    options: ["Gliding joint", "Hinge joint", "Pivot joint", "Saddle joint"],
    correctAnswer: 0,
    explanation: "The carpal bones of the wrist have gliding joints that allow sliding movements.",
  },
  {
    id: "Joints-6",
    question: "The joint between the thumb and the wrist (carpometacarpal of the thumb) is:",
    options: ["Hinge joint", "Pivot joint", "Saddle joint", "Gliding joint"],
    correctAnswer: 2,
    explanation: "The thumb joint is a saddle joint, allowing movement in two directions with great flexibility.",
  },
  {
    id: "Joints-7",
    question: "Which joint connects the lower jaw to the skull?",
    options: ["Atlanto-occipital joint", "Temporomandibular joint", "Sacroiliac joint", "Ball and socket joint"],
    correctAnswer: 1,
    explanation: "The temporomandibular joint (TMJ) connects the mandible to the temporal bone of the skull.",
  },
  {
    id: "Joints-8",
    question: "Which type of joint provides the greatest range of motion?",
    options: ["Hinge joint", "Pivot joint", "Ball and socket joint", "Gliding joint"],
    correctAnswer: 2,
    explanation: "Ball and socket joints (like shoulder and hip) allow the widest range of motion in the body.",
  },
  {
    id: "Joints-9",
    question: "Which joint is immovable and found between bones of the skull?",
    options: ["Suture", "Synovial joint", "Saddle joint", "Pivot joint"],
    correctAnswer: 0,
    explanation: "Sutures are immovable fibrous joints that connect bones of the skull.",
  },
  {
    id: "Joints-10",
    question: "Which fluid lubricates synovial joints and reduces friction during movement?",
    options: ["Cerebrospinal fluid", "Synovial fluid", "Interstitial fluid", "Lymph"],
    correctAnswer: 1,
    explanation: "Synovial fluid lubricates the cavity of synovial joints, reducing friction and wear.",
  },
];
