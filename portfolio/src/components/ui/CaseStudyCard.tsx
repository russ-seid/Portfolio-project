import Link from 'next/link';

interface CaseStudyCardProps {
  title: string;
  description: string;
  href: string;
  className?: string;
}

export function CaseStudyCard({ title, description, href, className }: CaseStudyCardProps) {
  return (
    <Link
      href={href}
      className={`block bg-neutral-100 border border-neutral-200 rounded-lg p-6 cursor-pointer hover:bg-[#ebebeb] active:bg-[#e0e0e0] focus-visible:outline-2 focus-visible:outline-neutral-900 focus-visible:outline-offset-2${className ? ` ${className}` : ''}`}
    >
      <h3 className="text-[20px] font-semibold leading-[1.3] text-[#171717]">
        {title}
      </h3>
      <p className="mt-2 text-[16px] leading-[1.6] text-neutral-500">
        {description}
      </p>
      <p className="mt-4 text-[16px] font-normal text-neutral-900 hover:underline">
        View case study
      </p>
    </Link>
  );
}
