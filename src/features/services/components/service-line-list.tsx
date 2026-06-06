import { Badge } from '@/components/ui/badge';
import {
  serviceLines,
  serviceLinesIntro,
  type ServiceLine,
} from '@/features/services/data/services-page-content';

export function ServiceLineList() {
  return (
    <section className="np-container py-(--np-section-y)">
      <div className="mx-auto max-w-5xl text-center" data-reveal="title">
        <Badge
          variant="outline"
          className="h-auto rounded-full border-white/10 px-4 py-2 text-sm text-foreground"
        >
          <span
            className="size-1.5 rounded-full bg-foreground"
            aria-hidden="true"
          />
          {serviceLinesIntro.kicker}
        </Badge>
        <h2 className="mt-8 font-heading text-[clamp(2.2rem,4.4vw,4rem)] font-semibold leading-[1.1] tracking-[-0.03em] text-foreground">
          {serviceLinesIntro.title}
        </h2>
        <p className="mx-auto mt-6 max-w-3xl text-base leading-7 text-muted-foreground sm:text-lg">
          {serviceLinesIntro.summary}
        </p>
      </div>

      <div className="relative mx-auto mt-20 max-w-6xl">
        <div
          className="pointer-events-none absolute left-0 top-0 hidden h-full w-36 rounded-(--np-radius-xl) bg-[linear-gradient(90deg,transparent,rgba(255,255,255,.09),transparent)] opacity-70 lg:block"
          aria-hidden="true"
        />
        <div className="np-reveal-stagger flex flex-col gap-16 lg:gap-24">
          {serviceLines.map((service) => (
            <ServiceLineItem key={service.id} service={service} />
          ))}
        </div>
      </div>
    </section>
  );
}

type ServiceLineItemProps = {
  service: ServiceLine;
};

function ServiceLineItem({ service }: ServiceLineItemProps) {
  const Icon = service.icon;

  return (
    <article
      className="grid gap-8 rounded-(--np-radius-xl) border border-white/10 bg-(--np-surface) p-6 sm:p-8 lg:grid-cols-[15rem_1fr] lg:border-transparent lg:bg-transparent lg:p-0"
      data-reveal="card"
    >
      <div className="flex items-center gap-5 lg:min-h-72 lg:items-start">
        <span className="font-heading text-5xl font-semibold leading-none tracking-[-0.04em] text-foreground sm:text-7xl lg:text-8xl">
          {service.number}
        </span>
        <span className="flex size-14 shrink-0 items-center justify-center rounded-full border border-white/10 bg-white/4 text-foreground lg:hidden">
          <Icon className="size-6" aria-hidden="true" />
        </span>
      </div>

      <div className="max-w-5xl lg:pt-8">
        <div className="flex items-center gap-4">
          <span className="hidden size-12 shrink-0 items-center justify-center rounded-full border border-white/10 bg-white/4 text-foreground lg:flex">
            <Icon className="size-5" aria-hidden="true" />
          </span>
          <h3 className="text-2xl font-semibold tracking-[-0.02em] text-foreground sm:text-3xl">
            {service.title}
          </h3>
        </div>
        <p className="mt-5 text-base leading-7 text-muted-foreground sm:text-lg">
          {service.body}
        </p>
        <ul className="mt-3 flex list-disc flex-col gap-1 pl-5 text-base leading-7 text-muted-foreground sm:text-lg">
          {service.points.map((point) => (
            <li key={point}>{point}</li>
          ))}
        </ul>
      </div>
    </article>
  );
}
