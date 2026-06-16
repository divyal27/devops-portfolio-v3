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
        description: 'Production-grade Kubernetes platform with automated GitOps workflows using ArgoCD',
        technologies: ['Kubernetes', 'AWS EKS', 'ArgoCD', 'Terraform', 'Helm', 'Docker'],
        highlights: ['99.99% Uptime', '1000+ Deployments/Month', 'Zero-Downtime Updates'],
        github: '#',
      },
      {
        title: 'Multi-Environment CI/CD Pipeline',
        description: 'Enterprise CI/CD pipeline with feature environments and automated testing',
        technologies: ['GitLab CI', 'Docker', 'Kubernetes', 'Terraform', 'AWS'],
        highlights: ['60% Faster Deploys', 'Automated Testing', 'Feature Environments'],
        github: '#',
      },
      {
        title: 'Centralized Observability Platform',
        description: 'Unified monitoring and logging platform for enterprise infrastructure',
        technologies: ['Prometheus', 'Grafana', 'Loki', 'ELK Stack', 'Jaeger'],
        highlights: ['200+ Metrics', 'Real-time Alerting', 'Centralized Logging'],
        github: '#',
      },
    ],
  },
  {
    category: 'SRE',
    projects: [
      {
        title: 'SLOps SRE Platform',
        description: 'Platform for managing SLOs, SLIs, and error budgets',
        technologies: ['Python', 'PostgreSQL', 'Prometheus', 'React', 'FastAPI'],
        highlights: ['Automated SLO Tracking', 'Budget Alerts', 'Team Dashboards'],
        github: '#',
      },
      {
        title: 'Remidate SlOps',
        description: 'Advanced SRE tooling for reliability management',
        technologies: ['Go', 'Kubernetes', 'gRPC', 'PostgreSQL'],
        highlights: ['Real-time SLI', 'Error Budget Tracking', 'Incident Response'],
        github: '#',
      },
      {
        title: 'SRE Capacity Management',
        description: 'Capacity planning and forecasting system',
        technologies: ['Python', 'TensorFlow', 'Grafana', 'AWS RDS'],
        highlights: ['ML-based Forecasting', 'Capacity Alerts', '95% Accuracy'],
        github: '#',
      },
    ],
  },
  {
    category: 'DevSecOps',
    projects: [
      {
        title: 'Shift-Left Security Pipeline',
        description: 'Security scanning integrated into CI/CD pipeline',
        technologies: ['GitLab CI', 'SAST', 'DAST', 'SCA', 'Container Scanning'],
        highlights: ['Automated Security', 'Vulnerability Tracking', 'Compliance Reports'],
        github: '#',
      },
      {
        title: 'Zero-Trust AWS Network Architecture',
        description: 'Implementation of zero-trust security principles in AWS',
        technologies: ['AWS VPC', 'IAM', 'Security Groups', 'WAF', 'KMS'],
        highlights: ['Least Privilege', 'Network Segmentation', 'Encryption by Default'],
        github: '#',
      },
      {
        title: 'Container Supply Chain Security',
        description: 'End-to-end security for container images',
        technologies: ['Harbor', 'Trivy', 'Cosign', 'SBOM', 'Docker'],
        highlights: ['Image Signing', 'Vulnerability Scanning', 'Policy Enforcement'],
        github: '#',
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
