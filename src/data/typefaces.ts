export type TypefaceCategoryId = 'serif' | 'sans' | 'script' | 'display' | 'mono'

export type TypefaceSample = {
  id: string
  name: string
  cssStack: string
  note: string
}

export type TypefaceCategory = {
  id: TypefaceCategoryId
  name: string
  description: string
  tone: string
  samples: TypefaceSample[]
  recommendedUses: string[]
}

export const TYPEFACE_CATEGORIES: TypefaceCategory[] = [
  {
    id: 'serif',
    name: 'Serif',
    description: 'Serifs have small finishing strokes on the ends of letters, giving text a book-like, literary feel.',
    tone: 'Traditional, editorial, trustworthy.',
    samples: [
      {
        id: 'times-new-roman',
        name: 'Times New Roman',
        cssStack: '"Times New Roman", Times, serif',
        note: 'Newspaper-born classic for dense text and formal documents.',
      },
      {
        id: 'georgia',
        name: 'Georgia',
        cssStack: 'Georgia, "Times New Roman", serif',
        note: 'Designed for the screen, with sturdy shapes and generous x-height.',
      },
      {
        id: 'garamond',
        name: 'Garamond (EB Garamond)',
        cssStack: '"EB Garamond", Garamond, "Times New Roman", serif',
        note: 'Historical, bookish serif with elegant curves and soft contrast.',
      },
    ],
    recommendedUses: ['Long-form reading', 'Editorial design', 'Book covers', 'Serious branding'],
  },
  {
    id: 'sans',
    name: 'Sans-serif',
    description:
      'Sans-serifs remove the finishing strokes, creating clean, geometric or humanist shapes that feel contemporary.',
    tone: 'Modern, clear, accessible.',
    samples: [
      {
        id: 'helvetica',
        name: 'Helvetica / Arial',
        cssStack: 'Helvetica, Arial, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
        note: 'Neutral workhorse widely used in signage and interfaces.',
      },
      {
        id: 'open-sans',
        name: 'Open Sans',
        cssStack: '"Open Sans", system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
        note: 'Highly readable web UI font with generous spacing.',
      },
      {
        id: 'roboto',
        name: 'Roboto',
        cssStack: 'Roboto, "Segoe UI", system-ui, sans-serif',
        note: 'Android-native sans-serif tuned for digital interfaces and motion.',
      },
    ],
    recommendedUses: ['UI & product design', 'Dashboards', 'Wayfinding', 'Digital branding'],
  },
  {
    id: 'script',
    name: 'Script',
    description:
      'Script typefaces imitate handwriting or calligraphy, adding warmth and personality when used in small doses.',
    tone: 'Expressive, personal, decorative.',
    samples: [
      {
        id: 'pacifico',
        name: 'Pacifico',
        cssStack: 'Pacifico, "Brush Script MT", cursive',
        note: 'Playful, casual script well-suited to friendly headlines.',
      },
      {
        id: 'brush-script',
        name: 'Brush Script',
        cssStack: '"Brush Script MT", cursive',
        note: 'Classic brush lettering style, best reserved for short words.',
      },
    ],
    recommendedUses: ['Logotypes', 'Posters', 'Short emotional headlines', 'Animation title cards'],
  },
  {
    id: 'display',
    name: 'Display',
    description:
      'Display faces are designed for large sizes, where detail and personality matter more than small-size legibility.',
    tone: 'Dramatic, characterful, attention-grabbing.',
    samples: [
      {
        id: 'playfair-display',
        name: 'Playfair Display',
        cssStack: '"Playfair Display", "Times New Roman", serif',
        note: 'High-contrast serif ideal for elegant titles and hero text.',
      },
      {
        id: 'bebas-neue',
        name: 'Bebas Neue',
        cssStack: '"Bebas Neue", system-ui, sans-serif',
        note: 'Tall, condensed uppercase display type used in posters and headlines.',
      },
    ],
    recommendedUses: ['Hero headlines', 'Poster typography', 'Brand campaigns', 'Motion graphics titles'],
  },
  {
    id: 'mono',
    name: 'Monospace',
    description:
      'Monospaced typefaces give every character the same width, creating a grid-like rhythm that feels technical.',
    tone: 'Systematic, technical, utilitarian.',
    samples: [
      {
        id: 'courier-new',
        name: 'Courier New',
        cssStack: '"Courier New", Courier, monospace',
        note: 'Old-school typewriter texture; nostalgic and mechanical.',
      },
      {
        id: 'roboto-mono',
        name: 'Roboto Mono',
        cssStack: '"Roboto Mono", "Inconsolata", "Courier New", monospace',
        note: 'Clean coding font tuned for screens and dark themes.',
      },
      {
        id: 'inconsolata',
        name: 'Inconsolata',
        cssStack: '"Inconsolata", "Roboto Mono", "Courier New", monospace',
        note: 'Humanist monospace with open shapes and generous counters.',
      },
    ],
    recommendedUses: ['Code samples', 'Technical UI', 'Grids and data tables', 'Retro terminal effects'],
  },
]

export type FontPsychologyCaseStudy = {
  id: string
  name: string
  cssStack: string
  classification: string
  era: string
  perceivedTraits: string[]
  commonUses: string[]
  brands: string[]
  description: string
}

export const FONT_PSYCHOLOGY_STUDIES: FontPsychologyCaseStudy[] = [
  {
    id: 'times-new-roman-psych',
    name: 'Times New Roman',
    cssStack: '"Times New Roman", Times, serif',
    classification: 'Transitional serif',
    era: '1930s · Newspaper typography',
    perceivedTraits: ['Formal', 'Serious', 'Authoritative'],
    commonUses: ['Newspapers', 'Academic documents', 'Corporate reports'],
    brands: ['The Times (UK)', 'Early Microsoft Office defaults'],
    description:
      'Times New Roman was engineered for dense newspaper columns, balancing legibility and ink economy. On screen it can feel conservative, but in motion it instantly signals “news” or “formal document”.',
  },
  {
    id: 'helvetica-psych',
    name: 'Helvetica / Arial',
    cssStack: 'Helvetica, Arial, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
    classification: 'Neo-grotesque sans-serif',
    era: '1950s · Swiss modernism',
    perceivedTraits: ['Neutral', 'Modern', 'Efficient'],
    commonUses: ['Signage', 'Corporate branding', 'Transportation systems'],
    brands: ['NASA manuals', 'NYC subway signage (Helvetica)', 'Lufthansa (historic)'],
    description:
      'Helvetica aims to disappear, letting content speak. Its even rhythm and closed apertures feel systematic and controlled, which is why it dominates wayfinding systems and minimalist branding.',
  },
  {
    id: 'comic-sans-psych',
    name: 'Comic Sans',
    cssStack: '"Comic Sans MS", "Comic Sans", system-ui, cursive',
    classification: 'Casual script sans',
    era: '1990s · Early GUI',
    perceivedTraits: ['Playful', 'Casual', 'Unprofessional when misused'],
    commonUses: ['Children’s materials', 'Informal notes', 'Friendly UI experiments'],
    brands: ['Children’s learning software', 'DIY posters & notices'],
    description:
      'Comic Sans borrows from comic book lettering, which makes it approachable for children’s interfaces and informal notes. Used in serious contexts, the mismatch between tone and message creates unintentional humour.',
  },
]

export type PlaygroundTypefaceId =
  | 'georgia'
  | 'times-new-roman'
  | 'helvetica'
  | 'open-sans'
  | 'playfair-display'
  | 'courier-new'
  | 'brush-script'
  | 'bebas-neue'

export type PlaygroundTypeface = {
  id: PlaygroundTypefaceId
  name: string
  cssStack: string
  category: 'Serif' | 'Sans-serif' | 'Display' | 'Script' | 'Monospace'
  description: string
  metrics: {
    xHeight: string
    stroke: string
  }
}

export const PLAYGROUND_TYPEFACES: PlaygroundTypeface[] = [
  {
    id: 'georgia',
    name: 'Georgia',
    cssStack: 'Georgia, "Times New Roman", serif',
    category: 'Serif',
    description: 'Screen-optimised serif with large x-height and sturdy shapes.',
    metrics: {
      xHeight: 'Generous, improves small-size legibility',
      stroke: 'Moderate contrast with soft serifs',
    },
  },
  {
    id: 'times-new-roman',
    name: 'Times New Roman',
    cssStack: '"Times New Roman", Times, serif',
    category: 'Serif',
    description: 'Dense, compact serif that feels formal and editorial.',
    metrics: {
      xHeight: 'Balanced for narrow newspaper columns',
      stroke: 'Noticeable contrast, crisp hairlines',
    },
  },
  {
    id: 'helvetica',
    name: 'Helvetica / Arial',
    cssStack: 'Helvetica, Arial, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
    category: 'Sans-serif',
    description: 'Neutral, tightly spaced sans-serif for signage and UI labels.',
    metrics: {
      xHeight: 'Relatively tall, aiding quick scanning',
      stroke: 'Low contrast, even strokes',
    },
  },
  {
    id: 'open-sans',
    name: 'Open Sans',
    cssStack: '"Open Sans", system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
    category: 'Sans-serif',
    description: 'Humanist web font with open forms and comfortable spacing.',
    metrics: {
      xHeight: 'Large, with open counters',
      stroke: 'Soft contrast and rounded terminals',
    },
  },
  {
    id: 'playfair-display',
    name: 'Playfair Display',
    cssStack: '"Playfair Display", "Times New Roman", serif',
    category: 'Display',
    description: 'High-contrast serif that feels editorial and dramatic.',
    metrics: {
      xHeight: 'Moderate, emphasising tall ascenders',
      stroke: 'Very high contrast with sharp serifs',
    },
  },
  {
    id: 'courier-new',
    name: 'Courier New',
    cssStack: '"Courier New", Courier, monospace',
    category: 'Monospace',
    description: 'Typewriter-style monospace with strong mechanical rhythm.',
    metrics: {
      xHeight: 'Moderate, tuned for legibility in code and scripts',
      stroke: 'Low contrast, slab-like terminals',
    },
  },
  {
    id: 'brush-script',
    name: 'Brush Script',
    cssStack: '"Brush Script MT", cursive',
    category: 'Script',
    description: 'Connected script that imitates quick brush lettering.',
    metrics: {
      xHeight: 'Varies with stroke, strong rhythm from connections',
      stroke: 'Swelling brush strokes with expressive terminals',
    },
  },
  {
    id: 'bebas-neue',
    name: 'Bebas Neue',
    cssStack: '"Bebas Neue", system-ui, sans-serif',
    category: 'Display',
    description: 'Tall, condensed uppercase display face ideal for bold titles.',
    metrics: {
      xHeight: 'All caps design; apparent x-height set by cap height',
      stroke: 'Low contrast, sturdy verticals',
    },
  },
]


