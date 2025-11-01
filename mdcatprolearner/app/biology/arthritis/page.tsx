//proteins
// app/blood-vessels/page.tsx
import Header from "../../components/ui/Header";
import Footer from "../../components/ui/Footer";
import ProteinsClient from "../quiz/arthritisClient";

export const metadata = {
  title: "Arthritis Quiz — MCQs | Biology",
  description: "Practice MDCAT Arthritis questions with MCQs. Test your knowledge of joint structure, inflammation, autoimmune disorders, cartilage degeneration, and biological causes of arthritis with explanations and instant feedbacksupport, sounds and review mode.",
keywords: "mdcat, arthritis, biology, joints, inflammation, autoimmune disorders, cartilage degeneration, synovial fluid, rheumatoid arthritis, osteoarthritis, gout, quiz, mcq, practice, medical, exam, mdcat biology"
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
