import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import SectionHeader from './SectionHeader';
import {
  SiPython, SiCplusplus, SiReact, SiFastapi,
  SiTailwindcss, SiJavascript, SiPostgresql,
  SiPytest, SiDocker, SiGit, SiFigma,
  SiFlask, SiMysql, SiNodedotjs, SiExpress,
  SiHeroku, SiSalesforce,
  SiKubernetes, SiAxios
} from 'react-icons/si';
import { FaAws } from 'react-icons/fa';
import { VscAzure } from 'react-icons/vsc';
import { Database, Code, Server, Cloud, PenTool, LayoutTemplate } from 'lucide-react';

const Skills = () => {
  const [activeCategory, setActiveCategory] = useState('All');

  const categories = [
    { name: 'All', icon: <LayoutTemplate size={16} /> },
    { name: 'Frontend', icon: <Code size={16} /> },
    { name: 'Backend', icon: <Server size={16} /> },
    { name: 'Database', icon: <Database size={16} /> },
    { name: 'Cloud/DevOps', icon: <Cloud size={16} /> },
    { name: 'Tools/Other', icon: <PenTool size={16} /> }
  ];

  const skillsList = [
    // Frontend
    { name: 'ReactJS', level: 'Intermediate', category: 'Frontend', icon: <SiReact size={26} />, color: 'group-hover:text-cyan-400 group-hover:drop-shadow-[0_0_8px_rgba(34,211,238,0.8)]' },
    { name: 'JavaScript', level: 'Intermediate', category: 'Frontend', icon: <SiJavascript size={26} />, color: 'group-hover:text-yellow-400 group-hover:drop-shadow-[0_0_8px_rgba(250,204,21,0.8)]' },
    { name: 'TailwindCSS', level: 'Intermediate', category: 'Frontend', icon: <SiTailwindcss size={26} />, color: 'group-hover:text-cyan-300 group-hover:drop-shadow-[0_0_8px_rgba(103,232,249,0.8)]' },

    // Backend
    { name: 'Python', level: 'Intermediate', category: 'Backend', icon: <SiPython size={26} />, color: 'group-hover:text-blue-400 group-hover:drop-shadow-[0_0_8px_rgba(96,165,250,0.8)]' },
    { name: 'FastAPI', level: 'Intermediate', category: 'Backend', icon: <SiFastapi size={26} />, color: 'group-hover:text-emerald-400 group-hover:drop-shadow-[0_0_8px_rgba(52,211,153,0.8)]' },
    { name: 'Node.js', level: 'Intermediate', category: 'Backend', icon: <SiNodedotjs size={26} />, color: 'group-hover:text-green-500 group-hover:drop-shadow-[0_0_8px_rgba(34,197,94,0.8)]' },
    { name: 'Express.js', level: 'Basic', category: 'Backend', icon: <SiExpress size={26} />, color: 'group-hover:text-gray-300 group-hover:drop-shadow-[0_0_8px_rgba(209,213,219,0.8)]' },
    { name: 'Flask', level: 'Basic', category: 'Backend', icon: <SiFlask size={26} />, color: 'group-hover:text-white group-hover:drop-shadow-[0_0_8px_rgba(255,255,255,0.8)]' },
    { name: 'C++', level: 'Beginner', category: 'Backend', icon: <SiCplusplus size={26} />, color: 'group-hover:text-blue-500 group-hover:drop-shadow-[0_0_8px_rgba(59,130,246,0.8)]' },

    // Database
    { name: 'PostgreSQL', level: 'Intermediate', category: 'Database', icon: <SiPostgresql size={26} />, color: 'group-hover:text-blue-400 group-hover:drop-shadow-[0_0_8px_rgba(96,165,250,0.8)]' },
    { name: 'MySQL', level: 'Intermediate', category: 'Database', icon: <SiMysql size={26} />, color: 'group-hover:text-blue-300 group-hover:drop-shadow-[0_0_8px_rgba(147,197,253,0.8)]' },
    { name: 'CosmosDB', level: 'Basic', category: 'Database', icon: <VscAzure size={26} />, color: 'group-hover:text-blue-400 group-hover:drop-shadow-[0_0_8px_rgba(96,165,250,0.8)]' },

    // Cloud/DevOps
    { name: 'AWS', level: 'Basic', category: 'Cloud/DevOps', icon: <FaAws size={26} />, color: 'group-hover:text-orange-400 group-hover:drop-shadow-[0_0_8px_rgba(251,146,60,0.8)]' },
    { name: 'Docker', level: 'Intermediate', category: 'Cloud/DevOps', icon: <SiDocker size={26} />, color: 'group-hover:text-blue-500 group-hover:drop-shadow-[0_0_8px_rgba(59,130,246,0.8)]' },
    { name: 'Kubernetes', level: 'Learning..', category: 'Cloud/DevOps', icon: <SiKubernetes size={26} />, color: 'group-hover:text-blue-500 group-hover:drop-shadow-[0_0_8px_rgba(59,130,246,0.8)]' },
    { name: 'Heroku', level: 'Basic', category: 'Cloud/DevOps', icon: <SiHeroku size={26} />, color: 'group-hover:text-purple-500 group-hover:drop-shadow-[0_0_8px_rgba(168,85,247,0.8)]' },

    // Tools/Other
    { name: 'Git', level: 'Intermediate', category: 'Tools/Other', icon: <SiGit size={26} />, color: 'group-hover:text-orange-500 group-hover:drop-shadow-[0_0_8px_rgba(249,115,22,0.8)]' },
    { name: 'Salesforce', level: 'Basic', category: 'Tools/Other', icon: <SiSalesforce size={26} />, color: 'group-hover:text-blue-400 group-hover:drop-shadow-[0_0_8px_rgba(96,165,250,0.8)]' },
    { name: 'Pytest', level: 'Beginner', category: 'Tools/Other', icon: <SiPytest size={26} />, color: 'group-hover:text-blue-300 group-hover:drop-shadow-[0_0_8px_rgba(147,197,253,0.8)]' },
    { name: 'Axios', level: 'Intermediate', category: 'Tools/Other', icon: <SiAxios size={26} />, color: 'group-hover:text-purple-400 group-hover:drop-shadow-[0_0_8px_rgba(192,132,252,0.8)]' },
    { name: 'Alembic', level: 'Intermediate', category: 'Tools/Other', icon: <Database size={26} />, color: 'group-hover:text-slate-300 group-hover:drop-shadow-[0_0_8px_rgba(203,213,225,0.8)]' },
    { name: 'Figma', level: 'Basic', category: 'Tools/Other', icon: <SiFigma size={26} />, color: 'group-hover:text-pink-400 group-hover:drop-shadow-[0_0_8px_rgba(244,114,182,0.8)]' }
  ];

  const filteredSkills = activeCategory === 'All'
    ? skillsList
    : skillsList.filter(skill => skill.category === activeCategory);

  return (
    <section id="skills" className="py-24 px-6 lg:px-24 relative z-10">
      <div className="max-w-6xl mx-auto">
        <SectionHeader title="Technical Arsenal" subtitle="Skills Matrix" align="center" />

        {/* Filter Tabs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-3 mt-12 mb-10"
        >
          {categories.map((cat, idx) => (
            <button
              key={idx}
              onClick={() => setActiveCategory(cat.name)}
              className={`relative px-5 py-2.5 rounded-full flex items-center gap-2 text-sm font-medium transition-all duration-300 ${
                activeCategory === cat.name
                ? 'text-white'
                : 'text-slate-400 hover:text-white hover:bg-white/5'
              }`}
            >
              <span className="relative z-10 flex items-center gap-2">
                {cat.icon}
                {cat.name}
              </span>

              {activeCategory === cat.name && (
                <motion.div
                  layoutId="activeCategory"
                  className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 border border-white/10 rounded-full"
                  transition={{ type: "spring", stiffness: 300, damping: 30 }}
                />
              )}
            </button>
          ))}
        </motion.div>

        {/* Skills Grid */}
        <motion.div
          layout
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4"
        >
          <AnimatePresence mode="popLayout">
            {filteredSkills.map((skill) => (
              <motion.div
                layout
                key={skill.name}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.3 }}
                className="group relative flex flex-col items-center justify-center p-6 bg-[#0a0f1a]/60 backdrop-blur-md border border-white/5 rounded-2xl hover:border-white/10 transition-all duration-500 overflow-hidden cursor-crosshair"
              >
                {/* Dynamic Gradient Background on Hover */}
                <div className="absolute inset-0 bg-gradient-to-b from-white/0 to-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                {/* Glowing Corner Accents */}
                <div className="absolute top-0 right-0 w-12 h-12 bg-cyan-500/10 rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-md" />
                <div className="absolute bottom-0 left-0 w-12 h-12 bg-blue-500/10 rounded-tr-full opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-md" />

                <div className={`relative z-10 mb-4 text-slate-400 transition-all duration-500 group-hover:-translate-y-1 ${skill.color}`}>
                  {skill.icon}
                </div>

                <h3 className="relative z-10 text-slate-200 font-medium text-sm text-center font-['Inter'] mb-1.5 transition-colors group-hover:text-white">
                  {skill.name}
                </h3>

                <span className="relative z-10 text-[10px] text-slate-500 font-['JetBrains_Mono',monospace] uppercase tracking-widest border border-white/5 bg-[#030508]/50 px-2 py-0.5 rounded-full group-hover:border-white/10 group-hover:text-slate-300 transition-all">
                  {skill.level}
                </span>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;