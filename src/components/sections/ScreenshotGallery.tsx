import { CaseStudyScreenshot } from '@/types';

import CaseStudyImageFigure from '@/components/sections/CaseStudyImageFigure';

interface ScreenshotGalleryProps {
  screenshots: CaseStudyScreenshot[];
  title: string;
  className?: string;
}

export default function ScreenshotGallery({
  screenshots,
  title,
  className,
}: ScreenshotGalleryProps) {
  const visibleScreenshots = screenshots.filter((screenshot) => Boolean(screenshot.src));

  if (visibleScreenshots.length === 0) {
    return null;
  }

  return (
    <section
      aria-label={`${title} screenshots`}
      className={`flex flex-wrap items-start justify-center gap-6 md:gap-8${className ? ` ${className}` : ''}`}
    >
      {visibleScreenshots.map((screenshot) => (
        <CaseStudyImageFigure
          key={screenshot.src ?? screenshot.label ?? screenshot.alt}
          item={screenshot}
          figureClassName={`${screenshot.variant === 'mobile' ? 'w-[220px] md:w-[250px]' : 'w-full max-w-[980px]'}`}
          frameClassName={`overflow-hidden ${screenshot.variant === 'mobile' ? 'rounded-[18px]' : 'rounded-[16px]'} border border-[#e7e5de] bg-[#111111]`}
          captionClassName="pt-3"
        />
      ))}
    </section>
  );
}
