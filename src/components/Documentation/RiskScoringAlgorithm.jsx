import {
  BrainCircuit,
  Activity,
  ShieldAlert,
  Smartphone,
  MapPinned,
  Clock3,
  Fingerprint,
  CreditCard,
  ArrowRight,
  CheckCircle2,
  AlertTriangle,
  XCircle,
} from "lucide-react";

export default function RiskScoringAlgorithm() {
  const factors = [
    {
      icon: <Fingerprint size={28} />,
      title: "Behaviour Analysis",
      score: "30%",
      description:
        "Compares the customer's current behaviour with historical spending habits, transaction frequency, login patterns, and payment preferences.",
      color: "bg-blue-600",
    },
    {
      icon: <Smartphone size={28} />,
      title: "Device Intelligence",
      score: "20%",
      description:
        "Verifies trusted devices, browser fingerprints, operating systems, and detects unfamiliar or suspicious devices.",
      color: "bg-cyan-600",
    },
    {
      icon: <MapPinned size={28} />,
      title: "Location Analysis",
      score: "15%",
      description:
        "Evaluates IP address, GPS location, travel speed, VPN usage, and geographical consistency.",
      color: "bg-purple-600",
    },
    {
      icon: <Clock3 size={28} />,
      title: "Transaction Timing",
      score: "15%",
      description:
        "Detects unusual transaction times, rapid payment attempts, and abnormal transaction velocity.",
      color: "bg-orange-500",
    },
    {
      icon: <CreditCard size={28} />,
      title: "Transaction Pattern",
      score: "20%",
      description:
        "Examines transaction amount, merchant category, payment destination, and historical spending trends.",
      color: "bg-green-600",
    },
  ];

  const levels = [
    {
      title: "Low Risk",
      range: "0 - 39",
      icon: <CheckCircle2 size={40} />,
      color: "text-green-400",
      bg: "bg-green-500/10",
      action:
        "Transaction is automatically approved because the behaviour closely matches the customer's normal activity.",
    },
    {
      title: "Medium Risk",
      range: "40 - 69",
      icon: <AlertTriangle size={40} />,
      color: "text-yellow-400",
      bg: "bg-yellow-500/10",
      action:
        "FraudShield AI activates Trusted Circle Approval, Dual Device Confirmation, or AI Behavioural Challenge before approval.",
    },
    {
      title: "High Risk",
      range: "70 - 100",
      icon: <XCircle size={40} />,
      color: "text-red-400",
      bg: "bg-red-500/10",
      action:
        "The transaction is immediately blocked while fraud alerts are generated and the event is stored for future AI learning.",
    },
  ];

  return (
    <section className="relative overflow-hidden bg-slate-50 py-28">
      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}

        <div className="max-w-4xl mx-auto text-center">

          <span className="inline-flex items-center gap-2 rounded-full bg-blue-100 px-5 py-2 text-sm font-semibold text-blue-700">

            <BrainCircuit size={18} />

            AI Risk Scoring Algorithm

          </span>

          <h2 className="mt-6 text-5xl font-bold text-slate-900">

            Dynamic Fraud Risk Assessment

          </h2>

          <p className="mt-8 text-lg leading-8 text-slate-600">

            FraudShield AI evaluates every transaction using multiple
            intelligent indicators rather than relying on fixed security
            rules. Each factor contributes to an overall fraud risk score,
            enabling the framework to make fast, accurate, and adaptive
            security decisions.

          </p>

        </div>

        {/* Formula */}

        <div className="mt-20 rounded-3xl bg-slate-900 p-12 text-center shadow-2xl">

          <h3 className="text-3xl font-bold text-white">

            Simplified Risk Formula

          </h3>

          <div className="mt-10 overflow-x-auto">

            <div className="inline-flex items-center gap-4 rounded-2xl border border-blue-500/20 bg-white/5 px-8 py-6 text-white text-lg font-semibold">

              Behaviour

              <ArrowRight className="text-blue-400" />

              Device

              <ArrowRight className="text-blue-400" />

              Location

              <ArrowRight className="text-blue-400" />

              Transaction Pattern

              <ArrowRight className="text-blue-400" />

              Risk Score

            </div>

          </div>

        </div>

        {/* Risk Factors */}

        <div className="grid gap-8 mt-24 lg:grid-cols-2">

          {factors.map((factor) => (

            <div
              key={factor.title}
              className="rounded-3xl bg-white border border-slate-200 p-8 shadow-lg transition hover:-translate-y-2"
            >

              <div className="flex items-start justify-between">

                <div className={`flex h-16 w-16 items-center justify-center rounded-2xl text-white ${factor.color}`}>

                  {factor.icon}

                </div>

                <span className="rounded-full bg-blue-100 px-4 py-2 text-sm font-bold text-blue-700">

                  Weight: {factor.score}

                </span>

              </div>

              <h3 className="mt-6 text-2xl font-bold text-slate-900">

                {factor.title}

              </h3>

              <p className="mt-5 leading-8 text-slate-600">

                {factor.description}

              </p>

            </div>

          ))}

        </div>

        {/* Decision Levels */}

        <div className="mt-24 rounded-3xl bg-gradient-to-r from-blue-600 to-cyan-600 p-12 shadow-2xl">

          <h3 className="text-center text-4xl font-bold text-white">

            Risk Classification

          </h3>

          <div className="mt-12 grid gap-8 md:grid-cols-3">

            {levels.map((level) => (

              <div
                key={level.title}
                className={`rounded-3xl ${level.bg} p-8 backdrop-blur-sm`}
              >

                <div className={level.color}>

                  {level.icon}

                </div>

                <h4 className="mt-6 text-2xl font-bold text-white">

                  {level.title}

                </h4>

                <p className="mt-2 font-semibold text-blue-100">

                  Risk Score: {level.range}

                </p>

                <p className="mt-6 leading-7 text-blue-100">

                  {level.action}

                </p>

              </div>

            ))}

          </div>

        </div>

        {/* Bottom Table */}

        <div className="mt-24 overflow-hidden rounded-3xl bg-white shadow-xl border border-slate-200">

          <div className="overflow-x-auto">

            <table className="w-full">

              <thead className="bg-slate-900 text-white">

                <tr>

                  <th className="px-6 py-5 text-left">Risk Score</th>

                  <th className="px-6 py-5 text-left">Classification</th>

                  <th className="px-6 py-5 text-left">System Response</th>

                </tr>

              </thead>

              <tbody>

                <tr className="border-b">

                  <td className="px-6 py-5">0 - 39</td>

                  <td className="px-6 py-5 text-green-600 font-semibold">

                    Low Risk

                  </td>

                  <td className="px-6 py-5">

                    Automatically Approve

                  </td>

                </tr>

                <tr className="border-b">

                  <td className="px-6 py-5">40 - 69</td>

                  <td className="px-6 py-5 text-yellow-600 font-semibold">

                    Medium Risk

                  </td>

                  <td className="px-6 py-5">

                    Trusted Circle Approval / Dual Device Confirmation /
                    AI Behavioural Challenge

                  </td>

                </tr>

                <tr>

                  <td className="px-6 py-5">70 - 100</td>

                  <td className="px-6 py-5 text-red-600 font-semibold">

                    High Risk

                  </td>

                  <td className="px-6 py-5">

                    Block Transaction & Generate Fraud Alert

                  </td>

                </tr>

              </tbody>

            </table>

          </div>

        </div>

        {/* Summary */}

        <div className="mt-24 rounded-3xl bg-slate-900 p-12 text-center">

          <ShieldAlert className="mx-auto text-blue-400" size={60} />

          <h3 className="mt-6 text-4xl font-bold text-white">

            Intelligent Decision Making

          </h3>

          <p className="mx-auto mt-6 max-w-5xl text-lg leading-8 text-slate-300">

            Unlike traditional rule-based fraud detection systems,
            FraudShield AI continuously evaluates multiple behavioural,
            contextual, and transactional indicators to calculate a
            dynamic fraud risk score. This adaptive approach improves
            fraud detection accuracy, reduces false positives, and
            strengthens customer trust while maintaining a seamless
            payment experience.

          </p>

        </div>

      </div>

    </section>
  );
}