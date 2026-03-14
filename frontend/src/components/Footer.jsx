import React from 'react';
import { FaTwitter, FaFacebook, FaInstagram, FaSkype, FaLinkedin } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer id="footer" className="bg-background py-16 text-center text-secondary border-t border-white/10 lg:ml-[100px] relative overflow-hidden">
      {/* Abstract background accents and patterns */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-[120px] -translate-y-1/2 pointer-events-none -z-0"></div>

      {/* Background elegant grid texture */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:40px_40px] opacity-10 pointer-events-none -z-0"></div>

      <div className="absolute top-1/2 right-20 w-32 h-32 border-2 border-primary/20 rounded-full mix-blend-overlay pointer-events-none -z-0 opacity-30"></div>
      <div className="absolute bottom-10 left-10 w-24 h-24 border border-white/5 rotate-12 pointer-events-none -z-0"></div>
      <div className="max-w-7xl mx-auto px-4 relative z-10">
        <h3 className="text-4xl font-bold mb-8 gold-text">KIRAN KUMAR SINGARAM</h3>

        <div className="flex justify-center gap-6 mb-10">
          <a href="#" className="w-12 h-12 rounded-full glass-panel text-primary flex items-center justify-center hover:bg-primary hover:text-background transition-all duration-300 hover:scale-110 hover:shadow-[0_0_15px_rgba(212,175,55,0.4)] text-xl">
            <FaTwitter />
          </a>
          <a href="#" className="w-12 h-12 rounded-full glass-panel text-primary flex items-center justify-center hover:bg-primary hover:text-background transition-all duration-300 hover:scale-110 hover:shadow-[0_0_15px_rgba(212,175,55,0.4)] text-xl">
            <FaFacebook />
          </a>
          <a href="#" className="w-12 h-12 rounded-full glass-panel text-primary flex items-center justify-center hover:bg-primary hover:text-background transition-all duration-300 hover:scale-110 hover:shadow-[0_0_15px_rgba(212,175,55,0.4)] text-xl">
            <FaInstagram />
          </a>
          <a href="#" className="w-12 h-12 rounded-full glass-panel text-primary flex items-center justify-center hover:bg-primary hover:text-background transition-all duration-300 hover:scale-110 hover:shadow-[0_0_15px_rgba(212,175,55,0.4)] text-xl">
            <FaSkype />
          </a>
          <a href="#" className="w-12 h-12 rounded-full glass-panel text-primary flex items-center justify-center hover:bg-primary hover:text-background transition-all duration-300 hover:scale-110 hover:shadow-[0_0_15px_rgba(212,175,55,0.4)] text-xl">
            <FaLinkedin />
          </a>
        </div>

        <div className="mb-3 text-white/70">
          &copy; Copyright <strong className="text-white"><span>MyResume</span></strong>. All Rights Reserved
        </div>
        <div className="text-sm text-white/50">
          Designed by <span className="text-primary hover:text-primary/80 transition-colors cursor-pointer tracking-wide">KIRAN KUMAR SINGARAM</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
