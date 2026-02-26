import { useState } from 'react'
import { BRAND_CASE_STUDIES } from '../data/brands'

type BrandMode = 'current' | 'alternate'

export function BrandAnalysis() {
  const [mode, setMode] = useState<BrandMode>('current')
  const brand = BRAND_CASE_STUDIES[0]

  const isCurrent = mode === 'current'

  return (
    <div className="space-y-6">
      <p className="max-w-3xl text-sm text-zinc-400">
        Typography is a core part of brand voice. This case study looks at Airbnb’s friendly,
        product-focused sans-serif system and imagines an alternative built on a more editorial
        serif display face.
      </p>

      <div className="flex flex-wrap items-center gap-3">
        <div
          role="tablist"
          aria-label="Toggle between current and alternate typefaces for the brand"
          className="inline-flex rounded-full border border-zinc-800/80 bg-slate-950/80 p-1 text-xs shadow-sm"
        >
          <button
            type="button"
            role="tab"
            aria-selected={isCurrent}
            onClick={() => setMode('current')}
            className={`rounded-full px-3 py-1.5 font-medium transition-colors ${
              isCurrent ? 'bg-teal-400 text-slate-950' : 'text-zinc-300 hover:text-zinc-50'
            }`}
          >
            Current system
          </button>
          <button
            type="button"
            role="tab"
            aria-selected={!isCurrent}
            onClick={() => setMode('alternate')}
            className={`rounded-full px-3 py-1.5 font-medium transition-colors ${
              !isCurrent ? 'bg-teal-400 text-slate-950' : 'text-zinc-300 hover:text-zinc-50'
            }`}
          >
            Alternate typeface
          </button>
        </div>
        <span className="text-[11px] text-zinc-400">
          Slide between how the brand reads today and how it might feel with a different typographic
          voice.
        </span>
      </div>

      <div className="grid gap-6 md:grid-cols-[minmax(0,1.2fr)_minmax(0,1.4fr)] lg:gap-10">
        {/* Visual comparison */}
        <section aria-label="Brand logo and wordmark comparison" className="card-surface border border-zinc-800/80 p-5 sm:p-6">
          <header className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-slate-900/80">
              <span className="text-sm font-semibold text-zinc-100">A</span>
            </div>
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.26em] text-zinc-500">
                Brand case study
              </p>
              <p className="text-sm font-medium text-zinc-100">{brand.name}</p>
            </div>
          </header>

          <div className="mt-4 space-y-4">
            <figure className="rounded-2xl border border-zinc-800/80 bg-slate-950/80 p-4 sm:p-5">
              <figcaption className="mb-2 flex items-center justify-between gap-2 text-[11px] text-zinc-400">
                <span className="uppercase tracking-[0.24em] text-zinc-500">Logo lockup</span>
                <span className="rounded-full border border-zinc-800/80 bg-slate-950/80 px-2 py-0.5 text-[10px] text-zinc-400">
                  {isCurrent ? 'Current' : 'Alternate concept'}
                </span>
              </figcaption>

              <div className="flex flex-col items-start gap-3 sm:flex-row sm:items-center sm:justify-between">
                <div className="flex items-center gap-3">
                  <div className="h-30 w-30 overflow-hidden rounded-2xl border border-zinc-800/80 bg-slate-900/80">
                  <img
  src={isCurrent ? brand.logoSrcCurrent : brand.logoSrcAlternate}
  alt={brand.logoAlt}
  loading="lazy"
  className="h-full w-full object-contain"
/>
                  </div>
                  <div>
                    <p className="text-[11px] uppercase tracking-[0.24em] text-zinc-500">
                      Wordmark
                    </p>
                    <p
                      className="text-xl text-zinc-50"
                      style={{
                        fontFamily: isCurrent ? brand.currentCssStack : brand.alternateCssStack,
                      }}
                    >
                      airbnb
                    </p>
                  </div>
                </div>
              </div>
            </figure>

            <figure className="rounded-2xl border border-zinc-800/80 bg-slate-950/70 p-4 sm:p-5">
              <figcaption className="mb-2 text-[11px] uppercase tracking-[0.24em] text-zinc-500">
                Product UI sample
              </figcaption>
              <div className="grid gap-3 text-xs text-zinc-200 sm:grid-cols-2">
                <div className="space-y-1">
                  <p className="text-[11px] text-zinc-400">Navigation</p>
                  <div
                    className="flex gap-2 rounded-xl border border-zinc-800/80 bg-slate-950/80 px-3 py-2"
                    style={{ fontFamily: brand.currentCssStack }}
                  >
                    <span className="rounded-full bg-slate-900/80 px-2 py-1 text-[11px] text-zinc-100">
                      Stays
                    </span>
                    <span className="rounded-full bg-slate-900/80 px-2 py-1 text-[11px] text-zinc-300">
                      Experiences
                    </span>
                    <span className="rounded-full bg-slate-900/80 px-2 py-1 text-[11px] text-zinc-300">
                      Online
                    </span>
                  </div>
                </div>
                <div className="space-y-1">
                  <p className="text-[11px] text-zinc-400">Campaign headline (alternate)</p>
                  <div
                    className="rounded-xl border border-zinc-800/80 bg-slate-950/80 px-3 py-3"
                    style={{ fontFamily: brand.alternateCssStack }}
                  >
                    <p className="text-sm text-zinc-50">
                      Stay like a local.
                    </p>
                    <p className="text-[11px] text-zinc-300">
                      A more editorial tone emphasises story and character.
                    </p>
                  </div>
                </div>
              </div>
            </figure>
          </div>
        </section>

        {/* Textual analysis */}
        <section aria-label="Brand typography analysis" className="card-surface border border-zinc-800/80 p-5 sm:p-6">
          <header className="space-y-1">
            <p className="text-[11px] uppercase tracking-[0.26em] text-zinc-500">Typography & values</p>
            <h3 className="text-base font-semibold text-zinc-50">
              {isCurrent ? 'How the current typeface supports the brand' : 'What an alternate serif would change'}
            </h3>
          </header>

          <div className="mt-4 space-y-3 text-sm text-zinc-300">
            <p>{isCurrent ? brand.currentAnalysis : brand.alternateAnalysis}</p>
            <div>
              <p className="text-[11px] uppercase tracking-[0.24em] text-zinc-500">
                Core brand values
              </p>
              <ul className="mt-1 flex flex-wrap gap-1.5 text-[11px]">
                {brand.values.map((value) => (
                  <li
                    key={value}
                    className="rounded-full border border-zinc-800/80 bg-slate-950/80 px-2.5 py-0.5 text-zinc-200"
                  >
                    {value}
                  </li>
                ))}
              </ul>
            </div>

            <div className="grid gap-3 text-[12px] text-zinc-200 sm:grid-cols-2">
              <div>
                <p className="text-[11px] uppercase tracking-[0.24em] text-zinc-500">
                  Current system · pros
                </p>
                <ul className="mt-1 list-disc space-y-1 pl-4">
                  {brand.prosCurrent.map((point) => (
                    <li key={point}>{point}</li>
                  ))}
                </ul>
              </div>
              <div>
                <p className="text-[11px] uppercase tracking-[0.24em] text-zinc-500">
                  Alternate display · pros
                </p>
                <ul className="mt-1 list-disc space-y-1 pl-4">
                  {brand.prosAlternate.map((point) => (
                    <li key={point}>{point}</li>
                  ))}
                </ul>
              </div>
            </div>

            <p className="mt-2 text-[11px] text-zinc-400">
              In practice, many brands pair a stable sans-serif system for product with a more
              expressive serif or script reserved for campaigns and storytelling moments.
            </p>
          </div>
        </section>
      </div>
    </div>
  )
}

