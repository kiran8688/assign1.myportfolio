import React, { useState, useEffect } from 'react';
import FunkStyles from './components/FunkStyles';
import NetworkBackground from './components/NetworkBackground';
import NavigationDock from './components/NavigationDock';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Resume from './components/Resume';
import Contact from './components/Contact';

export default function App() {
  const [activeSection, setActiveSection] = useState('hero');

  // Track scroll position to update active Dock element
  useEffect(() => {
    const handleScroll = () => {
      const sections = ['hero', 'about', 'skills', 'projects', 'resume', 'contact'];
      let current = '';

      for (let section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          // Adjust threshold based on section sizing
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
  }, [activeSection]);

  return (
    <div className="relative w-full min-h-screen selection:bg-pink-500 selection:text-white">
      <FunkStyles />

      {/* Live Animated Network Background */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none z-0 bg-[#050508]">
        <NetworkBackground />
        {/* Noise overlay for texture */}
        <div className="absolute inset-0 opacity-[0.03] mix-blend-overlay" style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")` }}></div>
      </div>

      <NavigationDock activeSection={activeSection} />

      <main className="relative z-10 pl-0 md:pl-[80px]">
        <Hero />
        <About />
        <Skills />
        <Resume />
        <Projects />
        <Contact />
      </main>

      <footer className="relative z-10 py-8 text-center border-t border-white/5 pl-0 md:pl-[80px]">
        <p className="text-slate-500 text-sm font-light">
          &copy; {new Date().getFullYear()} Designed & Built by <span className="text-white font-medium">Kiran Kumar Singaram</span>
        </p>
      </footer>
    </div>
  );
}
