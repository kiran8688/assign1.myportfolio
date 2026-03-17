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

    /* Authentic Apple Liquid Glass Utility */
    /* Based on iOS/iPadOS translucent control centers & overlays */
    .glass-card {
      background: rgba(255, 255, 255, 0.15); /* Much lighter, highly transparent base */
      backdrop-filter: blur(80px) saturate(200%); /* Extreme blur and color saturation push */
      -webkit-backdrop-filter: blur(80px) saturate(200%);
      border: 1px solid rgba(255, 255, 255, 0.25); /* More prominent, bright, thin border */
      border-radius: 1.5rem;
      /* Soft diffused shadows for depth without muddiness, plus an inner glow */
      box-shadow:
        0 20px 40px -10px rgba(0, 0, 0, 0.3),
        inset 0 1px 1px 0 rgba(255, 255, 255, 0.3);
      transition: all 0.5s cubic-bezier(0.25, 0.8, 0.25, 1);
    }

    .glass-card:hover {
      background: rgba(255, 255, 255, 0.25); /* Becomes more opaque on hover */
      border-color: rgba(255, 255, 255, 0.4);
      box-shadow:
        0 25px 50px -12px rgba(0, 0, 0, 0.4),
        inset 0 1px 2px 0 rgba(255, 255, 255, 0.4);
    }

    /* Skills specific variant retaining the physical shape but distinct background interaction */
    .glass-card-skills {
      background: rgba(255, 255, 255, 0.1); /* Slightly less opaque base for the grid */
      backdrop-filter: blur(80px) saturate(200%);
      -webkit-backdrop-filter: blur(80px) saturate(200%);
      border: 1px solid rgba(255, 255, 255, 0.2);
      border-radius: 1.5rem;
      box-shadow:
        0 15px 35px -5px rgba(0, 0, 0, 0.25),
        inset 0 1px 1px 0 rgba(255, 255, 255, 0.2);
      transition: all 0.5s cubic-bezier(0.25, 0.8, 0.25, 1);
    }

    .glass-card-skills:hover {
      background: rgba(255, 255, 255, 0.2);
      border-color: rgba(255, 255, 255, 0.3);
      box-shadow:
        0 20px 40px -8px rgba(0, 0, 0, 0.3),
        inset 0 1px 2px 0 rgba(255, 255, 255, 0.3);
      transform: translateY(-5px); /* Add a slight lift */
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
