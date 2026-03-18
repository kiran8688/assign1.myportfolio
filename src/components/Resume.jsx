import React from 'react';
import { motion } from 'framer-motion';
import SectionHeader from './SectionHeader';

const Resume = () => {
  const glassStyle = "glass-card";

  return (
    <section id="resume" className="py-24 px-6 lg:px-24 relative z-10">
      <div className="max-w-6xl mx-auto">
        <SectionHeader title="Professional Timeline" subtitle="Experience & Education" />

        <div className="max-w-3xl mx-auto relative mt-12">
          <div className="absolute left-[20px] md:left-1/2 md:-translate-x-1/2 top-0 bottom-0 w-[1px] bg-gradient-to-b from-cyan-500/50 via-purple-500/50 to-transparent" />

          {[
            { title: "Full-Stack Development Trainee", org: "Innomatics Research Labs", date: "Jan 2025 - Present", desc: "Intensive training focusing on modern web stacks, robust architecture, and enterprise-level application design." },
            { title: "META Professional Certifications", org: "Coursera", date: "Ongoing", desc: "Advanced dual-certification in Front-End and Back-End development paradigms, ensuring industry-standard coding practices." },
            { title: "B.Tech in Computer Science", org: "MREC", date: "May 2024", desc: "Foundational computer science principles, algorithms, data structures, and networking." }
          ].map((item, idx) => (
            <motion.div
              key={idx} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: idx * 0.2 }}
              className={`relative flex flex-col md:flex-row items-start md:items-center justify-between mb-16 pl-12 md:pl-0 ${idx % 2 === 0 ? 'md:flex-row-reverse' : ''}`}
            >
              <div className="absolute left-[16px] md:left-1/2 md:-translate-x-1/2 w-2.5 h-2.5 rounded-full bg-cyan-400 shadow-[0_0_15px_#06b6d4] mt-2 md:mt-0 z-10" />

              <div className="w-full md:w-[45%]">
                <div className={`${glassStyle} p-6 md:p-8 hover:bg-white/5`}>
                  <h4 className="font-display text-xl text-white mb-1">{item.title}</h4>
                  <p className="font-['JetBrains_Mono',monospace] text-xs text-cyan-400 mb-4">{item.org} // {item.date}</p>
                  <p className="text-sm text-slate-400 leading-relaxed">{item.desc}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default React.memo(Resume);
