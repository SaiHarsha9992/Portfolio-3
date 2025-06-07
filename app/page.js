'use client';

import { useState, useEffect } from 'react';
import Hero from '@/components/Hero';
import FinalStep from '@/components/HeroFinalStep';

export default function Home() {
  const [step, setStep] = useState(0);

  useEffect(() => {
    const onScroll = () => {
      const scrollY = window.scrollY;
      if (scrollY < 150) setStep(0);
      else if (scrollY < 450) setStep(1);
      else if (scrollY < 750) setStep(2);
      else setStep(3);
    };

    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <main>
      <Hero step={step} />
      <FinalStep step={step} />
    </main>
  );
}
