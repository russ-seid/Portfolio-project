'use client';

import Image from 'next/image';
import { useRef } from 'react';

interface UIExplorationItem {
  src: string;
  alt: string;
}

interface UIExplorationCarouselProps {
  items: UIExplorationItem[];
  title?: string;
}

export default function UIExplorationCarousel({
  items,
  title,
}: UIExplorationCarouselProps) {
  const scrollRef = useRef<HTMLDivElement>(null);

  function scrollByAmount(direction: 'left' | 'right') {
    const container = scrollRef.current;

    if (!container) {
      return;
    }

    const amount = Math.round(container.clientWidth * 0.56);
    container.scrollBy({
      left: direction === 'left' ? -amount : amount,
      behavior: 'smooth',
    });
  }

  return (
    <div className="mt-24 sm:mt-28">
      <div className="mb-5 flex items-center justify-between gap-4">
        {title ? (
          <p className="text-[11px] font-medium uppercase tracking-[0.12em] text-[#8a8478]">
            {title}
          </p>
        ) : (
          <div />
        )}
        <div className="flex items-center gap-2">
          <button
            type="button"
            aria-label="Scroll UI explorations left"
            onClick={() => scrollByAmount('left')}
            className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-[#ddd7ca] bg-white text-[#171717] transition-colors hover:border-[#171717] hover:bg-[#171717] hover:text-[#fafaf9] focus-visible:outline-2 focus-visible:outline-[#171717] focus-visible:outline-offset-2"
          >
            ←
          </button>
          <button
            type="button"
            aria-label="Scroll UI explorations right"
            onClick={() => scrollByAmount('right')}
            className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-[#ddd7ca] bg-white text-[#171717] transition-colors hover:border-[#171717] hover:bg-[#171717] hover:text-[#fafaf9] focus-visible:outline-2 focus-visible:outline-[#171717] focus-visible:outline-offset-2"
          >
            →
          </button>
        </div>
      </div>

      <div
        ref={scrollRef}
        className="flex snap-x snap-mandatory gap-4 overflow-x-auto pb-2 [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden"
      >
        {items.map((item) => (
          <figure
            key={item.src}
            className="w-[56vw] max-w-[420px] shrink-0 snap-start overflow-hidden rounded-[18px] border border-[#ece9e1] bg-white shadow-[0_1px_0_rgba(23,23,23,0.03)]"
          >
            <div className="aspect-[4/3] overflow-hidden bg-[#f7f5ef]">
              <Image
                src={item.src}
                alt={item.alt}
                width={1600}
                height={1200}
                className="h-full w-full object-cover"
              />
            </div>
          </figure>
        ))}
      </div>
    </div>
  );
}
