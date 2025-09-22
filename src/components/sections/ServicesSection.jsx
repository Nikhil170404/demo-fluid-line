import React from 'react';
import { ArrowRight, CheckCircle } from 'lucide-react';
import { services } from '../../data/websiteData';

const ServicesSection = ({ currentThemeConfig }) => {
  return (
    <section className={`py-16 sm:py-20 lg:py-24 bg-gradient-to-b from-white to-${currentThemeConfig.cardGradient}`}>
      <div className="container mx-auto px-4 sm:px-6">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 sm:mb-6">
            Our <span className={`text-${currentThemeConfig.primary}`}>Engineering</span> Services
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            We have expertise in Design, Supply, Installation, testing and commissioning of comprehensive 
            engineering solutions with Class A Fire License in Maharashtra.
          </p>
        </div>

        {/* Mobile-First Grid Layout */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <div
                key={index}
                className="group bg-white rounded-xl sm:rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden transform hover:-translate-y-1 sm:hover:-translate-y-2"
              >
                {/* Service Image */}
                <div className="relative h-40 sm:h-48 overflow-hidden">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-60" />
                  
                  {/* Service Icon */}
                  <div className="absolute top-3 sm:top-4 left-3 sm:left-4">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 bg-white/90 rounded-full flex items-center justify-center backdrop-blur-sm shadow-md">
                      <IconComponent className="text-gray-700" size={20} />
                    </div>
                  </div>

                  {/* Mobile Badge */}
                  <div className="absolute top-3 sm:top-4 right-3 sm:right-4">
                    <div className={`px-2 py-1 sm:px-3 sm:py-1 bg-gradient-to-r ${currentThemeConfig.primaryGradient} text-white text-xs sm:text-sm font-semibold rounded-full shadow-md`}>
                      Premium
                    </div>
                  </div>
                </div>

                {/* Service Content */}
                <div className="p-4 sm:p-6">
                  <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-2 sm:mb-3 leading-tight">
                    {service.title}
                  </h3>
                  <p className="text-sm sm:text-base text-gray-600 mb-4 leading-relaxed line-clamp-3">
                    {service.description}
                  </p>

                  {/* Features List - Responsive */}
                  <div className="space-y-1.5 sm:space-y-2 mb-4 sm:mb-6">
                    {service.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center space-x-2">
                        <CheckCircle className="text-green-500 flex-shrink-0" size={14} />
                        <span className="text-xs sm:text-sm text-gray-600">{feature}</span>
                      </div>
                    ))}
                  </div>

                  {/* Mobile-Optimized Action Button */}
                  <button className={`w-full bg-gradient-to-r ${currentThemeConfig.primaryGradient} text-white py-2.5 sm:py-3 rounded-lg font-semibold transition-all duration-300 transform group-hover:scale-105 flex items-center justify-center space-x-2 text-sm sm:text-base touch-manipulation`}>
                    <span>Learn More</span>
                    <ArrowRight size={14} className="sm:w-4 sm:h-4" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {/* Mobile-Specific Call to Action */}
        <div className="mt-12 sm:mt-16 text-center">
          <div className={`bg-gradient-to-r ${currentThemeConfig.primaryGradient} rounded-xl sm:rounded-2xl p-6 sm:p-8 text-white`}>
            <h3 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4">Need Custom Engineering Solutions?</h3>
            <p className="text-sm sm:text-base mb-4 sm:mb-6 opacity-90">
              Our experts are ready to discuss your specific requirements and provide tailored solutions.
            </p>
            
            {/* Mobile Contact Buttons */}
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 max-w-md mx-auto">
              <a 
                href="tel:+915122225138"
                className="flex-1 bg-white text-blue-600 hover:bg-gray-100 px-4 sm:px-6 py-2.5 sm:py-3 rounded-full font-semibold transition-all duration-300 text-sm sm:text-base touch-manipulation flex items-center justify-center space-x-2"
              >
                <span>📞</span>
                <span>Call Expert</span>
              </a>
              <a 
                href="mailto:projects@fluidlinegroup.com"
                className="flex-1 border-2 border-white/30 text-white hover:bg-white/10 px-4 sm:px-6 py-2.5 sm:py-3 rounded-full font-semibold transition-all duration-300 text-sm sm:text-base touch-manipulation flex items-center justify-center space-x-2"
              >
                <span>✉️</span>
                <span>Email Us</span>
              </a>
            </div>
          </div>
        </div>

        
      </div>

      {/* Background Pattern for Desktop */}
      <div className="hidden lg:block absolute inset-0 opacity-5 pointer-events-none">
        <div className="absolute top-10 left-10 w-20 h-20 border border-gray-300 rounded-full"></div>
        <div className="absolute top-32 right-20 w-16 h-16 border border-gray-300 rounded-full"></div>
        <div className="absolute bottom-20 left-1/4 w-12 h-12 border border-gray-300 rounded-full"></div>
        <div className="absolute bottom-32 right-10 w-24 h-24 border border-gray-300 rounded-full"></div>
      </div>
    </section>
  );
};

export default ServicesSection;