import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
  const sectionVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut", staggerChildren: 0.2 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.5 } }
  };

  return (
    <section id="about" className="py-24 bg-background lg:ml-[100px] relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/3"></div>

      {/* Abstract Design - Gold geometric lines in the background */}
      <div className="absolute top-24 left-10 w-64 h-64 border border-primary/20 rounded-full mix-blend-overlay -z-0 opacity-50 pointer-events-none"></div>
      <div className="absolute bottom-10 right-20 w-32 h-32 border-2 border-primary/10 rounded-full mix-blend-overlay -z-0 opacity-40 pointer-events-none"></div>
      <svg className="absolute left-0 bottom-1/4 w-32 h-32 opacity-10 text-primary pointer-events-none -z-0" viewBox="0 0 100 100" fill="currentColor">
        <circle cx="20" cy="20" r="3" />
        <circle cx="50" cy="20" r="3" />
        <circle cx="80" cy="20" r="3" />
        <circle cx="20" cy="50" r="3" />
        <circle cx="50" cy="50" r="3" />
        <circle cx="80" cy="50" r="3" />
        <circle cx="20" cy="80" r="3" />
        <circle cx="50" cy="80" r="3" />
        <circle cx="80" cy="80" r="3" />
      </svg>
      <motion.div
        className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={sectionVariants}
      >

        <div className="text-center pb-16">
          <motion.h2 variants={itemVariants} className="text-4xl md:text-5xl font-bold uppercase text-white relative inline-block pb-4 mb-4 font-heading tracking-wider">
            About <span className="text-primary">Me</span>
            <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-24 h-[1px] bg-white/20"></span>
            <span className="absolute bottom-[-1px] left-1/2 -translate-x-1/2 w-12 h-[3px] bg-primary"></span>
          </motion.h2>
          <motion.p variants={itemVariants} className="text-secondary max-w-2xl mx-auto mt-4 text-lg">
            A passionate Full Stack Developer with a strong emphasis on robust backend architecture. I transform complex requirements into elegant, scalable solutions.
          </motion.p>
        </div>

        {/* 12 Column Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 items-center">

          {/* Image Column (4 cols) */}
          <motion.div
            className="md:col-span-4 relative group"
            variants={itemVariants}
          >
            <div className="absolute -inset-1 bg-gradient-to-r from-primary/50 to-primary/0 rounded-xl blur opacity-25 group-hover:opacity-50 transition duration-1000 group-hover:duration-200"></div>
            <img
              src="/img/kiran.jpg"
              alt="Kiran"
              className="relative w-full h-auto rounded-xl shadow-2xl border border-white/10 grayscale hover:grayscale-0 transition-all duration-500 object-cover aspect-[3/4]"
            />
            {/* Corner Accents */}
            <div className="absolute top-0 left-0 w-8 h-8 border-t-2 border-l-2 border-primary rounded-tl-xl -translate-x-4 -translate-y-4 opacity-0 group-hover:opacity-100 transition-all duration-300"></div>
            <div className="absolute bottom-0 right-0 w-8 h-8 border-b-2 border-r-2 border-primary rounded-br-xl translate-x-4 translate-y-4 opacity-0 group-hover:opacity-100 transition-all duration-300"></div>
          </motion.div>

          {/* Details Column (8 cols) */}
          <motion.div
            className="md:col-span-8 glass-card"
            variants={itemVariants}
          >
            <h3 className="text-3xl font-bold text-white mb-2 font-heading tracking-wide">
              FULL STACK <span className="gold-text">DEVELOPER</span>
            </h3>
            <p className="text-secondary mb-8 italic text-lg border-l-4 border-primary pl-4">
              "Building systems that don't just work, but scale and inspire."
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-6">
              <ul className="space-y-5 text-lg">
                <li className="flex items-center group">
                  <span className="text-primary mr-3 font-bold group-hover:translate-x-1 transition-transform">▹</span>
                  <strong className="mr-3 text-white font-medium min-w-[90px]">Birthday:</strong>
                  <span className="text-secondary group-hover:text-white transition-colors">10 May 1997</span>
                </li>
                <li className="flex items-center group">
                  <span className="text-primary mr-3 font-bold group-hover:translate-x-1 transition-transform">▹</span>
                  <strong className="mr-3 text-white font-medium min-w-[90px]">Phone:</strong>
                  <span className="text-secondary group-hover:text-white transition-colors">+91 8099951768</span>
                </li>
                <li className="flex items-center group">
                  <span className="text-primary mr-3 font-bold group-hover:translate-x-1 transition-transform">▹</span>
                  <strong className="mr-3 text-white font-medium min-w-[90px]">City:</strong>
                  <span className="text-secondary group-hover:text-white transition-colors">Hyderabad, India</span>
                </li>
              </ul>

              <ul className="space-y-5 text-lg">
                <li className="flex items-center group">
                  <span className="text-primary mr-3 font-bold group-hover:translate-x-1 transition-transform">▹</span>
                  <strong className="mr-3 text-white font-medium min-w-[90px]">Age:</strong>
                  <span className="text-secondary group-hover:text-white transition-colors">24</span>
                </li>
                <li className="flex items-center group">
                  <span className="text-primary mr-3 font-bold group-hover:translate-x-1 transition-transform">▹</span>
                  <strong className="mr-3 text-white font-medium min-w-[90px]">Degree:</strong>
                  <span className="text-secondary group-hover:text-white transition-colors">Graduate</span>
                </li>
                <li className="flex items-center group">
                  <span className="text-primary mr-3 font-bold group-hover:translate-x-1 transition-transform">▹</span>
                  <strong className="mr-3 text-white font-medium min-w-[90px]">Email:</strong>
                  <span className="text-secondary group-hover:text-white transition-colors break-all">skirankumar2015@gmail.com</span>
                </li>
                <li className="flex items-center group">
                  <span className="text-primary mr-3 font-bold group-hover:translate-x-1 transition-transform">▹</span>
                  <strong className="mr-3 text-white font-medium min-w-[90px]">Freelance:</strong>
                  <span className="text-primary font-medium tracking-wide">Available</span>
                </li>
              </ul>
            </div>

            <div className="mt-10 pt-8 border-t border-white/10">
              <p className="text-secondary leading-relaxed">
                Specializing in building comprehensive backend systems, I have extensive experience with modern frameworks and databases. My approach blends traditional software engineering principles with contemporary methodologies, ensuring performance, security, and maintainability.
              </p>
            </div>

          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default About;
