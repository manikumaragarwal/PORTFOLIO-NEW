import React, { useEffect, useState } from 'react';
import { Project } from '../../types';
import { ArrowLeft, ArrowRight, CheckCircle2, Award, ExternalLink, Sparkles } from 'lucide-react';
import { PROJECTS } from '../../data/projects';
import { sounds } from '../layout/SoundEffects';
import { getAssetUrl } from '../../utils/assets';
import { ProjectVisualExplainer } from './ProjectVisualExplainer';

interface CaseStudyViewProps {
  project: Project;
  onBack: () => void;
  onSelectProject: (p: Project) => void;
}

export const CaseStudyView: React.FC<CaseStudyViewProps> = ({ project, onBack, onSelectProject }) => {
  const [activeToc, setActiveToc] = useState<string>('tldr');

  const tocItems = [
    { id: 'tldr', label: 'TL;DR' },
    { id: 'background', label: 'BACKGROUND' },
    { id: 'problem', label: 'PROBLEM' },
    { id: 'process', label: 'PROCESS' },
    { id: 'final-product', label: 'FINAL PRODUCT' },
    { id: 'impact', label: 'IMPACT' },
    { id: 'reflections', label: 'REFLECTIONS' }
  ];

  // Scroll spy for Table of Contents
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });

    const handleScroll = () => {
      const scrollY = window.scrollY;
      const sections = tocItems.map(item => document.getElementById(item.id));

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i];
        if (section) {
          const top = section.offsetTop - 160;
          if (scrollY >= top) {
            setActiveToc(tocItems[i].id);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [project.id]);

  // Keyboard shortcut: Esc to go back
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        sounds.click();
        onBack();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onBack]);

  const scrollToSection = (id: string) => {
    sounds.click();
    setActiveToc(id);
    const element = document.getElementById(id);
    if (element) {
      const offset = 100;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  // Find previous and next projects
  const currentIndex = PROJECTS.findIndex(p => p.id === project.id);
  const prevProject = currentIndex > 0 ? PROJECTS[currentIndex - 1] : PROJECTS[PROJECTS.length - 1];
  const nextProject = currentIndex < PROJECTS.length - 1 ? PROJECTS[currentIndex + 1] : PROJECTS[0];

  return (
    <div className="w-full min-h-screen pb-32 pt-4 select-text">
      
      {/* Top Floating Back Bar */}
      <div className="sticky top-4 z-30 max-w-6xl mx-auto px-6 flex items-center justify-between pointer-events-none mb-6">
        <button
          onClick={() => {
            sounds.click();
            onBack();
          }}
          className="pointer-events-auto px-3.5 py-1.5 rounded-full bg-white/90 backdrop-blur-md border border-zinc-200 shadow-md text-xs font-mono text-zinc-700 hover:text-zinc-950 hover:bg-white transition-all duration-200 flex items-center gap-1.5 cursor-pointer hover:scale-105 active:scale-95"
        >
          <ArrowLeft className="w-3.5 h-3.5" />
          <span>Back</span>
          <span className="text-[10px] text-zinc-400 ml-1 font-mono">ESC</span>
        </button>
      </div>

      <div className="max-w-5xl mx-auto px-4 sm:px-8 md:px-10">
        
        {/* Hero Visual Mockup Banner */}
        <div className="w-full aspect-[21/10] max-h-[460px] bg-zinc-950 rounded-2xl overflow-hidden shadow-xl border border-black/10 relative mb-10">
          {project.heroImage.endsWith('.mp4') ? (
            <video
              src={getAssetUrl(project.heroImage)}
              poster={getAssetUrl(project.heroImage.replace('.mp4', '_poster.jpg'))}
              autoPlay
              muted
              loop
              playsInline
              className="w-full h-full object-cover object-top"
            />
          ) : (
            <img
              src={getAssetUrl(project.heroImage)}
              alt={project.title}
              className="w-full h-full object-cover object-top"
            />
          )}
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent pointer-events-none"></div>
        </div>

        {/* Project Header Meta */}
        <div className="mb-10 space-y-4">
          <div className="text-xs font-mono font-semibold text-zinc-500 flex items-center gap-2">
            <span className="text-rose-500">❖</span>
            <span>{project.clientOrContext}</span>
            <span className="text-zinc-300">•</span>
            <span>{project.year}</span>
          </div>

          <h1 className="text-4xl sm:text-6xl font-display-serif font-normal text-zinc-900 tracking-tight leading-tight">
            {project.title}
          </h1>

          {/* Tags / Badges */}
          <div className="flex flex-wrap items-center gap-2 pt-1">
            {project.statusBadge.type === 'award' && (
              <div className="px-3 py-1 rounded-full bg-amber-50 border border-amber-300 text-amber-900 text-xs font-mono font-semibold flex items-center gap-1.5 shadow-2xs">
                <Award className="w-3.5 h-3.5 text-amber-600" />
                <span>{project.statusBadge.text}</span>
              </div>
            )}
            {project.tags.map((tag, idx) => (
              <div
                key={idx}
                className="px-3 py-1 rounded-full bg-white border border-zinc-200 text-zinc-700 text-xs font-mono"
              >
                {tag}
              </div>
            ))}
          </div>

          {/* Direct Project Action Links (GitHub & Live App) */}
          {(project.githubUrl || project.liveUrl || project.showcaseUrl) && (
            <div className="flex flex-wrap items-center gap-3 pt-2">
              {project.showcaseUrl && (
                <a
                  href={getAssetUrl(project.showcaseUrl)}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => sounds.click()}
                  className="px-4 py-2 rounded-xl bg-purple-600 hover:bg-purple-700 text-white text-xs font-mono font-medium flex items-center gap-2 shadow-xs transition hover:scale-105"
                >
                  <Sparkles className="w-3.5 h-3.5 text-purple-200" />
                  <span>Interactive System Explainer</span>
                </a>
              )}
              {project.liveUrl && (
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => sounds.click()}
                  className="px-4 py-2 rounded-xl bg-zinc-900 hover:bg-zinc-800 text-white text-xs font-mono font-medium flex items-center gap-2 shadow-sm transition hover:scale-105"
                >
                  <ExternalLink className="w-3.5 h-3.5" />
                  <span>Visit Live Website</span>
                </a>
              )}
              {project.githubUrl && (
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => sounds.click()}
                  className="px-4 py-2 rounded-xl bg-white hover:bg-zinc-50 text-zinc-900 text-xs font-mono font-medium flex items-center gap-2 border border-zinc-200 shadow-2xs transition hover:scale-105"
                >
                  <svg className="w-3.5 h-3.5 fill-current text-zinc-700" viewBox="0 0 24 24">
                    <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
                  </svg>
                  <span>View GitHub Repository</span>
                </a>
              )}
            </div>
          )}
        </div>

        {/* Two-Column Layout: Left Sticky TOC + Right Case Study Narrative */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 lg:gap-12 relative items-start">
          
          {/* Left Column: Sticky Table of Contents */}
          <aside className="hidden md:block md:col-span-3 sticky top-24 space-y-2 select-none">
            <div className="text-[11px] font-mono tracking-widest uppercase text-zinc-400 mb-3 font-semibold">
              Navigation
            </div>
            <nav className="space-y-1 text-xs font-mono">
              {tocItems.map((item) => {
                const isActive = activeToc === item.id;
                return (
                  <button
                    key={item.id}
                    onClick={() => scrollToSection(item.id)}
                    className={`w-full text-left py-1.5 px-2 rounded-md transition-all duration-150 flex items-center justify-between cursor-pointer ${
                      isActive
                        ? 'text-blue-600 font-bold bg-blue-50/80 -translate-x-1'
                        : 'text-zinc-400 hover:text-zinc-800 hover:bg-zinc-100/60'
                    }`}
                  >
                    <span>{item.label}</span>
                    {isActive && <div className="w-1.5 h-1.5 rounded-full bg-blue-600"></div>}
                  </button>
                );
              })}
            </nav>
          </aside>

          {/* Right Column: Case Study Sections */}
          <main className="md:col-span-9 space-y-16 text-zinc-800 leading-relaxed font-sans">
            
            {/* 1. TL;DR Section */}
            <section id="tldr" className="space-y-6 scroll-mt-24">
              <div className="text-xs font-mono tracking-widest text-blue-600 font-bold uppercase">
                TL;DR
              </div>
              <p className="text-base sm:text-lg text-zinc-700 leading-relaxed">
                {project.tldr}
              </p>

              {/* 4-Column Metadata Box */}
              <div className="bg-white rounded-xl border border-zinc-200/80 p-5 sm:p-6 grid grid-cols-2 sm:grid-cols-4 gap-6 shadow-xs font-mono text-xs">
                <div>
                  <div className="text-[10px] text-zinc-400 uppercase tracking-wider font-semibold mb-1">My Role</div>
                  <div className="text-zinc-800 font-medium whitespace-pre-line">{project.role}</div>
                </div>
                <div>
                  <div className="text-[10px] text-zinc-400 uppercase tracking-wider font-semibold mb-1">Timeline</div>
                  <div className="text-zinc-800 font-medium">{project.timeline}</div>
                </div>
                <div>
                  <div className="text-[10px] text-zinc-400 uppercase tracking-wider font-semibold mb-1">Team</div>
                  <div className="text-zinc-800 font-medium space-y-0.5">
                    {project.team.map((m, i) => (
                      <div key={i}>{m}</div>
                    ))}
                  </div>
                </div>
                <div>
                  <div className="text-[10px] text-zinc-400 uppercase tracking-wider font-semibold mb-1">Tools</div>
                  <div className="text-zinc-800 font-medium space-y-0.5">
                    {project.tools.map((t, i) => (
                      <div key={i}>{t}</div>
                    ))}
                  </div>
                </div>
              </div>
            </section>

            {/* 2. Background Section */}
            <section id="background" className="space-y-5 scroll-mt-24">
              <div className="text-xs font-mono tracking-widest text-zinc-400 font-semibold uppercase">
                Background
              </div>
              <h2 className="text-2xl sm:text-3xl font-display-serif font-normal text-zinc-900">
                {project.background.title}
              </h2>
              {project.background.content.map((p, idx) => (
                <p key={idx} className="text-zinc-700 leading-relaxed text-[15px]">
                  {p}
                </p>
              ))}

              {project.background.callout && (
                <div className="my-6 p-6 rounded-xl bg-rose-50/60 border border-rose-200/80 flex flex-col sm:flex-row items-start sm:items-center gap-4">
                  <div className="text-3xl font-display-serif font-bold text-rose-600 whitespace-nowrap">
                    {project.background.callout.stat}
                  </div>
                  <div className="text-xs text-rose-950 font-medium leading-relaxed">
                    {project.background.callout.label}
                  </div>
                </div>
              )}
            </section>

            {/* 3. Problem Section */}
            <section id="problem" className="space-y-5 scroll-mt-24">
              <div className="text-xs font-mono tracking-widest text-zinc-400 font-semibold uppercase">
                Problem
              </div>
              <h2 className="text-2xl sm:text-3xl font-display-serif font-normal text-zinc-900">
                {project.problem.title}
              </h2>
              {project.problem.content.map((p, idx) => (
                <p key={idx} className="text-zinc-700 leading-relaxed text-[15px]">
                  {p}
                </p>
              ))}

              <div className="mt-4 space-y-2">
                <div className="text-xs font-mono font-semibold text-zinc-500 uppercase tracking-wide">Key Pain Points Identified:</div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {project.problem.painPoints.map((point, idx) => (
                    <div key={idx} className="p-3 bg-white rounded-lg border border-zinc-200/80 text-xs text-zinc-700 flex items-start gap-2.5 shadow-2xs">
                      <span className="w-1.5 h-1.5 rounded-full bg-rose-500 mt-1.5 flex-shrink-0"></span>
                      <span>{point}</span>
                    </div>
                  ))}
                </div>
              </div>
            </section>

            {/* 4. Process Section */}
            <section id="process" className="space-y-5 scroll-mt-24">
              <div className="text-xs font-mono tracking-widest text-zinc-400 font-semibold uppercase">
                Process
              </div>
              <h2 className="text-2xl sm:text-3xl font-display-serif font-normal text-zinc-900">
                {project.process.title}
              </h2>
              <p className="text-zinc-700 leading-relaxed text-[15px]">
                {project.process.description}
              </p>

              <div className="space-y-4 pt-2">
                {project.process.steps.map((step, idx) => (
                  <div key={idx} className="p-4 bg-white rounded-xl border border-zinc-200/80 shadow-2xs">
                    <div className="text-xs font-mono font-semibold text-blue-600 mb-1">
                      {step.phase}
                    </div>
                    <div className="text-xs sm:text-sm text-zinc-700 leading-relaxed">
                      {step.details}
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* 5. Final Product Section */}
            <section id="final-product" className="space-y-5 scroll-mt-24">
              <div className="text-xs font-mono tracking-widest text-zinc-400 font-semibold uppercase">
                Final Product
              </div>
              <h2 className="text-2xl sm:text-3xl font-display-serif font-normal text-zinc-900">
                {project.finalProduct.title}
              </h2>
              <p className="text-zinc-700 leading-relaxed text-[15px]">
                {project.finalProduct.description}
              </p>

              {/* Interactive In-Page Visual Explainer */}
              <ProjectVisualExplainer projectId={project.id} showcaseUrl={project.showcaseUrl} />

              <div className="space-y-4 pt-2">
                {project.finalProduct.highlights.map((highlight, idx) => (
                  <div key={idx} className="p-5 bg-white rounded-xl border border-zinc-200/80 shadow-xs space-y-2">
                    <div className="flex items-center justify-between">
                      <h4 className="text-base font-semibold text-zinc-900">{highlight.title}</h4>
                      {highlight.badge && (
                        <span className="px-2 py-0.5 rounded-full bg-blue-50 text-blue-700 border border-blue-200 text-[10px] font-mono">
                          {highlight.badge}
                        </span>
                      )}
                    </div>
                    <p className="text-xs sm:text-sm text-zinc-600 leading-relaxed">
                      {highlight.description}
                    </p>
                  </div>
                ))}

                {project.showcaseUrl && (
                  <div className="p-5 sm:p-6 bg-gradient-to-br from-zinc-900 via-zinc-900 to-zinc-950 text-white rounded-2xl border border-zinc-800 shadow-md space-y-3">
                    <div className="flex items-center justify-between flex-wrap gap-2">
                      <div className="flex items-center gap-2 text-xs font-mono text-purple-400 font-semibold">
                        <Sparkles className="w-4 h-4 text-purple-400" />
                        <span>INTERACTIVE SYSTEM BREAKDOWN</span>
                      </div>
                      <span className="px-2 py-0.5 rounded-full bg-purple-500/20 text-purple-300 border border-purple-500/30 text-[10px] font-mono">
                        Pure HTML/CSS
                      </span>
                    </div>
                    <div>
                      <h4 className="text-base font-bold text-white">Visual Pipeline & Architecture</h4>
                      <p className="text-xs text-zinc-400 mt-1 leading-relaxed">
                        Explore an interactive visual walkthrough of how the data flows, state machines execute, and outputs are generated.
                      </p>
                    </div>
                    <div className="pt-1">
                      <a
                        href={getAssetUrl(project.showcaseUrl)}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={() => sounds.click()}
                        className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-purple-600 hover:bg-purple-500 text-white text-xs font-mono font-medium shadow-xs transition hover:scale-105 cursor-pointer"
                      >
                        <span>Launch Visual Explainer</span>
                        <ExternalLink className="w-3.5 h-3.5" />
                      </a>
                    </div>
                  </div>
                )}
              </div>
            </section>

            {/* 6. Impact Section */}
            <section id="impact" className="space-y-6 scroll-mt-24">
              <div className="text-xs font-mono tracking-widest text-zinc-400 font-semibold uppercase">
                Impact
              </div>
              <h2 className="text-2xl sm:text-3xl font-display-serif font-normal text-zinc-900">
                {project.impact.title}
              </h2>

              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                {project.impact.metrics.map((m, idx) => (
                  <div key={idx} className="p-4 bg-white rounded-xl border border-zinc-200/80 text-center shadow-xs">
                    <div className="text-2xl sm:text-3xl font-display-serif font-bold text-zinc-900">{m.value}</div>
                    <div className="text-[11px] font-mono text-zinc-500 mt-1 leading-tight">{m.label}</div>
                  </div>
                ))}
              </div>

              {project.impact.quote && (
                <div className="p-6 bg-zinc-900 text-white rounded-xl shadow-md space-y-3">
                  <p className="font-display-serif italic text-base sm:text-lg text-zinc-200 leading-relaxed">
                    "{project.impact.quote.text}"
                  </p>
                  <div className="text-xs font-mono text-zinc-400">
                    {project.impact.quote.author}{project.impact.quote.role ? `, ${project.impact.quote.role}` : ''}
                  </div>
                </div>
              )}
            </section>

            {/* 7. Reflections Section */}
            {project.reflections && project.reflections.length > 0 && (
              <section id="reflections" className="space-y-5 scroll-mt-24">
                <div className="text-xs font-mono tracking-widest text-zinc-400 font-semibold uppercase">
                  Reflections
                </div>
                <h2 className="text-2xl sm:text-3xl font-display-serif font-normal text-zinc-900">
                  Key Takeaways
                </h2>
                <div className="space-y-3">
                  {project.reflections.map((r, idx) => (
                    <div key={idx} className="p-4 bg-white/80 rounded-xl border border-zinc-200 text-xs sm:text-sm text-zinc-700 leading-relaxed flex items-start gap-3">
                      <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                      <span>{r}</span>
                    </div>
                  ))}
                </div>
              </section>
            )}

            {/* Footer Navigation to Next/Previous Project */}
            <div className="pt-12 border-t border-zinc-200 flex flex-col sm:flex-row items-center justify-between gap-4">
              <button
                onClick={() => {
                  sounds.click();
                  onSelectProject(prevProject);
                }}
                className="w-full sm:w-auto px-4 py-2.5 rounded-xl bg-white border border-zinc-200 text-xs font-mono text-zinc-700 hover:bg-zinc-50 flex items-center justify-center sm:justify-start gap-2 shadow-xs cursor-pointer"
              >
                <ArrowLeft className="w-3.5 h-3.5" />
                <span>Previous: {prevProject.title}</span>
              </button>

              <button
                onClick={() => {
                  sounds.click();
                  onSelectProject(nextProject);
                }}
                className="w-full sm:w-auto px-4 py-2.5 rounded-xl bg-zinc-900 text-white text-xs font-mono hover:bg-zinc-800 flex items-center justify-center sm:justify-end gap-2 shadow-md cursor-pointer"
              >
                <span>Next: {nextProject.title}</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>

          </main>
        </div>

      </div>
    </div>
  );
};
