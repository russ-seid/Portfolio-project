import Link from 'next/link';

interface NavProps {
  className?: string;
}

export default function Nav({ className }: NavProps) {
  return (
    <nav
      className={`sticky top-0 z-50 w-full bg-white h-14 flex items-center border-b border-neutral-200${className ? ` ${className}` : ''}`}
    >
      <div className="max-w-[1080px] mx-auto w-full px-4 sm:px-16 flex items-center">
        <Link
          href="/"
          className="font-semibold text-[#171717] hover:opacity-70 active:opacity-50 focus:outline-2 focus:outline-[#171717] focus:outline-offset-2"
        >
          Russ Seidametov
        </Link>
      </div>
    </nav>
  );
}
