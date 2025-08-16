import React from "react";
import { Users, Crown, Briefcase, Megaphone } from "lucide-react";
import { motion } from "framer-motion";

interface LeadershipRole {
  title: string;
  organization: string;
  period: string;
  description: string;
  responsibilities: string[];
  type: "leadership" | "ambassador" | "community" | "technical";
}

const Leadership: React.FC = () => {
  const leadershipRoles: LeadershipRole[] = [
    {
    title: "Student Leader",
    organization: "PALS (PAN IIT Alumni Leadership Series)",
    period: "September 2024 – June 2025",
    description:
      "Completed the PALS Student Leader Internship under IIT Alumni Champions as one of six representatives from Karnataka, showcasing strong work ethic, leadership, and teamwork. Also completed the 2024 Youth for Governance Fellowship Program by GRAAM, representing my institute as one of 60 diverse fellows engaged in practical research on current democratic issues.",
    responsibilities: [
      "Engaged in leadership and teamwork initiatives",
      "Conducted research on democratic issues",
      "Represented institute in youth governance projects",
      "Participated in practical policy advocacy exercises",
    ],
    type: "leadership",
  },
  {
    title: "Android Lead",
    organization: "GDG (Google Developer Group) VVCE",
    period: "September 2024 – Present",
    description:
      "Guide students in Android development and organize workshops, events, and hands-on sessions to enhance learning and foster innovation in mobile app development.",
    responsibilities: [
      "Mentor students in Android and Flutter development",
      "Organize workshops, coding sessions, and events",
      "Lead mobile app development projects",
      "Encourage innovation and practical learning",
    ],
    type: "technical",
  },
  {
    title: "Campus Ambassador",
    organization: "E-Cell IIT Bombay",
    period: "July 2024 – January 2025",
    description:
      "Selected among the top 2,500 out of 8,000+ applicants, securing 75th rank, to promote entrepreneurship on campus and serve as a liaison between IIT Bombay and my institution.",
    responsibilities: [
      "Promote entrepreneurship events on campus",
      "Serve as liaison between IIT Bombay and VVCE",
      "Coordinate student registrations and participation",
      "Organize pre-event workshops and seminars",
    ],
    type: "ambassador",
  },
  {
    title: "NSS Volunteer",
    organization: "NSS VVCE",
    period: "2022 – Present",
    description:
      "Serving as a member and volunteer for NSS VVCE, managing social media and technical editing while organizing 25+ events including 3 hackathons and 4 blood donation drives, and volunteering for numerous community initiatives.",
    responsibilities: [
      "Manage NSS social media and technical content",
      "Organize hackathons, blood donation drives, and events",
      "Volunteer in various community initiatives",
      "Support students and community members through outreach",
    ],
    type: "community",
  },
  ];

  const getTypeIcon = (type: string) => {
    switch (type) {
      case "leadership":
        return <Crown className="w-6 h-6" />;
      case "ambassador":
        return <Megaphone className="w-6 h-6" />;
      case "community":
        return <Users className="w-6 h-6" />;
      case "technical":
        return <Briefcase className="w-6 h-6" />;
      default:
        return <Users className="w-6 h-6" />;
    }
  };

  const getTypeColor = (type: string) => {
    switch (type) {
      case "leadership":
        return "from-purple-600 to-pink-600";
      case "ambassador":
        return "from-blue-600 to-indigo-600";
      case "community":
        return "from-green-600 to-emerald-600";
      case "technical":
        return "from-orange-600 to-red-600";
      default:
        return "from-gray-600 to-gray-700";
    }
  };

  const getTypeBadgeColor = (type: string) => {
    switch (type) {
      case "leadership":
        return "bg-purple-100 text-purple-800 dark:bg-purple-900/20 dark:text-purple-300";
      case "ambassador":
        return "bg-blue-100 text-blue-800 dark:bg-blue-900/20 dark:text-blue-300";
      case "community":
        return "bg-green-100 text-green-800 dark:bg-green-900/20 dark:text-green-300";
      case "technical":
        return "bg-orange-100 text-orange-800 dark:bg-orange-900/20 dark:text-orange-300";
      default:
        return "bg-gray-100 text-gray-800 dark:bg-gray-900/20 dark:text-gray-300";
    }
  };

  // Animation variants for cards
  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.15, duration: 0.6, ease: "easeOut" },
    }),
  };

  // Animation variant for stats section
  const statsVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
  };

  return (
    <section
      id="leadership"
      className="py-20 bg-gradient-to-br from-blue-50 via-white to-indigo-50 dark:from-gray-900 dark:via-gray-800 dark:to-blue-900/20"
    >
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full mb-6">
            <Crown className="w-8 h-8 text-white" />
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            Leadership & Involvement
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full mx-auto mb-8"></div>
        </div>

        <div className="max-w-6xl mx-auto space-y-8">
          {leadershipRoles.map((role, index) => (
            <motion.div
              key={index}
              custom={index}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              variants={cardVariants}
              className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 dark:border-gray-700 overflow-hidden group"
            >
              <div className="p-8">
                <div className="flex flex-col lg:flex-row lg:items-start gap-6">
                  {/* Icon and Badge */}
                  <div className="flex items-center lg:items-start lg:flex-col gap-4">
                    <div
                      className={`w-16 h-16 bg-gradient-to-r ${getTypeColor(
                        role.type
                      )} rounded-2xl flex items-center justify-center text-white group-hover:scale-110 transition-transform duration-300`}
                    >
                      {getTypeIcon(role.type)}
                    </div>
                    <span
                      className={`px-3 py-1 text-sm font-semibold rounded-full ${getTypeBadgeColor(
                        role.type
                      )}`}
                    >
                      {role.type.charAt(0).toUpperCase() + role.type.slice(1)}
                    </span>
                  </div>

                  {/* Content */}
                  <div className="flex-1">
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4">
                      <div>
                        <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-1 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300">
                          {role.title}
                        </h3>
                        <p className="text-lg font-semibold text-blue-600 dark:text-blue-400">
                          {role.organization}
                        </p>
                      </div>
                      <div className="text-sm text-gray-500 dark:text-gray-400 font-medium sm:text-right mt-2 sm:mt-0">
                        {role.period}
                      </div>
                    </div>

                    <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-6">
                      {role.description}
                    </p>

                    {/* Responsibilities */}
                    <div>
                      <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
                        Key Responsibilities:
                      </h4>
                      <div className="grid sm:grid-cols-2 gap-3">
                        {role.responsibilities.map((responsibility, respIndex) => (
                          <div
                            key={respIndex}
                            className="flex items-start space-x-2"
                          >
                            <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                            <span className="text-gray-600 dark:text-gray-300 text-sm">
                              {responsibility}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Decorative bottom border */}
              <div
                className={`h-1 bg-gradient-to-r ${getTypeColor(role.type)}`}
              ></div>
            </motion.div>
          ))}

        </div>
      </div>
    </section>
  );
};

export default Leadership;
