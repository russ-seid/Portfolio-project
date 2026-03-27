import Image from 'next/image';
import Link from 'next/link';

interface CaseStudyCardProps {
  title: string;
  description: string;
  href: string;
  cover?: string;
  className?: string;
}

export function CaseStudyCard({
  title,
  description,
  href,
  cover,
  className,
}: CaseStudyCardProps) {
  return (
    <Link
      href={href}
      className={`group block overflow-hidden rounded-[18px] border border-[#ece9e1] bg-white shadow-[0_1px_0_rgba(23,23,23,0.03)] transition-[border-color,transform,box-shadow] duration-200 hover:border-[#d6d0c4] hover:shadow-[0_14px_36px_rgba(23,23,23,0.06)] focus-visible:outline-2 focus-visible:outline-neutral-900 focus-visible:outline-offset-2${className ? ` ${className}` : ''}`}
    >
      <div className="aspect-[4/3] w-full overflow-hidden bg-[#f7f5ef]">
        {cover && (
          <Image
            src={cover}
            alt={`${title} cover`}
            width={800}
            height={600}
            className="h-full w-full object-cover transition-transform duration-500 ease-out group-hover:scale-[1.03]"
          />
        )}
      </div>
      <div className="p-7 sm:p-8">
        <h3 className="text-[18px] font-semibold leading-[1.3] text-[#171717]">
          {title}
        </h3>
        <p className="mt-3 text-[15px] leading-[1.6] text-[#666666]">
          {description}
        </p>
        <p className="mt-6 text-[13px] font-medium text-[#8a8478] transition-colors group-hover:text-[#171717]">
          View case study →
        </p>
      </div>
    </Link>
  );
}
