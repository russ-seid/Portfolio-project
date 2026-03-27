'use client';
import { useEffect, useRef, ReactNode } from 'react';

export default function FitText({ children, className }: { children: ReactNode; className?: string }) {
  const wrapperRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const el = wrapperRef.current;
    if (!el) return;

    const fit = () => {
      el.style.fontSize = '100px';
      const available = el.parentElement?.offsetWidth ?? el.offsetWidth;
      const natural = el.scrollWidth;
      if (natural > 0) {
        el.style.fontSize = `${(available / natural) * 100}px`;
      }
    };

    fit();
    const ro = new ResizeObserver(fit);
    ro.observe(el.parentElement!);
    return () => ro.disconnect();
  }, []);

  return (
    <span ref={wrapperRef} className={`block whitespace-nowrap ${className ?? ''}`}>
      {children}
    </span>
  );
}
