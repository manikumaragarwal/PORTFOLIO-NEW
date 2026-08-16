import React from 'react';
import { motion } from 'framer-motion';
import { Project } from '../../types';
import { PROJECTS } from '../../data/projects';
import { ArrowUpRight } from 'lucide-react';
import { sounds } from '../layout/SoundEffects';
import { getAssetUrl } from '../../utils/assets';

interface WorksGridProps {
  onSelectProject: (project: Project) => void;
}

export const WorksGrid: React.FC<WorksGridProps> = ({ onSelectProject }) => {
  return (
    <section id="works-section" className="w-full max-w-6xl mx-auto px-4 sm:px-8 md:px-10 py-6 sm:py-10 pb-32 select-none">
      {/* Works 2x2 Showcase Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 lg:gap-10">
        {PROJECTS.map((project, idx) => (
          <motion.div
            key={project.id}
            initial={{ opacity: 0, y: 40, scale: 0.94 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{
              type: 'spring',
              stiffness: 280,
              damping: 24,
              delay: idx * 0.08
            }}
            onClick={() => {
              sounds.click();
              onSelectProject(project);
            }}
            className="group flex flex-col cursor-pointer transition-all duration-300 transform hover:-translate-y-1.5"
          >
            {/* Visual Preview Card Container */}
            <div className="w-full aspect-[16/10] bg-white rounded-2xl overflow-hidden border border-black/8 shadow-xs group-hover:shadow-xl transition-all duration-300 relative flex items-center justify-center p-2.5 sm:p-3">
              {/* Internal Mockup Image Container */}
              <div className="w-full h-full rounded-xl overflow-hidden relative bg-zinc-950 flex items-center justify-center shadow-inner">
                {project.id === 'signs-of-life' ? (
                  /* Reddit Subreddit Ticker Card matching original */
                  <div className="w-full h-full relative overflow-hidden bg-[#feebe2] flex items-center justify-center">
                    {/* Ticker Track */}
                    <div className="absolute inset-0 flex items-center overflow-hidden">
                      <div className="reddit-ticker-track flex items-center font-bold text-2xl sm:text-3xl tracking-tight text-[#ff4500] whitespace-nowrap gap-4 px-4 font-sans select-none">
                        <span>r/cooking</span>
                        <span className="text-xl">🤖</span>
                        <span>r/gaming</span>
                        <span className="text-xl">👾</span>
                        <span>r/funny</span>
                        <span className="text-xl">💬</span>
                        <span>r/memes</span>
                        <span className="text-xl">✨</span>
                        <span>r/cooking</span>
                        <span className="text-xl">🤖</span>
                        <span>r/gaming</span>
                        <span className="text-xl">👾</span>
                        <span>r/funny</span>
                        <span className="text-xl">💬</span>
                        <span>r/memes</span>
                      </div>
                    </div>
                  </div>
                ) : (
                  <img
                    src={getAssetUrl(project.previewImage)}
                    alt={project.title}
                    className="w-full h-full object-cover object-top transition-transform duration-500 ease-out group-hover:scale-105"
                    loading="lazy"
                  />
                )}

                {/* Subtle gradient scrim on hover */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/25 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
              </div>

              {/* Floating Arrow Pill - Always visible on mobile touch screens */}
              <div className="absolute top-3.5 right-3.5 sm:top-5 sm:right-5 w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-white/90 backdrop-blur-md shadow-md flex items-center justify-center text-zinc-800 opacity-100 sm:opacity-0 sm:group-hover:opacity-100 transition-all duration-200 transform scale-90 sm:scale-75 sm:group-hover:scale-100">
                <ArrowUpRight className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
              </div>
            </div>

            {/* Project Metadata & Title */}
            <div className="mt-3.5 sm:mt-4 flex flex-col space-y-1.5">
              {/* Context Tag + Status Badge */}
              <div className="flex items-center justify-between text-xs font-mono">
                <div className="flex items-center gap-1.5 text-zinc-500 font-medium truncate mr-2">
                  {project.id === 'instagram-second-brain' && (
                    <span className="text-sm sm:text-base flex-shrink-0">🧠</span>
                  )}
                  {project.id === 'creator-skill-files' && (
                    <span className="text-sm sm:text-base flex-shrink-0">🧬</span>
                  )}
                  {project.id === 'ai-editing-pipeline' && (
                    <span className="text-sm sm:text-base flex-shrink-0">⚡</span>
                  )}
                  {project.id === 'whatsapp-ai-automation' && (
                    <span className="text-sm sm:text-base flex-shrink-0">💬</span>
                  )}
                  {project.id === 'voice-enhancement-system' && (
                    <span className="text-sm sm:text-base flex-shrink-0">🎙️</span>
                  )}
                  <span className="text-zinc-600 font-semibold truncate">{project.clientOrContext}</span>
                </div>

                {/* Status Badge with shimmer / pulsing dots */}
                <div className={`px-2 sm:px-2.5 py-0.5 rounded-full text-[10px] sm:text-[11px] font-mono font-medium tracking-tight flex items-center gap-1 sm:gap-1.5 border shadow-2xs flex-shrink-0 ${
                  project.statusBadge.type === 'award'
                    ? 'bg-amber-50/90 text-amber-900 border-amber-300/80 badge-award'
                    : project.statusBadge.type === 'shipped'
                    ? 'bg-emerald-50/90 text-emerald-900 border-emerald-300/80'
                    : 'bg-orange-50/90 text-orange-900 border-orange-300/80'
                }`}>
                  {project.statusBadge.type === 'award' && <span>🏆</span>}
                  {project.statusBadge.type === 'shipped' && <span className="shipped-dot"></span>}
                  {project.statusBadge.type === 'building' && <span className="building-dot"></span>}
                  <span>{project.statusBadge.text}</span>
                </div>
              </div>

              {/* Title */}
              <h3 className="text-2xl sm:text-3xl font-display-serif font-normal text-zinc-900 tracking-tight group-hover:text-blue-600 transition-colors">
                {project.title}
              </h3>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};
