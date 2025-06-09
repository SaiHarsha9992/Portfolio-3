'use client';

import { motion } from 'framer-motion';
import AvatarCanvas from './AvatarCanvas';
import { FaGithub, FaHackerrank, FaLinkedin, FaLinkedinIn } from 'react-icons/fa';
import { SiGeeksforgeeks, SiCodechef, SiLeetcode } from 'react-icons/si';
import { AuroraText } from './magicui/aurora-text';
import RotatingText from './magicui/RotatingText';

const skills = [
  'AI Development',
  'Full Stack',
  'Next.js',
  'Framer Motion',
  'Typing 120 WPM',
  'React',
  'Tailwind CSS',
  'Node.js',
];

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0 },
};

// Circular progress function omitted here for brevity

export default function FinalStep({ step }) {
  return (
    <motion.div
      className="relative flex flex-col min-w-screen md:flex-row items-center justify-between px-6 md:px-20 py-4 min-h-screen z-20 pt-4"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: step === 3 ? 1 : 0, y: step === 3 ? 0 : 50 }}
      transition={{ duration: 1 }}
    >
      {/* Left Content */}
      <motion.div
        className="w-full md:w-2/3 space-y-6"
        initial={{ opacity: 0, x: -100 }}
        animate={{ opacity: step === 3 ? 1 : 0, x: step === 3 ? 0 : -100 }}
        transition={{ duration: 1 }}
      >
        <h1 className="text-6xl font-bold text-white flex items-center flex-wrap gap-4">
  <RotatingText
    texts={['Coder', 'Developer', 'Student']}
    mainClassName="px-3 py-1 bg-cyan-300 text-black rounded-lg inline-block overflow-hidden"
    staggerFrom="last"
    initial={{ y: '100%' }}
    animate={{ y: 0 }}
    exit={{ y: '-120%' }}
    staggerDuration={0.025}
    splitLevelClassName="overflow-hidden"
    transition={{ type: 'spring', damping: 30, stiffness: 400 }}
    rotationInterval={2000}
  />
  <span>
    Kedarinadh Sai <AuroraText>Harsha</AuroraText>
  </span>
</h1>

        <p className="text-lg text-blue-100">AI Developer | Full Stack | Speed Typist</p>

        {/* GitHub Contributions Label */}
        <p className="flex items-center text-lg font-semibold mb-4 text-green-400 w-full max-w-xl">
          <FaGithub className="mr-2 text-green-400" size={24} />
          GitHub Contributions
        </p>

        {/* GitHub Contribution Graph */}
        <motion.div
          variants={cardVariants}
          initial="hidden"
          animate={step === 3 ? 'visible' : 'hidden'}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="bg-[#161b22] p-6 rounded-lg border border-green-700 shadow-md text-white w-full max-w-2xl"
        >
          <img
            src="https://ghchart.rshah.org/39d353/SaiHarsha9992"
            alt="GitHub Contributions"
            className="w-full"
          />
        </motion.div>

        {/* Coding Profiles Section */}
        <div className="mt-8 max-w-2xl">
          <h2 className="text-xl font-semibold mb-4 text-green-400">Coding Profiles</h2>
          <div className="flex flex-wrap gap-6 text-white text-lg">
            {/* GeeksforGeeks */}
            <a
              href="https://www.geeksforgeeks.org/user/saiharha9992/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 hover:text-green-500 transition"
            >
              <SiGeeksforgeeks size={28} />
              GeeksforGeeks
            </a>

            {/* CodeChef */}
            <a
              href="https://www.codechef.com/users/saiharsha9992"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 hover:text-orange-500 transition"
            >
              <SiCodechef size={28} />
              CodeChef
            </a>

            {/* LeetCode */}
            <a
              href="https://leetcode.com/u/gaduharsha72/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 hover:text-yellow-400 transition"
            >
              <SiLeetcode size={28} />
              LeetCode
            </a>

            {/* GitHub */}
            <a
              href="https://github.com/SaiHarsha9992"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 hover:text-blue-500 transition"
            >
              <FaGithub size={28} />
              GitHub
            </a>

            {/* HackerRank */}
            <a
              href="https://www.hackerrank.com/profile/saiharsha9992"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 hover:text-green-600 transition"
            >
              <FaHackerrank size={28} />
              HackerRank
            </a>

            {/* Monkeytype - no official icon, so simple text */}
           {/* LinkedIn */}
            <a
              href="https://www.linkedin.com/in/g-kedarinadh-sai-harsha/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 hover:text-blue-700 transition"
            >
              <FaLinkedin size={28} />
              LinkedIn
            </a>
          </div>
        </div>
      </motion.div>

      {/* Avatar Canvas */}
      <motion.div
        className="w-full md:max-w-2xl h-[500px] md:h-[750px] mt-10 md:mt-0 "
        initial={{ opacity: 0, x: 100 }}
        animate={{ opacity: step === 3 ? 1 : 0, x: step === 3 ? 0 : 100 }}
        transition={{ duration: 1 }}
      >
        <AvatarCanvas />
      </motion.div>
      
    </motion.div>
  );
}
