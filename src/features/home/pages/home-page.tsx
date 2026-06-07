import { FocusAreasSection } from '@/features/home/components/focus-areas-section';
import { HeroSection } from '@/features/home/components/hero-section';
import { HomeFaqSection } from '@/features/home/components/home-faq-section';
import { ServiceTiersSection } from '@/features/home/components/service-tiers-section';
import { TestimonialsSection } from '@/features/home/components/testimonials-section';
import { TrustStrip } from '@/features/home/components/trust-strip';
import { WorksSection } from '@/features/home/components/works-section';
import {
  AnimatedPageSections,
  type AnimatedPageSectionConfig,
} from '@/shared/components/animated-page-sections';
import { useInViewAnimations } from '@/shared/hooks/use-in-view-animations';

const homeSections: AnimatedPageSectionConfig[] = [
  {
    id: 'hero',
    Component: HeroSection,
    amount: 0.4,
  },
  {
    id: 'trust-strip',
    Component: TrustStrip,
    y: 22,
    scale: 0.996,
    amount: 0.55,
  },
  {
    id: 'focus-areas',
    Component: FocusAreasSection,
    y: 36,
    scale: 0.994,
    amount: 0.22,
  },
  {
    id: 'service-tiers',
    Component: ServiceTiersSection,
    y: 38,
    scale: 0.993,
    amount: 0.2,
  },
  {
    id: 'works',
    Component: WorksSection,
    y: 34,
    scale: 0.994,
    amount: 0.2,
  },
  {
    id: 'testimonials',
    Component: TestimonialsSection,
    y: 32,
    scale: 0.995,
    amount: 0.24,
  },
  {
    id: 'faq',
    Component: HomeFaqSection,
    y: 30,
    scale: 0.995,
    amount: 0.25,
  },
  // {
  //   id: 'partners',
  //   Component: PartnersSection,
  //   y: 34,
  //   scale: 0.994,
  //   amount: 0.2,
  // },
];

export function HomePage() {
  useInViewAnimations();

  return (
    <div className="overflow-hidden bg-background">
      <AnimatedPageSections
        sections={homeSections}
        dataAttribute="data-home-section"
      />
    </div>
  );
}
