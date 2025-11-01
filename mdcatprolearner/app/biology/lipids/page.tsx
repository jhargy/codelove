import React from "react";
import LipidsClient from "../quiz/lipidsClients";
import Header from "../../components/ui/Header";
import Footer from "../../components/ui/Footer";

export const metadata = {
  title: "MDCAT Biology Lipids MCQs | MDCAT PRO LEARNER",
  description:
    "Practice MDCAT Biology Lipids MCQs – Easy, Medium & Hard difficulty with explanations, review mode, and progress tracking.",
  keywords:
    "mdcat, biology, lipids, fats, quiz, mcqs, practice, medical test, study, test prep",
};

export default function Page() {
  return (
    <>
      <Header />
      <LipidsClient />
      <Footer />
    </>
  );
}
