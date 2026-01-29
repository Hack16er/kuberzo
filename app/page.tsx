export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      <nav className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-200 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <h1 className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                Kuberzo
              </h1>
            </div>
            <div className="hidden md:flex items-center space-x-6">
              <a href="#services" className="text-gray-700 hover:text-blue-600 transition-colors">Services</a>
              <a href="#research" className="text-gray-700 hover:text-blue-600 transition-colors">Research</a>
              <button className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors">
                Open Free Demat Account
              </button>
              <button className="border-2 border-blue-600 text-blue-600 px-4 py-2 rounded-lg text-lg font-semibold hover:bg-blue-50 transition">
                Schedule a Call
              </button>
            </div>
          </div>
        </div>
      </nav>

      <section className="relative overflow-hidden bg-gradient-to-br from-blue-50 via-white to-indigo-50 py-20 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
                Invest Smarter,
                <span className="block text-blue-600">Not Harder</span>
              </h1>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                Your trusted partner for wealth creation. Experience seamless investing with expert guidance, 
                cutting-edge research, and a platform designed for your success.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 mb-12">
                <button className="bg-blue-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-blue-700 transition-all transform hover:scale-105 shadow-lg">
                  Start Investing Today
                </button>
                <button className="border-2 border-blue-600 text-blue-600 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-blue-50 transition-all">
                  Learn More
                </button>
              </div>
              <div className="grid grid-cols-3 gap-8">
              </div>
            </div>
            <div className="relative">
              <div className="bg-gradient-to-br from-blue-500 to-indigo-600 rounded-2xl p-8 shadow-2xl">
                <div className="bg-white rounded-xl p-6 space-y-4">
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600">Portfolio Value</span>
                    <span className="text-green-600 font-semibold">+12.5%</span>
                  </div>
                  <div className="text-3xl font-bold text-gray-900">₹12,45,000</div>
                  <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
                    <div className="h-full bg-gradient-to-r from-blue-500 to-indigo-600 w-3/4"></div>
                  </div>
                  <div className="grid grid-cols-2 gap-4 pt-4">
                    <div>
                      <div className="text-sm text-gray-600">Equity</div>
                      <div className="text-lg font-bold text-gray-800">₹8,50,000</div>
                    </div>
                    <div>
                      <div className="text-sm text-gray-600">Mutual Funds</div>
                      <div className="text-lg font-bold text-gray-800">₹3,95,000</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Investment Offerings Section */}
      <section id="services" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Investment Solutions</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Comprehensive investment options tailored to meet your financial goals
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Equity Trading",
                description: "Trade in stocks with real-time market data and advanced trading tools",
                icon: "📈",
                color: "from-blue-500 to-blue-600"
              },
              {
                title: "IPO Investments",
                description: "Participate in Initial Public Offerings and grow your portfolio",
                icon: "🚀",
                color: "from-green-500 to-green-600"
              },
              {
                title: "Mutual Funds",
                description: "Diversified portfolio management with expert fund selection",
                icon: "💼",
                color: "from-purple-500 to-purple-600"
              },
              {
                title: "Derivatives",
                description: "Advanced trading in futures and options with risk management",
                icon: "⚡",
                color: "from-orange-500 to-orange-600"
              },
              {
                title: "Fixed Income",
                description: "Secure investments with bonds and fixed deposit options",
                icon: "🔒",
                color: "from-indigo-500 to-indigo-600"
              },
              {
                title: "Research & Advisory",
                description: "Expert insights and recommendations for informed decisions",
                icon: "📊",
                color: "from-pink-500 to-pink-600"
              }
            ].map((service, index) => (
              <div
                key={index}
                className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 cursor-pointer group"
              >
                <div className={`w-16 h-16 rounded-lg bg-gradient-to-br ${service.color} flex items-center justify-center text-3xl mb-4 group-hover:scale-110 transition-transform`}>
                  {service.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{service.title}</h3>
                <p className="text-gray-600 mb-4">{service.description}</p>
                <a href="#" className="text-blue-600 font-semibold hover:text-blue-700 inline-flex items-center">
                  Learn More →
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Research & Recommendations Section */}
      <section id="research" className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Research & Recommendations</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Expert analysis and stock recommendations to guide your investment decisions
            </p>
          </div>
          <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white">
                  <tr>
                    <th className="px-6 py-4 text-left font-semibold">Stock</th>
                    <th className="px-6 py-4 text-left font-semibold">Current Price</th>
                    <th className="px-6 py-4 text-left font-semibold">Target Price</th>
                    <th className="px-6 py-4 text-left font-semibold">Upside</th>
                    <th className="px-6 py-4 text-left font-semibold">Recommendation</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  {[
                    { stock: "Reliance", current: "₹2,450", target: "₹2,800", upside: "+14.3%", recommendation: "BUY" },
                    { stock: "TCS", current: "₹3,200", target: "₹3,500", upside: "+9.4%", recommendation: "HOLD" },
                    { stock: "Infosys", current: "₹1,580", target: "₹1,750", upside: "+10.8%", recommendation: "BUY" },
                    { stock: "HDFC Bank", current: "₹1,650", target: "₹1,800", upside: "+9.1%", recommendation: "HOLD" },
                    { stock: "ICICI Bank", current: "₹950", target: "₹1,100", upside: "+15.8%", recommendation: "BUY" }
                  ].map((item, index) => (
                    <tr key={index} className="hover:bg-blue-50 transition-colors">
                      <td className="px-6 py-4 font-semibold text-gray-900">{item.stock}</td>
                      <td className="px-6 py-4 text-gray-700">{item.current}</td>
                      <td className="px-6 py-4 text-gray-700">{item.target}</td>
                      <td className="px-6 py-4 text-green-600 font-semibold">{item.upside}</td>
                      <td className="px-6 py-4">
                        <span className={`px-3 py-1 rounded-full text-sm font-semibold ${
                          item.recommendation === "BUY" 
                            ? "bg-green-100 text-green-700" 
                            : "bg-yellow-100 text-yellow-700"
                        }`}>
                          {item.recommendation}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <div className="bg-gray-50 px-6 py-4 text-center">
              <button className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors font-semibold">
                Subscribe to Research Reports
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Why Choose Us?</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Experience the difference with our comprehensive investment platform
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Real-time Trading",
                description: "Execute trades instantly with our advanced trading platform and real-time market data",
                icon: "⚡"
              },
              {
                title: "Expert Research",
                description: "Access in-depth research reports and expert recommendations from our analyst team",
                icon: "📊"
              },
              {
                title: "Secure & Reliable",
                description: "Bank-grade security with 99.9% uptime ensuring your investments are always protected",
                icon: "🔒"
              },
              {
                title: "Mobile App",
                description: "Trade on-the-go with our feature-rich mobile app available on iOS and Android",
                icon: "📱"
              },
              {
                title: "24/7 Support",
                description: "Round-the-clock customer support to assist you with all your investment needs",
                icon: "💬"
              },
              {
                title: "Low Brokerage",
                description: "Competitive brokerage rates with transparent pricing and no hidden charges",
                icon: "💰"
              }
            ].map((feature, index) => (
              <div key={index} className="text-center p-6">
                <div className="text-5xl mb-4">{feature.icon}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-20 bg-gradient-to-r from-blue-600 to-indigo-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <h3 className="text-2xl font-bold text-white mb-4">Kuberzo</h3>
              <p className="text-sm">
              Your trusted partner for wealth creation and financial growth.
              </p>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-4">Services</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="#" className="hover:text-white transition-colors">Equity Trading</a></li>
                <li><a href="#" className="hover:text-white transition-colors">IPO Investments</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Mutual Funds</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-4">Company</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="#" className="hover:text-white transition-colors">About Us</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Careers</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Contact Us</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-4">Contact</h4>
              <ul className="space-y-2 text-sm">
                <li>Email: support@kuberzo.com</li>
                <li>Phone: +91 123456789</li>
                <li>Address: Pune, India</li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
