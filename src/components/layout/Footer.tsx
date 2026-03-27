import Link from 'next/link';

import Logo from '@/components/ui/Logo';

interface FooterProps {
  className?: string;
}

const links = [
  {
    href: 'https://www.linkedin.com/in/rustem-seidametov/',
    label: 'LinkedIn',
    icon: (
      <svg viewBox="0 0 24 24" aria-hidden="true" className="h-4 w-4 fill-current">
        <path d="M6.94 8.5H3.56V20h3.38V8.5ZM5.25 3C4.17 3 3.5 3.72 3.5 4.67c0 .93.65 1.67 1.71 1.67h.02c1.1 0 1.77-.74 1.77-1.67C6.98 3.72 6.35 3 5.25 3ZM20.5 13.1c0-3.54-1.89-5.18-4.41-5.18-2.03 0-2.94 1.12-3.45 1.9V8.5H9.26c.04.88 0 11.5 0 11.5h3.38v-6.42c0-.34.02-.68.13-.92.27-.68.87-1.38 1.89-1.38 1.33 0 1.86 1.02 1.86 2.52V20H20.5v-6.9Z" />
      </svg>
    ),
  },
  {
    href: 'https://dribbble.com/Russ_Seid',
    label: 'Dribbble',
    icon: (
      <svg viewBox="0 0 24 24" aria-hidden="true" className="h-4 w-4 fill-current">
        <path d="M12 2.5A9.5 9.5 0 1 0 21.5 12 9.5 9.5 0 0 0 12 2.5Zm6.18 4.38a7.9 7.9 0 0 1 1.66 4.84c-1.2-.23-2.56-.36-4.03-.33a19.49 19.49 0 0 0-1.02-2.33 13.89 13.89 0 0 0 3.39-2.18Zm-1.13-1.16a12.12 12.12 0 0 1-3 1.94 39.4 39.4 0 0 0-2.22-3.56 7.97 7.97 0 0 1 5.22 1.62ZM10 4.16c.86 1.13 1.66 2.33 2.36 3.59a33.31 33.31 0 0 1-7.07.93A8.02 8.02 0 0 1 10 4.16ZM4.73 10.27h.46a35.21 35.21 0 0 0 7.95-1.11c.26.51.5 1.03.72 1.56l-.35.1c-4.2 1.28-6.4 4.78-6.98 5.8a7.96 7.96 0 0 1-1.8-5.35Zm2.95 7.4.01-.03c.49-.84 2.4-3.88 6.26-5.2l.2-.06c.44 1.15.79 2.37 1.01 3.62a12.4 12.4 0 0 0-4.86 2.7 7.95 7.95 0 0 1-2.62-1.03Zm4.3 1.62a10.76 10.76 0 0 1 2.9-1.74c-.14.83-.23 1.68-.25 2.55-.21.03-.42.05-.63.05a7.94 7.94 0 0 1-2.02-.26Zm4.53-.85c.01-1.03.13-2.05.35-3.05.1-.45.23-.9.38-1.33 1.3-.1 2.98.08 4.17.54a7.98 7.98 0 0 1-4.9 3.84Z" />
      </svg>
    ),
  },
  {
    href: 'https://x.com/russ_seid',
    label: 'X',
    icon: (
      <svg viewBox="0 0 24 24" aria-hidden="true" className="h-4 w-4 fill-current">
        <path d="M18.9 3H21l-4.59 5.24L21.8 21h-6.2l-4.85-6.33L5.2 21H3.1l4.91-5.61L2.8 3h6.36l4.38 5.77L18.9 3Zm-1.09 16.13h1.16L8.53 4.8H7.29l10.52 14.33Z" />
      </svg>
    ),
  },
  {
    href: '/Russ-Seidametov-Resume.pdf',
    label: 'Resume',
    icon: (
      <svg viewBox="0 0 24 24" aria-hidden="true" className="h-4 w-4 fill-none stroke-current">
        <path
          d="M12 4v10m0 0 4-4m-4 4-4-4M5 19h14"
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
];

export default function Footer({ className }: FooterProps) {
  return (
    <footer className={className ?? ''}>
      <div className="mx-auto max-w-[1080px] px-4 pb-8 pt-20 sm:px-16 sm:pb-10 sm:pt-28">
        <div className="rounded-[24px] border border-[#3a3a38] bg-[#2a2a28] px-6 py-10 sm:px-10 sm:py-12">
          <div className="flex flex-col gap-14 sm:flex-row sm:items-start sm:justify-between">
            <div>
              <Link
                href="/"
                className="inline-flex text-[#f5f3ed] transition-opacity hover:opacity-70 active:opacity-50 focus-visible:outline-2 focus-visible:outline-[#f5f3ed] focus-visible:outline-offset-2"
              >
                <Logo size={34} className="text-[#f5f3ed]" />
              </Link>
            </div>
            <div className="sm:pr-6">
              <div className="flex flex-col items-start gap-4">
              {links.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-[14px] text-[#c7c2b7] transition-colors hover:text-[#f5f3ed] focus-visible:outline-2 focus-visible:outline-[#f5f3ed] focus-visible:outline-offset-2"
                >
                  {link.icon}
                  {link.label}
                </a>
              ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
