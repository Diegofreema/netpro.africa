import type { ProjectTag } from '@/features/projects/data/projects-page-content'

type ProjectPillProps = {
  tag: ProjectTag
}

export function ProjectPill({ tag }: ProjectPillProps) {
  const Icon = tag.icon

  return (
    <span className="inline-flex min-h-10 items-center gap-2 rounded-full border border-white/10 bg-white/[0.035] px-4 text-sm text-muted-foreground">
      <Icon className="size-4 text-foreground" aria-hidden="true" />
      {tag.label}
    </span>
  )
}
