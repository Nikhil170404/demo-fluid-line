import React, { useState } from 'react';
import { ChevronDown, Palette, MessageCircle } from 'lucide-react';
import { themes } from '../config/themes';
import Chatbot from './Chatbot';

const FloatingComponentsLayout = ({ currentTheme, setCurrentTheme, currentThemeConfig }) => {
  const [showThemeSelector, setShowThemeSelector] = useState(false);
  const [showChatbot, setShowChatbot] = useState(false);

  const handleThemeChange = (themeKey) => {
    setCurrentTheme(themeKey);
    setShowThemeSelector(false);
  };

  return (
    <>
      {/* Mobile-First Floating Action Buttons */}
      <div className="fixed bottom-4 right-4 z-50 flex flex-col items-end space-y-3">
        
        {/* Theme Switcher - Compact for Mobile */}
        {!showChatbot && (
          <div className="relative">
            <button
              onClick={() => setShowThemeSelector(!showThemeSelector)}
              className={`bg-gradient-to-r ${currentThemeConfig.primaryGradient} hover:${currentThemeConfig.primaryHover} text-white p-3 sm:p-4 rounded-full shadow-xl transition-all duration-300 transform hover:scale-105 flex items-center space-x-2`}
              aria-label="Theme selector"
            >
              <Palette size={18} className="sm:w-5 sm:h-5" />
              <div className="w-4 h-4 sm:w-5 sm:h-5 rounded-full bg-white/20 flex items-center justify-center">
                <div className={`w-2 h-2 sm:w-3 sm:h-3 rounded-full ${currentThemeConfig.preview}`}></div>
              </div>
              <span className="font-semibold text-sm sm:text-base hidden sm:inline">Theme</span>
              <ChevronDown 
                className={`transition-transform duration-300 w-4 h-4 sm:w-5 sm:h-5 ${showThemeSelector ? 'rotate-180' : ''}`}
              />
            </button>

            {showThemeSelector && (
              <>
                {/* Mobile Overlay */}
                <div 
                  className="fixed inset-0 bg-black/20 z-40 sm:hidden"
                  onClick={() => setShowThemeSelector(false)}
                />
                
                {/* Theme Panel - Responsive */}
                <div className="absolute bottom-full mb-3 right-0 bg-white rounded-2xl shadow-2xl border border-gray-200 p-3 sm:p-4 max-h-80 overflow-y-auto z-50 w-72 sm:w-80">
                  <h4 className="font-bold text-gray-800 mb-3 text-center flex items-center justify-center space-x-2">
                    <Palette size={16} className="sm:w-4 sm:h-4" />
                    <span className="text-sm sm:text-base">Choose Your Theme</span>
                  </h4>
                  <div className="grid grid-cols-2 gap-2">
                    {Object.entries(themes).map(([key, theme]) => (
                      <button
                        key={key}
                        onClick={() => handleThemeChange(key)}
                        className={`p-2 sm:p-3 rounded-lg transition-all duration-300 border-2 group ${
                          currentTheme === key 
                            ? 'border-blue-500 bg-blue-50 shadow-md transform scale-105' 
                            : 'border-gray-200 hover:border-gray-300 hover:bg-gray-50'
                        }`}
                        aria-label={`Select ${theme.name} theme`}
                      >
                        <div className={`w-full h-6 sm:h-8 rounded ${theme.preview} mb-2 shadow-sm group-hover:shadow-md transition-shadow duration-300`}></div>
                        <p className="text-xs font-medium text-gray-700 text-center leading-tight">
                          {theme.name}
                        </p>
                        {currentTheme === key && (
                          <div className="mt-1 text-center">
                            <span className="inline-block w-2 h-2 bg-blue-500 rounded-full"></span>
                          </div>
                        )}
                      </button>
                    ))}
                  </div>
                  <div className="mt-3 p-2 sm:p-3 bg-gray-50 rounded-lg">
                    <p className="text-xs text-gray-600 text-center">
                      Themes are automatically saved and will persist across sessions
                    </p>
                  </div>
                </div>
              </>
            )}
          </div>
        )}

        {/* Chatbot Toggle Button */}
        {!showChatbot && (
          <button
            onClick={() => setShowChatbot(true)}
            className={`bg-gradient-to-r ${currentThemeConfig.chatGradient} hover:${currentThemeConfig.primaryHover} text-white p-3 sm:p-4 rounded-full shadow-2xl transition-all duration-300 transform hover:scale-110`}
            aria-label="Open chat"
          >
            <MessageCircle size={20} className="sm:w-6 sm:h-6" />
          </button>
        )}
      </div>

      {/* Chatbot Component */}
      {showChatbot && (
        <div className="fixed inset-0 sm:inset-auto sm:bottom-4 sm:right-4 z-50">
          {/* Mobile Overlay */}
          <div className="sm:hidden absolute inset-0 bg-black/50" onClick={() => setShowChatbot(false)} />
          
          {/* Chatbot Container */}
          <div className="relative h-full sm:h-auto sm:w-80 sm:max-h-96">
            <Chatbot 
              currentThemeConfig={currentThemeConfig} 
              isOpen={true}
              onClose={() => setShowChatbot(false)}
              isMobile={window.innerWidth <= 640}
            />
          </div>
        </div>
      )}
    </>
  );
};

export default FloatingComponentsLayout;