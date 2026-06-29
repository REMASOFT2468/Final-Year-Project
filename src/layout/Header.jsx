import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import logo from "../assets/images/logo.png"; // Update the path to your logo

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinkClass = ({ isActive }) =>
    isActive
      ? "text-blue-600 font-semibold"
      : "text-gray-700 hover:text-blue-600 transition";

  return (
    <header className="fixed top-0 left-0 w-full bg-white shadow-md z-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center justify-between h-20">

          {/* Logo */}
          <Link
            to="/"
            className="flex items-center gap-3"
          >
            <img
              src={logo}
              alt="FraudShield AI Logo"
              className="w-11 h-11 object-contain"
            />

            <div>
              <h1 className="text-xl font-bold text-blue-700">
                FraudShield AI
              </h1>
              <p className="text-xs text-gray-500">
                Secure Payments
              </p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-10">

            <nav className="flex items-center gap-8">
              <NavLink to="/" className={navLinkClass}>
                Home
              </NavLink>

              <NavLink to="/demo" className={navLinkClass}>
                Demo
              </NavLink>

              <NavLink to="/documentation" className={navLinkClass}>
                Documentation
              </NavLink>
            </nav>

            {/* CTA Button */}
            <Link
              to="/demo"
              className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold transition duration-300 shadow-md"
            >
              Request Demo
            </Link>

          </div>

          {/* Mobile Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-8 h-8"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {isOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden py-6 border-t">

            <nav className="flex flex-col gap-5">

              <NavLink
                to="/"
                onClick={() => setIsOpen(false)}
                className={navLinkClass}
              >
                Home
              </NavLink>

              <NavLink
                to="/demo"
                onClick={() => setIsOpen(false)}
                className={navLinkClass}
              >
                Demo
              </NavLink>

              <NavLink
                to="/documentation"
                onClick={() => setIsOpen(false)}
                className={navLinkClass}
              >
                Documentation
              </NavLink>

              <Link
                to="/demo"
                onClick={() => setIsOpen(false)}
                className="bg-blue-600 text-white text-center py-3 rounded-lg font-semibold hover:bg-blue-700 transition"
              >
                Request Demo
              </Link>

            </nav>

          </div>
        )}

      </div>
    </header>
  );
}