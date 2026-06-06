import type { SoftwareProject } from '@/features/projects/data/projects-page-content'

type ProjectDetailsProps = {
  project: SoftwareProject
  isExpanded: boolean
}

export function ProjectDetails({ project, isExpanded }: ProjectDetailsProps) {
  const labels = {
    summary: 'Project Overview',
    details: 'Key Details',
    technologies: 'Capability Areas',
    subject: 'Client',
    methods: 'Delivery Signals',
    ...project.labels,
  }

  return (
    <div className="grid gap-6">
      <section className="rounded-[var(--np-radius-lg)] border border-white/10 bg-background/35 p-6 sm:p-8">
        <h3 className="text-lg font-medium text-foreground">{labels.summary}</h3>
        <p className="mt-4 text-sm leading-7 text-muted-foreground sm:text-base">
          {project.summary}
        </p>
        {isExpanded ? (
          <>
            <h4 className="mt-7 text-base font-medium text-foreground">
              {labels.details}
            </h4>
            <ul className="mt-4 grid gap-1.5 text-sm leading-6 text-muted-foreground sm:text-base">
              {project.details.map((item) => (
                <li key={item} className="before:mr-2 before:text-foreground before:content-['•']">
                  {item}
                </li>
              ))}
            </ul>
          </>
        ) : null}
      </section>

      {isExpanded ? (
        <>
          <dl className="grid rounded-[var(--np-radius-lg)] border border-white/10 bg-background/35 sm:grid-cols-2 lg:grid-cols-4">
            {project.meta.map((item) => (
              <div
                key={item.label}
                className="border-b border-white/10 p-5 last:border-b-0 sm:border-b-0 sm:border-r sm:last:border-r-0"
              >
                <dt className="text-sm text-[color:var(--np-subtle)]">{item.label}</dt>
                <dd className="mt-2 text-base font-medium text-foreground">{item.value}</dd>
              </div>
            ))}
          </dl>

          <section className="flex flex-col gap-5 rounded-[var(--np-radius-lg)] border border-white/10 bg-background/35 p-6 sm:flex-row sm:items-center sm:gap-10 sm:p-8">
            <h3 className="text-base font-medium text-foreground">{labels.technologies}</h3>
            <div className="flex flex-wrap gap-5">
              {project.technologies.map((technology) => {
                const Icon = technology.icon

                return (
                  <span
                    key={technology.label}
                    className="np-focus inline-flex size-11 items-center justify-center rounded-full border border-white/10 bg-white/[0.04] text-foreground"
                    title={technology.label}
                    aria-label={technology.label}
                  >
                    <Icon className="size-5" aria-hidden="true" />
                  </span>
                )
              })}
            </div>
          </section>

          <section className="flex flex-col gap-4 rounded-[var(--np-radius-lg)] border border-white/20 bg-background/35 p-6 sm:flex-row sm:items-center sm:p-8">
            <h3 className="text-base font-medium text-foreground">{labels.subject}</h3>
            <span className="inline-flex size-11 shrink-0 items-center justify-center rounded-full border border-white/20 bg-[color:var(--np-blue-soft)] text-sm font-semibold text-foreground">
              {project.subjectInitials}
            </span>
            <p className="text-sm leading-6 text-muted-foreground sm:text-base">{project.subject}</p>
          </section>

          <section className="rounded-[var(--np-radius-lg)] border border-white/10 bg-background/35 p-6 sm:p-8">
            <h3 className="text-lg font-medium text-foreground">{labels.methods}</h3>
            <div className="mt-6 grid gap-4 rounded-[var(--np-radius-md)] border border-white/10 p-4 sm:grid-cols-3">
              {project.methods.map((method) => (
                <span
                  key={method}
                  className="inline-flex min-h-11 items-center justify-center rounded-full border border-white/10 bg-white/[0.025] px-5 text-sm font-medium text-foreground"
                >
                  {method}
                </span>
              ))}
            </div>
          </section>
        </>
      ) : null}
    </div>
  )
}
