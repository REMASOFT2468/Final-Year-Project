import {
  PlayCircle,
  ShieldCheck,
  BrainCircuit,
  Activity,
  ArrowRight,
  CheckCircle2,
} from "lucide-react";

export default function DemoHero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-slate-950 via-slate-900 to-blue-950 pt-36 pb-24">

      {/* Background Glow */}

      <div className="absolute -left-32 top-0 h-96 w-96 rounded-full bg-blue-600/20 blur-3xl"></div>

      <div className="absolute right-0 bottom-0 h-[30rem] w-[30rem] rounded-full bg-cyan-500/10 blur-3xl"></div>

      <div className="relative mx-auto grid max-w-7xl items-center gap-16 px-6 lg:grid-cols-2">

        {/* Left Side */}

        <div>

          <span className="inline-flex items-center gap-2 rounded-full border border-blue-500/30 bg-blue-500/10 px-5 py-2 text-sm font-semibold text-blue-300">
            <PlayCircle size={18} />
            Interactive Demonstration
          </span>

          <h1 className="mt-8 text-5xl font-extrabold leading-tight text-white md:text-6xl">

            Experience
            <span className="text-blue-400">
              {" "}Real-Time AI Fraud Detection
            </span>

          </h1>

          <p className="mt-8 text-lg leading-8 text-slate-300">

            This interactive demonstration shows how FraudShield AI
            evaluates online payment transactions using artificial
            intelligence, behavioral analytics, device intelligence,
            contextual analysis, and adaptive risk scoring before
            automatically approving, verifying, or blocking payments.

          </p>

          {/* Feature Pills */}

          <div className="mt-10 flex flex-wrap gap-4">

            <div className="flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 text-white">
              <CheckCircle2 className="text-green-400" size={18} />
              AI Decision Engine
            </div>

            <div className="flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 text-white">
              <CheckCircle2 className="text-green-400" size={18} />
              Live Risk Scoring
            </div>

            <div className="flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 text-white">
              <CheckCircle2 className="text-green-400" size={18} />
              Real-Time Monitoring
            </div>

          </div>

          {/* Buttons */}

          <div className="mt-12 flex flex-wrap gap-5">

            <button className="flex items-center gap-3 rounded-xl bg-blue-600 px-8 py-4 font-semibold text-white transition hover:bg-blue-700">

              Start Demo

              <ArrowRight size={20} />

            </button>

            <button className="flex items-center gap-3 rounded-xl border border-slate-600 bg-white/5 px-8 py-4 font-semibold text-white transition hover:border-blue-500">

              <PlayCircle size={20} />

              Watch Video

            </button>

          </div>

        </div>

        {/* Right Side */}

        <div>

          <div className="rounded-3xl border border-white/10 bg-white/5 p-8 shadow-2xl backdrop-blur-md">

            {/* Header */}

            <div className="flex items-center justify-between">

              <h3 className="text-xl font-bold text-white">
                Live AI Dashboard
              </h3>

              <span className="rounded-full bg-green-500 px-3 py-1 text-xs font-bold text-white">
                LIVE
              </span>

            </div>

            {/* Dashboard Cards */}

            <div className="mt-8 grid gap-5">

              <div className="rounded-2xl bg-slate-900 p-5">

                <div className="flex items-center justify-between">

                  <div className="flex items-center gap-3">

                    <BrainCircuit className="text-blue-400" />

                    <span className="text-slate-300">
                      AI Risk Score
                    </span>

                  </div>

                  <span className="text-3xl font-bold text-red-400">
                    84%
                  </span>

                </div>

              </div>

              <div className="rounded-2xl bg-slate-900 p-5">

                <div className="flex items-center justify-between">

                  <div className="flex items-center gap-3">

                    <ShieldCheck className="text-green-400" />

                    <span className="text-slate-300">
                      Security Status
                    </span>

                  </div>

                  <span className="font-bold text-red-400">
                    HIGH RISK
                  </span>

                </div>

              </div>

              <div className="rounded-2xl bg-slate-900 p-5">

                <div className="flex items-center justify-between">

                  <div className="flex items-center gap-3">

                    <Activity className="text-cyan-400" />

                    <span className="text-slate-300">
                      Decision
                    </span>

                  </div>

                  <span className="rounded-full bg-red-500 px-4 py-2 text-sm font-bold text-white">
                    BLOCKED
                  </span>

                </div>

              </div>

            </div>

            {/* Transaction */}

            <div className="mt-10 rounded-2xl bg-blue-600 p-6">

              <h4 className="text-lg font-bold text-white">
                Sample Transaction
              </h4>

              <div className="mt-5 space-y-3 text-white">

                <div className="flex justify-between">
                  <span>Customer</span>
                  <span>John Doe</span>
                </div>

                <div className="flex justify-between">
                  <span>Amount</span>
                  <span>₦850,000</span>
                </div>

                <div className="flex justify-between">
                  <span>Device</span>
                  <span>Unknown</span>
                </div>

                <div className="flex justify-between">
                  <span>Location</span>
                  <span>Lagos, Nigeria</span>
                </div>

              </div>

            </div>

          </div>

        </div>

      </div>

    </section>
  );
}