import { SidequestItem } from '../types';

export const SIDEQUEST_ITEMS: SidequestItem[] = [
  {
    id: 'vibritt-scroll-stopper',
    title: 'Vibritt — Web Dev Agency',
    fileName: 'vibritt_agency.url',
    type: 'app',
    initialX: 60,
    initialY: 40,
    rotation: -1.5,
    liveUrl: 'https://vibritt.vercel.app/',
    githubUrl: 'https://github.com/manikumaragarwal/Vibritt---Wesites-which-stops-your-sc',
    windowContent: {
      title: 'Vibritt — The Web-Dev Agency I Started',
      category: 'Web Dev Agency (Founded 1 Year Ago)',
      description: 'The web-development agency I started a year ago, crafting high-impact, scroll-stopping digital experiences for modern brands.',
      fullStory: 'Web design shouldn\'t be passive brochureware. At Vibritt, we focus on high-retention micro-animations, tactile scroll velocity, bold typographic hierarchy, and visual momentum that arrests viewer attention.',
      previewMedia: {
        type: 'image',
        src: '/images/vibritt_preview.gif',
        alt: 'Vibritt Agency Live Screen Recording'
      },
      tags: ['Live on Vercel', 'Web Agency', 'Scroll Stopping', 'Attention Engineering']
    }
  },
  {
    id: 'dark-grimoiri-web',
    title: 'Dark Grimoiri — Harry Potter Store',
    fileName: 'dark_grimoiri.url',
    type: 'app',
    initialX: 420,
    initialY: 40,
    rotation: 1.8,
    liveUrl: 'https://dark-grimoiri.vercel.app/',
    githubUrl: 'https://github.com/manikumaragarwal/Dark-Grimoiri',
    windowContent: {
      title: 'Dark Grimoiri — Harry Potter Merch Store',
      category: 'Harry Potter Themed Merchandise',
      description: 'A Harry Potter-inspired website built for merchandise selling with atmospheric dark-mode aesthetics, rich lore, and seamless commerce.',
      fullStory: 'An immersive, arcane web boutique designed for Potterheads. Features custom spellbook textures, gothic typography, categorized artifact vaults, and high-conversion merchandise showcases.',
      previewMedia: {
        type: 'image',
        src: '/images/dark_grimoiri_preview.gif',
        alt: 'Dark Grimoiri Harry Potter Merch Store Screen Recording'
      },
      tags: ['Live on Vercel', 'Harry Potter', 'Merchandise', 'E-Commerce', 'Dark UI']
    }
  },
  {
    id: 'ptlss-college-app',
    title: 'Pt. Laxmi Shanker Saraswati College',
    fileName: 'ptlss_college.url',
    type: 'app',
    initialX: 780,
    initialY: 40,
    rotation: -1,
    liveUrl: 'https://ptlssicollege.in/',
    // No githubUrl as requested: only Live Preview button
    windowContent: {
      title: 'Pt. Laxmi Shanker Saraswati Inter College',
      category: 'Official School Web Portal (ptlssicollege.in)',
      description: 'The official institutional website I designed and engineered for Pt. Laxmi Shanker Saraswati Inter College in India.',
      fullStory: 'Built to provide seamless access to academic announcements, admission guidelines, faculty directories, and student resources with mobile-friendly accessibility.',
      previewMedia: {
        type: 'image',
        src: '/images/ptlss_preview.gif',
        alt: 'Pt. Laxmi Shanker Saraswati College Official Website Screen Recording'
      },
      tags: ['Live Domain (ptlssicollege.in)', 'Education', 'School Portal', 'Production Web']
    }
  },
  {
    id: 'postit-content-dna',
    title: 'Founder Content DNA Memo',
    fileName: 'content_dna.txt',
    type: 'note',
    initialX: 60,
    initialY: 200,
    rotation: -1.2,
    width: 310,
    height: 320,
    bgColor: '#fefce8',
    textColor: '#422006',
    noteText: `Founder Content DNA 🧬

If I were building a content system around a founder, I wouldn't start by asking: "What should we post?"

I'd start by asking: "What does this person actually believe?"

Extract: beliefs, vocabulary, stories, quirks, and contrasts. That becomes their unshakeable Content DNA.`,
    windowContent: {
      title: 'Founder Content DNA Blueprint',
      category: 'Content Systems & AI Architecture',
      description: 'Codifying a founder\'s authentic perspective so AI amplifies their voice rather than diluting it into generic templates.',
      fullStory: 'The biggest failure mode in AI-generated content is homogenization. By extracting unvarnished belief hierarchies, vocabulary rhythms, and personal battle scars, we construct a deterministic prompt foundation that scales volume while preserving authenticity.',
      tags: ['Founder DNA', 'Linguistic Architecture', 'Content Systems', 'AI Guardrails']
    }
  },
  {
    id: 'postit-beliefs',
    title: 'Content Beliefs Post-it',
    fileName: 'beliefs.txt',
    type: 'note',
    initialX: 420,
    initialY: 190,
    rotation: 1.5,
    width: 310,
    height: 310,
    bgColor: '#f0fdf4',
    textColor: '#14532d',
    noteText: `Core Content Beliefs ✦

01. Being remembered > Going viral.
02. People follow feelings, not information.
03. People are tired of polished content. Imperfection is a feature.
04. Originality is often recombination.
05. Stopping the scroll earns attention; the rest of the video must deserve it.`,
    windowContent: {
      title: 'The 6 Content Beliefs',
      category: 'Attention Mechanics & Philosophy',
      description: 'Six foundational principles reverse-engineered from analyzing retention curves across hundreds of viral short-form videos.',
      previewMedia: {
        type: 'checklist',
        items: [
          { text: 'Imperfection over artificial polish', done: true },
          { text: 'Emotion and perspective over pure facts', done: true },
          { text: '2,000 true believers over 1,000,000 casual swipers', done: true },
          { text: 'Cross-pollinate 50 influences into something original', done: true },
          { text: 'Ensure the body of the video deserves the hook', done: true }
        ]
      },
      tags: ['Attention Mechanics', 'Creator Philosophy', 'Retention']
    }
  },
  {
    id: 'salon-28-degree-web',
    title: '28 Degree Salon Platform',
    fileName: '28_degree_salon.url',
    type: 'app',
    initialX: 780,
    initialY: 200,
    rotation: -1.4,
    liveUrl: 'https://28-degree-salon.vercel.app',
    githubUrl: 'https://github.com/manikumaragarwal/28-degree-salon',
    windowContent: {
      title: '28 Degree Salon Chain Platform',
      category: 'Client Web Platform & AI System',
      description: 'Digital presence and automated WhatsApp scheduling integration for luxury salon chain in Delhi.',
      fullStory: 'Designed and deployed for 28 Degree salon chain in Delhi to streamline appointments and capture customer demand with seamless WhatsApp integration.',
      tags: ['Vercel Live', 'Delhi Salon', 'Production Client', 'WhatsApp AI']
    }
  },
  {
    id: 'dotfiles-linux-app',
    title: 'i3wm Dotfiles & Setup',
    fileName: 'mint_i3_dotfiles.sh',
    type: 'file',
    initialX: 60,
    initialY: 530,
    rotation: 1.2,
    fileExt: 'sh',
    githubUrl: 'https://github.com/manikumaragarwal/dotfiles',
    windowContent: {
      title: 'Linux Mint i3wm Workspace Setup',
      category: 'Developer Environment & Tooling',
      description: 'My custom Linux Mint i3wm dotfiles: i3, polybar, rofi, picom, alacritty, neovim, and zsh.',
      fullStory: 'A keyboard-first, distraction-free tiling window manager setup fine-tuned for rapid programming and content synthesis.',
      tags: ['i3wm', 'Linux Mint', 'Neovim', 'Dotfiles', 'Productivity']
    }
  }
];
