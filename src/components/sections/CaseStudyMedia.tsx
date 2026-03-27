import { CaseStudyScreenshot } from '@/types';

import CaseStudyImageFigure from '@/components/sections/CaseStudyImageFigure';

interface CaseStudyMediaProps {
  items: CaseStudyScreenshot[];
  layout?: 'single' | 'two-up' | 'three-up';
  className?: string;
}

export default function CaseStudyMedia({
  items,
  layout = 'single',
  className,
}: CaseStudyMediaProps) {
  const visibleItems = items.filter((item) => Boolean(item.src));

  if (visibleItems.length === 0) {
    return null;
  }

  const isTwoUp = layout === 'two-up' && visibleItems.length > 1;
  const isThreeUp = layout === 'three-up' && visibleItems.length > 2;
  const isMobileSet = visibleItems.every((item) => item.variant === 'mobile');

  return (
    <div
      className={`${isMobileSet ? 'flex flex-wrap items-start justify-center gap-6 md:gap-8' : isThreeUp ? 'grid grid-cols-1 gap-6 md:grid-cols-3' : isTwoUp ? 'grid grid-cols-1 gap-8 md:grid-cols-2' : 'space-y-6'}${className ? ` ${className}` : ''}`}
    >
      {visibleItems.map((item) => {
        const isMobile = item.variant === 'mobile';
        const frameClass = isMobile
          ? 'overflow-hidden rounded-[18px] border border-[#e7e5de] bg-[#111111]'
          : isThreeUp
            ? 'overflow-hidden rounded-[12px] border border-[#e7e5de] bg-[#111111]'
            : isTwoUp
            ? 'overflow-hidden rounded-[14px] border border-[#e7e5de] bg-[#111111]'
            : 'overflow-hidden rounded-[18px] border border-[#e7e5de] bg-[#111111]';

        const figureClass = isMobile
          ? 'w-[220px] md:w-[250px]'
          : isThreeUp
            ? 'w-full'
          : isTwoUp
            ? 'w-full'
            : 'w-full max-w-[980px]';

        return (
          <CaseStudyImageFigure
            key={item.src ?? item.label ?? item.alt}
            item={item}
            figureClassName={figureClass}
            frameClassName={frameClass}
            captionClassName="pt-3 text-[13px] leading-[1.55] text-[#737373]"
          />
        );
      })}
    </div>
  );
}
