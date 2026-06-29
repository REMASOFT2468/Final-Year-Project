import { Link } from "react-router-dom";

export default function Hero() {
  return (
    <section className="bg-gradient-to-br from-slate-50 via-white to-blue-50 pt-32 pb-24">
      <div className="max-w-7xl mx-auto px-6">

        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* Left Side */}

          <div>

            {/* Badge */}

            <div className="inline-flex items-center gap-2 rounded-full bg-blue-100 text-blue-700 px-5 py-2 text-sm font-semibold">

              <span>🛡️</span>

              AI-Powered Fraud Detection Framework

            </div>

            {/* Heading */}

            <h1 className="mt-8 text-5xl lg:text-6xl font-extrabold leading-tight text-slate-900">

              Secure Every
              <span className="text-blue-600">
                {" "}Digital Transaction{" "}
              </span>

              Before Fraud Happens.

            </h1>

            {/* Description */}

            <p className="mt-8 text-lg leading-8 text-slate-600">

              FraudShield AI is an intelligent fraud detection framework
              designed to protect online payment platforms through
              behavioral analytics, adaptive risk scoring,
              machine learning, and real-time transaction monitoring.

              The framework proactively identifies suspicious activities,
              minimizes financial losses, and strengthens customer trust
              before fraudulent transactions are completed.

            </p>

            {/* Buttons */}

            <div className="mt-10 flex flex-wrap gap-5">

              <Link
                to="/demo"
                className="bg-blue-600 hover:bg-blue-700 transition text-white px-8 py-4 rounded-xl font-semibold shadow-lg"
              >
                Explore Live Demo
              </Link>

              <Link
                to="/documentation"
                className="border border-gray-300 hover:border-blue-600 hover:text-blue-600 transition px-8 py-4 rounded-xl font-semibold"
              >
                Read Documentation
              </Link>

            </div>

            {/* Statistics */}

            <div className="mt-14 flex flex-wrap gap-12">

              <div>

                <h2 className="text-3xl font-bold text-slate-900">
                  99.8%
                </h2>

                <p className="text-gray-500">
                  Fraud Detection Accuracy
                </p>

              </div>

              <div>

                <h2 className="text-3xl font-bold text-slate-900">
                  {"<"}1 sec
                </h2>

                <p className="text-gray-500">
                  Risk Analysis Time
                </p>

              </div>

              <div>

                <h2 className="text-3xl font-bold text-slate-900">
                  24/7
                </h2>

                <p className="text-gray-500">
                  Continuous Monitoring
                </p>

              </div>

            </div>

          </div>

          {/* Right Side */}

          <div>

            <div className="rounded-3xl bg-white shadow-2xl border border-gray-200 p-8">

              <div className="flex justify-between items-center">

                <h2 className="font-bold text-xl">
                  Live Transaction Analysis
                </h2>

                <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-sm font-semibold">
                  Live
                </span>

              </div>

              <div className="mt-8 space-y-6">

                <div className="flex justify-between">
                  <span>Transaction Amount</span>
                  <strong>₦850,000</strong>
                </div>

                <div className="flex justify-between">
                  <span>Device</span>
                  <strong>New Android Device</strong>
                </div>

                <div className="flex justify-between">
                  <span>Location</span>
                  <strong>Abuja</strong>
                </div>

                <div className="flex justify-between">
                  <span>Behaviour Match</span>
                  <strong>34%</strong>
                </div>

                <div className="flex justify-between">
                  <span>Risk Score</span>

                  <span className="bg-red-100 text-red-600 px-3 py-1 rounded-full font-bold">
                    92%
                  </span>

                </div>

              </div>

              <button className="w-full mt-10 bg-red-600 text-white rounded-xl py-4 font-semibold">

                Transaction Blocked

              </button>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}