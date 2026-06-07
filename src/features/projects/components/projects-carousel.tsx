import { useEffect, useMemo, useRef, useState, type ReactNode } from 'react'
import { ChevronDownIcon, ChevronLeftIcon, ChevronRightIcon, ChevronUpIcon } from 'lucide-react'

import { ProjectDetails } from '@/features/projects/components/project-details'
import { ProjectPill } from '@/features/projects/components/project-pill'
import { ProductVisual } from '@/features/projects/components/project-visual'
import type { SoftwareProject } from '@/features/projects/data/projects-page-content'
import { cn } from '@/lib/utils'

type ProjectsCarouselProps = {
  projects: SoftwareProject[]
  itemLabel?: string
  className?: string
}

export function ProjectsCarousel({
  projects,
  itemLabel = 'item',
  className,
}: ProjectsCarouselProps) {
  const [activeIndex, setActiveIndex] = useState(0)
  const [isExpanded, setExpanded] = useState(false)
  const itemRefs = useRef<Array<HTMLButtonElement | null>>([])
  const activeProject = projects[activeIndex]
  const countLabel = useMemo(
    () => `${activeIndex + 1} of ${projects.length}`,
    [activeIndex, projects.length],
  )

  useEffect(() => {
    itemRefs.current[activeIndex]?.scrollIntoView({
      behavior: 'smooth',
      block: 'nearest',
      inline: 'center',
    })
  }, [activeIndex])

  function moveProject(direction: 1 | -1) {
    setActiveIndex((index) => (index + direction + projects.length) % projects.length)
    setExpanded(false)
  }

  function selectProject(index: number) {
    setActiveIndex(index)
    setExpanded(false)
  }

  return (
    <section className={cn('relative mx-auto w-full max-w-[80rem] pb-12 sm:px-4 sm:pb-20 lg:px-8', className)}>
      <div data-reveal="media">
        <div className="-mx-1 flex snap-x snap-mandatory gap-4 overflow-x-auto px-1 pb-2 [scrollbar-width:none] [-ms-overflow-style:none] sm:mx-0 sm:px-0 [&::-webkit-scrollbar]:hidden">
          {projects.map((project, index) => (
            <button
              key={project.id}
              ref={(element) => {
                itemRefs.current[index] = element
              }}
              type="button"
              className={cn(
                'np-focus group shrink-0 snap-start basis-[86%] text-left sm:basis-[calc(50%-0.5rem)] xl:basis-[calc((100%-2rem)/3)]',
                'transition-transform duration-(--np-duration-fast) active:scale-[0.99]',
              )}
              aria-label={`Show ${project.title}`}
              aria-current={index === activeIndex ? 'true' : undefined}
              onClick={() => selectProject(index)}
            >
              <article
                className={cn(
                  'h-full rounded-[var(--np-radius-xl)] border bg-[color:var(--np-surface)] p-4 transition-[border-color,transform,box-shadow,background-color] duration-(--np-duration-fast) sm:p-5',
                  index === activeIndex
                    ? 'border-primary/55 shadow-[0_22px_70px_rgba(24,133,207,.18)]'
                    : 'border-white/10 hover:border-white/18 hover:bg-white/[0.02]',
                )}
              >
                <ProductVisual
                  project={project}
                  className="aspect-[4/5] rounded-[var(--np-radius-lg)] sm:aspect-[16/10]"
                />

                <div className="mt-5">
                  <div className="flex min-w-0 flex-col gap-3 sm:flex-row sm:items-start sm:justify-between sm:gap-4">
                    <h3 className="text-base font-semibold leading-snug tracking-[-0.02em] text-foreground sm:text-xl">
                      {project.title}
                    </h3>
                    <span
                      className={cn(
                        'inline-flex min-h-8 w-fit shrink-0 items-center rounded-full border px-3 text-xs font-medium sm:mt-0.5',
                        index === activeIndex
                          ? 'border-primary/35 bg-primary/12 text-foreground'
                          : 'border-white/10 bg-white/[0.04] text-[color:var(--np-subtle)]',
                      )}
                    >
                      {project.meta[0]?.value ?? `${index + 1}`}
                    </span>
                  </div>
                  <p className="mt-3 text-sm leading-6 text-muted-foreground [display:-webkit-box] [-webkit-box-orient:vertical] [-webkit-line-clamp:3] overflow-hidden">
                    {project.summary}
                  </p>
                  <div className="mt-4 flex flex-wrap gap-2.5">
                    {project.tags.slice(0, 2).map((tag) => (
                      <span
                        key={tag.label}
                        className="inline-flex min-h-9 items-center gap-2 rounded-full border border-white/10 bg-white/[0.035] px-3 text-xs text-muted-foreground"
                      >
                        <tag.icon className="size-3.5 text-foreground" aria-hidden="true" />
                        {tag.label}
                      </span>
                    ))}
                  </div>
                </div>
              </article>
            </button>
          ))}
        </div>

        <div className="mt-5 flex flex-col gap-4 sm:mt-6 sm:flex-row sm:items-center sm:justify-between">
          <div
            className="-mx-1 flex min-h-11 max-w-full items-center gap-1 overflow-x-auto px-1 [scrollbar-width:none] [-ms-overflow-style:none] sm:mx-0 sm:gap-2 sm:px-0 [&::-webkit-scrollbar]:hidden"
            aria-label={`${itemLabel} slides`}
          >
            {projects.map((project, index) => (
              <button
                key={project.id}
                type="button"
                className="np-focus group inline-flex size-10 items-center justify-center rounded-full transition-transform duration-(--np-duration-fast) active:scale-[0.96]"
                aria-label={`Show ${project.title}`}
                aria-current={index === activeIndex ? 'true' : undefined}
                onClick={() => selectProject(index)}
              >
                <span
                  className={cn(
                    'h-2.5 rounded-full transition-[background-color,width] duration-(--np-duration-fast)',
                    index === activeIndex ? 'w-7 bg-primary' : 'w-2.5 bg-white/18 group-hover:bg-white/32',
                  )}
                  aria-hidden="true"
                />
              </button>
            ))}
          </div>

          <div className="flex items-center justify-between gap-3 sm:justify-end">
            <span className="text-sm text-[color:var(--np-subtle)]">{countLabel}</span>
            <CarouselButton label={`Previous ${itemLabel}`} onClick={() => moveProject(-1)}>
              <ChevronLeftIcon className="size-5" aria-hidden="true" />
            </CarouselButton>
            <CarouselButton label={`Next ${itemLabel}`} onClick={() => moveProject(1)}>
              <ChevronRightIcon className="size-5" aria-hidden="true" />
            </CarouselButton>
          </div>
        </div>
        <span className="sr-only" aria-live="polite">
          {itemLabel} {countLabel}
        </span>
      </div>

      <article
        key={activeProject.id}
        className="np-project-slide mt-8 rounded-[var(--np-radius-xl)] border border-white/10 bg-[color:var(--np-surface)] p-4 sm:p-8 lg:p-10"
        data-reveal="media"
      >
        <div className="grid gap-6 xl:grid-cols-[minmax(0,1.2fr)_minmax(20rem,.8fr)] xl:items-start">
          <ProductVisual
            project={activeProject}
            variant="feature"
            className="aspect-[5/6] min-h-[22rem] sm:aspect-[16/10] sm:min-h-[24rem]"
          />

          <div className="flex flex-col gap-6">
            <div>
              <p className="text-sm font-medium text-[color:var(--np-subtle)]">{countLabel}</p>
              <h2 className="mt-3 text-[clamp(1.45rem,6.5vw,1.875rem)] font-semibold leading-tight tracking-[-0.02em] text-foreground sm:text-3xl">
                {activeProject.title}
              </h2>
              <div className="mt-6 flex flex-wrap gap-3">
                {activeProject.tags.map((tag) => (
                  <ProjectPill key={tag.label} tag={tag} />
                ))}
              </div>
            </div>

            <button
              type="button"
              className="np-focus inline-flex min-h-12 items-center justify-center gap-3 self-start rounded-full px-4 text-sm font-medium text-muted-foreground transition-[background-color,color,transform] duration-(--np-duration-fast) hover:bg-white/[0.04] hover:text-foreground active:scale-[0.97]"
              aria-expanded={isExpanded}
              onClick={() => setExpanded((value) => !value)}
            >
              {isExpanded ? 'Show Less' : 'Show More'}
              <span className="inline-flex size-11 items-center justify-center rounded-full border border-white/10 bg-white/[0.05] text-foreground">
                {isExpanded ? (
                  <ChevronUpIcon className="size-5" aria-hidden="true" />
                ) : (
                  <ChevronDownIcon className="size-5" aria-hidden="true" />
                )}
              </span>
            </button>
          </div>
        </div>

        <div className="mt-8">
          <ProjectDetails project={activeProject} isExpanded={isExpanded} />
        </div>
      </article>
    </section>
  )
}

type CarouselButtonProps = {
  label: string
  children: ReactNode
  onClick: () => void
}

function CarouselButton({ label, children, onClick }: CarouselButtonProps) {
  return (
    <button
      type="button"
      className="np-focus inline-flex size-11 items-center justify-center rounded-full bg-primary text-primary-foreground shadow-(--np-shadow-blue) transition-[background-color,transform] duration-(--np-duration-fast) hover:bg-[color:var(--np-blue-strong)] active:scale-[0.95] sm:size-12"
      aria-label={label}
      onClick={onClick}
    >
      {children}
    </button>
  )
}
