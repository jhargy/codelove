
'use client'
import React, { useEffect, useMemo, useRef, useState } from "react";
import { carbohydratesQuestions, Question } from "../data/CarboHydratesQuiz";
import {
  FaCookie,
  FaArrowLeft,
  FaArrowRight,
  FaCheckCircle,
  FaTimesCircle,
  FaInfoCircle,
  FaRedo,
  FaArrowUp,
  FaExclamationTriangle,
  FaInfo
} from "react-icons/fa";

/**
 * Lightweight client quiz component.
 *
 * Behavior:
 * - When user selects an option:
 *   - If correct: selected option is green
 *   - If incorrect: selected option red, and correct option green (both shown)
 * - Progress overlay toggle on the right-middle of the viewport
 * - Minimal styling (Tailwind classes only)
 */

type AnswerState = Record<string, number | undefined>;
type FeedbackState = Record<string, boolean>;
type LockedState = Record<string, boolean>;

export default function ClientQuiz() {
  const [quizStarted, setQuizStarted] = useState(false);
  const [section, setSection] = useState(1);
  const [answers, setAnswers] = useState<AnswerState>({});
  const [showExplanations, setShowExplanations] = useState<FeedbackState>({});
  const [score, setScore] = useState<number | null>(null);
  const [lockedQuestions, setLockedQuestions] = useState<LockedState>({});
  const [showPopup, setShowPopup] = useState(false);
  const [showInfo, setShowInfo] = useState(true); // overlay toggle
  const [error, setError] = useState<string | null>(null);
  const containerRef = useRef<HTMLDivElement | null>(null);

  const QUESTIONS_PER_SECTION = 10;
  const TOTAL_QUESTIONS = carbohydratesQuestions.length;
  const SECTIONS = Math.max(1, Math.ceil(TOTAL_QUESTIONS / QUESTIONS_PER_SECTION));

  const currentQuestions = useMemo(
    () =>
      carbohydratesQuestions.slice(
        (section - 1) * QUESTIONS_PER_SECTION,
        section * QUESTIONS_PER_SECTION
      ),
    [section]
  );

  useEffect(() => {
    // simple error boundary for runtime exceptions in client
    const handleRejection = (e: PromiseRejectionEvent) => {
      console.error("Unhandled rejection:", e.reason);
      setError("An unexpected error occurred. Refresh the page.");
    };
    const handleError = (e: ErrorEvent) => {
      console.error("Error:", e.error || e.message);
      setError("An unexpected error occurred. Refresh the page.");
    };
    window.addEventListener("unhandledrejection", handleRejection);
    window.addEventListener("error", handleError);
    return () => {
      window.removeEventListener("unhandledrejection", handleRejection);
      window.removeEventListener("error", handleError);
    };
  }, []);

  const answeredCount = Object.keys(answers).length;
  const progress = TOTAL_QUESTIONS > 0 ? Math.round((answeredCount / TOTAL_QUESTIONS) * 100) : 0;

  function handleAnswer(id: string, index: number) {
    try {
      if (lockedQuestions[id]) return;
      const question = carbohydratesQuestions.find((q) => q.id === id);
      if (!question) {
        setError("Question not found. Please refresh the page.");
        return;
      }
      // Lock question and save answer
      setAnswers((prev) => ({ ...prev, [id]: index }));
      setLockedQuestions((prev) => ({ ...prev, [id]: true }));
      setError(null);
    } catch (err) {
      console.error("handleAnswer error:", err);
      setError("Error processing answer. Try again.");
    }
  }

  function calculateScore() {
    try {
      let correct = 0;
      for (const q of carbohydratesQuestions) {
        if (answers[q.id] === q.correctAnswer) correct++;
      }
      setScore(Math.round((correct / TOTAL_QUESTIONS) * 100));
      setError(null);
    } catch (err) {
      console.error("calculateScore error:", err);
      setError("Error calculating score.");
    }
  }

  function handleNextSection() {
    try {
      const answeredInSection = currentQuestions.filter((q) => answers[q.id] !== undefined).length;
      if (answeredInSection < currentQuestions.length) {
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
      console.error("handleNextSection error:", err);
      setError("Error moving to next section.");
    }
  }

  function handlePrevSection() {
    try {
      if (section > 1) {
        setSection((s) => s - 1);
        window.scrollTo({ top: 0, behavior: "smooth" });
      }
    } catch (err) {
      console.error("handlePrevSection error:", err);
      setError("Error moving to previous section.");
    }
  }

  function resetAll() {
    setAnswers({});
    setShowExplanations({});
    setLockedQuestions({});
    setSection(1);
    setScore(null);
    setError(null);
  }

  function handleRetakeQuiz() {
    resetAll();
    setQuizStarted(true);
  }

  function handleGoBack() {
    resetAll();
    setQuizStarted(false);
  }

  // small helper for button classes (keeps styling minimal)
  function getOptionClasses(
    q: Question,
    index: number,
    userAnswer: number | undefined,
    locked: boolean
  ) {
    const isUser = userAnswer === index;
    const isCorrectOption = index === q.correctAnswer;
    // Base
    let classes = "w-full p-3 rounded-lg text-left border transition-colors focus:outline-none ";

    if (!locked) {
      classes += isUser
        ? "bg-amber-50 border-amber-200 text-amber-800"
        : "bg-white border-gray-200 hover:bg-gray-50 text-gray-800";
      return classes;
    }

    // locked -> show results
    if (isCorrectOption) {
      classes += "bg-green-50 border-green-300 text-green-800";
    } else if (isUser && !isCorrectOption) {
      classes += "bg-red-50 border-red-300 text-red-800";
    } else {
      classes += "bg-gray-50 border-gray-200 text-gray-600";
    }
    return classes;
  }

  // Minimal error / info banner
  const Banner = ({ children }: { children: React.ReactNode }) => (
    <div className="bg-red-50 border border-red-200 text-red-700 px-3 py-2 rounded mb-4 text-sm">
      {children}
    </div>
  );

  return (
    <div
      ref={containerRef}
      className="min-h-screen py-6 px-3 sm:px-6 bg-gradient-to-br from-amber-50 to-orange-100 dark:from-gray-900 dark:to-amber-900/20"
    >
      <div className="max-w-4xl mx-auto">
        {error && <Banner>{error}</Banner>}

        {/* Landing / Start */}
        {!quizStarted ? (
          <div className="bg-white rounded-xl shadow p-6">
            <div className="text-center">
              <div className="w-14 h-14 mx-auto rounded-full bg-amber-100 flex items-center justify-center mb-4">
                <FaCookie className="text-2xl text-amber-600" />
              </div>
              <h1 className="text-2xl font-semibold mb-2">MDCAT Carbohydrates Quiz</h1>
              <p className="text-sm text-gray-600 mb-4">
                Practice MCQs on monosaccharides, disaccharides, polysaccharides & metabolism.
              </p>
              <div className="grid grid-cols-2 gap-3 mb-4 text-sm">
                <div className="bg-amber-50 p-3 rounded text-center">
                  <div className="font-bold text-amber-700">Questions</div>
                  <div className="text-xs text-amber-600">{TOTAL_QUESTIONS}</div>
                </div>
                <div className="bg-amber-50 p-3 rounded text-center">
                  <div className="font-bold text-amber-700">Sections</div>
                  <div className="text-xs text-amber-600">{SECTIONS}</div>
                </div>
              </div>
              <button
                onClick={() => setQuizStarted(true)}
                className="w-full py-3 rounded-lg bg-amber-600 text-white font-medium"
                aria-label="Start quiz"
              >
                Start Quiz
              </button>
            </div>
          </div>
        ) : score === null ? (
          <div className="bg-white rounded-xl shadow overflow-hidden">
            {/* Header */}
            <div className="p-4 border-b">
              <div className="flex items-center justify-between">
                <div>
                  <h2 className="text-lg font-semibold">MDCAT Carbohydrates Quiz</h2>
                  <div className="text-sm text-gray-600">Section {section} of {SECTIONS}</div>
                </div>
                <div className="text-sm">
                  <div className="text-xs text-gray-500">Progress</div>
                  <div className="text-sm font-semibold">{progress}%</div>
                </div>
              </div>
            </div>

            {/* Questions */}
            <div className="p-4 space-y-4">
              {currentQuestions.map((q) => {
                const userAnswer = answers[q.id];
                const locked = !!lockedQuestions[q.id];
                const isCorrect = userAnswer === q.correctAnswer;

                return (
                  <article key={q.id} className="bg-gray-50 rounded-lg p-4" aria-labelledby={`q-${q.id}`}>
                    <h3 id={`q-${q.id}`} className="font-medium text-gray-800 mb-3">
                      {q.question}
                    </h3>

                    <div className="space-y-2">
                      {q.options.map((opt, idx) => {
                        const classes = getOptionClasses(q, idx, userAnswer, locked);
                        return (
                          <button
                            key={idx}
                            onClick={() => handleAnswer(q.id, idx)}
                            disabled={locked}
                            className={classes}
                            aria-pressed={userAnswer === idx}
                            aria-label={`Option ${idx + 1}: ${opt}`}
                          >
                            <div className="text-sm">{opt}</div>
                          </button>
                        );
                      })}
                    </div>

                    {locked && (
                      <div className="mt-3 flex items-center gap-2 text-sm" aria-live="polite">
                        {isCorrect ? (
                          <>
                            <FaCheckCircle className="text-green-600" />
                            <span className="text-green-700 font-medium">Correct</span>
                          </>
                        ) : (
                          <>
                            <FaTimesCircle className="text-red-600" />
                            <span className="text-red-700 font-medium">Incorrect</span>
                          </>
                        )}
                        <button
                          onClick={() =>
                            setShowExplanations((prev) => ({ ...prev, [q.id]: !prev[q.id] }))
                          }
                          className="ml-auto inline-flex items-center gap-2 text-amber-600 text-sm"
                          aria-expanded={!!showExplanations[q.id]}
                          aria-controls={`ex-${q.id}`}
                        >
                          <FaInfoCircle /> {showExplanations[q.id] ? "Hide" : "Show"} explanation
                        </button>
                      </div>
                    )}

                    {showExplanations[q.id] && locked && (
                      <div id={`ex-${q.id}`} className="mt-2 p-3 bg-amber-50 rounded text-sm text-gray-700">
                        {q.explanation}
                      </div>
                    )}
                  </article>
                );
              })}
            </div>

            {/* Footer / navigation */}
            <div className="p-4 border-t flex flex-col sm:flex-row items-center gap-3">
              <button
                onClick={handlePrevSection}
                disabled={section === 1}
                className={`px-3 py-2 rounded ${section === 1 ? "bg-gray-100 text-gray-400" : "bg-gray-100 hover:bg-gray-200"}`}
                aria-label="Previous section"
              >
                <FaArrowLeft className="inline mr-2" /> Previous
              </button>

              <div className="flex-1 text-center text-sm text-gray-600">
                {section < SECTIONS ? `Section ${section} of ${SECTIONS}` : "Final section"}
              </div>

              <button
                onClick={handleNextSection}
                className="px-3 py-2 rounded bg-amber-600 text-white flex items-center gap-2"
                aria-label={section < SECTIONS ? "Next section" : "Finish quiz"}
              >
                {section < SECTIONS ? "Next" : "Finish"}
                <FaArrowRight />
              </button>
            </div>
          </div>
        ) : (
          // Score view
          <div className="bg-white rounded-xl shadow p-6 text-center">
            <div className="mb-4">
              <div className="w-20 h-20 rounded-full bg-amber-100 mx-auto flex items-center justify-center text-3xl">🎉</div>
            </div>
            <h2 className="text-2xl font-semibold mb-2">Quiz Completed!</h2>
            <p className="text-sm text-gray-600 mb-4">
              You scored <span className="font-semibold text-amber-700">{score}%</span> out of {TOTAL_QUESTIONS}
            </p>

            <div className="space-y-3 max-w-sm mx-auto">
              <button onClick={handleRetakeQuiz} className="w-full py-2 rounded bg-amber-600 text-white flex items-center justify-center gap-2">
                <FaRedo /> Retake
              </button>
              <button onClick={handleGoBack} className="w-full py-2 rounded border bg-white">
                Go back
              </button>
            </div>
          </div>
        )}
      </div>

      {/* Right-middle info/progress overlay toggle */}
      <div
        className="fixed right-4 top-1/2 transform -translate-y-1/2 bg-white/90 dark:bg-gray-800/90 border border-gray-200 dark:border-gray-700 rounded-lg p-3 shadow-sm z-50"
        style={{ backdropFilter: "blur(6px)" }}
      >
        <div className="flex items-center gap-2">
          <button
            onClick={() => setShowInfo((s) => !s)}
            aria-pressed={showInfo}
            className="p-2 rounded hover:bg-gray-100"
            title="Toggle progress/info"
          >
            <FaInfo />
          </button>
          {/* compact progress when collapsed */}
          {!showInfo ? (
            <div className="text-sm">
              <div className="font-medium">{progress}%</div>
              <div className="text-xs text-gray-500">Completed</div>
            </div>
          ) : (
            <div className="min-w-[200px]">
              <div className="text-sm font-medium mb-2">Quiz Progress — {progress}%</div>
              <div className="w-full bg-gray-100 h-2 rounded overflow-hidden mb-2">
                <div style={{ width: `${progress}%` }} className="h-full rounded bg-amber-500" />
              </div>
              <div className="text-xs text-gray-600">
                Section {section}/{SECTIONS}
                <div>{answeredCount} / {TOTAL_QUESTIONS} answered</div>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* scroll-to-top */}
      <button
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        className="fixed bottom-6 right-6 p-3 rounded-full bg-amber-600 text-white shadow z-40"
        aria-label="Scroll to top"
      >
        <FaArrowUp />
      </button>

      {/* popup when trying to proceed without answering section */}
      {showPopup && (
        <div className="fixed inset-0 bg-black/40 z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-lg p-6 max-w-sm w-full text-center">
            <FaExclamationTriangle className="text-yellow-500 text-2xl mx-auto mb-3" />
            <h3 className="font-semibold mb-2">Complete All Questions</h3>
            <p className="text-sm text-gray-600 mb-4">Please answer all questions in this section before proceeding.</p>
            <div className="flex gap-2">
              <button onClick={() => setShowPopup(false)} className="flex-1 py-2 rounded bg-amber-600 text-white">Okay</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
