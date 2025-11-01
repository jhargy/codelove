
'use client'

import React, { useState, useEffect, useCallback, useRef } from "react";
import {
  waterBiologicalImportanceQuestions,
  Question,
  Difficulty,
} from "../data/Biological Importance of Water";
import {
  FaDna,
  FaArrowLeft,
  FaArrowRight,
  FaArrowUp,
  FaCheckCircle,
  FaTimesCircle,
  FaInfoCircle,
  FaRedo,
  FaExclamationTriangle,
  FaStepForward,
  FaArrowCircleLeft,
  FaLeaf,
  FaAtom,
} from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";

type AnswerState = Record<string, number | undefined>;
type FeedbackState = Record<string, boolean>;
type LockedState = Record<string, boolean>;

const BiologicalMoleculesQuizClient: React.FC = () => {
  const [difficulty, setDifficulty] = useState<Difficulty | null>(null);
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

  const getQuestions = useCallback((): Question[] => {
    try {
      if (!difficulty) return [];
      return waterBiologicalImportanceQuestions[difficulty] || [];
    } catch (err) {
      setError("Failed to load questions. Please try again.");
      console.error("Error loading questions:", err);
      return [];
    }
  }, [difficulty]);

  const TOTAL_QUESTIONS = getQuestions().length;
  const SECTIONS = Math.ceil(TOTAL_QUESTIONS / QUESTIONS_PER_SECTION);

  const currentQuestions = getQuestions().slice(
    (section - 1) * QUESTIONS_PER_SECTION,
    section * QUESTIONS_PER_SECTION
  );

  const handleAnswer = (id: string, index: number) => {
    try {
      if (lockedQuestions[id]) return;

      const question = getQuestions().find((q) => q.id === id);
      if (!question) {
        setError("Question not found. Please refresh the page.");
        return;
      }

      setAnswers((prev) => ({ ...prev, [id]: index }));
      setLockedQuestions((prev) => ({ ...prev, [id]: true }));
      setError(null);
    } catch (err) {
      setError("Error processing your answer. Please try again.");
      console.error("Error in handleAnswer:", err);
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
      setError(null);
    } catch (err) {
      setError("Error moving to next section. Please try again.");
      console.error("Error in handleNextSection:", err);
    }
  };

  const handlePrevSection = () => {
    try {
      if (section > 1) {
        setSection((prev) => prev - 1);
        window.scrollTo({ top: 0, behavior: "smooth" });
      }
      setError(null);
    } catch (err) {
      setError("Error moving to previous section. Please try again.");
      console.error("Error in handlePrevSection:", err);
    }
  };

  const calculateScore = () => {
    try {
      const allQuestions = getQuestions();
      let correct = 0;
      allQuestions.forEach((q) => {
        if (answers[q.id] === q.correctAnswer) correct++;
      });
      setScore(Math.round((correct / allQuestions.length) * 100));
      setError(null);
    } catch (err) {
      setError("Error calculating score. Please try again.");
      console.error("Error in calculateScore:", err);
    }
  };

  const resetForNewRound = () => {
    try {
      setAnswers({});
      setShowExplanations({});
      setLockedQuestions({});
      setSection(1);
      setScore(null);
      setError(null);
    } catch (err) {
      setError("Error resetting quiz. Please refresh the page.");
      console.error("Error in resetForNewRound:", err);
    }
  };

  const handleRetakeQuiz = () => {
    try {
      resetForNewRound();
      setQuizStarted(true);
      setError(null);
    } catch (err) {
      setError("Error restarting quiz. Please refresh the page.");
      console.error("Error in handleRetakeQuiz:", err);
    }
  };

  const handleNextLevel = () => {
    try {
      const next =
        difficulty === "easy"
          ? "medium"
          : difficulty === "medium"
          ? "hard"
          : "easy";
      setDifficulty(next as Difficulty);
      resetForNewRound();
      setQuizStarted(true);
      setError(null);
    } catch (err) {
      setError("Error changing difficulty level. Please try again.");
      console.error("Error in handleNextLevel:", err);
    }
  };

  const handleGoBack = () => {
    try {
      resetForNewRound();
      setQuizStarted(false);
      setError(null);
    } catch (err) {
      setError("Error going back. Please refresh the page.");
      console.error("Error in handleGoBack:", err);
    }
  };

  const answeredCount = Object.keys(answers).length;
  const progress =
    TOTAL_QUESTIONS > 0
      ? Math.round((answeredCount / TOTAL_QUESTIONS) * 100)
      : 0;

  const getDifficultyColor = () => {
    switch (difficulty) {
      case "easy":
        return "text-green-600 bg-green-100 border-green-200";
      case "medium":
        return "text-blue-600 bg-blue-100 border-blue-200";
      case "hard":
        return "text-red-600 bg-red-100 border-red-200";
      default:
        return "text-indigo-600 bg-indigo-100 border-indigo-200";
    }
  };

  // Show scroll-to-top button when scrolling
  useEffect(() => {
    const handleScroll = () => {
      setShowTopBtn(window.scrollY > 300);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Error boundary effect
  useEffect(() => {
    const handleError = (event: ErrorEvent) => {
      setError("An unexpected error occurred. Please refresh the page.");
      console.error("Global error:", event.error);
    };

    const handleRejection = (event: PromiseRejectionEvent) => {
      setError("An unexpected error occurred. Please refresh the page.");
      console.error("Unhandled promise rejection:", event.reason);
    };

    window.addEventListener("error", handleError);
    window.addEventListener("unhandledrejection", handleRejection);

    return () => {
      window.removeEventListener("error", handleError);
      window.removeEventListener("unhandledrejection", handleRejection);
    };
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-emerald-100 py-6 px-4 sm:px-6 lg:py-8">
      {/* Error Display */}
      <AnimatePresence>
        {error && (
          <motion.div
            className="fixed top-4 left-1/2 transform -translate-x-1/2 z-50 w-full max-w-md px-4"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
          >
            <div className="bg-red-100 border border-red-300 rounded-xl shadow-lg p-4 flex items-center justify-between backdrop-blur-sm bg-opacity-95">
              <div className="flex items-center space-x-2">
                <FaExclamationTriangle className="text-red-500 text-lg" />
                <span className="text-red-700 text-sm">{error}</span>
              </div>
              <button
                onClick={() => setError(null)}
                className="text-red-500 hover:text-red-700"
                aria-label="Dismiss error"
              >
                <FaTimesCircle />
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Breadcrumb Navigation */}
      <nav className="max-w-6xl mx-auto mb-6">
        <div className="flex items-center space-x-2 text-sm text-gray-600">
          <Link href="/biology" className="hover:text-green-600 transition-colors">
            Biology
          </Link>
          <span>›</span>
          <Link href="/biology/biological-molecules" className="hover:text-green-600 transition-colors">
            Biological Molecules
          </Link>
          <span>›</span>
          <span className="text-green-600 font-medium">Quiz</span>
        </div>
      </nav>

      <AnimatePresence>
        {quizStarted && score === null && (
          <motion.div
            className="fixed bottom-4 left-1/2 transform -translate-x-1/2 z-50 w-full max-w-md px-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
          >
            <div className="bg-white rounded-xl shadow-lg p-4 flex flex-col items-center justify-center border border-gray-200 backdrop-blur-sm bg-opacity-95">
              <div className="flex items-center justify-between w-full mb-3">
                <div className="flex items-center space-x-2">
                  <span className="text-sm font-medium text-gray-600">
                    Section:
                  </span>
                  <span className="font-bold text-green-600">
                    {section}/{SECTIONS}
                  </span>
                </div>
                <div className="flex items-center space-x-2">
                  <span className="text-sm font-medium text-gray-600">
                    Answered:
                  </span>
                  <span className="font-bold text-green-600">
                    {answeredCount}/{TOTAL_QUESTIONS}
                  </span>
                </div>
              </div>
              
              <div className="w-full mb-1">
                <div className="flex items-center justify-between text-xs text-gray-500 mb-1">
                  <span>Quiz Progress</span>
                  <span>{progress}%</span>
                </div>
                <div className="w-full h-2 bg-gray-200 rounded-full overflow-hidden">
                  <div
                    className="h-full bg-gradient-to-r from-green-500 to-emerald-500 rounded-full transition-all duration-300"
                    style={{ width: `${progress}%` }}
                  />
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {showPopup && (
          <motion.div
            className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50 px-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            role="dialog"
            aria-modal="true"
            aria-labelledby="complete-questions-title"
          >
            <motion.div
              className="bg-white rounded-xl shadow-xl max-w-md w-full p-6 text-center"
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
            >
              <FaExclamationTriangle className="text-yellow-500 text-4xl mx-auto mb-4" />
              <h3
                id="complete-questions-title"
                className="text-xl font-bold mb-2 text-gray-800"
              >
                Complete All Questions!
              </h3>
              <p className="text-gray-600 mb-4">
                Please answer all 10 questions in this section before proceeding.
              </p>
              <button
                onClick={() => setShowPopup(false)}
                className="px-6 py-2 bg-green-600 text-white rounded-lg shadow hover:bg-green-700 transition focus:ring-2 focus:ring-green-500 focus:outline-none"
              >
                Okay
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {!quizStarted ? (
        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          className="bg-white rounded-2xl shadow-xl max-w-md w-full p-6 mx-auto"
        >
          <div className="text-center mb-6">
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <FaDna className="text-2xl text-green-600" />
            </div>
            <h1 className="text-3xl font-bold text-gray-800 mb-2">
              MDCAT Biological Molecules Quiz
            </h1>
            <p className="text-gray-600">
              Master carbohydrates, proteins, lipids, nucleic acids, and conjugated molecules. 
              Practice with MCQs designed for medical entrance exams with detailed explanations.
            </p>
          </div>
          
          <div className="mb-6">
            <h2 className="text-sm font-medium text-gray-700 mb-3 text-center">
              Select Difficulty Level
            </h2>
            <div className="flex flex-col space-y-3">
              {[
                { id: "easy" as Difficulty, label: "Easy", color: "green" },
                { id: "medium" as Difficulty, label: "Medium", color: "blue" },
                { id: "hard" as Difficulty, label: "Hard", color: "red" },
              ].map((level) => (
                <button
                  key={level.id}
                  onClick={() => setDifficulty(level.id)}
                  className={`p-3 rounded-xl font-medium transition-all text-left ${
                    difficulty === level.id
                      ? `bg-${level.color}-500 text-white shadow-md`
                      : "bg-gray-100 hover:bg-gray-200 text-gray-800"
                  }`}
                  aria-label={`Select ${level.label} difficulty`}
                >
                  {level.label}
                </button>
              ))}
            </div>
          </div>
          
          <button
            onClick={() => setQuizStarted(true)}
            className="w-full py-3 bg-green-600 text-white rounded-xl hover:bg-green-700 transition disabled:opacity-50 disabled:cursor-not-allowed focus:ring-2 focus:ring-green-500 focus:outline-none"
            disabled={!difficulty}
            aria-label="Start quiz"
          >
            Start Quiz
          </button>
        </motion.div>
      ) : score === null ? (
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-3xl mx-auto bg-white rounded-xl shadow-lg overflow-hidden"
          ref={quizContainerRef}
        >
          <div className="p-5 border-b border-gray-200">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
              <h2 className="text-xl font-semibold text-gray-800 mb-2 sm:mb-0">
                MDCAT Biological Molecules Quiz
              </h2>
              <span className={`inline-flex items-center px-3 py-1 rounded-full text-sm font-medium border ${getDifficultyColor()}`}>
                {difficulty?.toUpperCase()}
              </span>
            </div>
            <p className="text-gray-600 mt-1 text-sm">
              Section {section} of {SECTIONS}
            </p>
          </div>

          <div className="p-5 space-y-5">
            {currentQuestions.map((q) => {
              const userAnswer = answers[q.id];
              const isCorrect = userAnswer === q.correctAnswer;
              const isLocked = lockedQuestions[q.id];

              return (
                <motion.div
                  key={q.id}
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="bg-gray-50 rounded-lg p-5"
                  aria-labelledby={`question-${q.id}`}
                >
                  <h3
                    id={`question-${q.id}`}
                    className="text-lg font-medium text-gray-800 mb-4"
                  >
                    {q.question}
                  </h3>
                  <div className="space-y-3">
                    {q.options.map((option, index) => {
                      const isUserAnswer = userAnswer === index;
                      const isCorrectOption = index === q.correctAnswer;

                      let buttonClass =
                        "w-full p-3 rounded-lg transition-all text-left focus:outline-none focus:ring-2 focus:ring-green-500 ";

                      if (isLocked) {
                        if (isCorrectOption) {
                          buttonClass +=
                            " bg-green-50 border border-green-200 text-green-800";
                        } else if (isUserAnswer && !isCorrect) {
                          buttonClass +=
                            " bg-red-50 border border-red-200 text-red-800";
                        } else {
                          buttonClass +=
                            " bg-gray-100 border border-gray-200 text-gray-600";
                        }
                      } else {
                        buttonClass += isUserAnswer
                          ? " bg-green-50 border border-green-200 text-green-800"
                          : " bg-white border border-gray-200 hover:bg-gray-50 text-gray-700";
                      }

                      return (
                        <button
                          key={index}
                          onClick={() => handleAnswer(q.id, index)}
                          disabled={isLocked}
                          className={buttonClass}
                          aria-label={`Option ${index + 1}: ${option}`}
                          aria-pressed={isUserAnswer}
                        >
                          {option}
                        </button>
                      );
                    })}
                  </div>

                  {isLocked && (
                    <div className="mt-4 flex items-center space-x-2">
                      {isCorrect ? (
                        <FaCheckCircle className="text-green-500 text-lg" />
                      ) : (
                        <FaTimesCircle className="text-red-500 text-lg" />
                      )}
                      <span
                        className={`font-medium text-sm ${
                          isCorrect
                            ? "text-green-600"
                            : "text-red-600"
                        }`}
                      >
                        {isCorrect ? "Correct!" : "Incorrect!"}
                      </span>
                    </div>
                  )}

                  {isLocked && (
                    <div className="mt-4">
                      <button
                        onClick={() =>
                          setShowExplanations((prev) => ({
                            ...prev,
                            [q.id]: !prev[q.id],
                          }))
                        }
                        className="flex items-center space-x-2 text-green-600 hover:text-green-700 text-sm font-medium"
                        aria-expanded={!!showExplanations[q.id]}
                        aria-controls={`explanation-${q.id}`}
                      >
                        <FaInfoCircle className="text-base" />
                        <span>
                          {showExplanations[q.id] ? "Hide" : "Show"} Explanation
                        </span>
                      </button>
                      <AnimatePresence>
                        {showExplanations[q.id] && (
                          <motion.div
                            id={`explanation-${q.id}`}
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: "auto" }}
                            exit={{ opacity: 0, height: 0 }}
                            className="mt-3 p-3 bg-green-50 rounded-lg text-sm text-gray-700"
                            aria-live="polite"
                          >
                            {q.explanation}
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  )}
                </motion.div>
              );
            })}
          </div>

          <div className="p-5 border-t border-gray-200 flex flex-col sm:flex-row justify-between items-center space-y-4 sm:space-y-0">
            <button
              onClick={handlePrevSection}
              disabled={section === 1}
              className={`px-4 py-2 rounded-lg flex items-center space-x-2 ${
                section === 1
                  ? "bg-gray-200 cursor-not-allowed text-gray-400"
                  : "bg-gray-200 hover:bg-gray-300 text-gray-700"
              }`}
              aria-label="Previous section"
            >
              <FaArrowLeft /> <span>Previous</span>
            </button>
            
            <div className="text-sm text-gray-500">
              {section < SECTIONS ? `Section ${section} of ${SECTIONS}` : 'Final Section'}
            </div>
            
            <button
              onClick={handleNextSection}
              className="px-4 py-2 rounded-lg flex items-center space-x-2 bg-green-600 hover:bg-green-700 text-white focus:ring-2 focus:ring-green-500 focus:outline-none"
              aria-label={section < SECTIONS ? "Next section" : "Finish quiz"}
            >
              <span>{section < SECTIONS ? "Next" : "Finish"}</span>
              <FaArrowRight />
            </button>
          </div>
        </motion.div>
      ) : (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-md mx-auto bg-white rounded-xl shadow-lg overflow-hidden"
        >
          <div className="p-6 text-center">
            <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-5">
              <span className="text-3xl">🎉</span>
            </div>
            
            <h2 className="text-2xl font-bold text-gray-800 mb-2">
              Quiz Completed!
            </h2>
            <p className="text-gray-600 mb-5">
              You scored <span className="font-bold text-green-600">{score}%</span> out of{" "}
              {TOTAL_QUESTIONS} questions.
            </p>

            {score !== null && (
              <div className="mb-6">
                {score >= 80 ? (
                  <div className="text-green-600 font-semibold flex items-center justify-center space-x-2">
                    <FaCheckCircle /> <span>Excellent work!</span>
                  </div>
                ) : score >= 50 ? (
                  <div className="text-yellow-600 font-semibold flex items-center justify-center space-x-2">
                    <FaExclamationTriangle />
                    <span>Good effort!</span>
                  </div>
                ) : (
                  <div className="text-red-600 font-semibold flex items-center justify-center space-x-2">
                    <FaTimesCircle />
                    <span>Keep practicing!</span>
                  </div>
                )}
              </div>
            )}

            <div className="space-y-3">
              <button
                onClick={handleRetakeQuiz}
                className="w-full py-3 bg-green-600 text-white rounded-lg hover:bg-green-700 flex items-center justify-center space-x-2 focus:ring-2 focus:ring-green-500 focus:outline-none"
                aria-label="Retake quiz"
              >
                <FaRedo className="text-sm" /> <span>Retake Quiz</span>
              </button>

              <button
                onClick={handleNextLevel}
                className="w-full py-3 bg-gray-600 text-white rounded-lg hover:bg-gray-700 flex items-center justify-center space-x-2 focus:ring-2 focus:ring-gray-500 focus:outline-none"
                aria-label="Go to next level"
              >
                <FaStepForward className="text-sm" /> <span>Next Level</span>
              </button>

              <Link
                href="/biology/biological-molecules"
                className="w-full py-3 bg-white border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 flex items-center justify-center space-x-2 focus:ring-2 focus:ring-gray-500 focus:outline-none"
                aria-label="Go back to biological molecules"
              >
                <FaArrowCircleLeft className="text-sm" /> <span>Back to Topics</span>
              </Link>
            </div>
          </div>
        </motion.div>
      )}

      <AnimatePresence>
        {showTopBtn && (
          <motion.button
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="fixed bottom-4 right-4 bg-green-600 text-white p-3 rounded-full shadow-lg hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2"
            aria-label="Scroll to top"
            style={{ zIndex: 1000 }}
          >
            <FaArrowUp />
          </motion.button>
        )}
      </AnimatePresence>
    </div>
  );
};

export default BiologicalMoleculesQuizClient;