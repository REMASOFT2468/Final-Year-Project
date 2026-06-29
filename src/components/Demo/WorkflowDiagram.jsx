import {
  User,
  Database,
  BrainCircuit,
  ShieldCheck,
  BellRing,
  CheckCircle2,
  ArrowRight,
} from "lucide-react";

export default function WorkflowDiagram() {
  const workflow = [
    {
      icon: <User size={32} />,
      title: "1. Transaction Initiated",
      color: "bg-blue-600",
      description:
        "The customer starts an online payment, bank transfer, POS transaction, or mobile wallet payment.",
    },
    {
      icon: <Database size={32} />,
      title: "2. Data Collection",
      color: "bg-cyan-600",
      description:
        "The framework securely collects transaction amount, customer profile, device fingerprint, IP address, location, payment history, and behavioural data.",
    },
    {
      icon: <BrainCircuit size={32} />,
      title: "3. AI Risk Analysis",
      color: "bg-purple-600",
      description:
        "Machine Learning algorithms analyse transaction behaviour, historical fraud patterns, velocity checks, device trust, and contextual information to generate a fraud risk score.",
    },
    {
      icon: <ShieldCheck size={32} />,
      title: "4. Decision Engine",
      color: "bg-green-600",
      description:
        "Based on the calculated fraud score, the framework automatically approves, verifies, or blocks the transaction before payment is completed.",
    },
    {
      icon: <BellRing size={32} />,
      title: "5. Alert & Monitoring",
      color: "bg-orange-500",
      description:
        "Suspicious activities generate instant alerts for security teams while the AI continuously monitors future customer behaviour.",
    },
    {
      icon: <CheckCircle2 size={32} />,
      title: "6. Continuous Learning",
      color: "bg-red-600",
      description:
        "Every completed transaction becomes new training data, allowing FraudShield AI to improve detection accuracy over time.",
    },
  ];

  return (
    <section className="py-28 bg-gradient-to-b from-slate-900 to-slate-950">

      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}

        <div className="text-center max-w-4xl mx-auto">

          <span className="inline-flex items-center gap-2 rounded-full bg-blue-600/20 px-5 py-2 text-sm font-semibold text-blue-300">

            Workflow Diagram

          </span>

          <h2 className="mt-6 text-5xl font-bold text-white">

            Fraud Detection Workflow

          </h2>

          <p className="mt-6 text-lg leading-8 text-slate-300">

            Every payment transaction follows an intelligent workflow before
            reaching the final decision. FraudShield AI analyses multiple
            security layers in real time to identify fraudulent activities
            before financial loss occurs.

          </p>

        </div>

        {/* Workflow */}

        <div className="mt-24">

          <div className="grid gap-10">

            {workflow.map((step, index) => (

              <div
                key={step.title}
                className="flex flex-col lg:flex-row items-center gap-8"
              >

                {/* Card */}

                <div className="flex-1 rounded-3xl border border-white/10 bg-white/5 backdrop-blur-md p-8 hover:border-blue-500 transition duration-300">

                  <div
                    className={`w-20 h-20 rounded-2xl ${step.color} flex items-center justify-center text-white`}
                  >

                    {step.icon}

                  </div>

                  <h3 className="mt-6 text-3xl font-bold text-white">

                    {step.title}

                  </h3>

                  <p className="mt-5 leading-8 text-slate-300">

                    {step.description}

                  </p>

                </div>

                {/* Arrow */}

                {index !== workflow.length - 1 && (

                  <div className="hidden lg:flex">

                    <ArrowRight
                      size={40}
                      className="text-blue-400"
                    />

                  </div>

                )}

              </div>

            ))}

          </div>

        </div>

        {/* AI Decision Flow */}

        <div className="mt-28 rounded-3xl bg-gradient-to-r from-blue-600 to-cyan-600 p-12 shadow-2xl">

          <h3 className="text-center text-4xl font-bold text-white">

            Intelligent Decision Pipeline

          </h3>

          <div className="mt-12 flex flex-wrap justify-center items-center gap-5">

            {[
              "Transaction",
              "Collect Data",
              "Behaviour Analysis",
              "AI Model",
              "Risk Score",
              "Decision Engine",
              "Approve / Verify / Block",
            ].map((item, index) => (

              <div
                key={item}
                className="flex items-center"
              >

                <div className="rounded-2xl bg-white px-6 py-4 font-bold text-slate-900 shadow">

                  {item}

                </div>

                {index !== 6 && (

                  <ArrowRight
                    className="mx-3 text-white"
                    size={24}
                  />

                )}

              </div>

            ))}

          </div>

        </div>

        {/* Statistics */}

        <div className="grid md:grid-cols-4 gap-8 mt-20">

          <div className="rounded-3xl bg-white/5 border border-white/10 p-8 text-center">

            <h3 className="text-5xl font-bold text-blue-400">
              6
            </h3>

            <p className="mt-3 text-slate-300">
              Workflow Stages
            </p>

          </div>

          <div className="rounded-3xl bg-white/5 border border-white/10 p-8 text-center">

            <h3 className="text-5xl font-bold text-green-400">
              {"<"}1s
            </h3>

            <p className="mt-3 text-slate-300">
              Decision Time
            </p>

          </div>

          <div className="rounded-3xl bg-white/5 border border-white/10 p-8 text-center">

            <h3 className="text-5xl font-bold text-cyan-400">
              99.8%
            </h3>

            <p className="mt-3 text-slate-300">
              Detection Accuracy
            </p>

          </div>

          <div className="rounded-3xl bg-white/5 border border-white/10 p-8 text-center">

            <h3 className="text-5xl font-bold text-red-400">
              24/7
            </h3>

            <p className="mt-3 text-slate-300">
              AI Monitoring
            </p>

          </div>

        </div>

      </div>

    </section>
  );
}