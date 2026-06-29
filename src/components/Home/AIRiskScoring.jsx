import {
  BrainCircuit,
  ShieldCheck,
  Fingerprint,
  MapPinned,
  Smartphone,
  ChartSpline,
} from "lucide-react";

export default function AIRiskScoring() {
  const factors = [
    {
      icon: <Fingerprint size={30} />,
      title: "Behavior Analysis",
      score: "30%",
      description:
        "Compares current user behavior with historical transaction patterns to identify unusual activities.",
    },
    {
      icon: <Smartphone size={30} />,
      title: "Device Intelligence",
      score: "20%",
      description:
        "Checks whether the transaction originates from a trusted device or a newly detected device.",
    },
    {
      icon: <MapPinned size={30} />,
      title: "Location Verification",
      score: "15%",
      description:
        "Evaluates geographical consistency by comparing the current location with previous login locations.",
    },
    {
      icon: <ChartSpline size={30} />,
      title: "Transaction Pattern",
      score: "20%",
      description:
        "Analyzes transaction amount, frequency, recipient history, and spending behavior.",
    },
    {
      icon: <ShieldCheck size={30} />,
      title: "Security Signals",
      score: "15%",
      description:
        "Considers failed login attempts, password resets, VPN usage, and account security events.",
    },
  ];

  return (
    <section className="relative py-28 bg-slate-950 overflow-hidden">

      {/* Background Effects */}

      <div className="absolute -top-40 -left-32 w-[30rem] h-[30rem] bg-blue-500/20 rounded-full blur-3xl"></div>

      <div className="absolute bottom-0 right-0 w-[32rem] h-[32rem] bg-cyan-500/10 rounded-full blur-3xl"></div>

      <div className="relative max-w-7xl mx-auto px-6">

        {/* Heading */}

        <div className="text-center max-w-3xl mx-auto">

          <span className="inline-flex items-center gap-2 rounded-full bg-blue-500/10 px-5 py-2 text-sm font-semibold text-blue-400">
            <BrainCircuit size={18} />
            AI Risk Scoring Engine
          </span>

          <h2 className="mt-6 text-4xl md:text-5xl font-bold text-white leading-tight">
            Every Transaction Receives an
            <span className="text-blue-400">
              {" "}Intelligent Risk Score
            </span>
          </h2>

          <p className="mt-6 text-lg leading-8 text-slate-300">
            FraudShield AI evaluates multiple security indicators in
            real time before assigning a fraud risk score. Instead of
            relying on static rules, the framework continuously learns
            from user behavior and transaction history to make smarter
            security decisions.
          </p>

        </div>

        {/* Risk Factors */}

        <div className="grid lg:grid-cols-2 gap-8 mt-20">

          {factors.map((factor) => (

            <div
              key={factor.title}
              className="rounded-3xl bg-white/5 border border-white/10 backdrop-blur-md p-8 hover:border-blue-500 transition duration-300 hover:-translate-y-2"
            >

              <div className="flex justify-between items-center">

                <div className="flex items-center gap-5">

                  <div className="w-16 h-16 rounded-2xl bg-blue-600 flex items-center justify-center text-white">

                    {factor.icon}

                  </div>

                  <div>

                    <h3 className="text-2xl font-bold text-white">

                      {factor.title}

                    </h3>

                    <p className="text-slate-400">

                      Weight Contribution

                    </p>

                  </div>

                </div>

                <span className="text-4xl font-bold text-blue-400">

                  {factor.score}

                </span>

              </div>

              <p className="mt-6 leading-8 text-slate-300">

                {factor.description}

              </p>

            </div>

          ))}

        </div>

        {/* Decision Engine */}

        <div className="mt-24 rounded-3xl bg-gradient-to-r from-blue-600 to-cyan-600 p-12 shadow-2xl">

          <div className="grid lg:grid-cols-2 gap-12 items-center">

            {/* Left */}

            <div>

              <h3 className="text-4xl font-bold text-white">
                AI Decision Engine
              </h3>

              <p className="mt-6 text-blue-100 leading-8">

                After evaluating all available security indicators,
                FraudShield AI combines every score into a final
                fraud probability. The framework then determines
                the safest action before the payment is processed.

              </p>

            </div>

            {/* Right */}

            <div className="space-y-5">

              <div className="rounded-2xl bg-white/10 p-6 flex justify-between items-center">

                <span className="font-semibold text-white">
                  Risk Score 0–30
                </span>

                <span className="bg-green-500 px-4 py-2 rounded-full font-bold">
                  Approve
                </span>

              </div>

              <div className="rounded-2xl bg-white/10 p-6 flex justify-between items-center">

                <span className="font-semibold text-white">
                  Risk Score 31–70
                </span>

                <span className="bg-yellow-500 px-4 py-2 rounded-full font-bold text-black">
                  Verify Identity
                </span>

              </div>

              <div className="rounded-2xl bg-white/10 p-6 flex justify-between items-center">

                <span className="font-semibold text-white">
                  Risk Score 71–100
                </span>

                <span className="bg-red-500 px-4 py-2 rounded-full font-bold">
                  Block Transaction
                </span>

              </div>

            </div>

          </div>

        </div>

        {/* Example Score */}

        <div className="mt-24 rounded-3xl bg-white text-slate-900 shadow-2xl p-10">

          <h3 className="text-3xl font-bold">
            Example Risk Score Calculation
          </h3>

          <div className="grid md:grid-cols-5 gap-6 mt-10">

            <div className="text-center">
              <h4 className="text-4xl font-bold text-red-500">30%</h4>
              <p className="mt-2">Behavior</p>
            </div>

            <div className="text-center">
              <h4 className="text-4xl font-bold text-orange-500">20%</h4>
              <p className="mt-2">Device</p>
            </div>

            <div className="text-center">
              <h4 className="text-4xl font-bold text-blue-500">15%</h4>
              <p className="mt-2">Location</p>
            </div>

            <div className="text-center">
              <h4 className="text-4xl font-bold text-purple-500">20%</h4>
              <p className="mt-2">Transaction</p>
            </div>

            <div className="text-center">
              <h4 className="text-4xl font-bold text-green-500">15%</h4>
              <p className="mt-2">Security</p>
            </div>

          </div>

          <div className="mt-12 rounded-2xl bg-slate-100 p-8 text-center">

            <h4 className="text-5xl font-bold text-blue-600">
              Final Risk Score = 82%
            </h4>

            <p className="mt-4 text-lg text-slate-600">
              Decision: Transaction Blocked & Additional Verification Required
            </p>

          </div>

        </div>

      </div>

    </section>
  );
}