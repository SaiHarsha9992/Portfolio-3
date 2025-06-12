"use client";

import Hero from "@/components/Hero";
import CommentsSection, { MarqueeDemo } from "@/components/Comments";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Silk from "@/components/magicui/silk";
import TypingChallenge from "@/components/Typing";
import AchievementsSection from "@/components/Achievement";
import BlenderModelsShowcase from "@/components/blendermodelshowcase";
import VideoEditorShowcase from "@/components/GraphicVideo";
import CommunitiesShowcase from "@/components/Communities";
import ContactSection from "@/components/Contact";

export default function Home() {
  return (
    <>
      <main className="relative overflow-x-hidden">
        <Hero className="pb-36" />
        <div className="relative z-50 min-h-screen bg-black rounded-xl">
          <CommentsSection />
          <Skills />
          <Projects />
          <TypingChallenge />
          <AchievementsSection />
          <BlenderModelsShowcase />
          <VideoEditorShowcase />
          <CommunitiesShowcase />
          <ContactSection />
        </div>
      </main>
    </>
  );
}
