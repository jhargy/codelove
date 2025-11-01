// app/biology/quiz/page.tsx
import { Metadata } from 'next'
import BiologicalMolecules from '../quiz/BiologicalMolecules'

export const metadata: Metadata = {
  title: 'Biological Molecules Quiz - MDCAT Preparation | ProLearner',
  description: 'Practice MDCAT Biological Molecules questions with interactive MCQs. Test your knowledge of carbohydrates, proteins, lipids, and nucleic acids with instant feedback.',
  keywords: 'mdcat biology quiz, biological molecules, carbohydrates, proteins, lipids, nucleic acids, mdcat preparation',
  openGraph: {
    title: 'Biological Molecules Quiz - MDCAT Practice',
    description: 'Interactive MDCAT Biological Molecules quiz with detailed explanations and performance tracking',
    type: 'website',
    url: 'https://mdcatprolearner.com/biology/quiz',
  }
}

export default function QuizPage() {
  return <BiologicalMolecules />
}