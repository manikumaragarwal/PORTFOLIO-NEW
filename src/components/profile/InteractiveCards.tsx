import React, { useState, useEffect } from 'react';
import { Wrench, Clock, Disc, Copy, Check, Sparkles, Heart } from 'lucide-react';
import { PROFILE_INFO } from '../../data/profile';
import { sounds } from '../layout/SoundEffects';
import { lofiPlayer } from '../../utils/lofiAudio';
import confetti from 'canvas-confetti';

interface InteractiveCardsProps {
  onCopyToast?: () => void;
}

export const InteractiveCards: React.FC<InteractiveCardsProps> = ({ onCopyToast }) => {
  const [isPlayingMusic, setIsPlayingMusic] = useState(false);
  const [copied, setCopied] = useState(false);
  const [liked, setLiked] = useState(false);

  // Stop music if navigating away
  useEffect(() => {
    return () => {
      lofiPlayer.stop();
    };
  }, []);

  const handleCopyEmail = () => {
    sounds.click();
    navigator.clipboard.writeText(PROFILE_INFO.email);
    setCopied(true);
    onCopyToast?.();
    setTimeout(() => setCopied(false), 2000);
  };

  const handleToggleMusic = () => {
    sounds.click();
    if (isPlayingMusic) {
      lofiPlayer.stop();
      setIsPlayingMusic(false);
    } else {
      const success = lofiPlayer.play();
      if (success) {
        setIsPlayingMusic(true);
      }
    }
  };

  const handleHeartClick = () => {
    sounds.clap();
    setLiked(!liked);
    confetti({
      particleCount: 25,
      spread: 60,
      origin: { y: 0.7 }
    });
  };

  return (
    <div className="space-y-3.5 select-text font-sans">
      
      {/* 1. Exploring Card with Letter Wave Effect */}
      <div className="p-4 rounded-xl bg-white border border-zinc-200/80 shadow-2xs hover:shadow-xs transition-all duration-200 flex flex-col space-y-1.5">
        <div className="flex items-center gap-2 text-[10px] font-mono uppercase tracking-widest text-zinc-400 font-semibold">
          <Wrench className="w-3.5 h-3.5 text-blue-500" />
          <span>Exploring</span>
        </div>
        <div className="text-xs sm:text-sm text-zinc-700 font-normal leading-relaxed">
          <span>Prompt engineering, Remotion pipelines, and </span>
          <span className="inline-block cursor-default select-none font-medium text-zinc-900">
            {"creator skill files!".split("").map((char, i) => (
              <span key={i} className="fact-wave-letter">{char === ' ' ? '\u00A0' : char}</span>
            ))}
          </span>
        </div>
      </div>

      {/* 2. After Hours Card with Letter Wave Effect */}
      <div className="p-4 rounded-xl bg-white border border-zinc-200/80 shadow-2xs hover:shadow-xs transition-all duration-200 flex flex-col space-y-1.5">
        <div className="flex items-center gap-2 text-[10px] font-mono uppercase tracking-widest text-zinc-400 font-semibold">
          <Clock className="w-3.5 h-3.5 text-rose-500" />
          <span>After Hours</span>
        </div>
        <div className="text-xs sm:text-sm text-zinc-700 font-normal leading-relaxed">
          <span>Reading literature, analyzing hook curves, and </span>
          <span className="inline-block cursor-default select-none font-medium text-zinc-900">
            {"brewing ginger chai.".split("").map((char, i) => (
              <span key={i} className="fact-wave-letter">{char === ' ' ? '\u00A0' : char}</span>
            ))}
          </span>
        </div>
      </div>

      {/* 3. Live Spotify Mini Player Widget */}
      <div className="p-3.5 rounded-xl bg-gradient-to-r from-zinc-900 to-zinc-950 text-white shadow-sm flex items-center justify-between gap-3">
        <div className="flex items-center gap-3 min-w-0">
          {/* Vinyl Spinning Disc */}
          <div
            onClick={handleToggleMusic}
            className={`w-9 h-9 rounded-full bg-zinc-800 border-2 border-zinc-700 flex items-center justify-center cursor-pointer flex-shrink-0 transition-transform ${
              isPlayingMusic ? 'animate-spin-slow' : ''
            }`}
            title="Click to toggle music preview"
          >
            <Disc className="w-5 h-5 text-emerald-400" />
          </div>

          <div className="min-w-0">
            <div className="text-[10px] font-mono text-emerald-400 uppercase tracking-wider flex items-center gap-1">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
              Now Playing
            </div>
            <div className="text-xs font-semibold text-zinc-100 truncate">
              {PROFILE_INFO.nowPlaying.song}
            </div>
            <div className="text-[10px] text-zinc-400 truncate">
              {PROFILE_INFO.nowPlaying.artist}
            </div>
          </div>
        </div>

        <button
          onClick={handleToggleMusic}
          className="px-2.5 py-1 rounded-md bg-zinc-800 hover:bg-zinc-700 text-[10px] font-mono text-zinc-300 transition cursor-pointer flex-shrink-0"
        >
          {isPlayingMusic ? 'Pause' : 'Play'}
        </button>
      </div>

      {/* 4. Creative Tool Shelf */}
      <div className="p-4 rounded-xl bg-white/95 border border-zinc-200/80 shadow-2xs space-y-2">
        <div className="text-[10px] font-mono uppercase tracking-widest text-zinc-500 font-semibold flex items-center justify-between">
          <span>Creative Toolbox</span>
          <Sparkles className="w-3 h-3 text-amber-500" />
        </div>
        <div className="flex flex-wrap gap-1.5 pt-1">
          {PROFILE_INFO.tools.map((t, idx) => (
            <div
              key={idx}
              className="px-2.5 py-1 rounded-md bg-zinc-50 hover:bg-zinc-100 border border-zinc-200/70 text-[11px] font-mono text-zinc-700 transition"
            >
              {t.name}
            </div>
          ))}
        </div>
      </div>

      {/* 5. Contact & Connect Card */}
      <div className="p-4 rounded-xl bg-blue-50/60 border border-blue-200/70 flex items-center justify-between gap-3">
        <div>
          <div className="text-xs font-semibold text-blue-950">Have an interesting problem? Let's talk.</div>
          <div className="text-[11px] font-mono text-blue-700/80">{PROFILE_INFO.email}</div>
        </div>

        <div className="flex items-center gap-1.5">
          <button
            onClick={handleHeartClick}
            className={`p-2 rounded-lg transition-colors cursor-pointer ${
              liked ? 'bg-rose-100 text-rose-600' : 'bg-white/80 hover:bg-white text-zinc-600'
            }`}
            title="Leave a heart!"
          >
            <Heart className="w-4 h-4 fill-current" />
          </button>

          <button
            onClick={handleCopyEmail}
            className="px-3 py-2 rounded-lg bg-blue-600 hover:bg-blue-700 text-white text-xs font-mono font-medium shadow-xs transition flex items-center gap-1.5 cursor-pointer active:scale-95"
          >
            {copied ? <Check className="w-3.5 h-3.5" /> : <Copy className="w-3.5 h-3.5" />}
            <span>{copied ? 'Copied!' : 'Copy Email'}</span>
          </button>
        </div>
      </div>

    </div>
  );
};
