"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

import { cn } from "@/lib/utils";

export const TextReveal = ({ children, className }) => {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  if (typeof children !== "string") {
    throw new Error("TextReveal: children must be a string");
  }

  const words = children.split(" ");

  return (
    <div ref={targetRef} className={cn("relative z-0 h-[200vh]", className)}>
      <div
        className={
          "sticky top-0 mx-auto flex h-[50%] max-w-8xl items-center bg-transparent px-[1rem] py-[5rem] items-center justify-center"
        }
      >
        <span
          className={
            "flex flex-wrap p-5 font-bold text-white dark:text-white/20 md:p-8 text-3xl md:text-4xl lg:text-5xl"
          }
        >
          {words.map((word, i) => {
  const start = i / words.length;
  const end = start + 1 / words.length;
  return (
    <Word key={i} progress={scrollYProgress} range={[start, end]}>
      {word}&nbsp;
    </Word>
  );
})}

        </span>
      </div>
    </div>
  );
};

const Word = ({ children, progress, range }) => {
  const opacity = useTransform(progress, range, [0, 1]);
  return (
    <span className="relative mx-1 lg:mx-1.5">
      <span className="absolute opacity-30">{children}</span>
      <motion.span
        style={{ opacity }}
        className="text-white dark:text-white text-3xl md:text-4xl lg:text-5xl"
      >
        {children}
      </motion.span>
    </span>
  );
};
