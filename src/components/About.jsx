import aboutimg from '../../public/about_green.png';
import miftaur from '../../public/miftaurr.png';
const About = () => {
  return (
    <section id="about" className="py-16 md:py-24 bg-linear-to-b from-white via-gray-50 to-white relative overflow-hidden">
      {/* Background Decorations */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-primary-accent/5 rounded-full blur-3xl translate-x-1/2 translate-y-1/2"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-in">
          <span className="inline-block px-4 py-2 bg-primary/10 text-primary font-semibold rounded-full text-sm mb-4">
            About Us
          </span>
          <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-4">
            Your Trusted <span className="text-primary">Cooling Partner</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Delivering excellence in air conditioning solutions across Bihar since years
          </p>
        </div>


        {/* Company Overview with Image */}
        <div className="bg-white rounded-3xl shadow-2xl overflow-hidden mb-16 border border-gray-100 hover:shadow-3xl transition-shadow duration-300">
          <div className="grid md:grid-cols-2 gap-0">
            <div className="h-80 md:h-auto relative overflow-hidden group">
              <img 
                src={aboutimg} 
                alt="AC Service" 
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-linear-to-t from-primary/80 to-transparent flex items-end p-8">
                <div className="text-white">
                  <div className="flex items-center gap-2 mb-2">
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                    </svg>
                    <span className="text-lg font-bold">Serving Bihar with Pride</span>
                  </div>
                  <p className="text-white/90 text-sm">Professional HVAC Solutions Since Years</p>
                </div>
              </div>
            </div>
            <div className="p-8 md:p-12 flex flex-col justify-center">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full text-primary font-semibold mb-6 w-fit">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M10.394 2.08a1 1 0 00-.788 0l-7 3a1 1 0 000 1.84L5.25 8.051a.999.999 0 01.356-.257l4-1.714a1 1 0 11.788 1.838L7.667 9.088l1.94.831a1 1 0 00.787 0l7-3a1 1 0 000-1.838l-7-3zM3.31 9.397L5 10.12v4.102a8.969 8.969 0 00-1.05-.174 1 1 0 01-.89-.89 11.115 11.115 0 01.25-3.762zM9.3 16.573A9.026 9.026 0 007 14.935v-3.957l1.818.78a3 3 0 002.364 0l5.508-2.361a11.026 11.026 0 01.25 3.762 1 1 0 01-.89.89 8.968 8.968 0 00-5.35 2.524 1 1 0 01-1.4 0zM6 18a1 1 0 001-1v-2.065a8.935 8.935 0 00-2-.712V17a1 1 0 001 1z" />
                </svg>
                Trusted Provider
              </div>
              <h3 className="text-3xl font-black text-gray-900 mb-6">
                Leading AC Solutions in <span className="text-primary">Patna, Bihar</span>
              </h3>
              <p className="text-lg text-gray-700 leading-relaxed mb-4">
                <span className="font-bold text-primary">Green Bihar Air Conditioning Sales & Services</span> is 
                your trusted air-conditioning solutions provider, offering reliable, affordable, and professional 
                AC services for both residential and commercial clients across Bihar.
              </p>
              <p className="text-gray-700 leading-relaxed mb-6">
                We specialize in <span className="font-semibold text-primary">AC sales, installation, repair, and maintenance</span>, 
                ensuring optimal comfort and efficiency throughout the year. Our team of skilled technicians brings 
                years of industry experience, focusing on delivering exceptional workmanship, transparent pricing, 
                and unmatched customer satisfaction.
              </p>
              <div className="flex flex-wrap gap-3">
                {['Installation', 'Repair', 'Maintenance', 'Sales'].map((service, index) => (
                  <span key={index} className="px-4 py-2 bg-primary-light text-primary rounded-full text-sm font-semibold">
                    {service}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Owner Section */}
        <div className="bg-linear-to-br from-primary-light via-white to-primary-light rounded-3xl shadow-2xl overflow-hidden mb-16 border border-primary/20">
          <div className="grid md:grid-cols-5 gap-0">
            <div className="md:col-span-2 h-80 md:h-auto relative overflow-hidden group">
              <img 
                src={miftaur}
                alt="Md Miftaur Rahman - Founder" 
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-linear-to-t from-primary/60 via-primary/20 to-transparent"></div>
              <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center">
                    <svg className="w-6 h-6 text-primary" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-2xl font-black">Md Miftaur Rahman</p>
                    <p className="text-white/90 text-sm">Founder & CEO</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="md:col-span-3 p-8 md:p-12 flex flex-col justify-center">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full text-primary font-semibold mb-6 w-fit">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
                Leadership
              </div>
              <h3 className="text-3xl md:text-4xl font-black text-gray-900 mb-6">
                Meet the Visionary Behind <span className="text-primary">Green Bihar</span>
              </h3>
              <div className="space-y-4 mb-6">
                <p className="text-lg text-gray-700 leading-relaxed">
                  With over a decade of hands-on experience in the HVAC industry, Md Miftaur Rahman founded 
                  <span className="font-bold text-primary"> Green Bihar Air Conditioning</span> with a clear vision: 
                  to provide world-class air conditioning solutions to every corner of Bihar. His unwavering 
                  commitment to quality service and customer satisfaction has transformed Green Bihar into 
                  a trusted household name across the region.
                </p>
                <div className="pl-6 border-l-4 border-primary bg-primary/5 p-4 rounded-r-xl">
                  <svg className="w-8 h-8 text-primary mb-2" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M18 13V5a2 2 0 00-2-2H4a2 2 0 00-2 2v8a2 2 0 002 2h3l3 3 3-3h3a2 2 0 002-2zM5 7a1 1 0 011-1h8a1 1 0 110 2H6a1 1 0 01-1-1zm1 3a1 1 0 100 2h3a1 1 0 100-2H6z" clipRule="evenodd" />
                  </svg>
                  <p className="text-gray-700 leading-relaxed italic">
                    "Our mission is simple - to ensure every home and business in Bihar has access to reliable, 
                    efficient, and affordable cooling solutions. We don't just install air conditioners; we build 
                    lasting relationships with our customers based on trust and exceptional service."
                  </p>
                </div>
              </div>
              <div className="flex flex-wrap items-center gap-4">
                <a 
                  href="tel:+917977359210" 
                  className="inline-flex items-center gap-2 px-6 py-3 bg-primary hover:bg-primary-dark text-white font-bold rounded-xl transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                  </svg>
                  +91 7977359210
                </a>
                <div className="flex items-center gap-2 text-gray-600">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
                  </svg>
                  <span className="text-sm font-medium">Available 24/7</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Vision & Mission */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {/* Vision */}
          <div className="relative bg-linear-to-br from-primary via-primary-accent to-primary-dark text-white rounded-3xl shadow-2xl p-8 md:p-10 overflow-hidden group hover:shadow-3xl transition-shadow duration-300">
            <div className="absolute top-0 right-0 w-40 h-40 bg-white/10 rounded-full blur-3xl group-hover:scale-150 transition-transform duration-500"></div>
            <div className="relative z-10">
              <div className="flex items-center mb-6">
                <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center mr-4 backdrop-blur-sm">
                  <svg className="w-9 h-9" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M10 12a2 2 0 100-4 2 2 0 000 4z" />
                    <path fillRule="evenodd" d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <h3 className="text-3xl font-black">Our Vision</h3>
              </div>
              <p className="text-lg leading-relaxed text-white/95">
                To become <span className="font-black">Bihar's most reliable and professional air-conditioning 
                service provider</span>, recognized for exceptional quality, honest practices, and long-term customer 
                trust while championing eco-friendly and energy-efficient cooling solutions that protect our environment.
              </p>
              <div className="mt-6 flex items-center gap-2 text-white/80">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span className="text-sm font-semibold">Committed to Excellence & Sustainability</span>
              </div>
            </div>
          </div>

          {/* Mission */}
          <div className="bg-white border-2 border-primary rounded-3xl shadow-2xl p-8 md:p-10 hover:shadow-3xl transition-shadow duration-300">
            <div className="flex items-center mb-6">
              <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mr-4">
                <svg className="w-9 h-9 text-primary" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z" clipRule="evenodd" />
                </svg>
              </div>
              <h3 className="text-3xl font-black text-primary">Our Mission</h3>
            </div>
            <ul className="space-y-4">
              {[
                'Provide high-quality AC installation, repair, and maintenance services',
                'Offer energy-efficient and cost-effective cooling solutions',
                'Ensure customer satisfaction through timely and reliable support',
                'Continuously improve service quality using modern tools and techniques',
                'Support HVAC planning for homes, offices, hospitals, and commercial buildings'
              ].map((item, index) => (
                <li key={index} className="flex items-start group">
                  <div className="shrink-0 w-6 h-6 bg-primary rounded-full flex items-center justify-center mr-3 mt-0.5 group-hover:scale-110 transition-transform">
                    <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <span className="text-gray-700 leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Why Choose Us */}
        <div className="relative bg-linear-to-br from-primary-light via-white to-primary-light rounded-3xl p-8 md:p-12 border-2 border-primary/20 overflow-hidden">
          <div className="absolute top-0 left-1/2 w-96 h-96 bg-primary/10 rounded-full blur-3xl -translate-y-1/2"></div>
          <div className="relative z-10">
            <div className="text-center mb-12">
              <span className="inline-block px-4 py-2 bg-primary text-white font-semibold rounded-full text-sm mb-4">
                Why Choose Us
              </span>
              <h3 className="text-3xl md:text-4xl font-black text-gray-900 mb-3">
                Why <span className="text-primary">Green Bihar</span> Stands Out
              </h3>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Experience the difference with Bihar's most trusted AC service provider
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                { 
                  icon: (
                    <svg className="w-8 h-8 text-primary group-hover:text-white transition-colors" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3zM6 8a2 2 0 11-4 0 2 2 0 014 0zM16 18v-3a5.972 5.972 0 00-.75-2.906A3.005 3.005 0 0119 15v3h-3zM4.75 12.094A5.973 5.973 0 004 15v3H1v-3a3 3 0 013.75-2.906z" />
                    </svg>
                  ),
                  text: 'Experienced and Certified Technicians',
                  desc: 'Skilled professionals with years of expertise'
                },
                { 
                  icon: (
                    <svg className="w-8 h-8 text-primary group-hover:text-white transition-colors" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M4 4a2 2 0 00-2 2v4a2 2 0 002 2V6h10a2 2 0 00-2-2H4zm2 6a2 2 0 012-2h8a2 2 0 012 2v4a2 2 0 01-2 2H8a2 2 0 01-2-2v-4zm6 4a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                    </svg>
                  ),
                  text: 'Affordable & Transparent Pricing',
                  desc: 'No hidden costs, clear upfront quotes'
                },
                { 
                  icon: (
                    <svg className="w-8 h-8 text-primary group-hover:text-white transition-colors" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z" clipRule="evenodd" />
                    </svg>
                  ),
                  text: 'Quick Response Time',
                  desc: 'Same-day service for emergencies'
                },
                { 
                  icon: (
                    <svg className="w-8 h-8 text-primary group-hover:text-white transition-colors" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M11.49 3.17c-.38-1.56-2.6-1.56-2.98 0a1.532 1.532 0 01-2.286.948c-1.372-.836-2.942.734-2.106 2.106.54.886.061 2.042-.947 2.287-1.561.379-1.561 2.6 0 2.978a1.532 1.532 0 01.947 2.287c-.836 1.372.734 2.942 2.106 2.106a1.532 1.532 0 012.287.947c.379 1.561 2.6 1.561 2.978 0a1.533 1.533 0 012.287-.947c1.372.836 2.942-.734 2.106-2.106a1.533 1.533 0 01.947-2.287c1.561-.379 1.561-2.6 0-2.978a1.532 1.532 0 01-.947-2.287c.836-1.372-.734-2.942-2.106-2.106a1.532 1.532 0 01-2.287-.947zM10 13a3 3 0 100-6 3 3 0 000 6z" clipRule="evenodd" />
                    </svg>
                  ),
                  text: 'Genuine Spare Parts',
                  desc: 'Original parts with warranty'
                },
                { 
                  icon: (
                    <svg className="w-8 h-8 text-primary group-hover:text-white transition-colors" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clipRule="evenodd" />
                    </svg>
                  ),
                  text: 'Customer-First Approach',
                  desc: 'Your satisfaction is our priority'
                },
                { 
                  icon: (
                    <svg className="w-8 h-8 text-primary group-hover:text-white transition-colors" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                  ),
                  text: 'Trusted Local Provider',
                  desc: 'Serving Bihar with pride since years'
                },
              ].map((item, index) => (
                <div 
                  key={index} 
                  className="group bg-white p-6 rounded-2xl border-x-4  border-x-primary shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-105 border border-gray-100"
                >
                  <div className="flex items-start space-x-4">
                    <div className="shrink-0 w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center group-hover:bg-primary group-hover:scale-110 transition-all duration-300">
                      {item.icon}
                    </div>
                    <div>
                      <p className="text-gray-900 font-bold mb-1 group-hover:text-primary transition-colors">
                        {item.text}
                      </p>
                      <p className="text-sm text-gray-600">{item.desc}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
