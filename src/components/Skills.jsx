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
    { name: 'Python', level: 'Intermediate', icon: <SiPython size={36} color="#3776AB" /> },
    { name: 'C++', level: 'Beginner', icon: <SiCplusplus size={36} color="#00599C" /> },
    { name: 'ReactJS', level: 'Intermediate', icon: <SiReact size={36} color="#61DAFB" /> },
    { name: 'FastAPI', level: 'Intermediate', icon: <SiFastapi size={36} color="#009688" /> },
    { name: 'TailwindCSS', level: 'Intermediate', icon: <SiTailwindcss size={36} color="#06B6D4" /> },
    { name: 'JavaScript', level: 'Intermediate', icon: <SiJavascript size={36} color="#F7DF1E" /> },
    { name: 'PostgreSQL', level: 'Intermediate', icon: <SiPostgresql size={36} color="#4169E1" /> },
    { name: 'Pytest', level: 'Beginner', icon: <SiPytest size={36} color="#0A9EDC" /> },
    { name: 'Docker', level: 'Intermediate', icon: <SiDocker size={36} color="#2496ED" /> },
    { name: 'Alembic', level: 'Intermediate', icon: <Database size={36} color="#CBD5E1" /> },
    { name: 'Git', level: 'Intermediate', icon: <SiGit size={36} color="#F05032" /> },
    { name: 'Figma', level: 'Basic', icon: <SiFigma size={36} color="#F24E1E" /> },
    { name: 'Flask', level: 'Basic', icon: <SiFlask size={36} color="#FFFFFF" /> },
    { name: 'MySQL', level: 'Intermediate', icon: <SiMysql size={36} color="#4479A1" /> },
    { name: 'Node.js', level: 'Intermediate', icon: <SiNodedotjs size={36} color="#339933" /> },
    { name: 'Express.js', level: 'Basic', icon: <SiExpress size={36} color="#FFFFFF" /> },
    { name: 'Heroku', level: 'Basic', icon: <SiHeroku size={36} color="#430098" /> },
    { name: 'Salesforce', level: 'Basic', icon: <SiSalesforce size={36} color="#00A1E0" /> },
    { name: 'AWS', level: 'Basic', icon: <FaAws size={36} color="#FF9900" /> },
    { name: 'Kubernetes', level: 'Learning..', icon: <SiKubernetes size={36} color="#326CE5" /> },
    { name: 'CosmosDB', level: 'Basic', icon: <VscAzure size={36} color="#0078D4" /> },
    { name: 'Axios', level: 'Intermediate', icon: <SiAxios size={36} color="#5A29E4" /> },
  ];

  return (
    <section id="skills" className="py-24 px-6 lg:px-24 relative z-10">
      <div className="max-w-5xl mx-auto">
        <SectionHeader title="Technical Arsenal" subtitle="SKILLS" align="center" />

        <div className="mt-16 flex flex-wrap justify-center gap-6">
          {skillsList.map((skill, idx) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: idx * 0.05, duration: 0.5, type: 'spring' }}
              className="group flex items-center justify-center gap-6 px-10 py-6 bg-[#111111]/80 border border-white/10 rounded-lg hover:bg-[#1A1A1A] hover:border-white/20 transition-all duration-300 shadow-[0_4px_12px_rgba(0,0,0,0.5)] cursor-default"
            >
              <div className="flex-shrink-0 flex items-center justify-center">
                {skill.icon}
              </div>

              <h3 className="text-white font-medium text-[30px] font-['Inter']">
                {skill.name}
              </h3>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;