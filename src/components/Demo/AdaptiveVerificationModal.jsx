import { useState } from "react";
import {
  ShieldAlert,
  BrainCircuit,
  AlertTriangle,
  X,
} from "lucide-react";

export default function AdaptiveVerificationModal({
  open,
  riskScore = 91,
  findings = [],
  questions = [],
  onClose,
}) {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState({});
  const [loading, setLoading] = useState(false);

  const [showResult, setShowResult] = useState(false);
  const [approved, setApproved] = useState(false);
  const [confidence, setConfidence] = useState(0);
  const [resultReason, setResultReason] = useState("");

  if (!open) return null;

  const question = questions[currentQuestion];

  const progress =
    questions.length > 0
      ? ((currentQuestion + 1) / questions.length) * 100
      : 0;

  const previousQuestion = () => {
    if (currentQuestion === 0) return;
    setCurrentQuestion((prev) => prev - 1);
  };

  const verifyIdentity = () => {
    setLoading(true);

    setTimeout(() => {
      let correct = 0;

      questions.forEach((q) => {
        if (answers[q.id] === q.answer) {
          correct++;
        }
      });

      const score = Math.round(
        (correct / questions.length) * 100
      );

      const passed = score >= 70;

      setConfidence(score);
      setApproved(passed);

      setResultReason(
        passed
          ? "Behaviour matches historical customer records."
          : "Behaviour differs significantly from historical records."
      );

      setLoading(false);
      setShowResult(true);
    }, 3000);
  };

  const nextQuestion = () => {
    if (!question || !answers[question.id]) return;

    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion((prev) => prev + 1);
    } else {
      verifyIdentity();
    }
  };

  /* ===========================
      RESULT SCREEN
  ============================ */

  if (showResult) {
    return (
      <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/70 backdrop-blur-sm p-6">

        <div className="w-full max-w-xl overflow-hidden rounded-3xl bg-white shadow-2xl">

          <div
            className={`p-8 text-center text-white ${
              approved ? "bg-green-600" : "bg-red-600"
            }`}
          >
            <h2 className="text-3xl font-bold">
              {approved
                ? "Transaction Approved"
                : "Transaction Blocked"}
            </h2>

            <p className="mt-3 opacity-90">
              Rybon Verification Complete
            </p>
          </div>

          <div className="p-8">

            <div className="rounded-2xl bg-slate-100 p-8 text-center">

              <p className="text-slate-500">
                Identity Confidence
              </p>

              <h2 className="mt-3 text-6xl font-bold text-blue-600">
                {confidence}%
              </h2>

            </div>

            <div className="mt-8 rounded-2xl border border-slate-200">

              <div className="border-b p-5">
                <h3 className="font-bold text-slate-800">
                  AI Verification Summary
                </h3>
              </div>

              <div className="divide-y">

                <div className="flex justify-between p-5">
                  <span>Behaviour Match</span>
                  <span>{confidence > 70 ? "✓" : "✗"}</span>
                </div>

                <div className="flex justify-between p-5">
                  <span>Known Beneficiary</span>
                  <span>{confidence > 70 ? "✓" : "✗"}</span>
                </div>

                <div className="flex justify-between p-5">
                  <span>Historical Pattern</span>
                  <span>{confidence > 70 ? "✓" : "✗"}</span>
                </div>

                <div className="flex justify-between p-5">
                  <span>Final Decision</span>

                  <span
                    className={
                      approved
                        ? "font-bold text-green-600"
                        : "font-bold text-red-600"
                    }
                  >
                    {approved
                      ? "APPROVED"
                      : "BLOCKED"}
                  </span>

                </div>

              </div>

            </div>

            <div className="mt-8 rounded-2xl border border-slate-200 p-6">

              <h3 className="font-bold text-slate-800">
                AI Decision
              </h3>

              <p className="mt-3 text-slate-600">
                {resultReason}
              </p>

            </div>

            <div className="mt-10 flex justify-end">

              <button
                onClick={() => {
                  setShowResult(false);
                  onClose();
                }}
                className={`rounded-xl px-8 py-3 font-semibold text-white ${
                  approved
                    ? "bg-green-600 hover:bg-green-700"
                    : "bg-red-600 hover:bg-red-700"
                }`}
              >
                Finish
              </button>

            </div>

          </div>

        </div>

      </div>
    );
  }

  /* ===========================
      LOADING SCREEN
  ============================ */

  if (loading) {
    return (
      <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/70 backdrop-blur-sm">

        <div className="w-full max-w-lg rounded-3xl bg-white p-10 shadow-2xl">

          <div className="text-center">

            <BrainCircuit
              size={70}
              className="mx-auto animate-pulse text-blue-600"
            />

            <h2 className="mt-6 text-3xl font-bold">
              Rybon
            </h2>

            <p className="mt-3 text-slate-600">
              Analysing behavioural profile...
            </p>

          </div>

        </div>
      </div>
    );
  }

  /* ===========================
      MAIN MODAL STARTS HERE
  ============================ */

  return (     <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/70 backdrop-blur-sm p-6">

      <div className="w-full max-w-4xl overflow-hidden rounded-3xl bg-white shadow-2xl">

        {/* ================= HEADER ================= */}

        <div className="flex items-center justify-between bg-gradient-to-r from-blue-700 to-cyan-600 px-8 py-6">

          <div className="flex items-center gap-4">

            <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-white/20">
              <BrainCircuit size={30} className="text-white" />
            </div>

            <div>
              <h2 className="text-2xl font-bold text-white">
                Rybon
              </h2>

              <p className="text-blue-100">
                Adaptive Behavioural Verification
              </p>
            </div>

          </div>

          <button
            onClick={onClose}
            className="rounded-xl p-2 text-white transition hover:bg-white/20"
          >
            <X />
          </button>

        </div>

        {/* ================= RISK SUMMARY ================= */}

        <div className="border-b bg-yellow-50 px-8 py-6">

          <div className="flex items-start gap-4">

            <ShieldAlert
              className="mt-1 text-yellow-600"
              size={30}
            />

            <div className="flex-1">

              <h3 className="text-xl font-bold text-yellow-700">
                Suspicious Transaction Detected
              </h3>

              <p className="mt-2 text-slate-600">
                Rybon detected unusual activity.
                Please complete behavioural verification
                before this payment is approved.
              </p>

            </div>

            <div className="rounded-2xl bg-red-600 px-6 py-4 text-center text-white">

              <p className="text-sm">
                Risk Score
              </p>

              <h2 className="text-3xl font-bold">
                {riskScore}%
              </h2>

            </div>

          </div>

        </div>

        {/* ================= FINDINGS ================= */}

        <div className="border-b px-8 py-6">

          <h3 className="mb-5 text-lg font-bold text-slate-800">
            AI Findings
          </h3>

          <div className="grid gap-4 md:grid-cols-2">

            {findings.map((item) => (

              <div
                key={item}
                className="flex items-center gap-3 rounded-xl bg-slate-100 p-4"
              >

                <AlertTriangle
                  size={20}
                  className="text-yellow-600"
                />

                <span className="text-slate-700">
                  {item}
                </span>

              </div>

            ))}

          </div>

        </div>

        {/* ================= QUESTIONS ================= */}

        <div className="p-8">

          {question ? (

            <>

              <div className="mb-8">

                <div className="mb-4 flex justify-between">

                  <span className="rounded-full bg-blue-100 px-4 py-2 text-sm font-semibold text-blue-700">

                    Question {currentQuestion + 1} of {questions.length}

                  </span>

                  <span className="font-semibold text-slate-500">
                    {Math.round(progress)}%
                  </span>

                </div>

                <div className="h-2 rounded-full bg-slate-200">

                  <div
                    className="h-2 rounded-full bg-blue-600 transition-all duration-500"
                    style={{
                      width: `${progress}%`,
                    }}
                  />

                </div>

              </div>

              <h2 className="text-3xl font-bold text-slate-900">
                {question.title}
              </h2>

              <p className="mt-3 text-slate-500">
                {question.reason}
              </p>

              <div className="mt-8 space-y-4">

                {question.options.map((option) => (

                  <button
                    key={option}
                    onClick={() =>
                      setAnswers({
                        ...answers,
                        [question.id]: option,
                      })
                    }
                    className={`w-full rounded-2xl border p-5 text-left transition-all ${
                      answers[question.id] === option
                        ? "border-blue-600 bg-blue-50"
                        : "border-slate-200 hover:border-blue-400"
                    }`}
                  >

                    {option}

                  </button>

                ))}

              </div>

            </>

          ) : (

            <div className="py-20 text-center">

              <BrainCircuit
                size={70}
                className="mx-auto text-blue-600"
              />

              <h2 className="mt-6 text-3xl font-bold">
                No Verification Required
              </h2>

              <p className="mt-3 text-slate-500">
                This transaction does not require any
                additional behavioural verification.
              </p>

            </div>

          )}

        </div>

        {/* ================= FOOTER ================= */}

        <div className="flex items-center justify-between border-t bg-slate-50 px-8 py-6">

          <button
            onClick={onClose}
            className="rounded-xl border border-slate-300 px-6 py-3 font-semibold hover:bg-slate-100"
          >
            Cancel
          </button>

          <div className="flex gap-4">

            <button
              onClick={previousQuestion}
              disabled={currentQuestion === 0}
              className="rounded-xl border border-slate-300 px-6 py-3 font-semibold disabled:opacity-50"
            >
              Previous
            </button>

            <button
              onClick={nextQuestion}
              disabled={!question || !answers[question.id]}
              className="rounded-xl bg-blue-600 px-8 py-3 font-semibold text-white transition hover:bg-blue-700 disabled:cursor-not-allowed disabled:opacity-50"
            >
              {currentQuestion === questions.length - 1
                ? "Verify Identity"
                : "Next"}
            </button>

          </div>

        </div>

      </div>

    </div>
  );
}