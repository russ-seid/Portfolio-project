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
      className={`group block bg-[#f5f5f5] rounded-xl p-8 hover:bg-[#ebebeb] active:bg-[#e0e0e0] transition-colors focus-visible:outline-2 focus-visible:outline-neutral-900 focus-visible:outline-offset-2${className ? ` ${className}` : ''}`}
    >
      <h3 className="text-[18px] font-semibold leading-[1.3] text-[#171717]">
        {title}
      </h3>
      <p className="mt-3 text-[15px] leading-[1.6] text-neutral-500">
        {description}
      </p>
      <p className="mt-6 text-[13px] font-medium text-neutral-400 group-hover:text-[#171717] transition-colors">
        View case study →
      </p>
    </Link>
  );
}
