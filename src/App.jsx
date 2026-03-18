import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

import FunkStyles from './components/FunkStyles';
import BootSequence from './components/BootSequence';
import NetworkBackground from './components/NetworkBackground';
import NavigationDock from './components/NavigationDock';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Resume from './components/Resume';
import Contact from './components/Contact';

export default function App() {
  const [booting, setBooting] = useState(true);
  const [activeSection, setActiveSection] = useState('hero');

  // Track scroll position to update active Dock element
  useEffect(() => {
    if (booting) return;

    const sections = ['hero', 'about', 'skills', 'projects', 'resume', 'contact'];

    // Performance optimization: Replace 'scroll' event listener with IntersectionObserver
    // This offloads visibility calculation to the browser's native engine, preventing
    // continuous JS execution and layout thrashing (getBoundingClientRect) on the main thread.
    const observerCallback = (entries) => {
      // Find the intersecting entry
      const activeEntry = entries.find(entry => entry.isIntersecting);

      if (activeEntry) {
        // Utilize a functional state update to omit `activeSection` from the dependency array,
        // avoiding the overhead of destroying and recreating the observer whenever the section changes.
        setActiveSection(prev => activeEntry.target.id !== prev ? activeEntry.target.id : prev);
      }
    };

    const observerOptions = {
      // Create a horizontal line in the middle of the viewport
      rootMargin: '-49% 0px -49% 0px',
      threshold: 0
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);

    sections.forEach(section => {
      const element = document.getElementById(section);
      if (element) observer.observe(element);
    });

    return () => observer.disconnect();
  }, [booting]);

  return (
    <>
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
        </motion.div>
      )}
    </>
  );
}