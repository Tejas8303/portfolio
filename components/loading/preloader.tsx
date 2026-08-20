"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Code2, Sparkles } from "lucide-react";

export function Preloader() {
  const [loading, setLoading] = useState(true);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(timer);
          setTimeout(() => setLoading(false), 500);
          return 100;
        }
        const diff = Math.floor(Math.random() * 18) + 10;
        return Math.min(prev + diff, 100);
      });
    }, 80);

    return () => clearInterval(timer);
  }, []);

  return (
    <AnimatePresence mode="wait">
      {loading && (
        <motion.div
          key="preloader"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, scale: 1.04, filter: "blur(16px)" }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="fixed inset-0 z-[99999] flex flex-col items-center justify-center bg-[#030712] text-white select-none overflow-hidden"
        >
          {/* Ambient Glowing Aura */}
          <div className="absolute w-[500px] h-[500px] bg-gradient-to-tr from-blue-600/25 via-purple-600/25 to-cyan-400/25 rounded-full blur-[120px] animate-pulse-glow" />

          {/* Animated Main Logo Container */}
          <motion.div
            initial={{ scale: 0.85, opacity: 0, y: 15 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="relative z-10 flex flex-col items-center gap-6"
          >
            {/* Hexagon/Shield Logo Glass Wrapper */}
            <div className="relative flex items-center justify-center w-24 h-24 rounded-3xl bg-gradient-to-tr from-blue-500/20 via-cyan-500/20 to-purple-500/20 border border-white/20 glass-card shadow-[0_0_50px_rgba(56,189,248,0.3)]">
              <Code2 className="w-12 h-12 text-cyan-300" />
              <Sparkles className="absolute -top-3 -right-3 w-6 h-6 text-purple-400 animate-spin" style={{ animationDuration: "6s" }} />
            </div>

            {/* Premium Typography */}
            <div className="text-center space-y-1">
              <motion.h1 
                initial={{ y: 10, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.1, duration: 0.5 }}
                className="text-3xl font-extrabold tracking-tight bg-gradient-to-r from-white via-slate-100 to-slate-400 bg-clip-text text-transparent font-mono"
              >
                TEJAS KUMAR
              </motion.h1>
              <p className="text-xs tracking-[0.25em] text-cyan-400/90 uppercase font-mono">
                Software Engineer • IIT Patna
              </p>
            </div>

            {/* Sleek Progress Line & Status */}
            <div className="w-72 space-y-2 mt-6">
              <div className="flex justify-between items-center text-[11px] font-mono text-slate-400">
                <span className="flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping" />
                  <span>INITIALIZING EXPERIENCE</span>
                </span>
                <span className="text-cyan-400 font-bold">{progress}%</span>
              </div>
              
              <div className="h-1.5 w-full bg-white/5 rounded-full overflow-hidden p-0.5 border border-white/10 shadow-inner">
                <motion.div
                  className="h-full bg-gradient-to-r from-blue-500 via-cyan-400 to-purple-500 rounded-full"
                  style={{ width: `${progress}%` }}
                  transition={{ ease: "easeOut", duration: 0.2 }}
                />
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
