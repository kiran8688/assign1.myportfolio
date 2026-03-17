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
    // Increased node size by 5x ((Math.random() * 0.5 + 0.15) * 5)
    const nodes = Array.from({ length: Math.floor(80 * 1.50) }, () => ({
      x: Math.random() * width,
      y: Math.random() * height,
      vx: (Math.random() - 0.5) * 0.5,
      vy: (Math.random() - 0.5) * 0.5,
      size: (Math.random() * 0.5 + 0.15) * 5, // 5x bigger base size of the nodes
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

    const render = () => {
      ctx.clearRect(0, 0, width, height);

      // Reset connection counts for the current frame
      nodes.forEach(node => node.connections = 0);

      // 1. Calculate Synaptic Connections First
      for (let i = 0; i < nodes.length; i++) {
        for (let j = i + 1; j < nodes.length; j++) {
          const dx = nodes[i].x - nodes[j].x;
          const dy = nodes[i].y - nodes[j].y;
          const d = Math.sqrt(dx * dx + dy * dy);

          if (d < 180) { // Connection threshold
            nodes[i].connections++;
            nodes[j].connections++;

            ctx.beginPath();
            ctx.moveTo(nodes[i].x, nodes[i].y);
            ctx.lineTo(nodes[j].x, nodes[j].y);

            // Opacity and thickness scale with proximity
            // Made connections significantly brighter (50x brighter base calculation, clamped at 1.0)
            const baseOpacity = ((180 - d) / 180) * 0.25;
            const opacity = Math.min(baseOpacity * 50, 1.0);

            // Create a dynamic linear gradient between the two node colors
            const grad = ctx.createLinearGradient(nodes[i].x, nodes[i].y, nodes[j].x, nodes[j].y);
            grad.addColorStop(0, `rgba(${nodes[i].color}, ${opacity})`);
            grad.addColorStop(1, `rgba(${nodes[j].color}, ${opacity})`);

            ctx.strokeStyle = grad; // Apply multi-color gradient
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
        // Growth logic scaled for 5x larger nodes
        const dynamicSize = node.size + (node.connections * 0.4);
        ctx.arc(node.x, node.y, dynamicSize, 0, Math.PI*2);

        // 50x brighter base node opacity, clamped at 1.0
        const baseNodeOpacity = Math.min(0.15 + (node.connections * 0.08), 0.8);
        const nodeOpacity = Math.min(baseNodeOpacity * 50, 1.0);
        ctx.fillStyle = `rgba(${node.color}, ${nodeOpacity})`; // Use the node's specific assigned color
        ctx.fill();

        // Add a bright core highlight to highly connected "hub" nodes
        if (node.connections > 3) {
            ctx.beginPath();
            ctx.arc(node.x, node.y, dynamicSize * 0.5, 0, Math.PI*2); // Adjusted core ratio to remain visible
            ctx.fillStyle = `rgba(255, 255, 255, 1.0)`; // Fully opaque white for the core
            ctx.fill();
        }
      });

      animationFrameId = requestAnimationFrame(render);
    }
    render();

    const handleResize = () => {
      width = window.innerWidth; height = window.innerHeight;
      canvas.width = width; canvas.height = height;
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