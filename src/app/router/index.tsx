import {
  createRootRoute,
  createRoute,
  createRouter,
} from '@tanstack/react-router';

import { AboutPage } from '@/features/about/pages/about-page';
import { BlogPage } from '@/features/blog/pages/blog-page';
import { CareersPage } from '@/features/careers/pages/careers-page';
import { ContactPage } from '@/features/contact/pages/contact-page';
import { HomePage } from '@/features/home/pages/home-page';
import { ProjectsPage } from '@/features/projects/pages/projects-page';
import { ServicesPage } from '@/features/services/pages/services-page';
import { RootRouteComponent } from '@/app/router/root-route';
import { routerBasePath } from '@/shared/config/site';
import { organizationJsonLd, pageSeo, routeHead } from '@/shared/config/seo';

const rootRoute = createRootRoute({
  component: RootRouteComponent,
  head: () => ({
    scripts: [
      {
        type: 'application/ld+json',
        children: JSON.stringify(organizationJsonLd),
      },
    ],
  }),
});

const homeRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/',
  component: HomePage,
  head: () => routeHead(pageSeo.home),
});

const servicesRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/services',
  component: ServicesPage,
  head: () => routeHead(pageSeo.services),
});

const projectsRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/products',
  component: ProjectsPage,
  head: () => routeHead(pageSeo.products),
});

const aboutRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/about-us',
  component: AboutPage,
  head: () => routeHead(pageSeo.about),
});

const contactRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/contact-us',
  component: ContactPage,
  head: () => routeHead(pageSeo.contact),
});

const careersRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/careers',
  component: CareersPage,
  head: () => routeHead(pageSeo.careers),
});

const blogRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/blog',
  component: BlogPage,
  head: () => routeHead(pageSeo.blog),
});

const routeTree = rootRoute.addChildren([
  homeRoute,
  servicesRoute,
  projectsRoute,
  aboutRoute,
  contactRoute,
  careersRoute,
  blogRoute,
]);

export const router = createRouter({
  routeTree,
  defaultPreload: 'intent',
  basepath: routerBasePath,
});

declare module '@tanstack/react-router' {
  interface Register {
    router: typeof router;
  }
}
