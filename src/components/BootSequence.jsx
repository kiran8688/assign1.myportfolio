import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const BootSequence = ({ onComplete }) => {
  const [progress, setProgress] = useState(0);
  const [currentProcess, setCurrentProcess] = useState('');

  useEffect(() => {
    const processes = [
      { text: "INITIALIZING ROOT VIRTUAL ENVIRONMENT...", time: 200 },
      { text: "RESOLVING DEPENDENCIES (node_modules)...", time: 800 },
      { text: "BUNDLING ASSETS WITH VITE...", time: 1500 },
      { text: "COMPILING REACT COMPONENTS...", time: 2100 },
      { text: "ESTABLISHING DATABASE CONNECTIONS...", time: 2700 },
      { text: "RENDERING GLASSMORPHISM UI LAYER...", time: 3300 },
      { text: "SYSTEM ARCHITECTURE COMPILED. WELCOME.", time: 3900 }
    ];

    let startTime = Date.now();
    const duration = 4000;
    const interval = setInterval(() => {
      const elapsed = Date.now() - startTime;
      const percent = Math.min((elapsed / duration) * 100, 100);
      setProgress(percent);
      const activeProcess = processes.reduce((prev, curr) => elapsed >= curr.time ? curr : prev);
      setCurrentProcess(activeProcess.text);
      if (percent >= 100) {
        clearInterval(interval);
        setTimeout(onComplete, 500);
      }
    }, 50);
    return () => clearInterval(interval);
  }, [onComplete]);

  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0, filter: "blur(20px)", transition: { duration: 1.2 } }}
      className="fixed inset-0 z-50 bg-[#030508] flex flex-col items-center justify-center p-8 font-['JetBrains_Mono',monospace]"
    >
      <div className="w-full max-w-3xl">
        <div className="flex justify-between text-cyan-500 mb-4 text-sm tracking-widest border-b border-cyan-500/30 pb-2">
          <span>KIRAN_SYS_INIT_SEQUENCE</span>
          <span>{progress.toFixed(2)}%</span>
        </div>
        <div className="h-1 w-full bg-white/5 relative overflow-hidden mb-8">
          <div className="absolute top-0 left-0 h-full bg-cyan-500 shadow-[0_0_10px_#06b6d4]" style={{ width: `${progress}%` }} />
        </div>
        <div className="h-32 text-slate-400 text-sm flex flex-col gap-2">
          <div className="flex gap-4">
            <span className="text-slate-600">[{new Date().toISOString().split('T')[1].slice(0,-1)}]</span>
            <span className="text-emerald-400 animate-pulse">EXEC</span>
            <span className="text-white">{currentProcess}</span>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default BootSequence;