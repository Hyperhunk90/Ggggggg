import React from 'react';

const HeroSection = () => {
  const handleQuoteClick = () => {
    // This would link to the Google Form URL provided by the client
    window.open('https://forms.google.com/your-form-url', '_blank');
  };

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image (since we don't have video) */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ 
          backgroundImage: `url(/assets/images/professional_mowing_1.jpg)`,
          filter: 'brightness(0.4)'
        }}
      />
      
      {/* Overlay */}
      <div className="hero-overlay absolute inset-0" />
      
      {/* Content */}
      <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
        {/* Logo */}
        <div className="mb-8">
          <img 
            src="/assets/images/southern_bucks_logo.png" 
            alt="Southern Bucks Lawnscaping" 
            className="h-32 w-auto mx-auto mb-6"
          />
        </div>
        
        {/* Tagline */}
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-foreground mb-8 leading-tight">
          Professionalism & Pride
          <br />
          <span className="text-secondary">in Every Yard</span>
        </h1>
        
        {/* CTA Button */}
        <button 
          onClick={handleQuoteClick}
          className="btn-primary px-8 py-4 text-xl font-semibold rounded-lg hover:scale-105 transform transition-all duration-300 shadow-lg"
        >
          Get Your Free Quote
        </button>
        
        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-foreground rounded-full flex justify-center">
            <div className="w-1 h-3 bg-foreground rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;

