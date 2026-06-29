export default function Partners() {
  const companies = [
    "OPay",
    "PalmPay",
    "Moniepoint",
    "Kuda",
    "Flutterwave",
    "Paystack",
    "UBA",
    "GTBank",
  ];

  return (
    <section className="relative overflow-hidden py-24 bg-gradient-to-b from-slate-50 via-blue-50 to-white">

      {/* Background Decorations */}

      <div className="absolute -top-40 -left-40 w-96 h-96 bg-blue-300/20 rounded-full blur-3xl"></div>

      <div className="absolute -bottom-40 -right-40 w-[32rem] h-[32rem] bg-cyan-300/20 rounded-full blur-3xl"></div>

      <div className="relative max-w-7xl mx-auto px-6">

        {/* Heading */}

        <div className="text-center">

          <span className="inline-flex items-center px-5 py-2 rounded-full bg-blue-100 text-blue-700 text-sm font-semibold">
            Designed for Modern Financial Platforms
          </span>

          <h2 className="mt-6 text-4xl md:text-5xl font-bold text-slate-900 leading-tight">
            Built to Secure Nigeria's
            <br />
            Digital Payment Ecosystem
          </h2>

          <p className="mt-6 max-w-3xl mx-auto text-lg leading-8 text-slate-600">
            FraudShield AI is designed to integrate with banks,
            fintech companies, payment gateways, mobile wallets,
            and enterprise financial platforms to strengthen fraud
            prevention through intelligent transaction monitoring,
            behavioral analytics, and adaptive risk scoring.
          </p>

        </div>

        {/* Company Grid */}

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-20">

          {companies.map((company) => (

            <div
              key={company}
              className="
              group
              rounded-3xl
              bg-white/80
              backdrop-blur-xl
              border
              border-white
              shadow-lg
              p-10
              transition-all
              duration-300
              hover:-translate-y-3
              hover:shadow-2xl
              hover:border-blue-300
              "
            >

              <div className="flex items-center justify-center h-20">

                <h3 className="text-2xl font-bold text-slate-700 group-hover:text-blue-600 transition">

                  {company}

                </h3>

              </div>

            </div>

          ))}

        </div>

      </div>

    </section>
  );
}