interface CaseStudyBodyProps {
  paragraphs: string[];
  className?: string;
}

export default function CaseStudyBody({ paragraphs, className }: CaseStudyBodyProps) {
  if (paragraphs.length === 0) {
    return null;
  }

  return (
    <section className={className}>
      <div className="max-w-[680px] space-y-5 text-[17px] leading-[1.9] text-[#3f3f46]">
        {paragraphs.map((paragraph) => (
          <p key={paragraph}>{paragraph}</p>
        ))}
      </div>
    </section>
  );
}
