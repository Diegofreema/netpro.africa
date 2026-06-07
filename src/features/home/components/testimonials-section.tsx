import { LandingSectionHeading } from '@/features/home/components/landing-section-heading';
import { TestimonialCard } from '@/features/home/components/testimonial-card';
import { testimonials } from '@/features/home/data/landing-page-content';

export function TestimonialsSection() {
  return (
    <section className="np-section">
      <div className="flex flex-col gap-10 sm:gap-16">
        <LandingSectionHeading
          title="Testimonials"
          description="Clients value clear communication, careful delivery, and work that their teams can keep improving after launch."
        />
        <div className="flex gap-4 overflow-x-auto px-[max(var(--np-gutter),calc((100vw-var(--np-container))/2+var(--np-gutter)))] pb-4 scrollbar-none sm:gap-8 [&::-webkit-scrollbar]:hidden">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.name}
              className="shrink-0"
              data-reveal="card"
            >
              <TestimonialCard {...testimonial} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
