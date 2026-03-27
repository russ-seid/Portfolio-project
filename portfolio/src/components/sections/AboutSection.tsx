interface AboutSectionProps {
  className?: string;
}

export default function AboutSection({ className }: AboutSectionProps) {
  return (
    <section
      aria-label="About"
      className={`py-12${className ? ` ${className}` : ''}`}
    >
      <div className="max-w-[1080px] mx-auto px-4 sm:px-16">
        <h2 className="text-[20px] font-semibold leading-[1.3] text-[#171717]">
          About
        </h2>
        <p className="mt-4 text-[16px] font-normal leading-[1.6] text-[#171717] max-w-[720px]">
          {"I'm a Product Designer specializing in sports tech and data-heavy products. At Fiyrpod I design GPS analytics and athlete monitoring tools. Previously at Breakthru, where I led the product design through a B2C to B2B transition. I\u2019m drawn to 0\u21921 problems \u2014 the stage where research, systems thinking, and craft compound. Outside work: surfing, board games, soccer, guitar, photography."}
        </p>
      </div>
    </section>
  );
}
