"use client";

import { useState } from "react";
import { useLenis } from "@/hooks/use-lenis";
import { Preloader } from "@/components/loading/preloader";
import { CustomCursor } from "@/components/cursor/custom-cursor";
import { FloatingNavbar } from "@/components/navbar/floating-navbar";
import { CommandPalette } from "@/components/command/command-palette";
import { DeveloperTerminal } from "@/components/terminal/developer-terminal";

import { HeroSection } from "@/components/sections/hero-section";
import { AboutSection } from "@/components/sections/about-section";
import { ExperienceSection } from "@/components/sections/experience-section";
import { ProjectsSection } from "@/components/sections/projects-section";
import { SkillsSection } from "@/components/sections/skills-section";
import { AchievementsSection } from "@/components/sections/achievements-section";
import { GithubSection } from "@/components/sections/github-section";
import { TimelineSection } from "@/components/sections/timeline-section";
import { BlogSection } from "@/components/sections/blog-section";
import { ContactSection } from "@/components/sections/contact-section";
import { FooterSection } from "@/components/sections/footer-section";

export default function Home() {
  useLenis();
  const [isCommandOpen, setIsCommandOpen] = useState(false);
  const [isTerminalOpen, setIsTerminalOpen] = useState(false);

  return (
    <main className="relative min-h-screen bg-[#030712] text-white selection:bg-cyan-500/30 selection:text-cyan-200">
      {/* Preloader Exit Animation */}
      <Preloader />

      {/* Custom Interactive Spring Cursor & Spotlight */}
      <CustomCursor />

      {/* Floating Glass Header Navbar */}
      <FloatingNavbar
        onOpenCommand={() => setIsCommandOpen(true)}
        onOpenTerminal={() => setIsTerminalOpen(true)}
      />

      {/* Main Page Sections */}
      <HeroSection />
      <AboutSection />
      <ExperienceSection />
      <ProjectsSection />
      <SkillsSection />
      <AchievementsSection />
      <GithubSection />
      <TimelineSection />
      <BlogSection />
      <ContactSection />
      <FooterSection />

      {/* Interactive Command Palette Modal (Ctrl + K) */}
      <CommandPalette
        isOpen={isCommandOpen}
        onClose={() => setIsCommandOpen(false)}
        onOpenTerminal={() => setIsTerminalOpen(true)}
      />

      {/* Interactive Developer CLI Terminal Modal */}
      <DeveloperTerminal
        isOpen={isTerminalOpen}
        onClose={() => setIsTerminalOpen(false)}
      />
    </main>
  );
}
