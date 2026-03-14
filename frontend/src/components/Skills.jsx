import React from 'react';
import { motion } from 'framer-motion';

const Skills = () => {
  const skills = [
    { name: 'Python & Django', percentage: 90, type: 'Backend' },
    { name: 'Node.js & Express', percentage: 85, type: 'Backend' },
    { name: 'PostgreSQL & MongoDB', percentage: 80, type: 'Database' },
    { name: 'Docker & Kubernetes', percentage: 75, type: 'DevOps' },
    { name: 'React & Tailwind', percentage: 70, type: 'Frontend' },
    { name: 'AWS Cloud Services', percentage: 65, type: 'Infrastructure' },
  ];

  const sectionVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, scale: 0.9, y: 30 },
    visible: { opacity: 1, scale: 1, y: 0, transition: { type: 'spring', stiffness: 100 } }
  };

  return (
    <section id="skills" className="py-24 bg-surface lg:ml-[100px] relative overflow-hidden">
      {/* Dark Elegant Gold Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-10 pointer-events-none -z-0 mix-blend-luminosity"
        style={{ backgroundImage: "url('https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=2564&auto=format&fit=crop')" }}
      ></div>

      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>

      {/* Background Elements - Subtle tech-inspired lines */}
      <svg className="absolute right-0 top-1/4 w-96 h-96 opacity-[0.03] text-primary pointer-events-none -z-0" viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="0.5">
        <path d="M0 20 L100 20 M0 40 L100 40 M0 60 L100 60 M0 80 L100 80 M20 0 L20 100 M40 0 L40 100 M60 0 L60 100 M80 0 L80 100" />
      </svg>
      <div className="absolute bottom-20 left-10 w-48 h-48 border border-white/5 rotate-45 pointer-events-none -z-0"></div>
      <motion.div
        className="max-w-7xl mx-auto px-6 lg:px-12"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={sectionVariants}
      >

        <div className="text-center pb-16">
          <motion.h2 variants={cardVariants} className="text-4xl md:text-5xl font-bold uppercase text-white relative inline-block pb-4 mb-4 font-heading tracking-wider">
            Technical <span className="text-primary">Skills</span>
            <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-24 h-[1px] bg-white/20"></span>
            <span className="absolute bottom-[-1px] left-1/2 -translate-x-1/2 w-12 h-[3px] bg-primary"></span>
          </motion.h2>
          <motion.p variants={cardVariants} className="text-secondary max-w-2xl mx-auto mt-4 text-lg">
            A comprehensive overview of my technical expertise, focusing on modern backend architectures and cloud-native solutions.
          </motion.p>
        </div>

        {/* Masonry-style grid (achieved via columns in CSS, but grid is cleaner for cards) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              className="glass-card relative overflow-hidden group"
            >
              {/* Card background glowing effect on hover */}
              <div className="absolute -inset-1 bg-gradient-to-r from-primary/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl"></div>

              <div className="relative z-10">
                <div className="flex justify-between items-end mb-4">
                  <div>
                    <span className="text-xs uppercase tracking-widest text-primary/80 font-bold mb-1 block">{skill.type}</span>
                    <h4 className="text-xl font-semibold text-white tracking-wide">{skill.name}</h4>
                  </div>
                  <span className="text-primary font-heading font-bold text-2xl">{skill.percentage}%</span>
                </div>

                {/* Progress Bar Container */}
                <div className="w-full h-2 bg-background/50 rounded-full overflow-hidden border border-white/5">
                  {/* Progress Bar Fill with animation */}
                  <motion.div
                    className="h-full bg-gradient-to-r from-primary/80 to-primary rounded-full relative"
                    initial={{ width: 0 }}
                    whileInView={{ width: `${skill.percentage}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 1.5, ease: "easeOut", delay: index * 0.1 + 0.3 }}
                  >
                    {/* Shimmer effect on the bar */}
                    <div className="absolute top-0 right-0 bottom-0 w-10 bg-white/30 blur-[2px] -skew-x-12 translate-x-full animate-[shimmer_2s_infinite]"></div>
                  </motion.div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>

      <style jsx>{`
        @keyframes shimmer {
          100% {
            transform: translateX(-200%);
          }
        }
      `}</style>
    </section>
  );
};

export default Skills;
