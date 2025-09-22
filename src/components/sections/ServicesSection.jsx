import React from 'react';
import { ArrowRight, CheckCircle } from 'lucide-react';
import { services } from '../../data/websiteData';

const ServicesSection = ({ currentThemeConfig }) => {
  return (
    <section className={`py-24 bg-gradient-to-b from-white to-${currentThemeConfig.cardGradient}`}>
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Our <span className={`text-${currentThemeConfig.primary}`}>Engineering</span> Services
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We have expertise in Design, Supply, Installation, testing and commissioning of comprehensive 
            engineering solutions with Class A Fire License in Maharashtra.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <div
                key={index}
                className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden transform hover:-translate-y-2"
              >
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-60" />
                  <div className="absolute top-4 left-4">
                    <div className="w-12 h-12 bg-white/90 rounded-full flex items-center justify-center backdrop-blur-sm">
                      <IconComponent className="text-gray-700" size={24} />
                    </div>
                  </div>
                </div>

                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 mb-4 leading-relaxed">
                    {service.description}
                  </p>

                  <div className="space-y-2 mb-6">
                    {service.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center space-x-2">
                        <CheckCircle className="text-green-500 flex-shrink-0" size={16} />
                        <span className="text-sm text-gray-600">{feature}</span>
                      </div>
                    ))}
                  </div>

                  <button className={`w-full bg-gradient-to-r ${currentThemeConfig.primaryGradient} text-white py-3 rounded-lg font-semibold transition-all duration-300 transform group-hover:scale-105 flex items-center justify-center space-x-2`}>
                    <span>Learn More</span>
                    <ArrowRight size={16} />
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;