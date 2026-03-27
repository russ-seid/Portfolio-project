import PlasmaOrb from '@/components/ui/PlasmaOrb';

interface HeroSectionProps {
  className?: string;
}

export default function HeroSection({ className }: HeroSectionProps) {
  return (
    <section
      aria-label="Hero"
      className={`relative flex flex-col justify-end pt-20 pb-20 min-h-[88vh]${className ? ` ${className}` : ''}`}
    >
      <PlasmaOrb />
      <div className="relative max-w-[1080px] mx-auto px-4 sm:px-16 w-full">
        <h1 className="text-[36px] sm:text-[54px] font-semibold leading-[1.08] tracking-[-0.025em] text-[#171717] max-w-[680px]">
          Russ Seidametov
          <br />
          <span className="text-neutral-500 font-normal">
            Designing data-heavy products for athletes and coaches.
          </span>
        </h1>
        <p className="mt-8 text-[15px] sm:text-[16px] font-normal leading-[1.7] text-neutral-400 max-w-[480px]">
          At Fiyrpod, I build performance tools that turn complex data into fast decisions.
        </p>
      </div>
    </section>
  );
}
