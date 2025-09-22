import React from 'react';
import { Heart, TrendingUp, Shield } from 'lucide-react';

const IntroSection = ({ currentThemeConfig }) => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-8">
            <span className={`text-${currentThemeConfig.primary}`}>Fluidline Engineers</span> & <span className={`text-${currentThemeConfig.secondary}`}>Fabricators</span> Private Limited
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
            <div className={`bg-gradient-to-br from-${currentThemeConfig.primaryLight} to-white p-8 rounded-2xl border-l-4 border-${currentThemeConfig.primary} shadow-xl hover:shadow-2xl transition-all duration-300 group`}>
              <div className={`w-16 h-16 bg-gradient-to-r from-${currentThemeConfig.primary} to-${currentThemeConfig.secondaryDark} rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                <Heart className="text-white" size={32} />
              </div>
              <h3 className={`text-2xl font-bold text-${currentThemeConfig.primary} mb-4`}>Inspired by our legacy</h3>
              <h4 className={`text-lg font-semibold text-${currentThemeConfig.secondary} mb-4`}>Driven by our young and dynamic leadership</h4>
              <p className="text-gray-700 leading-relaxed">
                Established in 1988, we are still guided by the illustrious management of our founding members. 
                Today we are led by a young and dynamic team and have grown to become one of the most reputed names 
                in the Engineering and Fabrication sector.
              </p>
            </div>

            <div className={`bg-gradient-to-br from-${currentThemeConfig.primaryLight} to-white p-8 rounded-2xl border-l-4 border-${currentThemeConfig.secondaryDark} shadow-xl hover:shadow-2xl transition-all duration-300 group`}>
              <div className={`w-16 h-16 bg-gradient-to-r from-${currentThemeConfig.primary} to-${currentThemeConfig.secondaryDark} rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                <TrendingUp className="text-white" size={32} />
              </div>
              <h3 className={`text-2xl font-bold text-${currentThemeConfig.secondary} mb-4`}>Over 33 years of delivering best-in-class services</h3>
              <h4 className={`text-lg font-semibold text-${currentThemeConfig.primary} mb-4`}>And the journey continues!</h4>
              <p className="text-gray-700 leading-relaxed">
                We have had an impeccable track record of serving our customers for the last 33 years across the 
                length and breadth of the country. With every project we undertake, we raise the bar for ourselves 
                to make our solutions and services even more competent and reliable.
              </p>
            </div>

            <div className={`bg-gradient-to-br from-${currentThemeConfig.primaryLight} via-${currentThemeConfig.secondaryLight} to-white p-8 rounded-2xl border-l-4 border-${currentThemeConfig.secondary} shadow-xl hover:shadow-2xl transition-all duration-300 group`}>
              <div className={`w-16 h-16 bg-gradient-to-r ${currentThemeConfig.primaryGradient} rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                <Shield className="text-white" size={32} />
              </div>
              <h3 className={`text-2xl font-bold text-${currentThemeConfig.primary} mb-4`}>Commitment to earning the trust of our clients</h3>
              <p className="text-gray-700 leading-relaxed">
                In our endeavour to become a long-term partner for our valued clients, we ensure that we adhere to all 
                the Quality and Safety Guidelines. We take all measures required to meet the committed timelines. 
                We evaluate our engineering services to offer benefits at a reduced cost.
              </p>
            </div>
          </div>

          <div className={`bg-gradient-to-r ${currentThemeConfig.primaryGradient} p-8 rounded-2xl text-white mt-12`}>
            <h3 className="text-2xl font-bold mb-4">Strategically located to always stay connected</h3>
            <p className="text-lg">
              We operate from our Head Office in <span className="font-semibold">Kanpur</span> and branches in key cities like 
              <span className="font-semibold"> Mumbai, Noida</span> and <span className="font-semibold">Bengaluru</span>.
            </p>
            <p className={`mt-4 text-${currentThemeConfig.primary}-100`}>
              We are proud to have two fabrication workshops and two warehouses of our own, that are powered by 
              state-of-the-art machines and the latest software to support.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default IntroSection;