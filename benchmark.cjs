const { performance } = require('perf_hooks');

function renderWithArrayInside() {
  const navItems = [
    { id: 'hero', icon: 'Sparkles', label: 'Home' },
    { id: 'about', icon: 'User', label: 'About' },
    { id: 'skills', icon: 'Cpu', label: 'Skills' },
    { id: 'projects', icon: 'FolderOpen', label: 'Work' },
    { id: 'resume', icon: 'FileText', label: 'Resume' },
    { id: 'contact', icon: 'Mail', label: 'Contact' },
  ];
  return navItems.length;
}

const navItemsOutside = [
    { id: 'hero', icon: 'Sparkles', label: 'Home' },
    { id: 'about', icon: 'User', label: 'About' },
    { id: 'skills', icon: 'Cpu', label: 'Skills' },
    { id: 'projects', icon: 'FolderOpen', label: 'Work' },
    { id: 'resume', icon: 'FileText', label: 'Resume' },
    { id: 'contact', icon: 'Mail', label: 'Contact' },
];

function renderWithArrayOutside() {
  return navItemsOutside.length;
}

// Warmup
for (let i = 0; i < 100000; i++) {
  renderWithArrayInside();
  renderWithArrayOutside();
}

const ITERATIONS = 50000000;
let start1 = performance.now();
for (let i = 0; i < ITERATIONS; i++) { renderWithArrayInside(); }
let end1 = performance.now();

let start2 = performance.now();
for (let i = 0; i < ITERATIONS; i++) { renderWithArrayOutside(); }
let end2 = performance.now();

console.log(`Array Inside Allocation: ${(end1 - start1).toFixed(2)} ms`);
console.log(`Array Outside Allocation: ${(end2 - start2).toFixed(2)} ms`);
