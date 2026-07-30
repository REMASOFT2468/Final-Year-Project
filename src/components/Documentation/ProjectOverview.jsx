import {
  ShieldCheck,
  Target,
  TriangleAlert,
  Users,
  BrainCircuit,
  CheckCircle2,
} from "lucide-react";

export default function ProjectOverview() {
  const objectives = [
    "Detect fraudulent online payment transactions in real time.",
    "Reduce financial losses caused by fraud.",
    "Improve transaction security using Artificial Intelligence.",
    "Minimize false positives through behavioural analysis.",
    "Introduce innovative security mechanisms beyond conventional banking systems.",
  ];

  const beneficiaries = [
    "Commercial Banks",
    "FinTech Companies",
    "Online Payment Platforms",
    "Mobile Wallet Providers",
    "Merchants & Businesses",
    "End Users",
  ];

  return (
    <section className="py-28 bg-slate-50">

      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}

        <div className="max-w-4xl mx-auto text-center">

          <span className="inline-flex items-center gap-2 rounded-full bg-blue-100 px-5 py-2 text-sm font-semibold text-blue-700">

            <ShieldCheck size={18} />

            Project Overview

          </span>

          <h2 className="mt-6 text-5xl font-bold text-slate-900">

            Intelligent Fraud Detection Framework
          </h2>

          <p className="mt-6 text-lg leading-8 text-slate-600">

            Rybon is an intelligent fraud detection framework
            designed to enhance the security of online payment platforms
            in Nigeria. The framework combines Artificial Intelligence,
            behavioural analytics, adaptive authentication, device
            intelligence, and real-time risk scoring to detect suspicious
            transactions before financial losses occur.

          </p>

        </div>

        {/* Main Grid */}

        <div className="grid lg:grid-cols-2 gap-10 mt-20">

          {/* Problem */}

          <div className="rounded-3xl bg-white p-10 shadow-lg border border-slate-200">

            <div className="w-16 h-16 rounded-2xl bg-red-100 flex items-center justify-center">

              <TriangleAlert
                size={32}
                className="text-red-600"
              />

            </div>

            <h3 className="mt-6 text-3xl font-bold text-slate-900">

              Problem Statement

            </h3>

            <p className="mt-6 leading-8 text-slate-600">

              Digital payment adoption continues to grow rapidly, but so
              do fraud attacks such as account takeover, identity theft,
              social engineering, phishing, unauthorized transfers, and
              transaction manipulation. Many existing fraud detection
              solutions depend heavily on static rules and traditional
              authentication methods, making it difficult to detect new
              and evolving fraud techniques.

            </p>

          </div>

          {/* Solution */}

          <div className="rounded-3xl bg-white p-10 shadow-lg border border-slate-200">

            <div className="w-16 h-16 rounded-2xl bg-blue-100 flex items-center justify-center">

              <BrainCircuit
                size={32}
                className="text-blue-600"
              />

            </div>

            <h3 className="mt-6 text-3xl font-bold text-slate-900">

              Proposed Solution

            </h3>

            <p className="mt-6 leading-8 text-slate-600">

              Rybon introduces a multi-layer intelligent security
              framework capable of analysing customer behaviour, transaction
              history, device information, geolocation, contextual data,
              and transaction patterns in real time. The framework
              calculates a dynamic fraud risk score before deciding whether
              to approve, verify, or block a transaction.

            </p>

          </div>

        </div>

        {/* Objectives */}

        <div className="mt-20 rounded-3xl bg-white p-10 shadow-xl border border-slate-200">

          <div className="flex items-center gap-4">

            <div className="w-14 h-14 rounded-xl bg-green-100 flex items-center justify-center">

              <Target
                className="text-green-600"
                size={28}
              />

            </div>

            <h3 className="text-3xl font-bold text-slate-900">

              Project Objectives

            </h3>

          </div>

          <div className="grid md:grid-cols-2 gap-6 mt-10">

            {objectives.map((item) => (

              <div
                key={item}
                className="flex items-start gap-4 rounded-2xl bg-slate-50 p-5"
              >

                <CheckCircle2
                  className="text-green-600 mt-1"
                  size={22}
                />

                <p className="text-slate-700 leading-7">

                  {item}

                </p>

              </div>

            ))}

          </div>

        </div>

        {/* Beneficiaries */}

        <div className="mt-20 rounded-3xl bg-gradient-to-r from-blue-600 to-cyan-600 p-10 text-white shadow-2xl">

          <div className="flex items-center gap-4">

            <Users size={34} />

            <h3 className="text-3xl font-bold">

              Intended Beneficiaries

            </h3>

          </div>

          <div className="grid md:grid-cols-3 gap-6 mt-10">

            {beneficiaries.map((item) => (

              <div
                key={item}
                className="rounded-2xl bg-white/10 p-6 backdrop-blur-sm text-center font-semibold"
              >

                {item}

              </div>

            ))}

          </div>

        </div>

        {/* Summary */}

        <div className="mt-20 rounded-3xl bg-slate-900 p-12 text-center">

          <h3 className="text-4xl font-bold text-white">

            Project Summary

          </h3>

          <p className="max-w-5xl mx-auto mt-8 text-lg leading-8 text-slate-300">

            Rybon provides an intelligent and proactive approach
            to fraud prevention by combining Artificial Intelligence,
            behavioural analytics, contextual risk assessment, and
            innovative authentication mechanisms. Unlike conventional
            rule-based systems, the proposed framework continuously learns
            from transaction data and adapts to emerging fraud patterns,
            improving both security and user experience for modern digital
            payment platforms.

          </p>

        </div>

      </div>

    </section>
  );
}