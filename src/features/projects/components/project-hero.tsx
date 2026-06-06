import LightRays from '@/components/LightRays';
import { LandingButton } from '@/features/home/components/landing-button'
import { projectsHero } from '@/features/projects/data/projects-page-content';

export function ProjectHero() {
  return (
    <section className="np-project-hero relative overflow-hidden border-b border-white/8">
      <LightRays
        raysOrigin="top-center"
        raysColor="#ffffff"
        raysSpeed={1}
        lightSpread={0.5}
        rayLength={3}
        followMouse={true}
        mouseInfluence={0.1}
        noiseAmount={0}
        distortion={0}
        className="custom-rays"
        pulsating={true}
        fadeDistance={1}
        saturation={1}
      />
      <div className="np-container relative z-10 flex min-h-96 items-end pb-16 pt-24 sm:min-h-112 lg:pb-20">
        <div className="max-w-3xl" data-reveal="media">
          <h1 className="font-heading text-[clamp(2.45rem,5vw,4rem)] font-semibold leading-[1.06] tracking-[-0.03em] text-foreground">
            {projectsHero.title}
          </h1>
          <p className="mt-6 max-w-2xl text-base leading-7 text-muted-foreground sm:text-lg">
            {projectsHero.summary}
          </p>
          <p className="mt-5 max-w-2xl text-sm leading-7 text-[color:var(--np-subtle)] sm:text-base">
            {projectsHero.demoCopy}
          </p>
          <div className="mt-8 flex flex-col gap-4 sm:flex-row">
            <LandingButton to="/contact-us">{projectsHero.primary}</LandingButton>
            <LandingButton to="/services" variant="quiet">
              {projectsHero.secondary}
            </LandingButton>
          </div>
        </div>
      </div>
    </section>
  );
}
