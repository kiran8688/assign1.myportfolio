import { useState, useEffect } from 'react';

const AmbientBackground = () => {
  const [show, setShow] = useState(false);

  useEffect(() => {
    // Delay rendering orbs to prevent flash during/immediately after boot sequence
    const timer = setTimeout(() => setShow(true), 2500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className={`fixed inset-0 z-[-1] overflow-hidden pointer-events-none transition-opacity duration-1000 ${show ? 'opacity-100' : 'opacity-0'}`}>
      {/* Orb 1 */}
      <div className="absolute w-[50vw] h-[50vw] bg-[#ff2a5f] rounded-full blur-[80px] opacity-60 top-[-10%] left-[-10%] animate-drift mix-blend-screen" />
      {/* Orb 2 */}
      <div className="absolute w-[45vw] h-[45vw] bg-[#00ffcc] rounded-full blur-[100px] opacity-50 bottom-[-20%] right-[-10%] animate-drift [animation-delay:-4s] mix-blend-screen" />
      {/* Orb 3 */}
      <div className="absolute w-[40vw] h-[40vw] bg-[#8a2be2] rounded-full blur-[90px] opacity-40 top-[30%] left-[40%] animate-drift [animation-delay:-8s] mix-blend-screen" />
    </div>
  );
};

export default AmbientBackground;
