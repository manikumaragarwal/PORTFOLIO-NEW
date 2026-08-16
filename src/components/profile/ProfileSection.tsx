import React from 'react';
import { PhotoAlbum } from './PhotoAlbum';
import { InteractiveCards } from './InteractiveCards';
import { PROFILE_INFO } from '../../data/profile';

interface ProfileSectionProps {
  onCopyToast?: () => void;
}

export const ProfileSection: React.FC<ProfileSectionProps> = ({ onCopyToast }) => {
  return (
    <section className="w-full max-w-6xl mx-auto px-4 sm:px-8 lg:px-10 py-6 sm:py-10 pb-32 select-none">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-start">
        
        {/* Left Column: macOS Photo Album Window (5 cols) */}
        <div className="lg:col-span-5 w-full">
          <PhotoAlbum />
        </div>

        {/* Right Column: About Me Story & Interactive Cards (7 cols) */}
        <div className="lg:col-span-7 space-y-8 select-text">
          
          {/* Section Heading matching screenshot */}
          <div>
            <h2 className="text-4xl sm:text-5xl font-display-serif italic font-normal text-zinc-900 tracking-tight leading-tight">
              About me
            </h2>

            {/* Narrative Bio Paragraphs */}
            <div className="mt-5 space-y-4 text-zinc-700 font-sans text-[14.5px] sm:text-[15.5px] leading-relaxed">
              {PROFILE_INFO.bioParagraphs.map((paragraph, idx) => (
                <p key={idx}>
                  {paragraph}
                </p>
              ))}
            </div>
          </div>

          {/* Interactive Feature Cards */}
          <InteractiveCards onCopyToast={onCopyToast} />

        </div>

      </div>
    </section>
  );
};
