
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

## 2024-05-28 - [Vite Base Path for Multi-Domain Deployment]
**Learning:** Hardcoded subdirectory `base` paths in Vite (e.g., `base: '/repo-name/'`) can cause blank pages when deploying to a root domain (like Netlify: `https://site.netlify.app/`) because assets will try to resolve at `https://site.netlify.app/repo-name/assets/`. Using a relative base path `base: './'` allows the build to dynamically resolve assets correctly whether deployed to a root domain OR a subdirectory (like GitHub Pages).
**Action:** When a project is meant to be deployable across different hosting platforms (Netlify vs. GitHub Pages), configure Vite with `base: './'` instead of a specific subdirectory string unless strictly required by a unique routing constraint.

## 2024-05-28 - [Playwright for Automated Asset Generation]
**Learning:** Playwright can be utilized locally within the task environment to automatically navigate to external live URLs, wait for them to load, and scrape high-quality screenshots directly into the `public` directory.
**Action:** Next time I need mockup images of a user's live project, write a temporary Playwright script to fetch and save them autonomously rather than waiting for manual image uploads.
## 2025-03-16 - Integration of Monolithic Code into Modular Architecture
**Learning:** When users provide monolithic design code intended to replace an existing modular structure, it is crucial to manually destructure the new design back into the project 's existing component hierarchy rather than pasting it directly. It is important to also use consistent component namings (e.g., matching the user's `App.jsx` call sites with the actual exported functions in `/components`).
**Action:** When breaking down a large file, prioritize identifying logical boundaries (like `<section>` tags or functional segments like Boot Sequence/Nav/Hero), and map these segments directly to corresponding files within `src/components/`, ensuring that global styles are appropriately abstracted.
## 2026-03-17 - Componentizing Monolithic React Code
**Learning:** When refactoring a monolithic single-file React application containing multiple sections and complex CSS-in-JS (like a StyleRegistry), extracting the styles into a global component (`FunkStyles`) and breaking sections into individual components (`src/components/`) greatly improves maintainability and allows for modular scroll tracking. Furthermore, mixing legacy global CSS files (`index.css`) with dynamic theme components can cause styling conflicts (e.g., font size jumping on scroll).
**Action:** Always clear conflicting baseline styles from entry CSS files when introducing a new centralized styling system. Verify component integrations visually and run rigorous lint checks.

## 2025-03-17 - Modular Component Architecture & Framer Motion
**Learning:** Monolithic UI designs given in a single file should be decomposed into smaller, domain-specific components (e.g., BootSequence, Hero, Skills) within `src/components/` to maintain modularity in a React application. When integrating complex layouts with interactive filters using `framer-motion`, employing `AnimatePresence` with `mode="popLayout"` ensures smooth, jank-free layout transitions without layout thrashing.
**Action:** Next time I receive a large UI snippet, I will immediately plan to break it down into modular pieces mapped to the `src/components` architecture and use `AnimatePresence popLayout` for dynamically rendered lists.
