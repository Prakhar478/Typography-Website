import { useState, useEffect, useRef } from 'react'

function useInView(threshold = 0.15) {
  const ref = useRef<HTMLDivElement>(null)
  const [inView, setInView] = useState(false)
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setInView(true); observer.disconnect() } },
      { threshold }
    )
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [threshold])
  return { ref, inView }
}
import './index.css'
import { TypographyAnatomy } from './components/TypographyAnatomy'
import { TypefaceClassification } from './components/TypefaceClassification'
import { SerifVsSans } from './components/SerifVsSans'
import { PsychologyOfFonts } from './components/PsychologyOfFonts'
import { TypefacePlayground } from './components/TypefacePlayground'
import { EmotionCanvas } from './components/EmotionCanvas'
import { BrandAnalysis } from './components/BrandAnalysis'
import { SiteFooter } from './components/SiteFooter'
import { PosterShowcase } from './components/PosterShowcase'


type SectionId =
  | 'hero'
  | 'anatomy'
  | 'classification'
  | 'serif-sans'
  | 'psychology'
  | 'playground'
  | 'emotion'
  | 'brand-analysis'
  | 'poster'

const sections: { id: SectionId; label: string }[] = [
  { id: 'anatomy', label: 'Typography Anatomy' },
  { id: 'classification', label: 'Typeface Classification' },
  { id: 'serif-sans', label: 'Serif vs Sans-serif' },
  { id: 'psychology', label: 'Psychology of Fonts' },
  { id: 'playground', label: 'Interactive Playground' },
  { id: 'emotion', label: 'Emotion Canvas' },
  { id: 'brand-analysis', label: 'Brand Analysis' },
  { id: 'poster', label: 'Poster' },
]

function NavBar() {
  const [isOpen, setIsOpen] = useState(false)
  const [activeSection, setActiveSection] = useState<SectionId | ''>('')

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id as SectionId)
          }
        })
      },
      { rootMargin: '-40% 0px -55% 0px' }
    )
    sections.forEach(({ id }) => {
      const el = document.getElementById(id)
      if (el) observer.observe(el)
    })
    return () => observer.disconnect()
  }, [])

  return (
    <header className="fixed inset-x-0 top-0 z-40 border-b border-zinc-800/80 bg-slate-950/85 backdrop-blur-md">
      <nav
        className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3 sm:px-6 lg:px-8"
        aria-label="Primary"
      >
        <div className="flex items-center gap-3">
        <div className="flex h-8 w-8 items-center justify-center rounded-xl bg-gradient-to-tr from-teal-300 via-amber-200 to-pink-400 text-xs font-semibold text-slate-950 shadow-lg transition-transform duration-300 hover:scale-110 hover:rotate-6">
            T
          </div>
          <div className="flex flex-col">
            
            <span className="text-sm font-medium text-zinc-100">
              Interactive Typography Studio
            </span>
          </div>
        </div>

        <div className="hidden items-center gap-8 md:flex">
          <ul className="flex items-center gap-6 text-xs">
            {sections.map((section) => (
              <li key={section.id}>
                <a
                  href={`#${section.id}`}
                  className={`nav-link transition-colors duration-200 ${
                    activeSection === section.id
                      ? 'text-teal-300 font-semibold'
                      : ''
                  }`}
                >
                  {section.label}
                </a>
              </li>
            ))}
          </ul>
          <div className="hidden items-center gap-3 lg:flex">
            <span className="pill border-teal-300/60 bg-slate-950/80 text-[10px] uppercase tracking-[0.22em] text-teal-300">
              Typography Assignment
            </span>
            <span className="text-[11px] text-zinc-400">
              Instructor: <span className="font-medium text-zinc-200">Pankaj Badoni</span>
            </span>
          </div>
        </div>

        <button
          type="button"
          className="inline-flex items-center justify-center rounded-full border border-zinc-700/80 bg-slate-950/70 p-2 text-zinc-200 md:hidden"
          aria-label="Toggle navigation menu"
          aria-expanded={isOpen}
          onClick={() => setIsOpen((open) => !open)}
        >
          <span className="sr-only">Open navigation</span>
          <svg
            className="h-4 w-4"
            viewBox="0 0 24 24"
            aria-hidden="true"
          >
            {isOpen ? (
              <path
                d="M6 6L18 18M6 18L18 6"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
              />
            ) : (
              <path
                d="M4 7h16M4 12h16M4 17h16"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
              />
            )}
          </svg>
        </button>
      </nav>

      {isOpen && (
        <div className="border-t border-zinc-800/80 bg-slate-950/95 px-4 pb-4 pt-2 md:hidden">
          <ul className="flex flex-col gap-3 text-sm">
            {sections.map((section) => (
              <li key={section.id}>
                <a
                  href={`#${section.id}`}
                  className={`nav-link block py-1.5 transition-colors duration-200 ${
                    activeSection === section.id
                      ? 'text-teal-300 font-semibold'
                      : ''
                  }`}
                  onClick={() => setIsOpen(false)}
                >
                  {section.label}
                </a>
              </li>
            ))}
          </ul>
          <div className="mt-4 flex flex-col gap-1 text-[11px] text-zinc-400">
            <span className="font-medium text-zinc-200">
              Typography Assignment
            </span>
            <span>Instructor: Pankaj Badoni</span>
          </div>
        </div>
      )}
    </header>
  )
}

type SectionShellProps = {
  id?: string
  eyebrow?: string
  title: string
  subtitle?: string
  children: React.ReactNode
  backgroundVariant?: 'default' | 'subtle' | 'emotional'
}

function SectionShell({
  id,
  eyebrow,
  title,
  subtitle,
  children,
  backgroundVariant = 'default',
}: SectionShellProps) {
  const backgroundClasses =
    backgroundVariant === 'emotional'
      ? 'bg-slate-950'
      : backgroundVariant === 'subtle'
        ? 'bg-slate-950/90'
        : 'bg-slate-950'

        const { ref, inView } = useInView()

        return (
          <section
            id={id}
            className={`section-shell ${backgroundClasses}`}
            aria-labelledby={id ? `${id}-heading` : undefined}
          >
            <div className="space-y-10 md:space-y-12">
              <header
                ref={ref}
                className="max-w-3xl"
              >
                {eyebrow && (
                  <p className={`section-eyebrow transition-all duration-500 ${inView ? 'animate-fade-in' : 'opacity-0'}`}>
                    {eyebrow}
                  </p>
                )}
                <h2
                  id={id ? `${id}-heading` : undefined}
                  className={`section-title transition-all duration-700 ${inView ? 'animate-fade-up' : 'opacity-0'}`}
                >
                  {title}
                </h2>
                {subtitle && (
                  <p className={`section-subtitle transition-all duration-700 animate-delay-200 ${inView ? 'animate-fade-up' : 'opacity-0'}`}>
                    {subtitle}
                  </p>
                )}
              </header>
              {children}
            </div>
          </section>
        )
}

function HeroSection() {
  return (
    <section
      id="hero"
      className="section-shell relative overflow-hidden pt-28 pb-20 md:pt-32 md:pb-24"
      aria-labelledby="hero-heading"
    >
      <div className="pointer-events-none absolute inset-0 opacity-70 mix-blend-screen">
        <div className="absolute -top-40 left-10 h-72 w-72 rounded-full bg-teal-400/20 blur-3xl" />
        <div className="absolute -bottom-32 right-0 h-80 w-80 rounded-full bg-pink-400/30 blur-3xl" />
      </div>

      <div className="relative flex flex-col gap-10 md:flex-row md:items-center">
        <div className="flex-1 space-y-6">
        <p className="section-eyebrow animate-fade-in">Typography as an interactive system</p>
          <h1
            id="hero-heading"
            className="text-balance text-4xl font-display tracking-tight text-zinc-50 sm:text-5xl lg:text-6xl animate-fade-up animate-delay-100"
          >
            <span className="block text-gradient">Typography</span>
            
          </h1>
          <p className="max-w-xl text-sm md:text-base text-zinc-400 animate-fade-up animate-delay-200">
            Explore the anatomy, psychology, and expressive power of type through a series of
            interactive experiments.
          </p>
          <div className="flex flex-wrap items-center gap-3 pt-2">
            <a href="#playground" className="primary-button">
              Start in the type playground
            </a>
            <a href="#anatomy" className="ghost-button">
              Learn the anatomy first
            </a>
            <div className="flex items-center gap-2 text-[11px] text-zinc-400">
              <span className="h-1.5 w-1.5 rounded-full bg-teal-300 animate-soft-pulse" />
              <span>Live, interactive typography specimens</span>
            </div>
          </div>
        </div>

        <div className="card-surface relative flex-1 overflow-hidden border border-zinc-700/80 px-6 py-7 sm:px-8 sm:py-9 animate-slide-left animate-delay-300">
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(61,213,198,0.22),_transparent_55%),radial-gradient(circle_at_bottom,_rgba(244,114,182,0.2),_transparent_55%)] opacity-80" />
          <div className="relative space-y-4">
            <div className="flex items-baseline justify-between text-xs text-zinc-400">
            <span className="pill bg-slate-950/80 text-[10px] uppercase tracking-[0.22em] text-zinc-300">
                Typographic specimen · Live
              </span>
              <span>Drag your eye across the forms.</span>
            </div>
            <div className="rounded-2xl border border-zinc-700/70 bg-slate-950/80 px-4 py-6 sm:px-6 sm:py-7">
              <p className="mb-1 text-[11px] uppercase tracking-[0.3em] text-zinc-500">
                Display · Playfair / Sans · Open Sans
              </p>
              <p className="font-display text-[40px] leading-none text-zinc-50 sm:text-[52px] md:text-[56px]">
                Typography
              </p>
              <p className="mt-3 text-xs text-zinc-400 sm:text-sm">
                Baseline, x-height, contrast and rhythm work together to create voice and motion.
              </p>
            </div>
            <dl className="grid grid-cols-3 gap-3 text-[11px] text-zinc-400 sm:text-xs">
              <div className="rounded-xl border border-zinc-700/70 bg-slate-950/60 px-3 py-3">
                <dt className="text-[10px] uppercase tracking-[0.22em] text-zinc-500">
                  Serif vs Sans
                </dt>
                <dd className="mt-1 font-medium text-zinc-100">Contrast & rhythm</dd>
              </div>
              <div className="rounded-xl border border-zinc-700/70 bg-slate-950/60 px-3 py-3">
                <dt className="text-[10px] uppercase tracking-[0.22em] text-zinc-500">
                  Emotion
                </dt>
                <dd className="mt-1 font-medium text-zinc-100">Tone & personality</dd>
              </div>
              <div className="rounded-xl border border-zinc-700/70 bg-slate-950/60 px-3 py-3">
                <dt className="text-[10px] uppercase tracking-[0.22em] text-zinc-500">
                  Function
                </dt>
                <dd className="mt-1 font-medium text-zinc-100">Legibility in motion</dd>
              </div>
            </dl>
          </div>
        </div>
      </div>
    </section>
  )
}

function App() {
  return (
    <div className="page-shell">
      <NavBar />
      <main>
        <HeroSection />
        <SectionShell
          id="anatomy"
          eyebrow="Foundations"
          title="Typography anatomy"
          subtitle="Before we choose typefaces, we need to understand how letters are constructed. Hover over the diagram to reveal the building blocks of every font."
        >
          <TypographyAnatomy />
        </SectionShell>

        <SectionShell
          id="classification"
          eyebrow="Taxonomy"
          title="Typeface classification"
          subtitle="Serif, sans-serif, script, display and monospace each carry a different voice. Here’s how they behave using the same sample sentence."
        >
          <TypefaceClassification />
        </SectionShell>

        <SectionShell
          id="serif-sans"
          eyebrow="Comparative practice"
          title="Serif vs sans-serif in context"
          subtitle="Compare how the same content feels when set in a traditional serif for print versus a neutral sans-serif for screen-based interfaces."
        >
          <SerifVsSans />
        </SectionShell>

        <SectionShell
          id="psychology"
          eyebrow="Perception"
          title="Psychology of fonts"
          subtitle="Each typeface sends a psychological signal. Compare how different fonts support (or sabotage) the message behind a brand or interface."
        >
          <PsychologyOfFonts />
        </SectionShell>

        <SectionShell
          id="playground"
          eyebrow="Hands-on"
          title="Interactive typeface playground"
          subtitle="Type your own words and cycle through typefaces to feel how subtle changes in x-height, stroke weight and category reshape the message."
        >
          <TypefacePlayground />
        </SectionShell>

        <SectionShell
          id="emotion"
          eyebrow="Expressive typography"
          title="Emotion canvas"
          subtitle="Map emotions to typography by combining typeface choice, spacing, colour and motion. Use this as a sketching space for expressive titles."
          backgroundVariant="emotional"
        >
          <EmotionCanvas />
        </SectionShell>

        <SectionShell
          id="brand-analysis"
          eyebrow="Identity"
          title="Brand identity and type"
          subtitle="Analyse how typeface choices reinforce a brand’s values, then preview how an alternate typeface would shift the tone."
        >
          <BrandAnalysis />
        </SectionShell>
        <SectionShell
  id="poster"
  eyebrow="Visual synthesis"
  title="Assignment poster"
  subtitle="A comprehensive visual exploration of typography principles and their application in contemporary design."
>
  <PosterShowcase />
</SectionShell>
      </main>
      <SiteFooter />
    </div>
  )
}

export default App
