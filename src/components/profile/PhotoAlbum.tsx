import React, { useState } from 'react';
import { TrafficLights } from '../common/TrafficLights';
import { PROFILE_PHOTOS, ProfileGalleryPhoto } from '../../data/profile';
import { sounds } from '../layout/SoundEffects';
import { getAssetUrl } from '../../utils/assets';

export const PhotoAlbum: React.FC = () => {
  const [activePhoto, setActivePhoto] = useState<ProfileGalleryPhoto>(PROFILE_PHOTOS[0]);

  const handleSelectPhoto = (photo: ProfileGalleryPhoto) => {
    sounds.click();
    setActivePhoto(photo);
  };

  return (
    <div className="w-full bg-white rounded-md border border-black/10 shadow-lg flex flex-col select-none overflow-hidden">
      
      {/* macOS Window Header */}
      <div className="px-3.5 py-2.5 flex items-center justify-between border-b border-black/8 bg-zinc-50/80">
        <TrafficLights />
        <div className="w-10"></div>
      </div>

      {/* Main Active Photo Frame */}
      <div className="p-3 sm:p-4 flex flex-col space-y-3">
        <div className="w-full aspect-[4/4] sm:aspect-[4/3.8] rounded-xs overflow-hidden bg-white border border-zinc-200/60 shadow-xs flex items-center justify-center relative group p-1">
          <img
            key={activePhoto.id}
            src={getAssetUrl(activePhoto.src)}
            alt={activePhoto.alt}
            className="w-full h-full object-contain rounded-xs transition-transform duration-300 group-hover:scale-[1.02] animate-fade-in"
          />
        </div>

        {/* Thumbnail Selector Strip */}
        <div className="grid grid-cols-4 gap-2 pt-0.5">
          {PROFILE_PHOTOS.map((photo) => {
            const isSelected = activePhoto.id === photo.id;
            return (
              <button
                key={photo.id}
                onClick={() => handleSelectPhoto(photo)}
                className={`aspect-square rounded-xs overflow-hidden border-2 bg-white flex items-center justify-center p-0.5 transition-all duration-150 cursor-pointer relative group ${
                  isSelected
                    ? 'border-blue-500 shadow-sm scale-105'
                    : 'border-zinc-200 opacity-60 hover:opacity-100 hover:scale-102'
                }`}
              >
                <img
                  src={getAssetUrl(photo.src)}
                  alt={photo.alt}
                  className="w-full h-full object-contain pointer-events-none rounded-2xs"
                />
                {isSelected && (
                  <div className="absolute inset-0 bg-blue-500/10 pointer-events-none rounded-xs"></div>
                )}
              </button>
            );
          })}
        </div>

      </div>

    </div>
  );
};
