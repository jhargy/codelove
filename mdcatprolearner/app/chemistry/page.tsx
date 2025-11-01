// app/chemistry/page.tsx
import { Metadata } from 'next'
import ChemistryClient from '../chemistry/ChemistryClient'

export const metadata: Metadata = {
  title: 'Chemistry - Complete MDCAT Preparation | ProLearner',
  description: 'Master Chemistry for MDCAT with comprehensive topics covering fundamentals, organic chemistry, physical chemistry, and industrial applications.',
  keywords: 'chemistry mdcat, organic chemistry, physical chemistry, chemical equilibrium, thermodynamics, hydrocarbons, aldehydes, ketones, mdcat preparation',
  openGraph: {
    title: 'Chemistry - Complete MDCAT Preparation',
    description: 'Master Chemistry for MDCAT with comprehensive topics and expert guidance',
    type: 'website',
    url: 'https://mdcatprolearner.com/chemistry',
  }
}

export default function ChemistryPage() {
  return <ChemistryClient />
}