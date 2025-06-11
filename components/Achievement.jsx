import React from "react";
import {
  FaGithub,
  FaLinkedin,
  FaKeyboard,
  FaUsers,
  FaAward,
  FaRocket,
} from "react-icons/fa";
import { motion } from "framer-motion";
import { ShineBorder } from "./magicui/shine-border";

const achievements = [
  {
    icon: <FaLinkedin className="text-blue-600 text-3xl" />,
    title: "LinkedIn Creator",
    description: "2,200+ followers sharing original tech content.",
    year: "2025",
  },
  {
    icon: <FaGithub className="text-white text-3xl" />,
    title: "GitHub Contributor",
    description: "3,000+ contributions, 364-day commit streak.",
    year: "2025",
  },
  {
    icon: <FaKeyboard className="text-yellow-500 text-3xl" />,
    title: "Typing Pro",
    description: "90 WPM with 90%+ accuracy on Monkeytype.",
    year: "2025",
  },
  {
    icon: <FaUsers className="text-green-600 text-3xl" />,
    title: "Community Leader",
    description: "Recognized in 10,000+ student campus community.",
    year: "2025",
  },
  {
    icon: (
      <img
        src="/images/gdg.png"
        alt="GDG Logo"
        className="w-10 h-10 object-contain rounded-2xl"
      />
    ),
    title: "GDG Co-Organizer",
    description:
      "Organizing events at Aditya College of Engineering & Technology.",
    year: "2024–25",
  },
  {
    icon: (
      <img
        src="/images/startupmahakumbh.png"
        alt="startupmahakumbh Logo"
        className="w-10 h-10 object-contain rounded-2xl"
      />
    ),
    title: "Startup Mahakumbh Finalist",
    description: "Top 10 finalist team for startup innovation.",
    year: "2025",
  },
];

const cardVariants = {
  hidden: { opacity: 0, scale: 0.9, y: 30 },
  visible: (i) => ({
    opacity: 1,
    scale: 1,
    y: 0,
    transition: {
      delay: i * 0.15,
      duration: 0.6,
      ease: "easeOut",
    },
  }),
};

export default function AchievementsSection() {
  return (
    <>
      <section
        className="py-16 px-4 bg-black dark:bg-gray-900 z-50 bg-[radial-gradient(circle_250px_at_50%_200px,#06b6d4,transparent_100%),radial-gradient(circle_200px_at_50%_500px,#8b5cf6,transparent_100%)]
"
      >
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold mb-10 text-center text-white">
            🏆 Achievements
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 pt-8">
            {achievements.map((item, index) => (
              <motion.div
                key={index}
                className="bg-black dark:bg-gray-800 rounded-2xl p-6 shadow hover:scale-105 transition-transform border-2 border-amber-50"
                custom={index}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                variants={cardVariants}
              >
                <ShineBorder shineColor={["#A07CFE", "#FE8FB5", "#FFBE7B"]} />
                <div className="mb-4">{item.icon}</div>
                <h3 className="text-xl font-semibold text-white dark:text-white">
                  {item.title}
                </h3>
                <p className="text-gray-200 dark:text-gray-300 text-sm mt-1">
                  {item.description}
                </p>
                <p className="text-xs text-gray-400 mt-2">{item.year}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
