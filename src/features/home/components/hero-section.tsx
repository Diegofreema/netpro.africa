import TextType from '@/components/TextType';
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
          <p className="np-hero-support max-w-5xl leading-8 text-foreground/90 sm:text-lg">
            {heroContent.pretext}
          </p>
          <div className="relative w-full">
            {/* holds height so the page never jumps when text is empty between cycles */}
            <div
              aria-hidden
              className="invisible pointer-events-none np-hero-title max-w-full normal-case font-heading text-[clamp(2.15rem,5.2vw,4.3rem)] font-semibold leading-[1.08] tracking-tight"
            >
              {heroContent.titles.reduce((a, b) => (b.length > a.length ? b : a))}_
            </div>
            <TextType
              text={heroContent.titles}
              typingSpeed={100}
              pauseDuration={2000}
              showCursor
              cursorCharacter="_"
              deletingSpeed={50}
              cursorBlinkDuration={0.5}
              className="absolute top-0 left-0 w-full np-hero-title max-w-full normal-case font-heading text-[clamp(2.15rem,5.2vw,4.3rem)] font-semibold leading-[1.08] tracking-tight text-foreground"
            />
          </div>

          <p className="np-hero-support max-w-5xl leading-8 text-foreground/90 sm:text-lg">
            {heroContent.description}
          </p>
          <div className="np-hero-actions flex flex-col items-center gap-4 sm:flex-row">
            <LandingButton to="/contact-us">
              {heroContent.primaryCta}
            </LandingButton>
            <LandingButton to="/products" variant="quiet">
              {heroContent.secondaryCta}
            </LandingButton>
          </div>
          <HeroStatsPanel className="w-full max-w-6xl" />
        </div>
      </div>
    </section>
  );
}
