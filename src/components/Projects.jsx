import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink } from 'lucide-react';
import SectionHeader from './SectionHeader';

const Projects = () => {
  const projects = [
    {
      title: "Restaurant Web App",
      tags: ["React JS", "UI/UX", "Hooks"],
      desc: "Developed a responsive restaurant web application using React JS and component-based architecture. Built reusable UI components and managed complex application state smoothly.",
      link: "https://little-lemon-restaurant-app-by-kiran.netlify.app/"
    },
    {
      title: "E-commerce App",
      tags: ["React JS", "Axios", "Material UI"],
      desc: "Developed an e-commerce style application that consumes a public REST API. Rendered dynamic product listings and implemented advanced filtering capabilities.",
      link: "https://kirankumar-fake-store.netlify.app/"
    },
    {
      title: "Expense Tracker",
      tags: ["React JS", "Local Storage"],
      desc: "Built a sleek expense tracking application to capture and manage daily expenses securely within the browser. Implemented intuitive add, edit, and delete features.",
      link: "https://expense-traker-by-kiran.netlify.app/"
    },
    {
      title: "Static Landing Page",
      tags: ["HTML5", "CSS3", "Flexbox"],
      desc: "Designed and developed a highly optimized static landing page using semantic HTML5 and modern CSS3 techniques, focusing strictly on a mobile-first responsive layout.",
      link: "https://little-lemon-by-kiran.netlify.app/"
    }
  ];

  return (
    <section id="projects" className="py-24 px-6 lg:px-24 relative z-10">
      <div className="max-w-6xl mx-auto">
        <SectionHeader title="Selected works." subtitle="Portfolio" />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="glass-card p-8 group hover:-translate-y-2 transition-all duration-500 flex flex-col h-full relative overflow-hidden"
            >
              {/* Soft Hover Glow */}
              <div className="absolute -top-24 -right-24 w-48 h-48 bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>

              <div className="flex justify-between items-start mb-6 relative z-10">
                <h4 className="text-2xl font-display font-bold text-white group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-purple-400 group-hover:to-pink-400 transition-all duration-300">
                  {project.title}
                </h4>
                <div className="flex gap-2">
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noreferrer"
                    className="p-3 glass-card rounded-full text-slate-400 group-hover:text-white hover:bg-white/20 transition-all"
                  >
                    <ExternalLink size={20} />
                  </a>
                </div>
              </div>

              <p className="text-slate-300 font-light leading-relaxed mb-6 relative z-10 flex-grow">
                {project.desc}
              </p>

              <div className="flex flex-wrap gap-2 mt-auto relative z-10">
                {project.tags.map((tag, j) => (
                  <span key={j} className="text-xs font-medium px-3 py-1.5 bg-white/5 border border-white/10 text-slate-300 rounded-full">
                    {tag}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
