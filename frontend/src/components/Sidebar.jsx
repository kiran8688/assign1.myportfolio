import React, { useState } from 'react';
import { FaHome, FaUser, FaFileAlt, FaEnvelope, FaBars } from 'react-icons/fa';

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
        className="fixed top-4 right-4 z-50 text-2xl text-secondary lg:hidden"
        onClick={toggleSidebar}
      >
        <FaBars />
      </button>

      {/* Header / Sidebar */}
      <header
        className={`fixed top-0 bottom-0 z-40 w-[300px] lg:w-[100px] bg-white lg:bg-transparent border-r lg:border-none border-gray-200 transition-all duration-300 ${isOpen ? 'left-0' : '-left-[300px] lg:left-0'} flex flex-col justify-center p-4`}
      >
        <nav className="w-full">
          <ul className="flex flex-col gap-2">
            <li>
              <a href="#hero" className="flex items-center gap-3 text-secondary hover:text-white hover:bg-primary px-4 py-3 rounded-full transition-all group bg-background lg:w-[56px] lg:hover:w-full overflow-hidden whitespace-nowrap">
                <FaHome className="text-xl shrink-0" />
                <span className="lg:hidden group-hover:block">Home</span>
              </a>
            </li>
            <li>
              <a href="#about" className="flex items-center gap-3 text-secondary hover:text-white hover:bg-primary px-4 py-3 rounded-full transition-all group bg-background lg:w-[56px] lg:hover:w-full overflow-hidden whitespace-nowrap">
                <FaUser className="text-xl shrink-0" />
                <span className="lg:hidden group-hover:block">About</span>
              </a>
            </li>
            <li>
              <a href="#resume" className="flex items-center gap-3 text-secondary hover:text-white hover:bg-primary px-4 py-3 rounded-full transition-all group bg-background lg:w-[56px] lg:hover:w-full overflow-hidden whitespace-nowrap">
                <FaFileAlt className="text-xl shrink-0" />
                <span className="lg:hidden group-hover:block">Resume</span>
              </a>
            </li>
            <li>
              <a href="#contact" className="flex items-center gap-3 text-secondary hover:text-white hover:bg-primary px-4 py-3 rounded-full transition-all group bg-background lg:w-[56px] lg:hover:w-full overflow-hidden whitespace-nowrap">
                <FaEnvelope className="text-xl shrink-0" />
                <span className="lg:hidden group-hover:block">Contact</span>
              </a>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
};

export default Sidebar;
