import { TYPEFACE_CATEGORIES, type TypefaceCategory } from '../data/typefaces'

type ClassificationCardProps = {
  category: TypefaceCategory
}

const SAMPLE_PHRASE = 'The quick brown fox jumps over the lazy dog.'

function ClassificationCard({ category }: ClassificationCardProps) {
  return (
    <article className="card-surface flex flex-col justify-between border border-zinc-800/80 p-5 sm:p-6">
      <header className="mb-4 space-y-2">
        <div className="flex items-center justify-between gap-3">
          <h3 className="text-lg font-semibold text-zinc-50">{category.name}</h3>
          <span className="pill text-[10px] uppercase tracking-[0.26em] text-zinc-400">
            {category.id === 'mono'
              ? 'Fixed-width'
              : category.id === 'script'
                ? 'Expressive'
                : 'Text family'}
          </span>
        </div>
        <p className="text-xs text-zinc-400">{category.description}</p>
        <p className="text-[11px] font-medium text-teal-300">{category.tone}</p>
      </header>

      <div className="space-y-4">
        <ul className="space-y-3">
          {category.samples.map((sample) => (
            <li
              key={sample.id}
              className="rounded-xl border border-zinc-800/80 bg-slate-950/60 px-3 py-3"
            >
              <div className="flex items-baseline justify-between gap-2">
                <p
                  style={{ fontFamily: sample.cssStack }}
                  className="truncate text-sm font-medium text-zinc-50"
                >
                  {sample.name}
                </p>
                <span className="text-[10px] uppercase tracking-[0.24em] text-zinc-500">
                  Sample
                </span>
              </div>
              <p
                style={{ fontFamily: sample.cssStack }}
                className="mt-1 text-xs text-zinc-200"
              >
                {SAMPLE_PHRASE}
              </p>
              <p className="mt-1 text-[11px] text-zinc-400">{sample.note}</p>
            </li>
          ))}
        </ul>

        <div className="border-t border-dashed border-zinc-800/80 pt-3">
          <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-zinc-400">
            Where this shines
          </p>
          <ul className="mt-1.5 flex flex-wrap gap-1.5">
            {category.recommendedUses.map((use) => (
              <li
                key={use}
                className="rounded-full border border-zinc-800/80 bg-slate-950/80 px-2.5 py-0.5 text-[11px] text-zinc-300"
              >
                {use}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </article>
  )
}

export function TypefaceClassification() {
  return (
    <div className="space-y-6">
      <p className="max-w-2xl text-sm text-zinc-400">
        Type families behave like actors cast for specific roles. Compare each category below and
        notice how the same sentence feels different as the voice changes.
      </p>
      <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
        {TYPEFACE_CATEGORIES.map((category) => (
          <ClassificationCard key={category.id} category={category} />
        ))}
      </div>
    </div>
  )
}

