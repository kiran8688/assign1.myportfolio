
## 2025-02-24 - Optimize particle distance calculation
**Learning:** In canvas animation loops, expensive Math.sqrt calculations for calculating particle distances run repeatedly and can bottleneck performance.
**Action:** Calculate the squared distance first and check if it meets the squared threshold before doing a square root calculation.
## 2026-03-15 - [UI/UX Overhaul for AI/ML Vibe]
**Learning:** [When transitioning a frontend portfolio from a warm/funky theme to a technical/AI/ML theme, it involves updating typography (e.g., to JetBrains Mono/Inter), color palettes (cyan/blue/emerald on deeper blacks), and adjusting background animations to fit the new aesthetic. Replacing generalized terms like 'web developer' with specific roles like 'Full-Stack Developer' and adding AI/ML aspirations requires careful text replacement across multiple components.]
**Action:** [Use automated scripts (like Python regex/replacement) to efficiently and accurately update colors across multiple files. Always perform visual verification (e.g., using Playwright) to confirm the new aesthetic translates well in the browser. Clean up any temporary scripts before finalizing the commit.]
## 2026-03-15 - [Vite Base Path Resolution]
**Learning:** [When configuring Vite for deployment on GitHub Pages using a subpath (e.g., `base: '/assign1.myportfolio/'`), paths inside `index.html` (like favicons and the main script) should use relative paths (e.g., `img/favicon.svg`, `src/main.jsx`) instead of absolute paths (e.g., `/img/favicon.svg`). This ensures that Vite can correctly transform and inject the `base` path during the build process, preventing broken links in the production bundle.]
**Action:** [Always double-check the `index.html` links and `vite.config.js` `base` property when encountering 404s for static assets after a Vite build. Inside React components, continue using `import.meta.env.BASE_URL` for static asset resolution.]

## 2025-02-13 - Update Role to Full-Stack/AI Aspirer
**Learning:** Successfully updated all text references from "web developer" to "Full-Stack Developer" and added aspirations for AI/ML roles. Ensured Vite base path (`base: '/assign1.myportfolio/'`) was maintained for correct GitHub Pages deployment. Verified that relative asset paths are crucial for correct Vite builds on subpaths.
**Action:** Always use `grep -ri` to aggressively hunt down outdated terminology when performing role/branding updates. Before committing Vite config changes, double-check the deployment target (e.g., GitHub Pages) to ensure base paths are not accidentally broken.

## 2024-03-16 - [Integrating Monolithic React Code into a Modular Architecture]
**Learning:** Monolithic React components provided by users often encapsulate multiple distinct sections (Hero, Skills, Projects, Footer) and complex state logic (Boot Sequences, Canvas Animations) within a single file. Directly replacing an entire application structure breaks existing modularity, routing, and maintainability.
**Action:** When asked to integrate monolithic UI code into a modular React architecture, prioritize destructuring the monolithic code into independent components (`Hero.jsx`, `BootSequence.jsx`, `Projects.jsx`) while extracting inline styles into a centralized global component (`FunkStyles.jsx`). Retain existing functional components (like `About.jsx` or `NavigationDock.jsx`) that the monolithic code omitted, adapting them to match the new design language or explicit user requests.

## 2024-03-16 - [Fixing Vite Subdirectory Deployments for Root Domains]
**Learning:** Hardcoding a subdirectory path in Vite's config (e.g., `base: '/assign1.myportfolio/'`) works for GitHub Pages but breaks asset resolution when deployed to a root domain like Netlify (`/`), resulting in 404s for JS/CSS and a blank white screen.
**Action:** Use a relative base path (`base: './'`) in `vite.config.js`. This ensures Vite generates relative links (`./assets/...`) in `index.html`, allowing the build to be served correctly from both root and subdirectory deployment environments without configuration changes.
