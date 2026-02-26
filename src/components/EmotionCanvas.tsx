import { useState } from 'react'

type EmotionId = 'happiness' | 'fear' | 'anger' | 'excitement' | 'sadness' | 'calm'

type EmotionConfig = {
  id: EmotionId
  label: string
  description: string
  bgClass: string
  fontStack: string
  textClasses: string
  animationClasses: string
}

const EMOTIONS: EmotionConfig[] = [
  {
    id: 'happiness',
    label: 'Happiness',
    description: 'Rounded forms, open spacing and warm colour hints feel friendly and optimistic.',
    bgClass:
      'from-yellow-400/15 via-amber-300/10 to-teal-300/10 border-yellow-300/40 shadow-[0_0_60px_rgba(250,204,21,0.25)]',
    fontStack: 'Pacifico, "Brush Script MT", cursive',
    textClasses:
      'tracking-wide font-medium text-yellow-100 drop-shadow-[0_0_25px_rgba(250,204,21,0.7)]',
    animationClasses: '',
  },
  {
    id: 'fear',
    label: 'Fear',
    description:
      'Tight letterspacing, sharp angles and cold colour accents create tension and unease.',
    bgClass:
      'from-purple-900/80 via-slate-950 to-slate-950 border-purple-500/50 shadow-[0_0_80px_rgba(147,51,234,0.5)]',
    fontStack: '"Roboto Mono", "Inconsolata", "Courier New", monospace',
    textClasses:
      'tracking-[0.3em] font-semibold uppercase text-purple-200 drop-shadow-[0_0_20px_rgba(168,85,247,0.7)]',
    animationClasses: '',
  },
  {
    id: 'anger',
    label: 'Anger',
    description:
      'Heavy weight, compressed forms and aggressive red accents feel loud and confrontational.',
    bgClass:
      'from-red-700/70 via-red-900/80 to-slate-950 border-red-500/60 shadow-[0_0_70px_rgba(248,113,113,0.5)]',
      fontStack: '"Courier New", "Inconsolata", monospace',
    textClasses:
      'tracking-[0.25em] font-bold uppercase text-red-100 drop-shadow-[0_0_18px_rgba(248,113,113,0.9)]',
    animationClasses: '',
  },
  {
    id: 'excitement',
    label: 'Excitement',
    description:
      'Large scale, dynamic baseline shifts and neon accents feel energetic and kinetic.',
    bgClass:
      'from-cyan-400/20 via-sky-500/10 to-pink-400/10 border-cyan-300/60 shadow-[0_0_80px_rgba(56,189,248,0.5)]',
    fontStack: '"Bebas Neue", system-ui, sans-serif',
    textClasses:
      'tracking-[0.18em] font-semibold uppercase text-cyan-100 drop-shadow-[0_0_24px_rgba(56,189,248,0.9)]',
    animationClasses: 'animate-gentle-float',
  },
  {
    id: 'sadness',
    label: 'Sadness',
    description:
      'Thin strokes, cool blues and a slight downward drift suggest weight and introspection.',
    bgClass:
      'from-slate-900 via-sky-900/80 to-slate-950 border-sky-400/40 shadow-[0_0_60px_rgba(96,165,250,0.4)]',
    fontStack: '"EB Garamond", Garamond, "Times New Roman", serif',
    textClasses:
      'tracking-[0.08em] font-normal italic text-sky-200 drop-shadow-[0_0_18px_rgba(96,165,250,0.7)]',
    animationClasses: 'animate-sway',
  },
  {
    id: 'calm',
    label: 'Calm',
    description:
      'Low contrast, centred layout and wide leading feel stable, quiet and meditative.',
    bgClass:
      'from-emerald-500/10 via-slate-900 to-emerald-600/10 border-emerald-400/50 shadow-[0_0_70px_rgba(52,211,153,0.4)]',
    fontStack: '"Open Sans", system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
    textClasses: 'tracking-[0.16em] font-medium uppercase text-emerald-100',
    animationClasses: '',
  },
]

export function EmotionCanvas() {
  const [selectedEmotionId, setSelectedEmotionId] = useState<EmotionId>('happiness')
  const [userText, setUserText] = useState('Joy')

  const emotion =
    EMOTIONS.find((item) => item.id === selectedEmotionId) ?? EMOTIONS.find((item) => item.id === 'happiness')!

  const displayText = userText.trim().length > 0 ? userText : emotion.label

  return (
    <div className="space-y-5">
      <p className="max-w-3xl text-sm text-zinc-400">
        Select an emotion, then type your own word or phrase. Notice how letterforms, spacing and
        colour work together to communicate tone before the content is even read.
      </p>

      <div className="flex flex-wrap gap-2" role="tablist" aria-label="Emotional typography styles">
        {EMOTIONS.map((config) => {
          const isActive = config.id === emotion.id
          return (
            <button
              key={config.id}
              type="button"
              role="tab"
              aria-pressed={isActive}
              aria-selected={isActive}
              onClick={() => setSelectedEmotionId(config.id)}
              className={`rounded-full border px-3 py-1.5 text-xs font-medium transition-colors ${
                isActive
                  ? 'border-teal-400 bg-slate-950 text-teal-200'
                  : 'border-zinc-700/80 bg-slate-950/80 text-zinc-200 hover:border-teal-300/70 hover:text-teal-200'
              }`}
            >
              {config.label}
            </button>
          )
        })}
      </div>

      <div
        className={`relative mt-2 overflow-hidden rounded-3xl border bg-gradient-to-br p-6 sm:p-8 md:p-10 ${emotion.bgClass}`}
      >
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(15,23,42,0)_0,rgba(15,23,42,0.8)_70%)]" />

        <div className="relative grid gap-6 md:grid-cols-[minmax(0,1.3fr)_minmax(0,1fr)] md:items-center">
          {/* Canvas */}
          <section aria-label="Emotionally styled text" className="space-y-4 md:space-y-6">
            <label className="block text-[11px] font-semibold uppercase tracking-[0.24em] text-zinc-200/80">
              Your word or phrase
            </label>
            <input
              type="text"
              value={userText}
              onChange={(event) => setUserText(event.target.value)}
              placeholder={emotion.label}
              className="w-full rounded-xl border border-zinc-200/30 bg-slate-950/40 px-3 py-2 text-sm text-zinc-50 outline-none ring-0 backdrop-blur focus:border-teal-200 focus:ring-1 focus:ring-teal-200/70"
            />

            <div className="mt-4 rounded-2xl border border-zinc-50/10 bg-slate-950/30 px-4 py-6 sm:px-6 sm:py-8">
              <p
                className={`text-center ${emotion.textClasses} ${emotion.animationClasses}`}
                style={{ fontFamily: emotion.fontStack, fontSize: '40px' }}
              >
                {displayText}
              </p>
            </div>
          </section>

          {/* Explanation */}
          <section aria-label="Emotion style explanation" className="space-y-3 text-sm text-zinc-100">
            <h3 className="text-base font-semibold">{emotion.label}</h3>
            <p className="text-zinc-200">{emotion.description}</p>
            <ul className="mt-1 space-y-1 text-[12px] text-zinc-200/90">
              <li>
                <span className="font-semibold text-zinc-50">Typeface: </span>
                <span style={{ fontFamily: emotion.fontStack }}>{emotion.fontStack.split(',')[0]}</span>
              </li>
              <li>
                <span className="font-semibold text-zinc-50">Colour & motion: </span>
                each emotion combines colour temperature, contrast and animation to shape the mood.
              </li>
            </ul>
          </section>
        </div>
      </div>
    </div>
  )
}

