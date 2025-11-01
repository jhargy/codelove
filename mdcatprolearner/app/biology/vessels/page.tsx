// app/blood-vessels/page.tsx
import Header from "../../components/ui/Header";
import Footer from "../../components/ui/Footer";
import BloodVesselsClient from "../quiz/BloodVesselClient";

export const metadata = {
  title: "Blood Vessels Quiz — MCQs | Biology",
  description:
    "Practice blood vessels MCQs for MDCAT and biology. Interactive quiz with instant feedback, swipe support, sounds and review mode.",
  keywords: "blood vessels, arteries, veins, capillaries, quiz, mcq, mdcat, biology",
};

export default function Page() {
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-amber-50 to-orange-100">
      <Header />
      <main className="flex-grow">
        <BloodVesselsClient />
      </main>
      <Footer />
    </div>
  );
}
