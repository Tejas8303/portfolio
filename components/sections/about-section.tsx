"use client";

import { motion } from "framer-motion";
import { 
  GraduationCap, 
  Briefcase, 
  Cloud, 
  Trophy, 
  Sparkles,
  CheckCircle2
} from "lucide-react";
import { TiltCard } from "@/components/ui/tilt-card";

export function AboutSection() {
  return (
    <section id="about" className="py-24 px-4 sm:px-6 lg:px-8 relative z-10 max-w-7xl mx-auto">
      {/* Section Header */}
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false, margin: "-60px" }}
        transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        className="text-center max-w-3xl mx-auto space-y-4 mb-16"
      >
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full glass-card border border-blue-500/30 text-xs font-semibold text-cyan-400">
          <Sparkles className="w-3.5 h-3.5" />
          <span>ABOUT ME</span>
        </div>

        <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
          Architecting High-Performance{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-cyan-300 to-purple-400">
            Digital Systems
          </span>
        </h2>

        <p className="text-slate-300 text-base sm:text-lg leading-relaxed">
          I bridge theoretical Maths and computer science from IIT Patna with real-world fintech engineering at Vivriti Capital. Here is a snapshot of my foundation and expertise.
        </p>
      </motion.div>

      {/* Bento Grid Layout */}
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6">
        
        {/* Card 1: IIT Patna (Span 2 Cols) */}
        <motion.div
          initial={{ opacity: 0, y: 35, scale: 0.96 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: false, margin: "-60px" }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="md:col-span-2"
        >
          <TiltCard className="h-full glass-card glass-card-hover p-6 sm:p-8 rounded-3xl border border-white/15 shadow-xl">
            <div className="absolute top-0 right-0 w-48 h-48 bg-blue-500/10 rounded-full blur-3xl group-hover:bg-blue-500/20 transition-colors" />

            <div className="flex items-center justify-between mb-6">
              <div className="w-12 h-12 rounded-2xl bg-blue-500/10 border border-blue-500/30 flex items-center justify-center text-blue-400 group-hover:scale-110 transition-transform">
                <GraduationCap className="w-6 h-6" />
              </div>
              <span className="text-xs font-mono px-3 py-1 rounded-full bg-white/5 border border-white/10 text-cyan-300">
                Nov 2022 – May 2026
              </span>
            </div>

            <h3 className="text-xl sm:text-2xl font-bold text-white mb-2">
              IIT Patna — B.S. Mathematics & Computing
            </h3>
            <p className="text-slate-300 text-sm mb-4 leading-relaxed">
              Rigorous training in Data Structures, Advanced Algorithms, Computer Networks, Operating Systems, Linear Algebra, Stochastics, and Computer Architecture.
            </p>

            <div className="flex flex-wrap gap-2 pt-2">
              <span className="px-2.5 py-1 rounded-lg bg-blue-500/10 border border-blue-500/20 text-xs text-blue-300">
                Data Structures & Algorithms
              </span>
              <span className="px-2.5 py-1 rounded-lg bg-purple-500/10 border border-purple-500/20 text-xs text-purple-300">
                Operating Systems & DBMS
              </span>
              <span className="px-2.5 py-1 rounded-lg bg-cyan-500/10 border border-cyan-500/20 text-xs text-cyan-300">
                Computer Architecture
              </span>
            </div>
          </TiltCard>
        </motion.div>

        {/* Card 2: SDE Intern Vivriti Capital */}
        <motion.div
          initial={{ opacity: 0, y: 35, scale: 0.96 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: false, margin: "-60px" }}
          transition={{ duration: 0.7, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          className="md:col-span-1 lg:col-span-2"
        >
          <TiltCard className="h-full glass-card glass-card-hover p-6 sm:p-8 rounded-3xl border border-white/15 shadow-xl" glowColor="rgba(168, 85, 247, 0.15)">
            <div className="absolute top-0 right-0 w-48 h-48 bg-purple-500/10 rounded-full blur-3xl group-hover:bg-purple-500/20 transition-colors" />

            <div className="flex items-center justify-between mb-6">
              <div className="w-12 h-12 rounded-2xl bg-purple-500/10 border border-purple-500/30 flex items-center justify-center text-purple-400 group-hover:scale-110 transition-transform">
                <Briefcase className="w-6 h-6" />
              </div>
              <span className="text-xs font-mono px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400">
                SDE Intern
              </span>
            </div>

            <h3 className="text-xl sm:text-2xl font-bold text-white mb-2">
              Vivriti Capital — SDE Intern
            </h3>
            <p className="text-slate-300 text-sm mb-4 leading-relaxed">
               Engineered automated CI/CD workflows, provisioned cloud infrastructure following Infrastructure as Code (IaC) principles, managed containerized microservices on Kubernetes, and optimized code quality and security checks.
            </p>

            <div className="flex flex-wrap gap-2 pt-2">
              <span className="px-2.5 py-1 rounded-lg bg-emerald-500/10 border border-emerald-500/20 text-xs text-emerald-300">
                CI/CD Automation (-45% deploy cycle)
              </span>
              <span className="px-2.5 py-1 rounded-lg bg-cyan-500/10 border border-cyan-500/20 text-xs text-cyan-300">
                REST Latency (-35%)
              </span>
            </div>
          </TiltCard>
        </motion.div>

        {/* Card 3: Cloud & Backend Stack */}
        <motion.div
          initial={{ opacity: 0, y: 35, scale: 0.96 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: false, margin: "-60px" }}
          transition={{ duration: 0.7, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
          className="md:col-span-2"
        >
          <TiltCard className="h-full glass-card glass-card-hover p-6 sm:p-8 rounded-3xl border border-white/15 shadow-xl">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-xl bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center text-cyan-400">
                <Cloud className="w-5 h-5" />
              </div>
              <h4 className="text-lg font-bold text-white">Cloud & Infrastructure</h4>
            </div>

            <p className="text-slate-300 text-sm mb-4">
              Docker, Kubernetes, AWS (EC2, S3), GitHub Actions, Linux administration, and Redis caching.
            </p>

            <div className="grid grid-cols-2 gap-3">
              <div className="flex items-center gap-2 text-xs text-slate-300">
                <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0" />
                <span>Containerized Microservices</span>
              </div>
              <div className="flex items-center gap-2 text-xs text-slate-300">
                <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0" />
                <span>Automated GitHub Actions</span>
              </div>
              <div className="flex items-center gap-2 text-xs text-slate-300">
                <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0" />
                <span>AWS EC2 & S3 Cloud Deploy</span>
              </div>
              <div className="flex items-center gap-2 text-xs text-slate-300">
                <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0" />
                <span>MongoDB Aggregations</span>
              </div>
            </div>
          </TiltCard>
        </motion.div>

        {/* Card 4: Algorithmic Rating & Problem Solver */}
        <motion.div
          initial={{ opacity: 0, y: 35, scale: 0.96 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: false, margin: "-60px" }}
          transition={{ duration: 0.7, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="md:col-span-1 lg:col-span-2"
        >
          <TiltCard className="h-full glass-card glass-card-hover p-6 sm:p-8 rounded-3xl border border-white/15 shadow-xl" glowColor="rgba(245, 158, 11, 0.15)">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-xl bg-amber-500/10 border border-amber-500/30 flex items-center justify-center text-amber-400">
                <Trophy className="w-5 h-5" />
              </div>
              <h4 className="text-lg font-bold text-white">Algorithmic Competitive Excellence</h4>
            </div>

            <div className="flex items-center justify-between py-2 border-b border-white/10">
              <span className="text-slate-300 text-sm">Codeforces Peak Rating</span>
              <span className="text-lg font-bold font-mono text-cyan-400">1638 (Specialist)</span>
            </div>

            <div className="flex items-center justify-between py-2">
              <span className="text-slate-300 text-sm">DSA Problems Solved</span>
              <span className="text-lg font-bold font-mono text-purple-400">400+ Problems</span>
            </div>
          </TiltCard>
        </motion.div>

      </div>
    </section>
  );
}
