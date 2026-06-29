import {
  ShieldCheck,
  BrainCircuit,
  Database,
  Activity,
  Lock,
  Network,
  ArrowRight,
} from "lucide-react";

export default function FrameworkOverview() {
  const features = [
    {
      icon: <BrainCircuit size={30} />,
      title: "Artificial Intelligence Engine",
      description:
        "Analyzes every transaction using machine learning, behavioral analytics, contextual intelligence, and adaptive risk scoring.",
    },
    {
      icon: <Database size={30} />,
      title: "Data Collection Layer",
      description:
        "Collects customer behavior, transaction history, device fingerprint, IP address, location, and payment metadata in real time.",
    },
    {
      icon: <Activity size={30} />,
      title: "Real-Time Monitoring",
      description:
        "Continuously monitors every payment request and immediately detects suspicious activities before payment authorization.",
    },
    {
      icon: <ShieldCheck size={30} />,
      title: "Decision Engine",
      description:
        "Automatically approves, verifies, or blocks transactions based on the calculated AI fraud probability.",
    },
    {
      icon: <Lock size={30} />,
      title: "Adaptive Security",
      description:
        "Applies stronger authentication only when necessary, reducing friction for genuine customers while increasing security.",
    },
    {
      icon: <Network size={30} />,
      title: "Continuous Learning",
      description:
        "Learns from every completed transaction, improving fraud detection accuracy and adapting to new attack patterns.",
    },
  ];

  return (
    <section className="bg-slate-50 py-24">

      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}

        <div className="max-w-3xl mx-auto text-center">

          <span className="inline-flex items-center gap-2 rounded-full bg-blue-100 px-5 py-2 text-sm font-semibold text-blue-700">
            Framework Overview
          </span>

          <h2 className="mt-6 text-4xl md:text-5xl font-bold text-slate-900">
            How FraudShield AI
            <span className="text-blue-600">
              {" "}Protects Every Transaction
            </span>
          </h2>

          <p className="mt-6 text-lg leading-8 text-slate-600">
            FraudShield AI combines Artificial Intelligence, behavioral
            analytics, device intelligence, and real-time monitoring to
            identify fraudulent activities before money leaves the customer's
            account. Every payment request passes through multiple intelligent
            security layers before a final decision is made.
          </p>

        </div>

        {/* Feature Cards */}

        <div className="grid gap-8 mt-20 md:grid-cols-2 lg:grid-cols-3">

          {features.map((feature) => (

            <div
              key={feature.title}
              className="group rounded-3xl border border-slate-200 bg-white p-8 shadow-sm transition duration-300 hover:-translate-y-2 hover:border-blue-500 hover:shadow-2xl"
            >

              <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-blue-100 text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition">

                {feature.icon}

              </div>

              <h3 className="mt-6 text-2xl font-bold text-slate-900">

                {feature.title}

              </h3>

              <p className="mt-4 leading-8 text-slate-600">

                {feature.description}

              </p>

            </div>

          ))}

        </div>

        {/* Information Table */}

        <div className="mt-24 overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-xl">

          <div className="border-b border-slate-200 bg-slate-900 px-8 py-6">

            <h3 className="text-2xl font-bold text-white">
              Fraud Detection Framework Components
            </h3>

          </div>

          <div className="overflow-x-auto">

            <table className="w-full">

              <thead className="bg-slate-100">

                <tr>

                  <th className="px-8 py-5 text-left font-bold text-slate-800">
                    Component
                  </th>

                  <th className="px-8 py-5 text-left font-bold text-slate-800">
                    Purpose
                  </th>

                  <th className="px-8 py-5 text-left font-bold text-slate-800">
                    Technology
                  </th>

                  <th className="px-8 py-5 text-left font-bold text-slate-800">
                    Outcome
                  </th>

                </tr>

              </thead>

              <tbody>

                <tr className="border-t">

                  <td className="px-8 py-6 font-semibold">
                    Data Collection
                  </td>

                  <td className="px-8 py-6">
                    Capture transaction and customer information
                  </td>

                  <td className="px-8 py-6">
                    APIs & Payment Gateway
                  </td>

                  <td className="px-8 py-6 text-green-600 font-semibold">
                    Transaction Profile Created
                  </td>

                </tr>

                <tr className="border-t bg-slate-50">

                  <td className="px-8 py-6 font-semibold">
                    AI Analysis
                  </td>

                  <td className="px-8 py-6">
                    Evaluate fraud indicators
                  </td>

                  <td className="px-8 py-6">
                    Machine Learning
                  </td>

                  <td className="px-8 py-6 text-blue-600 font-semibold">
                    Risk Score Generated
                  </td>

                </tr>

                <tr className="border-t">

                  <td className="px-8 py-6 font-semibold">
                    Risk Scoring
                  </td>

                  <td className="px-8 py-6">
                    Calculate fraud probability
                  </td>

                  <td className="px-8 py-6">
                    Predictive Analytics
                  </td>

                  <td className="px-8 py-6 text-orange-600 font-semibold">
                    Risk Classification
                  </td>

                </tr>

                <tr className="border-t bg-slate-50">

                  <td className="px-8 py-6 font-semibold">
                    Decision Engine
                  </td>

                  <td className="px-8 py-6">
                    Approve or reject payment
                  </td>

                  <td className="px-8 py-6">
                    Intelligent Rules
                  </td>

                  <td className="px-8 py-6 text-red-600 font-semibold">
                    Final Decision
                  </td>

                </tr>

              </tbody>

            </table>

          </div>

        </div>

        {/* Bottom Summary */}

        <div className="mt-24 rounded-3xl bg-gradient-to-r from-blue-600 to-cyan-600 p-12 shadow-2xl">

          <div className="grid items-center gap-10 lg:grid-cols-2">

            <div>

              <h3 className="text-4xl font-bold text-white">
                Intelligent Fraud Detection in Seconds
              </h3>

              <p className="mt-6 text-lg leading-8 text-blue-100">
                Every transaction is analyzed within milliseconds. The
                framework evaluates customer behavior, payment history,
                transaction patterns, device trust, and geographical context
                before producing an intelligent fraud decision.
              </p>

            </div>

            <div className="flex justify-center">

              <div className="flex flex-wrap items-center justify-center gap-4">

                {[
                  "Collect Data",
                  "Analyze",
                  "Risk Score",
                  "Decision",
                ].map((step, index) => (
                  <div
                    key={step}
                    className="flex items-center"
                  >
                    <div className="rounded-2xl bg-white px-6 py-4 font-bold text-slate-900">
                      {step}
                    </div>

                    {index !== 3 && (
                      <ArrowRight className="mx-3 text-white" />
                    )}

                  </div>
                ))}

              </div>

            </div>

          </div>

        </div>

      </div>

    </section>
  );
}