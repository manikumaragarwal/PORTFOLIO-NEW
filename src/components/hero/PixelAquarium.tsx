import React, { useEffect, useRef, useState } from 'react';
import { sounds } from '../layout/SoundEffects';

interface FoodFlake {
  x: number;
  y: number;
  speed: number;
}

interface Bubble {
  x: number;
  y: number;
  radius: number;
  speed: number;
  alpha: number;
}

export const PixelAquarium: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [fishHappiness, setFishHappiness] = useState(0);

  const foodRef = useRef<FoodFlake[]>([]);
  const bubblesRef = useRef<Bubble[]>([]);
  const fishRef = useRef({
    x: 64,
    y: 55,
    vx: 0.5,
    vy: 0,
    ph: Math.random() * Math.PI * 2,
    eatCD: 0
  });

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    ctx.imageSmoothingEnabled = false;

    let animId: number;
    let t = 0;
    let bubTimer = 0;
    const W = 128;
    const H = 128;
    const ST = 96; // Sand top
    const WT = 6;  // Water top
    const PX = 3;  // Pixel size

    // Initialize bubbles
    bubblesRef.current = [
      { x: 45, y: 70, radius: 1.5, speed: 0.4, alpha: 0.6 },
      { x: 85, y: 50, radius: 2, speed: 0.35, alpha: 0.5 }
    ];

    const render = () => {
      t += 16;
      ctx.clearRect(0, 0, W, H);

      // 1. Water gradient
      const waterGrad = ctx.createLinearGradient(0, 0, 0, H);
      waterGrad.addColorStop(0, '#b8dde8');
      waterGrad.addColorStop(0.6, '#7ab8cc');
      waterGrad.addColorStop(1, '#4a8eaa');
      ctx.fillStyle = waterGrad;
      ctx.fillRect(0, 0, W, H);

      // 2. Sand floor (multitone pixel art)
      const sandTones = ['#e8d4a8', '#edd9b2', '#e2ce9e', '#d8c490'];
      ctx.fillStyle = sandTones[0];
      ctx.fillRect(0, ST, W, H - ST);

      for (let sy = ST; sy < H; sy += PX) {
        for (let sx = 0; sx < W; sx += PX) {
          const n = ((sx * 374761393 + sy * 1103515245) ^ (sx >> 13)) % 100;
          if (n < 20) {
            ctx.fillStyle = sandTones[1];
            ctx.fillRect(sx, sy, PX, PX);
          } else if (n < 36) {
            ctx.fillStyle = sandTones[2];
            ctx.fillRect(sx, sy, PX, PX);
          } else if (n < 46) {
            ctx.fillStyle = sandTones[3];
            ctx.fillRect(sx, sy, PX, PX);
          }
        }
      }

      // 3. Seaweed blades with S-curve sway
      const seaweedClusters = [
        { x: 16, blades: [{ off: 0, segs: 13, amp: 3, phase: 0 }, { off: 5, segs: 11, amp: 2.5, phase: 1.5 }] },
        { x: 106, blades: [{ off: -4, segs: 14, amp: -3, phase: 2.2 }, { off: 3, segs: 12, amp: 2.5, phase: 3.0 }] }
      ];

      seaweedClusters.forEach((cl) => {
        cl.blades.forEach((b) => {
          const bx = cl.x + b.off;
          for (let i = 0; i < b.segs; i++) {
            const ratio = (i + 1) / b.segs;
            const sway = Math.round(Math.sin(t * 0.0012 + b.phase + i * 0.32) * Math.abs(b.amp) * ratio);
            const wx = bx + sway;
            const wy = ST - (i + 1) * PX;
            const bw = ratio < 0.5 ? PX * 2 : PX;
            const ox = wx - Math.floor(bw / 2);

            ctx.fillStyle = ratio < 0.45 ? '#2e8045' : '#3a9c55';
            ctx.fillRect(ox, wy, bw, PX);

            if (bw >= PX * 2) {
              ctx.fillStyle = '#72cc84';
              ctx.fillRect(wx - 1, wy, PX, PX);
            }
          }
        });
      });

      // 4. Pixel Coral
      const CSPR = [
        [0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0, 0],
        [0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 0, 0, 0],
        [0, 0, 0, 1, 1, 0, 1, 1, 0, 1, 1, 0, 0],
        [0, 0, 1, 1, 0, 0, 1, 0, 0, 0, 1, 1, 0],
        [0, 0, 1, 0, 1, 0, 1, 0, 0, 0, 0, 1, 1],
        [0, 0, 1, 1, 0, 0, 1, 0, 0, 0, 0, 1, 0],
        [0, 0, 0, 1, 0, 1, 1, 0, 0, 0, 1, 1, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0]
      ];
      const crx = 42;
      for (let row = 0; row < CSPR.length; row++) {
        for (let col = 0; col < CSPR[row].length; col++) {
          if (CSPR[row][col]) {
            ctx.fillStyle = row >= 7 ? '#e8b4c0' : '#c98898';
            ctx.fillRect(crx - 7 * PX + col * PX, ST - (row + 1) * PX, PX, PX);
          }
        }
      }

      // 5. Pixel Rocks
      const rocks = [
        { x: 62, rows: [[1, 1, 1, 1, 1, 1, 1], [1, 1, 1, 1, 1, 1, 1], [0, 1, 1, 1, 1, 1, 0], [0, 0, 1, 1, 1, 0, 0]], hi: 3, shades: ['#38404a', '#505a68', '#707a88', '#909aaa'] },
        { x: 86, rows: [[1, 1, 1, 1, 1], [1, 1, 1, 1, 1], [0, 1, 1, 1, 0]], hi: 2, shades: ['#404858', '#606870', '#808890'] }
      ];
      rocks.forEach((rock) => {
        rock.rows.forEach((row, ri) => {
          row.forEach((on, ci) => {
            if (!on) return;
            ctx.fillStyle = rock.shades[ri];
            ctx.fillRect(rock.x + ci * PX, ST - (ri + 1) * PX, PX, PX);
          });
        });
        ctx.fillStyle = '#b0b8c8';
        ctx.fillRect(rock.x + PX, ST - rock.hi * PX, PX, PX);
      });

      // 6. Food pellets
      const foods = foodRef.current;
      for (let i = foods.length - 1; i >= 0; i--) {
        const f = foods[i];
        f.y += f.speed;

        ctx.fillStyle = '#c86420';
        ctx.beginPath();
        ctx.arc(f.x, f.y, 2.5, 0, Math.PI * 2);
        ctx.fill();

        // Fish eating collision
        const dist = Math.hypot(f.x - fishRef.current.x, f.y - fishRef.current.y);
        if (dist < 10 && fishRef.current.eatCD <= 0) {
          foods.splice(i, 1);
          fishRef.current.eatCD = 400;
          setFishHappiness((prev) => prev + 1);
          sounds.bubble();
          continue;
        }

        if (f.y > ST) {
          foods.splice(i, 1);
        }
      }

      // 7. Fish AI & Movement Physics
      const fish = fishRef.current;
      if (fish.eatCD > 0) fish.eatCD -= 16;

      let targetFood: FoodFlake | null = null;
      let minDistance = 999;
      for (const f of foods) {
        const d = Math.hypot(f.x - fish.x, f.y - fish.y);
        if (d < minDistance) {
          minDistance = d;
          targetFood = f;
        }
      }

      if (targetFood && fish.eatCD <= 0) {
        const dx = targetFood.x - fish.x;
        const dy = targetFood.y - fish.y;
        const dd = Math.hypot(dx, dy) || 1;
        fish.vx += (dx / dd * 1.8 - fish.vx) * 0.08;
        fish.vy += (dy / dd * 1.5 - fish.vy) * 0.08;
      } else {
        fish.ph += 0.016;
        fish.vy += (Math.sin(fish.ph) * 0.35 - fish.vy) * 0.06;
        if (Math.abs(fish.vx) < 0.25) fish.vx = fish.vx >= 0 ? 0.45 : -0.45;
      }

      fish.x += fish.vx;
      fish.y += fish.vy;

      // Tank boundary bounce
      const pad = 16;
      if (fish.x < pad) { fish.x = pad; fish.vx = Math.abs(fish.vx) * 0.8; }
      if (fish.x > W - pad) { fish.x = W - pad; fish.vx = -Math.abs(fish.vx) * 0.8; }
      if (fish.y > ST - 12) { fish.y = ST - 12; fish.vy = -0.4; }
      if (fish.y < WT + 12) { fish.y = WT + 12; fish.vy = 0.4; }

      // Bubbles from mouth
      bubTimer += 16;
      if (bubTimer > 3000 + Math.random() * 2000) {
        const mouthX = fish.x + (fish.vx >= 0 ? 14 : -14);
        const mouthY = fish.y - 2;
        bubblesRef.current.push({
          x: mouthX,
          y: mouthY,
          radius: 1.2 + Math.random() * 0.8,
          speed: 0.35 + Math.random() * 0.2,
          alpha: 0.7
        });
        bubTimer = 0;
      }

      // 8. Draw bubbles
      const bubbles = bubblesRef.current;
      for (let i = bubbles.length - 1; i >= 0; i--) {
        const b = bubbles[i];
        b.y -= b.speed;
        b.x += Math.sin(b.y * 0.04) * 0.15;
        b.alpha -= 0.002;

        ctx.save();
        ctx.globalAlpha = Math.max(0.1, b.alpha);
        ctx.strokeStyle = 'rgba(255, 255, 255, 0.85)';
        ctx.lineWidth = 1;
        ctx.beginPath();
        ctx.arc(b.x, b.y, b.radius, 0, Math.PI * 2);
        ctx.stroke();
        ctx.restore();

        if (b.alpha <= 0 || b.y < WT) {
          bubbles.splice(i, 1);
        }
      }

      // 9. Draw Goldfish with Segmented Sine-wave tail sway
      ctx.save();
      ctx.translate(Math.round(fish.x), Math.round(fish.y));
      if (fish.vx < 0) ctx.scale(-1, 1);

      const sway = Math.sin(t * 0.005) * 2;

      // Tail
      ctx.fillStyle = '#f97316';
      ctx.beginPath();
      ctx.moveTo(-6, 0);
      ctx.lineTo(-14, -5 + sway);
      ctx.lineTo(-11, 0);
      ctx.lineTo(-14, 5 + sway);
      ctx.closePath();
      ctx.fill();

      // Body
      ctx.fillStyle = '#ea580c';
      ctx.fillRect(-6, -4, 12, 8);
      ctx.fillStyle = '#fb923c';
      ctx.fillRect(-4, -5, 9, 10);

      // Stripes & Highlights
      ctx.fillStyle = '#ffffff';
      ctx.fillRect(-1, -4, 3, 8);
      ctx.fillStyle = '#000000';
      ctx.fillRect(0, -4, 1, 8);

      // Eye
      ctx.fillStyle = '#ffffff';
      ctx.fillRect(3, -3, 3, 3);
      ctx.fillStyle = '#000000';
      ctx.fillRect(4, -2, 1.5, 1.5);

      // Fin
      ctx.fillStyle = '#fdba74';
      ctx.fillRect(-2, 1, 3, 3);

      ctx.restore();

      // 10. Water surface glare lines & glass rim highlights
      for (let i = 0; i < 2; i++) {
        ctx.fillStyle = `rgba(255, 255, 255, ${0.08 + i * 0.02})`;
        ctx.fillRect(0, WT + i * 5, W, 2);
      }

      ctx.fillStyle = 'rgba(255, 255, 255, 0.30)';
      ctx.fillRect(0, 0, PX, H);
      ctx.fillStyle = 'rgba(255, 255, 255, 0.12)';
      ctx.fillRect(PX, 0, PX, H);
      ctx.fillStyle = 'rgba(255, 255, 255, 0.22)';
      ctx.fillRect(W - PX, 0, PX, H);

      animId = requestAnimationFrame(render);
    };

    render();

    return () => {
      cancelAnimationFrame(animId);
    };
  }, []);

  const handleFeed = (e: React.MouseEvent) => {
    e.stopPropagation();
    sounds.bubble();
    for (let i = 0; i < 3; i++) {
      foodRef.current.push({
        x: 18 + Math.random() * (128 - 36),
        y: 8 + Math.random() * 6,
        speed: 0.28 + Math.random() * 0.15
      });
    }
  };

  return (
    <div
      title="Pixel Aquarium • Tap or hover to feed the fish 🐟"
      className="relative w-[105px] sm:w-[128px] h-[115px] sm:h-[128px] rounded-xl overflow-hidden shadow-sm border border-black/10 cursor-default select-none group flex-shrink-0 transition-transform duration-200"
    >
      <canvas
        ref={canvasRef}
        width={128}
        height={128}
        className="w-full h-full block"
      />

      {/* FEED ME HUD button matching Cindy Ly original */}
      <div className="absolute bottom-2 inset-x-0 flex justify-center items-center opacity-0 group-hover:opacity-100 transition-all duration-200 transform translate-y-1 group-hover:translate-y-0 pointer-events-none">
        <button
          onClick={handleFeed}
          className="pointer-events-auto px-2.5 py-1 rounded-md bg-black/60 hover:bg-black/80 backdrop-blur-md text-white text-[10px] font-mono font-medium tracking-wider cursor-pointer shadow-md transition-all active:scale-95 border border-white/10"
        >
          {fishHappiness > 0 ? `FED ${fishHappiness} 🫧` : 'FEED ME'}
        </button>
      </div>
    </div>
  );
};
