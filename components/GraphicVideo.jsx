"use client";

import { motion } from "framer-motion";
import { FaGithub, FaEdit, FaVideo, FaCameraRetro } from "react-icons/fa";

const projects = [
  {
    title: "WTM IWD Vizag 2025",
    role: "🎥 Lead Video & Graphics Editor",
    description:
      "Created official reels, posters, and promotional graphics for International Women's Day organized by Women Techmakers Vizag.",
    icon: <FaVideo className="text-pink-400 text-3xl" />,
    repo: "https://github.com/SaiHarsha9992/IWD-Vizag-2025",
    tag: "Event Editing · Visual Design",
  },
  {
    title: "Video Editings Portfolio",
    role: "🎞️ Editor & Motion Designer",
    description:
      "Compiled motion graphics, transitions, tech intro videos, and reels created using Premiere Pro, After Effects, and CapCut.",
    icon: <FaEdit className="text-cyan-400 text-3xl" />,
    repo: "https://github.com/SaiHarsha9992/Video-Editings",
    tag: "Video Editing · Motion Design",
  },
  {
    title: "Google Developer Group (GDG)",
    role: "🖼️ Poster & Picture Editor",
    description:
      "Worked as a picture editor and social media visual creator for GDG events. Designed event posters and graphics.",
    icon: (
      <img
        src="/images/gdg.png"
        alt="GDG Logo"
        className="w-10 h-10 object-contain rounded-2xl drag-none"
      />
    ),
    repo: "https://github.com/SaiHarsha9992/GDG",
    tag: "Graphic Design · GDG Vizag",
  },
];

export default function VideoEditingShowcase() {
  return (
    <section className="py-20 px-6 bg-gradient-to-b from-cyan-400 via-indigo-500 to-purple-600 text-white text-center h-screen w-screen bg-[#000000] bg-[radial-gradient(#00FFFF_1px,#00000d_1px)] bg-[size:20px_20px]">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-4xl font-bold mb-12 text-white"
      >
        🎬 My Creative Works Showcase
      </motion.h2>
      {/* First two cards in a row */}
      <div className="grid gap-10 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 items-center justify-items-center mb-10">
        {projects.slice(0, 2).map((project, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.2 }}
            className="bg-gray-900 p-6 rounded-xl shadow-lg hover:shadow-cyan-500/20 hover:scale-105 transition-transform text-left w-full max-w-sm"
          >
            <div className="flex items-center gap-4 mb-4">
              {project.icon}
              <div>
                <h3 className="text-xl font-bold text-purple-300">
                  {project.title}
                </h3>
                <p className="text-sm text-gray-400">{project.role}</p>
              </div>
            </div>
            <p className="text-sm text-gray-300 mb-3">{project.description}</p>
            <div className="flex justify-between items-center">
              <span className="text-xs text-cyan-400">{project.tag}</span>
              <a
                href={project.repo}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-sm text-cyan-300 hover:underline"
              >
                <FaGithub /> GitHub
              </a>
            </div>
          </motion.div>
        ))}
      </div>
      {/* Centered GDG card */}
      <div className="flex justify-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="bg-gray-900 p-6 rounded-xl shadow-lg hover:shadow-cyan-500/20 hover:scale-105 transition-transform text-left w-full max-w-md"
        >
          <div className="flex items-center gap-4 mb-4">
            {projects[2].icon}
            <div>
              <h3 className="text-xl font-bold text-purple-300">
                {projects[2].title}
              </h3>
              <p className="text-sm text-gray-400">{projects[2].role}</p>
            </div>
          </div>
          <p className="text-sm text-gray-300 mb-3">
            {projects[2].description}
          </p>
          <div className="flex justify-between items-center">
            <span className="text-xs text-cyan-400">{projects[2].tag}</span>
            <a
              href={projects[2].repo}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-sm text-cyan-300 hover:underline"
            >
              <FaGithub /> GitHub
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
