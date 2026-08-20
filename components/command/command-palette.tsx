"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Search, 
  FolderGit2, 
  User, 
  Briefcase, 
  Code2, 
  Award, 
  Mail, 
  FileText, 
  Terminal, 
  X,
  ArrowRight
} from "lucide-react";
import { PORTFOLIO_DATA } from "@/constants/portfolio";
import { useSoundEffects } from "@/hooks/use-sound-effects";
import { useScrollLock } from "@/hooks/use-scroll-lock";

interface CommandPaletteProps {
  isOpen: boolean;
  onClose: () => void;
  onOpenTerminal: () => void;
}

export function CommandPalette({ isOpen, onClose, onOpenTerminal }: CommandPaletteProps) {
  const [query, setQuery] = useState("");
  const { playClick } = useSoundEffects();

  useScrollLock(isOpen);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === "k") {
        e.preventDefault();
        if (isOpen) onClose();
        else {
          playClick();
        }
      }
      if (e.key === "Escape" && isOpen) {
        onClose();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, onClose, playClick]);

  if (!isOpen) return null;

  const navigateTo = (hash: string) => {
    window.location.assign(hash);
  };

  const COMMAND_GROUPS = [
    {
      title: "Navigation",
      items: [
        { id: "about", name: "Jump to About Section", icon: User, action: () => navigateTo("#about") },
        { id: "experience", name: "Jump to Experience", icon: Briefcase, action: () => navigateTo("#experience") },
        { id: "projects", name: "Jump to Projects", icon: FolderGit2, action: () => navigateTo("#projects") },
        { id: "skills", name: "Jump to Skills Matrix", icon: Code2, action: () => navigateTo("#skills") },
        { id: "stats", name: "Jump to Achievements & Stats", icon: Award, action: () => navigateTo("#stats") },
        { id: "contact", name: "Jump to Contact", icon: Mail, action: () => navigateTo("#contact") },
      ],
    },
    {
      title: "Featured Projects",
      items: PORTFOLIO_DATA.projects.map((p) => ({
        id: p.id,
        name: `${p.title} (${p.category})`,
        icon: FolderGit2,
        action: () => navigateTo("#projects"),
      })),
    },
    {
      title: "Quick Actions",
      items: [
        {
          id: "terminal",
          name: "Open Developer CLI Terminal",
          icon: Terminal,
          action: () => {
            onClose();
            onOpenTerminal();
          },
        },
        {
          id: "resume",
          name: "Download Tejas Kumar's Resume",
          icon: FileText,
          action: () => window.open(PORTFOLIO_DATA.personal.resumeUrl, "_blank"),
        },
      ],
    },
  ];

  const filteredGroups = COMMAND_GROUPS.map((group) => ({
    ...group,
    items: group.items.filter((item) =>
      item.name.toLowerCase().includes(query.toLowerCase())
    ),
  })).filter((group) => group.items.length > 0);

  return (
    <AnimatePresence mode="wait">
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          data-lenis-prevent
          className="fixed inset-0 z-[9999] flex items-start justify-center pt-20 px-4 bg-black/70 backdrop-blur-md"
          onClick={onClose}
        >
          <motion.div
            initial={{ scale: 0.95, y: -20 }}
            animate={{ scale: 1, y: 0 }}
            exit={{ scale: 0.95, y: -20 }}
            transition={{ duration: 0.2 }}
            data-lenis-prevent
            onClick={(e) => e.stopPropagation()}
            className="w-full max-w-xl glass-card rounded-2xl border border-white/15 overflow-hidden shadow-2xl bg-[#0b0f19]/95 text-white"
          >
            {/* Search Input Bar */}
            <div className="flex items-center gap-3 px-4 py-3.5 border-b border-white/10 bg-white/[0.02]">
              <Search className="w-5 h-5 text-cyan-400 shrink-0" />
              <input
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Type a command or search section..."
                className="w-full bg-transparent text-sm text-white placeholder-slate-400 focus:outline-none"
                autoFocus
              />
              <button
                onClick={onClose}
                className="p-1 text-slate-400 hover:text-white rounded-lg hover:bg-white/10"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            {/* Command Results List */}
            <div className="max-h-[360px] overflow-y-auto p-2 space-y-4 overscroll-contain" data-lenis-prevent>
              {filteredGroups.length === 0 ? (
                <div className="p-8 text-center text-sm text-slate-400">
                  No matching commands found for &quot;{query}&quot;
                </div>
              ) : (
                filteredGroups.map((group) => (
                  <div key={group.title}>
                    <div className="px-3 py-1 text-[11px] font-semibold text-slate-400 uppercase tracking-wider">
                      {group.title}
                    </div>
                    <div className="mt-1 space-y-1">
                      {group.items.map((item) => {
                        const IconComponent = item.icon;
                        return (
                          <button
                            key={item.id}
                            onClick={() => {
                              playClick();
                              item.action();
                              onClose();
                            }}
                            className="w-full flex items-center justify-between px-3 py-2 text-sm text-slate-300 hover:text-white hover:bg-white/10 rounded-xl transition-colors group"
                          >
                            <div className="flex items-center gap-3">
                              <IconComponent className="w-4 h-4 text-cyan-400 group-hover:scale-110 transition-transform" />
                              <span>{item.name}</span>
                            </div>
                            <ArrowRight className="w-3.5 h-3.5 opacity-0 group-hover:opacity-100 transition-opacity text-cyan-400" />
                          </button>
                        );
                      })}
                    </div>
                  </div>
                ))
              )}
            </div>

            {/* Footer */}
            <div className="flex items-center justify-between px-4 py-2.5 text-[11px] text-slate-400 border-t border-white/10 bg-white/[0.02]">
              <div className="flex items-center gap-2">
                <span className="px-1.5 py-0.5 rounded bg-white/10 font-mono text-[10px]">↑↓</span>
                <span>Navigate</span>
                <span className="px-1.5 py-0.5 rounded bg-white/10 font-mono text-[10px] ml-2">↵</span>
                <span>Select</span>
              </div>
              <span className="font-mono text-cyan-400/80">ESC to close</span>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
