import Shuffle from '@/components/Shuffle';
import { HeroStatsPanel } from '@/features/home/components/hero-stats-panel';
import { HeroVisual } from '@/features/home/components/hero-visual';
import { LandingButton } from '@/features/home/components/landing-button';
import { heroContent } from '@/features/home/data/landing-page-content';

export function HeroSection() {
  return (
    <section className="relative min-h-[calc(100svh-6rem)] border-b border-white/8">
      <HeroVisual />

      <div className="np-container relative z-10 flex min-h-[calc(100svh-6rem)] flex-col items-center justify-center py-24 text-center">
        <div className="mx-auto flex w-full max-w-7xl flex-col items-center gap-8">
          <p className="np-hero-support max-w-5xl leading-8 text-[oklch(0.93_0_0/0.88)] sm:text-lg">
            {heroContent.pretext}
          </p>
          <Shuffle
            text={heroContent.title}
            tag="h1"
            shuffleDirection="up"
            duration={0.42}
            animationMode="evenodd"
            shuffleTimes={2}
            ease="power3.out"
            stagger={0.018}
            threshold={0.1}
            rootMargin="0px"
            triggerOnce
            triggerOnHover
            respectReducedMotion
            scrambleCharset="NETPROAFRICA0123456789"
            textAlign="center"
            className="np-hero-title max-w-full normal-case font-heading text-[clamp(2.15rem,5.2vw,4.3rem)] font-semibold leading-[1.08] tracking-tight text-[oklch(0.985_0_0)]"
          />

          <p className="np-hero-support max-w-5xl leading-8 text-[oklch(0.93_0_0/0.88)] sm:text-lg">
            {heroContent.description}
          </p>
          <div className="np-hero-actions flex flex-col items-center gap-4 sm:flex-row">
            <LandingButton to="/contact-us">
              {heroContent.primaryCta}
            </LandingButton>
            <LandingButton to="/projects" variant="quiet">
              {heroContent.secondaryCta}
            </LandingButton>
          </div>
          <HeroStatsPanel className="w-full max-w-6xl" />
        </div>
      </div>
    </section>
  );
}
