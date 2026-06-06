import { trustedInstitutions } from '@/features/home/data/landing-page-content';

export function TrustStrip() {
  return (
    <section className="border-b border-white/8 py-8">
      <div className="np-container">
        <div className="np-card-texture overflow-hidden rounded-[var(--np-radius-xl)] border border-white/10 px-5 py-5 shadow-(--np-shadow-soft) sm:px-7">
          <div className="relative z-10 flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
            <p className="text-sm font-medium text-[color:var(--np-muted)] sm:text-base">
              Trusted by institutions across Nigeria:
            </p>
            <div className="flex flex-wrap gap-2.5">
              {trustedInstitutions.map((institution) => (
                <span
                  key={institution}
                  className="rounded-full border border-white/10 bg-white/[0.04] px-4 py-2 text-sm font-medium text-foreground transition-[background-color,border-color] duration-(--np-duration-fast) hover:border-white/18 hover:bg-white/[0.07]"
                >
                  {institution}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
