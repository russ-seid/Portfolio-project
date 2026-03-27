import { CaseStudyFact } from '@/types';

interface CaseStudyHeroProps {
  label?: string;
  title: string;
  meta: string;
  tagline?: string;
  description?: string;
  facts?: CaseStudyFact[];
  className?: string;
}

export default function CaseStudyHero({
  label,
  title,
  meta,
  tagline,
  description,
  facts = [],
  className,
}: CaseStudyHeroProps) {
  return (
    <section className={className}>
      <div className="border-b border-[#e5e5e5] pb-10">
        <div className="max-w-[760px]">
          <div className="flex flex-wrap items-center gap-x-3 gap-y-2 text-[11px] font-medium uppercase tracking-[0.14em] text-[#737373]">
            {label ? <span>{label}</span> : null}
            <span className="hidden h-1 w-1 rounded-full bg-[#a3a3a3] sm:block" />
            <span>{meta}</span>
          </div>
          <h1 className="mt-5 max-w-[720px] text-[46px] font-semibold leading-[0.98] tracking-[-0.045em] text-[#171717] sm:text-[64px]">
            {title}
          </h1>
          {tagline ? (
            <p className="mt-5 max-w-[680px] text-[19px] leading-[1.65] tracking-[-0.015em] text-[#3f3f46] sm:text-[22px]">
              {tagline}
            </p>
          ) : null}
          {description ? (
            <p className="mt-5 max-w-[560px] text-[14px] leading-[1.75] text-[#737373]">
              {description}
            </p>
          ) : null}
        </div>
        {facts.length > 0 ? (
          <div className="mt-10 grid grid-cols-2 gap-x-8 gap-y-8 border-t border-[#e5e5e5] pt-7 sm:grid-cols-4">
            {facts.map((fact) => (
              <div key={fact.label} className="min-w-0">
                <p className="text-[10px] font-medium uppercase tracking-[0.14em] text-[#737373]">
                  {fact.label}
                </p>
                <p className="mt-2 text-[17px] font-medium leading-[1.45] tracking-[-0.015em] text-[#171717]">
                  {fact.value}
                </p>
              </div>
            ))}
          </div>
        ) : null}
      </div>
    </section>
  );
}
