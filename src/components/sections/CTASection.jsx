import React from 'react';
import { ArrowRight, Download, Phone, Mail } from 'lucide-react';

const CTASection = ({ currentThemeConfig, setActiveSection }) => {
  return (
    <section className={`py-20 bg-gradient-to-r ${currentThemeConfig.primaryGradient} relative overflow-hidden`}>
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-10 w-20 h-20 border border-white rounded-full"></div>
        <div className="absolute top-32 right-20 w-16 h-16 border border-white rounded-full"></div>
        <div className="absolute bottom-20 left-1/4 w-12 h-12 border border-white rounded-full"></div>
        <div className="absolute bottom-32 right-10 w-24 h-24 border border-white rounded-full"></div>
      </div>
      
      <div className="container mx-auto px-6 text-center relative z-10">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Ready to Start Your Engineering Project?
          </h2>
          <p className={`text-xl text-${currentThemeConfig.primary}-100 mb-8 leading-relaxed`}>
            Partner with Fluidline for world-class engineering solutions. 
            Let's discuss how we can bring your industrial vision to life with our 33+ years of expertise.
          </p>
          
          {/* Quick Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-8 text-white">
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
              <div className="text-2xl font-bold">1000+</div>
              <div className="text-sm opacity-90">Projects</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
              <div className="text-2xl font-bold">3000+</div>
              <div className="text-sm opacity-90">Workforce</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
              <div className="text-2xl font-bold">33+</div>
              <div className="text-sm opacity-90">Years</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
              <div className="text-2xl font-bold">100M+</div>
              <div className="text-sm opacity-90">Safe Hours</div>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            <button
              onClick={() => setActiveSection('contact')}
              className={`bg-white text-${currentThemeConfig.primary} hover:bg-gray-100 px-8 py-4 rounded-full font-semibold transition-all duration-300 flex items-center space-x-2 shadow-lg hover:shadow-xl transform hover:scale-105`}
            >
              <Phone size={20} />
              <span>Contact Our Experts</span>
              <ArrowRight size={20} />
            </button>
            <button className="border-2 border-white/30 text-white hover:bg-white/10 px-8 py-4 rounded-full font-semibold transition-all duration-300 flex items-center space-x-2 backdrop-blur-sm">
              <Download size={20} />
              <span>Download Brochure</span>
            </button>
          </div>

          {/* Contact Info */}
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 text-white">
            <h3 className="text-xl font-bold mb-4">Get Instant Support</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
              <div className="flex items-center justify-center space-x-2">
                <Phone size={16} />
                <span>+91-512 2225138</span>
              </div>
              <div className="flex items-center justify-center space-x-2">
                <Mail size={16} />
                <span>projects@fluidlinegroup.com</span>
              </div>
            </div>
            <p className="text-xs opacity-75 mt-4">
              Available 24/7 for emergency engineering support and consultations
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;