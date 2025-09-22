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
    <section className="relative h-screen overflow-hidden">
      <div className="absolute inset-0 z-10 flex items-center">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="max-w-4xl">
            <div className="space-y-6 text-white">
              <div className="space-y-2">
                <p className={`text-sm uppercase tracking-widest font-semibold text-${currentThemeConfig.primary}-300 opacity-90`}>
                  Welcome to Fluidline Group
                </p>
                <h1 className="text-5xl md:text-7xl font-bold leading-tight">
                  {heroSlides[currentSlide].title}
                </h1>
                <h2 className="text-2xl md:text-3xl font-light text-gray-200">
                  {heroSlides[currentSlide].subtitle}
                </h2>
              </div>
              <p className="text-xl text-gray-300 max-w-2xl leading-relaxed">
                {heroSlides[currentSlide].description}
              </p>
              <div className="flex flex-wrap gap-4 pt-4">
                <button 
                  onClick={() => setActiveSection('services')}
                  className={`bg-gradient-to-r ${currentThemeConfig.primaryGradient} hover:${currentThemeConfig.primaryHover} text-white px-8 py-4 rounded-full font-semibold transition-all duration-300 flex items-center space-x-2 shadow-xl hover:shadow-2xl transform hover:scale-105`}
                >
                  <span>{heroSlides[currentSlide].cta}</span>
                  <ArrowRight size={20} />
                </button>
                <button className="border-2 border-white/30 text-white hover:bg-white/10 px-8 py-4 rounded-full font-semibold transition-all duration-300 flex items-center space-x-2 backdrop-blur-sm">
                  <Download size={20} />
                  <span>Download Brochure</span>
                </button>
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

      {/* Navigation Dots */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20">
        <div className="flex space-x-3">
          {heroSlides.map((_, index) => (
            <button
              key={index}
              onClick={() => handleSlideChange(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentSlide ? 'bg-white scale-125' : 'bg-white/50'
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default HeroSection;