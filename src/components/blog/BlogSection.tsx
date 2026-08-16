import React, { useState } from 'react';
import { BlogPost } from '../../types';
import { BLOG_POSTS } from '../../data/blog';
import { ArticleReader } from './ArticleReader';
import { BookOpen, Search, ArrowRight, Heart } from 'lucide-react';
import { sounds } from '../layout/SoundEffects';

export const BlogSection: React.FC = () => {
  const [selectedPost, setSelectedPost] = useState<BlogPost | null>(null);
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [selectedTag, setSelectedTag] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState('');

  const categories = ['All', 'Content Systems', 'AI Philosophy', 'Content Mechanics', 'Open Research'];

  const filteredPosts = BLOG_POSTS.filter(post => {
    const matchesCategory = selectedCategory === 'All' || post.category === selectedCategory;
    const matchesTag = !selectedTag || post.tags.includes(selectedTag);
    const matchesSearch =
      post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.tags.some(t => t.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesCategory && matchesTag && matchesSearch;
  });

  if (selectedPost) {
    return <ArticleReader post={selectedPost} onBack={() => setSelectedPost(null)} />;
  }

  return (
    <section className="w-full max-w-5xl mx-auto px-4 sm:px-8 md:px-10 py-6 sm:py-10 pb-48 sm:pb-52 select-none">
      
      {/* Section Title & Subtitle */}
      <div className="space-y-3 mb-8">
        <div className="flex items-center gap-2 text-xs font-mono text-amber-600 font-semibold uppercase tracking-wider">
          <BookOpen className="w-4 h-4" />
          <span>Journal & Content Systems Lab</span>
        </div>

        <h2 className="text-4xl sm:text-5xl font-display-serif font-normal text-zinc-900 tracking-tight">
          Essays on Content, AI Architecture & Attention Mechanics
        </h2>

        <p className="text-zinc-600 text-sm sm:text-base max-w-2xl font-sans">
          Dissections of creator retention, content systems, how I think about AI, and experiments in distribution.
        </p>
      </div>

      {/* Category Tabs & Search Bar */}
      <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4 mb-8 pb-4 border-b border-zinc-200">
        {/* Category Pills */}
        <div className="flex items-center gap-1.5 overflow-x-auto pb-1 sm:pb-0 scrollbar-none">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => {
                sounds.click();
                setSelectedCategory(cat);
                setSelectedTag(null);
              }}
              className={`px-3 py-1.5 rounded-full text-xs font-mono whitespace-nowrap transition cursor-pointer ${
                selectedCategory === cat
                  ? 'bg-zinc-900 text-white font-medium shadow-xs'
                  : 'bg-white/80 hover:bg-white text-zinc-600 border border-zinc-200/80'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Search Box */}
        <div className="relative w-full sm:w-64 flex-shrink-0">
          <Search className="w-3.5 h-3.5 text-zinc-400 absolute left-3 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            placeholder="Search essays or tags..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-9 pr-3 py-1.5 rounded-lg bg-white/90 border border-zinc-200 text-xs font-mono text-zinc-800 placeholder-zinc-400 focus:outline-none focus:border-blue-500 transition"
          />
        </div>
      </div>

      {/* Active Tag Filter Indicator if selected */}
      {selectedTag && (
        <div className="mb-6 flex items-center gap-2 text-xs font-mono text-zinc-600 bg-amber-50/80 border border-amber-200/60 px-3 py-1.5 rounded-lg w-fit">
          <span>Filtering by tag:</span>
          <span className="font-semibold text-amber-900">#{selectedTag}</span>
          <button
            onClick={() => setSelectedTag(null)}
            className="ml-2 text-zinc-400 hover:text-zinc-800 cursor-pointer font-bold"
          >
            ✕ clear
          </button>
        </div>
      )}

      {/* Blog Posts Index List */}
      <div className="space-y-6">
        {filteredPosts.map((post) => (
          <div
            key={post.id}
            onClick={() => {
              sounds.click();
              setSelectedPost(post);
            }}
            className="group p-6 sm:p-7 rounded-2xl bg-white/90 hover:bg-white border border-zinc-200/80 shadow-xs hover:shadow-lg transition-all duration-200 cursor-pointer flex flex-col justify-between select-text"
          >
            <div className="space-y-2.5">
              {/* Meta */}
              <div className="flex items-center justify-between text-xs font-mono text-zinc-400">
                <div className="flex items-center gap-2">
                  <span className="px-2 py-0.5 rounded-full bg-amber-50 text-amber-800 font-semibold border border-amber-200/60 text-[10px]">
                    {post.category}
                  </span>
                  <span>{post.date}</span>
                  <span>•</span>
                  <span>{post.readTime}</span>
                </div>

                <div className="flex items-center gap-1 text-rose-500/80">
                  <Heart className="w-3 h-3 fill-current" />
                  <span className="text-[11px]">{post.claps}</span>
                </div>
              </div>

              {/* Title */}
              <h3 className="text-2xl sm:text-3xl font-display-serif font-normal text-zinc-900 tracking-tight group-hover:text-blue-600 transition-colors">
                {post.title}
              </h3>

              {/* Excerpt */}
              <p className="text-zinc-600 text-xs sm:text-sm leading-relaxed font-sans line-clamp-2">
                {post.excerpt}
              </p>
            </div>

            {/* Read Article Link & Tags */}
            <div className="mt-5 pt-4 border-t border-zinc-100 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 text-xs font-mono">
              <div className="flex flex-wrap items-center gap-1.5">
                {post.tags.map((t, idx) => (
                  <button
                    key={idx}
                    onClick={(e) => {
                      e.stopPropagation();
                      sounds.click();
                      setSelectedTag(t === selectedTag ? null : t);
                    }}
                    className={`px-2 py-0.5 rounded-md text-[10px] font-mono transition cursor-pointer ${
                      selectedTag === t
                        ? 'bg-amber-100 text-amber-900 font-semibold border border-amber-300'
                        : 'bg-zinc-100 hover:bg-zinc-200 text-zinc-600 border border-zinc-200/60'
                    }`}
                  >
                    #{t}
                  </button>
                ))}
              </div>

              <div className="flex items-center gap-1 text-blue-600 font-semibold group-hover:translate-x-1 transition-transform flex-shrink-0">
                <span>Read essay</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </div>
            </div>
          </div>
        ))}

        {filteredPosts.length === 0 && (
          <div className="p-12 text-center text-zinc-400 font-mono text-xs">
            No essays matching your filter found. Try clearing filters or searching for something else.
          </div>
        )}
      </div>

    </section>
  );
};
