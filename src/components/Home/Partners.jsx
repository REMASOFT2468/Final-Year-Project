import opay from '../../assets/images/opayimage.png';
import palmpayImage from '../../assets/images/palmpayimage.png';
import moniepointImage from '../../assets/images/moniepointimage.png';
import kudaImage from '../../assets/images/kudaimage.png';
import flutterwaveImage from '../../assets/images/flutterwavimage.png';
import paystackImage from '../../assets/images/paystackimage.png';
import ubaImage from '../../assets/images/ubaimage.png';
import gtbankImage from '../../assets/images/gtbankimage.png';

export default function Partners() {
  const companies = [
    { 
      name: "OPay", 
      logo: opay,
      color: "from-blue-600 to-blue-800"
    },
    { 
      name: "PalmPay", 
      logo: palmpayImage,
      color: "from-green-500 to-green-700"
    },
    { 
      name: "Moniepoint", 
      logo: moniepointImage,
      color: "from-purple-500 to-purple-700"
    },
    { 
      name: "Kuda", 
      logo: kudaImage,
      color: "from-red-400 to-red-600"
    },
    { 
      name: "Flutterwave", 
      logo: flutterwaveImage,
      color: "from-indigo-500 to-indigo-700"
    },
    { 
      name: "Paystack", 
      logo: paystackImage,
      color: "from-cyan-500 to-blue-600"
    },
    { 
      name: "UBA", 
      logo: ubaImage,
      color: "from-red-500 to-red-700"
    },
    { 
      name: "GTBank", 
      logo: gtbankImage,
      color: "from-orange-500 to-orange-700"
    },
  ];

  return (
    <section className="relative overflow-hidden py-24 bg-gradient-to-b from-slate-50 via-blue-50 to-white">
     
      <div className="absolute -top-40 -left-40 w-96 h-96 bg-blue-300/20 rounded-full blur-3xl"></div>
      <div className="absolute -bottom-40 -right-40 w-[32rem] h-[32rem] bg-cyan-300/20 rounded-full blur-3xl"></div>

      <div className="relative max-w-7xl mx-auto px-6">
        {/* Heading */}
        <div className="text-center">
          <span className="inline-flex items-center px-5 py-2 rounded-full bg-blue-100 text-blue-700 text-sm font-semibold tracking-wide">
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
                min-h-[200px]
              "
            >
              <div className="flex items-center justify-center h-24 w-full mb-4">
                <img
                  src={company.logo}
                  alt={`${company.name} logo`}
                  className="max-h-20 max-w-full object-contain transition-all duration-300 group-hover:scale-110"
                  onError={(e) => {
                    // Fallback if image fails to load
                    const parent = e.target.parentElement;
                    const fallback = document.createElement('div');
                    fallback.className = `flex items-center justify-center w-20 h-20 rounded-full bg-gradient-to-r ${company.color} text-white text-3xl font-bold shadow-lg`;
                    fallback.textContent = company.name.charAt(0);
                    e.target.style.display = 'none';
                    parent.appendChild(fallback);
                  }}
                />
              </div>
              <h3 className="text-lg font-semibold text-slate-700 group-hover:text-blue-600 transition-colors duration-300">
                {company.name}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}