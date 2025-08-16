import React from "react";
import { GraduationCap, Calendar, Award, School } from "lucide-react";
import { motion } from "framer-motion";

interface EducationItem {
  institution: string;
  degree: string;
  period: string;
  score: string;
  scoreType: string;
  description?: string;
}

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0 },
};

const Education: React.FC = () => {
  const educationData: EducationItem[] = [
    {
      institution: "Vidyavardhaka College of Engineering",
      degree: "B.E. in Computer Science Engineering",
      period: "2022 - 2026",
      score: "8.79",
      scoreType: "CGPA",
      description:
        "Currently pursuing Bachelor of Engineering with specialization in Computer Science. Active in various technical clubs and events.",
    },
    {
      institution: "Sarada Vilas PU College",
      degree: "Pre-University Education - Science (PCMB)",
      period: "2020 - 2022",
      score: "91%",
      scoreType: "Percentage",
      description:
        "Completed higher secondary education with Physics, Chemistry, Mathematics, and Biology.",
    },
    {
      institution: "JSS High School",
      degree: "Secondary School Certificate (Matriculation)",
      period: "2017 - 2020",
      score: "94.56%",
      scoreType: "Percentage",
      description:
        "Completed secondary education with excellent academic performance.",
    },
  ];

  return (
    <section
      id="education"
      className="py-20 px-4 sm:px-6 md:px-12 bg-gradient-to-br from-blue-50 via-white to-indigo-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 transition-colors duration-500"
    >
      <div className="container mx-auto max-w-6xl">
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-r from-blue-600 to-indigo-600 shadow-lg mb-4">
            <GraduationCap className="w-8 h-8 text-white" />
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white">
            Education
          </h2>
        </motion.div>

        {/* Cards Grid */}
        <motion.div
          className="grid gap-10 md:grid-cols-3"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {educationData.map((item, index) => (
            <motion.div
              key={index}
              className="relative p-6 rounded-2xl backdrop-blur-xl bg-white/80 dark:bg-gray-800/80 border border-gray-200 dark:border-gray-700 shadow-lg hover:shadow-blue-500/20 hover:-translate-y-2 transition-all duration-300"
              variants={cardVariants}
            >
              <div className="flex justify-center mb-4">
                <School className="w-12 h-12 text-blue-600 dark:text-blue-400" />
              </div>

              <h3 className="text-xl font-bold text-gray-900 dark:text-white text-center">
                {item.institution}
              </h3>
              <p className="text-gray-600 dark:text-gray-300 text-center mb-3">
                {item.degree}
              </p>

              <div className="flex justify-center items-center gap-2 text-gray-500 dark:text-gray-400 text-sm mb-2">
                <Calendar className="w-4 h-4" />
                {item.period}
              </div>

              <div className="flex justify-center items-center gap-2 text-green-600 dark:text-green-400 font-semibold mb-4">
                <Award className="w-4 h-4" />
                {item.score} {item.scoreType}
              </div>

              {item.description && (
                <p className="text-gray-600 dark:text-gray-300 text-sm text-center">
                  {item.description}
                </p>
              )}
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Education;
