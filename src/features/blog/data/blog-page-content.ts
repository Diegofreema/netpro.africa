import type { LucideIcon } from 'lucide-react';
import { CalendarDaysIcon, Clock3Icon } from 'lucide-react';
import { assetUrl } from '@/shared/config/site';

export type BlogCategory = 'All' | 'Business' | 'Design' | 'Development';

export type BlogPost = {
  id: string;
  title: string;
  category: Exclude<BlogCategory, 'All'>;
  excerpt: string;
  body: string;
  author: string;
  authorInitials: string;
  date: string;
  readTime: string;
  image: string;
  imageAlt: string;
  featured?: boolean;
};

export type BlogMetaItem = {
  label: string;
  value: string;
  icon?: LucideIcon;
};

export const blogHero = {
  titleLead: 'Empowering Your',
  title: 'Digital Journey',
  body: 'At NetPro, we share practical notes from design, development, marketing, and technology delivery. Our blog gives founders, operators, and technical teams useful ideas they can apply to real projects.',
};

export const blogCategories: BlogCategory[] = [
  'All',
  'Business',
  'Design',
  'Development',
];

export const blogPosts: BlogPost[] = [
  {
    id: 'web-design-trends-2023',
    title: 'Web Design Trends Shaping 2023',
    category: 'Design',
    excerpt:
      'Stay ahead of the design curve with insights into current web design trends, from immersive experiences to careful color and interaction choices.',
    body: 'The most useful design trends are not decoration. They help teams explain value faster, reduce friction, and make interfaces easier to trust. This article looks at the design choices that improve readability, conversion, and long-term brand memory.',
    author: 'Laura Turner',
    authorInitials: 'LT',
    date: '15 / 01 / 2023',
    readTime: '6 minutes',
    image: assetUrl('/assets/netpro/logo.png'),
    imageAlt: 'NetPro brand mark on a dark textured card',
    featured: true,
  },
  {
    id: 'user-centric-design',
    title: 'The Art of User-Centric Design',
    category: 'Design',
    excerpt:
      'User-centric design is the key to creating intuitive and engaging digital experiences for teams and customers.',
    body: 'Good design begins with the work people are trying to do. We outline practical ways to turn research, task flows, and feedback into clearer product decisions.',
    author: 'Daniel Lee',
    authorInitials: 'DL',
    date: 'March 2019',
    readTime: '6 min read',
    image: assetUrl('/assets/netpro/project-corporate.png'),
    imageAlt: 'Corporate website interface preview',
  },
  {
    id: 'mobile-ux-conversions',
    title: 'Optimizing Mobile User Experience for Higher Conversions',
    category: 'Design',
    excerpt:
      'Mobile devices dominate digital interactions, making mobile user experience crucial for conversion rates.',
    body: 'Mobile conversion improves when screens are faster, forms are shorter, and the main action is always obvious. This piece covers layout, thumb reach, input design, and performance basics.',
    author: 'Amanda Turner',
    authorInitials: 'AT',
    date: 'March 2019',
    readTime: '6 min read',
    image: assetUrl('/assets/netpro/project-fitness.png'),
    imageAlt: 'Mobile app project interface preview',
  },
  {
    id: 'visual-design-branding',
    title: 'The Psychology of Visual Design in Branding',
    category: 'Business',
    excerpt:
      'Visual elements shape customer perception and help teams communicate value before a single meeting.',
    body: 'Branding works when identity choices support the business promise. We explain how typography, spacing, color, imagery, and repetition affect trust.',
    author: 'Benjamin Carter',
    authorInitials: 'BC',
    date: 'March 2019',
    readTime: '6 min read',
    image: assetUrl('/assets/netpro/project-commerce.png'),
    imageAlt: 'E-commerce project interface preview',
  },
  {
    id: 'minimalistic-design',
    title: 'Mastering the Art of Minimalistic Design',
    category: 'Design',
    excerpt:
      'Simplicity and restraint take center stage when teams design interfaces for repeated use.',
    body: 'Minimal design is not empty design. It means hierarchy, contrast, and interaction states are doing the work with fewer competing elements.',
    author: 'Sophia Roberts',
    authorInitials: 'SR',
    date: 'March 2019',
    readTime: '6 min read',
    image: assetUrl('/assets/netpro/project-travel.png'),
    imageAlt: 'Travel website project interface preview',
  },
  {
    id: 'software-delivery-readiness',
    title: 'Preparing Your Team for Custom Software Delivery',
    category: 'Development',
    excerpt:
      'Strong software projects start before code, with clear scope, data ownership, and decision paths.',
    body: 'Before implementation begins, teams need agreement on workflows, permissions, migration needs, reporting, and support. This guide explains how to prepare.',
    author: 'Michael Ade',
    authorInitials: 'MA',
    date: 'April 2020',
    readTime: '7 min read',
    image: assetUrl('/assets/netpro/background.jpg'),
    imageAlt: 'Dark digital background used for technology story',
  },
];

export const blogCta = {
  title: 'Ready to Transform Your Digital Presence?',
  description:
    'Take the first step towards digital success with NetPro by your side. Our team is eager to craft tailored solutions that move your project forward.',
  prompt: 'Unlock your digital potential today',
  primary: 'Request Consultation',
  secondary: 'See our products',
};

export const readIcon = Clock3Icon;
export const dateIcon = CalendarDaysIcon;
