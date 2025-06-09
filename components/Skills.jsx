import { useState } from "react";
import { IconCloud } from "@/components/magicui/icon-cloud";
import { ShineBorder } from "./magicui/shine-border";

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
    <section className="w-full flex flex-col justify-center items-center py-12 px-4 pt-24 min-h-screen">
      <div className="max-w-6xl w-full">
        <h2 className="text-3xl font-bold text-white mb-8 text-center">
          Skills & Technologies
        </h2>

        <div className="relative flex items-center justify-center overflow-hidden mb-8 min-h-[400px]">
          {showTextSkills ? (
            <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
              {Object.entries(skillsText).map(([category, skills]) => (
                <div
                  key={category}
                  className="bg-gray-800 bg-opacity-60 rounded-xl p-6 shadow-lg hover:shadow-2xl transition-shadow duration-300"
                >
                  <ShineBorder shineColor={["#A07CFE", "#FE8FB5", "#FFBE7B"]} />
                  <h3 className="text-2xl font-bold mb-4 border-b-4 border-blue-500 pb-2 text-blue-400">
                    {category}
                  </h3>
                  <div className="flex flex-wrap gap-3">
                    {skills.map((skill) => (
                      <span
                        key={skill}
                        className="bg-blue-700 bg-opacity-90 text-white px-3 py-1 rounded-full text-sm font-medium cursor-default select-none
                         hover:bg-blue-600 transition"
                        title={skill}
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <IconCloud images={images} className="h-1/2" />
          )}
        </div>

        <div className="flex justify-center">
          <button
            onClick={() => setShowTextSkills(!showTextSkills)}
            className="px-6 py-3 bg-blue-600 hover:bg-blue-700 rounded-md text-white font-semibold transition"
          >
            {showTextSkills ? "Show Icon Cloud" : "Show Skills as Text"}
          </button>
        </div>
      </div>
    </section>
  );
}
