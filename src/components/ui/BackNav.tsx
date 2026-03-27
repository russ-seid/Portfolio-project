import Link from 'next/link';

interface BackNavProps {
  href?: string;
  className?: string;
}

export default function BackNav({ href = '/', className }: BackNavProps) {
  return (
    <Link
      href={href}
      className={`inline-flex items-center text-[15px] font-medium leading-none text-[#737373] hover:text-[#171717] focus-visible:outline-2 focus-visible:outline-[#171717] focus-visible:outline-offset-2${className ? ` ${className}` : ''}`}
    >
      ← Work
    </Link>
  );
}
