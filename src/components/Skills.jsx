import React from 'react';
import { motion } from 'framer-motion';
import { Database, Server, Code } from 'lucide-react';
import SectionHeader from './SectionHeader';

const Skills = () => {
  const glassStyle = "glass-card";

  return (
    <section id="skills" className="py-24 px-6 lg:px-24 relative z-10">
      <div className="max-w-6xl mx-auto">
        <SectionHeader title="Technical Arsenal" subtitle="Skills" />

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
                <h3 className="font-display text-2xl text-white mb-3">{stack.title}</h3>
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
      </div>
    </section>
  );
};

export default Skills;