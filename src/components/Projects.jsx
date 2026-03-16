import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Layers } from 'lucide-react';
import SectionHeader from './SectionHeader';

const Projects = () => {
  const glassStyle = "glass-card";

  return (
    <section id="projects" className="py-24 px-6 lg:px-24 relative z-10">
      <div className="max-w-6xl mx-auto">
        <SectionHeader title="Engineered Platforms" subtitle="Portfolio" />

        <div className="space-y-12">
          {[
            {
              title: "Restaurant Web Application",
              type: "Full-Stack System",
              desc: "A responsive, component-based frontend architecture built with React. Features complex local state management, dynamic routing, and fluid animations.",
              link: "https://little-lemon-restaurant-app-by-kiran.netlify.app/",
              tags: ["React", "UI/UX", "State Management"]
            },
            {
              title: "E-Commerce API Integration",
              type: "Dynamic Storefront",
              desc: "An intelligent storefront system consuming public REST APIs. Built with dynamic rendering capabilities, advanced client-side filtering logic, and asynchronous data fetching.",
              link: "https://kirankumar-fake-store.netlify.app/",
              tags: ["React", "REST API", "Async Logic"]
            },
            {
              title: "Client Expense Pipeline",
              type: "Data Management App",
              desc: "Secure, in-browser data management application. Utilizes advanced JavaScript array manipulation for real-time financial calculations, persistent local storage, and dynamic UI updates.",
              link: "https://expense-traker-by-kiran.netlify.app/",
              tags: ["JavaScript", "Local Storage", "Data Viz"]
            }
          ].map((project, idx) => (
            <motion.div
              key={idx} initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-100px" }}
              className={`${glassStyle} group relative flex flex-col md:flex-row ${idx % 2 !== 0 ? 'md:flex-row-reverse' : ''} min-h-[400px]`}
            >
              <div className="w-full md:w-5/12 bg-[#05080f]/50 rounded-t-3xl md:rounded-tr-none md:rounded-bl-3xl md:rounded-l-3xl p-12 flex items-center justify-center relative overflow-hidden border-b md:border-b-0 md:border-r border-white/5 border-opacity-10">
                <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                <Layers className="w-32 h-32 text-white/5 group-hover:scale-110 group-hover:text-cyan-500/20 transition-all duration-700" strokeWidth={0.5} />
              </div>

              <div className="w-full md:w-7/12 p-10 md:p-16 flex flex-col justify-center">
                <p className="font-['JetBrains_Mono',monospace] text-cyan-400 text-xs uppercase tracking-widest mb-3">{project.type}</p>
                <h3 className="font-display text-3xl md:text-4xl text-white mb-6 group-hover:text-cyan-300 transition-colors">{project.title}</h3>
                <p className="text-slate-400 leading-relaxed mb-8">{project.desc}</p>

                <div className="flex flex-wrap gap-2 mb-10">
                  {project.tags.map(tag => (
                    <span key={tag} className="font-['JetBrains_Mono',monospace] text-[10px] uppercase tracking-wider px-3 py-1.5 bg-white/5 border border-white/5 rounded text-slate-300">
                      {tag}
                    </span>
                  ))}
                </div>

                <a href={project.link} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 text-white font-medium hover:text-cyan-400 transition-colors w-fit">
                  Deploy Protocol <ExternalLink size={16} />
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;