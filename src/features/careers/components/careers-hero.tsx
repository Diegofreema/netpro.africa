import LightRays from '@/components/LightRays'
import { careersHero } from '@/features/careers/data/careers-page-content'

export function CareersHero() {
  const visibleTitle = careersHero.title.replace(careersHero.titleMuted, '').trim()

  return (
    <section className="np-project-hero relative overflow-hidden border-b border-white/8">
      <LightRays
        raysOrigin="top-center"
        raysColor="#ffffff"
        raysSpeed={1}
        lightSpread={0.5}
        rayLength={3}
        followMouse
        mouseInfluence={0.1}
        noiseAmount={0}
        distortion={0}
        className="custom-rays"
        pulsating
        fadeDistance={1}
        saturation={1}
      />
      <div className="np-container relative z-10 flex min-h-96 items-center pb-16 pt-24 sm:min-h-112 lg:pb-20">
        <div className="max-w-4xl" data-reveal="media">
          <h1 className="font-heading text-[clamp(2.45rem,5vw,4.7rem)] font-semibold leading-[1.08] tracking-[-0.03em] text-foreground">
            {visibleTitle}{' '}
            <span className="text-[color:var(--np-subtle)]">{careersHero.titleMuted}</span>
          </h1>
          <p className="mt-7 max-w-4xl text-base leading-7 text-muted-foreground sm:text-lg">
            {careersHero.body}
          </p>
        </div>
      </div>
    </section>
  )
}
