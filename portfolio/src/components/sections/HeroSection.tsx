interface HeroSectionProps {
  className?: string;
}

export default function HeroSection({ className }: HeroSectionProps) {
  return (
    <section
      aria-label="Hero"
      className={`pt-24 pb-16${className ? ` ${className}` : ''}`}
    >
      <div className="max-w-[1080px] mx-auto px-4 sm:px-16">
        <h1 className="text-[28px] sm:text-[40px] font-semibold leading-[1.1] tracking-tight text-[#171717]">
          Russ Seidametov. I turn complexity into clarity.
        </h1>
        <p className="mt-4 text-[13px] font-normal leading-[1.4] text-neutral-500">
          Currently at Fiyrpod, designing athlete tracking tools that make elite-level performance analysis accessible to every coach.
        </p>
      </div>
    </section>
  );
}
