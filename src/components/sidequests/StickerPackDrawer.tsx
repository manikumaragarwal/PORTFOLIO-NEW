import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus } from 'lucide-react';
import { sounds } from '../layout/SoundEffects';
import { SidequestItem } from '../../types';

interface StickerPackDrawerProps {
  onSpawnSticker: (item: SidequestItem) => void;
}

export const StickerPackDrawer: React.FC<StickerPackDrawerProps> = ({ onSpawnSticker }) => {
  const [isOpen, setIsOpen] = useState(false);

  const extraStickers: Partial<SidequestItem>[] = [
    {
      title: 'Delhi Masala Chai Note',
      fileName: 'delhi_chai.txt',
      type: 'note',
      noteText: 'Adrak Masala Chai ☕\nCrushed ginger, green cardamom, and strong Assam tea. Fuel for late-night scripting & systems architecture.',
      bgColor: '#fffbeb',
      windowContent: {
        title: 'The Ritual of Cutting Chai',
        category: 'Daily Fuel & Focus',
        description: 'Why stepping away from the screen for a hot glass of spiced tea creates space for synthesis.',
        tags: ['Chai', 'Rituals', 'Delhi', 'Creative Energy']
      }
    },
    {
      title: 'Attention Retention Curve',
      fileName: 'retention_curve.png',
      type: 'sticker',
      image: '/images/cookies_illustration.svg',
      windowContent: {
        title: 'Mechanics of the First 3 Seconds',
        category: 'Attention Science',
        description: 'Analyzing audience drop-off vectors across visual, acoustic, and linguistic hook cues.',
        tags: ['Retention', 'Attention Mechanics', 'Hooks']
      }
    },
    {
      title: 'Claude Code CLI Tool',
      fileName: 'remotion_bot.sh',
      type: 'file',
      fileExt: 'sh',
      windowContent: {
        title: 'Claude Code Automated Video Renderer',
        category: 'Automation Infrastructure',
        description: 'CLI bash utility triggering headless Remotion subtitle compositions from raw audio transcripts.',
        tags: ['Claude Code', 'Remotion', 'CLI', 'Video Systems']
      }
    },
    {
      title: 'Obsidian Second Brain Link',
      fileName: 'creator_dna_vault.md',
      type: 'note',
      noteText: 'Obsidian Graph Snapshot 🧠\n200+ linked hook patterns, rhetoric frameworks, and storytelling cadences.',
      bgColor: '#f5f3ff',
      windowContent: {
        title: 'Bi-directional Content Architecture',
        category: 'Knowledge Graph',
        description: 'Cross-pollinating ideas from literature, psychology, and creator analytics into actionable content frameworks.',
        tags: ['Obsidian', 'Second Brain', 'Knowledge Systems']
      }
    }
  ];

  const handleSpawn = (sticker: Partial<SidequestItem>) => {
    sounds.stickerSnap();
    const newItem: SidequestItem = {
      id: `spawned-${Date.now()}-${Math.random().toString(36).substr(2, 4)}`,
      title: sticker.title || 'New Sticker',
      fileName: sticker.fileName || 'sticker.png',
      type: sticker.type || 'sticker',
      initialX: 280 + (Math.random() - 0.5) * 120,
      initialY: 180 + (Math.random() - 0.5) * 80,
      rotation: (Math.random() - 0.5) * 10,
      width: sticker.type === 'note' ? 240 : 130,
      bgColor: sticker.bgColor,
      noteText: sticker.noteText,
      image: sticker.image,
      windowContent: sticker.windowContent || {
        title: sticker.title || 'Sticker',
        category: 'Sidequest',
        description: 'A spawned sticker on your board.',
        tags: ['Custom']
      }
    };
    onSpawnSticker(newItem);
  };

  return (
    <div className="absolute top-6 left-6 z-30 flex items-center gap-2 select-none">
      {/* Top Left Yellow Star Badge Button */}
      <button
        onClick={() => {
          sounds.click();
          setIsOpen(!isOpen);
        }}
        className="group flex items-center gap-1.5 px-3.5 py-2 rounded-2xl bg-amber-200/95 hover:bg-amber-300 border border-amber-300 shadow-md text-amber-950 text-xs font-mono font-bold tracking-tight transition-all duration-200 hover:scale-105 active:scale-95 cursor-pointer sticker-shadow"
      >
        <span className="text-base">⭐</span>
        <span>my sticker pack</span>
        <Plus className={`w-3.5 h-3.5 ml-0.5 text-amber-800 transition-transform duration-200 ${isOpen ? 'rotate-45' : ''}`} />
      </button>

      {/* Rolling Horizontal Sticker Drawer */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scaleX: 0.2, x: -10 }}
            animate={{ opacity: 1, scaleX: 1, x: 0 }}
            exit={{ opacity: 0, scaleX: 0.2, x: -10 }}
            transition={{ type: 'spring', stiffness: 350, damping: 26 }}
            style={{ transformOrigin: 'left center' }}
            className="flex items-center gap-2 p-1.5 bg-white/95 backdrop-blur-md rounded-2xl border border-zinc-200 shadow-xl"
          >
            {extraStickers.map((s, idx) => (
              <motion.button
                key={idx}
                initial={{ scale: 0, opacity: 0, y: 8 }}
                animate={{ scale: 1, opacity: 1, y: 0 }}
                transition={{
                  type: 'spring',
                  stiffness: 400,
                  damping: 20,
                  delay: idx * 0.06
                }}
                whileHover={{ scale: 1.15 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => handleSpawn(s)}
                title={`Click to place ${s.title}`}
                className="w-10 h-10 rounded-xl bg-zinc-50 hover:bg-zinc-100 border border-zinc-200/80 flex items-center justify-center text-lg cursor-pointer shadow-2xs transition-colors"
              >
                {s.type === 'note' && <span>📝</span>}
                {s.type === '3d' && (s.image ? <img src={s.image} alt="" className="w-8 h-8 object-cover rounded-md pointer-events-none" /> : <span>🧊</span>)}
                {s.type === 'sticker' && <span>☕</span>}
              </motion.button>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};
