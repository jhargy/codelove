// app/biology/quiz/BiologicalMoleculesQuiz.tsx
'use client'

import React, { useState, useEffect, useCallback, useRef } from "react";
import { useRouter } from "next/navigation";
import Header from "../../components/ui/Header";
import Footer from "../../components/ui/Footer";
import {
  biologicalMoleculesQuestions,
  Question,
  Difficulty,
} from "../data/biologicalMoleculesQuestions";
import {
  FaAtom,
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
  FaHome,
  FaChartBar,
} from "react-icons/fa";

type AnswerState = Record<string, number | undefined>;
type FeedbackState = Record<string, boolean>;
type LockedState = Record<string, boolean>;

const BiologicalMoleculesQuiz: React.FC = () => {
  const router = useRouter();
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
  const [selectedOption, setSelectedOption] = useState<{questionId: string, optionIndex: number} | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const quizContainerRef = useRef<HTMLDivElement>(null);

  const QUESTIONS_PER_SECTION = 5;

  // Simulate loading state
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1000);
    return () => clearTimeout(timer);
  }, []);

  const getQuestions = useCallback((): Question[] => {
    try {
      if (!difficulty) return [];
      return biologicalMoleculesQuestions[difficulty] || [];
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

  const handleAnswer = (questionId: string, optionIndex: number) => {
    try {
      if (lockedQuestions[questionId]) return;

      const question = getQuestions().find((q) => q.id === questionId);
      if (!question) {
        setError("Question not found. Please refresh the page.");
        return;
      }

      // Set selected option for visual feedback
      setSelectedOption({ questionId, optionIndex });

      // Delay the answer locking to show feedback animation
      setTimeout(() => {
        setAnswers((prev) => ({ ...prev, [questionId]: optionIndex }));
        setLockedQuestions((prev) => ({ ...prev, [questionId]: true }));
        setSelectedOption(null);
        setError(null);
      }, 1500);

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
      setSelectedOption(null);
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

  const handleBackToBiology = () => {
    router.push('/biology');
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

  const getOptionColor = (questionId: string, optionIndex: number, correctAnswer: number, isLocked: boolean) => {
    if (!isLocked) {
      const isSelected = selectedOption?.questionId === questionId && selectedOption.optionIndex === optionIndex;
      return isSelected 
        ? "bg-blue-100 border-blue-400 text-blue-800"
        : "bg-white border-gray-200 text-gray-700 hover:bg-gray-50 hover:border-gray-300";
    }

    const isUserAnswer = answers[questionId] === optionIndex;
    const isCorrectOption = optionIndex === correctAnswer;

    if (isCorrectOption) {
      return "bg-green-100 border-green-400 text-green-800 shadow-sm";
    } else if (isUserAnswer && !isCorrectOption) {
      return "bg-red-100 border-red-400 text-red-800 shadow-sm";
    } else {
      return "bg-gray-100 border-gray-200 text-gray-500";
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

  if (isLoading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-white to-blue-50">
        <Header />
        <div className="flex items-center justify-center min-h-[60vh]">
          <div className="text-center">
            <div className="animate-spin rounded-full h-16 w-16 border-b-2 border-indigo-600 mx-auto mb-4"></div>
            <p className="text-gray-600">Loading Quiz...</p>
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-white to-blue-50">
      <Header />
      
      <div className="py-6 px-4 sm:px-6 lg:py-8 max-w-7xl mx-auto">
        {/* Error Display */}
        {error && (
          <div 
            className="fixed top-20 left-1/2 transform -translate-x-1/2 z-50 w-full max-w-md px-4 animate-fade-in"
            role="alert"
            aria-live="assertive"
          >
            <div className="bg-red-100 border border-red-300 rounded-xl shadow-lg p-4 flex items-center justify-between backdrop-blur-sm bg-opacity-95">
              <div className="flex items-center space-x-2">
                <FaExclamationTriangle className="text-red-500 text-lg" aria-hidden="true" />
                <span className="text-red-700 text-sm">{error}</span>
              </div>
              <button
                onClick={() => setError(null)}
                className="text-red-500 hover:text-red-700 transition-colors"
                aria-label="Dismiss error message"
              >
                <FaTimesCircle aria-hidden="true" />
              </button>
            </div>
          </div>
        )}

        {/* Mobile Progress Bar */}
        {quizStarted && score === null && (
          <div className="fixed bottom-4 left-1/2 transform -translate-x-1/2 z-40 w-full max-w-md px-4 md:hidden">
            <div className="bg-white/95 backdrop-blur-sm rounded-2xl shadow-xl p-4 border border-gray-200">
              <div className="flex items-center justify-between w-full mb-3">
                <div className="flex items-center space-x-3">
                  <div className={`px-2 py-1 rounded-full text-xs font-bold ${getDifficultyColor()}`}>
                    {difficulty?.charAt(0).toUpperCase()}
                  </div>
                  <span className="text-sm font-medium text-gray-600">
                    Sec {section}/{SECTIONS}
                  </span>
                </div>
                <div className="text-right">
                  <span className="text-sm font-bold text-indigo-600">
                    {progress}%
                  </span>
                  <div className="text-xs text-gray-500">
                    {answeredCount}/{TOTAL_QUESTIONS}
                  </div>
                </div>
              </div>
              
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div 
                  className="h-2 bg-gradient-to-r from-indigo-500 to-blue-500 rounded-full transition-all duration-500 ease-out"
                  style={{ width: `${progress}%` }}
                  role="progressbar"
                  aria-valuenow={progress}
                  aria-valuemin={0}
                  aria-valuemax={100}
                />
              </div>
            </div>
          </div>
        )}

        {/* Incomplete Questions Popup */}
        {showPopup && (
          <div 
            className="fixed inset-0 flex items-center justify-center bg-black/50 z-50 px-4 animate-fade-in"
            role="dialog"
            aria-modal="true"
            aria-labelledby="complete-questions-title"
          >
            <div className="bg-white rounded-2xl shadow-2xl max-w-sm w-full p-6 text-center animate-scale-in">
              <div className="w-12 h-12 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <FaExclamationTriangle className="text-yellow-600 text-xl" aria-hidden="true" />
              </div>
              <h3
                id="complete-questions-title"
                className="text-lg font-bold mb-2 text-gray-800"
              >
                Complete All Questions
              </h3>
              <p className="text-gray-600 text-sm mb-4">
                Please answer all {QUESTIONS_PER_SECTION} questions in this section before proceeding.
              </p>
              <button
                onClick={() => setShowPopup(false)}
                className="w-full px-6 py-3 bg-blue-600 text-white rounded-xl shadow-lg hover:bg-blue-700 transition-all focus:ring-2 focus:ring-blue-500 focus:outline-none font-medium"
                aria-label="Close dialog and continue answering questions"
              >
                Continue Answering
              </button>
            </div>
          </div>
        )}

        {!quizStarted ? (
          <div className="bg-white rounded-3xl shadow-2xl max-w-md w-full p-8 mx-auto animate-fade-in">
            <div className="text-center mb-8">
              <div className="w-20 h-20 bg-gradient-to-r from-indigo-500 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg">
                <FaAtom className="text-3xl text-white" aria-hidden="true" />
              </div>
              <h1 className="text-3xl font-bold text-gray-900 mb-3">
                Biological Molecules Quiz
              </h1>
              <p className="text-gray-600 leading-relaxed text-lg">
                Master carbohydrates, proteins, lipids, and nucleic acids with interactive MCQs designed for MDCAT preparation.
              </p>
            </div>
            
            <div className="mb-8">
              <h2 className="text-sm font-semibold text-gray-700 mb-4 text-center uppercase tracking-wide">
                Choose Your Challenge Level
              </h2>
              <div className="space-y-3" role="radiogroup" aria-label="Difficulty levels">
                {[
                  { id: "easy" as Difficulty, label: "Beginner", description: "Fundamental concepts", questions: "10 questions", color: "green" },
                  { id: "medium" as Difficulty, label: "Intermediate", description: "Application & analysis", questions: "15 questions", color: "blue" },
                  { id: "hard" as Difficulty, label: "Advanced", description: "Complex scenarios", questions: "20 questions", color: "red" },
                ].map((level) => (
                  <button
                    key={level.id}
                    onClick={() => setDifficulty(level.id)}
                    className={`w-full p-4 rounded-xl font-medium transition-all text-left border-2 group ${
                      difficulty === level.id
                        ? `border-${level.color}-500 bg-${level.color}-50 text-${level.color}-700 shadow-md scale-[1.02]`
                        : "border-gray-200 bg-gray-50 hover:bg-white text-gray-700 hover:border-gray-300 hover:shadow-sm"
                    }`}
                    role="radio"
                    aria-checked={difficulty === level.id}
                  >
                    <div className="flex items-center justify-between">
                      <div>
                        <div className="font-bold text-lg">{level.label}</div>
                        <div className="text-sm text-gray-600 mt-1">{level.description}</div>
                      </div>
                      <div className="text-xs font-medium text-gray-500 bg-white px-2 py-1 rounded-full">
                        {level.questions}
                      </div>
                    </div>
                  </button>
                ))}
              </div>
            </div>
            
            <div className="space-y-3">
              <button
                onClick={() => setQuizStarted(true)}
                className="w-full py-4 bg-gradient-to-r from-indigo-600 to-blue-600 text-white rounded-xl hover:from-indigo-700 hover:to-blue-700 transition-all disabled:opacity-50 disabled:cursor-not-allowed focus:ring-4 focus:ring-indigo-200 focus:outline-none text-lg font-bold shadow-lg transform hover:scale-[1.02] active:scale-[0.98]"
                disabled={!difficulty}
                aria-label={`Start ${difficulty} difficulty quiz`}
              >
                Start Quiz Now
              </button>

              <button
                onClick={handleBackToBiology}
                className="w-full py-3 bg-white border-2 border-gray-300 text-gray-700 rounded-xl hover:bg-gray-50 hover:border-gray-400 transition-all focus:ring-4 focus:ring-gray-200 focus:outline-none font-medium transform hover:scale-[1.02] active:scale-[0.98]"
              >
                Back to Biology Topics
              </button>
            </div>

            {/* Quick Stats */}
            <div className="mt-6 p-4 bg-gray-50 rounded-xl border border-gray-200">
              <div className="grid grid-cols-3 gap-4 text-center">
                <div>
                  <div className="text-2xl font-bold text-indigo-600">45</div>
                  <div className="text-xs text-gray-500">Questions</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-green-600">3</div>
                  <div className="text-xs text-gray-500">Levels</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-blue-600">100%</div>
                  <div className="text-xs text-gray-500">Free</div>
                </div>
              </div>
            </div>
          </div>
        ) : score === null ? (
          <div 
            className="max-w-4xl mx-auto bg-white rounded-2xl shadow-xl overflow-hidden animate-fade-in-up border border-gray-200"
            ref={quizContainerRef}
          >
            {/* Quiz Header */}
            <div className="p-6 border-b border-gray-200 bg-gradient-to-r from-indigo-50 to-blue-50">
              <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-3">
                    <button
                      onClick={handleGoBack}
                      className="p-2 hover:bg-white rounded-lg transition-colors"
                      aria-label="Back to menu"
                    >
                      <FaHome className="text-gray-600" />
                    </button>
                    <h1 className="text-2xl font-bold text-gray-900">
                      Biological Molecules
                    </h1>
                  </div>
                  <div className="flex flex-wrap items-center gap-3 text-sm">
                    <span className={`inline-flex items-center px-3 py-1.5 rounded-full border font-semibold ${getDifficultyColor()}`}>
                      <FaChartBar className="mr-2" />
                      {difficulty?.toUpperCase()}
                    </span>
                    <span className="text-gray-600">Section {section} of {SECTIONS}</span>
                    <span className="text-gray-600">{answeredCount}/{TOTAL_QUESTIONS} answered</span>
                  </div>
                </div>
                
                {/* Desktop Progress */}
                <div className="hidden lg:flex items-center space-x-4 min-w-64">
                  <div className="flex-1 bg-gray-200 rounded-full h-3">
                    <div 
                      className="h-3 bg-gradient-to-r from-indigo-500 to-blue-500 rounded-full transition-all duration-500 ease-out"
                      style={{ width: `${progress}%` }}
                      role="progressbar"
                      aria-valuenow={progress}
                      aria-valuemin={0}
                      aria-valuemax={100}
                    />
                  </div>
                  <span className="text-lg font-bold text-indigo-600 min-w-16">{progress}%</span>
                </div>
              </div>
            </div>

            {/* Questions */}
            <div className="p-4 lg:p-8 space-y-6 lg:space-y-8">
              {currentQuestions.map((q, questionIndex) => {
                const userAnswer = answers[q.id];
                const isCorrect = userAnswer === q.correctAnswer;
                const isLocked = lockedQuestions[q.id];

                return (
                  <div
                    key={q.id}
                    className="bg-white rounded-xl p-6 border-2 border-gray-100 hover:border-indigo-100 transition-all duration-300 shadow-sm hover:shadow-md"
                    role="article"
                    aria-labelledby={`question-${q.id}`}
                  >
                    <div className="flex items-start space-x-4 mb-6">
                      <span className="flex-shrink-0 w-10 h-10 bg-gradient-to-r from-indigo-500 to-blue-600 text-white rounded-full flex items-center justify-center text-sm font-bold shadow-lg">
                        {(section - 1) * QUESTIONS_PER_SECTION + questionIndex + 1}
                      </span>
                      <h3
                        id={`question-${q.id}`}
                        className="text-lg lg:text-xl font-semibold text-gray-900 leading-relaxed flex-1"
                      >
                        {q.question}
                      </h3>
                    </div>
                    
                    <div className="space-y-3 lg:space-y-4 lg:ml-14" role="radiogroup" aria-labelledby={`question-${q.id}`}>
                      {q.options.map((option, index) => {
                        const isSelected = selectedOption?.questionId === q.id && selectedOption.optionIndex === index;

                        return (
                          <button
                            key={index}
                            onClick={() => handleAnswer(q.id, index)}
                            disabled={isLocked}
                            className={`w-full p-4 rounded-xl transition-all duration-300 text-left focus:outline-none focus:ring-2 focus:ring-indigo-500 border-2 text-base font-medium transform hover:scale-[1.02] active:scale-[0.98] ${
                              getOptionColor(q.id, index, q.correctAnswer, isLocked)
                            } ${isSelected ? 'animate-pulse' : ''}`}
                            role="radio"
                            aria-checked={answers[q.id] === index}
                            aria-disabled={isLocked}
                          >
                            <div className="flex items-center space-x-4">
                              <span className={`flex-shrink-0 w-8 h-8 rounded-full border-2 flex items-center justify-center text-sm font-bold ${
                                isLocked ? 'border-current' : 'border-gray-300'
                              }`}>
                                {String.fromCharCode(65 + index)}
                              </span>
                              <span className="flex-1 text-left">{option}</span>
                              {isLocked && index === q.correctAnswer && (
                                <FaCheckCircle className="text-green-500 text-lg flex-shrink-0" />
                              )}
                              {isLocked && answers[q.id] === index && index !== q.correctAnswer && (
                                <FaTimesCircle className="text-red-500 text-lg flex-shrink-0" />
                              )}
                            </div>
                          </button>
                        );
                      })}
                    </div>

                    {/* Feedback */}
                    {isLocked && (
                      <div className="lg:ml-14 mt-6 space-y-4 animate-fade-in">
                        <div className={`flex items-center space-x-3 p-4 rounded-xl ${
                          isCorrect ? 'bg-green-50 border border-green-200' : 'bg-red-50 border border-red-200'
                        }`}>
                          {isCorrect ? (
                            <FaCheckCircle className="text-green-500 text-xl flex-shrink-0" />
                          ) : (
                            <FaTimesCircle className="text-red-500 text-xl flex-shrink-0" />
                          )}
                          <div>
                            <span className={`font-bold text-lg ${
                              isCorrect ? 'text-green-700' : 'text-red-700'
                            }`}>
                              {isCorrect ? "Excellent! Correct Answer" : "Incorrect Answer"}
                            </span>
                            {!isCorrect && (
                              <p className="text-red-600 text-sm mt-1">
                                Correct answer is {String.fromCharCode(65 + q.correctAnswer)}
                              </p>
                            )}
                          </div>
                        </div>

                        <div>
                          <button
                            onClick={() =>
                              setShowExplanations((prev) => ({
                                ...prev,
                                [q.id]: !prev[q.id],
                              }))
                            }
                            className="flex items-center space-x-3 text-blue-600 hover:text-blue-700 font-semibold transition-colors p-3 hover:bg-blue-50 rounded-lg w-full text-left"
                            aria-expanded={!!showExplanations[q.id]}
                            aria-controls={`explanation-${q.id}`}
                          >
                            <FaInfoCircle className="text-lg flex-shrink-0" />
                            <span className="flex-1">
                              {showExplanations[q.id] ? "Hide Detailed Explanation" : "Show Detailed Explanation"}
                            </span>
                            <div className={`transform transition-transform ${showExplanations[q.id] ? 'rotate-180' : ''}`}>
                              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                              </svg>
                            </div>
                          </button>
                          
                          {showExplanations[q.id] && (
                            <div
                              id={`explanation-${q.id}`}
                              className="mt-3 p-4 bg-blue-50 rounded-xl text-gray-700 border border-blue-200 animate-fade-in leading-relaxed"
                              aria-live="polite"
                            >
                              <strong className="text-blue-800">Explanation:</strong> {q.explanation}
                            </div>
                          )}
                        </div>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>

            {/* Navigation */}
            <div className="p-6 border-t border-gray-200 bg-gray-50">
              <div className="flex flex-col sm:flex-row justify-between items-center space-y-4 sm:space-y-0">
                <button
                  onClick={handlePrevSection}
                  disabled={section === 1}
                  className={`px-6 py-3 rounded-xl flex items-center space-x-3 transition-all font-medium ${
                    section === 1
                      ? "bg-gray-200 cursor-not-allowed text-gray-400"
                      : "bg-white border border-gray-300 hover:bg-gray-50 text-gray-700 hover:border-gray-400 shadow-sm hover:shadow-md"
                  }`}
                  aria-label="Go to previous section"
                >
                  <FaArrowLeft aria-hidden="true" /> 
                  <span>Previous Section</span>
                </button>
                
                <div className="text-sm text-gray-500 text-center px-4 py-2 bg-white rounded-lg border border-gray-200">
                  <span className="font-medium">Section {section}</span>
                  <span className="text-gray-400 mx-2">•</span>
                  <span>{SECTIONS} total</span>
                </div>
                
                <button
                  onClick={handleNextSection}
                  className="px-8 py-3 rounded-xl flex items-center space-x-3 bg-gradient-to-r from-indigo-600 to-blue-600 hover:from-indigo-700 hover:to-blue-700 text-white focus:ring-4 focus:ring-indigo-200 focus:outline-none transition-all font-bold shadow-lg hover:shadow-xl transform hover:scale-[1.02] active:scale-[0.98]"
                  aria-label={section < SECTIONS ? "Go to next section" : "Finish quiz and view results"}
                >
                  <span>{section < SECTIONS ? "Next Section" : "View Results"}</span>
                  <FaArrowRight aria-hidden="true" />
                </button>
              </div>
            </div>
          </div>
        ) : (
          <div className="max-w-2xl mx-auto bg-white rounded-3xl shadow-2xl overflow-hidden animate-fade-in border border-gray-200">
            <div className="p-8 text-center">
              <div className="w-24 h-24 bg-gradient-to-r from-green-400 to-blue-500 rounded-full flex items-center justify-center mx-auto mb-6 shadow-xl">
                <span className="text-4xl" aria-hidden="true">🎯</span>
              </div>
              
              <h1 className="text-3xl font-bold text-gray-900 mb-3">
                Quiz Completed!
              </h1>
              
              {/* Score Circle */}
              <div className="relative inline-block mb-6">
                <div className="w-32 h-32 rounded-full border-8 border-gray-100 flex items-center justify-center">
                  <div className="text-center">
                    <div className="text-4xl font-bold text-indigo-600" aria-live="polite">
                      {score}%
                    </div>
                    <div className="text-sm text-gray-500 mt-1">Score</div>
                  </div>
                </div>
                <div 
                  className="absolute inset-0 rounded-full border-8 border-transparent border-t-indigo-500 border-r-blue-500 transform -rotate-45"
                  style={{
                    clipPath: `polygon(0 0, 100% 0, 100% 100%, 0 100%)`,
                    mask: `conic-gradient(from 0deg, transparent 0%, transparent ${100 - score}%, black ${100 - score}%, black 100%)`
                  }}
                />
              </div>

              <p className="text-gray-600 text-lg mb-2">
                You answered <strong>{Math.round((score || 0) / 100 * TOTAL_QUESTIONS)}</strong> out of{" "}
                <strong>{TOTAL_QUESTIONS}</strong> questions correctly.
              </p>

              {/* Performance Feedback */}
              {score !== null && (
                <div className="mb-8 p-6 bg-gradient-to-r from-indigo-50 to-blue-50 rounded-2xl border border-indigo-100">
                  {score >= 80 ? (
                    <div className="text-green-700 font-bold text-lg flex items-center justify-center space-x-3">
                      <FaCheckCircle className="text-green-500 text-xl" /> 
                      <span>Outstanding! You've mastered Biological Molecules.</span>
                    </div>
                  ) : score >= 60 ? (
                    <div className="text-blue-700 font-bold text-lg flex items-center justify-center space-x-3">
                      <FaExclamationTriangle className="text-blue-500 text-xl" />
                      <span>Great effort! Review explanations to reach excellence.</span>
                    </div>
                  ) : (
                    <div className="text-orange-700 font-bold text-lg flex items-center justify-center space-x-3">
                      <FaInfoCircle className="text-orange-500 text-xl" />
                      <span>Good start! Practice more to improve your score.</span>
                    </div>
                  )}
                </div>
              )}

              <div className="space-y-4">
                <button
                  onClick={handleRetakeQuiz}
                  className="w-full py-4 bg-gradient-to-r from-indigo-600 to-blue-600 text-white rounded-xl hover:from-indigo-700 hover:to-blue-700 flex items-center justify-center space-x-3 focus:ring-4 focus:ring-indigo-200 focus:outline-none transition-all font-bold shadow-lg transform hover:scale-[1.02] active:scale-[0.98]"
                  aria-label="Retake this quiz with same difficulty"
                >
                  <FaRedo aria-hidden="true" /> 
                  <span>Retake This Quiz</span>
                </button>

                <button
                  onClick={handleNextLevel}
                  className="w-full py-4 bg-gradient-to-r from-gray-600 to-gray-700 text-white rounded-xl hover:from-gray-700 hover:to-gray-800 flex items-center justify-center space-x-3 focus:ring-4 focus:ring-gray-200 focus:outline-none transition-all font-bold shadow-lg transform hover:scale-[1.02] active:scale-[0.98]"
                  aria-label="Try next difficulty level"
                >
                  <FaStepForward aria-hidden="true" /> 
                  <span>Next Difficulty Level</span>
                </button>

                <button
                  onClick={handleGoBack}
                  className="w-full py-4 bg-white border-2 border-gray-300 text-gray-700 rounded-xl hover:bg-gray-50 hover:border-gray-400 flex items-center justify-center space-x-3 focus:ring-4 focus:ring-gray-200 focus:outline-none transition-all font-bold transform hover:scale-[1.02] active:scale-[0.98]"
                  aria-label="Return to difficulty selection"
                >
                  <FaArrowCircleLeft aria-hidden="true" /> 
                  <span>Choose Different Quiz</span>
                </button>
              </div>
            </div>
          </div>
        )}

        {/* Scroll to Top Button */}
        {showTopBtn && (
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="fixed bottom-20 right-4 bg-gradient-to-r from-indigo-600 to-blue-600 text-white p-4 rounded-full shadow-2xl hover:from-indigo-700 hover:to-blue-700 focus:outline-none focus:ring-4 focus:ring-indigo-200 transition-all z-30 animate-bounce-in transform hover:scale-110"
            aria-label="Scroll to top of page"
          >
            <FaArrowUp aria-hidden="true" />
          </button>
        )}
      </div>

      <Footer />
    </div>
  );
};

export default BiologicalMoleculesQuiz;