"use client";
import { motion } from "framer-motion";

export default function DevOpsLogo({ size = 40 }: { size?: number }) {
  const r = size / 2;
  const strokeW = size * 0.06;
  const CYAN = "#22d3ee";
  const VIOLET = "#8b5cf6";
  const LIME = "#a3e635";

  return (
    <svg
      width={size}
      height={size}
      viewBox={`0 0 ${size} ${size}`}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-label="DevOps infinity logo"
    >
      <defs>
        <linearGradient id="devGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor={CYAN} />
          <stop offset="100%" stopColor={VIOLET} />
        </linearGradient>
        <linearGradient id="opsGrad" x1="100%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor={VIOLET} />
          <stop offset="100%" stopColor={LIME} />
        </linearGradient>
        <filter id="glow" x="-40%" y="-40%" width="180%" height="180%">
          <feGaussianBlur stdDeviation={size * 0.08} result="coloredBlur" />
          <feMerge>
            <feMergeNode in="coloredBlur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>

      <circle
        cx={r}
        cy={r}
        r={r - strokeW / 2}
        stroke="rgba(255,255,255,0.06)"
        strokeWidth={strokeW * 0.5}
        fill="none"
      />

      <motion.circle
        cx={r}
        cy={r}
        r={r - strokeW}
        stroke="url(#devGrad)"
        strokeWidth={strokeW}
        strokeLinecap="round"
        fill="none"
        filter="url(#glow)"
        strokeDasharray={`${Math.PI * (r - strokeW) * 0.88} ${Math.PI * (r - strokeW) * 2}`}
        initial={{ strokeDashoffset: Math.PI * (r - strokeW) * 2, rotate: 0 }}
        animate={{
          strokeDashoffset: [Math.PI * (r - strokeW) * 2, 0, 0],
          rotate: [0, 0, 360],
        }}
        transition={{
          duration: 4,
          ease: ["easeOut", "linear", "linear"],
          times: [0, 0.4, 1],
          repeat: Infinity,
          repeatDelay: 0.5,
        }}
        style={{ transformOrigin: `${r}px ${r}px` }}
      />

      <motion.circle
        cx={r}
        cy={r}
        r={r - strokeW}
        stroke="url(#opsGrad)"
        strokeWidth={strokeW}
        strokeLinecap="round"
        fill="none"
        filter="url(#glow)"
        strokeDasharray={`${Math.PI * (r - strokeW) * 0.88} ${Math.PI * (r - strokeW) * 2}`}
        initial={{ strokeDashoffset: Math.PI * (r - strokeW) * 2, rotate: 180 }}
        animate={{
          strokeDashoffset: [Math.PI * (r - strokeW) * 2, 0, 0],
          rotate: [180, 180, 540],
        }}
        transition={{
          duration: 4,
          ease: ["easeOut", "linear", "linear"],
          times: [0, 0.4, 1],
          repeat: Infinity,
          repeatDelay: 0.5,
          delay: 0.15,
        }}
        style={{ transformOrigin: `${r}px ${r}px` }}
      />

      <motion.circle
        cx={r}
        cy={r}
        r={size * 0.06}
        fill={CYAN}
        animate={{ scale: [1, 1.4, 1], opacity: [0.8, 1, 0.8] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        style={{ transformOrigin: `${r}px ${r}px` }}
        filter="url(#glow)"
      />
    </svg>
  );
}
