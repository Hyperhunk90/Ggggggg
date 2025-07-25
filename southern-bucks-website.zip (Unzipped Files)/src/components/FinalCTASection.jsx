import React from 'react';
import { ArrowRight, Phone, Mail } from 'lucide-react';

const FinalCTASection = () => {
  const handleQuoteClick = () => {
    // This would link to the Google Form URL provided by the client
    window.open('https://forms.google.com/your-form-url', '_blank');
  };

  const handlePhoneClick = () => {
    window.location.href = 'tel:+12253694434';
  };

  const handleEmailClick = () => {
    window.location.href = 'mailto:SBL@southernbucklawn.com';
  };

  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-background via-card to-background relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-10 left-10 w-32 h-32 border-2 border-secondary rounded-full"></div>
        <div className="absolute bottom-10 right-10 w-48 h-48 border-2 border-primary rounded-full"></div>
        <div className="absolute top-1/2 left-1/4 w-24 h-24 border-2 border-secondary rounded-full"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center">
          {/* Main Headline */}
          <h2 className="text-4xl md:text-6xl font-bold text-foreground mb-6">
            Ready to Transform Your
            <br />
            <span className="text-secondary">Outdoor Space?</span>
          </h2>

          {/* Subheadline */}
          <p className="text-xl md:text-2xl text-muted-foreground mb-12 max-w-3xl mx-auto leading-relaxed">
            Get your free, no-obligation quote today and discover why homeowners across Walker, LA 
            trust Southern Bucks Lawnscaping for all their landscaping needs.
          </p>

          {/* Primary CTA Button */}
          <div className="mb-12">
            <button 
              onClick={handleQuoteClick}
              className="btn-primary px-12 py-4 text-xl font-bold rounded-lg hover:scale-105 transform transition-all duration-300 shadow-2xl inline-flex items-center space-x-3"
            >
              <span>Request a Free Quote Online</span>
              <ArrowRight size={24} />
            </button>
          </div>

          {/* Divider */}
          <div className="flex items-center justify-center mb-12">
            <div className="flex-1 h-px bg-border max-w-xs"></div>
            <span className="px-6 text-muted-foreground font-medium">OR</span>
            <div className="flex-1 h-px bg-border max-w-xs"></div>
          </div>

          {/* Contact Options */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-2xl mx-auto">
            {/* Phone */}
            <button
              onClick={handlePhoneClick}
              className="flex items-center justify-center space-x-4 p-6 bg-card rounded-lg border border-border hover:border-secondary transition-all duration-300 hover:transform hover:scale-105 group"
            >
              <div className="p-3 bg-secondary/10 rounded-full group-hover:bg-secondary/20 transition-colors duration-300">
                <Phone className="w-6 h-6 text-secondary" />
              </div>
              <div className="text-left">
                <p className="text-sm text-muted-foreground">Call us directly</p>
                <p className="text-lg font-semibold text-foreground">(225) 369-4434</p>
              </div>
            </button>

            {/* Email */}
            <button
              onClick={handleEmailClick}
              className="flex items-center justify-center space-x-4 p-6 bg-card rounded-lg border border-border hover:border-secondary transition-all duration-300 hover:transform hover:scale-105 group"
            >
              <div className="p-3 bg-secondary/10 rounded-full group-hover:bg-secondary/20 transition-colors duration-300">
                <Mail className="w-6 h-6 text-secondary" />
              </div>
              <div className="text-left">
                <p className="text-sm text-muted-foreground">Send us an email</p>
                <p className="text-lg font-semibold text-foreground">SBL@southernbucklawn.com</p>
              </div>
            </button>
          </div>

          {/* Service Areas */}
          <div className="mt-16 p-8 bg-card/50 rounded-lg border border-border">
            <h3 className="text-2xl font-semibold text-foreground mb-4">
              Proudly Serving
            </h3>
            <p className="text-lg text-muted-foreground">
              Walker • Denham Springs • Port Vincent • Livingston • Prairieville • Gonzales • Central
            </p>
            <p className="text-sm text-muted-foreground mt-2">
              And surrounding areas in Louisiana
            </p>
          </div>

          {/* Guarantee */}
          <div className="mt-12 flex flex-col md:flex-row items-center justify-center space-y-4 md:space-y-0 md:space-x-8 text-center">
            <div className="flex items-center space-x-2">
              <div className="w-3 h-3 bg-secondary rounded-full"></div>
              <span className="text-muted-foreground">Free Estimates</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-3 h-3 bg-secondary rounded-full"></div>
              <span className="text-muted-foreground">Licensed & Insured</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-3 h-3 bg-secondary rounded-full"></div>
              <span className="text-muted-foreground">Satisfaction Guaranteed</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FinalCTASection;

