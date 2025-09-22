import React, { useState, useEffect } from 'react';
import { ArrowRight, Download } from 'lucide-react';
import { heroSlides } from '../../data/websiteData';

const HeroSection = ({ currentThemeConfig, setActiveSection }) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  const handleSlideChange = (index) => {
    setCurrentSlide(index);
  };

  return (
    <section className="relative h-screen min-h-[600px] max-h-[900px] overflow-hidden">
      <div className="absolute inset-0 z-10 flex items-center">
        <div className="container mx-auto px-4 sm:px-6 lg:px-12">
          <div className="max-w-4xl">
            <div className="space-y-4 sm:space-y-6 text-white">
              <div className="space-y-2">
                <p className={`text-xs sm:text-sm uppercase tracking-widest font-semibold text-${currentThemeConfig.primary}-300 opacity-90`}>
                  Welcome to Fluidline Group
                </p>
                <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight">
                  {heroSlides[currentSlide].title}
                </h1>
                <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-light text-gray-200">
                  {heroSlides[currentSlide].subtitle}
                </h2>
              </div>
              <p className="text-base sm:text-lg md:text-xl text-gray-300 max-w-2xl leading-relaxed">
                {heroSlides[currentSlide].description}
              </p>
              
              {/* Action Buttons - Responsive Layout */}
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 pt-4 max-w-lg">
                <button 
                  onClick={() => setActiveSection('services')}
                  className={`w-full sm:w-auto bg-gradient-to-r ${currentThemeConfig.primaryGradient} hover:${currentThemeConfig.primaryHover} text-white px-6 sm:px-8 py-3 sm:py-4 rounded-full font-semibold transition-all duration-300 flex items-center justify-center space-x-2 shadow-xl hover:shadow-2xl transform hover:scale-105`}
                >
                  <span className="text-sm sm:text-base">{heroSlides[currentSlide].cta}</span>
                  <ArrowRight size={18} className="sm:w-5 sm:h-5" />
                </button>
                <button className="w-full sm:w-auto border-2 border-white/30 text-white hover:bg-white/10 px-6 sm:px-8 py-3 sm:py-4 rounded-full font-semibold transition-all duration-300 flex items-center justify-center space-x-2 backdrop-blur-sm">
                  <Download size={18} className="sm:w-5 sm:h-5" />
                  <span className="text-sm sm:text-base">Download Brochure</span>
                </button>
              </div>

              {/* Quick Stats - Mobile Optimized */}
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 pt-6 max-w-3xl">
                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-3 sm:p-4 text-center">
                  <div className="text-lg sm:text-xl lg:text-2xl font-bold">1000+</div>
                  <div className="text-xs sm:text-sm opacity-90">Projects</div>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-3 sm:p-4 text-center">
                  <div className="text-lg sm:text-xl lg:text-2xl font-bold">3000+</div>
                  <div className="text-xs sm:text-sm opacity-90">Workforce</div>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-3 sm:p-4 text-center">
                  <div className="text-lg sm:text-xl lg:text-2xl font-bold">33+</div>
                  <div className="text-xs sm:text-sm opacity-90">Years</div>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-3 sm:p-4 text-center">
                  <div className="text-lg sm:text-xl lg:text-2xl font-bold">100M+</div>
                  <div className="text-xs sm:text-sm opacity-90">Safe Hours</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Background Slider */}
      <div className="absolute inset-0">
        {heroSlides.map((slide, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              index === currentSlide ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <img
              src={slide.image}
              alt={slide.title}
              className="w-full h-full object-cover"
              loading={index === 0 ? 'eager' : 'lazy'}
            />
            <div className={`absolute inset-0 bg-gradient-to-r ${slide.overlay}`} />
          </div>
        ))}
      </div>

      {/* Navigation Dots - Mobile Optimized */}
      <div className="absolute bottom-6 sm:bottom-8 left-1/2 transform -translate-x-1/2 z-20">
        <div className="flex space-x-2 sm:space-x-3">
          {heroSlides.map((_, index) => (
            <button
              key={index}
              onClick={() => handleSlideChange(index)}
              className={`w-2 h-2 sm:w-3 sm:h-3 rounded-full transition-all duration-300 ${
                index === currentSlide ? 'bg-white scale-125' : 'bg-white/50'
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-6 sm:bottom-8 right-6 sm:right-8 z-20 hidden sm:block">
        <div className="text-white/60 text-xs animate-bounce">
          <div className="w-5 h-8 border-2 border-white/40 rounded-full flex justify-center">
            <div className="w-1 h-2 bg-white/60 rounded-full mt-2 animate-pulse"></div>
          </div>
          <p className="mt-2 text-center">Scroll</p>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;