"use client";

import React, { useEffect, useState, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Code2, Trophy, GraduationCap, Briefcase, Sparkles, ExternalLink } from "lucide-react";
import { PORTFOLIO_DATA } from "@/constants/portfolio";
import { useSoundEffects } from "@/hooks/use-sound-effects";
import { TiltCard } from "@/components/ui/tilt-card";

function CountUpStat({ value }: { value: string }) {
  const [display, setDisplay] = useState(value);
  const ref = useRef<HTMLSpanElement | null>(null);
  const isInView = useInView(ref, { once: true, margin: "-40px" });

  useEffect(() => {
    if (!isInView) return;

    const match = value.match(/(\d+(?:\.\d+)?)/);
    if (!match) return;

    const rawNumStr = match[1];
    const targetNum = parseFloat(rawNumStr);
    const hasDecimal = rawNumStr.includes(".");
    const decimalPlaces = hasDecimal ? rawNumStr.split(".")[1].length : 0;

    const numIndex = value.indexOf(rawNumStr);
    const prefix = value.substring(0, numIndex);
    const suffix = value.substring(numIndex + rawNumStr.length);

    let current = 0;
    const duration = 1200;
    const steps = 40;
    const stepTime = duration / steps;
    const increment = targetNum / steps;

    const timer = setInterval(() => {
      current += increment;
      if (current >= targetNum) {
        setDisplay(`${prefix}${targetNum.toFixed(decimalPlaces)}${suffix}`);
        clearInterval(timer);
      } else {
        setDisplay(`${prefix}${current.toFixed(decimalPlaces)}${suffix}`);
      }
    }, stepTime);

    return () => clearInterval(timer);
  }, [isInView, value]);

  return <span ref={ref}>{display}</span>;
}

export function AchievementsSection() {
  const { playClick } = useSoundEffects();

  const ICONS_MAP: Record<string, React.ComponentType<{ className?: string }>> = {
    Code2,
    Trophy,
    GraduationCap,
    Briefcase,
  };

  return (
    <section id="stats" className="py-24 px-4 sm:px-6 lg:px-8 relative z-10 max-w-7xl mx-auto">
      {/* Section Header */}
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false, margin: "-60px" }}
        transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        className="text-center max-w-3xl mx-auto space-y-4 mb-16"
      >
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full glass-card border border-amber-500/30 text-xs font-semibold text-amber-400">
          <Sparkles className="w-3.5 h-3.5" />
          <span>MILESTONES & RECOGNITION</span>
        </div>

        <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
          Quantifiable Achievements &{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-cyan-300 to-purple-400">
            Competitive Edge
          </span>
        </h2>

        <p className="text-slate-300 text-base sm:text-lg">
          Proven problem solving capacity combined with academic rigor from IIT Patna.
        </p>
      </motion.div>

      {/* Grid of Achievement Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {PORTFOLIO_DATA.achievements.map((item, idx) => {
          const IconComp = ICONS_MAP[item.icon] || Trophy;
          return (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, scale: 0.92, y: 30 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              viewport={{ once: false, margin: "-50px" }}
              transition={{ duration: 0.6, delay: idx * 0.08, ease: [0.16, 1, 0.3, 1] }}
            >
              <TiltCard 
                className="glass-card glass-card-hover p-8 rounded-3xl border border-white/15 h-full flex flex-col justify-between shadow-2xl group relative overflow-hidden" 
                glowColor="rgba(245, 158, 11, 0.2)"
              >
                {/* Ambient Hover Backdrop Glow */}
                <div className="absolute -top-12 -right-12 w-40 h-40 bg-cyan-500/10 rounded-full blur-2xl group-hover:bg-amber-500/20 transition-colors" />

                {/* Header Icon */}
                <div className="flex items-center justify-between mb-6 z-10">
                  <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${item.color} p-0.5 shadow-xl`}>
                    <div className="w-full h-full rounded-[14px] bg-[#030712] flex items-center justify-center text-white">
                      <IconComp className="w-7 h-7 text-cyan-400 group-hover:scale-110 transition-transform" />
                    </div>
                  </div>

                  {item.link && (
                    <a
                      href={item.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={playClick}
                      className="p-2.5 rounded-full glass-card hover:bg-white/10 text-slate-400 hover:text-white transition-transform hover:scale-110 border border-white/15"
                      title="View Profile"
                    >
                      <ExternalLink className="w-4 h-4" />
                    </a>
                  )}
                </div>

                {/* Stat Counter Number */}
                <div className="space-y-1 z-10">
                  <div className="text-4xl sm:text-5xl font-extrabold text-white font-mono tracking-tight group-hover:text-cyan-300 transition-colors">
                    <CountUpStat value={item.stat} />
                  </div>
                  <div className="text-base font-bold text-slate-200">{item.title}</div>
                  <p className="text-xs text-slate-400 leading-relaxed">{item.subtext}</p>
                </div>

                {/* Bottom Glow Bar */}
                <div className={`h-1.5 w-full bg-gradient-to-r ${item.color} rounded-full mt-6 opacity-40 group-hover:opacity-100 transition-opacity z-10 shadow-[0_0_12px_rgba(245,158,11,0.4)]`} />
              </TiltCard>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
