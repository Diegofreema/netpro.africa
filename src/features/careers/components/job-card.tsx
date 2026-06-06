import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader } from '@/components/ui/card'
import {
  calendarIcon,
  chevronIcon,
  type CareerJob,
} from '@/features/careers/data/careers-page-content'
import { cn } from '@/lib/utils'
import { BriefcaseBusinessIcon, SparklesIcon } from 'lucide-react'

type JobCardProps = {
  job: CareerJob
  expanded: boolean
  onToggle: () => void
  onApply: () => void
}

export function JobCard({ job, expanded, onToggle, onApply }: JobCardProps) {
  const Icon = job.icon
  const CalendarIcon = calendarIcon
  const ChevronIcon = chevronIcon

  return (
    <Card
      className="rounded-[var(--np-radius-xl)] border border-white/10 bg-[color:var(--np-surface)] px-5 py-8 shadow-none sm:px-8 lg:px-10"
      data-reveal="card"
    >
      <CardHeader className="grid gap-8 px-0 sm:grid-cols-[1fr_auto] sm:items-start">
        <div className="flex min-w-0 gap-5">
          <span className="flex size-20 shrink-0 items-center justify-center rounded-full border border-white/10 bg-white/[0.035] text-foreground">
            <Icon className="size-7" aria-hidden="true" />
          </span>
          <div className="min-w-0 pt-2">
            <h3 className="text-2xl font-semibold tracking-[-0.02em] text-foreground">{job.title}</h3>
            <p className="mt-1 text-base text-[color:var(--np-subtle)]">{job.location}</p>
          </div>
        </div>

        <Button
          className="min-h-12 rounded-full px-5"
          onClick={onApply}
        >
          Apply Now
          <span className="ml-3 inline-flex size-9 items-center justify-center rounded-full bg-[color:var(--np-blue-strong)] text-primary-foreground">
            <svg viewBox="0 0 24 24" aria-hidden="true" className="size-4">
              <path fill="currentColor" d="M13.2 5.8a1 1 0 0 1 1.4 0l5.5 5.5a1 1 0 0 1 0 1.4l-5.5 5.5a1 1 0 1 1-1.4-1.4l3.8-3.8H4.6a1 1 0 0 1 0-2h12.4l-3.8-3.8a1 1 0 0 1 0-1.4Z" />
            </svg>
          </span>
        </Button>
      </CardHeader>

      <CardContent className="px-0 pt-6">
        <div className="flex flex-col gap-5 text-base leading-7 text-foreground">
          <p className="flex gap-3">
            <BriefcaseBusinessIcon className="mt-1 size-5 shrink-0" aria-hidden="true" />
            <span>
              <span className="font-medium">Experience</span> - {job.experience}
            </span>
          </p>
          <p className="flex gap-3">
            <SparklesIcon className="mt-1 size-5 shrink-0" aria-hidden="true" />
            <span>
              <span className="font-medium">Skills</span> - {job.skills}
            </span>
          </p>
        </div>

        <div
          className={cn(
            'grid transition-[grid-template-rows,opacity] duration-(--np-duration-med)',
            expanded ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0',
          )}
        >
          <div className="overflow-hidden">
            <div className="mt-10 rounded-[var(--np-radius-lg)] border border-white/10 bg-white/[0.025] p-6 sm:p-8">
              <h4 className="text-xl font-medium text-foreground">Job Description</h4>
              <p className="mt-5 text-base leading-7 text-muted-foreground">{job.description}</p>
              <Badge variant="outline" className="mt-7 h-auto max-w-full whitespace-normal rounded-full border-white/10 px-4 py-2 text-sm leading-5 text-muted-foreground">
                <CalendarIcon className="size-4" aria-hidden="true" />
                Application Deadline: {job.deadline}
              </Badge>
            </div>

            <div className="mt-6 rounded-[var(--np-radius-lg)] border border-white/10 bg-white/[0.025] p-6 sm:p-8">
              <h4 className="text-xl font-medium text-foreground">Responsibilities</h4>
              <ul className="mt-5 flex list-disc flex-col gap-3 pl-5 text-base leading-7 text-muted-foreground">
                {job.responsibilities.map((responsibility) => (
                  <li key={responsibility}>{responsibility}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-8 flex justify-end">
          <button
            type="button"
            className="np-focus inline-flex min-h-12 items-center gap-4 rounded-full px-3 text-base font-medium text-muted-foreground transition-[color,transform] duration-(--np-duration-fast) hover:text-foreground active:scale-[0.98]"
            onClick={onToggle}
            aria-expanded={expanded}
          >
            {expanded ? 'Show Less' : 'Show More'}
            <span className="inline-flex size-12 items-center justify-center rounded-full bg-white/[0.06] text-foreground">
              <ChevronIcon className={cn('size-5 transition-transform duration-(--np-duration-fast)', expanded && 'rotate-180')} aria-hidden="true" />
            </span>
          </button>
        </div>
      </CardContent>
    </Card>
  )
}
