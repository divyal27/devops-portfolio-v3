'use client';

import React, { useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Sparkles } from 'lucide-react';
import { GithubIcon } from '@/components/Icons';
import Link from 'next/link';

interface Project {
  title: string;
  description: string;
  technologies: string[];
  highlights: string[];
  github?: string;
}

interface ProjectCardProps {
  project: Project;
  index: number;
  inView: boolean;
}

export default function ProjectCard({ project, index, inView }: ProjectCardProps) {
  const [isHovered, setIsHovered] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    
    const rect = cardRef.current.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width;
    const y = (e.clientY - rect.top) / rect.height;
    
    setMousePosition({ x: x - 0.5, y: y - 0.5 });
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        delay: index * 0.1,
      },
    },
  };

  return (
    <motion.div
      variants={cardVariants}
      initial="hidden"
      animate={inView ? 'visible' : 'hidden'}
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{
        transform: isHovered
          ? `perspective(1000px) rotateX(${mousePosition.y * 5}deg) rotateY(${
              mousePosition.x * 5
            }deg) scale(1.02)`
          : 'perspective(1000px) rotateX(0deg) rotateY(0deg) scale(1)',
      }}
      className="group relative h-full rounded-xl overflow-hidden bg-white border border-slate-200 transition-all duration-300 hover:border-cyan-400 hover:shadow-xl"
    >
      {/* Gradient Border Animation */}
      <motion.div
        animate={isHovered ? { opacity: 1 } : { opacity: 0 }}
        className="absolute inset-0 bg-gradient-to-r from-cyan-500 via-violet-500 to-lime-500 opacity-0 group-hover:opacity-10 transition-opacity"
      />

      {/* Card Content */}
      <div className="relative z-10 p-6 h-full flex flex-col">
        {/* Header */}
        <div className="mb-4">
          <motion.div
            whileHover={{ rotate: 360 }}
            transition={{ duration: 0.6 }}
            className="w-12 h-12 rounded-lg bg-gradient-to-br from-cyan-400 to-violet-400 flex items-center justify-center text-white mb-3"
          >
            <Sparkles size={24} />
          </motion.div>

          <h3 className="text-xl font-bold text-slate-900 mb-2 line-clamp-2 group-hover:text-cyan-600 transition-colors">
            {project.title}
          </h3>
        </div>

        {/* Description */}
        <p className="text-slate-600 text-sm leading-relaxed mb-4 flex-grow">
          {project.description}
        </p>

        {/* Highlights */}
        <div className="mb-4">
          <div className="flex flex-wrap gap-2">
            {project.highlights.map((highlight, i) => (
              <motion.span
                key={i}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={isHovered ? { opacity: 1, scale: 1 } : { opacity: 0.6, scale: 0.8 }}
                transition={{ delay: i * 0.05 }}
                className="px-3 py-1 bg-lime-100 text-lime-700 rounded-full text-xs font-semibold"
              >
                {highlight}
              </motion.span>
            ))}
          </div>
        </div>

        {/* Technologies */}
        <div className="mb-6 border-t border-slate-200 pt-4">
          <div className="flex flex-wrap gap-2">
            {project.technologies.map((tech, i) => (
              <motion.span
                key={i}
                whileHover={{ scale: 1.05 }}
                className="px-2 py-1 bg-sky-100 text-slate-700 rounded text-xs font-medium hover:bg-cyan-200 transition-colors cursor-pointer"
              >
                {tech}
              </motion.span>
            ))}
          </div>
        </div>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={isHovered ? { opacity: 1, y: 0 } : { opacity: 0.5, y: 10 }}
          className="flex gap-3"
        >
          {project.github && (
            <motion.a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="flex-1 flex items-center justify-center gap-2 px-4 py-2 bg-slate-900 text-white rounded-lg hover:bg-slate-800 transition-colors text-sm font-semibold"
            >
              <GithubIcon size={16} />
              Code
            </motion.a>
          )}
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="flex-1 flex items-center justify-center gap-2 px-4 py-2 bg-gradient-to-r from-cyan-500 to-violet-500 text-white rounded-lg hover:shadow-lg transition-all text-sm font-semibold"
          >
            <ExternalLink size={16} />
            Learn More
          </motion.button>
        </motion.div>
      </div>
    </motion.div>
  );
}
