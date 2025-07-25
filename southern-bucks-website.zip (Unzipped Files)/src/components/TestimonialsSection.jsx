import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Star } from 'lucide-react';

const TestimonialsSection = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const testimonials = [
    {
      id: 1,
      name: "Sarah P.",
      location: "Walker, LA",
      rating: 5,
      text: "Shane and his team transformed our overgrown yard into something we're truly proud of. The attention to detail is incredible, and they always show up when promised. Highly recommend!"
    },
    {
      id: 2,
      name: "Mike R.",
      location: "Denham Springs, LA",
      rating: 5,
      text: "Professional service from start to finish. Shane's background in industrial work really shows in the precision of his landscaping. Our neighbors constantly ask who does our yard work!"
    },
    {
      id: 3,
      name: "Jennifer L.",
      location: "Port Vincent, LA",
      rating: 5,
      text: "We've used several lawn services over the years, but none compare to Southern Bucks Lawnscaping. Shane treats our property like it's his own. The quality is unmatched."
    },
    {
      id: 4,
      name: "David M.",
      location: "Livingston, LA",
      rating: 5,
      text: "From the initial consultation to the final result, everything was handled professionally. The hardscape work they did for our patio exceeded our expectations. Worth every penny!"
    },
    {
      id: 5,
      name: "Lisa K.",
      location: "Prairieville, LA",
      rating: 5,
      text: "Shane's team installed our new landscape design and it looks amazing! They were punctual, professional, and cleaned up perfectly after each visit. We couldn't be happier."
    }
  ];

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  // Auto-rotate testimonials
  useEffect(() => {
    const interval = setInterval(nextTestimonial, 5000);
    return () => clearInterval(interval);
  }, []);

  const renderStars = (rating) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star 
        key={i} 
        size={20} 
        className={i < rating ? 'text-yellow-400 fill-current' : 'text-gray-400'} 
      />
    ));
  };

  return (
    <section className="py-20 bg-card">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            What Our Clients Are Saying
          </h2>
          <div className="w-24 h-1 bg-secondary mx-auto"></div>
        </div>

        {/* Testimonial Carousel */}
        <div className="relative max-w-4xl mx-auto">
          <div className="testimonial-card rounded-lg p-8 md:p-12 text-center relative overflow-hidden">
            {/* Background Pattern */}
            <div className="absolute top-0 left-0 w-full h-full opacity-5">
              <div className="text-9xl font-bold text-secondary absolute -top-4 -left-4">"</div>
              <div className="text-9xl font-bold text-secondary absolute -bottom-4 -right-4 rotate-180">"</div>
            </div>

            {/* Content */}
            <div className="relative z-10">
              {/* Stars */}
              <div className="flex justify-center mb-6">
                {renderStars(testimonials[currentTestimonial].rating)}
              </div>

              {/* Testimonial Text */}
              <blockquote className="text-xl md:text-2xl text-foreground leading-relaxed mb-8 font-light italic">
                "{testimonials[currentTestimonial].text}"
              </blockquote>

              {/* Author */}
              <div className="text-center">
                <p className="text-lg font-semibold text-foreground">
                  {testimonials[currentTestimonial].name}
                </p>
                <p className="text-secondary font-medium">
                  {testimonials[currentTestimonial].location}
                </p>
              </div>
            </div>

            {/* Navigation Arrows */}
            <button
              onClick={prevTestimonial}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 p-2 rounded-full bg-background/80 hover:bg-background transition-colors duration-300 text-foreground hover:text-secondary"
            >
              <ChevronLeft size={24} />
            </button>
            <button
              onClick={nextTestimonial}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 p-2 rounded-full bg-background/80 hover:bg-background transition-colors duration-300 text-foreground hover:text-secondary"
            >
              <ChevronRight size={24} />
            </button>
          </div>

          {/* Dots Indicator */}
          <div className="flex justify-center mt-8 space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentTestimonial(index)}
                className={`w-3 h-3 rounded-full transition-colors duration-300 ${
                  index === currentTestimonial ? 'bg-secondary' : 'bg-border'
                }`}
              />
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-12">
          <p className="text-lg text-muted-foreground mb-6">
            Ready to join our satisfied customers?
          </p>
          <button className="btn-primary px-8 py-3 font-semibold rounded-lg hover:scale-105 transform transition-all duration-300">
            Get Your Free Quote Today
          </button>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;

