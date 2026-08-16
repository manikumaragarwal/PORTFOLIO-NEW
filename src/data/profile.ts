export interface ProfileGalleryPhoto {
  id: string;
  src: string;
  alt: string;
  caption: string;
  location: string;
  year: string;
}

export const PROFILE_PHOTOS: ProfileGalleryPhoto[] = [
  {
    id: 'photo-1',
    src: '/images/cindy_portrait.png',
    alt: 'Manish Agarwal Workspace and Desk Setup',
    caption: 'Desk & Content Systems Lab ⚡',
    location: 'India',
    year: '2026'
  },
  {
    id: 'photo-2',
    src: '/images/gallery_cherry.png',
    alt: 'Second Brain & Knowledge Architecture in Obsidian',
    caption: 'Obsidian knowledge graph linking 200+ creator hooks',
    location: 'Obsidian Vault',
    year: '2026'
  },
  {
    id: 'photo-3',
    src: '/images/gallery_matcha.png',
    alt: 'Afternoon tea and editing setup',
    caption: 'Chai & Claude Code session',
    location: 'Creative Lab',
    year: '2026'
  },
  {
    id: 'photo-4',
    src: '/images/gallery_3dprint.png',
    alt: 'Script breakdown and retention analysis notes',
    caption: 'Hook analysis and pacing breakdown',
    location: 'Studio',
    year: '2026'
  },
  {
    id: 'photo-5',
    src: '/images/lamp_3d.png',
    alt: 'Late night code and video automation workflows',
    caption: 'Remotion automation build session',
    location: 'India',
    year: '2026'
  }
];

export const PROFILE_INFO = {
  name: 'Manish Agarwal',
  title: 'Content Systems & AI Specialist',
  location: 'India',
  email: 'manishpshyco1969@gmail.com',
  education: 'English Literature & Digital Systems (2026)',
  previousRole: 'AI Automation @ 28 Degree (Delhi) • Short-Form Content Systems',
  socialLinks: {
    linkedin: 'https://linkedin.com',
    email: 'mailto:manishpshyco1969@gmail.com',
    github: 'https://github.com/manikumaragarwal',
    resume: '/Manish_Agarwal_Resume.pdf'
  },
  bioParagraphs: [
    "I'm less interested in making content than understanding why it works. I started by editing Reels. Then I became curious about hooks. Then retention. Then storytelling. Then creator identity. Then distribution. Eventually I realized that the interesting problem isn't any one of these things individually — it's the system connecting all of them.",
    "So I started building things. Some are useful. Some are weird. Some are probably over-engineered. But almost everything I build starts with the same question: 'Could this be done better?'",
    "I use AI as a building material — for prototyping tools, automating repetitive work, analyzing content, and accelerating production. Give me a tool I've never used and a problem I care about, and I'll figure it out."
  ],
  exploringText: 'Prompt engineering, Remotion pipelines, and creator skill files!',
  afterHoursText: 'Reading literature, analyzing creator hook retention curves, and brewing ginger chai.',
  nowPlaying: {
    song: 'Attention Mechanics (Lo-Fi Study Mix)',
    artist: 'Focus Tape • Manish',
    albumCover: '/images/gallery_matcha.png',
    duration: '3:20'
  },
  tools: [
    { name: 'Claude Code', category: 'AI Prototyping' },
    { name: 'Remotion', category: 'Programmable Video' },
    { name: 'Obsidian', category: 'Knowledge Systems' },
    { name: 'Python', category: 'Automation Scripting' },
    { name: 'Whisper AI', category: 'Voice Intelligence' },
    { name: 'Premiere Pro', category: 'Video Editing' },
    { name: 'CapCut', category: 'Short-Form Pacing' },
    { name: 'Figma', category: 'Systems & Flow Mapping' }
  ],
  favoriteSpots: [
    { name: 'Obsidian Canvas', item: 'Content DNA Graphs', neighborhood: 'Local Vault' },
    { name: 'Claude Code CLI', item: 'Remotion Subtitle Renderer', neighborhood: 'Terminal' },
    { name: 'Local Chai Tapri', item: 'Adrak Masala Chai', neighborhood: 'Delhi' }
  ]
};
