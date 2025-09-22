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
    <section className={`py-24 bg-gradient-to-b from-white to-${currentThemeConfig.cardGradient}`}>
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            <span className={`text-${currentThemeConfig.primary}`}>Contact</span> <span className={`text-${currentThemeConfig.secondary}`}>Us</span>
          </h2>
          <p className="text-lg text-gray-600">Get in touch with our engineering experts</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Office Locations */}
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Our Offices</h3>
            {offices.map((office, index) => (
              <div key={index} className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300">
                <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
                  <MapPin className={`text-${currentThemeConfig.primary} mr-2 flex-shrink-0`} size={20} />
                  {office.city}
                </h3>
                <div className="space-y-3">
                  <p className="text-gray-600 leading-relaxed">{office.address}</p>
                  {office.phone && (
                    <p className="flex items-center text-gray-600">
                      <Phone className={`mr-2 text-${currentThemeConfig.secondary} flex-shrink-0`} size={16} />
                      <span>{office.phone}</span>
                    </p>
                  )}
                  <p className="flex items-center text-gray-600">
                    <Mail className={`mr-2 text-${currentThemeConfig.primary} flex-shrink-0`} size={16} />
                    <span>{office.email}</span>
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Contact Form */}
          <div className="bg-white p-8 rounded-2xl shadow-lg">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Get In Touch</h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <input 
                  type="text" 
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  placeholder="Your Name" 
                  required
                  className={`w-full p-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-${currentThemeConfig.primary} transition-colors duration-300`}
                />
                <input 
                  type="email" 
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  placeholder="Your Email" 
                  required
                  className={`w-full p-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-${currentThemeConfig.primary} transition-colors duration-300`}
                />
              </div>
              <input 
                type="text" 
                name="subject"
                value={formData.subject}
                onChange={handleInputChange}
                placeholder="Subject" 
                required
                className={`w-full p-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-${currentThemeConfig.primary} transition-colors duration-300`}
              />
              <textarea 
                name="message"
                value={formData.message}
                onChange={handleInputChange}
                placeholder="Your Message" 
                rows="6"
                required
                className={`w-full p-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-${currentThemeConfig.primary} transition-colors duration-300 resize-none`}
              ></textarea>
              <button 
                type="submit"
                disabled={isSubmitting}
                className={`w-full bg-gradient-to-r ${currentThemeConfig.primaryGradient} hover:${currentThemeConfig.primaryHover} text-white py-4 rounded-lg font-semibold transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed ${
                  isSubmitting ? 'animate-pulse' : 'transform hover:scale-105'
                }`}
              >
                {isSubmitting ? 'Sending...' : 'Send Message'}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;