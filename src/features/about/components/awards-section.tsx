import {
  awardIcon,
  awards,
  awardsIntro,
  dateIcon,
} from '@/features/about/data/about-page-content'
import { LandingSectionHeading } from '@/features/home/components/landing-section-heading'

export function AwardsSection() {
  const AwardIcon = awardIcon
  const DateIcon = dateIcon

  return (
    <section className="np-section">
      <div className="np-container flex flex-col gap-16">
        <LandingSectionHeading
          eyebrow={awardsIntro.eyebrow}
          title={awardsIntro.title}
          description={awardsIntro.body}
        />
        <div className="np-reveal-stagger grid gap-8 lg:grid-cols-2">
          {awards.map((award) => (
            <article
              key={award.title}
              className="np-card-texture rounded-[var(--np-radius-xl)] border border-white/10 px-6 py-12 text-center sm:px-10 lg:px-14"
              data-reveal="card"
            >
              <div className="mx-auto flex size-24 items-center justify-center rounded-full border-[10px] border-white/18 bg-black/30">
                <AwardIcon className="size-8 text-white" aria-hidden="true" />
              </div>
              <span className="mx-auto mt-8 inline-flex min-h-10 items-center gap-2 rounded-full border border-white/10 bg-white/[0.035] px-4 text-sm text-foreground">
                <DateIcon className="size-4" aria-hidden="true" />
                {award.date}
              </span>
              <h3 className="mt-9 text-2xl font-semibold tracking-[-0.02em] text-foreground">
                {award.title}
              </h3>
              <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-muted-foreground">
                {award.body}
              </p>
              <div className="mt-10 rounded-[var(--np-radius-lg)] border border-white/10 bg-background/35 p-8">
                <h4 className="text-xl font-medium text-foreground">Why</h4>
                <p className="mt-4 text-base text-muted-foreground">{award.why}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
