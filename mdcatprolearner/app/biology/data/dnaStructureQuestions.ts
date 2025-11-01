export interface Question {
  id: string;
  question: string;
  options: string[];
  correctAnswer: number;
  explanation: string;
}

export const dnaStructureQuestions: Question[] = [
  {
    id: "dna-1",
    question: "Who are credited with discovering the double helix structure of DNA?",
    options: [
      "Gregor Mendel and Charles Darwin",
      "James Watson and Francis Crick",
      "Rosalind Franklin and Maurice Wilkins",
      "Erwin Chargaff and Linus Pauling"
    ],
    correctAnswer: 1,
    explanation: "James Watson and Francis Crick are credited with proposing the double helix model of DNA structure in 1953, based on X-ray diffraction data from Rosalind Franklin and Maurice Wilkins.",
  },
  {
    id: "dna-2",
    question: "Which of the following correctly describes the antiparallel nature of DNA strands?",
    options: [
      "Both strands run in the same 5' to 3' direction",
      "One strand runs 5' to 3' while the other runs 3' to 5'",
      "The strands are parallel but oriented in opposite directions",
      "The strands twist around each other in a random fashion"
    ],
    correctAnswer: 1,
    explanation: "DNA strands are antiparallel, meaning one strand runs in the 5' to 3' direction while the complementary strand runs in the 3' to 5' direction. This arrangement is crucial for DNA replication and other cellular processes.",
  },
  {
    id: "dna-3",
    question: "Which type of bond connects nucleotides in a DNA strand?",
    options: [
      "Hydrogen bonds",
      "Ionic bonds",
      "Phosphodiester bonds",
      "Glycosidic bonds"
    ],
    correctAnswer: 2,
    explanation: "Phosphodiester bonds connect nucleotides in a DNA strand, forming the sugar-phosphate backbone. These covalent bonds form between the 3' carbon of one nucleotide and the 5' carbon of the next nucleotide.",
  },
  {
    id: "dna-4",
    question: "According to Chargaff's rules, which base pairing is correct?",
    options: [
      "Adenine pairs with Guanine",
      "Cytosine pairs with Thymine",
      "Adenine pairs with Thymine",
      "Guanine pairs with Thymine"
    ],
    correctAnswer: 2,
    explanation: "Chargaff's rules state that in DNA, the amount of adenine equals the amount of thymine, and the amount of guanine equals the amount of cytosine. This led to the understanding that adenine pairs with thymine and guanine pairs with cytosine.",
  },
  {
    id: "dna-5",
    question: "How many hydrogen bonds form between guanine and cytosine?",
    options: [
      "One",
      "Two",
      "Three",
      "Four"
    ],
    correctAnswer: 2,
    explanation: "Guanine and cytosine form three hydrogen bonds between them, while adenine and thymine form only two hydrogen bonds. This difference contributes to the higher melting temperature of GC-rich DNA.",
  },
  {
    id: "dna-150",
    question: "What is the primary function of histone proteins in eukaryotic DNA?",
    options: [
      "To catalyze DNA replication",
      "To repair damaged DNA",
      "To package and organize DNA into nucleosomes",
      "To transcribe DNA into RNA"
    ],
    correctAnswer: 2,
    explanation: "Histone proteins package and organize DNA into structural units called nucleosomes. This packaging allows for the efficient storage of long DNA molecules within the nucleus and plays a crucial role in gene regulation.",
  },
];