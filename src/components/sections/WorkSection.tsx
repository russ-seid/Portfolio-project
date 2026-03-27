import { getCaseStudies } from '@/data/case-studies';
import { CaseStudyCard } from '@/components/ui/CaseStudyCard';

interface WorkSectionProps {
  className?: string;
}

export default function WorkSection({ className }: WorkSectionProps) {
  const caseStudies = getCaseStudies();

  return (
    <section
      aria-label="Work"
      className={`pb-36 pt-24 sm:pb-44 sm:pt-24${className ? ` ${className}` : ''}`}
    >
      <div className="max-w-[1080px] mx-auto px-4 sm:px-16">
        <p className="text-[11px] font-medium uppercase tracking-[0.12em] text-neutral-400 mb-10">
          Selected Work
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {caseStudies.map((study) => (
            <CaseStudyCard
              key={study.title}
              title={study.title}
              description={study.description}
              href={study.href}
              cover={study.cover}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
