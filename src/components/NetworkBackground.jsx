import { useEffect, useRef } from 'react';

/**
 * NetworkBackground Component
 * Renders an interactive, spatial-partitioned neural network animation using the HTML5 Canvas API.
 * The canvas acts as the primary global background, featuring nodes that connect dynamically based on proximity
 * and react to cursor movement.
 */
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
    // Represents a repulsion epicenter around the user's cursor.
    const mouse = { x: -1000, y: -1000, radius: 150 };
    // Pre-calculated squared radius for optimized distance comparisons in the rendering loop
    const mouseRadiusSq = mouse.radius * mouse.radius;

    // --- ELEMENT INITIALIZATION ---

    // Array of base RGB colors used for node rendering and gradient connection lines
    const palette = ['6, 182, 212', '59, 130, 246', '139, 92, 246', '236, 72, 153', '16, 185, 129'];

    // Full-Screen Neural Nodes Array
    // Configured to initialize ~120 nodes distributed across the viewport
    const nodes = Array.from({ length: Math.floor(80 * 1.50) }, () => ({
      x: Math.random() * width, // Random initial X
      y: Math.random() * height, // Random initial Y
      vx: (Math.random() - 0.5) * 0.5, // X-axis velocity
      vy: (Math.random() - 0.5) * 0.5, // Y-axis velocity
      size: (Math.random() * 0.5 + 0.15) * 1.10, // Base rendering radius
      connections: 0, // State variable tracking active spatial connections
      color: palette[Math.floor(Math.random() * palette.length)]
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

    // --- SPATIAL PARTITIONING OPTIMIZATION ---
    // Subdivides the screen into a grid to reduce the standard O(N^2) connection checks.
    // By matching the cell size to the connection threshold, a node only needs to check
    // itself against nodes in its own cell and adjacent neighboring cells.
    const CELL_SIZE = 180;
    let gridCols = 0;
    let gridRows = 0;
    let grid = [];

    // Initializes the grid array structure based on current screen dimensions
    const initGrid = (w, h) => {
      gridCols = Math.ceil(w / CELL_SIZE);
      gridRows = Math.ceil(h / CELL_SIZE);
      const totalCells = gridCols * gridRows;

      if (grid.length !== totalCells) {
        grid = new Array(totalCells);
        for (let i = 0; i < totalCells; i++) {
          grid[i] = []; // Initialize empty array bins
        }
      }
    };

    initGrid(width, height);

    const render = () => {
      ctx.clearRect(0, 0, width, height);

      // 1. CLEAR & POPULATE SPATIAL GRID
      // Clear the grid bins without reallocating arrays to prevent garbage collection pressure
      for (let i = 0; i < grid.length; i++) {
        grid[i].length = 0;
      }

      // Reset connection counts and bin nodes into the spatial grid based on their current (x, y)
      for (let i = 0; i < nodes.length; i++) {
        const node = nodes[i];
        node.connections = 0;

        const col = Math.floor(node.x / CELL_SIZE);
        const row = Math.floor(node.y / CELL_SIZE);

        // Ensure indices are within grid bounds before pushing the node reference index
        if (col >= 0 && col < gridCols && row >= 0 && row < gridRows) {
          grid[row * gridCols + col].push(i);
        }
      }

      // 2. CONNECTION EVALUATION UTILITY
      const checkAndDrawConnection = (nodeA, nodeB) => {
        const dx = nodeA.x - nodeB.x;
        const dy = nodeA.y - nodeB.y;
        const dSq = dx * dx + dy * dy;

        // Compare squared distance to avoid expensive Math.sqrt calls where possible
        if (dSq < 32400) { // 180^2 (Connection threshold)
          const d = Math.sqrt(dSq);
          nodeA.connections++;
          nodeB.connections++;

          ctx.beginPath();
          ctx.moveTo(nodeA.x, nodeA.y);
          ctx.lineTo(nodeB.x, nodeB.y);

          // Closer nodes yield thicker, more opaque connection lines
          const opacity = ((180 - d) / 180) * 0.25;

          // Generate a real-time linear gradient that blends the colors of the two connecting nodes
          const grad = ctx.createLinearGradient(nodeA.x, nodeA.y, nodeB.x, nodeB.y);
          grad.addColorStop(0, `rgba(${nodeA.color}, ${opacity})`);
          grad.addColorStop(1, `rgba(${nodeB.color}, ${opacity})`);

          ctx.strokeStyle = grad;
          ctx.lineWidth = 0.5 + (opacity * 1.5);
          ctx.stroke();
        }
      };

      // 3. EXECUTE SPATIAL PARTITIONED CONNECTIONS
      // Iterate through grid cells instead of flat O(N^2) array
      for (let row = 0; row < gridRows; row++) {
        for (let col = 0; col < gridCols; col++) {
          const cellIdx = row * gridCols + col;
          const cellNodes = grid[cellIdx];
          const cellLen = cellNodes.length;

          for (let i = 0; i < cellLen; i++) {
            const nodeAIdx = cellNodes[i];
            const nodeA = nodes[nodeAIdx];

            // Evaluate nodes within the exact same grid cell
            for (let j = i + 1; j < cellLen; j++) {
              checkAndDrawConnection(nodeA, nodes[cellNodes[j]]);
            }

            // Check neighboring cells. To avoid duplicate checks, we only evaluate the "forward"
            // half of the neighboring cells: Right, Bottom-Left, Bottom, and Bottom-Right.

            // Right Neighbor
            if (col + 1 < gridCols) {
              const neighbor = grid[row * gridCols + (col + 1)];
              for (let j = 0; j < neighbor.length; j++) checkAndDrawConnection(nodeA, nodes[neighbor[j]]);
            }

            // Bottom-Left Neighbor
            if (row + 1 < gridRows && col - 1 >= 0) {
              const neighbor = grid[(row + 1) * gridCols + (col - 1)];
              for (let j = 0; j < neighbor.length; j++) checkAndDrawConnection(nodeA, nodes[neighbor[j]]);
            }

            // Bottom Neighbor
            if (row + 1 < gridRows) {
              const neighbor = grid[(row + 1) * gridCols + col];
              for (let j = 0; j < neighbor.length; j++) checkAndDrawConnection(nodeA, nodes[neighbor[j]]);
            }

            // Bottom-Right Neighbor
            if (row + 1 < gridRows && col + 1 < gridCols) {
              const neighbor = grid[(row + 1) * gridCols + (col + 1)];
              for (let j = 0; j < neighbor.length; j++) checkAndDrawConnection(nodeA, nodes[neighbor[j]]);
            }
          }
        }
      }

      // 4. UPDATE PHYSICS AND RENDER NODES
      nodes.forEach(node => {
        // Apply base velocity vectors
        node.x += node.vx;
        node.y += node.vy;

        // Apply interactive mouse repulsion physics
        const dx = node.x - mouse.x;
        const dy = node.y - mouse.y;
        const dSq = dx * dx + dy * dy;

        // If a node enters the mouse radius (using squared distance to avoid expensive Math.sqrt),
        // apply an opposing force vector
        if (dSq < mouseRadiusSq) {
          const distance = Math.sqrt(dSq);
          const forceDirectionX = dx / distance;
          const forceDirectionY = dy / distance;
          // Exponential falloff: force increases as distance to epicenter decreases
          const force = (mouse.radius - distance) / mouse.radius;
          const pushX = forceDirectionX * force * 3.5;
          const pushY = forceDirectionY * force * 3.5;

          node.x += pushX;
          node.y += pushY;
        }

        // Collision detection: Reverse velocity vectors upon hitting canvas boundaries
        if(node.x < 0) { node.x = 0; node.vx *= -1; }
        if(node.x > width) { node.x = width; node.vx *= -1; }
        if(node.y < 0) { node.y = 0; node.vy *= -1; }
        if(node.y > height) { node.y = height; node.vy *= -1; }

        // Dynamic Node Rendering: Nodes swell in size and brightness as they form more connections
        ctx.beginPath();
        const dynamicSize = node.size + (node.connections * 0.08);
        ctx.arc(node.x, node.y, dynamicSize, 0, Math.PI*2);

        const nodeOpacity = Math.min(0.15 + (node.connections * 0.08), 0.8);
        ctx.fillStyle = `rgba(${node.color}, ${nodeOpacity})`;
        ctx.fill();

        // High-density visual feedback: Add a bright core to highly connected "hub" nodes
        if (node.connections > 3) {
            ctx.beginPath();
            ctx.arc(node.x, node.y, dynamicSize * 0.5, 0, Math.PI*2);
            ctx.fillStyle = `rgba(255, 255, 255, 0.7)`;
            ctx.fill();
        }
      });

      animationFrameId = requestAnimationFrame(render);
    }
    render();

    // Handle viewport changes to prevent the canvas from scaling/blurring
    const handleResize = () => {
      width = window.innerWidth; height = window.innerHeight;
      canvas.width = width; canvas.height = height;
      initGrid(width, height); // Re-initialize spatial partitioning grid bounds
    };
    window.addEventListener('resize', handleResize);

    // Cleanup phase: Remove event listeners and halt the animation frame to prevent memory leaks on unmount
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