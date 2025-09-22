import React from 'react';

const FluidlineLogo = ({ currentThemeConfig, className = '', size = 'md' }) => {
  const sizeClasses = {
    sm: 'w-8 h-8 text-xs',
    md: 'w-12 h-12 text-sm',
    lg: 'w-16 h-16 text-base',
    xl: 'w-20 h-20 text-lg'
  };

  return (
    <div className={`${sizeClasses[size]} ${className} bg-gradient-to-br from-${currentThemeConfig.primary} to-${currentThemeConfig.secondary} rounded-lg flex items-center justify-center shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105`}>
      <span className="text-white font-bold">FL</span>
    </div>
  );
};

export default FluidlineLogo;