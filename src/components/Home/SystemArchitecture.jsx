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
    <section className="relative overflow-hidden pb-10">
      {/* Background */}

      <div className="relative mx-auto max-w-7xl px-6">

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
      </div>
    </section>
  );
}