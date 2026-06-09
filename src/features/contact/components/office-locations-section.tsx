import {
  actionIcon,
  locationIcon,
  officeIntro,
  officeLocations,
} from '@/features/contact/data/contact-page-content';

export function OfficeLocationsSection() {
  const LocationIcon = locationIcon;
  const ActionIcon = actionIcon;

  return (
    <section className="np-container py-10 sm:py-16">
      <div className="mx-auto max-w-4xl text-center">
        <h2 className="text-2xl font-semibold tracking-[-0.02em] text-foreground">
          {officeIntro.title}
        </h2>
        <p className="mt-5 text-base leading-7 text-muted-foreground sm:text-lg">
          {officeIntro.body}
        </p>
      </div>

      <div className="mt-12 rounded-(--np-radius-xl) border border-white/10 bg-(--np-surface) p-6 sm:p-10">
        <div className="grid gap-8 lg:grid-cols-2">
          {officeLocations.map((office) => (
            <article
              key={office.city}
              className="np-card-texture flex min-h-112 flex-col items-center justify-center rounded-lg border border-white/10 px-6 py-14 text-center"
              data-reveal="card"
            >
              <div className="flex size-28 items-center justify-center rounded-full border border-white/10 bg-black/20">
                <LocationIcon
                  className="size-10 text-foreground"
                  aria-hidden="true"
                />
              </div>
              <h3 className="mt-16 text-2xl font-medium text-foreground">
                {office.city}
              </h3>
              <p className="mt-6 max-w-xl text-base leading-7 text-muted-foreground sm:text-lg">
                {office.address}
              </p>
              <a
                href={office.href}
                className="np-focus mt-12 inline-flex min-h-14 items-center gap-4 rounded-full border border-white/10 bg-white/2.5 py-2 pl-6 pr-2 text-base font-medium text-foreground transition-[background-color,border-color,transform] duration-(--np-duration-fast) hover:border-white/20 hover:bg-white/5 active:scale-[0.98]"
              >
                Get Direction
                <span className="inline-flex size-11 items-center justify-center rounded-full bg-primary text-primary-foreground">
                  <ActionIcon className="size-5" aria-hidden="true" />
                </span>
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
