import { socialLinks, socialSection } from '@/features/contact/data/contact-page-content'

export function SocialSection() {
  return (
    <section className="np-container py-10 sm:py-16">
      <div className="mx-auto max-w-4xl text-center" data-reveal="media">
        <h2 className="text-2xl font-semibold tracking-[-0.02em] text-foreground">{socialSection.title}</h2>
        <p className="mt-5 text-base leading-7 text-muted-foreground sm:text-lg">{socialSection.body}</p>
      </div>

      <div
        className="mt-12 rounded-[var(--np-radius-xl)] border border-white/10 bg-[color:var(--np-surface)] px-6 py-14 text-center sm:px-10 sm:py-20"
        data-reveal="media"
      >
        <div className="flex justify-center gap-4">
          {socialLinks.map((link) => {
            const Icon = link.icon

            return (
              <a
                key={link.label}
                href={link.href}
                aria-label={link.label}
                className="np-focus inline-flex size-14 items-center justify-center rounded-full border border-white/10 bg-white/[0.04] text-foreground shadow-(--np-shadow-soft) transition-[background-color,border-color,transform] duration-(--np-duration-fast) hover:border-white/20 hover:bg-white/[0.08] hover:-translate-y-0.5"
              >
                <Icon className="size-6" aria-hidden="true" />
              </a>
            )
          })}
        </div>
        <h3 className="mt-10 text-2xl font-medium text-foreground">{socialSection.thanks}</h3>
        <p className="mx-auto mt-5 max-w-3xl text-base leading-7 text-muted-foreground sm:text-lg">
          {socialSection.thanksBody}
        </p>
      </div>
    </section>
  )
}
