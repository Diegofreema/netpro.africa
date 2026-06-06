import type { LucideIcon } from 'lucide-react'
import {
  ArrowRightIcon,
  Building2Icon,
  CameraIcon,
  ClockIcon,
  LinkIcon,
  MailIcon,
  MapPinnedIcon,
  PhoneCallIcon,
  SendIcon,
  ShieldCheckIcon,
} from 'lucide-react'

export type ContactAction = {
  label: string
  value: string
  href: string
  icon: LucideIcon
}

export type OfficeLocation = {
  city: string
  address: string
  href: string
}

export type ContactNote = {
  title: string
  body: string
  icon: LucideIcon
}

export const contactHero = {
  titleLead: 'Get in',
  title: 'Touch with Us Today!',
  body:
    "At NetPro Africa, we value your inquiries, feedback, and collaborations. Whether you are interested in our digital services, have questions about our projects, or want to explore potential partnerships, reach out to our team. We'll respond with the next useful step.",
  pill: 'Feel free to contact us through any of the following channels',
}

export const emailContacts: ContactAction[] = [
  {
    label: 'Sales Enquiries',
    value: 'sales@netpro.africa',
    href: 'mailto:sales@netpro.africa',
    icon: MailIcon,
  },
  {
    label: 'Support Enquiries',
    value: 'support@netpro.africa',
    href: 'mailto:support@netpro.africa',
    icon: MailIcon,
  },
]

export const phoneContacts: ContactAction[] = [
  {
    label: 'Call Us',
    value: '+234 90-4679-5968',
    href: 'tel:+2349046795968',
    icon: PhoneCallIcon,
  },
]

export const officeIntro = {
  title: 'Office Locations',
  body: 'Visit our offices to have a face-to-face discussion with our team. We have locations in Nigeria.',
}

export const officeLocations: OfficeLocation[] = [
  {
    city: 'Owerri, Nigeria',
    address: 'Owerri, Imo State',
    href: 'https://maps.google.com/?q=Owerri+Imo+State+Nigeria',
  },
  {
    city: 'Abuja, Nigeria',
    address: 'Abuja, FCT',
    href: 'https://maps.google.com/?q=Abuja+FCT+Nigeria',
  },
  {
    city: 'Lagos, Nigeria',
    address: 'Lagos - House U1, Chevron Drive, Lekki',
    href: 'https://maps.google.com/?q=House+U1+Chevron+Drive+Lekki+Lagos+Nigeria',
  },
]

export const inquiryForm = {
  title: 'Online Inquiry Form',
  body: "Please fill in the following details, and we'll get back to you within 24 hours.",
}

export const serviceOptions = [
  'Web Development',
  'Mobile App Development',
  'Education Technology',
  'Healthcare Technology',
  'Financial Technology',
  'Enterprise & Bespoke',
]

export const subjectOptions = [
  'Project Inquiry',
  'Business Collaboration',
  'Free Consultation',
  'Support Request',
  'General Question',
]

export const contactNotes: ContactNote[] = [
  {
    title: 'Our Response',
    body:
      'Our team is committed to addressing your inquiries promptly. Whether you have a project in mind, need advice on digital strategy, or want to explore partnership opportunities, we are here to assist you at every step.',
    icon: ClockIcon,
  },
  {
    title: 'Privacy Assurance',
    body:
      'We prioritize your privacy and protect your personal information in line with data protection expectations. Your details will only be used to address your inquiry and will not be shared without consent.',
    icon: ShieldCheckIcon,
  },
]

export const socialSection = {
  title: 'Join Us on Social Media',
  body:
    'Stay updated with our latest projects, industry insights, and company news by following us on social media.',
  thanks: 'Thank You!',
  thanksBody:
    'For considering NetPro Africa for your digital needs. We look forward to connecting with you and supporting your digital goals.',
}

export const socialLinks = [
  { label: 'Instagram', href: 'https://instagram.com/netpro.ltd', icon: CameraIcon },
  { label: 'Facebook', href: 'https://facebook.com/NetproAfrica', icon: LinkIcon },
  { label: 'LinkedIn', href: 'https://linkedin.com/company/netpro-Africa-limited', icon: LinkIcon },
  { label: 'YouTube', href: 'https://youtube.com/@netproAfrica5023', icon: SendIcon },
]

export const contactCta = {
  title: 'Ready to Transform Your Digital Presence?',
  body:
    "Take the first step toward digital success with NetPro Africa by your side. Whether you need a website, mobile app, or data-driven campaign, we'll help you map the next move.",
  prompt: 'Unlock your digital potential today',
  primary: 'Request Consultation',
  secondary: 'See our products',
}

export const locationIcon = Building2Icon
export const mapIcon = MapPinnedIcon
export const actionIcon = ArrowRightIcon
export const submitIcon = SendIcon
