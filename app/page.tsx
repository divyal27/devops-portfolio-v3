'use client';

import React, { useEffect } from 'react';
import Lenis from 'lenis';
import Navbar from '@/components/navbar/Navbar';
import Hero from '@/components/hero/Hero';
import About from '@/components/about/About';
import Experience from '@/components/experience/Experience';
import Projects from '@/components/projects/Projects';
import Skills from '@/components/skills/Skills';
import Certifications from '@/components/certifications/Certifications';
import Contact from '@/components/contact/Contact';
import Footer from '@/components/Footer';
import BlobCursor from '@/components/bits/BlobCursor';

export default function Home() {
  useEffect(() => {
    // Initialize Lenis for smooth scrolling
    const lenis = new Lenis({
      lerp: 0.1,
      wheelMultiplier: 1,
      duration: 1.2,
    });

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, []);

  return (
    <main className="relative w-full overflow-x-hidden bg-sky-50">
      <BlobCursor />
      <Navbar />
      <Hero />
      <About />
      <Experience />
      <Projects />
      <Skills />
      <Certifications />
      <Contact />
      <Footer />
    </main>
  );
}
