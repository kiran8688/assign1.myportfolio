import React, { useEffect } from 'react';

class Particle {
  constructor(width, height) {
    this.width = width;
    this.height = height;
    this.x = Math.random() * width;
    this.y = Math.random() * height;
    this.vx = (Math.random() - 0.5) * 1.5;
    this.vy = (Math.random() - 0.5) * 1.5;
    this.radius = Math.random() * 2 + 1;
  }
  update(width, height) {
    this.width = width;
    this.height = height;
    this.x += this.vx;
    this.y += this.vy;
    if (this.x < 0 || this.x > this.width) this.vx *= -1;
    if (this.y < 0 || this.y > this.height) this.vy *= -1;
  }
  draw(ctx) {
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
    ctx.fillStyle = 'rgba(6, 182, 212, 0.4)'; // ai-cyan
    ctx.fill();
  }
}

const NetworkBackground = () => {
  useEffect(() => {
    const canvas = document.getElementById('network-canvas');
    const ctx = canvas.getContext('2d');
    let width, height;
    let particles = [];
    let animationFrameId;

    const resize = () => {
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = width;
      canvas.height = height;
    };

    window.addEventListener('resize', resize);
    resize();

    for (let i = 0; i < 80; i++) {
      particles.push(new Particle(width, height));
    }

    const animate = () => {
      ctx.clearRect(0, 0, width, height);

      particles.forEach(p => {
        p.update(width, height);
        p.draw(ctx);
      });

      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          // ⚡ Bolt: Optimize particle distance calculation by comparing squared distance first
          // This avoids ~3160 expensive Math.sqrt() calls per frame for particles outside the 120px range
          const distSq = dx * dx + dy * dy;

          if (distSq < 14400) { // 120 * 120
            const distance = Math.sqrt(distSq);
            ctx.beginPath();
            ctx.strokeStyle = `rgba(59, 130, 246, ${1 - distance/120})`; // ai-blue alpha based on distance
            ctx.lineWidth = 0.8;
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.stroke();
          }
        }
      }
      animationFrameId = requestAnimationFrame(animate);
    };

    animate();
    return () => {
      window.removeEventListener('resize', resize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      id="network-canvas"
      className="fixed inset-0 pointer-events-none z-0"
      style={{ opacity: 0.6 }}
    ></canvas>
  );
};

export default NetworkBackground;
