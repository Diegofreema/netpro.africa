import type { LucideIcon } from 'lucide-react';
import {
  ArrowRightIcon,
  BarChart3Icon,
  BriefcaseBusinessIcon,
  CalendarDaysIcon,
  CreditCardIcon,
  GraduationCapIcon,
  LineChartIcon,
  LockKeyholeIcon,
  MonitorCogIcon,
  ServerIcon,
  ShieldCheckIcon,
  SmartphoneIcon,
  TerminalSquareIcon,
} from 'lucide-react';

export type ServiceLine = {
  id: string;
  number: string;
  title: string;
  body: string;
  points: string[];
  icon: LucideIcon;
};

export type ExpertiseTabId = 'software' | 'fintech' | 'pricing';

export type ExpertiseTab = {
  id: ExpertiseTabId;
  title: string;
  icon: LucideIcon;
  heading: string;
  summary: string;
  sections: Array<{
    title: string;
    body?: string;
    points?: string[];
  }>;
};

export type SuccessStory = {
  id: string;
  title: string;
  industry: string;
  service: string;
  challenge: string;
  solution: string;
  icon: LucideIcon;
};

export const servicesHero = {
  title: 'Services & Capabilities',
  summary:
    'From strategy and software development to network infrastructure, financial technology, and cybersecurity services built for African institutions.',
};

export const serviceLinesIntro = {
  kicker: 'What we offer',
  title: '9 Service Lines. One Technology Partner.',
  summary:
    'Our capabilities span the full technology lifecycle, from initial strategy through implementation, training, and long-term support.',
};

export const serviceLines: ServiceLine[] = [
  {
    id: 'management-consultancy',
    number: '01',
    title: 'Management Consultancy',
    body: 'Technology and business transformation consultancy for education, healthcare, financial services, and government. We help leadership teams make better technology decisions, from platform selection to compliance strategy.',
    points: [
      'ICT strategy and digital transformation advisory',
      'Technology procurement and vendor assessment',
      'Business process re-engineering and workflow automation',
      'Policy and regulatory technology compliance guidance',
    ],
    icon: BriefcaseBusinessIcon,
  },
  {
    id: 'bespoke-software-development',
    number: '02',
    title: 'Bespoke Software Development',
    body: 'End-to-end custom software: ERPs, web apps, mobile apps, and financial platforms. Every engagement starts with requirements engineering and ends with rigorous QA.',
    points: [
      'Enterprise Resource Planning systems',
      'Core banking and microfinance software',
      'Web and mobile application development',
      'API integrations and automation workflows',
    ],
    icon: TerminalSquareIcon,
  },
  {
    id: 'technology-transformation',
    number: '03',
    title: 'Technology Transformation',
    body: 'Structured transition from legacy or manual systems to modern digital platforms with change management support, data migration, staff training, and measurable outcomes.',
    points: [
      'Legacy system migration and data transfer',
      'Change management and stakeholder communication',
      'Phased rollout planning and risk management',
      'Post-go-live performance review and optimisation',
    ],
    icon: MonitorCogIcon,
  },
  {
    id: 'fintech-solutions',
    number: '04',
    title: 'Financial Technology (FinTech) Solutions',
    body: 'Purpose-built financial infrastructure for microfinance institutions, cooperative societies, credit unions, agent banking networks, and SME lenders.',
    points: [
      'Microfinance bank core platform design and deployment',
      'Cooperative society and SACCO management systems',
      'Digital lending workflow and credit scoring integration',
      'USSD, NIP, and payment gateway integration',
      'Regulatory compliance and audit trail architecture',
    ],
    icon: CreditCardIcon,
  },
  {
    id: 'hardware-enterprise-equipment',
    number: '05',
    title: 'Hardware & Enterprise Equipment',
    body: 'Supply and installation of enterprise network equipment, portable systems, servers, and didactic equipment for technical and engineering education.',
    points: [
      'Network switches, routers, and access points',
      'Server and storage systems for institutional data centres',
      'Didactic equipment for engineering and technology labs',
    ],
    icon: ServerIcon,
  },
  {
    id: 'training-capacity-building',
    number: '06',
    title: 'Training & Capacity Building',
    body: 'Technical training programmes for Nigerian and African learners covering software development, data analysis, cybersecurity, AI/ML, UI/UX, DevOps, project management, and FinTech operations.',
    points: [
      'Software engineering bootcamps',
      'Cybersecurity awareness and practitioner training',
      'Data analysis and business intelligence workshops',
      'FinTech operations training for bank and MFB staff',
    ],
    icon: GraduationCapIcon,
  },
  {
    id: 'cybersecurity-data-analysis',
    number: '07',
    title: 'Cybersecurity & Data Analysis',
    body: 'Cybersecurity services including network security audits, penetration testing, data analysis, and protection of digital assets and institutional data.',
    points: [
      'Network security assessments and vulnerability scanning',
      'Data governance frameworks and privacy compliance',
      'Incident response planning for financial institutions',
      'Business intelligence and data analytics consulting',
    ],
    icon: LockKeyholeIcon,
  },
  {
    id: 'mobile-app-development',
    number: '08',
    title: 'Mobile App Development',
    body: 'Native and cross-platform mobile applications built with modern stacks for institutional clients, healthcare providers, financial services, and SMEs.',
    points: [
      'Cross-platform mobile apps for iOS and Android',
      'Financial services mobile applications',
      'Healthcare and telemedicine mobile platforms',
      'Campus and institutional mobile apps',
    ],
    icon: SmartphoneIcon,
  },
  {
    id: 'booking-scheduling-software',
    number: '09',
    title: 'Booking & Scheduling Software',
    body: 'Appointment and scheduling management software for service businesses including salons, barbershops, clinics, and financial service branches.',
    points: [
      'Multi-location scheduling and capacity management',
      'Automated appointment reminders via SMS and email',
      'Staff and resource allocation dashboards',
    ],
    icon: CalendarDaysIcon,
  },
];

export const expertiseIntro = {
  kicker: 'Deep Dive',
  title: 'Enterprise Software and FinTech Expertise',
};

export const expertiseTabs: ExpertiseTab[] = [
  {
    id: 'software',
    title: 'Software Development',
    icon: TerminalSquareIcon,
    heading: 'Enterprise Software Development',
    summary:
      'Our development practice is built on proven methodologies and a broad technology stack capable of delivering any enterprise solution.',
    sections: [
      {
        title: 'Development Methodology',
        points: [
          'Requirements engineering specialists',
          'SCRUM & Agile development',
          'Iterative delivery with client review cycles',
          'QA & testing built into every sprint',
        ],
      },
      {
        title: 'Delivery Specialisms',
        points: [
          'Enterprise Resource Planning (ERP) systems',
          'Bespoke web & mobile applications',
          'Core banking and microfinance platforms',
          'System integrations and API development',
          'SaaS platforms with multi-tenant architecture',
        ],
      },
      {
        title: 'Technology Stack',
        body: 'LAMP Stack · ASP.NET · MEAN Stack · MERN Stack · MEVN Stack · Python · Java · Flutter · Serverless · AI / ML Integration',
      },
      {
        title: 'Licensing Note',
        body: 'All products are delivered as SaaS with unlimited user base, onboarding support, and defined minimum user thresholds.',
      },
    ],
  },
  {
    id: 'fintech',
    title: 'Fintech Solutions',
    icon: BarChart3Icon,
    heading: 'Financial Technology Solutions',
    summary:
      "NetPro's FinTech capability is built for the realities of African financial services from CBN-regulated microfinance banks to SACCO cooperatives and community lenders.",
    sections: [
      {
        title: 'Who We Serve',
        points: [
          'Microfinance banks (MFBs) seeking to modernise core operations',
          'Cooperative societies and SACCOS managing member savings and loans',
          'Credit unions and community development finance institutions',
          'SME lending platforms and digital-first lenders',
          'Agent banking networks requiring management infrastructure',
        ],
      },
      {
        title: 'Regulatory Awareness',
        body: 'Our financial platforms are designed with CBN guidelines in mind, including data residency, audit trails, KYC/AML workflow support, and role-based access control. We work with your compliance team to ensure every system deployment meets current regulatory requirements.',
      },
      {
        title: 'Integration Capabilities',
        points: [
          'NIBSS Instant Payments (NIP)',
          'USSD channel integration',
          'Payment gateway APIs (Paystack, Flutterwave, Remita)',
          'NIN and BVN verification',
          'SMS and email notification engines',
        ],
      },
    ],
  },
  // {
  //   id: 'pricing',
  //   title: 'Pricing',
  //   icon: TagsIcon,
  //   heading: 'Transparent, Flexible Pricing',
  //   summary:
  //     'Our SaaS model means you pay for value, not headcount. Our EMS pricing starts as low as ₦10,000/student/year, with full institution licensing available for larger deployments. Financial platform pricing is based on seat and transaction volume.',
  //   sections: [
  //     {
  //       title: 'Pricing Matrix',
  //       body:
  //         'EMS — Standard (per student/year): ₦10,000 – ₦15,000. EMS — Full E-Learning / Distance Learning: ₦15,000 – ₦20,000. Financial Platforms: Quote-based: contact sales for MFB and cooperative tiers.',
  //     },
  //     {
  //       title: 'Commercial Notes',
  //       points: [
  //         'Institution licensing available for larger deployments',
  //         'Onboarding, training, and support priced by rollout complexity',
  //         'Financial platforms scoped around compliance and integration needs',
  //       ],
  //     },
  //   ],
  // },
];

export const pricing = {
  title: 'Transparent, Flexible Pricing',
  body: 'Our SaaS model means you pay for value, not headcount. Our EMS pricing starts as low as ₦10,000/student/year, with full institution licensing available for larger deployments. Financial platform pricing is based on seat and transaction volume.',
  columns: [
    'EMS — Standard (per student/year)',
    'EMS — Full E-Learning / Distance Learning',
    'Financial Platforms',
  ],
  values: [
    '₦10,000 – ₦15,000',
    '₦15,000 – ₦20,000',
    'Quote-based: contact sales for MFB and cooperative tiers',
  ],
  cta: 'Get a Custom Quote',
};

export const successIntro = {
  titleLead: 'Success',
  title: 'Stories',
  body: 'Our success is defined by client outcomes. These stories show how focused technology work improves operations and customer experience.',
};

export const successStories: SuccessStory[] = [
  {
    id: 'abc-tech-solutions',
    title: 'ABC Tech Solutions',
    industry: 'E-commerce',
    service: 'Web Design & Development',
    challenge:
      'ABC Enterprises wanted to replace an outdated website with a clearer, more useful platform that improved engagement and online sales.',
    solution:
      'We redesigned the customer journey, shipped a mobile-responsive interface, integrated checkout improvements, and supported search visibility.',
    icon: ShieldCheckIcon,
  },
  {
    id: 'fitness-tracker-app',
    title: 'Fitness Tracker App',
    industry: 'Health & Fitness',
    service: 'Mobile App Development',
    challenge:
      'The client needed a fitness tracking app with real-time data, social sharing, and simple goal management for daily users.',
    solution:
      'We built an interactive mobile product with goal tracking, progress views, and a clean engagement loop for recurring use.',
    icon: LineChartIcon,
  },
];

export const servicesCta = {
  title: "Let's Solve Your Technology Challenge",
  description:
    'Whether you need a full ERP, a bespoke app, a microfinance banking platform, or a network overhaul, we have the team and track record to deliver.',
  primary: 'Request a Consultation',
  secondary: 'See Our Products',
};

export const arrowIcon = ArrowRightIcon;
