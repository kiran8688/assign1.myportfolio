import { motion } from 'framer-motion';
import { Terminal, ChevronRight, Github, Mail } from 'lucide-react';

const Hero = () => {
  return (
    <section id="hero" className="min-h-screen flex flex-col justify-center items-center text-center pt-20 pb-32">
      <motion.div initial={{ y: 40, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 1, delay: 0.2 }} className="flex flex-col items-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="mb-6"
        >
          <img
            src={import.meta.env.BASE_URL + "img/kiran.jpg"}
            alt="Kiran Kumar"
            className="w-32 h-32 md:w-40 md:h-40 rounded-full object-cover border-4 border-white/10 shadow-2xl shadow-cyan-500/20"
          />
        </motion.div>

        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-cyan-500/30 bg-cyan-500/10 text-cyan-400 font-['JetBrains_Mono',monospace] text-xs uppercase tracking-widest mb-8 shadow-[0_0_20px_rgba(6,182,212,0.2)]">
          <Terminal size={14} /> Full-Stack Developer
        </div>

        <h1 className="font-display text-6xl md:text-8xl lg:text-[7rem] font-bold text-white leading-[1.1] mb-8 tracking-tight">
          Kiran Kumar <br/>
          <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 bg-clip-text text-transparent italic">Singaram.</span>
        </h1>

        <p className="text-xl md:text-2xl text-slate-400 font-light max-w-3xl mx-auto leading-relaxed mb-12">
          Architecting resilient backend databases, robust APIs, and immersive modern web interfaces. Bridging the gap between complex data and elegant UI.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
          <a href="#projects" className="group relative overflow-hidden px-8 py-4 bg-white/[0.01] backdrop-blur-2xl backdrop-saturate-[1.8] text-white rounded-full font-medium flex items-center gap-2 shadow-glass shadow-[inset_0px_1px_1px_rgba(255,255,255,0.2)] before:absolute before:inset-0 before:rounded-full before:border before:border-transparent before:bg-gradient-to-b before:from-white/40 before:to-transparent before:[-webkit-mask-image:linear-gradient(#fff_0_0),linear-gradient(#fff_0_0)] before:[-webkit-mask-clip:padding-box,border-box] before:[-webkit-mask-composite:destination-out] before:[mask-composite:exclude] hover:bg-white/10 hover:-translate-y-1 hover:shadow-2xl transition-all duration-300 ease-out">
            Explore Architecture <ChevronRight size={18} className="group-hover:translate-x-1 transition-transform" />
          </a>
          <div className="flex items-center gap-4">
            <a href="https://github.com/kiran8688" target="_blank" rel="noreferrer" className="relative overflow-hidden p-4 bg-white/[0.01] backdrop-blur-2xl backdrop-saturate-[1.8] rounded-full text-white shadow-glass shadow-[inset_0px_1px_1px_rgba(255,255,255,0.2)] before:absolute before:inset-0 before:rounded-full before:border before:border-transparent before:bg-gradient-to-b before:from-white/40 before:to-transparent before:[-webkit-mask-image:linear-gradient(#fff_0_0),linear-gradient(#fff_0_0)] before:[-webkit-mask-clip:padding-box,border-box] before:[-webkit-mask-composite:destination-out] before:[mask-composite:exclude] hover:text-cyan-400 hover:bg-white/10 hover:-translate-y-1 hover:shadow-2xl transition-all duration-300 ease-out">
              <Github size={20} />
            </a>
            <a href="#contact" className="relative overflow-hidden p-4 bg-white/[0.01] backdrop-blur-2xl backdrop-saturate-[1.8] rounded-full text-white shadow-glass shadow-[inset_0px_1px_1px_rgba(255,255,255,0.2)] before:absolute before:inset-0 before:rounded-full before:border before:border-transparent before:bg-gradient-to-b before:from-white/40 before:to-transparent before:[-webkit-mask-image:linear-gradient(#fff_0_0),linear-gradient(#fff_0_0)] before:[-webkit-mask-clip:padding-box,border-box] before:[-webkit-mask-composite:destination-out] before:[mask-composite:exclude] hover:text-cyan-400 hover:bg-white/10 hover:-translate-y-1 hover:shadow-2xl transition-all duration-300 ease-out">
              <Mail size={20} />
            </a>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;