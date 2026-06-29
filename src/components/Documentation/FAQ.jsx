import { HelpCircle, ShieldCheck, BrainCircuit, Lock, Database, Cpu } from "lucide-react";

const faqs = [
  {
    icon: <BrainCircuit size={22} />,
    question: "What is the purpose of this intelligent fraud detection framework?",
    answer:
      "The framework is designed to detect fraudulent online payment transactions before financial losses occur. It combines artificial intelligence, behavioral analytics, machine learning, device intelligence, and risk scoring to identify suspicious activities in real time while minimizing false positives."
  },
  {
    icon: <ShieldCheck size={22} />,
    question: "How does the framework detect fraudulent transactions?",
    answer:
      "Every transaction is analyzed using multiple security indicators including transaction amount, user behavior, login patterns, device fingerprint, geolocation, transaction history, velocity checks, and contextual risk factors. These indicators are processed to generate a dynamic fraud risk score."
  },
  {
    icon: <Cpu size={22} />,
    question: "Why is Artificial Intelligence used instead of traditional rule-based systems?",
    answer:
      "Traditional fraud detection relies on predefined rules that are difficult to maintain and cannot adapt quickly to emerging attack techniques. Artificial Intelligence continuously learns from transaction patterns, enabling the framework to identify both known and previously unseen fraud strategies with greater accuracy."
  },
  {
    icon: <Database size={22} />,
    question: "What happens when a transaction is classified as high risk?",
    answer:
      "High-risk transactions are temporarily blocked while additional identity verification is requested. The framework may require biometric authentication, facial verification, one-time passwords, trusted device confirmation, or manual review before allowing the transaction to proceed."
  },
  {
    icon: <Lock size={22} />,
    question: "How does the framework protect customer data?",
    answer:
      "Customer information is protected using secure encryption, role-based access control, secure authentication mechanisms, comprehensive audit logging, and continuous monitoring. Sensitive information is processed securely to maintain confidentiality, integrity, and compliance with financial security best practices."
  },
  {
    icon: <HelpCircle size={22} />,
    question: "Can the framework be integrated into existing online payment platforms?",
    answer:
      "Yes. The framework is designed with a modular architecture that allows seamless integration into existing banking systems, fintech applications, mobile payment platforms, and e-commerce payment gateways without requiring a complete system redesign."
  }
];

export default function FAQ() {
  return (
    <section
      id="faq"
      className="py-24 bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 text-white"
    >
      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center mb-16">
          <span className="inline-flex items-center gap-2 rounded-full bg-cyan-500/10 border border-cyan-500/30 px-5 py-2 text-cyan-400 font-semibold">
            Frequently Asked Questions
          </span>

          <h2 className="text-4xl md:text-5xl font-bold mt-6">
            Frequently Asked Questions
          </h2>

          <p className="text-slate-400 mt-5 max-w-3xl mx-auto text-lg leading-8">
            Answers to common questions about the Intelligent Fraud Detection
            Framework, its security architecture, fraud detection process,
            artificial intelligence capabilities, and deployment strategy.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">

          {faqs.map((faq, index) => (
            <div
              key={index}
              className="group rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl p-8 hover:border-cyan-500/40 hover:bg-white/10 transition-all duration-300"
            >
              <div className="w-14 h-14 rounded-2xl bg-cyan-500/10 flex items-center justify-center text-cyan-400 mb-6">
                {faq.icon}
              </div>

              <h3 className="text-xl font-bold mb-4">
                {faq.question}
              </h3>

              <p className="text-slate-400 leading-8">
                {faq.answer}
              </p>
            </div>
          ))}

        </div>

      </div>
    </section>
  );
}