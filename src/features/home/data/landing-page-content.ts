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
  titles: [
    'Leading Innovation & Technology Transformation Since 2000',
    'Pushing the Boundaries of Bi/Ai In Education & Healthcare',
    'Credible, Honest Technology Service Provision Like No Other',
  ],
  description:
    'NetPro delivers bespoke software solutions, technology  transformation, and innovation-led services across education,  healthcare, government, SMEs and enterprises in sub-Saharan Africa.',
  pretext: 'Transforming Africa Through AI & Technology',
  primaryCta: 'Talk to an Expert',
  secondaryCta: 'Explore Products',
};

export const trustedInstitutions = [
  'Imo State Polytechnic',
  'Claretian University',
  'Rocana Institute',
  'Living Temple Academy',
  'Handmaids of the Holy Child Jesus',
  'Federal Polytechnic Nekede',
  'University of Innovation, Science and Technology',
  'Treasure Scientia School',
  'University of Agriculture and Environmental Sciences',
  'Ancilla Catholic Hospital Foundation',
  'Holy Family Hospital & Maternity',
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
      'NetPro International Limited has been the ICT Consultants and part of the success story of Imo State Polytechnic, Umuagwo since 2011. Their outstanding leadership, and clear commitment to the professional development of the team is second to none. There services and support are indeed the best you can get in this region. I will recommend them any time any day.',
    name: 'Chukwuma Obinna',
    role: 'Director of ICT, Imo State Polytechnic Umuagwo',
  },
  {
    quote:
      'NetPro implemented the Educational Management System in our institution and I must commend the team and management for taking us from a painful manual system to a fully automated system.',
    name: 'Dr Ngozu Azubogu',
    role: 'Claretian University of Nigeria',
  },
  {
    quote:
      'NetPro implemented the Educational Management System in our institution and I must commend the team and management for taking us from a painful manual system to a fully automated system. This has made our lives easy at absolutely no overhead cost to the institution. Thank you so much guys.',
    name: 'Ekene Ikwuegbu',
    role: 'Registrar, Rocana Institute of Technology, Enugu',
  },
  {
    quote:
      'The implementation of the Precisie Hospital Management System at the Claretian University Hospital - Padre Pio Unit, by NetPro International Limited is truly magical. This is the first time I have seen and technology company and team with a level of enthusiasm and commitment to ensuring that technology truly works and adds value to all of us who work here. I cannot thank them enough.',
    name: 'Rev. Sr. Dr. Joannes Uzoma',
    role: 'Chief Medical Director, Claretian University Hospital',
  },
  {
    quote:
      'The Code Camp by NetPro Academy created the most amazing experience learning experience my kids have every experienced in Living Temple Academy. I send you a big hug from the kids and their parents. Thank you.',
    name: 'Mrs Eunice Emenaha',
    role: 'Proprietress, Living Temple Academy Owerri',
  },
  {
    quote:
      'On Behalf of the Handmaids of the Holy Child Jesus (HHCJ), US Mission, I would like to thank the Management and Staff of NetPro International Limited for their professionalism and generosity. We have you in our prayers and we are confident that you will attain greatness globally.',
    name: 'Sister Germaine Ocansey HHCJ',
    role: 'Pearland Texas 77584 USA',
  },
];

export const faqs: LandingFaq[] = [
  {
    question: 'Why should we choose Netpro over other technology companies?',
    answer:
      'Netpro is more than a software development company - we are a digital transformation partner. We combine strategy, engineering, infrastructure, cybersecurity, and enterprise support to deliver technology solutions that solve real business problems and create measurable impact.',
  },
  {
    question: 'Do you build products or custom enterprise solutions?',
    answer:
      "Both. We develop proprietary platforms while also designing fully customized solutions tailored to an organization's processes, policies, and growth objectives. Every implementation is engineered to fit your business rather than forcing your business to fit the software.",
  },
  {
    question: 'Can Netpro handle large-scale digital transformation projects?',
    answer:
      'Yes. Our team works with institutions and enterprises to modernize operations through integrated technology ecosystems, automation, cloud solutions, intelligent data management, and enterprise applications that scale with organizational growth.',
  },
  {
    question: 'How do you approach a new project?',
    answer:
      'Every engagement begins with understanding your business, not just your technology requirements. We conduct discovery sessions, analyze workflows, identify challenges, and develop a solution architecture before moving into design, development, deployment, and continuous support.',
  },
  {
    question: 'What industries do you specialize in?',
    answer:
      'Our experience spans Education, Healthcare, Government, Financial Services, NGOs, Manufacturing, and Private Enterprises. While industries differ, our focus remains the same: using technology to improve efficiency, decision-making, and service delivery.',
  },
  {
    question: 'Can your solutions integrate with our existing systems?',
    answer:
      'Absolutely. Our platforms are designed for interoperability and can integrate with existing ERPs, CRMs, payment gateways, APIs, identity management systems, third-party applications, and legacy infrastructure where feasible.',
  },
  {
    question: 'How do you ensure security and data protection?',
    answer:
      'Security is embedded throughout our development lifecycle. We implement industry best practices for authentication, authorization, encryption, infrastructure protection, secure coding, monitoring, and risk management to safeguard business-critical information.',
  },
  {
    question: 'Do you provide support after deployment?',
    answer:
      'Yes. Technology is an ongoing journey, not a one-time delivery. We provide post-deployment support, maintenance, performance optimization, updates, troubleshooting, and continuous improvement to ensure long-term success.',
  },
  {
    question: 'Can Netpro work with organizations outside Nigeria?',
    answer:
      'Yes. Our solutions are designed for organizations across Africa and beyond. Through remote collaboration, cloud infrastructure, and modern development practices, we successfully deliver projects regardless of geographical location.',
  },
  {
    question: 'Do you only develop software?',
    answer:
      'No. We provide end-to-end technology services including software engineering, digital transformation consulting, network infrastructure, cybersecurity, cloud solutions, enterprise equipment supply, technology training, and managed support services.',
  },
  {
    question: 'How long does a typical project take?',
    answer:
      'Project timelines depend on complexity, scope, integrations, and organizational requirements. After discovery and requirements analysis, we provide a transparent implementation roadmap with clearly defined milestones and deliverables.',
  },
  {
    question: 'What makes Netpro different?',
    answer:
      'Our philosophy is simple: Technology should solve business problems, not create new ones. We combine technical excellence with strategic thinking to deliver solutions that are scalable, secure, user-centric, and built for long-term value.',
  },
  {
    question: 'How can we start working with Netpro?',
    answer:
      "Simply reach out to our team with your objectives or challenges. We'll schedule a consultation, assess your needs, recommend the most suitable solution, and develop a roadmap that aligns technology with your business goals.",
  },
];

export const partners: LandingPartner[] = [
  {
    name: 'ABC Tech Solutions',
    description:
      'A leading technology firm that trusted Netpro to develop their responsive website, showcasing their products and services.',
    icon: BoxesIcon,
  },
  {
    name: 'GreenEarth Eco Store',
    description:
      'Netpro collaborated with GreenEarth Eco Store to create an engaging e-commerce platform that promotes sustainable living and eco-friendly products.',
    icon: DiamondIcon,
  },
  {
    name: 'HealthTech Innovations',
    description:
      'Netpro developed a user-centric mobile app for HealthTech Innovations, helping them improve how people track and manage their health.',
    icon: Flower2Icon,
  },
  {
    name: 'GlobalTech Solutions',
    description:
      'GlobalTech Solutions partnered with Netpro for a website redesign, resulting in a modern interface that elevates their online presence.',
    icon: BadgeCheckIcon,
  },
  {
    name: 'TechGuru Inc.',
    description:
      "Netpro digital marketing strategies boosted TechGuru Inc.'s online visibility and customer engagement, driving significant business growth.",
    icon: BlocksIcon,
  },
  {
    name: 'ArtScape Gallery',
    description:
      "Netpro brought ArtScape Gallery's artistic vision to life with a visually stunning website, showcasing the work of talented artists.",
    icon: BlocksIcon,
  },
];

export const partnerIcon = PanelsTopLeftIcon;
export const faqOpenIcon = MinusIcon;
export const faqClosedIcon = PlusIcon;
export const searchIcon = SearchIcon;
export const arrowIcon = ArrowRightIcon;
