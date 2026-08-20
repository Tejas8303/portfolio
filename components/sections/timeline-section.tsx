"use client";

import { motion } from "framer-motion";
import { GraduationCap, Briefcase, Code2, Sparkles } from "lucide-react";

export function TimelineSection() {
  const TIMELINE_EVENTS = [
    {
      year: "Jan 2026 – July 2026",
      title: "Software Engineering Intern",
      organization: "Vivriti Capital",
      description: "Building CI/CD pipelines (GitHub Actions, Jenkins, Azure), managing Kubernetes/EKS deployments, and provisioning AWS via IaC (Terraform).",
      icon: Briefcase,
      color: "border-purple-500 text-purple-400 bg-purple-500/10 shadow-[0_0_15px_rgba(168,85,247,0.3)]",
    },
    {
      year: "2026",
      title: "Enterprise-Grade Recruitment Platform",
      organization: "Full Stack Project",
      description: "Designed role-based candidate matching portal, high-speed document storage layer with Multer, and single-command Docker Compose setup.",
      icon: Code2,
      color: "border-cyan-500 text-cyan-400 bg-cyan-500/10 shadow-[0_0_15px_rgba(56,189,248,0.3)]",
    },
    {
      year: "2024 – 2026",
      title: "Codeforces Specialist (1638 Max Rating)",
      organization: "Competitive Programming",
      description: "Achieved Specialist rank, 1151st rank globally in Global Round 30, 1216th rank in Round 934, and solved 400+ problems across platforms.",
      icon: Sparkles,
      color: "border-amber-500 text-amber-400 bg-amber-500/10 shadow-[0_0_15px_rgba(245,158,11,0.3)]",
    },
    {
      year: "Nov 2022 – May 2026",
      title: "B.S. in Mathematics and Computing",
      organization: "IIT Patna",
      description: "Specialized in Data Structures, Algorithms, Computer Networks, Operating Systems, DBMS, Numerical Linear Algebra, and Stochastics.",
      icon: GraduationCap,
      color: "border-blue-500 text-blue-400 bg-blue-500/10 shadow-[0_0_15px_rgba(59,130,246,0.3)]",
    },
  ];

  return (
    <section id="timeline" className="py-24 px-4 sm:px-6 lg:px-8 relative z-10 max-w-5xl mx-auto">
      {/* Section Header */}
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false, margin: "-60px" }}
        transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        className="text-center max-w-3xl mx-auto space-y-4 mb-20"
      >
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full glass-card border border-blue-500/30 text-xs font-semibold text-cyan-400">
          <Sparkles className="w-3.5 h-3.5" />
          <span>CHRONOLOGY</span>
        </div>

        <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
          Journey & Key{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-cyan-300 to-purple-400">
            Milestones
          </span>
        </h2>

        <p className="text-slate-300 text-base sm:text-lg">
          Chronological progress through academics, software engineering internships, and system architecture builds.
        </p>
      </motion.div>

      {/* Vertical Animated Timeline Track */}
      <div className="relative pl-6 sm:pl-10 border-l-2 border-white/15 space-y-14">
        {TIMELINE_EVENTS.map((event, idx) => {
          const IconComp = event.icon;
          return (
            <motion.div
              key={idx}
              initial={{ opacity: 0, x: -35, scale: 0.95 }}
              whileInView={{ opacity: 1, x: 0, scale: 1 }}
              viewport={{ once: false, margin: "-60px" }}
              transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              className="relative"
            >
              {/* Timeline Glowing Node Dot */}
              <div className={`absolute -left-[38px] sm:-left-[51px] top-1 w-10 h-10 rounded-full border-2 ${event.color} flex items-center justify-center backdrop-blur-md transition-transform hover:scale-125 z-10`}>
                <IconComp className="w-4 h-4" />
              </div>

              {/* Card Container */}
              <motion.div
                whileHover={{ x: 8, transition: { duration: 0.2 } }}
                className="glass-card glass-card-hover p-6 sm:p-8 rounded-3xl border border-white/15 space-y-3 shadow-2xl group hover:border-cyan-400/50 transition-all relative overflow-hidden"
              >
                {/* Ambient Top Corner Glow */}
                <div className="absolute -top-10 -right-10 w-32 h-32 bg-cyan-500/10 rounded-full blur-2xl group-hover:bg-cyan-500/20 transition-colors" />

                <div className="flex items-center justify-between flex-wrap gap-2 z-10 relative">
                  <span className="px-3.5 py-1 rounded-full text-xs font-mono font-semibold bg-white/5 border border-white/10 text-cyan-300">
                    {event.year}
                  </span>
                  <span className="text-xs font-semibold text-slate-400">{event.organization}</span>
                </div>

                <h3 className="text-xl sm:text-2xl font-bold text-white group-hover:text-cyan-300 transition-colors z-10 relative">
                  {event.title}
                </h3>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed z-10 relative">
                  {event.description}
                </p>
              </motion.div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
