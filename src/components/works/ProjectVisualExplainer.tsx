import React, { useState } from 'react';
import { Terminal, ExternalLink, Code2 } from 'lucide-react';
import { sounds } from '../layout/SoundEffects';
import { getAssetUrl } from '../../utils/assets';

interface ProjectVisualExplainerProps {
  projectId: string;
  showcaseUrl?: string;
}

export const ProjectVisualExplainer: React.FC<ProjectVisualExplainerProps> = ({ projectId, showcaseUrl }) => {
  // State for interactive features
  const [selectedHookTab, setSelectedHookTab] = useState<string>('gap');

  return (
    <div className="w-full my-8 rounded-2xl bg-zinc-950 border border-zinc-800/90 shadow-xl overflow-hidden select-text text-zinc-100">
      {/* Top Window Bar */}
      <div className="px-4 py-3 bg-zinc-900/90 border-b border-zinc-800 flex items-center justify-between flex-wrap gap-2">
        <div className="flex items-center gap-2">
          <div className="flex items-center gap-1.5">
            <span className="w-2.5 h-2.5 rounded-full bg-rose-500/80"></span>
            <span className="w-2.5 h-2.5 rounded-full bg-amber-500/80"></span>
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/80"></span>
          </div>
          <span className="text-xs font-mono text-zinc-400 ml-2 font-medium">
            system_visual_breakdown.view
          </span>
        </div>

        <div className="flex items-center gap-2">
          <span className="px-2.5 py-0.5 rounded-full bg-purple-500/10 border border-purple-500/30 text-purple-300 text-[10px] font-mono">
            Interactive Architecture
          </span>
          {showcaseUrl && (
            <a
              href={getAssetUrl(showcaseUrl)}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => sounds.click()}
              className="text-[11px] font-mono text-zinc-400 hover:text-white flex items-center gap-1 transition-colors"
              title="Open full page visualizer"
            >
              <span>Full Screen</span>
              <ExternalLink className="w-3 h-3" />
            </a>
          )}
        </div>
      </div>

      {/* Project-Specific Visual Explainer Content */}
      <div className="p-4 sm:p-6 lg:p-8 space-y-6">

        {/* 1. INSTAGRAM SECOND BRAIN */}
        {projectId === 'instagram-second-brain' && (
          <div className="space-y-6">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
              {/* Terminal View */}
              <div className="lg:col-span-7 bg-zinc-900/80 border border-zinc-800/90 rounded-xl p-4 sm:p-5 space-y-3 font-mono text-xs">
                <div className="flex items-center justify-between text-[11px] text-zinc-500 border-b border-zinc-800 pb-2">
                  <div className="flex items-center gap-1.5 text-zinc-400">
                    <Terminal className="w-3.5 h-3.5 text-purple-400" />
                    <span>~/pipeline/reel-ingest.py</span>
                  </div>
                  <span>WHISPER · 48kHz</span>
                </div>
                <div className="space-y-1.5 text-zinc-300 leading-relaxed text-[11.5px]">
                  <p className="text-zinc-500">$ python3 ingest_reel.py --url instagram.com/reel/C8x9Y2...</p>
                  <p className="text-purple-400">✔ Audio extracted from MP4 stream [00:48s, 25fps]</p>
                  <p className="text-sky-400">✔ Transcribing with Whisper (word-level timestamps)...</p>
                  <p className="text-emerald-400">✔ Detected 4 segments: Hook, Setup, Paradox, Callout</p>
                  <p className="text-amber-300">✔ Extracted triggers: #PatternInterrupt #StatusQuoRejection</p>
                  <p className="text-zinc-200">✔ Generated Obsidian note: <span className="text-purple-300 underline">Vault/Reels/2026-founder-dna.md</span></p>
                </div>

                <div className="pt-3 border-t border-zinc-800 grid grid-cols-3 gap-2 text-center">
                  <div className="p-2 rounded-lg bg-zinc-950/60 border border-zinc-800/80">
                    <div className="text-sm font-bold text-white font-mono">1.8s</div>
                    <div className="text-[9px] text-zinc-500 uppercase">Parse Latency</div>
                  </div>
                  <div className="p-2 rounded-lg bg-zinc-950/60 border border-zinc-800/80">
                    <div className="text-sm font-bold text-purple-400 font-mono">500+</div>
                    <div className="text-[9px] text-zinc-500 uppercase">Reels Ingested</div>
                  </div>
                  <div className="p-2 rounded-lg bg-zinc-950/60 border border-zinc-800/80">
                    <div className="text-sm font-bold text-emerald-400 font-mono">200+</div>
                    <div className="text-[9px] text-zinc-500 uppercase">Linked Nodes</div>
                  </div>
                </div>
              </div>

              {/* Obsidian Card View */}
              <div className="lg:col-span-5 bg-gradient-to-b from-purple-950/25 to-zinc-900 border border-purple-500/30 rounded-xl p-4 sm:p-5 flex flex-col justify-between space-y-4 shadow-lg">
                <div className="space-y-3">
                  <div className="flex items-center justify-between text-xs font-mono text-purple-300">
                    <span>OBSIDIAN NODE #419</span>
                    <span className="px-2 py-0.5 rounded bg-purple-500/20 text-purple-300 border border-purple-500/40 text-[10px]">
                      Knowledge Card
                    </span>
                  </div>

                  <h4 className="text-sm sm:text-base font-bold text-white leading-snug">
                    "The Problem Is Not Generating More Content. It Is Preserving the Person."
                  </h4>

                  <div className="space-y-2 text-xs">
                    <div className="p-2 rounded-lg bg-zinc-950/70 border border-zinc-800 text-zinc-300">
                      <strong className="text-purple-400 font-mono">Hook Type:</strong> Negative Parallelism + Contrarian
                    </div>
                    <div className="p-2 rounded-lg bg-zinc-950/70 border border-zinc-800 text-zinc-300">
                      <strong className="text-purple-400 font-mono">Retention:</strong> Sentence cadence speedup at sec 0:03
                    </div>
                    <div className="p-2 rounded-lg bg-zinc-950/70 border border-zinc-800 text-zinc-300">
                      <strong className="text-purple-400 font-mono">Links:</strong> [[Founder DNA]] · [[Attention Mechanics]]
                    </div>
                  </div>
                </div>

                <div className="pt-2 border-t border-zinc-800/80 flex items-center justify-between text-[11px] font-mono text-zinc-400">
                  <span>Synced to Graph</span>
                  <span className="text-purple-400 font-bold">2.4MB Vault</span>
                </div>
              </div>
            </div>

            {/* Hook Taxonomy Explorer */}
            <div className="p-4 rounded-xl bg-zinc-900/60 border border-zinc-800/80 space-y-3">
              <div className="flex items-center justify-between text-xs font-mono">
                <span className="text-zinc-400 font-semibold uppercase tracking-wider">Hook Pattern Library</span>
                <span className="text-purple-400">Interactive Selector</span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                <button
                  type="button"
                  onClick={() => { sounds.click(); setSelectedHookTab('gap'); }}
                  className={`p-3 rounded-lg text-left transition-all cursor-pointer border ${
                    selectedHookTab === 'gap'
                      ? 'bg-purple-950/40 border-purple-500/60 shadow-xs'
                      : 'bg-zinc-950/60 border-zinc-800 hover:border-zinc-700'
                  }`}
                >
                  <div className="flex justify-between items-center text-xs font-mono text-purple-400 mb-1">
                    <span>#CuriosityGap</span>
                    <span>84 Nodes</span>
                  </div>
                  <p className="text-[11px] text-zinc-300 leading-relaxed">
                    Opens with an unanswered tension within the first 1.8 seconds.
                  </p>
                </button>

                <button
                  type="button"
                  onClick={() => { sounds.click(); setSelectedHookTab('reframe'); }}
                  className={`p-3 rounded-lg text-left transition-all cursor-pointer border ${
                    selectedHookTab === 'reframe'
                      ? 'bg-purple-950/40 border-purple-500/60 shadow-xs'
                      : 'bg-zinc-950/60 border-zinc-800 hover:border-zinc-700'
                  }`}
                >
                  <div className="flex justify-between items-center text-xs font-mono text-purple-400 mb-1">
                    <span>#ContrarianReframe</span>
                    <span>62 Nodes</span>
                  </div>
                  <p className="text-[11px] text-zinc-300 leading-relaxed">
                    Challenges conventional advice in the opening sentence.
                  </p>
                </button>

                <button
                  type="button"
                  onClick={() => { sounds.click(); setSelectedHookTab('pacing'); }}
                  className={`p-3 rounded-lg text-left transition-all cursor-pointer border ${
                    selectedHookTab === 'pacing'
                      ? 'bg-purple-950/40 border-purple-500/60 shadow-xs'
                      : 'bg-zinc-950/60 border-zinc-800 hover:border-zinc-700'
                  }`}
                >
                  <div className="flex justify-between items-center text-xs font-mono text-purple-400 mb-1">
                    <span>#TactilePacing</span>
                    <span>110 Nodes</span>
                  </div>
                  <p className="text-[11px] text-zinc-300 leading-relaxed">
                    Visual subtitle splits synchronized to vocal pauses under 200ms.
                  </p>
                </button>
              </div>
            </div>
          </div>
        )}

        {/* 2. CREATOR SKILL FILES */}
        {projectId === 'creator-skill-files' && (
          <div className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Left: Raw Material */}
              <div className="bg-zinc-900/80 border border-zinc-800/90 rounded-xl p-4 sm:p-5 space-y-3">
                <div className="text-xs font-mono text-zinc-400 font-semibold uppercase tracking-wider mb-2">
                  Raw Creator Material
                </div>
                <div className="p-3 bg-zinc-950/70 border-l-2 border-emerald-400 rounded-r-lg text-xs text-zinc-300 italic space-y-1">
                  <p>"Look, I genuinely believe people are tired of polished content. The imperfection is what makes it real."</p>
                  <div className="text-[10px] text-zinc-500 font-mono not-italic">SOURCE: Unscripted podcast, ep. 47 (14:22)</div>
                </div>
                <div className="p-3 bg-zinc-950/70 border-l-2 border-emerald-400 rounded-r-lg text-xs text-zinc-300 italic space-y-1">
                  <p>"I keep coming back to this idea that being remembered matters more than going viral."</p>
                  <div className="text-[10px] text-zinc-500 font-mono not-italic">SOURCE: Voice memo, Aug 2026</div>
                </div>
                <div className="p-3 bg-zinc-950/70 border-l-2 border-emerald-400 rounded-r-lg text-xs text-zinc-300 italic space-y-1">
                  <p>"The hook earns you three seconds. The rest of the video has to deserve it."</p>
                  <div className="text-[10px] text-zinc-500 font-mono not-italic">SOURCE: Tweet thread, Jul 2026</div>
                </div>
              </div>

              {/* Right: Structured Skill File */}
              <div className="bg-gradient-to-b from-emerald-950/20 to-zinc-900 border border-emerald-500/30 rounded-xl p-4 sm:p-5 space-y-4">
                <div className="text-xs font-mono text-emerald-400 font-semibold uppercase tracking-wider mb-2">
                  Structured Skill File Output
                </div>

                <div className="space-y-1.5 text-xs">
                  <div className="text-[11px] font-mono text-emerald-300 font-semibold">CORE BELIEFS:</div>
                  <ul className="text-zinc-300 space-y-1 pl-3 list-disc text-[11px] leading-relaxed">
                    <li>Imperfection &gt; artificial polish</li>
                    <li>Being remembered &gt; going viral</li>
                    <li>Originality = recombination of 50 influences</li>
                  </ul>
                </div>

                <div className="space-y-1.5">
                  <div className="text-[11px] font-mono text-emerald-300 font-semibold">VOCABULARY FINGERPRINT:</div>
                  <div className="flex flex-wrap gap-1.5">
                    {['genuinely', 'I keep coming back to', 'look,', 'the thing is', 'like,'].map((w, idx) => (
                      <span key={idx} className="px-2 py-0.5 rounded bg-emerald-500/15 border border-emerald-500/30 text-emerald-200 text-[10px] font-mono">
                        {w}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="space-y-1.5">
                  <div className="text-[11px] font-mono text-rose-300 font-semibold">BANNED CLICHES:</div>
                  <div className="flex flex-wrap gap-1.5">
                    {["let's dive in", 'game-changer', 'at its core', 'the real question is'].map((w, idx) => (
                      <span key={idx} className="px-2 py-0.5 rounded bg-rose-500/10 border border-rose-500/30 text-rose-300/80 text-[10px] font-mono line-through">
                        {w}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Sentence Rhythm Chart */}
            <div className="p-4 rounded-xl bg-zinc-900/60 border border-zinc-800/80 space-y-3">
              <div className="flex items-center justify-between text-xs font-mono text-zinc-400">
                <span>SENTENCE LENGTH DISTRIBUTION (AVG 12.4 WORDS)</span>
                <span className="text-emerald-400">Cadence Pattern</span>
              </div>
              <div className="flex items-end gap-1 sm:gap-1.5 h-14 px-2 bg-zinc-950/70 rounded-lg p-2 border border-zinc-800">
                {[35, 60, 25, 90, 15, 45, 100, 30, 70, 20, 55, 40, 85, 22, 65, 18, 48, 75, 28, 50].map((h, i) => (
                  <div
                    key={i}
                    style={{ height: `${h}%` }}
                    className="flex-1 bg-gradient-to-t from-emerald-600 to-emerald-400 rounded-xs transition-opacity hover:opacity-75"
                    title={`Sentence ${i + 1}: ${Math.round(h * 0.25)} words`}
                  ></div>
                ))}
              </div>
              <div className="grid grid-cols-4 gap-2 pt-1 text-center font-mono">
                <div className="p-2 rounded bg-zinc-950/60 border border-zinc-800"><div className="text-xs font-bold text-emerald-400">10</div><div className="text-[9px] text-zinc-500">Vectors</div></div>
                <div className="p-2 rounded bg-zinc-950/60 border border-zinc-800"><div className="text-xs font-bold text-white">12.4</div><div className="text-[9px] text-zinc-500">Avg Words</div></div>
                <div className="p-2 rounded bg-zinc-950/60 border border-zinc-800"><div className="text-xs font-bold text-white">3:1</div><div className="text-[9px] text-zinc-500">Short:Long</div></div>
                <div className="p-2 rounded bg-zinc-950/60 border border-zinc-800"><div className="text-xs font-bold text-emerald-400">0</div><div className="text-[9px] text-zinc-500">Cliches</div></div>
              </div>
            </div>
          </div>
        )}

        {/* 3. AI EDITING PIPELINE */}
        {projectId === 'ai-editing-pipeline' && (
          <div className="space-y-6">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
              {/* Code View */}
              <div className="lg:col-span-7 bg-zinc-900/90 border border-zinc-800 rounded-xl p-4 sm:p-5 space-y-3 font-mono text-xs">
                <div className="flex items-center justify-between text-[11px] text-zinc-500 border-b border-zinc-800 pb-2">
                  <div className="flex items-center gap-1.5 text-zinc-400">
                    <Code2 className="w-3.5 h-3.5 text-sky-400" />
                    <span>src/components/KineticSplitCaption.tsx</span>
                  </div>
                  <span>REACT REMOTION · 60 FPS</span>
                </div>

                <pre className="p-3 bg-zinc-950/90 rounded-lg border border-zinc-800/80 text-[11px] leading-relaxed overflow-x-auto text-zinc-300">
                  <span className="text-purple-400">export const</span> <span className="text-sky-400">KineticCaption</span> = ({`{ words, frame }`}) =&gt; &#123;{'\n'}
                  {'  '}<span className="text-purple-400">const</span> bounce = <span className="text-sky-300">spring</span>({`{ frame, fps: 60, config: { damping: 12 } }`});{'\n'}
                  {'  '}<span className="text-purple-400">return</span> ({'\n'}
                  {'    '}&lt;<span className="text-blue-400">AbsoluteFill</span> style=&#123;{`{ justifyContent: 'center' }`}&#125;&gt;{'\n'}
                  {'      '}&lt;<span className="text-blue-400">div</span> className=<span className="text-amber-300">"text-4xl font-black"</span>&gt;{'\n'}
                  {'        '}&lt;<span className="text-blue-400">span</span> style=&#123;{`{ transform: \`scale(\${1 + bounce * 0.08})\` }`}&#125;&gt;{'\n'}
                  {'          '}BEING REMEMBERED &gt; GOING VIRAL{'\n'}
                  {'        '}&lt;/<span className="text-blue-400">span</span>&gt;{'\n'}
                  {'      '}&lt;/<span className="text-blue-400">div</span>&gt;{'\n'}
                  {'    '}&lt;/<span className="text-blue-400">AbsoluteFill</span>&gt;{'\n'}
                  {'  '});{'\n'}
                  &#125;;
                </pre>

                <div className="p-2.5 rounded bg-zinc-950 border border-zinc-800 text-[11px] text-sky-400 flex justify-between items-center">
                  <span>$ npx remotion render RootComposition --props=./transcript.json</span>
                  <span className="text-zinc-500 text-[10px]">2.4x REALTIME</span>
                </div>
              </div>

              {/* Rendered Preview Mockup */}
              <div className="lg:col-span-5 bg-gradient-to-b from-sky-950/25 to-zinc-900 border border-sky-500/30 rounded-xl p-4 sm:p-5 flex flex-col justify-between space-y-4 shadow-lg">
                <div className="space-y-3">
                  <div className="flex items-center justify-between text-xs font-mono text-sky-300">
                    <span>REMOTION COMPOSITION</span>
                    <span className="px-2 py-0.5 rounded bg-sky-500/20 text-sky-300 border border-sky-500/40 text-[10px]">
                      Frame #142
                    </span>
                  </div>

                  <div className="w-full aspect-[9/10] bg-black rounded-lg border border-zinc-800 flex flex-col items-center justify-center p-4 text-center relative shadow-inner">
                    <div className="text-[10px] font-mono text-zinc-500 absolute top-2.5 left-2.5">00:02.36</div>
                    <div className="text-[10px] font-mono text-sky-400 absolute top-2.5 right-2.5">60 FPS</div>

                    <div className="space-y-1">
                      <div className="text-[10px] font-mono uppercase tracking-widest text-zinc-500">DANIEL DALEN STYLE</div>
                      <div className="text-lg sm:text-xl font-black text-white tracking-tight">
                        <span className="text-zinc-500">Being </span>
                        <span className="text-white bg-sky-500/30 px-1 py-0.5 rounded border-b-2 border-sky-400">remembered</span>
                        <span className="text-zinc-300"> &gt; viral</span>
                      </div>
                    </div>

                    <div className="absolute bottom-2.5 flex items-center gap-1.5 text-[10px] font-mono text-sky-400">
                      <span className="w-1.5 h-1.5 rounded-full bg-sky-400 animate-ping"></span>
                      <span>Audio Sync: ±4ms</span>
                    </div>
                  </div>
                </div>

                <div className="pt-2 border-t border-zinc-800/80 flex items-center justify-between text-[11px] font-mono text-zinc-400">
                  <span>Headless Rendering</span>
                  <span className="text-sky-400 font-bold">100% Code-Driven</span>
                </div>
              </div>
            </div>

            {/* Pipeline Step Cards */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
              {[
                { step: '01', title: 'Audio Intake', desc: '48kHz extraction from voice memos' },
                { step: '02', title: 'Whisper Timings', desc: 'Millisecond word boundary tokens' },
                { step: '03', title: 'Remotion Props', desc: 'Dynamic JSON keyframes generated' },
                { step: '04', title: 'Headless Render', desc: 'FFmpeg bundles MP4 in seconds' }
              ].map((s, i) => (
                <div key={i} className="p-3 bg-zinc-900/60 border border-zinc-800 rounded-lg space-y-1">
                  <div className="text-[10px] font-mono text-sky-400 font-bold">STEP {s.step}</div>
                  <div className="text-xs font-semibold text-white">{s.title}</div>
                  <div className="text-[11px] text-zinc-400">{s.desc}</div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* 4. WHATSAPP AI AUTOMATION */}
        {projectId === 'whatsapp-ai-automation' && (
          <div className="space-y-6">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
              {/* WhatsApp Simulator */}
              <div className="lg:col-span-6 bg-[#0b141a] border border-zinc-800 rounded-xl overflow-hidden shadow-xl flex flex-col">
                <div className="bg-[#202c33] px-3.5 py-2.5 border-b border-[#2a3942] flex items-center justify-between">
                  <div className="flex items-center gap-2.5">
                    <div className="w-7 h-7 rounded-full bg-emerald-500 text-black font-bold text-xs flex items-center justify-center">
                      28°
                    </div>
                    <div>
                      <div className="text-xs font-semibold text-[#e9edef]">28 Degree Salon Bot</div>
                      <div className="text-[10px] text-[#8696a0]">Verified Business Account</div>
                    </div>
                  </div>
                  <span className="text-[10px] font-mono text-emerald-400">● Live Webhook</span>
                </div>

                <div className="p-4 space-y-3 bg-[#0b141a] min-h-[260px] text-xs">
                  <div className="max-w-[85%] p-2.5 rounded-lg bg-[#005c4b] text-[#e9edef] ml-auto rounded-tr-none space-y-0.5">
                    <p>Hi, do you have haircut & beard slots open this evening at South Ex branch?</p>
                    <div className="text-[9px] text-[#aebac1]/60 text-right">6:42 PM</div>
                  </div>

                  <div className="max-w-[88%] p-2.5 rounded-lg bg-[#202c33] text-[#d1d7db] rounded-tl-none space-y-2">
                    <p>Hey there! 👋 Yes, we have 2 openings at <strong>South Ex II</strong> today:</p>
                    <div className="p-2 rounded bg-[#0b141a]/60 border border-[#2a3942] space-y-1 text-[11px]">
                      <div className="flex justify-between text-zinc-300">
                        <span>1. 7:15 PM with Rahul</span>
                        <strong className="text-emerald-400">₹850</strong>
                      </div>
                      <div className="flex justify-between text-zinc-300">
                        <span>2. 8:00 PM with Vikram</span>
                        <strong className="text-emerald-400">₹850</strong>
                      </div>
                    </div>
                    <p className="text-[11px] text-zinc-400">Reply with <strong>1</strong> or <strong>2</strong> to confirm instantly!</p>
                    <div className="text-[9px] text-zinc-500 text-right">&lt; 1.2s response</div>
                  </div>
                </div>
              </div>

              {/* State Machine Diagram */}
              <div className="lg:col-span-6 bg-zinc-900/80 border border-zinc-800/90 rounded-xl p-4 sm:p-5 flex flex-col justify-between space-y-4">
                <div className="space-y-3">
                  <div className="text-xs font-mono text-emerald-400 font-semibold uppercase tracking-wider">
                    Conversational State Machine
                  </div>

                  <div className="space-y-2.5 text-xs">
                    <div className="p-2.5 rounded-lg bg-zinc-950/80 border border-emerald-500/30 space-y-1">
                      <div className="flex justify-between font-mono text-[11px]">
                        <span className="text-emerald-400 font-semibold">01 · Intent Classifier</span>
                        <span className="text-zinc-500">280ms</span>
                      </div>
                      <p className="text-zinc-300 text-[11px]">Extracts service (Hair+Beard), branch (South Ex), and time window (Evening).</p>
                    </div>

                    <div className="p-2.5 rounded-lg bg-zinc-950/80 border border-emerald-500/30 space-y-1">
                      <div className="flex justify-between font-mono text-[11px]">
                        <span className="text-emerald-400 font-semibold">02 · Slot & Pricing Query</span>
                        <span className="text-zinc-500">140ms</span>
                      </div>
                      <p className="text-zinc-300 text-[11px]">Deterministic database check to prevent hallucinated prices or double-booking.</p>
                    </div>

                    <div className="p-2.5 rounded-lg bg-zinc-950/80 border border-emerald-500/30 space-y-1">
                      <div className="flex justify-between font-mono text-[11px]">
                        <span className="text-emerald-400 font-semibold">03 · Booking Dispatch</span>
                        <span className="text-zinc-500">190ms</span>
                      </div>
                      <p className="text-zinc-300 text-[11px]">Generates booking token and alerts branch manager on WhatsApp Webhook.</p>
                    </div>
                  </div>
                </div>

                <div className="pt-3 border-t border-zinc-800 grid grid-cols-3 gap-2 text-center font-mono">
                  <div className="p-2 rounded bg-zinc-950/60 border border-zinc-800"><div className="text-xs font-bold text-emerald-400">&lt;2s</div><div className="text-[9px] text-zinc-500">Avg Latency</div></div>
                  <div className="p-2 rounded bg-zinc-950/60 border border-zinc-800"><div className="text-xs font-bold text-white">24/7</div><div className="text-[9px] text-zinc-500">Uptime</div></div>
                  <div className="p-2 rounded bg-zinc-950/60 border border-zinc-800"><div className="text-xs font-bold text-emerald-400">1 Night</div><div className="text-[9px] text-zinc-500">Build</div></div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* 5. VOICE ENHANCEMENT PIPELINE */}
        {projectId === 'voice-enhancement-system' && (
          <div className="space-y-6">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
              {/* Waveform Comparison */}
              <div className="lg:col-span-7 bg-zinc-900/80 border border-zinc-800/90 rounded-xl p-4 sm:p-5 space-y-4">
                <div className="text-xs font-mono text-amber-400 font-semibold uppercase tracking-wider">
                  Audio Frequency Spectrum & Waveform
                </div>

                {/* Noisy Waveform */}
                <div className="p-3 rounded-lg bg-zinc-950 border border-zinc-800 space-y-2">
                  <div className="flex justify-between text-[11px] font-mono">
                    <span className="text-rose-400">RAW INPUT (Phone Voice Memo + Room Noise)</span>
                    <span className="text-zinc-500">SNR: 12dB</span>
                  </div>
                  <div className="flex items-center gap-1 h-10 px-1">
                    {[45, 75, 90, 60, 85, 100, 70, 80, 55, 95, 80, 65, 90, 70, 85, 50, 65, 85, 40, 75].map((h, i) => (
                      <div key={i} style={{ height: `${h}%` }} className="flex-1 bg-rose-500/60 rounded-xs"></div>
                    ))}
                  </div>
                </div>

                {/* Cleaned Waveform */}
                <div className="p-3 rounded-lg bg-zinc-950 border border-zinc-800 space-y-2">
                  <div className="flex justify-between text-[11px] font-mono">
                    <span className="text-amber-400">ENHANCED OUTPUT (Spectral Subtracted + Vocal Formant EQ)</span>
                    <span className="text-amber-400 font-bold">SNR: 42dB (+30dB)</span>
                  </div>
                  <div className="flex items-center gap-1 h-10 px-1">
                    {[15, 65, 80, 25, 75, 90, 35, 70, 20, 85, 65, 15, 80, 30, 70, 15, 60, 75, 20, 65].map((h, i) => (
                      <div key={i} style={{ height: `${h}%` }} className="flex-1 bg-amber-400 rounded-xs"></div>
                    ))}
                  </div>
                </div>

                {/* CLI Command */}
                <div className="p-2.5 rounded bg-zinc-950 border border-zinc-800 text-[11px] font-mono text-zinc-300 space-y-1">
                  <div className="text-zinc-500">$ python3 enhance.py --input memo_0814.m4a --target podcast</div>
                  <div className="text-amber-400">✔ Noise sampled: -48dB ambient floor (AC hum removed)</div>
                  <div className="text-amber-400">✔ Formant presence boosted @ 2.8kHz (+3.5dB vocal warmth)</div>
                  <div className="text-zinc-200">✔ Rendered: /exports/memo_0814_clean.wav [0.8s runtime]</div>
                </div>
              </div>

              {/* Processing Chain Steps */}
              <div className="lg:col-span-5 bg-gradient-to-b from-amber-950/25 to-zinc-900 border border-amber-500/30 rounded-xl p-4 sm:p-5 flex flex-col justify-between space-y-4 shadow-lg">
                <div className="space-y-3">
                  <div className="text-xs font-mono text-amber-300 font-semibold uppercase tracking-wider">
                    Audio Processing Chain
                  </div>

                  <div className="space-y-2.5 text-xs">
                    <div className="p-2.5 rounded-lg bg-zinc-950/80 border border-zinc-800 space-y-0.5">
                      <div className="text-[10px] font-mono text-amber-400 font-bold">01 · NOISE PROFILING</div>
                      <div className="font-semibold text-white">Spectral Subtraction</div>
                      <p className="text-zinc-400 text-[11px]">Subtracts steady ambient room hum without muffling consonants.</p>
                    </div>

                    <div className="p-2.5 rounded-lg bg-zinc-950/80 border border-zinc-800 space-y-0.5">
                      <div className="text-[10px] font-mono text-amber-400 font-bold">02 · FORMANT PRESENCE</div>
                      <div className="font-semibold text-white">Vocal EQ Boost (1.5kHz - 4kHz)</div>
                      <p className="text-zinc-400 text-[11px]">Brings speech forward so it cuts through small phone speakers.</p>
                    </div>

                    <div className="p-2.5 rounded-lg bg-zinc-950/80 border border-zinc-800 space-y-0.5">
                      <div className="text-[10px] font-mono text-amber-400 font-bold">03 · DYNAMIC COMPRESSOR</div>
                      <div className="font-semibold text-white">-14 LUFS Leveling</div>
                      <p className="text-zinc-400 text-[11px]">Evens out whisper-to-loud jumps into clean vocal levels.</p>
                    </div>
                  </div>
                </div>

                <div className="pt-3 border-t border-zinc-800 grid grid-cols-3 gap-2 text-center font-mono">
                  <div className="p-2 rounded bg-zinc-950/60 border border-zinc-800"><div className="text-xs font-bold text-amber-400">1-Click</div><div className="text-[9px] text-zinc-500">Run</div></div>
                  <div className="p-2 rounded bg-zinc-950/60 border border-zinc-800"><div className="text-xs font-bold text-white">90%</div><div className="text-[9px] text-zinc-500">Time Saved</div></div>
                  <div className="p-2 rounded bg-zinc-950/60 border border-zinc-800"><div className="text-xs font-bold text-amber-400">&lt;1s</div><div className="text-[9px] text-zinc-500">Process</div></div>
                </div>
              </div>
            </div>
          </div>
        )}

      </div>
    </div>
  );
};
