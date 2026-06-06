import { useState } from 'react'

import { ApplicationDialog } from '@/features/careers/components/application-dialog'
import { JobCard } from '@/features/careers/components/job-card'
import {
  careerJobs,
  careersIntro,
  type CareerJob,
} from '@/features/careers/data/careers-page-content'

export function CareersOpeningsSection() {
  const [expandedIds, setExpandedIds] = useState<Set<string>>(() => new Set([careerJobs[0].id]))
  const [selectedJob, setSelectedJob] = useState<CareerJob | null>(null)

  function toggleJob(jobId: string) {
    setExpandedIds((current) => {
      const next = new Set(current)

      if (next.has(jobId)) {
        next.delete(jobId)
      } else {
        next.add(jobId)
      }

      return next
    })
  }

  return (
    <section className="np-container py-(--np-section-y)">
      <div className="mx-auto max-w-5xl text-center" data-reveal="title">
        <h2 className="font-heading text-[clamp(2.2rem,4.4vw,4rem)] font-semibold leading-[1.12] tracking-[-0.03em] text-foreground">
          {careersIntro.title}
        </h2>
        <p className="mx-auto mt-6 max-w-4xl text-base leading-7 text-muted-foreground sm:text-lg">
          {careersIntro.body}
        </p>
      </div>

      <div className="np-reveal-stagger mx-auto mt-16 flex max-w-6xl flex-col gap-9">
        {careerJobs.map((job) => (
          <JobCard
            key={job.id}
            job={job}
            expanded={expandedIds.has(job.id)}
            onToggle={() => toggleJob(job.id)}
            onApply={() => setSelectedJob(job)}
          />
        ))}
      </div>

      <ApplicationDialog
        key={selectedJob?.id ?? 'empty'}
        job={selectedJob}
        open={selectedJob !== null}
        onOpenChange={(open) => {
          if (!open) {
            setSelectedJob(null)
          }
        }}
      />
    </section>
  )
}
