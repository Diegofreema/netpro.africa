import type { MetaDescriptor } from '@tanstack/react-router';
import { absoluteUrl } from '@/shared/config/site';

type PageSeo = {
  title: string;
  description: string;
  keywords: string;
  path: string;
};

export const siteName = 'NetPro Africa Limited';
export const defaultOgImage = absoluteUrl('/assets/netpro/logo.png');

export const pageSeo = {
  home: {
    title:
      'NetPro Africa Limited - Leading Innovation & Technology Transformation in Africa',
    description:
      'NetPro Africa delivers bespoke software solutions, technology transformation, and innovation-led services across education, healthcare, financial services, and enterprise in Africa. Trusted since 2000.',
    keywords:
      'technology transformation Africa, innovation consulting Nigeria, educational management system, hospital management system, microfinance bank software Nigeria, cooperative society management system, financial technology Africa, SaaS Nigeria, ERP Africa, bespoke software Nigeria, NetPro',
    path: '/',
  },
  about: {
    title:
      'About NetPro Africa | 25 Years of Innovation & Technology in Africa',
    description:
      'NetPro Africa has been transforming institutions across Africa through bespoke software, technology consultancy, and innovation-led services since 2000.',
    keywords:
      'NetPro history, innovation company Nigeria, technology consultancy Africa, bespoke software Nigeria, fintech Nigeria, software company Owerri',
    path: '/about-us',
  },
  services: {
    title: 'Technology Services & Capabilities | NetPro Africa Limited',
    description:
      "Explore NetPro's 9 technology service lines - from management consultancy and bespoke ERP development to financial technology, cybersecurity, mobile apps, and enterprise hardware.",
    keywords:
      'software development Nigeria, technology transformation, ERP development, cybersecurity Nigeria, mobile app development Africa, microfinance banking software, fintech consulting Nigeria, digital lending platform, agent banking platform Nigeria',
    path: '/services',
  },
  projects: {
    title:
      'Software Products for Education, Healthcare, FinTech & Enterprise | NetPro Africa',
    description:
      'Explore NetPro Africa software products for education, healthcare, financial services, and enterprise institutions across Nigeria and Africa. Live demos available.',
    keywords:
      'education software Nigeria, hospital management system Nigeria, microfinance bank software Nigeria, cooperative society management system, digital lending platform Nigeria, HRMS Nigeria, enterprise ERP Africa, SaaS education Africa, fintech software Nigeria, NetPro products',
    path: '/projects',
  },
  contact: {
    title: 'Contact NetPro Africa | Enterprise Software Consultation',
    description:
      'Contact NetPro Africa for bespoke software, technology transformation, FinTech platforms, healthcare systems, education software, and enterprise technology consulting.',
    keywords:
      'contact NetPro Africa, software company Nigeria, technology consultation Nigeria, enterprise software consultation, fintech software consultation, Owerri software company',
    path: '/contact-us',
  },
  careers: {
    title: 'Careers at NetPro Africa | Build Software for African Institutions',
    description:
      'Join NetPro Africa and help build education, healthcare, financial technology, and enterprise software products for institutions across Nigeria and Africa.',
    keywords:
      'NetPro careers, software jobs Nigeria, technology jobs Owerri, frontend jobs Nigeria, mobile developer Nigeria, product support jobs Nigeria',
    path: '/careers',
  },
  blog: {
    title: 'Technology Insights & Software Innovation Blog | NetPro Africa',
    description:
      'Read NetPro Africa insights on software innovation, digital transformation, education technology, healthcare platforms, financial technology, and enterprise systems.',
    keywords:
      'NetPro blog, technology insights Nigeria, software innovation Africa, digital transformation Nigeria, education technology blog, fintech insights Africa',
    path: '/blog',
  },
} satisfies Record<string, PageSeo>;

export const productCategorySeo = {
  education: {
    title: 'Education Software Products | NetPro Africa',
    description:
      '10 SaaS-based education software products for African institutions - EMS, LMS, HMS, SHIMS, RTMS, HRMS and more. Live demos available.',
    keywords:
      'EMS Nigeria, LMS Africa, student management system, SIWES software, education ERP Nigeria, SaaS education Africa, academic management system Nigeria, distance learning software Nigeria',
    path: '/projects',
  },
  healthcare: {
    title: 'Healthcare Software Products | NetPro Africa',
    description:
      'Hospital management, student health, and home healthcare platforms for Nigerian and African institutions. Live demos available.',
    keywords:
      'hospital management system Nigeria, HMS software Africa, student health management system, campus health software Nigeria, home health software Nigeria, healthcare ERP Nigeria',
    path: '/projects',
  },
  financialServices: {
    title:
      'Financial Technology Software | Microfinance, Cooperative & Digital Banking | NetPro Africa',
    description:
      '6 SaaS-based financial technology products for African financial institutions - Microfinance Bank System, Cooperative Management, Digital Lending, Agent Banking Platform, Mobile Banking App, and Payment Management. CBN-aware. Live demos available.',
    keywords:
      'microfinance bank software Nigeria, cooperative society management system, digital lending platform Nigeria, agent banking software CBN, mobile banking app Nigeria, loan management system Africa, payment management system, core banking software MFB Nigeria, fintech software Nigeria, SACCO management system, thrift and credit society software',
    path: '/projects',
  },
  enterprise: {
    title:
      'Enterprise Software Products | HRMS, JMIS, PMS, NBACCS | NetPro Africa',
    description:
      'Enterprise management software for HR, the judiciary, property management, and legal compliance - built for Nigerian organisations. Live demos available.',
    keywords:
      'HRMS Nigeria, judiciary management system, property management software Nigeria, conveyancing compliance NBA, enterprise ERP Africa',
    path: '/projects',
  },
} satisfies Record<string, PageSeo>;

export function canonicalUrl(path: string) {
  return absoluteUrl(path);
}

export function routeHead(seo: PageSeo) {
  const url = canonicalUrl(seo.path);

  return {
    meta: [
      { title: seo.title },
      { name: 'description', content: seo.description },
      { name: 'keywords', content: seo.keywords },
      { name: 'application-name', content: siteName },
      { name: 'robots', content: 'index, follow' },
      { property: 'og:site_name', content: siteName },
      { property: 'og:type', content: 'website' },
      { property: 'og:title', content: seo.title },
      { property: 'og:description', content: seo.description },
      { property: 'og:url', content: url },
      { property: 'og:image', content: defaultOgImage },
      { name: 'twitter:card', content: 'summary_large_image' },
      { name: 'twitter:title', content: seo.title },
      { name: 'twitter:description', content: seo.description },
      { name: 'twitter:image', content: defaultOgImage },
    ] satisfies MetaDescriptor[],
    links: [{ rel: 'canonical', href: url }],
  };
}

export const organizationJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: siteName,
  url: absoluteUrl('/'),
  logo: defaultOgImage,
  foundingDate: '2000',
  email: 'sales@netpro.africa',
  telephone: '+2349046795968',
  contactPoint: [
    {
      '@type': 'ContactPoint',
      telephone: '+2349046795968',
      email: 'sales@netpro.africa',
      contactType: 'sales',
      areaServed: ['NG', 'Africa'],
      availableLanguage: ['en'],
    },
    {
      '@type': 'ContactPoint',
      telephone: '+2349011770294',
      email: 'sales@netpro.africa',
      contactType: 'sales',
      areaServed: ['NG', 'Africa'],
      availableLanguage: ['en'],
    },
    {
      '@type': 'ContactPoint',
      email: 'support@netpro.africa',
      contactType: 'customer support',
      areaServed: ['NG', 'Africa'],
      availableLanguage: ['en'],
    },
  ],
  address: [
    {
      '@type': 'PostalAddress',
      addressCountry: 'NG',
      addressLocality: 'Owerri',
      addressRegion: 'Imo State',
      streetAddress:
        'NetPro International Limited, 10 Wilfred Okereke Street, Obinze, Owerri West',
    },
    {
      '@type': 'PostalAddress',
      addressCountry: 'NG',
      addressLocality: 'Abuja',
      addressRegion: 'FCT',
      streetAddress:
        'NetPro International Limited, AUJ COMPLEX Block A, Central Business District',
    },
    {
      '@type': 'PostalAddress',
      addressCountry: 'NG',
      addressLocality: 'Lagos',
      addressRegion: 'Lagos State',
      streetAddress:
        'NetPro International Limited, House U1 Northpoint Estate, by Chevron Drive, Lekki',
    },
  ],
  areaServed: ['Nigeria', 'Africa'],
  sameAs: [
    absoluteUrl('/'),
    'https://instagram.com/netpro.ltd',
    'https://facebook.com/NetproAfrica',
    'https://www.linkedin.com/company/netpro-international-limited',
    'https://www.youtube.com/@netprointernational5023',
  ],
};
