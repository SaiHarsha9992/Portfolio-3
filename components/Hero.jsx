'use client';

import dynamic from 'next/dynamic';
import { motion, AnimatePresence } from 'framer-motion';
import FinalStep from './HeroFinalStep';

const AvatarCanvas = dynamic(() => import('./AvatarCanvas'), { ssr: false });

export default function Hero({ step }) {
  return (
    <div className="relative min-h-[200vh] bg-[#0b0f19] text-white overflow-x-hidden">
      {/* Animated background */}
      <motion.div
        className="fixed -top-40 -left-40 w-[800px] h-[1000px] bg-gradient-to-tr from-cyan-600 via-blue-700 to-purple-800 rounded-full opacity-30 blur-3xl z-0"
        animate={{
          scale: [1, 1.1, 1],
          borderRadius: ['50%', '40%', '50%'],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />

      {/* Step 0 */}
      <AnimatePresence mode="wait">
        {step === 0 && (
          <motion.div
            key="step0"
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 flex flex-col justify-center items-center z-20 bg-[#0b0f19]"
          >
            <motion.p
              className="text-blue-400 text-lg mb-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              Hi, I'm
            </motion.p>
            <motion.h1
              className="text-cyan-400 font-extrabold text-7xl md:text-9xl text-center"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1 }}
            >
              Kedarinadh Sai Harsha
            </motion.h1>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Step 1 */}
      <AnimatePresence mode="wait">
        {step === 1 && (
          <motion.div
            key="step1"
            className="fixed inset-0 flex flex-col justify-center items-center z-20 bg-[#0b0f19]"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.h1
              className="text-cyan-400 font-extrabold text-7xl md:text-9xl text-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 1 }}
            >
              I'm a Full Stack Developer
            </motion.h1>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Step 3 */}
      {/* Step 3 */}
<AnimatePresence mode="wait">
  {step === 3 && (
    <FinalStep step={step} key="step3" />
  )}
</AnimatePresence>


      {/* Extra space for scrolling */}
      <div style={{ height: '100vh' }}></div>
    </div>
  );
}
