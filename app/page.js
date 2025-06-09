"use client";

import Hero from "@/components/Hero";
import CommentsSection, { MarqueeDemo } from "@/components/Comments";
import Skills from "@/components/Skills";

export default function Home() {
  return (
    <>
      <main className="relative overflow-x-hidden">
        <Hero />
        <div className="relative z-50 min-h-screen bg-black ">
          <CommentsSection />
          <Skills />
        </div>
      </main>
    </>
  );
}
