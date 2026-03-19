import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

import FunkStyles from './components/FunkStyles';
import BootSequence from './components/BootSequence';
import NetworkBackground from './components/NetworkBackground';
import NavigationDock from './components/NavigationDock';
import { IconProvider } from './components/IconContext';
import { IconToggle } from './components/IconWrapper';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Resume from './components/Resume';
import Contact from './components/Contact';

export default function App() {
  const [booting, setBooting] = useState(true);
  const [activeSection, setActiveSection] = useState('hero');

  // Track scroll position to update active Dock element using IntersectionObserver
  useEffect(() => {
    if (booting) return;
    const handleScroll = () => {
      const sections = ['hero', 'about', 'skills', 'projects', 'resume', 'contact'];
      let current = '';

      for (let section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= window.innerHeight / 2 && rect.bottom >= window.innerHeight / 2) {
            current = section;
          }
        }
      }
      if (current && current !== activeSection) {
        setActiveSection(current);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [activeSection, booting]);

  return (
    <IconProvider>
      <FunkStyles />
      <AnimatePresence>
        {booting && <BootSequence onComplete={() => setBooting(false)} />}
      </AnimatePresence>

      {!booting && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.5 }}
          className="relative min-h-screen bg-[#030508] text-slate-200 font-['Inter',sans-serif] selection:bg-cyan-500/30"
        >
          <NetworkBackground />
          <NavigationDock activeSection={activeSection} />

          <div className="fixed top-0 left-1/2 -translate-x-1/2 w-full max-w-3xl h-[40vh] bg-cyan-500/5 blur-[150px] pointer-events-none z-0" />

          <main className="relative z-10 w-full mx-auto md:pl-[80px]">
            <Hero />
            <About />
            <Skills />
            <Projects />
            <Resume />
            <Contact />
          </main>

          <IconToggle />
        </motion.div>
      )}
    </IconProvider>
  );
}