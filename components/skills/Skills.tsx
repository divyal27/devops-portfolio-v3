'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const skillsData = [
  {
    category: 'Cloud & Infrastructure',
    color: 'from-cyan-400 to-blue-500',
    skills: ['AWS', 'GCP', 'Azure', 'Linux', 'EC2', 'VPC', 'CloudWatch'],
  },
  {
    category: 'Containers & Orchestration',
    color: 'from-violet-400 to-purple-500',
    skills: ['Docker', 'Kubernetes', 'Helm', 'Container Registry', 'Docker Compose'],
  },
  {
    category: 'CI/CD & GitOps',
    color: 'from-pink-400 to-rose-500',
    skills: ['GitHub Actions', 'Jenkins', 'GitLab CI', 'ArgoCD', 'Git', 'GitOps'],
  },
  {
    category: 'IaC & Configuration',
    color: 'from-orange-400 to-red-500',
    skills: ['Terraform', 'Ansible', 'Helm Charts', 'YAML', 'HCL'],
  },
  {
    category: 'Monitoring & Observability',
    color: 'from-lime-400 to-green-500',
    skills: ['Prometheus', 'Grafana', 'ELK Stack', 'Datadog', 'Dynatrace', 'AWS CloudWatch'],
  },
  {
    category: 'DevSecOps & Security',
    color: 'from-indigo-400 to-blue-600',
    skills: ['Trivy', 'SonarQube', 'Bandit', 'SAST', 'Container Scanning', 'Secrets Detection'],
  },
  {
    category: 'AIOps & Analytics',
    color: 'from-yellow-400 to-orange-500',
    skills: ['Moogsoft', 'Splunk ITSI', 'LogicMonitor', 'Dynatrace', 'Datadog'],
  },
  {
    category: 'Programming Languages',
    color: 'from-cyan-400 to-teal-500',
    skills: ['Python', 'Bash', 'YAML', 'Java', 'JSON', 'SQL'],
  },
];

export default function Skills() {
  const { ref, inView } = useInView({
    threshold: 0.2,
    triggerOnce: true,
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  return (
    <section
      id="skills"
      ref={ref}
      className="relative py-20 md:py-32 px-4 sm:px-6 lg:px-8 bg-white"
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
            Technical <span className="bg-gradient-to-r from-cyan-600 to-violet-600 bg-clip-text text-transparent">Skills</span>
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            A comprehensive toolkit for modern DevOps and infrastructure engineering
          </p>
        </motion.div>

        {/* Skills Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {skillsData.map((skillGroup, idx) => (
            <motion.div
              key={idx}
              variants={itemVariants}
              whileHover={{ y: -5, boxShadow: '0 20px 25px -5px rgba(0,0,0,0.1)' }}
              className="group relative p-6 bg-gradient-to-br from-sky-50 to-white rounded-xl border border-slate-200 hover:border-cyan-400 transition-all overflow-hidden"
            >
              {/* Background Gradient */}
              <motion.div
                animate={{ opacity: [0, 0.1, 0] }}
                transition={{ duration: 3, repeat: Infinity }}
                className={`absolute inset-0 bg-gradient-to-br ${skillGroup.color} opacity-0 group-hover:opacity-10 transition-opacity`}
              />

              {/* Content */}
              <div className="relative z-10">
                {/* Category Title */}
                <motion.h3
                  whileHover={{ color: '#06B6D4' }}
                  className={`text-lg font-bold mb-4 bg-gradient-to-r ${skillGroup.color} bg-clip-text text-transparent`}
                >
                  {skillGroup.category}
                </motion.h3>

                {/* Skills Tags */}
                <div className="flex flex-wrap gap-2">
                  {skillGroup.skills.map((skill, i) => (
                    <motion.span
                      key={i}
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={inView ? { opacity: 1, scale: 1 } : {}}
                      transition={{
                        delay: idx * 0.1 + i * 0.05,
                        duration: 0.4,
                      }}
                      whileHover={{ scale: 1.1 }}
                      className={`px-3 py-1.5 text-xs font-semibold rounded-full bg-white border-2 border-slate-200 text-slate-700 hover:border-cyan-400 hover:text-cyan-600 cursor-pointer transition-all duration-300`}
                    >
                      {skill}
                    </motion.span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Proficiency Summary */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.5 }}
          className="mt-16 p-8 bg-gradient-to-r from-cyan-50 to-violet-50 rounded-xl border border-slate-200"
        >
          <p className="text-slate-700 text-center text-lg">
            <span className="font-bold text-slate-900">50+</span> Technologies | 
            <span className="font-bold text-slate-900 ml-2">Expert Level:</span> Kubernetes, Terraform, AWS, Docker | 
            <span className="font-bold text-slate-900 ml-2">Advanced:</span> Python, Go, Bash
          </p>
        </motion.div>
      </div>
    </section>
  );
}
