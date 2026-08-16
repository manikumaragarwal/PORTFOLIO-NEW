import { SidequestItem } from '../types';

export const SIDEQUEST_ITEMS: SidequestItem[] = [
  {
    id: 'vibritt-scroll-stopper',
    title: 'Vibritt / Web Dev Agency',
    fileName: 'vibritt_agency.url',
    type: 'app',
    initialX: 60,
    initialY: 40,
    rotation: -1.5,
    liveUrl: 'https://vibritt.vercel.app/',
    githubUrl: 'https://github.com/manikumaragarwal/Vibritt---Wesites-which-stops-your-sc',
    windowContent: {
      title: 'Vibritt / The Web Agency I Started',
      category: 'Web Dev Agency (Founded 1 Year Ago)',
      description: 'The web agency I started about a year ago. We build websites that people actually want to scroll through.',
      fullStory: 'Web design should not feel like a digital brochure. At Vibritt, we focus on micro-animations, bold type, and design that makes people stop and look. That is the whole idea.',
      previewMedia: {
        type: 'image',
        src: '/images/vibritt_preview.mp4',
        alt: 'Vibritt Agency Live Screen Recording'
      },
      tags: ['Live on Vercel', 'Web Agency', 'Motion Design', 'Typography']
    }
  },
  {
    id: 'dark-grimoiri-web',
    title: 'Dark Grimoiri / Harry Potter Store',
    fileName: 'dark_grimoiri.url',
    type: 'app',
    initialX: 420,
    initialY: 40,
    rotation: 1.8,
    liveUrl: 'https://dark-grimoiri.vercel.app/',
    githubUrl: 'https://github.com/manikumaragarwal/Dark-Grimoiri',
    windowContent: {
      title: 'Dark Grimoiri / Harry Potter Merch Store',
      category: 'Harry Potter Themed Merchandise',
      description: 'A Harry Potter merch website with a dark, atmospheric look. Built for fans who take their Hogwarts house seriously.',
      fullStory: 'Designed for Potterheads. Custom spellbook textures, gothic type, organized product categories, and a checkout flow that does not break the mood.',
      previewMedia: {
        type: 'image',
        src: '/images/dark_grimoiri_preview.mp4',
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
      description: 'The official website I designed and built for Pt. Laxmi Shanker Saraswati Inter College in India.',
      fullStory: 'Built so students, parents, and faculty can find what they need: announcements, admission info, faculty contacts, and resources. Works well on phones too.',
      previewMedia: {
        type: 'image',
        src: '/images/ptlss_preview.mp4',
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

If I were building a content system around a founder, I would not start by asking: "What should we post?"

I would start by asking: "What does this person actually believe?"

Extract: beliefs, vocabulary, stories, quirks, and contrasts. That becomes their Content DNA.`,
    windowContent: {
      title: 'Founder Content DNA Blueprint',
      category: 'Content Systems & AI',
      description: 'Mapping out a founder\'s real perspective so AI can amplify their voice instead of replacing it with generic templates.',
      fullStory: 'The biggest failure mode in AI content is homogenization. By documenting actual beliefs, vocabulary habits, and personal stories, you can build prompt files that scale volume while still sounding like the real person.',
      tags: ['Founder DNA', 'Content Systems', 'Prompt Engineering', 'AI Guardrails']
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
      description: 'Six principles I came to after studying hundreds of short-form videos and their retention curves.',
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
      description: 'Website and WhatsApp booking automation for a salon chain in Delhi.',
      fullStory: 'Built for 28 Degree salon chain in Delhi. Handles their online presence and connects to the WhatsApp booking bot for automated appointment scheduling.',
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
      description: 'My Linux Mint i3wm dotfiles: i3, polybar, rofi, picom, alacritty, neovim, and zsh.',
      fullStory: 'A keyboard-first tiling window manager setup. No distractions, fast switching, built for programming and content work.',
      tags: ['i3wm', 'Linux Mint', 'Neovim', 'Dotfiles', 'Productivity']
    }
  }
];
