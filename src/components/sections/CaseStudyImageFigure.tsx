'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';

import { CaseStudyScreenshot } from '@/types';

interface CaseStudyImageFigureProps {
  item: CaseStudyScreenshot;
  figureClassName: string;
  frameClassName: string;
  captionClassName?: string;
}

export default function CaseStudyImageFigure({
  item,
  figureClassName,
  frameClassName,
  captionClassName,
}: CaseStudyImageFigureProps) {
  const [isOpen, setIsOpen] = useState(false);
  const isMobile = item.variant === 'mobile';

  useEffect(() => {
    if (!isOpen) {
      return;
    }

    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === 'Escape') {
        setIsOpen(false);
      }
    }

    document.addEventListener('keydown', handleKeyDown);
    document.body.style.overflow = 'hidden';

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  return (
    <>
      <figure className={figureClassName}>
        <div className={frameClassName}>
          {item.src ? (
            <button
              type="button"
              onClick={() => setIsOpen(true)}
              className="block w-full cursor-zoom-in focus-visible:outline-2 focus-visible:outline-[#171717] focus-visible:outline-offset-4"
              aria-label={`Open ${item.label ?? item.alt} fullscreen`}
            >
              <Image
                src={item.src}
                alt={item.alt}
                width={1600}
                height={1200}
                className="h-auto w-full object-cover"
              />
            </button>
          ) : (
            <div className="flex aspect-[4/3] items-end bg-[linear-gradient(180deg,#fafaf9_0%,#f2f2ef_100%)] p-6">
              <div>
                <p className="text-[11px] font-medium uppercase tracking-[0.12em] text-[#737373]">
                  Screenshot
                </p>
                <p className="mt-3 text-[18px] leading-[1.5] tracking-[-0.01em] text-[#171717]">
                  {item.label ?? 'Placeholder'}
                </p>
              </div>
            </div>
          )}
        </div>
        {(item.label || item.src) && (
          <figcaption className={captionClassName ?? 'pt-3 text-[13px] leading-[1.55] text-[#737373]'}>
            {item.label ?? item.alt}
          </figcaption>
        )}
      </figure>

      {isOpen && item.src ? (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/82 p-4 sm:p-8"
          role="dialog"
          aria-modal="true"
          aria-label={item.label ?? item.alt}
          onClick={() => setIsOpen(false)}
        >
          <button
            type="button"
            className="absolute right-4 top-4 inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/20 bg-white/10 text-[20px] text-white transition-colors hover:bg-white/20 focus-visible:outline-2 focus-visible:outline-white focus-visible:outline-offset-2"
            onClick={() => setIsOpen(false)}
            aria-label="Close fullscreen image"
          >
            ×
          </button>
          <div
            className={`max-h-full ${isMobile ? 'max-w-[min(94vw,560px)]' : 'max-w-[1400px]'}`}
            onClick={(event) => event.stopPropagation()}
          >
            <Image
              src={item.src}
              alt={item.alt}
              width={1800}
              height={1400}
              className={`${isMobile ? 'h-[92vh] w-auto max-w-full rounded-[18px]' : 'max-h-[88vh] w-auto max-w-full rounded-[10px]'} object-contain`}
            />
            {!isMobile ? (
              <p className="mt-4 text-center text-[13px] leading-[1.6] text-white/72">
                {item.label ?? item.alt}
              </p>
            ) : null}
          </div>
        </div>
      ) : null}
    </>
  );
}
