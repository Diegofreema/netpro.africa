import type { LucideIcon } from 'lucide-react';
import {
  BarChart3Icon,
  BriefcaseBusinessIcon,
  CalendarDaysIcon,
  CameraIcon,
  GraduationCapIcon,
  HeartPulseIcon,
  LinkIcon,
  StoreIcon,
  TrophyIcon,
  SendIcon,
} from 'lucide-react';

export type AboutPillar = {
  title: string;
  body: string;
};

export type TeamMember = {
  name: string;
  role: string;
  initials: string;
  tone: string;
};

export type AboutService = {
  title: string;
  body: string;
  icon: LucideIcon;
};

export type ApproachStep = {
  title: string;
  body: string;
};

export type Award = {
  date: string;
  title: string;
  body: string;
  why: string;
};

export const aboutHero = {
  title: 'About NetPro International Limited',
  summary:
    'A 25-year journey of building technology that works, in the markets that need it most.',
};

export const pillars: AboutPillar[] = [
  {
    title: 'Our Mission',
    body: 'To leverage technology and proven business excellence strategies to support organisational transformation across education, healthcare, financial services, and enterprise in Africa.',
  },
  {
    title: 'Our Vision',
    body: 'To become the most credible brand in bespoke software development and technology service provision for education, healthcare, financial institutions, governments, and SMEs in sub-Saharan Africa.',
  },
  {
    title: 'Our Promise',
    body: "Our customer-centric approach ensures that each client's specific needs and strategic objectives are clearly understood and met in the most cost-effective manner without compromise to quality.",
  },
];

export const teamMembers: TeamMember[] = [
  {
    name: 'Dr Emeka Okereke',
    role: 'Co-Founder & CEO',
    initials: 'EO',
    tone: 'linear-gradient(135deg, #f7a9bd, #6d8cff)',
  },
  {
    name: 'Sarah Adams',
    role: 'Head of Design',
    initials: 'SA',
    tone: 'linear-gradient(135deg, #caa1ff, #6d8cff)',
  },
  {
    name: 'Michael Williams',
    role: 'Project Manager',
    initials: 'MW',
    tone: 'linear-gradient(135deg, #ffd067, #5dd39e)',
  },
  {
    name: 'Emily Johnson',
    role: 'Lead Web Developer',
    initials: 'EJ',
    tone: 'linear-gradient(135deg, #87d7ff, #ff9c7b)',
  },
  {
    name: 'Jessica Lee',
    role: 'UX/UI Designer',
    initials: 'JL',
    tone: 'linear-gradient(135deg, #eef2ff, #93c5fd)',
  },
  {
    name: 'Robert Johnson',
    role: 'Lead Mobile App Developer',
    initials: 'RJ',
    tone: 'linear-gradient(135deg, #dbeafe, #60a5fa)',
  },
  {
    name: 'Emma Taylor',
    role: 'Digital Marketer',
    initials: 'ET',
    tone: 'linear-gradient(135deg, #e5e7eb, #9ca3af)',
  },
  {
    name: 'Olivia Martin',
    role: 'Content Specialist',
    initials: 'OM',
    tone: 'linear-gradient(135deg, #facc15, #ef4444)',
  },
];

export const story = {
  eyebrow: 'Our Story',
  title: "Building Africa's Technology Future Since 2000",
  body: 'NetPro Africa Limited was incorporated in 2000 and has evolved into a customer-focused, Africa-oriented technology company serving institutions across Nigeria and West Africa. What started as network infrastructure and software consultancy has grown into a full-spectrum platform company with AI-powered products for universities, polytechnics, hospitals, financial institutions, government agencies, cooperative societies, and business management teams.',
  stats: [
    { value: '25+', label: 'Years incorporated' },
    { value: '20+', label: 'Distinct software products' },
    { value: '9+', label: 'Active service lines' },
    { value: '3+', label: 'Office locations' },
  ],
};

export const serviceIntro = {
  eyebrow: 'What we do',
  title:
    'Purpose-Built Software for Education, Healthcare & Financial Services',
  body: 'We build and deploy intelligent software platforms for how institutions educate, hospitals deliver care, financial institutions serve clients, and businesses operate.',
};

export const aboutServices: AboutService[] = [
  {
    title: 'Education Technology',
    body: 'Open and distance learning, AI-driven academic ERP, results management, and quality assurance systems serving secondary schools to research universities.',
    icon: GraduationCapIcon,
  },
  {
    title: 'Healthcare Technology',
    body: 'Virtual care, patient empowerment, hospital management, and student health platforms for the African healthcare ecosystem.',
    icon: HeartPulseIcon,
  },
  {
    title: 'Financial Technology',
    body: 'Microfinance banking platforms, cooperative management, digital lending, agent banking, and mobile banking apps for African financial institutions.',
    icon: BarChart3Icon,
  },
  {
    title: 'Enterprise & Bespoke',
    body: 'Custom ERP development, HR systems, judiciary management, compliance platforms, and business management tools built for specific operating contexts.',
    icon: StoreIcon,
  },
];

export const approach = {
  eyebrow: 'How we work',
  title: 'Our Solution Approach',
  body: "We travel deep into every client's operational reality before we write a single line of code.",
  intro:
    "Our process follows a systematic path to deliver software that aligns with each client's business needs, compliance context, and working culture.",
};

export const approachSteps: ApproachStep[] = [
  {
    title: 'Step 1: Discovery & Requirements',
    body: 'We invest time understanding your institution, processes, and goals before proposing any solution. For financial clients, this includes regulatory and compliance context.',
  },
  {
    title: 'Step 2: Bespoke Design',
    body: 'No generic deployments. We configure or build systems that match your operational reality, whether that is an academic ERP or a core banking solution.',
  },
  {
    title: 'Step 3: Agile Implementation',
    body: 'SCRUM-driven delivery with transparent milestones, regular client check-ins, and iterative testing.',
  },
  {
    title: 'Step 4: 24/7 Support',
    body: 'Our support team is accessible around the clock to ensure your systems run without interruption.',
  },
];

export const awardsIntro = {
  eyebrow: 'Our',
  title: 'Awards & Recognitions',
  body: 'Recognition across product delivery, mobile development, marketing systems, and technology innovation.',
};

export const awards: Award[] = [
  {
    date: 'October 2017',
    title: 'Digital Excellence Award',
    body: 'Recognition for contributions to digital service delivery and web development work for growing organizations.',
    why: 'Innovative web design and development solutions.',
  },
  {
    date: 'March 2019',
    title: 'Top Mobile App Development Agency',
    body: 'Recognized by industry reviewers for reliable mobile product delivery and user-centered application design.',
    why: 'Focused mobile app development services and designs.',
  },
  {
    date: 'July 2022',
    title: 'Best Digital Marketing Campaign',
    body: 'Awarded for measurable campaign delivery, stronger targeting, and practical digital growth support.',
    why: 'Data-driven strategies and targeted marketing efforts.',
  },
  {
    date: 'January 2026',
    title: 'Innovative Tech Startup Award',
    body: 'Recognition of continued investment in emerging technologies and business-focused software platforms.',
    why: 'Pioneering use of emerging technologies.',
  },
];

export const socialIcons = [CameraIcon, SendIcon, LinkIcon] as const;
export const awardIcon = TrophyIcon;
export const dateIcon = CalendarDaysIcon;
export const enterpriseIcon = BriefcaseBusinessIcon;
