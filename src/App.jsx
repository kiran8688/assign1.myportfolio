import { useState, useEffect } from 'react';
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

// Ordered array of section IDs to track user scroll progress
const SECTIONS = ['hero', 'about', 'skills', 'projects', 'resume', 'contact'];

/**
 * Main Application Component
 * Orchestrates the initial boot sequence and subsequently renders the main portfolio content.
 * Manages global state such as scroll tracking to update the NavigationDock.
 */
export default function App() {
  const [booting, setBooting] = useState(true); // Controls the initial startup animation overlay
  const [activeSection, setActiveSection] = useState('hero'); // Tracks which section is currently in view

  // Uses IntersectionObserver to track which section is in view.
  // This is more performant than a scroll listener as it avoids layout thrashing from getBoundingClientRect.
  useEffect(() => {
    if (booting) return;

    // The observer looks for when a section crosses the vertical center of the viewport
    const observerOptions = {
      root: null,
      rootMargin: '-50% 0px -50% 0px',
      threshold: 0,
    };

    const observerCallback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);

    // Track all registered sections
    SECTIONS.forEach((sectionId) => {
      const element = document.getElementById(sectionId);
      if (element) observer.observe(element);
    });

    return () => observer.disconnect();
  }, [booting]);

  return (
    <>
      {/* Global CSS injections (animations, fonts) */}
      <FunkStyles />

      {/* Boot Sequence Overlay: Unmounts smoothly when the application is ready */}
      <AnimatePresence>
        {booting && <BootSequence onComplete={() => setBooting(false)} />}
      </AnimatePresence>

      {/* Main Content: Only renders and fades in after the boot sequence is finished */}
      {!booting && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.5 }}
          className="relative bg-black text-white/85 min-h-screen overflow-x-hidden font-['Inter',sans-serif] selection:bg-cyan-500/30"
        >
          {/* Global immersive backgrounds and sticky navigation */}
          <NetworkBackground />
          <NavigationDock activeSection={activeSection} />

          {/* Top-aligned subtle ambient glow for the hero section */}
          <div className="fixed top-0 left-1/2 -translate-x-1/2 w-full max-w-3xl h-[40vh] bg-cyan-500/5 blur-[150px] pointer-events-none z-0" />

          {/* Core scrollable content wrapper. Padding-left offsets the fixed NavigationDock on desktop. */}
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