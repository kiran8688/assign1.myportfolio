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
    { name: 'Python', level: 'Intermediate', icon: <SiPython size={24} /> },
    { name: 'C++', level: 'Beginner', icon: <SiCplusplus size={24} /> },
    { name: 'ReactJS', level: 'Intermediate', icon: <SiReact size={24} /> },
    { name: 'FastAPI', level: 'Intermediate', icon: <SiFastapi size={24} /> },
    { name: 'TailwindCSS', level: 'Intermediate', icon: <SiTailwindcss size={24} /> },
    { name: 'JavaScript', level: 'Intermediate', icon: <SiJavascript size={24} /> },
    { name: 'PostgreSQL', level: 'Intermediate', icon: <SiPostgresql size={24} /> },
    { name: 'Pytest-testing', level: 'Beginner', icon: <SiPytest size={24} /> },
    { name: 'Docker', level: 'Intermediate', icon: <SiDocker size={24} /> },
    { name: 'Alembic-data migration', level: 'Intermediate', icon: <Database size={24} /> },
    { name: 'Git', level: 'Intermediate', icon: <SiGit size={24} /> },
    { name: 'Figma', level: 'Basic', icon: <SiFigma size={24} /> },
    { name: 'Flask', level: 'Basic', icon: <SiFlask size={24} /> },
    { name: 'MySQL', level: 'Intermediate', icon: <SiMysql size={24} /> },
    { name: 'Node.js', level: 'Intermediate', icon: <SiNodedotjs size={24} /> },
    { name: 'Express.js', level: 'Basic', icon: <SiExpress size={24} /> },
    { name: 'Heroku', level: 'Basic', icon: <SiHeroku size={24} /> },
    { name: 'Salesforce', level: 'Basic', icon: <SiSalesforce size={24} /> },
    { name: 'AWS', level: 'Basic', icon: <FaAws size={24} /> },
    { name: 'Kubernetes', level: 'Learning..', icon: <SiKubernetes size={24} /> },
    { name: 'CosmosDB', level: 'Basic', icon: <VscAzure size={24} /> },
    { name: 'Axios', level: 'Intermediate', icon: <SiAxios size={24} /> },
  ];

  return (
    <section id="skills" className="py-24 px-6 lg:px-24 relative z-10">
      <div className="max-w-6xl mx-auto">
        <SectionHeader title="Technical Arsenal" subtitle="SKILLS" align="center" />

        <div className="mt-16 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4">
          {skillsList.map((skill, idx) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: idx * 0.05, duration: 0.5, type: 'spring' }}
              className="group flex flex-col items-center justify-center p-6 bg-[#0B101A]/80 border border-white/5 rounded-2xl hover:bg-white/5 transition-all duration-300 min-h-[140px]"
            >
              <div className="mb-4 text-slate-300 group-hover:text-cyan-400 transition-colors duration-300">
                {skill.icon}
              </div>

              <h3 className="text-white font-semibold text-[15px] font-['Inter'] text-center mb-2">
                {skill.name}
              </h3>

              <span className="text-[10px] text-slate-500 font-['JetBrains_Mono',monospace] uppercase tracking-wider">
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