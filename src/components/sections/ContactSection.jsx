import React, { useState } from 'react';
import { MapPin, Phone, Mail } from 'lucide-react';
import { offices } from '../../data/websiteData';

const ContactSection = ({ currentThemeConfig }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    alert('Message sent! We will get back to you soon.');
    setFormData({
      name: '',
      email: '',
      subject: '',
      message: ''
    });
    setIsSubmitting(false);
  };

  return (
    <section className={`py-16 sm:py-20 lg:py-24 bg-gradient-to-b from-white to-${currentThemeConfig.cardGradient}`}>
      <div className="container mx-auto px-4 sm:px-6">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            <span className={`text-${currentThemeConfig.primary}`}>Contact</span>{' '}
            <span className={`text-${currentThemeConfig.secondary}`}>Us</span>
          </h2>
          <p className="text-base sm:text-lg text-gray-600">Get in touch with our engineering experts</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
          {/* Office Locations */}
          <div className="space-y-4 sm:space-y-6">
            <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4 sm:mb-6">Our Offices</h3>
            {offices.map((office, index) => (
              <div key={index} className="bg-white p-4 sm:p-6 rounded-xl sm:rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300">
                <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-3 sm:mb-4 flex items-start">
                  <MapPin className={`text-${currentThemeConfig.primary} mr-2 mt-1 flex-shrink-0`} size={18} />
                  <span className="leading-tight">{office.city}</span>
                </h3>
                <div className="space-y-2 sm:space-y-3">
                  <p className="text-sm sm:text-base text-gray-600 leading-relaxed pl-6">{office.address}</p>
                  {office.phone && (
                    <a 
                      href={`tel:${office.phone.replace(/[^0-9+]/g, '')}`}
                      className="flex items-center text-sm sm:text-base text-gray-600 hover:text-blue-600 transition-colors pl-6"
                    >
                      <Phone className={`mr-2 text-${currentThemeConfig.secondary} flex-shrink-0`} size={14} />
                      <span>{office.phone}</span>
                    </a>
                  )}
                  <a 
                    href={`mailto:${office.email}`}
                    className="flex items-center text-sm sm:text-base text-gray-600 hover:text-blue-600 transition-colors pl-6"
                  >
                    <Mail className={`mr-2 text-${currentThemeConfig.primary} flex-shrink-0`} size={14} />
                    <span className="break-all">{office.email}</span>
                  </a>
                </div>
              </div>
            ))}
          </div>

          {/* Contact Form */}
          <div className="bg-white p-6 sm:p-8 rounded-xl sm:rounded-2xl shadow-lg">
            <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4 sm:mb-6">Get In Touch</h3>
            <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <input 
                  type="text" 
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  placeholder="Your Name" 
                  required
                  className={`w-full p-3 sm:p-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-${currentThemeConfig.primary} transition-colors duration-300 text-sm sm:text-base`}
                />
                <input 
                  type="email" 
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  placeholder="Your Email" 
                  required
                  className={`w-full p-3 sm:p-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-${currentThemeConfig.primary} transition-colors duration-300 text-sm sm:text-base`}
                />
              </div>
              <input 
                type="text" 
                name="subject"
                value={formData.subject}
                onChange={handleInputChange}
                placeholder="Subject" 
                required
                className={`w-full p-3 sm:p-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-${currentThemeConfig.primary} transition-colors duration-300 text-sm sm:text-base`}
              />
              <textarea 
                name="message"
                value={formData.message}
                onChange={handleInputChange}
                placeholder="Your Message" 
                rows="5"
                required
                className={`w-full p-3 sm:p-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-${currentThemeConfig.primary} transition-colors duration-300 resize-none text-sm sm:text-base`}
              ></textarea>
              <button 
                type="submit"
                disabled={isSubmitting}
                className={`w-full bg-gradient-to-r ${currentThemeConfig.primaryGradient} hover:${currentThemeConfig.primaryHover} text-white py-3 sm:py-4 rounded-lg font-semibold transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed text-sm sm:text-base ${
                  isSubmitting ? 'animate-pulse' : 'transform hover:scale-105'
                }`}
              >
                {isSubmitting ? 'Sending...' : 'Send Message'}
              </button>
            </form>

            {/* Additional Contact Info */}
            <div className="mt-6 sm:mt-8 pt-6 border-t border-gray-200">
              <h4 className="font-semibold text-gray-900 mb-3 text-sm sm:text-base">Need Immediate Assistance?</h4>
              <div className="space-y-2">
                <a 
                  href="tel:+915122225138"
                  className={`block text-${currentThemeConfig.primary} hover:text-${currentThemeConfig.primaryDark} font-medium transition-colors text-sm sm:text-base`}
                >
                  📞 +91-512-2225138 (Head Office)
                </a>
                <a 
                  href="mailto:projects@fluidlinegroup.com"
                  className={`block text-${currentThemeConfig.secondary} hover:text-${currentThemeConfig.secondaryDark} font-medium transition-colors text-sm sm:text-base break-all`}
                >
                  ✉️ projects@fluidlinegroup.com
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Quick Contact Banner */}
        <div className={`mt-12 sm:mt-16 bg-gradient-to-r ${currentThemeConfig.primaryGradient} rounded-xl sm:rounded-2xl p-6 sm:p-8 text-white text-center`}>
          <h3 className="text-lg sm:text-xl lg:text-2xl font-bold mb-2 sm:mb-4">Ready to Start Your Project?</h3>
          <p className="text-sm sm:text-base lg:text-lg mb-4 sm:mb-6 opacity-90">
            Get in touch with our engineering experts today for a free consultation
          </p>
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center max-w-lg mx-auto">
            <a 
              href="tel:+915122225138"
              className="w-full sm:w-auto bg-white text-blue-600 hover:bg-gray-100 px-4 sm:px-6 py-2 sm:py-3 rounded-full font-semibold transition-all duration-300 text-sm sm:text-base"
            >
              Call Now: +91-512-2225138
            </a>
            <a 
              href="mailto:projects@fluidlinegroup.com"
              className="w-full sm:w-auto border-2 border-white/30 text-white hover:bg-white/10 px-4 sm:px-6 py-2 sm:py-3 rounded-full font-semibold transition-all duration-300 text-sm sm:text-base"
            >
              Email Us
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;