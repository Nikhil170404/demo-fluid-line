import React from 'react';
import AnimatedCounter from '../AnimatedCounter';
import { stats } from '../../data/websiteData';

const StatsSection = ({ currentThemeConfig }) => {
  return (
    <section className={`bg-gradient-to-r ${currentThemeConfig.statsGradient} py-20`}>
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => {
            const IconComponent = stat.icon;
            let suffix = '+';
            if (stat.label.includes('M+')) suffix = 'M+';
            
            return (
              <div key={index} className="text-center group">
                <div className="mx-auto w-20 h-20 rounded-full bg-white/10 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                  <IconComponent className={`text-${currentThemeConfig.primary}-300`} size={36} />
                </div>
                <div className="mb-2">
                  <AnimatedCounter 
                    end={stat.number} 
                    suffix={suffix}
                    id={`stats-counter-${index}`}
                  />
                </div>
                <div className="text-gray-300 font-medium text-sm md:text-base">{stat.label}</div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;