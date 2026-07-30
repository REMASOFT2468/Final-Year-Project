import {
  FileText,
  BookOpen,
  ShieldCheck,
  BrainCircuit,
  Database,
  Calendar,
  ArrowRight,
  Download,
  CheckCircle2,
} from "lucide-react";

export default function DocumentationHero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-slate-950 via-slate-900 to-blue-950 pt-36 pb-24">

      {/* Background Glow */}

      <div className="absolute -left-40 top-0 h-[28rem] w-[28rem] rounded-full bg-blue-600/20 blur-3xl"></div>

      <div className="absolute bottom-0 right-0 h-[32rem] w-[32rem] rounded-full bg-cyan-500/10 blur-3xl"></div>

      <div className="relative max-w-7xl mx-auto px-6">

        <div className="grid lg:grid-cols-2 gap-20 items-center">

          {/* Left Content */}

          <div>

            <span className="inline-flex items-center gap-2 rounded-full border border-blue-500/30 bg-blue-500/10 px-5 py-2 text-sm font-semibold text-blue-300">

              <BookOpen size={18} />

              Technical Documentation

            </span>

            <h1 className="mt-8 text-5xl md:text-6xl font-extrabold leading-tight text-white">

              Rybon

              <span className="block text-blue-400">

                Project Documentation

              </span>

            </h1>

            <p className="mt-8 text-lg leading-8 text-slate-300">

              This documentation provides a complete technical overview of
              the Rybon framework, including its architecture,
              intelligent fraud detection process, AI risk scoring model,
              security mechanisms, workflow, and expected system performance.

            </p>

            {/* Badges */}

            <div className="mt-10 flex flex-wrap gap-4">

              <div className="rounded-full bg-white/10 px-5 py-2 text-white">

                React

              </div>

              <div className="rounded-full bg-white/10 px-5 py-2 text-white">

                Vite

              </div>

              <div className="rounded-full bg-white/10 px-5 py-2 text-white">

                Tailwind CSS

              </div>

              <div className="rounded-full bg-white/10 px-5 py-2 text-white">

                AI Framework

              </div>

            </div>

            {/* Buttons */}

            <div className="mt-12 flex flex-wrap gap-5">

              <button className="flex items-center gap-3 rounded-xl bg-blue-600 px-8 py-4 font-semibold text-white transition hover:bg-blue-700">

                Explore Documentation

                <ArrowRight size={20} />

              </button>

              <button className="flex items-center gap-3 rounded-xl border border-white/20 bg-white/5 px-8 py-4 font-semibold text-white hover:border-blue-400">

                <Download size={20} />

                Download PDF

              </button>

            </div>

            {/* Version */}

            <div className="mt-10 flex flex-wrap gap-8 text-slate-400">

              <div className="flex items-center gap-2">

                <CheckCircle2
                  size={18}
                  className="text-green-400"
                />

                Version 1.0

              </div>

              <div className="flex items-center gap-2">

                <Calendar
                  size={18}
                  className="text-blue-400"
                />

                Updated June 2026

              </div>

            </div>

          </div>

          {/* Right Side */}

          <div>

            <div className="rounded-3xl border border-white/10 bg-white/5 backdrop-blur-md p-8 shadow-2xl">

              <div className="flex items-center justify-between">

                <div>

                  <h3 className="text-2xl font-bold text-white">

                    Documentation Summary

                  </h3>

                  <p className="mt-2 text-slate-400">

                    Rybon Technical Guide

                  </p>

                </div>

                <FileText
                  size={40}
                  className="text-blue-400"
                />

              </div>

              <div className="mt-10 space-y-5">

                <div className="rounded-2xl bg-slate-900 p-5 flex items-center justify-between">

                  <div className="flex items-center gap-4">

                    <BrainCircuit className="text-blue-400" />

                    <span className="text-slate-300">

                      AI Engine

                    </span>

                  </div>

                  <CheckCircle2 className="text-green-400" />

                </div>

                <div className="rounded-2xl bg-slate-900 p-5 flex items-center justify-between">

                  <div className="flex items-center gap-4">

                    <ShieldCheck className="text-green-400" />

                    <span className="text-slate-300">

                      Security Layers

                    </span>

                  </div>

                  <CheckCircle2 className="text-green-400" />

                </div>

                <div className="rounded-2xl bg-slate-900 p-5 flex items-center justify-between">

                  <div className="flex items-center gap-4">

                    <Database className="text-cyan-400" />

                    <span className="text-slate-300">

                      Risk Analysis

                    </span>

                  </div>

                  <CheckCircle2 className="text-green-400" />

                </div>

              </div>

              {/* Statistics */}

              <div className="grid grid-cols-2 gap-5 mt-10">

                <div className="rounded-2xl bg-blue-600 p-6 text-center">

                  <h3 className="text-4xl font-bold text-white">

                    10

                  </h3>

                  <p className="mt-2 text-blue-100">

                    Documentation Sections

                  </p>

                </div>

                <div className="rounded-2xl bg-cyan-600 p-6 text-center">

                  <h3 className="text-4xl font-bold text-white">

                    AI

                  </h3>

                  <p className="mt-2 text-cyan-100">

                    Powered Framework

                  </p>

                </div>

              </div>

            </div>

          </div>

        </div>

      </div>

    </section>
  );
}