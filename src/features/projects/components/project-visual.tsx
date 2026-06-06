import type { LucideIcon } from 'lucide-react'
import {
  ActivityIcon,
  BadgeCentIcon,
  BookOpenCheckIcon,
  BriefcaseBusinessIcon,
  Building2Icon,
  CreditCardIcon,
  FileSearchIcon,
  FolderKanbanIcon,
  GavelIcon,
  GraduationCapIcon,
  HandCoinsIcon,
  HeartPulseIcon,
  HomeIcon,
  LandmarkIcon,
  LibraryBigIcon,
  MonitorPlayIcon,
  NetworkIcon,
  NotebookTabsIcon,
  PillBottleIcon,
  ScaleIcon,
  ScrollTextIcon,
  ShieldCheckIcon,
  SparklesIcon,
  StethoscopeIcon,
  SyringeIcon,
  UserRoundSearchIcon,
  WalletCardsIcon,
} from 'lucide-react'

import type { SoftwareProject } from '@/features/projects/data/projects-page-content'
import { cn } from '@/lib/utils'

type ProductVisualProps = {
  project: SoftwareProject
  variant?: 'card' | 'feature'
  className?: string
}

type VisualTheme = 'education' | 'healthcare' | 'finance' | 'enterprise' | 'deployment'

type VisualSpec = {
  theme: VisualTheme
  icon: LucideIcon
  kicker: string
  highlight: string
  chips: string[]
}

const themeClasses: Record<VisualTheme, string> = {
  education:
    'from-[#071223] via-[#123764] to-[#1676ca] before:bg-[radial-gradient(circle_at_top_left,rgba(107,184,255,.34),transparent_46%)]',
  healthcare:
    'from-[#08131d] via-[#0d3f4b] to-[#199372] before:bg-[radial-gradient(circle_at_top_left,rgba(95,255,209,.28),transparent_46%)]',
  finance:
    'from-[#101114] via-[#183439] to-[#9e7a1e] before:bg-[radial-gradient(circle_at_top_left,rgba(255,219,120,.26),transparent_46%)]',
  enterprise:
    'from-[#10131e] via-[#253452] to-[#6847b8] before:bg-[radial-gradient(circle_at_top_left,rgba(163,130,255,.26),transparent_46%)]',
  deployment:
    'from-[#0d121b] via-[#173654] to-[#1676ca] before:bg-[radial-gradient(circle_at_top_left,rgba(117,200,255,.32),transparent_46%)]',
}

const visualSpecs: Record<string, VisualSpec> = {
  ems: {
    theme: 'education',
    icon: GraduationCapIcon,
    kicker: 'Academic ERP',
    highlight: 'Admissions to alumni in one operational hub',
    chips: ['Admissions', 'Finance', 'Records'],
  },
  'lms-education': {
    theme: 'education',
    icon: MonitorPlayIcon,
    kicker: 'Digital Learning',
    highlight: 'Blended and distance learning with live delivery',
    chips: ['Courses', 'Assessments', 'Progress'],
  },
  rtms: {
    theme: 'education',
    icon: ScrollTextIcon,
    kicker: 'Academic Records',
    highlight: 'Secure result processing and transcript issuance',
    chips: ['Results', 'Transcript', 'QR Verify'],
  },
  jms: {
    theme: 'education',
    icon: NotebookTabsIcon,
    kicker: 'Research Publishing',
    highlight: 'Peer review and journal publishing workflows',
    chips: ['Editorial', 'Indexing', 'DOI Ready'],
  },
  siwes: {
    theme: 'education',
    icon: BriefcaseBusinessIcon,
    kicker: 'Industrial Training',
    highlight: 'Placement, supervision, and ITF reporting made digital',
    chips: ['Placement', 'Logbooks', 'Assessments'],
  },
  drs: {
    theme: 'education',
    icon: FolderKanbanIcon,
    kicker: 'Research Repository',
    highlight: 'Searchable project and dissertation preservation',
    chips: ['Archive', 'Search', 'Watermark'],
  },
  qms: {
    theme: 'education',
    icon: ShieldCheckIcon,
    kicker: 'Quality Assurance',
    highlight: 'Policies, audits, and accreditation evidence in one flow',
    chips: ['Audits', 'CAPA', 'Accreditation'],
  },
  'hrms-education': {
    theme: 'education',
    icon: UserRoundSearchIcon,
    kicker: 'Education HR',
    highlight: 'Payroll and staff lifecycle for academic institutions',
    chips: ['Recruitment', 'Payroll', 'Appraisals'],
  },
  'library-lms': {
    theme: 'education',
    icon: LibraryBigIcon,
    kicker: 'Library Operations',
    highlight: 'Physical collections and digital access on one platform',
    chips: ['Catalogue', 'E-Library', 'Analytics'],
  },
  hms: {
    theme: 'healthcare',
    icon: StethoscopeIcon,
    kicker: 'Hospital Operations',
    highlight: 'Clinical, billing, pharmacy, and lab workflows connected',
    chips: ['Clinical', 'Billing', 'Pharmacy'],
  },
  shims: {
    theme: 'healthcare',
    icon: SyringeIcon,
    kicker: 'Campus Health',
    highlight: 'Student health records, appointments, and screening',
    chips: ['Appointments', 'Records', 'Immunisation'],
  },
  hhs: {
    theme: 'healthcare',
    icon: HeartPulseIcon,
    kicker: 'Home Care',
    highlight: 'Visits, monitoring, and caregiver coordination at scale',
    chips: ['Care Plans', 'Monitoring', 'Scheduling'],
  },
  mfbs: {
    theme: 'finance',
    icon: LandmarkIcon,
    kicker: 'Core Banking',
    highlight: 'Microfinance operations built around regulated workflows',
    chips: ['Accounts', 'Loans', 'CBN Returns'],
  },
  csms: {
    theme: 'finance',
    icon: HandCoinsIcon,
    kicker: 'Cooperative Finance',
    highlight: 'Savings, dividends, and member loans with transparency',
    chips: ['Members', 'Savings', 'Dividends'],
  },
  'lms-fin': {
    theme: 'finance',
    icon: WalletCardsIcon,
    kicker: 'Digital Lending',
    highlight: 'Origination, scoring, collections, and portfolio control',
    chips: ['Scoring', 'Disbursement', 'Collections'],
  },
  abp: {
    theme: 'finance',
    icon: NetworkIcon,
    kicker: 'Agent Banking',
    highlight: 'Agent onboarding, float control, and network visibility',
    chips: ['Agents', 'Transactions', 'Commissions'],
  },
  mbapp: {
    theme: 'finance',
    icon: CreditCardIcon,
    kicker: 'Mobile Banking',
    highlight: 'White-label customer self-service banking experience',
    chips: ['Transfers', 'Bills', 'Biometrics'],
  },
  pmts: {
    theme: 'finance',
    icon: BadgeCentIcon,
    kicker: 'Payments Infrastructure',
    highlight: 'Processing, settlement, disputes, and reconciliation',
    chips: ['Settlement', 'Disputes', 'API Ready'],
  },
  'hrms-enterprise': {
    theme: 'enterprise',
    icon: BriefcaseBusinessIcon,
    kicker: 'Enterprise HR',
    highlight: 'Recruitment to retention with compliant payroll control',
    chips: ['Self-Service', 'Attendance', 'Headcount'],
  },
  jmis: {
    theme: 'enterprise',
    icon: GavelIcon,
    kicker: 'Justice Administration',
    highlight: 'Case flow, scheduling, and searchable court archives',
    chips: ['Case Flow', 'Cause Lists', 'Archive'],
  },
  pms: {
    theme: 'enterprise',
    icon: HomeIcon,
    kicker: 'Property Operations',
    highlight: 'Tenancy, rent, service requests, and landlord reporting',
    chips: ['Tenancy', 'Maintenance', 'Collections'],
  },
  nbaccs: {
    theme: 'enterprise',
    icon: ScaleIcon,
    kicker: 'Legal Compliance',
    highlight: 'Conveyancing documentation and deadline control',
    chips: ['Drafting', 'Registry', 'Levy Tracking'],
  },
  'uisto-recruitment': {
    theme: 'deployment',
    icon: SparklesIcon,
    kicker: 'Deployment',
    highlight: 'AI screening and hiring pipeline visibility for UISTO',
    chips: ['AI Screening', 'Interviews', 'Onboarding'],
  },
  'fpno-siwes': {
    theme: 'deployment',
    icon: BriefcaseBusinessIcon,
    kicker: 'Deployment',
    highlight: 'A digital SIWES workflow delivered for FPNO',
    chips: ['Placement', 'Logbooks', 'ITF Reports'],
  },
  'imo-judiciary': {
    theme: 'deployment',
    icon: Building2Icon,
    kicker: 'Deployment',
    highlight: 'Court operations digitised for the Imo State Judiciary',
    chips: ['Registration', 'Scheduling', 'Public Enquiry'],
  },
  'ancilla-transformation': {
    theme: 'deployment',
    icon: ActivityIcon,
    kicker: 'Deployment',
    highlight: 'A full digital transformation programme for Ancilla',
    chips: ['Roadmap', 'HMS', 'Training'],
  },
  'fpno-elearning': {
    theme: 'deployment',
    icon: BookOpenCheckIcon,
    kicker: 'Deployment',
    highlight: 'AI-enhanced e-learning infrastructure for FPNO',
    chips: ['Courses', 'AI Support', 'Analytics'],
  },
  'holy-family-hms': {
    theme: 'deployment',
    icon: PillBottleIcon,
    kicker: 'Deployment',
    highlight: 'Hospital operations modernised for Holy Family Hospital',
    chips: ['Registration', 'Pharmacy', 'KPI Dashboards'],
  },
  'cun-jms': {
    theme: 'deployment',
    icon: FileSearchIcon,
    kicker: 'Deployment',
    highlight: 'Research publishing workflows launched for CUN',
    chips: ['Peer Review', 'DOI', 'Archive'],
  },
  'imopoly-induction': {
    theme: 'deployment',
    icon: MonitorPlayIcon,
    kicker: 'Deployment',
    highlight: 'Digital induction at scale for Imo State Polytechnic',
    chips: ['Orientation', 'Compliance', 'Certificates'],
  },
}

function getFallbackSpec(project: SoftwareProject): VisualSpec {
  return {
    theme: 'deployment',
    icon: ShieldCheckIcon,
    kicker: project.tags[0]?.label ?? 'NetPro Product',
    highlight: project.summary,
    chips: project.technologies.slice(0, 3).map((technology) => technology.label),
  }
}

export function ProductVisual({
  project,
  variant = 'card',
  className,
}: ProductVisualProps) {
  const spec = visualSpecs[project.id] ?? getFallbackSpec(project)
  const Icon = spec.icon
  const metaA = project.meta[0]
  const metaB = project.meta[1]
  const metaC = project.meta[2]
  const isFeature = variant === 'feature'

  return (
    <div
      className={cn(
        'relative isolate aspect-[16/10] overflow-hidden rounded-[var(--np-radius-lg)] border border-white/10 bg-[#05070c]',
        className,
      )}
      aria-hidden="true"
    >
      <div
        className={cn(
          'absolute inset-0 before:absolute before:inset-0 before:content-[""]',
          'bg-linear-to-br opacity-100',
          themeClasses[spec.theme],
        )}
      />
      <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(255,255,255,.08),transparent_38%,rgba(5,7,12,.18)_58%,rgba(5,7,12,.82)_100%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_right,rgba(255,255,255,.16),transparent_22%)]" />
      <div className="absolute inset-x-0 top-0 h-px bg-white/20" />
      <div className="absolute left-[7%] top-[18%] h-[46%] w-[40%] rounded-[1.35rem] border border-white/12 bg-[#07111d]/56 shadow-[0_32px_80px_rgba(5,7,12,.28)] backdrop-blur-md" />
      <div className="absolute right-[7%] top-[13%] h-[28%] w-[24%] rounded-[1.1rem] border border-white/12 bg-white/8 backdrop-blur-md" />
      <div className="absolute bottom-[13%] right-[10%] h-[24%] w-[32%] rounded-[1.15rem] border border-white/12 bg-[#07111d]/54 backdrop-blur-md" />

      <div className="absolute inset-0 grid grid-cols-[minmax(0,1fr)_auto] gap-4 p-5 sm:p-6">
        <div className="min-w-0">
          <span className="inline-flex min-h-8 items-center rounded-full border border-white/12 bg-white/8 px-3 text-[0.7rem] font-medium uppercase tracking-[0.14em] text-white/72">
            {spec.kicker}
          </span>
          <p
            className={cn(
              'mt-4 max-w-[20rem] text-pretty font-heading font-semibold leading-[1.08] text-white',
              isFeature ? 'text-[clamp(1.65rem,3vw,2.5rem)]' : 'text-xl sm:text-2xl',
            )}
          >
            {project.title}
          </p>
          <p
            className={cn(
              'mt-3 max-w-[26rem] text-sm leading-6 text-white/72',
              isFeature ? 'sm:text-base' : '[display:-webkit-box] [-webkit-box-orient:vertical] [-webkit-line-clamp:3] overflow-hidden',
            )}
          >
            {spec.highlight}
          </p>
        </div>

        <div className="flex flex-col items-end gap-3">
          <span className="inline-flex size-14 items-center justify-center rounded-[1.1rem] border border-white/12 bg-white/10 text-white shadow-[0_20px_44px_rgba(5,7,12,.22)] backdrop-blur-md sm:size-16">
            <Icon className="size-7 sm:size-8" aria-hidden="true" />
          </span>
          <div className="hidden rounded-[1rem] border border-white/12 bg-[#07111d]/54 px-4 py-3 text-right backdrop-blur-md sm:block">
            <p className="text-[0.68rem] uppercase tracking-[0.14em] text-white/48">
              {metaA?.label ?? 'Product'}
            </p>
            <p className="mt-2 text-sm font-medium text-white/86">{metaA?.value ?? spec.kicker}</p>
          </div>
        </div>
      </div>

      <div className="absolute inset-x-5 bottom-5 grid gap-3 sm:inset-x-6 sm:bottom-6 sm:grid-cols-[minmax(0,1.35fr)_minmax(11rem,.8fr)]">
        <div className="rounded-[1.15rem] border border-white/12 bg-[#07111d]/56 p-4 backdrop-blur-md">
          <div className="flex flex-wrap gap-2">
            {spec.chips.map((chip) => (
              <span
                key={chip}
                className="inline-flex min-h-8 items-center rounded-full border border-white/12 bg-white/8 px-3 text-xs font-medium text-white/82"
              >
                {chip}
              </span>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-2 gap-3">
          {[metaB, metaC].map((item, index) => (
            <div
              key={item?.label ?? `meta-${index}`}
              className="rounded-[1rem] border border-white/12 bg-white/8 p-3 backdrop-blur-md"
            >
              <p className="text-[0.68rem] uppercase tracking-[0.14em] text-white/48">
                {item?.label ?? 'NetPro'}
              </p>
              <p className="mt-2 text-sm font-medium leading-5 text-white/82">
                {item?.value ?? 'Live demo available'}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
