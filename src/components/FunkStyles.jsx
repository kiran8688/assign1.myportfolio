import React from 'react';

const FunkStyles = () => (
  <style dangerouslySetInnerHTML={{ __html: `
    @import url('https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@400;700&family=Inter:wght@300;400;600&display=swap');

    :root {
      --bg-dark: #030305;
      --card-bg: rgba(10, 15, 25, 0.8);
      --card-border: rgba(6, 182, 212, 0.1);
      --funk-purple: #06b6d4; /* Cyber Cyan */
      --funk-pink: #3b82f6;   /* Electric Blue */
      --funk-orange: #10b981; /* Matrix Emerald */
    }

    body {
      background-color: var(--bg-dark);
      color: #e2e8f0;
      font-family: 'Inter', sans-serif;
      overflow-x: hidden;
      scroll-behavior: smooth;
      background-image:
        radial-gradient(circle at 15% 50%, rgba(59, 130, 246, 0.05), transparent 25%),
        radial-gradient(circle at 85% 30%, rgba(16, 185, 129, 0.05), transparent 25%);
    }

    h1, h2, h3, h4, .font-display {
      font-family: 'JetBrains Mono', monospace;
    }

    /* Modern Custom Scrollbar */
    ::-webkit-scrollbar { width: 6px; }
    ::-webkit-scrollbar-track { background: var(--bg-dark); }
    ::-webkit-scrollbar-thumb { background: #1e293b; border-radius: 8px; }
    ::-webkit-scrollbar-thumb:hover { background: #06b6d4; }

    /* Text Selection */
    ::selection { background: var(--ai-blue); color: #fff; }

    /* Terminal/Backend Card Utility */
    .glass-card {
      background: linear-gradient(145deg, rgba(15, 23, 42, 0.9) 0%, rgba(10, 15, 25, 0.95) 100%);
      backdrop-filter: blur(16px);
      -webkit-backdrop-filter: blur(16px);
      border: 1px solid rgba(59, 130, 246, 0.05);
      border-radius: 1.5rem;
      box-shadow: 0 4px 20px -2px rgba(0, 0, 0, 0.6);
      transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);
    }

    .glass-card:hover {
      border-color: rgba(6, 182, 212, 0.4);
      transform: translateY(-4px);
      box-shadow: 0 12px 30px -5px rgba(6, 182, 212, 0.2);
    }

    .text-gradient {
      background-clip: text;
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      background-image: linear-gradient(90deg, #06b6d4, #3b82f6, #10b981);
    }
  `}} />
);

export default FunkStyles;
