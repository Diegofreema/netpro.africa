import type { LucideIcon } from 'lucide-react';
import {
  BarChart3Icon,
  BriefcaseBusinessIcon,
  Code2Icon,
  DatabaseIcon,
  Globe2Icon,
  GraduationCapIcon,
  LayoutDashboardIcon,
  LineChartIcon,
  MonitorSmartphoneIcon,
  PanelsTopLeftIcon,
  ShieldCheckIcon,
  SparklesIcon,
  SmartphoneIcon,
} from 'lucide-react';

import { assetUrl } from '@/shared/config/site';

export type ProjectTag = {
  label: string;
  icon: LucideIcon;
};

export type ProjectMeta = {
  label: string;
  value: string;
};

export type ProjectTechnology = {
  label: string;
  icon: LucideIcon;
};

export type ShowcaseLabels = {
  summary: string;
  details: string;
  technologies: string;
  subject: string;
  methods: string;
};

export type SoftwareProject = {
  id: string;
  title: string;
  image?: string;
  tags: ProjectTag[];
  summary: string;
  details: string[];
  meta: ProjectMeta[];
  technologies: ProjectTechnology[];
  subject: string;
  subjectInitials: string;
  methods: string[];
  labels?: Partial<ShowcaseLabels>;
};

export type ShowcaseSection = {
  id: string;
  eyebrow: string;
  title: string;
  description: string;
  projects: SoftwareProject[];
};

const productLabels: ShowcaseLabels = {
  summary: 'Product Overview',
  details: 'Key Capabilities',
  technologies: 'Solution Areas',
  subject: 'Best Fit',
  methods: 'Commercial Notes',
};

const deploymentLabels: ShowcaseLabels = {
  summary: 'Deployment Overview',
  details: 'What We Delivered',
  technologies: 'Solution Areas',
  subject: 'Client / Institution',
  methods: 'Delivery Highlights',
};

export const projectsHero = {
  title: 'Our Software Products',
  summary:
    '20+ purpose-built software products across Education, Healthcare, Financial Services, and Enterprise, all available as SaaS with live demos.',
  demoCopy:
    'Create a free account and explore any of our core products in a live demo environment.',
  primary: 'Talk to Sales',
  secondary: 'View Services',
};

const educationProducts: SoftwareProject[] = [
  {
    id: 'ems',
    title: 'Educational Management System',
    image: assetUrl('/assets/netpro/Educational Management System.png'),
    tags: [
      { label: 'Education Software', icon: GraduationCapIcon },
      { label: 'AI-Powered', icon: SparklesIcon },
    ],
    summary:
      'NetPro EMS is a flagship academic ERP for institutions, built to manage the full student lifecycle from first enquiry to alumni engagement across single-campus and multi-campus environments.',
    details: [
      'Admissions management with online application portal and shortlisting workflows',
      'Fee and invoice management with automated receipting and financial reporting',
      'Course registration, timetabling, and academic calendar management',
      'Examinations management, result entry, and CGPA computation',
      'Student record management and digital file archiving',
      'Alumni database and engagement tools',
      'Multi-campus and multi-programme support',
      'AI-powered analytics dashboards for institutional decision-making',
      'Integration with JAMB, NYSC, and national examination APIs',
    ],
    meta: [
      { label: 'Product Code', value: 'EE1 / EMS' },
      { label: 'Delivery Model', value: 'SaaS' },
      { label: 'Demo Access', value: 'Live demo available' },
      {
        label: 'Primary Market',
        value: 'Universities, polytechnics, colleges',
      },
    ],
    technologies: [
      { label: 'Admissions', icon: PanelsTopLeftIcon },
      { label: 'Finance', icon: BarChart3Icon },
      { label: 'Academics', icon: GraduationCapIcon },
      { label: 'Analytics', icon: LineChartIcon },
    ],
    subject:
      'Institutions that need one operational hub for admissions, finance, academics, and student records.',
    subjectInitials: 'EM',
    methods: [
      'Live demo access',
      'Multi-campus ready',
      'Nigerian compliance fit',
    ],
    labels: productLabels,
  },
  {
    id: 'lms-education',
    title: 'Learning Management System',
    image: assetUrl('/assets/netpro/Library Management System.png'),
    tags: [
      { label: 'E-Learning Ready', icon: MonitorSmartphoneIcon },
      { label: 'Education Software', icon: GraduationCapIcon },
    ],
    summary:
      'NetPro LMS is a comprehensive learning platform for blended and fully online higher education, built to support both campus delivery and open and distance learning programmes.',
    details: [
      'Synchronous and asynchronous course delivery with live classes and recorded content',
      'Rich media uploads including video, PDF, audio, and SCORM packages',
      'Assessment engine with automated grading and plagiarism tools',
      'Student progress tracking and learning analytics for lecturers and administrators',
      'Discussion forums, collaboration spaces, and assignment feedback workflows',
      'Certificate generation and digital credential issuance',
      'Mobile-optimised experience for low-bandwidth student access',
      'API integration with EMS for single sign-on and student data sync',
      'ODL programme support with NOUN-aligned workflows',
    ],
    meta: [
      { label: 'Product Code', value: 'EE2 / LMS' },
      { label: 'Delivery Model', value: 'SaaS' },
      { label: 'Demo Access', value: 'Live demo available' },
      { label: 'Primary Market', value: 'Higher education and ODL providers' },
    ],
    technologies: [
      { label: 'Course Delivery', icon: MonitorSmartphoneIcon },
      { label: 'Assessments', icon: ShieldCheckIcon },
      { label: 'Content Hosting', icon: DatabaseIcon },
      { label: 'Student Access', icon: SmartphoneIcon },
    ],
    subject:
      'Institutions delivering blended, online, or distance learning at scale.',
    subjectInitials: 'LM',
    methods: ['Live demo access', 'ODL-ready workflows', 'EMS integration'],
    labels: productLabels,
  },
  {
    id: 'rtms',
    title: 'Results & Transcript Management System',
    image: assetUrl(
      '/assets/netpro/Results & Transcript Management System.png',
    ),
    tags: [
      { label: 'Academic Records', icon: DatabaseIcon },
      { label: 'Tamper-Proof', icon: ShieldCheckIcon },
    ],
    summary:
      'RTMS gives institutions a secure, digital-first approach to result processing, transcript generation, and academic documentation, reducing forgery risk and manual delays.',
    details: [
      'Multi-level result entry for lecturers, departments, and senate approval workflows',
      'Automated CGPA calculation across 4.0 and 5.0 grading schemes',
      'Senate broadsheet generation and final result publication',
      'Official transcript generation with digital signature and QR verification',
      'Statements of results, attestation letters, and provisional certificates',
      'Tamper-proof audit trail across every result update',
      'Integration with EMS student records for seamless data flow',
      'Alumni transcript request portal with secure online payment',
      'Bulk import tools for legacy result data migration',
    ],
    meta: [
      { label: 'Product Code', value: 'EE3 / RTMS' },
      { label: 'Delivery Model', value: 'SaaS' },
      { label: 'Demo Access', value: 'Live demo available' },
      {
        label: 'Primary Market',
        value: 'Universities and awarding institutions',
      },
    ],
    technologies: [
      { label: 'Result Processing', icon: LayoutDashboardIcon },
      { label: 'Transcript Issuance', icon: Code2Icon },
      { label: 'Audit Trail', icon: ShieldCheckIcon },
      { label: 'Payments', icon: BarChart3Icon },
    ],
    subject:
      'Institutions that need faster approvals, safer records, and digital transcript workflows.',
    subjectInitials: 'RT',
    methods: [
      'Live demo access',
      'Forgery risk reduction',
      'Alumni self-service',
    ],
    labels: productLabels,
  },
  {
    id: 'jms',
    title: 'Academic Journal Management System',
    image: assetUrl('/assets/netpro/Academic Journal Management System.png'),
    tags: [
      { label: 'Research Publishing', icon: Globe2Icon },
      { label: 'Editorial Workflow', icon: BriefcaseBusinessIcon },
    ],
    summary:
      'JMS streamlines the full academic publishing workflow from manuscript submission and peer review to DOI-ready publication and indexing exports.',
    details: [
      'Author self-service submission portal with manuscript formatting guidance',
      'Automated double-blind peer review assignment and reviewer management',
      'Editorial decision workflow with accept, revise, and reject tracking',
      'Plagiarism check integration and reference validation',
      'DOI assignment and metadata export for Google Scholar, AJOL, and Scopus indexing',
      'Published article hosting with full-text search and download tracking',
      'Volume and issue management with automated table of contents generation',
      'Reviewer invitation, tracking, and acknowledgment workflows',
      'Open-access publishing with creative commons licensing support',
    ],
    meta: [
      { label: 'Product Code', value: 'EE5 / JMS' },
      { label: 'Delivery Model', value: 'SaaS' },
      { label: 'Demo Access', value: 'Live demo available' },
      {
        label: 'Primary Market',
        value: 'Universities and research institutions',
      },
    ],
    technologies: [
      { label: 'Peer Review', icon: ShieldCheckIcon },
      { label: 'Publishing', icon: Globe2Icon },
      { label: 'Metadata', icon: DatabaseIcon },
      { label: 'Discoverability', icon: LineChartIcon },
    ],
    subject:
      'Institutions improving research output, editorial quality, and indexing readiness.',
    subjectInitials: 'JM',
    methods: ['Live demo access', 'Indexing support', 'Open-access ready'],
    labels: productLabels,
  },
  {
    id: 'siwes',
    title: 'Student Industrial Work Experience System',
    image: assetUrl('/assets/netpro/SIWES Management System.png'),
    tags: [
      { label: 'SIWES', icon: BriefcaseBusinessIcon },
      { label: 'Accreditation Ready', icon: ShieldCheckIcon },
    ],
    summary:
      'SIWES replaces paper logbooks and manual coordination with a digital workflow for placement, supervision, assessment, and ITF reporting.',
    details: [
      'Student placement application, employer search, and placement confirmation workflows',
      'Digital daily and weekly logbook entries with timestamp and location data',
      'Industry supervisor assessment and report submission portal',
      'Coordinator dashboard for placement tracking across departments',
      'Midpoint and final assessment forms with automated scoring',
      'Automated SIWES completion certificates for eligible students',
      'Employer feedback module for programme improvement insights',
      'Integration with EMS for student eligibility and programme data',
      'Bulk reporting tools for ITF returns and accreditation documentation',
    ],
    meta: [
      { label: 'Product Code', value: 'EE6 / SIWES' },
      { label: 'Delivery Model', value: 'SaaS' },
      { label: 'Demo Access', value: 'Live demo available' },
      { label: 'Primary Market', value: 'Polytechnics and universities' },
    ],
    technologies: [
      { label: 'Placements', icon: BriefcaseBusinessIcon },
      { label: 'Digital Logbooks', icon: SmartphoneIcon },
      { label: 'Assessments', icon: LayoutDashboardIcon },
      { label: 'Compliance Reporting', icon: ShieldCheckIcon },
    ],
    subject:
      'Institutions managing large Clinical Placement cohorts and accreditation evidence requirements.',
    subjectInitials: 'CP',
    methods: [
      'Live demo access',
      'ITF reporting support',
      'Supervisor portals',
    ],
    labels: productLabels,
  },
  {
    id: 'cpms',
    title: 'Clinical Placement management system',
    image: assetUrl('/assets/netpro/Clinical placement management system.png'),
    tags: [
      { label: 'Clinical Placement', icon: BriefcaseBusinessIcon },
      { label: 'Accreditation Ready', icon: ShieldCheckIcon },
    ],
    summary:
      'This replaces paper logbooks and manual coordination with a digital workflow for placement, supervision, assessment, and ITF reporting.',
    details: [
      'Student placement application, employer search, and placement confirmation workflows',
      'Digital daily and weekly logbook entries with timestamp and location data',
      'Industry supervisor assessment and report submission portal',
      'Coordinator dashboard for placement tracking across departments',
      'Midpoint and final assessment forms with automated scoring',
      'Automated Clinical Placement completion certificates for eligible students',
      'Employer feedback module for programme improvement insights',
      'Integration with EMS for student eligibility and programme data',
      'Bulk reporting tools for ITF returns and accreditation documentation',
    ],
    meta: [
      { label: 'Product Code', value: 'EE6 / CPMS' },
      { label: 'Delivery Model', value: 'SaaS' },
      { label: 'Demo Access', value: 'Live demo available' },
      { label: 'Primary Market', value: 'Polytechnics and universities' },
    ],
    technologies: [
      { label: 'Placements', icon: BriefcaseBusinessIcon },
      { label: 'Digital Logbooks', icon: SmartphoneIcon },
      { label: 'Assessments', icon: LayoutDashboardIcon },
      { label: 'Compliance Reporting', icon: ShieldCheckIcon },
    ],
    subject:
      'Institutions managing large Clinical Placement cohorts and accreditation evidence requirements.',
    subjectInitials: 'CP',
    methods: [
      'Live demo access',
      'ITF reporting support',
      'Supervisor portals',
    ],
    labels: productLabels,
  },
  {
    id: 'drs',
    title: 'Digital Project Repository System',
    image: assetUrl('/assets/netpro/Digital Project Repository System.png'),
    tags: [
      { label: 'Research Repository', icon: DatabaseIcon },
      { label: 'Knowledge Preservation', icon: ShieldCheckIcon },
    ],
    summary:
      'DRS preserves final-year projects, dissertations, and institutional research in a searchable repository built for accreditation, reuse, and long-term access.',
    details: [
      'Student upload portal for final-year projects and dissertation submission',
      'Supervisor approval and quality review before public archiving',
      'Full-text search across titles, abstracts, keywords, and author names',
      'Departmental and faculty-level browsing with analytics',
      'Institutional duplicate detection for plagiarism prevention',
      'Embargo support for sensitive or commercially restricted research',
      'Downloadable PDF access with watermarking and tracking',
      'Integration with national repositories and open-access directories',
      'Citation metrics and download statistics for institutional reporting',
    ],
    meta: [
      { label: 'Product Code', value: 'EE7 / DRS' },
      { label: 'Delivery Model', value: 'SaaS' },
      { label: 'Demo Access', value: 'Live demo available' },
      { label: 'Primary Market', value: 'Research-led institutions' },
    ],
    technologies: [
      { label: 'Repository Search', icon: Globe2Icon },
      { label: 'Archiving', icon: DatabaseIcon },
      { label: 'Watermarking', icon: ShieldCheckIcon },
      { label: 'Reporting', icon: LineChartIcon },
    ],
    subject:
      'Institutions protecting research output and improving repository visibility.',
    subjectInitials: 'DR',
    methods: [
      'Live demo access',
      'Accreditation support',
      'Open-access integration',
    ],
    labels: productLabels,
  },
  {
    id: 'qms',
    title: 'Quality Management System',
    image: assetUrl('/assets/netpro/Quality Management System.png'),
    tags: [
      { label: 'Quality Assurance', icon: ShieldCheckIcon },
      { label: 'Accreditation Support', icon: GraduationCapIcon },
    ],
    summary:
      'QMS helps institutions manage policy documents, audits, corrective actions, and accreditation preparation with structured quality workflows.',
    details: [
      'Document management with version control and approval workflows',
      'Policy, procedure, and handbook publication with acknowledgment tracking',
      'Internal audit scheduling, checklists, and audit report generation',
      'Corrective Action and Preventive Action register with closure tracking',
      'Non-conformance reporting and root cause analysis workflows',
      'Programme review and academic quality self-assessment tools',
      'NUC accreditation documentation support and gap analysis templates',
      'Staff training records and competency management',
      'Management review dashboards with quality KPIs and trends',
    ],
    meta: [
      { label: 'Product Code', value: 'EE8 / QMS' },
      { label: 'Delivery Model', value: 'SaaS' },
      { label: 'Demo Access', value: 'Live demo available' },
      {
        label: 'Primary Market',
        value: 'Institutions under NUC, NBTE, and NABTEB oversight',
      },
    ],
    technologies: [
      { label: 'Document Control', icon: DatabaseIcon },
      { label: 'Audits', icon: LayoutDashboardIcon },
      { label: 'Compliance', icon: ShieldCheckIcon },
      { label: 'Management Review', icon: LineChartIcon },
    ],
    subject:
      'Institutions standardising quality assurance and preparing for recurring accreditation cycles.',
    subjectInitials: 'QM',
    methods: [
      'Live demo access',
      'Gap analysis ready',
      'Continuous improvement workflows',
    ],
    labels: productLabels,
  },
  {
    id: 'hrms-education',
    title: 'Human Resource Management System',
    image: assetUrl('/assets/netpro/Human Resource Management System.png'),
    tags: [
      { label: 'Education HR', icon: BriefcaseBusinessIcon },
      { label: 'Payroll & Appraisal', icon: BarChart3Icon },
    ],
    summary:
      'This education-sector HRMS manages recruitment, payroll, performance, staff development, and exit workflows across academic and administrative staff categories.',
    details: [
      'Staff records management with employment history and documentation',
      'Recruitment workflow with online job application portal',
      'Onboarding checklists and induction programme management',
      'Payroll processing with PAYE, NHF, and pension deductions',
      'Leave management with entitlement tracking and approvals',
      'Performance appraisal with 360-degree feedback and KPI tracking',
      'Training needs assessment and staff development tracking',
      'Disciplinary case management and staff exit workflow',
      'Integration with IPPIS and state payroll systems where applicable',
    ],
    meta: [
      { label: 'Product Code', value: 'EE9 / HRMS' },
      { label: 'Delivery Model', value: 'SaaS' },
      { label: 'Demo Access', value: 'Live demo available' },
      { label: 'Primary Market', value: 'Universities and polytechnics' },
    ],
    technologies: [
      { label: 'Recruitment', icon: BriefcaseBusinessIcon },
      { label: 'Payroll', icon: BarChart3Icon },
      { label: 'Performance', icon: LineChartIcon },
      { label: 'Staff Records', icon: DatabaseIcon },
    ],
    subject:
      'Institutions managing academic, administrative, and casual staff from one HR platform.',
    subjectInitials: 'HR',
    methods: [
      'Live demo access',
      'Payroll compliance fit',
      'Academic HR workflows',
    ],
    labels: productLabels,
  },
  {
    id: 'library-lms',
    title: 'Library Management System',
    image: assetUrl('/assets/netpro/Library Management System.png'),
    tags: [
      { label: 'Library Operations', icon: DatabaseIcon },
      { label: 'E-Library', icon: Globe2Icon },
    ],
    summary:
      'NetPro Library LMS covers both physical lending workflows and digital library access, helping academic libraries manage collections, users, fines, and institutional resources.',
    details: [
      'MARC-based cataloguing for books, journals, audiovisual, and digital resources',
      'Borrowing, renewals, and returns with overdue notifications',
      'Online public access catalogue for student and staff self-service search',
      'E-library portal with subscriptions, e-books, and institutional digital resources',
      'Open Educational Resources management and discovery',
      'Fine management and payment integration',
      'Interlibrary loan request tracking',
      'Usage analytics on borrowed titles, peak periods, and subject trends',
      'Integration with EMS for student and staff authentication',
    ],
    meta: [
      { label: 'Product Code', value: 'EE10 / LMS' },
      { label: 'Delivery Model', value: 'SaaS' },
      { label: 'Demo Access', value: 'Live demo available' },
      { label: 'Primary Market', value: 'Academic libraries' },
    ],
    technologies: [
      { label: 'Cataloguing', icon: DatabaseIcon },
      { label: 'Digital Access', icon: Globe2Icon },
      { label: 'Authentication', icon: ShieldCheckIcon },
      { label: 'Usage Analytics', icon: LineChartIcon },
    ],
    subject:
      'Libraries balancing physical collections, digital subscriptions, and self-service access.',
    subjectInitials: 'LB',
    methods: ['Live demo access', 'OPAC ready', 'EMS integration'],
    labels: productLabels,
  },
];

const healthcareProducts: SoftwareProject[] = [
  {
    id: 'hms',
    title: 'Hospital Management System',
    image: assetUrl('/assets/netpro/Hospital Management System.png'),
    tags: [
      { label: 'Healthcare Software', icon: ShieldCheckIcon },
      { label: 'NHIA Aware', icon: BarChart3Icon },
    ],
    summary:
      'HMS is an end-to-end hospital platform for patient care, billing, pharmacy, labs, and reporting, designed for clinical workflows and multi-department operations.',
    details: [
      'Patient registration with biometric and ID capture',
      'Outpatient consultation scheduling, triage, and clinical note management',
      'Inpatient admissions, bed management, nursing notes, and discharge summaries',
      'Pharmacy stock control, dispensing, and interaction alerts',
      'Laboratory request, result entry, and report generation workflows',
      'Radiology and imaging request management',
      'Billing and invoicing with NHIA support and claims processing',
      'Medical records archiving with ICD-10 coding support',
      'Reporting dashboards for clinical and operational KPIs',
    ],
    meta: [
      { label: 'Product Code', value: 'HC1 / HMS' },
      { label: 'Delivery Model', value: 'SaaS' },
      { label: 'Demo Access', value: 'Live demo available' },
      { label: 'Primary Market', value: 'Hospitals and specialist clinics' },
    ],
    technologies: [
      { label: 'Clinical Workflows', icon: LayoutDashboardIcon },
      { label: 'Billing', icon: BarChart3Icon },
      { label: 'Pharmacy & Lab', icon: DatabaseIcon },
      { label: 'Reporting', icon: LineChartIcon },
    ],
    subject:
      'Hospitals replacing paper-heavy clinical and billing processes with one connected platform.',
    subjectInitials: 'HM',
    methods: ['Live demo access', 'NHIA support', 'Low-bandwidth friendly'],
    labels: productLabels,
  },
  {
    id: 'shims',
    title: 'Student Health Information Management System',
    image: assetUrl(
      '/assets/netpro/Student Health Information Management System.png',
    ),
    tags: [
      { label: 'Campus Health', icon: GraduationCapIcon },
      { label: 'Electronic Health Records', icon: ShieldCheckIcon },
    ],
    summary:
      'SHIMS brings hospital-grade clinic management to campus health centres, combining health records, appointments, pharmacy operations, and outbreak reporting.',
    details: [
      'Student and staff registration with health history intake',
      'Appointment scheduling and walk-in queue management',
      'Electronic health records with diagnosis and treatment history',
      'Pre-matriculation and periodic screening workflows',
      'Immunisation records and reminder management',
      'Campus pharmacy dispensing and drug stock management',
      'Referral tracking to external or specialist facilities',
      'Mental health encounter recording with privacy-aware access controls',
      'Health statistics reporting for accreditation and MDCN compliance',
      'Integration with EMS for student authentication and demographics',
    ],
    meta: [
      { label: 'Product Code', value: 'HC2 / SHIMS' },
      { label: 'Delivery Model', value: 'SaaS' },
      { label: 'Demo Access', value: 'Live demo available' },
      {
        label: 'Primary Market',
        value: 'Universities, schools, and campus clinics',
      },
    ],
    technologies: [
      { label: 'Appointments', icon: LayoutDashboardIcon },
      { label: 'Health Records', icon: ShieldCheckIcon },
      { label: 'Pharmacy', icon: DatabaseIcon },
      { label: 'EMS Sync', icon: GraduationCapIcon },
    ],
    subject:
      'Campuses managing student and staff care with tighter reporting and privacy controls.',
    subjectInitials: 'SH',
    methods: ['Live demo access', 'Campus clinic fit', 'EMS integration'],
    labels: productLabels,
  },
  {
    id: 'hhs',
    title: 'Home Health Software',
    image: assetUrl('/assets/netpro/Home Health Software.png'),
    tags: [
      { label: 'Home-Based Care', icon: MonitorSmartphoneIcon },
      { label: 'Care Coordination', icon: BriefcaseBusinessIcon },
    ],
    summary:
      'HHS helps home-care providers coordinate patients, caregivers, visits, monitoring, and claims in one structured platform for post-acute and long-term care.',
    details: [
      'Patient intake, onboarding, and care plan creation with assessment tools',
      'Caregiver assignment and scheduling for appropriate provider matching',
      'Electronic visit verification with real-time check-in and check-out logging',
      'Remote patient monitoring with vital signs and alert thresholds',
      'Medication administration records and adherence tracking',
      'Care plan review and progress notes for supervising clinicians',
      'Family communication portal with secure messaging',
      'Billing and claims workflows with NHIA and private insurance integration',
      'Caregiver competency records and continuing development tracking',
      'Outcome reporting and patient satisfaction measurement',
    ],
    meta: [
      { label: 'Product Code', value: 'HC3 / HHS' },
      { label: 'Delivery Model', value: 'SaaS' },
      { label: 'Demo Access', value: 'Live demo available' },
      {
        label: 'Primary Market',
        value: 'Home-care agencies and digital health providers',
      },
    ],
    technologies: [
      { label: 'Care Plans', icon: BriefcaseBusinessIcon },
      { label: 'Remote Monitoring', icon: MonitorSmartphoneIcon },
      { label: 'Medication Tracking', icon: ShieldCheckIcon },
      { label: 'Claims & Outcomes', icon: BarChart3Icon },
    ],
    subject:
      'Providers scaling structured home-based care, follow-up, and caregiver coordination.',
    subjectInitials: 'HH',
    methods: ['Live demo access', 'Caregiver scheduling', 'Outcome tracking'],
    labels: productLabels,
  },
  {
    id: 'tvhs',
    title: 'Telemedicine / Virtual Healthcare Solutions',
    image: assetUrl(
      '/assets/netpro/Telemedicine Virtual Healthcare Solutions.png',
    ),
    tags: [
      { label: 'Home-Based Care', icon: MonitorSmartphoneIcon },
      { label: 'Care Coordination', icon: BriefcaseBusinessIcon },
    ],
    summary:
      'NetPro delivers secure telemedicine and virtual healthcare platforms that enable healthcare providers to consult, diagnose, monitor, and manage patients remotely while maintaining a unified clinical record across digital and physical care channels.',
    details: [
      'Secure virtual consultation platform with audio and video appointments',
      '⁠Online patient registration, appointment scheduling, and digital check-in',
      'Electronic medical records accessible during virtual and in-person consultations',
      'Digital prescription generation and medication management',
      '⁠Laboratory and diagnostic request integration with electronic result delivery',
      'Remote patient monitoring, follow-up management, and automated notifications',
    ],
    meta: [
      { label: 'Product Code', value: 'HC3 / HHS' },
      { label: 'Delivery Model', value: 'SaaS' },
      { label: 'Demo Access', value: 'Live demo available' },
      {
        label: 'Primary Market',
        value: 'Home-care agencies and digital health providers',
      },
    ],
    technologies: [
      { label: 'Care Plans', icon: BriefcaseBusinessIcon },
      { label: 'Remote Monitoring', icon: MonitorSmartphoneIcon },
      { label: 'Medication Tracking', icon: ShieldCheckIcon },
      { label: 'Claims & Outcomes', icon: BarChart3Icon },
    ],
    subject:
      'Providers scaling structured home-based care, follow-up, and caregiver coordination.',
    subjectInitials: 'HH',
    methods: ['Live demo access', 'Caregiver scheduling', 'Outcome tracking'],
    labels: productLabels,
  },
];

// const financialProducts: SoftwareProject[] = [
//   {
//     id: 'mfbs',
//     title: 'Microfinance Bank Management System',
//     image: assetUrl('/assets/netpro/Microfinance Bank Management System.png'),
//     tags: [
//       { label: 'Core Banking', icon: BarChart3Icon },
//       { label: 'CBN Aware', icon: ShieldCheckIcon },
//     ],
//     summary:
//       'MFBS is a core banking platform for CBN-licensed microfinance banks, covering deposit accounts, loans, treasury, reporting, and branch operations in one regulated system.',
//     details: [
//       'Customer onboarding with BVN verification, KYC documentation, and account opening workflows',
//       'Savings and current account management with interest computation and statements',
//       'Fixed deposit and term investment product management',
//       'Loan origination, appraisal, collateral management, and disbursement workflows',
//       'Repayment tracking with EMI computation, penalty calculation, and restructuring tools',
//       'Group lending and village banking support',
//       'Treasury and liquidity management dashboards',
//       'General ledger, trial balance, and financial statement generation',
//       'NIBSS NIP integration for real-time transfers',
//       'CBN reporting for MPR, CRMS, and quarterly returns',
//     ],
//     meta: [
//       { label: 'Product Code', value: 'FN1 / MFBS' },
//       { label: 'Delivery Model', value: 'SaaS' },
//       { label: 'Demo Access', value: 'Live demo available' },
//       {
//         label: 'Primary Market',
//         value: 'Microfinance banks and regulated lenders',
//       },
//     ],
//     technologies: [
//       { label: 'Deposits & Loans', icon: BarChart3Icon },
//       { label: 'Compliance', icon: ShieldCheckIcon },
//       { label: 'Interbank Transfers', icon: Globe2Icon },
//       { label: 'Branch Reporting', icon: LineChartIcon },
//     ],
//     subject:
//       'CBN-licensed institutions that need a regulated operating backbone, not generic accounting software.',
//     subjectInitials: 'MF',
//     methods: [
//       'Live demo access',
//       'CBN reporting support',
//       'Multi-branch architecture',
//     ],
//     labels: productLabels,
//   },
//   {
//     id: 'csms',
//     title: 'Cooperative Society Management System',
//     image: assetUrl('/assets/netpro/Cooperative Society Management System.png'),
//     tags: [
//       { label: 'Cooperatives', icon: BriefcaseBusinessIcon },
//       { label: 'Thrift & Credit', icon: BarChart3Icon },
//     ],
//     summary:
//       'CSMS helps cooperative societies manage member savings, share capital, loans, dividends, and reporting with stronger transparency and member self-service.',
//     details: [
//       'Member registration, share subscription, and membership tier management',
//       'Savings account management for regular savings, target savings, and share capital',
//       'Loan application, approval workflows, guarantor management, and disbursement',
//       'Repayment tracking with penalty and rebate computations',
//       'Dividend computation and payment processing at year-end',
//       'Monthly, quarterly, and AGM financial reporting for officers and auditors',
//       'Deduction-at-source payroll integration for salary-based cooperatives',
//       'SMS and email member statement notifications',
//       'Member self-service portal for balances, loans, and statements',
//       'Audit and compliance reporting for registrar submissions',
//     ],
//     meta: [
//       { label: 'Product Code', value: 'FN2 / CSMS' },
//       { label: 'Delivery Model', value: 'SaaS' },
//       { label: 'Demo Access', value: 'Live demo available' },
//       {
//         label: 'Primary Market',
//         value: 'Registered cooperatives and thrift societies',
//       },
//     ],
//     technologies: [
//       { label: 'Member Accounts', icon: DatabaseIcon },
//       { label: 'Loans', icon: BarChart3Icon },
//       { label: 'Notifications', icon: SmartphoneIcon },
//       { label: 'Audit Reports', icon: ShieldCheckIcon },
//     ],
//     subject:
//       'Cooperatives that need digital transparency across member savings, loans, and annual reporting.',
//     subjectInitials: 'CS',
//     methods: [
//       'Live demo access',
//       'Member self-service',
//       'Payroll deduction support',
//     ],
//     labels: productLabels,
//   },
//   {
//     id: 'lms-fin',
//     title: 'Digital Lending & Loan Management System',
//     image: assetUrl(
//       '/assets/netpro/Digital Lending & Loan Management System.png',
//     ),
//     tags: [
//       { label: 'Digital Lending', icon: SmartphoneIcon },
//       { label: 'Credit Workflows', icon: LineChartIcon },
//     ],
//     summary:
//       'LMS-Fin automates loan application, scoring, disbursement, repayment, collections, and portfolio oversight for digital lenders and credit providers.',
//     details: [
//       'Online and USSD loan application with configurable eligibility criteria',
//       'Automated credit scoring with bureau integration support',
//       'Document collection and e-signature for loan agreements',
//       'Multi-product lending across salary advance, asset-backed, group, and unsecured loans',
//       'Disbursement via bank transfer with reconciliation support',
//       'Repayment schedules and direct debit or standing instruction management',
//       'Collections workflow with reminders, arrears intervention, and legal escalation',
//       'Non-performing loan management and provisioning tools',
//       'Portfolio analytics for PAR, cohort performance, and MFI benchmarks',
//       'Integration with NIBSS, payment gateways, and payroll systems',
//     ],
//     meta: [
//       { label: 'Product Code', value: 'FN3 / LMS-Fin' },
//       { label: 'Delivery Model', value: 'SaaS' },
//       { label: 'Demo Access', value: 'Live demo available' },
//       {
//         label: 'Primary Market',
//         value: 'Digital lenders and credit providers',
//       },
//     ],
//     technologies: [
//       { label: 'Origination', icon: SmartphoneIcon },
//       { label: 'Credit Scoring', icon: LineChartIcon },
//       { label: 'Collections', icon: ShieldCheckIcon },
//       { label: 'Integrations', icon: Globe2Icon },
//     ],
//     subject:
//       'Lenders that need faster loan operations, cleaner repayment tracking, and stronger portfolio control.',
//     subjectInitials: 'DL',
//     methods: [
//       'Live demo access',
//       'Bureau integration ready',
//       'USSD to collections flow',
//     ],
//     labels: productLabels,
//   },
//   {
//     id: 'abp',
//     title: 'Agent Banking Management Platform',
//     image: assetUrl('/assets/netpro/Agent Banking Management Platform.png'),
//     tags: [
//       { label: 'Agent Banking', icon: Globe2Icon },
//       { label: 'Network Visibility', icon: LineChartIcon },
//     ],
//     summary:
//       'ABP helps financial institutions manage agent onboarding, transactions, float, commissions, and compliance across distributed agent networks.',
//     details: [
//       'Agent onboarding with KYB documentation, contracts, and activation workflows',
//       'Terminal and POS device deployment tracking',
//       'Real-time transaction monitoring for deposits, withdrawals, transfers, and bill payments',
//       'Float top-up requests, alerts, and settlement reconciliation',
//       'Commission computation for agents and super-agents',
//       'Geographic and performance analytics with heat maps and activity dashboards',
//       'Customer complaint and dispute management portal',
//       'Regulatory reporting for CBN agent banking returns',
//       'Super-agent hierarchy management for tiered network structures',
//       'Audit logs and anti-fraud alerting for unusual transaction patterns',
//     ],
//     meta: [
//       { label: 'Product Code', value: 'FN4 / ABP' },
//       { label: 'Delivery Model', value: 'SaaS' },
//       { label: 'Demo Access', value: 'Live demo available' },
//       {
//         label: 'Primary Market',
//         value: 'Banks, MFBs, and agent network operators',
//       },
//     ],
//     technologies: [
//       { label: 'Agent Onboarding', icon: BriefcaseBusinessIcon },
//       { label: 'Transaction Monitoring', icon: Globe2Icon },
//       { label: 'Commissions', icon: BarChart3Icon },
//       { label: 'Fraud Alerts', icon: ShieldCheckIcon },
//     ],
//     subject:
//       'Institutions extending services through agent networks and needing stronger transaction control.',
//     subjectInitials: 'AB',
//     methods: ['Live demo access', 'Super-agent support', 'Fraud monitoring'],
//     labels: productLabels,
//   },
//   {
//     id: 'mbapp',
//     title: 'Mobile Banking Application',
//     image: assetUrl('/assets/netpro/Mobile Banking Application.png'),
//     tags: [
//       { label: 'Digital Banking', icon: SmartphoneIcon },
//       { label: 'White Label', icon: BriefcaseBusinessIcon },
//     ],
//     summary:
//       'MbApp gives banks and cooperative institutions a secure white-labelled mobile app for self-service banking, transactions, loan access, and customer support.',
//     details: [
//       'Account dashboard with balances, transaction history, and mini-statements',
//       'Funds transfer for intrabank and interbank transactions with beneficiary management',
//       'Bill payments for utilities, airtime, data, and government levies',
//       'Loan application, repayment, and status viewing',
//       'Fixed deposit creation and renewal',
//       'Card services including requests, blocking, and PIN management',
//       'Cardless withdrawal QR code generation',
//       'Push notifications for transaction alerts and account activity',
//       'Biometric login with device binding security',
//       'Customer onboarding with KYC document upload and in-app support chat',
//     ],
//     meta: [
//       { label: 'Product Code', value: 'FN5 / MbApp' },
//       { label: 'Delivery Model', value: 'White-labelled SaaS' },
//       { label: 'Demo Access', value: 'Live demo available' },
//       {
//         label: 'Primary Market',
//         value: 'MFBs, cooperatives, and community banks',
//       },
//     ],
//     technologies: [
//       { label: 'Mobile Self-Service', icon: SmartphoneIcon },
//       { label: 'Transfers & Bills', icon: Globe2Icon },
//       { label: 'KYC Onboarding', icon: ShieldCheckIcon },
//       { label: 'Customer Support', icon: MonitorSmartphoneIcon },
//     ],
//     subject:
//       'Financial institutions ready to launch branded mobile banking without building from scratch.',
//     subjectInitials: 'MB',
//     methods: ['Live demo access', 'White-label delivery', 'Biometric login'],
//     labels: productLabels,
//   },
//   {
//     id: 'pmts',
//     title: 'Payment & Transaction Management System',
//     image: assetUrl(
//       '/assets/netpro/Payment & Transaction Management System.png',
//     ),
//     tags: [
//       { label: 'Payments Infrastructure', icon: Globe2Icon },
//       { label: 'Reconciliation', icon: BarChart3Icon },
//     ],
//     summary:
//       'PMTS gives transaction-heavy institutions a central platform for payment processing, status tracking, settlement, reconciliation, and dispute resolution.',
//     details: [
//       'Multi-channel payment acceptance across POS, web, mobile, USSD, and agents',
//       'Real-time transaction status tracking and reconciliation engine',
//       'Settlement computation and automated posting to beneficiary accounts',
//       'Dispute and chargeback workflow with timeline tracking',
//       'Gateway integration across Paystack, Flutterwave, Remita, and Interswitch',
//       'NIBSS NIP and instant payment notification handling',
//       'Bulk payment processing for salaries, vendors, and dividends',
//       'Fraud monitoring rules engine with configurable alert thresholds',
//       'Financial reporting for settlement, exceptions, and reconciliation statements',
//       'API-first architecture for ERP and accounting integrations',
//     ],
//     meta: [
//       { label: 'Product Code', value: 'FN6 / PMTS' },
//       { label: 'Delivery Model', value: 'SaaS' },
//       { label: 'Demo Access', value: 'Live demo available' },
//       {
//         label: 'Primary Market',
//         value: 'Payment-heavy institutions and platforms',
//       },
//     ],
//     technologies: [
//       { label: 'Channel Processing', icon: Globe2Icon },
//       { label: 'Settlement', icon: BarChart3Icon },
//       { label: 'Fraud Monitoring', icon: ShieldCheckIcon },
//       { label: 'API Integrations', icon: Code2Icon },
//     ],
//     subject:
//       'Institutions that need one source of truth for settlements, disputes, and payment exceptions.',
//     subjectInitials: 'PM',
//     methods: [
//       'Live demo access',
//       'Gateway integrations',
//       'Reconciliation engine',
//     ],
//     labels: productLabels,
//   },
// ];

const enterpriseProducts: SoftwareProject[] = [
  {
    id: 'hrms-enterprise',
    title: 'Human Resource Management System',
    image: assetUrl('/assets/netpro/Human Resource Management System.png'),
    tags: [
      { label: 'Enterprise HR', icon: BriefcaseBusinessIcon },
      { label: 'Payroll Compliance', icon: BarChart3Icon },
    ],
    summary:
      'This cross-sector HRMS manages recruitment, payroll, performance, leave, grievances, and workforce analytics for government, private, financial, and nonprofit organisations.',
    details: [
      'Recruitment and applicant tracking across postings, screening, interviews, and offers',
      'Employee onboarding and document management',
      'Payroll processing with PAYE, pension, NHF, and cooperative deductions',
      'Leave and attendance management with biometric device integration',
      'Performance management for KPI setting, reviews, and annual appraisal workflows',
      'Training needs identification and learning development tracking',
      'Employee self-service for payslips, leave requests, and profile updates',
      'Disciplinary and grievance case management with records',
      'Succession planning and organisational chart management',
      'HR analytics for headcount, attrition, and payroll cost reporting',
    ],
    meta: [
      { label: 'Product Code', value: 'EN1 / HRMS' },
      { label: 'Delivery Model', value: 'SaaS' },
      { label: 'Demo Access', value: 'Live demo available' },
      {
        label: 'Primary Market',
        value: 'Government, private sector, NGOs, finance',
      },
    ],
    technologies: [
      { label: 'Recruitment', icon: BriefcaseBusinessIcon },
      { label: 'Payroll', icon: BarChart3Icon },
      { label: 'Employee Self-Service', icon: SmartphoneIcon },
      { label: 'Workforce Analytics', icon: LineChartIcon },
    ],
    subject:
      'Organisations that need compliant payroll and full employee lifecycle control in one HR platform.',
    subjectInitials: 'HR',
    methods: [
      'Live demo access',
      'Statutory payroll fit',
      'Cross-sector ready',
    ],
    labels: productLabels,
  },
  {
    id: 'jmis',
    title: 'Judiciary Management Information System',
    image: assetUrl(
      '/assets/netpro/Judiciary Management Information System.png',
    ),
    tags: [
      { label: 'Justice Administration', icon: ShieldCheckIcon },
      { label: 'Case Management', icon: LayoutDashboardIcon },
    ],
    summary:
      'JMIS digitises court registration, hearings, rulings, archives, and reporting to improve transparency, throughput, and accountability across the judiciary.',
    details: [
      'Case registration and file numbering with classification by type and subject matter',
      'Party management for plaintiffs, defendants, legal representatives, and witnesses',
      'Hearing scheduling with automated diary and judge assignment',
      'Cause list generation and courtroom management',
      'Case status tracking with full history audit trail',
      'Judgement and ruling recording with searchable archive',
      'Document management for filings, exhibits, and certified copies',
      'Remand and custody tracking for criminal matters',
      'Statistical reporting on clearance rates, pending cases, and duration analysis',
      'Public case enquiry portal for practitioners and litigants',
    ],
    meta: [
      { label: 'Product Code', value: 'EN2 / JMIS' },
      { label: 'Delivery Model', value: 'SaaS' },
      { label: 'Demo Access', value: 'Live demo available' },
      {
        label: 'Primary Market',
        value: 'Courts, tribunals, and legal institutions',
      },
    ],
    technologies: [
      { label: 'Case Tracking', icon: LayoutDashboardIcon },
      { label: 'Archives', icon: DatabaseIcon },
      { label: 'Public Enquiry', icon: Globe2Icon },
      { label: 'Judiciary Reporting', icon: LineChartIcon },
    ],
    subject:
      'Judicial bodies reducing backlog while strengthening records, visibility, and court administration.',
    subjectInitials: 'JM',
    methods: [
      'Live demo access',
      'Court workflow fit',
      'Public enquiry portal',
    ],
    labels: productLabels,
  },
  {
    id: 'pms',
    title: 'Property Management Software',
    image: assetUrl('/assets/netpro/Property Management Software.png'),
    tags: [
      { label: 'Property Operations', icon: BriefcaseBusinessIcon },
      { label: 'Rent & Maintenance', icon: BarChart3Icon },
    ],
    summary:
      'PMS helps landlords, estate managers, and hospitality operators manage listings, tenants, maintenance, payments, and reporting from one connected property platform.',
    details: [
      'Portfolio management for residential, commercial, and mixed-use properties',
      'Tenant onboarding, lease agreement management, and renewal workflows',
      'Rent schedule management with automated invoicing and reminders',
      'Online rent payment across bank transfer, card, and direct debit',
      'Maintenance request portal with work-order assignment and tracking',
      'Vendor and contractor management for facilities services',
      'Property inspection scheduling and condition report documentation',
      'Service charge and utility billing management',
      'Financial reporting for rent roll, income, and landlord disbursement',
      'Vacancy management and marketing integration for available units',
    ],
    meta: [
      { label: 'Product Code', value: 'EN3 / PMS' },
      { label: 'Delivery Model', value: 'SaaS' },
      { label: 'Demo Access', value: 'Live demo available' },
      {
        label: 'Primary Market',
        value: 'Property managers, estates, hospitality operators',
      },
    ],
    technologies: [
      { label: 'Tenancy Workflows', icon: BriefcaseBusinessIcon },
      { label: 'Rent Collection', icon: BarChart3Icon },
      { label: 'Maintenance Tracking', icon: LayoutDashboardIcon },
      { label: 'Portfolio Reporting', icon: LineChartIcon },
    ],
    subject:
      'Property operators that need better tenant service, collection discipline, and maintenance coordination.',
    subjectInitials: 'PM',
    methods: [
      'Live demo access',
      'Multi-channel payments',
      'Work-order tracking',
    ],
    labels: productLabels,
  },
  {
    id: 'nbaccs',
    title: 'Conveyancing Compliance System',
    image: assetUrl('/assets/netpro/NBA Conveyancing Compliance System.png'),
    tags: [
      { label: 'Legal Compliance', icon: ShieldCheckIcon },
      { label: 'Property Transactions', icon: Globe2Icon },
    ],
    summary:
      'NBACCS automates documentation, levy handling, registry readiness, and deadline management for property transactions handled by Nigerian legal practitioners.',
    details: [
      'Transaction file creation and client onboarding for conveyancing matters',
      'Title search and deeds registry query management',
      'Certificate of Occupancy and Right of Occupancy workflows',
      'Draft deed, assignment, sublease, and mortgage generation from approved templates',
      'NBA conveyancing levy computation and payment reconciliation',
      'Stamp duty computation and FIRS e-stamping integration',
      'Land registry submission checklist and filing tracking',
      'Client communication logs and transaction status updates',
      'Compliance calendar with regulatory deadline alerts',
      'Secure document storage with version control and client access portal',
    ],
    meta: [
      { label: 'Product Code', value: 'EN4 / NBACCS' },
      { label: 'Delivery Model', value: 'SaaS' },
      { label: 'Demo Access', value: 'Live demo available' },
      {
        label: 'Primary Market',
        value: 'Legal practitioners and conveyancing teams',
      },
    ],
    technologies: [
      { label: 'Document Automation', icon: Code2Icon },
      { label: 'Compliance Tracking', icon: ShieldCheckIcon },
      { label: 'Registry Workflow', icon: Globe2Icon },
      { label: 'Client Access', icon: MonitorSmartphoneIcon },
    ],
    subject:
      'Firms and legal teams handling property transactions under NBA and land-registry compliance rules.',
    subjectInitials: 'NB',
    methods: [
      'Live demo access',
      'Template-driven drafting',
      'Deadline alerts',
    ],
    labels: productLabels,
  },
];

export const productCatalogSections: ShowcaseSection[] = [
  {
    id: 'education-products',
    eyebrow: 'Education Software',
    title:
      'Academic operations, learning delivery, and institutional quality on one stack',
    description:
      "NetPro's education software suite covers the full academic lifecycle, from admissions and fee management through learning delivery, research, and quality assurance.",
    projects: educationProducts,
  },
  {
    id: 'healthcare-products',
    eyebrow: 'Healthcare Software',
    title: 'Connected patient, campus, and home-care workflows',
    description:
      "NetPro's healthcare portfolio addresses hospital management, campus health, and home-based care with a focus on connected, patient-centred digital health delivery.",
    projects: healthcareProducts,
  },
  // {
  //   id: 'financial-products',
  //   eyebrow: 'Financial Services Software',
  //   title: 'Regulated finance platforms built for Nigerian operations',
  //   description:
  //     "NetPro's financial technology suite supports microfinance banks, cooperative societies, agent networks, payment operators, and digital lenders with compliance-aware workflows.",
  //   projects: financialProducts,
  // },
  {
    id: 'enterprise-products',
    eyebrow: 'Enterprise & Other',
    title:
      'Specialised platforms for HR, justice administration, property, and legal compliance',
    description:
      'Beyond education, healthcare, and financial services, NetPro deploys specialised management platforms for public institutions, legal practitioners, and cross-sector enterprise teams.',
    projects: enterpriseProducts,
  },
];

export const portfolioIntro = {
  eyebrow: 'Portfolio',
  title: 'Our Work in Action',
  description:
    "A selection of completed and live deployments across education, healthcare, the judiciary, and enterprise, demonstrating NetPro's proven capacity to deliver digital technology for institutions.",
};

export const featuredDeployments: SoftwareProject[] = [
  {
    id: 'uisto-recruitment',
    title: 'AI-Powered Recruitment System',
    image: assetUrl('/assets/netpro/AI-Powered Recruitment System.png'),
    tags: [
      { label: 'Education Technology', icon: GraduationCapIcon },
      { label: 'Artificial Intelligence', icon: SparklesIcon },
      { label: 'HR Systems', icon: BriefcaseBusinessIcon },
    ],
    summary:
      'NetPro designed and deployed an AI-powered recruitment platform for UISTO, replacing a fragmented manual hiring process with intelligent screening and live vacancy pipeline visibility.',
    details: [
      'AI-driven applicant screening with configurable eligibility and scoring rules',
      'Online application portal with document upload, validation, and e-submission',
      'Multi-stage approval workflow for shortlisting, interview scheduling, and panel coordination',
      'Automated offer letter generation and digital onboarding initiation',
      'HR analytics dashboard for pipeline status, time-to-hire, and offer acceptance rates',
    ],
    meta: [
      { label: 'Sector', value: 'Education Technology' },
      { label: 'Delivery Focus', value: 'Recruitment automation' },
      { label: 'Institution Type', value: 'University' },
      { label: 'Status', value: 'Deployed' },
    ],
    technologies: [
      { label: 'AI Screening', icon: SparklesIcon },
      { label: 'Workflow Automation', icon: LayoutDashboardIcon },
      { label: 'Applicant Portal', icon: Globe2Icon },
      { label: 'HR Analytics', icon: LineChartIcon },
    ],
    subject: 'UISTO (University of Information Science & Technology, Owerri)',
    subjectInitials: 'UI',
    methods: [
      'Candidate shortlisting',
      'Interview coordination',
      'Digital onboarding',
    ],
    labels: deploymentLabels,
  },
  {
    id: 'fpno-siwes',
    title: 'AI Powered SIWES Management System',
    image: assetUrl('/assets/netpro/SIWES Management System.png'),
    tags: [
      { label: 'Education Technology', icon: GraduationCapIcon },
      { label: 'Student Industrial Training', icon: BriefcaseBusinessIcon },
    ],
    summary:
      "NetPro replaced FPNO's paper-based SIWES process with a digital workflow covering placement, supervision, assessments, and ITF reporting.",
    details: [
      'Online placement application portal with employer search and confirmation workflows',
      'Digital daily and weekly logbook submission with timestamp and geolocation verification',
      'Dedicated portals for industry and school-based supervisors to submit assessments',
      'Automated SIWES completion certificate generation for eligible students',
      'Coordinator dashboard tracking placement and assessment status across departments',
      'Bulk ITF returns reporting and accreditation documentation generation',
    ],
    meta: [
      { label: 'Sector', value: 'Education Technology' },
      { label: 'Delivery Focus', value: 'SIWES digitisation' },
      { label: 'Institution Type', value: 'Polytechnic' },
      { label: 'Status', value: 'Deployed' },
    ],
    technologies: [
      { label: 'Placement Portal', icon: Globe2Icon },
      { label: 'Digital Logbooks', icon: SmartphoneIcon },
      { label: 'Supervisor Portals', icon: LayoutDashboardIcon },
      { label: 'Compliance Reporting', icon: ShieldCheckIcon },
    ],
    subject: 'Federal Polytechnic Nekede Owerri (FPNO)',
    subjectInitials: 'FP',
    methods: [
      'Real-time visibility',
      'Assessment automation',
      'ITF-ready reporting',
    ],
    labels: deploymentLabels,
  },
  {
    id: 'imo-judiciary',
    title: 'Judiciaries Management Information System',
    image: assetUrl(
      '/assets/netpro/Judiciary Management Information System.png',
    ),
    tags: [
      { label: 'Enterprise Technology', icon: BriefcaseBusinessIcon },
      { label: 'Justice Administration', icon: ShieldCheckIcon },
      { label: 'Public Sector', icon: LayoutDashboardIcon },
    ],
    summary:
      'NetPro deployed a case management and court administration platform for the Imo State Judiciary, improving case tracking, accountability, and access to court information.',
    details: [
      'Digital case registration with automated numbering and cause list generation',
      'Hearing diary and courtroom scheduling across multiple courts and divisions',
      'Searchable judgement and ruling archive with full case history audit trail',
      'Document management for court filings, exhibits, and certified true copies',
      'Statistical reporting on clearance rates, pending matters, and case-age analysis',
      'Public case enquiry portal for legal practitioners and parties',
    ],
    meta: [
      { label: 'Sector', value: 'Justice Administration' },
      { label: 'Delivery Focus', value: 'Case management' },
      { label: 'Institution Type', value: 'Judiciary' },
      { label: 'Status', value: 'Deployed' },
    ],
    technologies: [
      { label: 'Case Tracking', icon: LayoutDashboardIcon },
      { label: 'Court Scheduling', icon: BriefcaseBusinessIcon },
      { label: 'Public Enquiry', icon: Globe2Icon },
      { label: 'Judiciary Reporting', icon: LineChartIcon },
    ],
    subject: 'Imo State Judiciary',
    subjectInitials: 'IJ',
    methods: [
      'Backlog reduction',
      'Archive search',
      'Court administration visibility',
    ],
    labels: deploymentLabels,
  },
  {
    id: 'ancilla-transformation',
    title: 'Technology Transformation Programme',
    image: assetUrl('/assets/netpro/Technology Transformation Programme.png'),
    tags: [
      { label: 'Healthcare Technology', icon: ShieldCheckIcon },
      { label: 'Digital Transformation', icon: SparklesIcon },
    ],
    summary:
      'NetPro led an end-to-end digital transformation programme for Ancilla Catholic Hospital Foundation, moving the institution from manual processes to unified digital operations.',
    details: [
      'ICT infrastructure audit and digital transformation roadmap development',
      'Hospital Management System deployment across OPD, inpatient, pharmacy, billing, and laboratory modules',
      'Legacy data migration and population of electronic patient records',
      'Network infrastructure upgrade with enterprise hardware supply and installation',
      'Staff training and change management for clinical and administrative teams',
      'Post-go-live hypercare support and continuous improvement monitoring',
    ],
    meta: [
      { label: 'Sector', value: 'Healthcare Technology' },
      { label: 'Delivery Focus', value: 'Transformation programme' },
      { label: 'Institution Type', value: 'Hospital foundation' },
      { label: 'Status', value: 'Delivered' },
    ],
    technologies: [
      { label: 'Infrastructure Audit', icon: LayoutDashboardIcon },
      { label: 'HMS Deployment', icon: ShieldCheckIcon },
      { label: 'Data Migration', icon: DatabaseIcon },
      { label: 'Change Management', icon: BriefcaseBusinessIcon },
    ],
    subject: 'Ancilla Catholic Hospital Foundation, Lagos',
    subjectInitials: 'AC',
    methods: [
      'Roadmap delivery',
      'Clinical digitisation',
      'Post-go-live support',
    ],
    labels: deploymentLabels,
  },
  {
    id: 'fpno-elearning',
    title: 'AI-Powered E-Learning Transformation',
    image: assetUrl('/assets/netpro/AI-Powered E-Learning Transformation.png'),
    tags: [
      { label: 'Education Technology', icon: GraduationCapIcon },
      { label: 'E-Learning', icon: MonitorSmartphoneIcon },
      { label: 'Artificial Intelligence', icon: SparklesIcon },
    ],
    summary:
      'NetPro deployed an AI-enhanced LMS at FPNO, modernising digital instruction, personalised learning support, and institutional analytics for blended and online delivery.',
    details: [
      'Full LMS deployment with course authoring, rich media hosting, and progress tracking',
      'AI-powered learning recommendations based on student performance profiles',
      'Support for live classes, recorded lectures, and self-paced modules',
      'Assessment engine with automated grading and plagiarism detection',
      'Comprehensive lecturer and student onboarding with hands-on training',
      'Institutional analytics dashboards for academic management decisions',
    ],
    meta: [
      { label: 'Sector', value: 'Education Technology' },
      { label: 'Delivery Focus', value: 'E-learning transformation' },
      { label: 'Institution Type', value: 'Polytechnic' },
      { label: 'Status', value: 'Deployed' },
    ],
    technologies: [
      { label: 'Course Delivery', icon: MonitorSmartphoneIcon },
      { label: 'AI Personalisation', icon: SparklesIcon },
      { label: 'Assessment Engine', icon: ShieldCheckIcon },
      { label: 'Academic Analytics', icon: LineChartIcon },
    ],
    subject: 'Federal Polytechnic Nekede Owerri (FPNO)',
    subjectInitials: 'FP',
    methods: [
      'Blended learning support',
      'Lecturer onboarding',
      'AI learning pathways',
    ],
    labels: deploymentLabels,
  },
  {
    id: 'holy-family-hms',
    title: 'AI Powered Hospital Management System Deployment',
    image: assetUrl('/assets/netpro/Hospital Management System.png'),
    tags: [
      { label: 'Healthcare Technology', icon: ShieldCheckIcon },
      { label: 'Hospital Operations Management', icon: LayoutDashboardIcon },
    ],
    summary:
      'NetPro deployed the HMS Precisie platform at Holy Family Hospital, replacing paper records and manual billing with one operational system across departments.',
    details: [
      'Patient registration with full demographic and medical history capture',
      'Outpatient and inpatient management including triage, admission, nursing notes, and discharge',
      'Pharmacy stock management, dispensing records, and expiry-date tracking',
      'Laboratory module for test requests, result entry, and report generation',
      'Billing and invoicing with NHIA support and payment reconciliation',
      'Real-time management dashboard for patient census, revenue, and departmental KPIs',
    ],
    meta: [
      { label: 'Sector', value: 'Healthcare Technology' },
      { label: 'Delivery Focus', value: 'Hospital digitisation' },
      { label: 'Institution Type', value: 'Hospital' },
      { label: 'Status', value: 'Deployed' },
    ],
    technologies: [
      { label: 'Patient Flow', icon: LayoutDashboardIcon },
      { label: 'Billing', icon: BarChart3Icon },
      { label: 'Pharmacy & Lab', icon: DatabaseIcon },
      { label: 'KPI Dashboards', icon: LineChartIcon },
    ],
    subject: 'Holy Family Hospital',
    subjectInitials: 'HF',
    methods: [
      'Paper-to-digital shift',
      'Department-wide rollout',
      'Live management visibility',
    ],
    labels: deploymentLabels,
  },
  {
    id: 'cun-jms',
    title: 'AI Powered Academic Journal Management System',
    image: assetUrl('/assets/netpro/Academic Journal Management System.png'),
    tags: [
      { label: 'Education Technology', icon: GraduationCapIcon },
      { label: 'Research Publishing', icon: Globe2Icon },
    ],
    summary:
      'NetPro implemented a digital journal platform at Claretian University of Nigeria to automate editorial workflows and strengthen research publishing visibility.',
    details: [
      'Author self-service submission portal with formatting guidance and file validation',
      'Double-blind peer review workflow with reviewer invitation, assignment, and deadline tracking',
      'Editorial decision management with automated notifications',
      'DOI assignment and structured metadata export for indexing',
      'Published article hosting with full-text search, abstract display, and download statistics',
      'Volume, issue, and table-of-contents management across journal titles',
    ],
    meta: [
      { label: 'Sector', value: 'Research Publishing' },
      { label: 'Delivery Focus', value: 'Journal digitisation' },
      { label: 'Institution Type', value: 'University' },
      { label: 'Status', value: 'Deployed' },
    ],
    technologies: [
      { label: 'Editorial Workflow', icon: BriefcaseBusinessIcon },
      { label: 'Peer Review', icon: ShieldCheckIcon },
      { label: 'Publishing Archive', icon: Globe2Icon },
      { label: 'Metadata Export', icon: DatabaseIcon },
    ],
    subject: 'Claretian University of Nigeria (CUN)',
    subjectInitials: 'CU',
    methods: [
      'Research visibility',
      'Peer review automation',
      'Indexing readiness',
    ],
    labels: deploymentLabels,
  },
  // {
  //   id: 'imopoly-induction',
  //   title: 'Digital Induction Programme',
  //   image: assetUrl('/assets/netpro/Digital Induction Programme.png'),
  //   tags: [
  //     { label: 'Education Technology', icon: GraduationCapIcon },
  //     { label: 'Digital Onboarding', icon: MonitorSmartphoneIcon },
  //   ],
  //   summary:
  //     'NetPro delivered a fully digital induction experience for Imo State Polytechnic, moving orientation and compliance acknowledgement online for students and staff.',
  //   details: [
  //     'Mobile-responsive induction portal accessible on any device, including low-specification phones',
  //     'Modular content delivery for institutional history, regulations, student welfare, and HR policies',
  //     'Digital policy and handbook acknowledgment with compliance timestamps',
  //     'Comprehension assessment before completion of key institutional rules',
  //     'Automated digital certificate issuance on successful completion',
  //     'Administrator dashboard tracking completion rates by faculty, department, and cohort',
  //   ],
  //   meta: [
  //     { label: 'Sector', value: 'Education Technology' },
  //     { label: 'Delivery Focus', value: 'Digital onboarding' },
  //     { label: 'Institution Type', value: 'Polytechnic' },
  //     { label: 'Status', value: 'Delivered' },
  //   ],
  //   technologies: [
  //     { label: 'Mobile Access', icon: SmartphoneIcon },
  //     { label: 'Learning Modules', icon: MonitorSmartphoneIcon },
  //     { label: 'Compliance Tracking', icon: ShieldCheckIcon },
  //     { label: 'Completion Analytics', icon: LineChartIcon },
  //   ],
  //   subject: 'Imo State Polytechnic (IMOPOLY)',
  //   subjectInitials: 'IM',
  //   methods: [
  //     'Orientation at scale',
  //     'Policy sign-off',
  //     'Completion dashboards',
  //   ],
  //   labels: deploymentLabels,
  // },
];

export const projectsCta = {
  title: 'Find the Right Product for Your Institution',
  description:
    'Our team will help you identify the right solution tier, configure your deployment, and onboard your users from day one.',
  prompt: 'Talk through your requirements with a NetPro product specialist.',
  primary: 'Talk to Sales',
  secondary: 'View Services',
};
