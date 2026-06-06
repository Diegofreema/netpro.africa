import { LandingSectionHeading } from '@/features/home/components/landing-section-heading';
import { ServiceCard } from '@/features/home/components/service-card';
import { services } from '@/features/home/data/landing-page-content';

export function ServiceTiersSection() {
  return (
    <section className="np-section">
      <div className="np-container flex flex-col gap-16">
        <LandingSectionHeading
          eyebrow="Service Tiers"
          title="Scaled for Every Institution Type"
          description="From schools to institutions, our tiered model ensures you get the right features at the right investment level."
        />
        <div className="np-reveal-stagger grid gap-8 lg:grid-cols-2">
          {services.map((service, index) => (
            <div
              key={service.title}
              className={index === 2 ? 'lg:col-span-2' : undefined}
              data-reveal="media"
            >
              <ServiceCard service={service} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
