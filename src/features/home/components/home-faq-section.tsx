import { FaqList } from '@/features/home/components/faq-list';
import { LandingSectionHeading } from '@/features/home/components/landing-section-heading';
import { faqs } from '@/features/home/data/landing-page-content';

export function HomeFaqSection() {
  return (
    <section className="np-section">
      <div className="flex flex-col gap-16">
        <LandingSectionHeading
          eyebrow="Frequently"
          title="Asked Questions"
          description="Find quick answers about process, pricing inputs, integrations, delivery timelines, and long-term support."
        />
        <FaqList faqs={faqs} />
      </div>
    </section>
  );
}
