import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ActiveSection } from '../../types';
import { sounds } from './SoundEffects';
import { getAssetUrl } from '../../utils/assets';

interface DockProps {
  activeSection: ActiveSection;
  onSelectSection: (section: ActiveSection) => void;
}

interface DockItemDef {
  id: ActiveSection;
  label: string;
  renderIcon: (isActive: boolean) => React.ReactNode;
}

export const Dock: React.FC<DockProps> = ({ activeSection, onSelectSection }) => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [hasBounced, setHasBounced] = useState(false);

  useEffect(() => {
    // Initial bounce to draw attention to works on first arrival
    const timer = setTimeout(() => {
      setHasBounced(true);
    }, 4500);
    return () => clearTimeout(timer);
  }, []);

  const items: DockItemDef[] = [
    {
      id: 'works',
      label: 'works',
      renderIcon: (isActive) => (
        <div className={`w-11 h-11 rounded-2xl bg-gradient-to-b from-sky-200 via-sky-300 to-blue-400 p-1 flex items-center justify-center shadow-md relative group-hover:shadow-lg transition-all ${
          !hasBounced && activeSection !== 'works' ? 'folder-bounce-anim' : ''
        }`}>
          {/* macOS Folder Icon (open when active, closed when inactive) */}
          <div className="w-8 h-6 bg-sky-100 rounded-t-xs rounded-b-md relative overflow-hidden flex flex-col items-center justify-end pb-0.5 shadow-inner border border-sky-300/50">
            {/* Tab top */}
            <div className="w-4 h-1.5 bg-sky-200 absolute top-0 left-1 rounded-xs"></div>
            {/* Folder opening flap */}
            <div className={`w-7 rounded-xs transition-all duration-200 ${
              isActive ? 'h-4 bg-sky-400/80 -rotate-3 shadow-md' : 'h-3 bg-white/50'
            }`}></div>
          </div>
        </div>
      )
    },
    {
      id: 'sidequests',
      label: 'sidequests',
      renderIcon: () => (
        <div className="w-11 h-11 rounded-2xl bg-gradient-to-b from-pink-50 via-pink-100 to-rose-200 p-1.5 flex items-center justify-center shadow-md relative group-hover:shadow-lg transition-all border border-pink-200/60">
          {/* Tapioca Cookie / Doodle Icon */}
          <div className="w-7 h-7 rounded-full bg-pink-100/90 border border-pink-300 flex items-center justify-center shadow-2xs">
            <div className="w-4 h-4 rounded-full border border-dashed border-rose-400 flex items-center justify-center">
              <div className="w-1.5 h-1.5 rounded-full bg-rose-400"></div>
            </div>
          </div>
        </div>
      )
    },
    {
      id: 'profile',
      label: 'profile',
      renderIcon: () => (
        <div className="w-11 h-11 rounded-2xl overflow-hidden p-0.5 bg-gradient-to-b from-sky-100 via-blue-100 to-blue-200 shadow-md relative group-hover:shadow-lg transition-all border border-blue-200/60">
          <img
            src={getAssetUrl('/images/manish_main_profile.jpg')}
            alt="Manish Agarwal"
            className="w-full h-full object-cover rounded-xl"
          />
        </div>
      )
    },
    {
      id: 'blog',
      label: 'journal',
      renderIcon: () => (
        <div className="w-11 h-11 rounded-2xl bg-gradient-to-b from-amber-50 via-amber-100 to-orange-100 p-1.5 flex items-center justify-center shadow-md relative group-hover:shadow-lg transition-all border border-amber-200/60">
          {/* Journal Book Icon */}
          <div className="w-7 h-7 bg-white rounded-sm border border-amber-300 shadow-2xs flex flex-col p-1 justify-between">
            <div className="w-3 h-0.5 bg-amber-400 rounded"></div>
            <div className="w-full h-0.5 bg-zinc-200 rounded"></div>
            <div className="w-4 h-0.5 bg-zinc-200 rounded"></div>
          </div>
        </div>
      )
    }
  ];

  return (
    <>
      {/* Floating macOS Glass Dock */}
      <div className="fixed bottom-3 sm:bottom-6 left-1/2 -translate-x-1/2 z-40 flex flex-col items-center pointer-events-none select-none max-w-[96vw]">
        <motion.div
          onMouseLeave={() => setHoveredIndex(null)}
          className="glass-dock px-2.5 sm:px-3.5 py-1.5 sm:py-2.5 rounded-2xl flex items-end gap-2 sm:gap-3.5 pointer-events-auto shadow-2xl"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
        >
          {items.map((item, index) => {
            const isActive = activeSection === item.id;
            
            // Continuous fluid magnification curve
            let scale = 1;
            if (hoveredIndex !== null) {
              const distance = Math.abs(index - hoveredIndex);
              if (distance === 0) scale = 1.3;
              else if (distance === 1) scale = 1.15;
              else if (distance === 2) scale = 1.05;
            }

            return (
              <motion.button
                key={item.id}
                onClick={() => {
                  sounds.click();
                  onSelectSection(item.id);
                }}
                onMouseEnter={() => {
                  setHoveredIndex(index);
                  sounds.dockHover();
                }}
                animate={{
                  scale,
                  y: scale > 1 ? -(scale - 1) * 18 : 0
                }}
                transition={{
                  type: 'spring',
                  stiffness: 400,
                  damping: 25,
                  mass: 0.8
                }}
                style={{ transformOrigin: 'bottom center' }}
                className="group relative flex flex-col items-center focus:outline-none cursor-pointer"
              >
                {/* Tooltip on Hover */}
                <div
                  className={`absolute -top-9 px-2.5 py-1 rounded-md bg-zinc-900/90 text-white text-[11px] font-mono tracking-tight font-medium shadow-md backdrop-blur-xs transition-all duration-150 pointer-events-none ${
                    hoveredIndex === index ? 'opacity-100 -translate-y-1' : 'opacity-0 translate-y-0'
                  }`}
                >
                  {item.label}
                  <div className="absolute top-full left-1/2 -translate-x-1/2 border-4 border-transparent border-t-zinc-900/90"></div>
                </div>

                {/* Icon */}
                <div className="p-0.5 relative">
                  {item.renderIcon(isActive)}
                </div>

                {/* Label text: when active, authentic blue pill badge */}
                <span className={`text-[11px] font-sans font-medium mt-1 transition-all duration-150 leading-tight px-1.5 py-0.5 rounded-sm ${
                  isActive 
                    ? 'bg-[#0081F2] text-white font-semibold shadow-2xs' 
                    : 'text-zinc-500 group-hover:text-zinc-800'
                }`}>
                  {item.label}
                </span>
              </motion.button>
            );
          })}
        </motion.div>
      </div>

      {/* Bottom Right Colophon */}
      <div className="fixed bottom-3 right-6 text-[11px] font-mono tracking-widest text-zinc-400 uppercase select-none pointer-events-none z-30 hidden sm:block">
        Last updated August 2026 <span className="tracking-tighter">୨୧</span>
      </div>
    </>
  );
};
