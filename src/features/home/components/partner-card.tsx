import type { LandingPartner } from '@/features/home/data/landing-page-content'
import { BrandLogo } from '@/shared/components/brand-logo'

type PartnerCardProps = {
  partner: LandingPartner
}

export function PartnerCard({ partner }: PartnerCardProps) {
  const Icon = partner.icon

  return (
    <article className="np-card-texture overflow-hidden rounded-[var(--np-radius-lg)] border border-white/10 p-7 text-center transition-[border-color,transform] duration-300 ease-out hover:-translate-y-1 hover:border-white/16 sm:p-8">
      <div className="relative z-10 flex min-h-[25rem] flex-col items-center justify-center gap-12">
        <div className="flex items-center gap-5 sm:gap-7">
          <span className="rounded-full border border-white/10 bg-black/10 px-5 py-3 shadow-[inset_0_0_0_1px_oklch(1_0_0/0.04)] sm:px-6">
            <BrandLogo className="min-h-0 [&_img]:h-7 [&_img]:max-w-[7rem]" />
          </span>
          <span className="text-4xl font-light text-foreground">+</span>
          <span className="inline-flex size-20 items-center justify-center rounded-full border border-white/10 bg-black/20 shadow-[inset_0_0_0_1px_oklch(1_0_0/0.05)]">
            <Icon className="size-8 text-foreground" aria-hidden="true" />
          </span>
        </div>
        <div className="flex flex-col gap-6">
          <h3 className="text-2xl font-semibold tracking-[-0.02em] text-foreground">
            {partner.name}
          </h3>
          <p className="mx-auto max-w-sm text-pretty text-lg leading-7 text-muted-foreground">
            {partner.description}
          </p>
        </div>
      </div>
    </article>
  )
}
