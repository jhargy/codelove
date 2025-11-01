// pages/faq.tsx

import FAQSchema from "../components/FAQSchema";

const faqs = [
  { question: "What is MDCAT?", answer: "MDCAT is a medical entry test..." },
  { question: "How many MCQs are there?", answer: "There are 200 MCQs..." },
  { question: "Is negative marking applied?", answer: "Yes, -0.25 per wrong answer." },
];

export default function FAQPage() {
  return (
    <>
      <h1 className="text-3xl font-bold">Frequently Asked Questions</h1>

      {/* FAQ HTML UI */}
      <div className="mt-4 space-y-4">
        {faqs.map((faq, i) => (
          <div key={i}>
            <h3 className="font-semibold">{faq.question}</h3>
            <p>{faq.answer}</p>
          </div>
        ))}
      </div>

      {/* ✅ Structured Data with exact question count */}
      <FAQSchema faqs={faqs} />
    </>
  );
}
