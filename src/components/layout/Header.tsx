import React, { useState } from 'react';
import { Mail, FileText, Volume2, VolumeX } from 'lucide-react';
import { ResumeModal } from './ResumeModal';
import { sounds, toggleSound, isSoundEnabled } from './SoundEffects';

interface HeaderProps {
  onNavigateHome?: () => void;
  onCopyEmailToast?: () => void;
}

export const Header: React.FC<HeaderProps> = ({ onNavigateHome, onCopyEmailToast }) => {
  const [isResumeOpen, setIsResumeOpen] = useState(false);
  const [soundOn, setSoundOn] = useState(isSoundEnabled());
  const [hoveredHint, setHoveredHint] = useState<string | null>(null);

  const handleSoundToggle = () => {
    const newState = toggleSound();
    setSoundOn(newState);
    if (newState) sounds.click();
  };

  const handleCopyEmail = (e: React.MouseEvent) => {
    e.preventDefault();
    sounds.click();
    navigator.clipboard.writeText('manishpshyco1969@gmail.com');
    onCopyEmailToast?.();
  };

  return (
    <>
      <header className="w-full px-4 sm:px-8 md:px-12 lg:px-16 py-4 sm:py-6 md:py-7 flex items-center justify-between select-none relative z-40">
        {/* Left: Monogram Logo & Name */}
        <button
          onClick={() => {
            sounds.click();
            onNavigateHome?.();
          }}
          className="flex items-center gap-2.5 sm:gap-3.5 text-left group focus:outline-none cursor-pointer"
        >
          {/* Custom Geometric Knot Emblem SVG */}
          <div className="w-9 h-9 sm:w-11 sm:h-11 rounded-xl bg-white/90 border border-zinc-200 shadow-xs flex items-center justify-center text-zinc-800 transition-all duration-200 group-hover:scale-105 group-hover:border-zinc-400 group-hover:shadow-md flex-shrink-0">
            <svg className="w-5 h-5 sm:w-6 sm:h-6 transition-transform duration-300 group-hover:rotate-45" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
              <rect x="3" y="3" width="18" height="18" rx="4" />
              <path d="M7 12h10M12 7v10" />
              <circle cx="12" cy="12" r="3" />
              <path d="M7 7l10 10M17 7L7 17" opacity="0.4" />
            </svg>
          </div>

          <div>
            <div className="text-base sm:text-lg md:text-xl font-bold tracking-tight text-zinc-900 leading-tight group-hover:text-blue-600 transition-colors">
              Manish Agarwal
            </div>
            <div className="text-[10px] sm:text-xs font-mono tracking-widest uppercase text-zinc-500 font-semibold leading-tight mt-0.5">
              Content Systems & AI
            </div>
          </div>
        </button>

        {/* Right: Social & Utility Links with Dynamic Nav Hint */}
        <div className="flex items-center gap-1.5 sm:gap-2.5 md:gap-3">
          {/* Dynamic Nav Hint Text */}
          <span 
            className={`hidden sm:inline-block font-mono text-xs sm:text-sm uppercase tracking-wider text-zinc-400 font-medium transition-all duration-200 pointer-events-none mr-2 ${
              hoveredHint ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-1'
            }`}
          >
            {hoveredHint}
          </span>

          {/* Sound Toggle */}
          <button
            onClick={handleSoundToggle}
            onMouseEnter={() => setHoveredHint(soundOn ? "mute audio" : "unmute audio")}
            onMouseLeave={() => setHoveredHint(null)}
            title={soundOn ? "Mute interactive audio" : "Enable interactive audio"}
            className="w-9 h-9 sm:w-10 sm:h-10 rounded-full flex items-center justify-center text-zinc-600 hover:text-zinc-950 hover:bg-zinc-200/70 transition-all cursor-pointer hover:scale-105"
          >
            {soundOn ? <Volume2 className="w-4 h-4 sm:w-5 sm:h-5" /> : <VolumeX className="w-4 h-4 sm:w-5 sm:h-5 text-zinc-400" />}
          </button>

          {/* GitHub */}
          <a
            href="https://github.com/manikumaragarwal"
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => sounds.click()}
            onMouseEnter={() => setHoveredHint("my github")}
            onMouseLeave={() => setHoveredHint(null)}
            title="GitHub Profile (manikumaragarwal)"
            className="w-9 h-9 sm:w-10 sm:h-10 rounded-full flex items-center justify-center text-zinc-600 hover:text-zinc-950 hover:bg-zinc-200/70 transition-all hover:scale-105"
          >
            <svg className="w-4 h-4 sm:w-5 sm:h-5 fill-current" viewBox="0 0 24 24">
              <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
            </svg>
          </a>

          {/* Email */}
          <a
            href="mailto:manishpshyco1969@gmail.com"
            onClick={handleCopyEmail}
            onMouseEnter={() => setHoveredHint("say hello")}
            onMouseLeave={() => setHoveredHint(null)}
            title="Email: manishpshyco1969@gmail.com (click to email/copy)"
            className="w-9 h-9 sm:w-10 sm:h-10 rounded-full flex items-center justify-center text-zinc-600 hover:text-rose-500 hover:bg-zinc-200/70 transition-all cursor-pointer hover:scale-105"
          >
            <Mail className="w-4 h-4 sm:w-5 sm:h-5" />
          </a>

          {/* Resume */}
          <button
            onClick={() => {
              sounds.windowOpen();
              setIsResumeOpen(true);
            }}
            onMouseEnter={() => setHoveredHint("my resume")}
            onMouseLeave={() => setHoveredHint(null)}
            title="View Resume"
            className="w-9 h-9 sm:w-10 sm:h-10 rounded-full flex items-center justify-center text-zinc-600 hover:text-emerald-600 hover:bg-zinc-200/70 transition-all cursor-pointer hover:scale-105"
          >
            <FileText className="w-4 h-4 sm:w-5 sm:h-5" />
          </button>
        </div>
      </header>

      {/* Resume Modal */}
      <ResumeModal isOpen={isResumeOpen} onClose={() => setIsResumeOpen(false)} />
    </>
  );
};
