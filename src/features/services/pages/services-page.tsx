import { ExpertiseSection } from '@/features/services/components/expertise-section';
import { ServiceLineList } from '@/features/services/components/service-line-list';
import { ServicesHero } from '@/features/services/components/services-hero';
import {
  AnimatedPageSections,
  type AnimatedPageSectionConfig,
} from '@/shared/components/animated-page-sections';
import { useInViewAnimations } from '@/shared/hooks/use-in-view-animations';

const servicesSections: AnimatedPageSectionConfig[] = [
  {
    id: 'hero',
    Component: ServicesHero,
    amount: 0.38,
  },
  {
    id: 'service-lines',
    Component: ServiceLineList,
    y: 36,
    scale: 0.994,
    amount: 0.08,
  },
  {
    id: 'expertise',
    Component: ExpertiseSection,
    y: 34,
    scale: 0.994,
    amount: 0.22,
  },
  // {
  //   id: 'success-stories',
  //   Component: SuccessStoriesSection,
  //   y: 32,
  //   scale: 0.995,
  //   amount: 0.24,
  // },
];

export function ServicesPage() {
  useInViewAnimations();

  return (
    <div className="overflow-hidden bg-background">
      <AnimatedPageSections sections={servicesSections} />
    </div>
  );
}
