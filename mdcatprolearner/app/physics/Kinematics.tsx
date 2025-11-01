import React, { useState, useEffect } from 'react';
import { useNavigate, Link } from 'react-router-dom'; 
import {
  FaArrowLeft, FaArrowRight, FaHome, FaRedo, FaArrowUp,
  FaPaperPlane, FaCheck, FaInfoCircle, FaChartBar, FaTimes,
  FaBook, FaClock
} from 'react-icons/fa';
// import { useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet';

// Constants
const QUESTIONS_PER_SECTION = 10;
const TOTAL_QUESTIONS = 100;
const TOTAL_SECTIONS = TOTAL_QUESTIONS / QUESTIONS_PER_SECTION;
// Kinematics Questions
const set1Questions = [
  {
    id: 1,
    question: "Which of the following is a vector quantity in kinematics?",
    options: ["Distance", "Speed", "Displacement", "Time"],
    correctAnswer: 2,
    explanation: "Displacement has both magnitude and direction, making it a vector quantity."
  },
  {
    id: 2,
    question: "What does the slope of a velocity-time graph represent?",
    options: ["Distance", "Acceleration", "Speed", "Displacement"],
    correctAnswer: 1,
    explanation: "The slope of a velocity-time graph represents acceleration."
  },
  // Add more kinematics questions...
];

const set2Questions = [
  {
    id: 1,
    question: "For a projectile launched at 45°, what is true about its range?",
    options: [
      "It's the maximum possible range",
      "It's half the maximum range",
      "It decreases with increasing velocity",
      "It's independent of gravity"
    ],
    correctAnswer: 0,
    explanation: "A projectile has maximum range when launched at 45° in the absence of air resistance."
  },
  {
    id: 2,
    question: "What remains constant in uniform circular motion?",
    options: ["Velocity", "Acceleration", "Speed", "Displacement"],
    correctAnswer: 2,
    explanation: "In uniform circular motion, speed remains constant while velocity changes direction."
  },
  // Add more advanced kinematics questions...
];

const generateRemainingQuestions = (baseQuestions: any[], prefix: string, optionSet: string[]) => {
  return [
    ...baseQuestions,
    ...Array.from({ length: TOTAL_QUESTIONS - baseQuestions.length }, (_, i) => ({
      id: baseQuestions.length + i + 1,
      question: `${prefix} ${baseQuestions.length + i + 1}: Sample question on ${prefix.toLowerCase()} physical quantities concept?`,
      options: optionSet,
      correctAnswer: i % 4,
      explanation: `Explanation for ${prefix.toLowerCase()} physical quantities question ${baseQuestions.length + i + 1}.`
    }))
  ];
};

const sets = {
  set1: generateRemainingQuestions(set1Questions, 'Basic', ['A', 'B', 'C', 'D']),
  set2: generateRemainingQuestions(set2Questions, 'Advanced', ['W', 'X', 'Y', 'Z'])
};

interface AnswerState {
  [key: number]: number;
}

interface FeedbackState {
  [key: number]: {
    isCorrect: boolean;
    correctAnswer: number;
    explanation: string;
  };
}

const Kinematics: React.FC = () => {
  const navigate = useNavigate();
  const [activeSet, setActiveSet] = useState<number>(1);
  const [section, setSection] = useState<number>(1);
  const [answers, setAnswers] = useState<AnswerState>({});
  const [feedback, setFeedback] = useState<FeedbackState>({});
  const [showResult, setShowResult] = useState<boolean>(false);
  const [score, setScore] = useState<number>(0);
  const [showTopBtn, setShowTopBtn] = useState<boolean>(false);
  const [comment, setComment] = useState({
    name: '',
    email: '',
    text: ''
  });
  const [loading, setLoading] = useState<boolean>(true);
  const [showInstructions, setShowInstructions] = useState<boolean>(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1000);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const handleScroll = () => setShowTopBtn(window.scrollY > 300);
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowRight') setSection(s => Math.min(s + 1, TOTAL_SECTIONS));
      if (e.key === 'ArrowLeft') setSection(s => Math.max(s - 1, 1));
    };
    window.addEventListener('scroll', handleScroll);
    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  const switchSet = (setNumber: number) => {
    setActiveSet(setNumber);
    setSection(1);
    setAnswers({});
    setFeedback({});
    setShowResult(false);
    setScore(0);
  };

  const handleAnswerSelect = (questionId: number, optionIndex: number) => {
    const currentSet = sets[`set${activeSet}` as keyof typeof sets];
    const question = currentSet.find(q => q.id === questionId);
    const isCorrect = question?.correctAnswer === optionIndex;
    
    setAnswers(prev => ({ ...prev, [questionId]: optionIndex }));
    setFeedback(prev => ({
      ...prev,
      [questionId]: {
        isCorrect,
        correctAnswer: question?.correctAnswer || 0,
        explanation: question?.explanation || ''
      }
    }));
  };

  const submitQuiz = () => {
    const currentSet = sets[`set${activeSet}` as keyof typeof sets];
    const correct = currentSet.filter(q => answers[q.id] === q.correctAnswer).length;
    setScore(Math.round((correct / TOTAL_QUESTIONS) * 100));
    setShowResult(true);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const resetQuiz = () => {
    setAnswers({});
    setFeedback({});
    setShowResult(false);
    setScore(0);
    setSection(1);
  };

  const handleCommentChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setComment(prev => ({ ...prev, [name]: value }));
  };

  const submitComment = (e: React.FormEvent) => {
    e.preventDefault();
    alert('Thank you for your feedback!');
    setComment({ name: '', email: '', text: '' });
  };

  const questions = sets[`set${activeSet}` as keyof typeof sets];
  const currentSlice = questions.slice(
    (section - 1) * QUESTIONS_PER_SECTION,
    section * QUESTIONS_PER_SECTION
  );

  const answeredCount = Object.keys(answers).length;
  const progressPercentage = Math.round((answeredCount / TOTAL_QUESTIONS) * 100);

  if (loading) {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50 dark:bg-gray-900">
        <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-b-4 border-blue-500"></div>
        <p className="mt-4 text-lg text-gray-700 dark:text-gray-300">Preparing your quiz...</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <Helmet>
        <title>MDCAT Physics Quiz - Kinematics | EduLearn</title>
        <meta name="description" content="Practice MDCAT Physics questions on Physical Quantities and Measurements with detailed explanations and performance tracking." />
      </Helmet>

      {showInstructions && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-2xl max-w-md w-full p-6">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-xl font-bold text-gray-800 dark:text-white">Quiz Instructions</h2>
              <button 
                className="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200"
                onClick={() => setShowInstructions(false)}
              >
                <FaTimes size={20} />
              </button>
            </div>
            <ul className="space-y-3 mb-6 text-gray-700 dark:text-gray-300">
              {[
                `You have ${TOTAL_QUESTIONS} questions to complete (${TOTAL_SECTIONS} sections)`,
                `Each section contains ${QUESTIONS_PER_SECTION} questions`,
                "Use navigation buttons or keyboard arrows to move between sections",
                "You can review and change answers before submitting",
                "Detailed explanations are provided for each question",
                "Complete all questions before submitting for final results"
              ].map((item, index) => (
                <li key={index} className="flex items-start">
                  <span className="mr-2 text-blue-500">•</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <button 
              className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 px-4 rounded-lg font-medium transition-colors"
              onClick={() => setShowInstructions(false)}
            >
              Start Quiz
            </button>
          </div>
        </div>
      )}

      

      <header className="bg-white dark:bg-gray-800 shadow-md py-4 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            <button 
              className="flex items-center text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 transition-colors"
              onClick={() => navigate(-1)}
            >
              <FaArrowLeft className="mr-2" /> Back to Topics
            </button>
            <h1 className="text-xl md:text-2xl font-bold text-center text-gray-800 dark:text-white">
              Kinematics (100 Questions)
            </h1>
            <div className="flex justify-center gap-2">
              {[1, 2].map(num => (
                <button
                  key={num}
                  className={`px-3 py-1 rounded-full text-sm font-medium transition-colors ${
                    activeSet === num 
                      ? 'bg-blue-600 text-white' 
                      : 'bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 hover:bg-gray-300 dark:hover:bg-gray-600'
                  }`}
                  onClick={() => switchSet(num)}
                >
                  SET {num}
                </button>
              ))}
            </div>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
        {!showResult ? (
          <React.Fragment>
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-4 mb-6">
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 mb-2">
                <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
                  Section {section} of {TOTAL_SECTIONS}
                </span>
                <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
                  {progressPercentage}% Completed ({answeredCount}/{TOTAL_QUESTIONS})
                </span>
              </div>
              <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2.5">
                <div 
                  className="bg-blue-600 h-2.5 rounded-full transition-all duration-300" 
                  style={{ width: `${progressPercentage}%` }}
                />
              </div>
            </div>

            <div className="space-y-6">
              {currentSlice.map(q => {
                const isAnswered = answers[q.id] !== undefined;
                const isCorrect = isAnswered && answers[q.id] === q.correctAnswer;
                
                return (
                  <div key={q.id} className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6">
                    <h3 className="text-lg font-medium text-gray-800 dark:text-white mb-4">
                      <span className="font-bold text-blue-600 dark:text-blue-400">Q{q.id}:</span> 
                      {q.question}
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-4">
                      {q.options.map((opt, i) => {
                        const isSelected = answers[q.id] === i;
                        const showCorrect = isAnswered && q.correctAnswer === i;
                        const showIncorrect = isSelected && !isCorrect;
                        
                        return (
                          <button
                            key={i}
                            className={`
                              text-left p-3 rounded-lg border transition-colors
                              ${isSelected 
                                ? showCorrect 
                                  ? 'bg-green-100 dark:bg-green-900 border-green-500 text-green-800 dark:text-green-200'
                                  : 'bg-red-100 dark:bg-red-900 border-red-500 text-red-800 dark:text-red-200'
                                : showCorrect
                                  ? 'border-green-500'
                                  : 'border-gray-300 dark:border-gray-600 hover:bg-gray-50 dark:hover:bg-gray-700'
                              }
                            `}
                            onClick={() => handleAnswerSelect(q.id, i)}
                          >
                            <span className="font-medium text-blue-600 dark:text-blue-400">
                              {String.fromCharCode(65 + i)}.
                            </span> {opt}
                          </button>
                        );
                      })}
                    </div>
                    {isAnswered && (
                      <div className={`p-4 rounded-lg ${
                        isCorrect ? 'bg-green-50 dark:bg-green-900/20' : 'bg-red-50 dark:bg-red-900/20'
                      }`}>
                        <div className="flex items-start">
                          <FaInfoCircle className={`mt-1 mr-3 flex-shrink-0 ${
                            isCorrect ? 'text-green-500' : 'text-red-500'
                          }`} />
                          <div>
                            <p className={`font-medium ${
                              isCorrect ? 'text-green-800 dark:text-green-200' : 'text-red-800 dark:text-red-200'
                            }`}>
                              {isCorrect ? 'Correct!' : 'Incorrect'}
                            </p>
                            <p className="text-gray-700 dark:text-gray-300 mt-1">
                              {feedback[q.id]?.explanation}
                            </p>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>

            <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mt-8 bg-white dark:bg-gray-800 rounded-lg shadow-md p-4">
              <button 
                className={`flex items-center justify-center px-4 py-2 rounded-lg transition-colors ${
                  section === 1 
                    ? 'bg-gray-200 dark:bg-gray-700 text-gray-500 dark:text-gray-400 cursor-not-allowed'
                    : 'bg-blue-600 hover:bg-blue-700 text-white'
                }`}
                disabled={section === 1} 
                onClick={() => setSection(section - 1)}
              >
                <FaArrowLeft className="mr-2" /> Previous
              </button>
              
              <div className="text-sm font-medium text-gray-700 dark:text-gray-300">
                Section {section}/{TOTAL_SECTIONS}
              </div>
              
              {section < TOTAL_SECTIONS ? (
                <button 
                  className="flex items-center justify-center px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors"
                  onClick={() => setSection(section + 1)}
                >
                  Next <FaArrowRight className="ml-2" />
                </button>
              ) : (
                <button 
                  className={`flex items-center justify-center px-4 py-2 rounded-lg transition-colors ${
                    answeredCount < TOTAL_QUESTIONS
                      ? 'bg-gray-200 dark:bg-gray-700 text-gray-500 dark:text-gray-400 cursor-not-allowed'
                      : 'bg-green-600 hover:bg-green-700 text-white'
                  }`}
                  onClick={submitQuiz}
                  disabled={answeredCount < TOTAL_QUESTIONS}
                >
                  Submit Quiz <FaCheck className="ml-2" />
                </button>
              )}
            </div>
          </React.Fragment>
        ) : (
          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden max-w-2xl mx-auto">
            <div className="p-6 sm:p-8 text-center">
              <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-6">Quiz Results</h2>
              
              <div className="flex flex-col items-center mb-8">
                <div className="relative w-48 h-48 mb-6">
                  <svg className="w-full h-full" viewBox="0 0 100 100">
                    <circle
                      className="text-gray-200 dark:text-gray-700"
                      strokeWidth="8"
                      stroke="currentColor"
                      fill="transparent"
                      r="40"
                      cx="50"
                      cy="50"
                    />
                    <circle
                      className="text-blue-600"
                      strokeWidth="8"
                      stroke="currentColor"
                      fill="transparent"
                      strokeDasharray={`${score * 2.51}, 251`}
                      strokeLinecap="round"
                      r="40"
                      cx="50"
                      cy="50"
                    />
                  </svg>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="text-3xl font-bold text-gray-800 dark:text-white">{score}%</span>
                  </div>
                </div>
                
                <div className="space-y-2 text-left">
                  <p className="flex items-center text-gray-700 dark:text-gray-300">
                    <FaCheck className="mr-2 text-green-500" />
                    <strong>Correct Answers:</strong> {Math.round(TOTAL_QUESTIONS * score / 100)}/{TOTAL_QUESTIONS}
                  </p>
                  <p className="flex items-center text-gray-700 dark:text-gray-300">
                    <FaChartBar className={`mr-2 ${
                      score >= 80 ? 'text-green-500' : score >= 60 ? 'text-yellow-500' : 'text-red-500'
                    }`} />
                    <strong>Performance:</strong> {score >= 80 ? 'Excellent' : score >= 60 ? 'Good' : 'Needs Improvement'}
                  </p>
                </div>
              </div>
              
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <button 
                  className="flex items-center justify-center px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors"
                  onClick={resetQuiz}
                >
                  <FaRedo className="mr-2" /> Try Again
                </button>
                <button 
                  className="flex items-center justify-center px-4 py-2 bg-gray-200 hover:bg-gray-300 dark:bg-gray-700 dark:hover:bg-gray-600 text-gray-800 dark:text-white rounded-lg transition-colors"
                  onClick={() => navigate('/physics')}
                >
                  <FaHome className="mr-2" /> Back to Topics
                </button>
              </div>
            </div>
          </div>
        )}
        {/* Quiz CTA Section */}
        <div className="mt-12 bg-gradient-to-r from-blue-600 to-blue-800 rounded-xl shadow-xl overflow-hidden">
          <div className="p-8 md:p-12 flex flex-col md:flex-row items-center justify-between">
            <div className="mb-6 md:mb-0 md:mr-8">
              <h3 className="text-2xl font-bold text-white mb-2">Ready for the Full MDCAT Challenge?</h3>
              <p className="text-blue-100 max-w-lg">
                Test your knowledge across all MDCAT topics with our comprehensive MDCAT Quiz. 
                Includes syllabus coverage and past papers practice.
              </p>
            </div>
            <Link 
              to="/mdcatQuiz"
              className="flex-shrink-0 bg-yellow-400 hover:bg-yellow-300 text-gray-900 font-bold py-3 px-6 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 flex items-center"
            >
              <FaChartBar className="mr-2" />
              Start MDCAT Quiz
            </Link>
          </div>
        </div>

      
      </main>

      {showTopBtn && (
        <button 
          className="fixed bottom-6 right-6 p-3 bg-blue-600 hover:bg-blue-700 text-white rounded-full shadow-lg transition-all duration-300 z-40"
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          aria-label="Scroll to top"
        >
          <FaArrowUp size={20} />
        </button>
      )}
    </div>
  );
};

export default Kinematics;