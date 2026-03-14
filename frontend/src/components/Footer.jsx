import React from 'react';
import { FaTwitter, FaFacebook, FaInstagram, FaSkype, FaLinkedin } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer id="footer" className="bg-white py-12 text-center text-secondary border-t border-gray-200 lg:ml-[100px]">
      <div className="max-w-7xl mx-auto px-4">
        <h3 className="text-3xl font-bold mb-6 font-heading">KIRAN KUMAR SINGARAM</h3>

        <div className="flex justify-center gap-4 mb-8">
          <a href="#" className="w-10 h-10 rounded-full bg-primary text-white flex items-center justify-center hover:bg-blue-600 transition-colors text-xl">
            <FaTwitter />
          </a>
          <a href="#" className="w-10 h-10 rounded-full bg-primary text-white flex items-center justify-center hover:bg-blue-600 transition-colors text-xl">
            <FaFacebook />
          </a>
          <a href="#" className="w-10 h-10 rounded-full bg-primary text-white flex items-center justify-center hover:bg-blue-600 transition-colors text-xl">
            <FaInstagram />
          </a>
          <a href="#" className="w-10 h-10 rounded-full bg-primary text-white flex items-center justify-center hover:bg-blue-600 transition-colors text-xl">
            <FaSkype />
          </a>
          <a href="#" className="w-10 h-10 rounded-full bg-primary text-white flex items-center justify-center hover:bg-blue-600 transition-colors text-xl">
            <FaLinkedin />
          </a>
        </div>

        <div className="mb-2">
          &copy; Copyright <strong><span>MyResume</span></strong>. All Rights Reserved
        </div>
        <div className="text-sm">
          Designed by <span className="text-primary cursor-pointer hover:underline">KIRAN KUMAR SINGARAM</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
