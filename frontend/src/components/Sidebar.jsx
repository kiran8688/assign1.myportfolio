import React, { useState } from 'react';
import { FaHome, FaUser, FaFileAlt, FaEnvelope, FaBars, FaTimes } from 'react-icons/fa';
import { Link } from 'react-scroll';

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      {/* Mobile nav toggle button */}
      <button
        type="button"
        className="fixed top-4 right-4 z-50 p-3 rounded-full glass-panel text-2xl text-primary lg:hidden"
        onClick={toggleSidebar}
      >
        {isOpen ? <FaTimes /> : <FaBars />}
      </button>

      {/* Header / Sidebar */}
      <header
        className={`fixed top-0 bottom-0 z-40 w-[300px] lg:w-[100px] bg-surface_glass backdrop-blur-glass border-r border-white/10 transition-all duration-300 ${isOpen ? 'left-0' : '-left-[300px] lg:left-0'} flex flex-col justify-center p-4`}
      >
        <nav className="w-full">
          <ul className="flex flex-col gap-4">
            <li>
              <Link to="hero" spy={true} smooth={true} duration={500} className="cursor-pointer flex items-center gap-4 text-secondary hover:text-primary px-4 py-3 rounded-full transition-all group glass-panel lg:w-[56px] lg:hover:w-[180px] overflow-hidden whitespace-nowrap mx-auto active:text-primary">
                <FaHome className="text-xl shrink-0 group-hover:scale-110 transition-transform" />
                <span className="lg:hidden group-hover:block font-medium tracking-wide">Home</span>
              </Link>
            </li>
            <li>
              <Link to="about" spy={true} smooth={true} duration={500} className="cursor-pointer flex items-center gap-4 text-secondary hover:text-primary px-4 py-3 rounded-full transition-all group glass-panel lg:w-[56px] lg:hover:w-[180px] overflow-hidden whitespace-nowrap mx-auto active:text-primary">
                <FaUser className="text-xl shrink-0 group-hover:scale-110 transition-transform" />
                <span className="lg:hidden group-hover:block font-medium tracking-wide">About</span>
              </Link>
            </li>
            <li>
              <Link to="resume" spy={true} smooth={true} duration={500} className="cursor-pointer flex items-center gap-4 text-secondary hover:text-primary px-4 py-3 rounded-full transition-all group glass-panel lg:w-[56px] lg:hover:w-[180px] overflow-hidden whitespace-nowrap mx-auto active:text-primary">
                <FaFileAlt className="text-xl shrink-0 group-hover:scale-110 transition-transform" />
                <span className="lg:hidden group-hover:block font-medium tracking-wide">Resume</span>
              </Link>
            </li>
            <li>
              <Link to="contact" spy={true} smooth={true} duration={500} className="cursor-pointer flex items-center gap-4 text-secondary hover:text-primary px-4 py-3 rounded-full transition-all group glass-panel lg:w-[56px] lg:hover:w-[180px] overflow-hidden whitespace-nowrap mx-auto active:text-primary">
                <FaEnvelope className="text-xl shrink-0 group-hover:scale-110 transition-transform" />
                <span className="lg:hidden group-hover:block font-medium tracking-wide">Contact</span>
              </Link>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
};

export default Sidebar;
