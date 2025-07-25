import React, { useState }mport { X } from 'lucide-react';

const PortfolioSection = () => {
  const [activeFilter, setActiveFilter] = useState('all');
  const [lightboxImage, setLightboxImage] = useState(null);

  const portfolioItems = [
    {
      id: 1,
      image: '/assets/images/lawn_care_before_after_1.png',
      category: 'lawn-care',
      title: 'Lawn Restoration in Walker, LA',
      description: 'Complete lawn transformation with professional mowing and maintenance'
    },
    {
      id: 2,
      image: '/assets/images/lawn_care_before_after_2.webp',
      category: 'lawn-care',
      title: 'Residential Lawn Care in Denham Springs, LA',
      description: 'Weekly maintenance program results'
    },
    {
      id: 3,
      image: '/assets/images/landscaping_before_after_1.png',
      category: 'landscaping',
      title: 'Garden Makeover in Port Vincent, LA',
      description: 'Complete landscape design and installation'
    },
    {
      id: 4,
      image: '/assets/images/hardscape_before_after_1.jpg',
      category: 'hardscapes',
      title: 'Patio Installation in Livingston, LA',
      description: 'Custom hardscape design with outdoor living space'
    }
  ];

  const filters = [
    { id: 'all', label: 'All Projects' },
    { id: 'lawn-care', label: 'Lawn Care' },
    { id: 'landscaping', label: 'Landscaping' },
    { id: 'hardscapes', label: 'Hardscapes' }
  ];

  const filteredItems = activeFilter === 'all' 
    ? portfolioItems 
    : portfolioItems.filter(item => item.category === activeFilter);

  const openLightbox = (image) => {
    setLightboxImage(image);
  };

  const closeLightbox = () => {
    setLightboxImage(null);
  };

  return (
    <section id="portfolio" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            See Our Work
          </h2>
          <div className="w-24 h-1 bg-secondary mx-auto mb-8"></div>
          
          {/* Filter Buttons */}
          <div className="flex flex-wrap justify-center gap-4">
            {filters.map((filter) => (
              <button
                key={filter.id}
                onClick={() => setActiveFilter(filter.id)}
                className={`px-6 py-2 rounded-full font-medium transition-all duration-300 ${
                  activeFilter === filter.id
                    ? 'portfolio-filter active'
                    : 'bg-card text-foreground hover:bg-secondary/20 border border-border'
                }`}
              >
                {filter.label}
              </button>
            ))}
          </div>
        </div>

        {/* Portfolio Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredItems.map((item) => (
            <div 
              key={item.id}
              className="group relative overflow-hidden rounded-lg bg-card border border-border hover:border-secondary transition-all duration-300 cursor-pointer"
              onClick={() => openLightbox(item)}
            >
              <div className="aspect-w-16 aspect-h-12 overflow-hidden">
                <img 
                  src={item.image} 
                  alt={item.title}
                  className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              
              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <h3 className="text-xl font-semibold text-foreground mb-2">
                    {item.title}
                  </h3>
                  <p className="text-muted-foreground">
                    {item.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View More Button */}
        <div className="text-center mt-12">
          <button className="btn-secondary px-8 py-3 font-semibold rounded-lg hover:scale-105 transform transition-all duration-300">
            View Full Portfolio
          </button>
        </div>
      </div>

      {/* Lightbox */}
      {lightboxImage && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4">
          <div className="relative max-w-4xl max-h-full">
            <button
              onClick={closeLightbox}
              className="absolute -top-12 right-0 text-white hover:text-secondary transition-colors duration-300"
            >
              <X size={32} />
            </button>
            <img 
              src={lightboxImage.image} 
              alt={lightboxImage.title}
              className="max-w-full max-h-full object-contain rounded-lg"
            />
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6 rounded-b-lg">
              <h3 className="text-xl font-semibold text-white mb-2">
                {lightboxImage.title}
              </h3>
              <p className="text-gray-300">
                {lightboxImage.description}
              </p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default PortfolioSection;

