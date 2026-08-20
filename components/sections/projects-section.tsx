"use client";

import { useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  ExternalLink, 
  Sparkles, 
  CheckCircle2, 
  AlertCircle, 
  X,
  ArrowRight,
  ChevronLeft,
  ChevronRight,
  Cpu
} from "lucide-react";
import { GithubIcon } from "@/components/ui/icons";
import { PORTFOLIO_DATA, Project } from "@/constants/portfolio";
import { useSoundEffects } from "@/hooks/use-sound-effects";
import { useScrollLock } from "@/hooks/use-scroll-lock";
import { TiltCard } from "@/components/ui/tilt-card";

export function ProjectsSection() {
  const [selectedCategory, setSelectedCategory] = useState<string>("All");
  const [activeProjectModal, setActiveProjectModal] = useState<Project | null>(null);
  const { playClick } = useSoundEffects();
  const scrollContainerRef = useRef<HTMLDivElement | null>(null);

  useScrollLock(!!activeProjectModal);

  const CATEGORIES = ["All", "Full Stack"];

  const filteredProjects =
    selectedCategory === "All"
      ? PORTFOLIO_DATA.projects
      : PORTFOLIO_DATA.projects.filter((p) => p.category === selectedCategory);

  const scrollLeft = () => {
    playClick();
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: -600, behavior: "smooth" });
    }
  };

  const scrollRight = () => {
    playClick();
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: 600, behavior: "smooth" });
    }
  };

  return (
    <section id="projects" className="py-24 px-4 sm:px-6 lg:px-8 relative z-10 max-w-7xl mx-auto overflow-hidden">
      {/* Section Header */}
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false, margin: "-60px" }}
        transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        className="text-center max-w-3xl mx-auto space-y-4 mb-12"
      >
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full glass-card border border-cyan-500/30 text-xs font-semibold text-cyan-400">
          <Sparkles className="w-3.5 h-3.5" />
          <span>PRODUCT LAUNCH SHOWCASE</span>
        </div>

        <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
          Crafted with Precision &{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-cyan-300 to-purple-400">
            Engineering Excellence
          </span>
        </h2>

        <p className="text-slate-300 text-base sm:text-lg">
          Explore production-ready full-stack portals, candidate recruitment engines, and healthcare appointment systems.
        </p>
      </motion.div>

      {/* Category Filter Pills & Carousel Controls */}
      <div className="flex items-center justify-between mb-8 flex-wrap gap-4">
        <div className="flex items-center gap-2">
          {CATEGORIES.map((cat) => {
            const isActive = selectedCategory === cat;
            return (
              <button
                key={cat}
                onClick={() => {
                  playClick();
                  setSelectedCategory(cat);
                }}
                className={`relative px-5 py-2 rounded-full text-xs font-semibold transition-all ${
                  isActive
                    ? "text-white bg-gradient-to-r from-blue-600 to-purple-600 shadow-lg shadow-blue-500/25 border border-white/20"
                    : "text-slate-400 glass-card hover:bg-white/10 border border-white/10"
                }`}
              >
                <span>{cat}</span>
              </button>
            );
          })}
        </div>

        {/* Carousel Navigation Arrows */}
        <div className="flex items-center gap-2">
          <button
            onClick={scrollLeft}
            className="p-3 rounded-full glass-card hover:bg-white/10 border border-white/15 text-slate-300 hover:text-white transition-all hover:scale-105 active:scale-95"
            title="Scroll Left"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          <button
            onClick={scrollRight}
            className="p-3 rounded-full glass-card hover:bg-white/10 border border-white/15 text-slate-300 hover:text-white transition-all hover:scale-105 active:scale-95"
            title="Scroll Right"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>
      </div>

      {/* Horizontal Scroll Track (Nike Inspired Product Launch Cards) */}
      <div
        ref={scrollContainerRef}
        className="flex gap-8 overflow-x-auto pb-8 pt-2 scrollbar-none snap-x snap-mandatory focus:outline-none"
        style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
      >
        {filteredProjects.map((project, idx) => (
          <motion.div
            key={project.id}
            initial={{ opacity: 0, scale: 0.94, y: 30 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            viewport={{ once: false, margin: "-50px" }}
            transition={{ duration: 0.7, delay: idx * 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="w-[90vw] sm:w-[580px] lg:w-[640px] shrink-0 snap-center"
          >
            <TiltCard 
              className="glass-card glass-card-hover rounded-3xl border border-white/15 overflow-hidden flex flex-col justify-between shadow-2xl h-full group"
              glowColor="rgba(56, 189, 248, 0.2)"
            >
              {/* Product Visual Top Banner with Interactive Mockup */}
              <div className={`relative h-64 sm:h-72 p-8 bg-gradient-to-br ${project.gradient} flex flex-col justify-between overflow-hidden`}>
                {/* Background Grid Pattern */}
                <div className="absolute inset-0 bg-[radial-gradient(#ffffff15_1px,transparent_1px)] [background-size:16px_16px] pointer-events-none" />

                {/* Top Controls: Badge & External Links */}
                <div className="flex items-center justify-between z-10">
                  <span className="px-3.5 py-1 rounded-full text-xs font-mono font-semibold bg-black/60 backdrop-blur-md text-cyan-300 border border-white/15 flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-cyan-400 animate-ping" />
                    {project.category}
                  </span>

                  <div className="flex items-center gap-2">
                    {project.liveUrl && (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={playClick}
                        className="p-2.5 rounded-full bg-black/50 hover:bg-black/80 text-white backdrop-blur-md transition-transform hover:scale-110 border border-white/15"
                        title="Live Demo"
                      >
                        <ExternalLink className="w-4 h-4" />
                      </a>
                    )}
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={playClick}
                      className="p-2.5 rounded-full bg-black/50 hover:bg-black/80 text-white backdrop-blur-md transition-transform hover:scale-110 border border-white/15"
                      title="Source Code"
                    >
                      <GithubIcon className="w-4 h-4" />
                    </a>
                  </div>
                </div>

                {/* Title & Subtitle Banner */}
                <div className="z-10 mt-auto space-y-1">
                  <h3 className="text-2xl sm:text-3xl font-extrabold text-white group-hover:text-cyan-300 transition-colors tracking-tight">
                    {project.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-200 line-clamp-1">{project.subtitle}</p>
                </div>

                {/* Ambient Glow Aura */}
                <div className="absolute -bottom-14 -right-14 w-52 h-52 bg-cyan-400/25 rounded-full blur-3xl group-hover:scale-150 transition-transform duration-700" />
              </div>

              {/* Product Details Body */}
              <div className="p-8 space-y-6 flex-1 flex flex-col justify-between bg-[#0b0f19]/90">
                <p className="text-sm text-slate-300 leading-relaxed">
                  {project.description}
                </p>

                {/* Architecture Highlights Preview */}
                <div className="space-y-2 pt-2 border-t border-white/10">
                  <span className="text-[11px] font-mono text-cyan-400 font-semibold uppercase tracking-wider block">
                    Core Innovations
                  </span>
                  <div className="space-y-2">
                    {project.highlights.slice(0, 2).map((h, i) => (
                      <div key={i} className="flex items-start gap-2.5 text-xs text-slate-300">
                        <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                        <span className="line-clamp-2">{h}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Stack Badges & CTA */}
                <div className="space-y-4 pt-2">
                  <div className="flex flex-wrap gap-1.5">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-2.5 py-1 rounded-lg bg-white/5 border border-white/10 text-[11px] text-slate-300 font-mono"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <button
                    onClick={() => {
                      playClick();
                      setActiveProjectModal(project);
                    }}
                    className="w-full py-3.5 rounded-2xl glass-card hover:bg-white/10 text-xs font-bold text-cyan-300 border border-cyan-500/30 flex items-center justify-center gap-2 transition-all group-hover:border-cyan-400 shadow-lg"
                  >
                    <span>Inspect System Architecture & Details</span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1.5 transition-transform" />
                  </button>
                </div>
              </div>
            </TiltCard>
          </motion.div>
        ))}
      </div>

      {/* Project System Architecture Modal */}
      <AnimatePresence>
        {activeProjectModal && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            data-lenis-prevent
            className="fixed inset-0 z-[9999] flex items-end justify-center p-2 sm:p-4 pb-2 sm:pb-3 pt-16 bg-black/90 backdrop-blur-xl"
            onClick={() => setActiveProjectModal(null)}
          >
            <motion.div
              initial={{ scale: 0.96, y: 50 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.96, y: 50 }}
              transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
              data-lenis-prevent
              onClick={(e) => e.stopPropagation()}
              className="w-full max-w-3xl rounded-3xl border border-white/20 overflow-hidden shadow-2xl bg-[#090d16] text-white max-h-[88vh] flex flex-col mt-auto mb-1 sm:mb-2"
            >
              {/* Modal Header (Fixed at top) */}
              <div className={`p-6 sm:p-8 bg-gradient-to-r ${activeProjectModal.gradient} flex items-center justify-between border-b border-white/10 shrink-0`}>
                <div className="space-y-1 pr-4">
                  <span className="text-xs font-mono text-cyan-300 font-semibold uppercase tracking-wider">
                    {activeProjectModal.category} Project
                  </span>
                  <h3 className="text-2xl font-extrabold text-white">{activeProjectModal.title}</h3>
                  <p className="text-xs text-slate-200">{activeProjectModal.subtitle}</p>
                </div>
                <button
                  onClick={() => setActiveProjectModal(null)}
                  className="p-2.5 rounded-full bg-black/40 hover:bg-black/70 text-white shrink-0 transition-colors"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Modal Body (Scrolls cleanly) */}
              <div className="p-6 sm:p-8 space-y-6 text-sm text-slate-300 flex-1 overflow-y-auto overscroll-contain">
                <div>
                  <h4 className="text-xs font-mono font-semibold uppercase text-cyan-400 tracking-wider mb-2">
                    System Architecture & Overview
                  </h4>
                  <p className="leading-relaxed text-slate-200">{activeProjectModal.fullDescription}</p>
                </div>

                {/* Highlights */}
                <div>
                  <h4 className="text-xs font-mono font-semibold uppercase text-cyan-400 tracking-wider mb-3">
                    Key Innovations
                  </h4>
                  <div className="space-y-2">
                    {activeProjectModal.highlights.map((h, i) => (
                      <div key={i} className="flex items-start gap-3 p-3 rounded-xl bg-white/[0.03] border border-white/5">
                        <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                        <span className="text-xs text-slate-200">{h}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Challenges & Impact */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="p-4 rounded-2xl bg-amber-500/10 border border-amber-500/20 space-y-2">
                    <div className="flex items-center gap-2 text-amber-400 font-semibold text-xs">
                      <AlertCircle className="w-4 h-4" />
                      <span>Technical Challenge</span>
                    </div>
                    <p className="text-xs text-slate-300 leading-relaxed">{activeProjectModal.challenges}</p>
                  </div>

                  <div className="p-4 rounded-2xl bg-emerald-500/10 border border-emerald-500/20 space-y-2">
                    <div className="flex items-center gap-2 text-emerald-400 font-semibold text-xs">
                      <Sparkles className="w-4 h-4" />
                      <span>Engineered Impact</span>
                    </div>
                    <p className="text-xs text-slate-300 leading-relaxed">{activeProjectModal.impact}</p>
                  </div>
                </div>

                {/* Architecture Layers */}
                <div>
                  <h4 className="text-xs font-mono font-semibold uppercase text-purple-400 tracking-wider mb-3">
                    Component Architecture
                  </h4>
                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                    {activeProjectModal.architecture.map((arch, i) => (
                      <div key={i} className="p-2.5 rounded-xl bg-white/[0.03] border border-white/10 text-xs font-mono text-cyan-300 flex items-center gap-2">
                        <Cpu className="w-3.5 h-3.5 text-purple-400 shrink-0" />
                        <span className="truncate">{arch}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Stack Badges */}
                <div className="pt-2 border-t border-white/10 flex items-center justify-between flex-wrap gap-4">
                  <div className="flex flex-wrap gap-2">
                    {activeProjectModal.tags.map((t) => (
                      <span key={t} className="px-3 py-1 rounded-xl bg-white/5 border border-white/10 text-xs text-slate-200 font-mono">
                        {t}
                      </span>
                    ))}
                  </div>

                  <div className="flex items-center gap-2">
                    {activeProjectModal.liveUrl && (
                      <a
                        href={activeProjectModal.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-4 py-2 rounded-full text-xs font-semibold text-white bg-cyan-600 hover:bg-cyan-500 flex items-center gap-1.5"
                      >
                        <ExternalLink className="w-3.5 h-3.5" /> Live
                      </a>
                    )}
                    <a
                      href={activeProjectModal.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-4 py-2 rounded-full text-xs font-semibold text-slate-200 glass-card hover:bg-white/10 border border-white/15 flex items-center gap-1.5"
                    >
                      <GithubIcon className="w-3.5 h-3.5" /> GitHub
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
