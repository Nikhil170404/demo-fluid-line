import React, { useState, useEffect } from 'react';
import { 
  Home, Info, Target, Wrench, Medal, Building2, 
  Briefcase, Contact, Eye, Heart, TrendingUp, Flame, 
  Factory, Settings, Cog, Users, Award, Shield,
  Globe, Clock, CheckCircle
} from 'lucide-react';

// Components
import SEO from './components/SEO';
import Header from './components/Header';
import Footer from './components/Footer';
import Chatbot from './components/Chatbot';
import ThemeSwitcher from './components/ThemeSwitcher';

// Sections
import HeroSection from './components/sections/HeroSection';
import PageHeroSection from './components/sections/PageHeroSection';
import IntroSection from './components/sections/IntroSection';
import StatsSection from './components/sections/StatsSection';
import ServicesSection from './components/sections/ServicesSection';
import AboutUsSection from './components/sections/AboutUsSection';
import ClientsSection from './components/sections/ClientsSection';
import TestimonialsSection from './components/sections/TestimonialsSection';
import ContactSection from './components/sections/ContactSection';
import CTASection from './components/sections/CTASection';

// Config and Data
import { themes, getTheme } from './config/themes';
import { navigation } from './data/websiteData';

const FluidlineWebsite = () => {
  // Initialize activeSection from URL hash or localStorage or default to 'home'
  const getInitialSection = () => {
    const hash = window.location.hash.substring(1);
    if (hash && navigation.some(nav => nav.id === hash)) {
      return hash;
    }
    const saved = localStorage.getItem('fluidline_active_section');
    if (saved && navigation.some(nav => nav.id === saved)) {
      return saved;
    }
    return 'home';
  };

  const getInitialTheme = () => {
    const saved = localStorage.getItem('fluidline_theme');
    return saved && themes[saved] ? saved : 'classic';
  };

  // State Management
  const [activeSection, setActiveSection] = useState(getInitialSection);
  const [currentTheme, setCurrentTheme] = useState(getInitialTheme);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isLoading, setIsLoading] = useState(true);

  const currentThemeConfig = getTheme(currentTheme);

  // Navigation with icons
  const navigationWithIcons = [
    { id: "home", name: "Home", path: "/", icon: Home },
    { id: "about", name: "About Us", path: "/about", icon: Info },
    { id: "vision-mission", name: "Vision & Mission", path: "/vision-mission", icon: Target },
    { id: "services", name: "Services", path: "/services", icon: Wrench },
    { id: "certificates", name: "Certificates", path: "/certificates", icon: Medal },
    { id: "clients", name: "Clients & Consultants", path: "/clients", icon: Building2 },
    { id: "career", name: "Career", path: "/career", icon: Briefcase },
    { id: "contact", name: "Contact Us", path: "/contact", icon: Contact },
  ];

  // Persist activeSection to localStorage and URL hash
  useEffect(() => {
    localStorage.setItem('fluidline_active_section', activeSection);
    window.history.replaceState(null, null, `#${activeSection}`);
    
    // Scroll to top when section changes
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [activeSection]);

  // Persist theme selection
  useEffect(() => {
    localStorage.setItem('fluidline_theme', currentTheme);
  }, [currentTheme]);

  // Handle browser back/forward navigation
  useEffect(() => {
    const handlePopState = () => {
      const hash = window.location.hash.substring(1);
      if (hash && navigationWithIcons.some(nav => nav.id === hash)) {
        setActiveSection(hash);
      }
    };

    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  // Loading effect
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1000);
    return () => clearTimeout(timer);
  }, []);

  // Auto-advance slides for different sections
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => prev + 1);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  // Vision & Mission Section
  const VisionMissionSection = () => (
    <div className="container mx-auto px-6">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16 py-16">
        <div className={`bg-gradient-to-br from-${currentThemeConfig.primaryLight} to-white p-12 rounded-2xl border-l-4 border-${currentThemeConfig.primary} shadow-xl hover:shadow-2xl transition-all duration-300 group`}>
          <div className={`w-20 h-20 bg-gradient-to-r from-${currentThemeConfig.primary} to-${currentThemeConfig.primaryDark} rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300`}>
            <Eye className="text-white" size={36} />
          </div>
          <h2 className={`text-3xl font-bold text-${currentThemeConfig.primary} mb-6 text-center`}>Our Vision</h2>
          <p className="text-gray-700 leading-relaxed text-lg">
            To explore new horizons and to venture into multi-dimensional aspects of our area of expertise, 
            keeping a constant and cordial liaison with our partners and business associates, and to achieve 
            client satisfaction through continued commitment and excellence in safely delivering quality 
            projects on time.
          </p>
        </div>
        
        <div className={`bg-gradient-to-br from-${currentThemeConfig.secondaryLight} to-white p-12 rounded-2xl border-l-4 border-${currentThemeConfig.secondary} shadow-xl hover:shadow-2xl transition-all duration-300 group`}>
          <div className={`w-20 h-20 bg-gradient-to-r from-${currentThemeConfig.primary} to-${currentThemeConfig.secondaryDark} rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300`}>
            <Target className="text-white" size={36} />
          </div>
          <h2 className={`text-3xl font-bold text-${currentThemeConfig.secondary} mb-6 text-center`}>Our Mission</h2>
          <p className="text-gray-700 leading-relaxed text-lg">
            Guided by principles of integrity and commitment to the goal, we will constantly strive to 
            implement newer initiatives to achieve our vision. In doing this, we will endeavor to uphold 
            our standards of perfection and meet the expectations of all our clients. All our long-term 
            strategies and short-term goals will be motivated by pursuit of excellence in every field.
          </p>
        </div>
      </div>
    </div>
  );

  // Certificates Section
  const CertificatesSection = () => (
    <div className="container mx-auto px-6 py-16">
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold text-gray-900 mb-6">
          Our <span className={`text-${currentThemeConfig.primary}`}>Certificates</span> & <span className={`text-${currentThemeConfig.secondary}`}>Policies</span>
        </h2>
        <p className="text-lg text-gray-600 max-w-3xl mx-auto">
          We maintain the highest standards of quality and safety compliance across all our operations.
        </p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <div className={`bg-white p-8 rounded-2xl shadow-lg border-l-4 border-${currentThemeConfig.primary} hover:shadow-xl transition-all duration-300 group`}>
          <div className={`w-16 h-16 bg-${currentThemeConfig.primaryLight} rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300`}>
            <Flame className={`text-${currentThemeConfig.primary}`} size={32} />
          </div>
          <h3 className="text-xl font-bold text-center mb-4">Class A Fire License</h3>
          <p className="text-gray-600 text-center">Maharashtra State Class A Fire Protection License</p>
        </div>
        
        <div className={`bg-white p-8 rounded-2xl shadow-lg border-l-4 border-${currentThemeConfig.secondary} hover:shadow-xl transition-all duration-300 group`}>
          <div className={`w-16 h-16 bg-${currentThemeConfig.secondaryLight} rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300`}>
            <Factory className={`text-${currentThemeConfig.secondary}`} size={32} />
          </div>
          <h3 className="text-xl font-bold text-center mb-4">ASME B 31.3</h3>
          <p className="text-gray-600 text-center">Process Piping Standards Compliance</p>
        </div>
        
        <div className="bg-white p-8 rounded-2xl shadow-lg border-l-4 border-green-500 hover:shadow-xl transition-all duration-300 group">
          <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
            <Shield className="text-green-600" size={32} />
          </div>
          <h3 className="text-xl font-bold text-center mb-4">IBR Compliance</h3>
          <p className="text-gray-600 text-center">Indian Boiler Regulations Certified</p>
        </div>
      </div>
    </div>
  );

  // Career Section
  const CareerSection = () => (
    <div className={`py-24 bg-gradient-to-br ${currentThemeConfig.cardGradient}`}>
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            <span className={`text-${currentThemeConfig.primary}`}>Career</span> <span className={`text-${currentThemeConfig.secondary}`}>Opportunities</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Join our team of 3000+ skilled professionals and be part of engineering excellence with opportunities for growth and development.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          <div className={`group bg-gradient-to-br from-${currentThemeConfig.primaryLight} to-white p-10 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 text-center transform hover:-translate-y-2 border-l-4 border-${currentThemeConfig.primary}`}>
            <div className={`w-20 h-20 bg-gradient-to-br from-${currentThemeConfig.primary} to-${currentThemeConfig.primaryDark} rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300`}>
              <Users className="text-white" size={36} />
            </div>
            <h3 className={`text-2xl font-bold text-${currentThemeConfig.primary} mb-4`}>Growing Team</h3>
            <p className="text-gray-600 leading-relaxed text-lg">
              Join 3000+ skilled professionals in engineering excellence across multiple locations and diverse projects.
            </p>
            <div className="mt-6 pt-6 border-t border-gray-200">
              <div className="flex items-center justify-center space-x-2 text-sm text-gray-500">
                <Building2 size={16} />
                <span>Multiple Locations</span>
              </div>
            </div>
          </div>
          
          <div className={`group bg-gradient-to-br from-${currentThemeConfig.secondaryLight} to-white p-10 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 text-center transform hover:-translate-y-2 border-l-4 border-${currentThemeConfig.secondary}`}>
            <div className={`w-20 h-20 bg-gradient-to-br from-${currentThemeConfig.primary} to-${currentThemeConfig.secondaryDark} rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300`}>
              <TrendingUp className="text-white" size={36} />
            </div>
            <h3 className={`text-2xl font-bold text-${currentThemeConfig.secondary} mb-4`}>Career Growth</h3>
            <p className="text-gray-600 leading-relaxed text-lg">
              33+ years of experience in nurturing talent and leadership with continuous learning opportunities.
            </p>
            <div className="mt-6 pt-6 border-t border-gray-200">
              <div className="flex items-center justify-center space-x-2 text-sm text-gray-500">
                <Clock size={16} />
                <span>Continuous Learning</span>
              </div>
            </div>
          </div>
          
          <div className="group bg-gradient-to-br from-purple-100 to-white p-10 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 text-center transform hover:-translate-y-2 border-l-4 border-purple-500">
            <div className="w-20 h-20 bg-gradient-to-br from-purple-500 to-purple-700 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300">
              <Award className="text-white" size={36} />
            </div>
            <h3 className="text-2xl font-bold text-purple-700 mb-4">Excellence Culture</h3>
            <p className="text-gray-600 leading-relaxed text-lg">
              Work on Fortune 500 projects with industry-leading standards and safety protocols.
            </p>
            <div className="mt-6 pt-6 border-t border-gray-200">
              <div className="flex items-center justify-center space-x-2 text-sm text-gray-500">
                <Shield size={16} />
                <span>Safety First</span>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-3xl p-10 shadow-2xl">
          <h3 className="text-3xl font-bold text-center text-gray-900 mb-8">Why Choose Fluidline?</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="text-center group">
              <div className={`w-16 h-16 bg-gradient-to-r from-${currentThemeConfig.primary} to-${currentThemeConfig.secondary} rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300 shadow-md`}>
                <Globe className="text-white" size={24} />
              </div>
              <h4 className="font-bold text-gray-900 mb-2">Global Projects</h4>
              <p className="text-sm text-gray-600">Work on international standards</p>
            </div>
            
            <div className="text-center group">
              <div className={`w-16 h-16 bg-gradient-to-r from-${currentThemeConfig.primary} to-${currentThemeConfig.primary} rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300 shadow-md`}>
                <Heart className="text-white" size={24} />
              </div>
              <h4 className="font-bold text-gray-900 mb-2">Work-Life Balance</h4>
              <p className="text-sm text-gray-600">Employee wellbeing priority</p>
            </div>
            
            <div className="text-center group">
              <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-green-600 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300 shadow-md">
                <Cog className="text-white" size={24} />
              </div>
              <h4 className="font-bold text-gray-900 mb-2">Innovation</h4>
              <p className="text-sm text-gray-600">Latest technology & methods</p>
            </div>
            
            <div className="text-center group">
              <div className="w-16 h-16 bg-gradient-to-r from-orange-500 to-red-500 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300 shadow-md">
                <Target className="text-white" size={24} />
              </div>
              <h4 className="font-bold text-gray-900 mb-2">Career Path</h4>
              <p className="text-sm text-gray-600">Clear progression opportunities</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  // Loading Screen
  if (isLoading) {
    return (
      <div className="min-h-screen bg-white flex items-center justify-center">
        <div className="text-center">
          <div className={`w-16 h-16 bg-gradient-to-r ${currentThemeConfig.primaryGradient} rounded-xl flex items-center justify-center mx-auto mb-4 animate-pulse shadow-lg`}>
            <span className="text-white font-bold text-lg">FL</span>
          </div>
          <div className={`w-12 h-1 bg-gradient-to-r ${currentThemeConfig.primaryGradient} rounded-full animate-pulse mx-auto`}></div>
          <p className="text-gray-600 mt-4 font-medium">Loading Fluidline...</p>
        </div>
      </div>
    );
  }

  // Main render function for different sections
  const renderSection = () => {
    switch(activeSection) {
      case 'home':
        return (
          <>
            <HeroSection 
              currentThemeConfig={currentThemeConfig} 
              setActiveSection={setActiveSection} 
            />
            <IntroSection currentThemeConfig={currentThemeConfig} />
            <StatsSection currentThemeConfig={currentThemeConfig} />
            <ServicesSection currentThemeConfig={currentThemeConfig} />
            <ClientsSection currentThemeConfig={currentThemeConfig} />
            <TestimonialsSection currentThemeConfig={currentThemeConfig} />
            <CTASection 
              currentThemeConfig={currentThemeConfig} 
              setActiveSection={setActiveSection} 
            />
          </>
        );
      
      case 'about':
        return (
          <>
            <PageHeroSection 
              pageKey="about" 
              currentSlide={currentSlide} 
              currentThemeConfig={currentThemeConfig} 
              setActiveSection={setActiveSection} 
            />
            <AboutUsSection currentThemeConfig={currentThemeConfig} />
            <IntroSection currentThemeConfig={currentThemeConfig} />
          </>
        );
      
      case 'vision-mission':
        return (
          <>
            <PageHeroSection 
              pageKey="vision-mission" 
              currentSlide={currentSlide} 
              currentThemeConfig={currentThemeConfig} 
              setActiveSection={setActiveSection} 
            />
            <VisionMissionSection />
          </>
        );
        
      case 'services':
        return (
          <>
            <PageHeroSection 
              pageKey="services" 
              currentSlide={currentSlide} 
              currentThemeConfig={currentThemeConfig} 
              setActiveSection={setActiveSection} 
            />
            <ServicesSection currentThemeConfig={currentThemeConfig} />
          </>
        );

      case 'certificates':
        return (
          <>
            <PageHeroSection 
              pageKey="certificates" 
              currentSlide={currentSlide} 
              currentThemeConfig={currentThemeConfig} 
              setActiveSection={setActiveSection} 
            />
            <CertificatesSection />
          </>
        );
        
      case 'clients':
        return (
          <>
            <PageHeroSection 
              pageKey="clients" 
              currentSlide={currentSlide} 
              currentThemeConfig={currentThemeConfig} 
              setActiveSection={setActiveSection} 
            />
            <ClientsSection currentThemeConfig={currentThemeConfig} />
            <TestimonialsSection currentThemeConfig={currentThemeConfig} />
          </>
        );

      case 'career':
        return (
          <>
            <PageHeroSection 
              pageKey="career" 
              currentSlide={currentSlide} 
              currentThemeConfig={currentThemeConfig} 
              setActiveSection={setActiveSection} 
            />
            <CareerSection />
          </>
        );
        
      case 'contact':
        return (
          <>
            <PageHeroSection 
              pageKey="contact" 
              currentSlide={currentSlide} 
              currentThemeConfig={currentThemeConfig} 
              setActiveSection={setActiveSection} 
            />
            <ContactSection currentThemeConfig={currentThemeConfig} />
          </>
        );
        
      default:
        return (
          <>
            <PageHeroSection 
              pageKey="about" 
              currentSlide={currentSlide} 
              currentThemeConfig={currentThemeConfig} 
              setActiveSection={setActiveSection} 
            />
            <div className="py-16">
              <div className="container mx-auto px-6 text-center">
                <h1 className="text-4xl font-bold text-gray-900 mb-8">
                  {navigationWithIcons.find(item => item.id === activeSection)?.name || 'Page'}
                </h1>
                <p className="text-xl text-gray-600 mb-8">
                  This section is being developed with comprehensive content and features.
                </p>
                <button
                  onClick={() => setActiveSection('home')}
                  className={`bg-gradient-to-r ${currentThemeConfig.primaryGradient} hover:${currentThemeConfig.primaryHover} text-white px-8 py-3 rounded-full font-semibold transition-all duration-300 transform hover:scale-105`}
                >
                  Return to Home
                </button>
              </div>
            </div>
          </>
        );
    }
  };

  return (
    <div className="min-h-screen bg-white">
      {/* SEO Component */}
      <SEO 
        title={`${navigationWithIcons.find(item => item.id === activeSection)?.name || 'Home'} - Fluidline Engineers & Fabricators`}
        canonical={`https://fluidlinegroup.com/${activeSection === 'home' ? '' : activeSection}`}
      />

      {/* Header */}
      <Header 
        activeSection={activeSection}
        setActiveSection={setActiveSection}
        currentThemeConfig={currentThemeConfig}
      />

      {/* Main Content */}
      <main>
        {renderSection()}
      </main>

      {/* Footer */}
      <Footer 
        currentThemeConfig={currentThemeConfig}
        setActiveSection={setActiveSection}
        navigation={navigationWithIcons}
      />

      {/* Floating Components */}
      <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end space-y-3">
        {/* Theme Switcher */}
        <ThemeSwitcher 
          currentTheme={currentTheme}
          setCurrentTheme={setCurrentTheme}
          currentThemeConfig={currentThemeConfig}
        />
      </div>

      {/* Chatbot */}
      <Chatbot currentThemeConfig={currentThemeConfig} />
    </div>
  );
};

export default FluidlineWebsite;