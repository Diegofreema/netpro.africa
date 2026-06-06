import { cn } from '@/lib/utils'

type LandingSectionHeadingProps = {
  eyebrow?: string
  label?: string
  title: string
  description?: string
  className?: string
}

export function LandingSectionHeading({
  eyebrow = 'Our',
  label,
  title,
  description,
  className,
}: LandingSectionHeadingProps) {
  return (
    <div className={cn('mx-auto flex max-w-4xl flex-col items-center gap-5 text-center', className)}>
      {label ? (
        <p
          className="rounded-full border border-white/14 bg-white/[0.04] px-4 py-1.5 text-sm font-medium text-[color:var(--np-muted)]"
          data-reveal="title"
        >
          {label}
        </p>
      ) : null}
      <h2
        className="font-heading text-[clamp(2.25rem,4.5vw,4rem)] font-semibold leading-[1.08] tracking-[-0.03em] text-foreground"
        data-reveal="title"
      >
        {eyebrow ? (
          <>
            <span className="text-[color:var(--np-subtle)]">{eyebrow}</span>{' '}
          </>
        ) : null}
        <span>{title}</span>
      </h2>
      {description ? (
        <p className="max-w-3xl text-base leading-7 text-muted-foreground sm:text-lg" data-reveal="title">
          {description}
        </p>
      ) : null}
    </div>
  )
}
