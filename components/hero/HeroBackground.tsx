'use client';

import React from 'react';
import { motion } from 'framer-motion';

export default function HeroBackground() {
  return (
    <div className="absolute inset-0 w-full h-full overflow-hidden">
      {/* Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-sky-50 via-white to-sky-100" />

      {/* Animated Gradient Orbs */}
      <motion.div
        animate={{
          x: [0, 100, 0],
          y: [0, -50, 0],
        }}
        transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute top-20 left-10 w-72 h-72 bg-gradient-to-r from-cyan-300 to-cyan-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20"
      />

      <motion.div
        animate={{
          x: [0, -100, 0],
          y: [0, 50, 0],
        }}
        transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
        className="absolute top-40 right-10 w-72 h-72 bg-gradient-to-r from-violet-300 to-violet-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20"
      />

      <motion.div
        animate={{
          x: [0, 50, 0],
          y: [0, 100, 0],
        }}
        transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut', delay: 2 }}
        className="absolute -bottom-32 left-1/2 w-96 h-96 bg-gradient-to-r from-lime-300 to-lime-200 rounded-full mix-blend-multiply filter blur-3xl opacity-15"
      />

      {/* Animated Grid */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.1 }}
        transition={{ duration: 2 }}
        className="absolute inset-0 grid grid-cols-12 gap-px"
      >
        {Array.from({ length: 144 }).map((_, i) => (
          <motion.div
            key={i}
            animate={{ opacity: [0.1, 0.3, 0.1] }}
            transition={{
              duration: 3,
              repeat: Infinity,
              delay: (i % 12) * 0.1,
            }}
            className="border border-cyan-200/30"
          />
        ))}
      </motion.div>

      {/* Floating Elements */}
      {[...Array(5)].map((_, i) => (
        <motion.div
          key={`float-${i}`}
          animate={{
            y: [0, -20, 0],
            rotate: [0, 360],
          }}
          transition={{
            duration: 4 + i * 0.5,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
          className={`absolute w-2 h-2 rounded-full ${
            ['bg-cyan-400', 'bg-violet-400', 'bg-lime-400', 'bg-cyan-300', 'bg-violet-300'][i]
          }`}
          style={{
            left: `${15 + i * 15}%`,
            top: `${20 + i * 10}%`,
          }}
        />
      ))}

      {/* Top gradient accent line */}
      <motion.div
        initial={{ opacity: 0, scaleX: 0 }}
        animate={{ opacity: 1, scaleX: 1 }}
        transition={{ duration: 1, delay: 0.5 }}
        className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-cyan-400 to-transparent"
      />
    </div>
  );
}
