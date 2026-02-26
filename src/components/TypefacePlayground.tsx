import { useState } from 'react'
import { PLAYGROUND_TYPEFACES, type PlaygroundTypeface } from '../data/typefaces'

const DEFAULT_TEXT = 'Hello, typography!'

function PlaygroundFontButton({
  face,
  isActive,
  onSelect,
}: {
  face: PlaygroundTypeface
  isActive: boolean
  onSelect: () => void
}) {
  return (
    <button
      type="button"
      onClick={onSelect}
      aria-pressed={isActive}
      className={`flex w-full items-center justify-between gap-2 rounded-xl border px-3 py-2 text-left text-xs transition-colors ${
        isActive
          ? 'border-teal-400 bg-slate-950/90 text-zinc-50'
          : 'border-zinc-800/80 bg-slate-950/70 text-zinc-200 hover:border-teal-300/80'
      }`}
    >
      <div className="flex flex-col">
        <span className="font-medium text-[12px]">{face.name}</span>
        <span className="text-[11px] text-zinc-400">{face.category}</span>
      </div>
      <span
        className="hidden rounded-full border border-zinc-700/80 bg-slate-950/80 px-2 py-0.5 text-[10px] text-zinc-400 sm:inline"
        style={{ fontFamily: face.cssStack }}
      >
        Aa
      </span>
    </button>
  )
}

export function TypefacePlayground() {
  const [inputText, setInputText] = useState(DEFAULT_TEXT)
  const [selectedId, setSelectedId] = useState(PLAYGROUND_TYPEFACES[0]?.id ?? 'georgia')
  const [fontSize, setFontSize] = useState(48)

  const activeFace =
    PLAYGROUND_TYPEFACES.find((face) => face.id === selectedId) ?? PLAYGROUND_TYPEFACES[0]

  return (
    <div className="grid gap-8 md:grid-cols-[minmax(0,1.1fr)_minmax(0,1.4fr)] lg:gap-10">
      {/* Controls */}
      <section aria-label="Typeface playground controls" className="space-y-5">
        <div className="card-surface border border-zinc-800/80 p-5 sm:p-6">
          <label className="block text-xs font-semibold uppercase tracking-[0.26em] text-zinc-400">
            Your text
            <span className="ml-1 text-[11px] font-normal text-zinc-500">
              (try a brand name or title)
            </span>
          </label>
          <input
            type="text"
            value={inputText}
            onChange={(event) => setInputText(event.target.value)}
            placeholder={DEFAULT_TEXT}
            className="mt-2 w-full rounded-xl border border-zinc-800/80 bg-slate-950/80 px-3 py-2 text-sm text-zinc-50 outline-none ring-0 focus:border-teal-400 focus:ring-1 focus:ring-teal-500/60"
          />

          <div className="mt-4">
            <label
              htmlFor="font-size-slider"
              className="flex items-center justify-between text-[11px] text-zinc-400"
            >
              <span className="uppercase tracking-[0.24em]">Font size</span>
              <span className="text-zinc-300">{fontSize}px</span>
            </label>
            <input
              id="font-size-slider"
              type="range"
              min={24}
              max={96}
              step={2}
              value={fontSize}
              onChange={(event) => setFontSize(Number(event.target.value))}
              className="mt-2 w-full accent-teal-400"
            />
          </div>
        </div>

        <div className="card-surface border border-zinc-800/80 p-4 sm:p-5">
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.26em] text-zinc-400">
            Typeface palette
          </p>
          <div className="grid grid-cols-2 gap-2 text-xs sm:grid-cols-2">
            {PLAYGROUND_TYPEFACES.map((face) => (
              <PlaygroundFontButton
                key={face.id}
                face={face}
                isActive={face.id === activeFace.id}
                onSelect={() => setSelectedId(face.id)}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Live preview */}
      <section aria-label="Typeface preview" className="card-surface border border-zinc-800/80 p-5 sm:p-6">
        <header className="flex flex-wrap items-baseline justify-between gap-3">
          <div>
            <p className="text-[11px] uppercase tracking-[0.26em] text-zinc-500">Live specimen</p>
            <p className="mt-1 text-sm text-zinc-300">
              {activeFace.name} · {activeFace.category}
            </p>
          </div>
          <div className="flex flex-wrap gap-2 text-[11px] text-zinc-400">
            <span className="rounded-full border border-zinc-800/80 bg-slate-950/80 px-2 py-0.5">
              x-height: {activeFace.metrics.xHeight}
            </span>
            <span className="rounded-full border border-zinc-800/80 bg-slate-950/80 px-2 py-0.5">
              stroke: {activeFace.metrics.stroke}
            </span>
          </div>
        </header>

        <div className="mt-5 rounded-2xl border border-zinc-800/80 bg-slate-950/80 px-4 py-6 sm:px-6 sm:py-8">
          <p
            className="break-words text-zinc-50"
            style={{
              fontFamily: activeFace.cssStack,
              fontSize: `${fontSize}px`,
              lineHeight: 1.1,
            }}
          >
            {inputText.trim().length > 0 ? inputText : DEFAULT_TEXT}
          </p>
        </div>

        <dl className="mt-4 grid gap-3 text-[11px] text-zinc-300 sm:grid-cols-3">
          <div>
            <dt className="uppercase tracking-[0.24em] text-zinc-500">Category</dt>
            <dd className="mt-1">{activeFace.category}</dd>
          </div>
          <div className="sm:col-span-2">
            <dt className="uppercase tracking-[0.24em] text-zinc-500">Design notes</dt>
            <dd className="mt-1 text-zinc-300">{activeFace.description}</dd>
          </div>
        </dl>
      </section>
    </div>
  )
}

