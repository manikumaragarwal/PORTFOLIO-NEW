export type ActiveSection = 'works' | 'sidequests' | 'profile' | 'blog';

export interface Project {
  id: string;
  slug: string;
  title: string;
  tagline: string;
  clientOrContext: string;
  year: string;
  statusBadge: {
    text: string;
    type: 'award' | 'shipped' | 'building' | 'live';
    icon?: string;
  };
  previewImage: string;
  heroImage: string;
  githubUrl?: string;
  liveUrl?: string;
  tags: string[];
  role: string;
  timeline: string;
  team: string[];
  tools: string[];
  tldr: string;
  background: {
    title: string;
    content: string[];
    callout?: {
      stat: string;
      label: string;
    };
  };
  problem: {
    title: string;
    content: string[];
    painPoints: string[];
  };
  process: {
    title: string;
    description: string;
    steps: {
      phase: string;
      details: string;
    }[];
  };
  finalProduct: {
    title: string;
    description: string;
    highlights: {
      title: string;
      description: string;
      badge?: string;
    }[];
  };
  impact: {
    title: string;
    metrics: {
      value: string;
      label: string;
    }[];
    quote?: {
      text: string;
      author?: string;
      role?: string;
    };
  };
  reflections?: string[];
}

export type SidequestItemType = 'note' | 'sticker' | 'app' | '3d' | 'pdf' | 'file';

export interface SidequestItem {
  id: string;
  title: string;
  fileName: string;
  type: SidequestItemType;
  initialX: number;
  initialY: number;
  rotation?: number;
  icon?: string;
  image?: string;
  bgColor?: string;
  textColor?: string;
  noteText?: string;
  width?: number;
  height?: number;
  badge?: string;
  fileExt?: string;
  githubUrl?: string;
  liveUrl?: string;
  windowContent: {
    title: string;
    category: string;
    description: string;
    fullStory?: string;
    previewMedia?: {
      type: 'image' | 'interactive-3d' | 'audio' | 'checklist' | 'recipe' | 'lamp3d' | 'rainSoundscape';
      src?: string;
      alt?: string;
      items?: { text: string; done: boolean }[];
      recipeData?: {
        prepTime: string;
        servings: string;
        ingredients: string[];
        instructions: string[];
      };
    };
    tags: string[];
    links?: { label: string; url: string }[];
  };
}

export interface BlogPost {
  id: string;
  slug: string;
  title: string;
  subtitle: string;
  date: string;
  readTime: string;
  category: 'Design Systems' | 'HCI & AI' | '3D & Hardware' | 'Culture & Food' | 'Content Systems' | 'AI Philosophy' | 'Content Mechanics' | 'Open Research' | string;
  tags: string[];
  claps: number;
  excerpt: string;
  content: {
    type: 'p' | 'h2' | 'h3' | 'quote' | 'image' | 'list';
    text?: string;
    items?: string[];
    src?: string;
    caption?: string;
  }[];
}

export interface WindowState {
  id: string;
  item: SidequestItem;
  isOpen: boolean;
  isMinimized: boolean;
  position: { x: number; y: number };
  size: { width: number; height: number };
  zIndex: number;
}
