import React, { useState } from 'react';
import { ChevronDown, Palette } from 'lucide-react';
import { themes } from '../config/themes';

const ThemeSwitcher = ({ currentTheme, setCurrentTheme, currentThemeConfig }) => {
  const [showThemeSelector, setShowThemeSelector] = useState(false);

  const handleThemeChange = (themeKey) => {
    setCurrentTheme(themeKey);
    setShowThemeSelector(false);
  };

  return (
    <div className="mb-4">
      <button
        onClick={() => setShowThemeSelector(!showThemeSelector)}
        className={`w-full bg-gradient-to-r ${currentThemeConfig.primaryGradient} hover:${currentThemeConfig.primaryHover} text-white p-3 rounded-full shadow-xl transition-all duration-300 transform hover:scale-105 flex items-center justify-center space-x-2`}
        aria-label="Theme selector"
      >
        <Palette size={18} />
        <div className="w-6 h-6 rounded-full bg-white/20 flex items-center justify-center">
          <div className={`w-3 h-3 rounded-full ${currentThemeConfig.preview}`}></div>
        </div>
        <span className="font-semibold">Theme Selector</span>
        <ChevronDown 
          className={`transition-transform duration-300 ${showThemeSelector ? 'rotate-180' : ''}`} 
          size={16} 
        />
      </button>

      {showThemeSelector && (
        <>
          {/* Backdrop */}
          <div 
            className="fixed inset-0 bg-black/20 z-40"
            onClick={() => setShowThemeSelector(false)}
          />
          
          {/* Theme Panel */}
          <div className="absolute bottom-full mb-3 right-0 bg-white rounded-2xl shadow-2xl border border-gray-200 p-4 max-h-80 overflow-y-auto z-50 w-80">
            <h4 className="font-bold text-gray-800 mb-3 text-center flex items-center justify-center space-x-2">
              <Palette size={18} />
              <span>Choose Your Theme</span>
            </h4>
            <div className="grid grid-cols-2 gap-2">
              {Object.entries(themes).map(([key, theme]) => (
                <button
                  key={key}
                  onClick={() => handleThemeChange(key)}
                  className={`p-3 rounded-lg transition-all duration-300 border-2 group ${
                    currentTheme === key 
                      ? 'border-blue-500 bg-blue-50 shadow-md transform scale-105' 
                      : 'border-gray-200 hover:border-gray-300 hover:bg-gray-50'
                  }`}
                  aria-label={`Select ${theme.name} theme`}
                >
                  <div className={`w-full h-8 rounded ${theme.preview} mb-2 shadow-sm group-hover:shadow-md transition-shadow duration-300`}></div>
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
            <div className="mt-4 p-3 bg-gray-50 rounded-lg">
              <p className="text-xs text-gray-600 text-center">
                Themes are automatically saved and will persist across sessions
              </p>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default ThemeSwitcher;