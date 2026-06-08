import { BenefitCard } from '@/features/home/components/benefit-card';
import { LandingSectionHeading } from '@/features/home/components/landing-section-heading';
import { benefits } from '@/features/home/data/landing-page-content';

export function FocusAreasSection() {
  return (
    <section className="np-section">
      <div className="np-container flex flex-col gap-16">
        <LandingSectionHeading
          eyebrow=""
          label="What We Do"
          title="Purpose-Built Software for Education, Healthcare & SME/Enterprise"
          description="We build and deploy intelligent software platforms that transform how institutions educate, how hospitals deliver care, how institutions serve their clients, and how businesses operate."
        />
        <div className="np-reveal-stagger grid gap-y-12 divide-white/10 md:grid-cols-2 lg:grid-cols-3 lg:divide-x">
          {benefits.slice(0, 3).map((benefit) => (
            <div key={benefit.title} data-reveal="card">
              <BenefitCard benefit={benefit} />
            </div>
          ))}
        </div>
        <div className="h-px bg-white/10" />
        <div className="np-reveal-stagger grid gap-y-12 divide-white/10 md:grid-cols-2 lg:grid-cols-2 lg:divide-x">
          {benefits.slice(3).map((benefit) => (
            <div key={benefit.title} data-reveal="card">
              <BenefitCard benefit={benefit} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
