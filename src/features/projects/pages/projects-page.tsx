import { ProjectHero } from '@/features/projects/components/project-hero'
import { ProjectsCarousel } from '@/features/projects/components/projects-carousel'
import { ProjectsCta } from '@/features/projects/components/projects-cta'
import {
  featuredDeployments,
  portfolioIntro,
  productCatalogSections,
  type ShowcaseSection,
} from '@/features/projects/data/projects-page-content'
import {
  AnimatedPageSections,
  type AnimatedPageSectionConfig,
} from '@/shared/components/animated-page-sections'
import { useInViewAnimations } from '@/shared/hooks/use-in-view-animations'

function ProductCategorySection({ section }: { section: ShowcaseSection }) {
  return (
    <section className="pb-8 pt-(--np-section-y) sm:pb-14">
      <div className="np-container flex flex-col items-center gap-14">
        <div className="mx-auto max-w-4xl text-center">
          <span
            className="inline-flex min-h-10 items-center rounded-full border border-white/10 bg-white/[0.035] px-4 text-sm font-medium text-[color:var(--np-subtle)]"
            data-reveal="title"
          >
            {section.eyebrow}
          </span>
          <h2
            className="mt-4 font-heading text-[clamp(2.15rem,4.5vw,3.8rem)] font-semibold leading-[1.08] tracking-[-0.03em] text-foreground"
            data-reveal="title"
          >
            {section.title}
          </h2>
          <p
            className="mx-auto mt-5 max-w-3xl text-base leading-7 text-muted-foreground sm:text-lg"
            data-reveal="title"
          >
            {section.description}
          </p>
        </div>

        <ProjectsCarousel projects={section.projects} itemLabel="product" />
      </div>
    </section>
  )
}

function PortfolioShowcaseSection() {
  return (
    <section className="pb-8 pt-(--np-section-y) sm:pb-14">
      <div className="np-container flex flex-col items-center gap-14">
        <div className="mx-auto max-w-4xl text-center">
          <span
            className="inline-flex min-h-10 items-center rounded-full border border-white/10 bg-white/[0.035] px-4 text-sm font-medium text-[color:var(--np-subtle)]"
            data-reveal="title"
          >
            {portfolioIntro.eyebrow}
          </span>
          <h2
            className="mt-4 font-heading text-[clamp(2.15rem,4.5vw,3.8rem)] font-semibold leading-[1.08] tracking-[-0.03em] text-foreground"
            data-reveal="title"
          >
            {portfolioIntro.title}
          </h2>
          <p
            className="mx-auto mt-5 max-w-3xl text-base leading-7 text-muted-foreground sm:text-lg"
            data-reveal="title"
          >
            {portfolioIntro.description}
          </p>
        </div>

        <ProjectsCarousel projects={featuredDeployments} itemLabel="deployment" />
      </div>
    </section>
  )
}

const projectsSections: AnimatedPageSectionConfig[] = [
  {
    id: 'hero',
    Component: ProjectHero,
    amount: 0.38,
  },
  ...productCatalogSections.map((section) => ({
    id: section.id,
    Component: () => <ProductCategorySection section={section} />,
    y: 34,
    scale: 0.994,
    amount: 0.22,
  })),
  {
    id: 'products-cta',
    Component: ProjectsCta,
    y: 30,
    scale: 0.995,
    amount: 0.26,
  },
  {
    id: 'portfolio',
    Component: PortfolioShowcaseSection,
    y: 34,
    scale: 0.994,
    amount: 0.22,
  },
]

export function ProjectsPage() {
  useInViewAnimations()

  return (
    <div className="overflow-hidden bg-background">
      <AnimatedPageSections sections={projectsSections} />
    </div>
  )
}
