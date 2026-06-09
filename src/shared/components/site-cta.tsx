import { Link } from '@tanstack/react-router';

import { Button } from '@/components/ui/button';
import { assetUrl } from '@/shared/config/site';

export function SiteCta() {
  return (
    <section
      className="bg-background px-(--np-gutter) py-12 sm:py-16"
      aria-labelledby="site-cta-title"
    >
      <div className="np-site-cta mx-auto flex w-full max-w-400 flex-col items-center justify-start overflow-hidden rounded-2xl border border-white/10 px-4 pb-36 pt-12 text-center sm:min-h-152 sm:rounded-3xl sm:px-8 sm:pb-48 sm:pt-24 lg:min-h-168 lg:pt-28">
        <div className="relative z-10 mx-auto flex max-w-275 flex-col items-center">
          <h2
            id="site-cta-title"
            className="max-w-245 text-[clamp(2rem,8vw,4rem)] font-semibold leading-[1.05] tracking-tight text-foreground"
          >
            Ready to Transform Your Digital Presence?
          </h2>
          <p className="mt-5 max-w-295 text-base leading-7 text-(--np-subtle) sm:mt-7 sm:text-[clamp(1rem,1.35vw,1.25rem)] sm:leading-relaxed">
            Take the first step towards digital success with Netpro by your
            side. Our team of experts is eager to craft tailored solutions that
            drive growth for your business. Whether you need a stunning website,
            a powerful mobile app, or a data-driven marketing campaign, we've
            got you covered. Let's embark on this transformative journey
            together.
          </p>
          <p className="mt-8 text-lg font-medium leading-7 text-foreground sm:mt-14 sm:text-[clamp(1.05rem,1.5vw,1.35rem)]">
            Unlock Your Digital Potential Today
          </p>
          <div className="mt-6 flex w-full flex-col items-center justify-center gap-3 sm:w-auto sm:flex-row">
            <Button
              asChild
              className="np-focus h-13 w-full max-w-xs rounded-full border-primary bg-primary px-6 text-base font-medium text-primary-foreground shadow-(--np-shadow-blue) transition-[background-color,transform] duration-(--np-duration-fast) hover:bg-(--np-blue-strong) active:scale-[0.98] sm:h-14 sm:w-auto sm:min-w-58 sm:px-7"
            >
              <Link to="/contact-us">Request Consultation</Link>
            </Button>
            <Button
              asChild
              className="np-focus h-13 w-full max-w-xs rounded-full border-white/10 bg-white/8 px-6 text-base font-medium text-foreground transition-[background-color,transform,border-color] duration-(--np-duration-fast) hover:border-white/16 hover:bg-white/12 active:scale-[0.98] sm:h-14 sm:w-auto sm:min-w-52 sm:px-7"
              variant="outline"
            >
              <Link to="/products">See our products</Link>
            </Button>
          </div>
        </div>

        <div className="np-site-cta-mark" aria-hidden="true">
          <img
            src={assetUrl('/assets/netpro/logo.png')}
            alt=""
            className="np-site-cta-logo"
          />
        </div>
      </div>
    </section>
  );
}
