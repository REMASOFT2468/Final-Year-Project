import {
  BrainCircuit,
  ShieldCheck,
  Activity,
  Fingerprint,
  MapPinned,
  BellRing,
  Database,
  BarChart3,
} from "lucide-react";

export default function Features() {
  const features = [
    {
      icon: <BrainCircuit size={34} />,
      title: "Artificial Intelligence Engine",
      description:
        "Analyzes transaction patterns using intelligent algorithms to identify suspicious activities before financial losses occur.",
    },
    {
      icon: <ShieldCheck size={34} />,
      title: "Adaptive Risk Scoring",
      description:
        "Generates a real-time fraud risk score for every transaction by combining behavioral, contextual, and historical data.",
    },
    {
      icon: <Activity size={34} />,
      title: "Real-Time Monitoring",
      description:
        "Continuously monitors every transaction and instantly detects abnormal activities across payment channels.",
    },
    {
      icon: <Fingerprint size={34} />,
      title: "Behavioral Biometrics",
      description:
        "Builds digital behavioral profiles based on user habits, login frequency, spending behavior, and interaction patterns.",
    },
    {
      icon: <MapPinned size={34} />,
      title: "Location Intelligence",
      description:
        "Evaluates transaction locations against previous user activity to identify impossible travel and unusual geographic behavior.",
    },
    {
      icon: <BellRing size={34} />,
      title: "Smart Security Alerts",
      description:
        "Automatically triggers alerts and recommends additional verification whenever suspicious activity is detected.",
    },
    {
      icon: <Database size={34} />,
      title: "Historical Pattern Analysis",
      description:
        "Uses previous transaction history to recognize trusted behaviors while detecting new and emerging fraud techniques.",
    },
    {
      icon: <BarChart3 size={34} />,
      title: "Executive Dashboard",
      description:
        "Provides security teams with live analytics, fraud statistics, transaction insights, and system performance metrics.",
    },
  ];

  return (
    <section className="relative py-28 bg-slate-50 overflow-hidden">

      {/* Background */}

      <div className="absolute -left-32 top-20 w-96 h-96 bg-blue-200/30 rounded-full blur-3xl"></div>

      <div className="absolute -right-32 bottom-0 w-[30rem] h-[30rem] bg-cyan-200/30 rounded-full blur-3xl"></div>

      <div className="relative max-w-7xl mx-auto px-6">

        {/* Heading */}

        <div className="max-w-3xl mx-auto text-center">

          <span className="inline-flex items-center rounded-full bg-blue-100 px-5 py-2 text-sm font-semibold text-blue-700">
            Core Capabilities
          </span>

          <h2 className="mt-6 text-4xl md:text-5xl font-bold text-slate-900 leading-tight">
            Powerful Features Built for
            <span className="text-blue-600">
              {" "}Modern Fraud Prevention
            </span>
          </h2>

          <p className="mt-6 text-lg leading-8 text-slate-600">
           Rybon combines artificial intelligence, behavioral
            analytics, contextual intelligence, and continuous monitoring
            into a unified fraud detection framework that protects digital
            payment platforms against evolving cyber threats.
          </p>

        </div>

        {/* Feature Cards */}

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4 mt-20">

          {features.map((feature) => (

            <div
              key={feature.title}
              className="group rounded-3xl bg-white border border-slate-200 p-8 shadow-lg transition-all duration-300 hover:-translate-y-3 hover:shadow-2xl"
            >

              <div className="flex items-center justify-center w-16 h-16 rounded-2xl bg-blue-100 text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition">

                {feature.icon}

              </div>

              <h3 className="mt-6 text-xl font-bold text-slate-900">

                {feature.title}

              </h3>

              <p className="mt-4 leading-7 text-slate-600">

                {feature.description}

              </p>

            </div>

          ))}

        </div>

        {/* Bottom Section */}

        <div className="mt-24 rounded-3xl bg-slate-900 p-12 text-white shadow-2xl">

          <div className="grid lg:grid-cols-2 gap-12 items-center">

            <div>

              <span className="inline-block rounded-full bg-blue-600 px-4 py-2 text-sm font-semibold">
                Enterprise Security
              </span>

              <h3 className="mt-6 text-4xl font-bold">
                Built for Banks, Fintech Companies and Payment Platforms
              </h3>

              <p className="mt-6 leading-8 text-slate-300">
                The framework integrates multiple intelligent security
                layers to deliver proactive fraud prevention instead of
                reactive fraud investigation. Every transaction is
                evaluated using AI-driven decision making before it is
                approved.
              </p>

            </div>

            <div className="grid grid-cols-2 gap-6">

              <div className="rounded-2xl bg-slate-800 p-6">

                <h4 className="text-5xl font-bold text-blue-400">
                  AI
                </h4>

                <p className="mt-3 text-slate-300">
                  Intelligent Decision Engine
                </p>

              </div>

              <div className="rounded-2xl bg-slate-800 p-6">

                <h4 className="text-5xl font-bold text-green-400">
                  ML
                </h4>

                <p className="mt-3 text-slate-300">
                  Adaptive Learning Models
                </p>

              </div>

              <div className="rounded-2xl bg-slate-800 p-6">

                <h4 className="text-5xl font-bold text-cyan-400">
                  24/7
                </h4>

                <p className="mt-3 text-slate-300">
                  Continuous Protection
                </p>

              </div>

              <div className="rounded-2xl bg-slate-800 p-6">

                <h4 className="text-5xl font-bold text-red-400">
                  99.8%
                </h4>

                <p className="mt-3 text-slate-300">
                  Detection Accuracy
                </p>

              </div>

            </div>

          </div>

        </div>

      </div>

    </section>
  );
}