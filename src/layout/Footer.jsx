import { Link } from "react-router-dom";
import logo from "../assets/images/logo.png";

export default function Footer() {
  return (
    <footer className="bg-slate-950 text-gray-300">
      <div className="max-w-7xl mx-auto px-6 py-16">

        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">

          {/* Company */}

          <div>
            <Link to="/" className="flex items-center gap-3">

              <img
                src={logo}
                alt="FraudShield AI Logo"
                className="w-12 h-12"
              />

              <div>
                <h2 className="text-xl font-bold text-white">
                  FraudShield AI
                </h2>

                <p className="text-sm text-gray-400">
                  Intelligent Fraud Detection
                </p>
              </div>

            </Link>

            <p className="mt-6 leading-7 text-gray-400">
              An AI-powered fraud detection framework designed to
              secure online payment platforms in Nigeria through
              behavioral analysis, real-time monitoring,
              intelligent risk scoring, and adaptive security.
            </p>
          </div>

          {/* Quick Links */}

          <div>

            <h3 className="text-white text-lg font-semibold mb-6">
              Quick Links
            </h3>

            <ul className="space-y-4">

              <li>
                <Link
                  to="/"
                  className="hover:text-blue-400 transition"
                >
                  Home
                </Link>
              </li>

              <li>
                <Link
                  to="/demo"
                  className="hover:text-blue-400 transition"
                >
                  Live Demo
                </Link>
              </li>

              <li>
                <Link
                  to="/documentation"
                  className="hover:text-blue-400 transition"
                >
                  Documentation
                </Link>
              </li>

            </ul>

          </div>

          {/* Framework */}

          <div>

            <h3 className="text-white text-lg font-semibold mb-6">
              Framework
            </h3>

            <ul className="space-y-4">

              <li>AI Fraud Detection</li>

              <li>Risk Scoring Engine</li>

              <li>Behavior Analytics</li>

              <li>Real-Time Monitoring</li>

              <li>Device Intelligence</li>

              <li>Location Verification</li>

            </ul>

          </div>

          {/* Contact */}

          <div>

            <h3 className="text-white text-lg font-semibold mb-6">
              Contact
            </h3>

            <div className="space-y-4 text-gray-400">

              <p>Nigeria</p>

              <p>support@fraudshield.ai</p>

              <p>+234 XXX XXX XXXX</p>

            </div>

            {/* Social Icons */}

            <div className="flex gap-4 mt-8">

              <a href="#" className="hover:text-blue-400">

                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-6 h-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M22 12A10 10 0 1 0 10.44 21.88v-6.99H7.9V12h2.54V9.8c0-2.5 1.49-3.88 3.77-3.88 1.09 0 2.22.2 2.22.2v2.45h-1.25c-1.23 0-1.62.76-1.62 1.55V12h2.76l-.44 2.89h-2.32v6.99A10 10 0 0 0 22 12z"/>
                </svg>

              </a>

              <a href="#" className="hover:text-blue-400">

                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-6 h-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M22.46 6c-.77.35-1.6.58-2.46.69a4.29 4.29 0 0 0 1.88-2.37 8.51 8.51 0 0 1-2.71 1.04A4.25 4.25 0 0 0 16.1 4a4.27 4.27 0 0 0-4.27 4.27c0 .33.04.66.11.97A12.11 12.11 0 0 1 3.1 4.8a4.27 4.27 0 0 0 1.32 5.7A4.23 4.23 0 0 1 2.8 10v.05a4.27 4.27 0 0 0 3.42 4.18c-.31.08-.64.12-.98.12-.24 0-.47-.02-.7-.07a4.28 4.28 0 0 0 3.99 2.97A8.56 8.56 0 0 1 2 19.54 12.07 12.07 0 0 0 8.55 21c7.86 0 12.16-6.51 12.16-12.16l-.01-.55A8.68 8.68 0 0 0 22.46 6z"/>
                </svg>

              </a>

              <a href="#" className="hover:text-blue-400">

                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-6 h-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M19 3A2 2 0 0 1 21 5V19A2 2 0 0 1 19 21H5A2 2 0 0 1 3 19V5A2 2 0 0 1 5 3H19ZM8.34 17V10.67H6.26V17H8.34ZM7.3 9.77A1.21 1.21 0 1 0 7.29 7.35A1.21 1.21 0 0 0 7.3 9.77ZM17.74 17V13.52C17.74 11.66 16.75 10.5 15.13 10.5C13.84 10.5 13.28 11.21 12.96 11.71V10.67H10.88C10.91 11.36 10.88 17 10.88 17H12.96V13.46C12.96 13.27 12.97 13.09 13.03 12.95C13.18 12.57 13.52 12.17 14.1 12.17C14.86 12.17 15.16 12.75 15.16 13.61V17H17.74Z"/>
                </svg>

              </a>

            </div>

          </div>

        </div>

        <div className="border-t border-slate-800 mt-14 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">

          <p className="text-sm text-gray-500">
            © {new Date().getFullYear()} FraudShield AI. All rights reserved.
          </p>

          <p className="text-sm text-gray-500 text-center">
            Final Year Project • Intelligent Fraud Detection Framework for Online Payment Platforms in Nigeria
          </p>

        </div>

      </div>
    </footer>
  );
}