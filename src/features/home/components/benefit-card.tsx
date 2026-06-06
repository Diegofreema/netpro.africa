import { Link } from '@tanstack/react-router'
import { ArrowRightIcon } from 'lucide-react'

import type { LandingBenefit } from '@/features/home/data/landing-page-content'
import { IconOrb } from '@/features/home/components/icon-orb'

type BenefitCardProps = {
  benefit: LandingBenefit
}

export function BenefitCard({ benefit }: BenefitCardProps) {
  return (
    <article className="flex min-h-[31rem] flex-col items-center justify-between gap-8 px-6 py-4 text-center">
      <IconOrb icon={benefit.icon} />
      <div className="flex flex-col items-center gap-4">
        <div className="flex flex-col items-center gap-2">
          <p className="text-sm font-medium text-[color:var(--np-muted)]">
            {benefit.title}
          </p>
          <h3 className="max-w-sm text-2xl font-semibold tracking-[-0.02em] text-foreground">
            {benefit.subtitle ?? benefit.title}
          </h3>
        </div>
        <p className="max-w-md text-base leading-7 text-[color:var(--np-subtle)] sm:text-lg">
          {benefit.description}
        </p>
        {benefit.tags ? (
          <div className="flex max-w-md flex-wrap justify-center gap-2">
            {benefit.tags.map((tag) => (
              <span
                key={tag}
                className="rounded-full border border-white/10 bg-white/[0.04] px-3 py-1.5 text-xs font-medium text-[color:var(--np-muted)]"
              >
                {tag}
              </span>
            ))}
          </div>
        ) : null}
      </div>
      <Link
        to="/services"
        className="np-focus group inline-flex min-h-14 items-center gap-5 rounded-full border border-white/10 px-7 text-base font-medium text-foreground transition-[background-color,border-color,transform] duration-(--np-duration-fast) ease-(--np-ease-out) hover:border-white/18 hover:bg-white/[0.04] active:scale-[0.98]"
      >
        Learn more
        <span className="inline-flex size-11 items-center justify-center rounded-full bg-primary text-primary-foreground transition-transform duration-(--np-duration-fast) group-hover:translate-x-0.5">
          <ArrowRightIcon className="size-5" aria-hidden="true" />
        </span>
      </Link>
    </article>
  )
}
