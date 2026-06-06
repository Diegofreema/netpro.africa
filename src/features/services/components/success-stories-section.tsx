import { useState } from 'react'

import { Badge } from '@/components/ui/badge'
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
  arrowIcon,
  successIntro,
  successStories,
  type SuccessStory,
} from '@/features/services/data/services-page-content'

export function SuccessStoriesSection() {
  const [selectedStory, setSelectedStory] = useState<SuccessStory | null>(null)

  return (
    <section className="np-container py-(--np-section-y)">
      <div className="mx-auto max-w-5xl text-center" data-reveal="title">
        <h2 className="font-heading text-[clamp(2.2rem,4.4vw,4rem)] font-semibold leading-[1.1] tracking-[-0.03em] text-foreground">
          {successIntro.titleLead}{' '}
          <span className="text-[color:var(--np-subtle)]">{successIntro.title}</span>
        </h2>
        <p className="mx-auto mt-6 max-w-4xl text-base leading-7 text-muted-foreground sm:text-lg">
          {successIntro.body}
        </p>
      </div>

      <div className="np-reveal-stagger mt-16 grid gap-10 lg:grid-cols-2">
        {successStories.map((story) => (
          <SuccessStoryCard key={story.id} story={story} onRead={setSelectedStory} />
        ))}
      </div>

      <div className="mt-16 flex justify-center">
        <Button
          className="min-h-14 rounded-full border-white/10 bg-white/[0.025] px-3 pl-6 text-base text-foreground hover:bg-white/[0.06]"
          variant="outline"
          onClick={() => setSelectedStory(successStories[0])}
        >
          View All Stories
          <span className="ml-3 inline-flex size-11 items-center justify-center rounded-full bg-primary text-primary-foreground">
            <ArrowIcon />
          </span>
        </Button>
      </div>

      <StoryDialog
        story={selectedStory}
        open={selectedStory !== null}
        onOpenChange={(open) => {
          if (!open) {
            setSelectedStory(null)
          }
        }}
      />
    </section>
  )
}

type SuccessStoryCardProps = {
  story: SuccessStory
  onRead: (story: SuccessStory) => void
}

function SuccessStoryCard({ story, onRead }: SuccessStoryCardProps) {
  const Icon = story.icon

  return (
    <article className="rounded-[var(--np-radius-xl)] border border-white/10 bg-[color:var(--np-surface)] p-8 sm:p-10" data-reveal="card">
      <div className="flex items-center gap-5">
        <span className="flex size-16 items-center justify-center rounded-full border border-white/10 bg-white/[0.08] text-foreground">
          <Icon className="size-7" aria-hidden="true" />
        </span>
        <h3 className="text-3xl font-semibold tracking-[-0.02em] text-foreground">{story.title}</h3>
      </div>

      <div className="mt-8 flex flex-wrap gap-3">
        <Badge variant="outline" className="h-auto rounded-full border-white/10 px-4 py-2 text-base text-foreground">
          {story.industry}
        </Badge>
        <Badge variant="outline" className="h-auto rounded-full border-white/10 px-4 py-2 text-base text-foreground">
          {story.service}
        </Badge>
      </div>

      <div className="mt-10 rounded-[var(--np-radius-lg)] border border-white/10 bg-white/[0.025] p-7">
        <h4 className="text-2xl font-medium text-foreground">Challenge</h4>
        <p className="mt-5 text-base leading-7 text-muted-foreground sm:text-lg">{story.challenge}</p>
        <div className="my-8 h-px bg-white/10" />
        <h4 className="text-2xl font-medium text-foreground">Solution</h4>
        <p className="mt-5 text-base leading-7 text-muted-foreground sm:text-lg">{story.solution}</p>
        <button
          type="button"
          className="np-focus mt-4 inline-flex min-h-11 items-center text-base font-medium text-foreground underline underline-offset-4"
          onClick={() => onRead(story)}
        >
          Read Full Story
        </button>
      </div>
    </article>
  )
}

type StoryDialogProps = {
  story: SuccessStory | null
  open: boolean
  onOpenChange: (open: boolean) => void
}

function StoryDialog({ story, open, onOpenChange }: StoryDialogProps) {
  if (!story) {
    return null
  }

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-h-[min(90svh,42rem)] overflow-y-auto rounded-[var(--np-radius-xl)] border border-white/10 bg-[color:var(--np-surface)] p-6 text-foreground sm:max-w-2xl sm:p-8">
        <DialogHeader>
          <DialogTitle className="font-heading text-3xl font-semibold tracking-[-0.02em]">{story.title}</DialogTitle>
          <DialogDescription className="text-base leading-7 text-muted-foreground">
            {story.industry} · {story.service}
          </DialogDescription>
        </DialogHeader>
        <div className="mt-4 grid gap-6">
          <section className="rounded-[var(--np-radius-lg)] border border-white/10 bg-white/[0.025] p-6">
            <h3 className="text-xl font-semibold text-foreground">Challenge</h3>
            <p className="mt-4 text-base leading-7 text-muted-foreground">{story.challenge}</p>
          </section>
          <section className="rounded-[var(--np-radius-lg)] border border-white/10 bg-white/[0.025] p-6">
            <h3 className="text-xl font-semibold text-foreground">Solution</h3>
            <p className="mt-4 text-base leading-7 text-muted-foreground">{story.solution}</p>
          </section>
        </div>
        <DialogFooter className="mt-8 border-white/10 bg-transparent p-0">
          <Button className="min-h-11 rounded-full px-5" onClick={() => onOpenChange(false)}>
            Close
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}

function ArrowIcon() {
  const Icon = arrowIcon

  return <Icon className="size-5" aria-hidden="true" />
}
