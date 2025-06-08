// components/ScrollTitleReveal.jsx
'use client';

import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { TextReveal } from './magicui/text-reveal';

const titles = [
  "Full Stack Developer",
  "3D Developer",
  "Mobile Developer",
];

export default function ScrollTitleReveal() {

  return (
   <TextReveal>{titles.join(" | ")}</TextReveal>


  );
}
