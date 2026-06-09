export const navigationItems = [
  {
    title: 'Home',
    path: '/',
    description: 'Company overview and core highlights',
  },
  {
    title: 'Products',
    path: '/products',
    description: 'Case studies, delivery snapshots, and portfolio work',
  },
  {
    title: 'Services',
    path: '/services',
    description: 'Consulting, implementation, support, and managed services',
  },

  {
    title: 'About us',
    path: '/about-us',
    description: 'Mission, leadership, process, and company story',
  },

  // {
  //   title: 'Careers',
  //   path: '/careers',
  //   description: 'Open roles, culture, and hiring process',
  // },
  // {
  //   title: 'Blog',
  //   path: '/blog',
  //   description: 'Insights, announcements, and technical articles',
  // },
] as const;

export type NavigationItem = (typeof navigationItems)[number];
export type NavigationPath =
  | '/'
  | '/services'
  | '/products'
  | '/about-us'
  | '/contact-us'
  | '/careers'
  | '/blog';
