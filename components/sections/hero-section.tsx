"use client";

import { useEffect, useState, useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { 
  FileDown, 
  ArrowUpRight, 
  Terminal, 
  Sparkles, 
  CheckCircle2, 
  Cpu, 
  Layers 
} from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/ui/icons";
import { PORTFOLIO_DATA } from "@/constants/portfolio";
import { useSoundEffects } from "@/hooks/use-sound-effects";

export function HeroSection() {
  const { playClick } = useSoundEffects();
  const [roleIndex, setRoleIndex] = useState(0);

  const containerRef = useRef<HTMLDivElement | null>(null);
  const cardRef = useRef<HTMLDivElement | null>(null);
  const [rotateX, setRotateX] = useState(0);
  const [rotateY, setRotateY] = useState(0);

  // Scroll storytelling transformations (Apple style)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const textOpacity = useTransform(scrollYProgress, [0, 0.75], [1, 0.2]);
  const textY = useTransform(scrollYProgress, [0, 0.75], [0, -30]);
  const cardScale = useTransform(scrollYProgress, [0, 0.5, 1], [1, 1.04, 0.96]);
  const cardY = useTransform(scrollYProgress, [0, 1], [0, 30]);

  const handleMouseMoveCard = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    setRotateX((y - centerY) / 22);
    setRotateY((centerX - x) / 22);
  };

  const handleMouseLeaveCard = () => {
    setRotateX(0);
    setRotateY(0);
  };

  const ROLES = [
    "Software Engineer",
    "Software Engineering Intern @ Vivriti Capital",
    "Mathematics & Computing @ IIT Patna",
    "Cloud,DevOps & CI/CD Pipelines Engineer",
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setRoleIndex((prev) => (prev + 1) % ROLES.length);
    }, 3200);
    return () => clearInterval(interval);
  }, [ROLES.length]);

  return (
    <section 
      ref={containerRef}
      className="relative min-h-screen flex items-center justify-center pt-28 pb-20 px-4 sm:px-6 lg:px-8 overflow-hidden z-10"
    >
      <div className="w-full max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
        
        {/* Left Column: Headline & Hero Copy */}
        <motion.div
          style={{ opacity: textOpacity, y: textY }}
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="lg:col-span-7 space-y-8 text-left"
        >
          {/* Availability Status Badge */}
          <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full glass-card border border-emerald-500/30 text-xs font-medium text-slate-200">
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500" />
            </span>
            <span>{PORTFOLIO_DATA.personal.availability}</span>
          </div>

          {/* Headline */}
          <div className="space-y-3">
            <div className="flex items-center gap-2 text-cyan-400 font-mono text-sm font-semibold tracking-wide uppercase">
              <Sparkles className="w-4 h-4" />
              <span>Welcome to my digital workspace</span>
            </div>

            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-white leading-[1.08]">
              Hi, I&apos;m{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-cyan-300 to-purple-400">
                Tejas Kumar
              </span>
            </h1>

            {/* Rotating Role Badge */}
            <div className="h-10 flex items-center">
              <motion.div
                key={roleIndex}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.4 }}
                className="text-lg sm:text-2xl font-bold font-mono text-cyan-400/90 flex items-center gap-2"
              >
                <Terminal className="w-5 h-5 text-purple-400" />
                <span>{ROLES[roleIndex]}</span>
              </motion.div>
            </div>
          </div>

          {/* Subtext Paragraph */}
          <p className="text-base sm:text-lg text-slate-300 max-w-2xl leading-relaxed">
            {PORTFOLIO_DATA.personal.tagline} Focused on microservices, cloud infrastructure (Docker, Kubernetes, AWS), high-concurrency Node.js/React architectures, and competitive algorithm optimization.
          </p>

          {/* Hero CTAs */}
          <div className="flex flex-wrap items-center gap-4 pt-2">
            <a
              href={PORTFOLIO_DATA.personal.resumeUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={playClick}
              className="px-6 py-3.5 rounded-full font-semibold text-sm text-white bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 hover:from-blue-500 hover:to-purple-500 shadow-xl shadow-blue-500/25 border border-white/20 transition-all hover:scale-105 active:scale-95 flex items-center gap-2"
            >
              <FileDown className="w-4 h-4" />
              <span>Download Resume</span>
            </a>

            <a
              href="#projects"
              onClick={playClick}
              className="px-6 py-3.5 rounded-full font-semibold text-sm text-slate-200 glass-card hover:bg-white/10 border border-white/15 transition-all hover:scale-105 active:scale-95 flex items-center gap-2"
            >
              <span>View Projects</span>
              <ArrowUpRight className="w-4 h-4 text-cyan-400" />
            </a>

            <div className="flex items-center gap-2 pl-2">
              <a
                href={PORTFOLIO_DATA.personal.github}
                target="_blank"
                rel="noopener noreferrer"
                onClick={playClick}
                className="p-3 rounded-full glass-card hover:bg-white/10 border border-white/15 text-slate-300 hover:text-white transition-transform hover:scale-110"
                title="GitHub"
              >
                <GithubIcon className="w-4 h-4" />
              </a>
              <a
                href={PORTFOLIO_DATA.personal.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                onClick={playClick}
                className="p-3 rounded-full glass-card hover:bg-white/10 border border-white/15 text-slate-300 hover:text-white transition-transform hover:scale-110"
                title="LinkedIn"
              >
                <LinkedinIcon className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick Metrics Bar */}
          <div className="pt-6 border-t border-white/10 grid grid-cols-3 gap-4 max-w-lg">
            <div>
              <div className="text-2xl font-bold text-white font-mono">400+</div>
              <div className="text-xs text-slate-400">DSA Problems Solved</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-cyan-400 font-mono">1638</div>
              <div className="text-xs text-slate-400">Codeforces Max Rating</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-purple-400 font-mono">IIT Patna</div>
              <div className="text-xs text-slate-400">Maths & Computing</div>
            </div>
          </div>
        </motion.div>

        {/* Right Column: Interactive Holographic Code Workspace Window */}
        <motion.div
          style={{ scale: cardScale, y: cardY }}
          initial={{ opacity: 0, scale: 0.9, y: 30 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="lg:col-span-5 relative"
        >
          {/* Ambient Glow behind code editor */}
          <div className="absolute -inset-2 rounded-3xl bg-gradient-to-r from-blue-500/30 via-cyan-500/20 to-purple-600/30 blur-2xl opacity-70 animate-pulse-glow" />

          {/* Code Editor Container */}
          <div
            ref={cardRef}
            onMouseMove={handleMouseMoveCard}
            onMouseLeave={handleMouseLeaveCard}
            style={{
              transform: `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`,
              transition: rotateX === 0 && rotateY === 0 ? "transform 0.5s ease" : "transform 0.1s ease-out",
            }}
            className="relative glass-card glass-card-hover rounded-2xl border border-white/15 overflow-hidden shadow-2xl bg-[#0b0f19]/90 font-mono text-xs text-slate-300 will-change-transform"
          >
            
            {/* Window Top Controls */}
            <div className="flex items-center justify-between px-4 py-3 border-b border-white/10 bg-white/[0.03]">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-red-500/80" />
                <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
                <div className="w-3 h-3 rounded-full bg-green-500/80" />
                <span className="text-[11px] text-slate-400 ml-2 font-medium">Engine.ts</span>
              </div>
              <div className="flex items-center gap-2 text-[10px] text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded border border-emerald-500/20">
                <CheckCircle2 className="w-3 h-3" />
                <span>BUILD PASSED</span>
              </div>
            </div>

            {/* Code Content Stream */}
            <div className="p-4 sm:p-5 overflow-x-auto space-y-2 leading-relaxed">
              <div className="text-slate-500">&#47;&#47; Tejas Kumar — Software Engineer</div>
              <div>
                <span className="text-purple-400">interface</span>{" "}
                <span className="text-cyan-300">Engineer</span> &#123;
              </div>
              <div className="pl-4">
                <span className="text-slate-400">name:</span>{" "}
                <span className="text-emerald-300">&quot;Tejas Kumar&quot;</span>;
              </div>
              <div className="pl-4">
                <span className="text-slate-400">education:</span>{" "}
                <span className="text-emerald-300">&quot;IIT Patna&quot;</span>;
              </div>
              <div className="pl-4">
                <span className="text-slate-400">experience:</span>{" "}
                <span className="text-emerald-300">&quot;Vivriti Capital (SDE Intern)&quot;</span>;
              </div>
              <div className="pl-4">
                <span className="text-slate-400">stack:</span> [
                <span className="text-amber-300">&quot;AWS&quot;</span>,{" "}
                <span className="text-amber-300">&quot;Docker&quot;</span>,{" "}
                <span className="text-amber-300">&quot;K8s&quot;</span>,{" "}
                <span className="text-amber-300">&quot;Terraform&quot;</span>,{" "}
                <span className="text-amber-300">&quot;React&quot;</span>];
              </div>
              <div className="pl-4">
                <span className="text-slate-400">codeforcesRating:</span>{" "}
                <span className="text-blue-400">1638(maximum)</span>;
              </div>
              <div>&#125;</div>

              <div className="pt-2 text-slate-500">&#47;&#47; Core execution method</div>
              <div>
                <span className="text-purple-400">async function</span>{" "}
                <span className="text-blue-400">deploySoftware</span>(
                <span className="text-slate-300">spec: Engineer</span>
              ): <span className="text-cyan-300">Promise&lt;Status&gt;</span> &#123;
              </div>
              <div className="pl-4">
                <span className="text-purple-400">const</span> pipeline ={" "}
                <span className="text-purple-400">new</span> CI_CD_Pipeline(&#123;
              </div>
              <div className="pl-8 text-slate-400">
                cloud: <span className="text-emerald-300">&quot;AWS / Kubernetes&quot;</span>,
              </div>
              <div className="pl-8 text-slate-400">
                throughput: <span className="text-amber-300">&quot;High Concurrency&quot;</span>,
              </div>
              <div className="pl-4">&#125;);</div>
              <div className="pl-4">
                <span className="text-purple-400">return await</span> pipeline.deploy();
              </div>
              <div>&#125;</div>
            </div>

            {/* Floating Tech Badges */}
            <div className="p-3 border-t border-white/10 bg-white/[0.02] flex items-center justify-between text-[11px] text-slate-400">
              <div className="flex items-center gap-3">
                <span className="flex items-center gap-1 text-cyan-400">
                  <Cpu className="w-3.5 h-3.5" /> Docker / K8s
                </span>
                <span className="flex items-center gap-1 text-purple-400">
                  <Layers className="w-3.5 h-3.5" /> Next.js 16
                </span>
              </div>
              <span className="font-mono text-emerald-400">99.99% Uptime</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
