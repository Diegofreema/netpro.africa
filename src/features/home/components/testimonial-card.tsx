import { TextQuoteIcon } from 'lucide-react'

type TestimonialCardProps = {
  quote: string
  name: string
  role: string
}

export function TestimonialCard({ quote, name, role }: TestimonialCardProps) {
  return (
    <figure className="min-w-[23rem] max-w-[27rem]">
      <blockquote className="relative rounded-[var(--np-radius-lg)] border border-white/10 bg-[color:var(--np-surface)] p-8 shadow-(--np-shadow-soft)">
        <span className="mb-7 inline-flex size-12 items-center justify-center rounded-[var(--np-radius-sm)] border border-white/10 bg-white/[0.04]">
          <TextQuoteIcon className="size-5 text-foreground" aria-hidden="true" />
        </span>
        <p className="text-lg leading-7 text-foreground">{quote}</p>
        <span className="absolute -bottom-3 left-7 size-6 rotate-45 border-b border-r border-white/10 bg-[color:var(--np-surface)]" />
      </blockquote>
      <figcaption className="mt-9 flex items-center gap-4">
        <span className="inline-flex size-14 items-center justify-center rounded-full bg-[radial-gradient(circle_at_35%_25%,white,#f5d72c_35%,#1f7fc8_36%_100%)] text-sm font-semibold text-background">
          {name
            .split(' ')
            .map((part) => part[0])
            .join('')}
        </span>
        <span className="flex flex-col">
          <span className="text-lg font-medium text-foreground">{name}</span>
          <span className="text-base text-[color:var(--np-subtle)]">{role}</span>
        </span>
      </figcaption>
    </figure>
  )
}
