// JointsQuiz.tsx
import React, { useEffect, useRef, useState } from "react";
import { Helmet } from "react-helmet";
import { motion, AnimatePresence } from "framer-motion";
import {
  FaBone,
  FaArrowLeft,
  FaArrowRight,
  FaArrowUp,
  FaCheckCircle,
  FaTimesCircle,
  FaInfoCircle,
  FaExclamationTriangle,
  FaRedo,
  FaArrowCircleLeft,
} from "react-icons/fa";
import { jointsQuestions, Question } from "../data/jointsQuestions";

type AnswerState = Record<string, number | undefined>;
type FeedbackState = Record<string, boolean>;
type LockedState = Record<string, boolean>;

const QUESTIONS_PER_SECTION = 10; // 10 questions per section as requested

const JointsQuiz: React.FC = () => {
  const [quizStarted, setQuizStarted] = useState(false);
  const [section, setSection] = useState(1);
  const [answers, setAnswers] = useState<AnswerState>({});
  const [showExplanations, setShowExplanations] = useState<FeedbackState>({});
  const [lockedQuestions, setLockedQuestions] = useState<LockedState>({});
  const [score, setScore] = useState<number | null>(null);
  const [showPopup, setShowPopup] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [showTopBtn, setShowTopBtn] = useState(false);
  const quizContainerRef = useRef<HTMLDivElement | null>(null);

  const TOTAL_QUESTIONS = jointsQuestions.length;
  const SECTIONS = Math.max(1, Math.ceil(TOTAL_QUESTIONS / QUESTIONS_PER_SECTION));
  const currentQuestions: Question[] = jointsQuestions.slice(
    (section - 1) * QUESTIONS_PER_SECTION,
    section * QUESTIONS_PER_SECTION
  );

  const answeredInSection = currentQuestions.filter((q) => answers[q.id] !== undefined).length;
  const answeredCount = Object.keys(answers).length;
  const overallProgress = TOTAL_QUESTIONS ? Math.round((answeredCount / TOTAL_QUESTIONS) * 100) : 0;
  const sectionProgressPercent = Math.round((answeredInSection / QUESTIONS_PER_SECTION) * 100);

  // safe: no questions
  if (TOTAL_QUESTIONS === 0) {
    return (
      <div className="min-h-screen flex items-center justify-center p-6 bg-gray-50 dark:bg-gray-900">
        <div className="max-w-lg w-full bg-white dark:bg-gray-800 rounded-xl shadow p-6 text-center">
          <FaExclamationTriangle className="text-4xl text-yellow-500 mx-auto mb-4" />
          <h2 className="text-xl font-semibold mb-2">No Questions Found</h2>
          <p className="text-sm text-gray-600 dark:text-gray-300">
            The question bank <code className="bg-gray-100 px-1 rounded">jointsQuestions</code> seems empty.
            Add questions or check your import path.
          </p>
        </div>
      </div>
    );
  }

  useEffect(() => {
    const onScroll = () => setShowTopBtn(window.scrollY > 300);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // global error listeners
  useEffect(() => {
    const onError = (ev: ErrorEvent) => {
      console.error("Global error:", ev.error);
      setError("An unexpected error occurred. Please refresh the page.");
    };
    const onRejection = (ev: PromiseRejectionEvent) => {
      console.error("Unhandled promise rejection:", ev.reason);
      setError("An unexpected error occurred. Please refresh the page.");
    };
    window.addEventListener("error", onError);
    window.addEventListener("unhandledrejection", onRejection);
    return () => {
      window.removeEventListener("error", onError);
      window.removeEventListener("unhandledrejection", onRejection);
    };
  }, []);

  const handleAnswer = (id: string, index: number) => {
    try {
      if (lockedQuestions[id]) return;
      const qExists = jointsQuestions.find((q) => q.id === id);
      if (!qExists) {
        setError("Question not found. Try refreshing.");
        return;
      }
      setAnswers((prev) => ({ ...prev, [id]: index }));
      setLockedQuestions((prev) => ({ ...prev, [id]: true }));
      setError(null);
    } catch (err) {
      console.error("handleAnswer:", err);
      setError("Error processing your answer. Please try again.");
    }
  };

  const handleNextSection = () => {
    try {
      if (answeredInSection < QUESTIONS_PER_SECTION) {
        setShowPopup(true);
        return;
      }
      if (section < SECTIONS) {
        setSection((s) => s + 1);
        window.scrollTo({ top: 0, behavior: "smooth" });
      } else {
        calculateScore();
      }
    } catch (err) {
      console.error("handleNextSection:", err);
      setError("Error moving to next section.");
    }
  };

  const handlePrevSection = () => {
    try {
      if (section > 1) {
        setSection((s) => s - 1);
        window.scrollTo({ top: 0, behavior: "smooth" });
      }
    } catch (err) {
      console.error("handlePrevSection:", err);
      setError("Error moving to previous section.");
    }
  };

  const calculateScore = () => {
    try {
      let correct = 0;
      jointsQuestions.forEach((q) => {
        if (answers[q.id] === q.correctAnswer) correct++;
      });
      setScore(TOTAL_QUESTIONS ? Math.round((correct / TOTAL_QUESTIONS) * 100) : 0);
      setError(null);
    } catch (err) {
      console.error("calculateScore:", err);
      setError("Error calculating score.");
    }
  };

  const resetForNewRound = () => {
    setAnswers({});
    setShowExplanations({});
    setLockedQuestions({});
    setSection(1);
    setScore(null);
    setError(null);
  };

  const handleRetake = () => {
    resetForNewRound();
    setQuizStarted(true);
  };

  const handleGoBack = () => {
    resetForNewRound();
    setQuizStarted(false);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 to-green-50 dark:from-gray-900 dark:to-emerald-900/10 py-6 px-4 sm:px-6 lg:py-8">
      <Helmet>
        <title>MDCAT — Joints Quiz | Biology Practice</title>
        <meta
          name="description"
          content="Practice MDCAT-level MCQs on joints: types of joints, structure, examples and functions. 5 sections × 10 questions each."
        />
        <meta name="keywords" content="joints, synovial, fibrous, cartilaginous, hinge, ball-and-socket, mdcat, biology, quiz" />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Quiz",
            name: "Joints Quiz",
            description: "Practice MDCAT-level joints questions with explanations.",
            educationalLevel: "advanced",
            numberOfQuestions: TOTAL_QUESTIONS,
          })}
        </script>
      </Helmet>

      {/* Error banner */}
      <AnimatePresence>
        {error && (
          <motion.div
            className="fixed top-4 left-1/2 transform -translate-x-1/2 z-50 w-full max-w-2xl px-4"
            initial={{ opacity: 0, y: -18 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -18 }}
          >
            <div className="bg-red-50 dark:bg-red-900/30 border border-red-300 dark:border-red-700 rounded-xl shadow p-3 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <FaExclamationTriangle className="text-red-600" />
                <span className="text-sm text-red-800 dark:text-red-200">{error}</span>
              </div>
              <button
                aria-label="Dismiss error"
                onClick={() => setError(null)}
                className="text-red-600 hover:text-red-800"
              >
                ✕
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Hovering progress bar on right (expands on hover) */}
      <div className="fixed right-4 top-1/3 z-40 group" title="Progress (hover to expand)">
        <motion.div
          initial={{ width: 56 }}
          whileHover={{ width: 280 }}
          transition={{ type: "spring", stiffness: 300, damping: 20 }}
          className="overflow-hidden rounded-xl shadow-lg bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700"
          style={{ touchAction: "manipulation" }}
        >
          <div className="flex items-center h-14 px-3">
            <div className="flex-1 pr-2">
              <div className="text-xs text-gray-500 dark:text-gray-300">Section</div>
              <div className="font-semibold text-sm text-emerald-600">{section}/{SECTIONS}</div>
            </div>
            <div className="w-10 text-right">
              <div className="text-xs text-gray-400">{overallProgress}%</div>
            </div>
          </div>

          <div className="px-3 pb-3 hidden group-hover:block">
            <div className="text-xs text-gray-500 mb-1">Current section</div>
            <div className="w-full h-2 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden mb-2">
              <div
                className="h-full bg-gradient-to-r from-emerald-400 to-green-600 rounded-full transition-all"
                style={{ width: `${sectionProgressPercent}%` }}
              />
            </div>
            <div className="text-sm font-medium mb-2">
              {answeredInSection}/{QUESTIONS_PER_SECTION} answered
            </div>

            <div className="text-xs text-gray-500 mb-1">Overall progress</div>
            <div className="w-full h-2 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
              <div
                className="h-full bg-gradient-to-r from-blue-400 to-emerald-500 rounded-full transition-all"
                style={{ width: `${overallProgress}%` }}
              />
            </div>

            <div className="mt-3 text-xs text-gray-500">
              Tip: finish all {QUESTIONS_PER_SECTION} questions in a section to proceed.
            </div>
          </div>
        </motion.div>
      </div>

      {/* Small top-left pill with overall answered count */}
      <div className="fixed left-4 top-6 z-40">
        <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-full px-3 py-1 shadow-sm text-sm">
          <span className="font-medium">{answeredCount}</span>
          <span className="text-gray-500"> / {TOTAL_QUESTIONS} answered</span>
        </div>
      </div>

      <div className="max-w-4xl mx-auto">
        {/* Start screen */}
        {!quizStarted && score === null && (
          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-6 mt-6"
          >
            <div className="text-center">
              <div className="w-16 h-16 bg-emerald-50 dark:bg-emerald-900/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <FaBone className="text-2xl text-emerald-600 dark:text-emerald-300" />
              </div>
              <h1 className="text-3xl font-bold mb-2 text-emerald-700 dark:text-emerald-200">MDCAT Joints Quiz</h1>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                5 sections × {QUESTIONS_PER_SECTION} questions. Topics: types of joints, synovial structure, examples and functions.
              </p>

              <div className="grid grid-cols-2 gap-3 max-w-sm mx-auto mb-4">
                <div className="bg-emerald-50 dark:bg-emerald-900/10 p-3 rounded-lg">
                  <div className="text-lg font-bold text-emerald-600">{TOTAL_QUESTIONS}</div>
                  <div className="text-xs text-emerald-500">Questions</div>
                </div>
                <div className="bg-emerald-50 dark:bg-emerald-900/10 p-3 rounded-lg">
                  <div className="text-lg font-bold text-emerald-600">{SECTIONS}</div>
                  <div className="text-xs text-emerald-500">Sections</div>
                </div>
              </div>

              <button
                onClick={() => setQuizStarted(true)}
                className="px-6 py-3 bg-emerald-600 text-white rounded-lg hover:bg-emerald-700 shadow"
              >
                Start Quiz
              </button>
            </div>
          </motion.div>
        )}

        {/* Quiz screen */}
        {quizStarted && score === null && (
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-6 mt-6"
            ref={quizContainerRef}
          >
            {/* header summary */}
            <div className="flex items-center justify-between mb-4">
              <div className="text-sm text-gray-600 dark:text-gray-300">
                Section <span className="font-semibold">{section}</span> / {SECTIONS}
              </div>
              <div className="text-sm text-gray-600 dark:text-gray-300">
                Answered: <span className="font-semibold">{answeredInSection}</span> / {QUESTIONS_PER_SECTION}
              </div>
            </div>

            {/* Questions list */}
            <div className="space-y-5">
              {currentQuestions.map((q, qi) => {
                const selected = answers[q.id];
                const locked = !!lockedQuestions[q.id];
                const isCorrect = selected === q.correctAnswer;
                return (
                  <div
                    key={q.id}
                    className="p-4 rounded-lg border bg-gray-50 dark:bg-gray-700 border-gray-200 dark:border-gray-600"
                  >
                    <div className="flex items-start justify-between">
                      <div>
                        <div className="text-sm font-medium mb-2">
                          Q{(section - 1) * QUESTIONS_PER_SECTION + (qi + 1)}. {q.question}
                        </div>
                      </div>
                      <div className="text-xs text-gray-400">{locked ? "Answered" : "Unanswered"}</div>
                    </div>

                    <div className="mt-2 space-y-2">
                      {q.options.map((opt, idx) => {
                        const chosen = selected === idx;
                        const correct = q.correctAnswer === idx;
                        return (
                          <button
                            key={idx}
                            onClick={() => handleAnswer(q.id, idx)}
                            disabled={locked}
                            className={`w-full text-left px-3 py-2 rounded-lg border transition-colors ${
                              chosen
                                ? correct
                                  ? "bg-green-100 border-green-500"
                                  : "bg-red-100 border-red-400"
                                : "bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-600 hover:bg-gray-100"
                            }`}
                            aria-pressed={chosen}
                            aria-disabled={locked}
                          >
                            <div className="flex items-center justify-between">
                              <div>{opt}</div>
                              {locked && chosen && (isCorrect ? (
                                <FaCheckCircle className="text-green-600 ml-3" />
                              ) : (
                                <FaTimesCircle className="text-red-600 ml-3" />
                              ))}
                            </div>
                          </button>
                        );
                      })}
                    </div>

                    {/* explanation toggle */}
                    {locked && (
                      <div className="mt-3 flex items-center space-x-3">
                        <button
                          onClick={() =>
                            setShowExplanations((prev) => ({ ...prev, [q.id]: !prev[q.id] }))
                          }
                          className="text-sm text-emerald-600 hover:underline flex items-center"
                        >
                          <FaInfoCircle className="mr-2" /> Explanation
                        </button>
                        <div className="text-sm text-gray-500">
                          {isCorrect ? "Correct" : `Correct: ${q.options[q.correctAnswer]}`}
                        </div>
                      </div>
                    )}

                    {showExplanations[q.id] && (
                      <div className="mt-3 text-sm text-gray-700 dark:text-gray-300 bg-white dark:bg-gray-800 p-3 rounded">
                        {q.explanation}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>

            {/* bottom navigation */}
            <div className="mt-6 border-t pt-4 flex items-center justify-between">
              <button
                onClick={handlePrevSection}
                disabled={section === 1}
                className="flex items-center gap-2 px-4 py-2 rounded-lg bg-gray-200 dark:bg-gray-700 disabled:opacity-50"
                aria-disabled={section === 1}
              >
                <FaArrowLeft /> Previous
              </button>

              <div className="text-sm text-gray-600">
                Section {section} / {SECTIONS} • {answeredInSection}/{QUESTIONS_PER_SECTION} answered
              </div>

              <button
                onClick={handleNextSection}
                className="flex items-center gap-2 px-4 py-2 rounded-lg bg-emerald-600 text-white hover:bg-emerald-700"
              >
                {section === SECTIONS ? "Finish" : "Next"} <FaArrowRight />
              </button>
            </div>

            {/* popup: ask to complete all */}
            <AnimatePresence>
              {showPopup && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 p-4"
                >
                  <motion.div
                    initial={{ scale: 0.96 }}
                    animate={{ scale: 1 }}
                    exit={{ scale: 0.96 }}
                    className="bg-white dark:bg-gray-800 rounded-xl p-6 max-w-md w-full text-center"
                  >
                    <FaExclamationTriangle className="text-yellow-500 text-3xl mx-auto mb-3" />
                    <h3 className="text-lg font-semibold mb-2">Please finish this section</h3>
                    <p className="text-sm text-gray-600 dark:text-gray-300 mb-4">
                      You must answer all {QUESTIONS_PER_SECTION} questions in this section before proceeding.
                    </p>
                    <div className="flex justify-center gap-3">
                      <button
                        onClick={() => setShowPopup(false)}
                        className="px-4 py-2 bg-emerald-600 text-white rounded"
                      >
                        Okay
                      </button>
                    </div>
                  </motion.div>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        )}

        {/* result screen */}
        {score !== null && (
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-6 mt-6 text-center"
          >
            <h2 className="text-2xl font-bold mb-2">Quiz Completed</h2>
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              You answered {answeredCount} / {TOTAL_QUESTIONS} questions.
            </p>
            <div className="text-6xl font-extrabold text-emerald-600 mb-4">{score}%</div>

            <div className="flex justify-center gap-3">
              <button
                onClick={handleRetake}
                className="px-4 py-2 bg-emerald-600 text-white rounded-lg flex items-center gap-2"
              >
                <FaRedo /> Retake
              </button>
              <button
                onClick={handleGoBack}
                className="px-4 py-2 bg-gray-200 dark:bg-gray-700 rounded-lg flex items-center gap-2"
              >
                <FaArrowCircleLeft /> Back
              </button>
            </div>
          </motion.div>
        )}

        {/* scroll-to-top */}
        {showTopBtn && (
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="fixed bottom-6 right-6 p-3 rounded-full bg-emerald-600 text-white shadow-lg"
            aria-label="scroll to top"
          >
            <FaArrowUp />
          </button>
        )}
      </div>
    </div>
  );
};

export default JointsQuiz;
