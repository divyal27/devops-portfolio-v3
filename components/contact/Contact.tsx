'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Mail, Phone, MapPin, Send, CheckCircle } from 'lucide-react';

export default function Contact() {
  const { ref, inView } = useInView({
    threshold: 0.3,
    triggerOnce: true,
  });

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    // Simulate form submission
    setTimeout(() => {
      setSubmitted(true);
      setFormData({ name: '', email: '', subject: '', message: '' });
      setLoading(false);

      // Reset after 3 seconds
      setTimeout(() => setSubmitted(false), 3000);
    }, 1500);
  };

  const contactInfo = [
    {
      icon: Mail,
      label: 'Email',
      value: 'divyal0612@gmail.com',
      href: 'mailto:divyal0612@gmail.com',
    },
    {
      icon: Phone,
      label: 'Phone',
      value: '+91 7498841528',
      href: 'tel:+917498841528',
    },
    {
      icon: MapPin,
      label: 'Location',
      value: 'Pune, Maharashtra, India',
      href: '#',
    },
  ];

  return (
    <section
      id="contact"
      ref={ref}
      className="relative py-20 md:py-32 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-sky-50 to-white"
    >
      <div className="max-w-6xl mx-auto">
        {/* Section Title */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
            Let's <span className="bg-gradient-to-r from-cyan-600 to-violet-600 bg-clip-text text-transparent">Connect</span>
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Interested in collaborating or have a DevOps challenge? Reach out!
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
          {/* Contact Info Cards */}
          {contactInfo.map((info, i) => {
            const Icon = info.icon;
            return (
              <motion.a
                key={i}
                href={info.href}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                whileHover={{ y: -5 }}
                className="p-6 bg-white rounded-xl border-2 border-slate-200 hover:border-cyan-400 transition-all group"
              >
                <motion.div
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.6 }}
                  className="w-12 h-12 rounded-lg bg-gradient-to-br from-cyan-100 to-violet-100 flex items-center justify-center mb-4 group-hover:from-cyan-500 group-hover:to-violet-500 transition-all"
                >
                  <Icon className="text-cyan-600 group-hover:text-white transition-colors" size={24} />
                </motion.div>
                <p className="text-sm font-semibold text-slate-600 mb-1">{info.label}</p>
                <p className="text-lg font-bold text-slate-900 group-hover:text-cyan-600 transition-colors">
                  {info.value}
                </p>
              </motion.a>
            );
          })}
        </div>

        {/* Contact Form */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="max-w-2xl mx-auto p-8 bg-white rounded-xl border-2 border-slate-200 hover:border-cyan-400 transition-all shadow-xl"
        >
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Name */}
              <motion.div whileHover={{ y: -2 }}>
                <label className="block text-sm font-semibold text-slate-900 mb-2">
                  Full Name
                </label>
                <input
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) =>
                    setFormData({ ...formData, name: e.target.value })
                  }
                  className="w-full px-4 py-3 bg-sky-50 border-2 border-slate-200 rounded-lg focus:border-cyan-500 focus:outline-none focus:ring-0 transition-all"
                  placeholder="Your name"
                />
              </motion.div>

              {/* Email */}
              <motion.div whileHover={{ y: -2 }}>
                <label className="block text-sm font-semibold text-slate-900 mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                  className="w-full px-4 py-3 bg-sky-50 border-2 border-slate-200 rounded-lg focus:border-cyan-500 focus:outline-none focus:ring-0 transition-all"
                  placeholder="your@email.com"
                />
              </motion.div>
            </div>

            {/* Subject */}
            <motion.div whileHover={{ y: -2 }}>
              <label className="block text-sm font-semibold text-slate-900 mb-2">
                Subject
              </label>
              <input
                type="text"
                required
                value={formData.subject}
                onChange={(e) =>
                  setFormData({ ...formData, subject: e.target.value })
                }
                className="w-full px-4 py-3 bg-sky-50 border-2 border-slate-200 rounded-lg focus:border-cyan-500 focus:outline-none focus:ring-0 transition-all"
                placeholder="What's this about?"
              />
            </motion.div>

            {/* Message */}
            <motion.div whileHover={{ y: -2 }}>
              <label className="block text-sm font-semibold text-slate-900 mb-2">
                Message
              </label>
              <textarea
                required
                value={formData.message}
                onChange={(e) =>
                  setFormData({ ...formData, message: e.target.value })
                }
                rows={5}
                className="w-full px-4 py-3 bg-sky-50 border-2 border-slate-200 rounded-lg focus:border-cyan-500 focus:outline-none focus:ring-0 transition-all resize-none"
                placeholder="Tell me more about your project..."
              />
            </motion.div>

            {/* Submit Button */}
            <motion.button
              type="submit"
              disabled={loading || submitted}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className={`w-full py-4 rounded-lg font-semibold flex items-center justify-center gap-2 transition-all ${
                submitted
                  ? 'bg-lime-500 text-white'
                  : 'bg-gradient-to-r from-cyan-500 to-violet-500 text-white hover:shadow-lg'
              }`}
            >
              {loading ? (
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 1, repeat: Infinity }}
                  className="w-5 h-5 border-2 border-white border-t-transparent rounded-full"
                />
              ) : submitted ? (
                <>
                  <CheckCircle size={20} />
                  Message Sent!
                </>
              ) : (
                <>
                  <Send size={20} />
                  Send Message
                </>
              )}
            </motion.button>
          </form>
        </motion.div>
      </div>
    </section>
  );
}
