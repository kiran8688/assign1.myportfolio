import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles, ArrowRight } from 'lucide-react';

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
            Full-Stack Developer
          </h1>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-lg md:text-xl text-slate-400 max-w-2xl mb-12 font-light leading-relaxed"
        >
          A <span className="font-semibold text-white border-b-2 border-primary pb-1">Full-Stack Developer</span> building scalable and robust web applications with a strong emphasis on modern backend architecture, aspiring for top roles in AI/ML fields.
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

export default Hero;
