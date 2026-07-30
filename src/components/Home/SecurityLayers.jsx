import {
  Shield,
  Fingerprint,
  Smartphone,
  MapPinned,
  BrainCircuit,
  Lock,
  BellRing,
  Database,
} from "lucide-react";

export default function SecurityLayers() {
  const layers = [
    {
      icon: <Fingerprint size={34} />,
      title: "Behavioral Biometrics",
      description:
        "Learns how customers normally interact with the platform, including typing speed, transaction habits, login frequency, and spending behavior.",
    },
    {
      icon: <Smartphone size={34} />,
      title: "Device Intelligence",
      description:
        "Verifies trusted devices, detects unfamiliar devices, emulator usage, and suspicious device changes before approving payments.",
    },
    {
      icon: <MapPinned size={34} />,
      title: "Location Verification",
      description:
        "Compares the user's current location with historical activity to identify impossible travel and abnormal transaction locations.",
    },
    {
      icon: <BrainCircuit size={34} />,
      title: "Artificial Intelligence",
      description:
        "Evaluates hundreds of transaction indicators simultaneously to calculate fraud probability in real time.",
    },
    {
      icon: <Database size={34} />,
      title: "Historical Analysis",
      description:
        "Analyzes previous transactions to distinguish legitimate customer behavior from emerging fraud patterns.",
    },
    {
      icon: <Lock size={34} />,
      title: "Adaptive Authentication",
      description:
        "Requests additional verification only for medium- and high-risk transactions, reducing unnecessary friction for trusted users.",
    },
    {
      icon: <BellRing size={34} />,
      title: "Real-Time Alerts",
      description:
        "Immediately notifies customers and security teams whenever suspicious activity is detected.",
    },
    {
      icon: <Shield size={34} />,
      title: "Decision Engine",
      description:
        "Automatically approves, challenges, or blocks transactions based on the calculated AI risk score.",
    },
  ];

  return (
    <section className="relative py-28 bg-gradient-to-b from-slate-50 to-white overflow-hidden">

      {/* Background */}

      <div className="absolute -left-24 top-0 w-96 h-96 rounded-full bg-blue-100 blur-3xl opacity-50"></div>

      <div className="absolute right-0 bottom-0 w-[32rem] h-[32rem] rounded-full bg-cyan-100 blur-3xl opacity-40"></div>

      <div className="relative max-w-7xl mx-auto px-6">

        {/* Heading */}

        <div className="max-w-3xl mx-auto text-center">

          <span className="inline-flex items-center gap-2 rounded-full bg-blue-100 px-5 py-2 text-sm font-semibold text-blue-700">
            <Shield size={18} />
            Multi-Layer Security
          </span>

          <h2 className="mt-6 text-4xl md:text-5xl font-bold text-slate-900">
            Multiple Security Layers Working
            <span className="text-blue-600"> Together</span>
          </h2>

          <p className="mt-6 text-lg leading-8 text-slate-600">
            Rybon protects every transaction using multiple
            intelligent security layers. Instead of relying on a single
            rule, the framework combines AI, behavioral analytics,
            contextual intelligence, and adaptive authentication to stop
            fraud before it happens.
          </p>

        </div>

        {/* Cards */}

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4 mt-20">

          {layers.map((layer) => (

            <div
              key={layer.title}
              className="group rounded-3xl bg-white border border-slate-200 p-8 shadow-lg hover:shadow-2xl hover:-translate-y-3 transition duration-300"
            >

              <div className="flex items-center justify-center w-16 h-16 rounded-2xl bg-blue-100 text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition">

                {layer.icon}

              </div>

              <h3 className="mt-6 text-xl font-bold text-slate-900">

                {layer.title}

              </h3>

              <p className="mt-4 leading-7 text-slate-600">

                {layer.description}

              </p>

            </div>

          ))}

        </div>

        {/* Bottom Banner */}

        <div className="mt-24 rounded-3xl bg-slate-900 p-12 text-white shadow-2xl">

          <div className="grid lg:grid-cols-2 gap-12 items-center">

            <div>

              <h3 className="text-4xl font-bold">
                Defense in Depth
              </h3>

              <p className="mt-6 text-slate-300 leading-8">
                Every payment passes through several independent security
                checks. Even if one layer cannot identify suspicious
                activity, the remaining layers continue evaluating the
                transaction until the safest decision is reached.
              </p>

            </div>

            <div className="space-y-5">

              <div className="flex justify-between items-center rounded-2xl bg-slate-800 p-5">
                <span>Behavior Analysis</span>
                <span className="text-green-400 font-bold">✓</span>
              </div>

              <div className="flex justify-between items-center rounded-2xl bg-slate-800 p-5">
                <span>Device Verification</span>
                <span className="text-green-400 font-bold">✓</span>
              </div>

              <div className="flex justify-between items-center rounded-2xl bg-slate-800 p-5">
                <span>Location Intelligence</span>
                <span className="text-green-400 font-bold">✓</span>
              </div>

              <div className="flex justify-between items-center rounded-2xl bg-slate-800 p-5">
                <span>AI Risk Scoring</span>
                <span className="text-green-400 font-bold">✓</span>
              </div>

              <div className="flex justify-between items-center rounded-2xl bg-slate-800 p-5">
                <span>Adaptive Authentication</span>
                <span className="text-green-400 font-bold">✓</span>
              </div>

              <div className="flex justify-between items-center rounded-2xl bg-slate-800 p-5">
                <span>Final Decision Engine</span>
                <span className="text-green-400 font-bold">✓</span>
              </div>

            </div>

          </div>

        </div>

      </div>

    </section>
  );
}