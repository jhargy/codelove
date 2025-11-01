// app/biology/page.tsx
import { Metadata } from 'next'
import BiologyClient from './BiologyClient'

export const metadata: Metadata = {
  title: 'Biology - Complete MDCAT Preparation | ProLearner',
  description: 'Master Biology for MDCAT with comprehensive topics, interactive lessons, and expert guidance. Cover all chapters from Biological Molecules to Biotechnology.',
  keywords: 'biology mdcat, biological molecules, enzymes, cell structure, human physiology, genetics, evolution, mdcat preparation',
  openGraph: {
    title: 'Biology - Complete MDCAT Preparation',
    description: 'Master Biology for MDCAT with comprehensive topics and interactive lessons',
    type: 'website',
    url: 'https://mdcatprolearner.com/biology',
  }
}

export default function BiologyPage() {
  return <BiologyClient />
}