import React from 'react';
import { motion } from 'framer-motion';

const Projects = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2, delayChildren: 0.1 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { type: 'spring', stiffness: 80 } }
  };

  const projects = [
    {
      title: "Responsive Restaurant Web Application",
      description: [
        "Developed a responsive restaurant web application using React JS and component-based architecture.",
        "Built reusable UI components and managed application state with React hooks for menu display and navigation.",
        "Implemented responsive styling and accessibility improvements to ensure a consistent experience on mobile and desktop."
      ]
    },
    {
      title: "Static Landing Page",
      description: [
        "Designed and developed a static landing page using semantic HTML5 and modern CSS3 techniques.",
        "Implemented a mobile-first, flexible layout using CSS Flexbox to ensure cross-device compatibility.",
        "Focused on clean visual presentation and fast load experience through optimized markup and asset organization."
      ]
    },
    {
      title: "Expense Tracking Application",
      description: [
        "Built a simple expense tracking application to capture and manage daily expenses using React JS.",
        "Implemented add/edit/delete features and managed data with React hooks and component state.",
        "Improved user input handling and persistence using client-side storage for a reliable demo experience."
      ]
    },
    {
      title: "E-commerce Style Application",
      description: [
        "Developed an e-commerce style application that consumes a public REST API using Axios.",
        "Rendered product listings using Material UI components and implemented loading / error handling.",
        "Implemented basic product search and client-side filtering to improve browseability."
      ]
    }
  ];

  return (
    <section id="projects" className="py-24 bg-surface lg:ml-[100px] relative overflow-hidden">
      {/* Dark Elegant Gold Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-10 pointer-events-none -z-0 mix-blend-luminosity"
        style={{ backgroundImage: "url('https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=2564&auto=format&fit=crop')" }}
      ></div>

      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>

      <motion.div
        className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
        variants={containerVariants}
      >
        <div className="text-center pb-16">
          <motion.h2 variants={itemVariants} className="text-4xl md:text-5xl font-bold uppercase text-white relative inline-block pb-4 mb-4 font-heading tracking-wider">
            Featured <span className="text-primary">Projects</span>
            <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-24 h-[1px] bg-white/20"></span>
            <span className="absolute bottom-[-1px] left-1/2 -translate-x-1/2 w-12 h-[3px] bg-primary"></span>
          </motion.h2>
          <motion.p variants={itemVariants} className="text-secondary max-w-2xl mx-auto mt-4 text-lg">
            A showcase of my recent full-stack and front-end development projects highlighting responsive design and dynamic data management.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          {projects.map((project, index) => (
            <motion.div key={index} variants={itemVariants} className="glass-card relative overflow-hidden group">
              <div className="absolute -inset-1 bg-gradient-to-r from-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-lg"></div>

              <div className="relative z-10">
                <h4 className="text-2xl font-bold text-white mb-4 tracking-wide border-b border-white/10 pb-4 group-hover:text-primary transition-colors">
                  {project.title}
                </h4>
                <ul className="space-y-3 text-secondary">
                  {project.description.map((point, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <span className="text-primary mt-1 text-sm font-bold">▹</span>
                      <span className="leading-relaxed">{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Projects;
