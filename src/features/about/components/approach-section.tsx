import { approach, approachSteps } from '@/features/about/data/about-page-content'
import { cn } from '@/lib/utils'

export function ApproachSection() {
  return (
    <section className="np-section">
      <div className="np-container">
        <div className="mx-auto flex max-w-5xl flex-col items-center text-center">
          <span className="inline-flex min-h-9 items-center gap-2 rounded-full bg-white/[0.06] px-4 text-sm font-medium text-foreground">
            <span className="size-1.5 rounded-full bg-foreground" />
            {approach.eyebrow}
          </span>
          <h2 className="mt-6 font-heading text-[clamp(2.2rem,4.7vw,4rem)] font-semibold leading-[1.08] tracking-[-0.03em] text-foreground">
            {approach.title}
          </h2>
          <p className="mt-6 max-w-4xl text-base leading-7 text-muted-foreground sm:text-lg">
            {approach.body}
          </p>
        </div>

        <div
          className="mt-16 rounded-[var(--np-radius-xl)] border border-white/10 bg-[color:var(--np-surface)] p-6 sm:p-10 lg:p-12"
          data-reveal="media"
        >
          <h3 className="text-2xl font-semibold text-foreground">Approach steps</h3>
          <p className="mt-4 max-w-6xl text-base leading-7 text-muted-foreground sm:text-lg">
            {approach.intro}
          </p>

          <div className="mt-12 grid gap-0 overflow-hidden rounded-[var(--np-radius-lg)] border border-white/8 md:grid-cols-2">
            {approachSteps.map((step, index) => (
              <article
                key={step.title}
                className={cn(
                  'border-white/8 p-6 md:p-9',
                  index < approachSteps.length - 1 && 'border-b',
                  index % 2 === 0 && 'md:border-r',
                  index >= 2 && 'md:border-b-0',
                )}
              >
                <h4 className="text-lg font-semibold text-foreground">{step.title}</h4>
                <p className="mt-4 text-base leading-7 text-muted-foreground">{step.body}</p>
                <span className="mt-8 block text-sm font-medium tabular-nums text-[color:var(--np-subtle)]">
                  0{index + 1}
                </span>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
