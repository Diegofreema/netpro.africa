import type { NavigationPath } from '@/shared/config/navigation'

export type PageContent = {
  title: string
  summary: string
  status: string
  sections: Array<{
    title: string
    description: string
  }>
  ctaLabel: string
  ctaPath: NavigationPath
}

export const pageContent = {
  services: {
    title: 'Services',
    summary:
      'A service catalog skeleton for strategy, implementation, cloud, network, security, and managed support offers.',
    status: 'Service modules',
    ctaLabel: 'Talk to us',
    ctaPath: '/contact-us',
    sections: [
      {
        title: 'Advisory and planning',
        description:
          'Discovery, technical roadmaps, stakeholder alignment, and delivery planning.',
      },
      {
        title: 'Implementation',
        description:
          'Architecture, configuration, migrations, integrations, QA, and launch support.',
      },
      {
        title: 'Managed operations',
        description:
          'Monitoring, optimization, incident response, reporting, and continuous improvement.',
      },
    ],
  },
  projects: {
    title: 'Projects',
    summary:
      'A portfolio skeleton for featured work, measurable outcomes, industries served, and implementation notes.',
    status: 'Portfolio modules',
    ctaLabel: 'Start a project',
    ctaPath: '/contact-us',
    sections: [
      {
        title: 'Featured case studies',
        description:
          'Reusable cards for challenge, solution, result, client sector, and timeline.',
      },
      {
        title: 'Delivery snapshots',
        description:
          'Compact summaries for recent implementations and operational milestones.',
      },
      {
        title: 'Impact metrics',
        description:
          'A future home for uptime, cost savings, migration speed, and team enablement data.',
      },
    ],
  },
  about: {
    title: 'About us',
    summary:
      'A company profile skeleton for mission, values, leadership, delivery approach, and regional focus.',
    status: 'Company modules',
    ctaLabel: 'Meet the team',
    ctaPath: '/about-us',
    sections: [
      {
        title: 'Mission and values',
        description:
          'Core principles, market perspective, and the promise made to clients.',
      },
      {
        title: 'Leadership',
        description:
          'Team bios, advisory experience, certifications, and partner ecosystem.',
      },
      {
        title: 'How we work',
        description:
          'Discovery, delivery governance, documentation, handover, and support rituals.',
      },
    ],
  },
  contact: {
    title: 'Contact us',
    summary:
      'A contact skeleton for sales inquiries, support requests, office information, and response expectations.',
    status: 'Contact modules',
    ctaLabel: 'Send an inquiry',
    ctaPath: '/contact-us',
    sections: [
      {
        title: 'Inquiry form',
        description:
          'Fields for name, company, email, phone, request type, budget, timeline, and message.',
      },
      {
        title: 'Support channels',
        description:
          'Dedicated paths for existing clients, urgent incidents, vendor partners, and media.',
      },
      {
        title: 'Location details',
        description:
          'Address, office hours, map embed placeholder, and regional coverage notes.',
      },
    ],
  },
  careers: {
    title: 'Careers',
    summary:
      'A hiring skeleton for open roles, culture content, benefits, application steps, and talent community.',
    status: 'Hiring modules',
    ctaLabel: 'View roles',
    ctaPath: '/careers',
    sections: [
      {
        title: 'Open roles',
        description:
          'Role cards grouped by department, seniority, location, and employment type.',
      },
      {
        title: 'Life at Netpro',
        description:
          'Culture stories, growth paths, working norms, and employee experience content.',
      },
      {
        title: 'Hiring process',
        description:
          'Application review, interviews, technical assessment, offer, and onboarding stages.',
      },
    ],
  },
  blog: {
    title: 'Blog',
    summary:
      'An editorial skeleton for announcements, technical explainers, field notes, and thought leadership.',
    status: 'Editorial modules',
    ctaLabel: 'Contact editorial',
    ctaPath: '/contact-us',
    sections: [
      {
        title: 'Featured posts',
        description:
          'Article cards with category, author, reading time, publication date, and excerpt.',
      },
      {
        title: 'Categories',
        description:
          'Topic filters for cloud, security, networking, operations, company news, and careers.',
      },
      {
        title: 'Newsletter',
        description:
          'Subscription area for product updates, technical notes, and event announcements.',
      },
    ],
  },
} satisfies Record<string, PageContent>
