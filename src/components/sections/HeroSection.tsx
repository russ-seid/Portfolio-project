import ScrambleText from '@/components/ui/ScrambleText';
import FitText from '@/components/ui/FitText';
import { boldonse } from '@/app/layout';

interface HeroSectionProps {
  className?: string;
}

export default function HeroSection({ className }: HeroSectionProps) {
  return (
    <section
      aria-label="Hero"
      className={`relative flex flex-col justify-end pt-20 pb-20 h-[60vh]${className ? ` ${className}` : ''}`}
    >
      <div className="relative max-w-[1080px] mx-auto px-4 sm:px-16 w-full">
        <p className="text-[11px] font-medium tracking-[0.16em] uppercase text-neutral-400 mb-5">
          Product Designer
        </p>
        <h1 className={`${boldonse.className} leading-[1.02] text-[#171717] mb-8`}>
          <FitText>
            <ScrambleText text="Russ Seidametov." />
          </FitText>
        </h1>
        <div className="flex flex-col sm:flex-row sm:justify-between gap-4 sm:gap-8">
          <p className="text-[17px] font-normal leading-[1.6] text-neutral-400">
            I turn complexity into clarity.
          </p>
          <p className="text-[17px] font-normal leading-[1.6] text-neutral-400 max-w-[320px]">
            Currently at Fiyrpod, designing athlete tracking tools that make elite-level performance analysis accessible to every coach.
          </p>
        </div>
      </div>
    </section>
  );
}
