import { useState } from "react";
import {
  BrainCircuit,
  CreditCard,
  Smartphone,
  MapPin,
  Landmark,
  DollarSign,
  User,
  Activity,
} from "lucide-react";

export default function FraudSimulator() {
 const [formData, setFormData] = useState({
  customer: "",
  amount: "",
  bank: "",
  device: "",
  location: "",
  transactionType: "",
});

const [loading, setLoading] = useState(false);

const [result, setResult] = useState(null);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

const handleAnalyze = (e) => {
  e.preventDefault();

  setLoading(true);

  setTimeout(() => {
    let risk = 0;

    // Amount

    if (Number(formData.amount) > 500000) risk += 35;
    else if (Number(formData.amount) > 100000) risk += 20;
    else risk += 5;

    // Device

    if (formData.device === "Unknown Device") risk += 30;
    else if (formData.device === "New Device") risk += 15;
    else risk += 5;

    // Transaction Type

    if (formData.transactionType === "Transfer") risk += 15;

    if (formData.transactionType === "Online Shopping")
      risk += 10;

    // Location

    if (
      formData.location.toLowerCase() !== "lagos"
    ) {
      risk += 15;
    }

    // Random AI Adjustment

    risk += Math.floor(Math.random() * 10);

    if (risk > 100) risk = 100;

    let decision = "";
    let color = "";
    let recommendation = "";

    if (risk < 40) {
      decision = "APPROVED";
      color = "green";
      recommendation =
        "Transaction appears legitimate.";
    }

    else if (risk < 70) {
      decision = "VERIFY";
      color = "yellow";
      recommendation =
        "Additional authentication required.";
    }

    else {
      decision = "BLOCKED";
      color = "red";
      recommendation =
        "High fraud probability detected.";
    }

    setResult({
      risk,
      decision,
      color,
      recommendation,
    });

    setLoading(false);

  }, 2500);
};
const handleReset = () => {
  setFormData({
    customer: "",
    amount: "",
    bank: "",
    device: "",
    location: "",
    transactionType: "",
  });

  setResult(null);
  setLoading(false);
};

  return (
    <section className="py-24 bg-slate-100">

      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}

        <div className="text-center max-w-3xl mx-auto">

          <span className="inline-flex items-center gap-2 rounded-full bg-blue-100 px-5 py-2 text-blue-700 font-semibold">

            <BrainCircuit size={18} />

            Interactive Fraud Simulator

          </span>

          <h2 className="mt-6 text-4xl md:text-5xl font-bold text-slate-900">

            Simulate a Real Transaction

          </h2>

          <p className="mt-6 text-lg text-slate-600 leading-8">

            Enter transaction details below and watch how Rybon
            analyzes the payment, calculates fraud risk, and makes an
            intelligent decision in real time.

          </p>

        </div>

        {/* Main Layout */}

        <div className="grid lg:grid-cols-3 gap-10 mt-20">

          {/* Left Form */}

          <div className="lg:col-span-2">

            <form
              onSubmit={handleAnalyze}
              className="bg-white rounded-3xl shadow-xl p-10"
            >

              <h3 className="text-3xl font-bold text-slate-900">

                Transaction Information

              </h3>

              <p className="mt-2 text-slate-500">

                Complete the transaction details for AI evaluation.

              </p>

              <div className="grid md:grid-cols-2 gap-8 mt-10">

                {/* Customer */}

                <div>

                  <label className="font-semibold text-slate-700">

                    Customer Name

                  </label>

                  <div className="relative mt-2">

                    <User
                      size={20}
                      className="absolute left-4 top-4 text-slate-400"
                    />

                    <input
                      type="text"
                      name="customer"
                      value={formData.customer}
                      onChange={handleChange}
                      placeholder="John Doe"
                      className="w-full rounded-xl border border-slate-300 pl-12 pr-4 py-4 focus:border-blue-600 outline-none"
                    />

                  </div>

                </div>

                {/* Amount */}

                <div>

                  <label className="font-semibold text-slate-700">

                    Transaction Amount

                  </label>

                  <div className="relative mt-2">

                    <DollarSign
                      size={20}
                      className="absolute left-4 top-4 text-slate-400"
                    />

                    <input
                      type="number"
                      name="amount"
                      value={formData.amount}
                      onChange={handleChange}
                      placeholder="50000"
                      className="w-full rounded-xl border border-slate-300 pl-12 pr-4 py-4 focus:border-blue-600 outline-none"
                    />

                  </div>

                </div>

                {/* Bank */}

                <div>

                  <label className="font-semibold text-slate-700">

                    Bank / Platform

                  </label>

                  <div className="relative mt-2">

                    <Landmark
                      size={20}
                      className="absolute left-4 top-4 text-slate-400"
                    />

                    <select
                      name="bank"
                      value={formData.bank}
                      onChange={handleChange}
                      className="w-full rounded-xl border border-slate-300 pl-12 pr-4 py-4 focus:border-blue-600 outline-none"
                    >

                      <option value="">Select Platform</option>

                      <option>OPay</option>

                      <option>PalmPay</option>

                      <option>Moniepoint</option>

                      <option>Kuda</option>

                      <option>Paystack</option>

                      <option>Flutterwave</option>

                      <option>GTBank</option>

                      <option>UBA</option>

                    </select>

                  </div>

                </div>

                {/* Device */}

                <div>

                  <label className="font-semibold text-slate-700">

                    Device

                  </label>

                  <div className="relative mt-2">

                    <Smartphone
                      size={20}
                      className="absolute left-4 top-4 text-slate-400"
                    />

                    <select
                      name="device"
                      value={formData.device}
                      onChange={handleChange}
                      className="w-full rounded-xl border border-slate-300 pl-12 pr-4 py-4 focus:border-blue-600 outline-none"
                    >

                      <option value="">Select Device</option>

                      <option>Trusted Device</option>

                      <option>New Device</option>

                      <option>Unknown Device</option>

                    </select>

                  </div>

                </div>

                {/* Location */}

                <div>

                  <label className="font-semibold text-slate-700">

                    Transaction Location

                  </label>

                  <div className="relative mt-2">

                    <MapPin
                      size={20}
                      className="absolute left-4 top-4 text-slate-400"
                    />

                    <input
                      type="text"
                      name="location"
                      value={formData.location}
                      onChange={handleChange}
                      placeholder="Lagos"
                      className="w-full rounded-xl border border-slate-300 pl-12 pr-4 py-4 focus:border-blue-600 outline-none"
                    />

                  </div>

                </div>

                {/* Type */}

                <div>

                  <label className="font-semibold text-slate-700">

                    Transaction Type

                  </label>

                  <div className="relative mt-2">

                    <CreditCard
                      size={20}
                      className="absolute left-4 top-4 text-slate-400"
                    />

                    <select
                      name="transactionType"
                      value={formData.transactionType}
                      onChange={handleChange}
                      className="w-full rounded-xl border border-slate-300 pl-12 pr-4 py-4 focus:border-blue-600 outline-none"
                    >

                      <option value="">Select Type</option>

                      <option>Transfer</option>

                      <option>Bill Payment</option>

                      <option>Airtime</option>

                      <option>POS Payment</option>

                      <option>Online Shopping</option>

                    </select>

                  </div>

                </div>

              </div>

              {/* Button */}

            <button
  type="submit"
  className="mt-10 w-full rounded-xl bg-blue-600 py-5 text-lg font-bold text-white transition hover:bg-blue-700"
>
  {loading ? "Analyzing..." : "Analyze Transaction"}
</button>

<div className="mt-6 rounded-xl bg-blue-50 p-5">
  <h4 className="font-bold text-blue-700">
    Demo Instructions
  </h4>

  <ul className="mt-4 space-y-2 text-slate-600">
    <li>• Enter a transaction amount.</li>
    <li>• Select a device.</li>
    <li>• Choose a transaction type.</li>
    <li>• Click Analyze Transaction.</li>
    <li>• Rybon calculates the fraud risk.</li>
  </ul>
</div>
</form>

            

          </div>
          <div className="mb-8 flex items-center justify-between rounded-xl bg-slate-800 p-4">

  <div>

    <p className="text-sm text-slate-400">

      AI Engine

    </p>

    <h3 className="font-bold">

      Rybon v2.0

    </h3>

  </div>

  <span className="rounded-full bg-green-500 px-4 py-2 text-xs font-bold">

    ONLINE

  </span>

</div>
          

          {/* Right Side */}

          

            <div className="rounded-3xl bg-slate-900 p-8 text-white shadow-2xl">

  <h3 className="text-2xl font-bold">

    AI Fraud Analysis

  </h3>

  {!loading && !result && (

    <div className="mt-10">

      <p className="text-slate-300">

        Waiting for transaction...

      </p>

    </div>

  )}

  {loading && (

    <div className="mt-10">

      <div className="h-3 rounded-full bg-slate-700 overflow-hidden">

        <div className="h-full w-full animate-pulse bg-blue-500"></div>

      </div>

      <p className="mt-6 text-blue-300">

        AI is analyzing transaction...

      </p>

    </div>

  )}

  {result && (

    <div className="mt-8">

      <div className="flex justify-between">

        <span>Fraud Risk</span>

        <span className="font-bold">

          {result.risk}%

        </span>

      </div>

      <div className="mt-3 h-4 rounded-full bg-slate-700">

        <div
          style={{ width: `${result.risk}%` }}
          className={`h-full rounded-full ${
            result.color === "green"
              ? "bg-green-500"
              : result.color === "yellow"
              ? "bg-yellow-500"
              : "bg-red-500"
          }`}
        ></div>

      </div>

      <div className="mt-10">

        <h4 className="text-lg font-semibold">

          Decision

        </h4>

        <div
          className={`mt-4 rounded-xl px-6 py-5 text-center font-bold text-xl ${
            result.color === "green"
              ? "bg-green-500"
              : result.color === "yellow"
              ? "bg-yellow-500 text-black"
              : "bg-red-600"
          }`}
        >

          {result.decision}

        </div>

      </div>

     <>
  



  {/* AI Explanation */}

  <div className="mt-6 rounded-xl bg-slate-800 p-5">

    <h4 className="font-semibold text-lg">
      AI Explanation
    </h4>

    <p className="mt-3 leading-7 text-slate-300">

      Rybon evaluated the transaction using multiple
      intelligent parameters including transaction amount,
      customer behaviour, device trust level,
      geographical location, payment type,
      and historical fraud patterns.

      Based on these factors, the system produced
      a fraud probability of

      <span className="font-bold text-blue-400">
        {" "} {result.risk}%
      </span>

      and recommended the action

      <span className="font-bold text-white">
        {" "} {result.decision}.
      </span>

    </p>

  </div>
</>
    <div className="mt-8 rounded-xl bg-slate-800 p-5">

  <h4 className="text-lg font-semibold mb-5">

    Risk Factors

  </h4>

  <table className="w-full text-sm">

    <thead>

      <tr className="text-left text-slate-400">

        <th className="pb-3">Factor</th>
        <th className="pb-3">Value</th>
        <th className="pb-3">Impact</th>

      </tr>

    </thead>

    <tbody>

      <tr className="border-t border-slate-700">

        <td className="py-4">Amount</td>

        <td>₦{formData.amount}</td>

        <td>

          {Number(formData.amount) > 500000
            ? "High"
            : "Low"}

        </td>

      </tr>

      <tr className="border-t border-slate-700">

        <td className="py-4">Device</td>

        <td>{formData.device}</td>

        <td>

          {formData.device === "Trusted Device"
            ? "Safe"
            : "Risk"}

        </td>

      </tr>

      <tr className="border-t border-slate-700">

        <td className="py-4">Location</td>

        <td>{formData.location}</td>

        <td>

          {formData.location.toLowerCase() === "lagos"
            ? "Known"
            : "Unknown"}

        </td>

      </tr>

      <tr className="border-t border-slate-700">

        <td className="py-4">Transaction</td>

        <td>{formData.transactionType}</td>

        <td>Analyzed</td>

      </tr>

    </tbody>

  </table>

</div>
<div className="mt-8 rounded-xl bg-blue-600 p-6">

  <h4 className="text-xl font-bold text-white">

    Transaction Summary

  </h4>

  <div className="mt-6 space-y-4 text-white">

    <div className="flex justify-between">

      <span>Customer</span>

      <strong>{formData.customer}</strong>

    </div>

    <div className="flex justify-between">

      <span>Bank</span>

      <strong>{formData.bank}</strong>

    </div>

    <div className="flex justify-between">

      <span>Amount</span>

      <strong>₦{formData.amount}</strong>

    </div>

    <div className="flex justify-between">

      <span>Device</span>

      <strong>{formData.device}</strong>

    </div>

    <div className="flex justify-between">

      <span>Location</span>

      <strong>{formData.location}</strong>

    </div>

  </div>

</div>
<button
  onClick={handleReset}
  className="mt-8 w-full rounded-xl border border-white py-4 font-semibold transition hover:bg-white hover:text-slate-900"
>

  Run Another Simulation

</button>

    </div>


  )}

</div>

              <div className="flex items-center gap-3">

                <Activity className="text-cyan-400" />

                <h3 className="text-2xl font-bold">

                  AI Monitoring

                </h3>

              </div>

              <div className="mt-8 space-y-5">

                <div className="rounded-xl bg-slate-800 p-5">

                  <h4 className="font-semibold">

                    Status

                  </h4>

                  <p className="mt-2 text-green-400">

                    Waiting for transaction...

                  </p>

                </div>

                <div className="rounded-xl bg-slate-800 p-5">

                  <h4 className="font-semibold">

                    AI Engine

                  </h4>

                  <p className="mt-2 text-slate-300">

                    Ready

                  </p>

                </div>

                <div className="rounded-xl bg-slate-800 p-5">

                  <h4 className="font-semibold">

                    Fraud Score

                  </h4>

                  <p className="mt-2 text-4xl font-bold text-blue-400">

                    --%

                  </p>

                </div>

                <div className="rounded-xl bg-slate-800 p-5">

                  <h4 className="font-semibold">

                    Decision

                  </h4>

                  <p className="mt-2 text-xl font-bold">

                    Awaiting Analysis

                  </p>

              </div> {/* AI Monitoring */}

      </div> {/* Right Side */}

    </div> {/* Grid */}

  </div> {/* Container */}

</section>
);
}