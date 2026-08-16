import React from 'react';
import { TrafficLights } from '../common/TrafficLights';
import { Download, ExternalLink, GraduationCap, Briefcase, Sparkles } from 'lucide-react';
import { PROFILE_INFO } from '../../data/profile';
import { sounds } from './SoundEffects';

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ResumeModal: React.FC<ResumeModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/40 backdrop-blur-sm animate-fade-in">
      <div 
        className="w-full max-w-2xl mac-window bg-white shadow-2xl flex flex-col max-h-[85vh] animate-scale-up"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Window Header */}
        <div className="mac-window-header px-4 py-2.5 flex items-center justify-between border-b border-black/10 select-none">
          <TrafficLights onClose={onClose} />
          <div className="text-xs font-mono font-medium text-zinc-600 flex items-center gap-1.5">
            <span className="text-zinc-400">📄</span>
            <span>Manish_Agarwal_Resume.pdf</span>
          </div>
          <div className="w-12"></div>
        </div>

        {/* Resume Content Body */}
        <div className="p-6 overflow-y-auto space-y-6 text-sm text-zinc-800">
          {/* Header info */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between pb-4 border-b border-zinc-200 gap-3">
            <div>
              <h2 className="text-2xl font-bold font-display-serif text-zinc-900 tracking-tight">{PROFILE_INFO.name}</h2>
              <p className="text-xs font-mono text-zinc-500 mt-0.5">{PROFILE_INFO.title} • {PROFILE_INFO.location}</p>
            </div>
            <div className="flex items-center gap-2">
              <a
                href="mailto:manishpshyco1969@gmail.com"
                className="px-3 py-1.5 rounded-md bg-zinc-100 hover:bg-zinc-200 text-zinc-700 text-xs font-medium transition flex items-center gap-1.5"
                onClick={() => sounds.click()}
              >
                <span>Email Me</span>
                <ExternalLink className="w-3 h-3" />
              </a>
              <button
                onClick={() => {
                  sounds.click();
                  alert("Simulated download: Manish_Agarwal_Resume.pdf has started downloading.");
                }}
                className="px-3 py-1.5 rounded-md bg-blue-600 hover:bg-blue-700 text-white text-xs font-medium transition flex items-center gap-1.5 shadow-sm"
              >
                <Download className="w-3.5 h-3.5" />
                <span>Download PDF</span>
              </button>
            </div>
          </div>

          {/* Core Focus & Narrative */}
          <div>
            <div className="flex items-center gap-2 text-xs font-mono font-semibold text-blue-600 uppercase tracking-wider mb-2">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Core Focus</span>
            </div>
            <div className="bg-zinc-50 p-3.5 rounded-lg border border-zinc-100 space-y-2">
              <div className="font-semibold text-zinc-900 text-sm">I build systems around content.</div>
              <div className="text-xs text-zinc-600 leading-relaxed">
                21-year-old English student studying the mechanics of attention: why people stop scrolling, why they keep watching, why they remember certain creators, and how AI can make creating and distributing content more repeatable.
              </div>
              <div className="text-[11px] font-mono text-blue-700 font-medium pt-1">
                CONTENT / AI / SYSTEMS / DISTRIBUTION
              </div>
            </div>
          </div>

          {/* Experience & Projects */}
          <div>
            <div className="flex items-center gap-2 text-xs font-mono font-semibold text-blue-600 uppercase tracking-wider mb-2">
              <Briefcase className="w-3.5 h-3.5" />
              <span>Experience & Built Systems</span>
            </div>
            <div className="space-y-3">
              <div className="bg-zinc-50 p-3 rounded-lg border border-zinc-100">
                <div className="flex justify-between items-baseline font-medium text-zinc-900">
                  <span className="font-semibold">WhatsApp AI Automation (28 Degree Delhi)</span>
                  <span className="text-xs text-zinc-500 font-mono">2026</span>
                </div>
                <ul className="text-xs text-zinc-600 mt-2 space-y-1 list-disc list-inside">
                  <li>Built an automated AI customer intake and scheduling system for a Delhi salon chain in one night.</li>
                  <li>Connected conversational AI with accurate booking slots and branch dispatch.</li>
                </ul>
              </div>

              <div className="bg-zinc-50 p-3 rounded-lg border border-zinc-100">
                <div className="flex justify-between items-baseline font-medium text-zinc-900">
                  <span className="font-semibold">Content Intelligence & Obsidian Knowledge Graph</span>
                  <span className="text-xs text-zinc-500 font-mono">2025 - Present</span>
                </div>
                <ul className="text-xs text-zinc-600 mt-2 space-y-1 list-disc list-inside">
                  <li>Built structured knowledge ingestion converting saved Reels into: ideas, hooks, formats, observations.</li>
                  <li>Extracted Creator Skill Files mapping hook structures, vocabulary, and pacing rhythms.</li>
                </ul>
              </div>

              <div className="bg-zinc-50 p-3 rounded-lg border border-zinc-100">
                <div className="flex justify-between items-baseline font-medium text-zinc-900">
                  <span className="font-semibold">Programmable Video Pipeline (Claude Code + Remotion)</span>
                  <span className="text-xs text-zinc-500 font-mono">2026</span>
                </div>
                <ul className="text-xs text-zinc-600 mt-2 space-y-1 list-disc list-inside">
                  <li>Developed programmable editing workflows converting natural language prompts into animated Remotion subtitle & motion treatments.</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Education */}
          <div>
            <div className="flex items-center gap-2 text-xs font-mono font-semibold text-emerald-600 uppercase tracking-wider mb-2">
              <GraduationCap className="w-3.5 h-3.5" />
              <span>Education</span>
            </div>
            <div className="bg-zinc-50 p-3 rounded-lg border border-zinc-100">
              <div className="flex justify-between items-baseline font-medium text-zinc-900">
                <span className="font-semibold">Bachelor of Arts in English Literature</span>
                <span className="text-xs text-zinc-500 font-mono">India • 2023 - 2026</span>
              </div>
              <div className="text-xs text-zinc-600 mt-1">Study of narrative structures, rhetoric, linguistic rhythms, and audience perception.</div>
            </div>
          </div>

        </div>

        {/* Modal Footer */}
        <div className="px-6 py-3 bg-zinc-50 border-t border-zinc-200 flex justify-between items-center text-xs text-zinc-500 font-mono">
          <span>Press ESC or red traffic light to close</span>
          <button
            onClick={onClose}
            className="px-3 py-1 rounded bg-zinc-200 hover:bg-zinc-300 text-zinc-700 font-sans transition"
          >
            Done
          </button>
        </div>
      </div>
    </div>
  );
};
