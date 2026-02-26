export type BrandCaseStudy = {
  id: string
  name: string
  logoSrcCurrent: string
  logoSrcAlternate: string
  logoAlt: string
  currentTypefaceName: string
  currentCssStack: string
  alternateTypefaceName: string
  alternateCssStack: string
  values: string[]
  currentAnalysis: string
  alternateAnalysis: string
  prosCurrent: string[]
  prosAlternate: string[]
}

export const BRAND_CASE_STUDIES: BrandCaseStudy[] = [
  {
    id: 'airbnb',
    name: 'Airbnb',
    logoSrcCurrent: '/images/brands/airbnb-new.webp',
    logoSrcAlternate: '/images/brands/airbnb-old.webp',
    logoAlt: 'Airbnb logo',
    currentTypefaceName: 'Airbnb Cereal (approximated with Open Sans)',
    currentCssStack: '"Open Sans", system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
    alternateTypefaceName: 'Playfair Display',
    alternateCssStack: '"Playfair Display", "Times New Roman", serif',
    values: ['Belonging', 'Warmth', 'Global community', 'Approachable technology'],
    currentAnalysis:
      "Airbnb's current typography leans on a soft, geometric sans-serif with open counters and friendly curves. Our approximation with Open Sans preserves that warmth and accessibility: it feels digital-first without becoming cold or corporate. In UI, the even rhythm and clear forms scale well across languages and screen sizes.",
    alternateAnalysis:
      "Switching the primary wordmark to Playfair Display would immediately tilt the brand toward a more editorial, boutique-hotel aesthetic. The high contrast and sharp serifs feel luxurious and crafted, but risk losing the inclusive, tech-forward tone that has made Airbnb feel everyday and accessible.",
    prosCurrent: [
      'Feels friendly and approachable when paired with the "Bélo" symbol.',
      'Scales well from app UI labels to marketing landing pages.',
      'Supports localisation and dense interface copy without becoming noisy.',
    ],
    prosAlternate: [
      'Adds a premium, editorial flavour suitable for high-end stays.',
      'Creates stronger contrast with neutral UI sans-serifs in product screens.',
      'Could be reserved for campaign headlines or hero typography without changing the core UI.',
    ],
  },
]