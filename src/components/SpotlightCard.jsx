import { useRef, useEffect } from 'react';
import { motion } from 'framer-motion';

const SpotlightCard = ({ children, className = '', isMotion = false, ...props }) => {
  const cardRef = useRef(null);

  useEffect(() => {
    const handleMouseMove = (e) => {
      if (!cardRef.current) return;
      const rect = cardRef.current.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      cardRef.current.style.setProperty('--mouse-x', `${x}px`);
      cardRef.current.style.setProperty('--mouse-y', `${y}px`);
    };

    const card = cardRef.current;
    if (card) {
      card.addEventListener('mousemove', handleMouseMove);
    }
    return () => {
      if (card) {
        card.removeEventListener('mousemove', handleMouseMove);
      }
    };
  }, []);

  const Component = isMotion ? motion.div : 'div';

  return (
    <Component
      ref={cardRef}
      className={`relative overflow-hidden rounded-2xl bg-white/[0.01] backdrop-blur-2xl backdrop-saturate-[1.8] border border-white/10 shadow-glass group ${className}`}
      {...props}
    >
      {/* Interactive border glow effect */}
      <div
        className="pointer-events-none absolute -inset-px opacity-0 transition-opacity duration-300 group-hover:opacity-100 rounded-2xl z-0"
        style={{
          background: `radial-gradient(600px circle at var(--mouse-x, 0) var(--mouse-y, 0), rgba(255,255,255,0.1), transparent 40%)`,
        }}
      />
      <div className="relative z-10 h-full w-full">
        {children}
      </div>
    </Component>
  );
};

export default SpotlightCard;
