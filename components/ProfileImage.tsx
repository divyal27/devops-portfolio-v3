'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';

export default function ProfileImage() {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
      className="relative flex justify-center items-center"
    >
      {/* Animated Background Glow */}
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
        className="absolute inset-0 bg-gradient-to-r from-cyan-400 via-violet-400 to-lime-400 rounded-3xl opacity-75 blur-2xl"
      />

      {/* Secondary Glow */}
      <motion.div
        animate={{ rotate: -360 }}
        transition={{ duration: 15, repeat: Infinity, ease: 'linear' }}
        className="absolute inset-4 bg-gradient-to-r from-violet-400 via-lime-400 to-cyan-400 rounded-2xl opacity-50 blur-xl"
      />

      {/* Image Container */}
      <motion.div
        className="relative z-10 rounded-2xl overflow-hidden border-4 border-white shadow-2xl bg-white"
        whileHover={{ scale: 1.05 }}
        transition={{ duration: 0.3 }}
      >
        <Image
          src="/profile.jpg"
          alt="Divyal Padalkar"
          width={300}
          height={300}
          priority
          className="w-full h-auto object-cover"
          onError={(e) => {
            const element = e.target as HTMLElement;
            element.style.display = 'none';
          }}
        />

        {/* Fallback Gradient (if image not found) */}
        <div className="absolute inset-0 bg-gradient-to-br from-cyan-400 via-violet-400 to-lime-400 flex items-center justify-center text-white text-center p-4">
          <div>
            <div className="text-4xl font-bold mb-2">DP</div>
            <p className="text-sm">Divyal Padalkar</p>
            <p className="text-xs mt-2">DevOps Engineer</p>
          </div>
        </div>
      </motion.div>

      {/* Floating Elements */}
      <motion.div
        animate={{ y: [0, -10, 0] }}
        transition={{ duration: 3, repeat: Infinity }}
        className="absolute -top-8 -right-8 w-24 h-24 bg-cyan-300 rounded-full opacity-40 blur-2xl"
      />
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 4, repeat: Infinity, delay: 0.5 }}
        className="absolute -bottom-8 -left-8 w-32 h-32 bg-lime-300 rounded-full opacity-40 blur-2xl"
      />
    </motion.div>
  );
}
