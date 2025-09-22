import React from 'react';
import AnimatedCounter from '../AnimatedCounter';
import { clients } from '../../data/websiteData';

const ClientsSection = ({ currentThemeConfig }) => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            <span className={`text-${currentThemeConfig.primary}`}>Our</span> <span className={`text-${currentThemeConfig.secondary}`}>Clients</span> & Consultants
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Trusted by Fortune 500 companies and leading Indian corporations across various industries
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6 mb-12">
          {clients.map((client, index) => (
            <div
              key={index}
              className={`group bg-gray-50 hover:bg-white rounded-xl p-6 transition-all duration-300 text-center hover:shadow-lg border-2 border-transparent hover:border-${currentThemeConfig.primary}-200 transform hover:scale-105`}
            >
              <div className="w-20 h-20 mx-auto mb-4 bg-white rounded-lg flex items-center justify-center shadow-sm group-hover:shadow-md transition-all duration-300 overflow-hidden">
                <img
                  src={client.logo}
                  alt={`${client.name} logo`}
                  className="w-16 h-16 object-contain"
                  loading="lazy"
                  onError={(e) => {
                    e.target.style.display = 'none';
                    e.target.nextSibling.style.display = 'flex';
                  }}
                />
                <div 
                  className={`w-16 h-16 bg-gradient-to-r from-${currentThemeConfig.primary} to-${currentThemeConfig.secondary} rounded-lg hidden items-center justify-center`}
                >
                  <span className="text-white font-bold text-sm">{client.fallback}</span>
                </div>
              </div>
              <h4 className="font-semibold text-gray-900 mb-2 text-sm leading-tight">{client.name}</h4>
              <p className="text-xs text-gray-500">{client.sector}</p>
            </div>
          ))}
        </div>

        {/* Client Recognition Stats */}
        <div className={`bg-gradient-to-r ${currentThemeConfig.primaryGradient} rounded-2xl p-8 text-white text-center`}>
          <h3 className="text-2xl font-bold mb-4">Trusted by Industry Leaders</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <div>
              <div className="mb-2">
                <AnimatedCounter end="500" suffix="+" id="clients-counter-fortune" />
              </div>
              <p className="text-sm opacity-90">Fortune Companies</p>
            </div>
            <div>
              <div className="mb-2">
                <AnimatedCounter end="50" suffix="+" id="clients-counter-mnc" />
              </div>
              <p className="text-sm opacity-90">MNCs Served</p>
            </div>
            <div>
              <div className="mb-2">
                <AnimatedCounter end="30" suffix="+" id="clients-counter-sectors" />
              </div>
              <p className="text-sm opacity-90">Industry Sectors</p>
            </div>
            <div>
              <div className="mb-2">
                <AnimatedCounter end="100" suffix="%" id="clients-counter-satisfaction" />
              </div>
              <p className="text-sm opacity-90">Client Satisfaction</p>
            </div>
          </div>
          <div className="mt-6 pt-6 border-t border-white/20">
            <p className="text-sm opacity-90">
              From Pharmaceuticals to Steel, Automotive to Telecommunications - 
              our engineering excellence spans across diverse industries
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ClientsSection;