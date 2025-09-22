import React from 'react';
import { Eye, Target } from 'lucide-react';

const AboutUsSection = ({ currentThemeConfig }) => {
  return (
    <section className={`py-24 bg-gradient-to-br ${currentThemeConfig.cardGradient}`}>
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            About <span className={`text-${currentThemeConfig.primary}`}>Fluidline</span> <span className={`text-${currentThemeConfig.secondary}`}>Group</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-16">
          {/* Image Section */}
          <div className="relative">
            <img
              src="https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?q=80&w=2070&auto=format&fit=crop"
              alt="Engineering Excellence"
              className="rounded-2xl shadow-2xl w-full h-auto"
              loading="lazy"
            />
            <div className={`absolute -top-6 -right-6 w-full h-full bg-gradient-to-br from-${currentThemeConfig.primaryLight} to-${currentThemeConfig.secondaryLight} rounded-2xl -z-10`} />
          </div>

          {/* Content Section */}
          <div className="space-y-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {/* Vision Card */}
              <div className={`bg-gradient-to-br from-${currentThemeConfig.primaryLight} to-white p-6 rounded-xl shadow-lg border-l-4 border-${currentThemeConfig.primary} group hover:shadow-xl transition-all duration-300`}>
                <div className={`w-12 h-12 bg-gradient-to-r from-${currentThemeConfig.primary} to-${currentThemeConfig.primaryDark} rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300 shadow-md`}>
                  <Eye className="text-white" size={24} />
                </div>
                <h4 className="font-bold text-gray-900 mb-2">Our Vision</h4>
                <p className="text-sm text-gray-600 leading-relaxed">
                  To explore new horizons and to venture into multi-dimensional aspects of our area of expertise, 
                  keeping a constant and cordial liaison with our partners and business associates.
                </p>
              </div>

              {/* Mission Card */}
              <div className={`bg-gradient-to-br from-${currentThemeConfig.secondaryLight} to-white p-6 rounded-xl shadow-lg border-l-4 border-${currentThemeConfig.secondary} group hover:shadow-xl transition-all duration-300`}>
                <div className={`w-12 h-12 bg-gradient-to-r from-${currentThemeConfig.primary} to-${currentThemeConfig.secondaryDark} rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300 shadow-md`}>
                  <Target className="text-white" size={24} />
                </div>
                <h4 className="font-bold text-gray-900 mb-2">Our Mission</h4>
                <p className="text-sm text-gray-600 leading-relaxed">
                  Guided by principles of integrity and commitment to the goal, we will constantly strive to 
                  implement newer initiatives to achieve our vision.
                </p>
              </div>
            </div>

            {/* Complete Vision Statement */}
            <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-100">
              <h4 className="font-bold text-gray-900 mb-4 text-lg">Complete Vision Statement</h4>
              <p className="text-gray-600 leading-relaxed">
                To achieve client satisfaction through continued commitment and excellence in safely delivering 
                quality projects on time. In doing this, we will endeavor to uphold our standards of perfection 
                and meet the expectations of all our clients. All our long-term strategies and short-term goals 
                will be motivated by pursuit of excellence in every field.
              </p>
            </div>

            {/* Key Values */}
            <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-100">
              <h4 className="font-bold text-gray-900 mb-4 text-lg">Our Core Values</h4>
              <div className="grid grid-cols-2 gap-4">
                <div className="text-center">
                  <div className={`w-3 h-3 bg-${currentThemeConfig.primary} rounded-full mx-auto mb-2`}></div>
                  <p className="text-sm font-semibold text-gray-700">Quality Excellence</p>
                </div>
                <div className="text-center">
                  <div className={`w-3 h-3 bg-${currentThemeConfig.secondary} rounded-full mx-auto mb-2`}></div>
                  <p className="text-sm font-semibold text-gray-700">Safety First</p>
                </div>
                <div className="text-center">
                  <div className={`w-3 h-3 bg-${currentThemeConfig.primary} rounded-full mx-auto mb-2`}></div>
                  <p className="text-sm font-semibold text-gray-700">Customer Delight</p>
                </div>
                <div className="text-center">
                  <div className={`w-3 h-3 bg-${currentThemeConfig.secondary} rounded-full mx-auto mb-2`}></div>
                  <p className="text-sm font-semibold text-gray-700">Innovation</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUsSection;