import React, { useState, useEffect, useCallback, useRef } from "react";
import { useNavigate } from "react-router-dom";
import {
  alternatingCurrentQuestions,
  Question,
  Difficulty,
} from "../Physics/data/AlternatingCurrentQuestions";
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
  FaBolt,
} from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";
import { Helmet } from "react-helmet";

type AnswerState = Record<string, number | undefined>;
type FeedbackState = Record<string, boolean>;
type LockedState = Record<string, boolean>;

const AlternatingCurrentQuiz: React.FC = () => {
  const navigate = useNavigate();
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
    return alternatingCurrentQuestions[difficulty] || [];
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

  const handleBackToTopics = () => {
    navigate("/physics");
  };

  const answeredCount = Object.keys(answers).length;
  const progress =
    TOTAL_QUESTIONS > 0
      ? Math.round((answeredCount / TOTAL_QUESTIONS) * 100)
      : 0;

  const getDifficultyColor = () => {
    switch (difficulty) {
      case "easy":
        return "text-green-600 bg-green-100 dark:bg-green-900/30";
      case "medium":
        return "text-blue-600 bg-blue-100 dark:bg-blue-900/30";
      case "hard":
        return "text-red-600 bg-red-100 dark:bg-red-900/30";
      default:
        return "text-indigo-600 bg-indigo-100 dark:bg-indigo-900/30";
    }
  };

  useEffect(() => {
    const onScroll = () => setShowTopBtn(window.scrollY > 300);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 to-blue-100 dark:from-gray-900 dark:to-gray-800 py-6 px-4 sm:px-6 lg:py-8">
      <Helmet>
        <title>AlternatingCurrent Quiz | Physics Practice</title>
        <meta
          name="description"
          content="Practice AlternatingCurrent with MCQs. Test your knowledge of Phase of Alternating
Current ,AC through a. Resistor, b. Capacitor., c. Inductor and Electromagnetic waves with explanations and instant feedback."
        />
        <meta
          name="keywords"
          content="AlternatingCurrent,Phase of Alternating
Current ,AC through ,a. Resistor, b. Capacitor., c. Inductor,  Electromagnetic waves, physics, quiz, MCQ, practice"
        />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Quiz",
            name: "AlternatingCurrent Quiz",
            about: "AlternatingCurrent",
            educationalLevel: "High School",
            hasPart: getQuestions().map((q) => ({
              "@type": "Question",
              name: q.question,
              suggestedAnswer: q.options.map((opt, i) => ({
                "@type": "Answer",
                text: opt,
                acceptedAnswer: i === q.correctAnswer,
              })),
            })),
          })}
        </script>
      </Helmet>

      <AnimatePresence>
        {quizStarted && score === null && (
          <motion.div
            className="fixed bottom-4 left-1/2 transform -translate-x-1/2 z-50 w-full max-w-md px-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
          >
            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-4 flex flex-col items-center justify-center border border-gray-200 dark:border-gray-700 backdrop-blur-sm bg-opacity-95">
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

              <div className="w-full mb-1">
                <div className="flex items-center justify-between text-xs text-gray-500 dark:text-gray-400 mb-1">
                  <span>Quiz Progress</span>
                  <span>{progress}%</span>
                </div>
                <div className="w-full h-2 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
                  <div
                    className="h-full bg-gradient-to-r from-indigo-500 to-blue-500 rounded-full transition-all duration-300"
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
              className="bg-white dark:bg-gray-800 rounded-xl shadow-xl max-w-md w-full p-6 text-center"
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
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
                className="px-6 py-2 bg-blue-600 text-white rounded-lg shadow hover:bg-blue-700 transition focus:ring-2 focus:ring-blue-500 focus:outline-none"
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
          className="bg-white dark:bg-gray-800 rounded-2xl shadow-2xl max-w-md w-full p-6 mx-auto"
        >
          <div className="text-center mb-6">
            <div className="w-16 h-16 bg-indigo-100 dark:bg-indigo-900 rounded-full flex items-center justify-center mx-auto mb-4">
              <FaBolt className="text-2xl text-indigo-500" />
            </div>
            <h1 className="text-3xl font-bold text-gray-800 dark:text-white mb-2">
              Alternating-Current Quiz
            </h1>
            <p className="text-gray-600 dark:text-gray-300">
              Test your understanding of Phase of Alternating
Current ,AC through a. Resistor, b. Capacitor., c. Inductor and Electromagnetic waves with interactive MCQs.
            </p>
          </div>

          <div className="mb-6">
            <h2 className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-3 text-center">
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
                      : "bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 text-gray-800 dark:text-gray-200"
                  }`}
                  aria-label={`Select ${level.label} difficulty`}
                >
                  {level.label}
                </button>
              ))}
            </div>
          </div>

          <div className="flex flex-col space-y-3">
            <button
              onClick={() => setQuizStarted(true)}
              className="w-full py-3 bg-indigo-600 text-white rounded-xl hover:bg-indigo-700 transition disabled:opacity-50 disabled:cursor-not-allowed focus:ring-2 focus:ring-indigo-500 focus:outline-none"
              disabled={!difficulty}
              aria-label="Start quiz"
            >
              Start Quiz
            </button>

            <button
              onClick={handleBackToTopics}
              className="w-full py-2 bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 rounded-xl hover:bg-gray-300 dark:hover:bg-gray-600 transition focus:ring-2 focus:ring-gray-500 focus:outline-none"
              aria-label="Back to topics"
            >
              Back to Topics
            </button>
          </div>
        </motion.div>
      ) : score === null ? (
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-3xl mx-auto bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden"
          ref={quizContainerRef}
        >
          <div className="p-5 border-b border-gray-200 dark:border-gray-700">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
              <h2 className="text-xl font-semibold text-gray-800 dark:text-white mb-2 sm:mb-0">
                AlternatingCurrent Quiz
              </h2>
              <span
                className={`inline-flex items-center px-3 py-1 rounded-full text-sm font-medium ${getDifficultyColor()}`}
              >
                {difficulty?.toUpperCase()}
              </span>
            </div>
            <p className="text-gray-600 dark:text-gray-300 mt-1 text-sm">
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
                  className="bg-gray-50 dark:bg-gray-700/50 rounded-lg p-5"
                  aria-labelledby={`question-${q.id}`}
                >
                  <h3
                    id={`question-${q.id}`}
                    className="text-lg font-medium text-gray-800 dark:text-white mb-4"
                  >
                    {q.question}
                  </h3>
                  <div className="space-y-3">
                    {q.options.map((option, index) => {
                      const isUserAnswer = userAnswer === index;
                      const isCorrectOption = index === q.correctAnswer;

                      let buttonClass =
                        "w-full p-3 rounded-lg transition-all text-left focus:outline-none focus:ring-2 focus:ring-indigo-500 ";

                      if (isLocked) {
                        if (isCorrectOption) {
                          buttonClass +=
                            " bg-green-50 dark:bg-green-900/30 border border-green-200 dark:border-green-800 text-green-800 dark:text-green-200";
                        } else if (isUserAnswer && !isCorrect) {
                          buttonClass +=
                            " bg-red-50 dark:bg-red-900/30 border border-red-200 dark:border-red-800 text-red-800 dark:text-red-200";
                        } else {
                          buttonClass +=
                            " bg-gray-100 dark:bg-gray-600 border border-gray-200 dark:border-gray-600 text-gray-600 dark:text-gray-300";
                        }
                      } else {
                        buttonClass += isUserAnswer
                          ? " bg-blue-50 dark:bg-blue-900/30 border border-blue-200 dark:border-blue-700 text-blue-800 dark:text-blue-200"
                          : " bg-white dark:bg-gray-600 border border-gray-200 dark:border-gray-500 hover:bg-gray-50 dark:hover:bg-gray-500 text-gray-700 dark:text-gray-200";
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
                            ? "text-green-600 dark:text-green-400"
                            : "text-red-600 dark:text-red-400"
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
                        className="flex items-center space-x-2 text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 text-sm font-medium"
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
                            className="mt-3 p-3 bg-blue-50 dark:bg-gray-600 rounded-lg text-sm text-gray-700 dark:text-gray-200"
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

          <div className="p-5 border-t border-gray-200 dark:border-gray-700 flex flex-col sm:flex-row justify-between items-center space-y-4 sm:space-y-0">
            <button
              onClick={handlePrevSection}
              disabled={section === 1}
              className={`px-4 py-2 rounded-lg flex items-center space-x-2 ${
                section === 1
                  ? "bg-gray-200 dark:bg-gray-700 cursor-not-allowed text-gray-400 dark:text-gray-500"
                  : "bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 text-gray-700 dark:text-gray-200"
              }`}
              aria-label="Previous section"
            >
              <FaArrowLeft /> <span>Previous</span>
            </button>

            <div className="text-sm text-gray-500 dark:text-gray-400">
              {section < SECTIONS ? `Section ${section} of ${SECTIONS}` : "Final Section"}
            </div>

            <button
              onClick={handleNextSection}
              className="px-4 py-2 rounded-lg flex items-center space-x-2 bg-indigo-600 hover:bg-indigo-700 text-white focus:ring-2 focus:ring-indigo-500 focus:outline-none"
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
          className="max-w-md mx-auto bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden"
        >
          <div className="p-6 text-center">
            <div className="w-20 h-20 bg-indigo-100 dark:bg-indigo-900 rounded-full flex items-center justify-center mx-auto mb-5">
              <span className="text-3xl">🎉</span>
            </div>

            <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-2">
              Quiz Completed!
            </h2>
            <p className="text-gray-600 dark:text-gray-300 mb-5">
              You scored{" "}
              <span className="font-bold text-indigo-600 dark:text-indigo-400">
                {score}%
              </span>{" "}
              out of {TOTAL_QUESTIONS} questions.
            </p>

            {score !== null && (
              <div className="mb-6">
                {score >= 80 ? (
                  <div className="text-green-600 dark:text-green-400 font-semibold flex items-center justify-center space-x-2">
                    <FaCheckCircle /> <span>Excellent work!</span>
                  </div>
                ) : score >= 50 ? (
                  <div className="text-yellow-600 dark:text-yellow-400 font-semibold flex items-center justify-center space-x-2">
                    <FaExclamationTriangle />
                    <span>Good effort!</span>
                  </div>
                ) : (
                  <div className="text-red-600 dark:text-red-400 font-semibold flex items-center justify-center space-x-2">
                    <FaTimesCircle />
                    <span>Keep practicing!</span>
                  </div>
                )}
              </div>
            )}

            <div className="space-y-3">
              <button
                onClick={handleRetakeQuiz}
                className="w-full py-3 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 flex items-center justify-center space-x-2 focus:ring-2 focus:ring-indigo-500 focus:outline-none"
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

              <button
                onClick={handleGoBack}
                className="w-full py-3 bg-white dark:bg-gray-700 border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-200 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-600 flex items-center justify-center space-x-2 focus:ring-2 focus:ring-gray-500 focus:outline-none"
                aria-label="Go back"
              >
                <FaArrowCircleLeft className="text-sm" /> <span>Go Back</span>
              </button>
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
            className="fixed bottom-4 right-4 bg-indigo-600 text-white p-3 rounded-full shadow-lg hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
            aria-label="Scroll to top"
          >
            <FaArrowUp />
          </motion.button>
        )}
      </AnimatePresence>
    </div>
  );
};

export default AlternatingCurrentQuiz;
