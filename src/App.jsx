import React, { useState, useEffect } from 'react';
import { 
  Menu, X, Phone, Mail, MapPin, Download, Users, Building2, 
  Shield, Award, ChevronRight, Star, MessageCircle, Send, 
  Minimize2, Home, Info, Wrench, FileText, 
  Briefcase, Contact, Medal, Clock, ChevronLeft, ChevronDown,
  Factory, Zap, Cog, Flame, ArrowRight, Play, Calendar,
  Globe, Target, TrendingUp, CheckCircle, Eye, Heart,
  Settings, Layers, Cpu, Database, Network
} from 'lucide-react';

const FluidlineWebsite = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [showChatbot, setShowChatbot] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [chatMessages, setChatMessages] = useState([
    { type: 'bot', message: 'Hello! Welcome to Fluidline Engineers & Fabricators. How can I help you with our engineering solutions today?' }
  ]);
  const [chatInput, setChatInput] = useState('');
  const [isScrolled, setIsScrolled] = useState(false);

  // Handle scroll effect for header
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Hero slides with industrial engineering imagery
  const heroSlides = [
    {
      image: 'https://images.unsplash.com/photo-1565514020179-026b92b84bb6?q=80&w=2070&auto=format&fit=crop',
      title: 'Engineering Excellence Since 1988',
      subtitle: 'Leading Multi-Dimensional Engineering Solutions',
      description: 'Committed to Quality and Customer Delight for Fortune 500 Companies',
      cta: 'Explore Our Services',
      overlay: 'bg-gradient-to-r from-blue-900/80 via-red-900/60 to-transparent'
    },
    {
      image: 'https://images.unsplash.com/photo-1581092921461-eab62e97a780?q=80&w=2070&auto=format&fit=crop',
      title: 'Fire Protection & Detection Systems',
      subtitle: 'Class-A Licensed Safety Solutions',
      description: 'Complete fire protection systems with Maharashtra Class A license',
      cta: 'Safety Solutions',
      overlay: 'bg-gradient-to-r from-red-900/80 via-blue-900/60 to-transparent'
    },
    {
      image: 'https://images.unsplash.com/photo-1513828583688-c52646db42da?q=80&w=2070&auto=format&fit=crop',
      title: 'Process & Utility Piping',
      subtitle: 'ASME B 31.3 Compliant Solutions',
      description: 'State-of-the-art process piping for various industrial applications',
      cta: 'Piping Solutions',
      overlay: 'bg-gradient-to-r from-blue-900/80 via-red-900/60 to-transparent'
    },
    {
      image: 'https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?q=80&w=2070&auto=format&fit=crop',
      title: 'Equipment Fabrication',
      subtitle: 'MS & SS Fabrication Excellence',
      description: 'Tanks, Silos, Structures up to 900KL capacity with precision',
      cta: 'Fabrication Services',
      overlay: 'bg-gradient-to-r from-red-900/80 via-blue-900/60 to-transparent'
    }
  ];

  // Page-specific hero slides
  const pageHeroSlides = {
    about: [
      {
        image: 'https://images.unsplash.com/photo-1581092921461-eab62e97a780?q=80&w=2070&auto=format&fit=crop',
        title: 'About Fluidline',
        subtitle: '33+ Years of Engineering Excellence',
        description: 'Multi-dimensional company committed to Quality and Customer Delight',
        overlay: 'bg-gradient-to-r from-blue-900/80 via-red-900/60 to-transparent'
      },
      {
        image: 'https://images.unsplash.com/photo-1565514020179-026b92b84bb6?q=80&w=2070&auto=format&fit=crop',
        title: 'Our Legacy',
        subtitle: 'Established in 1988',
        description: 'Guided by founding members, driven by young dynamic leadership',
        overlay: 'bg-gradient-to-r from-red-900/80 via-blue-900/60 to-transparent'
      }
    ],
    'vision-mission': [
      {
        image: 'https://images.unsplash.com/photo-1513828583688-c52646db42da?q=80&w=2070&auto=format&fit=crop',
        title: 'Our Vision',
        subtitle: 'Exploring New Horizons',
        description: 'Multi-dimensional expertise with constant client liaison',
        overlay: 'bg-gradient-to-r from-blue-900/80 via-red-900/60 to-transparent'
      },
      {
        image: 'https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?q=80&w=2070&auto=format&fit=crop',
        title: 'Our Mission',
        subtitle: 'Integrity & Commitment',
        description: 'Standards of perfection in every engineering solution',
        overlay: 'bg-gradient-to-r from-red-900/80 via-blue-900/60 to-transparent'
      }
    ],
    services: [
      {
        image: 'https://images.unsplash.com/photo-1518709474137-4b906b9e922c?q=80&w=2070&auto=format&fit=crop',
        title: 'Process & Utility Piping',
        subtitle: 'ASME B 31.3 Compliant Solutions',
        description: 'State-of-the-art process piping for various industrial applications',
        overlay: 'bg-gradient-to-r from-blue-900/80 via-red-900/60 to-transparent'
      },
      {
        image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?q=80&w=2070&auto=format&fit=crop',
        title: 'Fire Protection Systems',
        subtitle: 'Class A Licensed Safety',
        description: 'Complete fire protection and detection systems',
        overlay: 'bg-gradient-to-r from-red-900/80 via-blue-900/60 to-transparent'
      },
      {
        image: 'https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0?q=80&w=2070&auto=format&fit=crop',
        title: 'Structural Fabrication',
        subtitle: 'Heavy Engineering Solutions',
        description: 'Platforms, pipe racks & support structures',
        overlay: 'bg-gradient-to-r from-blue-900/80 via-red-900/60 to-transparent'
      }
    ],
    certificates: [
      {
        image: 'https://images.unsplash.com/photo-1559308881-7a7d4b7f4c4a?q=80&w=2070&auto=format&fit=crop',
        title: 'Our Certifications',
        subtitle: 'Quality Assurance Standards',
        description: 'Class A Fire License and international compliance',
        overlay: 'bg-gradient-to-r from-blue-900/80 via-red-900/60 to-transparent'
      }
    ],
    clients: [
      {
        image: 'https://images.unsplash.com/photo-1581092921461-eab62e97a780?q=80&w=2070&auto=format&fit=crop',
        title: 'Our Clients & Consultants',
        subtitle: 'Fortune 500 Partnerships',
        description: 'Trusted by leading corporates and MNCs across India',
        overlay: 'bg-gradient-to-r from-blue-900/80 via-red-900/60 to-transparent'
      },
      {
        image: 'https://images.unsplash.com/photo-1565514020179-026b92b84bb6?q=80&w=2070&auto=format&fit=crop',
        title: 'Global Standards',
        subtitle: 'World-Class Solutions',
        description: '1000+ successful projects with zero compromise on quality',
        overlay: 'bg-gradient-to-r from-red-900/80 via-blue-900/60 to-transparent'
      }
    ],
    career: [
      {
        image: 'https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?q=80&w=2070&auto=format&fit=crop',
        title: 'Join Our Team',
        subtitle: 'Career Opportunities',
        description: 'Be part of 3000+ skilled workforce delivering excellence',
        overlay: 'bg-gradient-to-r from-blue-900/80 via-red-900/60 to-transparent'
      }
    ],
    contact: [
      {
        image: 'https://images.unsplash.com/photo-1513828583688-c52646db42da?q=80&w=2070&auto=format&fit=crop',
        title: 'Contact Us',
        subtitle: 'Get In Touch',
        description: 'Kanpur • Mumbai • Noida • Bengaluru',
        overlay: 'bg-gradient-to-r from-blue-900/80 via-red-900/60 to-transparent'
      }
    ]
  };

  // Generic Page Hero Section
  const PageHeroSection = ({ pageKey, currentSlide = 0 }) => {
    const slides = pageHeroSlides[pageKey] || [];
    if (slides.length === 0) return null;

    return (
      <section className="relative h-96 md:h-[500px] overflow-hidden">
        <div className="absolute inset-0 z-10 flex items-center">
          <div className="container mx-auto px-6 lg:px-12">
            <div className="max-w-4xl">
              <div className="space-y-6 text-white">
                <div className="space-y-2">
                  <p className="text-sm uppercase tracking-widest font-semibold text-blue-300 opacity-90">
                    Fluidline Engineers & Fabricators
                  </p>
                  <h1 className="text-4xl md:text-6xl font-bold leading-tight">
                    {slides[currentSlide % slides.length].title}
                  </h1>
                  <h2 className="text-xl md:text-2xl font-light text-gray-200">
                    {slides[currentSlide % slides.length].subtitle}
                  </h2>
                </div>
                <p className="text-lg text-gray-300 max-w-2xl leading-relaxed">
                  {slides[currentSlide % slides.length].description}
                </p>
                <div className="flex flex-wrap gap-4 pt-4">
                  <button 
                    onClick={() => setActiveSection('contact')}
                    className="bg-gradient-to-r from-blue-600 to-red-600 hover:from-blue-700 hover:to-red-700 text-white px-6 py-3 rounded-full font-semibold transition-all duration-300 flex items-center space-x-2 shadow-xl hover:shadow-2xl transform hover:scale-105"
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
              />
              <div className={`absolute inset-0 ${slide.overlay}`} />
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

  const navigation = [
    { id: 'home', name: 'Home', icon: Home },
    { id: 'about', name: 'About Us', icon: Info },
    { id: 'vision-mission', name: 'Vision & Mission', icon: Target },
    { id: 'services', name: 'Services', icon: Wrench },
    { id: 'certificates', name: 'Certificates', icon: Medal },
    { id: 'clients', name: 'Clients & Consultants', icon: Building2 },
    { id: 'career', name: 'Career', icon: Briefcase },
    { id: 'contact', name: 'Contact Us', icon: Contact }
  ];

  const services = [
    {
      title: 'Process & Utility Piping',
      description: 'State-of-the-art Process Piping tailormade for various applications following ASME B 31.3 standards with precision engineering and quality assurance.',
      icon: Factory,
      image: 'https://images.unsplash.com/photo-1518709474137-4b906b9e922c?q=80&w=600&auto=format&fit=crop',
      features: ['ASME B 31.3 Compliance', 'Custom Design Solutions', 'Quality Testing'],
      color: 'from-blue-500 to-blue-700'
    },
    {
      title: 'Fire Protection & Detection Systems',
      description: 'Complete fire protection solutions with Class A Fire License in Maharashtra. Design, supply, installation, testing and commissioning.',
      icon: Flame,
      image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?q=80&w=600&auto=format&fit=crop',
      features: ['Class A Licensed', 'Detection Systems', 'Emergency Response'],
      color: 'from-red-500 to-red-700'
    },
    {
      title: 'Structural Work',
      description: 'Supply, fabrication and erection for platforms, pipe racks & support structures with precision welding and quality control.',
      icon: Building2,
      image: 'https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0?q=80&w=600&auto=format&fit=crop',
      features: ['Heavy Fabrication', 'Precision Welding', 'Quality Control'],
      color: 'from-blue-600 to-red-600'
    },
    {
      title: 'Equipment Fabrication',
      description: 'MS and SS equipment fabrication including tanks, chimneys, air receivers up to 900KL capacity with precision manufacturing.',
      icon: Cog,
      image: 'https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?q=80&w=600&auto=format&fit=crop',
      features: ['Large Capacity', 'Material Excellence', 'Custom Solutions'],
      color: 'from-red-500 to-blue-600'
    },
    {
      title: 'Equipment Erection',
      description: 'Installation of process machinery, pumps, boilers, cooling towers from 1MT to 120MT with safety protocols and precision.',
      icon: Settings,
      image: 'https://images.unsplash.com/photo-1565514020179-026b92b84bb6?q=80&w=600&auto=format&fit=crop',
      features: ['Heavy Machinery', 'Precision Installation', 'Safety Protocols'],
      color: 'from-blue-500 to-red-500'
    },
    {
      title: 'Balance of Boiler',
      description: 'Complete boiler services from procurement to commissioning following IBR regulations with expert commissioning.',
      icon: Zap,
      image: 'https://images.unsplash.com/photo-1613323593608-abc90fec84ff?q=80&w=600&auto=format&fit=crop',
      features: ['IBR Compliance', 'Complete Solutions', 'Expert Commissioning'],
      color: 'from-red-600 to-blue-500'
    }
  ];

  const stats = [
    { number: '1000+', label: 'Successful Projects', icon: Target, color: 'text-blue-500' },
    { number: '3000+', label: 'Skilled Workforce', icon: Users, color: 'text-red-500' },
    { number: '100M+', label: 'Safe Man Hours Achieved', icon: Shield, color: 'text-blue-600' },
    { number: '33+', label: 'Years of Experience', icon: Award, color: 'text-red-600' }
  ];

  const clients = [
    { name: 'L&T', sector: 'Infrastructure & Engineering', logo: 'LT' },
    { name: 'Reliance Industries', sector: 'Oil & Gas', logo: 'RI' },
    { name: 'TATA Group', sector: 'Steel & Power', logo: 'TT' },
    { name: 'Godrej', sector: 'Chemical & Consumer', logo: 'GJ' },
    { name: 'Hindustan Unilever', sector: 'FMCG Manufacturing', logo: 'HU' },
    { name: 'ITC Limited', sector: 'Manufacturing', logo: 'IT' },
    { name: 'Bajaj Group', sector: 'Automotive', logo: 'BJ' },
    { name: 'JSW Steel', sector: 'Steel Industry', logo: 'JS' }
  ];

  const testimonials = [
    {
      company: 'Serum Institute of India Pvt. Ltd.',
      message: 'Fluidline was awarded the turnkey project for Supply, Inspection, Testing, Erection and Commissioning of complete OSBL and ISBL with exceptional quality and timely delivery.',
      rating: 5,
      author: 'Project Director',
      logo: 'SI'
    },
    {
      company: 'Jubilant Life Sciences',
      message: 'We are pleased to be associated with Fluidline as our strategic sourcing partner in our continuous journey on the path of progress and innovation.',
      rating: 5,
      author: 'VP Engineering',
      logo: 'JL'
    },
    {
      company: 'Cargill India Ltd.',
      message: 'Fluidline was awarded turnkey projects for Supply, Fabrication & Erection of Structure, SS Pipeline, Equipment Erection, Fire Fighting with no safety incidents.',
      rating: 5,
      author: 'Plant Manager',
      logo: 'CI'
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

  // Logo component with blue and red theme
  const FluidlineLogo = ({ className = '', size = 'md' }) => {
    const sizeClasses = {
      sm: 'w-8 h-8 text-xs',
      md: 'w-12 h-12 text-sm',
      lg: 'w-16 h-16 text-base'
    };

    return (
      <div className={`${sizeClasses[size]} ${className} bg-gradient-to-br from-blue-600 to-red-600 rounded-lg flex items-center justify-center shadow-lg`}>
        <span className="text-white font-bold">FL</span>
      </div>
    );
  };

  // Hero Section
  const HeroSection = () => (
    <section className="relative h-screen overflow-hidden">
      <div className="absolute inset-0 z-10 flex items-center">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="max-w-4xl">
            <div className="space-y-6 text-white">
              <div className="space-y-2">
                <p className="text-sm uppercase tracking-widest font-semibold text-blue-300 opacity-90">
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
                  className="bg-gradient-to-r from-blue-600 to-red-600 hover:from-blue-700 hover:to-red-700 text-white px-8 py-4 rounded-full font-semibold transition-all duration-300 flex items-center space-x-2 shadow-xl hover:shadow-2xl transform hover:scale-105"
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
            />
            <div className={`absolute inset-0 ${slide.overlay}`} />
          </div>
        ))}
      </div>

      {/* Navigation */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20">
        <div className="flex space-x-3">
          {heroSlides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentSlide ? 'bg-white scale-125' : 'bg-white/50'
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );

  // Company Introduction Section
  const IntroSection = () => (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-8">
            <span className="text-blue-600">Fluidline Engineers</span> & <span className="text-red-600">Fabricators</span> Private Limited
          </h2>
          <p className="text-xl text-gray-700 mb-6 leading-relaxed">
            is a multi-dimensional company committed to Quality and Customer Delight. We provide turnkey solutions 
            for the most reputed Corporates and MNCs in India.
          </p>
          <p className="text-lg text-gray-600 mb-12 leading-relaxed max-w-4xl mx-auto">
            We are a market leader in Mechanical Works like Process Piping, Utility Piping, Fire Protection & Detection Systems, 
            Equipment Erection, Fabrication of Structures, Tanks, Balance of Boiler Jobs, Tanks, Silos, Insulation, Painting etc.
          </p>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-8 rounded-2xl border-l-4 border-blue-500">
              <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <Heart className="text-white" size={32} />
              </div>
              <h3 className="text-2xl font-bold text-blue-700 mb-4">Inspired by our legacy</h3>
              <h4 className="text-lg font-semibold text-red-600 mb-4">Driven by our young and dynamic leadership</h4>
              <p className="text-gray-700 leading-relaxed">
                Established in 1988, we are still guided by the illustrious management of our founding members. 
                Today we are led by a young and dynamic team and have grown to become one of the most reputed names 
                in the Engineering and Fabrication sector.
              </p>
            </div>

            <div className="bg-gradient-to-br from-red-50 to-red-100 p-8 rounded-2xl border-l-4 border-red-500">
              <div className="w-16 h-16 bg-gradient-to-r from-red-500 to-red-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <TrendingUp className="text-white" size={32} />
              </div>
              <h3 className="text-2xl font-bold text-red-700 mb-4">Over 33 years of delivering best-in-class services</h3>
              <h4 className="text-lg font-semibold text-blue-600 mb-4">And the journey continues!</h4>
              <p className="text-gray-700 leading-relaxed">
                We have had an impeccable track record of serving our customers for the last 33 years across the 
                length and breadth of the country. With every project we undertake, we raise the bar for ourselves 
                to make our solutions and services even more competent and reliable.
              </p>
            </div>

            <div className="bg-gradient-to-br from-purple-50 to-purple-100 p-8 rounded-2xl border-l-4 border-purple-500">
              <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-red-500 rounded-full flex items-center justify-center mx-auto mb-6">
                <Shield className="text-white" size={32} />
              </div>
              <h3 className="text-2xl font-bold text-purple-700 mb-4">Commitment to earning the trust of our clients</h3>
              <p className="text-gray-700 leading-relaxed">
                In our endeavour to become a long-term partner for our valued clients, we ensure that we adhere to all 
                the Quality and Safety Guidelines. We take all measures required to meet the committed timelines. 
                We evaluate our engineering services to offer benefits at a reduced cost.
              </p>
            </div>
          </div>

          <div className="bg-gradient-to-r from-blue-600 to-red-600 p-8 rounded-2xl text-white mt-12">
            <h3 className="text-2xl font-bold mb-4">Strategically located to always stay connected</h3>
            <p className="text-lg">
              We operate from our Head Office in <span className="font-semibold">Kanpur</span> and branches in key cities like 
              <span className="font-semibold"> Mumbai, Noida</span> and <span className="font-semibold">Bengaluru</span>.
            </p>
            <p className="mt-4 text-blue-100">
              We are proud to have two fabrication workshops and two warehouses of our own, that are powered by 
              state-of-the-art machines and the latest software to support.
            </p>
          </div>
        </div>
      </div>
    </section>
  );

  // Stats Section
  const StatsSection = () => (
    <section className="bg-gradient-to-r from-gray-900 to-gray-800 py-20">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => {
            const IconComponent = stat.icon;
            return (
              <div key={index} className="text-center group">
                <div className="mx-auto w-20 h-20 rounded-full bg-white/10 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                  <IconComponent className={`${stat.color}`} size={36} />
                </div>
                <div className="text-4xl font-bold text-white mb-2">{stat.number}</div>
                <div className="text-gray-300 font-medium">{stat.label}</div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );

  // Services Section
  const ServicesSection = () => (
    <section className="py-24 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Our <span className="text-blue-600">Engineering</span> Services
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We have expertise in Design, Supply, Installation, testing and commissioning of comprehensive 
            engineering solutions with Class A Fire License in Maharashtra.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <div
                key={index}
                className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden transform hover:-translate-y-2"
              >
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className={`absolute inset-0 bg-gradient-to-t ${service.color} opacity-60`} />
                  <div className="absolute top-4 left-4">
                    <div className="w-12 h-12 bg-white/90 rounded-full flex items-center justify-center backdrop-blur-sm">
                      <IconComponent className="text-gray-700" size={24} />
                    </div>
                  </div>
                </div>

                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 mb-4 leading-relaxed">
                    {service.description}
                  </p>

                  <div className="space-y-2 mb-6">
                    {service.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center space-x-2">
                        <CheckCircle className="text-green-500" size={16} />
                        <span className="text-sm text-gray-600">{feature}</span>
                      </div>
                    ))}
                  </div>

                  <button className={`w-full bg-gradient-to-r ${service.color} text-white py-3 rounded-lg font-semibold transition-all duration-300 transform group-hover:scale-105 flex items-center justify-center space-x-2`}>
                    <span>Learn More</span>
                    <ArrowRight size={16} />
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );

  // About Us Section
  const AboutUsSection = () => (
    <section className="py-24 bg-gradient-to-br from-blue-50 to-red-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            About <span className="text-blue-600">Fluidline</span> <span className="text-red-600">Group</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-16">
          <div className="relative">
            <img
              src="https://images.unsplash.com/photo-1581092921461-eab62e97a780?q=80&w=800&auto=format&fit=crop"
              alt="Engineering Excellence"
              className="rounded-2xl shadow-2xl"
            />
            <div className="absolute -top-6 -right-6 w-full h-full bg-gradient-to-br from-blue-200/50 to-red-200/50 rounded-2xl -z-10" />
          </div>

          <div className="space-y-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="bg-white p-6 rounded-xl shadow-lg border-l-4 border-blue-500">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                  <Eye className="text-blue-600" size={24} />
                </div>
                <h4 className="font-bold text-gray-900 mb-2">Our Vision</h4>
                <p className="text-sm text-gray-600">
                  To explore new horizons and to venture into multi-dimensional aspects of our area of expertise, 
                  keeping a constant and cordial liaison with our partners and business associates.
                </p>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-lg border-l-4 border-red-500">
                <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center mb-4">
                  <Target className="text-red-600" size={24} />
                </div>
                <h4 className="font-bold text-gray-900 mb-2">Our Mission</h4>
                <p className="text-sm text-gray-600">
                  Guided by principles of integrity and commitment to the goal, we will constantly strive to 
                  implement newer initiatives to achieve our vision.
                </p>
              </div>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-lg">
              <h4 className="font-bold text-gray-900 mb-4 text-lg">Complete Vision Statement</h4>
              <p className="text-gray-600 leading-relaxed">
                To achieve client satisfaction through continued commitment and excellence in safely delivering 
                quality projects on time. In doing this, we will endeavor to uphold our standards of perfection 
                and meet the expectations of all our clients. All our long-term strategies and short-term goals 
                will be motivated by pursuit of excellence in every field.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );

  // Clients Section
  const ClientsSection = () => (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            <span className="text-blue-600">Our</span> <span className="text-red-600">Clients</span> & Consultants
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Trusted by Fortune 500 companies and leading Indian corporations across various industries
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-4 gap-6 mb-12">
          {clients.map((client, index) => (
            <div
              key={index}
              className="group bg-gray-50 hover:bg-white rounded-xl p-6 transition-all duration-300 text-center hover:shadow-lg border-2 border-transparent hover:border-blue-200"
            >
              <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-r from-blue-500 to-red-500 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">{client.logo}</span>
              </div>
              <h4 className="font-semibold text-gray-900 mb-2">{client.name}</h4>
              <p className="text-xs text-gray-500">{client.sector}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );

  // Testimonials Section
  const TestimonialsSection = () => (
    <section className="py-24 bg-gradient-to-r from-gray-900 to-gray-800">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Client <span className="text-blue-400">Testimonials</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Hear from industry leaders about their experience working with Fluidline
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:border-white/20 transition-all duration-300"
            >
              <div className="flex items-center mb-6">
                <div className="flex space-x-1">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="text-yellow-400 fill-current" size={20} />
                  ))}
                </div>
              </div>

              <p className="text-gray-300 mb-6 leading-relaxed italic">
                "{testimonial.message}"
              </p>

              <div className="flex items-center">
                <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-red-500 rounded-full mr-4 flex items-center justify-center">
                  <span className="text-white font-bold text-sm">{testimonial.logo}</span>
                </div>
                <div>
                  <h4 className="font-semibold text-white">{testimonial.company}</h4>
                  <p className="text-sm text-gray-400">{testimonial.author}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );

  // Contact Section
  const ContactSection = () => (
    <section className="py-24 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            <span className="text-blue-600">Contact</span> <span className="text-red-600">Us</span>
          </h2>
          <p className="text-lg text-gray-600">Get in touch with our engineering experts</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="space-y-6">
            {offices.map((office, index) => (
              <div key={index} className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300">
                <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
                  <MapPin className="text-blue-600 mr-2" size={20} />
                  {office.city}
                </h3>
                <div className="space-y-3">
                  <p className="text-gray-600">{office.address}</p>
                  {office.phone && (
                    <p className="flex items-center text-gray-600">
                      <Phone className="mr-2 text-red-500" size={16} />
                      {office.phone}
                    </p>
                  )}
                  <p className="flex items-center text-gray-600">
                    <Mail className="mr-2 text-blue-500" size={16} />
                    {office.email}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="bg-white p-8 rounded-2xl shadow-lg">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Get In Touch</h3>
            <div className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <input 
                  type="text" 
                  placeholder="Your Name" 
                  className="w-full p-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <input 
                  type="email" 
                  placeholder="Your Email" 
                  className="w-full p-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <input 
                type="text" 
                placeholder="Subject" 
                className="w-full p-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <textarea 
                placeholder="Your Message" 
                rows="6"
                className="w-full p-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              ></textarea>
              <button 
                onClick={() => alert('Message sent! We will get back to you soon.')}
                className="w-full bg-gradient-to-r from-blue-600 to-red-600 hover:from-blue-700 hover:to-red-700 text-white py-4 rounded-lg font-semibold transition-all duration-300"
              >
                Send Message
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );

  // CTA Section
  const CTASection = () => (
    <section className="py-20 bg-gradient-to-r from-blue-600 to-red-600">
      <div className="container mx-auto px-6 text-center">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Ready to Start Your Engineering Project?
          </h2>
          <p className="text-xl text-blue-100 mb-8 leading-relaxed">
            Partner with Fluidline for world-class engineering solutions. 
            Let's discuss how we can bring your industrial vision to life.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <button
              onClick={() => setActiveSection('contact')}
              className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-4 rounded-full font-semibold transition-all duration-300 flex items-center space-x-2 shadow-lg hover:shadow-xl transform hover:scale-105"
            >
              <span>Contact Our Experts</span>
              <ArrowRight size={20} />
            </button>
            <button className="border-2 border-white/30 text-white hover:bg-white/10 px-8 py-4 rounded-full font-semibold transition-all duration-300 flex items-center space-x-2">
              <Download size={20} />
              <span>Download Brochure</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );

  const handleChatSubmit = () => {
    if (chatInput.trim()) {
      setChatMessages(prev => [...prev, { type: 'user', message: chatInput }]);
      
      setTimeout(() => {
        let botResponse = '';
        if (chatInput.toLowerCase().includes('service')) {
          botResponse = 'We offer comprehensive engineering solutions including Process Piping (ASME B 31.3), Fire Protection Systems (Class A licensed), Structural Fabrication, Equipment Erection, Balance of Boiler, and Equipment Fabrication. Which service interests you most?';
        } else if (chatInput.toLowerCase().includes('contact') || chatInput.toLowerCase().includes('office')) {
          botResponse = 'You can reach us at our Head Office in Kanpur (+91-512 2225138) or projects@fluidlinegroup.com. We also have offices in Mumbai, Noida, and Bengaluru. Which location would you like to contact?';
        } else if (chatInput.toLowerCase().includes('experience') || chatInput.toLowerCase().includes('project')) {
          botResponse = 'Fluidline has 33+ years of engineering excellence with 1000+ successful projects, 3000+ skilled workforce, and 100M+ safe man hours. We serve Fortune 500 companies across India. Would you like to know about specific projects?';
        } else if (chatInput.toLowerCase().includes('certificate') || chatInput.toLowerCase().includes('license')) {
          botResponse = 'We hold Class A Fire License in Maharashtra and follow ASME B 31.3 standards for process piping. We also comply with IBR regulations for boiler services. Would you like to see our certifications?';
        } else {
          botResponse = 'Thank you for your interest in Fluidline Engineers & Fabricators! Our engineering experts will get back to you shortly. For immediate assistance, call our Head Office at +91-512 2225138.';
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
          <>
            <HeroSection />
            <IntroSection />
            <StatsSection />
            <ServicesSection />
            <ClientsSection />
            <TestimonialsSection />
            <CTASection />
          </>
        );
      
      case 'about':
        return (
          <>
            <PageHeroSection pageKey="about" currentSlide={currentSlide} />
            <div className="pt-16">
              <AboutUsSection />
              <IntroSection />
            </div>
          </>
        );
      
      case 'vision-mission':
        return (
          <>
            <PageHeroSection pageKey="vision-mission" currentSlide={currentSlide} />
            <div className="pt-16">
              <div className="container mx-auto px-6">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
                  <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-12 rounded-2xl border-l-4 border-blue-500">
                    <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-6">
                      <Eye className="text-white" size={32} />
                    </div>
                    <h2 className="text-3xl font-bold text-blue-700 mb-6 text-center">Our Vision</h2>
                    <p className="text-gray-700 leading-relaxed text-lg">
                      To explore new horizons and to venture into multi-dimensional aspects of our area of expertise, 
                      keeping a constant and cordial liaison with our partners and business associates, and to achieve 
                      client satisfaction through continued commitment and excellence in safely delivering quality 
                      projects on time.
                    </p>
                  </div>
                  
                  <div className="bg-gradient-to-br from-red-50 to-red-100 p-12 rounded-2xl border-l-4 border-red-500">
                    <div className="w-16 h-16 bg-gradient-to-r from-red-500 to-red-600 rounded-full flex items-center justify-center mx-auto mb-6">
                      <Target className="text-white" size={32} />
                    </div>
                    <h2 className="text-3xl font-bold text-red-700 mb-6 text-center">Our Mission</h2>
                    <p className="text-gray-700 leading-relaxed text-lg">
                      Guided by principles of integrity and commitment to the goal, we will constantly strive to 
                      implement newer initiatives to achieve our vision. In doing this, we will endeavor to uphold 
                      our standards of perfection and meet the expectations of all our clients. All our long-term 
                      strategies and short-term goals will be motivated by pursuit of excellence in every field.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </>
        );
        
      case 'services':
        return (
          <>
            <PageHeroSection pageKey="services" currentSlide={currentSlide} />
            <div className="pt-16">
              <ServicesSection />
            </div>
          </>
        );

      case 'certificates':
        return (
          <>
            <PageHeroSection pageKey="certificates" currentSlide={currentSlide} />
            <div className="pt-16">
              <div className="container mx-auto px-6">
                <div className="text-center mb-16">
                  <h2 className="text-4xl font-bold text-gray-900 mb-6">
                    Our <span className="text-blue-600">Certificates</span> & <span className="text-red-600">Policies</span>
                  </h2>
                  <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                    We maintain the highest standards of quality and safety compliance across all our operations.
                  </p>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  <div className="bg-white p-8 rounded-2xl shadow-lg border-l-4 border-blue-500">
                    <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                      <Flame className="text-blue-600" size={32} />
                    </div>
                    <h3 className="text-xl font-bold text-center mb-4">Class A Fire License</h3>
                    <p className="text-gray-600 text-center">Maharashtra State Class A Fire Protection License</p>
                  </div>
                  
                  <div className="bg-white p-8 rounded-2xl shadow-lg border-l-4 border-red-500">
                    <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-6">
                      <Factory className="text-red-600" size={32} />
                    </div>
                    <h3 className="text-xl font-bold text-center mb-4">ASME B 31.3</h3>
                    <p className="text-gray-600 text-center">Process Piping Standards Compliance</p>
                  </div>
                  
                  <div className="bg-white p-8 rounded-2xl shadow-lg border-l-4 border-green-500">
                    <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                      <Shield className="text-green-600" size={32} />
                    </div>
                    <h3 className="text-xl font-bold text-center mb-4">IBR Compliance</h3>
                    <p className="text-gray-600 text-center">Indian Boiler Regulations Certified</p>
                  </div>
                </div>
              </div>
            </div>
          </>
        );
        
      case 'clients':
        return (
          <>
            <PageHeroSection pageKey="clients" currentSlide={currentSlide} />
            <div className="pt-16">
              <ClientsSection />
              <TestimonialsSection />
            </div>
          </>
        );

      case 'career':
        return (
          <>
            <PageHeroSection pageKey="career" currentSlide={currentSlide} />
            <div className="pt-16">
              <div className="container mx-auto px-6">
                <div className="text-center mb-16">
                  <h2 className="text-4xl font-bold text-gray-900 mb-6">
                    <span className="text-blue-600">Career</span> <span className="text-red-600">Opportunities</span>
                  </h2>
                  <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                    Join our team of 3000+ skilled professionals and be part of engineering excellence.
                  </p>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  <div className="bg-white p-8 rounded-2xl shadow-lg text-center">
                    <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-red-500 rounded-full flex items-center justify-center mx-auto mb-6">
                      <Users className="text-white" size={32} />
                    </div>
                    <h3 className="text-xl font-bold mb-4">Growing Team</h3>
                    <p className="text-gray-600">Join 3000+ skilled professionals in engineering excellence</p>
                  </div>
                  
                  <div className="bg-white p-8 rounded-2xl shadow-lg text-center">
                    <div className="w-16 h-16 bg-gradient-to-r from-red-500 to-blue-500 rounded-full flex items-center justify-center mx-auto mb-6">
                      <Target className="text-white" size={32} />
                    </div>
                    <h3 className="text-xl font-bold mb-4">Career Growth</h3>
                    <p className="text-gray-600">33+ years of experience in nurturing talent and leadership</p>
                  </div>
                  
                  <div className="bg-white p-8 rounded-2xl shadow-lg text-center">
                    <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-red-500 rounded-full flex items-center justify-center mx-auto mb-6">
                      <Award className="text-white" size={32} />
                    </div>
                    <h3 className="text-xl font-bold mb-4">Excellence Culture</h3>
                    <p className="text-gray-600">Work on Fortune 500 projects with industry-leading standards</p>
                  </div>
                </div>
              </div>
            </div>
          </>
        );
        
      case 'contact':
        return (
          <>
            <PageHeroSection pageKey="contact" currentSlide={currentSlide} />
            <div className="pt-16">
              <ContactSection />
            </div>
          </>
        );
        
      default:
        return (
          <>
            <PageHeroSection pageKey="about" currentSlide={currentSlide} />
            <div className="pt-24 py-16">
              <div className="container mx-auto px-6 text-center">
                <h1 className="text-4xl font-bold text-gray-900 mb-8">
                  {navigation.find(item => item.id === activeSection)?.name || 'Page'}
                </h1>
                <p className="text-xl text-gray-600 mb-8">
                  This section is being developed with comprehensive content and features.
                </p>
                <button
                  onClick={() => setActiveSection('home')}
                  className="bg-gradient-to-r from-blue-600 to-red-600 hover:from-blue-700 hover:to-red-700 text-white px-8 py-3 rounded-full font-semibold transition-all duration-300"
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
      {/* Header */}
      <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-white/95 backdrop-blur-lg shadow-lg' 
          : 'bg-transparent'
      }`}>
        <div className="container mx-auto px-6">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center space-x-4">
              <FluidlineLogo />
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

            <nav className="hidden lg:flex items-center space-x-1">
              {navigation.map((item) => {
                const IconComponent = item.icon;
                return (
                  <button
                    key={item.id}
                    onClick={() => setActiveSection(item.id)}
                    className={`flex items-center space-x-2 px-3 py-2 rounded-lg font-medium transition-all duration-300 text-sm ${
                      activeSection === item.id
                        ? 'bg-gradient-to-r from-blue-600 to-red-600 text-white shadow-lg transform scale-105'
                        : isScrolled
                        ? 'text-gray-700 hover:text-blue-600 hover:bg-blue-50'
                        : 'text-white hover:text-blue-300 hover:bg-white/10'
                    }`}
                  >
                    <IconComponent size={14} />
                    <span>{item.name}</span>
                  </button>
                );
              })}
            </nav>

            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className={`lg:hidden p-2 rounded-lg transition-colors duration-300 ${
                isScrolled ? 'text-gray-900' : 'text-white'
              }`}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          {/* Mobile Menu */}
          {isMenuOpen && (
            <div className="lg:hidden bg-white/95 backdrop-blur-lg rounded-xl mt-2 p-4 shadow-xl">
              <nav className="space-y-2">
                {navigation.map((item) => {
                  const IconComponent = item.icon;
                  return (
                    <button
                      key={item.id}
                      onClick={() => {
                        setActiveSection(item.id);
                        setIsMenuOpen(false);
                      }}
                      className={`w-full flex items-center space-x-3 px-4 py-3 rounded-lg font-medium transition-all duration-300 ${
                        activeSection === item.id
                          ? 'bg-gradient-to-r from-blue-600 to-red-600 text-white'
                          : 'text-gray-700 hover:bg-blue-50 hover:text-blue-600'
                      }`}
                    >
                      <IconComponent size={20} />
                      <span>{item.name}</span>
                    </button>
                  );
                })}
              </nav>
            </div>
          )}
        </div>
      </header>

      {/* Main Content */}
      <main>
        {renderSection()}
      </main>

      {/* Footer */}
      <footer className="bg-gradient-to-r from-gray-900 to-black text-white py-16">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
            <div className="space-y-4">
              <div className="flex items-center space-x-4">
                <FluidlineLogo size="lg" />
                <div>
                  <h3 className="text-xl font-bold">FLUIDLINE</h3>
                  <p className="text-gray-400 text-sm">Engineers & Fabricators</p>
                </div>
              </div>
              <p className="text-gray-400 leading-relaxed">
                33+ years of delivering world-class engineering and fabrication solutions 
                to Fortune 500 companies and leading Indian corporations.
              </p>
            </div>
            
            <div>
              <h4 className="font-bold text-lg mb-4">Quick Links</h4>
              <ul className="space-y-3">
                {navigation.slice(0, 4).map((item) => (
                  <li key={item.id}>
                    <button 
                      onClick={() => setActiveSection(item.id)}
                      className="text-gray-400 hover:text-white transition-colors duration-300 flex items-center space-x-2"
                    >
                      <ChevronRight size={16} />
                      <span>{item.name}</span>
                    </button>
                  </li>
                ))}
              </ul>
            </div>
            
            <div>
              <h4 className="font-bold text-lg mb-4">Services</h4>
              <ul className="space-y-3 text-gray-400">
                <li>Process & Utility Piping</li>
                <li>Fire Protection Systems</li>
                <li>Structural Fabrication</li>
                <li>Equipment Erection</li>
                <li>Balance of Boiler</li>
                <li>Equipment Fabrication</li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-bold text-lg mb-4">Contact</h4>
              <div className="space-y-3 text-gray-400">
                <p className="flex items-center space-x-2">
                  <Phone size={16} />
                  <span>+91-512 2225138</span>
                </p>
                <p className="flex items-center space-x-2">
                  <Mail size={16} />
                  <span>projects@fluidlinegroup.com</span>
                </p>
                <p className="flex items-start space-x-2">
                  <MapPin size={16} className="mt-1" />
                  <span>Kanpur • Mumbai • Noida • Bengaluru</span>
                </p>
              </div>
            </div>
          </div>
          
          <div className="border-t border-gray-800 pt-8 text-center">
            <p className="text-gray-400">
              &copy; 2025 Fluidline Engineers & Fabricators Pvt. Ltd. All rights reserved.
            </p>
          </div>
        </div>
      </footer>

      {/* AI Chatbot */}
      <div className="fixed bottom-6 right-6 z-50">
        {!showChatbot ? (
          <button
            onClick={() => setShowChatbot(true)}
            className="bg-gradient-to-r from-blue-600 to-red-600 hover:from-blue-700 hover:to-red-700 text-white p-4 rounded-full shadow-2xl transition-all duration-300 transform hover:scale-110"
          >
            <MessageCircle size={24} />
          </button>
        ) : (
          <div className="bg-white rounded-2xl shadow-2xl w-80 h-96 flex flex-col border border-gray-200">
            <div className="bg-gradient-to-r from-blue-600 to-red-600 text-white p-4 rounded-t-2xl flex justify-between items-center">
              <div>
                <h4 className="font-bold">Fluidline AI Assistant</h4>
                <p className="text-sm opacity-90">Engineering Solutions Expert</p>
              </div>
              <button
                onClick={() => setShowChatbot(false)}
                className="text-white/70 hover:text-white transition-colors duration-300"
              >
                <Minimize2 size={20} />
              </button>
            </div>

            <div className="flex-1 overflow-y-auto p-4 space-y-4">
              {chatMessages.map((msg, index) => (
                <div key={index} className={`flex ${msg.type === 'user' ? 'justify-end' : 'justify-start'}`}>
                  <div className={`max-w-xs p-3 rounded-2xl ${
                    msg.type === 'user' 
                      ? 'bg-gradient-to-r from-blue-600 to-red-600 text-white' 
                      : 'bg-gray-100 text-gray-800'
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
                  onKeyPress={(e) => e.key === 'Enter' && handleChatSubmit()}
                  placeholder="Ask about our engineering services..."
                  className="flex-1 p-3 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <button
                  onClick={handleChatSubmit}
                  className="bg-gradient-to-r from-blue-600 to-red-600 hover:from-blue-700 hover:to-red-700 text-white p-3 rounded-full transition-colors duration-300"
                >
                  <Send size={18} />
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