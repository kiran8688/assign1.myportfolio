import React, { useEffect, useRef } from 'react';

const NetworkBackground = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    let width = window.innerWidth;
    let height = window.innerHeight;
    canvas.width = width;
    canvas.height = height;

    // --- Mouse Interactivity Tracking ---
    const mouse = { x: -1000, y: -1000, radius: 150 }; // 150px repulsion field

    // --- ELEMENT INITIALIZATION ---

    // Premium Multi-Color Palette
    const palette = ['6, 182, 212', '59, 130, 246', '139, 92, 246', '236, 72, 153', '16, 185, 129'];

    // Full-Screen Neural Nodes
    // Increased presence by 50% (80 * 1.50 = 120)
    const nodes = Array.from({ length: Math.floor(80 * 1.50) }, () => ({
      x: Math.random() * width,
      y: Math.random() * height,
      vx: (Math.random() - 0.5) * 0.5,
      vy: (Math.random() - 0.5) * 0.5,
      size: (Math.random() * 0.5 + 0.15) * 1.10, // Restored back to ultra-fine base size
      connections: 0, // Track connections for dynamic glowing
      color: palette[Math.floor(Math.random() * palette.length)] // Assign random premium color
    }));

    // --- EVENT LISTENERS ---
    const handleMouseMove = (e) => {
      mouse.x = e.clientX;
      mouse.y = e.clientY;
    };

    const handleMouseLeave = () => {
      mouse.x = -1000;
      mouse.y = -1000;
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseout', handleMouseLeave);

    // --- RENDERING FUNCTIONS ---
    let animationFrameId;

    // Grid caching for spatial partitioning (reduces O(N^2) connection checks)
    const CELL_SIZE = 180; // Matches connection threshold
    let gridCols = 0;
    let gridRows = 0;
    let grid = [];

    const initGrid = (w, h) => {
      gridCols = Math.ceil(w / CELL_SIZE);
      gridRows = Math.ceil(h / CELL_SIZE);
      const totalCells = gridCols * gridRows;

      if (grid.length !== totalCells) {
        grid = new Array(totalCells);
        for (let i = 0; i < totalCells; i++) {
          grid[i] = [];
        }
      }
    };

    initGrid(width, height);

    const render = () => {
      ctx.clearRect(0, 0, width, height);

      // Clear the grid without reallocating arrays to prevent GC pressure
      for (let i = 0; i < grid.length; i++) {
        grid[i].length = 0;
      }

      // Reset connection counts and populate the spatial grid
      for (let i = 0; i < nodes.length; i++) {
        const node = nodes[i];
        node.connections = 0;

        const col = Math.floor(node.x / CELL_SIZE);
        const row = Math.floor(node.y / CELL_SIZE);

        // Ensure within bounds
        if (col >= 0 && col < gridCols && row >= 0 && row < gridRows) {
          grid[row * gridCols + col].push(i);
        }
      }

      const checkAndDrawConnection = (nodeA, nodeB) => {
        const dx = nodeA.x - nodeB.x;
        const dy = nodeA.y - nodeB.y;
        const dSq = dx * dx + dy * dy;

        if (dSq < 32400) { // 180 * 180 (Connection threshold)
          const d = Math.sqrt(dSq);
          nodeA.connections++;
          nodeB.connections++;

          ctx.beginPath();
          ctx.moveTo(nodeA.x, nodeA.y);
          ctx.lineTo(nodeB.x, nodeB.y);

          // Opacity and thickness scale with proximity
          const opacity = ((180 - d) / 180) * 0.25;

          // Create a dynamic linear gradient between the two node colors
          const grad = ctx.createLinearGradient(nodeA.x, nodeA.y, nodeB.x, nodeB.y);
          grad.addColorStop(0, `rgba(${nodeA.color}, ${opacity})`);
          grad.addColorStop(1, `rgba(${nodeB.color}, ${opacity})`);

          ctx.strokeStyle = grad; // Apply multi-color gradient
          ctx.lineWidth = 0.5 + (opacity * 1.5);
          ctx.stroke();
        }
      };

      // 1. Calculate Synaptic Connections using Spatial Partitioning
      for (let row = 0; row < gridRows; row++) {
        for (let col = 0; col < gridCols; col++) {
          const cellIdx = row * gridCols + col;
          const cellNodes = grid[cellIdx];
          const cellLen = cellNodes.length;

          for (let i = 0; i < cellLen; i++) {
            const nodeAIdx = cellNodes[i];
            const nodeA = nodes[nodeAIdx];

            // Same cell
            for (let j = i + 1; j < cellLen; j++) {
              checkAndDrawConnection(nodeA, nodes[cellNodes[j]]);
            }

            // Check neighboring cells (half to avoid duplicates: right, bottom-left, bottom, bottom-right)
            // Right
            if (col + 1 < gridCols) {
              const neighbor = grid[row * gridCols + (col + 1)];
              for (let j = 0; j < neighbor.length; j++) checkAndDrawConnection(nodeA, nodes[neighbor[j]]);
            }

            // Bottom-Left
            if (row + 1 < gridRows && col - 1 >= 0) {
              const neighbor = grid[(row + 1) * gridCols + (col - 1)];
              for (let j = 0; j < neighbor.length; j++) checkAndDrawConnection(nodeA, nodes[neighbor[j]]);
            }

            // Bottom
            if (row + 1 < gridRows) {
              const neighbor = grid[(row + 1) * gridCols + col];
              for (let j = 0; j < neighbor.length; j++) checkAndDrawConnection(nodeA, nodes[neighbor[j]]);
            }

            // Bottom-Right
            if (row + 1 < gridRows && col + 1 < gridCols) {
              const neighbor = grid[(row + 1) * gridCols + (col + 1)];
              for (let j = 0; j < neighbor.length; j++) checkAndDrawConnection(nodeA, nodes[neighbor[j]]);
            }
          }
        }
      }

      // 2. Update and Draw Nodes (With Repulsion Physics)
      nodes.forEach(node => {
        // Base kinetic movement
        node.x += node.vx;
        node.y += node.vy;

        // Kinetic Repulsion Physics
        const dx = node.x - mouse.x;
        const dy = node.y - mouse.y;
        const distance = Math.sqrt(dx * dx + dy * dy);

        if (distance < mouse.radius) {
          const forceDirectionX = dx / distance;
          const forceDirectionY = dy / distance;
          // The closer the particle is to the mouse, the stronger the push
          const force = (mouse.radius - distance) / mouse.radius;
          const pushX = forceDirectionX * force * 3.5; // Repulsion strength multiplier
          const pushY = forceDirectionY * force * 3.5;

          node.x += pushX;
          node.y += pushY;
        }

        // Smooth bounce off screen edges
        if(node.x < 0) { node.x = 0; node.vx *= -1; }
        if(node.x > width) { node.x = width; node.vx *= -1; }
        if(node.y < 0) { node.y = 0; node.vy *= -1; }
        if(node.y > height) { node.y = height; node.vy *= -1; }

        // Dynamic Node Styling (Glows brighter & grows with more connections)
        ctx.beginPath();
        const dynamicSize = node.size + (node.connections * 0.08); // Halved dynamic growth multiplier
        ctx.arc(node.x, node.y, dynamicSize, 0, Math.PI*2);

        const nodeOpacity = Math.min(0.15 + (node.connections * 0.08), 0.8);
        ctx.fillStyle = `rgba(${node.color}, ${nodeOpacity})`; // Use the node's specific assigned color
        ctx.fill();

        // Add a bright core highlight to highly connected "hub" nodes
        if (node.connections > 3) {
            ctx.beginPath();
            ctx.arc(node.x, node.y, dynamicSize * 0.5, 0, Math.PI*2); // Adjusted core ratio to remain visible
            ctx.fillStyle = `rgba(255, 255, 255, 0.7)`;
            ctx.fill();
        }
      });

      animationFrameId = requestAnimationFrame(render);
    }
    render();

    const handleResize = () => {
      width = window.innerWidth; height = window.innerHeight;
      canvas.width = width; canvas.height = height;
      initGrid(width, height);
    };
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseout', handleMouseLeave);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return <canvas ref={canvasRef} className="fixed inset-0 z-0 pointer-events-none" />;
};

export default NetworkBackground;