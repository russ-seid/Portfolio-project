interface HeroSectionProps {
  className?: string;
}

export default function HeroSection({ className }: HeroSectionProps) {
  return (
    <section
      aria-label="Hero"
      className={`pt-32 pb-24${className ? ` ${className}` : ''}`}
    >
      <div className="max-w-[1080px] mx-auto px-4 sm:px-16">
        <h1 className="text-[28px] sm:text-[40px] font-semibold leading-[1.1] tracking-tight text-[#171717] max-w-[720px]">
          Russ Seidametov. I turn complexity into clarity.
        </h1>
        <p className="mt-6 text-[16px] font-normal leading-[1.6] text-neutral-500 max-w-[560px]">
          Currently at Fiyrpod, designing athlete tracking tools that make elite-level performance analysis accessible to every coach.
        </p>
      </div>
    </section>
  );
}
