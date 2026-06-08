import { LandingButton } from '@/features/home/components/landing-button';
import { ProjectsCarousel } from '@/features/projects/components/projects-carousel';
import type {
  ShowcaseSection,
  SoftwareProject,
} from '@/features/projects/data/projects-page-content';
import type { NavigationPath } from '@/shared/config/navigation';
import { cn } from '@/lib/utils';

type ProjectShowcaseIntro = Pick<
  ShowcaseSection,
  'eyebrow' | 'title' | 'description'
>;

type ProjectShowcaseSectionProps = {
  intro: ProjectShowcaseIntro;
  projects: SoftwareProject[];
  itemLabel?: string;
  variant?: 'page' | 'home';
  className?: string;
  carouselClassName?: string;
  cta?: {
    label: string;
    to: NavigationPath;
  };
};

export function ProjectShowcaseSection({
  intro,
  projects,
  itemLabel = 'product',
  variant = 'page',
  className,
  carouselClassName,
  cta,
}: ProjectShowcaseSectionProps) {
  const isHome = variant === 'home';

  return (
    <section
      className={cn(
        isHome ? 'np-section' : 'pb-8 pt-(--np-section-y) sm:pb-14',
        className,
      )}
    >
      <div
        className={cn(
          'np-container flex flex-col items-center',
          isHome ? 'gap-10 sm:gap-12' : 'gap-9 sm:gap-11 lg:gap-14',
        )}
      >
        <div className="mx-auto max-w-4xl text-center">
          <span
            className="inline-flex min-h-10 max-w-full items-center rounded-full border border-white/10 bg-white/[0.035] px-3.5 text-sm font-medium text-(--np-subtle) sm:px-4"
            data-reveal="title"
          >
            {intro.eyebrow}
          </span>
          <h2
            className="mx-auto mt-4 max-w-4xl font-heading text-[clamp(1.85rem,7vw,3.8rem)] font-semibold leading-[1.08] tracking-tight text-foreground sm:tracking-[-0.03em]"
            data-reveal="title"
          >
            {intro.title}
          </h2>
          <p
            className="mx-auto mt-4 max-w-3xl text-sm leading-6 text-muted-foreground sm:mt-5 sm:text-lg sm:leading-8"
            data-reveal="title"
          >
            {intro.description}
          </p>
          {cta ? (
            <div className="mt-7 flex justify-center" data-reveal="title">
              <LandingButton to={cta.to} showArrow className="w-full sm:w-auto">
                {cta.label}
              </LandingButton>
            </div>
          ) : null}
        </div>

        <ProjectsCarousel
          projects={projects}
          itemLabel={itemLabel}
          className={carouselClassName}
        />
      </div>
    </section>
  );
}
