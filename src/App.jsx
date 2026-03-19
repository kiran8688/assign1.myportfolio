import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Database, Server, Code, Terminal, ChevronRight,
  ExternalLink, Github, Mail, MapPin, Layers
} from 'lucide-react';

// ==========================================
// 1. MINIMAL STYLE REGISTRY
// ==========================================
const StyleRegistry = () => (
  <style dangerouslySetInnerHTML={{ __html: `
    @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600&family=JetBrains+Mono:wght@400;700&family=Playfair+Display:ital,wght@0,400;0,600;0,700;1,400&display=swap');

    body {
      background-color: #030508;
      color: #e2e8f0;
      font-family: 'Inter', sans-serif;
      overflow-x: hidden;
      scroll-behavior: smooth;
    }

    ::-webkit-scrollbar { width: 4px; }
    ::-webkit-scrollbar-track { background: #030508; }
    ::-webkit-scrollbar-thumb { background: rgba(255,255,255,0.2); border-radius: 10px; }
    ::-webkit-scrollbar-thumb:hover { background: #06b6d4; }
  `}} />
);

// ==========================================
// 2. NEURAL NETWORK BACKGROUND (With Repulsion)
// ==========================================
const NeuralNetworkBackground = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    let width = window.innerWidth;
    let height = window.innerHeight;
    canvas.width = width;
    canvas.height = height;

    // --- Mouse Interactivity Tracking ---
    const mouse = { x: -1000, y: -1000, radius: 150 }; // 150px repulsion field

    // --- ELEMENT INITIALIZATION ---

    // Premium Multi-Color Palette
    const palette = ['6, 182, 212', '59, 130, 246', '139, 92, 246', '236, 72, 153', '16, 185, 129'];

    // Full-Screen Neural Nodes
    const nodes = Array.from({ length: 80 }, () => ({
      x: Math.random() * width,
      y: Math.random() * height,
      vx: (Math.random() - 0.5) * 0.5,
      vy: (Math.random() - 0.5) * 0.5,
      size: Math.random() * 0.5 + 0.15, // Ultra-fine base size of the nodes
      connections: 0, // Track connections for dynamic glowing
      color: palette[Math.floor(Math.random() * palette.length)] // Assign random premium color
    }));

    // --- EVENT LISTENERS ---
    const handleMouseMove = (e) => {
      mouse.x = e.clientX;
      mouse.y = e.clientY;
    };

    const handleMouseLeave = () => {
      mouse.x = -1000;
      mouse.y = -1000;
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseout', handleMouseLeave);

    // --- RENDERING FUNCTIONS ---

    const render = () => {
      ctx.clearRect(0, 0, width, height);

      // Reset connection counts for the current frame
      nodes.forEach(node => node.connections = 0);

      // 1. Calculate Synaptic Connections First
      for (let i = 0; i < nodes.length; i++) {
        for (let j = i + 1; j < nodes.length; j++) {
          const dx = nodes[i].x - nodes[j].x;
          const dy = nodes[i].y - nodes[j].y;
          const d = Math.sqrt(dx * dx + dy * dy);

          if (d < 180) { // Connection threshold
            nodes[i].connections++;
            nodes[j].connections++;

            ctx.beginPath();
            ctx.moveTo(nodes[i].x, nodes[i].y);
            ctx.lineTo(nodes[j].x, nodes[j].y);

            // Opacity and thickness scale with proximity
            const opacity = ((180 - d) / 180) * 0.25;

            // Create a dynamic linear gradient between the two node colors
            const grad = ctx.createLinearGradient(nodes[i].x, nodes[i].y, nodes[j].x, nodes[j].y);
            grad.addColorStop(0, `rgba(${nodes[i].color}, ${opacity})`);
            grad.addColorStop(1, `rgba(${nodes[j].color}, ${opacity})`);

            ctx.strokeStyle = grad; // Apply multi-color gradient
            ctx.lineWidth = 0.5 + (opacity * 1.5);
            ctx.stroke();
          }
        }
      }

      // 2. Update and Draw Nodes (With Repulsion Physics)
      nodes.forEach(node => {
        // Base kinetic movement
        node.x += node.vx;
        node.y += node.vy;

        // Kinetic Repulsion Physics
        const dx = node.x - mouse.x;
        const dy = node.y - mouse.y;
        const distance = Math.sqrt(dx * dx + dy * dy);

        if (distance < mouse.radius) {
          const forceDirectionX = dx / distance;
          const forceDirectionY = dy / distance;
          // The closer the particle is to the mouse, the stronger the push
          const force = (mouse.radius - distance) / mouse.radius;
          const pushX = forceDirectionX * force * 3.5; // Repulsion strength multiplier
          const pushY = forceDirectionY * force * 3.5;

          node.x += pushX;
          node.y += pushY;
        }

        // Smooth bounce off screen edges
        if(node.x < 0) { node.x = 0; node.vx *= -1; }
        if(node.x > width) { node.x = width; node.vx *= -1; }
        if(node.y < 0) { node.y = 0; node.vy *= -1; }
        if(node.y > height) { node.y = height; node.vy *= -1; }

        // Dynamic Node Styling (Glows brighter & grows with more connections)
        ctx.beginPath();
        const dynamicSize = node.size + (node.connections * 0.08); // Halved dynamic growth multiplier
        ctx.arc(node.x, node.y, dynamicSize, 0, Math.PI*2);

        const nodeOpacity = Math.min(0.15 + (node.connections * 0.08), 0.8);
        ctx.fillStyle = `rgba(${node.color}, ${nodeOpacity})`; // Use the node's specific assigned color
        ctx.fill();

        // Add a bright core highlight to highly connected "hub" nodes
        if (node.connections > 3) {
            ctx.beginPath();
            ctx.arc(node.x, node.y, dynamicSize * 0.5, 0, Math.PI*2); // Adjusted core ratio to remain visible
            ctx.fillStyle = `rgba(255, 255, 255, 0.7)`;
            ctx.fill();
        }
      });

      requestAnimationFrame(render);
    }
    render();

    const handleResize = () => {
      width = window.innerWidth; height = window.innerHeight;
      canvas.width = width; canvas.height = height;
    };
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseout', handleMouseLeave);
    };
  }, []);

  return <canvas ref={canvasRef} className="fixed inset-0 z-0 pointer-events-none" />;
};

// ==========================================
// 3. DEEP TECH BOOT SEQUENCE
// ==========================================
const BootSequence = ({ onComplete }) => {
  const [progress, setProgress] = useState(0);
  const [currentProcess, setCurrentProcess] = useState('');

  const processes = [
    { text: "INITIALIZING ROOT VIRTUAL ENVIRONMENT...", time: 200 },
    { text: "RESOLVING DEPENDENCIES (node_modules)...", time: 800 },
    { text: "BUNDLING ASSETS WITH VITE...", time: 1500 },
    { text: "COMPILING REACT COMPONENTS...", time: 2100 },
    { text: "ESTABLISHING DATABASE CONNECTIONS...", time: 2700 },
    { text: "RENDERING GLASSMORPHISM UI LAYER...", time: 3300 },
    { text: "SYSTEM ARCHITECTURE COMPILED. WELCOME.", time: 3900 }
  ];

  useEffect(() => {
    let startTime = Date.now();
    const duration = 4000;
    const interval = setInterval(() => {
      const elapsed = Date.now() - startTime;
      const percent = Math.min((elapsed / duration) * 100, 100);
      setProgress(percent);
      const activeProcess = processes.reduce((prev, curr) => elapsed >= curr.time ? curr : prev);
      setCurrentProcess(activeProcess.text);
      if (percent >= 100) {
        clearInterval(interval);
        setTimeout(onComplete, 500);
      }
    }, 50);
    return () => clearInterval(interval);
  }, [onComplete]);

  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0, filter: "blur(20px)", transition: { duration: 1.2 } }}
      className="fixed inset-0 z-50 bg-[#030508] flex flex-col items-center justify-center p-8 font-['JetBrains_Mono',monospace]"
    >
      <div className="w-full max-w-3xl">
        <div className="flex justify-between text-cyan-500 mb-4 text-sm tracking-widest border-b border-cyan-500/30 pb-2">
          <span>KIRAN_SYS_INIT_SEQUENCE</span>
          <span>{progress.toFixed(2)}%</span>
        </div>
        <div className="h-1 w-full bg-white/5 relative overflow-hidden mb-8">
          <div className="absolute top-0 left-0 h-full bg-cyan-500 shadow-[0_0_10px_#06b6d4]" style={{ width: `${progress}%` }} />
        </div>
        <div className="h-32 text-slate-400 text-sm flex flex-col gap-2">
          <div className="flex gap-4">
            <span className="text-slate-600">[{new Date().toISOString().split('T')[1].slice(0,-1)}]</span>
            <span className="text-emerald-400 animate-pulse">EXEC</span>
            <span className="text-white">{currentProcess}</span>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

// ==========================================
// 4. MAIN CINEMATIC APPLICATION
// ==========================================
export default function App() {
  const [booting, setBooting] = useState(true);

  // Cinematic Premium Glass Panel Style
  const glassStyle = "bg-[#0A0F1A]/40 backdrop-blur-2xl border border-white/5 border-t-white/10 shadow-[0_20px_40px_-10px_rgba(0,0,0,0.7),inset_0_1px_0_0_rgba(255,255,255,0.1)] rounded-3xl overflow-hidden transition-all duration-700";

  return (
    <>
      <StyleRegistry />
      <AnimatePresence>
        {booting && <BootSequence onComplete={() => setBooting(false)} />}
      </AnimatePresence>

      {!booting && (
        <motion.div
          initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1.5 }}
          className="relative min-h-screen bg-[#030508] text-slate-200 font-['Inter',sans-serif] selection:bg-cyan-500/30"
        >
          <NeuralNetworkBackground />

          <div className="fixed top-0 left-1/2 -translate-x-1/2 w-full max-w-3xl h-[40vh] bg-cyan-500/5 blur-[150px] pointer-events-none z-0" />

          <div className="relative z-10 w-full max-w-5xl mx-auto px-6">

            {/* HERO */}
            <section className="min-h-screen flex flex-col justify-center items-center text-center pt-20 pb-32">
              <motion.div initial={{ y: 40, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 1, delay: 0.2 }}>
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-cyan-500/30 bg-cyan-500/10 text-cyan-400 font-['JetBrains_Mono',monospace] text-xs uppercase tracking-widest mb-10 shadow-[0_0_20px_rgba(6,182,212,0.2)]">
                  <Terminal size={14} /> Full-Stack Developer
                </div>

                <h1 className="font-['Playfair_Display',serif] text-6xl md:text-8xl lg:text-[7rem] font-bold text-white leading-[1.1] mb-8 tracking-tight">
                  Kiran Kumar <br/>
                  <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 bg-clip-text text-transparent italic">Singaram.</span>
                </h1>

                <p className="text-xl md:text-2xl text-slate-400 font-light max-w-3xl mx-auto leading-relaxed mb-12">
                  Architecting resilient backend databases, robust APIs, and immersive modern web interfaces. Bridging the gap between complex data and elegant UI.
                </p>

                <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
                  <a href="#portfolio" className="group px-8 py-4 bg-white text-black rounded-full font-medium flex items-center gap-2 hover:scale-105 transition-all duration-300">
                    Explore Architecture <ChevronRight size={18} className="group-hover:translate-x-1 transition-transform" />
                  </a>
                  <div className="flex items-center gap-4">
                    <a href="https://github.com/kiran8688" target="_blank" rel="noreferrer" className="p-4 bg-white/5 border border-white/10 rounded-full text-white hover:text-cyan-400 hover:bg-white/10 transition-all duration-300">
                      <Github size={20} />
                    </a>
                    <a href="mailto:skirankumar2015@gmail.com" className="p-4 bg-white/5 border border-white/10 rounded-full text-white hover:text-cyan-400 hover:bg-white/10 transition-all duration-300">
                      <Mail size={20} />
                    </a>
                  </div>
                </div>
              </motion.div>
            </section>

            {/* TECHNICAL ARSENAL */}
            <section className="py-24">
              <motion.div
                initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
                className="text-center mb-16"
              >
                <h2 className="font-['Playfair_Display',serif] text-4xl text-white mb-4">Technical Arsenal</h2>
                <div className="w-16 h-[1px] bg-cyan-500 mx-auto" />
              </motion.div>

              <div className="flex flex-col gap-6">
                {[
                  { title: "Core Architecture", icon: <Database size={24}/>, color: "text-purple-400", bg: "bg-purple-500/10", border: "border-purple-500/20", skills: ["Python", "C++", "PostgreSQL", "Alembic", "Pandas", "NumPy"] },
                  { title: "Backend Systems", icon: <Server size={24}/>, color: "text-blue-400", bg: "bg-blue-500/10", border: "border-blue-500/20", skills: ["Node.js", "FastAPI", "RESTful APIs", "Docker", "Pytest"] },
                  { title: "Client Interfaces", icon: <Code size={24}/>, color: "text-cyan-400", bg: "bg-cyan-500/10", border: "border-cyan-500/20", skills: ["React JS", "JavaScript (ES6+)", "Tailwind CSS", "Figma"] }
                ].map((stack, idx) => (
                  <motion.div
                    key={idx} initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: idx * 0.1 }}
                    className={`${glassStyle} p-6 md:p-8 flex flex-col md:flex-row items-start md:items-center gap-6 hover:bg-white/5`}
                  >
                    <div className={`p-4 rounded-2xl border ${stack.bg} ${stack.border} ${stack.color} shrink-0`}>
                      {stack.icon}
                    </div>
                    <div className="flex-1">
                      <h3 className="font-['Playfair_Display',serif] text-2xl text-white mb-3">{stack.title}</h3>
                      <div className="flex flex-wrap gap-2">
                        {stack.skills.map(skill => (
                          <span key={skill} className="font-['JetBrains_Mono',monospace] text-xs px-3 py-1 bg-[#030508]/50 border border-white/5 rounded-full text-slate-300">
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </section>

            {/* SHOWCASE */}
            <section id="portfolio" className="py-24">
              <motion.div
                initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
                className="text-center mb-20"
              >
                <h2 className="font-['Playfair_Display',serif] text-4xl text-white mb-4">Engineered Platforms</h2>
                <div className="w-16 h-[1px] bg-blue-500 mx-auto" />
              </motion.div>

              <div className="space-y-24">
                {[
                  {
                    title: "Restaurant Web Application",
                    type: "Full-Stack System",
                    desc: "A responsive, component-based frontend architecture built with React. Features complex local state management, dynamic routing, and fluid animations.",
                    link: "https://little-lemon-restaurant-app-by-kiran.netlify.app/",
                    tags: ["React", "UI/UX", "State Management"]
                  },
                  {
                    title: "E-Commerce API Integration",
                    type: "Dynamic Storefront",
                    desc: "An intelligent storefront system consuming public REST APIs. Built with dynamic rendering capabilities, advanced client-side filtering logic, and asynchronous data fetching.",
                    link: "https://kirankumar-fake-store.netlify.app/",
                    tags: ["React", "REST API", "Async Logic"]
                  },
                  {
                    title: "Client Expense Pipeline",
                    type: "Data Management App",
                    desc: "Secure, in-browser data management application. Utilizes advanced JavaScript array manipulation for real-time financial calculations, persistent local storage, and dynamic UI updates.",
                    link: "https://expense-traker-by-kiran.netlify.app/",
                    tags: ["JavaScript", "Local Storage", "Data Viz"]
                  }
                ].map((project, idx) => (
                  <motion.div
                    key={idx} initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-100px" }}
                    className={`${glassStyle} group relative flex flex-col md:flex-row ${idx % 2 !== 0 ? 'md:flex-row-reverse' : ''} min-h-[400px]`}
                  >
                    <div className="w-full md:w-5/12 bg-[#05080f] p-12 flex items-center justify-center relative overflow-hidden border-b md:border-b-0 md:border-r border-white/5 border-opacity-10">
                      <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                      <Layers className="w-32 h-32 text-white/5 group-hover:scale-110 group-hover:text-cyan-500/20 transition-all duration-700" strokeWidth={0.5} />
                    </div>

                    <div className="w-full md:w-7/12 p-10 md:p-16 flex flex-col justify-center">
                      <p className="font-['JetBrains_Mono',monospace] text-cyan-400 text-xs uppercase tracking-widest mb-3">{project.type}</p>
                      <h3 className="font-['Playfair_Display',serif] text-3xl md:text-4xl text-white mb-6 group-hover:text-cyan-300 transition-colors">{project.title}</h3>
                      <p className="text-slate-400 leading-relaxed mb-8">{project.desc}</p>

                      <div className="flex flex-wrap gap-2 mb-10">
                        {project.tags.map(tag => (
                          <span key={tag} className="font-['JetBrains_Mono',monospace] text-[10px] uppercase tracking-wider px-3 py-1.5 bg-white/5 border border-white/5 rounded text-slate-300">
                            {tag}
                          </span>
                        ))}
                      </div>

                      <a href={project.link} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 text-white font-medium hover:text-cyan-400 transition-colors w-fit">
                        Deploy Protocol <ExternalLink size={16} />
                      </a>
                    </div>
                  </motion.div>
                ))}
              </div>
            </section>

            {/* TIMELINE */}
            <section className="py-24">
              <motion.div
                initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
                className="text-center mb-20"
              >
                <h2 className="font-['Playfair_Display',serif] text-4xl text-white mb-4">Professional Timeline</h2>
                <div className="w-16 h-[1px] bg-purple-500 mx-auto" />
              </motion.div>

              <div className="max-w-3xl mx-auto relative">
                <div className="absolute left-[20px] md:left-1/2 md:-translate-x-1/2 top-0 bottom-0 w-[1px] bg-gradient-to-b from-cyan-500/50 via-purple-500/50 to-transparent" />

                {[
                  { title: "Full-Stack Development Trainee", org: "Innomatics Research Labs", date: "Jan 2025 - Present", desc: "Intensive training focusing on modern web stacks, robust architecture, and enterprise-level application design." },
                  { title: "META Professional Certifications", org: "Coursera", date: "Ongoing", desc: "Advanced dual-certification in Front-End and Back-End development paradigms, ensuring industry-standard coding practices." },
                  { title: "B.Tech in Computer Science", org: "MREC", date: "May 2024", desc: "Foundational computer science principles, algorithms, data structures, and networking. CGPA: 6.75." }
                ].map((item, idx) => (
                  <motion.div
                    key={idx} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: idx * 0.2 }}
                    className={`relative flex flex-col md:flex-row items-start md:items-center justify-between mb-16 pl-12 md:pl-0 ${idx % 2 === 0 ? 'md:flex-row-reverse' : ''}`}
                  >
                    <div className="absolute left-[16px] md:left-1/2 md:-translate-x-1/2 w-2.5 h-2.5 rounded-full bg-cyan-400 shadow-[0_0_15px_#06b6d4] mt-2 md:mt-0 z-10" />

                    <div className="w-full md:w-[45%]">
                      <div className={`${glassStyle} p-6 md:p-8 hover:bg-white/5`}>
                        <h4 className="font-['Playfair_Display',serif] text-xl text-white mb-1">{item.title}</h4>
                        <p className="font-['JetBrains_Mono',monospace] text-xs text-cyan-400 mb-4">{item.org} // {item.date}</p>
                        <p className="text-sm text-slate-400 leading-relaxed">{item.desc}</p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </section>

            {/* FOOTER */}
            <motion.section
              initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}
              className="py-32 text-center relative border-t border-white/5 mt-12"
            >
              <h2 className="font-['Playfair_Display',serif] text-5xl text-white mb-6">Initialize Connection</h2>
              <p className="text-slate-400 max-w-xl mx-auto mb-10 leading-relaxed">
                Currently seeking full-time opportunities. If you're looking for a developer who understands both the backend architecture and the visual DOM, my inbox is open.
              </p>

              <a href="mailto:skirankumar2015@gmail.com" className="inline-flex items-center gap-3 px-10 py-5 bg-white text-black rounded-full font-medium hover:scale-105 shadow-[0_0_30px_rgba(255,255,255,0.1)] transition-all duration-300">
                <Terminal size={18} /> Transmit Data
              </a>

              <div className="mt-24 flex flex-col md:flex-row items-center justify-between text-xs font-['JetBrains_Mono',monospace] text-slate-500">
                <p>© {new Date().getFullYear()} ENGINEERED BY KIRAN KUMAR SINGARAM</p>
                <p className="flex items-center justify-center gap-2 mt-4 md:mt-0"><MapPin size={12}/> HYDERABAD, IND SERVER</p>
              </div>
            </motion.section>

          </div>
        </motion.div>
      )}
    </>
  );
}