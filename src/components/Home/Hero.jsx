import { Link } from "react-router-dom";
import heroBackground from "../../assets/images/image.JPG"; // Make sure this matches your actual file name

export default function Hero() {
  return (
    <section className="relative py-24 overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroBackground} // Use the imported variable, not a string
          alt="Digital security background"
          className="w-full h-full object-cover"
        />
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900/95 via-slate-900/85 to-blue-900/90"></div>
        {/* Secondary Overlay for depth */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <div className="flex justify-center">
          <div className="max-w-4xl text-center">

            {/* Heading */}
            <h1 className="mt-8 text-5xl lg:text-6xl font-extrabold leading-tight text-white">
              Secure Every
              <span className="bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent">
                {" "}Digital Transaction{" "}
              </span>
              Before Fraud Happens.
            </h1>

            {/* Description */}
            <p className="mt-8 text-lg leading-8 text-blue-100/90 max-w-3xl mx-auto">
              Rybon is an intelligent fraud detection framework
              designed to protect online payment platforms through
              behavioral analytics, adaptive risk scoring,
              machine learning, and real-time transaction monitoring.
              <br className="hidden md:block" />
              The framework proactively identifies suspicious activities,
              minimizes financial losses, and strengthens customer trust
              before fraudulent transactions are completed.
            </p>

            {/* Buttons */}
            <div className="mt-10 flex flex-wrap justify-center gap-5">
              <Link
                to="/demo"
                className="bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 transition-all duration-300 text-white px-8 py-4 rounded-xl font-semibold shadow-lg shadow-blue-500/30 hover:shadow-blue-500/50 transform hover:-translate-y-1"
              >
                Explore Live Demo
              </Link>

              <Link
                to="/documentation"
                className="border border-white/30 backdrop-blur-sm hover:border-white hover:bg-white/10 transition-all duration-300 text-white px-8 py-4 rounded-xl font-semibold transform hover:-translate-y-1"
              >
                Read Documentation
              </Link>
            </div>

            {/* Statistics */}
            <div className="mt-16 flex flex-wrap justify-center gap-12 border-t border-white/10 pt-12">
              <div>
                <h2 className="text-4xl font-bold text-white">
                  99.8%
                </h2>
                <p className="text-blue-300/80 text-sm font-medium">
                  Fraud Detection Accuracy
                </p>
              </div>

              <div>
                <h2 className="text-4xl font-bold text-white">
                  {"<"}1 sec
                </h2>
                <p className="text-blue-300/80 text-sm font-medium">
                  Risk Analysis Time
                </p>
              </div>

              <div>
                <h2 className="text-4xl font-bold text-white">
                  24/7
                </h2>
                <p className="text-blue-300/80 text-sm font-medium">
                  Continuous Monitoring
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}