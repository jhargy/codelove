export type Difficulty = keyof typeof dynamicsQuestions;

export type Question = {
  id: string;
  question: string;
  options: string[];
  correctAnswer: number;
  explanation: string;
};

export const easyQuestions: Question[] = [
    
];

export const mediumQuestions: Question[] = [
];

export const hardQuestions: Question[] = [
];

export const dynamicsQuestions = {
  easy: easyQuestions,
  medium: mediumQuestions,
  hard: hardQuestions,
} as const;
