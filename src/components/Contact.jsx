import React from 'react';
import { motion } from 'framer-motion';
import { Terminal, MapPin } from 'lucide-react';

const Contact = () => {
  return (
    <motion.section id="contact"
      initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}
      className="py-32 text-center relative border-t border-white/5 mt-12 px-6 lg:px-24 z-10"
    >
      <div className="max-w-6xl mx-auto">
        <h2 className="font-display text-5xl text-white mb-6">Initialize Connection</h2>
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
      </div>
    </motion.section>
  );
};

export default Contact;