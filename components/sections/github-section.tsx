"use client";

import { motion } from "framer-motion";
import { GitCommit, FolderGit2, GitFork, Sparkles, ExternalLink } from "lucide-react";
import { GithubIcon } from "@/components/ui/icons";
import { PORTFOLIO_DATA } from "@/constants/portfolio";
import { useSoundEffects } from "@/hooks/use-sound-effects";
import { TiltCard } from "@/components/ui/tilt-card";

export function GithubSection() {
  const { playClick } = useSoundEffects();
  const { githubStats } = PORTFOLIO_DATA;

  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 relative z-10 max-w-7xl mx-auto">
      {/* Section Header */}
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false, margin: "-60px" }}
        transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        className="text-center max-w-3xl mx-auto space-y-4 mb-16"
      >
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full glass-card border border-emerald-500/30 text-xs font-semibold text-emerald-400">
          <Sparkles className="w-3.5 h-3.5" />
          <span>OPEN SOURCE & CODE ACTIVITY</span>
        </div>

        <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
          GitHub Profile &{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-cyan-300 to-purple-400">
            Development Cadence
          </span>
        </h2>

        <p className="text-slate-300 text-base sm:text-lg">
          Continuous commitment to writing clean code, building full-stack repositories, and open source contributions.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        
        {/* Left Card: Stats Overview */}
        <motion.div
          initial={{ opacity: 0, x: -30, scale: 0.96 }}
          whileInView={{ opacity: 1, x: 0, scale: 1 }}
          viewport={{ once: false, margin: "-60px" }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="lg:col-span-5"
        >
          <TiltCard className="glass-card p-8 rounded-3xl border border-white/15 space-y-6 flex flex-col justify-between h-full shadow-xl">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-2xl bg-white/10 border border-white/20 flex items-center justify-center text-white">
                  <GithubIcon className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white">@{githubStats.username}</h3>
                  <p className="text-xs text-slate-400">GitHub Developer Profile</p>
                </div>
              </div>

              <a
                href={`https://github.com/${githubStats.username}`}
                target="_blank"
                rel="noopener noreferrer"
                onClick={playClick}
                className="p-2.5 rounded-full glass-card hover:bg-white/10 text-cyan-400 hover:text-white transition-colors border border-white/15"
              >
                <ExternalLink className="w-4 h-4" />
              </a>
            </div>

            {/* Metrics Grid */}
            <div className="grid grid-cols-2 gap-4">
              <div className="p-4 rounded-2xl bg-white/[0.02] border border-white/5 space-y-1">
                <div className="flex items-center gap-2 text-cyan-400 text-xs font-semibold">
                  <GitCommit className="w-4 h-4" /> Total Commits
                </div>
                <div className="text-2xl font-extrabold text-white font-mono">{githubStats.totalCommits}+</div>
              </div>

              <div className="p-4 rounded-2xl bg-white/[0.02] border border-white/5 space-y-1">
                <div className="flex items-center gap-2 text-purple-400 text-xs font-semibold">
                  <FolderGit2 className="w-4 h-4" /> Public Repos
                </div>
                <div className="text-2xl font-extrabold text-white font-mono">{githubStats.publicRepos}+</div>
              </div>
            </div>

            {/* Development status pill */}
            <div className="p-4 rounded-2xl bg-gradient-to-r from-blue-600/20 via-cyan-500/10 to-purple-600/20 border border-cyan-500/30 text-xs text-slate-200 flex items-center justify-between">
              <span>Codebase Activity</span>
              <span className="font-bold text-cyan-300 font-mono text-[11px]">{githubStats.activeStatus}</span>
            </div>
          </TiltCard>
        </motion.div>

        {/* Right Card: Language Breakdown & Repositories */}
        <motion.div
          initial={{ opacity: 0, x: 30, scale: 0.96 }}
          whileInView={{ opacity: 1, x: 0, scale: 1 }}
          viewport={{ once: false, margin: "-60px" }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="lg:col-span-7"
        >
          <TiltCard className="glass-card p-8 rounded-3xl border border-white/15 space-y-6 shadow-xl h-full">
            <h4 className="text-sm font-mono font-semibold uppercase text-cyan-400 tracking-wider">
              Most Frequently Used Languages
            </h4>

            {/* Stacked Multi-color Bar */}
            <div className="h-4 w-full rounded-full overflow-hidden flex p-0.5 bg-white/5 border border-white/10">
              {githubStats.topLanguages.map((lang) => (
                <div
                  key={lang.name}
                  style={{ width: `${lang.percentage}%`, backgroundColor: lang.color }}
                  className="h-full first:rounded-l-full last:rounded-r-full"
                  title={`${lang.name}: ${lang.percentage}%`}
                />
              ))}
            </div>

            {/* Legend Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 pt-2">
              {githubStats.topLanguages.map((lang) => (
                <div key={lang.name} className="flex items-center gap-2 text-xs text-slate-300">
                  <span className="w-3 h-3 rounded-full shrink-0" style={{ backgroundColor: lang.color }} />
                  <span className="font-semibold">{lang.name}</span>
                  <span className="text-slate-400 font-mono text-[11px] ml-auto">{lang.percentage}%</span>
                </div>
              ))}
            </div>

            <hr className="border-white/10" />

            {/* Pinned Repositories List */}
            <div>
              <h4 className="text-xs font-mono font-semibold uppercase text-slate-400 tracking-wider mb-3">
                Pinned Project Repositories
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {PORTFOLIO_DATA.projects.map((p) => (
                  <a
                    key={p.id}
                    href={p.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={playClick}
                    className="p-3.5 rounded-2xl bg-white/[0.02] hover:bg-white/10 border border-white/10 transition-all flex items-center justify-between group"
                  >
                    <div className="space-y-0.5">
                      <div className="text-xs font-bold text-white group-hover:text-cyan-300 flex items-center gap-1.5">
                        <GitFork className="w-3.5 h-3.5 text-cyan-400" />
                        <span>{p.title}</span>
                      </div>
                      <div className="text-[11px] text-slate-400 line-clamp-1">{p.subtitle}</div>
                    </div>
                    <ExternalLink className="w-3.5 h-3.5 text-slate-400 group-hover:text-white shrink-0" />
                  </a>
                ))}
              </div>
            </div>
          </TiltCard>
        </motion.div>

      </div>
    </section>
  );
}
