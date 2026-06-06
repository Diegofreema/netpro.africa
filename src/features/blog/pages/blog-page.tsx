import { BlogHero } from '@/features/blog/components/blog-hero';
import { BlogListSection } from '@/features/blog/components/blog-list-section';
import {
  AnimatedPageSections,
  type AnimatedPageSectionConfig,
} from '@/shared/components/animated-page-sections';
import { useInViewAnimations } from '@/shared/hooks/use-in-view-animations';

const blogSections: AnimatedPageSectionConfig[] = [
  {
    id: 'hero',
    Component: BlogHero,
    amount: 0.38,
  },
  {
    id: 'posts',
    Component: BlogListSection,
    y: 34,
    scale: 0.994,
    amount: 0.22,
  },
];

export function BlogPage() {
  useInViewAnimations();

  return (
    <div className="overflow-hidden bg-background">
      <AnimatedPageSections sections={blogSections} />
    </div>
  );
}
