import { lazy } from 'react';

export const HomePage = lazy(() =>
  import('@/features/home/pages/home-page').then((m) => ({ default: m.HomePage }))
);
export const ServicesPage = lazy(() =>
  import('@/features/services/pages/services-page').then((m) => ({ default: m.ServicesPage }))
);
export const ProjectsPage = lazy(() =>
  import('@/features/projects/pages/projects-page').then((m) => ({ default: m.ProjectsPage }))
);
export const AboutPage = lazy(() =>
  import('@/features/about/pages/about-page').then((m) => ({ default: m.AboutPage }))
);
export const ContactPage = lazy(() =>
  import('@/features/contact/pages/contact-page').then((m) => ({ default: m.ContactPage }))
);
export const CareersPage = lazy(() =>
  import('@/features/careers/pages/careers-page').then((m) => ({ default: m.CareersPage }))
);
export const BlogPage = lazy(() =>
  import('@/features/blog/pages/blog-page').then((m) => ({ default: m.BlogPage }))
);
