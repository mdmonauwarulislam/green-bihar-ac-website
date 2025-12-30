const Gallery = ({ onContactClick }) => {
  // Gallery items with actual images and categories
  const galleryItems = [
    
    
    {
      id: 4,
      image: 'https://images.unsplash.com/photo-1604709177225-055f99402ea3?w=600&q=80',
      size: 'normal',
      category: 'Commercial',
      title: 'Commercial AC Solutions'
    },
    {
      id: 5,
      image: 'https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=600&q=80',
      size: 'wide',
      category: 'Residential',
      title: 'Home AC Systems'
    },
    {
      id: 6,
      image: 'https://images.unsplash.com/photo-1628744876497-eb30460be9f6?w=600&q=80',
      size: 'normal',
      category: 'Installation',
      title: 'Modern AC Units'
    },
    {
      id: 7,
      image: 'https://images.unsplash.com/photo-1582268611958-ebfd161ef9cf?w=600&q=80',
      size: 'large',
      category: 'Maintenance',
      title: 'Cleaning & Service'
    },
    
    
    {
      id: 9,
      image: 'https://images.unsplash.com/photo-1615870216519-2f9fa575fa5c?w=600&q=80',
      size: 'tall',
      category: 'Commercial',
      title: 'Large Scale Projects'
    },
    {
      id: 10,
      image: 'https://images.unsplash.com/photo-1585771724684-38269d6639fd?w=600&q=80',
      size: 'normal',
      category: 'Installation',
      title: 'Split AC Installation'
    },
    
    {
      id: 12,
      image: 'https://images.unsplash.com/photo-1582268611958-ebfd161ef9cf?w=600&q=80',
      size: 'large',
      category: 'Maintenance',
      title: 'Cleaning & Service'
    },
    {
      id: 4,
      image: 'https://images.unsplash.com/photo-1604709177225-055f99402ea3?w=600&q=80',
      size: 'normal',
      category: 'Commercial',
      title: 'Commercial AC Solutions'
    },
    
    
  ];

  const getSizeClass = (size) => {
    switch(size) {
      case 'large':
        return 'md:col-span-2 md:row-span-1';
      case 'tall':
        return 'md:row-span-2';
      case 'wide':
        return 'md:col-span-2';
      default:
        return '';
    }
  };
  
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

        {/* Masonry Grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 auto-rows-[250px] gap-4">
          {galleryItems.map((item) => (
            <div
              key={item.id}
              className={`group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 cursor-pointer border-2 border-transparent hover:border-primary ${getSizeClass(item.size)}`}
            >
              <img 
                src={item.image} 
                alt={item.title}
                className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
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
