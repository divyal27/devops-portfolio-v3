'use client';

import React from 'react';
import { motion } from 'framer-motion';

const DevOpsLogo = ({ size = 32 }: { size?: number }) => {
  return (
    <motion.svg
      width={size}
      height={size}
      viewBox="0 0 40 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      whileHover={{ rotate: 360 }}
      transition={{ duration: 0.8, ease: 'easeInOut' }}
    >
      {/* Outer Rotating Ring */}
      <motion.g
        animate={{ rotate: 360 }}
        transition={{ duration: 8, repeat: Infinity, ease: 'linear' }}
        style={{ transformOrigin: 'center' }}
      >
        <circle cx="20" cy="20" r="18" stroke="url(#gradient1)" strokeWidth="2" fill="none" />
      </motion.g>

      {/* Inner Circle */}
      <circle cx="20" cy="20" r="12" stroke="url(#gradient2)" strokeWidth="1.5" fill="none" />

      {/* Pipeline Stage Dots */}
      <motion.circle
        cx="20" cy="8" r="2" fill="#06B6D4"
        animate={{ opacity: [1, 0.3, 1] }}
        transition={{ duration: 1.5, repeat: Infinity }}
      />
      <motion.circle
        cx="28.5" cy="15.5" r="2" fill="#8B5CF6"
        animate={{ opacity: [1, 0.3, 1] }}
        transition={{ duration: 1.5, repeat: Infinity, delay: 0.5 }}
      />
      <motion.circle
        cx="28.5" cy="24.5" r="2" fill="#22C55E"
        animate={{ opacity: [1, 0.3, 1] }}
        transition={{ duration: 1.5, repeat: Infinity, delay: 1 }}
      />

      {/* Connection Lines */}
      <motion.line
        x1="20" y1="10" x2="26" y2="14"
        stroke="url(#gradient1)" strokeWidth="1" strokeLinecap="round"
        animate={{ strokeDashoffset: [0, -4] }}
        transition={{ duration: 2, repeat: Infinity }}
        strokeDasharray="4"
      />
      <motion.line
        x1="26" y1="17" x2="26" y2="23"
        stroke="url(#gradient2)" strokeWidth="1" strokeLinecap="round"
        animate={{ strokeDashoffset: [0, -4] }}
        transition={{ duration: 2, repeat: Infinity, delay: 0.5 }}
        strokeDasharray="4"
      />
      <motion.line
        x1="26" y1="26" x2="20" y2="30"
        stroke="url(#gradient1)" strokeWidth="1" strokeLinecap="round"
        animate={{ strokeDashoffset: [0, -4] }}
        transition={{ duration: 2, repeat: Infinity, delay: 1 }}
        strokeDasharray="4"
      />

      <defs>
        <linearGradient id="gradient1" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#06B6D4" />
          <stop offset="100%" stopColor="#8B5CF6" />
        </linearGradient>
        <linearGradient id="gradient2" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#8B5CF6" />
          <stop offset="100%" stopColor="#22C55E" />
        </linearGradient>
      </defs>
    </motion.svg>
  );
};

export default DevOpsLogo;
