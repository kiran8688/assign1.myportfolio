import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles } from 'lucide-react';

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

export default SectionHeader;
