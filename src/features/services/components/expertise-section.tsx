import { useMemo, useState } from 'react'

import { Button } from '@/components/ui/button'
import { LandingButton } from '@/features/home/components/landing-button'
import {
  expertiseIntro,
  expertiseTabs,
  pricing,
  type ExpertiseTabId,
} from '@/features/services/data/services-page-content'
import { cn } from '@/lib/utils'

export function ExpertiseSection() {
  const [activeTabId, setActiveTabId] = useState<ExpertiseTabId>('software')
  const activeTab = useMemo(
    () => expertiseTabs.find((tab) => tab.id === activeTabId) ?? expertiseTabs[0],
    [activeTabId],
  )

  return (
    <section className="np-container py-(--np-section-y)">
      <div className="mx-auto max-w-5xl text-center" data-reveal="title">
        <span className="inline-flex min-h-8 items-center gap-2 rounded-full border border-white/10 px-4 text-sm font-medium text-foreground">
          <span className="size-1.5 rounded-full bg-foreground" aria-hidden="true" />
          {expertiseIntro.kicker}
        </span>
        <h2 className="mt-7 font-heading text-[clamp(2.2rem,4.4vw,4rem)] font-semibold leading-[1.1] tracking-[-0.03em] text-foreground">
          {expertiseIntro.title}
        </h2>
      </div>

      <div className="mt-16 grid gap-10 lg:grid-cols-[18rem_1fr]">
        <div className="flex flex-wrap gap-4 self-start lg:sticky lg:top-32 lg:flex-col" data-reveal="media">
          {expertiseTabs.map((tab) => {
            const Icon = tab.icon
            const isActive = tab.id === activeTabId

            return (
              <Button
                key={tab.id}
                type="button"
                variant={isActive ? 'default' : 'outline'}
                className={cn(
                  'min-h-14 justify-start rounded-[var(--np-radius-md)] px-5 text-base',
                  !isActive && 'border-white/10 bg-white/[0.025] text-foreground hover:bg-white/[0.06]',
                )}
                onClick={() => setActiveTabId(tab.id)}
                aria-pressed={isActive}
              >
                <Icon data-icon="inline-start" />
                {tab.title}
              </Button>
            )
          })}
        </div>

        <div data-reveal="media">
          <h3 className="text-3xl font-semibold tracking-[-0.02em] text-foreground">{activeTab.heading}</h3>
          <p className="mt-5 max-w-5xl text-base leading-7 text-muted-foreground sm:text-lg">{activeTab.summary}</p>

          <div className="mt-12 rounded-[var(--np-radius-xl)] border border-white/10 bg-[color:var(--np-surface)] p-6 sm:p-8 lg:p-10">
            <div className="grid gap-8 md:grid-cols-2">
              {activeTab.sections.map((section) => (
                <article key={section.title} className="border-white/10 md:border-r md:odd:border-r md:even:border-r-0 md:[&:nth-child(n+3)]:border-t md:[&:nth-child(n+3)]:pt-8">
                  <h4 className="text-xl font-semibold text-foreground">{section.title}</h4>
                  {section.body ? (
                    <p className="mt-4 max-w-xl text-base leading-7 text-muted-foreground">{section.body}</p>
                  ) : null}
                  {section.points ? (
                    <ul className="mt-4 flex list-disc flex-col gap-1 pl-5 text-base leading-7 text-muted-foreground">
                      {section.points.map((point) => (
                        <li key={point}>{point}</li>
                      ))}
                    </ul>
                  ) : null}
                </article>
              ))}
            </div>
          </div>

          <PricingPanel />
        </div>
      </div>
    </section>
  )
}

function PricingPanel() {
  return (
    <div className="mt-10 rounded-[var(--np-radius-xl)] border border-white/10 bg-[color:var(--np-surface)] p-6 sm:p-8 lg:p-10" data-reveal="card">
      <h3 className="text-3xl font-semibold tracking-[-0.02em] text-foreground">{pricing.title}</h3>
      <p className="mt-5 max-w-5xl text-base leading-7 text-muted-foreground sm:text-lg">{pricing.body}</p>
      <div className="mt-10 overflow-hidden rounded-[var(--np-radius-md)] border border-white/10">
        <div className="grid divide-y divide-white/10 md:grid-cols-3 md:divide-x md:divide-y-0">
          {pricing.columns.map((column) => (
            <div key={column} className="min-h-24 p-6 text-lg font-medium text-muted-foreground">
              {column}
            </div>
          ))}
        </div>
        <div className="grid divide-y divide-white/10 border-t border-white/10 md:grid-cols-3 md:divide-x md:divide-y-0">
          {pricing.values.map((value) => (
            <div key={value} className="min-h-24 p-6 text-lg font-medium text-foreground">
              {value}
            </div>
          ))}
        </div>
      </div>
      <LandingButton to="/contact-us" className="mt-8">
        {pricing.cta}
      </LandingButton>
    </div>
  )
}
