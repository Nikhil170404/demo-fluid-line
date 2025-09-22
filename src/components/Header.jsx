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
    // Scroll to top
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled 
        ? 'bg-white/95 backdrop-blur-lg shadow-lg' 
        : 'bg-transparent'
    }`}>
      <div className="container mx-auto px-4 sm:px-6">
        <div className="flex justify-between items-center py-3 sm:py-4">
          {/* Logo */}
          <div className="flex items-center space-x-2 sm:space-x-4">
            <FluidlineLogo currentThemeConfig={currentThemeConfig} />
            <div>
              <h1 className={`text-lg sm:text-xl font-bold transition-colors duration-300 ${
                isScrolled ? 'text-gray-900' : 'text-white'
              }`}>
                FLUIDLINE
              </h1>
              <p className={`text-xs sm:text-sm transition-colors duration-300 ${
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

        {/* Mobile Menu - Full Screen Overlay */}
        {isMenuOpen && (
          <div className="lg:hidden fixed inset-0 top-0 z-50 bg-white">
            {/* Mobile Header */}
            <div className="flex justify-between items-center p-4 border-b border-gray-200">
              <div className="flex items-center space-x-3">
                <FluidlineLogo currentThemeConfig={currentThemeConfig} size="sm" />
                <div>
                  <h1 className="text-lg font-bold text-gray-900">FLUIDLINE</h1>
                  <p className="text-xs text-gray-600">Engineers & Fabricators</p>
                </div>
              </div>
              <button
                onClick={() => setIsMenuOpen(false)}
                className="p-2 rounded-lg text-gray-900 hover:bg-gray-100 transition-colors duration-300"
                aria-label="Close menu"
              >
                <X size={24} />
              </button>
            </div>

            {/* Mobile Navigation */}
            <nav className="flex-1 overflow-y-auto py-4 px-4">
              <div className="space-y-2">
                {navigation.map((item) => {
                  const IconComponent = item.icon;
                  return (
                    <button
                      key={item.id}
                      onClick={() => handleNavClick(item.id)}
                      className={`w-full flex items-center space-x-4 px-4 py-4 rounded-xl font-medium transition-all duration-300 text-left ${
                        activeSection === item.id
                          ? `bg-gradient-to-r ${currentThemeConfig.navActive} text-white shadow-lg`
                          : `text-gray-700 hover:bg-${currentThemeConfig.primaryLight} hover:text-${currentThemeConfig.primary}`
                      }`}
                    >
                      <IconComponent size={22} />
                      <span className="text-base">{item.name}</span>
                    </button>
                  );
                })}
              </div>
            </nav>

            {/* Mobile Contact Info */}
            <div className="border-t border-gray-200 p-4 bg-gray-50">
              <div className="text-center space-y-2">
                <p className="text-sm font-semibold text-gray-900">Need Help?</p>
                <div className="flex flex-col sm:flex-row gap-2 sm:gap-4 justify-center items-center">
                  <a 
                    href="tel:+915122225138" 
                    className={`text-sm text-${currentThemeConfig.primary} font-medium hover:underline`}
                  >
                    +91-512-2225138
                  </a>
                  <a 
                    href="mailto:projects@fluidlinegroup.com" 
                    className={`text-sm text-${currentThemeConfig.secondary} font-medium hover:underline`}
                  >
                    projects@fluidlinegroup.com
                  </a>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;