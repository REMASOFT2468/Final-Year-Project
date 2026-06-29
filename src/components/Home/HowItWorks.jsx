import {
  CreditCard,
  Database,
  BrainCircuit,
  ShieldCheck,
  BellRing,
} from "lucide-react";

export default function HowItWorks() {
  const steps = [
    {
      icon: <CreditCard size={34} />,
      title: "Transaction Initiated",
      description:
        "A customer initiates a payment through an online payment platform, mobile banking application, or fintech service.",
    },
    {
      icon: <Database size={34} />,
      title: "Data Collection",
      description:
        "The framework collects transaction amount, device information, IP address, geolocation, login history, transaction history, and user behavioral patterns.",
    },
    {
      icon: <BrainCircuit size={34} />,
      title: "AI Risk Analysis",
      description:
        "Artificial Intelligence analyzes hundreds of security indicators simultaneously to calculate the fraud probability and assign a dynamic risk score.",
    },
    {
      icon: <ShieldCheck size={34} />,
      title: "Decision Engine",
      description:
        "Based on the calculated risk score, the framework automatically approves, challenges, or blocks the transaction before money leaves the account.",
    },
    {
      icon: <BellRing size={34} />,
      title: "Alert & Monitoring",
      description:
        "Security teams receive real-time alerts while every transaction is continuously monitored for future learning and system improvement.",
    },
  ];

  return (
    <section className="relative py-28 bg-white overflow-hidden">

      {/* Background */}

      <div className="absolute -top-32 right-0 w-96 h-96 bg-blue-100 rounded-full blur-3xl opacity-40"></div>

      <div className="absolute bottom-0 left-0 w-[30rem] h-[30rem] bg-cyan-100 rounded-full blur-3xl opacity-40"></div>

      <div className="relative max-w-7xl mx-auto px-6">

        {/* Heading */}

        <div className="max-w-3xl mx-auto text-center">

          <span className="inline-flex px-5 py-2 rounded-full bg-blue-100 text-blue-700 text-sm font-semibold">
            Framework Workflow
          </span>

          <h2 className="mt-6 text-4xl md:text-5xl font-bold text-slate-900">
            How FraudShield AI
            <span className="text-blue-600"> Protects Every Transaction</span>
          </h2>

          <p className="mt-6 text-lg leading-8 text-slate-600">
            Every payment passes through multiple intelligent security
            layers before approval. The framework combines artificial
            intelligence, behavioral analytics, and adaptive risk
            scoring to detect fraud in real time.
          </p>

        </div>

        {/* Workflow */}

        <div className="mt-20 space-y-8">

          {steps.map((step, index) => (

            <div
              key={step.title}
              className="group flex flex-col lg:flex-row gap-8 items-start rounded-3xl bg-slate-50 border border-slate-200 p-8 shadow-md hover:shadow-xl transition duration-300"
            >

              <div className="flex items-center justify-center w-20 h-20 rounded-2xl bg-blue-600 text-white">

                {step.icon}

              </div>

              <div className="flex-1">

                <div className="flex items-center gap-4">

                  <span className="text-blue-600 font-bold text-lg">
                    Step {index + 1}
                  </span>

                  <h3 className="text-2xl font-bold text-slate-900">
                    {step.title}
                  </h3>

                </div>

                <p className="mt-4 text-slate-600 leading-8">
                  {step.description}
                </p>

              </div>

            </div>

          ))}

        </div>

        {/* AI Decision Summary */}

        <div className="mt-24 rounded-3xl bg-gradient-to-r from-blue-600 to-cyan-600 p-12 text-white shadow-2xl">

          <div className="grid lg:grid-cols-2 gap-12">

            <div>

              <h3 className="text-4xl font-bold">
                Intelligent Decision Process
              </h3>

              <p className="mt-6 leading-8 text-blue-100">
                Instead of relying on static security rules,
                FraudShield AI evaluates every transaction using
                behavioral analytics, machine learning, device
                intelligence, transaction history, and contextual
                information before making an approval decision.
              </p>

            </div>

            <div className="space-y-5">

              <div className="rounded-2xl bg-white/10 p-5">
                ✅ Low Risk → Transaction Approved
              </div>

              <div className="rounded-2xl bg-white/10 p-5">
                ⚠ Medium Risk → Additional Authentication Required
              </div>

              <div className="rounded-2xl bg-white/10 p-5">
                🚫 High Risk → Transaction Blocked & Security Alert Generated
              </div>

            </div>

          </div>

        </div>

      </div>

    </section>
  );
}