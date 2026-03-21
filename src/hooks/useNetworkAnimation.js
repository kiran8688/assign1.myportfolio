import { useEffect } from 'react';

/**
 * Custom React hook to render a highly interactive, animated neural network
 * background using the HTML5 Canvas API.
 *
 * Features include:
 * - Dynamic spatial node connections based on proximity.
 * - Multi-color gradient connection lines.
 * - Interactive repulsion physics tied to mouse movement.
 * - Auto-resizing capabilities to fit the browser window.
 *
 * @param {React.MutableRefObject<HTMLCanvasElement>} canvasRef - A ref pointing to the target `<canvas>` DOM element.
 */
const useNetworkAnimation = (canvasRef) => {
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Set canvas dimensions to explicitly match the current viewport size

    let width = window.innerWidth;
    let height = window.innerHeight;
    canvas.width = width;
    canvas.height = height;

    // --- Mouse Interactivity Tracking ---
    // The cursor acts as a repulsor field. Initialized off-screen to avoid immediate impact.
    const mouse = { x: -1000, y: -1000, radius: 150 };

    // --- ELEMENT INITIALIZATION ---

    // Array of base RGB colors used for nodes and gradient connection lines
    const palette = ['6, 182, 212', '59, 130, 246', '139, 92, 246', '236, 72, 153', '16, 185, 129'];

    // Generate the particle array. Base count is 120 nodes.
    const nodes = Array.from({ length: Math.floor(80 * 1.50) }, () => ({
      x: Math.random() * width, // Initial random X position
      y: Math.random() * height, // Initial random Y position
      vx: (Math.random() - 0.5) * 0.5, // X-axis velocity vector
      vy: (Math.random() - 0.5) * 0.5, // Y-axis velocity vector
      size: (Math.random() * 0.5 + 0.15) * 1.10, // Base rendering radius
      connections: 0, // State variable tracking active spatial connections per frame
      color: palette[Math.floor(Math.random() * palette.length)]
    }));

    // --- EVENT LISTENERS ---
    // Update the repulsor field center on mouse move
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

    const render = () => {
      ctx.clearRect(0, 0, width, height);

      // Reset connection counts for the current frame
      nodes.forEach(node => node.connections = 0);

      // 1. Calculate Synaptic Connections First
      // Iterates through all unique node pairs to check distance.
      for (let i = 0; i < nodes.length; i++) {
        for (let j = i + 1; j < nodes.length; j++) {
          const dx = nodes[i].x - nodes[j].x;
          const dy = nodes[i].y - nodes[j].y;
          const d = Math.sqrt(dx * dx + dy * dy); // Pythagorean distance

          // If nodes are within the connection threshold (180px), draw a line
          if (d < 180) {
            nodes[i].connections++;
            nodes[j].connections++;

            ctx.beginPath();
            ctx.moveTo(nodes[i].x, nodes[i].y);
            ctx.lineTo(nodes[j].x, nodes[j].y);

            // Closer nodes yield thicker, more opaque connection lines
            const opacity = ((180 - d) / 180) * 0.25;

            // Generate a real-time linear gradient that blends the colors of the two connecting nodes
            const grad = ctx.createLinearGradient(nodes[i].x, nodes[i].y, nodes[j].x, nodes[j].y);
            grad.addColorStop(0, `rgba(${nodes[i].color}, ${opacity})`);
            grad.addColorStop(1, `rgba(${nodes[j].color}, ${opacity})`);

            ctx.strokeStyle = grad;
            ctx.lineWidth = 0.5 + (opacity * 1.5);
            ctx.stroke();
          }
        }
      }

      // 2. Update and Draw Nodes (With Repulsion Physics)
      nodes.forEach(node => {
        // Base kinetic movement
        node.x += node.vx;
        node.y += node.vy;

        // Kinetic Repulsion Physics
        // If a node enters the mouse radius, apply a force vector pushing it away.
        const dx = node.x - mouse.x;
        const dy = node.y - mouse.y;
        const distance = Math.sqrt(dx * dx + dy * dy);

        if (distance < mouse.radius) {
          const forceDirectionX = dx / distance;
          const forceDirectionY = dy / distance;
          // The closer the node is to the cursor epicenter, the stronger the exponential push
          const force = (mouse.radius - distance) / mouse.radius;
          const pushX = forceDirectionX * force * 3.5;
          const pushY = forceDirectionY * force * 3.5;

          node.x += pushX;
          node.y += pushY;
        }

        // Collision detection: Reverse velocity vectors on hitting canvas boundaries
        if(node.x < 0) { node.x = 0; node.vx *= -1; }
        if(node.x > width) { node.x = width; node.vx *= -1; }
        if(node.y < 0) { node.y = 0; node.vy *= -1; }
        if(node.y > height) { node.y = height; node.vy *= -1; }

        // Dynamic Node Styling: Nodes swell in size and brightness as they form more connections
        ctx.beginPath();
        const dynamicSize = node.size + (node.connections * 0.08);
        ctx.arc(node.x, node.y, dynamicSize, 0, Math.PI*2);

        const nodeOpacity = Math.min(0.15 + (node.connections * 0.08), 0.8);
        ctx.fillStyle = `rgba(${node.color}, ${nodeOpacity})`;
        ctx.fill();

        // Add a pure white core highlight to highly connected "hub" nodes to signify network density
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

    // Handle viewport changes to prevent the canvas from stretching or compressing
    const handleResize = () => {
      width = window.innerWidth; height = window.innerHeight;
      canvas.width = width; canvas.height = height;
    };
    window.addEventListener('resize', handleResize);

    // Cleanup phase: Remove event listeners and stop the animation loop to prevent memory leaks on component unmount
    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseout', handleMouseLeave);
      cancelAnimationFrame(animationFrameId);
    };
  }, [canvasRef]);
};

export default useNetworkAnimation;
