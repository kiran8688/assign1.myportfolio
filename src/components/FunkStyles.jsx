import React from 'react';

const FunkStyles = () => (
  <style dangerouslySetInnerHTML={{ __html: `
    @import url('https://fonts.googleapis.com/css2?family=Outfit:wght@300;400;500;600&family=Space+Grotesk:wght@500;700;900&display=swap');

    :root {
      --bg-dark: #050508;
      --card-bg: rgba(255, 255, 255, 0.03);
      --card-border: rgba(255, 255, 255, 0.08);
      --funk-purple: #a855f7;
      --funk-pink: #ec4899;
      --funk-orange: #f97316;
    }

    body {
      background-color: var(--bg-dark);
      color: #f8fafc;
      font-family: 'Outfit', sans-serif;
      overflow-x: hidden;
      scroll-behavior: smooth;
    }

    h1, h2, h3, h4, .font-display {
      font-family: 'Space Grotesk', sans-serif;
    }

    /* Modern Custom Scrollbar */
    ::-webkit-scrollbar { width: 8px; }
    ::-webkit-scrollbar-track { background: var(--bg-dark); }
    ::-webkit-scrollbar-thumb { background: rgba(255,255,255,0.2); border-radius: 10px; }
    ::-webkit-scrollbar-thumb:hover { background: rgba(255,255,255,0.4); }

    /* Text Selection */
    ::selection { background: var(--funk-pink); color: #fff; }

    /* Glass Card Utility */
    .glass-card {
      background: var(--card-bg);
      backdrop-filter: blur(20px);
      -webkit-backdrop-filter: blur(20px);
      border: 1px solid var(--card-border);
      border-radius: 1.5rem;
      box-shadow: 0 8px 32px 0 rgba(0, 0, 0, 0.3);
    }

    .text-gradient {
      background-clip: text;
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      background-image: linear-gradient(90deg, #a855f7, #ec4899, #f97316);
    }
  `}} />
);

export default FunkStyles;
