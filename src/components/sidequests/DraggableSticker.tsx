import React from 'react';
import { motion } from 'framer-motion';
import { SidequestItem } from '../../types';
import { Cloud, Sparkles, FileText, Globe, Terminal, FileCode, ExternalLink } from 'lucide-react';
import { sounds } from '../layout/SoundEffects';

interface DraggableStickerProps {
  item: SidequestItem;
  onClick: () => void;
  onMove?: () => void;
}

export const DraggableSticker: React.FC<DraggableStickerProps> = ({ item, onClick, onMove }) => {
  return (
    <motion.div
      drag
      dragMomentum={true}
      dragElastic={0.12}
      dragTransition={{ bounceStiffness: 300, bounceDamping: 20 }}
      whileHover={{ scale: 1.04 }}
      whileDrag={{ scale: 1.08, rotate: (item.rotation || 0) + 4, zIndex: 60 }}
      onDragStart={() => {
        sounds.click();
        onMove?.();
      }}
      onDragEnd={() => sounds.stickerSnap()}
      onClick={(e) => {
        e.stopPropagation();
        sounds.windowOpen();
        onClick();
      }}
      initial={{ 
        x: item.initialX, 
        y: item.initialY, 
        rotate: item.rotation || 0,
        opacity: 0,
        scale: 0.85
      }}
      animate={{ 
        opacity: 1, 
        scale: 1,
        rotate: item.rotation || 0 
      }}
      transition={{ type: 'spring', stiffness: 350, damping: 25 }}
      style={{
        position: 'absolute',
        width: item.width ? `${item.width}px` : undefined,
        cursor: 'grab'
      }}
      data-sticker-item="true"
      className="select-none z-20 active:cursor-grabbing"
    >
      {/* 1. Post-it Note Type */}
      {item.type === 'note' && (
        <div
          style={{ backgroundColor: item.bgColor || '#fffce5' }}
          className="p-5 sm:p-6 rounded-sm shadow-md border border-amber-200/50 sticker-shadow flex flex-col justify-between"
        >
          {/* Post-it tape header effect */}
          <div className="absolute -top-2 left-1/2 -translate-x-1/2 w-16 h-3.5 bg-amber-200/60 backdrop-blur-xs border border-amber-300/40 rounded-xs shadow-2xs"></div>

          <div className="text-[13px] sm:text-[13.5px] leading-relaxed text-zinc-800 font-sans whitespace-pre-line">
            {item.noteText}
          </div>

          <div className="mt-3 pt-2 border-t border-black/5 flex justify-between items-center text-[10px] font-mono text-zinc-500">
            <span>tap to open</span>
            <span>✦</span>
          </div>
        </div>
      )}

      {/* 2. Vector Illustration Type */}
      {item.type === 'sticker' && (
        <div className="bg-transparent p-2 rounded-xl sticker-shadow relative group">
          <div className="w-full h-full flex items-center justify-center">
            <img
              src={item.image || '/images/cookies_illustration.svg'}
              alt={item.title}
              className="w-full h-auto object-contain pointer-events-none drop-shadow-md"
            />
          </div>
        </div>
      )}

      {/* 3. Web App / URL Icon Type */}
      {item.type === 'app' && (
        <div className="flex flex-col items-center group cursor-pointer">
          <div className="w-14 h-14 rounded-2xl bg-gradient-to-b from-zinc-800 via-zinc-900 to-black p-2.5 shadow-lg border border-white/20 flex items-center justify-center text-white sticker-shadow group-hover:scale-105 transition-transform duration-150 relative">
            {item.fileName.endsWith('.url') ? (
              <div className="w-8 h-8 rounded-full bg-blue-500/20 border border-blue-400/40 flex items-center justify-center text-blue-300">
                <Globe className="w-4 h-4" />
              </div>
            ) : item.icon === 'cloud' ? (
              <Cloud className="w-7 h-7 text-sky-300 drop-shadow" />
            ) : (
              <div className="w-8 h-8 rounded-full bg-amber-400/90 flex items-center justify-center shadow-inner text-zinc-900">
                <ExternalLink className="w-4 h-4" />
              </div>
            )}

            {item.liveUrl && (
              <div className="absolute -top-1 -right-1 px-1.5 py-0.2 rounded-full bg-emerald-500 text-[8px] font-mono font-bold text-white shadow-xs">
                LIVE
              </div>
            )}
          </div>

          <span className="mt-1.5 px-2 py-0.5 rounded-md bg-white/85 backdrop-blur-xs text-[11px] font-mono text-zinc-800 font-medium shadow-2xs group-hover:bg-white group-hover:text-blue-600 transition-colors border border-black/5">
            {item.fileName}
          </span>
        </div>
      )}

      {/* 4. Desktop File / Shell Script / Project Folder Type */}
      {(item.type === 'file' || item.type === '3d' || item.type === 'pdf') && (
        <div className="flex flex-col items-center group cursor-pointer">
          <div className="w-14 h-14 rounded-xl bg-white p-2 shadow-md border border-black/10 flex items-center justify-center sticker-shadow group-hover:scale-105 transition-transform duration-150 overflow-hidden relative">
            {item.fileName.endsWith('.sh') ? (
              <div className="w-9 h-9 rounded-lg bg-zinc-900 flex items-center justify-center text-emerald-400">
                <Terminal className="w-5 h-5" />
              </div>
            ) : item.fileName.endsWith('.tsx') || item.fileName.endsWith('.js') || item.fileName.endsWith('.py') ? (
              <div className="w-9 h-9 rounded-lg bg-blue-50 border border-blue-200 flex items-center justify-center text-blue-600">
                <FileCode className="w-5 h-5" />
              </div>
            ) : item.image ? (
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-full object-cover rounded-lg pointer-events-none"
              />
            ) : (
              <FileText className="w-7 h-7 text-zinc-500" />
            )}

            <div className="absolute inset-0 bg-black/10 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
              <Sparkles className="w-4 h-4 text-white drop-shadow" />
            </div>
          </div>

          <span className="mt-1.5 px-2 py-0.5 rounded-md bg-white/85 backdrop-blur-xs text-[11px] font-mono text-zinc-800 font-medium shadow-2xs group-hover:bg-white group-hover:text-blue-600 transition-colors border border-black/5">
            {item.fileName}
          </span>
        </div>
      )}
    </motion.div>
  );
};
