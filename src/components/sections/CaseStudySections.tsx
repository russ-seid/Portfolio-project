import { CaseStudyQuote, CaseStudySection } from '@/types';

import CaseStudyMedia from '@/components/sections/CaseStudyMedia';

interface CaseStudySectionsProps {
  sections: CaseStudySection[];
  quote?: CaseStudyQuote;
  className?: string;
}

export default function CaseStudySections({
  sections,
  quote,
  className,
}: CaseStudySectionsProps) {
  if (sections.length === 0 && !quote) {
    return null;
  }

  return (
    <div className={className}>
      <div className="space-y-20">
        {sections.map((section) => (
          <section
            key={section.title}
            className="grid grid-cols-1 gap-6 border-t border-[#e5e5e5] pt-8 md:grid-cols-[180px_minmax(0,680px)] md:gap-10"
          >
            <div>
              {section.eyebrow ? (
                <p className="text-[11px] font-medium uppercase tracking-[0.14em] text-[#737373]">
                  {section.eyebrow}
                </p>
              ) : null}
            </div>
            <div className="max-w-[680px]">
              <h2 className="text-[28px] font-semibold leading-[1.18] tracking-[-0.025em] text-[#171717]">
                {section.title}
              </h2>
              {section.intro ? (
                <p className="mt-4 text-[20px] leading-[1.7] tracking-[-0.01em] text-[#171717]">
                  {section.intro}
                </p>
              ) : null}
              {section.paragraphs && section.paragraphs.length > 0 ? (
                <div className="mt-6 space-y-5 text-[17px] leading-[1.9] text-[#3f3f46]">
                  {section.paragraphs.map((paragraph) => (
                    <p key={paragraph}>{paragraph}</p>
                  ))}
                </div>
              ) : null}
              {section.callout ? (
                <div className="mt-8 border-l border-[#171717] pl-5">
                  <p className="text-[20px] leading-[1.7] tracking-[-0.01em] text-[#171717]">
                    {section.callout}
                  </p>
                </div>
              ) : null}
              {section.bullets && section.bullets.length > 0 ? (
                <div className="mt-8 space-y-3">
                  {section.bullets.map((bullet) => (
                    <div key={bullet} className="flex gap-3 text-[16px] leading-[1.8] text-[#3f3f46]">
                      <span className="mt-[11px] h-1.5 w-1.5 rounded-full bg-[#171717]" />
                      <p className="flex-1">{bullet}</p>
                    </div>
                  ))}
                </div>
              ) : null}
              {section.cards && section.cards.length > 0 ? (
                <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2">
                  {section.cards.map((card) => (
                    <article
                      key={card.title}
                      className="rounded-2xl border border-[#e5e5e5] bg-[#f7f7f5] p-5"
                    >
                      <h3 className="text-[16px] font-semibold leading-[1.4] text-[#171717]">
                        {card.title}
                      </h3>
                      <p className="mt-3 text-[15px] leading-[1.75] text-[#52525b]">
                        {card.body}
                      </p>
                    </article>
                  ))}
                </div>
              ) : null}
            </div>
            {section.media && section.media.length > 0 ? (
              <div className="pt-2 md:col-span-2 md:ml-[180px]">
                <CaseStudyMedia
                  className="max-w-[980px]"
                  items={section.media}
                  layout={section.mediaLayout}
                />
              </div>
            ) : null}
          </section>
        ))}
        {quote ? (
          <section className="border-t border-[#e5e5e5] pt-8">
            <div className="max-w-[820px]">
              <blockquote className="text-[30px] font-medium leading-[1.4] tracking-[-0.03em] text-[#171717] sm:text-[36px]">
                "{quote.text}"
              </blockquote>
              {quote.attribution ? (
                <p className="mt-5 text-[14px] leading-[1.7] text-[#737373]">{quote.attribution}</p>
              ) : null}
            </div>
          </section>
        ) : null}
      </div>
    </div>
  );
}
