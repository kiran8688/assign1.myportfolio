import React from 'react';
import { motion } from 'framer-motion';
import SectionHeader from './SectionHeader';
import {
  SiPython, SiCplusplus, SiReact, SiFastapi,
  SiTailwindcss, SiJavascript, SiPostgresql,
  SiPytest, SiDocker, SiGit, SiFigma
} from 'react-icons/si';
import { Database } from 'lucide-react';

const Skills = () => {
  const skillsList = [
    { name: 'Python', level: 'Intermediate', icon: <SiPython size={24} />, color: 'group-hover:text-blue-400' },
    { name: 'C++', level: 'Beginner', icon: <SiCplusplus size={24} />, color: 'group-hover:text-blue-500' },
    { name: 'ReactJS', level: 'Intermediate', icon: <SiReact size={24} />, color: 'group-hover:text-cyan-400' },
    { name: 'FastAPI', level: 'Intermediate', icon: <SiFastapi size={24} />, color: 'group-hover:text-emerald-400' },
    { name: 'TailwindCSS', level: '', icon: <SiTailwindcss size={24} />, color: 'group-hover:text-cyan-300' },
    { name: 'JavaScript', level: 'Intermediate', icon: <SiJavascript size={24} />, color: 'group-hover:text-yellow-400' },
    { name: 'PostgreSQL', level: 'Intermediate', icon: <SiPostgresql size={24} />, color: 'group-hover:text-blue-400' },
    { name: 'Pytest-testing', level: 'Beginner', icon: <SiPytest size={24} />, color: 'group-hover:text-blue-300' },
    { name: 'Docker', level: 'Intermediate', icon: <SiDocker size={24} />, color: 'group-hover:text-blue-500' },
    { name: 'Alembic-data migration', level: 'Intermediate', icon: <Database size={24} />, color: 'group-hover:text-slate-300' },
    { name: 'Git', level: '', icon: <SiGit size={24} />, color: 'group-hover:text-orange-500' },
    { name: 'Figma', level: '', icon: <SiFigma size={24} />, color: 'group-hover:text-pink-400' },
    { name: 'Etc.', level: '', icon: <div className="text-xl font-bold">...</div>, color: 'group-hover:text-white' },
  ];

  return (
    <section id="skills" className="py-24 px-6 lg:px-24 relative z-10">
      <div className="max-w-5xl mx-auto">
        <SectionHeader title="Technical Arsenal" subtitle="Skills" align="center" />

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-4 mt-12"
        >
          {skillsList.map((skill, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.05 }}
              className="group flex flex-col items-center justify-center min-w-[140px] px-6 py-5 bg-[#0a0f1a]/80 backdrop-blur-md border border-white/5 rounded-2xl hover:border-white/20 transition-all duration-300 hover:-translate-y-1 hover:bg-white/5 shadow-lg"
            >
              <div className={`mb-3 text-slate-400 transition-colors duration-300 ${skill.color}`}>
                {skill.icon}
              </div>
              <h3 className="text-slate-200 font-medium text-sm text-center font-['Inter'] mb-1">
                {skill.name}
              </h3>
              {skill.level && (
                <span className="text-[10px] text-slate-500 font-['JetBrains_Mono',monospace] uppercase tracking-wider">
                  {skill.level}
                </span>
              )}
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;