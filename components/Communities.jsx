"use client";

import { motion } from "framer-motion";
import { FaUsers, FaLink } from "react-icons/fa";

const communities = [
  {
    name: "GhostCoder Community",
    role: "👻 Founder & Community Lead",
    icon: (
      <img
        src="/images/ghostCoder.png"
        alt="GDG Logo"
        className="w-10 h-10 object-contain rounded-2xl drag-none"
      />
    ),
    description:
      "GhostCoder is a tech-focused community I built to empower learners in AI, development, and tech communication. We host workshops, collaborative coding events, and support beginner to pro journeys.",
    link: "https://chat.whatsapp.com/KDGHMlDUFwLB7VjrVDBvkI",
    color: "text-cyan-400",
  },
  {
    name: "Google Developer Group (GDG) Vizag",
    role: "🎯 Co-Organizer",
    icon: (
      <img
        src="/images/gdg.png"
        alt="GDG Logo"
        className="w-10 h-10 object-contain rounded-2xl drag-none"
      />
    ),
    description:
      "At GDG Vizag, I contribute as a design and outreach co-organizer, helping run local tech events, create designs for sessions, and support speaker management and student engagement.",
    link: "https://chat.whatsapp.com/EWFeY92QdLz3rU5iiSGrYo",
    color: "text-purple-400",
  },
];

export default function CommunitiesShowcase() {
  return (
    <section className="py-20 px-6 h-screen  text-white text-center w-screen [background:radial-gradient(125%_125%_at_60%_10%,#000_40%,#00ffff_100%)]">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-4xl font-bold mb-12 text-cyan-300"
      >
        🌐 Community Contributions
      </motion.h2>

      <div className="grid gap-10 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 items-center justify-items-center pt-20">
        {communities.map((community, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.2 }}
            className="bg-gray-900 p-6 rounded-xl shadow-lg hover:shadow-cyan-500/20 hover:scale-105 transition-transform text-left max-w-md w-full"
          >
            <div className="flex items-center gap-4 mb-4">
              {community.icon}
              <div>
                <h3 className="text-xl font-bold text-white">
                  {community.name}
                </h3>
                <p className="text-sm text-gray-400">{community.role}</p>
              </div>
            </div>
            <p className="text-sm text-gray-300 mb-3">
              {community.description}
            </p>
            <div className="flex justify-between items-center">
              <span className={`text-xs ${community.color}`}>
                Community · Leadership
              </span>
              <a
                href={community.link}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-sm text-cyan-300 hover:underline"
              >
                <FaLink /> Visit
              </a>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
