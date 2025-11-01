// app/your-quiz-folder/page.tsx
import React from "react";
import ClientQuiz from "../quiz/CarbohydratesClient";

export const metadata = {
  title: "MDCAT Carbohydrates Quiz | Biology Practice",
  description:
    "Practice MDCAT Carbohydrates questions with MCQs. Test your knowledge of monosaccharides, disaccharides, polysaccharides, and their biological functions with explanations and instant feedback.",
  keywords:
    "mdcat, carbohydrates, biology, monosaccharides, disaccharides, polysaccharides, quiz, mcq, practice, medical, exam",
};

const structuredData = {
  "@context": "https://schema.org",
  "@type": "Quiz",
  name: "MDCAT Carbohydrates Quiz",
  description:
    "Practice MDCAT Carbohydrates questions with multiple choice questions and detailed explanations.",
  educationalLevel: "advanced",
  assesses: "Knowledge of carbohydrates for medical entrance exams",
  numberOfQuestions: 0, // client calculates actual number, placeholder here
};

export default function Page() {
  // We embed structured data here. If you prefer the exact question count in structuredData,
  // you can server-render it (e.g., import the questions on the server and set numberOfQuestions).
  return (
    <>
      <script
        type="application/ld+json"
        // stringified here for SEO crawlers
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <ClientQuiz />
    </>
  );
}
