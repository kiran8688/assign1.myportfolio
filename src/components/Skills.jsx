import React from 'react';
import { motion } from 'framer-motion';
import { Code2 } from 'lucide-react';
import {
  SiPython, SiCplusplus, SiReact, SiFastapi, SiTailwindcss,
  SiJavascript, SiPostgresql, SiPytest, SiDocker, SiGit, SiFigma
} from 'react-icons/si';
import { FaDatabase } from 'react-icons/fa';
import SectionHeader from './SectionHeader';

const Skills = () => {
  const skillsList = [
    { name: 'Python', level: 'Intermediate', icon: <SiPython className="text-[#3776AB]" /> },
    { name: 'C++', level: 'Beginner', icon: <SiCplusplus className="text-[#00599C]" /> },
    { name: 'React JS', level: 'Intermediate', icon: <SiReact className="text-[#61DAFB]" /> },
    { name: 'FastAPI', level: 'Intermediate', icon: <SiFastapi className="text-[#009688]" /> },
    { name: 'Tailwind CSS', level: 'Intermediate', icon: <SiTailwindcss className="text-[#06B6D4]" /> },
    { name: 'JavaScript', level: 'Intermediate', icon: <SiJavascript className="text-[#F7DF1E]" /> },
    { name: 'PostgreSQL', level: 'Intermediate', icon: <SiPostgresql className="text-[#4169E1]" /> },
    { name: 'Pytest', level: 'Beginner', icon: <SiPytest className="text-[#0A9EDC]" /> },
    { name: 'Docker', level: 'Intermediate', icon: <SiDocker className="text-[#2496ED]" /> },
    { name: 'Alembic', level: 'Intermediate', icon: <FaDatabase className="text-[#885630]" /> },
    { name: 'Git', level: 'Intermediate', icon: <SiGit className="text-[#F05032]" /> },
    { name: 'Figma', level: 'Intermediate', icon: <SiFigma className="text-[#F24E1E]" /> }
  ];

  const certs = [
    { year: '2025', title: 'Full-Stack Training', org: 'Innomatics Research Labs', color: 'from-purple-500/20 to-transparent' },
    { year: 'Present', title: 'META Front-End', org: 'Coursera', color: 'from-pink-500/20 to-transparent' },
    { year: 'Present', title: 'META Back-End', org: 'Coursera', color: 'from-orange-500/20 to-transparent' }
  ];

  return (
    <section id="skills" className="py-24 px-6 lg:px-24 relative z-10">
      <div className="max-w-6xl mx-auto">
        <SectionHeader title="What I bring to the table." subtitle="Hardware & Software" />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Tags / Pills */}
          <div>
            <h3 className="text-2xl font-display font-bold text-white mb-6">Core Stack</h3>
            <div className="flex flex-wrap gap-3">
              {skillsList.map((skill, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05 }}
                  className="px-5 py-3 glass-card rounded-full flex flex-col items-center justify-center gap-1 hover:bg-white/10 transition-colors cursor-default group"
                >
                  <div className="text-2xl mb-1 group-hover:scale-110 transition-transform">{skill.icon}</div>
                  <span className="text-white font-medium text-sm">{skill.name}</span>
                  <span className="text-slate-400 text-xs">{skill.level}</span>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Certifications */}
          <div>
            <h3 className="text-2xl font-display font-bold text-white mb-6 flex items-center gap-2">
              <Code2 className="text-pink-400" /> Training & Certifications
            </h3>
            <div className="flex flex-col gap-4">
              {certs.map((cert, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className={`glass-card p-6 overflow-hidden relative group`}
                >
                  <div className={`absolute inset-0 bg-gradient-to-r ${cert.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}></div>
                  <div className="relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-4">
                    <div>
                      <h4 className="text-xl font-display font-bold text-white mb-1">{cert.title}</h4>
                      <p className="text-slate-400 text-sm">{cert.org}</p>
                    </div>
                    <span className="px-4 py-1.5 bg-white/10 text-white text-sm rounded-full font-medium whitespace-nowrap w-fit">
                      {cert.year}
                    </span>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
