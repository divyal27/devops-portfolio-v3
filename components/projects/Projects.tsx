'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import ProjectCard from './ProjectCard';

const projectCategories = [
  {
    category: 'DevOps',
    projects: [
      {
        title: 'GitOps-Driven Kubernetes Platform on AWS EKS',
        description: 'Production-grade GitOps platform on AWS EKS using Terraform, Docker, and Kubernetes to automate deployments, rollback workflows, and environment management with ArgoCD',
        technologies: ['AWS EKS', 'Kubernetes', 'Docker', 'Terraform', 'ArgoCD', 'Helm'],
        highlights: ['GitOps Automation', 'Environment Management', 'ArgoCD Deployments'],
        github: 'https://github.com/divyal27/GitOps-driven-Kubernetes-Platform-on-AWS-EKS',
      },
    ],
  },
  {
    category: 'SRE',
    projects: [
      {
        title: 'SlOps SRE Platform',
        description: 'Self-service SRE platform that provisions environments, automates delivery workflows, and provides Prometheus/Grafana dashboards and alerting for operational visibility',
        technologies: ['Python', 'Kubernetes', 'Terraform', 'GitHub Actions', 'Prometheus', 'Grafana'],
        highlights: ['Self-Service Provisioning', 'Automated Workflows', 'Observability'],
        github: 'https://github.com/divyal27/slops-sre-platform',
      },
    ],
  },
  {
    category: 'DevSecOps',
    projects: [
      {
        title: 'Shift-Left Security Pipeline',
        description: 'DevSecOps pipeline that applies shift-left security in CI/CD through source scanning, dependency checks, container scanning, secrets detection, and policy enforcement',
        technologies: ['GitHub Actions', 'Trivy', 'SonarQube', 'SAST', 'Container Scanning', 'Secrets Detection'],
        highlights: ['Security Automation', 'Vulnerability Scanning', 'Policy Enforcement'],
        github: 'https://github.com/divyal27/shift-left-security-pipeline',
      },
    ],
  },
];

export default function Projects() {
  const [selectedCategory, setSelectedCategory] = useState(0);
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  return (
    <section
      id="projects"
      ref={ref}
      className="relative py-20 md:py-32 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-white to-sky-50"
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
            Featured <span className="bg-gradient-to-r from-cyan-600 to-violet-600 bg-clip-text text-transparent">Projects</span>
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Production-grade infrastructure and automation solutions
          </p>
        </motion.div>

        {/* Category Tabs */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.2 }}
          className="flex justify-center gap-4 mb-12 flex-wrap"
        >
          {projectCategories.map((cat, i) => (
            <motion.button
              key={i}
              onClick={() => setSelectedCategory(i)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
                selectedCategory === i
                  ? 'bg-gradient-to-r from-cyan-500 to-violet-500 text-white shadow-lg'
                  : 'bg-white text-slate-700 border-2 border-slate-200 hover:border-cyan-400'
              }`}
            >
              {cat.category}
            </motion.button>
          ))}
        </motion.div>

        {/* Projects Grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={selectedCategory}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {projectCategories[selectedCategory].projects.map((project, i) => (
              <ProjectCard key={i} project={project} index={i} inView={inView} />
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
