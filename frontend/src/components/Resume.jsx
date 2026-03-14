import React from 'react';
import { motion } from 'framer-motion';

const Resume = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2, delayChildren: 0.1 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -30 },
    visible: { opacity: 1, x: 0, transition: { type: 'spring', stiffness: 80 } }
  };

  return (
    <section id="resume" className="py-24 bg-background lg:ml-[100px] relative overflow-hidden">
      {/* Background elegant grid texture */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:40px_40px] opacity-20 pointer-events-none -z-0"></div>

      {/* Abstract Design Elements */}
      <div className="absolute top-40 right-10 w-32 h-32 border-4 border-primary/10 rounded-sm rotate-12 pointer-events-none -z-0"></div>
      <div className="absolute bottom-40 left-10 w-24 h-24 border-2 border-primary/20 rounded-full pointer-events-none -z-0"></div>
      <motion.div
        className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
        variants={containerVariants}
      >

        <div className="text-center pb-16">
          <motion.h2 variants={itemVariants} className="text-4xl md:text-5xl font-bold uppercase text-white relative inline-block pb-4 mb-4 font-heading tracking-wider">
            Curriculum <span className="text-primary">Vitae</span>
            <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-24 h-[1px] bg-white/20"></span>
            <span className="absolute bottom-[-1px] left-1/2 -translate-x-1/2 w-12 h-[3px] bg-primary"></span>
          </motion.h2>
          <motion.p variants={itemVariants} className="text-secondary max-w-3xl mx-auto mt-4 text-lg italic">
            "Seeking to be a part of a dynamic firm that provides a challenging career, an opportunity to explore my abilities, gain practical experience, and maximize my professional expertise."
          </motion.p>
        </div>

        <div className="flex flex-col lg:flex-row gap-16">

          {/* Left Column - Summary */}
          <div className="w-full lg:w-1/2">
            <motion.h3 variants={itemVariants} className="text-3xl font-bold text-white mb-8 font-heading tracking-wide border-b border-white/10 pb-4">
              Professional <span className="text-primary">Summary</span>
            </motion.h3>

            <motion.div variants={itemVariants} className="relative pl-8 border-l-2 border-primary/50 hover:border-primary transition-colors duration-300 pb-10 group">
              <span className="absolute w-5 h-5 bg-background border-2 border-primary rounded-full -left-[11px] top-1 group-hover:scale-125 transition-transform duration-300 group-hover:shadow-[0_0_10px_rgba(212,175,55,0.8)]"></span>

              <div className="glass-panel p-6 rounded-lg group-hover:-translate-y-1 transition-transform duration-300">
                <h4 className="text-xl font-bold text-white uppercase mb-2 tracking-wider">KIRAN KUMAR SINGARAM</h4>
                <p className="gold-text mb-4 text-lg">Full Stack Developer</p>
                <ul className="space-y-3 text-secondary">
                  <li className="flex items-center gap-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary/70"></span>
                    Hyderabad, Telangana, 500055
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary/70"></span>
                    (+91) 8099951768
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary/70"></span>
                    skirankumar2015@gmail.com
                  </li>
                </ul>
              </div>
            </motion.div>
          </div>

          {/* Right Column - Education */}
          <div className="w-full lg:w-1/2">
            <motion.h3 variants={itemVariants} className="text-3xl font-bold text-white mb-8 font-heading tracking-wide border-b border-white/10 pb-4">
              <span className="text-primary">Education</span> & Training
            </motion.h3>

            <motion.div variants={itemVariants} className="relative pl-8 border-l-2 border-primary/50 hover:border-primary transition-colors duration-300 pb-10 group">
              <span className="absolute w-5 h-5 bg-background border-2 border-primary rounded-full -left-[11px] top-1 group-hover:scale-125 transition-transform duration-300 group-hover:shadow-[0_0_10px_rgba(212,175,55,0.8)]"></span>

              <div className="glass-panel p-6 rounded-lg group-hover:-translate-y-1 transition-transform duration-300">
                <h4 className="text-xl font-bold text-white uppercase mb-3 tracking-wider">Bachelor in Computer Science</h4>
                <div className="inline-block bg-primary/10 border border-primary/30 px-4 py-1.5 rounded-md font-medium text-primary mb-4 text-sm tracking-widest shadow-inner">2015 - 2019</div>
                <p className="text-secondary mb-2 italic">MALLA REDDY ENGINEERING COLLEGE, HYD</p>
              </div>
            </motion.div>

            <motion.div variants={itemVariants} className="relative pl-8 border-l-2 border-primary/50 hover:border-primary transition-colors duration-300 pb-2 group">
              <span className="absolute w-5 h-5 bg-background border-2 border-primary rounded-full -left-[11px] top-1 group-hover:scale-125 transition-transform duration-300 group-hover:shadow-[0_0_10px_rgba(212,175,55,0.8)]"></span>

              <div className="glass-panel p-6 rounded-lg group-hover:-translate-y-1 transition-transform duration-300">
                <h4 className="text-xl font-bold text-white uppercase mb-3 tracking-wider">Full Stack Development</h4>
                <div className="inline-block bg-primary/10 border border-primary/30 px-4 py-1.5 rounded-md font-medium text-primary mb-4 text-sm tracking-widest shadow-inner">2022 - Present</div>
                <p className="gold-text mb-4 text-lg border-b border-white/10 pb-3">INNOMATICS RESEARCH LABS, HYD</p>
                <ul className="space-y-3 text-secondary mt-3">
                  <li className="flex items-start gap-3 leading-relaxed">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary/70 mt-2 shrink-0"></span>
                    <span>Advancing as a Full-Stack Developer encompassing robust Backend architectures, responsive Frontends, database optimization, rigorous testing, and systematic debugging.</span>
                  </li>
                </ul>
              </div>
            </motion.div>

          </div>
        </div>

      </motion.div>
    </section>
  );
};

export default Resume;
