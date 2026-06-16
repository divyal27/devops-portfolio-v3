'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Award, ExternalLink, CheckCircle } from 'lucide-react';

const certifications = [
  {
    title: 'Advanced Testing Practices Using AWS DevOps Tools',
    issuer: 'Google Cloud',
    date: '2024',
    credential: 'https://drive.google.com',
    verified: true,
  },
  {
    title: 'Claude Code in Action',
    issuer: 'Anthropic',
    date: '2024',
    credential: 'https://skilljar.com',
    verified: true,
  },
  {
    title: 'Building with the Claude API',
    issuer: 'Anthropic',
    date: '2024',
    credential: 'https://skilljar.com',
    verified: true,
  },
];

export default function Certifications() {
  const { ref, inView } = useInView({
    threshold: 0.3,
    triggerOnce: true,
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.6 },
    },
  };

  return (
    <section
      id="certifications"
      ref={ref}
      className="relative py-20 md:py-32 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-white to-sky-50"
    >
      <div className="max-w-4xl mx-auto">
        {/* Section Title */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
            Certifications & <span className="bg-gradient-to-r from-cyan-600 to-violet-600 bg-clip-text text-transparent">Credentials</span>
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Industry-recognized certifications and verified credentials
          </p>
        </motion.div>

        {/* Certifications List */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          className="space-y-4"
        >
          {certifications.map((cert, i) => (
            <motion.div
              key={i}
              variants={itemVariants}
              whileHover={{ x: 10, boxShadow: '0 20px 25px -5px rgba(0,0,0,0.1)' }}
              className="group relative p-6 bg-white rounded-xl border-2 border-slate-200 hover:border-cyan-400 transition-all overflow-hidden"
            >
              {/* Gradient Background */}
              <motion.div
                animate={{ opacity: [0, 0.05, 0] }}
                transition={{ duration: 3, repeat: Infinity, delay: i * 0.3 }}
                className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-violet-500 opacity-0"
              />

              {/* Content */}
              <div className="relative z-10 flex items-start justify-between">
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-2">
                    <motion.div
                      whileHover={{ rotate: 360, scale: 1.1 }}
                      transition={{ duration: 0.6 }}
                      className="p-2 bg-gradient-to-r from-cyan-100 to-violet-100 rounded-lg"
                    >
                      <Award className="text-cyan-600" size={20} />
                    </motion.div>
                    <h3 className="text-xl font-bold text-slate-900 group-hover:text-cyan-600 transition-colors">
                      {cert.title}
                    </h3>
                  </div>

                  <div className="flex flex-col md:flex-row md:items-center gap-3 text-sm">
                    <span className="inline-block px-3 py-1 bg-lime-100 text-lime-700 rounded-full font-semibold">
                      {cert.issuer}
                    </span>
                    <span className="text-slate-500">•</span>
                    <span className="text-slate-600">{cert.date}</span>
                    {cert.verified && (
                      <>
                        <span className="text-slate-500">•</span>
                        <div className="flex items-center gap-1 text-lime-600 font-semibold">
                          <CheckCircle size={16} />
                          Verified
                        </div>
                      </>
                    )}
                  </div>
                </div>

                {/* CTA Button */}
                <motion.a
                  href={cert.credential}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  className="ml-4 p-3 rounded-lg bg-gradient-to-r from-cyan-500 to-violet-500 text-white hover:shadow-lg transition-all flex-shrink-0"
                >
                  <ExternalLink size={20} />
                </motion.a>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Additional Note */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.6 }}
          className="mt-12 p-6 bg-cyan-50 border-l-4 border-cyan-500 rounded-r-lg"
        >
          <p className="text-slate-700">
            <span className="font-bold text-slate-900">Continuous Learning:</span> I'm actively pursuing advanced certifications in Kubernetes, AWS Solutions Architect, and CKA (Certified Kubernetes Administrator). Check back soon for updates!
          </p>
        </motion.div>
      </div>
    </section>
  );
}
