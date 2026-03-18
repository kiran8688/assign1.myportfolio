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
      background: rgba(255, 255, 255, 0.05); /* Sheer, highly transparent base */
      backdrop-filter: blur(16px) saturate(150%); /* Strong blur and color saturation push */
      -webkit-backdrop-filter: blur(16px) saturate(150%);
      border: 1px solid transparent; /* Bright, distinct thin border */
      border-image: linear-gradient(135deg, rgba(255, 255, 255, 0.5) 0%, transparent 50%) 1;
      border-radius: 22.5%; /* Squircle approximation */
      /* Soft diffused shadows for depth without muddiness, plus an inner glow */
      box-shadow:
        0 20px 40px -10px rgba(0, 0, 0, 0.2),
        inset 0 1px 1px rgba(255, 255, 255, 0.4);
      transition: all 0.5s cubic-bezier(0.25, 0.8, 0.25, 1);
      will-change: transform, backdrop-filter;
      position: relative; /* For border-radius fix on gradient borders */
    }

    .glass-card::before {
      content: "";
      position: absolute;
      inset: 0;
      border-radius: 22.5%;
      padding: 1px;
      background: linear-gradient(135deg, rgba(255, 255, 255, 0.8) 0%, rgba(255,255,255,0.1) 50%, transparent 100%);
      -webkit-mask:
        linear-gradient(#fff 0 0) content-box,
        linear-gradient(#fff 0 0);
      -webkit-mask-composite: xor;
      mask-composite: exclude;
      pointer-events: none;
    }

    .glass-card:hover {
      background: rgba(255, 255, 255, 0.1); /* Becomes more opaque on hover */
      box-shadow:
        0 25px 50px -12px rgba(0, 0, 0, 0.3),
        inset 0 1px 2px rgba(255, 255, 255, 0.5);
      transform: translateY(-4px);
    }

    /* Skills specific variant matching the authentic liquid glass from reference */
    .glass-card-skills {
      background: rgba(255, 255, 255, 0.05); /* Crystal clear frosted base */
      backdrop-filter: blur(16px) saturate(150%);
      -webkit-backdrop-filter: blur(16px) saturate(150%);
      border: 1px solid transparent;
      border-radius: 22.5%; /* Round edges like the Control Center bubbles */
      box-shadow:
        0 10px 30px -10px rgba(0, 0, 0, 0.3),
        inset 0 1px 1px rgba(255, 255, 255, 0.4); /* Strong inner rim light */
      transition: all 0.4s cubic-bezier(0.25, 0.8, 0.25, 1);
      will-change: transform, backdrop-filter;
      position: relative;
    }

    .glass-card-skills::before {
      content: "";
      position: absolute;
      inset: 0;
      border-radius: 22.5%;
      padding: 1px;
      background: linear-gradient(135deg, rgba(255, 255, 255, 0.8) 0%, rgba(255,255,255,0.1) 50%, transparent 100%);
      -webkit-mask:
        linear-gradient(#fff 0 0) content-box,
        linear-gradient(#fff 0 0);
      -webkit-mask-composite: xor;
      mask-composite: exclude;
      pointer-events: none;
    }

    .glass-card-skills:hover {
      background: rgba(255, 255, 255, 0.1); /* Slightly lighter on hover */
      box-shadow:
        0 20px 40px -8px rgba(0, 0, 0, 0.4),
        inset 0 1px 2px rgba(255, 255, 255, 0.5);
      transform: translateY(-4px); /* Add a slight lift */
    }

    @media (prefers-reduced-motion: reduce) {
      .glass-card, .glass-card-skills {
        transition: none;
        transform: none !important;
      }
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
