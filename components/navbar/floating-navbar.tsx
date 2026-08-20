"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Code2, 
  Search, 
  Terminal as TerminalIcon, 
  Menu, 
  X, 
  FileDown, 
  Sparkles 
} from "lucide-react";
import { PORTFOLIO_DATA } from "@/constants/portfolio";
import { useSoundEffects } from "@/hooks/use-sound-effects";

interface FloatingNavbarProps {
  onOpenCommand: () => void;
  onOpenTerminal: () => void;
}

const NAV_LINKS = [
  { name: "About", href: "#about" },
  { name: "Experience", href: "#experience" },
  { name: "Projects", href: "#projects" },
  { name: "Skills", href: "#skills" },
  { name: "Stats", href: "#stats" },
  { name: "Timeline", href: "#timeline" },
  { name: "Contact", href: "#contact" },
];

export function FloatingNavbar({ onOpenCommand, onOpenTerminal }: FloatingNavbarProps) {
  const [activeSection, setActiveSection] = useState("");
  const [scrolled, setScrolled] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { playClick } = useSoundEffects();

  useEffect(() => {
    let ticking = false;

    const handleScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          const totalScroll = document.documentElement.scrollHeight - window.innerHeight;
          const currentScroll = window.scrollY;
          setScrollProgress(totalScroll > 0 ? (currentScroll / totalScroll) * 100 : 0);

          setScrolled(currentScroll > 50);

          // Section spy
          const sections = NAV_LINKS.map((link) => link.href.substring(1));
          const scrollPos = window.scrollY + 250;

          for (let i = sections.length - 1; i >= 0; i--) {
            const el = document.getElementById(sections[i]);
            if (el && el.offsetTop <= scrollPos) {
              setActiveSection(sections[i]);
              break;
            }
          }
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* Top Scroll Progress Bar */}
      <div className="fixed top-0 left-0 right-0 h-[2px] bg-white/5 z-[1000]">
        <div
          className="h-full bg-gradient-to-r from-blue-500 via-cyan-400 to-purple-500 transition-all duration-150 ease-out shadow-[0_0_10px_#38bdf8]"
          style={{ width: `${scrollProgress}%` }}
        />
      </div>

      {/* Floating Glass Navbar Header */}
      <header className="fixed top-5 inset-x-0 z-[990] flex justify-center px-4 pointer-events-none">
        <motion.nav
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className={`pointer-events-auto flex items-center justify-between gap-4 px-4 py-2.5 rounded-full border transition-all duration-300 ${
            scrolled
              ? "glass-navbar shadow-2xl shadow-blue-950/30 border-white/15 w-full max-w-5xl"
              : "bg-white/[0.03] backdrop-blur-md border-white/10 w-full max-w-5xl"
          }`}
        >
          {/* Logo / Brand */}
          <a
            href="#"
            onClick={playClick}
            data-cursor="HOME"
            className="flex items-center gap-2.5 font-bold tracking-tight text-white group"
          >
            <div className="flex items-center justify-center w-8 h-8 rounded-xl bg-gradient-to-br from-blue-500 to-purple-600 text-white shadow-md group-hover:scale-105 transition-transform">
              <Code2 className="w-4 h-4" />
            </div>
            <span className="text-sm font-semibold hidden sm:inline">
              Tejas<span className="text-cyan-400">.dev</span>
            </span>
          </a>

          {/* Desktop Nav Links */}
          <div className="hidden md:flex items-center gap-1 bg-white/[0.03] px-3 py-1 rounded-full border border-white/5">
            {NAV_LINKS.map((link) => {
              const isActive = activeSection === link.href.substring(1);
              return (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => {
                    playClick();
                    setActiveSection(link.href.substring(1));
                  }}
                  data-cursor="GOTO"
                  className={`relative px-3 py-1.5 text-xs font-medium transition-colors rounded-full ${
                    isActive ? "text-white font-semibold" : "text-slate-400 hover:text-slate-200"
                  }`}
                >
                  {isActive && (
                    <motion.div
                      layoutId="activeNavIndicator"
                      className="absolute inset-0 bg-gradient-to-r from-blue-600/30 via-cyan-500/20 to-purple-600/30 border border-cyan-500/30 rounded-full"
                      transition={{ type: "spring", stiffness: 400, damping: 30 }}
                    />
                  )}
                  <span className="relative z-10">{link.name}</span>
                </a>
              );
            })}
          </div>

          {/* Actions & Utilities */}
          <div className="flex items-center gap-2">
            {/* Command Palette Trigger */}
            <button
              onClick={() => {
                playClick();
                onOpenCommand();
              }}
              data-cursor="SEARCH"
              className="flex items-center gap-2 px-2.5 py-1.5 text-xs font-medium text-slate-300 bg-white/5 hover:bg-white/10 rounded-full border border-white/10 transition-colors"
              title="Command Palette (Ctrl + K)"
            >
              <Search className="w-3.5 h-3.5 text-cyan-400" />
              <span className="hidden lg:inline text-[11px] text-slate-400 font-mono">⌘K</span>
            </button>

            {/* Terminal Trigger */}
            <button
              onClick={() => {
                playClick();
                onOpenTerminal();
              }}
              data-cursor="CLI"
              className="flex items-center gap-1.5 px-2.5 py-1.5 text-xs font-medium text-slate-300 bg-white/5 hover:bg-white/10 rounded-full border border-white/10 transition-colors"
              title="Open Developer CLI"
            >
              <TerminalIcon className="w-3.5 h-3.5 text-purple-400" />
              <span className="hidden lg:inline text-[11px] text-slate-400">Terminal</span>
            </button>

            {/* Resume Download CTA */}
            <a
              href={PORTFOLIO_DATA.personal.resumeUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={playClick}
              data-cursor="RESUME"
              className="hidden sm:flex items-center gap-1.5 px-3.5 py-1.5 text-xs font-semibold text-white bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 hover:from-blue-500 hover:to-purple-500 rounded-full shadow-lg shadow-blue-500/20 border border-white/20 transition-all hover:scale-105 active:scale-95"
            >
              <FileDown className="w-3.5 h-3.5" />
              <span>Resume</span>
            </a>

            {/* Mobile Hamburger */}
            <button
              onClick={() => {
                playClick();
                setMobileMenuOpen(!mobileMenuOpen);
              }}
              className="md:hidden p-2 text-slate-300 bg-white/5 hover:bg-white/10 rounded-full border border-white/10"
            >
              {mobileMenuOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
            </button>
          </div>
        </motion.nav>
      </header>

      {/* Mobile Drawer Overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-x-4 top-20 z-[980] p-6 glass-card rounded-3xl border border-white/15 shadow-2xl md:hidden"
          >
            <div className="flex flex-col gap-3">
              {NAV_LINKS.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => {
                    playClick();
                    setMobileMenuOpen(false);
                  }}
                  className="px-4 py-2.5 text-sm font-medium text-slate-200 hover:text-cyan-400 hover:bg-white/5 rounded-2xl transition-colors flex items-center justify-between"
                >
                  <span>{link.name}</span>
                  <Sparkles className="w-3.5 h-3.5 opacity-40" />
                </a>
              ))}
              <hr className="border-white/10 my-1" />
              <a
                href={PORTFOLIO_DATA.personal.resumeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-3 text-center text-xs font-semibold text-white bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl shadow-lg"
              >
                Download Resume
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
