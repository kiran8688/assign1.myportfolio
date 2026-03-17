import React from 'react';

const FunkStyles = () => (
  <style dangerouslySetInnerHTML={{ __html: `
    @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600&family=JetBrains+Mono:wght@400;700&family=Playfair+Display:ital,wght@0,400;0,600;0,700;1,400&display=swap');

    :root {
      --bg-dark: #030508;
      --card-bg: rgba(10, 15, 26, 0.4);
      --card-border: rgba(255, 255, 255, 0.05);
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
    }

    h1, h2, h3, h4, .font-display {
      font-family: 'Playfair Display', serif;
    }

    /* Modern Custom Scrollbar */
    ::-webkit-scrollbar { width: 4px; }
    ::-webkit-scrollbar-track { background: var(--bg-dark); }
    ::-webkit-scrollbar-thumb { background: rgba(255,255,255,0.2); border-radius: 10px; }
    ::-webkit-scrollbar-thumb:hover { background: #06b6d4; }

    /* Text Selection */
    ::selection { background: rgba(6, 182, 212, 0.3); color: #fff; }

    /* Apple Liquid Glass Utility */
    .glass-card {
      background: rgba(255, 255, 255, 0.03);
      backdrop-filter: blur(40px) saturate(180%);
      -webkit-backdrop-filter: blur(40px) saturate(180%);
      border: 1px solid rgba(255, 255, 255, 0.08);
      border-radius: 1.5rem;
      box-shadow: 0 8px 32px 0 rgba(0, 0, 0, 0.3), inset 0 1px 0 0 rgba(255, 255, 255, 0.1);
      transition: all 0.7s cubic-bezier(0.25, 0.8, 0.25, 1);
    }

    .glass-card:hover {
      background: rgba(255, 255, 255, 0.06);
      border-color: rgba(255, 255, 255, 0.15);
      box-shadow: 0 12px 40px 0 rgba(0, 0, 0, 0.4), inset 0 1px 0 0 rgba(255, 255, 255, 0.2);
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
