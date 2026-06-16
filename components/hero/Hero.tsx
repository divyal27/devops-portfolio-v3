'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Download } from 'lucide-react';
import HeroBackground from './HeroBackground';
import HeroCanvas from './HeroCanvas';

export default function Hero() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: 'easeOut' },
    },
  };

  return (
    <section className="relative min-h-screen w-full overflow-hidden pt-20 flex items-center justify-center">
      <HeroBackground />
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center min-h-[calc(100vh-100px)]"
        >
          {/* Left Content */}
          <div className="flex flex-col justify-center space-y-6">
            <motion.div variants={itemVariants} className="space-y-4">
              <motion.span
                className="inline-block px-4 py-2 bg-cyan-100 text-cyan-700 rounded-full text-sm font-semibold"
                whileHover={{ scale: 1.05 }}
              >
                🚀 Welcome to My Portfolio
              </motion.span>

              <h1 className="text-5xl md:text-7xl font-bold leading-tight">
                <span className="bg-gradient-to-r from-cyan-600 via-violet-600 to-lime-600 bg-clip-text text-transparent">
                  DevOps Engineer
                </span>
                <br />
                <span className="text-slate-800">& SRE Specialist</span>
              </h1>

              <p className="text-xl text-slate-600 max-w-2xl leading-relaxed">
                Building scalable, secure, and automated infrastructure for enterprise-grade applications. 
                Passionate about DevSecOps, Platform Engineering, and making systems that just work.
              </p>
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              variants={itemVariants}
              className="flex flex-col sm:flex-row gap-4 pt-4"
            >
              <motion.a
                href="#projects"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="group flex items-center justify-center gap-2 px-8 py-4 bg-gradient-to-r from-cyan-500 to-violet-500 text-white rounded-lg font-semibold hover:shadow-xl transition-all duration-300"
              >
                Explore My Work
                <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
              </motion.a>

              <motion.a
                href="/resume.pdf"
                download
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="flex items-center justify-center gap-2 px-8 py-4 bg-white border-2 border-slate-300 text-slate-700 rounded-lg font-semibold hover:border-cyan-500 hover:text-cyan-600 transition-all duration-300"
              >
                <Download size={20} />
                Download Resume
              </motion.a>
            </motion.div>

            {/* Stats */}
            <motion.div
              variants={itemVariants}
              className="flex gap-8 pt-8 border-t border-slate-200"
            >
              {[
                { number: '5+', label: 'Projects' },
                { number: '2', label: 'Internships' },
                { number: '10+', label: 'Certifications' },
              ].map((stat) => (
                <div key={stat.label}>
                  <p className="text-3xl font-bold text-cyan-600">{stat.number}</p>
                  <p className="text-slate-600 text-sm">{stat.label}</p>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Right 3D Canvas */}
          <motion.div
            variants={itemVariants}
            className="hidden lg:flex justify-center items-center h-full"
          >
            <div className="w-full h-96 rounded-2xl overflow-hidden shadow-2xl">
              <HeroCanvas />
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
