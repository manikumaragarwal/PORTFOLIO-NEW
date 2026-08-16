import React, { useEffect, useRef } from 'react';
import { sounds } from '../layout/SoundEffects';

export const GalaxyCard: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    const canvas = canvasRef.current;
    if (!canvas || !container) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = container.offsetWidth);
    let height = (canvas.height = container.offsetHeight);

    const handleResize = () => {
      if (!container || !canvas) return;
      width = canvas.width = container.offsetWidth;
      height = canvas.height = container.offsetHeight;
    };
    window.addEventListener('resize', handleResize);

    // Generate 55 stars
    const stars = Array.from({ length: 55 }, () => ({
      x: Math.random() * width,
      y: Math.random() * height,
      radius: Math.random() * 1.2 + 0.4,
      baseAlpha: Math.random() * 0.4 + 0.3,
      alpha: Math.random() * 0.4 + 0.3,
      peakAlpha: Math.random() * 0.4 + 0.6,
      twinkleSpeed: Math.random() * 0.04 + 0.015
    }));

    // Shooting stars
    const shootingStars: { x: number; y: number; length: number; speed: number; alpha: number; angle: number }[] = [];

    const triggerShootingStar = () => {
      shootingStars.push({
        x: Math.random() * width * 0.85,
        y: Math.random() * height * 0.35,
        length: Math.random() * 50 + 35,
        speed: Math.random() * 3.5 + 2.5,
        alpha: 1,
        angle: Math.PI / 4 + (Math.random() - 0.5) * 0.15
      });
    };

    let tick = 0;
    const render = () => {
      tick++;
      ctx.clearRect(0, 0, width, height);

      // Deep space gradient matching original
      const bgGrad = ctx.createLinearGradient(0, 0, 0, height);
      bgGrad.addColorStop(0, '#24325e');
      bgGrad.addColorStop(0.5, '#1a2848');
      bgGrad.addColorStop(1, '#111d3a');
      ctx.fillStyle = bgGrad;
      ctx.fillRect(0, 0, width, height);

      // Cosmic ambient glow
      const dustGrad = ctx.createRadialGradient(width * 0.65, height * 0.35, 10, width * 0.65, height * 0.35, width * 0.55);
      dustGrad.addColorStop(0, 'rgba(140, 160, 220, 0.18)');
      dustGrad.addColorStop(0.6, 'rgba(56, 189, 248, 0.05)');
      dustGrad.addColorStop(1, 'transparent');
      ctx.fillStyle = dustGrad;
      ctx.fillRect(0, 0, width, height);

      // Draw and twinkle stars
      stars.forEach((star) => {
        star.alpha += Math.sin(tick * star.twinkleSpeed) * 0.012;
        const currentAlpha = Math.max(0.15, Math.min(star.peakAlpha, star.alpha));
        ctx.beginPath();
        ctx.arc(star.x, star.y, star.radius, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(235, 242, 255, ${currentAlpha})`;
        ctx.fill();

        if (star.radius > 1.1 && currentAlpha > 0.65) {
          ctx.strokeStyle = `rgba(255, 255, 255, ${currentAlpha * 0.3})`;
          ctx.lineWidth = 0.5;
          ctx.beginPath();
          ctx.moveTo(star.x - 2.5, star.y);
          ctx.lineTo(star.x + 2.5, star.y);
          ctx.moveTo(star.x, star.y - 2.5);
          ctx.lineTo(star.x, star.y + 2.5);
          ctx.stroke();
        }
      });

      // Draw shooting stars
      for (let i = shootingStars.length - 1; i >= 0; i--) {
        const s = shootingStars[i];
        s.x += Math.cos(s.angle) * s.speed;
        s.y += Math.sin(s.angle) * s.speed;
        s.alpha -= 0.025;

        const tailX = s.x - Math.cos(s.angle) * s.length;
        const tailY = s.y - Math.sin(s.angle) * s.length;

        const grad = ctx.createLinearGradient(s.x, s.y, tailX, tailY);
        grad.addColorStop(0, `rgba(255, 255, 255, ${Math.max(0, s.alpha)})`);
        grad.addColorStop(1, 'rgba(255, 255, 255, 0)');

        ctx.strokeStyle = grad;
        ctx.lineWidth = 1.4;
        ctx.beginPath();
        ctx.moveTo(s.x, s.y);
        ctx.lineTo(tailX, tailY);
        ctx.stroke();

        if (s.alpha <= 0) {
          shootingStars.splice(i, 1);
        }
      }

      if (Math.random() < 0.007) {
        triggerShootingStar();
      }

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    // Mouse movement shooting star particle trail
    let lastTX: number | null = null;
    let lastTY: number | null = null;

    const handleMouseMove = (e: MouseEvent) => {
      const rect = container.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      if (lastTX === null || lastTY === null) {
        lastTX = x;
        lastTY = y;
        return;
      }
      const dx = x - lastTX;
      const dy = y - lastTY;
      const dist = Math.sqrt(dx * dx + dy * dy);
      if (dist < 1) return;
      const angle = (Math.atan2(dy, dx) * 180) / Math.PI;
      const stretch = Math.min(4, 1 + dist * 0.2);
      const steps = Math.max(1, Math.ceil(dist / 4));

      for (let s = 1; s <= steps; s++) {
        const t = s / steps;
        const px = lastTX + dx * t;
        const py = lastTY + dy * t;
        const trail = document.createElement('span');
        trail.className = 'card-night-trail';
        trail.style.left = `${px}px`;
        trail.style.top = `${py}px`;
        trail.style.transform = `translate(-50%, -50%) rotate(${angle}deg) scaleX(${stretch})`;
        container.appendChild(trail);
        setTimeout(() => trail.remove(), 900);
      }
      lastTX = x;
      lastTY = y;
    };

    const handleMouseEnter = (e: MouseEvent) => {
      const rect = container.getBoundingClientRect();
      const ripple = document.createElement('span');
      ripple.className = 'card-night-ripple';
      ripple.style.left = `${e.clientX - rect.left}px`;
      ripple.style.top = `${e.clientY - rect.top}px`;
      container.appendChild(ripple);
      setTimeout(() => ripple.remove(), 1000);
    };

    container.addEventListener('mousemove', handleMouseMove);
    container.addEventListener('mouseenter', handleMouseEnter);

    return () => {
      window.removeEventListener('resize', handleResize);
      container.removeEventListener('mousemove', handleMouseMove);
      container.removeEventListener('mouseenter', handleMouseEnter);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  const handleClick = () => {
    sounds.clap();
  };

  return (
    <div
      ref={containerRef}
      onClick={handleClick}
      title="Hover or click for shooting stars ✨"
      className="relative w-full h-[120px] sm:h-[128px] rounded-xl overflow-hidden shadow-sm border border-slate-700/40 cursor-default select-none transition-all duration-200 hover:shadow-md"
    >
      <canvas ref={canvasRef} className="absolute inset-0 w-full h-full block" />

      {/* Quote Overlay filling the box */}
      <div className="absolute inset-0 flex flex-col justify-center px-4 sm:px-8 py-2.5 text-white z-10 pointer-events-none">
        <div className="font-display-serif text-[18px] xs:text-[21px] sm:text-[30px] md:text-[35px] tracking-tight leading-[1.12] text-white font-normal drop-shadow-md">
          I build systems around <br />
          <span className="italic font-display-serif font-light text-sky-100">content & attention.</span>
        </div>
      </div>
    </div>
  );
};
