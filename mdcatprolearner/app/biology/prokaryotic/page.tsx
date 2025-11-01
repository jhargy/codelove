
//proteins
// app/blood-vessels/page.tsx
import Header from "../../components/ui/Header";
import Footer from "../../components/ui/Footer";
import ProteinsClient from "../quiz/proteinsClient";

export const metadata = {
  title: "Prokeryotic And Eukeryotic Quiz — MCQs | Biology",
  description:
   "Practice MDCAT Prokeryotic And Eukeryotic questions with MCQs. Practice MDCAT Prokaryotic and Eukaryotic Cells questions with multiple choice questions and detailed explanations with instant feedback ,swipe support, sounds and review mode.",
  keywords: "prokaryotic cells, eukaryotic cells, biology, cell biology, quiz, mcq, practice, medical, exam",
};

export default function Page() {
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-amber-50 to-orange-100">
      <Header />
      <main className="flex-grow">
        <ProteinsClient />
      </main>
      <Footer />
    </div>
  );
}
