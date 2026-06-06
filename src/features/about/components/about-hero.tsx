import LightRays from '@/components/LightRays';
import { aboutHero } from '@/features/about/data/about-page-content';

export function AboutHero() {
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
      <div className="np-container relative z-10 flex min-h-92 items-end pb-16 pt-24 sm:min-h-112 lg:pb-20">
        <div className="max-w-4xl">
          <h1 className="font-heading text-[clamp(2.45rem,5vw,4rem)] font-semibold leading-[1.06] tracking-[-0.03em] text-foreground">
            {aboutHero.title}
          </h1>
          <p className="mt-6 max-w-3xl text-base leading-7 text-muted-foreground sm:text-lg">
            {aboutHero.summary}
          </p>
        </div>
      </div>
    </section>
  );
}
