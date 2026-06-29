import {
  Network,
  BrainCircuit,
  Database,
  ShieldCheck,
  ArrowRight,
} from "lucide-react";

// Import your architecture image
import architecture from "../../assets/images/intelligent.png";

export default function SystemArchitecture() {
  const layers = [
    {
      icon: <Database size={28} />,
      title: "Data Collection Layer",
      description:
        "Collects transaction details, device information, IP address, geolocation, user behavior, and historical transaction records before analysis.",
    },
    {
      icon: <BrainCircuit size={28} />,
      title: "AI Analysis Engine",
      description:
        "Uses Machine Learning, Behavioral Analytics, Device Intelligence, and Contextual Analysis to calculate a dynamic fraud risk score.",
    },
    {
      icon: <ShieldCheck size={28} />,
      title: "Decision Engine",
      description:
        "Automatically approves, challenges, or blocks transactions based on the calculated fraud probability.",
    },
    {
      icon: <Network size={28} />,
      title: "Continuous Learning",
      description:
        "Learns from every transaction to improve future fraud detection accuracy and reduce false positives.",
    },
  ];

  return (
    <section className="relative overflow-hidden bg-slate-950 py-28">
      {/* Background */}
      <div className="absolute -top-32 -left-24 h-96 w-96 rounded-full bg-blue-500/20 blur-3xl"></div>
      <div className="absolute bottom-0 right-0 h-[30rem] w-[30rem] rounded-full bg-cyan-500/10 blur-3xl"></div>

      <div className="relative mx-auto max-w-7xl px-6">
        {/* Heading */}
        <div className="mx-auto max-w-4xl text-center">
          <span className="inline-flex items-center gap-2 rounded-full bg-blue-600/10 px-5 py-2 text-sm font-semibold text-blue-400">
            <Network size={18} />
            Intelligent Fraud Detection Framework
          </span>

          <h2 className="mt-6 text-4xl font-bold text-white md:text-5xl">
           Intelligent Fraud Detection Framework for
            <span className="text-blue-400">
              {" "}
              Real-Time Fraud Prevention
            </span>
          </h2>

          <p className="mt-6 text-lg leading-8 text-slate-300">
             The Intelligent Fraud Detection Framework is designed to monitor every
  online payment transaction in real time by collecting transaction,
  behavioral, and device data. It analyzes fraud risk using artificial
  intelligence and machine learning, then automatically approves,
  verifies, or blocks suspicious transactions before payment processing
  is completed.
          </p>
        </div>

        {/* Architecture Image */}
        <div className="mt-20">
          <div className="overflow-hidden rounded-3xl border border-slate-800 bg-slate-900 shadow-2xl">
            <img
              src={architecture}
              alt="FraudShield AI System Architecture"
              className="w-full object-cover"
            />
          </div>
        </div>

        {/* Architecture Layers */}
        <div className="mt-20 grid gap-8 md:grid-cols-2">
          {layers.map((layer) => (
            <div
              key={layer.title}
              className="rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-md transition duration-300 hover:-translate-y-2 hover:border-blue-500"
            >
              <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-blue-600 text-white">
                {layer.icon}
              </div>

              <h3 className="mt-6 text-2xl font-bold text-white">
                {layer.title}
              </h3>

              <p className="mt-4 leading-8 text-slate-300">
                {layer.description}
              </p>
            </div>
          ))}
        </div>

        {/* Workflow */}
        <div className="mt-24 rounded-3xl bg-gradient-to-r from-blue-600 to-cyan-600 p-12 shadow-2xl">
          <h3 className="text-center text-4xl font-bold text-white">
            Transaction Processing Workflow
          </h3>

          <div className="mt-12 flex flex-wrap items-center justify-center gap-4">
            {[
              "User",
              "Payment Platform",
              "Data Collection",
              "AI Analysis",
              "Risk Scoring",
              "Decision Engine",
              "Approve / Verify / Block",
            ].map((item, index, array) => (
              <div key={item} className="flex items-center">
                <div className="rounded-2xl bg-white/10 px-6 py-4 font-semibold text-white">
                  {item}
                </div>

                {index < array.length - 1 && (
                  <ArrowRight className="mx-4 text-white" size={24} />
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Statistics */}
        <div className="mt-20 grid gap-8 md:grid-cols-4">
          <div className="rounded-3xl border border-slate-800 bg-slate-900 p-8 text-center">
            <h3 className="text-5xl font-bold text-blue-400">AI</h3>
            <p className="mt-3 text-slate-300">
              Intelligent Analysis Engine
            </p>
          </div>

          <div className="rounded-3xl border border-slate-800 bg-slate-900 p-8 text-center">
            <h3 className="text-5xl font-bold text-green-400">24/7</h3>
            <p className="mt-3 text-slate-300">
              Continuous Monitoring
            </p>
          </div>

          <div className="rounded-3xl border border-slate-800 bg-slate-900 p-8 text-center">
            <h3 className="text-5xl font-bold text-cyan-400">&lt;1s</h3>
            <p className="mt-3 text-slate-300">
              Decision Time
            </p>
          </div>

          <div className="rounded-3xl border border-slate-800 bg-slate-900 p-8 text-center">
            <h3 className="text-5xl font-bold text-red-400">99.8%</h3>
            <p className="mt-3 text-slate-300">
              Fraud Detection Accuracy
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}