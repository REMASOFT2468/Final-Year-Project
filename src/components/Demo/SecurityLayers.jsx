import {
  ShieldCheck,
  Users,
  Smartphone,
  BrainCircuit,
  Fingerprint,
  Lock,
  Bell,
  Eye,
  ArrowRight,
  CheckCircle2,
} from "lucide-react";

export default function SecurityLayers() {
  const layers = [
    {
      icon: <BrainCircuit size={34} />,
      title: "AI Behavioural Analysis",
      subtitle: "First Security Layer",
      color: "bg-blue-600",
      description:
        "Every transaction is analysed using artificial intelligence, behavioural analytics, transaction history, device intelligence, spending patterns, and contextual information before a decision is made.",
    },
    {
      icon: <Fingerprint size={34} />,
      title: "Adaptive Identity Test",
      subtitle: "AI Behavioural Challenge",
      color: "bg-purple-600",
      description:
        "Instead of asking every customer for the same verification, FraudShield AI dynamically generates personalised identity challenges based on normal customer behaviour. Genuine users answer naturally while fraudsters struggle to respond correctly.",
    },
    {
      icon: <Smartphone size={34} />,
      title: "Dual Device Confirmation",
      subtitle: "New Security Feature",
      color: "bg-cyan-600",
      description:
        "When a high-risk transaction is detected, approval is required from the customer's second trusted device before payment is completed. Even if an attacker controls one device, the transaction cannot proceed without the second approval.",
    },
    {
      icon: <Users size={34} />,
      title: "Trusted Circle Approval",
      subtitle: "Innovative Protection",
      color: "bg-green-600",
      description:
        "Customers can nominate trusted family members or trusted contacts. If FraudShield AI detects an unusually high-risk transaction, a secure approval request is sent to one or more trusted contacts before funds are released.",
    },
    {
      icon: <Bell size={34} />,
      title: "Real-Time Fraud Alerts",
      subtitle: "Continuous Monitoring",
      color: "bg-orange-500",
      description:
        "Instant notifications are sent whenever suspicious activities are detected, allowing customers and security teams to respond immediately before financial loss occurs.",
    },
    {
      icon: <Lock size={34} />,
      title: "Decision Engine",
      subtitle: "Final Protection",
      color: "bg-red-600",
      description:
        "Based on the calculated fraud probability, the framework automatically approves legitimate transactions, requests additional verification for suspicious ones, or blocks confirmed fraud attempts.",
    },
  ];

  return (
    <section className="py-28 bg-slate-950">

      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}

        <div className="max-w-4xl mx-auto text-center">

          <span className="inline-flex items-center gap-2 rounded-full bg-blue-600/10 px-5 py-2 text-blue-400 font-semibold">

            <ShieldCheck size={18} />

            Multi-Layer Security Architecture

          </span>

          <h2 className="mt-6 text-5xl font-bold text-white">

            Advanced Security Layers

          </h2>

          <p className="mt-6 text-lg leading-8 text-slate-300">

            FraudShield AI protects every online payment using multiple
            intelligent security layers. Instead of relying on passwords
            or OTP verification alone, the framework continuously analyses
            customer behaviour, device trust, contextual information and
            adaptive authentication before money leaves the account.

          </p>

        </div>

        {/* Security Cards */}

        <div className="grid lg:grid-cols-2 gap-8 mt-20">

          {layers.map((layer) => (

            <div
              key={layer.title}
              className="rounded-3xl border border-white/10 bg-white/5 backdrop-blur-md p-8 transition duration-300 hover:border-blue-500 hover:-translate-y-2"
            >

              <div
                className={`w-16 h-16 rounded-2xl ${layer.color} flex items-center justify-center text-white`}
              >
                {layer.icon}
              </div>

              <p className="mt-5 text-sm uppercase tracking-wider text-blue-400">

                {layer.subtitle}

              </p>

              <h3 className="mt-2 text-3xl font-bold text-white">

                {layer.title}

              </h3>

              <p className="mt-6 leading-8 text-slate-300">

                {layer.description}

              </p>

            </div>

          ))}

        </div>

        {/* Innovative Features */}

        <div className="mt-24 rounded-3xl bg-gradient-to-r from-blue-600 to-cyan-600 p-12 shadow-2xl">

          <h3 className="text-center text-4xl font-bold text-white">

            Innovative Security Features Proposed by FraudShield AI

          </h3>

          <div className="grid md:grid-cols-3 gap-8 mt-12">

            <div className="rounded-2xl bg-white p-8">

              <Users className="text-blue-600" size={42} />

              <h4 className="mt-5 text-2xl font-bold">

                Trusted Circle Approval

              </h4>

              <p className="mt-4 text-slate-600 leading-7">

                High-value transactions require approval from trusted
                contacts chosen by the customer before payment is released.

              </p>

            </div>

            <div className="rounded-2xl bg-white p-8">

              <Smartphone className="text-cyan-600" size={42} />

              <h4 className="mt-5 text-2xl font-bold">

                Dual Device Confirmation

              </h4>

              <p className="mt-4 text-slate-600 leading-7">

                Transactions can only be completed after confirmation from
                a second trusted device owned by the customer.

              </p>

            </div>

            <div className="rounded-2xl bg-white p-8">

              <BrainCircuit className="text-purple-600" size={42} />

              <h4 className="mt-5 text-2xl font-bold">

                Adaptive Identity Test

              </h4>

              <p className="mt-4 text-slate-600 leading-7">

                AI creates personalised identity questions based on
                customer behaviour instead of using static verification
                methods.

              </p>

            </div>

          </div>

        </div>

        {/* Decision Flow */}

        <div className="mt-24 flex flex-wrap items-center justify-center gap-4">

          {[
            "Transaction",
            "AI Analysis",
            "Risk Score",
            "Security Layers",
            "Approve / Verify / Block",
          ].map((step, index) => (

            <div
              key={step}
              className="flex items-center"
            >

              <div className="rounded-2xl bg-white px-6 py-4 font-bold text-slate-900">

                {step}

              </div>

              {index !== 4 && (

                <ArrowRight
                  className="mx-3 text-blue-400"
                />

              )}

            </div>

          ))}

        </div>

        {/* Bottom Statistics */}

        <div className="grid md:grid-cols-4 gap-8 mt-20">

          <div className="rounded-3xl bg-white/5 border border-white/10 p-8 text-center">

            <h3 className="text-5xl font-bold text-blue-400">
              6
            </h3>

            <p className="mt-3 text-slate-300">
              Security Layers
            </p>

          </div>

          <div className="rounded-3xl bg-white/5 border border-white/10 p-8 text-center">

            <h3 className="text-5xl font-bold text-green-400">
              99.8%
            </h3>

            <p className="mt-3 text-slate-300">
              Detection Accuracy
            </p>

          </div>

          <div className="rounded-3xl bg-white/5 border border-white/10 p-8 text-center">

            <h3 className="text-5xl font-bold text-cyan-400">
              24/7
            </h3>

            <p className="mt-3 text-slate-300">
              Continuous Monitoring
            </p>

          </div>

          <div className="rounded-3xl bg-white/5 border border-white/10 p-8 text-center">

            <h3 className="text-5xl font-bold text-orange-400">
              AI
            </h3>

            <p className="mt-3 text-slate-300">
              Adaptive Authentication
            </p>

          </div>

        </div>

      </div>

    </section>
  );
}