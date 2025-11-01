
import Header from "../../components/ui/Header";
import Footer from "../../components/ui/Footer";
import ProteinsClient from "../quiz/proteinsClient";

export const metadata = {
  title: "Blood Vessels Quiz — MCQs | Biology",
  description:
   "Practice MDCAT Enzymes questions with MCQs. Test your knowledge of enzyme structure, function, kinetics, and regulation with explanations and instant feedback.swipe support, sounds and review mode.",
  keywords: "mdcat, enzymes, biology, biochemistry, enzyme kinetics, catalysis, quiz, mcq, practice, medical, exam"
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
