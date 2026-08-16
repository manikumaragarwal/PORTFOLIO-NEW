import React, { useState, useEffect } from 'react';
import { BlogPost } from '../../types';
import { ArrowLeft, Heart, Share2, Clock, Calendar, Check } from 'lucide-react';
import confetti from 'canvas-confetti';
import { sounds } from '../layout/SoundEffects';

interface ArticleReaderProps {
  post: BlogPost;
  onBack: () => void;
}

export const ArticleReader: React.FC<ArticleReaderProps> = ({ post, onBack }) => {
  const [claps, setClaps] = useState(post.claps);
  const [userClaps, setUserClaps] = useState(0);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [shared, setShared] = useState(false);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });

    const handleScroll = () => {
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      if (totalHeight > 0) {
        setScrollProgress((window.scrollY / totalHeight) * 100);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleClap = () => {
    sounds.clap();
    setClaps(prev => prev + 1);
    setUserClaps(prev => prev + 1);
    confetti({
      particleCount: 20,
      spread: 45,
      origin: { y: 0.8 }
    });
  };

  const handleShare = () => {
    sounds.click();
    navigator.clipboard.writeText(window.location.href);
    setShared(true);
    setTimeout(() => setShared(false), 2000);
  };

  return (
    <article className="w-full min-h-screen pb-32 pt-6 select-text">
      
      {/* Top Reading Progress Bar */}
      <div className="fixed top-0 left-0 right-0 h-1 bg-zinc-200/60 z-50">
        <div
          style={{ width: `${scrollProgress}%` }}
          className="h-full bg-blue-600 transition-all duration-75 ease-out"
        ></div>
      </div>

      {/* Floating Back Bar */}
      <div className="sticky top-6 z-40 max-w-4xl mx-auto px-4 sm:px-6 flex items-center justify-between pointer-events-none mb-8">
        <button
          onClick={() => {
            sounds.click();
            onBack();
          }}
          className="pointer-events-auto px-3.5 py-1.5 rounded-full bg-white/90 backdrop-blur-md border border-zinc-200 shadow-md text-xs font-mono text-zinc-700 hover:text-zinc-950 hover:bg-white transition-all flex items-center gap-1.5 cursor-pointer hover:scale-105"
        >
          <ArrowLeft className="w-3.5 h-3.5" />
          <span>All Essays</span>
        </button>

        {/* Claps & Share button pill */}
        <div className="pointer-events-auto flex items-center gap-2">
          <button
            onClick={handleClap}
            className="px-3 py-1.5 rounded-full bg-white/90 backdrop-blur-md border border-zinc-200 shadow-md text-xs font-mono text-rose-600 hover:bg-rose-50 transition-all flex items-center gap-1.5 cursor-pointer active:scale-95"
            title="Send appreciation claps!"
          >
            <Heart className="w-3.5 h-3.5 fill-current" />
            <span>{claps}</span>
            {userClaps > 0 && <span className="text-[10px] text-rose-400 font-bold">+{userClaps}</span>}
          </button>

          <button
            onClick={handleShare}
            className="px-3 py-1.5 rounded-full bg-white/90 backdrop-blur-md border border-zinc-200 shadow-md text-xs font-mono text-zinc-700 hover:bg-zinc-50 transition-all flex items-center gap-1.5 cursor-pointer"
          >
            {shared ? <Check className="w-3.5 h-3.5 text-emerald-500" /> : <Share2 className="w-3.5 h-3.5" />}
            <span>{shared ? 'Copied Link' : 'Share'}</span>
          </button>
        </div>
      </div>

      <div className="max-w-3xl mx-auto px-4 sm:px-8">
        
        {/* Article Meta */}
        <div className="space-y-4 mb-10 pb-8 border-b border-zinc-200">
          <div className="flex items-center gap-3 text-xs font-mono text-zinc-500">
            <span className="px-2.5 py-0.5 rounded-full bg-amber-100/80 text-amber-900 font-semibold border border-amber-200">
              {post.category}
            </span>
            <span className="flex items-center gap-1">
              <Calendar className="w-3 h-3" />
              {post.date}
            </span>
            <span>•</span>
            <span className="flex items-center gap-1">
              <Clock className="w-3 h-3" />
              {post.readTime}
            </span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-display-serif font-normal text-zinc-900 tracking-tight leading-tight">
            {post.title}
          </h1>

          <p className="text-base sm:text-lg text-zinc-600 font-serif italic">
            {post.subtitle}
          </p>
        </div>

        {/* Article Body */}
        <div className="space-y-8 text-zinc-800 text-[16px] sm:text-[17px] leading-[1.8] font-sans">
          {post.content.map((block, idx) => {
            if (block.type === 'p') {
              return (
                <p key={idx} className="text-zinc-700">
                  {block.text}
                </p>
              );
            }
            if (block.type === 'h2') {
              return (
                <h2 key={idx} className="text-2xl sm:text-3xl font-display-serif text-zinc-900 pt-6 font-normal">
                  {block.text}
                </h2>
              );
            }
            if (block.type === 'quote') {
              return (
                <blockquote
                  key={idx}
                  className="my-8 pl-6 border-l-2 border-blue-500 font-display-serif italic text-xl sm:text-2xl text-zinc-900 leading-snug bg-blue-50/40 py-4 pr-6 rounded-r-xl"
                >
                  {block.text}
                </blockquote>
              );
            }
            return null;
          })}
        </div>

        {/* Tags */}
        <div className="mt-12 pt-6 border-t border-zinc-200 flex flex-wrap items-center gap-2">
          <span className="text-xs font-mono text-zinc-400 mr-2">Filed under:</span>
          {post.tags.map((t, idx) => (
            <span
              key={idx}
              className="px-2.5 py-1 rounded-md bg-white border border-zinc-200 text-zinc-600 text-xs font-mono"
            >
              #{t}
            </span>
          ))}
        </div>

        {/* Author sign-off card */}
        <div className="mt-12 p-6 rounded-2xl bg-white border border-zinc-200/80 shadow-xs flex items-center gap-4">
          <div className="w-14 h-14 rounded-full bg-gradient-to-br from-zinc-800 to-zinc-950 flex items-center justify-center text-white font-mono font-bold text-lg shadow-sm flex-shrink-0 border border-zinc-700">
            MA
          </div>
          <div>
            <div className="font-semibold text-zinc-900 text-sm">Written by Manish Agarwal</div>
            <div className="text-xs text-zinc-500 font-mono mt-0.5">Content Systems & AI • English Student @ India</div>
          </div>
        </div>

      </div>
    </article>
  );
};
