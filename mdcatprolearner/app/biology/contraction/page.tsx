'use-client'
import Header from "../../components/ui/Header";
import Footer from "../../components/ui/Footer";
import ProteinsClient from "../quiz/proteinsClient";

export const metadata = {
  title: "Blood Vessels Quiz — MCQs | Biology",
  description:
   "Practice MDCAT-level questions on muscle contraction: sliding filament theory, neuromuscular junction, calcium, ATP and energy requirements. 5 sections × 10 questions each and instant feedback ,swipe support, sounds and review mode.",
  keywords: "muscle contraction, sliding filament, neuromuscular junction, calcium, myosin, actin, MDCAT, biology, quiz"
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
