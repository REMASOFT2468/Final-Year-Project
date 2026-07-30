import {
  AlertTriangle,
  Smartphone,
  MapPin,
  CreditCard,
  Wallet,
  Clock,
  ShieldCheck,
  BrainCircuit,
} from "lucide-react";

export default function RiskFactorsTable() {
  const riskFactors = [
    {
      icon: <Wallet size={24} />,
      factor: "Transaction Amount",
      level: "High",
      impact: "+35 Risk",
      description:
        "Large transactions are more attractive to fraudsters and require additional verification.",
      color: "text-red-500",
      bg: "bg-red-50",
    },
    {
      icon: <Smartphone size={24} />,
      factor: "Device Trust",
      level: "Medium",
      impact: "+20 Risk",
      description:
        "New or unknown devices increase fraud probability until trust is established.",
      color: "text-orange-500",
      bg: "bg-orange-50",
    },
    {
      icon: <MapPin size={24} />,
      factor: "Geographical Location",
      level: "Medium",
      impact: "+15 Risk",
      description:
        "Transactions originating from unusual or unexpected locations are carefully analyzed.",
      color: "text-yellow-600",
      bg: "bg-yellow-50",
    },
    {
      icon: <CreditCard size={24} />,
      factor: "Transaction Type",
      level: "Low",
      impact: "+10 Risk",
      description:
        "Certain transaction categories historically experience higher fraud attempts.",
      color: "text-blue-600",
      bg: "bg-blue-50",
    },
    {
      icon: <Clock size={24} />,
      factor: "Transaction Frequency",
      level: "High",
      impact: "+25 Risk",
      description:
        "Multiple transactions within a short period may indicate account takeover.",
      color: "text-red-500",
      bg: "bg-red-50",
    },
    {
      icon: <ShieldCheck size={24} />,
      factor: "Customer Behaviour",
      level: "Low",
      impact: "-15 Risk",
      description:
        "Consistent customer behaviour reduces overall fraud probability.",
      color: "text-green-600",
      bg: "bg-green-50",
    },
  ];

  return (
    <section className="py-24 bg-slate-50">

      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}

        <div className="max-w-3xl mx-auto text-center">

          <span className="inline-flex items-center gap-2 rounded-full bg-blue-100 px-5 py-2 text-sm font-semibold text-blue-700">

            <BrainCircuit size={18} />

            AI Risk Assessment

          </span>

          <h2 className="mt-6 text-4xl md:text-5xl font-bold text-slate-900">

            Fraud Risk Factors Analysis

          </h2>

          <p className="mt-6 text-lg leading-8 text-slate-600">

            Rybon evaluates every payment using multiple
            intelligent indicators. Each factor contributes to the
            overall fraud probability before the final transaction
            decision is made.

          </p>

        </div>

        {/* Table */}

        <div className="mt-20 overflow-hidden rounded-3xl bg-white shadow-2xl border border-slate-200">

          <div className="overflow-x-auto">

            <table className="w-full">

              <thead className="bg-slate-900 text-white">

                <tr>

                  <th className="px-8 py-5 text-left">
                    Risk Factor
                  </th>

                  <th className="px-8 py-5 text-left">
                    Severity
                  </th>

                  <th className="px-8 py-5 text-left">
                    AI Impact
                  </th>

                  <th className="px-8 py-5 text-left">
                    Description
                  </th>

                </tr>

              </thead>

              <tbody>

                {riskFactors.map((item) => (

                  <tr
                    key={item.factor}
                    className="border-b hover:bg-slate-50 transition"
                  >

                    <td className="px-8 py-6">

                      <div className="flex items-center gap-4">

                        <div className={`h-12 w-12 rounded-xl flex items-center justify-center ${item.bg}`}>

                          <div className={item.color}>

                            {item.icon}

                          </div>

                        </div>

                        <span className="font-semibold text-slate-800">

                          {item.factor}

                        </span>

                      </div>

                    </td>

                    <td className="px-8 py-6">

                      <span
                        className={`rounded-full px-4 py-2 text-sm font-semibold ${item.bg} ${item.color}`}
                      >
                        {item.level}
                      </span>

                    </td>

                    <td className="px-8 py-6 font-bold">

                      {item.impact}

                    </td>

                    <td className="px-8 py-6 text-slate-600 leading-7">

                      {item.description}

                    </td>

                  </tr>

                ))}

              </tbody>

            </table>

          </div>

        </div>

        {/* Bottom Cards */}

        <div className="grid md:grid-cols-3 gap-8 mt-20">

          <div className="rounded-3xl bg-white p-8 shadow-lg">

            <AlertTriangle
              className="text-red-500"
              size={40}
            />

            <h3 className="mt-6 text-2xl font-bold">

              High Risk

            </h3>

            <p className="mt-4 text-slate-600 leading-7">

              Transactions with multiple suspicious indicators are
              automatically blocked or sent for manual review.

            </p>

          </div>

          <div className="rounded-3xl bg-white p-8 shadow-lg">

            <ShieldCheck
              className="text-green-600"
              size={40}
            />

            <h3 className="mt-6 text-2xl font-bold">

              Low Risk

            </h3>

            <p className="mt-4 text-slate-600 leading-7">

              Legitimate customer behaviour results in seamless
              transaction approval with minimal friction.

            </p>

          </div>

          <div className="rounded-3xl bg-white p-8 shadow-lg">

            <BrainCircuit
              className="text-blue-600"
              size={40}
            />

            <h3 className="mt-6 text-2xl font-bold">

              Adaptive AI

            </h3>

            <p className="mt-4 text-slate-600 leading-7">

              Rybon continuously learns from new transactions,
              improving detection accuracy and reducing false positives.

            </p>

          </div>

        </div>

      </div>

    </section>
  );
}