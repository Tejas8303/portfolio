"use client";

import { motion } from "framer-motion";
import { Calendar, MapPin, CheckCircle2, Sparkles, Building2, Terminal } from "lucide-react";
import { PORTFOLIO_DATA } from "@/constants/portfolio";

export function ExperienceSection() {
  return (
    <section id="experience" className="py-24 px-4 sm:px-6 lg:px-8 relative z-10 max-w-7xl mx-auto">
      {/* Section Header */}
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false, margin: "-60px" }}
        transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        className="text-center max-w-3xl mx-auto space-y-4 mb-20"
      >
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full glass-card border border-purple-500/30 text-xs font-semibold text-purple-400">
          <Sparkles className="w-3.5 h-3.5" />
          <span>WORK EXPERIENCE</span>
        </div>

        <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
          Engineering Impact &{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-cyan-300 to-purple-400">
            Professional Journey
          </span>
        </h2>

        <p className="text-slate-300 text-base sm:text-lg">
          Hands-on software development in high-stakes financial technology and cloud platforms.
        </p>
      </motion.div>

      {/* Sticky Storytelling Experience Layout */}
      {PORTFOLIO_DATA.experience.map((exp) => (
        <div key={exp.id} className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start relative">
          
          {/* Sticky Left Sidebar Card */}
          <div className="lg:col-span-5 lg:sticky lg:top-28 z-20">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: false, margin: "-60px" }}
              transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
              className="glass-card glass-card-hover p-8 rounded-3xl border border-white/15 space-y-6 shadow-2xl overflow-hidden group relative"
            >
              {/* Background Accent Glow */}
              <div className="absolute -top-10 -left-10 w-48 h-48 bg-purple-500/20 rounded-full blur-3xl group-hover:scale-125 transition-transform" />

              <div className="flex items-center justify-between">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-blue-600 to-purple-600 border border-white/20 flex items-center justify-center text-white font-bold text-xl shadow-xl shrink-0">
                  {exp.logo}
                </div>

                <span className="px-3 py-1 rounded-full text-xs font-mono font-medium bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                  {exp.type}
                </span>
              </div>

              <div className="space-y-2">
                <h3 className="text-2xl font-bold text-white tracking-tight">{exp.role}</h3>
                <div className="flex items-center gap-2 text-cyan-300 font-semibold text-sm">
                  <Building2 className="w-4 h-4" />
                  <span>{exp.company}</span>
                </div>
              </div>

              <div className="space-y-2 pt-2 border-t border-white/10 text-xs text-slate-400">
                <div className="flex items-center gap-2">
                  <Calendar className="w-4 h-4 text-purple-400 shrink-0" />
                  <span>{exp.period}</span>
                </div>
                <div className="flex items-center gap-2">
                  <MapPin className="w-4 h-4 text-cyan-400 shrink-0" />
                  <span>{exp.location}</span>
                </div>
              </div>

              {/* Storytelling Progress Indicator */}
              <div className="pt-4 border-t border-white/10 flex items-center gap-2 text-[11px] font-mono text-slate-400">
                <Terminal className="w-3.5 h-3.5 text-cyan-400" />
                <span>Scroll right cards for breakdown</span>
              </div>
            </motion.div>
          </div>

          {/* Right Column: Step-by-Step Storytelling Cards */}
          <div className="lg:col-span-7 space-y-8">
            
            {/* Story Step 1: Role Overview & Mission */}
            <motion.div
              initial={{ opacity: 0, y: 35, scale: 0.96 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: false, margin: "-60px" }}
              transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
              className="glass-card p-6 sm:p-8 rounded-3xl border border-white/15 space-y-4 shadow-xl relative overflow-hidden"
            >
              <div className="flex items-center justify-between">
                <span className="text-xs font-mono font-semibold uppercase text-cyan-400 tracking-wider">
                  01 // Mission & Scope
                </span>
                <span className="px-2.5 py-0.5 rounded-full text-[10px] font-mono bg-cyan-500/10 border border-cyan-500/30 text-cyan-300">
                  OVERVIEW
                </span>
              </div>
              
              <h4 className="text-xl font-bold text-white">DevOps & Infrastructure Automation</h4>
              
              <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                {exp.description}
              </p>
            </motion.div>

            {/* Story Step 2: Technical Accomplishments */}
            <motion.div
              initial={{ opacity: 0, y: 35, scale: 0.96 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: false, margin: "-60px" }}
              transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
              className="glass-card p-6 sm:p-8 rounded-3xl border border-white/15 space-y-6 shadow-xl"
            >
              <div className="flex items-center justify-between">
                <span className="text-xs font-mono font-semibold uppercase text-purple-400 tracking-wider">
                  02 // Key Technical Accomplishments
                </span>
                <span className="px-2.5 py-0.5 rounded-full text-[10px] font-mono bg-purple-500/10 border border-purple-500/30 text-purple-300">
                  IMPACT
                </span>
              </div>

              <div className="space-y-4">
                {exp.achievements.map((ach, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: false, margin: "-40px" }}
                    transition={{ duration: 0.4, delay: idx * 0.08 }}
                    className="flex items-start gap-3.5 p-4 rounded-2xl bg-white/[0.02] hover:bg-white/[0.05] border border-white/5 transition-all group"
                  >
                    <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5 group-hover:scale-110 transition-transform" />
                    <span className="text-xs sm:text-sm text-slate-200 leading-relaxed">{ach}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Story Step 3: Tech Stack & Tools Applied */}
            <motion.div
              initial={{ opacity: 0, y: 35, scale: 0.96 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: false, margin: "-60px" }}
              transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
              className="glass-card p-6 sm:p-8 rounded-3xl border border-white/15 space-y-4 shadow-xl"
            >
              <div className="flex items-center justify-between">
                <span className="text-xs font-mono font-semibold uppercase text-slate-400 tracking-wider">
                  03 // Stack & Tooling Mastery
                </span>
                <span className="px-2.5 py-0.5 rounded-full text-[10px] font-mono bg-emerald-500/10 border border-emerald-500/30 text-emerald-400">
                  TECH STACK
                </span>
              </div>

              <div className="flex flex-wrap gap-2 pt-2">
                {exp.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-3.5 py-1.5 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 hover:border-cyan-500/40 text-xs text-slate-200 hover:text-cyan-300 font-mono transition-all hover:scale-105"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>

          </div>

        </div>
      ))}
    </section>
  );
}
