'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Github, Linkedin, FileText } from 'lucide-react';
import Link from 'next/link';

const navItems = [
  { label: 'About', href: '#about' },
  { label: 'Experience', href: '#experience' },
  { label: 'Projects', href: '#projects' },
  { label: 'Skills', href: '#skills' },
  { label: 'Certifications', href: '#certifications' },
  { label: 'Contact', href: '#contact' },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-white/80 backdrop-blur-xl shadow-lg'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="flex-shrink-0"
          >
            <a href="#" className="text-2xl font-bold bg-gradient-to-r from-cyan-500 via-violet-500 to-lime-500 bg-clip-text text-transparent">
              DP
            </a>
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <motion.a
                key={item.href}
                href={item.href}
                whileHover={{ color: '#06B6D4' }}
                className="text-slate-600 hover:text-cyan-500 transition-colors text-sm font-medium"
              >
                {item.label}
              </motion.a>
            ))}
          </div>

          {/* Social Links + Resume */}
          <div className="hidden md:flex items-center gap-4">
            <motion.a
              href="https://github.com/divyal27"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              className="p-2 rounded-full hover:bg-cyan-100 transition-colors"
            >
              <Github size={20} className="text-slate-600 hover:text-cyan-600" />
            </motion.a>
            <motion.a
              href="https://linkedin.com/in/divyal-padalkar2704"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              className="p-2 rounded-full hover:bg-violet-100 transition-colors"
            >
              <Linkedin size={20} className="text-slate-600 hover:text-violet-600" />
            </motion.a>
            <motion.a
              href="/resume.pdf"
              download
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-cyan-500 to-violet-500 text-white rounded-lg text-sm font-semibold hover:shadow-lg transition-shadow"
            >
              <FileText size={16} />
              Resume
            </motion.a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2"
          >
            {isOpen ? (
              <X size={24} className="text-slate-700" />
            ) : (
              <Menu size={24} className="text-slate-700" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="md:hidden bg-white border-t border-slate-200"
          >
            <div className="px-4 py-4 space-y-3">
              {navItems.map((item) => (
                <motion.a
                  key={item.href}
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  whileHover={{ x: 5 }}
                  className="block px-4 py-2 text-slate-600 hover:text-cyan-600 hover:bg-sky-50 rounded-lg transition-colors"
                >
                  {item.label}
                </motion.a>
              ))}
              <div className="flex gap-3 pt-3 border-t border-slate-200">
                <motion.a
                  href="https://github.com/divyal27"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1 }}
                  className="p-2 rounded-full hover:bg-cyan-100"
                >
                  <Github size={20} className="text-slate-600" />
                </motion.a>
                <motion.a
                  href="https://linkedin.com/in/divyal-padalkar2704"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1 }}
                  className="p-2 rounded-full hover:bg-violet-100"
                >
                  <Linkedin size={20} className="text-slate-600" />
                </motion.a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
