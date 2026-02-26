import { useState, useEffect, useRef } from 'react'

type SerifSansView = 'serif' | 'sans'

const SERIF_TEXT = {
  heading: 'Printed stories & bookish rhythm',
  body: 'Serifs grew out of stone carving and metal type. Their horizontal feet help guide the eye along a line, which is why they still dominate novels and long-form reading.',
}

const SANS_TEXT = {
  heading: 'Screens, systems & pure geometry',
  body: 'Sans-serifs arrived with industrial printing and later the screen. Their simplified shapes survive low resolution and scaling, making them ideal for interfaces and motion graphics.',
}

export function SerifVsSans() {
  const [view, setView] = useState<SerifSansView>('serif')
  const [isTransitioning, setIsTransitioning] = useState(false)
  const prevView = useRef(view)

  const handleViewChange = (newView: SerifSansView) => {
    if (newView === view) return
    setIsTransitioning(true)
    setTimeout(() => {
      setView(newView)
      prevView.current = newView
      setIsTransitioning(false)
    }, 250)
  }

  const isSerif = view === 'serif'

  return (
    <div className="space-y-6">
      <div
        role="tablist"
        aria-label="Toggle between serif and sans-serif comparison"
        className="inline-flex rounded-full border border-zinc-800/80 bg-slate-950/80 p-1 text-xs shadow-sm"
      >
        <button
          type="button"
          role="tab"
          aria-selected={isSerif}
          className={`rounded-full px-3 py-1.5 font-medium transition-colors ${
            isSerif ? 'bg-teal-400 text-slate-950' : 'text-zinc-300 hover:text-zinc-50'
          }`}
          onClick={() => handleViewChange('serif')}
        >
          Serif in context
        </button>
        <button
          type="button"
          role="tab"
          aria-selected={!isSerif}
          className={`rounded-full px-3 py-1.5 font-medium transition-colors ${
            !isSerif ? 'bg-teal-400 text-slate-950' : 'text-zinc-300 hover:text-zinc-50'
          }`}
          onClick={() => handleViewChange('sans')}
        >
          Sans-serif in context
        </button>
      </div>

      <div
        className={`grid gap-6 md:grid-cols-[minmax(0,1.3fr)_minmax(0,1.1fr)] lg:gap-10 transition-all duration-300 ${
          isTransitioning ? 'opacity-0 translate-y-2' : 'opacity-100 translate-y-0'
        }`}
      >
        {/* Visual specimens */}
        <section
          aria-label={isSerif ? 'Serif specimen' : 'Sans-serif specimen'}
          className="card-surface border border-zinc-800/80 p-4 sm:p-6"
        >
          <header className="flex items-center justify-between gap-4">
            <div className="space-y-1">
              <p className="text-[11px] uppercase tracking-[0.26em] text-zinc-500">
                {isSerif ? 'Print-first lineage' : 'Screen-first lineage'}
              </p>
              <p className="text-xs text-zinc-400">
                {isSerif ? 'Georgia, Times New Roman' : 'Helvetica / Arial, Open Sans'}
              </p>
            </div>
            <span className="pill text-[10px] uppercase tracking-[0.24em] text-zinc-400">
              {isSerif ? 'Serif' : 'Sans-serif'}
            </span>
          </header>

          <div className="mt-5 grid gap-4 md:grid-rows-[auto_auto]">
            {/* Large headline specimen */}
            <div className="rounded-2xl border border-zinc-800/80 bg-slate-950/80 px-4 py-5 sm:px-5 sm:py-6">
              <p className="text-[11px] uppercase tracking-[0.26em] text-zinc-500">
                Headline · 48 pt
              </p>
              <p
                className={`mt-2 text-[30px] leading-tight text-zinc-50 sm:text-[36px] ${
                  isSerif ? 'font-georgia' : 'font-helvetica'
                }`}
              >
                Motion graphics for{' '}
                <span className="underline decoration-teal-400/80 decoration-2 underline-offset-4">
                  typography-led stories
                </span>
              </p>
            </div>

            {/* Body text specimen */}
            <div className="rounded-2xl border border-zinc-800/80 bg-slate-950/70 px-4 py-4 sm:px-5 sm:py-5">
              <p className="text-[11px] uppercase tracking-[0.26em] text-zinc-500">
                Body copy · 13 pt
              </p>
              <p
                className={`mt-2 text-[13px] leading-relaxed text-zinc-200 sm:text-sm ${
                  isSerif ? 'font-times' : 'font-openSans'
                }`}
              >
                {isSerif
                  ? 'Set in a serif, paragraphs feel anchored and book-like. The horizontal serifs help lock letters into a strong baseline, which reduces fatigue in long reading.'
                  : 'Set in a sans-serif, paragraphs feel cleaner and more neutral. The simplified forms perform better on low-resolution screens and animated interfaces.'}
              </p>
            </div>
          </div>

          {/* Stylised “image” band acting as visual comparison */}
          <figure className="mt-4 rounded-2xl border border-zinc-800/80 bg-gradient-to-r from-slate-900 via-slate-950 to-slate-900 px-4 py-4 sm:px-5 sm:py-4">
            <figcaption className="mb-2 text-[11px] uppercase tracking-[0.24em] text-zinc-500">
              {isSerif ? 'Print layout emphasis' : 'UI layout emphasis'}
            </figcaption>
            <div className="grid grid-cols-2 gap-3 text-xs text-zinc-200">
              <div className="space-y-1">
                <p className="font-semibold text-zinc-100">
                  {isSerif ? 'Book spread' : 'Dashboard panel'}
                </p>
                <div
                  className={`mt-1 h-16 rounded-xl border border-zinc-800/80 bg-slate-950/80 ${
                    isSerif ? 'font-georgia' : 'font-roboto'
                  }`}
                  aria-hidden="true"
                >
                  <div className="flex h-full items-center justify-center gap-1 text-[11px] text-zinc-400">
                    <span className="rounded bg-slate-900/80 px-2 py-1">
                      {isSerif ? 'Chapter 01' : 'Widget 01'}
                    </span>
                    <span className="rounded bg-slate-900/80 px-2 py-1">
                      {isSerif ? 'Body text' : 'Live data'}
                    </span>
                  </div>
                </div>
              </div>
              <div className="space-y-1">
                <p className="font-semibold text-zinc-100">
                  {isSerif ? 'Cinema titles' : 'App navigation'}
                </p>
                <div
                  className={`mt-1 h-16 rounded-xl border border-zinc-800/80 bg-slate-950/80 ${
                    isSerif ? 'font-playfair' : 'font-helvetica'
                  }`}
                  aria-hidden="true"
                >
                  <div className="flex h-full items-center justify-center gap-2 text-[12px] text-zinc-200">
                    <span className="tracking-[0.25em] uppercase">
                      {isSerif ? 'Serif credits' : 'Sans tabs'}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </figure>
        </section>

        {/* Theory & usage notes */}
        <section aria-label="Serif vs sans-serif theory" className="space-y-4">
          <article className="card-surface border border-zinc-800/80 p-5 sm:p-6">
            <h3 className="text-base font-semibold text-zinc-50">
              {isSerif ? SERIF_TEXT.heading : SANS_TEXT.heading}
            </h3>
            <p className="mt-2 text-sm text-zinc-300">
              {isSerif ? SERIF_TEXT.body : SANS_TEXT.body}
            </p>

            <dl className="mt-4 grid gap-3 text-xs text-zinc-300 sm:grid-cols-2">
              <div>
                <dt className="text-[11px] uppercase tracking-[0.24em] text-zinc-500">
                  Historical context
                </dt>
                <dd className="mt-1">
                  {isSerif
                    ? 'Renaissance and transitional serifs evolved from calligraphy and letterpress.'
                    : 'Grotesque and neo-grotesque sans-serifs emerged with industrial printing and modernism.'}
                </dd>
              </div>
              <div>
                <dt className="text-[11px] uppercase tracking-[0.24em] text-zinc-500">
                  Readability focus
                </dt>
                <dd className="mt-1">
                  {isSerif
                    ? 'Optimised for continuous reading on paper with moderate contrast and comfortable spacing.'
                    : 'Optimised for quick scanning, UI labels, and responsive layouts across devices.'}
                </dd>
              </div>
              <div>
                <dt className="text-[11px] uppercase tracking-[0.24em] text-zinc-500">
                  Typical applications
                </dt>
                <dd className="mt-1">
                  {isSerif
                    ? 'Books, editorials, literary branding, and title sequences with a classic tone.'
                    : 'Apps, websites, signage, operating systems, and contemporary brand systems.'}
                </dd>
              </div>
              <div>
                <dt className="text-[11px] uppercase tracking-[0.24em] text-zinc-500">
                  Real-world examples
                </dt>
                <dd className="mt-1">
                  {isSerif
                    ? 'The New York Times, Penguin Classics, Vogue print edition.'
                    : 'Google (sans-serif logotype), wayfinding systems, operating system UI typography.'}
                </dd>
              </div>
            </dl>
          </article>

          <article className="card-surface border border-zinc-800/80 p-4 text-[11px] text-zinc-400 sm:p-5">
            <h4 className="text-xs font-semibold uppercase tracking-[0.26em] text-zinc-500">
              Designer note
            </h4>
            <p className="mt-2">
              Rather than asking “Which is better?”, ask “What problem am I solving?”. Many modern
              systems pair a serif display face with a sans-serif UI, using contrast to create a
              clear hierarchy.
            </p>
          </article>
        </section>
      </div>
    </div>
  )
}

