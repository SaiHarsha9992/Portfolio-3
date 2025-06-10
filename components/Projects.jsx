const { default: InfiniteMenu } = require("./magicui/infinitemenu");
import { motion } from "framer-motion";
const items = [
  {
    image: "/images/hmart.png",
    link: "https://h-mart-ecommerce.vercel.app/",
    title: "H Mart",
    description:
      "H-Mart is a next-gen e-commerce platform built with TypeScript for scalability and Stripe for secure, seamless payments.",
  },
  {
    image: "/images/ghostCoder.png",
    link: "https://ghost-coderr.vercel.app/",
    title: "ghostCoder",
    description:
      "ghostCoder is a learning platform that simplifies coding with example-driven lessons and hands-on solutions in Python, C++, and Java.",
  },
  {
    image: "/images/vikram.png",
    link: "https://www.linkedin.com/posts/g-kedarinadh-sai-harsha_vikramai-artificialintelligence-ai-ugcPost-7224084435606941696-JVnn?utm_source=share&utm_medium=member_desktop&rcm=ACoAAD8nAXcBEyZpHDvsiDgScvmDTP2C6TkneAM",
    title: "Vikram 3D AI ",
    description:
      "Vikram AI Assistant is a smart virtual assistant with facial authentication for secure, personalized interactions and seamless task automation.",
  },
  {
    image: "/images/leo.png",
    link: "https://www.linkedin.com/posts/g-kedarinadh-sai-harsha_wawasensai-blender-3dmodeling-activity-7205142075825147904-Klg8?utm_source=share&utm_medium=member_desktop&rcm=ACoAAD8nAXcBEyZpHDvsiDgScvmDTP2C6TkneAM",
    title: "Leo 3D AI",
    description:
      "Leo AI Assistant is an innovative 3D AI assistant built with Blender and Three.js, offering immersive, real-time AI interactions through dynamic 3D visuals.",
  },
  {
    image: "/images/2c.png",
    link: "https://second-chance-five.vercel.app/",
    title: "2 Chance",
    description:
      "Second Chance is a Startup Mahakumbh prototype showcasing our idea and solution. I built a visual representation to effectively demonstrate the concept and its impact.",
  },
  {
    image: "/images/astrix.png",
    link: "https://astrix-beta.vercel.app/",
    title: "Astrix",
    description:
      "Astrix is an upcoming startup where I serve as a Full Stack Developer, actively contributing to its development and growth.",
  },
  {
    image: "/images/leo-old.png",
    link: "https://www.linkedin.com/posts/g-kedarinadh-sai-harsha_leoai-leoassistant-ai-activity-7170360145581993984-fkAi?utm_source=share&utm_medium=member_desktop&rcm=ACoAAD8nAXcBEyZpHDvsiDgScvmDTP2C6TkneAM",
    title: "Leo AI",
    description:
      "Leo AI Assistant is the first AI I created—a basic virtual assistant that responds through both voice and chat, offering a simple yet functional AI interaction experience.",
  },
  {
    image: "/images/movie.png",
    link: "https://react-movie-search-app-one.vercel.app/",
    title: "Movie Search ",
    description:
      "A React-based movie search app that allows users to search for movies and view details, built with a focus on user-friendly design and functionality.",
  },
  {
    image: "/images/owl.png",
    link: "https://owl-in-night.vercel.app/",
    title: "Owl in Night",
    description:
      "Owl in night is a simple css animation page that showcases a beautiful owl flying through a night sky, demonstrating my skills in CSS animations and design.",
  },
];

export default function Projects() {
  return (
    <motion.div
      className="relative min-h-full min-w-full flex flex-col items-center justify-center bg-black pt-24"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      {/* Title */}
      <motion.h1
        className="text-white text-4xl font-bold mb-8"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.6 }}
      >
        Projects
      </motion.h1>

      {/* Infinite Menu */}
      <motion.div
        className="w-full h-1/2"
        initial={{ opacity: 0, scale: 0.85 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.4, duration: 0.6 }}
      >
        <InfiniteMenu items={items} />
      </motion.div>
    </motion.div>
  );
}
