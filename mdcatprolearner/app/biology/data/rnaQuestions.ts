export interface Question {
  id: string;
  question: string;
  options: string[];
  correctAnswer: number;
  explanation: string;
}

export const rnaQuestions: Question[] = [
  {
    id: "rna-1",
    question: "Which nitrogenous base is found in RNA but not in DNA?",
    options: [
      "Adenine",
      "Guanine",
      "Uracil",
      "Cytosine"
    ],
    correctAnswer: 2,
    explanation: "Uracil is found in RNA but not in DNA. In DNA, thymine replaces uracil as the complementary base to adenine.",
  },
  {
    id: "rna-2",
    question: "What type of sugar is present in RNA nucleotides?",
    options: [
      "Deoxyribose",
      "Ribose",
      "Glucose",
      "Fructose"
    ],
    correctAnswer: 1,
    explanation: "RNA contains ribose sugar, while DNA contains deoxyribose sugar. The difference is that ribose has a hydroxyl group at the 2' position, while deoxyribose has a hydrogen atom.",
  },
  {
    id: "rna-3",
    question: "Which of the following types of RNA carries genetic information from DNA to the ribosome?",
    options: [
      "tRNA",
      "mRNA",
      "rRNA",
      "snRNA"
    ],
    correctAnswer: 1,
    explanation: "Messenger RNA (mRNA) carries genetic information from DNA in the nucleus to the ribosomes in the cytoplasm, where it serves as a template for protein synthesis.",
  },
  {
    id: "rna-4",
    question: "What is the function of transfer RNA (tRNA)?",
    options: [
      "Carries genetic information from DNA to ribosomes",
      "Forms the structural framework of ribosomes",
      "Carries amino acids to the ribosome",
      "Helps in processing of mRNA"
    ],
    correctAnswer: 2,
    explanation: "Transfer RNA (tRNA) carries specific amino acids to the ribosome during protein synthesis. Each tRNA molecule has an anticodon that recognizes a specific codon on the mRNA.",
  },
  {
    id: "rna-5",
    question: "Which process produces RNA from a DNA template?",
    options: [
      "Replication",
      "Transcription",
      "Translation",
      "Translocation"
    ],
    correctAnswer: 1,
    explanation: "Transcription is the process by which RNA is synthesized from a DNA template. This occurs in the nucleus of eukaryotic cells.",
  },
  // Add 145 more questions following the same pattern
  // ...
  {
    id: "rna-150",
    question: "Which of the following is a key difference between RNA and DNA?",
    options: [
      "RNA contains thymine, DNA contains uracil",
      "RNA is double-stranded, DNA is single-stranded",
      "RNA contains ribose sugar, DNA contains deoxyribose sugar",
      "RNA is only found in the nucleus, DNA is found throughout the cell"
    ],
    correctAnswer: 2,
    explanation: "The key difference is that RNA contains ribose sugar while DNA contains deoxyribose sugar. Additionally, RNA contains uracil instead of thymine, is typically single-stranded, and can be found in both the nucleus and cytoplasm.",
  },
];