import {
  ShieldCheck,
  BrainCircuit,
  Activity,
  ScanSearch,
  Clock3,
  Lock,
} from "lucide-react";

export default function WhyChooseUs() {
  const features = [
    {
      icon: <BrainCircuit size={34} />,
      title: "AI-Powered Decision Engine",
      description:
        "Leverages intelligent algorithms to evaluate every transaction based on behavioral patterns, transaction history, and contextual risk factors.",
    },
    {
      icon: <Activity size={34} />,
      title: "Real-Time Fraud Detection",
      description:
        "Continuously monitors every transaction and identifies suspicious activities before unauthorized payments are completed.",
    },
    {
      icon: <ScanSearch size={34} />,
      title: "Behavioral Analytics",
      description:
        "Builds dynamic user behavior profiles to detect unusual login attempts, spending habits, device changes, and location anomalies.",
    },
    {
      icon: <ShieldCheck size={34} />,
      title: "Adaptive Risk Scoring",
      description:
        "Calculates a live fraud risk score using multiple security indicators instead of relying solely on predefined rules.",
    },
    {
      icon: <Clock3 size={34} />,
      title: "Continuous Monitoring",
      description:
        "Provides 24/7 surveillance of payment activities, ensuring threats are detected instantly as they emerge.",
    },
    {
      icon: <Lock size={34} />,
      title: "Multi-Layer Security",
      description:
        "Combines device intelligence, geolocation verification, behavioral analysis, and machine learning into a unified security framework.",
    },
  ];

  return (
    <section className="relative py-10 bg-white overflow-hidden">

      {/* Background Decorations */}

      <div className="absolute -top-40 right-0 w-[30rem] h-[30rem] bg-blue-100 rounded-full blur-3xl opacity-40"></div>

      <div className="absolute bottom-0 left-0 w-[24rem] h-[24rem] bg-cyan-100 rounded-full blur-3xl opacity-40"></div>

      <div className="relative max-w-7xl mx-auto px-6">

        {/* Heading */}

        <div className="text-center max-w-3xl mx-auto">

          <span className="inline-flex items-center px-5 py-2 rounded-full bg-blue-100 text-blue-700 font-semibold text-sm">
            Why Choose FraudShield AI
          </span>

          <h2 className="mt-6 text-4xl md:text-5xl font-bold text-slate-900 leading-tight">
            Intelligent Security Designed
            <span className="text-blue-600"> for Modern Payment Platforms</span>
          </h2>

          <p className="mt-6 text-lg text-slate-600 leading-8">
            FraudShield AI combines artificial intelligence, behavioral
            analytics, adaptive risk scoring, and continuous monitoring
            into a single intelligent framework that helps financial
            institutions prevent fraud before financial losses occur.
          </p>

        </div>

        {/* Cards */}

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-20">

          {features.map((feature) => (

            <div
              key={feature.title}
              className="group rounded-3xl border border-slate-200 bg-white p-8 shadow-lg hover:shadow-2xl hover:-translate-y-3 transition-all duration-300"
            >

              <div className="w-16 h-16 rounded-2xl bg-blue-100 text-blue-600 flex items-center justify-center group-hover:bg-blue-600 group-hover:text-white transition">

                {feature.icon}

              </div>

              <h3 className="mt-6 text-2xl font-bold text-slate-900">

                {feature.title}

              </h3>

              <p className="mt-4 text-slate-600 leading-8">

                {feature.description}

              </p>

            </div>

          ))}

        </div>

        {/* Bottom Highlight */}

        

      </div>
    </section>
  );
}