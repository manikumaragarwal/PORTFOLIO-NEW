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
    src: '/images/manish_main_profile.jpg',
    alt: 'Manish Agarwal Portrait',
    caption: '',
    location: 'India',
    year: '2026'
  },
  {
    id: 'photo-2',
    src: '/images/manish_gallery_1.jpg',
    alt: 'Manish Agarwal',
    caption: '',
    location: 'India',
    year: '2026'
  },
  {
    id: 'photo-3',
    src: '/images/manish_gallery_2.jpg',
    alt: 'Manish Agarwal',
    caption: '',
    location: 'India',
    year: '2026'
  },
  {
    id: 'photo-4',
    src: '/images/manish_gallery_3.jpg',
    alt: 'Manish Agarwal',
    caption: '',
    location: 'India',
    year: '2026'
  }
];

export const PROFILE_INFO = {
  name: 'Manish Agarwal',
  title: 'English Student, Content Systems Builder',
  location: 'India',
  email: 'manishpshyco1969@gmail.com',
  education: 'English Literature & Digital Systems (2026)',
  previousRole: 'AI Automation @ 28 Degree (Delhi) • Short-Form Content Systems',
  socialLinks: {
    instagram: 'https://www.instagram.com/youngdumbandnotbroke',
    linkedin: 'https://linkedin.com',
    email: 'mailto:manishpshyco1969@gmail.com',
    github: 'https://github.com/manikumaragarwal',
    resume: '/Manish_Agarwal_Resume.pdf'
  },
  bioParagraphs: [
    "I'm less interested in making content than understanding why it works. I started by editing Reels. Then I got curious about hooks. Then retention. Then storytelling. Then creator identity. Then distribution. Eventually I realized the interesting problem is not any one of these things individually, it's the system connecting all of them.",
    "So I started building things. Some are useful. Some are weird. Some are probably over-engineered. But almost everything I build starts with the same question: 'Could this be done better?'",
    "I use AI as a building material, for prototyping tools, automating repetitive work, analyzing content, and speeding up production. Give me a tool I have never used and a problem I care about, and I will figure it out."
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
