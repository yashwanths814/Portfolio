import React from "react";
import { Heart, Github, Linkedin, Mail, ExternalLink } from "lucide-react";
import { motion } from "framer-motion";

const containerVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { staggerChildren: 0.1, duration: 0.5, ease: "easeOut" },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 10 },
  visible: { opacity: 1, y: 0 },
};

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const socialLinks = [
    { name: "GitHub", url: "https://github.com/yashwanths814/", icon: <Github className="w-5 h-5" /> },
    { name: "LinkedIn", url: "https://www.linkedin.com/in/yashwanths814/", icon: <Linkedin className="w-5 h-5" /> },
    { name: "Email", url: "mailto:yashwanths814@gmail.com", icon: <Mail className="w-5 h-5" /> },
    { name: "Linktree", url: "https://linktr.ee/yashwanths814", icon: <ExternalLink className="w-5 h-5" /> },
  ];

  const quickLinks = [
    { name: "About", id: "about" },
    { name: "Education", id: "education" },
    { name: "Skills", id: "skills" },
    { name: "Projects", id: "projects" },
    { name: "Contact", id: "contact" },
  ];

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) element.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <motion.footer
      id="footer"
      className="bg-gradient-to-br from-blue-50 via-white to-indigo-50 dark:from-gray-900 dark:via-gray-800 dark:to-blue-900/20 text-gray-900 dark:text-white"
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
    >
      <div className="container mx-auto px-6 py-6 sm:py-8">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 sm:gap-6">

          {/* Brand */}
          <motion.div variants={itemVariants} className="space-y-1 sm:space-y-2">
            <button
              onClick={scrollToTop}
              className="text-lg sm:text-xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent hover:scale-105 transition-transform duration-200"
            >
              Yashwanth S
            </button>
            <p className="text-xs sm:text-sm text-gray-700 dark:text-gray-300 leading-snug">
              Aspiring Software Engineer passionate about building innovative solutions and contributing to open-source.
            </p>
            <div className="flex space-x-2 sm:space-x-3">
              {socialLinks.map((link, index) => (
                <a
                  key={index}
                  href={link.url}
                  target={link.name !== "Email" ? "_blank" : undefined}
                  rel={link.name !== "Email" ? "noopener noreferrer" : undefined}
                  className="p-2 rounded-full bg-white dark:bg-gray-800 shadow-sm hover:shadow-md text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transform hover:scale-105 transition-all duration-200"
                  title={link.name}
                >
                  {link.icon}
                </a>
              ))}
            </div>
          </motion.div>

          {/* Quick Links - Single Line */}
          <motion.div variants={itemVariants} className="ml-auto">
            <h3 className="text-xs sm:text-sm font-semibold mb-1 text-right">Quick Links</h3>
            <ul className="flex gap-4 justify-end">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <button
                    onClick={() => scrollToSection(link.id)}
                    className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200 text-xs sm:text-sm"
                  >
                    {link.name}
                  </button>
                </li>
              ))}
            </ul>
          </motion.div>

        </div>

        {/* Bottom Section */}
        <motion.div variants={itemVariants} className="border-t border-gray-300 dark:border-gray-700 mt-6 pt-3 sm:mt-8 sm:pt-4">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-1 md:space-y-0 text-xs sm:text-sm text-gray-600 dark:text-gray-400">
            <div className="flex items-center space-x-1">
              <span>© {currentYear} Yashwanth S</span>
              
            </div>
            <a
              href="https://github.com/yashwanths814/portfolio"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200"
            >
              View Source Code
            </a>
          </div>
        </motion.div>
      </div>
    </motion.footer>
  );
};

export default Footer;
