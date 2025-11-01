// app/english/page.tsx
import { Metadata } from 'next'
import EnglishClient from './EnglishClient'

export const metadata: Metadata = {
  title: 'English - MDCAT 2025 Preparation | ProLearner',
  description: 'Master English for MDCAT 2025 with comprehensive grammar, vocabulary, comprehension, and writing skills as per PMDC syllabus.',
  keywords: 'english mdcat, mdcat english 2025, grammar, vocabulary, comprehension, sentence correction, pmdc syllabus',
  openGraph: {
    title: 'English - MDCAT 2025 Preparation',
    description: 'Master English for MDCAT 2025 with comprehensive grammar and vocabulary',
    type: 'website',
    url: 'https://mdcatprolearner.com/english',
  }
}

export default function EnglishPage() {
  return <EnglishClient />
}