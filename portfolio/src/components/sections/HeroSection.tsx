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
        <p className="text-[13px] font-medium tracking-[0.14em] uppercase text-neutral-400 mb-6">
          Product Designer
        </p>
        <h1 className="text-[40px] sm:text-[60px] font-semibold leading-[1.05] tracking-[-0.03em] text-[#171717]">
          Russ Seidametov.
        </h1>
        <h2 className="text-[40px] sm:text-[60px] font-normal leading-[1.05] tracking-[-0.03em] text-neutral-400 mt-0">
          I turn complexity into clarity.
        </h2>
        <p className="mt-8 text-[15px] font-normal leading-[1.75] text-neutral-400 max-w-[440px]">
          Currently at Fiyrpod, designing athlete tracking tools that make elite-level performance analysis accessible to every coach.
        </p>
      </div>
    </section>
  );
}
