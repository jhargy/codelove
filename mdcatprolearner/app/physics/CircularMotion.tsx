import React, { useState, useEffect, useCallback } from "react";
import {
  rotationalAndCircularQuestions,
  Question,
  Difficulty,
} from "../Physics/data/RotationalAndCircularMotionaQuestions";
import {
  FaArrowLeft,
  FaArrowRight,
  FaArrowUp,
  FaCheckCircle,
  FaTimesCircle,
  FaInfoCircle,
  FaRedo,
  FaExclamationTriangle,
} from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";
import { Helmet } from "react-helmet";

type AnswerState = Record<string, number | undefined>;
type FeedbackState = Record<string, boolean>;
type LockedState = Record<string, boolean>;

const RotationalAndCircularQuiz: React.FC = () => {
  const [difficulty, setDifficulty] = useState<Difficulty | null>(null);
  const [quizStarted, setQuizStarted] = useState(false);
  const [section, setSection] = useState(1);
  const [answers, setAnswers] = useState<AnswerState>({});
  const [showExplanations, setShowExplanations] = useState<FeedbackState>({});
  const [score, setScore] = useState<number | null>(null);
  const [showTopBtn, setShowTopBtn] = useState(false);
  const [lockedQuestions, setLockedQuestions] = useState<LockedState>({});
  const [isScrolled, setIsScrolled] = useState(false);

  const QUESTIONS_PER_SECTION = 10;

  const getQuestions = useCallback((): Question[] => {
    if (!difficulty) return [];
    return rotationalAndCircularQuestions[difficulty] || [];
  }, [difficulty]);

  const TOTAL_QUESTIONS = getQuestions().length;
  const SECTIONS = Math.ceil(TOTAL_QUESTIONS / QUESTIONS_PER_SECTION);

  const currentQuestions = getQuestions().slice(
    (section - 1) * QUESTIONS_PER_SECTION,
    section * QUESTIONS_PER_SECTION
  );

  const handleAnswer = (id: string, index: number) => {
    if (lockedQuestions[id]) return;
    
    const question = getQuestions().find(q => q.id === id);
    if (!question) return;

    setAnswers((prev) => ({ ...prev, [id]: index }));
    setLockedQuestions((prev) => ({ ...prev, [id]: true }));
  };

  const handleNextSection = () => {
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

  const handleRetakeQuiz = () => {
    setAnswers({});
    setShowExplanations({});
    setLockedQuestions({});
    setSection(1);
    setScore(null);
    setQuizStarted(false);
    setDifficulty(null);
  };

  useEffect(() => {
    const onScroll = () => {
      setShowTopBtn(window.scrollY > 200);
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const answeredCount = Object.keys(answers).length;
  const progress =
    TOTAL_QUESTIONS > 0
      ? Math.round((answeredCount / TOTAL_QUESTIONS) * 100)
      : 0;

  const getDifficultyColor = () => {
    switch (difficulty) {
      case "easy": return "text-green-600";
      case "medium": return "text-blue-600";
      case "hard": return "text-red-600";
      default: return "text-indigo-600";
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 to-blue-100 dark:from-gray-900 dark:to-gray-800 py-10 px-4">
      <Helmet>
        <title>Rotational & Circular Motion Quiz | Physics Practice</title>
        <meta
          name="description"
          content="Practice Rotational and Circular Motion with MCQs. Test your knowledge with explanations and instant feedback."
        />
        <meta name="keywords" content="rotational motion, circular motion, physics, quiz, mcq, practice" />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Quiz",
            name: "Rotational & Circular Motion Quiz",
            about: "Rotational and Circular Motion",
            educationalLevel: "High School",
            hasPart: getQuestions().map(q => ({
              "@type": "Question",
              name: q.question,
              suggestedAnswer: q.options.map((opt, i) => ({
                "@type": "Answer",
                text: opt,
                acceptedAnswer: i === q.correctAnswer
              }))
            }))
          })}
        </script>
      </Helmet>

      {/* Floating Progress Bar */}
      <AnimatePresence>
        {quizStarted && score === null && isScrolled && (
          <motion.div
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -50 }}
            className="fixed top-0 left-0 right-0 bg-white dark:bg-gray-800 shadow-md z-10 px-4 py-2"
          >
            <div className="max-w-4xl mx-auto">
              <div className="flex justify-between items-center mb-1">
                <span className="text-sm font-medium text-gray-600 dark:text-gray-300">
                  Section {section} of {SECTIONS}
                </span>
                <span className="text-sm text-gray-600 dark:text-gray-300">
                  {answeredCount}/{TOTAL_QUESTIONS} ({progress}%)
                </span>
              </div>
              <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                <div
                  className="bg-indigo-600 h-2 rounded-full transition-all"
                  style={{ width: `${progress}%` }}
                  aria-valuenow={progress}
                  aria-valuemin={0}
                  aria-valuemax={100}
                ></div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {!quizStarted ? (
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="bg-white dark:bg-gray-800 rounded-2xl shadow-2xl max-w-2xl w-full p-8 mx-auto"
        >
          <h1 className="text-4xl font-bold text-center text-indigo-700 dark:text-indigo-400 mb-6">
            🌀 Rotational & Circular Motion Quiz
          </h1>
          <p className="text-gray-600 dark:text-gray-300 text-center mb-6">
            Test your knowledge of rotational dynamics and circular motion with these MCQs. 
            Each question includes detailed explanations and feedback.
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
                    : "bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600"
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
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-4xl mx-auto bg-white dark:bg-gray-800 rounded-xl shadow-2xl p-6 mt-8"
        >
          <div className="mb-6">
            <h2 className="text-2xl font-bold text-indigo-700 dark:text-indigo-400">
              Rotational & Circular Motion: <span className={getDifficultyColor()}>{difficulty?.toUpperCase()}</span>
            </h2>
            <div className="flex justify-between items-center mt-2">
              <span className="text-gray-600 dark:text-gray-300">
                Section {section} of {SECTIONS}
              </span>
              <div className="text-gray-600 dark:text-gray-300">
                Progress: {answeredCount}/{TOTAL_QUESTIONS} ({progress}%)
              </div>
            </div>
          </div>

          <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-3 mb-6">
            <div
              className="bg-indigo-600 h-3 rounded-full transition-all"
              style={{ width: `${progress}%` }}
              aria-valuenow={progress}
              aria-valuemin={0}
              aria-valuemax={100}
            ></div>
          </div>

          <div className="space-y-8">
            {currentQuestions.map((q) => {
              const userAnswer = answers[q.id];
              const isCorrect = userAnswer === q.correctAnswer;
              const isLocked = lockedQuestions[q.id];

              return (
                <motion.div
                  key={q.id}
                  initial={{ opacity: 0, y: 20 }}
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
                      
                      let buttonClass = "p-3 rounded-lg transition-all border text-left";
                      
                      if (isLocked) {
                        if (isCorrectOption) {
                          buttonClass += " bg-green-100 dark:bg-green-900 border-2 border-green-500 dark:border-green-600 text-green-800 dark:text-green-200";
                        } else if (isUserAnswer && !isCorrect) {
                          buttonClass += " bg-red-100 dark:bg-red-900 border-2 border-red-500 dark:border-red-600 text-red-800 dark:text-red-200";
                        } else {
                          buttonClass += " bg-gray-200 dark:bg-gray-600 text-gray-600 dark:text-gray-300";
                        }
                      } else {
                        buttonClass += userAnswer === index
                          ? " bg-blue-100 dark:bg-blue-900 border-2 border-blue-500 dark:border-blue-600 text-blue-800 dark:text-blue-200"
                          : " bg-white dark:bg-gray-600 hover:bg-blue-100 dark:hover:bg-gray-500 border-gray-300 dark:border-gray-500";
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
                        <FaCheckCircle className="text-green-500 text-xl" aria-hidden="true" />
                      ) : (
                        <FaTimesCircle className="text-red-500 text-xl" aria-hidden="true" />
                      )}
                      <span
                        className={`font-medium ${
                          isCorrect ? "text-green-600 dark:text-green-400" : "text-red-600 dark:text-red-400"
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
                        aria-expanded={showExplanations[q.id]}
                        aria-controls={`explanation-${q.id}`}
                      >
                        <FaInfoCircle aria-hidden="true" />
                        <span>{showExplanations[q.id] ? "Hide" : "Show"} Explanation</span>
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
                  ? "bg-gray-300 dark:bg-gray-600 cursor-not-allowed"
                  : "bg-blue-600 hover:bg-blue-700 text-white"
              }`}
              aria-label="Previous section"
            >
              <FaArrowLeft aria-hidden="true" /> <span>Previous</span>
            </button>
            <button
              onClick={handleNextSection}
              className="px-5 py-2 rounded-lg flex items-center space-x-2 shadow bg-blue-600 hover:bg-blue-700 text-white"
              aria-label={section < SECTIONS ? "Next section" : "Finish quiz"}
            >
              <span>
                {section < SECTIONS ? "Next Section" : "Finish Quiz"}
              </span>
              <FaArrowRight aria-hidden="true" />
            </button>
          </div>
        </motion.div>
      ) : (
        <motion.div
          initial={{ opacity: 0, y: 30 }}
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

          {score >= 80 ? (
            <div className="text-green-600 dark:text-green-400 font-semibold text-xl flex items-center justify-center space-x-2">
              <FaCheckCircle aria-hidden="true" /> <span>Excellent work!</span>
            </div>
          ) : score >= 50 ? (
            <div className="text-yellow-600 dark:text-yellow-400 font-semibold text-xl flex items-center justify-center space-x-2">
              <FaExclamationTriangle aria-hidden="true" /> <span>Good effort, keep practicing!</span>
            </div>
          ) : (
            <div className="text-red-600 dark:text-red-400 font-semibold text-xl flex items-center justify-center space-x-2">
              <FaTimesCircle aria-hidden="true" /> <span>Don't worry, try again to improve!</span>
            </div>
          )}

          <button
            onClick={handleRetakeQuiz}
            className="mt-6 px-6 py-2 bg-blue-600 text-white rounded-lg shadow hover:bg-blue-700 flex items-center mx-auto space-x-2"
            aria-label="Retake quiz"
          >
            <FaRedo aria-hidden="true" /> <span>Retake Quiz</span>
          </button>
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
            <FaArrowUp aria-hidden="true" />
          </motion.button>
        )}
      </AnimatePresence>
    </div>
  );
};

export default RotationalAndCircularQuiz;