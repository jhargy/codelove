// app/physics/page.tsx
import { Metadata } from 'next'
import PhysicsClient from './PhysicsClient'

export const metadata: Metadata = {
  title: 'Physics - Complete MDCAT Preparation | ProLearner',
  description: 'Master Physics for MDCAT with comprehensive topics, interactive lessons, and expert guidance. Cover all chapters from Mechanics to Modern Physics.',
  keywords: 'physics mdcat, mechanics, thermodynamics, electromagnetism, modern physics, mdcat preparation',
  openGraph: {
    title: 'Physics - Complete MDCAT Preparation',
    description: 'Master Physics for MDCAT with comprehensive topics and interactive lessons',
    type: 'website',
    url: 'https://mdcatprolearner.com/physics',
  }
}

export default function PhysicsPage() {
  return <PhysicsClient />
}