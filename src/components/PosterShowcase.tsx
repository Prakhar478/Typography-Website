export function PosterShowcase() {
    return (
      <div className="space-y-8">
        <p className="max-w-3xl text-sm md:text-base text-zinc-400">
          This poster demonstrates the power of typographic pairing—combining serif and sans-serif fonts to create visual hierarchy, emotional impact, and professional clarity. It shows how typeface choices work together to communicate both artistry and accessibility.
        </p>
  
        {/* Poster Image */}
        {/* Poster Image */}
        <div className="flex justify-center">
  <div className="rounded-2xl border border-zinc-700/80 overflow-hidden bg-slate-950/60 p-4 max-w-md">
    <img
      src="/images/posters/typography-poster.webp"
      alt="Typography Assignment Poster"
      className="w-full h-auto"
      loading="lazy"
    />
  </div>
</div>
  
        {/* Typography Analysis */}
        <div className="grid gap-6 md:grid-cols-2">
          {/* Serif Section */}
          <div className="rounded-xl border border-zinc-700/70 bg-slate-950/60 p-6">
            <p className="text-xs font-semibold uppercase tracking-[0.26em] text-zinc-500 mb-3">
              Serif Fonts
            </p>
            <p className="text-sm text-zinc-300 mb-3">
              Used for primary headings and main quotes (Playfair Display).
            </p>
            <ul className="space-y-2 text-xs text-zinc-400">
              <li className="flex gap-2">
                <span className="text-teal-400">•</span>
                <span><span className="text-zinc-300 font-medium">Luxury & Heritage:</span> Established, high-end, boutique aesthetic</span>
              </li>
              <li className="flex gap-2">
                <span className="text-teal-400">•</span>
                <span><span className="text-zinc-300 font-medium">Craftsmanship:</span> Hand-crafted, artisanal, traditional feel</span>
              </li>
              <li className="flex gap-2">
                <span className="text-teal-400">•</span>
                <span><span className="text-zinc-300 font-medium">Literary:</span> Prestigious, sophisticated, editorial voice</span>
              </li>
            </ul>
          </div>
  
          {/* Sans-Serif Section */}
          <div className="rounded-xl border border-zinc-700/70 bg-slate-950/60 p-6">
            <p className="text-xs font-semibold uppercase tracking-[0.26em] text-zinc-500 mb-3">
              Sans-Serif Fonts
            </p>
            <p className="text-sm text-zinc-300 mb-3">
              Used for subheaders and descriptions (Open Sans, etc).
            </p>
            <ul className="space-y-2 text-xs text-zinc-400">
              <li className="flex gap-2">
                <span className="text-emerald-400">•</span>
                <span><span className="text-zinc-300 font-medium">Modernity & Tech:</span> Clean, geometric, forward-thinking</span>
              </li>
              <li className="flex gap-2">
                <span className="text-emerald-400">•</span>
                <span><span className="text-zinc-300 font-medium">Accessibility:</span> Highly legible, friendly, inclusive</span>
              </li>
              <li className="flex gap-2">
                <span className="text-emerald-400">•</span>
                <span><span className="text-zinc-300 font-medium">Neutrality:</span> Functional anchor, organized, professional</span>
              </li>
            </ul>
          </div>
        </div>
  
        {/* The Mix Section */}
        <div className="rounded-xl border border-zinc-700/70 bg-slate-950/60 p-6">
          <p className="text-xs font-semibold uppercase tracking-[0.26em] text-zinc-500 mb-4">
            The Professional Mix
          </p>
          <p className="text-sm text-zinc-300 mb-4">
            Pairing serif and sans-serif creates a typographic hierarchy that balances emotion with clarity.
          </p>
          <div className="grid gap-4 sm:grid-cols-2">
            <div className="rounded-lg border border-zinc-700/50 bg-slate-950/40 p-4">
              <p className="text-xs font-semibold text-teal-400 mb-2">Serif: The Hero</p>
              <p className="text-xs text-zinc-400">
                Grabs attention, provides emotional soul and artistic character.
              </p>
            </div>
            <div className="rounded-lg border border-zinc-700/50 bg-slate-950/40 p-4">
              <p className="text-xs font-semibold text-emerald-400 mb-2">Sans-Serif: The Guide</p>
              <p className="text-xs text-zinc-400">
                Provides clear information, ensures organization and professionalism.
              </p>
            </div>
          </div>
        </div>
      </div>
    )
  }