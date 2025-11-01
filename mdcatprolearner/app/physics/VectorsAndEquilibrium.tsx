import React, { useState, useEffect, useCallback, useRef } from "react";
import {
  vectorsAndEquilibriumQuestions,
  Question,
  Difficulty,
} from "./data/VectorsAndEquillibiriumQuestions";
import {
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
} from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";
import { Helmet } from "react-helmet";

type AnswerState = Record<string, number | undefined>;
type FeedbackState = Record<string, boolean>;
type LockedState = Record<string, boolean>;

const VectorsEquilibriumQuiz: React.FC = () => {
  const [difficulty, setDifficulty] = useState<Difficulty | null>(null);
  const [quizStarted, setQuizStarted] = useState(false);
  const [section, setSection] = useState(1);
  const [answers, setAnswers] = useState<AnswerState>({});
  const [showExplanations, setShowExplanations] = useState<FeedbackState>({});
  const [score, setScore] = useState<number | null>(null);
  const [showTopBtn, setShowTopBtn] = useState(false);
  const [lockedQuestions, setLockedQuestions] = useState<LockedState>({});
  const [showPopup, setShowPopup] = useState(false);
  const quizContainerRef = useRef<HTMLDivElement>(null);

  const QUESTIONS_PER_SECTION = 10;

  const getQuestions = useCallback((): Question[] => {
    if (!difficulty) return [];
    return vectorsAndEquilibriumQuestions[difficulty] || [];
  }, [difficulty]);

  const TOTAL_QUESTIONS = getQuestions().length;
  const SECTIONS = Math.ceil(TOTAL_QUESTIONS / QUESTIONS_PER_SECTION);

  const currentQuestions = getQuestions().slice(
    (section - 1) * QUESTIONS_PER_SECTION,
    section * QUESTIONS_PER_SECTION
  );

  const handleAnswer = (id: string, index: number) => {
    if (lockedQuestions[id]) return;

    const question = getQuestions().find((q) => q.id === id);
    if (!question) return;

    setAnswers((prev) => ({ ...prev, [id]: index }));
    setLockedQuestions((prev) => ({ ...prev, [id]: true }));
  };

  const handleNextSection = () => {
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
  };

  const handlePrevSection = () => {
    if (section > 1) {
      setSection((prev) => prev - 1);
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  const calculateScore = () => {
    const allQuestions = getQuestions();
    let correct = 0;
    allQuestions.forEach((q) => {
      if (answers[q.id] === q.correctAnswer) correct++;
    });
    setScore(Math.round((correct / allQuestions.length) * 100));
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

  const handleNextLevel = () => {
    const next =
      difficulty === "easy"
        ? "medium"
        : difficulty === "medium"
        ? "hard"
        : "easy";
    setDifficulty(next as Difficulty);
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

  const getDifficultyColor = () => {
    switch (difficulty) {
      case "easy":
        return "text-green-600";
      case "medium":
        return "text-blue-600";
      case "hard":
        return "text-red-600";
      default:
        return "text-indigo-600";
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

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 to-blue-100 dark:from-gray-900 dark:to-gray-800 py-10 px-4">
      <Helmet>
        <title>Vectors and Equilibrium Quiz | Physics Practice</title>
        <meta
          name="description"
          content="Practice Vectors and Equilibrium with MCQs. Test your knowledge with explanations and instant feedback."
        />
        <meta name="keywords" content="vectors, equilibrium, physics, quiz, mcq, practice" />
      </Helmet>

      <AnimatePresence>
        {quizStarted && score === null && (
          <motion.div
            className="fixed bottom-6 left-1/2 transform -translate-x-1/2 z-50"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
          >
            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-2xl px-6 py-4 flex flex-col items-center justify-center border border-gray-200 dark:border-gray-700">
              <div className="flex items-center justify-between w-full mb-3">
                <div className="flex items-center space-x-2">
                  <span className="text-sm font-medium text-gray-600 dark:text-gray-300">
                    Section:
                  </span>
                  <span className="font-bold text-indigo-600 dark:text-indigo-400">
                    {section}/{SECTIONS}
                  </span>
                </div>
                <div className="flex items-center space-x-2">
                  <span className="text-sm font-medium text-gray-600 dark:text-gray-300">
                    Answered:
                  </span>
                  <span className="font-bold text-indigo-600 dark:text-indigo-400">
                    {answeredCount}/{TOTAL_QUESTIONS}
                  </span>
                </div>
              </div>
              
              <div className="w-full mb-3">
                <div className="flex items-center justify-between text-xs text-gray-500 dark:text-gray-400 mt-1">
                  <span>Quiz Progress</span>
                  <span>{progress}%</span>
                </div>
                <div className="w-full h-2.5 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
                  <div
                    className="h-full bg-indigo-600 rounded-full transition-all duration-300"
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
              className="bg-white dark:bg-gray-800 rounded-xl shadow-2xl max-w-md w-full p-6 text-center"
              initial={{ scale: 0.85, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.85, opacity: 0 }}
            >
              <FaExclamationTriangle className="text-yellow-500 text-4xl mx-auto mb-4" />
              <h3
                id="complete-questions-title"
                className="text-xl font-bold mb-2 text-gray-800 dark:text-gray-200"
              >
                Complete All Questions!
              </h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                Please answer all 10 questions in this section before proceeding.
              </p>
              <button
                onClick={() => setShowPopup(false)}
                className="px-6 py-2 bg-blue-600 text-white rounded-lg shadow hover:bg-blue-700 transition"
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
          className="bg-white dark:bg-gray-800 rounded-2xl shadow-2xl max-w-2xl w-full p-8 mx-auto"
        >
          <h1 className="text-4xl font-bold text-center text-indigo-700 dark:text-indigo-400 mb-6">
            📐 Vectors and Equilibrium Quiz
          </h1>
          <p className="text-gray-600 dark:text-gray-300 text-center mb-6">
            Test your knowledge of vectors, forces, and equilibrium with MCQs. Each question
            includes detailed explanations and instant feedback.
          </p>
          <div className="flex flex-wrap justify-center gap-4 mb-6">
            {[
              { id: "easy" as Difficulty, label: "Easy", color: "green" },
              { id: "medium" as Difficulty, label: "Medium", color: "blue" },
              { id: "hard" as Difficulty, label: "Hard", color: "red" },
            ].map((level) => (
              <button
                key={level.id}
                onClick={() => setDifficulty(level.id)}
                className={`px-6 py-2 rounded-full font-semibold transition-all ${
                  difficulty === level.id
                    ? `bg-${level.color}-600 text-white shadow-md`
                    : "bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 text-gray-800 dark:text-gray-200"
                }`}
                aria-label={`Select ${level.label} difficulty`}
              >
                {level.label}
              </button>
            ))}
          </div>
          <button
            onClick={() => setQuizStarted(true)}
            className="w-full py-3 bg-indigo-600 text-white rounded-xl hover:bg-indigo-700 transition disabled:opacity-50 disabled:cursor-not-allowed"
            disabled={!difficulty}
            aria-label="Start quiz"
          >
            Start Quiz
          </button>
        </motion.div>
      ) : score === null ? (
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-4xl mx-auto bg-white dark:bg-gray-800 rounded-xl shadow-2xl p-6"
          ref={quizContainerRef}
        >
          <div className="mb-6">
            <h2 className="text-2xl font-bold text-indigo-700 dark:text-indigo-400">
              Vectors and Equilibrium Level:{" "}
              <span className={getDifficultyColor()}>
                {difficulty?.toUpperCase()}
              </span>
            </h2>
            <div className="text-gray-600 dark:text-gray-300 mt-2">
              Section {section} of {SECTIONS}
            </div>
          </div>

          <div className="space-y-8">
            {currentQuestions.map((q) => {
              const userAnswer = answers[q.id];
              const isCorrect = userAnswer === q.correctAnswer;
              const isLocked = lockedQuestions[q.id];

              return (
                <motion.div
                  key={q.id}
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="bg-gray-50 dark:bg-gray-700 rounded-lg shadow-md p-6"
                  aria-labelledby={`question-${q.id}`}
                >
                  <h3
                    id={`question-${q.id}`}
                    className="text-lg font-medium text-gray-800 dark:text-white mb-4"
                  >
                    {q.question}
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {q.options.map((option, index) => {
                      const isUserAnswer = userAnswer === index;
                      const isCorrectOption = index === q.correctAnswer;

                      let buttonClass =
                        "p-3 rounded-lg transition-all border text-left focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500";

                      if (isLocked) {
                        if (isCorrectOption) {
                          buttonClass +=
                            " bg-green-100 dark:bg-green-900 border-2 border-green-500 text-green-800 dark:text-green-200";
                        } else if (isUserAnswer && !isCorrect) {
                          buttonClass +=
                            " bg-red-100 dark:bg-red-900 border-2 border-red-500 text-red-800 dark:text-red-200";
                        } else {
                          buttonClass +=
                            " bg-gray-200 dark:bg-gray-600 text-gray-600 dark:text-gray-300";
                        }
                      } else {
                        buttonClass += isUserAnswer
                          ? " bg-blue-100 dark:bg-blue-900 border-2 border-blue-500 text-blue-800 dark:text-blue-200"
                          : " bg-white dark:bg-gray-600 hover:bg-blue-50 dark:hover:bg-gray-500 border-gray-300 dark:border-gray-500";
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
                        <FaCheckCircle className="text-green-500 text-xl" />
                      ) : (
                        <FaTimesCircle className="text-red-500 text-xl" />
                      )}
                      <span
                        className={`font-medium ${
                          isCorrect
                            ? "text-green-600 dark:text-green-400"
                            : "text-red-600 dark:text-red-400"
                        }`}
                      >
                        {isCorrect ? "Correct!" : "Wrong!"}
                      </span>
                    </div>
                  )}

                  {isLocked && (
                    <div className="mt-3">
                      <button
                        onClick={() =>
                          setShowExplanations((prev) => ({
                            ...prev,
                            [q.id]: !prev[q.id],
                          }))
                        }
                        className="flex items-center space-x-2 text-blue-600 dark:text-blue-400 hover:underline"
                        aria-expanded={!!showExplanations[q.id]}
                        aria-controls={`explanation-${q.id}`}
                      >
                        <FaInfoCircle />
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
                            className="mt-2 p-3 bg-blue-50 dark:bg-gray-600 rounded-lg text-gray-700 dark:text-gray-200"
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

          <div className="flex justify-between items-center mt-8">
            <button
              onClick={handlePrevSection}
              disabled={section === 1}
              className={`px-5 py-2 rounded-lg flex items-center space-x-2 shadow ${
                section === 1
                  ? "bg-gray-300 dark:bg-gray-600 cursor-not-allowed text-white"
                  : "bg-blue-600 hover:bg-blue-700 text-white"
              }`}
              aria-label="Previous section"
            >
              <FaArrowLeft /> <span>Previous</span>
            </button>
            <button
              onClick={handleNextSection}
              className="px-5 py-2 rounded-lg flex items-center space-x-2 shadow bg-blue-600 hover:bg-blue-700 text-white"
              aria-label={section < SECTIONS ? "Next section" : "Finish quiz"}
            >
              <span>{section < SECTIONS ? "Next Section" : "Finish Quiz"}</span>
              <FaArrowRight />
            </button>
          </div>
        </motion.div>
      ) : (
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-3xl mx-auto bg-white dark:bg-gray-800 rounded-xl shadow-2xl p-8 text-center"
        >
          <h2 className="text-3xl font-bold mb-4 text-gray-800 dark:text-white">
            Quiz Completed 🎉
          </h2>
          <p className="text-lg text-gray-700 dark:text-gray-300 mb-6">
            You scored <span className="font-bold">{score}%</span> out of{" "}
            {TOTAL_QUESTIONS} questions.
          </p>

          {score !== null && (
            <>
              {score >= 80 ? (
                <div className="text-green-600 dark:text-green-400 font-semibold text-xl flex items-center justify-center space-x-2 mb-6">
                  <FaCheckCircle /> <span>Excellent work!</span>
                </div>
              ) : score >= 50 ? (
                <div className="text-yellow-600 dark:text-yellow-400 font-semibold text-xl flex items-center justify-center space-x-2 mb-6">
                  <FaExclamationTriangle />
                  <span>Good effort, keep practicing!</span>
                </div>
              ) : (
                <div className="text-red-600 dark:text-red-400 font-semibold text-xl flex items-center justify-center space-x-2 mb-6">
                  <FaTimesCircle />
                  <span>Don't worry, try again to improve!</span>
                </div>
              )}
            </>
          )}

          <div className="flex flex-wrap justify-center gap-4">
            <button
              onClick={handleRetakeQuiz}
              className="px-6 py-2 bg-blue-600 text-white rounded-lg shadow hover:bg-blue-700 flex items-center space-x-2"
              aria-label="Retake quiz"
            >
              <FaRedo /> <span>Retake Quiz</span>
            </button>

            <button
              onClick={handleNextLevel}
              className="px-6 py-2 bg-green-600 text-white rounded-lg shadow hover:bg-green-700 flex items-center space-x-2"
              aria-label="Go to next level"
            >
              <FaStepForward /> <span>Go to Next Level</span>
            </button>

            <button
              onClick={handleGoBack}
              className="px-6 py-2 bg-gray-600 text-white rounded-lg shadow hover:bg-gray-700 flex items-center space-x-2"
              aria-label="Go back"
            >
              <FaArrowCircleLeft /> <span>Go Back</span>
            </button>
          </div>
        </motion.div>
      )}

      <AnimatePresence>
        {showTopBtn && (
          <motion.button
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="fixed bottom-6 right-6 bg-blue-600 text-white p-3 rounded-full shadow-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
            aria-label="Scroll to top"
          >
            <FaArrowUp />
          </motion.button>
        )}
      </AnimatePresence>
    </div>
  );
};

export default VectorsEquilibriumQuiz;