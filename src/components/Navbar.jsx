import { useState, useEffect } from 'react';
import logo from '../../public/gb_logo_transparent.png';

const Navbar = ({ onContactClick }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
      
      // Determine active section
      const sections = ['home', 'about', 'services', 'gallery'];
      const scrollPosition = window.scrollY + 100;
      
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  return (
    <nav className={`fixed w-full top-0 z-50 transition-all duration-300 ${
      isScrolled 
        ? 'bg-white/95 backdrop-blur-md shadow-xl' 
        : 'bg-white shadow-lg'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 md:h-20">
          {/* Logo */}
          <div className="flex items-center space-x-3 group cursor-pointer" onClick={() => scrollToSection('home')}>
            <img src={logo} alt="Green Bihar AC Logo" className='h-16 md:h-24' />
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-2">
            <button
              onClick={() => scrollToSection('home')}
              className={`px-4 py-2 rounded-lg transition-all duration-300 font-semibold relative group ${
                activeSection === 'home' 
                  ? 'text-primary' 
                  : 'text-gray-700 hover:text-primary'
              }`}
            >
              Home
              <span className={`absolute bottom-0 left-0 w-full h-0.5 bg-primary transform transition-transform duration-300 ${
                activeSection === 'home' ? 'scale-x-80' : 'scale-x-0 group-hover:scale-x-80'
              }`}></span>
            </button>
            <button
              onClick={() => scrollToSection('about')}
              className={`px-4 py-2 rounded-lg transition-all duration-300 font-semibold relative group ${
                activeSection === 'about' 
                  ? 'text-primary' 
                  : 'text-gray-700 hover:text-primary'
              }`}
            >
              About
              <span className={`absolute bottom-0 left-0 w-full h-0.5 bg-primary transform transition-transform duration-300 ${
                activeSection === 'about' ? 'scale-x-80' : 'scale-x-0 group-hover:scale-x-80'
              }`}></span>
            </button>
            <button
              onClick={() => scrollToSection('services')}
              className={`px-4 py-2 rounded-lg transition-all duration-300 font-semibold relative group ${
                activeSection === 'services' 
                  ? 'text-primary' 
                  : 'text-gray-700 hover:text-primary'
              }`}
            >
              Services
              <span className={`absolute bottom-0 left-0 w-full h-0.5 bg-primary transform transition-transform duration-300 ${
                activeSection === 'services' ? 'scale-x-80' : 'scale-x-0 group-hover:scale-x-80'
              }`}></span>
            </button>
            <button
              onClick={() => scrollToSection('gallery')}
              className={`px-4 py-2 rounded-lg transition-all duration-300 font-semibold relative group ${
                activeSection === 'gallery' 
                  ? 'text-primary' 
                  : 'text-gray-700 hover:text-primary'
              }`}
            >
              Gallery
              <span className={`absolute bottom-0 left-0 w-full h-0.5 bg-primary transform transition-transform duration-300 ${
                activeSection === 'gallery' ? 'scale-x-80' : 'scale-x-0 group-hover:scale-x-80'
              }`}></span>
            </button>
            
            {/* Call Button */}
            <a
              href="tel:+917977359210"
              className="flex items-center space-x-2 px-4 py-2 text-primary hover:text-primary-accent transition-colors font-semibold group"
            >
              <svg className="w-5 h-5 group-hover:rotate-12 transition-transform" fill="currentColor" viewBox="0 0 20 20">
                <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
              </svg>
              <span className="hidden lg:inline">7977359210</span>
            </a>
            
            {/* Contact Button */}
            <button
              onClick={onContactClick}
              className="ml-2 bg-linear-to-r from-primary to-primary-accent text-white px-6 py-2.5 rounded-xl font-bold hover:shadow-lg hover:shadow-primary/30 transition-all duration-300 transform hover:scale-105"
            >
              Get Quote
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 rounded-lg text-gray-700 hover:text-primary hover:bg-primary-light transition-all duration-300 focus:outline-none"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {isMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2.5}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2.5}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`md:hidden overflow-hidden transition-all duration-300 ${
        isMenuOpen ? 'max-h-96' : 'max-h-0'
      }`}>
        <div className="bg-white/95 backdrop-blur-md border-t border-gray-200 shadow-lg">
          <div className="px-4 py-3 space-y-1">
            <button
              onClick={() => scrollToSection('home')}
              className={`block w-full text-left px-4 py-3 rounded-xl font-semibold transition-all duration-300 ${
                activeSection === 'home'
                  ? 'bg-primary text-white'
                  : 'text-gray-700 hover:bg-primary-light hover:text-primary'
              }`}
            >
              Home
            </button>
            <button
              onClick={() => scrollToSection('about')}
              className={`block w-full text-left px-4 py-3 rounded-xl font-semibold transition-all duration-300 ${
                activeSection === 'about'
                  ? 'bg-primary text-white'
                  : 'text-gray-700 hover:bg-primary-light hover:text-primary'
              }`}
            >
              About
            </button>
            <button
              onClick={() => scrollToSection('services')}
              className={`block w-full text-left px-4 py-3 rounded-xl font-semibold transition-all duration-300 ${
                activeSection === 'services'
                  ? 'bg-primary text-white'
                  : 'text-gray-700 hover:bg-primary-light hover:text-primary'
              }`}
            >
              Services
            </button>
            <button
              onClick={() => scrollToSection('gallery')}
              className={`block w-full text-left px-4 py-3 rounded-xl font-semibold transition-all duration-300 ${
                activeSection === 'gallery'
                  ? 'bg-primary text-white'
                  : 'text-gray-700 hover:bg-primary-light hover:text-primary'
              }`}
            >
              Gallery
            </button>
            
            {/* Mobile Call Button */}
            <a
              href="tel:+917977359210"
              className="block w-full text-left px-4 py-3 rounded-xl font-semibold text-gray-700 hover:bg-primary-light hover:text-primary transition-all duration-300"
            >
              Call: 7977359210
            </a>
            
            {/* Mobile Contact Button */}
            <button
              onClick={() => {
                onContactClick();
                setIsMenuOpen(false);
              }}
              className="block w-full text-center px-4 py-3 bg-linear-to-r from-primary to-primary-accent text-white rounded-xl font-bold shadow-lg"
            >
              Get Free Quote
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
