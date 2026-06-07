import { ProjectHero } from '@/features/projects/components/project-hero';
import { ProjectShowcaseSection } from '@/features/projects/components/project-showcase-section';
import {
  featuredDeployments,
  portfolioIntro,
  productCatalogSections,
} from '@/features/projects/data/projects-page-content';
import {
  AnimatedPageSections,
  type AnimatedPageSectionConfig,
} from '@/shared/components/animated-page-sections';
import { useInViewAnimations } from '@/shared/hooks/use-in-view-animations';

const projectsSections: AnimatedPageSectionConfig[] = [
  {
    id: 'hero',
    Component: ProjectHero,
    amount: 0.38,
  },
  ...productCatalogSections.map((section) => ({
    id: section.id,
    Component: () => (
      <ProjectShowcaseSection
        intro={section}
        projects={section.projects}
        itemLabel="product"
      />
    ),
    y: 34,
    scale: 0.994,
    amount: 0.22,
  })),
  // {
  //   id: 'products-cta',
  //   Component: ProjectsCta,
  //   y: 30,
  //   scale: 0.995,
  //   amount: 0.26,
  // },
  {
    id: 'portfolio',
    Component: () => (
      <ProjectShowcaseSection
        intro={portfolioIntro}
        projects={featuredDeployments}
        itemLabel="deployment"
      />
    ),
    y: 34,
    scale: 0.994,
    amount: 0.22,
  },
];

export function ProjectsPage() {
  useInViewAnimations();

  return (
    <div className="overflow-hidden bg-background">
      <AnimatedPageSections sections={projectsSections} />
    </div>
  );
}
