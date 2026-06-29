import {
  Rocket,
  BrainCircuit,
  Cloud,
  Database,
  Smartphone,
  Globe,
  ShieldCheck,
  Network,
  Cpu,
  Fingerprint,
  CheckCircle2,
  ArrowUpRight,
} from "lucide-react";

export default function FutureEnhancements() {
  const enhancements = [
    {
      icon: <BrainCircuit size={30} />,
      title: "Advanced Machine Learning Models",
      color: "bg-blue-600",
      description:
        "Future versions of FraudShield AI will integrate supervised and unsupervised machine learning models capable of learning from millions of historical transactions to improve fraud prediction accuracy and reduce false positives.",
    },
    {
      icon: <Cloud size={30} />,
      title: "Cloud-Based Deployment",
      color: "bg-cyan-600",
      description:
        "Deploy the framework on scalable cloud infrastructure to support high transaction volumes, automatic scaling, disaster recovery, and enterprise-level availability.",
    },
    {
      icon: <Network size={30} />,
      title: "Cross-Bank Fraud Intelligence",
      color: "bg-purple-600",
      description:
        "Enable participating financial institutions to securely share anonymized fraud intelligence, allowing new fraud patterns to be detected across multiple organizations in real time.",
    },
    {
      icon: <Database size={30} />,
      title: "Big Data Analytics",
      color: "bg-green-600",
      description:
        "Process massive transaction datasets using distributed data platforms to discover emerging fraud trends, customer behaviour changes, and high-risk transaction patterns.",
    },
    {
      icon: <Smartphone size={30} />,
      title: "Mobile Banking Integration",
      color: "bg-orange-500",
      description:
        "Integrate directly with banking and fintech mobile applications, providing seamless fraud detection and intelligent transaction verification during payments.",
    },
    {
      icon: <Globe size={30} />,
      title: "International Payment Support",
      color: "bg-indigo-600",
      description:
        "Expand FraudShield AI to support cross-border payments, international merchant verification, and multi-currency fraud detection.",
    },
    {
      icon: <Fingerprint size={30} />,
      title: "Continuous Behavioural Learning",
      color: "bg-red-600",
      description:
        "Allow the AI to continuously refine customer behavioural profiles after every legitimate transaction, improving personalization and fraud detection accuracy.",
    },
    {
      icon: <ShieldCheck size={30} />,
      title: "Adaptive Multi-Factor Authentication",
      color: "bg-slate-700",
      description:
        "Future authentication methods will dynamically combine biometrics, Trusted Circle Approval, Dual Device Confirmation, AI Behavioural Challenge, and contextual verification depending on transaction risk.",
    },
  ];

  const roadmap = [
    {
      year: "Phase 1",
      title: "Prototype (Current Project)",
      description:
        "Interactive React-based demonstration of the FraudShield AI framework with intelligent risk scoring, behavioural analysis, and innovative security features.",
    },
    {
      year: "Phase 2",
      title: "Backend Development",
      description:
        "Integrate databases, REST APIs, authentication services, payment gateways, and server-side AI processing for real-world deployment.",
    },
    {
      year: "Phase 3",
      title: "Machine Learning Integration",
      description:
        "Deploy predictive machine learning models capable of analysing large transaction datasets and continuously improving fraud detection performance.",
    },
    {
      year: "Phase 4",
      title: "Enterprise Deployment",
      description:
        "Deploy FraudShield AI across banks, fintech companies, payment processors, and mobile payment platforms throughout Nigeria and beyond.",
    },
  ];

  return (
    <section className="bg-slate-950 py-28">

      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}

        <div className="max-w-4xl mx-auto text-center">

          <span className="inline-flex items-center gap-2 rounded-full bg-blue-600/10 px-5 py-2 text-sm font-semibold text-blue-400">

            <Rocket size={18} />

            Future Enhancements

          </span>

          <h2 className="mt-6 text-5xl font-bold text-white">

            Future Development Roadmap

          </h2>

          <p className="mt-8 text-lg leading-8 text-slate-300">

            FraudShield AI has been designed with scalability in mind.
            Although this project presents a functional framework and MVP,
            numerous enhancements can transform it into a production-ready,
            enterprise-grade fraud detection platform for banks and fintech
            organizations.

          </p>

        </div>

        {/* Enhancement Cards */}

        <div className="mt-20 grid gap-8 lg:grid-cols-2">

          {enhancements.map((item) => (

            <div
              key={item.title}
              className="rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-sm transition duration-300 hover:-translate-y-2 hover:border-blue-500"
            >

              <div className={`flex h-16 w-16 items-center justify-center rounded-2xl text-white ${item.color}`}>

                {item.icon}

              </div>

              <h3 className="mt-6 text-2xl font-bold text-white">

                {item.title}

              </h3>

              <p className="mt-5 leading-8 text-slate-300">

                {item.description}

              </p>

            </div>

          ))}

        </div>

        {/* Roadmap */}

        <div className="mt-24 rounded-3xl bg-gradient-to-r from-blue-600 to-cyan-600 p-12 shadow-2xl">

          <h3 className="text-center text-4xl font-bold text-white">

            Development Roadmap

          </h3>

          <div className="mt-14 space-y-8">

            {roadmap.map((phase) => (

              <div
                key={phase.year}
                className="flex flex-col gap-6 rounded-3xl bg-white/10 p-8 backdrop-blur-sm md:flex-row md:items-start"
              >

                <div className="rounded-2xl bg-white px-6 py-3 font-bold text-blue-700">

                  {phase.year}

                </div>

                <div className="flex-1">

                  <h4 className="text-2xl font-bold text-white">

                    {phase.title}

                  </h4>

                  <p className="mt-4 leading-8 text-blue-100">

                    {phase.description}

                  </p>

                </div>

                <ArrowUpRight
                  className="text-white"
                  size={32}
                />

              </div>

            ))}

          </div>

        </div>

        {/* Vision */}

        <div className="mt-24 rounded-3xl border border-slate-800 bg-slate-900 p-12">

          <Cpu
            className="mx-auto text-blue-400"
            size={60}
          />

          <h3 className="mt-6 text-center text-4xl font-bold text-white">

            Long-Term Vision

          </h3>

          <p className="mx-auto mt-8 max-w-5xl text-center text-lg leading-8 text-slate-300">

            The long-term objective of FraudShield AI is to become an
            intelligent, self-learning fraud prevention framework capable
            of protecting banks, fintech companies, payment gateways,
            e-commerce platforms, and digital financial services.
            By combining artificial intelligence, behavioural analytics,
            adaptive authentication, and continuous learning, the framework
            aims to provide faster fraud detection, stronger security,
            improved customer trust, and a safer digital payment ecosystem
            for Nigeria and future international markets.

          </p>

        </div>

        {/* Summary Statistics */}

        <div className="mt-20 grid gap-8 md:grid-cols-4">

          <div className="rounded-3xl bg-slate-900 border border-slate-800 p-8 text-center">

            <CheckCircle2
              className="mx-auto text-blue-400"
              size={42}
            />

            <h4 className="mt-5 text-3xl font-bold text-white">

              AI

            </h4>

            <p className="mt-3 text-slate-400">

              Intelligent Learning

            </p>

          </div>

          <div className="rounded-3xl bg-slate-900 border border-slate-800 p-8 text-center">

            <Cloud
              className="mx-auto text-cyan-400"
              size={42}
            />

            <h4 className="mt-5 text-3xl font-bold text-white">

              Cloud

            </h4>

            <p className="mt-3 text-slate-400">

              Enterprise Deployment

            </p>

          </div>

          <div className="rounded-3xl bg-slate-900 border border-slate-800 p-8 text-center">

            <Network
              className="mx-auto text-purple-400"
              size={42}
            />

            <h4 className="mt-5 text-3xl font-bold text-white">

              Global

            </h4>

            <p className="mt-3 text-slate-400">

              Financial Integration

            </p>

          </div>

          <div className="rounded-3xl bg-slate-900 border border-slate-800 p-8 text-center">

            <Rocket
              className="mx-auto text-green-400"
              size={42}
            />

            <h4 className="mt-5 text-3xl font-bold text-white">

              Future

            </h4>

            <p className="mt-3 text-slate-400">

              Continuous Innovation

            </p>

          </div>

        </div>

      </div>

    </section>
  );
}
