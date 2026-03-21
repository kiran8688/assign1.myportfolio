import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

/**
 * BootSequence Component
 * Simulates a terminal-style application startup sequence before revealing the portfolio.
 * Manages an artificial progress bar and cycles through mock "system build" console logs.
 *
 * @param {Function} onComplete - Callback executed when the progress reaches 100% and the sequence finishes.
 */
const BootSequence = ({ onComplete }) => {
  const [progress, setProgress] = useState(0); // Progress percentage (0 to 100)
  const [currentProcess, setCurrentProcess] = useState(''); // The text log currently displayed to the user

  useEffect(() => {
    // Array of mock console logs with their respective timestamp delays (in milliseconds)
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
    const duration = 4000; // Total duration of the boot sequence (4 seconds)

    // Interval updates the progress bar and determines the active text log every 50ms
    const interval = setInterval(() => {
      const elapsed = Date.now() - startTime;

      // Calculate smooth percentage based on elapsed time out of total duration
      const percent = Math.min((elapsed / duration) * 100, 100);
      setProgress(percent);

      // Find the most recent process log that should be active based on elapsed time
      const activeProcess = processes.reduce((prev, curr) => elapsed >= curr.time ? curr : prev);
      setCurrentProcess(activeProcess.text);

      // Once the progress hits 100%, halt the interval and trigger the completion callback after a brief visual buffer
      if (percent >= 100) {
        clearInterval(interval);
        setTimeout(onComplete, 500); // 500ms delay before fading out
      }
    }, 50);

    // Cleanup interval to prevent memory leaks if component unmounts unexpectedly
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
        <div className="h-1 w-full bg-white/[0.01] relative overflow-hidden mb-8">
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