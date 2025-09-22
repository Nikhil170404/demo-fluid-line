import React from 'react';
import { Star } from 'lucide-react';
import { testimonials } from '../../data/websiteData';

const TestimonialsSection = ({ currentThemeConfig }) => {
  return (
    <section className={`py-24 bg-gradient-to-r ${currentThemeConfig.statsGradient}`}>
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Client <span className={`text-${currentThemeConfig.primary}-300`}>Testimonials</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Hear from industry leaders about their experience working with Fluidline
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:border-white/20 transition-all duration-300 hover:transform hover:-translate-y-2"
            >
              <div className="flex items-center mb-6">
                <div className="flex space-x-1">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="text-yellow-400 fill-current" size={20} />
                  ))}
                </div>
              </div>

              <p className="text-gray-300 mb-6 leading-relaxed italic">
                "{testimonial.message}"
              </p>

              <div className="flex items-center">
                <div className="w-12 h-12 bg-white rounded-full mr-4 flex items-center justify-center overflow-hidden flex-shrink-0">
                  <img
                    src={testimonial.logo}
                    alt={`${testimonial.company} logo`}
                    className="w-10 h-10 object-contain"
                    loading="lazy"
                    onError={(e) => {
                      e.target.style.display = 'none';
                      e.target.nextSibling.style.display = 'flex';
                    }}
                  />
                  <div 
                    className={`w-10 h-10 bg-gradient-to-r from-${currentThemeConfig.primary} to-${currentThemeConfig.secondary} rounded-full hidden items-center justify-center`}
                  >
                    <span className="text-white font-bold text-xs">{testimonial.fallback}</span>
                  </div>
                </div>
                <div className="min-w-0">
                  <h4 className="font-semibold text-white truncate">{testimonial.company}</h4>
                  <p className="text-sm text-gray-400">{testimonial.author}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;