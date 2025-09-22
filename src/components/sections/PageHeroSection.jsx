import React from 'react';
import { ArrowRight, Download } from 'lucide-react';
import { pageHeroSlides } from '../../data/websiteData';

const PageHeroSection = ({ pageKey, currentSlide = 0, currentThemeConfig, setActiveSection }) => {
  const slides = pageHeroSlides[pageKey] || [];
  
  if (slides.length === 0) return null;

  const currentSlideData = slides[currentSlide % slides.length];

  return (
    <section className="relative h-96 md:h-[500px] overflow-hidden">
      <div className="absolute inset-0 z-10 flex items-center pt-16 md:pt-0">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="max-w-4xl">
            <div className="space-y-6 text-white">
              <div className="space-y-2">
                <h1 className="text-4xl md:text-6xl font-bold leading-tight">
                  {currentSlideData.title}
                </h1>
                <h2 className="text-xl md:text-2xl font-light text-gray-200">
                  {currentSlideData.subtitle}
                </h2>
              </div>
              <p className="text-lg text-gray-300 max-w-2xl leading-relaxed">
                {currentSlideData.description}
              </p>
              <div className="flex flex-wrap gap-4 pt-4">
                <button 
                  onClick={() => setActiveSection('contact')}
                  className={`bg-gradient-to-r ${currentThemeConfig.primaryGradient} hover:${currentThemeConfig.primaryHover} text-white px-6 py-3 rounded-full font-semibold transition-all duration-300 flex items-center space-x-2 shadow-xl hover:shadow-2xl transform hover:scale-105`}
                >
                  <span>Contact Us</span>
                  <ArrowRight size={18} />
                </button>
                <button className="border-2 border-white/30 text-white hover:bg-white/10 px-6 py-3 rounded-full font-semibold transition-all duration-300 flex items-center space-x-2 backdrop-blur-sm">
                  <Download size={18} />
                  <span>Download Brochure</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Background Images */}
      <div className="absolute inset-0">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              index === (currentSlide % slides.length) ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <img
              src={slide.image}
              alt={slide.title}
              className="w-full h-full object-cover"
              loading="lazy"
            />
            <div className={`absolute inset-0 bg-gradient-to-r ${slide.overlay}`} />
          </div>
        ))}
      </div>

      {/* Navigation Dots */}
      {slides.length > 1 && (
        <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 z-20">
          <div className="flex space-x-2">
            {slides.map((_, index) => (
              <div
                key={index}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  index === (currentSlide % slides.length) ? 'bg-white scale-125' : 'bg-white/50'
                }`}
              />
            ))}
          </div>
        </div>
      )}
    </section>
  );
};

export default PageHeroSection;