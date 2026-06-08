import { AboutHero } from '@/features/about/components/about-hero';
import { AboutPillars } from '@/features/about/components/about-pillars';
import { ApproachSection } from '@/features/about/components/approach-section';
import { StorySection } from '@/features/about/components/story-section';
import { TeamSection } from '@/features/about/components/team-section';
import {
  AnimatedPageSections,
  type AnimatedPageSectionConfig,
} from '@/shared/components/animated-page-sections';
import { useInViewAnimations } from '@/shared/hooks/use-in-view-animations';

const aboutSections: AnimatedPageSectionConfig[] = [
  {
    id: 'hero',
    Component: AboutHero,
    amount: 0.38,
  },
  {
    id: 'pillars',
    Component: AboutPillars,
    y: 34,
    scale: 0.994,
    amount: 0.24,
  },
  {
    id: 'team',
    Component: TeamSection,
    y: 36,
    scale: 0.994,
    amount: 0.22,
  },
  {
    id: 'story',
    Component: StorySection,
    y: 32,
    scale: 0.995,
    amount: 0.24,
  },
  {
    id: 'approach',
    Component: ApproachSection,
    y: 34,
    scale: 0.994,
    amount: 0.22,
  },
  // {
  //   id: 'awards',
  //   Component: AwardsSection,
  //   y: 30,
  //   scale: 0.995,
  //   amount: 0.24,
  // },
];

export function AboutPage() {
  useInViewAnimations();

  return (
    <div className="overflow-hidden bg-background">
      <AnimatedPageSections sections={aboutSections} />
    </div>
  );
}
