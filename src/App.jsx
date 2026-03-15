import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  User, Cpu, FolderOpen, Mail,
  MapPin, Phone, Github, ExternalLink, Code2, ArrowRight, Sparkles, Wand2, Loader2, Bot
} from 'lucide-react';

// ==========================================
// 1. GEMINI API UTILITY
// ==========================================
const callGemini = async (prompt, systemPrompt = "") => {
  const apiKey = import.meta.env.VITE_GEMINI_API_KEY || ""; // API Key via env vars
  if (!apiKey) {
    return "API Key not configured. Please add VITE_GEMINI_API_KEY to your environment.";
  }
  const url = `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash-preview-09-2025:generateContent?key=${apiKey}`;

  const payload = {
    contents: [{ parts: [{ text: prompt }] }]
  };

  if (systemPrompt) {
    payload.systemInstruction = { parts: [{ text: systemPrompt }] };
  }

  let delay = 1000;
  for (let attempt = 0; attempt < 5; attempt++) {
    try {
      const response = await fetch(url, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload)
      });
      if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);
      const data = await response.json();
      return data.candidates?.[0]?.content?.parts?.[0]?.text || "No response generated.";
    } catch (_error) {
      if (attempt === 4) return "Failed to connect to AI core. Please try again later.";
      await new Promise(res => setTimeout(res, delay));
      delay *= 2;
    }
  }
};

// ==========================================
// 2. GLOBAL STYLES & ANIMATED MESH
// ==========================================
const FunkStyles = () => (
  <style dangerouslySetInnerHTML={{ __html: `
    @import url('https://fonts.googleapis.com/css2?family=Outfit:wght@300;400;500;600&family=Space+Grotesk:wght@500;700;900&display=swap');

    :root {
      --bg-dark: #050508;
      --card-bg: rgba(255, 255, 255, 0.03);
      --card-border: rgba(255, 255, 255, 0.08);
      --funk-purple: #a855f7;
      --funk-pink: #ec4899;
      --funk-orange: #f97316;
    }

    body {
      background-color: var(--bg-dark);
      color: #f8fafc;
      font-family: 'Outfit', sans-serif;
      overflow-x: hidden;
      scroll-behavior: smooth;
    }

    h1, h2, h3, h4, .font-display {
      font-family: 'Space Grotesk', sans-serif;
    }

    /* Modern Custom Scrollbar */
    ::-webkit-scrollbar { width: 8px; }
    ::-webkit-scrollbar-track { background: var(--bg-dark); }
    ::-webkit-scrollbar-thumb { background: rgba(255,255,255,0.2); border-radius: 10px; }
    ::-webkit-scrollbar-thumb:hover { background: rgba(255,255,255,0.4); }

    /* Text Selection */
    ::selection { background: var(--funk-pink); color: #fff; }

    /* Animated Background Orbs */
    .orb-1 {
      position: absolute;
      top: -10%;
      left: -10%;
      width: 50vw;
      height: 50vw;
      border-radius: 50%;
      background: radial-gradient(circle, rgba(168,85,247,0.15) 0%, rgba(0,0,0,0) 70%);
      animation: float 20s infinite ease-in-out alternate;
      z-index: 0;
      pointer-events: none;
    }
    .orb-2 {
      position: absolute;
      bottom: -10%;
      right: -10%;
      width: 60vw;
      height: 60vw;
      border-radius: 50%;
      background: radial-gradient(circle, rgba(236,72,153,0.15) 0%, rgba(0,0,0,0) 70%);
      animation: float 25s infinite ease-in-out alternate-reverse;
      z-index: 0;
      pointer-events: none;
    }
    .orb-3 {
      position: absolute;
      top: 40%;
      left: 30%;
      width: 40vw;
      height: 40vw;
      border-radius: 50%;
      background: radial-gradient(circle, rgba(249,115,22,0.1) 0%, rgba(0,0,0,0) 70%);
      animation: float 18s infinite ease-in-out;
      z-index: 0;
      pointer-events: none;
    }

    @keyframes float {
      0% { transform: translate(0, 0) scale(1); }
      50% { transform: translate(5%, 10%) scale(1.1); }
      100% { transform: translate(-5%, -5%) scale(0.9); }
    }

    /* Glass Card Utility */
    .glass-card {
      background: var(--card-bg);
      backdrop-filter: blur(20px);
      -webkit-backdrop-filter: blur(20px);
      border: 1px solid var(--card-border);
      border-radius: 1.5rem;
      box-shadow: 0 8px 32px 0 rgba(0, 0, 0, 0.3);
    }

    .text-gradient {
      background-clip: text;
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      background-image: linear-gradient(90deg, #a855f7, #ec4899, #f97316);
    }
  `}} />
);

// ==========================================
// 2. COMPONENTS
// ==========================================

const SectionHeader = ({ title, subtitle, align = "left" }) => (
  <div className={`mb-16 ${align === "center" ? "text-center" : ""}`}>
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card mb-6"
    >
      <Sparkles size={16} className="text-pink-400" />
      <span className="text-sm font-medium tracking-wide text-slate-300 uppercase">{subtitle}</span>
    </motion.div>
    <motion.h2
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: 0.1 }}
      className="text-4xl md:text-6xl font-display font-bold text-white tracking-tight"
    >
      {title}
    </motion.h2>
  </div>
);

// --- FLOATING PILL NAVIGATION ---
const NavigationDock = ({ activeSection }) => {
  const navItems = [
    { id: 'hero', icon: Sparkles, label: 'Home' },
    { id: 'about', icon: User, label: 'About' },
    { id: 'skills', icon: Cpu, label: 'Skills' },
    { id: 'projects', icon: FolderOpen, label: 'Work' },
    { id: 'contact', icon: Mail, label: 'Contact' },
  ];

  return (
    <motion.div
      initial={{ y: 100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ type: 'spring', damping: 20, stiffness: 100, delay: 0.5 }}
      className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50 glass-card px-2 py-2 rounded-full hidden md:flex items-center gap-2"
    >
      {navItems.map((item) => {
        const isActive = activeSection === item.id;
        return (
          <a
            key={item.id}
            href={`#${item.id}`}
            className={`relative p-4 rounded-full flex items-center justify-center transition-all duration-300 group
              ${isActive ? 'text-white' : 'text-slate-400 hover:text-white hover:bg-white/5'}`}
          >
            <item.icon size={22} className="relative z-10" />

            {/* Tooltip */}
            <div className="absolute bottom-full mb-4 px-3 py-1.5 glass-card rounded-lg text-sm font-medium opacity-0 group-hover:opacity-100 transition-all transform translate-y-2 group-hover:translate-y-0 pointer-events-none whitespace-nowrap">
              {item.label}
            </div>

            {/* Active Pill Indicator */}
            {isActive && (
              <motion.div
                layoutId="activeDockPill"
                className="absolute inset-0 bg-gradient-to-r from-purple-500/20 to-pink-500/20 border border-white/10 rounded-full"
                transition={{ type: "spring", stiffness: 300, damping: 30 }}
              />
            )}
          </a>
        );
      })}
    </motion.div>
  );
};

// --- HERO SECTION ---
const Hero = () => {
  return (
    <section id="hero" className="min-h-screen relative flex items-center justify-center pt-20 pb-10 px-6 lg:px-24">
      <div className="relative z-10 w-full max-w-6xl flex flex-col items-center text-center">

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="mb-8"
        >
          <img
            src={import.meta.env.BASE_URL + "img/kiran.jpg"}
            alt="Kiran Kumar"
            className="w-32 h-32 md:w-40 md:h-40 rounded-full object-cover border-4 border-white/10 shadow-2xl shadow-purple-500/20"
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-display font-black tracking-tight text-white mb-6">
            Hi, I'm <span className="text-gradient">Kiran</span><br/>
            Full-Stack Developer.
          </h1>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-lg md:text-xl text-slate-400 max-w-2xl mb-12 font-light leading-relaxed"
        >
          Crafting responsive, intuitive, and highly functional web experiences. Seeking to inject modern design patterns into robust digital architectures.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="flex flex-wrap items-center justify-center gap-6"
        >
          <a href="#projects" className="group relative px-8 py-4 bg-white text-black font-semibold rounded-full overflow-hidden transition-transform hover:scale-105 active:scale-95">
            <span className="relative z-10 flex items-center gap-2">
              View My Work
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </span>
            <div className="absolute inset-0 bg-gradient-to-r from-purple-200 to-pink-200 opacity-0 group-hover:opacity-100 transition-opacity"></div>
          </a>

          <a href="#contact" className="px-8 py-4 glass-card text-white font-semibold rounded-full transition-all hover:bg-white/10 hover:border-white/20 active:scale-95">
            Let's Talk
          </a>
        </motion.div>
      </div>
    </section>
  );
};

// --- ABOUT SECTION (Bento Box Layout) ---
const About = () => {
  const defaultBio = "I am passionate about building responsive and user-friendly web applications. My goal is to secure a position in a growth-oriented organization where I can apply my knowledge of front-end and full-stack development. I am highly committed to continuous learning and improving technical problem-solving skills through real-world challenges.";

  const [bioText, setBioText] = useState(defaultBio);
  const [isGeneratingBio, setIsGeneratingBio] = useState(false);
  const [activeTone, setActiveTone] = useState('default');

  const generateBio = async (tone) => {
    if (isGeneratingBio) return;
    setIsGeneratingBio(true);
    setActiveTone(tone);

    if (tone === 'default') {
      setBioText(defaultBio);
      setIsGeneratingBio(false);
      return;
    }

    const prompt = `Rewrite this professional bio to be in a ${tone} tone. Make it creative, engaging, and keep it under 3-4 sentences. Original bio: "${defaultBio}"`;
    const systemPrompt = "You are an AI assistant helping a web developer named Kiran Kumar rewrite their portfolio bio.";

    const response = await callGemini(prompt, systemPrompt);
    setBioText(response);
    setIsGeneratingBio(false);
  };

  return (
    <section id="about" className="py-24 px-6 lg:px-24 relative z-10">
      <div className="max-w-6xl mx-auto">
        <SectionHeader title="Get to know me." subtitle="About" />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Main Bio Card with AI Integration */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="md:col-span-2 glass-card p-8 md:p-10 flex flex-col justify-center relative overflow-hidden group"
          >
            <div className="absolute top-0 right-0 w-64 h-64 bg-purple-500/10 rounded-full blur-3xl group-hover:bg-purple-500/20 transition-colors duration-700"></div>

            <div className="flex flex-col xl:flex-row xl:items-center justify-between gap-4 mb-6 relative z-10">
              <h3 className="text-2xl font-display font-bold text-white whitespace-nowrap">Entry-Level Web Developer</h3>

              {/* AI Tone Selectors */}
              <div className="flex flex-wrap gap-2">
                {[
                  { id: 'default', label: 'Standard' },
                  { id: 'casual', label: 'Casual ✨' },
                  { id: 'pirate', label: 'Pirate ✨' },
                  { id: 'scifi', label: 'Sci-Fi ✨' }
                ].map((tone) => (
                  <button
                    key={tone.id}
                    onClick={() => generateBio(tone.id)}
                    className={`px-3 py-1.5 rounded-full text-xs font-medium transition-all duration-300 border ${
                      activeTone === tone.id
                        ? 'bg-purple-500 text-white border-purple-400 shadow-[0_0_15px_rgba(168,85,247,0.5)]'
                        : 'bg-white/5 text-slate-400 border-white/10 hover:bg-white/10 hover:text-white'
                    }`}
                  >
                    {tone.label}
                  </button>
                ))}
              </div>
            </div>

            <div className="relative z-10 min-h-[120px]">
              {isGeneratingBio ? (
                <div className="flex flex-col items-center justify-center h-full gap-3 text-purple-400 animate-pulse py-8">
                  <Wand2 size={32} className="animate-spin-slow" />
                  <span className="text-sm font-medium">AI is weaving magic...</span>
                </div>
              ) : (
                <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="text-slate-300 leading-relaxed text-lg font-light mb-6"
                >
                  {bioText}
                </motion.p>
              )}
            </div>

            <div className="inline-flex items-center gap-2 text-pink-400 font-medium relative z-10 mt-auto">
              <Sparkles size={18} /> Available for new opportunities
            </div>
          </motion.div>

          {/* Contact Details Bento */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="glass-card p-8 flex flex-col gap-6"
          >
            <div>
              <p className="text-sm text-slate-500 uppercase tracking-widest mb-1">Location</p>
              <p className="text-white font-medium flex items-center gap-2"><MapPin size={18} className="text-orange-400"/> Hyderabad, IND</p>
            </div>
            <div>
              <p className="text-sm text-slate-500 uppercase tracking-widest mb-1">Education</p>
              <p className="text-white font-medium flex items-center gap-2"><User size={18} className="text-purple-400"/> B.Tech CS (2024)</p>
            </div>
            <div>
              <p className="text-sm text-slate-500 uppercase tracking-widest mb-1">Direct Line</p>
              <p className="text-white font-medium flex items-center gap-2"><Phone size={18} className="text-pink-400"/> +91 8099951768</p>
            </div>
            <a href="https://github.com/kiran8688" target="_blank" rel="noreferrer" className="mt-auto flex items-center justify-between p-4 bg-white/5 rounded-2xl hover:bg-white/10 transition-colors group">
              <span className="flex items-center gap-2 text-white font-medium"><Github size={20} /> GitHub</span>
              <ExternalLink size={16} className="text-slate-400 group-hover:text-white transition-colors" />
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

// --- SKILLS SECTION ---
const Skills = () => {
  const skillsList = [
    { name: 'React JS', icon: '⚛️' }, { name: 'JavaScript', icon: '🟨' },
    { name: 'Tailwind CSS', icon: '🌊' }, { name: 'Python', icon: '🐍' },
    { name: 'Material UI', icon: '🎨' }, { name: 'MySQL', icon: '🗄️' },
    { name: 'Git', icon: '📦' }, { name: 'Figma', icon: '✨' }
  ];

  const certs = [
    { year: '2025', title: 'Full-Stack Training', org: 'Innomatics Research Labs', color: 'from-purple-500/20 to-transparent' },
    { year: 'Present', title: 'META Front-End', org: 'Coursera', color: 'from-pink-500/20 to-transparent' },
    { year: 'Present', title: 'META Back-End', org: 'Coursera', color: 'from-orange-500/20 to-transparent' }
  ];

  return (
    <section id="skills" className="py-24 px-6 lg:px-24 relative z-10">
      <div className="max-w-6xl mx-auto">
        <SectionHeader title="What I bring to the table." subtitle="Hardware & Software" />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Tags / Pills */}
          <div>
            <h3 className="text-2xl font-display font-bold text-white mb-6">Core Stack</h3>
            <div className="flex flex-wrap gap-3">
              {skillsList.map((skill, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05 }}
                  className="px-5 py-3 glass-card rounded-full flex items-center gap-2 hover:bg-white/10 transition-colors cursor-default"
                >
                  <span className="text-lg">{skill.icon}</span>
                  <span className="text-white font-medium">{skill.name}</span>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Certifications */}
          <div>
            <h3 className="text-2xl font-display font-bold text-white mb-6 flex items-center gap-2">
              <Code2 className="text-pink-400" /> Training & Certifications
            </h3>
            <div className="flex flex-col gap-4">
              {certs.map((cert, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className={`glass-card p-6 overflow-hidden relative group`}
                >
                  <div className={`absolute inset-0 bg-gradient-to-r ${cert.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}></div>
                  <div className="relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-4">
                    <div>
                      <h4 className="text-xl font-display font-bold text-white mb-1">{cert.title}</h4>
                      <p className="text-slate-400 text-sm">{cert.org}</p>
                    </div>
                    <span className="px-4 py-1.5 bg-white/10 text-white text-sm rounded-full font-medium whitespace-nowrap w-fit">
                      {cert.year}
                    </span>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

// --- PROJECTS SECTION ---
const Projects = () => {
  const projects = [
    {
      title: "Restaurant Web App",
      tags: ["React JS", "UI/UX", "Hooks"],
      desc: "Developed a responsive restaurant web application using React JS and component-based architecture. Built reusable UI components and managed complex application state smoothly."
    },
    {
      title: "E-commerce App",
      tags: ["React JS", "Axios", "Material UI"],
      desc: "Developed an e-commerce style application that consumes a public REST API. Rendered dynamic product listings and implemented advanced filtering capabilities."
    },
    {
      title: "Expense Tracker",
      tags: ["React JS", "Local Storage"],
      desc: "Built a sleek expense tracking application to capture and manage daily expenses securely within the browser. Implemented intuitive add, edit, and delete features."
    },
    {
      title: "Static Landing Page",
      tags: ["HTML5", "CSS3", "Flexbox"],
      desc: "Designed and developed a highly optimized static landing page using semantic HTML5 and modern CSS3 techniques, focusing strictly on a mobile-first responsive layout."
    }
  ];

  const [generatingProjectId, setGeneratingProjectId] = useState(null);
  const [aiExplanations, setAiExplanations] = useState({});

  const explainProject = async (project, index) => {
    if (aiExplanations[index] || generatingProjectId !== null) return;

    setGeneratingProjectId(index);

    const prompt = `Explain this web development project to a non-technical recruiter or client. Focus on the value it brings and why the tech stack (${project.tags.join(', ')}) was a good choice. Make it engaging, fun, and keep it strictly under 3 sentences. Project Title: ${project.title}. Technical Description: ${project.desc}`;
    const systemPrompt = "You are Kiran Kumar's AI hype-man. Explain their projects enthusiastically but professionally to non-technical folks.";

    const response = await callGemini(prompt, systemPrompt);
    setAiExplanations(prev => ({ ...prev, [index]: response }));
    setGeneratingProjectId(null);
  };

  return (
    <section id="projects" className="py-24 px-6 lg:px-24 relative z-10">
      <div className="max-w-6xl mx-auto">
        <SectionHeader title="Selected works." subtitle="Portfolio" />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="glass-card p-8 group hover:-translate-y-2 transition-all duration-500 flex flex-col h-full relative overflow-hidden"
            >
              {/* Soft Hover Glow */}
              <div className="absolute -top-24 -right-24 w-48 h-48 bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>

              <div className="flex justify-between items-start mb-6 relative z-10">
                <h4 className="text-2xl font-display font-bold text-white group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-purple-400 group-hover:to-pink-400 transition-all duration-300">
                  {project.title}
                </h4>
                <div className="flex gap-2">
                  <button
                    onClick={() => explainProject(project, i)}
                    disabled={generatingProjectId === i || aiExplanations[i]}
                    className="p-3 glass-card rounded-full text-pink-400 hover:text-white hover:bg-pink-500/40 transition-all disabled:opacity-50 disabled:hover:bg-transparent group/btn relative"
                    title="Explain like I'm 5"
                  >
                    {generatingProjectId === i ? <Loader2 size={20} className="animate-spin" /> : <Bot size={20} />}
                    {/* Tooltip */}
                    <div className="absolute bottom-full mb-2 right-0 px-2 py-1 glass-card text-xs text-white opacity-0 group-hover/btn:opacity-100 whitespace-nowrap pointer-events-none transition-opacity">
                      ✨ AI Project Explainer
                    </div>
                  </button>
                  <div className="p-3 glass-card rounded-full text-slate-400 group-hover:text-white group-hover:bg-white/10 transition-all">
                    <ExternalLink size={20} />
                  </div>
                </div>
              </div>

              <p className="text-slate-300 font-light leading-relaxed mb-6 relative z-10">
                {project.desc}
              </p>

              {/* AI Explanation Box */}
              <AnimatePresence>
                {aiExplanations[i] && (
                  <motion.div
                    initial={{ opacity: 0, height: 0, marginTop: 0 }}
                    animate={{ opacity: 1, height: 'auto', marginTop: 16 }}
                    className="mb-6 p-4 rounded-xl bg-gradient-to-r from-purple-500/10 to-pink-500/10 border border-pink-500/20 relative z-10"
                  >
                    <div className="flex items-center gap-2 mb-2 text-pink-400">
                      <Sparkles size={14} />
                      <span className="text-xs font-bold uppercase tracking-wider">AI Translation</span>
                    </div>
                    <p className="text-sm text-slate-200 leading-relaxed italic">
                      "{aiExplanations[i]}"
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>

              <div className="flex flex-wrap gap-2 mt-auto relative z-10">
                {project.tags.map((tag, j) => (
                  <span key={j} className="text-xs font-medium px-3 py-1.5 bg-white/5 border border-white/10 text-slate-300 rounded-full">
                    {tag}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

// --- CONTACT SECTION ---
const Contact = () => {
  const [status, setStatus] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus('loading');
    setTimeout(() => {
      setStatus('success');
      e.target.reset();
      setTimeout(() => setStatus(''), 5000);
    }, 1500);
  };

  return (
    <section id="contact" className="py-24 px-6 lg:px-24 relative z-10 pb-40"> {/* pb-40 ensures space for the bottom dock */}
      <div className="max-w-4xl mx-auto text-center">
        <SectionHeader title="Let's build together." subtitle="Contact" align="center" />
        <p className="text-slate-400 text-lg font-light mb-12">
          Currently open for new opportunities and collaborations. Whether you have a question or just want to say hi, I'll try my best to get back to you!
        </p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="glass-card p-8 md:p-12 text-left relative overflow-hidden"
        >
          <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-purple-500 via-pink-500 to-orange-500"></div>

          <form onSubmit={handleSubmit}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div className="space-y-2">
                <label className="text-sm font-medium text-slate-300 pl-1">Name</label>
                <input type="text" required className="w-full bg-black/20 border border-white/10 rounded-2xl p-4 text-white focus:outline-none focus:border-pink-500/50 focus:bg-white/5 transition-all" placeholder="John Doe" />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium text-slate-300 pl-1">Email</label>
                <input type="email" required className="w-full bg-black/20 border border-white/10 rounded-2xl p-4 text-white focus:outline-none focus:border-pink-500/50 focus:bg-white/5 transition-all" placeholder="john@example.com" />
              </div>
            </div>

            <div className="space-y-2 mb-8">
              <label className="text-sm font-medium text-slate-300 pl-1">Message</label>
              <textarea required rows="4" className="w-full bg-black/20 border border-white/10 rounded-2xl p-4 text-white focus:outline-none focus:border-pink-500/50 focus:bg-white/5 transition-all resize-none" placeholder="Hello Kiran, I'd like to discuss..."></textarea>
            </div>

            <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
              <button
                type="submit"
                disabled={status === 'loading'}
                className="w-full sm:w-auto px-8 py-4 bg-white text-black font-semibold rounded-full hover:scale-105 active:scale-95 transition-all disabled:opacity-70 disabled:hover:scale-100 flex items-center justify-center gap-2"
              >
                {status === 'loading' ? (
                  <span className="animate-pulse">Sending...</span>
                ) : (
                  <>Send Message <Sparkles size={18} /></>
                )}
              </button>

              {status === 'success' && (
                <motion.p
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  className="text-pink-400 font-medium"
                >
                  Message sent successfully!
                </motion.p>
              )}
            </div>
          </form>
        </motion.div>
      </div>
    </section>
  );
};

// --- MAIN APP COMPONENT ---
export default function App() {
  const [activeSection, setActiveSection] = useState('hero');

  // Track scroll position to update active Dock element
  useEffect(() => {
    const handleScroll = () => {
      const sections = ['hero', 'about', 'skills', 'projects', 'contact'];
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

      {/* Animated Mesh Background Layers */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none z-0 bg-[#050508]">
        <div className="orb-1"></div>
        <div className="orb-2"></div>
        <div className="orb-3"></div>
        {/* Noise overlay for texture */}
        <div className="absolute inset-0 opacity-[0.03] mix-blend-overlay" style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")` }}></div>
      </div>

      <NavigationDock activeSection={activeSection} />

      <main className="relative z-10">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Contact />
      </main>

      <footer className="relative z-10 py-8 text-center border-t border-white/5">
        <p className="text-slate-500 text-sm font-light">
          &copy; {new Date().getFullYear()} Designed & Built by <span className="text-white font-medium">Kiran Kumar Singaram</span>
        </p>
      </footer>
    </div>
  );
}
