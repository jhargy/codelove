import Header from "../../components/ui/Header";
import Footer from "../../components/ui/Footer";
import ProteinsClient from "../quiz/proteinsClient";

export const metadata = {
  title: "Blood Vessels Quiz — MCQs | Biology",
  description:
   "Practice MDCAT questions on factors affecting enzyme reaction rates with multiple choice questions and detailed explanations,swipe,support,sounds and review mode.",
  keywords: "mdcat, enzymes, enzyme kinetics, reaction rate, temperature, pH, substrate concentration, enzyme inhibition, quiz, mcq, practice, medical, exam"
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
