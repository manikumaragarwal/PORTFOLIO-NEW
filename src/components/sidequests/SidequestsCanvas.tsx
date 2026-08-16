import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { SidequestItem } from '../../types';
import { SIDEQUEST_ITEMS } from '../../data/sidequests';
import { DraggableSticker } from './DraggableSticker';
import { MacOSWindow } from './MacOSWindow';
import { StickerPackDrawer } from './StickerPackDrawer';
import { RotateCcw } from 'lucide-react';
import { sounds } from '../layout/SoundEffects';

export const SidequestsCanvas: React.FC = () => {
  const [boardKey, setBoardKey] = useState(0);
  const [items, setItems] = useState<SidequestItem[]>(SIDEQUEST_ITEMS);
  const [openWindows, setOpenWindows] = useState<{ item: SidequestItem; zIndex: number }[]>([]);
  const [topZIndex, setTopZIndex] = useState(100);
  const [hasMoved, setHasMoved] = useState(false);

  const handleOpenWindow = (item: SidequestItem) => {
    const exists = openWindows.find(w => w.item.id === item.id);
    const newZ = topZIndex + 1;
    setTopZIndex(newZ);

    if (exists) {
      // Bring to front
      setOpenWindows(prev =>
        prev.map(w => (w.item.id === item.id ? { ...w, zIndex: newZ } : w))
      );
    } else {
      setOpenWindows(prev => [...prev, { item, zIndex: newZ }]);
    }
  };

  const handleCloseWindow = (itemId: string) => {
    sounds.click();
    setOpenWindows(prev => prev.filter(w => w.item.id !== itemId));
  };

  const handleFocusWindow = (itemId: string) => {
    const newZ = topZIndex + 1;
    setTopZIndex(newZ);
    setOpenWindows(prev =>
      prev.map(w => (w.item.id === itemId ? { ...w, zIndex: newZ } : w))
    );
  };

  const handleSpawnSticker = (newItem: SidequestItem) => {
    setItems(prev => [...prev, newItem]);
    setHasMoved(true);
  };

  const handleItemMoved = () => {
    if (!hasMoved) {
      setHasMoved(true);
    }
  };

  const handleResetBoard = () => {
    sounds.click();
    setBoardKey(prev => prev + 1);
    setItems(SIDEQUEST_ITEMS);
    setOpenWindows([]);
    setHasMoved(false);
  };

  return (
    <section className="relative w-full min-h-[calc(100vh-140px)] overflow-hidden select-none pb-28">
      
      {/* Top Left: Sticker Pack Drawer */}
      <StickerPackDrawer onSpawnSticker={handleSpawnSticker} />

      {/* Top Right: Dynamic Hint & Reset Button */}
      <div className="absolute top-6 right-8 z-20 flex items-center min-h-[36px]">
        <AnimatePresence mode="wait">
          {!hasMoved ? (
            /* Subtle Blinking Hint */
            <motion.div
              key="drag-hint"
              initial={{ opacity: 0, x: 10 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 10 }}
              transition={{ duration: 0.25 }}
              className="flex items-center gap-1.5 text-xs text-zinc-400/90 font-display-serif italic select-none pointer-events-none animate-[pulse_2.8s_ease-in-out_infinite]"
            >
              <span>psst... try dragging things</span>
              <span className="text-zinc-400 font-mono not-italic text-[11px]">✦</span>
            </motion.div>
          ) : (
            /* Popping Reset Button with darker background & lighter text */
            <motion.button
              key="reset-button"
              initial={{ opacity: 0, scale: 0.85, y: -4 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.85, y: -4 }}
              transition={{ type: 'spring', stiffness: 450, damping: 26 }}
              onClick={handleResetBoard}
              title="Reset stickers and board layout"
              className="px-3.5 py-1.5 rounded-xl bg-zinc-900 hover:bg-zinc-800 text-zinc-100 border border-zinc-700/80 shadow-md transition-all duration-150 hover:scale-105 active:scale-95 cursor-pointer flex items-center gap-1.5 text-xs font-mono font-medium"
            >
              <RotateCcw className="w-3.5 h-3.5 text-zinc-300" />
              <span>Reset</span>
            </motion.button>
          )}
        </AnimatePresence>
      </div>

      {/* Interactive Draggable Stickers & Desktop File Items */}
      <div key={boardKey} className="relative w-full h-[940px] sm:h-[760px] max-w-7xl mx-auto">
        {items.map((item) => {
          const isMobile = typeof window !== 'undefined' && window.innerWidth < 640;
          
          let mobileX = item.initialX;
          let mobileY = item.initialY;
          let mobileWidth = item.width;

          if (isMobile) {
            const screenW = window.innerWidth;
            if (item.id === 'vibritt-scroll-stopper') {
              mobileX = Math.max(12, screenW * 0.05);
              mobileY = 35;
            } else if (item.id === 'dark-grimoiri-web') {
              mobileX = Math.max(115, screenW * 0.38);
              mobileY = 35;
            } else if (item.id === 'ptlss-college-app') {
              mobileX = Math.max(220, screenW * 0.70);
              mobileY = 35;
            } else if (item.id === 'postit-content-dna') {
              mobileX = 14;
              mobileY = 160;
              mobileWidth = Math.min(320, screenW - 28);
            } else if (item.id === 'postit-attention-note') {
              mobileX = 14;
              mobileY = 485;
              mobileWidth = Math.min(320, screenW - 28);
            } else if (item.id === 'tapioca-stickers') {
              mobileX = Math.max(20, (screenW - 140) / 2);
              mobileY = 790;
            }
          }

          const resolvedItem = isMobile ? {
            ...item,
            initialX: mobileX,
            initialY: mobileY,
            width: mobileWidth
          } : item;

          return (
            <DraggableSticker
              key={item.id}
              item={resolvedItem}
              onClick={() => handleOpenWindow(item)}
              onMove={handleItemMoved}
            />
          );
        })}

        {/* macOS Open Windows Stacking Layer */}
        <AnimatePresence>
          {openWindows.map((win, idx) => {
            const isMobile = typeof window !== 'undefined' && window.innerWidth < 640;
            const initX = isMobile ? Math.max(8, (window.innerWidth - 360) / 2) : 120 + (idx % 4) * 40;
            const initY = isMobile ? 40 + idx * 15 : 80 + (idx % 4) * 40;
            return (
              <MacOSWindow
                key={win.item.id}
                item={win.item}
                zIndex={win.zIndex}
                initialX={initX}
                initialY={initY}
                onClose={() => handleCloseWindow(win.item.id)}
                onFocus={() => handleFocusWindow(win.item.id)}
                onMove={handleItemMoved}
              />
            );
          })}
        </AnimatePresence>
      </div>

    </section>
  );
};
