"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { 
  Code2, 
  Server, 
  Cloud, 
  Database, 
  Wrench,
  Sparkles, 
  Cpu
} from "lucide-react";
import { PORTFOLIO_DATA } from "@/constants/portfolio";
import { useSoundEffects } from "@/hooks/use-sound-effects";
import { TiltCard } from "@/components/ui/tilt-card";

export function SkillsSection() {
  const [activeTab, setActiveTab] = useState<number>(0);
  const { playClick } = useSoundEffects();

  const CATEGORY_ICONS = [Code2, Cloud, Server, Database, Wrench];

  return (
    <section id="skills" className="py-24 px-4 sm:px-6 lg:px-8 relative z-10 max-w-7xl mx-auto">
      {/* Section Header */}
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false, margin: "-60px" }}
        transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        className="text-center max-w-3xl mx-auto space-y-4 mb-16"
      >
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full glass-card border border-indigo-500/30 text-xs font-semibold text-indigo-400">
          <Sparkles className="w-3.5 h-3.5" />
          <span>INTERACTIVE MATRIX</span>
        </div>

        <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
          Skills, Tools &{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-cyan-300 to-purple-400">
            Core Competencies
          </span>
        </h2>

        <p className="text-slate-300 text-base sm:text-lg">
          Mastering modern web frameworks, distributed backend services, and DevOps infrastructure.
        </p>
      </motion.div>

      {/* Category Tabs */}
      <div className="flex items-center justify-center gap-3 mb-12 flex-wrap">
        {PORTFOLIO_DATA.skillCategories.map((category, index) => {
          const IconComp = CATEGORY_ICONS[index % CATEGORY_ICONS.length];
          const isActive = activeTab === index;
          return (
            <button
              key={category.title}
              onClick={() => {
                playClick();
                setActiveTab(index);
              }}
              className={`flex items-center gap-2.5 px-5 py-3 rounded-2xl text-xs sm:text-sm font-semibold transition-all ${
                isActive
                  ? "text-white bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 shadow-xl shadow-blue-500/20 border border-white/20 scale-105"
                  : "text-slate-400 glass-card hover:bg-white/10 border border-white/10 hover:text-white"
              }`}
            >
              <IconComp className={`w-4 h-4 ${isActive ? "text-cyan-300" : "text-slate-400"}`} />
              <span>{category.title}</span>
            </button>
          );
        })}
      </div>

      {/* Interactive Floating Skills Display Grid */}
      <motion.div
        key={activeTab}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
      >
        {PORTFOLIO_DATA.skillCategories[activeTab].skills.map((skill, idx) => (
          <motion.div
            key={skill.name}
            initial={{ opacity: 0, scale: 0.92, y: 25 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            viewport={{ once: false, margin: "-40px" }}
            transition={{ duration: 0.5, delay: idx * 0.05, ease: [0.16, 1, 0.3, 1] }}
          >
            <TiltCard 
              className="glass-card glass-card-hover p-6 rounded-3xl border border-white/15 relative overflow-hidden group flex flex-col justify-between h-full shadow-xl"
              glowColor="rgba(168, 85, 247, 0.15)"
              enableTilt={true}
              tiltAmount={10}
            >
              {/* Top Ambient Glow Orb */}
              <div className="absolute -top-10 -right-10 w-28 h-28 bg-cyan-500/10 rounded-full blur-2xl group-hover:bg-purple-500/20 transition-colors" />

              {/* Top Row: Skill Name + Popular Badge */}
              <div className="flex items-center justify-between mb-6 z-10">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-cyan-400 group-hover:scale-110 transition-transform">
                    <Cpu className="w-4 h-4" />
                  </div>
                  <span className="font-bold text-white text-base group-hover:text-cyan-300 transition-colors">
                    {skill.name}
                  </span>
                </div>
                {skill.popular && (
                  <span className="px-2 py-0.5 rounded-md bg-cyan-500/10 border border-cyan-500/30 text-[10px] font-mono text-cyan-400 font-semibold">
                    CORE
                  </span>
                )}
              </div>

              {/* Progress Meter Bar */}
              <div className="space-y-2.5 mt-2 z-10">
                <div className="flex justify-between items-center text-xs font-mono text-slate-400">
                  <span>PROFICIENCY</span>
                  <span className="text-cyan-400 font-bold">{skill.level}%</span>
                </div>
                <div className="h-2.5 w-full bg-white/5 rounded-full overflow-hidden p-0.5 border border-white/10">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: `${skill.level}%` }}
                    viewport={{ once: false }}
                    transition={{ duration: 0.8, delay: idx * 0.05 }}
                    className="h-full bg-gradient-to-r from-blue-500 via-cyan-400 to-purple-500 rounded-full shadow-[0_0_10px_#38bdf8]"
                  />
                </div>
              </div>
            </TiltCard>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
