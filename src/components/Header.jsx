import React, { useState, useEffect } from 'react';
import { Menu, X, Home, Info, Target, Wrench, Medal, Building2, Briefcase, Contact } from 'lucide-react';
import FluidlineLogo from './FluidlineLogo';

const Header = ({ activeSection, setActiveSection, currentThemeConfig }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const navigation = [
    { id: "home", name: "Home", path: "/", icon: Home },
    { id: "about", name: "About Us", path: "/about", icon: Info },
    { id: "vision-mission", name: "Vision & Mission", path: "/vision-mission", icon: Target },
    { id: "services", name: "Services", path: "/services", icon: Wrench },
    { id: "certificates", name: "Certificates", path: "/certificates", icon: Medal },
    { id: "clients", name: "Clients & Consultants", path: "/clients", icon: Building2 },
    { id: "career", name: "Career", path: "/career", icon: Briefcase },
    { id: "contact", name: "Contact Us", path: "/contact", icon: Contact },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMenuOpen]);

  const handleNavClick = (sectionId) => {
    setActiveSection(sectionId);
    setIsMenuOpen(false);
  };

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled 
        ? 'bg-white/95 backdrop-blur-lg shadow-lg' 
        : 'bg-transparent'
    }`}>
      <div className="container mx-auto px-6">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <div className="flex items-center space-x-4">
            <FluidlineLogo currentThemeConfig={currentThemeConfig} />
            <div>
              <h1 className={`text-xl font-bold transition-colors duration-300 ${
                isScrolled ? 'text-gray-900' : 'text-white'
              }`}>
                FLUIDLINE
              </h1>
              <p className={`text-sm transition-colors duration-300 ${
                isScrolled ? 'text-gray-600' : 'text-gray-300'
              }`}>
                Engineers & Fabricators
              </p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-1">
            {navigation.map((item) => {
              const IconComponent = item.icon;
              return (
                <button
                  key={item.id}
                  onClick={() => handleNavClick(item.id)}
                  className={`flex items-center space-x-2 px-3 py-2 rounded-lg font-medium transition-all duration-300 text-sm ${
                    activeSection === item.id
                      ? `bg-gradient-to-r ${currentThemeConfig.navActive} text-white shadow-lg transform scale-105`
                      : isScrolled
                      ? `text-gray-700 hover:text-${currentThemeConfig.primary} hover:bg-${currentThemeConfig.primaryLight}`
                      : `text-white hover:text-${currentThemeConfig.primary}-300 hover:bg-white/10`
                  }`}
                >
                  <IconComponent size={14} />
                  <span>{item.name}</span>
                </button>
              );
            })}
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className={`lg:hidden p-2 rounded-lg transition-colors duration-300 ${
              !isScrolled ? 'text-white' : 'text-gray-900'
            }`}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <>
            {/* Backdrop */}
            <div 
              className="lg:hidden fixed inset-0 bg-black/50 backdrop-blur-sm"
              onClick={() => setIsMenuOpen(false)}
            />
            
            {/* Menu Panel */}
            <div className="lg:hidden fixed top-20 left-6 right-6 bg-white/95 backdrop-blur-lg rounded-xl shadow-2xl p-4 z-50">
              <nav className="space-y-2">
                {navigation.map((item) => {
                  const IconComponent = item.icon;
                  return (
                    <button
                      key={item.id}
                      onClick={() => handleNavClick(item.id)}
                      className={`w-full flex items-center space-x-3 px-4 py-3 rounded-lg font-medium transition-all duration-300 ${
                        activeSection === item.id
                          ? `bg-gradient-to-r ${currentThemeConfig.navActive} text-white`
                          : `text-gray-700 hover:bg-${currentThemeConfig.primaryLight} hover:text-${currentThemeConfig.primary}`
                      }`}
                    >
                      <IconComponent size={20} />
                      <span>{item.name}</span>
                    </button>
                  );
                })}
              </nav>
            </div>
          </>
        )}
      </div>
    </header>
  );
};

export default Header;