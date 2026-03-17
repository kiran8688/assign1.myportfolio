import React from 'react';
import { motion } from 'framer-motion';
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
import { Database } from 'lucide-react';

const Skills = () => {
  const skillsList = [
    // Larger Featured Cards
    { name: 'Python', level: 'Intermediate', icon: <SiPython size={40} />, span: 'col-span-2 md:col-span-2 row-span-2', bg: 'bg-gradient-to-br from-[#306998]/20 to-[#FFD43B]/20', border: 'border-[#306998]/40', color: 'text-[#FFE873]' },
    { name: 'ReactJS', level: 'Intermediate', icon: <SiReact size={36} />, span: 'col-span-2 md:col-span-2 row-span-2', bg: 'bg-gradient-to-br from-[#61DAFB]/20 to-[#030508]/60', border: 'border-[#61DAFB]/40', color: 'text-[#61DAFB]' },

    // Medium Cards
    { name: 'FastAPI', level: 'Intermediate', icon: <SiFastapi size={28} />, span: 'col-span-2 md:col-span-1 row-span-1', bg: 'bg-gradient-to-br from-[#009688]/20 to-[#030508]/60', border: 'border-[#009688]/40', color: 'text-[#009688]' },
    { name: 'Node.js', level: 'Intermediate', icon: <SiNodedotjs size={28} />, span: 'col-span-2 md:col-span-1 row-span-1', bg: 'bg-gradient-to-br from-[#339933]/20 to-[#030508]/60', border: 'border-[#339933]/40', color: 'text-[#339933]' },
    { name: 'PostgreSQL', level: 'Intermediate', icon: <SiPostgresql size={28} />, span: 'col-span-2 md:col-span-1 row-span-1', bg: 'bg-gradient-to-br from-[#4169E1]/20 to-[#030508]/60', border: 'border-[#4169E1]/40', color: 'text-[#4169E1]' },
    { name: 'TailwindCSS', level: 'Intermediate', icon: <SiTailwindcss size={28} />, span: 'col-span-2 md:col-span-2 row-span-1', bg: 'bg-gradient-to-br from-[#06B6D4]/20 to-[#030508]/60', border: 'border-[#06B6D4]/40', color: 'text-[#06B6D4]' },
    { name: 'JavaScript', level: 'Intermediate', icon: <SiJavascript size={28} />, span: 'col-span-2 md:col-span-1 row-span-1', bg: 'bg-gradient-to-br from-[#F7DF1E]/20 to-[#030508]/60', border: 'border-[#F7DF1E]/40', color: 'text-[#F7DF1E]' },
    { name: 'AWS', level: 'Basic', icon: <FaAws size={32} />, span: 'col-span-2 md:col-span-2 row-span-1', bg: 'bg-gradient-to-br from-[#FF9900]/20 to-[#232F3E]/40', border: 'border-[#FF9900]/40', color: 'text-[#FF9900]' },

    // Smaller / Standard Cards
    { name: 'Docker', level: 'Intermediate', icon: <SiDocker size={24} />, span: 'col-span-1', bg: 'bg-gradient-to-br from-[#2496ED]/10 to-[#030508]/60', border: 'border-[#2496ED]/30', color: 'text-[#2496ED]' },
    { name: 'Express.js', level: 'Basic', icon: <SiExpress size={24} />, span: 'col-span-1', bg: 'bg-gradient-to-br from-white/10 to-[#030508]/60', border: 'border-white/20', color: 'text-white' },
    { name: 'Flask', level: 'Basic', icon: <SiFlask size={24} />, span: 'col-span-1', bg: 'bg-gradient-to-br from-white/10 to-[#030508]/60', border: 'border-white/20', color: 'text-white' },
    { name: 'C++', level: 'Beginner', icon: <SiCplusplus size={24} />, span: 'col-span-1', bg: 'bg-gradient-to-br from-[#00599C]/10 to-[#030508]/60', border: 'border-[#00599C]/30', color: 'text-[#00599C]' },
    { name: 'MySQL', level: 'Intermediate', icon: <SiMysql size={24} />, span: 'col-span-1', bg: 'bg-gradient-to-br from-[#4479A1]/10 to-[#030508]/60', border: 'border-[#4479A1]/30', color: 'text-[#4479A1]' },
    { name: 'CosmosDB', level: 'Basic', icon: <VscAzure size={24} />, span: 'col-span-1', bg: 'bg-gradient-to-br from-[#0078D4]/10 to-[#030508]/60', border: 'border-[#0078D4]/30', color: 'text-[#0078D4]' },
    { name: 'Kubernetes', level: 'Learning..', icon: <SiKubernetes size={24} />, span: 'col-span-1', bg: 'bg-gradient-to-br from-[#326CE5]/10 to-[#030508]/60', border: 'border-[#326CE5]/30', color: 'text-[#326CE5]' },
    { name: 'Heroku', level: 'Basic', icon: <SiHeroku size={24} />, span: 'col-span-1', bg: 'bg-gradient-to-br from-[#430098]/20 to-[#030508]/60', border: 'border-[#430098]/30', color: 'text-[#430098]' },
    { name: 'Git', level: 'Intermediate', icon: <SiGit size={24} />, span: 'col-span-1', bg: 'bg-gradient-to-br from-[#F05032]/10 to-[#030508]/60', border: 'border-[#F05032]/30', color: 'text-[#F05032]' },
    { name: 'Salesforce', level: 'Basic', icon: <SiSalesforce size={24} />, span: 'col-span-1', bg: 'bg-gradient-to-br from-[#00A1E0]/10 to-[#030508]/60', border: 'border-[#00A1E0]/30', color: 'text-[#00A1E0]' },
    { name: 'Pytest', level: 'Beginner', icon: <SiPytest size={24} />, span: 'col-span-1', bg: 'bg-gradient-to-br from-[#0A9EDC]/10 to-[#030508]/60', border: 'border-[#0A9EDC]/30', color: 'text-[#0A9EDC]' },
    { name: 'Axios', level: 'Intermediate', icon: <SiAxios size={24} />, span: 'col-span-1', bg: 'bg-gradient-to-br from-[#5A29E4]/10 to-[#030508]/60', border: 'border-[#5A29E4]/30', color: 'text-[#5A29E4]' },
    { name: 'Alembic', level: 'Intermediate', icon: <Database size={24} />, span: 'col-span-1', bg: 'bg-gradient-to-br from-slate-400/10 to-[#030508]/60', border: 'border-slate-400/30', color: 'text-slate-300' },
    { name: 'Figma', level: 'Basic', icon: <SiFigma size={24} />, span: 'col-span-1', bg: 'bg-gradient-to-br from-[#F24E1E]/10 to-[#030508]/60', border: 'border-[#F24E1E]/30', color: 'text-[#F24E1E]' }
  ];

  return (
    <section id="skills" className="py-24 px-6 lg:px-24 relative z-10">
      <div className="max-w-6xl mx-auto">
        <SectionHeader title="Technical Arsenal" subtitle="Vibrant Ecosystem" align="center" />

        {/* Asymmetric Skills Grid */}
        <div className="mt-16 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4 auto-rows-[120px] grid-flow-dense">
          {skillsList.map((skill, idx) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: idx * 0.05, duration: 0.5, type: 'spring' }}
              className={`group relative flex flex-col items-center justify-center p-6 ${skill.bg} ${skill.border} border rounded-3xl backdrop-blur-md overflow-hidden hover:scale-[1.02] hover:z-20 transition-all duration-300 shadow-lg hover:shadow-2xl ${skill.span}`}
              style={{ boxShadow: `0 4px 20px -5px rgba(0,0,0,0.5)` }}
            >
              {/* Vibrant Hover Overlay Glow */}
              <div className="absolute inset-0 bg-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

              <div className={`relative z-10 mb-3 ${skill.color} transition-transform duration-300 group-hover:scale-110 drop-shadow-[0_0_15px_currentColor]`}>
                {skill.icon}
              </div>

              <h3 className="relative z-10 text-white font-semibold text-[15px] text-center font-['Inter'] mb-2 drop-shadow-md">
                {skill.name}
              </h3>

              <span className="relative z-10 text-[10px] text-slate-200/90 font-['JetBrains_Mono',monospace] uppercase tracking-wider bg-black/40 px-2.5 py-1 rounded-md backdrop-blur-sm border border-white/10 group-hover:bg-black/60 transition-colors">
                {skill.level}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;