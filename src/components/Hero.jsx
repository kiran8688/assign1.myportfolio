import React from 'react';
import { FaTwitter, FaFacebook, FaInstagram, FaSkype, FaLinkedin, FaChevronDown } from 'react-icons/fa';
import { motion } from 'framer-motion';
import { Link } from 'react-scroll';

const Hero = () => {
  // Use a placeholder backend-themed image (abstract network/dark code aesthetic)
  const bgImage = "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80";

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.2,
      }
    }
  };

  const itemVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { type: 'spring', stiffness: 100, damping: 10 }
    }
  };

  return (
    <section id="hero" className="w-full h-screen relative lg:ml-[100px] overflow-hidden flex items-center justify-center">
      {/* Background Image with Parallax-like scale animation */}
      <motion.div
        className="absolute inset-0 bg-cover bg-center z-0"
        style={{ backgroundImage: `url('${bgImage}')` }}
        initial={{ scale: 1.1 }}
        animate={{ scale: 1 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
      />

      {/* Dark Overlay Gradient */}
      <div className="absolute inset-0 bg-gradient-to-r from-background via-background/90 to-background/40 z-10"></div>

      {/* Abstract Glowing Orb */}
      <motion.div
        className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-[150px] z-10"
        animate={{ scale: [1, 1.2, 1], opacity: [0.5, 0.8, 0.5] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
      />

      <motion.div
        className="relative z-20 flex flex-col justify-center h-full w-full max-w-7xl mx-auto px-6 lg:px-16"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.div variants={itemVariants} className="inline-block mb-4">
          <span className="gold-text text-lg md:text-xl tracking-widest uppercase">Portfolio</span>
        </motion.div>

        <motion.h1
          variants={itemVariants}
          className="text-5xl md:text-7xl lg:text-8xl font-heading font-bold text-white mb-6 leading-tight"
        >
          KIRAN KUMAR <br/><span className="text-primary">SINGARAM</span>
        </motion.h1>

        <motion.p
          variants={itemVariants}
          className="text-xl md:text-3xl text-gray-300 font-light max-w-2xl mb-12"
        >
          An entry-level <span className="font-semibold text-white border-b-2 border-primary pb-1">Web Developer</span> building responsive and user-friendly web applications.
        </motion.p>

        <motion.div variants={itemVariants} className="flex gap-5 mb-16">
          <a href="#" className="w-12 h-12 rounded-full glass-panel text-white flex items-center justify-center hover:bg-primary hover:text-background transition-all duration-300 hover:scale-110 hover:shadow-[0_0_15px_rgba(212,175,55,0.4)] text-xl border-white/20">
            <FaTwitter />
          </a>
          <a href="#" className="w-12 h-12 rounded-full glass-panel text-white flex items-center justify-center hover:bg-primary hover:text-background transition-all duration-300 hover:scale-110 hover:shadow-[0_0_15px_rgba(212,175,55,0.4)] text-xl border-white/20">
            <FaFacebook />
          </a>
          <a href="#" className="w-12 h-12 rounded-full glass-panel text-white flex items-center justify-center hover:bg-primary hover:text-background transition-all duration-300 hover:scale-110 hover:shadow-[0_0_15px_rgba(212,175,55,0.4)] text-xl border-white/20">
            <FaInstagram />
          </a>
          <a href="#" className="w-12 h-12 rounded-full glass-panel text-white flex items-center justify-center hover:bg-primary hover:text-background transition-all duration-300 hover:scale-110 hover:shadow-[0_0_15px_rgba(212,175,55,0.4)] text-xl border-white/20">
            <FaSkype />
          </a>
          <a href="#" className="w-12 h-12 rounded-full glass-panel text-white flex items-center justify-center hover:bg-primary hover:text-background transition-all duration-300 hover:scale-110 hover:shadow-[0_0_15px_rgba(212,175,55,0.4)] text-xl border-white/20">
            <FaLinkedin />
          </a>
        </motion.div>

        <motion.div variants={itemVariants} className="flex gap-6">
          <Link to="about" spy={true} smooth={true} duration={500} className="gold-button cursor-pointer">
            Discover More
          </Link>
          <Link to="contact" spy={true} smooth={true} duration={500} className="px-6 py-3 rounded-md bg-white/5 border border-white/10 text-white font-medium tracking-wide transition-all duration-300 hover:bg-white/10 backdrop-blur-sm cursor-pointer">
            Contact Me
          </Link>
        </motion.div>
      </motion.div>

      {/* Scroll Down Indicator */}
      <motion.div
        className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
      >
        <Link to="about" spy={true} smooth={true} duration={500} className="text-primary/70 hover:text-primary transition-colors flex flex-col items-center cursor-pointer">
          <span className="text-sm tracking-widest uppercase mb-2">Scroll</span>
          <FaChevronDown className="text-xl" />
        </Link>
      </motion.div>
    </section>
  );
};

export default Hero;
