'use client';
import { useEffect } from 'react';

const GSAP_SRC = 'https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.5/gsap.min.js';
const MF_SRC = 'https://unpkg.com/mouse-follower@1/dist/mouse-follower.min.js';

const CSS = `
.mf-cursor { position: fixed; top: 0; left: 0; pointer-events: none; z-index: 99999; transform: translate3d(0,0,0); transition: opacity 0.18s ease; will-change: transform, opacity; opacity: 1; mix-blend-mode: difference; isolation: isolate; }
.mf-cursor-inner { position: relative; }
.mf-cursor-media { position: absolute; left: 50%; top: 50%; transform: translate(-50%, -50%); pointer-events: none; }
.mf-cursor-media-box { width: 100px; height: 100px; overflow: hidden; border-radius: 8px; }
.mf-cursor:before { content: ""; position: absolute; left: 50%; top: 50%; transform: translate(-50%, -50%) scale(0.35); width: var(--mf-size, 50px); height: var(--mf-size, 50px); border-radius: 50%; background: var(--mf-color-base, #fff); transition: transform 0.22s ease, background 0.22s ease, opacity 0.2s; will-change: transform, opacity; opacity: 1; }
.mf-cursor.-text:before { transform: translate(-50%, -50%) scale(var(--mf-text-scale, 2.2)); }
.mf-cursor-text { position: absolute; left: 50%; top: 50%; transform: translate(-50%, -50%); font-size: 0.75rem; font-weight: 600; white-space: nowrap; pointer-events: none; transform-origin: center; color: var(--mf-text-color, #000); transition: opacity 0.12s ease; opacity: 0; mix-blend-mode: difference; isolation: isolate; }
.mf-cursor.-hidden-scale:before { transform: translate(-50%, -50%) scale(0) !important; opacity: 0 !important; }
@media (max-width: 768px) { .mf-cursor { display: none !important; } }
`;

function loadScript(src: string, id: string): Promise<void> {
  return new Promise((resolve, reject) => {
    if (document.getElementById(id)) return resolve();
    const script = document.createElement('script');
    script.id = id;
    script.src = src;
    script.async = true;
    script.onload = () => resolve();
    script.onerror = () => reject(new Error(`Failed to load: ${src}`));
    document.head.appendChild(script);
  });
}

export default function VelocityCursor() {
  useEffect(() => {
    if (typeof window === 'undefined') return;

    // Inject CSS
    if (!document.getElementById('mf-css')) {
      const style = document.createElement('style');
      style.id = 'mf-css';
      style.innerHTML = CSS;
      document.head.appendChild(style);
    }

    // Set CSS vars
    document.documentElement.style.setProperty('--mf-size', '50px');
    document.documentElement.style.setProperty('--mf-color-base', '#fff');
    document.documentElement.style.setProperty('--mf-text-color', '#000');
    document.documentElement.style.setProperty('--mf-text-scale', '2.2');

    let cursor: any = null;
    let cursorEl: HTMLElement | null = null;
    let clearTextTimeout: number | null = null;

    function initCursor() {
      if (!(window as any).MouseFollower || cursor) return;
      cursor = new (window as any).MouseFollower({
        skewing: 2,
        speed: 0.3,
        ease: 'power2.out',
        stateDetection: false,
      });
      cursorEl = document.querySelector('.mf-cursor');

      window.addEventListener('mouseout', (e: MouseEvent) => {
        if (!(e as any).relatedTarget && !(e as any).toElement) {
          cursorEl?.classList.add('-hidden-scale');
        }
      });
      window.addEventListener('mousemove', (e: MouseEvent) => {
        if (e.clientX >= 0 && e.clientY >= 0) {
          cursorEl?.classList.remove('-hidden-scale');
        }
      });

      // Wire up data-cursor-text elements
      document.querySelectorAll<HTMLElement>('[data-cursor-text]').forEach((el) => {
        el.addEventListener('mouseenter', () => {
          const text = el.getAttribute('data-cursor-text') || '';
          const textEl = cursorEl?.querySelector<HTMLElement>('.mf-cursor-text');
          if (textEl) { textEl.textContent = text; textEl.style.opacity = '1'; }
          try { cursor.setState('-text'); } catch {}
        });
        el.addEventListener('mouseleave', () => {
          const textEl = cursorEl?.querySelector<HTMLElement>('.mf-cursor-text');
          if (textEl) textEl.style.opacity = '0';
          clearTextTimeout = window.setTimeout(() => {
            if (textEl) textEl.textContent = '';
            try { cursor?.setState(''); } catch {}
          }, 140);
        });
      });
    }

    function destroyCursor() {
      try { cursor?.destroy(); cursor = null; } catch {}
    }

    (async () => {
      try {
        if (!(window as any).gsap) await loadScript(GSAP_SRC, 'mf-gsap');
        if (!(window as any).MouseFollower) await loadScript(MF_SRC, 'mf-lib');
        const mm = window.matchMedia('(max-width: 768px)');
        const toggle = () => (mm.matches ? destroyCursor() : initCursor());
        mm.addEventListener('change', toggle);
        toggle();
      } catch {}
    })();

    return () => {
      destroyCursor();
      if (clearTextTimeout) window.clearTimeout(clearTextTimeout);
    };
  }, []);

  return null;
}
