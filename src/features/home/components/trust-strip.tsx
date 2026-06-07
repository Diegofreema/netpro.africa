import { trustedInstitutions } from '@/features/home/data/landing-page-content';

function getLogoInitials(institution: string) {
  return institution
    .split(' ')
    .filter(Boolean)
    .slice(0, 2)
    .map((word) => word[0])
    .join('')
    .toUpperCase();
}

export function TrustStrip() {
  return (
    <section className="border-b border-white/8 py-8">
      <div className="np-container">
        <div className="np-card-texture overflow-hidden rounded-[var(--np-radius-xl)] border border-white/10 px-5 py-5 shadow-(--np-shadow-soft) sm:px-7">
          <div className="relative z-10 flex flex-col gap-5">
            <p className="text-sm font-medium text-[color:var(--np-muted)] sm:text-base">
              Trusted by institutions across Nigeria:
            </p>
            <div className="relative -mx-5 overflow-hidden sm:-mx-7">
              <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-14 bg-linear-to-r from-[color:var(--np-surface)] to-transparent sm:w-20" />
              <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-14 bg-linear-to-l from-[color:var(--np-surface)] to-transparent sm:w-20" />
              <div className="np-trust-marquee flex w-max px-5 sm:px-7">
                {[0, 1].map((cycle) => (
                  <div
                    key={cycle}
                    aria-hidden={cycle === 1}
                    className="flex shrink-0 gap-3 pr-3"
                  >
                    {trustedInstitutions.map((institution) => (
                      <div
                        key={`${institution}-${cycle}`}
                        className="flex min-w-max items-center gap-3 rounded-full border border-white/10 bg-white/[0.04] px-3.5 py-2.5 text-sm font-medium text-foreground shadow-[inset_0_1px_0_rgba(255,255,255,0.08)] transition-[background-color,border-color] duration-(--np-duration-fast) hover:border-white/18 hover:bg-white/[0.07]"
                      >
                        <span className="grid size-9 shrink-0 place-items-center rounded-full border border-white/12 bg-white/[0.08] text-xs font-semibold tracking-[0.08em] text-[color:var(--np-accent)]">
                          {getLogoInitials(institution)}
                        </span>
                        <span className="whitespace-nowrap">{institution}</span>
                      </div>
                    ))}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
