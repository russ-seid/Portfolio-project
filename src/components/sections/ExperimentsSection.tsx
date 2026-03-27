import UIExplorationCarousel from '@/components/sections/UIExplorationCarousel';

interface ExperimentsSectionProps {
  className?: string;
}

const sideProjects = [
  {
    title: 'Gradient Tool for Figma',
    href: 'https://urban-gale-90232118.figma.site/',
    eyebrow: 'Tool',
    outcome: 'Personal experiment',
  },
  {
    title: 'Are Designers Cooked?',
    href: 'https://are-designers-cooked.vercel.app/',
    eyebrow: 'Vibe-coded project',
    outcome: '40K+ LinkedIn impressions',
  },
  {
    title: '3D Museum',
    href: 'https://earth-sweet-53668200.figma.site/',
    eyebrow: 'Makeathon project',
    outcome: 'Experimental 3D experience',
  },
];

const uiExplorations = [
  {
    src: '/images/ui-explorations/hero-1.png',
    alt: 'Mobile marketing site and quote form concept for a design studio',
  },
  {
    src: '/images/ui-explorations/hero-2.png',
    alt: 'Visual interface exploration from Russ Seidametov UI studies',
  },
  {
    src: '/images/ui-explorations/hero-3.png',
    alt: 'UI concept exploration from Russ Seidametov visual studies',
  },
  {
    src: '/images/ui-explorations/hero-4.png',
    alt: 'Editorial landing page concept for an architecture studio',
  },
  {
    src: '/images/ui-explorations/hero-5.png',
    alt: 'Additional UI concept exploration from Russ Seidametov visual studies',
  },
  {
    src: '/images/ui-explorations/hero-6.png',
    alt: 'Dashboard concept with AI suggestions, invoicing, and project management',
  },
  {
    src: '/images/ui-explorations/hero-7.png',
    alt: 'Mobile fitness app concepts featuring a leaderboard and route tracking view',
  },
];

export default function ExperimentsSection({ className }: ExperimentsSectionProps) {
  return (
    <section
      aria-label="Experiments and UI explorations"
      className={`pb-40 pt-8${className ? ` ${className}` : ''}`}
    >
      <div className="mx-auto max-w-[1080px] px-4 sm:px-16">
        <p className="mb-10 text-[11px] font-medium uppercase tracking-[0.12em] text-neutral-400">
          Experiments
        </p>

        <div className="grid grid-cols-1 gap-4 xl:grid-cols-3">
          {sideProjects.map((project) => (
            <a
              key={project.title}
              href={project.href}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex h-full flex-col rounded-[18px] border border-[#ece9e1] bg-white p-6 shadow-[0_1px_0_rgba(23,23,23,0.03)] transition-[border-color,box-shadow] duration-200 hover:border-[#d6d0c4] hover:shadow-[0_14px_36px_rgba(23,23,23,0.06)] focus-visible:outline-2 focus-visible:outline-neutral-900 focus-visible:outline-offset-2 sm:p-7"
            >
              <p className="text-[11px] font-medium uppercase tracking-[0.12em] text-[#8a8478]">
                {project.eyebrow}
              </p>
              <h3 className="mt-4 text-[22px] font-semibold leading-[1.15] text-[#171717]">
                {project.title}
              </h3>
              <div className="mt-auto flex flex-col gap-3 pt-8 text-[13px] text-[#8a8478]">
                <span>{project.outcome}</span>
                <span className="font-medium text-[#171717] transition-colors group-hover:text-[#6e6a62]">
                  Open project ↗
                </span>
              </div>
            </a>
          ))}
        </div>

        <UIExplorationCarousel title="UI Explorations" items={uiExplorations} />
      </div>
    </section>
  );
}
