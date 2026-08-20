"use client";

import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Terminal as TerminalIcon, X } from "lucide-react";
import { TERMINAL_COMMANDS, CommandOutput } from "@/constants/terminal-commands";
import { useSoundEffects } from "@/hooks/use-sound-effects";

interface DeveloperTerminalProps {
  isOpen: boolean;
  onClose: () => void;
}

interface HistoryItem {
  command: string;
  output: CommandOutput;
}

export function DeveloperTerminal({ isOpen, onClose }: DeveloperTerminalProps) {
  const [input, setInput] = useState("");
  const [history, setHistory] = useState<HistoryItem[]>([
    {
      command: "welcome",
      output: {
        type: "text",
        content: "Tejas Kumar Developer CLI Engine v2.4.0\nType 'help' to see all available commands.",
      },
    },
  ]);
  const [commandHistory, setCommandHistory] = useState<string[]>([]);
  const [historyPointer, setHistoryPointer] = useState<number>(-1);
  const bottomRef = useRef<HTMLDivElement | null>(null);
  const inputRef = useRef<HTMLInputElement | null>(null);
  const { playClick } = useSoundEffects();

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => inputRef.current?.focus(), 100);
    }
  }, [isOpen]);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [history]);

  const handleCommand = (e: React.FormEvent) => {
    e.preventDefault();
    const trimmed = input.trim();
    if (!trimmed) return;

    playClick();

    if (trimmed.toLowerCase() === "clear") {
      setHistory([]);
      setInput("");
      return;
    }

    const parts = trimmed.split(" ");
    const cmd = parts[0].toLowerCase();
    const args = parts.slice(1);

    let output: CommandOutput;
    if (TERMINAL_COMMANDS[cmd]) {
      output = TERMINAL_COMMANDS[cmd](args);
    } else if (cmd === "echo") {
      output = { type: "text", content: args.join(" ") };
    } else {
      output = {
        type: "error",
        content: `Command not found: '${trimmed}'. Type 'help' for available commands.`,
      };
    }

    setHistory((prev) => [...prev, { command: trimmed, output }]);
    setCommandHistory((prev) => [...prev, trimmed]);
    setHistoryPointer(-1);
    setInput("");
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "ArrowUp") {
      e.preventDefault();
      if (commandHistory.length === 0) return;
      const nextIdx = historyPointer === -1 ? commandHistory.length - 1 : Math.max(0, historyPointer - 1);
      setHistoryPointer(nextIdx);
      setInput(commandHistory[nextIdx]);
    } else if (e.key === "ArrowDown") {
      e.preventDefault();
      if (historyPointer === -1) return;
      const nextIdx = historyPointer + 1;
      if (nextIdx >= commandHistory.length) {
        setHistoryPointer(-1);
        setInput("");
      } else {
        setHistoryPointer(nextIdx);
        setInput(commandHistory[nextIdx]);
      }
    }
  };

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        data-lenis-prevent
        className="fixed inset-0 z-[9999] flex items-center justify-center p-4 bg-black/75 backdrop-blur-md"
        onClick={onClose}
      >
        <motion.div
          initial={{ scale: 0.9, y: 20 }}
          animate={{ scale: 1, y: 0 }}
          exit={{ scale: 0.9, y: 20 }}
          data-lenis-prevent
          onClick={(e) => e.stopPropagation()}
          className="w-full max-w-3xl glass-card rounded-2xl border border-white/20 overflow-hidden shadow-2xl bg-[#030712]/95 font-mono text-xs sm:text-sm text-slate-200"
        >
          {/* Header Bar */}
          <div className="flex items-center justify-between px-4 py-3 border-b border-white/10 bg-white/[0.03]">
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-red-500/80 cursor-pointer" onClick={onClose} />
              <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
              <div className="w-3 h-3 rounded-full bg-green-500/80" />
              <div className="flex items-center gap-2 ml-3 text-slate-400 text-xs font-semibold">
                <TerminalIcon className="w-3.5 h-3.5 text-cyan-400" />
                <span>tejas@iitp:~ (zsh)</span>
              </div>
            </div>

            <div className="flex items-center gap-3 text-slate-400 text-xs">
              <span className="hidden sm:inline text-cyan-400">Interactive Mode</span>
              <button onClick={onClose} className="hover:text-white">
                <X className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Terminal Screen Body */}
          <div className="p-4 sm:p-6 h-[420px] overflow-y-auto space-y-4 overscroll-contain" data-lenis-prevent>
            {history.map((item, idx) => (
              <div key={idx} className="space-y-1.5">
                {item.command !== "welcome" && (
                  <div className="flex items-center gap-2 text-cyan-400 font-semibold">
                    <span className="text-purple-400">tejas@portfolio</span>
                    <span className="text-slate-500">:</span>
                    <span className="text-blue-400">~</span>
                    <span className="text-slate-300">$ {item.command}</span>
                  </div>
                )}

                {item.output.type === "text" && (
                  <pre className="text-slate-300 whitespace-pre-wrap font-mono leading-relaxed pl-2 border-l-2 border-cyan-500/30">
                    {typeof item.output.content === "string" ? item.output.content : String(item.output.content)}
                  </pre>
                )}

                {item.output.type === "list" && (
                  <div className="text-slate-300 space-y-1 pl-2 border-l-2 border-purple-500/30">
                    {Array.isArray(item.output.content) ? (
                      item.output.content.map((line: string, i: number) => (
                        <div key={i} className="whitespace-pre-wrap">{line}</div>
                      ))
                    ) : (
                      <div>{String(item.output.content)}</div>
                    )}
                  </div>
                )}

                {item.output.type === "link" && typeof item.output.content === "object" && "url" in item.output.content && (
                  <div className="pl-2 border-l-2 border-emerald-500/30">
                    <p className="text-slate-300">{item.output.content.text}</p>
                    <a
                      href={item.output.content.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-cyan-400 underline font-semibold hover:text-cyan-300 inline-block mt-1"
                    >
                      Click here to open link
                    </a>
                  </div>
                )}

                {item.output.type === "error" && (
                  <div className="text-red-400 pl-2 border-l-2 border-red-500/30">
                    {typeof item.output.content === "string" ? item.output.content : String(item.output.content)}
                  </div>
                )}
              </div>
            ))}

            {/* Live Prompt Line */}
            <form onSubmit={handleCommand} className="flex items-center gap-2 pt-2">
              <span className="text-purple-400 font-semibold shrink-0">tejas@portfolio</span>
              <span className="text-slate-500 shrink-0">:</span>
              <span className="text-blue-400 shrink-0">~</span>
              <span className="text-cyan-400 font-bold shrink-0">$</span>
              <input
                ref={inputRef}
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={handleKeyDown}
                className="w-full bg-transparent text-white focus:outline-none font-mono"
                placeholder="type command (e.g. 'help', 'projects', 'resume')..."
              />
            </form>
            <div ref={bottomRef} />
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}
