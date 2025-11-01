// app/blood-vessels/ArthritisClient.tsx
"use client";

import React, { useEffect, useMemo, useRef, useState } from "react";
import { useRouter } from "next/navigation";
import { FaArrowLeft, FaInfoCircle, FaRedo, FaEye, FaEyeSlash, FaCheckCircle, FaTimesCircle } from "react-icons/fa";
import { arthritisQuestions } from "../data/arthritisQuestions"; // <-- adjust path if needed

type AnswerMap = Record<string, number | null>;

export default function ArthritisClient() {
  const router = useRouter();

  // quiz state
  const [started, setStarted] = useState(false);
  const [index, setIndex] = useState(0);
  const [answers, setAnswers] = useState<AnswerMap>({});
  const [locked, setLocked] = useState<Record<string, boolean>>({});
  const [showProgressCard, setShowProgressCard] = useState(true);
  const [showReview, setShowReview] = useState(false);
  const [showExplanationFor, setShowExplanationFor] = useState<Record<string, boolean>>({});
  const [score, setScore] = useState<number | null>(null);
  const [touchStartX, setTouchStartX] = useState<number | null>(null);
  const [touchEndX, setTouchEndX] = useState<number | null>(null);

  const total = arthritisQuestions.length;
  const question = arthritisQuestions[index];

  // compute progress
  const answeredCount = useMemo(() => Object.keys(answers).length, [answers]);
  const progressPercent = Math.round((answeredCount / Math.max(1, total)) * 100);

  // play simple beep tone using WebAudio API (Option B - built-in beep)
  const playTone = (frequency = 600, duration = 120, type: OscillatorType = "sine") => {
    try {
      const ctx = new (window.AudioContext || (window as any).webkitAudioContext)();
      const o = ctx.createOscillator();
      const g = ctx.createGain();
      o.type = type;
      o.frequency.value = frequency;
      o.connect(g);
      g.connect(ctx.destination);

      // short envelope
      g.gain.setValueAtTime(0, ctx.currentTime);
      g.gain.linearRampToValueAtTime(0.08, ctx.currentTime + 0.01);
      o.start();
      g.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + duration / 1000);

      setTimeout(() => {
        try {
          o.stop();
          ctx.close();
        } catch {}
      }, duration + 50);
    } catch (e) {
      // ignore if WebAudio unavailable
      // fallback simple beep using alert sound (very rare)
      try {
        // eslint-disable-next-line no-console
        console.warn("AudioContext unavailable:", e);
      } catch {}
    }
  };

  // handle option selection: lock question, set answer, give sound feedback
  const handleSelect = (qId: string, chosenIndex: number) => {
    if (locked[qId]) return;
    const q = arthritisQuestions.find((qq) => qq.id === qId);
    if (!q) return;

    const correct = q.correctAnswer === chosenIndex;
    setAnswers((p) => ({ ...p, [qId]: chosenIndex }));
    setLocked((p) => ({ ...p, [qId]: true }));

    // play sound: correct = higher beep, wrong = lower beep
    if (correct) playTone(900, 140, "sine");
    else playTone(320, 200, "sawtooth");

    // auto-advance a bit after feedback
    window.setTimeout(() => {
      // if last question, compute score and show review
      if (index >= total - 1) {
        computeScore();
        setShowReview(true);
      } else {
        setIndex((i) => Math.min(total - 1, i + 1));
      }
    }, 650);
  };

  // compute score
  const computeScore = () => {
    let c = 0;
    for (const q of arthritisQuestions) {
      const a = answers[q.id];
      if (a !== undefined && a !== null && a === q.correctAnswer) c++;
    }
    setScore(Math.round((c / Math.max(1, total)) * 100));
  };

  // swipe handling (mobile)
  useEffect(() => {
    const handleTouchStart = (e: TouchEvent) => setTouchStartX(e.touches[0].clientX);
    const handleTouchEnd = (e: TouchEvent) => setTouchEndX(e.changedTouches[0].clientX);

    window.addEventListener("touchstart", handleTouchStart);
    window.addEventListener("touchend", handleTouchEnd);
    return () => {
      window.removeEventListener("touchstart", handleTouchStart);
      window.removeEventListener("touchend", handleTouchEnd);
    };
  }, []);

  useEffect(() => {
    if (touchStartX == null || touchEndX == null) return;
    const dx = touchEndX - touchStartX;
    const threshold = 60; // px
    if (dx > threshold) {
      // swipe right -> previous
      goPrev();
    } else if (dx < -threshold) {
      // swipe left -> next
      goNext();
    }
    setTouchStartX(null);
    setTouchEndX(null);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [touchEndX]);

  const goNext = () => {
    // if at end, compute and enter review
    if (index >= total - 1) {
      computeScore();
      setShowReview(true);
      return;
    }
    setIndex((i) => Math.min(total - 1, i + 1));
  };

  const goPrev = () => {
    setIndex((i) => Math.max(0, i - 1));
  };

  const resetQuiz = () => {
    setStarted(false);
    setIndex(0);
    setAnswers({});
    setLocked({});
    setShowReview(false);
    setScore(null);
    setShowExplanationFor({});
  };

  // keyboard navigation (left/right arrows)
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (!started || showReview) return;
      if (e.key === "ArrowLeft") goPrev();
      if (e.key === "ArrowRight") goNext();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [started, showReview, index, total]);

  // accessibility helper for aria labels
  const optionAriaLabel = (qId: string, idx: number, text: string) => {
    const lockedForQ = locked[qId];
    const user = answers[qId];
    const isUser = user === idx;
    const isCorrect = arthritisQuestions.find((qq) => qq.id === qId)?.correctAnswer === idx;
    if (!lockedForQ) return `Option ${idx + 1}: ${text}`;
    if (isCorrect) return `Option ${idx + 1}: ${text} (correct)`;
    if (isUser && !isCorrect) return `Option ${idx + 1}: ${text} (your answer — incorrect)`;
    return `Option ${idx + 1}: ${text}`;
  };

  // server-side-like structured data injection (client-side) — lightweight JSON-LD with exact question count
  // Note: placing JSON-LD on client is fine; google may pick it up.
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Quiz",
    name: "Arthritis Quiz",
   description: "Practice MDCAT Arthritis questions with MCQs. Test your knowledge of joint structure, inflammation, autoimmune disorders, cartilage degeneration, and biological causes of arthritis with explanations and instant feedback.",
numberOfQuestions: total,

  };

  return (
    <div className="min-h-screen py-6 px-3 sm:px-6">
      {/* JSON-LD for SEO */}
      <script
        type="application/ld+json"
        // server would be better but simple injection is acceptable
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

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

      {/* Progress toggle overlay (right middle) */}
      <div className="fixed right-4 top-1/2 transform -translate-y-1/2 z-40">
        <div className="bg-white/95 backdrop-blur-sm p-2 rounded-lg shadow">
          <button
            onClick={() => setShowProgressCard((s) => !s)}
            aria-pressed={showProgressCard}
            className="flex items-center gap-2 px-3 py-2 rounded text-sm"
          >
            {showProgressCard ? <FaEyeSlash /> : <FaEye />}
            <span>{showProgressCard ? "Hide" : "Show"}</span>
          </button>

          {showProgressCard && (
            <div className="mt-3 w-56">
              <div className="text-xs text-gray-600">Progress</div>
              <div className="font-semibold text-sm">{progressPercent}%</div>
              <div className="w-full bg-gray-200 h-2 rounded mt-2 overflow-hidden">
                <div className="h-2 bg-amber-600" style={{ width: `${progressPercent}%` }} />
              </div>
              <div className="text-xs text-gray-500 mt-2">
                {answeredCount}/{total} answered
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Main container */}
      <div className="max-w-3xl mx-auto">
        {/* Landing / Start */}
        {!started && !showReview && score == null ? (
          <section className="bg-white rounded-2xl shadow p-6 mt-8">
            <div className="text-center">
              <h1 className="text-2xl font-bold mb-2">Arthritis — Practice MCQs</h1>
              <p className="text-sm text-gray-600 mb-4">
                Swipe left/right or use arrows. Instant feedback, sounds, and review mode included.
              </p>

              <div className="grid grid-cols-2 gap-3 text-sm mb-4">
                <div className="bg-amber-50 p-3 rounded text-center">
                  <div className="font-bold text-amber-700 text-lg">{total}</div>
                  <div className="text-xs text-amber-600">Questions</div>
                </div>
                <div className="bg-amber-50 p-3 rounded text-center">
                  <div className="font-bold text-amber-700 text-lg">{Math.ceil(total / 10)}</div>
                  <div className="text-xs text-amber-600">Sections (approx)</div>
                </div>
              </div>

              <div className="flex gap-3 justify-center">
                <button
                  onClick={() => setStarted(true)}
                  className="bg-amber-600 text-white px-6 py-2 rounded-lg"
                >
                  Start Quiz
                </button>
                <button
                  onClick={() => {
                    setShowReview(true);
                    computeScore();
                  }}
                  className="border px-6 py-2 rounded-lg"
                >
                  Quick Review
                </button>
              </div>
            </div>
          </section>
        ) : null}

        {/* Quiz view */}
        {started && !showReview && (
          <section
            className="bg-white rounded-xl shadow-lg mt-6 p-5"
            // allow swipe hints via touch events that are already tracked globally
            aria-live="polite"
          >
            <header className="flex items-start justify-between">
              <div>
                <h2 className="text-lg font-semibold">Question {index + 1} / {total}</h2>
                <p className="text-xs text-gray-500">Answered: {answeredCount}</p>
              </div>

              <div className="text-right">
                <div className="text-sm font-medium">{progressPercent}%</div>
                <div className="text-xs text-gray-500">Progress</div>
              </div>
            </header>

            <div className="mt-4">
              <h3 className="text-base font-medium text-gray-800 mb-3">{question.question}</h3>

              {/* Options */}
              <div className="space-y-3">
                {question.options.map((opt, i) => {
                  const qId = question.id;
                  const isLocked = !!locked[qId];
                  const userAns = answers[qId];
                  const isUser = userAns === i;
                  const isCorrect = question.correctAnswer === i;

                  // color classes based on locked + correctness
                  let classes = "w-full p-3 rounded-lg text-left border transition-all ";
                  if (!isLocked) {
                    classes += isUser ? "bg-amber-50 border-amber-200" : "bg-white border-gray-200 hover:bg-gray-50";
                  } else {
                    if (isCorrect) classes += "bg-green-50 border-green-300 text-green-800";
                    else if (isUser && !isCorrect) classes += "bg-red-50 border-red-300 text-red-800";
                    else classes += "bg-gray-50 border-gray-200 text-gray-600";
                  }

                  return (
                    <button
                      key={i}
                      onClick={() => handleSelect(question.id, i)}
                      disabled={isLocked}
                      className={classes}
                      aria-pressed={isUser}
                      aria-label={optionAriaLabel(question.id, i, opt)}
                    >
                      <div className="flex items-center justify-between">
                        <span className="text-sm">{opt}</span>
                        {isLocked && isCorrect && <FaCheckCircle className="text-green-600" />}
                        {isLocked && isUser && !isCorrect && <FaTimesCircle className="text-red-600" />}
                      </div>
                    </button>
                  );
                })}
              </div>

              {/* explanation toggle */}
              {locked[question.id] && (
                <div className="mt-3 flex items-center gap-3">
                  <button
                    onClick={() =>
                      setShowExplanationFor((p) => ({ ...p, [question.id]: !p[question.id] }))
                    }
                    className="inline-flex items-center gap-2 text-sm text-amber-600"
                    aria-expanded={!!showExplanationFor[question.id]}
                    aria-controls={`ex-${question.id}`}
                  >
                    <FaInfoCircle /> {showExplanationFor[question.id] ? "Hide" : "Show"} explanation
                  </button>
                </div>
              )}

              {showExplanationFor[question.id] && locked[question.id] && (
                <div id={`ex-${question.id}`} className="mt-3 p-3 rounded bg-amber-50 text-sm text-gray-700">
                  {question.explanation}
                </div>
              )}
            </div>

            {/* Navigation */}
            <footer className="mt-5 flex items-center justify-between">
              <div>
                <button
                  onClick={goPrev}
                  className="px-3 py-2 rounded border"
                  aria-label="Previous question"
                >
                  ← Prev
                </button>
              </div>

              <div className="flex items-center gap-3">
                <button
                  onClick={() => {
                    // jump to review early
                    setShowReview(true);
                    computeScore();
                  }}
                  className="px-3 py-2 rounded border"
                >
                  Review
                </button>

                <button
                  onClick={() => {
                    // mark current unanswered as skipped and move on
                    if (!locked[question.id]) {
                      setLocked((p) => ({ ...p, [question.id]: true }));
                      setAnswers((p) => ({ ...p, [question.id]: null }));
                    }
                    goNext();
                  }}
                  className="px-3 py-2 rounded bg-amber-600 text-white"
                >
                  Skip / Next →
                </button>
              </div>
            </footer>
          </section>
        )}

        {/* Review / Result view */}
        {showReview && (
          <section className="bg-white rounded-xl shadow mt-6 p-5">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-lg font-semibold">Review — All Questions</h2>
              <div className="text-sm text-gray-600">Score: {score ?? "—" }%</div>
            </div>

            <div className="space-y-3">
              {arthritisQuestions.map((q, idx) => {
                const user = answers[q.id];
                const correct = q.correctAnswer;
                const isCorrect = user !== undefined && user !== null && user === correct;

                return (
                  <article key={q.id} className="p-3 border rounded">
                    <div className="flex items-start justify-between">
                      <div>
                        <div className="font-medium">Q{idx + 1}. {q.question}</div>
                        <div className="text-xs text-gray-500">ID: {q.id}</div>
                      </div>
                      <div className="text-sm">
                        {isCorrect ? (
                          <span className="text-green-700 font-semibold">Correct</span>
                        ) : (
                          <span className="text-red-700 font-semibold">Incorrect</span>
                        )}
                      </div>
                    </div>

                    <div className="mt-3 space-y-2">
                      {q.options.map((opt, oi) => {
                        const isUser = user === oi;
                        const isCorr = correct === oi;
                        let cls = "p-2 rounded text-sm border ";
                        if (isCorr) cls += "bg-green-50 border-green-200 text-green-800";
                        else if (isUser && !isCorr) cls += "bg-red-50 border-red-200 text-red-800";
                        else cls += "bg-white border-gray-100 text-gray-700";

                        return (
                          <div key={oi} className={cls}>
                            <div className="flex items-center justify-between">
                              <div>{opt}</div>
                              <div className="text-xs">
                                {isCorr && <span className="font-semibold">Answer</span>}
                                {isUser && !isCorr && <span className="font-semibold">Your answer</span>}
                              </div>
                            </div>
                          </div>
                        );
                      })}
                    </div>

                    <div className="mt-2 text-sm text-gray-700">
                      <strong>Explanation: </strong> {q.explanation}
                    </div>
                  </article>
                );
              })}
            </div>

            <div className="mt-5 flex gap-3">
              <button
                onClick={() => {
                  // retake: clear answers but stay on quiz
                  setAnswers({});
                  setLocked({});
                  setShowReview(false);
                  setScore(null);
                  setStarted(true);
                  setIndex(0);
                }}
                className="px-4 py-2 rounded bg-amber-600 text-white"
              >
                <FaRedo /> Retake
              </button>

              <button
                onClick={() => {
                  // go back to landing page
                  resetQuiz();
                }}
                className="px-4 py-2 rounded border"
              >
                Back to start
              </button>
            </div>
          </section>
        )}
      </div>
    </div>
  );
}
