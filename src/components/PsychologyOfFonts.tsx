import { FONT_PSYCHOLOGY_STUDIES } from '../data/typefaces'

export function PsychologyOfFonts() {
  return (
    <div className="space-y-6">
      <p className="max-w-3xl text-sm text-zinc-400">
        Typefaces carry personality even before a word is read. Below, each case study combines
        history, tone, and real-world usage so you can match font psychology to the story you want
        to tell.
      </p>

      <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
        {FONT_PSYCHOLOGY_STUDIES.map((font) => (
          <article
            key={font.id}
            className="card-surface flex flex-col border border-zinc-800/80 p-5 sm:p-6"
          >
            {/* Large specimen */}
            <header className="space-y-2">
              <p className="text-[11px] uppercase tracking-[0.26em] text-zinc-500">Case study</p>
              <h3
                className="text-xl font-semibold text-zinc-50"
                style={{ fontFamily: font.cssStack }}
              >
                {font.name}
              </h3>
              <p className="text-[11px] text-zinc-400">{font.classification}</p>
              <p className="text-[11px] text-zinc-500">{font.era}</p>
            </header>

            {/* Faux brand / usage strip */}
            <figure className="mt-4 rounded-2xl border border-zinc-800/80 bg-slate-950/80 p-4">
              <figcaption className="mb-2 text-[11px] uppercase tracking-[0.24em] text-zinc-500">
                In the wild
              </figcaption>
              <div className="flex items-center justify-between gap-3 text-xs text-zinc-300">
                <div className="flex flex-col gap-1">
                  <span className="text-[11px] text-zinc-400">Brands & products</span>
                  <div className="flex flex-wrap gap-1.5">
                    {font.brands.map((brand) => (
                      <span
                        key={brand}
                        className="rounded-full border border-zinc-800/80 bg-slate-950/80 px-2 py-0.5 text-[11px]"
                      >
                        {brand}
                      </span>
                    ))}
                  </div>
                </div>
                {/* Abstract logo block as image substitute */}
                <div
                  className="h-12 w-20 rounded-xl border border-zinc-800/80 bg-gradient-to-br from-slate-900 via-slate-950 to-slate-900"
                  aria-hidden="true"
                >
                  <div
                    className="flex h-full items-center justify-center text-sm text-zinc-200"
                    style={{ fontFamily: font.cssStack }}
                  >
                    Aa
                  </div>
                </div>
              </div>
            </figure>

            <p className="mt-4 flex-1 text-sm text-zinc-300">{font.description}</p>

            <div className="mt-4 grid gap-3 text-[11px] text-zinc-300">
              <div>
                <p className="uppercase tracking-[0.24em] text-zinc-500">Psychological cues</p>
                <ul className="mt-1 flex flex-wrap gap-1.5">
                  {font.perceivedTraits.map((trait) => (
                    <li
                      key={trait}
                      className="rounded-full border border-zinc-800/80 bg-slate-950/80 px-2 py-0.5"
                    >
                      {trait}
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <p className="uppercase tracking-[0.24em] text-zinc-500">Common use cases</p>
                <ul className="mt-1 flex flex-wrap gap-1.5">
                  {font.commonUses.map((use) => (
                    <li
                      key={use}
                      className="rounded-full border border-zinc-800/80 bg-slate-950/80 px-2 py-0.5"
                    >
                      {use}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </article>
        ))}
      </div>
    </div>
  )
}

