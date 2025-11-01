
import Header from "../../components/ui/Header";
import Footer from "../../components/ui/Footer";
import ProteinsClient from "../quiz/proteinsClient";

export const metadata = {
  title: "Blood Vessels Quiz — MCQs | Biology",
  description:
   "Practice MDCAT Proteins questions with MCQs. Test your knowledge of amino acids, protein structure, enzymes, and their biological functions with explanations and instant feedback ,swipe support, sounds and review mode.",
  keywords: "mdcat, proteins, biology, amino acids, protein structure, enzymes, quiz, mcq, practice, medical, exam ,quiz, mcq, mdcat, biology"
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
