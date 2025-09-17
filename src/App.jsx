import React, { useState, useEffect } from 'react';
import { 
  Menu, X, Phone, Mail, MapPin, Download, Users, Building, 
  Shield, Award, ChevronRight, Star, MessageCircle, Send, 
  Minimize2, Sun, Moon, Home, Info, Wrench, FileText, 
  Briefcase, Contact, Medal, Clock, ChevronLeft, Upload
} from 'lucide-react';

const FluidlineWebsite = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [theme, setTheme] = useState('original');
  const [showChatbot, setShowChatbot] = useState(false);
  const [customLogo, setCustomLogo] = useState('');
  const [currentSlide, setCurrentSlide] = useState(0);
  const [chatMessages, setChatMessages] = useState([
    { type: 'bot', message: 'Hello! How can I help you with Fluidline services today?' }
  ]);
  const [chatInput, setChatInput] = useState('');

  // Hero slider images
  const heroImages = [
    {
      url: 'https://images.unsplash.com/photo-1581092921461-eab62e97a780?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80',
      title: 'RELIABLE QUALITY CHECK',
      subtitle: 'Ensuring Excellence in Every Project',
      buttonText: 'CLICK HERE'
    },
    {
      url: 'https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80',
      title: 'PROCESS PIPING EXCELLENCE',
      subtitle: '33+ Years of Engineering Leadership',
      buttonText: 'LEARN MORE'
    },
    {
      url: 'https://images.unsplash.com/photo-1513828583688-c52646db42da?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80',
      title: 'FIRE PROTECTION SYSTEMS',
      subtitle: 'Class A Licensed Safety Solutions',
      buttonText: 'DISCOVER'
    },
    {
      url: 'https://images.unsplash.com/photo-1587293852726-70cdb56c2866?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80',
      title: 'STRUCTURAL FABRICATION',
      subtitle: 'Precision Engineering & Manufacturing',
      buttonText: 'EXPLORE'
    }
  ];

  // Auto-advance slides
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroImages.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [heroImages.length]);

  const themes = {
    original: {
      name: 'Original',
      primary: 'bg-blue-700',
      primaryHover: 'hover:bg-blue-800',
      secondary: 'bg-blue-50',
      accent: 'text-blue-700',
      accentRed: 'text-red-600',
      gradient: 'bg-gradient-to-r from-blue-700 to-red-600',
      gradientAlt: 'bg-gradient-to-br from-blue-600 via-blue-700 to-red-600',
      border: 'border-blue-200',
      cardBg: 'bg-white',
      redPrimary: 'bg-red-600',
      redHover: 'hover:bg-red-700',
      headerBg: 'bg-white'
    },
    corporate: {
      name: 'Corporate',
      primary: 'bg-blue-600',
      primaryHover: 'hover:bg-blue-700',
      secondary: 'bg-blue-50',
      accent: 'text-blue-600',
      accentRed: 'text-red-600',
      gradient: 'bg-gradient-to-r from-blue-600 to-red-600',
      gradientAlt: 'bg-gradient-to-br from-blue-500 via-purple-600 to-red-500',
      border: 'border-blue-200',
      cardBg: 'bg-white',
      redPrimary: 'bg-red-600',
      redHover: 'hover:bg-red-700',
      headerBg: 'bg-white'
    },
    dynamic: {
      name: 'Dynamic',
      primary: 'bg-red-600',
      primaryHover: 'hover:bg-red-700',
      secondary: 'bg-red-50',
      accent: 'text-red-600',
      accentRed: 'text-blue-600',
      gradient: 'bg-gradient-to-r from-red-600 to-blue-600',
      gradientAlt: 'bg-gradient-to-bl from-red-500 via-pink-600 to-blue-500',
      border: 'border-red-200',
      cardBg: 'bg-white',
      redPrimary: 'bg-blue-600',
      redHover: 'hover:bg-blue-700',
      headerBg: 'bg-white'
    },
    modern: {
      name: 'Modern',
      primary: 'bg-gradient-to-r from-blue-600 to-red-600',
      primaryHover: 'hover:from-blue-700 hover:to-red-700',
      secondary: 'bg-gradient-to-r from-blue-50 to-red-50',
      accent: 'text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-red-600',
      accentRed: 'text-transparent bg-clip-text bg-gradient-to-r from-red-600 to-blue-600',
      gradient: 'bg-gradient-to-r from-blue-600 via-purple-600 to-red-600',
      gradientAlt: 'bg-gradient-to-tr from-blue-400 via-purple-500 to-red-400',
      border: 'border-gradient-to-r from-blue-200 to-red-200',
      cardBg: 'bg-gradient-to-br from-white to-blue-50',
      redPrimary: 'bg-gradient-to-r from-red-600 to-blue-600',
      redHover: 'hover:from-red-700 hover:to-blue-700',
      headerBg: 'bg-white'
    },
    contrast: {
      name: 'Contrast',
      primary: 'bg-blue-700',
      primaryHover: 'hover:bg-blue-800',
      secondary: 'bg-red-50',
      accent: 'text-blue-700',
      accentRed: 'text-red-700',
      gradient: 'bg-gradient-to-r from-blue-800 to-red-700',
      gradientAlt: 'bg-gradient-to-r from-red-700 to-blue-800',
      border: 'border-blue-300',
      cardBg: 'bg-white',
      redPrimary: 'bg-red-700',
      redHover: 'hover:bg-red-800',
      headerBg: 'bg-white'
    }
  };

  const currentTheme = themes[theme];

  const navigation = [
    { id: 'home', name: 'Home', icon: Home },
    { id: 'about', name: 'About Us', icon: Info },
    { id: 'services', name: 'Services', icon: Wrench },
    { id: 'certificates', name: 'Certificates', icon: Medal },
    { id: 'clients', name: 'Clients', icon: Building },
    { id: 'career', name: 'Career', icon: Briefcase },
    { id: 'contact', name: 'Contact', icon: Contact }
  ];

  const services = [
    {
      title: 'Process & Utility Piping',
      description: 'State-of-the-art Process Piping tailormade for various applications following ASME B 31.3 standards.',
      icon: '🔧'
    },
    {
      title: 'Fire Protection & Detection Systems',
      description: 'Complete fire protection solutions with Class A Fire License in Maharashtra.',
      icon: '🔥'
    },
    {
      title: 'Structural Work',
      description: 'Supply, fabrication, erection for platforms, pipe racks & support structures.',
      icon: '🏗️'
    },
    {
      title: 'Equipment Fabrication',
      description: 'MS and SS equipment fabrication including tanks, chimneys, air receivers up to 900KL capacity.',
      icon: '⚙️'
    },
    {
      title: 'Equipment Erection',
      description: 'Installation of process machinery, pumps, boilers, cooling towers from 1MT to 120MT.',
      icon: '🏭'
    },
    {
      title: 'Balance of Boiler',
      description: 'Complete boiler services from procurement to commissioning following IBR regulations.',
      icon: '💨'
    }
  ];

  const stats = [
    { number: '1000+', label: 'Successful Projects' },
    { number: '3000+', label: 'Workforce' },
    { number: '100M+', label: 'Safe Man Hours' },
    { number: '33+', label: 'Years Experience' }
  ];

  const testimonials = [
    {
      company: 'Serum Institute of India Pvt. Ltd.',
      message: 'Fluidline was awarded the turnkey project for Supply, Inspection, Testing, Erection and Commissioning of complete OSBL and ISBL...'
    },
    {
      company: 'Jubilant Life Sciences',
      message: 'We are pleased to be associated with Fluidline as our strategic sourcing partner in our continuous journey on the path progress.'
    },
    {
      company: 'Cargill India Ltd.',
      message: 'Fluidline was awarded turnkey projects for Supply, Fabrication & Erection of Structure, SS Pipeline, Equipment Erection, Fire Fighting...'
    }
  ];

  const offices = [
    {
      city: 'Kanpur (Head Office)',
      address: 'C-51, Udyog Kunj, Panki Site V, Kanpur-208012',
      phone: '+91-512 2225138 | 2225120',
      email: 'projects@fluidlinegroup.com'
    },
    {
      city: 'Mumbai Office',
      address: '405, Corporate Annex, Next to Cello House, Sonawala Road, Goregaon (E), Mumbai - 400063',
      phone: '022-68322032, +91-9695674747',
      email: 'mumbai@fluidlinegroup.com'
    },
    {
      city: 'Noida Office',
      address: 'A-306, Logix Technova, Sector 132, Noida-201301',
      email: 'projects@fluidlinegroup.com'
    },
    {
      city: 'Bengaluru Office',
      address: 'D-403, Sterling Apartments, Dollors Colony, RMV- II, Bengaluru-560094',
      email: 'projects@fluidlinegroup.com'
    }
  ];

  // Logo component with custom image support
  const FluidlineLogo = ({ size = 'normal', className = '' }) => {
    const logoSize = size === 'large' ? 'w-16 h-16' : 'w-10 h-10';
    
    if (customLogo) {
      return (
        <div className={`${logoSize} relative ${className}`}>
          <img 
            src={customLogo} 
            alt="Fluidline Logo" 
            className="w-full h-full object-contain"
            onError={() => setCustomLogo('')}
          />
        </div>
      );
    }
    
    return (
      <div className={`${logoSize} relative ${className}`}>
        <svg viewBox="0 0 60 60" className="w-full h-full">
          <g transform="translate(30,30)">
            <path 
              d="M-25,-20 Q-15,-25 -5,-20 T15,-15"
              stroke="#1e40af" 
              strokeWidth="2" 
              fill="none"
            />
            <path 
              d="M-25,-10 Q-15,-15 -5,-10 T15,-5"
              stroke="#1e40af" 
              strokeWidth="2" 
              fill="none"
            />
            <path 
              d="M-25,0 Q-15,-5 -5,0 T15,5"
              stroke="#1e40af" 
              strokeWidth="2" 
              fill="none"
            />
            <path 
              d="M-25,10 Q-15,5 -5,10 T15,15"
              stroke="#1e40af" 
              strokeWidth="2" 
              fill="none"
            />
            <path 
              d="M-25,20 Q-15,15 -5,20 T15,25"
              stroke="#1e40af" 
              strokeWidth="2" 
              fill="none"
            />
            
            <path 
              d="M25,-20 Q15,-25 5,-20 T-15,-15"
              stroke="#dc2626" 
              strokeWidth="2" 
              fill="none"
            />
            <path 
              d="M25,-10 Q15,-15 5,-10 T-15,-5"
              stroke="#dc2626" 
              strokeWidth="2" 
              fill="none"
            />
            <path 
              d="M25,0 Q15,-5 5,0 T-15,5"
              stroke="#dc2626" 
              strokeWidth="2" 
              fill="none"
            />
            <path 
              d="M25,10 Q15,5 5,10 T-15,15"
              stroke="#dc2626" 
              strokeWidth="2" 
              fill="none"
            />
            <path 
              d="M25,20 Q15,15 5,20 T-15,25"
              stroke="#dc2626" 
              strokeWidth="2" 
              fill="none"
            />
          </g>
          
          <circle 
            cx="30" 
            cy="30" 
            r="6" 
            fill="white" 
            stroke="#374151" 
            strokeWidth="1"
          />
        </svg>
      </div>
    );
  };

  // Hero Image Slider Component
  const HeroSlider = () => {
    const nextSlide = () => {
      setCurrentSlide((prev) => (prev + 1) % heroImages.length);
    };

    const prevSlide = () => {
      setCurrentSlide((prev) => (prev - 1 + heroImages.length) % heroImages.length);
    };

    const goToSlide = (index) => {
      setCurrentSlide(index);
    };

    return (
      <div className="relative h-96 md:h-[500px] lg:h-[600px] overflow-hidden">
        <div 
          className="flex transition-transform duration-500 ease-in-out h-full"
          style={{ transform: `translateX(-${currentSlide * 100}%)` }}
        >
          {heroImages.map((image, index) => (
            <div key={index} className="w-full flex-shrink-0 relative">
              <img 
                src={image.url} 
                alt={image.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-black bg-opacity-40"></div>
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center text-white px-4">
                  <div className={`${currentTheme.primary} inline-block px-8 py-3 mb-4`}>
                    <h2 className="text-2xl md:text-4xl font-bold">{image.title}</h2>
                  </div>
                  <p className="text-lg md:text-xl mb-6">{image.subtitle}</p>
                  <button className={`${currentTheme.redPrimary} ${currentTheme.redHover} text-white px-8 py-3 rounded font-semibold transition duration-300`}>
                    {image.buttonText}
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <button 
          onClick={prevSlide}
          className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 rounded-full hover:bg-opacity-70 transition duration-300"
        >
          <ChevronLeft size={24} />
        </button>
        <button 
          onClick={nextSlide}
          className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 rounded-full hover:bg-opacity-70 transition duration-300"
        >
          <ChevronRight size={24} />
        </button>

        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
          {heroImages.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-3 h-3 rounded-full transition duration-300 ${
                index === currentSlide ? 'bg-white' : 'bg-white bg-opacity-50'
              }`}
            />
          ))}
        </div>

        <button 
          onClick={() => {
            const input = document.createElement('input');
            input.type = 'file';
            input.accept = 'image/*';
            input.onchange = (e) => {
              const file = e.target.files[0];
              if (file) {
                const reader = new FileReader();
                reader.onload = (e) => {
                  console.log('Would upload image:', e.target.result);
                  alert('Image upload functionality ready! In production, this would upload to your server.');
                };
                reader.readAsDataURL(file);
              }
            };
            input.click();
          }}
          className="absolute top-4 right-4 bg-blue-600 hover:bg-blue-700 text-white p-2 rounded-lg transition duration-300 flex items-center space-x-2"
        >
          <Upload size={16} />
          <span className="text-sm">Add Image</span>
        </button>
      </div>
    );
  };

  const handleChatSubmit = (e) => {
    e.preventDefault();
    if (chatInput.trim()) {
      setChatMessages(prev => [...prev, { type: 'user', message: chatInput }]);
      
      setTimeout(() => {
        let botResponse = '';
        if (chatInput.toLowerCase().includes('service')) {
          botResponse = 'We offer Process Piping, Fire Protection Systems, Structural Work, Equipment Fabrication, Equipment Erection, and Balance of Boiler services. Which service interests you most?';
        } else if (chatInput.toLowerCase().includes('contact')) {
          botResponse = 'You can reach us at projects@fluidlinegroup.com or call our head office at +91-512 2225138. We also have offices in Mumbai, Noida, and Bengaluru.';
        } else if (chatInput.toLowerCase().includes('experience')) {
          botResponse = 'Fluidline has 33+ years of experience with 1000+ successful projects and 100M+ safe man hours achieved. We work with Fortune 500 companies and top Indian corporations.';
        } else {
          botResponse = 'Thank you for your inquiry. Our team will get back to you shortly. You can also call us at +91-512 2225138 for immediate assistance.';
        }
        setChatMessages(prev => [...prev, { type: 'bot', message: botResponse }]);
      }, 1000);
      
      setChatInput('');
    }
  };

  const renderSection = () => {
    switch(activeSection) {
      case 'home':
        return (
          <div className="space-y-0">
            <HeroSlider />

            <section className="py-16 bg-white">
              <div className="container mx-auto px-4 text-center">
                <h1 className={`text-4xl md:text-5xl font-bold mb-6 ${currentTheme.accent}`}>
                  Welcome to Fluidline Group
                </h1>
                <div className="max-w-4xl mx-auto">
                  <p className={`text-xl mb-4 ${currentTheme.accentRed} font-semibold`}>
                    Fluidline Engineers & Fabricators Private Limited
                  </p>
                  <p className="text-lg text-gray-700 mb-8 leading-relaxed">
                    is a multi-dimensional company committed to Quality and Customer Delight. We provide turnkey solutions for the most reputed Corporates and MNCs in India.
                  </p>
                  <p className="text-lg text-gray-700 mb-8 leading-relaxed">
                    We are a market leader in Mechanical Works like Process Piping, Utility Piping, Fire Protection & Detection Systems, Equipment Erection, Fabrication of Structures, Tanks, Balance of Boiler Jobs, Tanks, Silos, Insulation, Painting etc.
                  </p>
                </div>

                <div className="flex flex-wrap justify-center gap-4">
                  <button className={`${currentTheme.cardBg} ${currentTheme.accent} px-8 py-3 rounded-lg font-semibold hover:shadow-lg transition duration-300 border-2 ${currentTheme.border}`}>
                    <Download className="inline mr-2" size={20} />
                    Download Brochure
                  </button>
                  <button 
                    onClick={() => setActiveSection('contact')}
                    className={`${currentTheme.redPrimary} ${currentTheme.redHover} text-white px-8 py-3 rounded-lg font-semibold transition duration-300`}
                  >
                    Contact Us
                  </button>
                </div>
              </div>
            </section>

            <section className={`py-16 ${currentTheme.secondary}`}>
              <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                  
                  <div className="text-center lg:text-left">
                    <div className="mb-8">
                      <div className="w-20 h-20 bg-red-600 rounded-full flex items-center justify-center mx-auto lg:mx-0 mb-4">
                        <Shield className="text-white" size={40} />
                      </div>
                      <h3 className={`text-2xl font-bold ${currentTheme.accent} mb-4`}>
                        Inspired by our legacy.
                      </h3>
                      <h4 className={`text-xl font-semibold ${currentTheme.accentRed} mb-4`}>
                        Driven by our young and dynamic leadership.
                      </h4>
                      <p className="text-gray-700 leading-relaxed">
                        Established in 1988, we are still guided by the illustrious management of our founding members. Today we are led by a young and dynamic team and have grown to become one of the most reputed names in the Engineering and Fabrication sector.
                      </p>
                    </div>
                  </div>

                  <div className="text-center lg:text-left">
                    <div className="mb-8">
                      <div className="w-20 h-20 bg-red-600 rounded-full flex items-center justify-center mx-auto lg:mx-0 mb-4">
                        <Award className="text-white" size={40} />
                      </div>
                      <h3 className={`text-2xl font-bold ${currentTheme.accentRed} mb-4`}>
                        Over 33 years of delivering best-in-class services.
                      </h3>
                      <h4 className={`text-xl font-semibold ${currentTheme.accent} mb-4`}>
                        And the journey continues!
                      </h4>
                      <p className="text-gray-700 leading-relaxed">
                        We have had an impeccable track record of serving our customers for the last 33 years across the length and breadth of the country. With every project we undertake, we raise the bar for ourselves to make our solutions and services even more competent and reliable.
                      </p>
                    </div>
                  </div>
                  
                </div>

                <div className="text-center mt-16">
                  <div className="max-w-4xl mx-auto">
                    <h3 className={`text-2xl font-bold ${currentTheme.accent} mb-6`}>
                      Commitment to earning the trust of our clients.
                    </h3>
                    <p className="text-lg text-gray-700 leading-relaxed mb-8">
                      In our endeavour to become a long-term partner for our valued clients, we ensure that we adhere to all the Quality and Safety Guidelines. We take all measures required to meet the committed timelines. We evaluate our engineering services to offer benefits at a reduced cost.
                    </p>
                    <p className={`text-lg ${currentTheme.accentRed} font-semibold mb-8`}>
                      We are proud to have two fabrication workshops and two warehouses of our own, that are powered by state-of-the-art machines and the latest software to support.
                    </p>
                    
                    <div className={`${currentTheme.cardBg} p-6 rounded-lg shadow-lg border-l-4 ${theme === 'original' ? 'border-blue-700' : 'border-blue-500'} inline-block`}>
                      <h4 className={`text-xl font-bold ${currentTheme.accent} mb-2`}>
                        Strategically located to always stay connected.
                      </h4>
                      <p className="text-gray-700">
                        We operate from our Head Office in <span className={`font-semibold ${currentTheme.accentRed}`}>Kanpur</span> and branches in key cities like <span className={`font-semibold ${currentTheme.accentRed}`}>Mumbai, Noida</span> and <span className={`font-semibold ${currentTheme.accentRed}`}>Bengaluru</span>.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            <section className="py-16">
              <div className="container mx-auto px-4">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                  {stats.map((stat, index) => (
                    <div key={index} className="text-center">
                      <div className={`text-4xl font-bold mb-2 ${
                        index % 2 === 0 ? currentTheme.accent : currentTheme.accentRed
                      }`}>
                        {stat.number}
                      </div>
                      <div className="text-gray-600">{stat.label}</div>
                    </div>
                  ))}
                </div>
              </div>
            </section>

            <section className="py-16 bg-gray-50">
              <div className="container mx-auto px-4">
                <h2 className={`text-3xl font-bold text-center mb-12 ${currentTheme.accent}`}>Our Services</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {services.map((service, index) => (
                    <div key={index} className={`${currentTheme.cardBg} p-6 rounded-lg shadow-lg hover:shadow-xl transition duration-300`}>
                      <div className="text-4xl mb-4">{service.icon}</div>
                      <h3 className={`text-xl font-semibold mb-3 ${
                        index % 2 === 0 ? currentTheme.accent : currentTheme.accentRed
                      }`}>{service.title}</h3>
                      <p className="text-gray-600 mb-4">{service.description}</p>
                      <button className={`${
                        index % 2 === 0 ? currentTheme.primary : currentTheme.redPrimary
                      } text-white px-4 py-2 rounded-lg text-sm ${
                        index % 2 === 0 ? currentTheme.primaryHover : currentTheme.redHover
                      } transition duration-300`}>
                        Learn More
                      </button>
                    </div>
                  ))}
                </div>
              </div>
            </section>

            <section className="py-16">
              <div className="container mx-auto px-4">
                <h2 className={`text-3xl font-bold text-center mb-12 ${currentTheme.accentRed}`}>Client Testimonials</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  {testimonials.map((testimonial, index) => (
                    <div key={index} className={`${currentTheme.cardBg} p-6 rounded-lg shadow-lg ${
                      index % 2 === 0 ? 'border-l-4 border-blue-500' : 'border-l-4 border-red-500'
                    }`}>
                      <div className="flex mb-4">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} className={`fill-current ${
                            i < 3 ? 'text-blue-400' : 'text-red-400'
                          }`} size={20} />
                        ))}
                      </div>
                      <p className="text-gray-600 mb-4">"{testimonial.message}"</p>
                      <p className={`font-semibold ${
                        index % 2 === 0 ? currentTheme.accent : currentTheme.accentRed
                      }`}>{testimonial.company}</p>
                    </div>
                  ))}
                </div>
              </div>
            </section>
          </div>
        );

      case 'about':
        return (
          <div className="space-y-16 py-16">
            <div className="container mx-auto px-4">
              <h1 className="text-4xl font-bold mb-8">About Fluidline</h1>
              
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
                <div className={`${currentTheme.cardBg} p-8 rounded-lg shadow-lg border-l-4 border-blue-500`}>
                  <h2 className={`text-2xl font-bold mb-4 ${currentTheme.accent}`}>Our Vision</h2>
                  <p className="text-gray-700 leading-relaxed">
                    To explore new horizons and to venture into multi-dimensional aspects of our area of expertise, keeping a constant and cordial liaison with our partners and business associates, and to achieve client satisfaction through continued commitment and excellence in safely delivering quality projects on time.
                  </p>
                </div>
                
                <div className={`${currentTheme.cardBg} p-8 rounded-lg shadow-lg border-l-4 border-red-500`}>
                  <h2 className={`text-2xl font-bold mb-4 ${currentTheme.accentRed}`}>Our Mission</h2>
                  <p className="text-gray-700 leading-relaxed">
                    Guided by principles of integrity and commitment to the goal, we will constantly strive to implement newer initiatives to achieve our vision. In doing this, we will endeavor to uphold our standards of perfection and meet the expectations of all our clients.
                  </p>
                </div>
              </div>

              <div className="bg-gray-50 p-8 rounded-lg">
                <h2 className="text-2xl font-bold mb-6">Message from Our Founder & MD</h2>
                <div className="prose max-w-none">
                  <p className="text-gray-700 mb-4">
                    Our company has completed 33+ years of its glorious and eventful existence. Organizations evolve over a period, developing traditions and working ethos in the course of their journey in time.
                  </p>
                  <p className="text-gray-700 mb-4">
                    We have adapted remarkably well to change, yet steadfastly retained our values which make us so unique. Today, we work with a cross-section of multinational and Indian companies who are leaders in their respective domains.
                  </p>
                  <p className="text-gray-700 mb-4">
                    We are fully committed to professional excellence hoping that a better future is awaiting us. Challenges we face each day, each day being a new day, we rise to meet these challenges with commitment and fortitude.
                  </p>
                  <p className="font-semibold text-gray-800">- Mr. Sanjiv Midha, Founder & MD</p>
                </div>
              </div>
            </div>
          </div>
        );

      case 'contact':
        return (
          <div className="space-y-16 py-16">
            <div className="container mx-auto px-4">
              <h1 className="text-4xl font-bold mb-8">Contact Us</h1>
              
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                <div>
                  <h2 className="text-2xl font-bold mb-6">Get in Touch</h2>
                  <div className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <input 
                        type="text" 
                        placeholder="Your Name" 
                        className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                      />
                      <input 
                        type="email" 
                        placeholder="Your Email" 
                        className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                      />
                    </div>
                    <input 
                      type="text" 
                      placeholder="Subject" 
                      className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                    <textarea 
                      placeholder="Your Message" 
                      rows="6"
                      className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    ></textarea>
                    <button 
                      onClick={() => alert('Message sent! We will get back to you soon.')}
                      className={`${currentTheme.primary} text-white px-8 py-3 rounded-lg ${currentTheme.primaryHover} transition duration-300`}
                    >
                      Send Message
                    </button>
                  </div>
                </div>

                <div>
                  <h2 className="text-2xl font-bold mb-6">Our Offices</h2>
                  <div className="space-y-6">
                    {offices.map((office, index) => (
                      <div key={index} className="bg-white p-6 rounded-lg shadow-lg">
                        <h3 className={`text-lg font-bold ${currentTheme.accent} mb-3`}>{office.city}</h3>
                        <div className="space-y-2">
                          <p className="flex items-start">
                            <MapPin className="mr-2 mt-1 text-gray-500 flex-shrink-0" size={16} />
                            <span className="text-gray-600">{office.address}</span>
                          </p>
                          {office.phone && (
                            <p className="flex items-center">
                              <Phone className="mr-2 text-gray-500" size={16} />
                              <span className="text-gray-600">{office.phone}</span>
                            </p>
                          )}
                          <p className="flex items-center">
                            <Mail className="mr-2 text-gray-500" size={16} />
                            <span className="text-gray-600">{office.email}</span>
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        );

      default:
        return (
          <div className="py-16">
            <div className="container mx-auto px-4 text-center">
              <h1 className="text-4xl font-bold mb-8">Section Under Development</h1>
              <p className="text-xl text-gray-600">This section is being updated with new content.</p>
            </div>
          </div>
        );
    }
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <header className="bg-white shadow-lg sticky top-0 z-40">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center">
              <FluidlineLogo />
              <div className="ml-3">
                <h1 className="text-xl font-bold text-gray-800">FLUIDLINE</h1>
                <p className="text-xs text-gray-600">Engineers & Fabricators</p>
              </div>
              
              <button 
                onClick={() => {
                  const input = document.createElement('input');
                  input.type = 'file';
                  input.accept = 'image/*';
                  input.onchange = (e) => {
                    const file = e.target.files[0];
                    if (file) {
                      const reader = new FileReader();
                      reader.onload = (e) => {
                        setCustomLogo(e.target.result);
                      };
                      reader.readAsDataURL(file);
                    }
                  };
                  input.click();
                }}
                className="ml-2 text-gray-500 hover:text-gray-700 p-1 rounded transition duration-300"
                title="Upload custom logo"
              >
                <Upload size={16} />
              </button>
            </div>

            <nav className="hidden lg:flex space-x-8">
              {navigation.map((item) => (
                <button
                  key={item.id}
                  onClick={() => setActiveSection(item.id)}
                  className={`flex items-center px-3 py-2 rounded-lg transition duration-300 ${
                    activeSection === item.id 
                      ? `${currentTheme.primary} text-white` 
                      : `text-gray-700 hover:${currentTheme.secondary}`
                  }`}
                >
                  <item.icon className="mr-2" size={16} />
                  {item.name}
                </button>
              ))}
            </nav>

            <div className="flex items-center space-x-4">
              <div className="flex bg-gray-200 rounded-lg p-1 overflow-x-auto">
                {Object.entries(themes).map(([key, themeData]) => (
                  <button
                    key={key}
                    onClick={() => setTheme(key)}
                    className={`px-3 py-1 rounded-lg transition duration-300 text-xs whitespace-nowrap ${
                      theme === key 
                        ? key === 'original' ? 'bg-blue-700 text-white' :
                          key === 'corporate' ? 'bg-blue-600 text-white' :
                          key === 'dynamic' ? 'bg-red-600 text-white' :
                          key === 'modern' ? 'bg-gradient-to-r from-blue-600 to-red-600 text-white' :
                          'bg-blue-700 text-white'
                        : 'text-gray-700 hover:bg-gray-300'
                    }`}
                  >
                    {themeData.name}
                  </button>
                ))}
              </div>

              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="lg:hidden p-2"
              >
                {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>

          {isMenuOpen && (
            <div className="lg:hidden border-t border-gray-200 py-4">
              <nav className="space-y-2">
                {navigation.map((item) => (
                  <button
                    key={item.id}
                    onClick={() => {
                      setActiveSection(item.id);
                      setIsMenuOpen(false);
                    }}
                    className={`w-full flex items-center px-3 py-2 rounded-lg transition duration-300 ${
                      activeSection === item.id 
                        ? `${currentTheme.primary} text-white` 
                        : `text-gray-700 hover:${currentTheme.secondary}`
                    }`}
                  >
                    <item.icon className="mr-2" size={16} />
                    {item.name}
                  </button>
                ))}
              </nav>
            </div>
          )}
        </div>
      </header>

      {theme === 'original' && (
        <div className="bg-blue-700 py-4">
          <div className="container mx-auto px-4 flex justify-center items-center space-x-6">
            <span className="text-white font-semibold text-lg">DOWNLOAD BROCHURE</span>
            <button className="bg-red-600 hover:bg-red-700 text-white px-6 py-2 rounded font-semibold transition duration-300">
              CLICK HERE
            </button>
          </div>
        </div>
      )}

      <main>
        {renderSection()}
      </main>

      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4">Fluidline Group</h3>
              <p className="text-gray-400">
                33+ years of excellence in engineering and fabrication services.
              </p>
            </div>
            
            <div>
              <h4 className="font-bold mb-4">Quick Links</h4>
              <ul className="space-y-2">
                {navigation.slice(0, 4).map((item) => (
                  <li key={item.id}>
                    <button 
                      onClick={() => setActiveSection(item.id)}
                      className="text-gray-400 hover:text-white transition duration-300"
                    >
                      {item.name}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
            
            <div>
              <h4 className="font-bold mb-4">Services</h4>
              <ul className="space-y-2 text-gray-400">
                <li>Process & Utility Piping</li>
                <li>Fire Protection Systems</li>
                <li>Structural Work</li>
                <li>Equipment Fabrication</li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-bold mb-4">Contact Info</h4>
              <div className="space-y-2 text-gray-400">
                <p className="flex items-center">
                  <Phone className="mr-2" size={16} />
                  +91-512 2225138
                </p>
                <p className="flex items-center">
                  <Mail className="mr-2" size={16} />
                  projects@fluidlinegroup.com
                </p>
                <p className="flex items-start">
                  <MapPin className="mr-2 mt-1" size={16} />
                  Kanpur, Mumbai, Noida, Bengaluru
                </p>
              </div>
            </div>
          </div>
          
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2025 Fluidline Engineers & Fabricators Pvt. Ltd. All rights reserved.</p>
          </div>
        </div>
      </footer>

      <div className="fixed bottom-4 right-4 z-50">
        {!showChatbot ? (
          <button
            onClick={() => setShowChatbot(true)}
            className={`${currentTheme.primary} text-white p-4 rounded-full shadow-lg ${currentTheme.primaryHover} transition duration-300`}
          >
            <MessageCircle size={24} />
          </button>
        ) : (
          <div className="bg-white rounded-lg shadow-xl w-80 h-96 flex flex-col">
            <div className={`${currentTheme.primary} text-white p-4 rounded-t-lg flex justify-between items-center`}>
              <div>
                <h4 className="font-bold">Fluidline Support</h4>
                <p className="text-sm opacity-90">How can we help you?</p>
              </div>
              <button
                onClick={() => setShowChatbot(false)}
                className="text-white hover:bg-black hover:bg-opacity-20 p-1 rounded"
              >
                <Minimize2 size={16} />
              </button>
            </div>

            <div className="flex-1 overflow-y-auto p-4 space-y-4">
              {chatMessages.map((msg, index) => (
                <div key={index} className={`flex ${msg.type === 'user' ? 'justify-end' : 'justify-start'}`}>
                  <div className={`max-w-xs p-3 rounded-lg ${
                    msg.type === 'user' 
                      ? `${currentTheme.primary} text-white` 
                      : 'bg-gray-200 text-gray-800'
                  }`}>
                    <p className="text-sm">{msg.message}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="p-4 border-t">
              <div className="flex space-x-2">
                <input
                  type="text"
                  value={chatInput}
                  onChange={(e) => setChatInput(e.target.value)}
                  placeholder="Type your message..."
                  className="flex-1 p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  onKeyPress={(e) => e.key === 'Enter' && handleChatSubmit(e)}
                />
                <button
                  onClick={handleChatSubmit}
                  className={`${currentTheme.primary} text-white p-2 rounded-lg ${currentTheme.primaryHover} transition duration-300`}
                >
                  <Send size={16} />
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default FluidlineWebsite;