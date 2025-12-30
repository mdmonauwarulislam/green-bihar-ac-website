import { Clock, IndianRupee, ShieldCheck } from "lucide-react";
import saleservice from '../../public/sale&service.png';
import installtion from '../../public/installtion.png';
import repair from '../../public/repair.png';
import usedac from '../../public/buyingselling.png';


const Services = () => {
  const services = [
    {
      image: saleservice,
      title: 'AC Sales & Services',
      description: 'We provide new and used air conditioners from trusted brands, helping customers choose the right AC according to their space, budget, and requirements.',
      features: ['New AC Sales', 'Used AC Options', 'Brand Consultation', 'Budget-Friendly Solutions']
    },
    {
      image: installtion,
      title: 'AC Installation & Maintenance',
      description: 'Our professional installation services ensure proper fitting, safety, and optimal performance. Regular maintenance improves efficiency and extends the lifespan of your AC.',
      features: ['Professional Installation', 'Safety Compliance', 'Regular Maintenance', 'Performance Optimization']
    },
    {
      image: repair,
      title: 'AC Repair Services',
      description: 'We offer quick and reliable repair solutions for all AC issues, including cooling problems, gas leakage, noise, and electrical faults.',
      features: ['Cooling Issues', 'Gas Leakage Repair', 'Noise Reduction', 'Electrical Fault Fixing']
    },
    {
      image: usedac,
      title: 'Used AC Buying & Selling',
      description: 'We buy and sell used residential and commercial air conditioners at the best market prices after thorough inspection and testing.',
      features: ['Fair Market Prices', 'Quality Inspection', 'Residential AC', 'Commercial AC']
    }
  ];

  const industries = [
    { icon: '🏠', name: 'Residential Homes & Apartments', desc: 'Comfort cooling for your family' },
    { icon: '🏢', name: 'Offices & Corporate Spaces', desc: 'Professional climate control' },
    { icon: '🏥', name: 'Hospitals & Clinics', desc: 'Critical temperature management' },
    { icon: '💒', name: 'Marriage Halls & Event Venues', desc: 'Large space cooling solutions' },
    { icon: '🏪', name: 'Shops & Commercial Buildings', desc: 'Business comfort solutions' }
  ];

  const processSteps = [
    { step: '01', title: 'Contact Us', desc: 'Reach out via call, WhatsApp, or visit our office' },
    { step: '02', title: 'Site Visit', desc: 'Our expert visits your location for assessment' },
    { step: '03', title: 'Quote & Plan', desc: 'Receive detailed quote and service timeline' },
    { step: '04', title: 'Service Delivery', desc: 'Professional execution with quality assurance' }
  ];

  return (
    <section id="services" className="py-16 md:py-24 bg-white relative overflow-hidden">
      {/* Background Decorations */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-primary-accent/5 rounded-full blur-3xl"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-in">
          <span className="inline-block px-4 py-2 bg-primary/10 text-primary font-semibold rounded-full text-sm mb-4">
            What We Offer
          </span>
          <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-4">
            Our <span className="text-primary">Professional Services</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Complete AC solutions for your home and business
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {services.map((service, index) => (
            <div
              key={service.title}
              className="group relative overflow-hidden rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2"
              style={{
                backgroundImage: `url(${service.image})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center'
              }}
            >
              {/* Overlay */}
              <div className="absolute inset-0 bg-linear-to-br from-primary-dark/90 to-black/80 group-hover:from-primary/95 group-hover:to-primary-dark/90 transition-all duration-500"></div>
              
              {/* Content */}
              <div className="relative z-10 p-8 h-full flex flex-col justify-between text-white">
                <div>
                  <h3 className="text-2xl md:text-3xl font-bold mb-4 group-hover:text-white transition-colors duration-300">
                    {service.title}
                  </h3>
                  <p className="text-gray-200 group-hover:text-white transition-colors duration-300 mb-6">
                    {service.description}
                  </p>
                </div>
                
                {/* Features */}
                <div className="space-y-2">
                  {service.features.map((feature, idx) => (
                    <div key={`${index}-${idx}`} className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary-accent"></div>
                      <span className="text-sm text-gray-200 group-hover:text-white transition-colors duration-300">
                        {feature}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* How It Works */}
        <div className="mb-16">
          <h3 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-12">
            How We <span className="text-primary">Work</span>
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {processSteps.map((item, index) => (
              <div key={item.title} className="relative">
                <div className="bg-white border-2 border-primary/20 rounded-2xl p-6 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
                  <div className="text-6xl font-black text-primary/30 mb-2">{item.step}</div>
                  <h4 className="text-xl font-bold text-primary mb-2">{item.title}</h4>
                  <p className="text-gray-600">{item.desc}</p>
                </div>
                {index < processSteps.length - 1 && (
                  <div className="hidden md:block absolute top-1/2 -right-3 transform -translate-y-1/2 text-primary text-2xl">→</div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Industries We Serve */}
        <div className="relative bg-linear-to-br from-primary-dark via-primary to-primary-accent text-white rounded-3xl shadow-2xl overflow-hidden p-8 md:p-12 mb-16">
          {/* Decorative Elements */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-primary-accent/20 rounded-full blur-3xl"></div>
          
          <div className="relative z-10">
            <div className="text-center mb-12">
              <span className="inline-block px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full text-sm font-semibold mb-4">
                Our Expertise
              </span>
              <h3 className="text-3xl md:text-4xl font-bold mb-4">Industries We Serve</h3>
              <p className="text-white/90 text-lg max-w-2xl mx-auto">
                Trusted by diverse sectors for exceptional AC solutions
              </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
              {industries.map((industry,) => (
                <div
                  key={industry.name}
                  className="group relative bg-white/10 backdrop-blur-md rounded-3xl p-6 text-center hover:bg-white/25 transition-all duration-500 transform hover:scale-105 hover:-translate-y-3 border-2 border-white/20 hover:border-white/50 shadow-xl hover:shadow-2xl overflow-hidden"
                >
                  {/* Gradient Accent Bar */}
                  <div className="absolute top-0 left-0 right-0 h-1 bg-linear-to-r from-primary-light via-white to-primary-accent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  
                  {/* Icon Container */}
                  <div className="relative mb-5">
                    <div className="w-20 h-20 mx-auto bg-white/10 rounded-2xl flex items-center justify-center group-hover:bg-white/20 transition-all duration-300 group-hover:rotate-6">
                      <span className="text-5xl transform group-hover:scale-125 transition-transform duration-500">{industry.icon}</span>
                    </div>
                  </div>
                  
                  {/* Content */}
                  <h4 className="font-bold text-lg mb-2 leading-tight group-hover:text-primary-light transition-colors duration-300">
                    {industry.name}
                  </h4>
                  <p className="text-white/70 text-sm group-hover:text-white transition-colors duration-300 leading-relaxed">
                    {industry.desc}
                  </p>
                  
                  {/* Bottom Accent */}
                  <div className="absolute bottom-0 left-0 right-0 h-1 bg-linear-to-r from-transparent via-white/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Service Guarantee */}
        <div className="mb-12">
          <div className="text-center mb-12">
            <span className="inline-block px-4 py-2 bg-primary/10 text-primary font-semibold rounded-full text-sm mb-4">
              Our Promise
            </span>
            <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Why <span className="text-primary">Choose Us</span>
            </h3>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Your satisfaction is our top priority
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div className="group bg-linear-to-br from-white to-primary-light border-2 border-primary/20 rounded-2xl p-8 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border-b-4 border-b-primary hover:border-b-primary-accent">
              <div className="flex justify-center mb-6">
                <ShieldCheck className="w-16 h-16 text-primary group-hover:text-primary-accent group-hover:scale-110 transition-all duration-300"/>
              </div>
              <h4 className="text-2xl font-bold text-primary mb-3 group-hover:text-primary-accent transition-colors">Quality Guarantee</h4>
              <p className="text-gray-700 leading-relaxed">100% satisfaction with professional service standards and expert craftsmanship</p>
            </div>
            <div className="group bg-linear-to-br from-white to-primary-light border-2 border-primary/20 rounded-2xl p-8 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border-b-4 border-b-primary hover:border-b-primary-accent">
              <div className="flex justify-center mb-6">
                <IndianRupee className="w-16 h-16 text-primary group-hover:text-primary-accent group-hover:scale-110 transition-all duration-300"/>
              </div>
              <h4 className="text-2xl font-bold text-primary mb-3 group-hover:text-primary-accent transition-colors">Fair Pricing</h4>
              <p className="text-gray-700 leading-relaxed">Transparent quotes with no hidden charges or surprise fees ever</p>
            </div>
            <div className="group bg-linear-to-br from-white to-primary-light border-2 border-primary/20 rounded-2xl p-8 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border-b-4 border-b-primary hover:border-b-primary-accent">
              <div className="flex justify-center mb-6">
                <Clock className="w-16 h-16 text-primary group-hover:text-primary-accent group-hover:scale-110 transition-all duration-300"/>
              </div>
              <h4 className="text-2xl font-bold text-primary mb-3 group-hover:text-primary-accent transition-colors">24/7 Support</h4>
              <p className="text-gray-700 leading-relaxed">Round-the-clock assistance for emergencies and urgent service needs</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
