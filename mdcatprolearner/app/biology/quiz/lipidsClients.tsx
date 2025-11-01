"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import Head from "next/head";
import {
  easyQuestions,
  mediumQuestions,
  hardQuestions,
  Question,
} from "../data/lipidsQuestions";
import {
  FaCheckCircle,
  FaTimesCircle,
  FaArrowRight,
  FaArrowLeft,
  FaRedo,
  FaEye,
  FaEyeSlash,
  FaListUl,
} from "react-icons/fa";

type Difficulty = "easy" | "medium" | "hard";

const pool: Record<Difficulty, Question[]> = {
  easy: Array.isArray(easyQuestions) ? easyQuestions : [],
  medium: Array.isArray(mediumQuestions) ? mediumQuestions : [],
  hard: Array.isArray(hardQuestions) ? hardQuestions : [],
};

const LipidsClient: React.FC = () => {
  const [difficulty, setDifficulty] = useState<Difficulty | null>(null);
  const [questions, setQuestions] = useState<Question[]>([]);
  const [current, setCurrent] = useState(0);
  const [selected, setSelected] = useState<Record<string, number>>({});
  const [locked, setLocked] = useState<Record<string, boolean>>({});
  const router = useRouter();
  const [showExplanation, setShowExplanation] = useState<Record<string, boolean>>(
    {}
  );
  const [score, setScore] = useState(0);
  const [skipped, setSkipped] = useState<string[]>([]);
  const [reviewMode, setReviewMode] = useState(false);
  const [showResult, setShowResult] = useState(false);

  const total = questions.length;
  const q = questions[current];

  // Start quiz with chosen difficulty
  const startQuiz = (level: Difficulty) => {
    const chosen = pool[level] ?? [];
    setDifficulty(level);
    setQuestions([...chosen]); // clone to avoid mutating source
    // reset states
    setCurrent(0);
    setSelected({});
    setLocked({});
    setShowExplanation({});
    setScore(0);
    setSkipped([]);
    setShowResult(false);
    setReviewMode(false);
  };

  // If user selected an option
  const handleSelect = (qid: string, optIndex: number) => {
    if (locked[qid]) return;

    setSelected((p) => ({ ...p, [qid]: optIndex }));
    setLocked((p) => ({ ...p, [qid]: true }));

    const question = questions.find((xx) => xx.id === qid);
    if (!question) return;

    if (optIndex === question.correctAnswer) {
      setScore((s) => s + 1);
    }

    // Open explanation automatically after answering
    setShowExplanation((p) => ({ ...p, [qid]: true }));
  };

  const handleNext = () => {
    if (current < total - 1) setCurrent((c) => c + 1);
    else setShowResult(true);
  };

  const handlePrev = () => {
    if (current > 0) setCurrent((c) => c - 1);
  };

  const handleSkip = () => {
    if (q && !locked[q.id]) setSkipped((s) => [...s, q.id]);
    if (current < total - 1) setCurrent((c) => c + 1);
    else setShowResult(true);
  };

  const toggleExplanation = (qid: string) => {
    setShowExplanation((p) => ({ ...p, [qid]: !p[qid] }));
  };

  const resetQuiz = () => {
    setDifficulty(null);
    setQuestions([]);
    setCurrent(0);
    setSelected({});
    setLocked({});
    setShowExplanation({});
    setScore(0);
    setSkipped([]);
    setShowResult(false);
    setReviewMode(false);
  };

  const percent = total > 0 ? Math.round((score / total) * 100) : 0;

  return (
    <>
      <Head>
        <title>MDCAT Lipids Quiz | Biology MCQs</title>
        <meta
          name="description"
          content="Practice MDCAT Lipids MCQs with difficulty selection, instant feedback, explanations, review mode, skip and navigation."
        />
        <script
          type="application/ld+json"
          // small JSON-LD for search engines - updates as soon as questions chosen
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Quiz",
              name: "MDCAT Lipids MCQs",
              difficultyLevel: difficulty ?? "unspecified",
              numberOfQuestions: total,
            }),
          }}
        />
      </Head>

      {/* Back arrow overlay */}
      <div className="fixed top-4 left-4 z-50">
        <button
          onClick={() => router.back()}
          aria-label="Go back"
          className="bg-white/95 backdrop-blur-sm px-3 py-2 rounded-full shadow hover:scale-105 transition"
        >
          <FaArrowLeft />
        </button>
      </div>
      <div className="min-h-screen bg-gray-100 p-4 flex flex-col items-center">
        {/* Difficulty selection */}
        {!difficulty && (
          <div className="max-w-md bg-white p-6 shadow-xl rounded-xl text-center space-y-3">
            <h2 className="text-xl font-bold">Choose Difficulty Level</h2>
            <p className="text-sm text-gray-600">
              Pick a level to start the Lipids quiz — Easy, Medium or Hard.
            </p>

            <div className="grid gap-3 mt-3">
              <button
                onClick={() => startQuiz("easy")}
                className="w-full bg-green-600 text-white py-2 rounded-lg"
              >
                Easy
              </button>

              <button
                onClick={() => startQuiz("medium")}
                className="w-full bg-blue-600 text-white py-2 rounded-lg"
              >
                Medium
              </button>

              <button
                onClick={() => startQuiz("hard")}
                className="w-full bg-red-600 text-white py-2 rounded-lg"
              >
                Hard
              </button>
            </div>

            <div className="text-xs text-gray-500 mt-3">
              Note: If a difficulty set is empty you'll see a helpful message
              and can go back.
            </div>
          </div>
        )}

        {/* If difficulty chosen but no questions for it */}
        {difficulty && questions.length === 0 && (
          <div className="max-w-md bg-white p-6 shadow rounded-lg text-center">
            <h3 className="font-semibold mb-2">No questions available</h3>
            <p className="text-sm text-gray-600">
              There are no questions for <strong>{difficulty}</strong> difficulty.
              Please choose another level.
            </p>
            <div className="mt-4 flex gap-2 justify-center">
              <button
                onClick={() => startQuiz("easy")}
                className="px-4 py-2 bg-green-600 text-white rounded"
              >
                Easy
              </button>
              <button
                onClick={() => startQuiz("medium")}
                className="px-4 py-2 bg-blue-600 text-white rounded"
              >
                Medium
              </button>
              <button
                onClick={() => startQuiz("hard")}
                className="px-4 py-2 bg-red-600 text-white rounded"
              >
                Hard
              </button>
              <button
                onClick={resetQuiz}
                className="px-4 py-2 bg-gray-200 rounded"
              >
                Back
              </button>
            </div>
          </div>
        )}

        {/* QUIZ SCREEN */}
        {difficulty && questions.length > 0 && !showResult && !reviewMode && (
          <div className="w-full max-w-xl bg-white shadow-lg rounded-xl p-5 mt-4">
            <div className="flex justify-between items-center">
              <div>
                <p className="text-sm text-gray-600 font-medium">
                  Question {current + 1} / {total} •{" "}
                  <span className="uppercase">{difficulty}</span>
                </p>
                <p className="text-xs text-gray-500 mt-1">
                  Score: {score} • Skipped: {skipped.length}
                </p>
              </div>

              <div className="flex items-center gap-2">
                <button
                  onClick={() => setReviewMode(true)}
                  className="px-2 py-1 bg-purple-600 text-white rounded text-sm flex items-center gap-2"
                >
                  <FaListUl /> Quick Review
                </button>
                <button
                  onClick={resetQuiz}
                  title="Change difficulty / restart"
                  className="px-2 py-1 bg-gray-200 rounded text-sm"
                >
                  Change Level
                </button>
              </div>
            </div>

            <h2 className="text-lg font-semibold mt-4">{q.question}</h2>

            <div className="mt-4 space-y-3">
              {q.options.map((opt, idx) => {
                const userAns = selected[q.id];
                const isCorrect = idx === q.correctAnswer;
                const isUser = idx === userAns;

                let style =
                  "p-3 w-full rounded-lg border text-left transition duration-100";

                if (locked[q.id]) {
                  if (isCorrect) style += " bg-green-50 border-green-400";
                  else if (isUser && !isCorrect)
                    style += " bg-red-50 border-red-400";
                  else style += " bg-gray-50 border-gray-200";
                } else {
                  style +=
                    " bg-white border-gray-200 hover:bg-gray-50 cursor-pointer";
                }

                return (
                  <button
                    key={idx}
                    disabled={locked[q.id]}
                    onClick={() => handleSelect(q.id, idx)}
                    className={style}
                    aria-pressed={isUser}
                    aria-label={`Option ${idx + 1}`}
                  >
                    <div className="flex justify-between items-center">
                      <span>{opt}</span>
                      {locked[q.id] && isCorrect && (
                        <FaCheckCircle className="text-green-600" />
                      )}
                      {locked[q.id] && isUser && !isCorrect && (
                        <FaTimesCircle className="text-red-600" />
                      )}
                    </div>
                  </button>
                );
              })}
            </div>

            {/* result / correctness indicator */}
            {locked[q.id] && (
              <div className="mt-3 flex items-center gap-3 text-sm">
                {selected[q.id] === q.correctAnswer ? (
                  <div className="text-green-700 font-medium flex items-center gap-2">
                    <FaCheckCircle /> Correct
                  </div>
                ) : (
                  <div className="text-red-700 font-medium flex items-center gap-2">
                    <FaTimesCircle /> Incorrect
                  </div>
                )}

                {/* explanation toggle */}
                <button
                  onClick={() => toggleExplanation(q.id)}
                  className="ml-2 text-sm text-blue-600 underline flex items-center gap-1"
                >
                  {showExplanation[q.id] ? <FaEyeSlash /> : <FaEye />}{" "}
                  {showExplanation[q.id] ? "Hide explanation" : "Show explanation"}
                </button>
              </div>
            )}

            {/* explanation content */}
            {locked[q.id] && showExplanation[q.id] && (
              <div className="mt-3 p-3 bg-blue-50 border border-blue-200 rounded text-sm text-gray-800">
                {q.explanation}
              </div>
            )}

            {/* navigation */}
            <div className="flex justify-between mt-6">
              <button
                onClick={handlePrev}
                disabled={current === 0}
                className={`px-4 py-2 rounded-lg ${
                  current === 0
                    ? "bg-gray-200 text-gray-500 cursor-not-allowed"
                    : "bg-gray-600 text-white"
                }`}
              >
                <FaArrowLeft /> Previous
              </button>

              <div className="flex gap-3">
                <button
                  onClick={handleSkip}
                  className="px-4 py-2 rounded-lg bg-yellow-500 text-white"
                >
                  Skip
                </button>

                <button
                  onClick={handleNext}
                  className="px-4 py-2 rounded-lg bg-blue-600 text-white flex items-center gap-2"
                >
                  Next <FaArrowRight />
                </button>
              </div>
            </div>
          </div>
        )}

        {/* Results */}
        {showResult && !reviewMode && (
          <div className="max-w-md bg-white p-6 rounded-xl shadow-lg text-center mt-6">
            <h2 className="text-2xl font-bold mb-2">Quiz Completed</h2>

            <p className="text-lg mb-2">
              Score: <strong className="text-blue-600">{percent}%</strong>
            </p>

            <p className="text-sm text-gray-600 mb-4">
              Correct: {score} / {total} • Skipped: {skipped.length}
            </p>

            <div className="space-y-2">
              <button
                onClick={() => setReviewMode(true)}
                className="w-full py-2 bg-purple-600 text-white rounded"
              >
                Review Mode
              </button>

              <button
                onClick={resetQuiz}
                className="w-full py-2 bg-gray-200 rounded"
              >
                Change Level / Restart
              </button>
            </div>
          </div>
        )}

        {/* Review mode (quick review or final review) */}
        {reviewMode && (
          <div className="w-full max-w-xl bg-white p-5 rounded-xl shadow-lg mt-4">
            <div className="flex justify-between items-center mb-3">
              <h2 className="text-xl font-bold">Review Answers</h2>
              <div className="text-sm text-gray-600">
                Score: {score}/{total} ({percent}%)
              </div>
            </div>

            <div className="space-y-4">
              {questions.map((ques, i) => {
                const userAns = selected[ques.id];
                const correctIdx = ques.correctAnswer;
                return (
                  <div key={ques.id} className="border-b pb-3">
                    <div className="font-medium">
                      {i + 1}. {ques.question}
                    </div>

                    <div className="mt-2 space-y-1">
                      {ques.options.map((opt, oi) => {
                        let lineStyle = "p-2 rounded border text-sm";
                        if (oi === correctIdx) lineStyle += " bg-green-50 border-green-200";
                        else if (userAns === oi && oi !== correctIdx)
                          lineStyle += " bg-red-50 border-red-200";
                        else lineStyle += " bg-white border-gray-100";

                        return (
                          <div key={oi} className={lineStyle}>
                            <div className="flex justify-between items-center">
                              <div>{opt}</div>
                              <div className="text-xs text-gray-600">
                                {oi === correctIdx && <strong>Answer</strong>}
                                {userAns === oi && oi !== correctIdx && <em>Your answer</em>}
                              </div>
                            </div>
                          </div>
                        );
                      })}
                    </div>

                    <div className="mt-2 text-sm text-gray-700">
                      <strong>Explanation:</strong> {ques.explanation}
                    </div>
                  </div>
                );
              })}
            </div>

            <div className="mt-4 flex gap-3">
              <button
                onClick={() => {
                  // close review but keep quiz at same difficulty and position
                  setReviewMode(false);
                  setShowResult(false);
                }}
                className="flex-1 py-2 bg-gray-200 rounded"
              >
                Back to Quiz
              </button>

              <button onClick={resetQuiz} className="flex-1 py-2 bg-blue-600 text-white rounded">
                Retake / Change Level
              </button>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default LipidsClient;
