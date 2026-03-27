export interface CaseStudy {
  slug: string;
  title: string;
  description: string;
  href: string;
  cover?: string;
  meta: string;
  label?: string;
  tagline?: string;
  body?: string[];
  facts?: CaseStudyFact[];
  heroVisual?: CaseStudyScreenshot;
  heroVisuals?: CaseStudyScreenshot[];
  quote?: CaseStudyQuote;
  sections?: CaseStudySection[];
  screenshots: CaseStudyScreenshot[];
}

export interface CaseStudyFact {
  label: string;
  value: string;
}

export interface CaseStudyQuote {
  text: string;
  attribution?: string;
}

export interface CaseStudySection {
  eyebrow?: string;
  title: string;
  intro?: string;
  paragraphs?: string[];
  bullets?: string[];
  callout?: string;
  cards?: CaseStudyCardItem[];
  media?: CaseStudyScreenshot[];
  mediaLayout?: 'single' | 'two-up' | 'three-up';
}

export interface CaseStudyCardItem {
  title: string;
  body: string;
}

export interface CaseStudyScreenshot {
  src?: string;
  alt: string;
  label?: string;
  variant?: 'desktop' | 'mobile';
}
