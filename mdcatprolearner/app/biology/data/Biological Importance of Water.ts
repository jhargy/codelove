"use-client;"
export type Difficulty = keyof typeof waterBiologicalImportanceQuestions;

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

export const waterBiologicalImportanceQuestions = {
  easy: easyQuestions,
  medium: mediumQuestions,
  hard: hardQuestions,
} as const;
