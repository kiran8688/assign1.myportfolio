
## 2025-02-24 - Optimize particle distance calculation
**Learning:** In canvas animation loops, expensive Math.sqrt calculations for calculating particle distances run repeatedly and can bottleneck performance.
**Action:** Calculate the squared distance first and check if it meets the squared threshold before doing a square root calculation.
## 2026-03-15 - [UI/UX Overhaul for AI/ML Vibe]
**Learning:** [When transitioning a frontend portfolio from a warm/funky theme to a technical/AI/ML theme, it involves updating typography (e.g., to JetBrains Mono/Inter), color palettes (cyan/blue/emerald on deeper blacks), and adjusting background animations to fit the new aesthetic. Replacing generalized terms like 'web developer' with specific roles like 'Full-Stack Developer' and adding AI/ML aspirations requires careful text replacement across multiple components.]
**Action:** [Use automated scripts (like Python regex/replacement) to efficiently and accurately update colors across multiple files. Always perform visual verification (e.g., using Playwright) to confirm the new aesthetic translates well in the browser. Clean up any temporary scripts before finalizing the commit.]
