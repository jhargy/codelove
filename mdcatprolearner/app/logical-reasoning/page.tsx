// app/logical-reasoning/page.tsx
import { Metadata } from 'next'

import LogicalReasoningClient from './LogicalReasoningClient'

export const metadata: Metadata = {
  title: 'Logical Reasoning - MDCAT Preparation | ProLearner',
  description: 'Master Logical Reasoning for MDCAT with comprehensive topics, analytical thinking, and problem-solving strategies as per PMDC syllabus.',
  keywords: 'logical reasoning mdcat, analytical reasoning, critical thinking, problem solving, PMDC syllabus, MDCAT preparation',
  openGraph: {
    title: 'Logical Reasoning - Complete MDCAT Preparation',
    description: 'Master Logical Reasoning for MDCAT with comprehensive topics and analytical thinking exercises',
    type: 'website',
    url: 'https://mdcatprolearner.com/logical-reasoning',
  }
}

export default function LogicalReasoningPage() {
  return <LogicalReasoningClient />
}