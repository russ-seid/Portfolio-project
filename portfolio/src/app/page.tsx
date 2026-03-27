import HeroSection from '@/components/sections/HeroSection';
import AboutSection from '@/components/sections/AboutSection';
import WorkSection from '@/components/sections/WorkSection';

export default function Home() {
  return (
    <main>
      <HeroSection />
      <WorkSection />
      <AboutSection />
    </main>
  );
}
