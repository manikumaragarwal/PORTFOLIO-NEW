import React, { useState, useEffect } from 'react';
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
  const [isMobile, setIsMobile] = useState(false);

  // Detect mobile viewport
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

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

  const appItems = items.filter(item => item.type === 'app' || item.type === 'file' || item.type === '3d' || item.type === 'pdf');
  const noteItems = items.filter(item => item.type === 'note');
  const stickerItems = items.filter(item => item.type === 'sticker');

  return (
    <section className="relative w-full min-h-[calc(100vh-140px)] overflow-hidden select-none pb-28">
      
      {/* Top Bar: Sticker Pack Drawer & Reset Button */}
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 pt-4 pb-2 flex items-center justify-between relative z-30">
        <StickerPackDrawer onSpawnSticker={handleSpawnSticker} />

        {/* Top Right: Dynamic Hint or Reset Button */}
        <div className="flex items-center min-h-[36px]">
          <AnimatePresence mode="wait">
            {!hasMoved ? (
              <motion.div
                key="drag-hint"
                initial={{ opacity: 0, x: 10 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 10 }}
                transition={{ duration: 0.25 }}
                className="flex items-center gap-1.5 text-xs text-zinc-400 font-display-serif italic select-none pointer-events-none"
              >
                <span>{isMobile ? 'tap any item to explore' : 'psst... try dragging things'}</span>
                <span className="text-zinc-400 font-mono not-italic text-[11px]">✦</span>
              </motion.div>
            ) : (
              <motion.button
                key="reset-button"
                initial={{ opacity: 0, scale: 0.85, y: -4 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.85, y: -4 }}
                transition={{ type: 'spring', stiffness: 450, damping: 26 }}
                onClick={handleResetBoard}
                title="Reset stickers and board layout"
                className="px-3 py-1.5 rounded-xl bg-zinc-900 hover:bg-zinc-800 text-zinc-100 border border-zinc-700/80 shadow-md transition-all duration-150 hover:scale-105 active:scale-95 cursor-pointer flex items-center gap-1.5 text-xs font-mono font-medium"
              >
                <RotateCcw className="w-3.5 h-3.5 text-zinc-300" />
                <span>Reset</span>
              </motion.button>
            )}
          </AnimatePresence>
        </div>
      </div>

      {/* Main Content: Mobile Docked View vs Desktop Freeform Draggable Canvas */}
      {isMobile ? (
        /* Mobile Docked Layout */
        <div key={boardKey} className="w-full max-w-xl mx-auto px-4 py-4 space-y-6">
          
          {/* 1. Docked Web Apps & Tools Grid */}
          <div className="bg-white/90 backdrop-blur-md rounded-2xl border border-black/8 p-4 sm:p-5 shadow-xs space-y-3">
            <div className="flex items-center justify-between text-xs font-mono text-zinc-400 border-b border-black/5 pb-2">
              <span className="font-semibold text-zinc-700 uppercase tracking-wider">Docked Apps & Tools</span>
              <span className="text-[10px] text-zinc-400">{appItems.length} items</span>
            </div>

            <div className="grid grid-cols-3 gap-y-4 gap-x-2 pt-2">
              {appItems.map(item => (
                <div key={item.id} className="flex justify-center">
                  <DraggableSticker
                    item={item}
                    docked={true}
                    onClick={() => handleOpenWindow(item)}
                  />
                </div>
              ))}
            </div>
          </div>

          {/* 2. Docked Content DNA Memos & Beliefs */}
          <div className="space-y-3.5">
            <div className="flex items-center justify-between text-xs font-mono text-zinc-400 px-1">
              <span className="font-semibold text-zinc-700 uppercase tracking-wider">Content DNA & Notes</span>
              <span className="text-[10px] text-zinc-400">Tap to expand</span>
            </div>

            <div className="space-y-4">
              {noteItems.map(item => (
                <DraggableSticker
                  key={item.id}
                  item={item}
                  docked={true}
                  onClick={() => handleOpenWindow(item)}
                />
              ))}
            </div>
          </div>

          {/* 3. Spawned Stickers Tray */}
          {stickerItems.length > 0 && (
            <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
              {stickerItems.map(item => (
                <div key={item.id} className="w-24">
                  <DraggableSticker
                    item={item}
                    docked={true}
                    onClick={() => handleOpenWindow(item)}
                  />
                </div>
              ))}
            </div>
          )}
        </div>
      ) : (
        /* Desktop Freeform Draggable Canvas */
        <div key={boardKey} className="relative w-full h-[660px] max-w-6xl mx-auto px-6">
          {items.map((item) => (
            <DraggableSticker
              key={item.id}
              item={item}
              docked={false}
              onClick={() => handleOpenWindow(item)}
              onMove={handleItemMoved}
            />
          ))}
        </div>
      )}

      {/* macOS Open Windows Stacking Layer */}
      <AnimatePresence>
        {openWindows.map((win, idx) => {
          const initX = 120 + (idx % 4) * 40;
          const initY = 80 + (idx % 4) * 40;
          return (
            <MacOSWindow
              key={win.item.id}
              item={win.item}
              zIndex={win.zIndex}
              initialX={initX}
              initialY={initY}
              isMobile={isMobile}
              onClose={() => handleCloseWindow(win.item.id)}
              onFocus={() => handleFocusWindow(win.item.id)}
              onMove={handleItemMoved}
            />
          );
        })}
      </AnimatePresence>

    </section>
  );
};
