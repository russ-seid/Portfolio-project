import Image from 'next/image';

interface AboutSectionProps {
  className?: string;
}

export default function AboutSection({ className }: AboutSectionProps) {
  return (
    <section
      aria-label="About"
      className={`pb-48 pt-40 sm:pb-56 sm:pt-48${className ? ` ${className}` : ''}`}
    >
      <div className="max-w-[1080px] mx-auto px-4 sm:px-16 flex flex-col sm:flex-row gap-16 sm:gap-24 items-start">
        <div className="flex-1">
          <p className="text-[12px] font-medium uppercase tracking-widest text-neutral-400 mb-8">
            About
          </p>
          <div className="flex flex-col gap-5 text-[16px] font-normal leading-[1.8] text-[#171717] max-w-[560px]">
            <p>I&rsquo;m Russ. I design at the intersection of strategy and craft.</p>
            <p>Currently at Fiyrpod, building GPS analytics and athlete monitoring tools for coaches and athletes. Previously at Breakthru, where I designed core experiences during the company&rsquo;s transition from B2C mobile app to B2B CRM platform.</p>
            <p>I lead product strategy, initiate projects, and collaborate directly with founders and engineers. I&rsquo;m drawn to 0&rarr;1 problems in sports tech, health, and data-heavy products.</p>
            <p className="text-neutral-400">Outside work: Surfing, Board games, Soccer, Guitar, Photography.</p>
          </div>
        </div>
        <div className="w-[200px] sm:w-[280px] shrink-0">
          <Image
            src="/images/about-me.png"
            alt="Russ Seidametov"
            width={280}
            height={280}
            className="w-full aspect-square object-cover rounded-full"
          />
        </div>
      </div>
    </section>
  );
}
