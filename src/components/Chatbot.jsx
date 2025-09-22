import React, { useState, useRef, useEffect } from 'react';
import { MessageCircle, Send, Minimize2, X } from 'lucide-react';

const Chatbot = ({ currentThemeConfig, isOpen = false, onClose, isMobile = false }) => {
  const [messages, setMessages] = useState([
    { 
      type: 'bot', 
      message: 'Hello! Welcome to Fluidline Engineers & Fabricators. How can I help you with our engineering solutions today?' 
    }
  ]);
  const [input, setInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef(null);
  const inputRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  useEffect(() => {
    if (isOpen && inputRef.current) {
      inputRef.current.focus();
    }
  }, [isOpen]);

  const getBotResponse = (userMessage) => {
    const message = userMessage.toLowerCase();
    
    if (message.includes('service') || message.includes('what do you do')) {
      return 'We offer comprehensive engineering solutions including Process Piping (ASME B 31.3), Fire Protection Systems (Class A licensed), Structural Fabrication, Equipment Erection, Balance of Boiler, and Equipment Fabrication. Which service interests you most?';
    }
    
    if (message.includes('contact') || message.includes('office') || message.includes('location')) {
      return 'You can reach us at our Head Office in Kanpur (+91-512 2225138) or projects@fluidlinegroup.com. We also have offices in Mumbai, Noida, and Bengaluru. Which location would you like to contact?';
    }
    
    if (message.includes('experience') || message.includes('project') || message.includes('about')) {
      return 'Fluidline has 33+ years of engineering excellence with 1000+ successful projects, 3000+ skilled workforce, and 100M+ safe man hours. We serve Fortune 500 companies across India. Would you like to know about specific projects?';
    }
    
    if (message.includes('certificate') || message.includes('license') || message.includes('quality')) {
      return 'We hold Class A Fire License in Maharashtra and follow ASME B 31.3 standards for process piping. We also comply with IBR regulations for boiler services. Would you like to see our certifications?';
    }
    
    if (message.includes('fire') || message.includes('protection')) {
      return 'Our Fire Protection & Detection Systems include design, supply, installation, testing and commissioning with Maharashtra Class A license. We ensure complete safety compliance for all industrial applications.';
    }
    
    if (message.includes('piping') || message.includes('process')) {
      return 'We specialize in Process & Utility Piping following ASME B 31.3 standards. Our solutions include custom design, precision engineering, and quality testing for various industrial applications.';
    }
    
    if (message.includes('career') || message.includes('job') || message.includes('work')) {
      return 'Join our team of 3000+ skilled professionals! We offer career opportunities across multiple locations with continuous learning and growth prospects. Would you like to know about current openings?';
    }
    
    if (message.includes('price') || message.includes('cost') || message.includes('quote')) {
      return 'For project pricing and quotes, please contact our sales team at projects@fluidlinegroup.com or call +91-512 2225138. We provide customized solutions based on your specific requirements.';
    }
    
    if (message.includes('hello') || message.includes('hi') || message.includes('hey')) {
      return 'Hello! I\'m here to help you learn about Fluidline\'s engineering services. You can ask me about our services, experience, certifications, or how to contact us. What would you like to know?';
    }
    
    if (message.includes('thank') || message.includes('thanks')) {
      return 'You\'re welcome! If you have any more questions about our engineering solutions or need assistance, feel free to ask. Our team is always ready to help!';
    }
    
    return 'Thank you for your interest in Fluidline Engineers & Fabricators! For detailed information about our services or to discuss your specific requirements, please contact our engineering experts at projects@fluidlinegroup.com or call +91-512 2225138.';
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!input.trim()) return;

    const userMessage = input.trim();
    setMessages(prev => [...prev, { type: 'user', message: userMessage }]);
    setInput('');
    setIsTyping(true);

    // Simulate typing delay
    setTimeout(() => {
      const botResponse = getBotResponse(userMessage);
      setMessages(prev => [...prev, { type: 'bot', message: botResponse }]);
      setIsTyping(false);
    }, 1000 + Math.random() * 1000);
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSubmit(e);
    }
  };

  if (!isOpen) {
    return null;
  }

  return (
    <div className={`${
      isMobile 
        ? 'w-full h-full' 
        : 'w-80 h-96'
    } bg-white rounded-2xl shadow-2xl flex flex-col border border-gray-200 overflow-hidden`}>
      
      {/* Header */}
      <div className={`bg-gradient-to-r ${currentThemeConfig.chatGradient} text-white p-3 sm:p-4 flex justify-between items-center`}>
        <div>
          <h4 className="font-bold text-sm sm:text-base">Fluidline AI Assistant</h4>
          <p className="text-xs sm:text-sm opacity-90">Engineering Solutions Expert</p>
        </div>
        <div className="flex space-x-1 sm:space-x-2">
          {!isMobile && (
            <button
              onClick={onClose}
              className="text-white/70 hover:text-white transition-colors duration-300 p-1 rounded-full hover:bg-white/10"
              aria-label="Minimize chat"
            >
              <Minimize2 size={16} className="sm:w-4 sm:h-4" />
            </button>
          )}
          <button
            onClick={onClose}
            className="text-white/70 hover:text-white transition-colors duration-300 p-1 rounded-full hover:bg-white/10"
            aria-label="Close chat"
          >
            <X size={16} className="sm:w-4 sm:h-4" />
          </button>
        </div>
      </div>

      {/* Messages */}
      <div className="flex-1 overflow-y-auto p-3 sm:p-4 space-y-3 sm:space-y-4 bg-gray-50">
        {messages.map((msg, index) => (
          <div key={index} className={`flex ${msg.type === 'user' ? 'justify-end' : 'justify-start'}`}>
            <div className={`max-w-[85%] sm:max-w-xs p-3 rounded-2xl ${
              msg.type === 'user' 
                ? `bg-gradient-to-r ${currentThemeConfig.chatGradient} text-white` 
                : 'bg-white text-gray-800 shadow-sm border border-gray-200'
            }`}>
              <p className="text-sm leading-relaxed">{msg.message}</p>
            </div>
          </div>
        ))}
        
        {isTyping && (
          <div className="flex justify-start">
            <div className="bg-white text-gray-800 shadow-sm border border-gray-200 p-3 rounded-2xl max-w-xs">
              <div className="flex space-x-1">
                <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>
                <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{animationDelay: '0.1s'}}></div>
                <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{animationDelay: '0.2s'}}></div>
              </div>
            </div>
          </div>
        )}
        <div ref={messagesEndRef} />
      </div>

      {/* Input */}
      <div className="p-3 sm:p-4 border-t bg-white">
        <form onSubmit={handleSubmit} className="flex space-x-2">
          <input
            ref={inputRef}
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyPress={handleKeyPress}
            placeholder="Ask about our engineering services..."
            className={`flex-1 p-2 sm:p-3 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-${currentThemeConfig.primary} focus:border-transparent transition-colors duration-300 text-sm sm:text-base`}
            disabled={isTyping}
          />
          <button
            type="submit"
            disabled={isTyping || !input.trim()}
            className={`bg-gradient-to-r ${currentThemeConfig.chatGradient} hover:${currentThemeConfig.primaryHover} text-white p-2 sm:p-3 rounded-full transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed flex-shrink-0`}
          >
            <Send size={16} className="sm:w-4 sm:h-4" />
          </button>
        </form>
        
        {/* Quick Actions - Mobile Only */}
        {isMobile && (
          <div className="mt-3 flex flex-wrap gap-2">
            <button
              onClick={() => setInput('What services do you offer?')}
              className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-xs hover:bg-gray-200 transition-colors"
            >
              Services
            </button>
            <button
              onClick={() => setInput('How can I contact you?')}
              className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-xs hover:bg-gray-200 transition-colors"
            >
              Contact
            </button>
            <button
              onClick={() => setInput('Tell me about your experience')}
              className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-xs hover:bg-gray-200 transition-colors"
            >
              Experience
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Chatbot;