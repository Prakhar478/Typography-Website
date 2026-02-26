import { useState } from 'react'

type AnatomyId =
  | 'ascender'
  | 'cap-height'
  | 'x-height'
  | 'baseline'
  | 'descender'
  | 'stem'
  | 'counter'
  | 'terminal'
  | 'ligature'
  | 'kerning'
  | 'leading'

type AnatomyElement = {
  id: AnatomyId
  name: string
  category: 'structure' | 'spacing'
  summary: string
  detail: string
}

const ANATOMY_ELEMENTS: AnatomyElement[] = [
  {
    id: 'baseline',
    name: 'Baseline',
    category: 'structure',
    summary: 'Invisible line that most letters sit on.',
    detail:
      'The baseline is the invisible anchor for a line of type. Aligning different typefaces on a consistent baseline is crucial for clean motion graphics and UI layouts.',
  },
  {
    id: 'x-height',
    name: 'X-height',
    category: 'structure',
    summary: 'Height of lowercase letters like x.',
    detail:
      'The x-height controls the apparent size of a typeface. Larger x-heights feel more contemporary and readable at small sizes, especially in interfaces and captions.',
  },
  {
    id: 'ascender',
    name: 'Ascender',
    category: 'structure',
    summary: 'Strokes that rise above the x-height.',
    detail:
      'Ascenders in letters like f, h, and l help create a vertical rhythm. In motion, exaggerated ascenders can add elegance or drama to titles.',
  },
  {
    id: 'cap-height',
    name: 'Cap height',
    category: 'structure',
    summary: 'Height of capital letters above the baseline.',
    detail:
      'Cap height is measured from the baseline to the top of flat capital letters like H or T. It defines how tall uppercase text appears and strongly influences perceived hierarchy in headings and logos.',
  },
  {
    id: 'descender',
    name: 'Descender',
    category: 'structure',
    summary: 'Strokes that drop below the baseline.',
    detail:
      'Descenders in g, p, and y balance ascenders and affect line spacing. Tight line spacing can cause descenders to crash into the line below.',
  },
  {
    id: 'stem',
    name: 'Stem',
    category: 'structure',
    summary: 'Primary vertical stroke of a letter.',
    detail:
      'Stems define the weight and character of a typeface. Even small changes in stem thickness can make a font feel delicate, neutral, or bold.',
  },
  {
    id: 'counter',
    name: 'Counter',
    category: 'structure',
    summary: 'Enclosed or partially enclosed space inside letters.',
    detail:
      'Open counters (like in o, e, a) directly impact legibility. In dark themes, generous counters prevent letters from filling in and becoming muddy.',
  },
  {
    id: 'terminal',
    name: 'Terminal',
    category: 'structure',
    summary: 'End of a stroke that is not a serif.',
    detail:
      'Terminals carry a lot of personality. Humanist terminals feel friendly and organic, while sharp terminals feel digital and precise.',
  },
  {
    id: 'ligature',
    name: 'Ligature',
    category: 'structure',
    summary: 'Two or more letters combined into one shape.',
    detail:
      'Ligatures like “fi” or “ff” solve spacing collisions and add visual refinement. Stylised ligatures are often used in logos and title sequences.',
  },
  {
    id: 'kerning',
    name: 'Kerning',
    category: 'spacing',
    summary: 'Adjusting space between individual letter pairs.',
    detail:
      'Kerning aims for equal visual, not mathematical, spacing. Poor kerning is especially visible in logos and large animated titles.',
  },
  {
    id: 'leading',
    name: 'Leading',
    category: 'spacing',
    summary: 'Vertical space between baselines of text lines.',
    detail:
      'Comfortable leading makes long-form reading easier. Tight leading feels dense and urgent; loose leading feels airy and calm—useful for emotional typography.',
  },
]

export function TypographyAnatomy() {
  const [activeId, setActiveId] = useState<AnatomyId>('baseline')

  const activeElement = ANATOMY_ELEMENTS.find((el) => el.id === activeId) ?? ANATOMY_ELEMENTS[0]

  return (
    <div className="grid gap-10 md:grid-cols-[1fr_350px] lg:gap-14">
      {/* Diagram */}
      <div className="card-surface relative overflow-hidden border border-zinc-700/80 px-5 py-6 sm:px-7 sm:py-7">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(61,213,198,0.22),_transparent_60%),radial-gradient(circle_at_bottom,_rgba(244,114,182,0.16),_transparent_60%)] opacity-90" />

        <div className="relative flex flex-col gap-8">
          <div className="flex items-center justify-between text-[11px] text-zinc-400">
            <span className="pill bg-slate-950/80 text-[10px] uppercase tracking-[0.22em] text-zinc-300">
              Anatomy specimen
            </span>
            <span className="hidden sm:inline">
              Hover a label or line to explore each part.
            </span>
          </div>

          {/* SECTION 1 · Main word with anatomy lines */}
<section className="relative mt-1 rounded-2xl border border-zinc-700/80 bg-slate-950/90 px-6 py-6 sm:px-8 sm:py-8">
  <div className="flex items-center justify-between text-[11px] text-zinc-400 mb-4">
    <span className="pill bg-slate-950/80 text-[10px] uppercase tracking-[0.22em] text-zinc-300">
      Anatomy specimen
    </span>
    <span className="hidden sm:inline">
      Hover a label or line to explore each part.
    </span>
  </div>

  {/* DIAGRAM BOX - Word + Lines + Right side labels */}
  <div className="relative rounded-xl border border-zinc-700/70 bg-slate-950/60 p-8 sm:p-10">
    <div className="relative flex items-center justify-between" style={{ minHeight: '120px' }}>
      
      {/* LEFT: Main word with lines */}
      <div className="relative flex-1" style={{ height: '100px', position: 'relative' }}>
        
        {/* The word */}
        <p className="font-display text-4xl sm:text-7xl leading-none text-zinc-50" style={{ lineHeight: '0.9' }}>
          Typo
          <span
            className={`transition-colors ${
              activeId === 'ligature' ? 'text-amber-200' : 'text-zinc-50'
            }`}
          >
            gra
          </span>
          phy
        </p>

        {/* LINES OVERLAY */}
        <div className="absolute inset-0" style={{ pointerEvents: 'none' }}>

          {/* Counter circle — sits inside the "o" of Typography */}
          <div
            className="pointer-events-auto absolute cursor-pointer"
            style={{ top: '30px', left: '130px', width: '28px', height: '28px' }}
            onMouseEnter={() => setActiveId('counter')}
            aria-hidden="true"
          >
            <svg width="28" height="28" viewBox="0 0 28 28">
              <circle
                cx="14"
                cy="14"
                r="13"
                fill={activeId === 'counter' ? 'rgba(167,139,250,0.3)' : 'transparent'}
                stroke={activeId === 'counter' ? '#a78bfa' : 'rgba(113,113,122,0.4)'}
                strokeWidth="1.5"
                strokeDasharray="3 2"
                style={{ transition: 'all 0.2s' }}
              />
            </svg>
          </div>

          {/* Ascender line */}
          <div
            className={`pointer-events-auto absolute left-0 right-0 h-px transition-all cursor-pointer ${
              activeId === 'ascender' ? 'bg-cyan-300 shadow-lg' : 'bg-zinc-700/50'
            }`}
            style={{ top: '5px' }}
            onMouseEnter={() => setActiveId('ascender')}
            aria-hidden="true"
          />

          {/* Cap height line */}
          <div
            className={`pointer-events-auto absolute left-0 right-0 h-px transition-all cursor-pointer ${
              activeId === 'cap-height' ? 'bg-amber-200 shadow-lg' : 'bg-zinc-700/50'
            }`}
            style={{ top: '22px' }}
            onMouseEnter={() => setActiveId('cap-height')}
            aria-hidden="true"
          />

          {/* X-height line TOP */}
          <div
            className={`pointer-events-auto absolute left-0 right-0 h-px transition-all cursor-pointer ${
              activeId === 'x-height' ? 'bg-violet-300 shadow-lg' : 'bg-zinc-700/50'
            }`}
            style={{ top: '22px' }}
            onMouseEnter={() => setActiveId('x-height')}
            aria-hidden="true"
          />

          {/* X-height line BOTTOM */}
          <div
            className={`pointer-events-auto absolute left-0 right-0 h-px transition-all cursor-pointer ${
              activeId === 'x-height' ? 'bg-violet-300 shadow-lg' : 'bg-zinc-700/50'
            }`}
            style={{ top: '60px' }}
            onMouseEnter={() => setActiveId('x-height')}
            aria-hidden="true"
          />

          {/* Baseline */}
          <div
            className={`pointer-events-auto absolute left-0 right-0 h-[2px] transition-all cursor-pointer ${
              activeId === 'baseline' ? 'bg-teal-300 shadow-lg' : 'bg-zinc-700/60'
            }`}
            style={{ top: '60px' }}
            onMouseEnter={() => setActiveId('baseline')}
            aria-hidden="true"
          />

          {/* Descender line */}
<div
  className={`pointer-events-auto absolute left-0 right-0 h-px transition-all cursor-pointer ${
    activeId === 'descender' ? 'bg-rose-300 shadow-lg' : 'bg-zinc-700/50'
  }`}
  style={{ top: '74px' }}
  onMouseEnter={() => setActiveId('descender')}
  aria-hidden="true"
/>
        </div>
      </div>

      {/* RIGHT: Labels aligned vertically */}
      <div className="ml-6 sm:ml-10 flex flex-col justify-start space-y-1 text-xs text-zinc-500">
        <div
          className={`cursor-pointer transition-colors whitespace-nowrap ${
            activeId === 'ascender' ? 'text-cyan-300 font-semibold' : 'hover:text-cyan-300'
          }`}
          onMouseEnter={() => setActiveId('ascender')}
          style={{ position: 'relative', top: '-6px' }}
        >
          Ascender
        </div>
        <div
          className={`cursor-pointer transition-colors whitespace-nowrap ${
            activeId === 'cap-height' ? 'text-amber-200 font-semibold' : 'hover:text-amber-200'
          }`}
          onMouseEnter={() => setActiveId('cap-height')}
          style={{ position: 'relative', top: '-3px' }}
        >
          Cap Height
        </div>
        <div
          className={`cursor-pointer transition-colors whitespace-nowrap ${
            activeId === 'x-height' ? 'text-violet-300 font-semibold' : 'hover:text-violet-300'
          }`}
          onMouseEnter={() => setActiveId('x-height')}
          style={{ position: 'relative', top: '0px' }}
        >
          X-height
        </div>
        <div
          className={`cursor-pointer transition-colors whitespace-nowrap ${
            activeId === 'baseline' ? 'text-teal-300 font-semibold' : 'hover:text-teal-300'
          }`}
          onMouseEnter={() => setActiveId('baseline')}
          style={{ position: 'relative', top: '3px' }}
        >
          Baseline
        </div>
        <div
          className={`cursor-pointer transition-colors whitespace-nowrap ${
            activeId === 'descender' ? 'text-rose-300 font-semibold' : 'hover:text-rose-300'
          }`}
          onMouseEnter={() => setActiveId('descender')}
          style={{ position: 'relative', top: '6px' }}
        >
          Descender
        </div>
        <div
          className={`cursor-pointer transition-colors whitespace-nowrap ${
            activeId === 'counter' ? 'text-violet-300 font-semibold' : 'hover:text-violet-300'
          }`}
          onMouseEnter={() => setActiveId('counter')}
          style={{ position: 'relative', top: '8px' }}
        >
          Counter
        </div>
      </div>
    </div>

    {/* Description below */}
    <p className="mt-6 text-xs text-zinc-400">
      Lines mark ascender height, x-height, baseline, and descender depth for this word.
    </p>
  </div>

  {/* SECTION 2 · Kerning examples */}
  <section
    aria-label="Kerning examples"
    className="mt-8 border-t border-zinc-800/80 pt-6"
    onMouseEnter={() => setActiveId('kerning')}
  >
    <div className="flex items-center justify-between text-[11px] text-zinc-400">
      <div>
        <p className="text-[10px] uppercase tracking-[0.26em] text-zinc-500">Kerning</p>
        <p className="mt-1 text-xs text-zinc-400">
          Adjusting the visual space between specific letter pairs.
        </p>
      </div>
      <p className="text-[10px] uppercase tracking-[0.22em] text-zinc-500">
        Loose vs tight
      </p>
    </div>

    <div className="mt-4 grid gap-3 text-lg text-zinc-100 sm:grid-cols-2">
      <div className="rounded-xl border border-zinc-800/80 bg-slate-950/80 px-4 py-3">
        <p className="text-[10px] uppercase tracking-[0.22em] text-zinc-500">Loose</p>
        <p className="mt-1 font-display tracking-[0.25em] text-zinc-400">A V</p>
      </div>
      <div className="rounded-xl border border-zinc-800/80 bg-slate-950/80 px-4 py-3">
        <p className="text-[10px] uppercase tracking-[0.22em] text-zinc-500">Tight</p>
        <p className="mt-1 font-display tracking-[-0.08em] text-teal-300">AV</p>
      </div>
    </div>
  </section>

  {/* SECTION 3 · Leading examples */}
  <section
    aria-label="Leading examples"
    className="mt-8 border-t border-zinc-800/80 pt-6"
    onMouseEnter={() => setActiveId('leading')}
  >
    <p className="text-[10px] uppercase tracking-[0.26em] text-zinc-500">Leading</p>
    <p className="mt-1 text-xs text-zinc-400">
      Vertical spacing between baselines controls density and ease of reading.
    </p>

    <div className="mt-4 grid gap-3 text-[11px] text-zinc-300 sm:grid-cols-2">
      <div className="rounded-xl border border-zinc-800/80 bg-slate-950/80 px-4 py-3">
        <p className="text-[10px] uppercase tracking-[0.22em] text-zinc-500">Tight</p>
        <p className="mt-2 leading-3">
          Tight leading makes text feel dense and urgent, but can be tiring for long
          paragraphs.
        </p>
      </div>
      <div className="rounded-xl border border-zinc-800/80 bg-slate-950/80 px-4 py-3">
        <p className="text-[10px] uppercase tracking-[0.22em] text-zinc-500">
          Comfortable
        </p>
        <p className="mt-2 leading-6 text-teal-100">
          Comfortable leading gives each line room to breathe, useful for body copy and calm
          reading experiences.
        </p>
      </div>
    </div>
  </section>

  {/* SECTION 4 · Counter examples */}
  <section
    aria-label="Counter examples"
    className="mt-8 border-t border-zinc-800/80 pt-6"
    onMouseEnter={() => setActiveId('counter')}
  >
    <p className="text-[10px] uppercase tracking-[0.26em] text-zinc-500">Counter</p>
    <p className="mt-1 text-xs text-zinc-400">
      Enclosed or partially enclosed space inside letterforms.
    </p>

    <div className="mt-4 rounded-xl border border-zinc-800/80 bg-slate-950/80 px-4 py-4">
      <div className="flex items-center gap-6">
        {/* Letter O with circle highlighting the counter */}
        <div className="relative flex items-center justify-center" style={{ width: 80, height: 80 }}>
          <span className="font-display text-7xl leading-none text-zinc-100" style={{ lineHeight: 1 }}>o</span>
          {/* Circle overlay marking the counter space */}
          <svg
            className="absolute inset-0 pointer-events-none"
            width="80"
            height="80"
            viewBox="0 0 80 80"
          >
            <circle
              cx="40"
              cy="42"
              r="14"
              fill={activeId === 'counter' ? 'rgba(167,139,250,0.25)' : 'transparent'}
              stroke={activeId === 'counter' ? '#a78bfa' : '#52525b'}
              strokeWidth="1.5"
              strokeDasharray="4 2"
              style={{ transition: 'all 0.2s' }}
            />
          </svg>
        </div>

        <div className="flex-1 text-xs text-zinc-400 leading-relaxed">
          The circle marks the <span className={`font-semibold transition-colors duration-200 ${activeId === 'counter' ? 'text-violet-300' : 'text-zinc-300'}`}>counter</span> — the enclosed white space inside the letter. Open counters improve legibility, especially at small sizes or on dark backgrounds.
        </div>
      </div>
    </div>
  </section>
</section>
        </div>
      </div>

      {/* Explanations & legend */}
      <aside aria-label="Typography anatomy legend" className="space-y-5">
        <div className="card-surface border border-zinc-700/80 px-5 py-5 sm:px-6 sm:py-6">
          <p className="text-xs font-semibold uppercase tracking-[0.26em] text-zinc-400">
            Active element
          </p>
          <h3 className="mt-2 text-lg font-display text-zinc-50">{activeElement.name}</h3>
          <p className="mt-1 text-[11px] uppercase tracking-[0.28em] text-zinc-500">
            {activeElement.category === 'structure' ? 'Letterform structure' : 'Spacing & rhythm'}
          </p>
          <p className="mt-3 text-sm text-zinc-300">{activeElement.detail}</p>
        </div>

        <div className="card-surface border border-zinc-700/80 px-5 py-5 sm:px-6 sm:py-6">
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.26em] text-zinc-400">
            Explore the anatomy
          </p>
          <div className="grid grid-cols-2 gap-2 text-xs sm:grid-cols-3">
            {ANATOMY_ELEMENTS.map((element) => {
              const isActive = element.id === activeId
              return (
                <button
                  key={element.id}
                  type="button"
                  className={`group rounded-xl border px-3 py-2 text-left transition-colors ${
                    isActive
                      ? 'border-teal-300/80 bg-slate-950/90'
                      : 'border-zinc-700/70 bg-slate-950/60 hover:border-teal-300/60'
                  }`}
                  onMouseEnter={() => setActiveId(element.id)}
                  onFocus={() => setActiveId(element.id)}
                >
                  <span
                    className={`block text-[11px] font-semibold ${
                      isActive ? 'text-teal-300' : 'text-zinc-100'
                    }`}
                  >
                    {element.name}
                  </span>
                  <span className="mt-1 block text-[11px] text-zinc-400">{element.summary}</span>
                </button>
              )
            })}
          </div>
          <p className="mt-3 text-[11px] text-zinc-500">
            Structure terms describe the shapes of letters; spacing terms describe how letters
            relate to each other in a line or block of text.
          </p>
        </div>
      </aside>
    </div>
  )
}

