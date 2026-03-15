import React from 'react';
import { motion } from 'framer-motion';

const Resume = () => {
  const itemVariants = {
    hidden: { opacity: 0, x: -30 },
    visible: { opacity: 1, x: 0, transition: { type: 'spring', stiffness: 80 } }
  };

  return (
    <section id="resume" className="py-24 px-6 lg:px-24 relative z-10">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col lg:flex-row gap-16">

          {/* Left Column - Education */}
          <div className="w-full lg:w-1/2">
            <motion.h3
              initial="hidden" whileInView="visible" viewport={{ once: true }} variants={itemVariants}
              className="text-3xl font-bold text-white mb-8 font-heading tracking-wide border-b border-white/10 pb-4"
            >
              <span className="text-primary">Education</span>
            </motion.h3>

            <motion.div
              initial="hidden" whileInView="visible" viewport={{ once: true }} variants={itemVariants}
              className="relative pl-8 border-l-2 border-primary/50 hover:border-primary transition-colors duration-300 pb-10 group"
            >
              <span className="absolute w-5 h-5 bg-background border-2 border-primary rounded-full -left-[11px] top-1 group-hover:scale-125 transition-transform duration-300 group-hover:shadow-[0_0_10px_rgba(212,175,55,0.8)]"></span>

              <div className="glass-card p-6 rounded-lg group-hover:-translate-y-1 transition-transform duration-300">
                <h4 className="text-xl font-bold text-white uppercase mb-3 tracking-wider">B.Tech in Computer Science</h4>
                <div className="inline-block bg-primary/10 border border-primary/30 px-4 py-1.5 rounded-md font-medium text-primary mb-4 text-sm tracking-widest shadow-inner">May 2024</div>
                <p className="gold-text mb-2 text-lg">Malla Reddy Engineering College (MREC)</p>
                <p className="text-secondary italic">CGPA: 6.75</p>
              </div>
            </motion.div>
          </div>

          {/* Right Column - Training & Certifications */}
          <div className="w-full lg:w-1/2">
            <motion.h3
              initial="hidden" whileInView="visible" viewport={{ once: true }} variants={itemVariants}
              className="text-3xl font-bold text-white mb-8 font-heading tracking-wide border-b border-white/10 pb-4"
            >
              Training & <span className="text-primary">Certifications</span>
            </motion.h3>

            <motion.div
              initial="hidden" whileInView="visible" viewport={{ once: true }} variants={itemVariants}
              className="relative pl-8 border-l-2 border-primary/50 hover:border-primary transition-colors duration-300 pb-10 group"
            >
              <span className="absolute w-5 h-5 bg-background border-2 border-primary rounded-full -left-[11px] top-1 group-hover:scale-125 transition-transform duration-300 group-hover:shadow-[0_0_10px_rgba(212,175,55,0.8)]"></span>

              <div className="glass-card p-6 rounded-lg group-hover:-translate-y-1 transition-transform duration-300">
                <h4 className="text-xl font-bold text-white uppercase mb-3 tracking-wider">Full-Stack Development Training</h4>
                <div className="inline-block bg-primary/10 border border-primary/30 px-4 py-1.5 rounded-md font-medium text-primary mb-4 text-sm tracking-widest shadow-inner">Jan 2025</div>
                <p className="gold-text mb-4 text-lg border-b border-white/10 pb-3">Innomatics Research Labs, JNTU Hyderabad</p>
                <ul className="space-y-3 text-secondary mt-3">
                  <li className="flex items-start gap-3 leading-relaxed">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary/70 mt-2 shrink-0"></span>
                    <span>Completed hands-on full-stack development training with practical project experience.</span>
                  </li>
                  <li className="flex items-start gap-3 leading-relaxed">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary/70 mt-2 shrink-0"></span>
                    <span>Gained foundational skills in HTML, CSS, JavaScript, React JS, and backend concepts.</span>
                  </li>
                </ul>
              </div>
            </motion.div>

            <motion.div
              initial="hidden" whileInView="visible" viewport={{ once: true }} variants={itemVariants}
              className="relative pl-8 border-l-2 border-primary/50 hover:border-primary transition-colors duration-300 pb-10 group"
            >
              <span className="absolute w-5 h-5 bg-background border-2 border-primary rounded-full -left-[11px] top-1 group-hover:scale-125 transition-transform duration-300 group-hover:shadow-[0_0_10px_rgba(212,175,55,0.8)]"></span>

              <div className="glass-card p-6 rounded-lg group-hover:-translate-y-1 transition-transform duration-300">
                <h4 className="text-xl font-bold text-white uppercase mb-3 tracking-wider">META Front-End Developer Professional Certificate</h4>
                <div className="inline-block bg-primary/10 border border-primary/30 px-4 py-1.5 rounded-md font-medium text-primary mb-4 text-sm tracking-widest shadow-inner">Present</div>
                <p className="gold-text mb-4 text-lg border-b border-white/10 pb-3">Coursera</p>
                <ul className="space-y-3 text-secondary mt-3">
                  <li className="flex items-start gap-3 leading-relaxed">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary/70 mt-2 shrink-0"></span>
                    <span>Learned front-end development using HTML5, CSS3, JavaScript, and React.</span>
                  </li>
                  <li className="flex items-start gap-3 leading-relaxed">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary/70 mt-2 shrink-0"></span>
                    <span>Built projects focused on responsive design, component-based architecture, and usability.</span>
                  </li>
                </ul>
              </div>
            </motion.div>

            <motion.div
              initial="hidden" whileInView="visible" viewport={{ once: true }} variants={itemVariants}
              className="relative pl-8 border-l-2 border-primary/50 hover:border-primary transition-colors duration-300 pb-2 group"
            >
              <span className="absolute w-5 h-5 bg-background border-2 border-primary rounded-full -left-[11px] top-1 group-hover:scale-125 transition-transform duration-300 group-hover:shadow-[0_0_10px_rgba(212,175,55,0.8)]"></span>

              <div className="glass-card p-6 rounded-lg group-hover:-translate-y-1 transition-transform duration-300">
                <h4 className="text-xl font-bold text-white uppercase mb-3 tracking-wider">META Back-End Developer Professional Certificate</h4>
                <div className="inline-block bg-primary/10 border border-primary/30 px-4 py-1.5 rounded-md font-medium text-primary mb-4 text-sm tracking-widest shadow-inner">Present</div>
                <p className="gold-text mb-4 text-lg border-b border-white/10 pb-3">Coursera</p>
                <ul className="space-y-3 text-secondary mt-3">
                  <li className="flex items-start gap-3 leading-relaxed">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary/70 mt-2 shrink-0"></span>
                    <span>Studied backend fundamentals including APIs, databases, and server-side development.</span>
                  </li>
                  <li className="flex items-start gap-3 leading-relaxed">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary/70 mt-2 shrink-0"></span>
                    <span>Gained exposure to RESTful services and full-stack application integration.</span>
                  </li>
                </ul>
              </div>
            </motion.div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default Resume;
