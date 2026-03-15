import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import {
  User, Cpu, FolderOpen, Mail,
  MapPin, Github, ExternalLink, Code2, ArrowRight, Sparkles
} from 'lucide-react';
import {
  SiPython, SiCplusplus, SiReact, SiFastapi, SiTailwindcss,
  SiJavascript, SiPostgresql, SiPytest, SiDocker, SiGit, SiFigma
} from 'react-icons/si';
import { FaDatabase } from 'react-icons/fa';

// ==========================================
// GLOBAL STYLES & LIVE NETWORK BACKGROUND
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

class Particle {
  constructor(width, height) {
    this.width = width;
    this.height = height;
    this.x = Math.random() * width;
    this.y = Math.random() * height;
    this.vx = (Math.random() - 0.5) * 1.5;
    this.vy = (Math.random() - 0.5) * 1.5;
    this.radius = Math.random() * 2 + 1;
  }
  update(width, height) {
    this.width = width;
    this.height = height;
    this.x += this.vx;
    this.y += this.vy;
    if (this.x < 0 || this.x > this.width) this.vx *= -1;
    if (this.y < 0 || this.y > this.height) this.vy *= -1;
  }
  draw(ctx) {
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
    ctx.fillStyle = 'rgba(168, 85, 247, 0.4)'; // funk-purple
    ctx.fill();
  }
}

const NetworkBackground = () => {
  useEffect(() => {
    const canvas = document.getElementById('network-canvas');
    const ctx = canvas.getContext('2d');
    let width, height;
    let particles = [];

    const resize = () => {
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = width;
      canvas.height = height;
    };

    window.addEventListener('resize', resize);
    resize();

    for (let i = 0; i < 80; i++) {
      particles.push(new Particle(width, height));
    }

    const animate = () => {
      ctx.clearRect(0, 0, width, height);

      particles.forEach(p => {
        p.update(width, height);
        p.draw(ctx);
      });

      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < 120) {
            ctx.beginPath();
            ctx.strokeStyle = `rgba(236, 72, 153, ${1 - distance/120})`; // funk-pink alpha based on distance
            ctx.lineWidth = 0.8;
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.stroke();
          }
        }
      }
      requestAnimationFrame(animate);
    };

    animate();
    return () => window.removeEventListener('resize', resize);
  }, []);

  return (
    <canvas
      id="network-canvas"
      className="fixed inset-0 pointer-events-none z-0"
      style={{ opacity: 0.6 }}
    ></canvas>
  );
};

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
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ type: 'spring', damping: 20, stiffness: 100, delay: 0.5 }}
      className="fixed top-6 right-6 z-50 glass-card px-2 py-2 rounded-full hidden md:flex items-center gap-2 flex-col sm:flex-row"
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
            <div className="absolute top-full mt-4 px-3 py-1.5 glass-card rounded-lg text-sm font-medium opacity-0 group-hover:opacity-100 transition-all transform -translate-y-2 group-hover:translate-y-0 pointer-events-none whitespace-nowrap">
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
  return (
    <section id="about" className="py-24 px-6 lg:px-24 relative z-10">
      <div className="max-w-6xl mx-auto">
        <SectionHeader title="Get to know me." subtitle="About" />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Main Bio Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="md:col-span-2 glass-card p-8 md:p-10 flex flex-col justify-center relative overflow-hidden group"
          >
            <div className="absolute top-0 right-0 w-64 h-64 bg-purple-500/10 rounded-full blur-3xl group-hover:bg-purple-500/20 transition-colors duration-700"></div>

            <div className="flex flex-col xl:flex-row xl:items-center justify-between gap-4 mb-6 relative z-10">
              <h3 className="text-2xl font-display font-bold text-white whitespace-nowrap">Entry-Level Web Developer</h3>
            </div>

            <div className="relative z-10 min-h-[120px]">
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="text-slate-300 leading-relaxed text-lg font-light mb-6"
              >
                I am passionate about building responsive and user-friendly web applications. My goal is to secure a position in a growth-oriented organization where I can apply my knowledge of front-end and full-stack development. I am highly committed to continuous learning and improving technical problem-solving skills through real-world challenges.
              </motion.p>
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
              <p className="text-sm text-slate-500 uppercase tracking-widest mb-1">Email</p>
              <a href="mailto:skirankumar2015@gmail.com" className="text-white font-medium flex items-center gap-2 hover:text-pink-400 transition-colors">
                <Mail size={18} className="text-pink-400"/> skirankumar2015@gmail.com
              </a>
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
    { name: 'Python', level: 'Intermediate', icon: <SiPython className="text-[#3776AB]" /> },
    { name: 'C++', level: 'Beginner', icon: <SiCplusplus className="text-[#00599C]" /> },
    { name: 'React JS', level: 'Intermediate', icon: <SiReact className="text-[#61DAFB]" /> },
    { name: 'FastAPI', level: 'Intermediate', icon: <SiFastapi className="text-[#009688]" /> },
    { name: 'Tailwind CSS', level: 'Intermediate', icon: <SiTailwindcss className="text-[#06B6D4]" /> },
    { name: 'JavaScript', level: 'Intermediate', icon: <SiJavascript className="text-[#F7DF1E]" /> },
    { name: 'PostgreSQL', level: 'Intermediate', icon: <SiPostgresql className="text-[#4169E1]" /> },
    { name: 'Pytest', level: 'Beginner', icon: <SiPytest className="text-[#0A9EDC]" /> },
    { name: 'Docker', level: 'Intermediate', icon: <SiDocker className="text-[#2496ED]" /> },
    { name: 'Alembic', level: 'Intermediate', icon: <FaDatabase className="text-[#885630]" /> },
    { name: 'Git', level: 'Intermediate', icon: <SiGit className="text-[#F05032]" /> },
    { name: 'Figma', level: 'Intermediate', icon: <SiFigma className="text-[#F24E1E]" /> }
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
                  className="px-5 py-3 glass-card rounded-full flex flex-col items-center justify-center gap-1 hover:bg-white/10 transition-colors cursor-default group"
                >
                  <div className="text-2xl mb-1 group-hover:scale-110 transition-transform">{skill.icon}</div>
                  <span className="text-white font-medium text-sm">{skill.name}</span>
                  <span className="text-slate-400 text-xs">{skill.level}</span>
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
                  <div className="p-3 glass-card rounded-full text-slate-400 group-hover:text-white group-hover:bg-white/10 transition-all">
                    <ExternalLink size={20} />
                  </div>
                </div>
              </div>

              <p className="text-slate-300 font-light leading-relaxed mb-6 relative z-10">
                {project.desc}
              </p>

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

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('loading');

    const formData = new FormData(e.target);
    try {
      const res = await fetch("https://formsubmit.co/ajax/skirankumar2015@gmail.com", {
        method: "POST",
        body: formData,
      });
      if (res.ok) {
        setStatus('success');
        e.target.reset();
      } else {
        setStatus('error');
      }
    } catch {
      setStatus('error');
    }
    setTimeout(() => setStatus(''), 5000);
  };

  return (
    <section id="contact" className="py-24 px-6 lg:px-24 relative z-10 pb-24">
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
                <input type="text" name="name" required className="w-full bg-black/20 border border-white/10 rounded-2xl p-4 text-white focus:outline-none focus:border-pink-500/50 focus:bg-white/5 transition-all" placeholder="John Doe" />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium text-slate-300 pl-1">Email</label>
                <input type="email" name="email" required className="w-full bg-black/20 border border-white/10 rounded-2xl p-4 text-white focus:outline-none focus:border-pink-500/50 focus:bg-white/5 transition-all" placeholder="john@example.com" />
              </div>
            </div>

            <div className="space-y-2 mb-8">
              <label className="text-sm font-medium text-slate-300 pl-1">Message</label>
              <textarea required name="message" rows="4" className="w-full bg-black/20 border border-white/10 rounded-2xl p-4 text-white focus:outline-none focus:border-pink-500/50 focus:bg-white/5 transition-all resize-none" placeholder="Hello Kiran, I'd like to discuss..."></textarea>
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

      {/* Live Animated Network Background */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none z-0 bg-[#050508]">
        <NetworkBackground />
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
