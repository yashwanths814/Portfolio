import React, { useState } from "react";
import { Mail, Phone, MapPin, Github, Linkedin, ExternalLink } from "lucide-react";
import { motion } from "framer-motion";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.15, duration: 0.6 },
  }),
};

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({ name: "", email: "", subject: "", message: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle");

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    try {
      await new Promise((resolve) => setTimeout(resolve, 2000)); // simulate submission
      setSubmitStatus("success");
      setFormData({ name: "", email: "", subject: "", message: "" });
    } catch {
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
      setTimeout(() => setSubmitStatus("idle"), 5000);
    }
  };

  const socialLinks = [
    { name: "GitHub", url: "https://github.com/yashwanths814/", icon: <Github className="w-6 h-6" />, color: "hover:text-gray-900 dark:hover:text-gray-100" },
    { name: "LinkedIn", url: "https://www.linkedin.com/in/yashwanths814/", icon: <Linkedin className="w-6 h-6" />, color: "hover:text-blue-600" },
    { name: "Linktree", url: "https://linktr.ee/yashwanths814", icon: <ExternalLink className="w-6 h-6" />, color: "hover:text-green-600" },
  ];

  return (
    <section id="contact" className="py-16 sm:py-20 px-4 sm:px-6 md:px-12 bg-gradient-to-br from-blue-50 via-white to-indigo-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 transition-colors duration-500">
      <div className="container mx-auto max-w-4xl">
        {/* Header */}
        <motion.div className="text-center mb-12 sm:mb-16" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} custom={0}>
          <div className="inline-flex items-center justify-center w-14 h-14 sm:w-16 sm:h-16 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-full mb-5 sm:mb-6">
            <Mail className="w-7 h-7 sm:w-8 sm:h-8 text-white" />
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4 sm:mb-6">
            Get In Touch
          </h2>
          <div className="w-20 sm:w-24 h-1 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-full mx-auto mb-6 sm:mb-8"></div>
          <p className="text-base sm:text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            I'm always open to discussing new opportunities, interesting projects, or just having a friendly chat about technology and innovation.
          </p>
        </motion.div>

        <div className="grid gap-8 lg:gap-10 lg:grid-cols-2 items-start">
          {/* Contact Info */}
          <motion.div className="space-y-6" initial="hidden" whileInView="visible" viewport={{ once: true }}>
            {[
              { icon: <Mail className="w-6 h-6 text-white" />, label: "Email", value: <a href="mailto:yashwanths814@gmail.com" className="text-blue-600 dark:text-blue-400 hover:underline break-all">yashwanths814@gmail.com</a>, bgColor: "from-blue-600 to-indigo-600" },
              { icon: <Phone className="w-6 h-6 text-white" />, label: "Phone", value: <a href="tel:+916361841814" className="text-green-600 dark:text-green-400 hover:underline">+91 63618 41814</a>, bgColor: "from-green-600 to-emerald-600" },
              { icon: <MapPin className="w-6 h-6 text-white" />, label: "Location", value: <p className="text-gray-600 dark:text-gray-300">Mysuru, Karnataka, India</p>, bgColor: "from-red-600 to-pink-600" },
            ].map(({ icon, label, value, bgColor }, idx) => (
              <motion.div key={idx} className="flex items-center space-x-4" variants={fadeUp} custom={idx + 1}>
                <div className={`w-12 h-12 bg-gradient-to-r ${bgColor} rounded-lg flex items-center justify-center`}>
                  {icon}
                </div>
                <div className="flex flex-col">
                  <h4 className="font-semibold text-gray-900 dark:text-white">{label}</h4>
                  {value}
                </div>
              </motion.div>
            ))}

            {/* Social Links */}
            <motion.div variants={fadeUp} custom={4}>
              <h4 className="font-semibold text-gray-900 dark:text-white mb-3">Connect with me</h4>
              <div className="flex flex-wrap gap-4">
                {socialLinks.map((link, index) => (
                  <a key={index} href={link.url} target="_blank" rel="noopener noreferrer"
                     className={`p-3 rounded-full bg-white dark:bg-gray-800 shadow-lg hover:shadow-xl text-gray-600 dark:text-gray-400 ${link.color} transform hover:scale-110 transition-all duration-300`}
                     title={link.name}>
                    {link.icon}
                  </a>
                ))}
              </div>
            </motion.div>
          </motion.div>

          {/* Contact Form */}
          <motion.div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-6 sm:p-8 border border-gray-100 dark:border-gray-700"
                      initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} custom={1}>
            <h3 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white mb-6">Send a Message</h3>

            <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {/* Name & Email */}
              <div className="flex flex-col">
                <label htmlFor="name" className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Your Name *</label>
                <input type="text" id="name" name="name" value={formData.name} onChange={handleInputChange} required
                       className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                       placeholder="Name" />
              </div>
              <div className="flex flex-col">
                <label htmlFor="email" className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Your Email *</label>
                <input type="email" id="email" name="email" value={formData.email} onChange={handleInputChange} required
                       className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                       placeholder="yourname@example.com" />
              </div>

              {/* Subject */}
              <div className="flex flex-col md:col-span-2">
                <label htmlFor="subject" className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Subject *</label>
                <input type="text" id="subject" name="subject" value={formData.subject} onChange={handleInputChange} required
                       className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                       placeholder="Project Collaboration" />
              </div>

              {/* Message */}
              <div className="flex flex-col md:col-span-2">
                <label htmlFor="message" className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Your Message *</label>
                <textarea id="message" name="message" value={formData.message} onChange={handleInputChange} required
                          rows={4}
                          className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 bg-white dark:bg-gray-700 text-gray-900 dark:text-white resize-none"
                          placeholder="Tell me about your project or just say hello!"></textarea>
              </div>

              {/* Submit Button */}
              <div className="md:col-span-2 flex justify-center">
                <button type="submit" disabled={isSubmitting}
                        className={`w-full md:w-auto px-6 py-3 bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-semibold rounded-lg hover:from-blue-700 hover:to-indigo-700 focus:ring-4 focus:ring-blue-500/20 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl ${isSubmitting ? "opacity-70 cursor-not-allowed" : ""}`}>
                  {isSubmitting ? "Sending..." : "Send Message"}
                </button>
              </div>

              {/* Status Messages */}
              {submitStatus === "success" && <div className="md:col-span-2 p-4 bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-lg text-center">✅ Thank you! Your message has been sent successfully.</div>}
              {submitStatus === "error" && <div className="md:col-span-2 p-4 bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-lg text-center">❌ Sorry, there was an error. Please try again later.</div>}
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
