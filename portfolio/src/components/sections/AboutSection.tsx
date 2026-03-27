interface AboutSectionProps {
  className?: string;
}

export default function AboutSection({ className }: AboutSectionProps) {
  return (
    <section
      aria-label="About"
      className={`border-t border-neutral-200 py-20${className ? ` ${className}` : ''}`}
    >
      <div className="max-w-[1080px] mx-auto px-4 sm:px-16">
        <p className="text-[12px] font-medium uppercase tracking-widest text-neutral-400 mb-8">
          About
        </p>
        <p className="text-[16px] font-normal leading-[1.8] text-[#171717] max-w-[600px]">
          {"I'm a Product Designer specializing in sports tech and data-heavy products. At Fiyrpod I design GPS analytics and athlete monitoring tools. Previously at Breakthru, where I led the product design through a B2C to B2B transition. I\u2019m drawn to 0\u21921 problems \u2014 the stage where research, systems thinking, and craft compound. Outside work: surfing, board games, soccer, guitar, photography."}
        </p>
      </div>
    </section>

  );
}
