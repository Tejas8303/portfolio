"use client";

import { useEffect, useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

export function AuroraBackground() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const spotlightRef = useRef<HTMLDivElement | null>(null);
  const { scrollYProgress } = useScroll();

  // Dynamic atmospheric opacity matching each section
  const auroraOpacity = useTransform(scrollYProgress, [0, 0.15, 0.35, 0.6, 0.85, 1], [0.8, 0.6, 0.4, 0.5, 0.3, 0.7]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };

    window.addEventListener("resize", handleResize, { passive: true });

    // Efficient lightweight particle nodes
    const particleCount = Math.min(Math.floor(width / 30), 45);
    const particles = Array.from({ length: particleCount }, () => ({
      x: Math.random() * width,
      y: Math.random() * height,
      vx: (Math.random() - 0.5) * 0.35,
      vy: (Math.random() - 0.5) * 0.35,
      radius: Math.random() * 1.6 + 0.6,
      alpha: Math.random() * 0.4 + 0.2,
      color: Math.random() > 0.5 ? "rgba(56, 189, 248," : "rgba(168, 85, 247,",
    }));

    const render = () => {
      ctx.clearRect(0, 0, width, height);

      // Draw subtle particle network connections
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const distSq = dx * dx + dy * dy;

          if (distSq < 16000) { // 125px radius
            const dist = Math.sqrt(distSq);
            ctx.beginPath();
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.strokeStyle = `rgba(255, 255, 255, ${0.06 * (1 - dist / 125)})`;
            ctx.lineWidth = 0.5;
            ctx.stroke();
          }
        }
      }

      // Draw floating particles
      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];
        p.x += p.vx;
        p.y += p.vy;

        if (p.x < 0) p.x = width;
        if (p.x > width) p.x = 0;
        if (p.y < 0) p.y = height;
        if (p.y > height) p.y = 0;

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx.fillStyle = `${p.color}${p.alpha})`;
        ctx.fill();
      }

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    // Mouse movement spotlight with translate3d
    let spotlightX = -300;
    let spotlightY = -300;
    let currentSpotX = -300;
    let currentSpotY = -300;
    let spotRafId: number;

    const handleMouseMove = (e: MouseEvent) => {
      spotlightX = e.clientX;
      spotlightY = e.clientY;
    };

    const updateSpotlight = () => {
      currentSpotX += (spotlightX - currentSpotX) * 0.12;
      currentSpotY += (spotlightY - currentSpotY) * 0.12;

      if (spotlightRef.current) {
        spotlightRef.current.style.transform = `translate3d(${currentSpotX - 250}px, ${currentSpotY - 250}px, 0)`;
      }
      spotRafId = requestAnimationFrame(updateSpotlight);
    };

    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    updateSpotlight();

    return () => {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("mousemove", handleMouseMove);
      cancelAnimationFrame(animationFrameId);
      cancelAnimationFrame(spotRafId);
    };
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden bg-[#030712]">
      {/* Dynamic Aurora Mesh Radial Lights */}
      <motion.div 
        style={{ opacity: auroraOpacity }}
        className="absolute inset-0 pointer-events-none"
      >
        <div className="absolute top-0 left-1/4 w-[700px] h-[700px] rounded-full bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-blue-600/20 via-cyan-500/10 to-transparent blur-3xl animate-pulse-glow" />
        <div className="absolute top-1/3 right-0 w-[600px] h-[600px] rounded-full bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-purple-600/20 via-indigo-500/10 to-transparent blur-3xl" />
        <div className="absolute bottom-1/4 left-1/3 w-[750px] h-[750px] rounded-full bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-cyan-600/15 via-blue-700/10 to-transparent blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] rounded-full bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-emerald-600/15 via-teal-500/5 to-transparent blur-3xl" />
      </motion.div>

      {/* Modern Subgrid Pattern & Film Grain Noise */}
      <div className="absolute inset-0 bg-[radial-gradient(#ffffff0c_1px,transparent_1px)] [background-size:32px_32px] opacity-40 pointer-events-none" />

      {/* Interactive Particle Network Canvas */}
      <canvas ref={canvasRef} className="absolute inset-0 block w-full h-full opacity-70" />

      {/* Hardware Accelerated Spotlight Follower */}
      <div
        ref={spotlightRef}
        className="fixed top-0 left-0 w-[500px] h-[500px] rounded-full bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-cyan-400/12 via-blue-500/5 to-transparent pointer-events-none z-0 will-change-transform"
      />
    </div>
  );
}
