import type { LucideIcon } from 'lucide-react';
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
  ShieldAlert,
  ShieldCheckIcon,
} from 'lucide-react';

export type ContactAction = {
  label: string;
  value: string;
  href: string;
  icon: LucideIcon;
};

export type OfficeLocation = {
  city: string;
  address: string;
  href: string;
};

export type ContactNote = {
  title: string;
  body: string;
  icon: LucideIcon;
};

export const contactHero = {
  titleLead: 'Get in',
  title: 'Touch with Us Today!',
  body: "At NetPro Africa, we value your inquiries, feedback, and collaborations. Whether you are interested in our digital services, have questions about our projects, or want to explore potential partnerships, reach out to our team. We'll respond with the next useful step.",
  pill: 'Feel free to contact us through any of the following channels',
};

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
];

export const phoneContacts: ContactAction[] = [
  {
    label: 'Call Us',
    value: '+234 90-4679-5968',
    href: 'tel:+2349046795968',
    icon: PhoneCallIcon,
  },
  {
    label: 'Call Us',
    value: '+234 90-1177-0294',
    href: 'tel:+2349011770294',
    icon: PhoneCallIcon,
  },
];

export const officeIntro = {
  title: 'Office Locations',
  body: 'Visit our offices to have a face-to-face discussion with our team. We have locations in Nigeria.',
};

export const officeLocations: OfficeLocation[] = [
  {
    city: 'Abuja, Nigeria',
    address:
      'NetPro International Limited, AUJ COMPLEX Block A, Central Business District, Abuja FCT',
    href: 'https://maps.google.com/?q=NetPro+International+Limited+AUJ+COMPLEX+Block+A+Central+Business+District+Abuja+FCT',
  },
  {
    city: 'Lagos, Nigeria',
    address:
      'NetPro International Limited, House U1 Northpoint Estate, by Chevron Drive, Lekki, Lagos State',
    href: 'https://maps.google.com/?q=NetPro+International+Limited+House+U1+Northpoint+Estate+Chevron+Drive+Lekki+Lagos+State',
  },
  {
    city: 'Owerri, Nigeria',
    address:
      'NetPro International Limited, 10 Wilfred Okereke Street, Obinze, Owerri West, Imo State',
    href: 'https://maps.google.com/?q=NetPro+International+Limited+10+Wilfred+Okereke+Street+Obinze+Owerri+West+Imo+State',
  },
];

export const inquiryForm = {
  title: 'Online Inquiry Form',
  body: "Please fill in the following details, and we'll get back to you within 24 hours.",
};

export const serviceOptions = [
  'Web Development',
  'Mobile App Development',
  'Education Technology',
  'Healthcare Technology',
  'Financial Technology',
  'Enterprise & Bespoke',
];

export const subjectOptions = [
  'Project Inquiry',
  'Business Collaboration',
  'Free Consultation',
  'Support Request',
  'General Question',
];

export const contactNotes: ContactNote[] = [
  {
    title: 'Our Response',
    body: 'Our team is committed to addressing your inquiries promptly. Whether you have a project in mind, need advice on digital strategy, or want to explore partnership opportunities, we are here to assist you at every step.',
    icon: ClockIcon,
  },
  {
    title: 'Privacy Assurance',
    body: 'We prioritize your privacy and protect your personal information in line with data protection expectations. Your details will only be used to address your inquiry and will not be shared without consent.',
    icon: ShieldCheckIcon,
  },
  {
    title: 'Cybersecurity',
    body: 'We design and implement robust cybersecurity frameworks that protect enterprise systems, data, and infrastructure from evolving digital threats. Our approach focuses on proactive risk prevention, secure system architecture, access control management, threat monitoring, and incident response readiness. Our goal is to ensure that organizational assets remain secure, resilient, and compliant with modern security standards.',
    icon: ShieldAlert,
  },
  {
    title: 'Artificial Intelligence (AI)',
    body: `We develop and integrate AI-powered solutions that enhance decision-making, automate processes, and improve operational efficiency across enterprise systems. Our AI capabilities include intelligent data processing, predictive analytics, workflow automation, and smart system optimization tailored to business needs.
We focus on building practical AI systems that solve real operational challenges rather than experimental concepts.`,
    icon: ShieldAlert,
  },
];

export const socialSection = {
  title: 'Join Us on Social Media',
  body: 'Stay updated with our latest projects, industry insights, and company news by following us on social media.',
  thanks: 'Thank You!',
  thanksBody:
    'For considering NetPro Africa for your digital needs. We look forward to connecting with you and supporting your digital goals.',
};

export const socialLinks = [
  {
    label: 'Instagram',
    href: 'https://instagram.com/netpro.ltd',
    icon: CameraIcon,
  },
  {
    label: 'Facebook',
    href: 'https://facebook.com/NetproAfrica',
    icon: LinkIcon,
  },
  {
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/company/netpro-international-limited',
    icon: LinkIcon,
  },
  {
    label: 'YouTube',
    href: 'https://www.youtube.com/@netprointernational5023',
    icon: SendIcon,
  },
];

export const contactCta = {
  title: 'Ready to Transform Your Digital Presence?',
  body: "Take the first step toward digital success with NetPro Africa by your side. Whether you need a website, mobile app, or data-driven campaign, we'll help you map the next move.",
  prompt: 'Unlock your digital potential today',
  primary: 'Request Consultation',
  secondary: 'See our products',
};

export const locationIcon = Building2Icon;
export const mapIcon = MapPinnedIcon;
export const actionIcon = ArrowRightIcon;
export const submitIcon = SendIcon;
