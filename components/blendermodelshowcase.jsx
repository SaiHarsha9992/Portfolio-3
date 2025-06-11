"use client";

import { motion } from "framer-motion";
import { FaGithub } from "react-icons/fa";

const models = [
  {
    name: "Leo",
    img: "/images/leo-model.png", // replace with your actual image path
    link: "https://github.com/SaiHarsha9992/Blender-Projects/blob/main/Vijay.glb",
    position: "left",
  },
  {
    name: "Ghostcoder",
    img: "/images/ghost-model.png",
    link: "",
    position: "center",
  },
  {
    name: "Vikram",
    img: "/images/vikram-model.png",
    link: "https://github.com/SaiHarsha9992/Blender-Projects/blob/main/Original%20Vikram.glb",
    position: "right",
  },
];

export default function BlenderModelsShowcase() {
  return (
    <section className="py-20 px-6 bg-gradient-to-b min-h-screen from-black via-cyan-900 to-black text-white text-center">
      <h2 className="text-4xl font-bold mb-10 text-cyan-300">
        🧊 My 3D Model Showcase
      </h2>
      <p className="max-w-2xl mx-auto mb-2 text-lg text-gray-300">
        Explore my 3D models created with Blender, showcasing my skills in 3D
        modeling and animation. Each model is a unique piece of art, reflecting
        my creativity and technical expertise. Click on the link to view them..
      </p>
      <a
        href={"https://github.com/SaiHarsha9992/Blender-Projects/"}
        target="_blank"
        rel="noopener noreferrer"
        className="text-sm flex items-center justify-center gap-2 text-cyan-400 hover:text-cyan-300 mb-12 "
      >
        <FaGithub /> View on GitHub
      </a>
      <div className="flex flex-col md:flex-row items-center justify-center gap-10">
        {models.map((model, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.3 }}
            className={`relative w-48 md:w-80 ${
              model.position === "center" ? "scale-110 z-10" : "opacity-80"
            }`}
          >
            <img
              src={model.img}
              alt={model.name}
              className="w-full h-full object-contain drop-shadow-lg drag-none"
            />
            <div className="mt-3 text-lg font-semibold">{model.name}</div>
            {model.link ? (
              <a
                href={model.link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-cyan-400 hover:text-cyan-300"
              >
                View Model
              </a>
            ) : (
              <div className="text-sm text-gray-400"></div>
            )}
          </motion.div>
        ))}
      </div>
    </section>
  );
}
