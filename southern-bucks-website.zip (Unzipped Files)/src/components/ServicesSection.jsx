import React from 'react';

const ServicesSection = () => {
  const services = [
    {
      icon: "/assets/icons/mowing_icon.png",
      title: "Weekly/Bi-Weekly Mowing",
      description: "Professional lawn mowing with precision and care for a perfectly manicured yard."
    },
    {
      icon: "/assets/icons/shrub_trimming_icon.png",
      title: "Shrub Trimming & Planting",
      description: "Expert pruning and planting services to keep your landscape healthy and beautiful."
    },
    {
      icon: "/assets/icons/mulching_icon.png",
      title: "Mulching Services",
      description: "Quality mulch installation to protect plants and enhance your garden's appearance."
    },
    {
      icon: "/assets/icons/weed_removal_icon.png",
      title: "Weed Removal & Control",
      description: "Comprehensive weed management to keep your lawn and gardens pristine."
    },
    {
      icon: "/assets/icons/gutter_cleaning_icon.png",
      title: "Gutter Cleaning",
      description: "Professional gutter cleaning and maintenance to protect your property."
    },
    {
      icon: "/assets/icons/landscape_design_icon.png",
      title: "3D Landscape Design & Planning",
      description: "Custom landscape design with 3D visualization to bring your vision to life."
    },
    {
      icon: "/assets/icons/hardscape_icon.png",
      title: "Hardscapes & Pavers",
      description: "Beautiful hardscape installations including patios, walkways, and retaining walls."
    },
    {
      icon: "/assets/icons/fire_pit_icon.png",
      title: "Fire Pits & Outdoor Kitchens",
      description: "Custom outdoor living spaces for entertaining and relaxation."
    },
    {
      icon: "/assets/icons/commercial_maintenance_icon.png",
      title: "Commercial Property Maintenance",
      description: "Professional landscaping services for businesses and commercial properties."
    },
    {
      icon: "/assets/icons/pressure_washing_icon.png",
      title: "Pressure Washing",
      description: "Professional cleaning services for driveways, sidewalks, and exterior surfaces."
    }
  ];

  return (
    <section id="services" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Comprehensive Lawn & Landscape Solutions
          </h2>
          <div className="w-24 h-1 bg-secondary mx-auto"></div>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div 
              key={index}
              className="bg-card p-6 rounded-lg border border-border hover:border-secondary transition-all duration-300 hover:transform hover:scale-105 group"
            >
              <div className="flex flex-col items-center text-center">
                <img 
                  src={service.icon} 
                  alt={service.title}
                  className="service-icon mb-4 group-hover:scale-110 transition-transform duration-300"
                />
                <h3 className="text-xl font-semibold text-foreground mb-3">
                  {service.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {service.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Additional Services Note */}
        <div className="text-center mt-12">
          <p className="text-lg text-muted-foreground mb-6">
            Don't see what you're looking for? We offer many additional services!
          </p>
          <button className="btn-secondary px-6 py-3 font-semibold rounded-lg hover:scale-105 transform transition-all duration-300">
            Contact Us for Custom Services
          </button>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;

