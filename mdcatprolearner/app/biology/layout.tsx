import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Biology - Complete MDCAT Preparation | MDCAT Pro',
  description: 'Master Biology for MDCAT with comprehensive syllabus coverage, 1200+ practice questions, detailed explanations, and progress tracking. PMDC-aligned content.',
  keywords: 'biology mdcat, mdcat biology preparation, biology syllabus, pmdc biology, medical entrance biology',
  openGraph: {
    title: 'Biology - Complete MDCAT Preparation | MDCAT Pro',
    description: 'Master Biology for MDCAT with comprehensive syllabus coverage and 1200+ practice questions',
    type: 'website',
  }
}

export default function BiologyLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}