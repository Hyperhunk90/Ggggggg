import React from 'react';
import { CheckCircle, Award, Clock, Shield } from 'lucide-react';

const WhyChooseUsSection = () => {
  const features = [
    {
      icon: <Award className="w-8 h-8 text-secondary" />,
      title: "Owner-Operated with Pride",
      description: "Shane Dantone personally oversees every project, bringing 13 years of industrial precision to your landscape."
    },
    {
      icon: <CheckCircle className="w-8 h-8 text-secondary" />,
      title: "State-of-the-Art Equipment",
      description: "We invest in the best tools to deliver the best results, efficiently and safely."
    },
    {
      icon: <Shield className="w-8 h-8 text-secondary" />,
      title: "Our Promise",
      description: "We treat your yard like it's our own. Your satisfaction is our benchmark for success."
    },
    {
      icon: <Clock className="w-8 h-8 text-secondary" />,
      title: "Reliable & Professional",
      description: "Fully licensed and insured. We show up on time and deliver on our promises."
    }
  ];

  return (
    <section className="py-20 bg-card">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Your #1 Choice in Walker, LA
          </h2>
          <div className="w-24 h-1 bg-secondary mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Shane's Photo */}
          <div className="order-2 lg:order-1">
            <div className="relative">
              <img 
                src="/assets/images/shane_dantone_headshot.jpg" 
                alt="Shane Dantone - Owner of Southern Bucks Lawnscaping"
                className="w-full max-w-md mx-auto rounded-lg shadow-2xl"
              />
              <div className="absolute -bottom-4 -right-4 bg-primary text-primary-foreground p-4 rounded-lg shadow-lg">
                <p className="font-semibold text-sm">13+ Years</p>
                <p className="text-xs">Experience</p>
              </div>
            </div>
          </div>

          {/* Features */}
          <div className="order-1 lg:order-2">
            <div className="space-y-8">
              {features.map((feature, index) => (
                <div key={index} className="flex items-start space-x-4">
                  <div className="flex-shrink-0 p-2 bg-secondary/10 rounded-lg">
                    {feature.icon}
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-foreground mb-2">
                      {feature.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Personal Story */}
            <div className="mt-12 p-6 bg-background rounded-lg border border-border">
              <h4 className="text-lg font-semibold text-foreground mb-3">
                Shane's Story
              </h4>
              <p className="text-muted-foreground leading-relaxed">
                After 13 years as an industrial electrician, Shane decided to follow his passion for landscaping. 
                He brings the same attention to detail and commitment to quality that made him successful in the 
                industrial field to every lawn and landscape project. When you choose Southern Bucks Lawnscaping, 
                you're choosing a business owner who truly cares about your property.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUsSection;

