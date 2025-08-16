import React from "react";
import { User, Target, Heart } from "lucide-react";

const About: React.FC = () => {
  return (
    <section
      id="about"
      className="py-12 sm:py-20 bg-gradient-to-br from-blue-50 via-white to-indigo-50
                 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900
                 transition-colors duration-500 px-5 sm:px-8 md:px-12"
    >
      <div className="container mx-auto">

        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-10 sm:mb-16 animate-fade-in-up">
          <div className="inline-flex items-center justify-center w-12 h-12 sm:w-14 sm:h-14
                          bg-gradient-to-r from-blue-600 to-indigo-600 rounded-full mb-4 animate-bounce">
            <User className="w-6 h-6 sm:w-7 sm:h-7 text-white" />
          </div>
          <h2 className="text-2xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-3">
            About Me
          </h2>
          <div className="w-16 sm:w-24 h-1 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-full mx-auto"></div>
        </div>

        {/* Content */}
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-10 items-start">

          {/* Left: Cards */}
          <div className="space-y-5">
            {/* Card 1 */}
            <div className="bg-white/90 dark:bg-gray-800/80 rounded-2xl p-5 sm:p-8 shadow-lg hover:shadow-xl 
                            transition-shadow duration-300 border border-gray-100 dark:border-gray-700 
                            animate-slide-in-left">
              <div className="flex items-start space-x-4">
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-lg flex items-center justify-center">
                  <Target className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-lg sm:text-xl font-semibold text-gray-900 dark:text-white mb-2">
                    Professional Objective
                  </h3>
                  <p className="text-sm sm:text-base text-gray-600 dark:text-gray-300 leading-relaxed">
                    A dedicated student with a keen interest in developing reliable applications,
                    demonstrating strong problem-solving abilities, a commitment to excellence,
                    and a constant pursuit of improvement.
                  </p>
                </div>
              </div>
            </div>

            {/* Card 2 */}
            <div className="bg-white/90 dark:bg-gray-800/80 rounded-2xl p-5 sm:p-8 shadow-lg hover:shadow-xl 
                            transition-shadow duration-300 border border-gray-100 dark:border-gray-700 
                            animate-slide-in-left animation-delay-200">
              <div className="flex items-start space-x-4">
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-r from-teal-600 to-emerald-600 rounded-lg flex items-center justify-center">
                  <Heart className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-lg sm:text-xl font-semibold text-gray-900 dark:text-white mb-2">
                    Passion & Values
                  </h3>
                  <p className="text-sm sm:text-base text-gray-600 dark:text-gray-300 leading-relaxed">
                    I'm passionate about creating technology solutions that make a positive impact.
                    I believe in continuous learning, collaborative development, and contributing to
                    open-source projects that benefit the community.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right: Profile Photo */}
          <div className="flex justify-center lg:justify-end">
            <img
              src="/Yashwanth_S.jpg"   // ✅ from public folder
              alt="Yashwanth S"
              className="rounded-2xl shadow-lg w-64 sm:w-80 md:w-96 object-cover border-4 border-gray-200 dark:border-gray-700 hover:scale-105 transition-transform duration-300"
            />
          </div>

        </div>
      </div>
    </section>
  );
};

export default About;
