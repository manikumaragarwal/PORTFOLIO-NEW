import { Project } from '../types';

export const PROJECTS: Project[] = [
  {
    id: 'instagram-second-brain',
    slug: 'instagram-second-brain',
    title: 'Instagram → Second Brain',
    tagline: 'I kept saving Reels and never looking at them again. So I built a pipeline that turns saved videos into searchable knowledge inside Obsidian.',
    clientOrContext: 'Knowledge Systems',
    year: '2026',
    statusBadge: {
      text: 'BUILDING',
      type: 'building'
    },
    previewImage: '/images/reel_obsidian_pipeline.mp4',
    heroImage: '/images/reel_obsidian_pipeline.mp4',
    githubUrl: 'https://github.com/manikumaragarwal/REEL-Knowledge-System',
    showcaseUrl: '/showcases/reel-second-brain.html',
    tags: ['Content Intelligence', 'Obsidian', 'Knowledge Graph', 'Python'],
    role: 'Solo Builder',
    timeline: 'Ongoing Personal Project',
    team: ['Manish Agarwal'],
    tools: ['Obsidian', 'Python', 'Whisper AI', 'Claude'],
    tldr: 'I save a lot of Reels. Probably too many. The problem is that saving something and actually learning from it are two completely different things. So I built a system that takes saved Instagram content, transcribes it, breaks it apart, and turns it into structured notes inside Obsidian. Now every video I analyze gets linked to patterns I have already collected.',
    background: {
      title: "The Graveyard of Saved Reels",
      content: [
        "Like most people studying short-form content, I saved hundreds of Reels. But saving something and actually understanding why it worked are completely different activities.",
        "My bookmark folders were a graveyard. I wanted something where every saved video gets broken down into parts and connected to everything else I have already collected."
      ],
      callout: {
        stat: '500+ Reels',
        label: 'transcribed, broken down, and linked into an Obsidian knowledge graph.'
      }
    },
    problem: {
      title: "Saving Is Not the Same as Learning",
      content: [
        "A 30-second Reel has a lot going on: how it opens, how the creator speaks, pacing choices, the story structure, the call to action. You lose all of that when you just hit save.",
        "I wanted to be able to search my saved content by hook type, by retention pattern, by storytelling approach. Bookmarks can not do that."
      ],
      painPoints: [
        'Saved hundreds of videos but never revisited or learned from them',
        'No way to search saved content by hook style or format',
        'Couldn\'t see connections between what different creators were doing',
        'No system for combining ideas across niches'
      ]
    },
    process: {
      title: "How the Pipeline Works",
      description: "Videos go in, structured Obsidian notes come out. Each note connects to patterns already in the vault.",
      steps: [
        {
          phase: 'Step 1: Transcription',
          details: 'Saved video links get processed through Whisper AI to pull out word-level transcripts with timestamps.'
        },
        {
          phase: 'Step 2: Breaking It Apart',
          details: 'The transcript gets split into components: what the hook is, the core idea, what format tricks are used, and any creator-specific quirks.'
        },
        {
          phase: 'Step 3: Linking in Obsidian',
          details: 'Each note auto-links to related hooks, storytelling patterns, and ideas already sitting in the vault.'
        }
      ]
    },
    finalProduct: {
      title: "A Second Brain That Gets Smarter Over Time",
      description: "An Obsidian vault that becomes more useful every time I analyze a video.",
      highlights: [
        {
          title: 'Searchable Hook Library',
          description: '20+ hook structures I have catalogued, organized by what kind of curiosity they create.',
          badge: 'Pattern Library'
        },
        {
          title: 'Connected Notes',
          description: 'Every observation links to broader ideas about storytelling, communication, and content formats.',
          badge: 'Knowledge Graph'
        },
        {
          title: 'Cross-Niche Remixing',
          description: 'I can take a hook formula from a finance creator and pair it with a pacing style from filmmaking.',
          badge: 'Idea Synthesis'
        }
      ]
    },
    impact: {
      title: "What Changed",
      metrics: [
        { value: '10x', label: 'Faster when brainstorming new scripts' },
        { value: '200+', label: 'Linked notes across the vault' },
        { value: 'Every', label: 'video gets broken down and connected' }
      ],
      quote: {
        text: "I didn't want a bigger bookmark folder. I wanted something that actually gets more useful every time I use it.",
        author: 'Manish Agarwal'
      }
    }
  },
  {
    id: 'creator-skill-files',
    slug: 'creator-skill-files',
    title: 'Creator Skill Files',
    tagline: 'What if you could map out what makes a creator sound like themselves, and put that into a structured file?',
    clientOrContext: 'Voice Pattern Research',
    year: '2026',
    statusBadge: {
      text: 'SHIPPED',
      type: 'shipped'
    },
    previewImage: '/images/creator_skill_files.mp4',
    heroImage: '/images/creator_skill_files.mp4',
    githubUrl: 'https://github.com/manikumaragarwal/OBSIDIAN-NOTES',
    showcaseUrl: '/showcases/creator-skill-files.html',
    tags: ['Prompt Engineering', 'Voice Patterns', 'Content Analysis', 'Creator Systems'],
    role: 'Researcher & Builder',
    timeline: '2025 - Present',
    team: ['Manish Agarwal'],
    tools: ['Claude', 'Python', 'Obsidian', 'Manual Analysis'],
    tldr: 'I started experimenting with creating "skill files" for individual creators. Not "write like this person" prompts, but something deeper: their recurring hook structures, how long their sentences tend to be, their vocabulary habits, their core beliefs. The goal is not to copy someone. It is to understand what makes their content feel like them.',
    background: {
      title: "Why Most AI-Generated Content Sounds the Same",
      content: [
        "Most AI persona prompts are shallow. They say things like 'sound energetic and casual.' That tells AI almost nothing useful.",
        "What actually makes a creator recognizable lives deeper: their average sentence length, how they use commas, what opinions they keep returning to, their word choices."
      ],
      callout: {
        stat: '10 Vectors',
        label: 'mapped per creator: hooks, pacing, sentence length, vocabulary, beliefs, stories, visual style, and quirks.'
      }
    },
    problem: {
      title: "Everyone Sounds Like the Same AI",
      content: [
        "When AI is used with generic prompts, every creator ends up sounding identical. The same hooks, the same structure, the same tone.",
        "I wanted a way to document what makes someone's voice theirs, so AI could actually help them write faster without flattening their personality."
      ],
      painPoints: [
        'Generic AI tone wiping out what makes creators unique',
        'AI drafts losing the rhythm of how someone actually speaks',
        'No documentation of a creator\'s beliefs or worldview',
        'Teams can not scale content production without diluting the original voice'
      ]
    },
    process: {
      title: "How I Build a Skill File",
      description: "I study hours of unscripted content, podcasts, tweets, and emails, then isolate the patterns that make someone recognizable.",
      steps: [
        {
          phase: 'Phase 1: Gathering Raw Material',
          details: 'Collected unscripted podcasts, voice notes, tweets, and emails to capture how someone actually talks when they are not performing.'
        },
        {
          phase: 'Phase 2: Mapping the Patterns',
          details: 'Measured sentence lengths, counted rhetorical questions, tracked transition phrases, noted vocabulary preferences.'
        },
        {
          phase: 'Phase 3: Building the Skill File',
          details: 'Compiled everything into a structured markdown file: their core beliefs, banned cliches, sentence rhythm rules, and vocabulary fingerprint.'
        }
      ]
    },
    finalProduct: {
      title: "The Skill File Framework",
      description: "A structured markdown document that tells AI tools how to write in a specific creator's voice without sounding generic.",
      highlights: [
        {
          title: 'Belief Map',
          description: 'Documents the opinions this creator keeps defending. Every draft reinforces their actual worldview.',
          badge: 'Core Beliefs'
        },
        {
          title: 'Sentence Rhythm Profile',
          description: 'Captures how long their sentences are, how they punctuate, where they pause. The stuff that makes writing feel like a specific person.',
          badge: 'Linguistic Pattern'
        },
        {
          title: 'Banned Phrases List',
          description: 'A list of generic AI filler phrases and cliches that this creator would never use. Keeps the output honest.',
          badge: 'Quality Filter'
        }
      ]
    },
    impact: {
      title: "What It Does",
      metrics: [
        { value: 'Voice', label: 'stays consistent across AI-assisted drafts' },
        { value: 'Zero', label: 'generic filler phrases in the output' },
        { value: '5x', label: 'faster drafting for long-term content plans' }
      ],
      quote: {
        text: "I'm not trying to clone anyone. I'm trying to understand what makes their writing feel like them.",
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
    previewImage: '/images/ai_editing_pipeline.mp4',
    heroImage: '/images/ai_editing_pipeline.mp4',
    githubUrl: 'https://github.com/manikumaragarwal/subtitle-generation-pipeline',
    showcaseUrl: '/showcases/ai-editing-pipeline.html',
    tags: ['Claude Code', 'Remotion', 'React Video', 'Programmable Motion'],
    role: 'Pipeline Builder',
    timeline: '2026',
    team: ['Manish Agarwal'],
    tools: ['Claude Code', 'Remotion', 'React', 'TypeScript', 'FFmpeg'],
    tldr: 'I wanted editing to become code. I have been experimenting with Claude Code and Remotion to turn parts of short-form editing into repeatable systems. Instead of manually rebuilding subtitle styles and motion treatments every time, I can describe what I want in the terminal and the system handles the rest.',
    background: {
      title: "The Repetitive Parts of Video Editing",
      content: [
        "Short-form editing has a lot of repetitive tasks: animating subtitles word by word, positioning zoom emphasis, timing sound cues, rendering different aspect ratios.",
        "I realized that for recurring visual patterns, editing does not have to mean dragging things on a timeline. It can be defined as code."
      ],
      callout: {
        stat: '100% Code',
        label: 'Video components rendered through React and Remotion, driven by terminal commands.'
      }
    },
    problem: {
      title: "Timelines vs. Code",
      content: [
        "Traditional editors like Premiere and CapCut make you manually recreate kinetic text, split-screen captions, and motion accents for every single project.",
        "I kept asking myself: what if AI stopped being a tool that assists editing and became the infrastructure the editing workflow runs on?"
      ],
      painPoints: [
        'Hours spent recreating the same subtitle animations for every project',
        'Inconsistent styling when multiple people edit',
        'Slow turnaround between writing a script and seeing a rough video'
      ]
    },
    process: {
      title: "Building the Pipeline",
      description: "Terminal instructions go in, Remotion renders video components out.",
      steps: [
        {
          phase: 'Step 1: Reusable Remotion Components',
          details: 'Built React components for split-captions, kinetic word emphasis, and audio visualizers that accept data as props.'
        },
        {
          phase: 'Step 2: Claude Code Automation',
          details: 'Set up CLI workflows where Claude Code reads transcript timestamps and generates the right keyframe timings in code.'
        },
        {
          phase: 'Step 3: Headless Rendering',
          details: 'Videos render directly from the terminal through FFmpeg and Remotion, no timeline UI involved.'
        }
      ]
    },
    finalProduct: {
      title: "Code-First Video Editing",
      description: "A system where subtitle styles and motion treatments are defined in code and rendered programmatically.",
      highlights: [
        {
          title: 'Kinetic Subtitles',
          description: 'Automatically formats word-level captions with spring animations. The kind of subtitles you would normally keyframe by hand.',
          badge: 'Programmable Motion'
        },
        {
          title: 'No Timeline Needed',
          description: 'Go from a raw audio transcript to a formatted video mockup in seconds, entirely from the terminal.',
          badge: 'Headless Render'
        }
      ]
    },
    impact: {
      title: "Speed Gains",
      metrics: [
        { value: '75%', label: 'less time on repetitive subtitle work' },
        { value: 'Exact', label: 'typography and spacing every time' }
      ],
      quote: {
        text: "I'm curious where this goes when AI stops being a tool that helps me edit and becomes the system my editing runs on.",
        author: 'Manish Agarwal'
      }
    }
  },
  {
    id: 'whatsapp-ai-automation',
    slug: 'whatsapp-ai-automation',
    title: 'WhatsApp AI Automation',
    tagline: 'Built an AI booking system for a Delhi salon chain in one night.',
    clientOrContext: '28 Degree (Delhi)',
    year: '2026',
    statusBadge: {
      text: 'SHIPPED',
      type: 'shipped'
    },
    previewImage: '/images/salon_preview.mp4',
    heroImage: '/images/salon_preview.mp4',
    githubUrl: 'https://github.com/manikumaragarwal/28-degree-salon',
    liveUrl: 'https://28-degree-salon.vercel.app',
    showcaseUrl: '/showcases/28-degree-salon.html',
    tags: ['WhatsApp AI', 'Business Automation', 'Client Project', 'Node.js'],
    role: 'Solo Developer',
    timeline: 'One Night Build',
    team: ['Manish Agarwal'],
    tools: ['WhatsApp Cloud API', 'Node.js', 'Conversational AI', 'Webhooks'],
    tldr: 'A Delhi salon chain needed a WhatsApp booking bot and they needed it fast. I had never used these specific APIs before. I figured out the tools, mapped the business flow, built the automation, and shipped it live in roughly 14 hours. The project taught me that I can pick up any tool while actively solving the problem.',
    background: {
      title: "Tight Deadline, Real Stakes",
      content: [
        "28 Degree, a salon chain in Delhi, was losing bookings during off-hours because nobody was responding to WhatsApp messages fast enough.",
        "They had a marketing push coming and needed an automated booking system deployed before it launched."
      ],
      callout: {
        stat: '1 Night',
        label: 'from zero to live production deployment handling real customer bookings.'
      }
    },
    problem: {
      title: "Learning the Tools While Building the Thing",
      content: [
        "I had not used this combination of APIs before. The challenge was figuring out the WhatsApp Cloud API, building reliable conversation flows, and handling edge cases, all in one night."
      ],
      painPoints: [
        'Customers messaging during off-hours and getting no response',
        'Multiple branches with different services and pricing',
        'The bot could not make up appointment times or get prices wrong'
      ]
    },
    process: {
      title: "The Overnight Build",
      description: "From business requirements to webhook architecture to live deployment in under 14 hours.",
      steps: [
        {
          phase: 'Hours 0-4: Understanding the Business',
          details: 'Mapped out what customers actually ask about: services, branch locations, stylist availability, booking confirmation.'
        },
        {
          phase: 'Hours 5-10: Building the Bot Logic',
          details: 'Built intent classification with strict rules so the bot could never hallucinate booking times or make up prices.'
        },
        {
          phase: 'Hours 11-14: Testing and Handoff',
          details: 'Stress-tested across multiple accounts and deployed the live production system.'
        }
      ]
    },
    finalProduct: {
      title: "28 Degree Booking Bot",
      description: "A WhatsApp assistant that takes customers from their first question to a confirmed appointment.",
      highlights: [
        {
          title: 'Instant Replies',
          description: 'Responds to salon inquiries immediately with the right services for each branch location.',
          badge: 'Always On'
        },
        {
          title: 'Strict Accuracy',
          description: 'Pricing and availability are pulled from real data. The bot never guesses or makes things up.',
          badge: 'Production Safe'
        }
      ]
    },
    impact: {
      title: "Results",
      metrics: [
        { value: '< 2s', label: 'Response time to customer messages' },
        { value: '24/7', label: 'Handles inquiries even when staff are off' },
        { value: '14h', label: 'From nothing to live deployment' }
      ],
      quote: {
        text: "This project taught me something I value more than knowing a specific tool: I can learn any tool while solving the problem.",
        author: 'Manish Agarwal'
      }
    }
  },
  {
    id: 'voice-enhancement-system',
    slug: 'voice-enhancement-system',
    title: 'Voice Enhancement Pipeline',
    tagline: 'Bad recording goes in, clean audio comes out. One command.',
    clientOrContext: 'Audio Systems',
    year: '2026',
    statusBadge: {
      text: 'TOOL',
      type: 'shipped'
    },
    previewImage: '/images/audio_enhancement_pipeline.svg',
    heroImage: '/images/audio_enhancement_pipeline.svg',
    githubUrl: 'https://github.com/manikumaragarwal/audio-enhancement-pipeline',
    showcaseUrl: '/showcases/voice-enhancement.html',
    tags: ['Audio Processing', 'Noise Reduction', 'Python', 'FFmpeg'],
    role: 'Builder',
    timeline: '2026',
    team: ['Manish Agarwal'],
    tools: ['Python', 'FFmpeg', 'Audio Processing', 'Whisper'],
    tldr: 'Good ideas do not wait for perfect recording conditions. I built an audio processing script that takes noisy voice memos and makes them usable: noise reduction, voice cleanup, export. One command, no manual fiddling. The less time I spend on production, the more goes into the actual idea.',
    background: {
      title: "Ideas Happen in Noisy Places",
      content: [
        "Some of the best observations happen while walking down a street, sitting in a cafe, or recording a quick voice memo on the phone.",
        "But when it takes 30 minutes of manual cleanup in Audition just to make that audio usable, you start hesitating to record anything at all."
      ],
      callout: {
        stat: '1 Command',
        label: 'Takes a noisy phone voice memo and makes it clean enough for video or a podcast.'
      }
    },
    problem: {
      title: "Too Much Time on Cleanup, Not Enough on Ideas",
      content: [
        "I was spending more energy worrying about microphone quality and room noise than on what I was actually saying. That felt backwards."
      ],
      painPoints: [
        'Good ideas thrown away because the recording had too much background noise',
        'Manual EQ and compression in Audition taking forever',
        'The friction of cleanup made me record less'
      ]
    },
    process: {
      title: "How the Pipeline Works",
      description: "A Python script that chains noise removal, voice enhancement, and export into one command.",
      steps: [
        {
          phase: 'Step 1: Noise Detection',
          details: 'Automatically figures out the ambient noise profile and removes it without touching the voice.'
        },
        {
          phase: 'Step 2: Voice Enhancement',
          details: 'Boosts the vocal frequencies that make speech clear on phone speakers, while cutting harshness.'
        },
        {
          phase: 'Step 3: Export',
          details: 'Cleaned audio file gets saved directly to the editing workspace, ready for Remotion or Premiere.'
        }
      ]
    },
    finalProduct: {
      title: "One-Command Audio Cleanup",
      description: "A small utility that takes the boring parts out of working with recorded audio.",
      highlights: [
        {
          title: 'Noise Removal',
          description: 'Handles AC hum, traffic, room echo. The common stuff that makes phone recordings sound amateur.',
          badge: 'Clean Audio'
        },
        {
          title: 'Voice Clarity',
          description: 'Optimizes the vocal range for how people actually listen: phone speakers, earbuds, laptop audio.',
          badge: 'Mobile Ready'
        }
      ]
    },
    impact: {
      title: "What Changed",
      metrics: [
        { value: '90%', label: 'less time on audio prep' },
        { value: 'More', label: 'ideas recorded because the friction is gone' }
      ],
      quote: {
        text: "The less time production takes, the more energy goes into the idea itself.",
        author: 'Manish Agarwal'
      }
    }
  }
];
