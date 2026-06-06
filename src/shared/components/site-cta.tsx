import { Link } from '@tanstack/react-router'

import { Button } from '@/components/ui/button'

export function SiteCta() {
  return (
    <section className="bg-background px-[var(--np-gutter)] py-12 sm:py-16" aria-labelledby="site-cta-title">
      <div className="np-site-cta mx-auto flex min-h-[32rem] w-full max-w-[1600px] flex-col items-center justify-start overflow-hidden rounded-[1.5rem] border border-white/10 px-5 pt-18 text-center sm:min-h-[38rem] sm:px-8 sm:pt-24 lg:min-h-[42rem] lg:pt-28">
        <div className="relative z-10 mx-auto flex max-w-[1100px] flex-col items-center">
          <h2
            id="site-cta-title"
            className="max-w-[980px] text-[clamp(2rem,4.4vw,4rem)] font-semibold leading-[1.05] tracking-[-0.025em] text-foreground"
          >
            Ready to Transform Your Digital Presence?
          </h2>
          <p className="mt-7 max-w-[1180px] text-[clamp(1rem,1.35vw,1.25rem)] leading-relaxed text-[color:var(--np-subtle)]">
            Take the first step towards digital success with NETPRO Africa by your side. Our team of experts is eager to craft tailored solutions that drive growth for your business. Whether you need a stunning website, a powerful mobile app, or a data-driven marketing campaign, we've got you covered. Let's embark on this transformative journey together.
          </p>
          <p className="mt-14 text-[clamp(1.05rem,1.5vw,1.35rem)] font-medium text-foreground">
            Unlock Your Digital Potential Today
          </p>
          <div className="mt-6 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Button
              asChild
              className="np-focus h-14 rounded-full border-primary bg-primary px-7 text-base font-medium text-primary-foreground shadow-(--np-shadow-blue) transition-[background-color,transform] duration-(--np-duration-fast) hover:bg-[color:var(--np-blue-strong)] active:scale-[0.98] sm:min-w-58"
            >
              <Link to="/contact-us">Request Consultation</Link>
            </Button>
            <Button
              asChild
              className="np-focus h-14 rounded-full border-white/10 bg-white/[0.08] px-7 text-base font-medium text-foreground transition-[background-color,transform,border-color] duration-(--np-duration-fast) hover:border-white/16 hover:bg-white/[0.12] active:scale-[0.98] sm:min-w-52"
              variant="outline"
            >
              <Link to="/services">See our products</Link>
            </Button>
          </div>
        </div>

        <div className="np-site-cta-mark" aria-hidden="true">
          <span className="np-site-cta-word">netpro</span>
          <span className="np-site-cta-globe">
            <span className="np-site-cta-cap" />
            <span className="np-site-cta-leaf" />
          </span>
        </div>
      </div>
    </section>
  )
}
