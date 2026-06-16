'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import CountUp from '@/components/CountUp';

export default function About() {
  const { ref, inView } = useInView({
    threshold: 0.3,
    triggerOnce: true,
  });

  const stats = [
    {
      value: 5,
      label: 'Production Projects',
      description: 'Enterprise-scale DevOps systems',
    },
    {
      value: 2,
      label: 'Years Experience',
      description: 'Through internships & personal work',
    },
    {
      value: 50,
      label: 'Infrastructure Components',
      description: 'Deployed & maintained',
    },
    {
      value: 100,
      label: 'Automation Scripts',
      description: 'Written & optimized',
    },
  ];

  return (
    <section
      id="about"
      ref={ref}
      className="relative py-20 md:py-32 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-sky-50 to-white"
    >
      <div className="max-w-7xl mx-auto">
        {/* Section Title */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
            About <span className="bg-gradient-to-r from-cyan-600 to-violet-600 bg-clip-text text-transparent">Me</span>
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Passionate DevOps engineer dedicated to building scalable, secure, and automated infrastructure
          </p>
        </motion.div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          {/* Left: Bio */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-6"
          >
            <p className="text-lg text-slate-700 leading-relaxed">
              I'm a DevOps engineer and SRE specialist with a focus on building reliable, scalable infrastructure at scale. 
              My journey started with a deep interest in automation and cloud-native technologies.
            </p>

            <p className="text-lg text-slate-700 leading-relaxed">
              I specialize in designing and implementing CI/CD pipelines, Kubernetes orchestration, infrastructure as code, 
              and security-first DevOps practices (DevSecOps). I believe in the power of automation to eliminate manual toil 
              and create better systems.
            </p>

            <p className="text-lg text-slate-700 leading-relaxed">
              When I'm not building infrastructure, I'm learning about new technologies, contributing to open-source projects, 
              and sharing knowledge with the community.
            </p>

            {/* Tech Stack Preview */}
            <div className="pt-4">
              <p className="text-sm font-semibold text-slate-600 mb-3">Core Technologies:</p>
              <div className="flex flex-wrap gap-2">
                {[
                  'Kubernetes',
                  'AWS',
                  'Docker',
                  'Terraform',
                  'GitLab CI',
                  'Prometheus',
                  'ArgoCD',
                  'Ansible',
                ].map((tech) => (
                  <motion.span
                    key={tech}
                    whileHover={{ scale: 1.05 }}
                    className="px-3 py-1 bg-cyan-100 text-cyan-700 rounded-full text-sm font-medium"
                  >
                    {tech}
                  </motion.span>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Right: Stats */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="grid grid-cols-2 gap-6"
          >
            {stats.map((stat, i) => (
              <motion.div
                key={i}
                whileHover={{ y: -5, boxShadow: '0 20px 25px -5px rgba(0,0,0,0.1)' }}
                className="p-6 bg-white rounded-xl border border-slate-200 hover:border-cyan-400 transition-all"
              >
                <div className="text-4xl font-bold bg-gradient-to-r from-cyan-600 to-violet-600 bg-clip-text text-transparent mb-2">
                  {inView ? (
                    <CountUp from={0} to={stat.value} duration={2} />
                  ) : (
                    0
                  )}
                  {stat.label.includes('Scripts') && '+'}
                </div>
                <p className="text-slate-900 font-semibold text-sm mb-1">{stat.label}</p>
                <p className="text-slate-600 text-xs">{stat.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
