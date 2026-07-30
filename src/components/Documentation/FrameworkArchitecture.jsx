import {
  Database,
  BrainCircuit,
  ShieldCheck,
  Activity,
  Bell,
  Server,
  ArrowRight,
  Network,
} from "lucide-react";

export default function FrameworkArchitecture() {
  const layers = [
    {
      icon: <Server size={30} />,
      title: "1. User & Payment Platform",
      description:
        "Customers initiate online payments through banking applications, fintech platforms, mobile wallets, or e-commerce payment gateways. Every transaction request enters the Rybon framework before payment authorization.",
      color: "bg-blue-600",
    },
    {
      icon: <Database size={30} />,
      title: "2. Intelligent Data Collection",
      description:
        "The framework securely gathers transaction amount, payment method, device fingerprint, IP address, geolocation, login history, behavioural patterns, and previous transaction records to establish a complete transaction context.",
      color: "bg-cyan-600",
    },
    {
      icon: <BrainCircuit size={30} />,
      title: "3. AI Analysis Engine",
      description:
        "Artificial Intelligence analyses user behaviour, spending habits, transaction frequency, velocity patterns, device trust, location consistency, and contextual information to identify suspicious activities before payment completion.",
      color: "bg-purple-600",
    },
    {
      icon: <Activity size={30} />,
      title: "4. Dynamic Risk Scoring",
      description:
        "A dynamic fraud risk score is calculated by combining multiple weighted factors. The higher the calculated score, the greater the probability that the transaction is fraudulent.",
      color: "bg-orange-500",
    },
    {
      icon: <ShieldCheck size={30} />,
      title: "5. Multi-Layer Security Engine",
      description:
        "High-risk transactions activate intelligent protection mechanisms including Trusted Circle Approval, Dual Device Confirmation, AI Behavioural Challenge (Adaptive Identity Test), biometric verification, and real-time fraud monitoring.",
      color: "bg-green-600",
    },
    {
      icon: <Bell size={30} />,
      title: "6. Decision & Monitoring",
      description:
        "The framework automatically approves legitimate transactions, requests additional verification for suspicious activities, or blocks confirmed fraud attempts while continuously learning from new transaction data.",
      color: "bg-red-600",
    },
  ];

  return (
    <section className="relative overflow-hidden bg-slate-950 py-28">

      {/* Background */}

      <div className="absolute -left-40 top-0 h-[28rem] w-[28rem] rounded-full bg-blue-600/20 blur-3xl"></div>

      <div className="absolute bottom-0 right-0 h-[30rem] w-[30rem] rounded-full bg-cyan-500/10 blur-3xl"></div>

      <div className="relative max-w-7xl mx-auto px-6">

        {/* Heading */}

        <div className="max-w-4xl mx-auto text-center">

          <span className="inline-flex items-center gap-2 rounded-full border border-blue-500/30 bg-blue-500/10 px-5 py-2 text-sm font-semibold text-blue-300">

            <Network size={18} />

            Framework Architecture

          </span>

          <h2 className="mt-6 text-5xl font-bold text-white">

            RybonArchitecture

          </h2>

          <p className="mt-8 text-lg leading-8 text-slate-300">

            Rybonfollows a layered intelligent architecture that
            processes every online payment transaction through data
            collection, artificial intelligence, adaptive risk scoring,
            intelligent security mechanisms, automated decision making,
            and continuous learning. Each layer contributes to reducing
            fraud while maintaining a seamless user experience.

          </p>

        </div>

        {/* Workflow */}

        <div className="mt-20 overflow-x-auto">

          <div className="flex items-center justify-center gap-5 min-w-max">

            {[
              "Customer",
              "Payment Platform",
              "AI Analysis",
              "Risk Score",
              "Security",
              "Decision",
            ].map((step, index) => (
              <div
                key={step}
                className="flex items-center"
              >
                <div className="rounded-2xl border border-blue-500/20 bg-white/5 px-6 py-5 text-center text-white font-semibold backdrop-blur-sm min-w-[170px]">

                  {step}

                </div>

                {index !== 5 && (
                  <ArrowRight
                    className="mx-5 text-blue-400"
                    size={28}
                  />
                )}
              </div>
            ))}

          </div>

        </div>

        {/* Architecture Layers */}

        <div className="grid gap-8 mt-24 lg:grid-cols-2">

          {layers.map((layer) => (

            <div
              key={layer.title}
              className="rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-md transition duration-300 hover:-translate-y-2 hover:border-blue-500"
            >

              <div
                className={`flex h-16 w-16 items-center justify-center rounded-2xl text-white ${layer.color}`}
              >
                {layer.icon}
              </div>

              <h3 className="mt-6 text-2xl font-bold text-white">

                {layer.title}

              </h3>

              <p className="mt-5 leading-8 text-slate-300">

                {layer.description}

              </p>

            </div>

          ))}

        </div>

        {/* Intelligent Security */}

        <div className="mt-24 rounded-3xl bg-gradient-to-r from-blue-600 to-cyan-600 p-12 shadow-2xl">

          <h3 className="text-center text-4xl font-bold text-white">

            Intelligent Security Decision Flow

          </h3>

          <div className="mt-12 grid gap-6 md:grid-cols-3">

            <div className="rounded-2xl bg-white/10 p-8 text-center backdrop-blur-sm">

              <h4 className="text-2xl font-bold text-green-300">

                Low Risk

              </h4>

              <p className="mt-4 text-blue-100 leading-7">

                Legitimate behaviour is detected.
                Transaction is automatically approved without
                interrupting the customer experience.

              </p>

            </div>

            <div className="rounded-2xl bg-white/10 p-8 text-center backdrop-blur-sm">

              <h4 className="text-2xl font-bold text-yellow-300">

                Medium Risk

              </h4>

              <p className="mt-4 text-blue-100 leading-7">

                Additional verification such as Dual Device
                Confirmation or Trusted Circle Approval is
                requested before processing the payment.

              </p>

            </div>

            <div className="rounded-2xl bg-white/10 p-8 text-center backdrop-blur-sm">

              <h4 className="text-2xl font-bold text-red-300">

                High Risk

              </h4>

              <p className="mt-4 text-blue-100 leading-7">

                AI Behavioural Challenge, biometric verification,
                fraud alert generation, and automatic transaction
                blocking are triggered immediately.

              </p>

            </div>

          </div>

        </div>

        {/* Bottom Summary */}

        <div className="mt-24 grid gap-8 md:grid-cols-4">

          <div className="rounded-3xl bg-slate-900 border border-slate-800 p-8 text-center">

            <h3 className="text-5xl font-bold text-blue-400">

              6

            </h3>

            <p className="mt-3 text-slate-400">

              Architecture Layers

            </p>

          </div>

          <div className="rounded-3xl bg-slate-900 border border-slate-800 p-8 text-center">

            <h3 className="text-5xl font-bold text-cyan-400">

              AI

            </h3>

            <p className="mt-3 text-slate-400">

              Intelligent Analysis

            </p>

          </div>

          <div className="rounded-3xl bg-slate-900 border border-slate-800 p-8 text-center">

            <h3 className="text-5xl font-bold text-green-400">

              {"<"}1s

            </h3>

            <p className="mt-3 text-slate-400">

              Decision Time

            </p>

          </div>

          <div className="rounded-3xl bg-slate-900 border border-slate-800 p-8 text-center">

            <h3 className="text-5xl font-bold text-red-400">

              99.8%

            </h3>

            <p className="mt-3 text-slate-400">

              Detection Accuracy

            </p>

          </div>

        </div>

      </div>

    </section>
  );
}