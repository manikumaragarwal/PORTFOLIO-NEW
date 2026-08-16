import { Project } from '../types';

export const PROJECTS: Project[] = [
  {
    id: 'instagram-second-brain',
    slug: 'instagram-second-brain',
    title: 'Instagram → Second Brain',
    tagline: 'Turning saved Reels into structured knowledge graphs inside Obsidian (ideas → hooks → formats → observations).',
    clientOrContext: 'Knowledge Systems',
    year: '2026',
    statusBadge: {
      text: 'BUILDING',
      type: 'building'
    },
    previewImage: '/images/reel_obsidian_pipeline.gif',
    heroImage: '/images/reel_obsidian_pipeline.gif',
    githubUrl: 'https://github.com/manikumaragarwal/REEL-Knowledge-System',
    tags: ['Content Intelligence', 'Obsidian', 'Knowledge Graph', 'Reverse-Engineering'],
    role: 'System Architect & Content Researcher',
    timeline: 'Ongoing Personal Project',
    team: ['Manish Agarwal'],
    tools: ['Obsidian', 'Python', 'Whisper AI', 'Claude'],
    tldr: 'I got tired of saving content I would never look at again. I save a lot of Reels, but saving something doesn\'t mean learning from it. I built a system that takes saved Instagram content and turns it into structured knowledge inside Obsidian: ideas → hooks → formats → observations → relationships.',
    background: {
      title: "The Graveyard of Saved Reels",
      content: [
        "Like most people studying short-form content, I saved hundreds of Reels. The problem was that saving something doesn't mean you've actually learned from it or retained the underlying mechanics.",
        "Bookmark folders are passive graveyards. I wanted an active intelligence system where every piece of saved content is atomized into actionable components and linked with everything else I've collected."
      ],
      callout: {
        stat: '500+ Reels',
        label: 'ingested, transcribed, and structured into interconnected hook & retention nodes.'
      }
    },
    problem: {
      title: "Passive Bookmarking vs. Active Content Intelligence",
      content: [
        "A 30-second Reel contains multiple layers: visual hook, verbal hook, pacing speed, sentence cadence, storytelling arc, and call-to-action.",
        "When you only save a bookmark, you lose all the structural patterns that made the video work."
      ],
      painPoints: [
        'Zero retention from passive Instagram bookmarks',
        'Inability to search across saved videos by hook type or retention tactic',
        'Disjointed understanding of why specific formats perform',
        'Lack of cross-pollination between different creators and niches'
      ]
    },
    process: {
      title: "Building the Ingestion & Breakdown Pipeline",
      description: "A multi-stage pipeline that extracts audio, transcribes verbal scripts, tags visual hooks, and generates interconnected markdown notes in Obsidian.",
      steps: [
        {
          phase: 'Step 1: Automated Ingestion & Transcription',
          details: 'Saved video links are processed through Whisper AI to extract word-level transcripts and timestamped sentence cadences.'
        },
        {
          phase: 'Step 2: Structural Decomposition',
          details: 'The script is atomized into 5 distinct vectors: Hook Statement, Core Insight, Format Mechanics, Retention Tactic, and Creator Quirks.'
        },
        {
          phase: 'Step 3: Graph Linking in Obsidian',
          details: 'Every note automatically links to related hook patterns, emotional triggers, and recurring storytelling frameworks across my entire second brain.'
        }
      ]
    },
    finalProduct: {
      title: "The Content Intelligence Engine",
      description: "A living Obsidian vault that grows more valuable every time I analyze a video.",
      highlights: [
        {
          title: 'Hook Taxonomy Library',
          description: 'Instant searchable database of 20+ hook structures categorized by psychological curiosity gaps.',
          badge: 'Pattern Library'
        },
        {
          title: 'Bi-directional Story Links',
          description: 'Links raw creator observations to larger communication philosophies and production blueprints.',
          badge: 'Knowledge Graph'
        },
        {
          title: 'Recombination Engine',
          description: 'Enables cross-pollinating a hook formula from finance with a storytelling cadence from filmmaking.',
          badge: 'Idea Synthesis'
        }
      ]
    },
    impact: {
      title: "Key Takeaways & Growth",
      metrics: [
        { value: '10x', label: 'Faster ideation & scripting speed' },
        { value: '200+', label: 'Interlinked content pattern nodes' },
        { value: '100%', label: 'Retention of analyzed content mechanics' }
      ],
      quote: {
        text: "The goal isn't to build a bigger bookmark folder. It's to build a content intelligence system that gets more useful every single time I use it.",
        author: 'Manish Agarwal'
      }
    }
  },
  {
    id: 'creator-skill-files',
    slug: 'creator-skill-files',
    title: 'Creator Skill Files',
    tagline: 'What if you could turn a creator\'s unique voice, sentence rhythm, and quirks into a system?',
    clientOrContext: 'Voice DNA Architecture',
    year: '2026',
    statusBadge: {
      text: 'SHIPPED',
      type: 'shipped'
    },
    previewImage: '/images/creator_skill_files.gif',
    heroImage: '/images/creator_skill_files.gif',
    githubUrl: 'https://github.com/manikumaragarwal/OBSIDIAN-NOTES',
    tags: ['AI Prompt Engineering', 'Voice DNA', 'Pattern Recognition', 'Creator Systems'],
    role: 'System Designer & Content Analyst',
    timeline: '2025 - Present',
    team: ['Manish Agarwal'],
    tools: ['Claude', 'Python', 'Linguistic Rhythm Analysis', 'Prompt Architecture'],
    tldr: 'I started experimenting with creating "skill files" for individual creators. Not "write like this person", but something much deeper: recurring hook structures, sentence length and rhythm, vocabulary, core beliefs, and mannerisms. The goal isn\'t to clone someone\'s content—it\'s to understand what makes their content feel like them.',
    background: {
      title: "Beyond Superficial AI Persona Prompts",
      content: [
        "Most AI-generated creator content feels sterile because prompts rely on shallow adjectives: 'sound energetic and casual.'",
        "True creator identity lives in sub-surface linguistic habits: average sentence length, comma cadence, negative parallelisms, recurring vocabulary, and contrarian core beliefs."
      ],
      callout: {
        stat: '10 Vectors',
        label: 'mapped per creator: hooks, pacing, sentence length, vocabulary, core beliefs, stories, visual patterns, and quirks.'
      }
    },
    problem: {
      title: "The Homogenization of AI Content",
      content: [
        "When AI is used generically, every creator starts sounding like the exact same generic internet personality.",
        "We needed a structured methodology to preserve the authentic human soul while accelerating ideation and drafting."
      ],
      painPoints: [
        'Generic ChatGPT tone wiping out creator uniqueness',
        'Loss of idiosyncratic speaking cadence in AI drafts',
        'Lack of documented founder beliefs and core philosophies',
        'Inability for creative teams to scale production without diluting the founder\'s voice'
      ]
    },
    process: {
      title: "Extracting the Content DNA",
      description: "Analyzing hours of unscripted podcasts, videos, emails, and tweets to isolate unique linguistic signatures.",
      steps: [
        {
          phase: 'Phase 1: Deep Material Corpus Extraction',
          details: 'Gathered raw conversational audio, podcasts, and tweets to capture unvarnished vocabulary and speech rhythms.'
        },
        {
          phase: 'Phase 2: Linguistic Cadence Mapping',
          details: 'Measured sentence length distributions, rhetorical question frequencies, and transition phrases.'
        },
        {
          phase: 'Phase 3: Skill File Synthesis',
          details: 'Compiled structured, deterministic prompt files that encode belief hierarchies, contrarian angles, and banned clichés.'
        }
      ]
    },
    finalProduct: {
      title: "The Creator Skill File Framework",
      description: "A comprehensive markdown blueprint that guides AI tools to generate drafts indistinguishable from the creator's genuine thoughts.",
      highlights: [
        {
          title: 'Belief Hierarchy Engine',
          description: 'Identifies the hills the creator would die on, ensuring every script reinforces their worldview.',
          badge: 'Belief Matrix'
        },
        {
          title: 'Sentence Rhythm & Cadence Matrix',
          description: 'Enforces exact syllable rhythms and punctuation styles unique to the creator\'s speech pattern.',
          badge: 'Linguistic Rhythm'
        },
        {
          title: 'Anti-Trope Guardrails',
          description: 'Explicitly bans cliché AI transitional phrases and buzzwords to prevent artificial polish.',
          badge: 'Authenticity Filter'
        }
      ]
    },
    impact: {
      title: "Results & Applications",
      metrics: [
        { value: '100%', label: 'Preservation of creator voice consistency' },
        { value: '0%', label: 'Generic AI cliché phrases in output' },
        { value: '5x', label: 'Drafting turnaround for long-term content strategies' }
      ],
      quote: {
        text: "The goal isn't to clone someone's content. It's to understand what makes their content feel undeniably like them.",
        author: 'Manish Agarwal'
      }
    }
  },
  {
    id: 'ai-editing-pipeline',
    slug: 'ai-editing-pipeline',
    title: 'AI Editing Pipeline',
    tagline: 'Making short-form video editing programmable with Claude Code and Remotion.',
    clientOrContext: 'Remotion + Claude Code',
    year: '2026',
    statusBadge: {
      text: 'EXPERIMENTAL',
      type: 'building'
    },
    previewImage: '/images/ai_editing_pipeline.gif',
    heroImage: '/images/ai_editing_pipeline.gif',
    githubUrl: 'https://github.com/manikumaragarwal/subtitle-generation-pipeline',
    tags: ['Claude Code', 'Remotion', 'React Video', 'Programmable Motion'],
    role: 'Pipeline Developer & Editor',
    timeline: '2026',
    team: ['Manish Agarwal'],
    tools: ['Claude Code', 'Remotion', 'React', 'TypeScript', 'FFmpeg'],
    tldr: 'I wanted editing to become programmable. I\'ve been experimenting with Claude Code + Remotion to turn parts of short-form editing into repeatable systems. Instead of manually rebuilding subtitle styles, motion treatments, or visual callouts every time, I can describe what I want and let the system handle the implementation.',
    background: {
      title: "The Repetitive Toll of Short-Form Video Editing",
      content: [
        "Short-form video editing is filled with high-friction, repetitive micro-tasks: animating word-by-word subtitles, positioning zoom emphasis, timing sound cues, and rendering aspect ratios.",
        "I realized that editing doesn't have to be a manual timeline-scrubbing chore for every recurring visual pattern—it can be defined as code."
      ],
      callout: {
        stat: '100% Code',
        label: 'Video components rendered via React & Remotion driven by terminal instructions.'
      }
    },
    problem: {
      title: "Manual Timeline Dragging vs. Programmable Systems",
      content: [
        "Traditional NLEs (Premiere, CapCut) force you to manually recreate kinetic text keyframes, split-screen captions, and motion accents for every single project.",
        "What happens when AI stops being a tool that assists manual editing and becomes the underlying infrastructure your editing workflow runs on?"
      ],
      painPoints: [
        'Hours wasted recreating identical subtitle and kinetic caption treatments',
        'Inconsistent visual brand styling across multi-editor teams',
        'High latency between script ideation and initial video mockup render'
      ]
    },
    process: {
      title: "Architecting the Remotion + Claude Code Pipeline",
      description: "Connecting natural language instructions in the terminal to parametric Remotion video composition components.",
      steps: [
        {
          phase: 'Step 1: Parametric Remotion Components',
          details: 'Built reusable React components for Daniel Dalen style split-captions, dynamic kinetic emphasis, and audio visualizers.'
        },
        {
          phase: 'Step 2: Claude Code CLI Automation',
          details: 'Constructed custom CLI workflows where Claude Code parses transcript word timestamps and injects dynamic keyframe timings into code.'
        },
        {
          phase: 'Step 3: Headless Rendering',
          details: 'Automated high-speed headless rendering via FFmpeg & Remotion bundle pipelines directly from terminal commands.'
        }
      ]
    },
    finalProduct: {
      title: "Programmable Video Infrastructure",
      description: "A code-first video engine where motion design and subtitle treatments execute programmatically.",
      highlights: [
        {
          title: 'Kinetic Subtitle Engine',
          description: 'Automatically formats and highlights word-level sentence groupings with dynamic spring physics.',
          badge: 'Programmable Motion'
        },
        {
          title: 'Zero-Timeline Editing',
          description: 'Generate complete formatted video mockups from raw audio transcripts in seconds.',
          badge: 'Headless Render'
        }
      ]
    },
    impact: {
      title: "Production Speed & System Scaling",
      metrics: [
        { value: '75%', label: 'Reduction in repetitive subtitle animation time' },
        { value: '100%', label: 'Pixel-perfect typography and margin alignment' }
      ],
      quote: {
        text: "I'm interested in where this goes when AI stops being 'a tool that helps me edit' and becomes 'the infrastructure my editing workflow runs on.'",
        author: 'Manish Agarwal'
      }
    }
  },
  {
    id: 'whatsapp-ai-automation',
    slug: 'whatsapp-ai-automation',
    title: 'WhatsApp AI Automation',
    tagline: 'Built an AI automation system for a Delhi salon chain overnight under tight deadlines.',
    clientOrContext: '28 Degree (Delhi)',
    year: '2026',
    statusBadge: {
      text: 'SHIPPED',
      type: 'shipped'
    },
    previewImage: '/images/salon_preview.gif',
    heroImage: '/images/salon_preview.gif',
    githubUrl: 'https://github.com/manikumaragarwal/28-degree-salon',
    liveUrl: 'https://28-degree-salon.vercel.app',
    tags: ['WhatsApp AI', 'Business Automation', 'Rapid Engineering', 'Client Solution'],
    role: 'AI Automation Developer',
    timeline: 'Overnight Rapid Sprint (1 Night)',
    team: ['Manish Agarwal'],
    tools: ['WhatsApp Cloud API', 'Node.js', 'Conversational AI', 'Webhooks'],
    tldr: 'I built a WhatsApp AI-automation workflow for 28 Degree, a Delhi salon chain, in roughly one night. I had to figure out the tools, understand the business workflow, build the automation, and get it working under a very tight deadline. The project taught me that I can learn any tool while actively solving the problem.',
    background: {
      title: "High Stakes & Tight Turnaround",
      content: [
        "28 Degree, a popular salon chain in Delhi, was losing customer bookings during off-hours due to delayed response times on WhatsApp.",
        "They needed an intelligent, conversational booking and inquiry automation system deployed immediately before an upcoming marketing push."
      ],
      callout: {
        stat: '1 Night',
        label: 'from zero architecture to live production deployment handling customer booking inquiries.'
      }
    },
    problem: {
      title: "Overcoming Tool Friction Under Pressure",
      content: [
        "I had not worked with this specific combination of APIs before. The challenge was mastering the API ecosystem, conversational state machines, and booking edge cases in real time without compromising reliability."
      ],
      painPoints: [
        'Lost customer booking revenue during peak off-peak inquiry hours',
        'Complex multi-branch service catalog and pricing variations',
        'Zero tolerance for system downtime or hallucinated appointment slots'
      ]
    },
    process: {
      title: "The Overnight Build",
      description: "Rapid iteration moving from business requirements to webhook architecture, intent classification, and live deployment in under 14 hours.",
      steps: [
        {
          phase: 'Hours 0-4: Business Flow & API Provisioning',
          details: 'Mapped customer intents: service inquiries, branch locations, stylist availability, and appointment confirmation.'
        },
        {
          phase: 'Hours 5-10: State Machine & AI Logic',
          details: 'Built reliable intent classification with guardrails preventing hallucinated booking times or pricing errors.'
        },
        {
          phase: 'Hours 11-14: Testing & Production Launch',
          details: 'Conducted end-to-end stress testing across multiple test accounts and handed over the live production deployment.'
        }
      ]
    },
    finalProduct: {
      title: "28 Degree AI Concierge",
      description: "An automated WhatsApp assistant that guides clients smoothly from service selection to confirmed booking.",
      highlights: [
        {
          title: 'Zero-Friction Intake',
          description: 'Instant response times to salon inquiries with automated branch-specific service suggestions.',
          badge: 'Instant Response'
        },
        {
          title: 'Reliable Guardrails',
          description: 'Strict deterministic pricing and booking verification preventing AI miscommunication.',
          badge: 'Production Safe'
        }
      ]
    },
    impact: {
      title: "Real World Business Value",
      metrics: [
        { value: '< 2s', label: 'Average customer response latency' },
        { value: '24/7', label: 'Autonomous inquiry handling' },
        { value: '14h', label: 'Concept to live deployment' }
      ],
      quote: {
        text: "The project taught me something I value more than knowing a particular tool: I can learn any tool while solving the problem.",
        author: 'Manish Agarwal'
      }
    }
  },
  {
    id: 'voice-enhancement-system',
    slug: 'voice-enhancement-system',
    title: 'Voice Enhancement Pipeline',
    tagline: 'Removing friction from the creative process: bad recording → noise reduction → voice enhancement → usable audio.',
    clientOrContext: 'Audio Systems',
    year: '2026',
    statusBadge: {
      text: 'TOOL',
      type: 'shipped'
    },
    previewImage: '/images/audio_enhancement_pipeline.svg',
    heroImage: '/images/audio_enhancement_pipeline.svg',
    githubUrl: 'https://github.com/manikumaragarwal/audio-enhancement-pipeline',
    tags: ['Audio AI', 'Noise Reduction', 'Voice Clarity', 'Friction Removal'],
    role: 'Audio Workflow Builder',
    timeline: '2026',
    team: ['Manish Agarwal'],
    tools: ['Python', 'FFmpeg', 'Audio Processing', 'Whisper'],
    tldr: 'Good content shouldn\'t require perfect recording conditions. I built an automated audio-processing workflow for improving recorded voice: bad recording → noise reduction → voice enhancement → usable audio. It removes friction so more creative energy goes into the idea itself.',
    background: {
      title: "Friction is the Enemy of Great Ideas",
      content: [
        "Many of the best creator observations happen in noisy environments: walking down a street, in a café, or during a quick phone voice memo.",
        "When audio requires 30 minutes of manual filtering in Audition just to be usable, creators hesitate to capture spontaneous thoughts."
      ],
      callout: {
        stat: '1-Click',
        label: 'Automated conversion from noisy phone voice memos to podcast-ready vocal clarity.'
      }
    },
    problem: {
      title: "The Cost of Studio Perfectionism",
      content: [
        "Creators spend excessive energy stressing over microphone setups rather than focusing on the clarity and resonance of the underlying argument."
      ],
      painPoints: [
        'Discarded valuable insights due to environmental room echo or traffic rumble',
        'Slow manual equalization and multi-band compression workflows',
        'Barrier to rapid voice memo publishing'
      ]
    },
    process: {
      title: "Automated Audio Processing Pipeline",
      description: "A fast script pipeline combining multi-stage spectral de-noising, adaptive EQ, and vocal formant clarity enhancement.",
      steps: [
        {
          phase: 'Step 1: Noise Floor Profiling',
          details: 'Automatically detects ambient room noise profiles and applies non-destructive spectral subtractive filtering.'
        },
        {
          phase: 'Step 2: Vocal Formant Enhancement',
          details: 'Applies dynamic frequency curve boosting vocal presence frequencies (1.5kHz - 4kHz) while suppressing sibilance.'
        },
        {
          phase: 'Step 3: Export & Cloud Sync',
          details: 'Directly syncs the cleaned audio file to the video editing workspace ready for Remotion or Premiere.'
        }
      ]
    },
    finalProduct: {
      title: "Instant Audio Clarity Engine",
      description: "A lightweight utility that strips away recording friction.",
      highlights: [
        {
          title: 'Automated Spectral Cleaning',
          description: 'Removes air conditioner hum, traffic rumble, and room reverb in seconds.',
          badge: 'Clean Audio'
        },
        {
          title: 'Warm Voice Presence',
          description: 'Optimizes dynamic vocal compression for short-form mobile speaker playback.',
          badge: 'Mobile Optimized'
        }
      ]
    },
    impact: {
      title: "Creativity Acceleration",
      metrics: [
        { value: '90%', label: 'Reduction in audio prep turnaround' },
        { value: '100%', label: 'Spontaneous ideas captured and made production-ready' }
      ],
      quote: {
        text: "The easier production becomes, the more energy can go into the idea itself.",
        author: 'Manish Agarwal'
      }
    }
  }
];
