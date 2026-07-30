export default function Partners() {
  const companies = [
    { 
      name: "OPay", 
      logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4d/OPay_Logo.svg/2560px-OPay_Logo.svg.png",
      color: "from-blue-600 to-blue-800"
    },
    { 
      name: "PalmPay", 
      logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2b/PalmPay_Logo.svg/2560px-PalmPay_Logo.svg.png",
      color: "from-green-500 to-green-700"
    },
    { 
      name: "Moniepoint", 
      logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/39/Moniepoint_logo.svg/2560px-Moniepoint_logo.svg.png",
      color: "from-purple-500 to-purple-700"
    },
    { 
      name: "Kuda", 
      logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/07/Kuda_Bank_Logo.svg/2560px-Kuda_Bank_Logo.svg.png",
      color: "from-red-400 to-red-600"
    },
    { 
      name: "Flutterwave", 
      logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/19/Flutterwave_logo.svg/2560px-Flutterwave_logo.svg.png",
      color: "from-indigo-500 to-indigo-700"
    },
    { 
      name: "Paystack", 
      logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6e/Paystack_Logo.svg/2560px-Paystack_Logo.svg.png",
      color: "from-cyan-500 to-blue-600"
    },
    { 
      name: "UBA", 
      logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/10/UBA_Group_logo.svg/2560px-UBA_Group_logo.svg.png",
      color: "from-red-500 to-red-700"
    },
    { 
      name: "GTBank", 
      logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/88/GTBank_Logo.svg/2560px-GTBank_Logo.svg.png",
      color: "from-orange-500 to-orange-700"
    },
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
            Rybon is designed to integrate with banks,
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
              key={company.name}
              className="
                group
                rounded-3xl
                bg-white/80
                backdrop-blur-xl
                border
                border-white
                shadow-lg
                p-8
                transition-all
                duration-300
                hover:-translate-y-3
                hover:shadow-2xl
                hover:border-blue-300
                flex
                flex-col
                items-center
                justify-center
                min-h-[180px]
              "
            >
              <div className="flex items-center justify-center h-20 w-full mb-4">
                <img
                  src={company.logo}
                  alt={`${company.name} logo`}
                  className="max-h-16 max-w-full object-contain transition-all duration-300 group-hover:scale-110"
                  onError={(e) => {
                    // Fallback if image fails to load
                    e.target.style.display = 'none';
                    e.target.parentElement.innerHTML = `
                      <div class="flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-r ${company.color} text-white text-2xl font-bold">
                        ${company.name.charAt(0)}
                      </div>
                    `;
                  }}
                />
              </div>
              <h3 className="text-lg font-semibold text-slate-700 group-hover:text-blue-600 transition">
                {company.name}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}