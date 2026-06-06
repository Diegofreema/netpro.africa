import { ContactIntroSection } from '@/features/contact/components/contact-intro-section';
import { InquiryFormSection } from '@/features/contact/components/inquiry-form-section';
import { OfficeLocationsSection } from '@/features/contact/components/office-locations-section';
import { SocialSection } from '@/features/contact/components/social-section';
import {
  AnimatedPageSections,
  type AnimatedPageSectionConfig,
} from '@/shared/components/animated-page-sections';
import { useInViewAnimations } from '@/shared/hooks/use-in-view-animations';

const contactSections: AnimatedPageSectionConfig[] = [
  {
    id: 'intro',
    Component: ContactIntroSection,
    amount: 0.38,
  },
  {
    id: 'locations',
    Component: OfficeLocationsSection,
    y: 32,
    scale: 0.995,
    amount: 0.24,
  },
  {
    id: 'inquiry-form',
    Component: InquiryFormSection,
    y: 34,
    scale: 0.994,
    amount: 0.22,
  },
  {
    id: 'social',
    Component: SocialSection,
    y: 30,
    scale: 0.995,
    amount: 0.26,
  },
];

export function ContactPage() {
  useInViewAnimations();

  return (
    <div className="overflow-hidden bg-background">
      <AnimatedPageSections sections={contactSections} />
    </div>
  );
}
