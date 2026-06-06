import { CareersHero } from '@/features/careers/components/careers-hero';
import { CareersOpeningsSection } from '@/features/careers/components/careers-openings-section';
import { HowToApplySection } from '@/features/careers/components/how-to-apply-section';
import {
  AnimatedPageSections,
  type AnimatedPageSectionConfig,
} from '@/shared/components/animated-page-sections';
import { useInViewAnimations } from '@/shared/hooks/use-in-view-animations';

const careersSections: AnimatedPageSectionConfig[] = [
  {
    id: 'hero',
    Component: CareersHero,
    amount: 0.38,
  },
  {
    id: 'openings',
    Component: CareersOpeningsSection,
    y: 34,
    scale: 0.994,
    amount: 0.24,
  },
  {
    id: 'how-to-apply',
    Component: HowToApplySection,
    y: 30,
    scale: 0.995,
    amount: 0.26,
  },
];

export function CareersPage() {
  useInViewAnimations();

  return (
    <div className="overflow-hidden bg-background">
      <AnimatedPageSections sections={careersSections} />
    </div>
  );
}
