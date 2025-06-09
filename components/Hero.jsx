"use client";

import dynamic from "next/dynamic";
import { motion, AnimatePresence } from "framer-motion";
import FinalStep from "./HeroFinalStep";
import { useState, useEffect, useRef } from "react";
import { Typewriter } from "react-simple-typewriter";
import { FaGithub, FaKeyboard } from "react-icons/fa";
import { SiGeeksforgeeks, SiLeetcode } from "react-icons/si";
import { NumberTicker } from "./magicui/number-ticker";
import { FiChevronDown } from "react-icons/fi";
import { AuroraText } from "./magicui/aurora-text";
import Aurora from "./magicui/Aurora";
import { MarqueeDemo } from "./Comments";
const AvatarCanvas = dynamic(() => import("./AvatarCanvas"), { ssr: false });

export default function Hero() {
  const [step, setStep] = useState(0);
  const containerRef = useRef(null);

  useEffect(() => {
    const sections = containerRef.current.querySelectorAll("section");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = Array.from(sections).indexOf(entry.target);
            if (index !== -1) setStep(index);
          }
        });
      },
      {
        root: null, // viewport
        threshold: 0.5, // 50% visible
      }
    );

    sections.forEach((section) => observer.observe(section));

    return () => {
      sections.forEach((section) => observer.unobserve(section));
    };
  }, []);

  const variants = {
    initial: { opacity: 0, y: 30 },
    animate: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: -30 },
  };

  return (
    <>
      {/* Scroll container with snap scroll */}
      <div
        ref={containerRef}
        className="min-h-[400vh] scroll-y snap-y snap-mandatory"
        style={{ scrollSnapType: "y mandatory" }}
      >
        {/* Sections stacked vertically, real flow */}
        <section className="snap-start min-h-screen"></section>
        <section className="snap-start min-h-screen"></section>
        <section className="snap-start min-h-screen"></section>
        <section className="snap-start min-h-screen"></section>
      </div>

      {/* Fixed overlay showing animated content based on step */}
      <div className="fixed inset-0 flex flex-col justify-center items-center pointer-events-none z-20 text-white px-4">
        <AnimatePresence mode="wait" initial={false}>
          {/* Scroll down indicator for steps 0,1,2 */}
          {(step === 0 || step === 1 || step === 2) && (
            <motion.div
              className="fixed bottom-10 left-1/2 -translate-x-1/2 text-cyan-400 z-30 cursor-pointer"
              animate={{
                y: [0, 10, 0], // up-down motion
                opacity: [1, 0.6, 1],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              onClick={() => {
                // Scroll to next section on click
                const container = containerRef.current;
                if (!container) return;
                const sections = container.querySelectorAll("section");
                if (step < sections.length - 1) {
                  sections[step + 1].scrollIntoView({ behavior: "smooth" });
                }
              }}
              aria-label="Scroll down"
              role="button"
              tabIndex={0}
              onKeyDown={(e) => {
                if (e.key === "Enter" || e.key === " ") {
                  e.preventDefault();
                  const container = containerRef.current;
                  if (!container) return;
                  const sections = container.querySelectorAll("section");
                  if (step < sections.length - 1) {
                    sections[step + 1].scrollIntoView({ behavior: "smooth" });
                  }
                }
              }}
            >
              <FiChevronDown size={40} />
            </motion.div>
          )}

          {step === 0 && (
            <motion.div
              key="step0"
              className="fixed inset-0 flex flex-col justify-center items-center z-20 "
              variants={variants}
              initial="initial"
              animate="animate"
              exit="exit"
              transition={{ duration: 0.8 }}
            >
              <motion.p
                className="text-white text-3xl mb-4"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                Hi, I'm
              </motion.p>
              <motion.h1
                className="text-white font-extrabold text-7xl md:text-9xl text-center"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1 }}
              >
                Kedarinadh Sai <AuroraText>Harsha</AuroraText>
              </motion.h1>
            </motion.div>
          )}
          {step === 1 && (
            <motion.div
              key="step1"
              className="fixed inset-0 flex flex-col justify-center items-center z-20"
              variants={variants}
              initial="initial"
              animate="animate"
              exit="exit"
              transition={{ duration: 0.8 }}
            >
              <motion.p
                className="text-white text-2xl mb-4"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                I'm a
              </motion.p>
              <motion.h1
                className="text-white font-extrabold text-6xl md:text-8xl text-center"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.2 }}
              >
                <Typewriter
                  words={[
                    "Full Stack Developer",
                    "3D Developer",
                    "Mobile Developer",
                  ]}
                  loop={0}
                  cursor
                  cursorStyle="|"
                  typeSpeed={70}
                  deleteSpeed={10}
                  delaySpeed={1500}
                />
              </motion.h1>
            </motion.div>
          )}

          {step === 2 && (
            <motion.div
              key="step2"
              variants={variants}
              initial="initial"
              animate="animate"
              exit="exit"
              transition={{ duration: 0.8 }}
              className="pointer-events-auto flex flex-wrap justify-center gap-24 text-white text-center max-w-7xl mx-auto"
            >
              {/* GitHub */}
              <a
                href="https://github.com/SaiHarsha9992"
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-col items-center hover:text-black transition-colors"
              >
                <div className="text-6xl font-bold mb-1">
                  <NumberTicker
                    value={3000}
                    className="whitespace-pre-wrap text-8xl font-medium tracking-tighter text-white"
                  />
                  +
                </div>
                <FaGithub className="text-5xl mb-1 text-white" />
                <div className="text-lg font-semibold">
                  Github <br />
                  Commits
                </div>
              </a>

              {/* GeeksforGeeks */}
              <a
                href="https://www.geeksforgeeks.org/user/saiharha9992/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-col items-center hover:text-green-400 transition-colors"
              >
                <div className="text-6xl font-bold mb-1">
                  <NumberTicker
                    value={700}
                    className="whitespace-pre-wrap text-8xl font-medium tracking-tighter text-white"
                  />
                  +
                </div>
                <SiGeeksforgeeks className="text-5xl mb-1 text-green-500" />
                <div className="text-lg font-semibold">
                  GeeksforGeeks <br />
                  Overall Score
                </div>
              </a>

              {/* LeetCode */}
              <a
                href="https://leetcode.com/u/gaduharsha72/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-col items-center hover:text-yellow-400 transition-colors"
              >
                <div className="text-6xl font-bold mb-1">
                  <NumberTicker
                    value={250}
                    className="whitespace-pre-wrap text-8xl font-medium tracking-tighter text-white"
                  />
                  +
                </div>
                <SiLeetcode className="text-5xl mb-1 text-yellow-400" />
                <div className="text-lg font-semibold">
                  LeetCode <br />
                  Solved Problems
                </div>
              </a>

              {/* Typing Speed */}
              <a
                href="https://monkeytype.com/profile/Saiharsha9992"
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-col items-center hover:text-cyan-400 transition-colors"
              >
                <div className="flex flex-col items-center">
                  <div className="text-6xl font-bold text-cyan-300 mt-1">
                    90 WPM
                  </div>
                  <div className="text-lg text-white/70">Accuracy: 90%</div>

                  <FaKeyboard className="text-5xl mt-4 text-white" />
                  <div className="text-lg font-semibold">Typing</div>
                </div>
              </a>
            </motion.div>
          )}

          {step === 3 && (
            <motion.div
              key="step3"
              variants={variants}
              initial="initial"
              animate="animate"
              exit="exit"
              transition={{ duration: 0.8 }}
              className="pointer-events-auto"
            >
              <FinalStep step={step} />
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      <div className="fixed inset-0 z-0 pointer-events-none">
        <Aurora
          colorStops={[
            "#00FFFF", // Cyan (actually pinkish)
            "#0070F3", // Blue
            "#7928CA", // Purple
          ]}
          blend={0.5}
          amplitude={1.0}
          speed={0.5}
          className="w-full h-9/12"
        />
      </div>
    </>
  );
}
