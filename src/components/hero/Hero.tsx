import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { GalaxyCard } from './GalaxyCard';
import { PixelAquarium } from './PixelAquarium';
import { BioTextCard } from './BioTextCard';
import { ChevronDown, Sparkles } from 'lucide-react';
import { sounds } from '../layout/SoundEffects';

interface HeroProps {
  onScrollToWorks?: () => void;
  onCopyToast?: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onScrollToWorks, onCopyToast }) => {
  const [greetingFlipped, setGreetingFlipped] = useState(false);
  const fullName = "I'm Manish.";
  const [typedName, setTypedName] = useState("I'm ");

  useEffect(() => {
    let timeoutId: number;
    let charIndex = 4;
    setTypedName("I'm ");

    const typeNext = () => {
      if (charIndex <= fullName.length) {
        setTypedName(fullName.slice(0, charIndex));
        charIndex++;
        const delay = charIndex <= 5 ? 80 : 150;
        timeoutId = window.setTimeout(typeNext, delay);
      }
    };

    timeoutId = window.setTimeout(typeNext, 350);
    return () => clearTimeout(timeoutId);
  }, []);

  const handleGreetingClick = () => {
    sounds.clap();
    setGreetingFlipped(!greetingFlipped);
  };

  return (
    <section className="relative min-h-[calc(100vh-140px)] flex flex-col items-center justify-center px-4 sm:px-6 select-none pb-20">
      <motion.div 
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.55, ease: [0.25, 0.46, 0.45, 0.94] }}
        className="w-full max-w-xl flex flex-col items-center"
      >
        
        {/* Top Header Row with Namaste on Left and I'm Manish on Right */}
        <div className="w-full flex items-baseline justify-between mb-3 sm:mb-4 px-1 sm:px-2 select-none">
          {/* Left Side: "Namaste," */}
          <div 
            onClick={handleGreetingClick}
            className="cursor-pointer group text-left transition-transform duration-200 hover:scale-[1.02]"
            title="Click to toggle Namaste greeting! ✨"
          >
            <div className="text-2xl sm:text-4xl md:text-5xl font-display-serif font-light tracking-tight text-zinc-900 leading-none">
              <span className="stipple-text italic">
                {greetingFlipped ? "Hello there," : "Namaste,"}
              </span>
            </div>
            <div className="flex items-center gap-1 text-[9px] sm:text-[10px] font-mono text-zinc-400 mt-1 sm:mt-1.5 opacity-0 group-hover:opacity-100 transition-opacity">
              <Sparkles className="w-2.5 h-2.5 text-amber-500" />
              <span>[nuh-muh-stay] • Hindi</span>
            </div>
          </div>

          {/* Right Side: "I'm Manish." with Typewriter Effect */}
          <div className="text-right flex flex-col items-end">
            <div className="text-2xl sm:text-4xl md:text-5xl font-display-serif font-normal tracking-tight text-zinc-900 leading-none min-h-[1.15em] flex items-center justify-end">
              <span className="stipple-text">
                {typedName}
              </span>
              {typedName.length < fullName.length && (
                <span className="inline-block w-1.5 h-[0.8em] bg-zinc-700 ml-1 animate-pulse align-middle"></span>
              )}
            </div>
            <div className="text-[9px] sm:text-[10px] font-mono text-zinc-400 mt-1 sm:mt-1.5 uppercase tracking-wider font-medium">
              English Student • Systems
            </div>
          </div>
        </div>

        {/* Hero Interactive Cards Section */}
        <div className="w-full space-y-2.5 sm:space-y-3.5">
          {/* Row with Galaxy Card and Pixel Aquarium */}
          <div className="w-full flex flex-row items-stretch gap-2.5 sm:gap-3.5">
            <div className="flex-1 min-w-0">
              <GalaxyCard />
            </div>
            <PixelAquarium />
          </div>

          {/* bio.txt Card */}
          <BioTextCard onCopyToast={onCopyToast} />
        </div>

        {/* Scroll indicator prompt */}
        {onScrollToWorks && (
          <button
            onClick={() => {
              sounds.click();
              onScrollToWorks();
            }}
            className="mt-10 flex flex-col items-center gap-1.5 text-zinc-400 hover:text-zinc-700 transition-all duration-200 group cursor-pointer"
          >
            <span className="text-[11px] font-mono tracking-widest uppercase text-zinc-400 group-hover:text-zinc-600">
              scroll for works
            </span>
            <ChevronDown className="w-4 h-4 text-zinc-400 animate-bounce group-hover:text-zinc-700" />
          </button>
        )}

      </motion.div>
    </section>
  );
};
