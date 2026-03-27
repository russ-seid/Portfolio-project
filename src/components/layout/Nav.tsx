import Link from 'next/link';

import Logo from '@/components/ui/Logo';

interface NavProps {
  className?: string;
}

export default function Nav({ className }: NavProps) {
  return (
    <nav
      className={`h-16 w-full border-b border-[#ece9e1] bg-[rgba(250,250,249,0.92)] backdrop-blur-sm${className ? ` ${className}` : ''}`}
    >
      <div className="mx-auto flex h-full w-full max-w-[1080px] items-center justify-between px-4 sm:px-16">
        <Link
          href="/"
          className="inline-flex text-[#171717] transition-opacity hover:opacity-70 active:opacity-50 focus-visible:outline-2 focus-visible:outline-[#171717] focus-visible:outline-offset-2"
        >
          <Logo size={30} className="text-[#171717]" />
        </Link>
        <div className="flex items-center gap-6">
          <a
            href="/Russ-Seidametov-Resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[14px] font-medium text-[#6e6a62] transition-colors hover:text-[#171717] focus-visible:outline-2 focus-visible:outline-[#171717] focus-visible:outline-offset-2"
          >
            Resume
          </a>
          <a
            href="mailto:rustem.seidametov.ux@gmail.com"
            className="inline-flex h-10 items-center rounded-full border border-[#d8d2c6] bg-white px-4 text-[14px] font-medium text-[#171717] transition-[border-color,background-color,color] hover:border-[#171717] hover:bg-[#171717] hover:text-[#fafaf9] focus-visible:outline-2 focus-visible:outline-[#171717] focus-visible:outline-offset-2"
          >
            Contact
          </a>
        </div>
      </div>
    </nav>
  );
}
