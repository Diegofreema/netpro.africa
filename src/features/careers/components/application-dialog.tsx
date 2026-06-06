import { useMemo, useState, type FormEvent, type ReactNode } from 'react'

import { Button } from '@/components/ui/button'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog'
import {
  Field,
  FieldDescription,
  FieldError,
  FieldGroup,
  FieldLabel,
} from '@/components/ui/field'
import { Input } from '@/components/ui/input'
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import { Textarea } from '@/components/ui/textarea'
import {
  careerJobs,
  submitIcon,
  uploadIcon,
  type CareerJob,
} from '@/features/careers/data/careers-page-content'

type ApplicationDialogProps = {
  job: CareerJob | null
  open: boolean
  onOpenChange: (open: boolean) => void
}

export function ApplicationDialog({ job, open, onOpenChange }: ApplicationDialogProps) {
  const [selectedJobId, setSelectedJobId] = useState(job?.id ?? careerJobs[0].id)
  const [status, setStatus] = useState('')
  const SubmitIcon = submitIcon
  const UploadIcon = uploadIcon

  const selectedJob = useMemo(
    () => careerJobs.find((careerJob) => careerJob.id === selectedJobId) ?? careerJobs[0],
    [selectedJobId],
  )

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    setStatus(`Application prepared for ${selectedJob.title}. We will contact shortlisted candidates.`)
  }

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-h-[min(90svh,54rem)] overflow-y-auto rounded-[var(--np-radius-xl)] border border-white/10 bg-[color:var(--np-surface)] p-6 text-foreground sm:max-w-3xl sm:p-8">
        <DialogHeader>
          <DialogTitle className="font-heading text-2xl font-semibold tracking-[-0.02em]">
            Apply for {selectedJob.title}
          </DialogTitle>
          <DialogDescription className="text-base leading-7 text-muted-foreground">
            Share your details and attach your resume. This form prepares your application for HR review.
          </DialogDescription>
        </DialogHeader>

        <form className="mt-2" onSubmit={handleSubmit}>
          <FieldGroup className="gap-6">
            <div className="grid gap-5 md:grid-cols-2">
              <ApplicationField label="Full Name" htmlFor="career-name">
                <Input
                  id="career-name"
                  name="name"
                  placeholder="Enter your full name"
                  required
                  className="min-h-12 rounded-full bg-white/[0.025] px-4 text-base"
                />
              </ApplicationField>
              <ApplicationField label="Email" htmlFor="career-email">
                <Input
                  id="career-email"
                  name="email"
                  type="email"
                  placeholder="Enter your email"
                  required
                  className="min-h-12 rounded-full bg-white/[0.025] px-4 text-base"
                />
              </ApplicationField>
              <ApplicationField label="Phone Number" htmlFor="career-phone">
                <Input
                  id="career-phone"
                  name="phone"
                  placeholder="+234..."
                  required
                  className="min-h-12 rounded-full bg-white/[0.025] px-4 text-base"
                />
              </ApplicationField>
              <Field>
                <FieldLabel>Position</FieldLabel>
                <Select value={selectedJobId} onValueChange={setSelectedJobId}>
                  <SelectTrigger className="min-h-12 w-full rounded-full bg-white/[0.025] px-4 text-base">
                    <SelectValue placeholder="Select position" />
                  </SelectTrigger>
                  <SelectContent position="popper">
                    <SelectGroup>
                      {careerJobs.map((careerJob) => (
                        <SelectItem key={careerJob.id} value={careerJob.id}>
                          {careerJob.title}
                        </SelectItem>
                      ))}
                    </SelectGroup>
                  </SelectContent>
                </Select>
              </Field>
            </div>

            <ApplicationField label="Portfolio / LinkedIn URL" htmlFor="career-portfolio">
              <Input
                id="career-portfolio"
                name="portfolio"
                type="url"
                placeholder="https://"
                className="min-h-12 rounded-full bg-white/[0.025] px-4 text-base"
              />
            </ApplicationField>

            <Field>
              <FieldLabel htmlFor="career-resume">Resume / CV</FieldLabel>
              <div className="relative">
                <Input
                  id="career-resume"
                  name="resume"
                  type="file"
                  accept=".pdf,.doc,.docx"
                  required
                  className="min-h-12 rounded-full bg-white/[0.025] px-4 pr-12 text-base file:mr-4 file:rounded-full file:bg-primary file:px-4 file:text-primary-foreground"
                />
                <UploadIcon className="pointer-events-none absolute right-4 top-1/2 size-5 -translate-y-1/2 text-muted-foreground" aria-hidden="true" />
              </div>
              <FieldDescription>PDF, DOC, or DOCX. Portfolio can be linked above.</FieldDescription>
            </Field>

            <Field>
              <FieldLabel htmlFor="career-message">Short Note</FieldLabel>
              <Textarea
                id="career-message"
                name="message"
                placeholder="Tell us why this role fits your experience."
                required
                className="min-h-32 rounded-[var(--np-radius-lg)] bg-white/[0.025] px-4 py-4 text-base"
              />
            </Field>

            {status ? <FieldError className="text-[color:var(--np-blue-strong)]">{status}</FieldError> : null}
          </FieldGroup>

          <DialogFooter className="mt-8 border-white/10 bg-transparent p-0">
            <Button
              type="button"
              variant="outline"
              className="min-h-11 rounded-full border-white/10 bg-white/[0.04] px-5 text-foreground hover:bg-white/[0.08]"
              onClick={() => onOpenChange(false)}
            >
              Close
            </Button>
            <Button type="submit" className="min-h-11 rounded-full px-5">
              Submit Application
              <SubmitIcon data-icon="inline-end" />
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  )
}

type ApplicationFieldProps = {
  label: string
  htmlFor: string
  children: ReactNode
}

function ApplicationField({ label, htmlFor, children }: ApplicationFieldProps) {
  return (
    <Field>
      <FieldLabel htmlFor={htmlFor}>{label}</FieldLabel>
      {children}
    </Field>
  )
}
