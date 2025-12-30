 import img from '../../public/hero_greenbihar.png';
const Hero = ({ onContactClick }) => {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-linear-to-br from-primary-light/30 via-white to-primary/10">
      {/* Background Image with Modern Overlay */}
      <div className="absolute inset-0 opacity-12">
        <img
          src={img}
          alt="Modern air conditioning unit"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Animated gradient shapes */}
      <div className="absolute top-20 right-20 w-96 h-96 bg-primary/20 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-20 left-20 w-96 h-96 bg-primary-accent/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>

      <div className="container relative z-10 px-4 py-30 md:py-40 max-w-7xl mx-auto">
        <div className="text-center max-w-4xl mx-auto animate-fade-in ">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-5 py-2 md:mb-4 mb-12 bg-primary/10 backdrop-blur-sm rounded-full text-primary text-xs md:text-sm font-semibold border border-primary/20 shadow-lg">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
            </svg>
            Professional HVAC Solutions
          </div>

          {/* Main Heading */}
          <h1 className="text-4xl md:text-7xl lg:text-8xl font-black leading-tight md:mb-0 mb-5">
            Green Bihar
            <span className="block bg-linear-to-r from-primary via-primary-accent to-primary bg-clip-text text-transparent">
              Air Conditioning
            </span>
          </h1>

          {/* Description */}
          <p className="text-md md:text-2xl text-gray-600 md:mb-5 mb-10 max-w-2xl mx-auto leading-relaxed">
            Expert AC installation, repair, and maintenance services for residential and commercial properties across Bihar
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <button
              onClick={onContactClick}
              className="group px-4 md:px-8 md:py-4 py-2 bg-primary hover:bg-primary-dark text-white text-md md:text-lg font-bold rounded-xl shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105 flex items-center justify-center gap-2"
            >
              Get Free Quote
              <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </button>
            <button
              onClick={() => scrollToSection('services')}
              className="px-4 md:px-8 md:py-4 py-2 bg-transparent border-2 border-primary text-primary hover:bg-primary hover:text-white text-lg font-bold rounded-xl transition-all duration-300 hover:scale-105"
            >
              View Services
            </button>
          </div>

          {/* Features */}
          <div className="flex items-center justify-center gap-2 sm:gap-8 text-sm text-gray-600">
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5 text-primary" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span className="font-medium">24/7 Service</span>
            </div>
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5 text-primary" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span className="font-medium">Expert Technicians</span>
            </div>
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5 text-primary" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span className="font-medium">Best Prices</span>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-4 md:bottom-20 left-1/2 -translate-x-1/2">
        <div className="w-6 h-10 border-2 border-primary rounded-full flex justify-center pt-2 animate-bounce">
          <div className="w-1 h-3 bg-primary rounded-full animate-pulse" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
