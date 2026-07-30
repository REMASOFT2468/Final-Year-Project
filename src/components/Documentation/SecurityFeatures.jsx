import {
  ShieldCheck,
  Fingerprint,
  Smartphone,
  Users,
  BrainCircuit,
  ScanFace,
  Bell,
  Lock,
  Eye,
  CheckCircle2,
} from "lucide-react";

export default function SecurityFeatures() {
  const features = [
    {
      icon: <Users size={32} />,
      title: "Trusted Circle Approval",
      color: "bg-blue-600",
      badge: "Innovation",
      description:
        "When a transaction is classified as medium or high risk, Rybon can request approval from trusted family members or previously designated contacts before authorizing the payment. This introduces a human verification layer that significantly reduces account takeover fraud.",
    },
    {
      icon: <Smartphone size={32} />,
      title: "Dual Device Confirmation",
      color: "bg-green-600",
      badge: "Innovation",
      description:
        "Instead of relying on a single device, the framework sends a secure confirmation request to a previously trusted secondary device. Transactions are approved only after successful confirmation from both devices.",
    },
    {
      icon: <BrainCircuit size={32} />,
      title: "AI Behavioural Challenge",
      color: "bg-purple-600",
      badge: "Innovation",
      description:
        "Rather than using static security questions, the AI generates adaptive identity challenges based on the customer's historical behaviour, device usage, transaction habits, and personal interaction patterns.",
    },
    {
      icon: <Fingerprint size={32} />,
      title: "Biometric Verification",
      color: "bg-cyan-600",
      badge: "Authentication",
      description:
        "Supports fingerprint and facial recognition before sensitive transactions are completed, providing strong identity verification while maintaining user convenience.",
    },
    {
      icon: <Eye size={32} />,
      title: "Continuous Behaviour Monitoring",
      color: "bg-orange-500",
      badge: "AI Monitoring",
      description:
        "User activities are continuously analysed during every session. Suspicious behavioural deviations trigger additional security checks before funds leave the account.",
    },
    {
      icon: <Bell size={32} />,
      title: "Real-Time Fraud Alerts",
      color: "bg-red-600",
      badge: "Monitoring",
      description:
        "Customers and security teams receive instant notifications whenever suspicious activities or high-risk transactions are detected.",
    },
    {
      icon: <ScanFace size={32} />,
      title: "Adaptive Identity Verification",
      color: "bg-indigo-600",
      badge: "Security",
      description:
        "Rybon intelligently decides when additional verification is required based on transaction risk rather than requesting verification for every payment.",
    },
    {
      icon: <Lock size={32} />,
      title: "Dynamic Risk-Based Authentication",
      color: "bg-slate-700",
      badge: "Protection",
      description:
        "Authentication requirements automatically increase as transaction risk increases, providing stronger protection without negatively affecting normal customer experience.",
    },
  ];

  const levels = [
    {
      level: "Low Risk",
      action: "Automatically approve transaction",
      color: "text-green-500",
    },
    {
      level: "Medium Risk",
      action:
        "AI Behavioural Challenge + Dual Device Confirmation or Trusted Circle Approval",
      color: "text-yellow-500",
    },
    {
      level: "High Risk",
      action:
        "Block transaction immediately, notify security team, and lock transaction for investigation",
      color: "text-red-500",
    },
  ];

  return (
    <section className="bg-slate-50 py-28">
      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}

        <div className="max-w-4xl mx-auto text-center">

          <span className="inline-flex items-center gap-2 rounded-full bg-blue-100 px-5 py-2 text-sm font-semibold text-blue-700">

            <ShieldCheck size={18} />

            Security Features

          </span>

          <h2 className="mt-6 text-5xl font-bold text-slate-900">

            Multi-Layer Intelligent Security

          </h2>

          <p className="mt-8 text-lg leading-8 text-slate-600">

            Rybon combines artificial intelligence, behavioural
            analytics, adaptive authentication, and innovative security
            mechanisms to create multiple layers of protection for online
            payment platforms. Instead of depending on static rules, the
            framework dynamically adapts security based on transaction risk.

          </p>

        </div>

        {/* Feature Cards */}

        <div className="mt-20 grid gap-8 lg:grid-cols-2">

          {features.map((feature) => (

            <div
              key={feature.title}
              className="rounded-3xl bg-white border border-slate-200 p-8 shadow-lg transition duration-300 hover:-translate-y-2 hover:shadow-2xl"
            >

              <div className="flex items-center justify-between">

                <div className={`flex h-16 w-16 items-center justify-center rounded-2xl text-white ${feature.color}`}>

                  {feature.icon}

                </div>

                <span className="rounded-full bg-slate-100 px-4 py-2 text-sm font-semibold text-slate-700">

                  {feature.badge}

                </span>

              </div>

              <h3 className="mt-6 text-2xl font-bold text-slate-900">

                {feature.title}

              </h3>

              <p className="mt-5 leading-8 text-slate-600">

                {feature.description}

              </p>

            </div>

          ))}

        </div>

        {/* Security Response */}

        <div className="mt-24 rounded-3xl bg-gradient-to-r from-blue-600 to-cyan-600 p-12 shadow-2xl">

          <h3 className="text-center text-4xl font-bold text-white">

            Intelligent Security Response

          </h3>

          <p className="mx-auto mt-6 max-w-4xl text-center text-lg leading-8 text-blue-100">

            Rybon automatically selects the most appropriate
            security response according to the calculated fraud risk score,
            ensuring that customers experience minimal friction while
            maintaining maximum protection.

          </p>

          <div className="mt-12 grid gap-8 md:grid-cols-3">

            {levels.map((item) => (

              <div
                key={item.level}
                className="rounded-3xl bg-white/10 p-8 backdrop-blur-sm"
              >

                <CheckCircle2 className={`${item.color}`} size={42} />

                <h4 className="mt-5 text-2xl font-bold text-white">

                  {item.level}

                </h4>

                <p className="mt-6 leading-7 text-blue-100">

                  {item.action}

                </p>

              </div>

            ))}

          </div>

        </div>

        {/* Summary */}

        <div className="mt-24 rounded-3xl bg-slate-900 p-12 text-center">

          <ShieldCheck
            className="mx-auto text-blue-400"
            size={60}
          />

          <h3 className="mt-6 text-4xl font-bold text-white">

            Why Rybon Is Different

          </h3>

          <p className="mx-auto mt-6 max-w-5xl text-lg leading-8 text-slate-300">

            Traditional fraud detection systems primarily depend on
            predefined rules and one-time passwords. Rybon
            introduces adaptive intelligence through behavioural analysis,
            Trusted Circle Approval, Dual Device Confirmation, and AI
            Behavioural Challenges. These innovations create a flexible,
            risk-aware security framework capable of detecting evolving
            fraud techniques while reducing false positives and preserving
            a smooth user experience.

          </p>

        </div>

      </div>
    </section>
  );
}
