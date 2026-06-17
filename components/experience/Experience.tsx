'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { ChevronRight, Calendar, MapPin } from 'lucide-react';

const experiences = [
  {
    role: 'DevOps Intern',
    company: 'Hisan Labs Pvt. Ltd.',
    period: 'Feb 2026 – Present',
    location: 'Pune, India',
    achievements: [
      'Automated configuration management across staging and production using Ansible playbooks, ensuring environment consistency and cutting manual setup time by ~50%',
      'Reduced MTTR by ~35% across 3 services by configuring ELK Stack alerting and Prometheus rules, cutting average incident resolution from 40 min to 26 min',
      'Designed GitHub Actions CI/CD workflows for pre-production acceptance testing, enforcing automated quality gates and reducing failed deployments by ~30%',
      'Managed Kubernetes deployments and infrastructure monitoring using Prometheus & Grafana',
      'Implemented incident response procedures and runbooks for production systems',
    ],
  },
  {
    role: 'Full Stack Web Development Intern',
    company: 'Widesoftech Pvt. Ltd.',
    period: 'Jan 2026 – Feb 2026',
    location: 'Pune, India',
    achievements: [
      'Built and deployed InternMeets, a live student internship platform, handling real-world deployment, debugging, and incident resolution within a cross-functional team in under 4 weeks',
      'Implemented real-time features using WebSockets for live platform connectivity',
      'Performed production debugging and incident response for live systems',
      'Collaborated with DevOps team on deployment and infrastructure optimization',
      'Managed database migrations and data consistency across environments',
    ],
  },
];

export default function Experience() {
  const { ref, inView } = useInView({
    threshold: 0.2,
    triggerOnce: true,
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
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
      id="experience"
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
            Professional <span className="bg-gradient-to-r from-cyan-600 to-violet-600 bg-clip-text text-transparent">Experience</span>
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Journey through my DevOps and SRE projects
          </p>
        </motion.div>

        {/* Timeline */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          className="relative space-y-8"
        >
          {/* Timeline Line */}
          <motion.div
            initial={{ height: 0 }}
            animate={inView ? { height: '100%' } : {}}
            transition={{ duration: 1.5 }}
            className="absolute left-0 md:left-1/2 w-1 h-full bg-gradient-to-b from-cyan-500 via-violet-500 to-lime-500 transform md:-translate-x-1/2"
          />

          {/* Experience Items */}
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className={`relative md:grid md:grid-cols-2 gap-8 ${
                index % 2 === 0 ? '' : 'md:text-right'
              }`}
            >
              {/* Timeline Dot */}
              <motion.div
                initial={{ scale: 0 }}
                animate={inView ? { scale: 1 } : {}}
                transition={{ delay: index * 0.2 + 0.5 }}
                className="absolute left-0 top-2 md:left-1/2 w-4 h-4 bg-gradient-to-r from-cyan-500 to-violet-500 rounded-full transform md:-translate-x-1.5 border-4 border-white"
              />

              {/* Content */}
              <motion.div
                className={`pl-8 md:pl-0 ${index % 2 === 0 ? 'md:pr-12' : 'md:pl-12'}`}
                whileHover={{ x: index % 2 === 0 ? 10 : -10 }}
              >
                <div className="bg-gradient-to-br from-sky-50 to-white p-8 rounded-xl border border-slate-200 hover:border-cyan-400 transition-all hover:shadow-xl">
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <h3 className="text-2xl font-bold text-slate-900">{exp.role}</h3>
                      <p className="text-lg text-cyan-600 font-semibold">{exp.company}</p>
                    </div>
                    <motion.div
                      whileHover={{ rotate: 90 }}
                      className="text-lime-500"
                    >
                      <ChevronRight size={24} />
                    </motion.div>
                  </div>

                  {/* Meta Info */}
                  <div className="flex flex-col md:flex-row gap-4 text-sm text-slate-600 mb-6">
                    <div className="flex items-center gap-2">
                      <Calendar size={16} className="text-cyan-500" />
                      {exp.period}
                    </div>
                    <div className="flex items-center gap-2">
                      <MapPin size={16} className="text-violet-500" />
                      {exp.location}
                    </div>
                  </div>

                  {/* Achievements */}
                  <div className="space-y-3">
                    {exp.achievements.map((achievement, i) => (
                      <motion.div
                        key={i}
                        initial={{ opacity: 0, x: -10 }}
                        animate={inView ? { opacity: 1, x: 0 } : {}}
                        transition={{ delay: index * 0.2 + i * 0.1 }}
                        className="flex gap-3 items-start"
                      >
                        <span className="text-lime-500 font-bold mt-1">✓</span>
                        <p className="text-slate-700 text-sm leading-relaxed">{achievement}</p>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
