import { ProjectShowcaseSection } from '@/features/projects/components/project-showcase-section';
import {
  featuredDeployments,
  portfolioIntro,
} from '@/features/projects/data/projects-page-content';

const homeDeployments = featuredDeployments.slice(0, 4);

export function WorksSection() {
  return (
    <ProjectShowcaseSection
      intro={{
        ...portfolioIntro,
        eyebrow: 'Works',
      }}
      projects={homeDeployments}
      itemLabel="deployment"
      variant="home"
      carouselClassName="pb-0 sm:pb-4"
      cta={{
        label: 'View More Products',
        to: '/products',
      }}
    />
  );
}
