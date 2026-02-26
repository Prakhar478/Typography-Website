export function SiteFooter() {
  return (
    <footer className="border-t border-zinc-800/80 bg-slate-950/95">
      <div className="section-shell py-8 md:py-10">
        <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.26em] text-zinc-500">
              Graphics Animation Tools
            </p>
            <p className="mt-1 text-sm text-zinc-100">
              Interactive Typography Assignment · Instructor: Pankaj Badoni
            </p>
            <p className="mt-1 text-xs text-zinc-400">
              Student: Prakhar Srivastava · Semester: 4th
            </p>
          </div>
          <div className="flex flex-col items-start gap-2 text-xs text-zinc-400 md:items-end">
            <button
              type="button"
              onClick={() => {
                window.scrollTo({ top: 0, behavior: 'smooth' })
              }}
              className="ghost-button"
            >
              Back to top
            </button>
          
          </div>
        </div>
      </div>
    </footer>
  )
}

