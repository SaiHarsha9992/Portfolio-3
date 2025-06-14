"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { IconCloud } from "@/components/magicui/icon-cloud";
import { ShineBorder } from "./magicui/shine-border";
import { AuroraBackground } from "./ui/aurora-background";
import { RainbowButton } from "./magicui/rainbow-button";

const slugs = [
  "typescript",
  "javascript",
  "dart",
  "java",
  "react",
  "reactnative",
  "android",
  "html5",
  "css3",
  "nodedotjs",
  "express",
  "nextdotjs",
  "prisma",
  "amazonaws",
  "postgresql",
  "firebase",
  "nginx",
  "vercel",
  "docker",
  "git",
  "github",
  "visualstudiocode",
  "androidstudio",
  "figma",
  "c",
  "cplusplus",
  "python",
  "yaml",
  "redux",
  "mongodb",
  "blender",
];

const skillsText = {
  "Programming Languages": ["C", "C++", "Python", "Java", "JavaScript", "YAML"],
  "Web Development": [
    "HTML/CSS",
    "React",
    "React Native",
    "Node.js",
    "Express",
    "Next.js",
    "Redux",
  ],
  Databases: ["SQL", "NoSQL", "MongoDB", "PostgreSQL", "Firebase"],
  "3D & Graphics": ["Three.js", "Blender"],
  "Cloud & DevOps Platforms": ["AWS", "Azure", "Docker", "Vercel"],
  "Developer Tools": [
    "Git",
    "GitHub",
    "Visual Studio Code",
    "Android Studio",
    "Figma",
  ],
};

export default function Skills() {
  const images = slugs.map((slug) => `https://cdn.simpleicons.org/${slug}`);
  const [showTextSkills, setShowTextSkills] = useState(false);

  return (
    <AuroraBackground>
      <section className="w-full flex flex-col justify-center items-center py-12 px-4 pt-24 min-h-screen pb-28">
        <div className="max-w-6xl w-full">
          <motion.h2
            className="text-3xl font-bold text-white mb-8 text-center pt-20"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            Skills & Technologies
          </motion.h2>

          <motion.div
            className="relative flex items-center justify-center overflow-hidden mb-8 min-h-[400px]"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            {showTextSkills ? (
              <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
                {Object.entries(skillsText).map(([category, skills]) => (
                  <div
                    key={category}
                    className="bg-opacity-60 border-2 border-amber-50 rounded-xl p-6 shadow-lg hover:shadow-2xl transition-shadow duration-300"
                  >
                    <h3 className="text-2xl font-bold mb-4 border-b-4 border-cyan-500 pb-2 text-white">
                      {category}
                    </h3>
                    <div className="flex flex-wrap gap-3">
                      {skills.map((skill) => (
                        <span
                          key={skill}
                          className="bg-opacity-90 text-white px-3 py-1 rounded-full text-sm font-medium cursor-default select-none
                         hover:bg-cyan-600 transition"
                          title={skill}
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                    <ShineBorder
                      shineColor={["#A07CFE", "#FE8FB5", "#FFBE7B"]}
                    />
                  </div>
                ))}
              </div>
            ) : (
              <motion.div
                initial={{ scale: 0.95, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                <IconCloud images={images} className="h-1/2" />
              </motion.div>
            )}
          </motion.div>

          <motion.div
            className="flex justify-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <RainbowButton onClick={() => setShowTextSkills(!showTextSkills)}>
              {showTextSkills ? "Show Icon Cloud" : "Show Skills as Text"}
            </RainbowButton>
          </motion.div>
        </div>
      </section>
    </AuroraBackground>
  );
}
