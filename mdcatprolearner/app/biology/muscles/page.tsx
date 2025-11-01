import React, { useState, useEffect, useRef } from "react";
import {
  musclesQuestions,
  Question,
} from "../data/musclesQuestions"; // <- your questions file
import {
  FaDumbbell,
  FaArrowLeft,
  FaArrowRight,
  FaArrowUp,
  FaCheckCircle,
  FaTimesCircle,
  FaInfoCircle,
  FaRedo,
  FaExclamationTriangle,
  FaArrowCircleLeft,
} from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";
import { Helmet } from "react-helmet";

type AnswerState = Record<string, number | undefined>;
type FeedbackState = Record<string, boolean>;
type LockedState = Record<string, boolean>;

const MusclesQuiz: React.FC = () => {
  const [quizStarted, setQuizStarted] = useState(false);
  const [section, setSection] = useState(1);
  const [answers, setAnswers] = useState<AnswerState>({});
  const [showExplanations, setShowExplanations] = useState<FeedbackState>({});
  const [score, setScore] = useState<number | null>(null);
  const [showTopBtn, setShowTopBtn] = useState(false);
  const [lockedQuestions, setLockedQuestions] = useState<LockedState>({});
  const [showPopup, setShowPopup] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const quizContainerRef = useRef<HTMLDivElement>(null);

  const QUESTIONS_PER_SECTION = 10;
  const TOTAL_QUESTIONS = musclesQuestions.length; // should be 50
  const SECTIONS = Math.ceil(TOTAL_QUESTIONS / QUESTIONS_PER_SECTION);

  const currentQuestions = musclesQuestions.slice(
    (section - 1) * QUESTIONS_PER_SECTION,
    section * QUESTIONS_PER_SECTION
  );

  const handleAnswer = (id: string, index: number) => {
    try {
      if (lockedQuestions[id]) return;
      const question = musclesQuestions.find((q) => q.id === id);
      if (!question) {
        setError("Question not found. Please refresh the page.");
        return;
      }
      setAnswers((prev) => ({ ...prev, [id]: index }));
      setLockedQuestions((prev) => ({ ...prev, [id]: true }));
      setError(null);
    } catch (err) {
      setError("Error processing answer. Please try again.");
      console.error(err);
    }
  };

  const handleNextSection = () => {
    try {
      const answeredInSection = currentQuestions.filter(
        (q) => answers[q.id] !== undefined
      ).length;
      if (answeredInSection < QUESTIONS_PER_SECTION) {
        setShowPopup(true);
        return;
      }
      if (section < SECTIONS) {
        setSection((prev) => prev + 1);
        window.scrollTo({ top: 0, behavior: "smooth" });
      } else {
        calculateScore();
      }
    } catch (err) {
      setError("Error moving forward.");
      console.error(err);
    }
  };

  const handlePrevSection = () => {
    try {
      if (section > 1) {
        setSection((prev) => prev - 1);
        window.scrollTo({ top: 0, behavior: "smooth" });
      }
    } catch (err) {
      setError("Error moving backward.");
      console.error(err);
    }
  };

  const calculateScore = () => {
    try {
      let correct = 0;
      musclesQuestions.forEach((q) => {
        if (answers[q.id] === q.correctAnswer) correct++;
      });
      setScore(Math.round((correct / TOTAL_QUESTIONS) * 100));
    } catch (err) {
      setError("Error calculating score.");
      console.error(err);
    }
  };

  const resetForNewRound = () => {
    setAnswers({});
    setShowExplanations({});
    setLockedQuestions({});
    setSection(1);
    setScore(null);
  };

  const handleRetakeQuiz = () => {
    resetForNewRound();
    setQuizStarted(true);
  };

  const handleGoBack = () => {
    resetForNewRound();
    setQuizStarted(false);
  };

  const answeredCount = Object.keys(answers).length;
  const progress =
    TOTAL_QUESTIONS > 0
      ? Math.round((answeredCount / TOTAL_QUESTIONS) * 100)
      : 0;

  useEffect(() => {
    const handleScroll = () => setShowTopBtn(window.scrollY > 300);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const handleError = (event: ErrorEvent) => {
      setError("Unexpected error. Please refresh.");
      console.error(event.error);
    };
    const handleRejection = (event: PromiseRejectionEvent) => {
      setError("Unexpected error. Please refresh.");
      console.error(event.reason);
    };
    window.addEventListener("error", handleError);
    window.addEventListener("unhandledrejection", handleRejection);
    return () => {
      window.removeEventListener("error", handleError);
      window.removeEventListener("unhandledrejection", handleRejection);
    };
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-yellow-50 to-orange-100 dark:from-gray-900 dark:to-yellow-900/20 py-6 px-4 sm:px-6 lg:py-8">
      <Helmet>
        <title>MDCAT Muscles Quiz | Biology Practice</title>
        <meta
          name="description"
          content="Practice MDCAT questions on muscles. Test your knowledge of muscle anatomy, physiology, types of muscles, and contraction mechanisms with explanations."
        />
        <meta
          name="keywords"
          content="mdcat, muscles, skeletal muscle, smooth muscle, cardiac muscle, contraction, actin myosin, biology, quiz, mcq"
        />
      </Helmet>

      {/* Error Popup */}
      <AnimatePresence>
        {error && (
          <motion.div
            className="fixed top-4 left-1/2 transform -translate-x-1/2 z-50 w-full max-w-md px-4"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
          >
            <div className="bg-red-100 dark:bg-red-900/30 border border-red-300 dark:border-red-700 rounded-xl shadow-lg p-4 flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <FaExclamationTriangle className="text-red-500" />
                <span className="text-red-700 dark:text-red-300 text-sm">
                  {error}
                </span>
              </div>
              <button onClick={() => setError(null)}>
                <FaTimesCircle className="text-red-500" />
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Start Screen */}
      {!quizStarted && score === null && (
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          className="max-w-md mx-auto bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 text-center"
        >
          <FaDumbbell className="text-5xl text-yellow-600 mx-auto mb-4" />
          <h1 className="text-2xl font-bold mb-2">MDCAT Muscles Quiz</h1>
          <p className="text-gray-600 dark:text-gray-300 mb-4">
            50 questions on skeletal, smooth, and cardiac muscles, plus
            contraction physiology.
          </p>
          <button
            onClick={() => setQuizStarted(true)}
            className="w-full py-3 bg-yellow-600 text-white rounded-lg hover:bg-yellow-700"
          >
            Start Quiz
          </button>
        </motion.div>
      )}

      {/* Quiz Screen */}
      {quizStarted && score === null && (
        <div
          ref={quizContainerRef}
          className="max-w-3xl mx-auto bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6"
        >
          <div className="mb-4 flex justify-between items-center">
            <button
              onClick={handlePrevSection}
              disabled={section === 1}
              className="flex items-center px-3 py-2 bg-gray-200 dark:bg-gray-700 rounded-lg disabled:opacity-50"
            >
              <FaArrowLeft className="mr-2" /> Previous
            </button>
            <div>
              Section {section}/{SECTIONS}
            </div>
            <button
              onClick={handleNextSection}
              className="flex items-center px-3 py-2 bg-yellow-600 text-white rounded-lg"
            >
              Next <FaArrowRight className="ml-2" />
            </button>
          </div>

          <div className="space-y-6">
            {currentQuestions.map((q) => (
              <div
                key={q.id}
                className="p-4 border rounded-lg bg-gray-50 dark:bg-gray-700"
              >
                <p className="font-medium mb-2">{q.question}</p>
                <div className="space-y-2">
                  {q.options.map((opt, idx) => {
                    const selected = answers[q.id] === idx;
                    const isCorrect = q.correctAnswer === idx;
                    return (
                      <button
                        key={idx}
                        disabled={lockedQuestions[q.id]}
                        onClick={() => handleAnswer(q.id, idx)}
                        className={`w-full text-left px-3 py-2 rounded-lg border ${
                          selected
                            ? isCorrect
                              ? "bg-green-100 border-green-500"
                              : "bg-red-100 border-red-500"
                            : "bg-white dark:bg-gray-800 border-gray-300"
                        }`}
                      >
                        {opt}
                      </button>
                    );
                  })}
                </div>
                {lockedQuestions[q.id] && (
                  <div className="mt-2 flex items-center space-x-2">
                    {answers[q.id] === q.correctAnswer ? (
                      <FaCheckCircle className="text-green-500" />
                    ) : (
                      <FaTimesCircle className="text-red-500" />
                    )}
                    <button
                      onClick={() =>
                        setShowExplanations((prev) => ({
                          ...prev,
                          [q.id]: !prev[q.id],
                        }))
                      }
                      className="flex items-center text-sm text-blue-600 hover:underline"
                    >
                      <FaInfoCircle className="mr-1" />
                      Explanation
                    </button>
                  </div>
                )}
                {showExplanations[q.id] && (
                  <p className="mt-2 text-sm text-gray-700 dark:text-gray-300">
                    {q.explanation}
                  </p>
                )}
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Result Screen */}
      {score !== null && (
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-md mx-auto bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 text-center"
        >
          <h2 className="text-2xl font-bold mb-4">Your Score</h2>
          <div className="text-5xl font-extrabold text-yellow-600 mb-4">
            {score}%
          </div>
          <div className="space-x-3">
            <button
              onClick={handleRetakeQuiz}
              className="px-4 py-2 bg-yellow-600 text-white rounded-lg"
            >
              <FaRedo className="inline mr-2" /> Retake
            </button>
            <button
              onClick={handleGoBack}
              className="px-4 py-2 bg-gray-200 dark:bg-gray-700 rounded-lg"
            >
              <FaArrowCircleLeft className="inline mr-2" /> Back
            </button>
          </div>
        </motion.div>
      )}

      {/* Scroll to Top */}
      {showTopBtn && (
        <button
          onClick={() =>
            window.scrollTo({ top: 0, behavior: "smooth" })
          }
          className="fixed bottom-6 right-6 p-3 bg-yellow-600 text-white rounded-full shadow-lg"
        >
          <FaArrowUp />
        </button>
      )}
    </div>
  );
};

export default MusclesQuiz;
