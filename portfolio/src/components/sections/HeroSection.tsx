interface HeroSectionProps {
  className?: string;
}

export default function HeroSection({ className }: HeroSectionProps) {
  return (
    <section
      aria-label="Hero"
      className={`min-h-[92vh] flex flex-col justify-end pb-24${className ? ` ${className}` : ''}`}
    >
      <div className="max-w-[1080px] mx-auto px-4 sm:px-16 w-full">
        <h1 className="text-[36px] sm:text-[52px] font-semibold leading-[1.08] tracking-[-0.02em] text-[#171717] max-w-[800px]">
          Russ Seidametov. I turn complexity into clarity.
        </h1>
        <p className="mt-6 text-[15px] sm:text-[17px] font-normal leading-[1.6] text-neutral-400 max-w-[520px]">
          Currently at Fiyrpod, designing athlete tracking tools that make elite-level performance analysis accessible to every coach.
        </p>
      </div>
    </section>
  );
}
