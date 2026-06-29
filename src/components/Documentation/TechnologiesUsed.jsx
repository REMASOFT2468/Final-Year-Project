import {
  Cpu,
  Code2,
  MonitorSmartphone,
  Palette,
  BrainCircuit,
  ShieldCheck,
  Workflow,
  Globe,
  CheckCircle2,
} from "lucide-react";

export default function TechnologiesUsed() {
  const technologies = [
    {
      icon: <Code2 size={30} />,
      title: "React.js",
      badge: "Frontend Framework",
      color: "bg-blue-600",
      description:
        "React provides a component-based architecture that enables the application to be modular, scalable, reusable, and easy to maintain throughout the development lifecycle.",
    },
    {
      icon: <Cpu size={30} />,
      title: "Vite",
      badge: "Build Tool",
      color: "bg-purple-600",
      description:
        "Vite delivers an extremely fast development environment through instant module replacement, optimized builds, and lightweight project configuration.",
    },
    {
      icon: <Palette size={30} />,
      title: "Tailwind CSS",
      badge: "UI Framework",
      color: "bg-cyan-600",
      description:
        "Tailwind CSS enables rapid development of responsive, accessible, and modern user interfaces using utility-first styling principles.",
    },
    {
      icon: <MonitorSmartphone size={30} />,
      title: "Responsive Design",
      badge: "User Experience",
      color: "bg-green-600",
      description:
        "The interface adapts seamlessly across desktops, tablets, and smartphones, ensuring consistent usability for every user.",
    },
    {
      icon: <BrainCircuit size={30} />,
      title: "Artificial Intelligence",
      badge: "Decision Engine",
      color: "bg-orange-500",
      description:
        "Artificial Intelligence performs behavioural analysis, contextual evaluation, anomaly detection, and dynamic fraud risk scoring for every transaction.",
    },
    {
      icon: <ShieldCheck size={30} />,
      title: "Multi-Layer Security",
      badge: "Security",
      color: "bg-red-600",
      description:
        "The framework combines Trusted Circle Approval, Dual Device Confirmation, AI Behavioural Challenge, biometric verification, and adaptive authentication for enhanced protection.",
    },
  ];

  return (
    <section className="py-28 bg-slate-50">

      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}

        <div className="max-w-4xl mx-auto text-center">

          <span className="inline-flex items-center gap-2 rounded-full bg-blue-100 px-5 py-2 text-sm font-semibold text-blue-700">

            <Workflow size={18} />

            Technologies Used

          </span>

          <h2 className="mt-6 text-5xl font-bold text-slate-900">

            Technology Stack

          </h2>

          <p className="mt-6 text-lg leading-8 text-slate-600">

            FraudShield AI is built using modern web technologies and
            intelligent security concepts. Each technology was selected
            to provide high performance, scalability, maintainability,
            and an excellent user experience while demonstrating the
            proposed fraud detection framework.

          </p>

        </div>

        {/* Technology Cards */}

        <div className="grid gap-8 mt-20 lg:grid-cols-2">

          {technologies.map((tech) => (

            <div
              key={tech.title}
              className="rounded-3xl bg-white border border-slate-200 p-8 shadow-lg transition duration-300 hover:-translate-y-2 hover:shadow-xl"
            >

              <div className="flex items-start justify-between">

                <div
                  className={`flex h-16 w-16 items-center justify-center rounded-2xl text-white ${tech.color}`}
                >
                  {tech.icon}
                </div>

                <span className="rounded-full bg-slate-100 px-4 py-2 text-sm font-semibold text-slate-700">

                  {tech.badge}

                </span>

              </div>

              <h3 className="mt-6 text-2xl font-bold text-slate-900">

                {tech.title}

              </h3>

              <p className="mt-5 leading-8 text-slate-600">

                {tech.description}

              </p>

            </div>

          ))}

        </div>

        {/* Architecture Summary */}

        <div className="mt-24 rounded-3xl bg-slate-900 p-12 text-white shadow-2xl">

          <h3 className="text-center text-4xl font-bold">

            Development Philosophy

          </h3>

          <p className="mx-auto mt-8 max-w-5xl text-center text-lg leading-8 text-slate-300">

            The proposed FraudShield AI framework emphasizes modularity,
            scalability, security, and maintainability. Although this
            project is implemented as an MVP without a backend, its
            architecture is designed to support future integration with
            machine learning services, cloud infrastructure, banking APIs,
            and enterprise payment systems.

          </p>

        </div>

        {/* Key Advantages */}

        <div className="grid gap-8 mt-20 md:grid-cols-4">

          <div className="rounded-3xl bg-white border border-slate-200 p-8 text-center shadow">

            <Globe className="mx-auto text-blue-600" size={40} />

            <h4 className="mt-5 text-xl font-bold">

              Scalable

            </h4>

            <p className="mt-3 text-slate-600">

              Built for future enterprise expansion.

            </p>

          </div>

          <div className="rounded-3xl bg-white border border-slate-200 p-8 text-center shadow">

            <BrainCircuit className="mx-auto text-purple-600" size={40} />

            <h4 className="mt-5 text-xl font-bold">

              Intelligent

            </h4>

            <p className="mt-3 text-slate-600">

              AI-driven fraud analysis and adaptive learning.

            </p>

          </div>

          <div className="rounded-3xl bg-white border border-slate-200 p-8 text-center shadow">

            <ShieldCheck className="mx-auto text-green-600" size={40} />

            <h4 className="mt-5 text-xl font-bold">

              Secure

            </h4>

            <p className="mt-3 text-slate-600">

              Multi-layer protection against evolving threats.

            </p>

          </div>

          <div className="rounded-3xl bg-white border border-slate-200 p-8 text-center shadow">

            <CheckCircle2 className="mx-auto text-cyan-600" size={40} />

            <h4 className="mt-5 text-xl font-bold">

              Maintainable

            </h4>

            <p className="mt-3 text-slate-600">

              Modular components simplify future development.

            </p>

          </div>

        </div>

      </div>

    </section>
  );
}
