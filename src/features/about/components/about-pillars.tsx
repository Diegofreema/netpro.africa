import { useState } from 'react'

import { pillars } from '@/features/about/data/about-page-content'
import { cn } from '@/lib/utils'

export function AboutPillars() {
  const [activeTitle, setActiveTitle] = useState(pillars[0].title)

  return (
    <section className="np-container py-14 sm:py-20">
      <div className="grid gap-10 lg:grid-cols-[22rem_minmax(0,1fr)] lg:gap-16">
        <div className="flex flex-col gap-3" data-reveal="card">
          {pillars.map((pillar) => (
            <a
              key={pillar.title}
              href={`#${pillar.title.toLowerCase().replaceAll(' ', '-')}`}
              className={cn(
                'np-focus inline-flex min-h-16 w-full items-center rounded-[var(--np-radius-md)] border px-6 text-base font-semibold transition-[background-color,border-color,color,transform] duration-(--np-duration-fast) active:scale-[0.98] lg:min-h-20',
                activeTitle === pillar.title
                  ? 'border-primary bg-primary text-primary-foreground'
                  : 'border-white/16 bg-white/[0.02] text-foreground hover:bg-white/[0.06]',
              )}
              onClick={() => setActiveTitle(pillar.title)}
            >
              {pillar.title}
            </a>
          ))}
        </div>

        <div className="grid gap-10" data-reveal="media">
          {pillars.map((pillar) => (
            <article key={pillar.title} id={pillar.title.toLowerCase().replaceAll(' ', '-')}>
              <h2 className="text-2xl font-semibold tracking-[-0.02em] text-foreground sm:text-3xl">
                {pillar.title}
              </h2>
              <p className="mt-4 max-w-5xl text-base leading-7 text-muted-foreground sm:text-lg">
                {pillar.body}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
