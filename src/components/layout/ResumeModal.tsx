import React from 'react';
import { TrafficLights } from '../common/TrafficLights';
import { Download, ExternalLink, Terminal } from 'lucide-react';
import { PROFILE_INFO } from '../../data/profile';
import { sounds } from './SoundEffects';
import { getAssetUrl } from '../../utils/assets';

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ResumeModal: React.FC<ResumeModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-md animate-fade-in"
      onClick={onClose}
    >
      <div 
        className="w-full max-w-2xl bg-zinc-950 border border-zinc-800 rounded-2xl shadow-2xl flex flex-col max-h-[88vh] animate-scale-up text-zinc-100 overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Terminal Header Bar */}
        <div className="px-4 py-3 bg-zinc-900/90 border-b border-zinc-800 flex items-center justify-between select-none">
          <TrafficLights onClose={onClose} />
          <div className="text-xs font-mono text-zinc-400 flex items-center gap-2">
            <Terminal className="w-3.5 h-3.5 text-emerald-400" />
            <span className="text-zinc-500">manish@archbox:~/resume $</span>
            <span className="text-emerald-400 font-semibold">cat resume.tui</span>
          </div>
          <div className="w-12"></div>
        </div>

        {/* Action Controls Top Strip */}
        <div className="px-6 py-3.5 bg-zinc-900/40 border-b border-zinc-800/80 flex flex-wrap items-center justify-between gap-3">
          <div>
            <div className="text-base font-bold font-mono text-white tracking-tight">MANISH AGARWAL</div>
            <div className="text-[11px] font-mono text-purple-400">Content Systems Builder & AI Prototyper</div>
          </div>

          <div className="flex items-center gap-2">
            <a
              href={`mailto:${PROFILE_INFO.email}`}
              className="px-3 py-1.5 rounded-lg bg-zinc-900 hover:bg-zinc-800 border border-zinc-700 text-zinc-300 text-xs font-mono transition flex items-center gap-1.5"
              onClick={() => sounds.click()}
            >
              <span>Email</span>
              <ExternalLink className="w-3 h-3 text-zinc-400" />
            </a>

            {/* Direct Download Link for Resume PDF */}
            <a
              href={getAssetUrl('/Manish_Agarwal_Resume.pdf')}
              download="Manish_Agarwal_Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => sounds.click()}
              className="px-3.5 py-1.5 rounded-lg bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-mono font-medium transition flex items-center gap-1.5 shadow-sm hover:scale-105 cursor-pointer"
            >
              <Download className="w-3.5 h-3.5" />
              <span>Download PDF</span>
            </a>
          </div>
        </div>

        {/* Resume TUI Content Body */}
        <div className="p-6 overflow-y-auto space-y-6 font-mono text-xs text-zinc-300 leading-relaxed">
          
          {/* 01: Core Focus */}
          <div className="space-y-2">
            <div className="text-xs font-bold text-sky-400 tracking-wider flex items-center gap-2 border-b border-zinc-800/80 pb-1">
              <span>01 // CORE_FOCUS</span>
            </div>
            <div className="p-3 bg-zinc-900/60 border-l-2 border-sky-400 rounded-r-lg text-zinc-300 text-[11.5px]">
              21-year-old English student studying the mechanics of attention: why people stop scrolling, why they keep watching, and how AI can act as the infrastructure to make creating and distributing content repeatable without losing the creator's authentic voice.
            </div>
          </div>

          {/* 02: Built Systems & Projects */}
          <div className="space-y-3">
            <div className="text-xs font-bold text-sky-400 tracking-wider flex items-center gap-2 border-b border-zinc-800/80 pb-1">
              <span>02 // BUILT_SYSTEMS_AND_PROJECTS</span>
            </div>

            <div className="space-y-2.5">
              {/* WhatsApp Automation */}
              <div className="p-3 bg-zinc-900/50 border border-zinc-800/80 rounded-lg space-y-1">
                <div className="flex justify-between items-baseline flex-wrap gap-1">
                  <span className="font-bold text-white text-[12px]">WhatsApp AI Automation (28 Degree Salon)</span>
                  <span className="text-[10px] px-1.5 py-0.2 rounded bg-emerald-500/15 text-emerald-400 border border-emerald-500/30">SHIPPED</span>
                </div>
                <div className="text-[10.5px] text-purple-300">Node.js · WhatsApp Cloud API · Webhooks · Conversational Logic</div>
                <ul className="text-[11px] text-zinc-400 space-y-1 pl-3 list-disc">
                  <li>Architected and shipped an automated customer intake & scheduling system for a Delhi salon chain overnight (~14h turnaround).</li>
                  <li>Engineered deterministic state-machine flows eliminating booking hallucinations with &lt;2s response latency.</li>
                </ul>
              </div>

              {/* Obsidian Second Brain */}
              <div className="p-3 bg-zinc-900/50 border border-zinc-800/80 rounded-lg space-y-1">
                <div className="flex justify-between items-baseline flex-wrap gap-1">
                  <span className="font-bold text-white text-[12px]">Content Intelligence & Obsidian Second Brain</span>
                  <span className="text-[10px] px-1.5 py-0.2 rounded bg-purple-500/15 text-purple-400 border border-purple-500/30">ACTIVE</span>
                </div>
                <div className="text-[10.5px] text-purple-300">Python · Whisper AI · Obsidian API · Knowledge Graphs</div>
                <ul className="text-[11px] text-zinc-400 space-y-1 pl-3 list-disc">
                  <li>Built structured CLI ingestion pipeline converting 500+ analyzed short-form Reels into parsed Obsidian knowledge nodes.</li>
                  <li>Created Creator Skill Files mapping sentence cadence, vocabulary fingerprints, and retention vector triggers.</li>
                </ul>
              </div>

              {/* Programmable Video Pipeline */}
              <div className="p-3 bg-zinc-900/50 border border-zinc-800/80 rounded-lg space-y-1">
                <div className="flex justify-between items-baseline flex-wrap gap-1">
                  <span className="font-bold text-white text-[12px]">Programmable Video Pipeline</span>
                  <span className="text-[10px] px-1.5 py-0.2 rounded bg-sky-500/15 text-sky-400 border border-sky-500/30">EXPERIMENTAL</span>
                </div>
                <div className="text-[10.5px] text-purple-300">Claude Code CLI · Remotion · React · FFmpeg</div>
                <ul className="text-[11px] text-zinc-400 space-y-1 pl-3 list-disc">
                  <li>Developed terminal-driven video editing workflows converting transcripts into animated kinetic split-captions at 60 FPS.</li>
                  <li>Automated word timestamp syncing and headless video rendering directly via code.</li>
                </ul>
              </div>

              {/* Voice Enhancement Pipeline */}
              <div className="p-3 bg-zinc-900/50 border border-zinc-800/80 rounded-lg space-y-1">
                <div className="flex justify-between items-baseline flex-wrap gap-1">
                  <span className="font-bold text-white text-[12px]">Voice Enhancement Pipeline</span>
                  <span className="text-[10px] px-1.5 py-0.2 rounded bg-amber-500/15 text-amber-400 border border-amber-500/30">TOOL</span>
                </div>
                <div className="text-[10.5px] text-purple-300">Python · FFmpeg · Spectral Subtraction · Audio Processing</div>
                <ul className="text-[11px] text-zinc-400 space-y-1 pl-3 list-disc">
                  <li>1-command audio cleanup utility executing ambient noise subtraction and vocal formant presence EQ boost (1.5kHz–4kHz).</li>
                </ul>
              </div>
            </div>
          </div>

          {/* 03: Education */}
          <div className="space-y-2">
            <div className="text-xs font-bold text-sky-400 tracking-wider flex items-center gap-2 border-b border-zinc-800/80 pb-1">
              <span>03 // EDUCATION</span>
            </div>
            <div className="p-3 bg-zinc-900/50 border border-zinc-800/80 rounded-lg">
              <div className="flex justify-between text-white font-bold text-[11.5px]">
                <span>Bachelor of Arts in English Literature</span>
                <span className="text-zinc-500">2023 – 2026</span>
              </div>
              <div className="text-[10.5px] text-zinc-400 mt-0.5">Study of narrative structures, rhetoric, linguistic rhythms, and audience psychology.</div>
            </div>
          </div>

          {/* 04: Technical Toolbox */}
          <div className="space-y-2">
            <div className="text-xs font-bold text-sky-400 tracking-wider flex items-center gap-2 border-b border-zinc-800/80 pb-1">
              <span>04 // TECHNICAL_TOOLBOX</span>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-[10.5px]">
              <div className="p-2.5 bg-zinc-900/60 border border-zinc-800 rounded-lg space-y-1">
                <strong className="text-amber-300">LANGUAGES & FRONTEND:</strong>
                <p className="text-zinc-400">Python, TypeScript, JavaScript, React, Next.js, HTML5, CSS3, Tailwind CSS</p>
              </div>
              <div className="p-2.5 bg-zinc-900/60 border border-zinc-800 rounded-lg space-y-1">
                <strong className="text-amber-300">SYSTEMS & MEDIA:</strong>
                <p className="text-zinc-400">Remotion (React Video), FFmpeg, Whisper AI, Node.js, Web Audio API, Webhooks</p>
              </div>
            </div>
          </div>

        </div>

        {/* Modal Footer */}
        <div className="px-6 py-3 bg-zinc-900/90 border-t border-zinc-800 flex justify-between items-center text-[11px] font-mono text-zinc-500">
          <span>Press ESC or red traffic light to close</span>
          <button
            onClick={onClose}
            className="px-3 py-1 rounded-md bg-zinc-800 hover:bg-zinc-700 text-zinc-300 font-mono transition cursor-pointer"
          >
            :q [Quit]
          </button>
        </div>
      </div>
    </div>
  );
};
