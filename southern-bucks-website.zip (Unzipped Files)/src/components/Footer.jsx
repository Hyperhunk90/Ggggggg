import React from 'react';
import { Phone, Mail, MapPin, Facebook, Instagram } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const handlePhoneClick = () => {
    window.location.href = 'tel:+12253694434';
  };

  const handleEmailClick = () => {
    window.location.href = 'mailto:SBL@southernbucklawn.com';
  };

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-card border-t border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="py-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <img 
              src="/assets/images/southern_bucks_logo.png" 
              alt="Southern Bucks Lawnscaping" 
              className="h-16 w-auto mb-4"
            />
            <p className="text-muted-foreground mb-6 leading-relaxed max-w-md">
              Professional lawn care and landscaping services in Walker, LA and surrounding areas. 
              Bringing 13 years of industrial precision to your outdoor space.
            </p>
            
            {/* Contact Info */}
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <MapPin className="w-5 h-5 text-secondary flex-shrink-0" />
                <span className="text-muted-foreground">
                  Serving Walker, LA from our Brett Dr. base
                </span>
              </div>
              <button 
                onClick={handlePhoneClick}
                className="flex items-center space-x-3 text-muted-foreground hover:text-secondary transition-colors duration-300"
              >
                <Phone className="w-5 h-5 flex-shrink-0" />
                <span>(225) 369-4434</span>
              </button>
              <button 
                onClick={handleEmailClick}
                className="flex items-center space-x-3 text-muted-foreground hover:text-secondary transition-colors duration-300"
              >
                <Mail className="w-5 h-5 flex-shrink-0" />
                <span>SBL@southernbucklawn.com</span>
              </button>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold text-foreground mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <button 
                  onClick={() => scrollToSection('hero')}
                  className="text-muted-foreground hover:text-secondary transition-colors duration-300"
                >
                  Home
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('services')}
                  className="text-muted-foreground hover:text-secondary transition-colors duration-300"
                >
                  Services
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('portfolio')}
                  className="text-muted-foreground hover:text-secondary transition-colors duration-300"
                >
                  Portfolio
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('contact')}
                  className="text-muted-foreground hover:text-secondary transition-colors duration-300"
                >
                  Contact Us
                </button>
              </li>
            </ul>
          </div>

          {/* Service Areas */}
          <div>
            <h3 className="text-lg font-semibold text-foreground mb-4">Service Areas</h3>
            <ul className="space-y-2 text-muted-foreground">
              <li>Walker, LA</li>
              <li>Denham Springs, LA</li>
              <li>Port Vincent, LA</li>
              <li>Livingston, LA</li>
              <li>Prairieville, LA</li>
              <li>Gonzales, LA</li>
              <li>Central, LA</li>
            </ul>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="py-6 border-t border-border">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            {/* Copyright */}
            <p className="text-muted-foreground text-sm">
              © {currentYear} Southern Bucks Lawnscaping. All rights reserved.
            </p>

            {/* Social Links (placeholder for future use) */}
            <div className="flex space-x-4">
              <button className="text-muted-foreground hover:text-secondary transition-colors duration-300">
                <Facebook size={20} />
              </button>
              <button className="text-muted-foreground hover:text-secondary transition-colors duration-300">
                <Instagram size={20} />
              </button>
            </div>

            {/* Legal Links */}
            <div className="flex space-x-6 text-sm">
              <button className="text-muted-foreground hover:text-secondary transition-colors duration-300">
                Privacy Policy
              </button>
              <button className="text-muted-foreground hover:text-secondary transition-colors duration-300">
                Terms of Service
              </button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

