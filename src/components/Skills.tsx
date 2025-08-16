import React from "react";
import Lottie from "lottie-react";
import devBoyAnimation from "../assests/Developer.json";

import {
  SiPython, SiCplusplus, SiC, SiHtml5, SiCss3, SiReact,
  SiNodedotjs, SiMongodb, SiExpress, SiFirebase, SiGit,
  SiGithub, SiFigma, SiPostman, SiTensorflow, SiLeetcode
} from "react-icons/si";

import { FaCloud } from "react-icons/fa";

const Skills: React.FC = () => {
  const skills = [
    { name: "Python", icon: <SiPython size={36} /> },
    { name: "C++", icon: <SiCplusplus size={36} /> },
    { name: "C", icon: <SiC size={36} /> },
    { name: "HTML", icon: <SiHtml5 size={36} /> },
    { name: "CSS", icon: <SiCss3 size={36} /> },
    { name: "MongoDB", icon: <SiMongodb size={36} /> },
    { name: "Firebase", icon: <SiFirebase size={36} /> },
    { name: "Git", icon: <SiGit size={36} /> },
    { name: "GitHub", icon: <SiGithub size={36} /> },
    { name: "Figma", icon: <SiFigma size={36} /> },
    { name: "Azure", icon: <FaCloud size={36} /> },
    { name: "Postman", icon: <SiPostman size={36} /> },
    { name: "Machine Learning", icon: <SiTensorflow size={36} /> },
    { name: "DSA", icon: <SiLeetcode size={36} /> },
    { name: "OOP", icon: <SiPython size={36} /> },
  ];

  return (
    <section
      id="skills"
      className="
        relative py-24 overflow-hidden
        bg-gradient-to-br from-blue-50 via-white to-indigo-50
        dark:from-gray-900 dark:via-gray-800 dark:to-gray-900
      "
    >
      <div className="container mx-auto px-6">
        <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 dark:text-white text-center mb-16 select-none animate-fade-in-up">
          My Skills
        </h2>

        {/* Centered Developer Animation */}
        <div className="flex justify-center mb-20">
          <div
            className="w-44"
            style={{
              filter: "drop-shadow(0 0 20px rgba(0,0,0,0.2))",
              animation: "pulseGlow 4s ease-in-out infinite",
            }}
            aria-label="Developer animation"
          >
            <Lottie animationData={devBoyAnimation} loop />
          </div>
        </div>

        {/* Skills spread evenly across full width */}
        <div className="flex flex-wrap justify-between max-w-7xl mx-auto gap-8 px-4">
          {skills.map(({ name, icon }, idx) => (
            <div
              key={idx}
              title={name}
              aria-label={`Skill: ${name}`}
              className="
                skill-item bg-white/30 backdrop-blur-md rounded-full w-20 h-20 flex items-center justify-center
                text-gray-900 dark:text-white shadow-md cursor-default select-none
                transition-transform duration-300 ease-in-out hover:scale-110 hover:bg-white/60 hover:text-indigo-900
                animate-float-in
              "
              style={{ userSelect: "none" }}
            >
              {icon}
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @keyframes pulseGlow {
          0%, 100% {
            filter: drop-shadow(0 0 20px rgba(0,0,0,0.2));
          }
          50% {
            filter: drop-shadow(0 0 30px rgba(0,0,0,0.3));
          }
        }

        @keyframes fadeInUp {
          0% { opacity: 0; transform: translateY(30px); }
          100% { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in-up {
          animation: fadeInUp 0.8s ease forwards;
        }

        @keyframes floatIn {
          0% { transform: translateY(10px); opacity: 0; }
          50% { opacity: 1; }
          100% { transform: translateY(0); opacity: 1; }
        }
        .animate-float-in {
          animation: floatIn 1s ease forwards;
        }

        /* Responsive adjustments */
        @media (max-width: 768px) {
          .skill-item {
            width: 56px !important;
            height: 56px !important;
            margin: 8px 4px !important;
          }
          .flex.justify-between {
            justify-content: center !important;
          }
        }
      `}</style>
    </section>
  );
};

export default Skills;
