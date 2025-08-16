import React from 'react';
import { Github, Linkedin, Download, MapPin, Mail, ExternalLink } from 'lucide-react';
import Lottie from 'lottie-react';
import { TypeAnimation } from 'react-type-animation';
import devAnimation from "../assests/Sarru dev.json";

const Hero: React.FC = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) element.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="hero"
      className="min-h-screen flex flex-col-reverse lg:flex-row items-center justify-center gap-6 lg:gap-0 pt-10 px-5 sm:px-8 md:px-12 relative
                 bg-gradient-to-br from-blue-50 via-white to-indigo-50
                 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900"
    >
      {/* Left: Text */}
      <div className="max-w-xl text-center lg:text-left">
        <h1 className="text-2xl sm:text-4xl md:text-5xl font-bold text-gray-900 dark:text-white leading-tight mb-3">
          <TypeAnimation
            sequence={[
              "Hello, I'm Yashwanth S", 2000,
              "Developer & Designer", 2000,
            ]}
            speed={50}
            repeat={Infinity}
          />
        </h1>

        {/* Location */}
        <div className="flex items-center justify-center lg:justify-start mb-3">
          <MapPin className="w-4 h-4 text-gray-500 dark:text-gray-400 mr-2" />
          <p className="text-sm text-gray-600 dark:text-gray-300">Mysuru, Karnataka, India</p>
        </div>

        {/* Roles */}
        <p className="text-sm sm:text-lg text-gray-700 dark:text-gray-300 mb-5 font-semibold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
          <TypeAnimation
            sequence={[
              "Open-Source Enthusiast", 2000,
              "Problem Solver", 2000,
            ]}
            speed={60}
            repeat={Infinity}
          />
        </p>

        {/* Description */}
        <p className="text-sm text-gray-600 dark:text-gray-400 mb-6 leading-relaxed">
          I thrive on solving problems through clean, efficient code and creative design.
          Currently pursuing a B.E. in Computer Science Engineering, with hands-on
          experience in web and mobile app development.
        </p>

        {/* Buttons */}
        <div className="flex flex-wrap justify-center lg:justify-start gap-3 mb-6">
          <a
            href="https://drive.google.com/file/d/1NJI_EsT0KXLtxU_zdDgejAuS6uHXkp-Q/view?usp=sharing"
            className="inline-flex items-center px-5 py-2.5 bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-full text-sm font-semibold hover:scale-105 transition-all shadow-md"
          >
            <Download className="w-4 h-4 mr-2" />
            Resume
          </a>
          <button
            onClick={() => scrollToSection('contact')}
            className="inline-flex items-center px-5 py-2.5 border-2 border-blue-600 text-blue-600 dark:text-blue-400 rounded-full text-sm font-semibold hover:bg-blue-600 hover:text-white transition-all"
          >
            <Mail className="w-4 h-4 mr-2" />
            Connect
          </button>
        </div>

        {/* Social Icons */}
        <div className="flex justify-center lg:justify-start gap-4">
          {[
            { href: "https://github.com/yashwanths814/", icon: <Github /> },
            { href: "https://www.linkedin.com/in/yashwanths814/", icon: <Linkedin /> },
            { href: "https://linktr.ee/yashwanths814", icon: <ExternalLink /> },
            {
              href: "https://leetcode.com/u/yashwanths814/",
              icon: (
                <svg
  xmlns="http://www.w3.org/2000/svg"
  viewBox="0 0 24 24"
  className="w-5 h-5 text-gray-800 dark:text-white"
  fill="currentColor"
>
  <path d="M13.483 0a1.374 1.374 0 0 0-.961.438L7.116 6.226l-3.854 4.126a5.266 5.266 0 0 0-1.209 2.104 5.35 5.35 0 0 0-.125.513 5.527 5.527 0 0 0 .062 2.362 5.83 5.83 0 0 0 .349 1.017 5.938 5.938 0 0 0 1.271 1.818l4.277 4.193.039.038c2.248 2.165 5.852 2.133 8.063-.074l2.396-2.392c.54-.54.54-1.414.003-1.955a1.378 1.378 0 0 0-1.951-.003l-2.396 2.392a3.021 3.021 0 0 1-4.205.038l-.02-.019-4.276-4.193c-.652-.64-.972-1.469-.948-2.263a2.68 2.68 0 0 1 .066-.523 2.545 2.545 0 0 1 .619-1.164L9.13 8.114c1.058-1.134 3.204-1.27 4.43-.278l3.501 2.831c.593.48 1.461.387 1.94-.207a1.384 1.384 0 0 0-.207-1.943l-3.5-2.831c-.8-.647-1.766-1.045-2.774-1.202l2.015-2.158A1.384 1.384 0 0 0 13.483 0zm-2.866 12.815a1.38 1.38 0 0 0-1.38 1.382 1.38 1.38 0 0 0 1.38 1.382H20.79a1.38 1.38 0 0 0 1.38-1.382 1.38 1.38 0 0 0-1.38-1.382z" />
</svg>
              ),
            },
          ].map((link, idx) => (
            <a
              key={idx}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 bg-white dark:bg-gray-800 rounded-full shadow hover:scale-110 hover:text-blue-600 dark:hover:text-blue-400 transition-all"
            >
              {React.cloneElement(link.icon, {
                className: "w-5 h-5 text-gray-800 dark:text-white",
              })}
            </a>
          ))}
        </div>
      </div>

      {/* Right: Animation */}
      <div className="flex justify-center lg:justify-end w-full lg:w-1/2">
        <Lottie
          animationData={devAnimation}
          loop
          className="w-64 sm:w-80 md:w-[26rem] lg:w-[34rem] max-w-full"
        />
      </div>

      {/* Floating Decorations */}
      <div className="absolute top-20 right-6 w-12 h-12 bg-blue-200 dark:bg-blue-800 rounded-full opacity-20 animate-bounce"></div>
      <div className="absolute bottom-20 left-6 w-8 h-8 bg-indigo-200 dark:bg-indigo-800 rounded-full opacity-20 animate-pulse"></div>
    </section>
  );
};

export default Hero;
