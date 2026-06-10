import type { LucideIcon } from 'lucide-react';
import {
  ArrowRightIcon,
  BriefcaseBusinessIcon,
  CalendarDaysIcon,
  ChevronDownIcon,
  SendIcon,
  SmartphoneIcon,
  SparklesIcon,
  UploadIcon,
  ZapIcon,
} from 'lucide-react';

export type CareerJob = {
  id: string;
  title: string;
  location: string;
  icon: LucideIcon;
  experience: string;
  skills: string;
  description: string;
  deadline: string;
  responsibilities: string[];
};

export type ApplicationStep = {
  step: string;
  title: string;
  body: string;
};

export const careersHero = {
  title: 'Unlock Your Potential in the Digital World',
  titleMuted: 'in the Digital World',
  body: 'At NetPro, we build a work environment where careful people can do strong work. Join a team creating software, design systems, and digital services for organizations that need dependable technology.',
};

export const careersIntro = {
  title: 'Be Part of Our Mission, Join Our Growing Team',
  body: 'We are looking for people who communicate clearly, take ownership, and care about useful work. Current openings are listed below.',
};

export const careerJobs: CareerJob[] = [
  {
    id: 'web-designer',
    title: 'Web Designer',
    location: 'Lagos state, Nigeria',
    icon: SparklesIcon,
    experience: 'Minimum 1 year of professional web design experience.',
    skills:
      'Proficiency in Adobe Creative Suite, Figma, responsive design systems, and practical UI/UX design principles.',
    description:
      'As a Web Designer at NetPro, you will create polished, user-friendly website designs and work closely with development and marketing teams to turn concepts into production interfaces.',
    deadline: '30th September 2025',
    responsibilities: [
      'Design responsive website layouts, graphics, icons, and interface states.',
      'Collaborate with front-end developers to preserve design quality during implementation.',
      'Conduct user research and translate findings into clearer interaction patterns.',
      'Prepare presentation-ready concepts and prototypes for client review.',
    ],
  },
  {
    id: 'mobile-app-developer',
    title: 'Mobile App Developer',
    location: 'FCT, Nigeria',
    icon: SmartphoneIcon,
    experience: 'Minimum 2 years of mobile app development experience.',
    skills:
      'Proficiency in iOS or Android development, mobile app architecture, testing, debugging, and release workflows.',
    description:
      'You will build dependable mobile experiences for education, healthcare, finance, and enterprise clients, with attention to performance, accessibility, and maintainability.',
    deadline: '15th October 2025',
    responsibilities: [
      'Build and maintain mobile applications for iOS, Android, or cross-platform stacks.',
      'Integrate APIs, authentication, analytics, and reliable offline states.',
      'Collaborate with designers and backend engineers to ship stable releases.',
      'Write clear technical notes and participate in code reviews.',
    ],
  },
  {
    id: 'digital-marketing-specialist',
    title: 'Digital Marketing Specialist',
    location: 'Imo state, Nigeria',
    icon: ZapIcon,
    experience: 'Minimum 3 years of digital marketing experience.',
    skills:
      'Proficiency in SEO, SEM, social media marketing, content strategy, campaign analytics, and reporting tools.',
    description:
      'You will plan campaigns, improve client visibility, and turn performance data into clear next steps for brands across NetPro projects.',
    deadline: '20th October 2025',
    responsibilities: [
      'Plan digital campaigns across search, social, email, and content channels.',
      'Prepare performance reports with clear recommendations for client teams.',
      'Coordinate with design and engineering teams on campaign landing pages.',
      'Track campaign budgets, leads, conversion quality, and retention signals.',
    ],
  },
  {
    id: 'product-support-engineer',
    title: 'Product Support Engineer',
    location: 'Owerri, Nigeria',
    icon: BriefcaseBusinessIcon,
    experience:
      'Minimum 2 years supporting software products or technical operations.',
    skills:
      'Strong troubleshooting, SQL basics, client communication, documentation, and incident follow-up skills.',
    description:
      'You will support institutions using NetPro platforms, investigate issues, document fixes, and help product teams improve reliability.',
    deadline: '31st October 2025',
    responsibilities: [
      'Respond to product support tickets with clear status updates.',
      'Reproduce client issues and document root causes for engineering teams.',
      'Maintain help documents, onboarding guides, and known-issue notes.',
      'Escalate urgent incidents with enough context for fast resolution.',
    ],
  },
];

export const applyIntro = {
  titleLead: 'How to',
  title: 'Apply',
  body: 'Interested in joining NetPro? Review the role, prepare your materials, and submit your application through the form.',
};

export const applicationSteps: ApplicationStep[] = [
  {
    step: 'Step 01',
    title: 'Explore Job Listings',
    body: 'Review current openings and choose the role that best matches your experience, skills, and career goals.',
  },
  {
    step: 'Step 02',
    title: 'Review Job Description',
    body: 'Open the role details and read the responsibilities, requirements, and deadline before applying.',
  },
  {
    step: 'Step 03',
    title: 'Complete the Application Form',
    body: 'Use the Apply Now button to enter your contact details, selected position, and short application note.',
  },
  {
    step: 'Step 04',
    title: 'Upload Your Documents',
    body: 'Attach your resume, cover letter, and portfolio where applicable.',
  },
  {
    step: 'Step 05',
    title: 'Submit Your Application',
    body: 'Check your details, then submit so our HR team can review your profile.',
  },
  {
    step: 'Step 06',
    title: 'Interview Process',
    body: 'If shortlisted, we will contact you to schedule an interview based on the role and your location.',
  },
];

export const careersCta = {
  title: 'Ready to Transform Your Digital Presence?',
  description:
    'Take the first step towards digital success with NetPro by your side. Our team is eager to craft tailored solutions that drive growth for your business.',
  prompt: 'Unlock your digital potential today',
  primary: 'Request Consultation',
  secondary: 'See our products',
};

export const arrowIcon = ArrowRightIcon;
export const calendarIcon = CalendarDaysIcon;
export const chevronIcon = ChevronDownIcon;
export const submitIcon = SendIcon;
export const uploadIcon = UploadIcon;
