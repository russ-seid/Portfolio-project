import { CaseStudy } from '@/types';
import { CaseStudyCard } from '@/components/ui/CaseStudyCard';

const caseStudies: CaseStudy[] = [
  {
    title: 'Athlete Intelligence',
    description: 'A performance and injury-risk decision system inside the FiyrPod Coach app',
    href: '/case-studies/athlete-intelligence',
  },
  {
    title: 'Video Highlights with GPS Overlay',
    description: 'Designed and shipped a video-to-data feature that increased engagement and drove organic growth',
    href: '/case-studies/video-highlights',
  },
  {
    title: 'Breakthru CRM',
    description: 'Designed and shipped a self-serve Community Hub builder, replacing a manual dev-dependent process',
    href: '/case-studies/breakthru-crm',
  },
  {
    title: 'Breakthru Hub',
    description: 'Redesigned engagement system for Breakthru CRM\u2019s customer community',
    href: '/case-studies/breakthru-hub',
  },
];

interface WorkSectionProps {
  className?: string;
}

export default function WorkSection({ className }: WorkSectionProps) {
  return (
    <section
      aria-label="Work"
      className={`pt-12 pb-16${className ? ` ${className}` : ''}`}
    >
      <div className="max-w-[1080px] mx-auto px-4 sm:px-16">
        <h2 className="text-[20px] font-semibold leading-[1.3] text-[#171717]">
          Work
        </h2>
        <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-6">
          {caseStudies.map((study) => (
            <CaseStudyCard
              key={study.title}
              title={study.title}
              description={study.description}
              href={study.href}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
