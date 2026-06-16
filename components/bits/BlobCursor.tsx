'use client';

import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

export default function BlobCursor() {
  const cursorRef = useRef<HTMLDivElement>(null);
  const mousePos = useRef({ x: 0, y: 0 });
  const cursorPos = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      mousePos.current = {
        x: e.clientX,
        y: e.clientY,
      };
    };

    window.addEventListener('mousemove', handleMouseMove);

    const animateCursor = () => {
      cursorPos.current.x += (mousePos.current.x - cursorPos.current.x) * 0.15;
      cursorPos.current.y += (mousePos.current.y - cursorPos.current.y) * 0.15;

      if (cursorRef.current) {
        cursorRef.current.style.left = `${cursorPos.current.x}px`;
        cursorRef.current.style.top = `${cursorPos.current.y}px`;
      }

      requestAnimationFrame(animateCursor);
    };

    requestAnimationFrame(animateCursor);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <div
      ref={cursorRef}
      className="pointer-events-none fixed w-8 h-8 z-50 hidden md:block"
    >
      {/* Outer Blob */}
      <motion.div
        animate={{
          scale: [1, 1.2, 1],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
        className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-violet-400 rounded-full filter blur-md opacity-60"
      />

      {/* Inner Core */}
      <motion.div
        animate={{
          scale: [1, 0.8, 1],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: 'easeInOut',
          delay: 0.2,
        }}
        className="absolute inset-2 bg-gradient-to-r from-cyan-300 to-violet-300 rounded-full filter blur-sm opacity-80"
      />

      {/* Center Dot */}
      <div className="absolute top-1/2 left-1/2 w-1 h-1 bg-white rounded-full transform -translate-x-1/2 -translate-y-1/2" />
    </div>
  );
}
