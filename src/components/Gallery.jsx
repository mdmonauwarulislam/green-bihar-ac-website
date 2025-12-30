import g1 from '../assets/gallery/g1.png';
import g2 from '../assets/gallery/g2.jpg';
import g3 from '../assets/gallery/g3.png';
import g4 from '../assets/gallery/g4.png';
import g5 from '../assets/gallery/g5.png';
import g6 from '../assets/gallery/g6.png';
import g8 from '../assets/gallery/g8.png';
import g9 from '../assets/gallery/g9.png';
import g10 from '../assets/gallery/g10.png';
import g11 from '../assets/gallery/g11.png';
import g12 from '../assets/gallery/g12.jpg';
import g13 from '../assets/gallery/g13.jpg';
import g14 from '../assets/gallery/g14.jpeg';
import g15 from '../assets/gallery/g15.jpeg';

                                                                                                                                                                                            

const Gallery = ({ onContactClick }) => {
  const galleryItems = [
    {
      id: 1,
      image: g1,
      size: 'normal',
      category: 'Card',
      title: 'Visiting Card'
    },
    {
      id: 2,
      image: g2,
      size: 'wide',
      category: 'Residential',
      title: 'Home AC Servicing'
    },
    {
      id: 3,
      image: g3,
      size: 'normal',
      category: 'Installation',
      title: 'Modern AC Units'
    },
    {
      id: 4,
      image: g4,
      size: 'normal',
      category: 'Installation',
      title: 'AC Installation'
    },
    {
      id: 5,
      image: g5,
      size: 'tall',
      category: 'Residential',
      title: 'Split AC Setup'
    },
    {
      id: 6,
      image: g6,
      size: 'normal',
      category: 'Advertisement',
      title: 'Banner Design'
    },
    
    {
      id: 8,
      image: g8,
      size: 'normal',
      category: 'Installation',
      title: 'Office Ac Installation'
    },
    {
      id: 9,
      image: g9,
      size: 'normal',
      category: 'Repair',
      title: 'AC Repair Work'
    },
    {
      id: 10,
      image: g10,
      size: 'normal',
      category: 'Commercial',
      title: 'Large Scale Projects'
    },
    {
      id: 11,
      image: g11,
      size: 'wide',
      category: 'Advertisement',
      title: 'AC Brands Showcase'
    },
    {
      id: 12,
      image: g12,
      size: 'normal',
      category: 'Maintenance',
      title: 'Regular Service'
    },
    {
      id: 13,
      image: g13,
      size: 'normal',
      category: 'Commercial',
      title: 'Business Solutions'
    },
    {
      id: 14,
      image: g14,
      size: 'normal',
      category: 'Installation',
      title: 'Professional Setup'
    },
    {
      id: 15,
      image: g15,
      size: 'normal',
      category: 'Repair',
      title: 'Expert Repairs'
    }
  ];

  
  return (
    <section id="gallery" className="py-16 md:py-24 bg-linear-to-br from-gray-50 to-primary-light/20 relative overflow-hidden">
      {/* Background Decorations */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-primary-accent/5 rounded-full blur-3xl"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-in">
          <span className="inline-block px-4 py-2 bg-primary/10 text-primary font-semibold rounded-full text-sm mb-4">
            Our Work
          </span>
          <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-4">
            Project <span className="text-primary">Gallery</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Showcasing our professional AC installation, maintenance, and repair services across various sectors
          </p>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {galleryItems.map((item) => (
            <div
              key={item.id}
              className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 cursor-pointer border-2 border-transparent hover:border-primary"
            >
              <img 
                src={item.image} 
                alt={item.title}
                className="w-full h-auto object-contain transform group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-linear-to-t from-primary-dark via-primary-dark/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              
              {/* Overlay Content */}
              <div className="absolute bottom-0 left-0 right-0 p-6 text-white transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                <span className="inline-block px-3 py-1 bg-primary-accent rounded-full text-xs font-semibold mb-2">
                  {item.category}
                </span>
                <h3 className="text-lg font-bold">{item.title}</h3>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="mt-16 text-center">
          <div className="bg-linear-to-r from-primary to-primary-accent text-white rounded-3xl shadow-2xl p-8 md:p-12">
            <h3 className="text-3xl md:text-4xl font-bold mb-4">
              Ready to Start Your Project?
            </h3>
            <p className="text-white/90 text-lg mb-6 max-w-2xl mx-auto">
              Join hundreds of satisfied customers who trust us for their AC solutions
            </p>
            <button onClick={onContactClick} className="bg-white text-primary font-bold px-10 py-4 rounded-xl hover:bg-primary-light transition-all duration-300 transform hover:scale-105 shadow-lg">
              Get Free Quote
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Gallery;
