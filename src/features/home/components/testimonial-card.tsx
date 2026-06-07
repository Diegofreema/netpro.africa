import { TextQuoteIcon } from 'lucide-react'

type TestimonialCardProps = {
  quote: string
  name: string
  role: string
}

export function TestimonialCard({ quote, name, role }: TestimonialCardProps) {
  return (
    <figure className="w-[min(19rem,calc(100vw-(var(--np-gutter)*2)))] sm:w-[23rem] lg:w-[27rem]">
      <blockquote className="relative rounded-[var(--np-radius-lg)] border border-white/10 bg-[color:var(--np-surface)] p-5 shadow-(--np-shadow-soft) sm:p-8">
        <span className="mb-5 inline-flex size-10 items-center justify-center rounded-[var(--np-radius-sm)] border border-white/10 bg-white/[0.04] sm:mb-7 sm:size-12">
          <TextQuoteIcon className="size-4 text-foreground sm:size-5" aria-hidden="true" />
        </span>
        <p className="text-sm leading-6 text-foreground sm:text-lg sm:leading-7">{quote}</p>
        <span className="absolute -bottom-2 left-6 size-5 rotate-45 border-b border-r border-white/10 bg-[color:var(--np-surface)] sm:-bottom-3 sm:left-7 sm:size-6" />
      </blockquote>
      <figcaption className="mt-7 flex items-center gap-3 sm:mt-9 sm:gap-4">
        <span className="inline-flex size-11 shrink-0 items-center justify-center rounded-full bg-[radial-gradient(circle_at_35%_25%,white,#f5d72c_35%,#1f7fc8_36%_100%)] text-xs font-semibold text-background sm:size-14 sm:text-sm">
          {name
            .split(' ')
            .map((part) => part[0])
            .join('')}
        </span>
        <span className="flex min-w-0 flex-col">
          <span className="text-base font-medium text-foreground sm:text-lg">{name}</span>
          <span className="text-sm leading-5 text-[color:var(--np-subtle)] sm:text-base">{role}</span>
        </span>
      </figcaption>
    </figure>
  )
}
