"use client";

import { ArrowUp, Code2, Mail, Heart } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/ui/icons";
import { PORTFOLIO_DATA } from "@/constants/portfolio";
import { useSoundEffects } from "@/hooks/use-sound-effects";

export function FooterSection() {
  const { playClick } = useSoundEffects();

  const scrollToTop = () => {
    playClick();
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative z-10 border-t border-white/10 bg-[#030712]/90 backdrop-blur-md pt-16 pb-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8">
        
        {/* Left: Brand & Tagline */}
        <div className="space-y-2 text-center md:text-left">
          <div className="flex items-center justify-center md:justify-start gap-2.5">
            <div className="flex items-center justify-center w-7 h-7 rounded-lg bg-gradient-to-br from-blue-500 to-purple-600 text-white font-bold text-xs shadow-md">
              <Code2 className="w-4 h-4" />
            </div>
            <span className="text-base font-bold text-white tracking-tight">
              Tejas Kumar <span className="text-cyan-400">Portfolio</span>
            </span>
          </div>
          <p className="text-xs text-slate-400 max-w-sm">
            Designed & Engineered with Next.js 16, React, TypeScript & Tailwind CSS. IIT Patna Mathematics & Computing.
          </p>
        </div>

        {/* Center: Social Links */}
        <div className="flex items-center gap-3">
          <a
            href={PORTFOLIO_DATA.personal.github}
            target="_blank"
            rel="noopener noreferrer"
            onClick={playClick}
            data-cursor="GITHUB"
            className="p-3 rounded-full glass-card hover:bg-white/10 border border-white/15 text-slate-300 hover:text-white transition-colors"
            title="GitHub"
          >
            <GithubIcon className="w-4 h-4" />
          </a>
          <a
            href={PORTFOLIO_DATA.personal.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            onClick={playClick}
            data-cursor="LINKEDIN"
            className="p-3 rounded-full glass-card hover:bg-white/10 border border-white/15 text-slate-300 hover:text-white transition-colors"
            title="LinkedIn"
          >
            <LinkedinIcon className="w-4 h-4" />
          </a>
          <a
            href={`mailto:${PORTFOLIO_DATA.personal.email}`}
            onClick={playClick}
            data-cursor="EMAIL"
            className="p-3 rounded-full glass-card hover:bg-white/10 border border-white/15 text-slate-300 hover:text-white transition-colors"
            title="Email"
          >
            <Mail className="w-4 h-4" />
          </a>
        </div>

        {/* Right: Back To Top Button */}
        <button
          onClick={scrollToTop}
          data-cursor="TOP"
          className="flex items-center gap-2 px-4 py-2.5 rounded-full glass-card hover:bg-white/10 border border-white/15 text-xs font-semibold text-slate-300 hover:text-white transition-all hover:scale-105"
        >
          <span>Back to top</span>
          <ArrowUp className="w-3.5 h-3.5 text-cyan-400" />
        </button>

      </div>

      {/* Bottom Copyright */}
      <div className="max-w-7xl mx-auto mt-12 pt-6 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-slate-400">
        <div>© {new Date().getFullYear()} Tejas Kumar. All rights reserved.</div>
        <div className="flex items-center gap-1">
          <span>Crafted with</span>
          <Heart className="w-3 h-3 text-red-500 fill-red-500 inline" />
          <span>for high-performance software.</span>
        </div>
      </div>
    </footer>
  );
}
