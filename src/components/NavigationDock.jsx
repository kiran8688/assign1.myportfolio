import { motion } from 'framer-motion';
import { Sparkles, User, Cpu, FolderOpen, FileText, Mail } from 'lucide-react';
import { Link } from 'react-scroll';

// Mapping configuration for the sidebar navigation links and their respective icons
const navItems = [
  { id: 'hero', icon: Sparkles, label: 'Home' },
  { id: 'about', icon: User, label: 'About' },
  { id: 'skills', icon: Cpu, label: 'Skills' },
  { id: 'projects', icon: FolderOpen, label: 'Work' },
  { id: 'resume', icon: FileText, label: 'Resume' },
  { id: 'contact', icon: Mail, label: 'Contact' },
];

/**
 * NavigationDock Component
 * A sticky, glassmorphism vertical sidebar navigation menu for desktop viewports.
 * Uses `react-scroll` to smoothly anchor link to sections and visually highlights the currently active section.
 *
 * @param {string} activeSection - The ID of the currently in-view section, passed down from the parent App state.
 */
const NavigationDock = ({ activeSection }) => {
  return (
    <motion.div
      initial={{ x: -100, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ type: 'spring', damping: 20, stiffness: 100, delay: 0.5 }}
      className="fixed left-6 top-[40%] -translate-y-1/2 z-50 bg-white/[0.01] backdrop-blur-2xl backdrop-saturate-[1.8] border border-white/10 shadow-glass px-2 py-3 rounded-[2rem] hidden md:flex items-center gap-2 flex-col"
    >
      {navItems.map((item) => {
        const isActive = activeSection === item.id;
        return (
          <Link
            key={item.id}
            to={item.id}
            spy={true}
            smooth={true}
            duration={500}
            className={`relative p-3 rounded-full flex items-center justify-center transition-all duration-300 group cursor-pointer
              ${isActive ? 'text-white' : 'text-slate-400 hover:text-white hover:bg-white/[0.01]'}`}
          >
            <item.icon size={20} className="relative z-10" />

            {/* Tooltip to the right */}
            <div className="absolute left-full ml-4 px-3 py-1.5 bg-white/[0.01] backdrop-blur-2xl backdrop-saturate-[1.8] border border-white/10 shadow-glass rounded-lg text-sm font-medium opacity-0 group-hover:opacity-100 transition-all transform -translate-x-2 group-hover:translate-x-0 pointer-events-none whitespace-nowrap text-white">
              {item.label}
            </div>

            {/* Active Pill Indicator */}
            {isActive && (
              <motion.div
                layoutId="activeDockPill"
                className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 border border-white/10 rounded-full"
                transition={{ type: "spring", stiffness: 300, damping: 30 }}
              />
            )}
          </Link>
        );
      })}
    </motion.div>
  );
};

export default NavigationDock;
