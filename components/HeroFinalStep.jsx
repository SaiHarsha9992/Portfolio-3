'use client';

import { motion } from 'framer-motion';
import AvatarCanvas from './AvatarCanvas';

export default function FinalStep({ step }) {
  return (
    <motion.div
      className="relative flex flex-col md:flex-row items-center justify-between px-6 md:px-20 py-16 min-h-screen z-20 bg-[#0b0f19]"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: step === 3 ? 1 : 0, y: step === 3 ? 0 : 50 }}
      transition={{ duration: 1 }}
    >
      <motion.div
        className="w-full md:w-1/2 space-y-4"
        initial={{ opacity: 0, x: -100 }}
        animate={{ opacity: step === 3 ? 1 : 0, x: step === 3 ? 0 : -100 }}
        transition={{ duration: 1 }}
      >
        <p className="text-blue-400 text-sm">Hi, I'm</p>
        <h1 className="text-5xl font-bold text-cyan-400">Kedarinadh Sai Harsha</h1>
        <p className="text-lg text-blue-100">AI Developer | Full Stack | Speed Typist</p>

        <div className="pt-6 space-y-2">
          <div className="bg-[#111827] p-3 rounded-lg border border-blue-900">
            <span className="text-blue-400">Typing Speed:</span> 120 WPM
          </div>
          <div className="bg-[#111827] p-3 rounded-lg border border-blue-900">
            <span className="text-green-400">GitHub Commits:</span> 1500+ 🔥
          </div>
          <div className="bg-[#111827] p-3 rounded-lg border border-blue-900">
            <span className="text-teal-400">Status:</span> RUNNING...
          </div>
        </div>
      </motion.div>

      <motion.div
        className="w-full md:max-w-2xl h-[500px] md:h-[650px] mt-10 md:mt-0"
        initial={{ opacity: 0, x: 100 }}
        animate={{ opacity: step === 3 ? 1 : 0, x: step === 3 ? 0 : 100 }}
        transition={{ duration: 1 }}
      >
        <AvatarCanvas />
      </motion.div>
    </motion.div>
  );
}
