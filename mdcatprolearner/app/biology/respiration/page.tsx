 
 import React, { useState, useEffect, useCallback, useRef } from "react";
 import {
   respirationQuestions,
   Question,
 } from "../data/RespirationQuestions";
 import { GiFat, GiLungs } from "react-icons/gi";
 import {
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
 
 const RespirationQuiz: React.FC = () => {
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
       return respirationQuestions["easy"] || [];
     } catch (err) {
       setError("Failed to load questions. Please try again.");
       console.error("Error loading questions:", err);
       return [];
     }
   }, []);
 
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
 
   // Show scroll-to-top button
   useEffect(() => {
     const handleScroll = () => {
       setShowTopBtn(window.scrollY > 300);
     };
     window.addEventListener("scroll", handleScroll);
     return () => window.removeEventListener("scroll", handleScroll);
   }, []);
 
   return (
     <div className="min-h-screen bg-gradient-to-br from-yellow-50 to-orange-100 dark:from-gray-900 dark:to-gray-800 py-6 px-4 sm:px-6 lg:py-8">
       <Helmet>
         <title>MDCAT Respiration Quiz | Biology Practice</title>
         <meta
          name="description"
          content="Practice MDCAT Respiration questions with MCQs. Test your knowledge of respiratory system, cellular respiration, and related concepts with explanations and instant feedback."
        />
        <meta name="keywords" content="mdcat, respiration, biology, respiratory system, cellular respiration, quiz, mcq, practice, medical, exam" />
       <script type="application/ld+json">
          {`
            {
              "@context": "https://schema.org",
              "@type": "Quiz",
              "name": "MDCAT Respiration Quiz",
              "description": "Practice MDCAT Respiration questions with multiple choice questions and detailed explanations.",
              "educationalLevel": "advanced",
              "assesses": "Knowledge of respiration for medical entrance exams",
              "numberOfQuestions": ${TOTAL_QUESTIONS},
              "hasPart": [
                {
                  "@type": "Question",
                  "educationalLevel": "easy",
                  "typicalAgeRange": "17-25"
                },
                {
                  "@type": "Question",
                  "educationalLevel": "medium",
                  "typicalAgeRange": "17-25"
                },
                {
                  "@type": "Question",
                  "educationalLevel": "hard",
                  "typicalAgeRange": "17-25"
                }
              ]
            }
          `}
        </script>
      
       </Helmet>
 
       {/* Error Display */}
       <AnimatePresence>
         {error && (
           <motion.div
             className="fixed top-4 left-1/2 transform -translate-x-1/2 z-50 w-full max-w-md px-4"
             initial={{ opacity: 0, y: -20 }}
             animate={{ opacity: 1, y: 0 }}
             exit={{ opacity: 0, y: -20 }}
           >
             <div className="bg-red-100 dark:bg-red-900/30 border border-red-300 dark:border-red-700 rounded-xl shadow-lg p-4 flex items-center justify-between backdrop-blur-sm bg-opacity-95">
               <div className="flex items-center space-x-2">
                 <FaExclamationTriangle className="text-red-500 text-lg" />
                 <span className="text-red-700 dark:text-red-300 text-sm">{error}</span>
               </div>
               <button
                 onClick={() => setError(null)}
                 className="text-red-500 hover:text-red-700 dark:text-red-400 dark:hover:text-red-300"
                 aria-label="Dismiss error"
               >
                 <FaTimesCircle />
               </button>
             </div>
           </motion.div>
         )}
       </AnimatePresence>
 
       {/* Quiz Start Page */}
       {!quizStarted ? (
         <motion.div
           initial={{ opacity: 0, scale: 0.96 }}
           animate={{ opacity: 1, scale: 1 }}
           className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl max-w-md w-full p-6 mx-auto"
         >
           <div className="text-center mb-6">
             <div className="w-16 h-16 bg-yellow-100 dark:bg-yellow-900 rounded-full flex items-center justify-center mx-auto mb-4">
               <span className="text-2xl"><GiLungs/></span>
             </div>
             <h1 className="text-3xl font-bold text-gray-800 dark:text-white mb-2">
               MDCAT Respiration Quiz
             </h1>
             <p className="text-gray-600 dark:text-gray-300">
               Test your knowledge of Respiration and fats. This quiz covers the structure, function, and importance of Respiration in biological systems.
             </p>
           </div>
           
           <button
             onClick={() => setQuizStarted(true)}
             className="w-full py-3 bg-yellow-600 text-white rounded-xl hover:bg-yellow-700 transition focus:ring-2 focus:ring-yellow-500 focus:outline-none"
             aria-label="Start quiz"
           >
             Start Quiz
           </button>
         </motion.div>
       ) : score === null ? (
         // Quiz Content
         <motion.div
           initial={{ opacity: 0, y: 16 }}
           animate={{ opacity: 1, y: 0 }}
           className="max-w-3xl mx-auto bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden"
           ref={quizContainerRef}
         >
           <div className="p-5 border-b border-gray-200 dark:border-gray-700">
             <h2 className="text-xl font-semibold text-gray-800 dark:text-white">
               MDCAT Respiration Quiz
             </h2>
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
                         "w-full p-3 rounded-lg transition-all text-left focus:outline-none focus:ring-2 focus:ring-yellow-500 ";
 
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
                           ? " bg-yellow-50 dark:bg-yellow-900/30 border border-yellow-200 dark:border-yellow-700 text-yellow-800 dark:text-yellow-200"
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
                         className="flex items-center space-x-2 text-yellow-600 dark:text-yellow-400 hover:text-yellow-700 dark:hover:text-yellow-300 text-sm font-medium"
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
                             className="mt-3 p-3 bg-yellow-50 dark:bg-gray-600 rounded-lg text-sm text-gray-700 dark:text-gray-200"
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
               {section < SECTIONS ? `Section ${section} of ${SECTIONS}` : 'Final Section'}
             </div>
             
             <button
               onClick={handleNextSection}
               className="px-4 py-2 rounded-lg flex items-center space-x-2 bg-yellow-600 hover:bg-yellow-700 text-white focus:ring-2 focus:ring-yellow-500 focus:outline-none"
               aria-label={section < SECTIONS ? "Next section" : "Finish quiz"}
             >
               <span>{section < SECTIONS ? "Next" : "Finish"}</span>
               <FaArrowRight />
             </button>
           </div>
         </motion.div>
       ) : (
         // Results Page
         <motion.div
           initial={{ opacity: 0, y: 20 }}
           animate={{ opacity: 1, y: 0 }}
           className="max-w-md mx-auto bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden"
         >
           <div className="p-6 text-center">
             <div className="w-20 h-20 bg-yellow-100 dark:bg-yellow-900 rounded-full flex items-center justify-center mx-auto mb-5">
               <span className="text-3xl">🎉</span>
             </div>
             
             <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-2">
               Quiz Completed!
             </h2>
             <p className="text-gray-600 dark:text-gray-300 mb-5">
               You scored <span className="font-bold text-yellow-600 dark:text-yellow-400">{score}%</span> out of{" "}
               {TOTAL_QUESTIONS} questions.
             </p>
 
             <div className="space-y-3">
               <button
                   onClick={handleRetakeQuiz}
                   className="w-full py-3 bg-yellow-600 text-white rounded-xl hover:bg-yellow-700 transition focus:ring-2 focus:ring-yellow-500 focus:outline-none flex items-center justify-center space-x-2"
                   aria-label="Retake quiz"
                 >
                   <FaRedo className="text-sm" />
                   <span>Retake Quiz</span>
                 </button>
                 
                 <button
                   onClick={handleGoBack}
                   className="w-full py-3 bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-200 rounded-xl hover:bg-gray-300 dark:hover:bg-gray-600 transition focus:ring-2 focus:ring-gray-500 focus:outline-none flex items-center justify-center space-x-2"
                   aria-label="Go back to start"
                 >
                   <FaArrowCircleLeft />
                   <span>Go Back</span>
                 </button>
               </div>
             </div>
           </motion.div>
         )}
 
         {/* Scroll to Top Button */}
         <AnimatePresence>
           {showTopBtn && (
             <motion.button
               initial={{ opacity: 0, scale: 0.8 }}
               animate={{ opacity: 1, scale: 1 }}
               exit={{ opacity: 0, scale: 0.8 }}
               onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
               className="fixed bottom-6 right-6 w-12 h-12 bg-yellow-600 text-white rounded-full shadow-lg hover:bg-yellow-700 transition flex items-center justify-center focus:outline-none focus:ring-2 focus:ring-yellow-500 z-40"
               aria-label="Scroll to top"
             >
               <FaArrowUp />
             </motion.button>
           )}
         </AnimatePresence>
 
         {/* Confirmation Popup */}
         <AnimatePresence>
           {showPopup && (
             <motion.div
               initial={{ opacity: 0 }}
               animate={{ opacity: 1 }}
               exit={{ opacity: 0 }}
               className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50"
               onClick={() => setShowPopup(false)}
             >
               <motion.div
                 initial={{ opacity: 0, scale: 0.9, y: 20 }}
                 animate={{ opacity: 1, scale: 1, y: 0 }}
                 className="bg-white dark:bg-gray-800 rounded-xl shadow-xl p-6 max-w-md w-full"
                 onClick={(e) => e.stopPropagation()}
               >
                 <h3 className="text-lg font-semibold text-gray-800 dark:text-white mb-3">
                   Incomplete Section
                 </h3>
                 <p className="text-gray-600 dark:text-gray-300 mb-5">
                   You haven't answered all questions in this section. Are you sure you want to proceed?
                 </p>
                 <div className="flex space-x-3">
                   <button
                     onClick={() => setShowPopup(false)}
                     className="flex-1 py-2 bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-200 rounded-lg hover:bg-gray-300 dark:hover:bg-gray-600 transition"
                   >
                     Cancel
                   </button>
                   <button
                     onClick={() => {
                       setShowPopup(false);
                       if (section < SECTIONS) {
                         setSection((prev) => prev + 1);
                         window.scrollTo({ top: 0, behavior: "smooth" });
                       } else {
                         calculateScore();
                       }
                     }}
                     className="flex-1 py-2 bg-yellow-600 text-white rounded-lg hover:bg-yellow-700 transition"
                   >
                     Proceed
                   </button>
                 </div>
               </motion.div>
             </motion.div>
           )}
         </AnimatePresence>
       </div>
     
   );
 };
 
 export default RespirationQuiz;
 