import { LandingSectionHeading } from '@/features/home/components/landing-section-heading';
import { PartnerCard } from '@/features/home/components/partner-card';
import { partners } from '@/features/home/data/landing-page-content';

export function PartnersSection() {
  return (
    <section className="np-section">
      <div className="np-container flex flex-col gap-16">
        <LandingSectionHeading
          title="Partners and Clients"
          description="We are grateful for the opportunity to work with esteemed partners and clients. Our strong relationships are a testament to our dedication and expertise in the digital realm."
        />
        <div className="np-reveal-stagger grid gap-8 md:grid-cols-2 xl:grid-cols-3">
          {partners.map((partner) => (
            <div key={partner.name} data-reveal="media">
              <PartnerCard partner={partner} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
