import React from 'react';
import { FaTwitter, FaFacebook, FaInstagram, FaSkype, FaLinkedin } from 'react-icons/fa';

const Hero = () => {
  return (
    <section id="hero" className="w-full h-screen bg-cover bg-center relative lg:pl-[160px]" style={{ backgroundImage: "url('/img/BG-IMG.jpg')" }}>
      {/* Overlay */}
      <div className="absolute inset-0 bg-white/80"></div>

      <div className="relative z-10 flex flex-col justify-center h-full max-w-7xl mx-auto px-4 lg:px-12">
        <h1 className="text-4xl md:text-6xl font-bold text-secondary mb-4">KIRAN KUMAR SINGARAM</h1>
        <p className="text-xl md:text-2xl text-secondary font-medium">
          I'm <span className="text-primary border-b-2 border-primary pb-1">Full Stack Developer</span>
        </p>

        <div className="flex gap-4 mt-8">
          <a href="#" className="w-10 h-10 rounded-full bg-secondary text-white flex items-center justify-center hover:bg-primary transition-colors text-xl">
            <FaTwitter />
          </a>
          <a href="#" className="w-10 h-10 rounded-full bg-secondary text-white flex items-center justify-center hover:bg-primary transition-colors text-xl">
            <FaFacebook />
          </a>
          <a href="#" className="w-10 h-10 rounded-full bg-secondary text-white flex items-center justify-center hover:bg-primary transition-colors text-xl">
            <FaInstagram />
          </a>
          <a href="#" className="w-10 h-10 rounded-full bg-secondary text-white flex items-center justify-center hover:bg-primary transition-colors text-xl">
            <FaSkype />
          </a>
          <a href="#" className="w-10 h-10 rounded-full bg-secondary text-white flex items-center justify-center hover:bg-primary transition-colors text-xl">
            <FaLinkedin />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
