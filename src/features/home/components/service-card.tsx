import type { LandingService } from '@/features/home/data/landing-page-content'
import { IconOrb } from '@/features/home/components/icon-orb'
import { LandingButton } from '@/features/home/components/landing-button'

type ServiceCardProps = {
  service: LandingService
}

export function ServiceCard({ service }: ServiceCardProps) {
  return (
    <article className="np-card-texture overflow-hidden rounded-[var(--np-radius-xl)] border border-white/10 p-8 text-center shadow-(--np-shadow-soft) sm:p-10">
      <div className="relative z-10 flex min-h-[34rem] flex-col items-center justify-center gap-9">
        <IconOrb icon={service.icon} size="lg" />
        <div className="flex max-w-xl flex-col items-center gap-5">
          <h3 className="text-3xl font-semibold tracking-[-0.02em] text-foreground">
            {service.title}
          </h3>
          <div className="max-w-lg text-left text-base leading-7 text-muted-foreground sm:text-lg sm:leading-8">
            <p>{service.description}</p>
            {service.features ? (
              <ul className="mt-1">
                {service.features.map((feature) => (
                  <li key={feature}>▪ {feature}</li>
                ))}
              </ul>
            ) : null}
          </div>
        </div>
        <LandingButton to="/services" showArrow>
          See Products
        </LandingButton>
      </div>
    </article>
  )
}
