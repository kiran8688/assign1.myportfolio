import React from 'react';

const FunkStyles = () => (
  <style dangerouslySetInnerHTML={{ __html: `
    @import url('https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@300;400;500;700&family=Inter:wght@400;500;700;900&display=swap');

    :root {
      --bg-dark: #020617; /* Very dark slate, almost black */
      --card-bg: rgba(15, 23, 42, 0.5); /* Slate 900 slightly transparent */
      --card-border: rgba(56, 189, 248, 0.15); /* Sky blue border */
      --ai-cyan: #06b6d4;
      --ai-blue: #3b82f6;
      --ai-emerald: #10b981;
    }

    body {
      background-color: var(--bg-dark);
      color: #e2e8f0;
      font-family: 'JetBrains Mono', monospace;
      overflow-x: hidden;
      scroll-behavior: smooth;
      background-image:
        radial-gradient(circle at 15% 50%, rgba(59, 130, 246, 0.05), transparent 25%),
        radial-gradient(circle at 85% 30%, rgba(16, 185, 129, 0.05), transparent 25%);
    }

    h1, h2, h3, h4, .font-display {
      font-family: 'Inter', sans-serif;
      letter-spacing: -0.02em;
    }

    /* Modern Custom Scrollbar */
    ::-webkit-scrollbar { width: 6px; }
    ::-webkit-scrollbar-track { background: var(--bg-dark); }
    ::-webkit-scrollbar-thumb { background: rgba(59,130,246,0.3); border-radius: 0px; }
    ::-webkit-scrollbar-thumb:hover { background: rgba(59,130,246,0.6); }

    /* Text Selection */
    ::selection { background: var(--ai-blue); color: #fff; }

    /* Terminal/Backend Card Utility */
    .glass-card {
      background: var(--card-bg);
      backdrop-filter: blur(12px);
      -webkit-backdrop-filter: blur(12px);
      border: 1px solid var(--card-border);
      border-radius: 0.5rem; /* sharper corners for tech vibe */
      box-shadow: 0 4px 20px 0 rgba(0, 0, 0, 0.4), inset 0 0 0 1px rgba(255,255,255,0.02);
      position: relative;
    }

    .glass-card::before {
      content: '';
      position: absolute;
      top: 0; left: 0; right: 0;
      height: 1px;
      background: linear-gradient(90deg, transparent, rgba(56, 189, 248, 0.3), transparent);
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
