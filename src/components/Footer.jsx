import React, { useState } from 'react';
import { ChevronRight, ChevronDown, Phone, Mail, MapPin, ExternalLink } from 'lucide-react';
import FluidlineLogo from './FluidlineLogo';

const Footer = ({ currentThemeConfig, setActiveSection, navigation }) => {
  const [expandedSections, setExpandedSections] = useState({
    links: false,
    services: false,
    contact: false,
  });

  const toggleSection = (section) => {
    setExpandedSections(prev => ({
      ...prev,
      [section]: !prev[section]
    }));
  };

  const quickLinks = navigation?.slice(0, 4) || [
    { id: 'home', name: 'Home' },
    { id: 'about', name: 'About Us' },
    { id: 'services', name: 'Services' },
    { id: 'contact', name: 'Contact Us' }
  ];

  const services = [
    'Process & Utility Piping',
    'Fire Protection Systems',
    'Structural Fabrication',
    'Equipment Erection',
    'Balance of Boiler',
    'Equipment Fabrication'
  ];

  const handleNavClick = (sectionId) => {
    setActiveSection(sectionId);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className={`bg-gradient-to-r ${currentThemeConfig.footerGradient} text-white`}>
      {/* Main Footer Content */}
      <div className="py-12 sm:py-16">
        <div className="container mx-auto px-4 sm:px-6">
          
          {/* Mobile-First Layout */}
          <div className="space-y-8 sm:space-y-0 sm:grid sm:grid-cols-2 lg:grid-cols-4 sm:gap-8">
            
            {/* Company Info - Always Visible */}
            <div className="space-y-4 sm:col-span-2 lg:col-span-1">
              <div className="flex items-center space-x-3 sm:space-x-4">
                <FluidlineLogo currentThemeConfig={currentThemeConfig} size="lg" />
                <div>
                  <h3 className="text-lg sm:text-xl font-bold">FLUIDLINE</h3>
                  <p className="text-xs sm:text-sm text-gray-400">Engineers & Fabricators</p>
                </div>
              </div>
              <p className="text-sm sm:text-base text-gray-400 leading-relaxed">
                33+ years of delivering world-class engineering and fabrication solutions 
                to Fortune 500 companies and leading Indian corporations.
              </p>
              
              {/* Social Links */}
              <div className="flex space-x-3 sm:space-x-4">
                <button className="w-10 h-10 sm:w-12 sm:h-12 bg-white/10 rounded-full flex items-center justify-center hover:bg-white/20 transition-colors duration-300">
                  <span className="text-xs sm:text-sm font-bold">LI</span>
                </button>
                <button className="w-10 h-10 sm:w-12 sm:h-12 bg-white/10 rounded-full flex items-center justify-center hover:bg-white/20 transition-colors duration-300">
                  <span className="text-xs sm:text-sm font-bold">TW</span>
                </button>
                <button className="w-10 h-10 sm:w-12 sm:h-12 bg-white/10 rounded-full flex items-center justify-center hover:bg-white/20 transition-colors duration-300">
                  <span className="text-xs sm:text-sm font-bold">FB</span>
                </button>
              </div>
            </div>
            
            {/* Quick Links - Mobile Collapsible */}
            <div className="sm:col-span-1">
              <button 
                onClick={() => toggleSection('links')}
                className="sm:hidden w-full flex items-center justify-between text-left text-lg font-bold mb-4"
              >
                <span>Quick Links</span>
                <ChevronDown className={`transform transition-transform duration-300 ${expandedSections.links ? 'rotate-180' : ''}`} size={20} />
              </button>
              <h4 className="hidden sm:block font-bold text-lg mb-4">Quick Links</h4>
              
              <ul className={`space-y-2 sm:space-y-3 ${expandedSections.links ? 'block' : 'hidden sm:block'}`}>
                {quickLinks.map((item) => (
                  <li key={item.id}>
                    <button 
                      onClick={() => handleNavClick(item.id)}
                      className="text-gray-400 hover:text-white transition-colors duration-300 flex items-center space-x-2 group text-sm sm:text-base"
                    >
                      <ChevronRight size={14} className="group-hover:translate-x-1 transition-transform duration-300" />
                      <span>{item.name}</span>
                    </button>
                  </li>
                ))}
              </ul>
            </div>
            
            {/* Services - Mobile Collapsible */}
            <div className="sm:col-span-1">
              <button 
                onClick={() => toggleSection('services')}
                className="sm:hidden w-full flex items-center justify-between text-left text-lg font-bold mb-4"
              >
                <span>Our Services</span>
                <ChevronDown className={`transform transition-transform duration-300 ${expandedSections.services ? 'rotate-180' : ''}`} size={20} />
              </button>
              <h4 className="hidden sm:block font-bold text-lg mb-4">Our Services</h4>
              
              <ul className={`space-y-2 text-gray-400 ${expandedSections.services ? 'block' : 'hidden sm:block'}`}>
                {services.map((service, index) => (
                  <li key={index} className="hover:text-white transition-colors duration-300 cursor-pointer text-sm sm:text-base">
                    {service}
                  </li>
                ))}
              </ul>
            </div>
            
            {/* Contact Info - Mobile Collapsible */}
            <div className="sm:col-span-2 lg:col-span-1">
              <button 
                onClick={() => toggleSection('contact')}
                className="sm:hidden w-full flex items-center justify-between text-left text-lg font-bold mb-4"
              >
                <span>Contact Info</span>
                <ChevronDown className={`transform transition-transform duration-300 ${expandedSections.contact ? 'rotate-180' : ''}`} size={20} />
              </button>
              <h4 className="hidden sm:block font-bold text-lg mb-4">Contact Info</h4>
              
              <div className={`space-y-3 sm:space-y-4 text-gray-400 ${expandedSections.contact ? 'block' : 'hidden sm:block'}`}>
                <a 
                  href="tel:+915122225138"
                  className="flex items-center space-x-2 hover:text-white transition-colors duration-300 text-sm sm:text-base touch-manipulation"
                >
                  <Phone size={16} className="flex-shrink-0" />
                  <span>+91-512-2225138</span>
                </a>
                <a 
                  href="mailto:projects@fluidlinegroup.com"
                  className="flex items-center space-x-2 hover:text-white transition-colors duration-300 text-sm sm:text-base break-all touch-manipulation"
                >
                  <Mail size={16} className="flex-shrink-0" />
                  <span>projects@fluidlinegroup.com</span>
                </a>
                <div className="flex items-start space-x-2 hover:text-white transition-colors duration-300">
                  <MapPin size={16} className="mt-1 flex-shrink-0" />
                  <div className="text-sm sm:text-base">
                    <p className="font-semibold">Head Office: Kanpur</p>
                    <p className="text-xs sm:text-sm mt-1">Mumbai • Noida • Bengaluru</p>
                  </div>
                </div>
                
                {/* Quick Action Buttons - Mobile */}
                <div className="flex flex-col sm:flex-row gap-2 sm:gap-3 mt-4 sm:hidden">
                  <a 
                    href="tel:+915122225138"
                    className={`flex items-center justify-center space-x-2 bg-gradient-to-r ${currentThemeConfig.primaryGradient} text-white px-4 py-2 rounded-full text-sm font-semibold transition-all duration-300 touch-manipulation`}
                  >
                    <Phone size={14} />
                    <span>Call Now</span>
                  </a>
                  <a 
                    href="mailto:projects@fluidlinegroup.com"
                    className="flex items-center justify-center space-x-2 border border-white/30 text-white px-4 py-2 rounded-full text-sm font-semibold transition-all duration-300 hover:bg-white/10 touch-manipulation"
                  >
                    <Mail size={14} />
                    <span>Email</span>
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Mobile Newsletter Signup */}
          <div className="mt-8 sm:mt-12 p-4 sm:p-6 bg-white/10 rounded-xl backdrop-blur-sm">
            <h4 className="font-bold text-lg mb-3 text-center sm:text-left">Stay Updated</h4>
            <p className="text-sm text-gray-300 mb-4 text-center sm:text-left">
              Get the latest updates on our engineering projects and innovations.
            </p>
            <div className="flex flex-col sm:flex-row gap-3">
              <input 
                type="email" 
                placeholder="Enter your email"
                className="flex-1 px-4 py-2 sm:py-3 bg-white/20 border border-white/30 rounded-full text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-white/50 text-sm sm:text-base"
              />
              <button className="bg-white text-gray-900 hover:bg-gray-100 px-6 py-2 sm:py-3 rounded-full font-semibold transition-all duration-300 text-sm sm:text-base touch-manipulation flex items-center justify-center space-x-2">
                <span>Subscribe</span>
                <ExternalLink size={14} />
              </button>
            </div>
          </div>
        </div>
      </div>
      
      {/* Bottom Bar */}
      <div className="border-t border-gray-800 py-4 sm:py-6">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="flex flex-col sm:flex-row justify-between items-center space-y-4 sm:space-y-0">
            <p className="text-gray-400 text-center sm:text-left text-sm">
              &copy; 2025 Fluidline Engineers & Fabricators Pvt. Ltd. All rights reserved.
            </p>
            
            {/* Mobile-Optimized Footer Links */}
            <div className="flex flex-wrap justify-center sm:justify-end gap-4 sm:gap-6 text-sm text-gray-400">
              <button className="hover:text-white transition-colors duration-300 touch-manipulation">
                Privacy Policy
              </button>
              <button className="hover:text-white transition-colors duration-300 touch-manipulation">
                Terms of Service
              </button>
              <button className="hover:text-white transition-colors duration-300 touch-manipulation">
                Sitemap
              </button>
            </div>
          </div>
          
          {/* Mobile-Only Bottom Info */}
          <div className="mt-4 pt-4 border-t border-gray-800 text-center sm:hidden">
            <p className="text-xs text-gray-500">
              ISO Certified • Class A Fire Licensed • ASME B31.3 Compliant
            </p>
            <div className="flex justify-center items-center space-x-4 mt-2">
              <span className="text-xs text-gray-500">Trusted by</span>
              <div className="flex space-x-2">
                <div className="w-6 h-6 bg-white/10 rounded flex items-center justify-center">
                  <span className="text-xs font-bold">F500</span>
                </div>
                <div className="w-6 h-6 bg-white/10 rounded flex items-center justify-center">
                  <span className="text-xs font-bold">MNC</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;