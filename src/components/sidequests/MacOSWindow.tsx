import React, { useState, useEffect, useRef } from 'react';
import { motion, useDragControls } from 'framer-motion';
import { SidequestItem } from '../../types';
import { TrafficLights } from '../common/TrafficLights';
import { Play, Pause, Volume2, CheckCircle2, Circle, Sparkles, ExternalLink } from 'lucide-react';
import confetti from 'canvas-confetti';
import { sounds } from '../layout/SoundEffects';
import { getAssetUrl } from '../../utils/assets';

interface MacOSWindowProps {
  item: SidequestItem;
  onClose: () => void;
  onFocus: () => void;
  onMove?: () => void;
  zIndex: number;
  initialX?: number;
  initialY?: number;
  isMobile?: boolean;
}

export const MacOSWindow: React.FC<MacOSWindowProps> = ({
  item,
  onClose,
  onFocus,
  onMove,
  zIndex,
  initialX = 160,
  initialY = 120,
  isMobile = false
}) => {
  const windowRef = useRef<HTMLDivElement>(null);
  const dragControls = useDragControls();
  const [isPlayingAudio, setIsPlayingAudio] = useState(false);
  const [checklistItems, setChecklistItems] = useState(
    item.windowContent.previewMedia?.items || []
  );
  const [lampBrightness, setLampBrightness] = useState(85);
  const [lampWarmth, setLampWarmth] = useState(2700);

  // Sync checklist when item changes
  useEffect(() => {
    setChecklistItems(item.windowContent.previewMedia?.items || []);
  }, [item.id]);

  // Audio simulator loop
  useEffect(() => {
    let interval: number;
    if (isPlayingAudio) {
      interval = window.setInterval(() => {
        sounds.bubble();
      }, 1200);
    }
    return () => clearInterval(interval);
  }, [isPlayingAudio]);

  // Close window when clicking outside
  useEffect(() => {
    const handleOutsideClick = (e: MouseEvent | TouchEvent) => {
      if (windowRef.current && !windowRef.current.contains(e.target as Node)) {
        const target = e.target as HTMLElement;
        // Don't close if clicking another sticker to open it
        if (!target.closest('[data-sticker-item]')) {
          onClose();
        }
      }
    };

    const timer = window.setTimeout(() => {
      document.addEventListener('mousedown', handleOutsideClick);
      document.addEventListener('touchstart', handleOutsideClick);
    }, 120);

    return () => {
      clearTimeout(timer);
      document.removeEventListener('mousedown', handleOutsideClick);
      document.removeEventListener('touchstart', handleOutsideClick);
    };
  }, [onClose]);

  const toggleChecklistItem = (index: number) => {
    sounds.click();
    setChecklistItems(prev => {
      const updated = [...prev];
      updated[index] = { ...updated[index], done: !updated[index].done };
      if (updated[index].done) {
        sounds.clap();
        confetti({
          particleCount: 30,
          spread: 50,
          origin: { y: 0.6 }
        });
      }
      return updated;
    });
  };

  return (
    <>
      {isMobile && (
        <div
          onClick={() => {
            sounds.click();
            onClose();
          }}
          className="fixed inset-0 bg-black/40 backdrop-blur-xs z-40 transition-opacity"
        />
      )}
      <motion.div
        ref={windowRef}
        drag={!isMobile}
        dragControls={isMobile ? undefined : dragControls}
        dragListener={false}
        dragMomentum={false}
        dragElastic={0.05}
        initial={isMobile ? { scale: 0.94, opacity: 0, y: 20 } : { x: initialX, y: initialY, scale: 0.92, opacity: 0 }}
        animate={isMobile ? { scale: 1, opacity: 1, y: 0 } : { scale: 1, opacity: 1 }}
        exit={isMobile ? { scale: 0.94, opacity: 0, y: 20 } : { scale: 0.92, opacity: 0 }}
        transition={{ type: 'spring', stiffness: 380, damping: 26 }}
        onPointerDown={onFocus}
        onDragStart={() => {
          if (!isMobile) {
            sounds.click();
            onFocus();
            onMove?.();
          }
        }}
        onDragEnd={() => !isMobile && sounds.stickerSnap()}
        style={isMobile ? {
          zIndex: Math.max(zIndex, 50),
          position: 'fixed',
          top: '12%',
          left: '4%',
          right: '4%',
          margin: '0 auto',
          maxHeight: '80vh'
        } : {
          zIndex,
          position: 'absolute',
          top: 0,
          left: 0
        }}
        className={`w-[92vw] sm:w-[480px] md:w-[540px] max-w-[540px] mac-window bg-white shadow-2xl flex flex-col select-none ${
          isMobile ? 'rounded-2xl border border-black/15' : ''
        }`}
      >
        {/* Window Header - Draggable handle on desktop, static on mobile */}
        <div
          onPointerDown={(e) => {
            if (isMobile) return;
            if ((e.target as HTMLElement).closest('button')) return;
            dragControls.start(e);
            onFocus();
          }}
          className={`mac-window-header px-4 py-2.5 flex items-center justify-between border-b border-black/10 select-none ${
            isMobile ? 'cursor-default' : 'cursor-grab active:cursor-grabbing'
          }`}
        >
          <TrafficLights onClose={onClose} />
          
          {/* Title */}
          <div className="text-xs font-mono font-medium text-zinc-600 truncate max-w-[240px] flex items-center gap-1.5 pointer-events-none">
            <span className="text-zinc-400">❖</span>
            <span>{item.fileName}</span>
          </div>

          <div className="w-12 pointer-events-none"></div>
        </div>

      {/* Window Content */}
      <div className="p-5 sm:p-6 overflow-y-auto max-h-[70vh] space-y-5 text-zinc-800 text-sm cursor-auto">
        
        {/* Header Title & Category */}
        <div>
          <div className="text-[10px] font-mono uppercase tracking-widest text-zinc-400 font-semibold mb-1">
            {item.windowContent.category}
          </div>
          <h3 className="text-xl sm:text-2xl font-display-serif text-zinc-900 font-medium">
            {item.windowContent.title}
          </h3>
          <p className="text-xs sm:text-sm text-zinc-600 mt-2 leading-relaxed">
            {item.windowContent.description}
          </p>
        </div>

        {/* Dynamic Media / Preview based on type */}

        {/* 1. Recipe / Tapioca Cookies view */}
        {item.windowContent.previewMedia?.type === 'recipe' && item.windowContent.previewMedia.recipeData && (
          <div className="bg-amber-50/70 p-4 rounded-xl border border-amber-200/70 space-y-3 font-sans text-xs">
            <div className="flex items-center justify-between border-b border-amber-200 pb-2 text-amber-900 font-mono">
              <span>⏱️ Prep: {item.windowContent.previewMedia.recipeData.prepTime}</span>
              <span>🍪 Yield: {item.windowContent.previewMedia.recipeData.servings}</span>
            </div>

            <div>
              <div className="font-semibold text-amber-950 mb-1 font-mono uppercase tracking-wider text-[10px]">
                Ingredients:
              </div>
              <ul className="list-disc list-inside space-y-0.5 text-amber-900">
                {item.windowContent.previewMedia.recipeData.ingredients.map((ing, i) => (
                  <li key={i}>{ing}</li>
                ))}
              </ul>
            </div>

            <div>
              <div className="font-semibold text-amber-950 mb-1 font-mono uppercase tracking-wider text-[10px]">
                Method:
              </div>
              <ol className="list-decimal list-inside space-y-1 text-amber-900">
                {item.windowContent.previewMedia.recipeData.instructions.map((step, i) => (
                  <li key={i} className="leading-relaxed">{step}</li>
                ))}
              </ol>
            </div>
          </div>
        )}

        {/* 2. Interactive 3D Lamp Lighting Controls */}
        {item.windowContent.previewMedia?.type === 'interactive-3d' && (
          <div className="space-y-4">
            <div className="w-full aspect-[16/10] rounded-xl overflow-hidden bg-zinc-900 relative shadow-inner flex items-center justify-center p-3">
              <img
                src={getAssetUrl(item.windowContent.previewMedia.src || '/images/lamp_3d.png')}
                alt="3D Lamp"
                style={{
                  filter: `brightness(${0.4 + (lampBrightness / 100) * 0.8}) drop-shadow(0 0 ${lampBrightness / 5}px rgba(251, 191, 36, ${lampBrightness / 100}))`
                }}
                className="w-full h-full object-cover rounded-lg transition-all duration-200"
              />

              <div className="absolute top-3 right-3 px-2 py-1 rounded-md bg-black/60 backdrop-blur-md text-amber-300 font-mono text-[10px] flex items-center gap-1">
                <Sparkles className="w-3 h-3 text-amber-400" />
                <span>{lampWarmth}K • {lampBrightness}%</span>
              </div>
            </div>

            {/* Interactive Lamp Slider Controls */}
            <div className="p-3 bg-zinc-50 rounded-xl border border-zinc-200/80 space-y-3 text-xs font-mono">
              <div className="flex items-center justify-between">
                <span className="text-zinc-600">Brightness: {lampBrightness}%</span>
                <input
                  type="range"
                  min="10"
                  max="100"
                  value={lampBrightness}
                  onChange={(e) => setLampBrightness(Number(e.target.value))}
                  className="w-36 accent-amber-500 cursor-pointer"
                />
              </div>

              <div className="flex items-center justify-between">
                <span className="text-zinc-600">Color Temperature: {lampWarmth}K</span>
                <input
                  type="range"
                  min="2000"
                  max="4000"
                  step="100"
                  value={lampWarmth}
                  onChange={(e) => setLampWarmth(Number(e.target.value))}
                  className="w-36 accent-amber-500 cursor-pointer"
                />
              </div>
            </div>
          </div>
        )}

        {/* 3. Audio / Nimbus Soundscape player */}
        {item.windowContent.previewMedia?.type === 'audio' && (
          <div className="p-4 rounded-xl bg-gradient-to-br from-slate-900 to-indigo-950 text-white space-y-3 shadow-md">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <button
                  onClick={() => {
                    sounds.click();
                    setIsPlayingAudio(!isPlayingAudio);
                  }}
                  className="w-10 h-10 rounded-full bg-blue-500 hover:bg-blue-400 flex items-center justify-center shadow-lg transition-transform hover:scale-105 active:scale-95 cursor-pointer text-white"
                >
                  {isPlayingAudio ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4 ml-0.5" />}
                </button>
                <div>
                  <div className="font-semibold text-sm">Seattle Rainy Windowpane</div>
                  <div className="text-[11px] font-mono text-sky-300/80">Generative Ambient Soundscape</div>
                </div>
              </div>

              <Volume2 className={`w-5 h-5 text-sky-400 ${isPlayingAudio ? 'animate-pulse' : 'opacity-40'}`} />
            </div>

            {/* Audio Wave Visualizer Simulation */}
            <div className="flex items-end gap-1 h-8 pt-2">
              {Array.from({ length: 28 }).map((_, i) => (
                <div
                  key={i}
                  style={{
                    height: isPlayingAudio ? `${Math.max(15, Math.sin(i + Date.now() * 0.01) * 80 + 20)}%` : '15%'
                  }}
                  className="flex-1 bg-sky-400/80 rounded-full transition-all duration-150"
                ></div>
              ))}
            </div>
          </div>
        )}

        {/* 4. Interactive Bucket List Checklist */}
        {item.windowContent.previewMedia?.type === 'checklist' && (
          <div className="space-y-2 bg-zinc-50 p-4 rounded-xl border border-zinc-200/80">
            <div className="text-[10px] font-mono text-zinc-500 uppercase tracking-wider mb-2 font-semibold">
              Click items to toggle completion ✨
            </div>
            {checklistItems.map((c, i) => (
              <button
                key={i}
                type="button"
                onClick={() => toggleChecklistItem(i)}
                className={`w-full text-left p-2.5 rounded-lg border text-xs flex items-center gap-2.5 transition-all cursor-pointer ${
                  c.done
                    ? 'bg-emerald-50/80 border-emerald-200 text-emerald-900 font-medium line-through'
                    : 'bg-white border-zinc-200 text-zinc-700 hover:border-zinc-300'
                }`}
              >
                {c.done ? (
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                ) : (
                  <Circle className="w-4 h-4 text-zinc-400 flex-shrink-0" />
                )}
                <span>{c.text}</span>
              </button>
            ))}
          </div>
        )}

        {/* 5. General image / screen recording preview */}
        {item.windowContent.previewMedia?.type === 'image' && item.windowContent.previewMedia.src && (
          <div className="w-full rounded-xl overflow-hidden bg-zinc-900 border border-zinc-200 shadow-sm flex flex-col">
            {/* Mini Browser Top Bar */}
            <div className="px-3 py-1.5 bg-zinc-100 border-b border-zinc-200 flex items-center justify-between">
              <div className="flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-red-400"></span>
                <span className="w-2 h-2 rounded-full bg-amber-400"></span>
                <span className="w-2 h-2 rounded-full bg-emerald-400"></span>
              </div>
              <div className="text-[10px] font-mono text-zinc-500 truncate max-w-[240px]">
                {item.liveUrl ? item.liveUrl.replace(/^https?:\/\//, '') : item.fileName}
              </div>
              <div className="w-6"></div>
            </div>
            {/* Live Animated Screen Recording */}
            <div className="w-full aspect-[16/10] bg-zinc-950 overflow-hidden">
              {item.windowContent.previewMedia.src.endsWith('.mp4') ? (
                <video
                  src={getAssetUrl(item.windowContent.previewMedia.src)}
                  poster={getAssetUrl(item.windowContent.previewMedia.src.replace('.mp4', '_poster.jpg'))}
                  autoPlay
                  muted
                  loop
                  playsInline
                  className="w-full h-full object-cover object-top"
                />
              ) : (
                <img
                  src={getAssetUrl(item.windowContent.previewMedia.src)}
                  alt={item.windowContent.previewMedia.alt || item.title}
                  className="w-full h-full object-cover object-top"
                />
              )}
            </div>
          </div>
        )}

        {/* Full Story Narrative if provided */}
        {item.windowContent.fullStory && (
          <div className="pt-2 border-t border-zinc-100 text-xs text-zinc-600 leading-relaxed italic">
            "{item.windowContent.fullStory}"
          </div>
        )}

        {/* Action Links: Live Preview & GitHub Repo */}
        {(item.liveUrl || item.githubUrl) && (
          <div className="flex flex-wrap items-center gap-2.5 pt-3 border-t border-zinc-100">
            {item.liveUrl && (
              <a
                href={item.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => sounds.click()}
                className="px-3.5 py-1.5 rounded-lg bg-zinc-900 hover:bg-zinc-800 text-white text-xs font-mono font-medium flex items-center gap-1.5 shadow-sm transition-all duration-150 hover:scale-105"
              >
                <ExternalLink className="w-3.5 h-3.5" />
                <span>Live Preview</span>
              </a>
            )}
            {item.githubUrl && (
              <a
                href={item.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => sounds.click()}
                className="px-3.5 py-1.5 rounded-lg bg-zinc-100 hover:bg-zinc-200 text-zinc-800 text-xs font-mono font-medium flex items-center gap-1.5 border border-zinc-200 shadow-2xs transition-all duration-150 hover:scale-105"
              >
                <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                  <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
                </svg>
                <span>GitHub Repo</span>
              </a>
            )}
          </div>
        )}

        {/* Tags */}
        <div className="flex flex-wrap gap-1.5 pt-2 border-t border-zinc-100">
          {item.windowContent.tags.map((t, idx) => (
            <span
              key={idx}
              className="px-2 py-0.5 rounded-md bg-zinc-100 text-zinc-600 text-[10px] font-mono"
            >
              #{t}
            </span>
          ))}
        </div>

      </div>

      {/* Window Footer */}
      <div className="px-5 py-2.5 bg-zinc-50 border-t border-zinc-100 flex justify-between items-center text-[10px] font-mono text-zinc-400">
        <span>{isMobile ? 'Tap close or outside to dismiss' : 'macOS Preview • Click header to drag'}</span>
        <button
          onClick={onClose}
          className="hover:text-zinc-800 transition cursor-pointer"
        >
          Close
        </button>
      </div>
    </motion.div>
    </>
  );
};
