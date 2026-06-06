import {
  aboutServices,
  serviceIntro,
  story,
} from '@/features/about/data/about-page-content'
import { IconOrb } from '@/features/home/components/icon-orb'
import { LandingButton } from '@/features/home/components/landing-button'

export function StorySection() {
  return (
    <section className="np-section">
      <div className="np-container flex flex-col gap-24">
        <div className="flex flex-col items-center text-center">
          <span className="inline-flex min-h-9 items-center gap-2 rounded-full bg-white/[0.06] px-4 text-sm font-medium text-foreground">
            <span className="size-1.5 rounded-full bg-foreground" />
            {story.eyebrow}
          </span>
          <h2 className="mt-6 max-w-5xl font-heading text-[clamp(2.2rem,4.8vw,4.1rem)] font-semibold leading-[1.08] tracking-[-0.03em] text-foreground">
            {story.title}
          </h2>
          <div
            className="np-card-texture mt-12 w-full rounded-[var(--np-radius-xl)] border border-white/10 px-6 py-12 sm:px-10 lg:px-20"
            data-reveal="media"
          >
            <p className="mx-auto max-w-6xl text-base leading-8 text-muted-foreground sm:text-lg">
              {story.body}
            </p>
            <dl className="mx-auto mt-10 grid max-w-5xl gap-6 rounded-[var(--np-radius-lg)] border border-white/8 bg-background/35 p-6 sm:grid-cols-2 lg:grid-cols-4">
              {story.stats.map((stat) => (
                <div key={stat.label}>
                  <dt className="text-sm text-muted-foreground">{stat.label}</dt>
                  <dd className="mb-1 text-[clamp(2.5rem,5vw,4rem)] font-semibold leading-none text-foreground">
                    {stat.value}
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </div>

        <div className="flex flex-col items-center text-center">
          <span className="inline-flex min-h-9 items-center gap-2 rounded-full bg-white/[0.06] px-4 text-sm font-medium text-foreground">
            <span className="size-1.5 rounded-full bg-foreground" />
            {serviceIntro.eyebrow}
          </span>
          <h2 className="mt-6 max-w-5xl font-heading text-[clamp(2.2rem,4.8vw,4rem)] font-semibold leading-[1.1] tracking-[-0.03em] text-foreground">
            {serviceIntro.title}
          </h2>
          <p className="mt-6 max-w-4xl text-base leading-7 text-muted-foreground sm:text-lg">
            {serviceIntro.body}
          </p>
          <div className="mt-18 grid w-full gap-y-14 divide-white/10 md:grid-cols-2 lg:grid-cols-4 lg:divide-x">
            {aboutServices.map((service) => (
              <article key={service.title} className="flex flex-col items-center px-6" data-reveal="card">
                <IconOrb icon={service.icon} />
                <h3 className="mt-8 text-xl font-semibold text-foreground">{service.title}</h3>
                <p className="mt-5 max-w-sm text-base leading-7 text-muted-foreground">{service.body}</p>
                <LandingButton to="/services" variant="quiet" showArrow className="mt-8">
                  Learn More
                </LandingButton>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
