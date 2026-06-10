import { useState } from 'react';

import { LandingSectionHeading } from '@/features/home/components/landing-section-heading';
import { TestimonialCard } from '@/features/home/components/testimonial-card';
import { testimonials } from '@/features/home/data/landing-page-content';

export function TestimonialsSection() {
  const [paused, setPaused] = useState(false);

  return (
    <section className="np-section overflow-hidden">
      <div className="flex flex-col gap-10 sm:gap-16">
        <LandingSectionHeading
          title="Testimonials"
          description="Clients value clear communication, careful delivery, and work that their teams can keep improving after launch."
        />
        <div
          className="relative"
          aria-label="Testimonials"
          aria-roledescription="carousel"
        >
          <div
            className="np-testimonials-marquee flex w-max gap-4 sm:gap-8"
            style={{ animationPlayState: paused ? 'paused' : 'running' }}
            onMouseEnter={() => setPaused(true)}
            onMouseLeave={() => setPaused(false)}
            onTouchStart={() => setPaused(true)}
            onTouchEnd={() => setPaused(false)}
            onTouchCancel={() => setPaused(false)}
          >
            {[...testimonials, ...testimonials].map((testimonial, i) => (
              <div key={`${testimonial.name}-${i}`} className="shrink-0">
                <TestimonialCard {...testimonial} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
