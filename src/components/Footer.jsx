import React from 'react';
import { ChevronRight, Phone, Mail, MapPin } from 'lucide-react';
import FluidlineLogo from './FluidlineLogo';

const Footer = ({ currentThemeConfig, setActiveSection, navigation }) => {
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

  return (
    <footer className={`bg-gradient-to-r ${currentThemeConfig.footerGradient} text-white py-16`}>
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-4">
              <FluidlineLogo currentThemeConfig={currentThemeConfig} size="lg" />
              <div>
                <h3 className="text-xl font-bold">FLUIDLINE</h3>
                <p className="text-gray-400 text-sm">Engineers & Fabricators</p>
              </div>
            </div>
            <p className="text-gray-400 leading-relaxed">
              33+ years of delivering world-class engineering and fabrication solutions 
              to Fortune 500 companies and leading Indian corporations.
            </p>
            <div className="flex space-x-4">
              <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center hover:bg-white/20 transition-colors duration-300 cursor-pointer">
                <span className="text-sm font-bold">LI</span>
              </div>
              <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center hover:bg-white/20 transition-colors duration-300 cursor-pointer">
                <span className="text-sm font-bold">TW</span>
              </div>
            </div>
          </div>
          
          {/* Quick Links */}
          <div>
            <h4 className="font-bold text-lg mb-4">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((item) => (
                <li key={item.id}>
                  <button 
                    onClick={() => setActiveSection(item.id)}
                    className="text-gray-400 hover:text-white transition-colors duration-300 flex items-center space-x-2 group"
                  >
                    <ChevronRight size={16} className="group-hover:translate-x-1 transition-transform duration-300" />
                    <span>{item.name}</span>
                  </button>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Services */}
          <div>
            <h4 className="font-bold text-lg mb-4">Our Services</h4>
            <ul className="space-y-2 text-gray-400">
              {services.map((service, index) => (
                <li key={index} className="hover:text-white transition-colors duration-300 cursor-pointer">
                  {service}
                </li>
              ))}
            </ul>
          </div>
          
          {/* Contact Info */}
          <div>
            <h4 className="font-bold text-lg mb-4">Contact Info</h4>
            <div className="space-y-3 text-gray-400">
              <div className="flex items-center space-x-2 hover:text-white transition-colors duration-300">
                <Phone size={16} />
                <span>+91-512 2225138</span>
              </div>
              <div className="flex items-center space-x-2 hover:text-white transition-colors duration-300">
                <Mail size={16} />
                <span>projects@fluidlinegroup.com</span>
              </div>
              <div className="flex items-start space-x-2 hover:text-white transition-colors duration-300">
                <MapPin size={16} className="mt-1" />
                <div>
                  <p>Head Office: Kanpur</p>
                  <p className="text-sm">Mumbai • Noida • Bengaluru</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Bottom Bar */}
        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-gray-400 text-center md:text-left">
              &copy; 2025 Fluidline Engineers & Fabricators Pvt. Ltd. All rights reserved.
            </p>
            <div className="flex space-x-6 text-sm text-gray-400">
              <button className="hover:text-white transition-colors duration-300">Privacy Policy</button>
              <button className="hover:text-white transition-colors duration-300">Terms of Service</button>
              <button className="hover:text-white transition-colors duration-300">Sitemap</button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;