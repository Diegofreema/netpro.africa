import { Link } from '@tanstack/react-router'
import { ArrowRightIcon } from 'lucide-react'

import type { LandingProject } from '@/features/home/data/landing-page-content'

type ProjectCardProps = {
  project: LandingProject
}

export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <article className="rounded-[var(--np-radius-xl)] border border-white/10 bg-[color:var(--np-surface)] p-8 shadow-(--np-shadow-soft)">
      <div className="relative overflow-visible rounded-[calc(var(--np-radius-xl)-0.4rem)] border border-white/10 bg-black/35 p-10">
        <img
          src={project.image}
          alt=""
          className="aspect-[456/252] w-full rounded-[0.7rem] object-cover"
          loading="lazy"
        />
        <Link
          to="/projects"
          aria-label={`Learn more about ${project.title}`}
          className="np-focus absolute bottom-[-1.4rem] left-1/2 inline-flex min-h-12 -translate-x-1/2 items-center gap-2 whitespace-nowrap rounded-full border border-white/12 bg-background/90 px-6 text-sm font-medium text-foreground backdrop-blur transition-[background-color,border-color,transform] duration-(--np-duration-fast) hover:border-white/22 hover:bg-white/[0.08]"
        >
          Learn more
          <ArrowRightIcon className="size-4" aria-hidden="true" />
        </Link>
      </div>
      <div className="mt-16 flex flex-col gap-5">
        <h3 className="text-2xl font-semibold tracking-[-0.02em] text-foreground">
          {project.title}
        </h3>
        <div className="flex flex-wrap justify-between gap-3 text-base text-foreground">
          <span>Category: {project.category}.</span>
          <time>{project.date}</time>
        </div>
        <p className="max-w-2xl text-lg leading-8 text-muted-foreground">{project.description}</p>
      </div>
    </article>
  )
}
