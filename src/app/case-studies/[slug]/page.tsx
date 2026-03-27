import type { Metadata } from 'next';
import { notFound } from 'next/navigation';

import CaseStudyBody from '@/components/sections/CaseStudyBody';
import CaseStudyHero from '@/components/sections/CaseStudyHero';
import CaseStudyMedia from '@/components/sections/CaseStudyMedia';
import CaseStudySections from '@/components/sections/CaseStudySections';
import ScreenshotGallery from '@/components/sections/ScreenshotGallery';
import BackNav from '@/components/ui/BackNav';
import { getCaseStudies, getCaseStudyBySlug } from '@/data/case-studies';

export const dynamicParams = false;

export function generateStaticParams() {
  return getCaseStudies().map((study) => ({
    slug: study.slug,
  }));
}

export async function generateMetadata(
  props: PageProps<'/case-studies/[slug]'>
): Promise<Metadata> {
  const { slug } = await props.params;
  const caseStudy = getCaseStudyBySlug(slug);

  if (!caseStudy) {
    return {};
  }

  return {
    title: `${caseStudy.title} | Russ Seidametov`,
    description: caseStudy.description,
  };
}

export default async function CaseStudyPage(props: PageProps<'/case-studies/[slug]'>) {
  const { slug } = await props.params;
  const caseStudy = getCaseStudyBySlug(slug);

  if (!caseStudy) {
    notFound();
  }

  const visibleHeroVisuals = caseStudy.heroVisuals?.filter((item) => Boolean(item.src)) ?? [];
  const visibleScreenshots = caseStudy.screenshots.filter((item) => Boolean(item.src));

  return (
    <main className="pb-28 pt-12 sm:pb-36 sm:pt-16">
      <div className="mx-auto flex max-w-[1080px] flex-col px-4 sm:px-16">
        <BackNav />
        <CaseStudyHero
          className="mt-12"
          label={caseStudy.label}
          title={caseStudy.title}
          meta={caseStudy.meta}
          tagline={caseStudy.tagline}
          description={caseStudy.description}
          facts={caseStudy.facts}
        />
        {visibleHeroVisuals.length > 0 ? (
          <CaseStudyMedia className="mt-10" items={visibleHeroVisuals} />
        ) : caseStudy.heroVisual ? (
          <CaseStudyMedia className="mt-10" items={[caseStudy.heroVisual]} />
        ) : null}
        {caseStudy.sections && caseStudy.sections.length > 0 ? (
          <CaseStudySections
            className="mt-16"
            sections={caseStudy.sections}
            quote={caseStudy.quote}
          />
        ) : (
          <CaseStudyBody className="mt-12" paragraphs={caseStudy.body ?? []} />
        )}
        {visibleScreenshots.length > 0 ? (
          <ScreenshotGallery
            className="mt-20"
            screenshots={visibleScreenshots}
            title={caseStudy.title}
          />
        ) : null}
      </div>
    </main>
  );
}
