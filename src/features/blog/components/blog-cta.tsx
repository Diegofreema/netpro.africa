import { blogCta } from '@/features/blog/data/blog-page-content';
import { LandingButton } from '@/features/home/components/landing-button';
import { assetUrl } from '@/shared/config/site';

export function BlogCta() {
  return (
    <section className="np-container pb-24 pt-6 sm:pt-12">
      <div
        className="np-card-texture relative overflow-hidden rounded-[var(--np-radius-xl)] border border-white/10 px-6 pt-18 text-center sm:px-10 lg:pt-24"
        data-reveal="media"
      >
        <div className="relative z-10 mx-auto flex max-w-5xl flex-col items-center gap-6">
          <h2 className="font-heading text-[clamp(2.1rem,4.5vw,3.7rem)] font-semibold leading-[1.08] tracking-[-0.03em] text-foreground">
            {blogCta.title}
          </h2>
          <p className="max-w-4xl text-sm leading-7 text-muted-foreground sm:text-base">
            {blogCta.description}
          </p>
          <p className="mt-5 text-base font-medium text-foreground">
            {blogCta.prompt}
          </p>
          <div className="flex flex-col gap-4 sm:flex-row">
            <LandingButton to="/contact-us">{blogCta.primary}</LandingButton>
            <LandingButton to="/projects" variant="quiet">
              {blogCta.secondary}
            </LandingButton>
          </div>
        </div>

        <div
          className="relative z-10 mx-auto mt-20 h-48 max-w-4xl overflow-hidden sm:h-60"
          aria-hidden="true"
        >
          <div className="absolute inset-x-0 bottom-[-4.8rem] text-[clamp(8rem,23vw,18rem)] font-light leading-none tracking-[-0.08em] text-[#1279c8]">
            netpro
          </div>
          <img
            src={assetUrl('/assets/netpro/logo.png')}
            alt=""
            className="absolute bottom-12 left-[58%] w-28 border-0 outline-none sm:w-36"
            loading="lazy"
          />
          <div className="absolute inset-x-12 bottom-0 h-28 bg-[linear-gradient(90deg,transparent,rgba(24,133,207,.16),rgba(255,255,255,.11),transparent)] backdrop-blur-xl" />
        </div>
      </div>
    </section>
  );
}
