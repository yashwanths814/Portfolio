import React from "react";
import { Trophy, Award, Star, Medal, Code, Users, BookOpen } from "lucide-react";
import { motion } from "framer-motion";

interface Achievement {
  title: string;
  organization: string;
  date: string;
  description: string;
  type: "award" | "recognition" | "competition" | "contribution" | "publication";
  icon: React.ReactNode;
  link?: string;
}

const Achievements: React.FC = () => {
  const achievements: Achievement[] = [
    {
      title: "Resource Person - OpenEdgeX Event",
      organization: "Vidyavardhaka College of Engineering",
      date: "2024",
      description:
        "Invited as a resource person for the OpenEdgeX workshop, guiding students on Open Source, Git & GitHub, Blockchain basics, and Web Development with GitHub Pages.",
      type: "recognition",
      icon: <Award className="w-6 h-6" />,
      link: "https://www.linkedin.com/posts/yashwanths814_opensource-blockchain-github-activity-7248922451567411200-9LWB?utm_source=share&utm_medium=member_desktop&rcm=ACoAAEC0Y3sBGZGBLMmWF5PLx0TFMpA5s0Oir5I",
    },
    {
      title: "Youth for Governance Fellowship",
      organization: "GRAAM Mysuru",
      date: "2024",
      description:
        "Completed the 6-month Youth for Governance Fellowship with GRAAM & HSF, focusing on grassroots policy advocacy, governance, and youth empowerment.",
      type: "contribution",
      icon: <Users className="w-6 h-6" />,
      link: "https://www.linkedin.com/posts/yashwanths814_youthforgovernance-graam-hsf-activity-7270473381378965504-r9cH?utm_source=share&utm_medium=member_desktop&rcm=ACoAAEC0Y3sBGZGBLMmWF5PLx0TFMpA5s0Oir5I",
    },
    {
      title: "Winner - ASPIRE AI Challenge",
      organization: "Developers Community, VVCE",
      date: "2024",
      description:
        "Secured 1st place in AI/ML competition for developing innovative solutions using artificial intelligence.",
      type: "competition",
      icon: <Trophy className="w-6 h-6" />,
      link: "https://www.linkedin.com/posts/yashwanths814_aichampion-devweek2024-mlmodeling-activity-7156599508947111936-e9mK?utm_source=share&utm_medium=member_desktop&rcm=ACoAAEC0Y3sBGZGBLMmWF5PLx0TFMpA5s0Oir5I",
    },
    {
      title: "2nd Place - FlutterFlow Hackathon",
      organization: "FlutterFlow Community",
      date: "2024",
      description:
        "Secured 2nd place for developing a comprehensive mobile application solution using FlutterFlow + Firebase.",
      type: "competition",
      icon: <Medal className="w-6 h-6" />,
      link: "https://www.linkedin.com/posts/yashwanths814_flutterhackathon-teamspirit-hardworkpaysoff-activity-7159017802278785025-1UVn?utm_source=share&utm_medium=member_desktop&rcm=ACoAAEC0Y3sBGZGBLMmWF5PLx0TFMpA5s0Oir5I",
    },
    {
      title: "Book Chapter: Smart Hospitals – Integrating Connectivity and Intelligence",
      organization: "Wiley & Scrivener Publishing",
      date: "2024",
      description:
        "Co-authored and published a chapter exploring 5G, IoT, AI, and Big Data in transforming hospitals into intelligent, connected ecosystems.",
      type: "publication",
      icon: <BookOpen className="w-6 h-6" />,
      link: "https://www.linkedin.com/posts/yashwanths814_smarthospitals-healthcareinnovation-5ghealthcare-activity-7261604644492095488-qR_V",
    },
    {
      title: "Book Chapter: The Security Design and Challenges of 6G Architecture",
      organization: "Springer Nature (ASTSA Series)",
      date: "2025",
      description:
        "Published in the book '6G Cyber Security Resilience: Trends and Challenges', indexed in Scopus, highlighting AI, VLC, Blockchain, and biometric authentication for secure 6G networks.",
      type: "publication",
      icon: <BookOpen className="w-6 h-6" />,
      link: "https://www.linkedin.com/posts/yashwanths814_6g-cybersecurity-aiintelecom-activity-7338100325049954304-HIYU",
    },
  ];

  const stats = [
    {
      label: "Awards Won",
      number: "05",
      color: "from-yellow-500 to-orange-500",
      icon: <Trophy className="w-6 h-6 text-white" />,
    },
    {
      label: "Competitions",
      number: "04",
      color: "from-green-500 to-emerald-500",
      icon: <Medal className="w-6 h-6 text-white" />,
    },
    {
      label: "Open Source Contributions",
      number: "20+",
      color: "from-purple-500 to-pink-500",
      icon: <Code className="w-6 h-6 text-white" />,
    },
    {
      label: "Recognitions",
      number: "05",
      color: "from-blue-500 to-indigo-500",
      icon: <Users className="w-6 h-6 text-white" />,
    },
  ];

  const getTypeColor = (type: string) => {
    switch (type) {
      case "award":
        return "from-yellow-500 to-orange-500";
      case "recognition":
        return "from-blue-500 to-indigo-500";
      case "competition":
        return "from-green-500 to-emerald-500";
      case "contribution":
        return "from-purple-500 to-pink-500";
      case "publication":
        return "from-pink-500 to-rose-500";
      default:
        return "from-gray-500 to-gray-600";
    }
  };

  const getTypeBadgeColor = (type: string) => {
    switch (type) {
      case "award":
        return "bg-yellow-100 text-yellow-800 dark:bg-yellow-900/20 dark:text-yellow-300";
      case "recognition":
        return "bg-blue-100 text-blue-800 dark:bg-blue-900/20 dark:text-blue-300";
      case "competition":
        return "bg-green-100 text-green-800 dark:bg-green-900/20 dark:text-green-300";
      case "contribution":
        return "bg-purple-100 text-purple-800 dark:bg-purple-900/20 dark:text-purple-300";
      case "publication":
        return "bg-pink-100 text-pink-800 dark:bg-pink-900/20 dark:text-pink-300";
      default:
        return "bg-gray-100 text-gray-800 dark:bg-gray-900/20 dark:text-gray-300";
    }
  };

  return (
    <section
      id="achievements"
      className="py-16 px-6 bg-gradient-to-br from-blue-50 via-white to-indigo-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900"
    >
      <div className="container mx-auto">
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-yellow-500 to-orange-500 rounded-full mb-6">
            <Trophy className="w-8 h-8 text-white" />
          </div>
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Achievements & Recognition
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-yellow-500 to-orange-500 rounded-full mx-auto"></div>
        </motion.div>

        {/* Achievement Cards */}
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8">
          {achievements.map((achievement, index) =>
            achievement.link ? (
              <motion.a
                key={index}
                href={achievement.link}
                target="_blank"
                rel="noopener noreferrer"
                variants={{ hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0 } }}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.98 }}
                className="block bg-white dark:bg-gray-800 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 dark:border-gray-700 overflow-hidden"
              >
                <div className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <div
                      className={`w-12 h-12 bg-gradient-to-r ${getTypeColor(
                        achievement.type
                      )} rounded-lg flex items-center justify-center text-white`}
                    >
                      {achievement.icon}
                    </div>
                    <span
                      className={`px-2 py-1 text-xs font-semibold rounded-full ${getTypeBadgeColor(
                        achievement.type
                      )}`}
                    >
                      {achievement.type.charAt(0).toUpperCase() + achievement.type.slice(1)}
                    </span>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2 hover:text-blue-600 dark:hover:text-blue-400">
                    {achievement.title}
                  </h3>
                  <p className="text-blue-600 dark:text-blue-400 font-semibold mb-2">
                    {achievement.organization}
                  </p>
                  <p className="text-gray-600 dark:text-gray-300">{achievement.description}</p>
                </div>
                <div className={`h-1 bg-gradient-to-r ${getTypeColor(achievement.type)}`} />
              </motion.a>
            ) : (
              <motion.div
                key={index}
                variants={{ hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0 } }}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.98 }}
                className="block bg-white dark:bg-gray-800 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 dark:border-gray-700 overflow-hidden"
              >
                <div className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <div
                      className={`w-12 h-12 bg-gradient-to-r ${getTypeColor(
                        achievement.type
                      )} rounded-lg flex items-center justify-center text-white`}
                    >
                      {achievement.icon}
                    </div>
                    <span
                      className={`px-2 py-1 text-xs font-semibold rounded-full ${getTypeBadgeColor(
                        achievement.type
                      )}`}
                    >
                      {achievement.type.charAt(0).toUpperCase() + achievement.type.slice(1)}
                    </span>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                    {achievement.title}
                  </h3>
                  <p className="text-blue-600 dark:text-blue-400 font-semibold mb-2">
                    {achievement.organization}
                  </p>
                  <p className="text-gray-600 dark:text-gray-300">{achievement.description}</p>
                </div>
                <div className={`h-1 bg-gradient-to-r ${getTypeColor(achievement.type)}`} />
              </motion.div>
            )
          )}
        </div>
      </div>
    </section>
  );
};

export default Achievements;
