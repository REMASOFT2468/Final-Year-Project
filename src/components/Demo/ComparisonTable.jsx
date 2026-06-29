import {
  CheckCircle2,
  XCircle,
  Sparkles,
  ShieldCheck,
} from "lucide-react";

export default function ComparisonTable() {
  const comparisons = [
    {
      feature: "AI Behavioural Analysis",
      traditional: false,
      fraudShield: true,
    },
    {
      feature: "Real-Time Risk Scoring",
      traditional: true,
      fraudShield: true,
    },
    {
      feature: "Adaptive Identity Test",
      traditional: false,
      fraudShield: true,
    },
    {
      feature: "Trusted Circle Approval",
      traditional: false,
      fraudShield: true,
    },
    {
      feature: "Dual Device Confirmation",
      traditional: false,
      fraudShield: true,
    },
    {
      feature: "Continuous Machine Learning",
      traditional: false,
      fraudShield: true,
    },
    {
      feature: "Behaviour-Based Decision Making",
      traditional: false,
      fraudShield: true,
    },
    {
      feature: "Automatic Fraud Blocking",
      traditional: true,
      fraudShield: true,
    },
    {
      feature: "Real-Time Fraud Alerts",
      traditional: true,
      fraudShield: true,
    },
    {
      feature: "Context-Aware Authentication",
      traditional: false,
      fraudShield: true,
    },
    {
      feature: "Device Intelligence",
      traditional: true,
      fraudShield: true,
    },
    {
      feature: "Geolocation Analysis",
      traditional: true,
      fraudShield: true,
    },
  ];

  return (
    <section className="py-28 bg-slate-50">

      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}

        <div className="max-w-4xl mx-auto text-center">

          <span className="inline-flex items-center gap-2 rounded-full bg-blue-100 px-5 py-2 text-blue-700 font-semibold">

            <Sparkles size={18} />

            Framework Comparison

          </span>

          <h2 className="mt-6 text-5xl font-bold text-slate-900">

            Why FraudShield AI Stands Out

          </h2>

          <p className="mt-6 text-lg leading-8 text-slate-600">

            Traditional fraud detection systems rely heavily on static rules,
            passwords, OTP verification, and predefined thresholds.
            FraudShield AI introduces adaptive intelligence, behavioural
            analytics, and innovative security mechanisms to improve fraud
            detection accuracy while reducing customer friction.

          </p>

        </div>

        {/* Table */}

        <div className="mt-20 overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-2xl">

          <div className="overflow-x-auto">

            <table className="w-full">

              <thead className="bg-slate-900 text-white">

                <tr>

                  <th className="px-8 py-5 text-left">
                    Security Capability
                  </th>

                  <th className="px-8 py-5 text-center">
                    Traditional Systems
                  </th>

                  <th className="px-8 py-5 text-center bg-blue-700">
                    FraudShield AI
                  </th>

                </tr>

              </thead>

              <tbody>

                {comparisons.map((item) => (

                  <tr
                    key={item.feature}
                    className="border-b hover:bg-slate-50 transition"
                  >

                    <td className="px-8 py-6 font-semibold text-slate-800">

                      {item.feature}

                    </td>

                    <td className="text-center">

                      {item.traditional ? (
                        <CheckCircle2
                          className="mx-auto text-green-500"
                          size={28}
                        />
                      ) : (
                        <XCircle
                          className="mx-auto text-red-500"
                          size={28}
                        />
                      )}

                    </td>

                    <td className="text-center bg-blue-50">

                      {item.fraudShield ? (
                        <CheckCircle2
                          className="mx-auto text-blue-600"
                          size={28}
                        />
                      ) : (
                        <XCircle
                          className="mx-auto text-red-500"
                          size={28}
                        />
                      )}

                    </td>

                  </tr>

                ))}

              </tbody>

            </table>

          </div>

        </div>

        {/* Key Advantages */}

        <div className="grid md:grid-cols-3 gap-8 mt-20">

          <div className="rounded-3xl bg-white p-8 shadow-lg">

            <ShieldCheck
              className="text-blue-600"
              size={42}
            />

            <h3 className="mt-6 text-2xl font-bold">

              Intelligent Decisions

            </h3>

            <p className="mt-4 text-slate-600 leading-7">

              FraudShield AI evaluates behaviour, device trust,
              contextual information, and historical activity instead of
              relying only on static security rules.

            </p>

          </div>

          <div className="rounded-3xl bg-white p-8 shadow-lg">

            <Sparkles
              className="text-purple-600"
              size={42}
            />

            <h3 className="mt-6 text-2xl font-bold">

              Innovative Security

            </h3>

            <p className="mt-4 text-slate-600 leading-7">

              Trusted Circle Approval, Dual Device Confirmation,
              and Adaptive Identity Tests provide additional protection
              for high-risk transactions.

            </p>

          </div>

          <div className="rounded-3xl bg-white p-8 shadow-lg">

            <CheckCircle2
              className="text-green-600"
              size={42}
            />

            <h3 className="mt-6 text-2xl font-bold">

              Continuous Learning

            </h3>

            <p className="mt-4 text-slate-600 leading-7">

              Every analysed transaction improves the AI model,
              enabling more accurate fraud detection while reducing
              false positives over time.

            </p>

          </div>

        </div>

        {/* Bottom Highlight */}

        <div className="mt-20 rounded-3xl bg-gradient-to-r from-blue-600 to-cyan-600 p-12 text-center shadow-2xl">

          <h3 className="text-4xl font-bold text-white">

            FraudShield AI Delivers a Smarter Layer of Protection

          </h3>

          <p className="mx-auto mt-6 max-w-4xl text-lg leading-8 text-blue-100">

            By combining artificial intelligence, behavioural analytics,
            adaptive authentication, device intelligence, and three
            innovative security mechanisms—Trusted Circle Approval,
            Dual Device Confirmation, and the AI Behavioural Challenge—
            FraudShield AI provides a more proactive and intelligent
            approach to fraud prevention than conventional rule-based systems.

          </p>

        </div>

      </div>

    </section>
  );
}