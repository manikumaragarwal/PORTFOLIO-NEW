import React, { useState } from 'react';
import { sounds } from '../layout/SoundEffects';

interface TrafficLightsProps {
  onClose?: () => void;
  onMinimize?: () => void;
  onMaximize?: () => void;
  className?: string;
}

export const TrafficLights: React.FC<TrafficLightsProps> = ({
  onClose,
  onMinimize,
  onMaximize,
  className = ''
}) => {
  const [hovered, setHovered] = useState(false);

  return (
    <div 
      className={`flex items-center gap-2 px-1 py-0.5 ${className}`}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* Close - Red */}
      <button
        type="button"
        onClick={(e) => {
          e.stopPropagation();
          sounds.click();
          onClose?.();
        }}
        aria-label="Close window"
        className="w-3 h-3 rounded-full bg-[#ff5f56] border border-[#e0443e] flex items-center justify-center transition-transform hover:scale-110 active:scale-95 focus:outline-none cursor-pointer"
      >
        {hovered && (
          <svg className="w-1.5 h-1.5 text-[#4c0000]" viewBox="0 0 6 6" fill="none" stroke="currentColor" strokeWidth="1.2">
            <path d="M1 1L5 5M5 1L1 5" />
          </svg>
        )}
      </button>

      {/* Minimize - Yellow */}
      <button
        type="button"
        onClick={(e) => {
          e.stopPropagation();
          sounds.click();
          onMinimize?.();
        }}
        aria-label="Minimize window"
        className="w-3 h-3 rounded-full bg-[#ffbd2e] border border-[#dea123] flex items-center justify-center transition-transform hover:scale-110 active:scale-95 focus:outline-none cursor-pointer"
      >
        {hovered && (
          <svg className="w-1.5 h-1.5 text-[#5c3e00]" viewBox="0 0 6 6" fill="none" stroke="currentColor" strokeWidth="1.2">
            <path d="M1 3H5" />
          </svg>
        )}
      </button>

      {/* Maximize - Green */}
      <button
        type="button"
        onClick={(e) => {
          e.stopPropagation();
          sounds.click();
          onMaximize?.();
        }}
        aria-label="Maximize window"
        className="w-3 h-3 rounded-full bg-[#27c93f] border border-[#1aab29] flex items-center justify-center transition-transform hover:scale-110 active:scale-95 focus:outline-none cursor-pointer"
      >
        {hovered && (
          <svg className="w-1.5 h-1.5 text-[#004d11]" viewBox="0 0 6 6" fill="currentColor">
            <path d="M1 1h4v4H1z" opacity="0.8" />
          </svg>
        )}
      </button>
    </div>
  );
};
