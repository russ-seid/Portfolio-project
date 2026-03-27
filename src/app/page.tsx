import HeroSection from '@/components/sections/HeroSection';
import AboutSection from '@/components/sections/AboutSection';
import ExperimentsSection from '@/components/sections/ExperimentsSection';
import WorkSection from '@/components/sections/WorkSection';

export default function Home() {
  return (
    <main>
      <HeroSection />
      <WorkSection />
      <ExperimentsSection />
      <AboutSection />
    </main>
  );
}
