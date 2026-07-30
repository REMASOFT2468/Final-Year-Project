import {
  ArrowRight,
  CreditCard,
  Database,
  BrainCircuit,
  Activity,
  ShieldCheck,
  CheckCircle2,
  XCircle,
  RefreshCcw,
  Users,
} from "lucide-react";

export default function SystemWorkflow() {
  const workflowSteps = [
    {
      icon: <CreditCard size={30} />,
      title: "1. Transaction Initiated",
      color: "bg-blue-600",
      description:
        "A customer initiates an online payment through a banking application, fintech platform, e-commerce website, or mobile wallet.",
    },
    {
      icon: <Database size={30} />,
      title: "2. Data Collection",
      color: "bg-cyan-600",
      description:
        "Rybon securely collects transaction amount, device fingerprint, IP address, geolocation, transaction history, behavioural patterns, login history, and contextual information.",
    },
    {
      icon: <BrainCircuit size={30} />,
      title: "3. AI Behaviour Analysis",
      color: "bg-purple-600",
      description:
        "Artificial Intelligence compares the current transaction with historical user behaviour to identify anomalies, suspicious patterns, unusual spending habits, or abnormal login activities.",
    },
    {
      icon: <Activity size={30} />,
      title: "4. Dynamic Risk Scoring",
      color: "bg-orange-500",
      description:
        "The framework calculates a real-time fraud probability score using behavioural analytics, contextual analysis, device intelligence, transaction velocity, and multiple weighted risk factors.",
    },
    {
      icon: <ShieldCheck size={30} />,
      title: "5. Security Validation",
      color: "bg-green-600",
      description:
        "When medium or high risk is detected, additional protection mechanisms such as Trusted Circle Approval, Dual Device Confirmation, AI Behavioural Challenge, and biometric verification are activated.",
    },
    {
      icon: <RefreshCcw size={30} />,
      title: "6. Continuous Learning",
      color: "bg-red-600",
      description:
        "Every completed transaction is stored for future behavioural learning, enabling Rybon to improve its detection accuracy over time.",
    },
  ];

  return (
    <section className="relative overflow-hidden bg-slate-950 py-28">

      {/* Background Effects */}

      <div className="absolute -left-40 top-0 h-[30rem] w-[30rem] rounded-full bg-blue-600/20 blur-3xl"></div>

      <div className="absolute right-0 bottom-0 h-[30rem] w-[30rem] rounded-full bg-cyan-500/10 blur-3xl"></div>

      <div className="relative max-w-7xl mx-auto px-6">

        {/* Heading */}

        <div className="max-w-4xl mx-auto text-center">

          <span className="inline-flex items-center gap-2 rounded-full border border-blue-500/30 bg-blue-500/10 px-5 py-2 text-sm font-semibold text-blue-300">

            <RefreshCcw size={18} />

            System Workflow

          </span>

          <h2 className="mt-6 text-5xl font-bold text-white">

            End-to-End Fraud Detection Workflow

          </h2>

          <p className="mt-8 text-lg leading-8 text-slate-300">

            Every online payment is analysed through an intelligent,
            multi-stage workflow before authorization. Rybon
            evaluates behavioural patterns, contextual information,
            device intelligence, and dynamic risk factors to ensure
            secure and reliable payment processing.

          </p>

        </div>

        {/* Workflow Flow */}

        <div className="mt-20 overflow-x-auto">

          <div className="flex min-w-max items-center justify-center gap-4">

            {[
              "Payment",
              "Data",
              "AI",
              "Risk",
              "Security",
              "Decision",
              "Learning",
            ].map((step, index) => (
              <div key={step} className="flex items-center">

                <div className="rounded-2xl border border-blue-500/20 bg-white/5 px-6 py-5 text-center font-semibold text-white backdrop-blur-sm min-w-[150px]">

                  {step}

                </div>

                {index !== 6 && (

                  <ArrowRight
                    className="mx-4 text-blue-400"
                    size={26}
                  />

                )}

              </div>
            ))}

          </div>

        </div>

        {/* Workflow Cards */}

        <div className="mt-24 grid gap-8 lg:grid-cols-2">

          {workflowSteps.map((step) => (

            <div
              key={step.title}
              className="rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-md transition duration-300 hover:-translate-y-2 hover:border-blue-500"
            >

              <div className={`flex h-16 w-16 items-center justify-center rounded-2xl text-white ${step.color}`}>

                {step.icon}

              </div>

              <h3 className="mt-6 text-2xl font-bold text-white">

                {step.title}

              </h3>

              <p className="mt-5 leading-8 text-slate-300">

                {step.description}

              </p>

            </div>

          ))}

        </div>

        {/* AI Decision Engine */}

        <div className="mt-24 rounded-3xl bg-gradient-to-r from-blue-600 to-cyan-600 p-12 shadow-2xl">

          <h3 className="text-center text-4xl font-bold text-white">

            AI Decision Engine

          </h3>

          <p className="mx-auto mt-6 max-w-4xl text-center text-lg leading-8 text-blue-100">

            After analysing every transaction, Rybon assigns a
            dynamic fraud risk score and automatically determines the
            most appropriate security response.

          </p>

          <div className="mt-12 grid gap-8 md:grid-cols-3">

            <div className="rounded-3xl bg-white/10 p-8 text-center backdrop-blur-sm">

              <CheckCircle2
                className="mx-auto text-green-300"
                size={50}
              />

              <h4 className="mt-5 text-2xl font-bold text-white">

                Low Risk

              </h4>

              <p className="mt-4 leading-7 text-blue-100">

                Transaction is automatically approved without
                interrupting the customer's payment experience.

              </p>

            </div>

            <div className="rounded-3xl bg-white/10 p-8 text-center backdrop-blur-sm">

              <Users
                className="mx-auto text-yellow-300"
                size={50}
              />

              <h4 className="mt-5 text-2xl font-bold text-white">

                Medium Risk

              </h4>

              <p className="mt-4 leading-7 text-blue-100">

                Trusted Circle Approval, Dual Device Confirmation,
                or AI Behavioural Challenge is requested before
                payment authorization.

              </p>

            </div>

            <div className="rounded-3xl bg-white/10 p-8 text-center backdrop-blur-sm">

              <XCircle
                className="mx-auto text-red-300"
                size={50}
              />

              <h4 className="mt-5 text-2xl font-bold text-white">

                High Risk

              </h4>

              <p className="mt-4 leading-7 text-blue-100">

                The transaction is blocked immediately, security
                alerts are generated, and the attempted fraud is
                recorded for future AI learning.

              </p>

            </div>

          </div>

        </div>

        {/* Bottom Summary */}

        <div className="mt-24 grid gap-8 md:grid-cols-4">

          <div className="rounded-3xl border border-slate-800 bg-slate-900 p-8 text-center">

            <h3 className="text-5xl font-bold text-blue-400">

              6

            </h3>

            <p className="mt-3 text-slate-400">

              Workflow Stages

            </p>

          </div>

          <div className="rounded-3xl border border-slate-800 bg-slate-900 p-8 text-center">

            <h3 className="text-5xl font-bold text-purple-400">

              AI

            </h3>

            <p className="mt-3 text-slate-400">

              Behaviour Analysis

            </p>

          </div>

          <div className="rounded-3xl border border-slate-800 bg-slate-900 p-8 text-center">

            <h3 className="text-5xl font-bold text-green-400">

              {"<"}1s

            </h3>

            <p className="mt-3 text-slate-400">

              Decision Time

            </p>

          </div>

          <div className="rounded-3xl border border-slate-800 bg-slate-900 p-8 text-center">

            <h3 className="text-5xl font-bold text-cyan-400">

              24/7

            </h3>

            <p className="mt-3 text-slate-400">

              Continuous Monitoring

            </p>

          </div>

        </div>

      </div>

    </section>
  );
}