"use client";

import { useState, useRef, ReactNode } from "react";

interface TiltCardProps {
  children: ReactNode;
  className?: string;
  tiltAmount?: number;
  glowColor?: string;
  enableTilt?: boolean;
}

export function TiltCard({
  children,
  className = "",
  tiltAmount = 12,
  glowColor = "rgba(56, 189, 248, 0.15)",
  enableTilt = false,
}: TiltCardProps) {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const [rotateX, setRotateX] = useState(0);
  const [rotateY, setRotateY] = useState(0);
  const [spotlightPos, setSpotlightPos] = useState({ x: 50, y: 50 });
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!containerRef.current) return;

    // Measure untransformed outer container rect so tilt transforms do not distort mouse coordinates
    const rect = containerRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    setSpotlightPos({
      x: Math.max(0, Math.min(100, (x / rect.width) * 100)),
      y: Math.max(0, Math.min(100, (y / rect.height) * 100)),
    });

    if (enableTilt) {
      const centerX = rect.width / 2;
      const centerY = rect.height / 2;

      const percentX = (x - centerX) / centerX;
      const percentY = (y - centerY) / centerY;

      setRotateX(-percentY * tiltAmount);
      setRotateY(percentX * tiltAmount);
    }
  };

  const handleMouseEnter = () => setIsHovered(true);

  const handleMouseLeave = () => {
    setIsHovered(false);
    setRotateX(0);
    setRotateY(0);
  };

  return (
    <div
      ref={containerRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className="relative group h-full"
    >
      <div
        style={{
          transform:
            enableTilt && isHovered
              ? `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.02, 1.02, 1.02)`
              : "perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)",
          transition: isHovered
            ? "transform 0.15s cubic-bezier(0.2, 0, 0.4, 1)"
            : "transform 0.5s cubic-bezier(0.2, 0, 0, 1)",
          transformStyle: "preserve-3d",
        }}
        className={`relative overflow-hidden will-change-transform ${className}`}
      >
        {/* Interactive Spotlight Radial Glow */}
        <div
          className="pointer-events-none absolute -inset-px rounded-3xl opacity-0 transition-opacity duration-300 group-hover:opacity-100 z-20"
          style={{
            background: `radial-gradient(500px circle at ${spotlightPos.x}% ${spotlightPos.y}%, ${glowColor}, transparent 40%)`,
          }}
        />
        {children}
      </div>
    </div>
  );
}


