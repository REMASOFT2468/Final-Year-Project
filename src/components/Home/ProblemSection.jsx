export default function ProblemSection() {
  const problems = [
    {
      title: "Increasing Fraud Attacks",
      description:
        "Online payment platforms continue to experience sophisticated fraud attempts including account takeovers, identity theft, phishing, and unauthorized transactions.",
      icon: "🚨",
    },
    {
      title: "Static Security Measures",
      description:
        "Traditional rule-based systems rely on fixed conditions that attackers can study and bypass, reducing their effectiveness against evolving fraud techniques.",
      icon: "🔓",
    },
    {
      title: "Delayed Fraud Detection",
      description:
        "Many existing systems identify fraudulent activity only after a transaction has been processed, increasing financial losses and recovery costs.",
      icon: "⏱️",
    },
    {
      title: "Poor User Trust",
      description:
        "Customers lose confidence in digital payment platforms when fraudulent transactions occur, affecting user retention and platform reputation.",
      icon: "⚠️",
    },
  ];

  return (
    <section className="relative py-28 bg-slate-950 overflow-hidden">
      {/* Background Glow */}
      <div className="absolute -top-32 left-0 w-96 h-96 bg-blue-600/20 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-[28rem] h-[28rem] bg-cyan-500/10 rounded-full blur-3xl"></div>

      <div className="relative max-w-7xl mx-auto px-6">

        {/* Heading */}

        <div className="max-w-3xl mx-auto text-center">

          <span className="inline-block px-5 py-2 rounded-full bg-red-500/10 text-red-400 text-sm font-semibold">
            The Challenge
          </span>

          <h2 className="mt-6 text-4xl md:text-5xl font-bold text-white leading-tight">
            Why Current Payment Security
            <span className="text-blue-400"> Is No Longer Enough</span>
          </h2>

          <p className="mt-8 text-lg leading-8 text-slate-300">
            As digital payments continue to grow across Nigeria, fraud
            techniques are becoming more sophisticated. Conventional
            security systems struggle to detect complex attacks in real
            time, leaving financial institutions and customers exposed
            to significant financial and reputational risks.
          </p>

        </div>

        {/* Problem Cards */}

        <div className="grid gap-8 mt-20 md:grid-cols-2">

          {problems.map((problem) => (

            <div
              key={problem.title}
              className="group rounded-3xl bg-white/5 border border-white/10 backdrop-blur-md p-8 transition duration-300 hover:border-blue-500 hover:bg-white/10 hover:-translate-y-2"
            >

              <div className="flex items-center justify-center w-16 h-16 rounded-2xl bg-blue-600/20 text-3xl">
                {problem.icon}
              </div>

              <h3 className="mt-6 text-2xl font-bold text-white">
                {problem.title}
              </h3>

              <p className="mt-4 leading-8 text-slate-300">
                {problem.description}
              </p>

            </div>

          ))}

        </div>

        {/* Bottom Callout */}

        <div className="mt-24 rounded-3xl bg-gradient-to-r from-blue-600 to-cyan-600 p-10 shadow-2xl">

          <div className="grid md:grid-cols-2 gap-10 items-center">

            <div>

              <h3 className="text-3xl font-bold text-white">
                A Smarter Approach to Fraud Prevention
              </h3>

              <p className="mt-5 text-blue-100 leading-8">
                Instead of relying solely on predefined rules, FraudShield AI
                continuously evaluates user behavior, transaction patterns,
                device intelligence, location, and contextual risk to detect
                suspicious activities before financial damage occurs.
              </p>

            </div>

            <div className="grid grid-cols-2 gap-6">

              <div className="rounded-2xl bg-white/10 p-6 text-center">

                <h4 className="text-4xl font-bold text-white">
                  99.8%
                </h4>

                <p className="mt-2 text-blue-100">
                  Detection Accuracy
                </p>

              </div>

              <div className="rounded-2xl bg-white/10 p-6 text-center">

                <h4 className="text-4xl font-bold text-white">
                  {"<"}1s
                </h4>

                <p className="mt-2 text-blue-100">
                  Risk Assessment
                </p>

              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}