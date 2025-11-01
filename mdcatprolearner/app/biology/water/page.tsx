// app/biology/biological-molecules/quiz/page.tsx
import { Metadata } from 'next'
import BiologicalMoleculesQuizClient from '../quiz/BiologicalMoleculesImportanceOfWaterClient'

export const metadata: Metadata = {
  title: 'MDCAT Biological Molecules Quiz | Practice MCQs with Explanations',
  description: 'Master Biological Molecules for MDCAT with interactive MCQs. Practice carbohydrates, proteins, lipids, nucleic acids, and conjugated molecules with instant feedback and detailed explanations.',
  keywords: 'mdcat biological molecules quiz, carbohydrates, proteins, lipids, nucleic acids, DNA, RNA, conjugated molecules, biochemistry, medical entrance exam',
  openGraph: {
    title: 'MDCAT Biological Molecules Quiz - Practice MCQs',
    description: 'Interactive quiz for Biological Molecules with instant feedback and explanations',
    type: 'website',
    url: 'https://mdcatprolearner.com/biology/biological-molecules/quiz',
  },
  robots: 'index, follow',
  authors: [{ name: 'ProLearner MDCAT Team' }],
}

// Structured data for search engines
const structuredData = {
  "@context": "https://schema.org",
  "@type": "Quiz",
  "name": "MDCAT Biological Molecules Quiz",
  "description": "Practice MDCAT Biological Molecules questions with multiple choice questions and detailed explanations covering carbohydrates, proteins, lipids, nucleic acids, and conjugated molecules.",
  "educationalLevel": "advanced",
  "assesses": "Knowledge of biological molecules for medical entrance examinations",
  "numberOfQuestions": 30,
  "educationalAlignment": {
    "@type": "AlignmentObject",
    "alignmentType": "educationalSubject",
    "targetName": "Biology"
  },
  "hasPart": [
    {
      "@type": "Question",
      "educationalLevel": "easy",
      "typicalAgeRange": "17-25"
    },
    {
      "@type": "Question",
      "educationalLevel": "medium",
      "typicalAgeRange": "17-25"
    },
    {
      "@type": "Question",
      "educationalLevel": "hard",
      "typicalAgeRange": "17-25"
    }
  ]
}

export default function BiologicalMoleculesQuizPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <BiologicalMoleculesQuizClient />
    </>
  )
}