import type { LucideIcon } from 'lucide-react';
import {
  ArrowRightIcon,
  BadgeCheckIcon,
  BlocksIcon,
  BoxesIcon,
  ChartColumnIcon,
  DiamondIcon,
  Flower2Icon,
  GraduationCapIcon,
  HeartPulseIcon,
  MinusIcon,
  PanelsTopLeftIcon,
  PlusIcon,
  SearchIcon,
  StoreIcon,
  LightbulbIcon,
  TrophyIcon,
} from 'lucide-react';
import { assetUrl } from '@/shared/config/site';

export type LandingBenefit = {
  title: string;
  subtitle?: string;
  description: string;
  icon: LucideIcon;
  tags?: string[];
  features?: string[];
};

export type LandingService = LandingBenefit;

export type LandingProject = {
  title: string;
  category: string;
  date: string;
  description: string;
  image: string;
};

export type LandingPartner = {
  name: string;
  description: string;
  icon: LucideIcon;
};

export type LandingFaq = {
  question: string;
  answer?: string;
};

export const heroContent = {
  title: 'Leading Innovation & Technology Transformation Since 2000',
  description:
    'NetPro Africa delivers bespoke software solutions, technology  transformation, and innovation-led services across education,  healthcare, financial services, and enterprise in sub-Saharan Africa.',
  pretext: 'Transforming Africa Through Technology',
  primaryCta: 'Talk to an Expert',
  secondaryCta: 'Explore Products',
};

export const trustedInstitutions = [
  'Imo State Polytechnic',
  'Claretian University',
  'Rocana Institute',
  'Living Temple Academy',
  'Federal Institutions',
];

export const benefits: LandingBenefit[] = [
  {
    title: 'Education Technology',
    subtitle: 'End-to-End Academic Management',
    description:
      'From student admissions to alumni records, our educational software suite covers every touchpoint in the academic lifecycle now powered by AI and built for open and distance learning.',
    icon: GraduationCapIcon,
    tags: ['EMS / ERP', 'LMS', 'RTMS', 'SIWES', 'JMS'],
  },
  {
    title: 'Healthcare Technology',
    subtitle: 'Connected Healthcare Delivery',
    description:
      'Our healthcare software empowers hospitals, clinics, and campus health units to manage patients, share records securely, and deliver virtual care at scale.',
    icon: HeartPulseIcon,
    tags: ['HMS', 'SHIMS', 'HHS'],
  },
  {
    title: 'Financial Technology',
    subtitle: 'Digital-First Financial Services',
    description:
      'From microfinance banking platforms to cooperative society management and mobile banking apps, NetPro powers financial institutions with secure, compliant, and scalable digital infrastructure.',
    icon: ChartColumnIcon,
    tags: ['MFBS', 'CSMS', 'LMS-Fin', 'Agent Banking', 'Mobile Banking'],
  },
  {
    title: 'Business & Enterprise',
    subtitle: 'Cross-Sector ERP & Management Tools',
    description:
      'Beyond education, health, and finance, we build bespoke ERPs and management systems for human resources, property, legal compliance, and more.',
    icon: StoreIcon,
    tags: ['HRMS', 'JMIS', 'Property Management', 'Bespoke ERP'],
  },
  {
    title: 'Technology Services',
    subtitle: 'Consulting, Infrastructure & Training',
    description:
      'Strategy, implementation, and ongoing support. We design network infrastructure, build mobile apps, run training programmes, and offer cybersecurity and technology transformation consulting.',
    icon: LightbulbIcon,
    tags: ['Consultancy', 'Networking', 'Cybersecurity', 'Mobile Dev'],
  },
];

export const services: LandingService[] = [
  {
    title: 'Silver',
    description:
      'Core academic and administrative management for secondary institutions.',
    features: [
      'Student information management',
      'Fee and admissions processing',
      'Results & transcript generation',
      'Standard support & onboarding',
    ],
    icon: TrophyIcon,
  },
  {
    title: 'Gold',
    description:
      'Full academic ERP with course registration, SIWES, and quality management.',
    features: [
      'All Silver features',
      'Course & programme management',
      'SIWES & internship tracking',
      'Library management system',
      'Quality management & audits',
    ],
    icon: TrophyIcon,
  },
  {
    title: 'Platinum',
    description:
      'The complete AI-powered university platform with e-learning and content development.',
    features: [
      'All Gold features',
      'AI-powered learning management',
      'Distance & open learning support',
      'Academic journal management',
      'E-learning content development',
      'Digital project repository',
    ],
    icon: TrophyIcon,
  },
];

export const projects: LandingProject[] = [
  {
    title: 'Innovative E-commerce Platform',
    category: 'Web Development',
    date: 'January 2022',
    description:
      'A commerce experience with clear product discovery, secure checkout flows, and a responsive storefront.',
    image: assetUrl('/assets/netpro/project-commerce.png'),
  },
  {
    title: 'Mobile App for Enhanced Fitness',
    category: 'Mobile App Development',
    date: 'March 2022',
    description:
      'A fitness product with guided plans, progress tracking, and a polished user experience across screens.',
    image: assetUrl('/assets/netpro/project-fitness.png'),
  },
  {
    title: 'Modern Corporate Website',
    category: 'Web Design',
    date: 'April 2022',
    description:
      'A refreshed corporate presence with stronger hierarchy, consistent visual language, and responsive layouts.',
    image: assetUrl('/assets/netpro/project-corporate.png'),
  },
  {
    title: 'Digital Marketing Success Story',
    category: 'Digital Marketing',
    date: 'May 2022',
    description:
      'A campaign and website system that improved message clarity, search visibility, and qualified inquiries.',
    image: assetUrl('/assets/netpro/project-travel.png'),
  },
];

export const testimonials = [
  {
    quote:
      "Working with Netpro Africa was a pleasure. Their web design team captured our brand's essence and helped customers understand our offer faster.",
    name: 'Mark Roberts',
    role: 'Founder of GreenEarth Eco Store',
  },
  {
    quote:
      'The mobile app exceeded our expectations. The interface is approachable, reliable, and easier for our members to use every week.',
    name: 'Lisa Williams',
    role: 'Head of Product at HealthTech Innovations',
  },
  {
    quote:
      'Netpro Africa helped modernize our outdated website with care. The process was clear and the final result felt easy for our team to own.',
    name: 'Michael Johnson',
    role: 'Marketing Manager at GlobalTech Solutions',
  },
];

export const faqs: LandingFaq[] = [
  {
    question: 'How long does it take to complete a web development project?',
    answer:
      'Timelines vary by complexity and approvals. Most teams receive a scoped plan before delivery begins, so launch expectations are clear.',
  },
  {
    question:
      'Can you create a responsive website design that looks great on all devices?',
    answer:
      'Yes. We design mobile-first interfaces, then refine tablet and desktop states so the experience feels consistent across every viewport.',
  },
  {
    question: 'Can you handle large-scale mobile app development projects?',
    answer:
      'Yes. We plan architecture, delivery milestones, QA, and release support for complex mobile products across Android, iOS, and cross-platform stacks.',
  },
  {
    question:
      'What digital marketing strategies do you use to drive website traffic?',
    answer:
      'We combine SEO, content strategy, paid campaigns, analytics, and conversion optimization so traffic growth is measurable and useful.',
  },
  {
    question: 'Can you integrate third-party APIs into our mobile app?',
    answer:
      'Yes. We integrate payment, identity, messaging, maps, analytics, and business APIs with attention to reliability, security, and long-term maintainability.',
  },
  {
    question: 'How do you ensure cross-platform compatibility for mobile apps?',
    answer:
      'We define shared interaction patterns, test across target devices, and use platform-aware implementation where native behavior matters.',
  },
  {
    question: 'How do you secure user data in web applications?',
    answer:
      'We apply secure authentication, access control, encrypted transport, careful API design, and routine reviews throughout delivery.',
  },
];

export const partners: LandingPartner[] = [
  {
    name: 'ABC Tech Solutions',
    description:
      'A leading technology firm that trusted Netpro Africa to develop their responsive website, showcasing their products and services.',
    icon: BoxesIcon,
  },
  {
    name: 'GreenEarth Eco Store',
    description:
      'Netpro Africa collaborated with GreenEarth Eco Store to create an engaging e-commerce platform that promotes sustainable living and eco-friendly products.',
    icon: DiamondIcon,
  },
  {
    name: 'HealthTech Innovations',
    description:
      'Netpro Africa developed a user-centric mobile app for HealthTech Innovations, helping them improve how people track and manage their health.',
    icon: Flower2Icon,
  },
  {
    name: 'GlobalTech Solutions',
    description:
      'GlobalTech Solutions partnered with Netpro Africa for a website redesign, resulting in a modern interface that elevates their online presence.',
    icon: BadgeCheckIcon,
  },
  {
    name: 'TechGuru Inc.',
    description:
      "Netpro Africa digital marketing strategies boosted TechGuru Inc.'s online visibility and customer engagement, driving significant business growth.",
    icon: BlocksIcon,
  },
  {
    name: 'ArtScape Gallery',
    description:
      "Netpro Africa brought ArtScape Gallery's artistic vision to life with a visually stunning website, showcasing the work of talented artists.",
    icon: BlocksIcon,
  },
];

export const partnerIcon = PanelsTopLeftIcon;
export const faqOpenIcon = MinusIcon;
export const faqClosedIcon = PlusIcon;
export const searchIcon = SearchIcon;
export const arrowIcon = ArrowRightIcon;
