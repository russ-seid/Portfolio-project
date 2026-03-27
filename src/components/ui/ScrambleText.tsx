'use client';
import { useRef, useState, useCallback } from 'react';

const CHARS = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';

function randomChar() {
  return CHARS[Math.floor(Math.random() * CHARS.length)];
}

interface ScrambleTextProps {
  text: string;
  className?: string;
  duration?: number;
}

export default function ScrambleText({ text, className, duration = 600 }: ScrambleTextProps) {
  const [displayed, setDisplayed] = useState<string[]>(text.split(''));
  const rafRef = useRef<number | null>(null);

  const scramble = useCallback(() => {
    if (rafRef.current !== null) cancelAnimationFrame(rafRef.current);

    const chars = text.split('');
    const total = chars.length;
    const frameInterval = 40;
    let lastFrame = 0;
    const start = performance.now();

    const step = (now: number) => {
      if (now - lastFrame < frameInterval) {
        rafRef.current = requestAnimationFrame(step);
        return;
      }
      lastFrame = now;

      const elapsed = now - start;
      const progress = Math.min(elapsed / duration, 1);
      const resolved = Math.floor(progress * total);

      setDisplayed(
        chars.map((char, i) => {
          if (char === ' ') return ' ';
          if (i < resolved) return char;
          return randomChar();
        })
      );

      if (progress < 1) {
        rafRef.current = requestAnimationFrame(step);
      } else {
        setDisplayed(chars);
        rafRef.current = null;
      }
    };

    rafRef.current = requestAnimationFrame(step);
  }, [text, duration]);

  return (
    <span className={className} onMouseEnter={scramble}>
      {text.split('').map((char, i) =>
        char === ' ' ? (
          ' '
        ) : (
          <span key={i} className="relative inline-block">
            {/* Real char — invisible, holds the exact width of this letter */}
            <span className="invisible">{char}</span>
            {/* Scrambled char — absolute, never affects layout */}
            <span className="absolute inset-0 text-center" aria-hidden="true">
              {displayed[i]}
            </span>
          </span>
        )
      )}
    </span>
  );
}
