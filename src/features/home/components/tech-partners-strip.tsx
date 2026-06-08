import { ExternalLinkIcon } from 'lucide-react';

import { LandingSectionHeading } from '@/features/home/components/landing-section-heading';

function MicrosoftLogo({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 23 23" className={className} aria-hidden="true">
      <rect x="0" y="0" width="11" height="11" fill="#F25022" />
      <rect x="12" y="0" width="11" height="11" fill="#7FBA00" />
      <rect x="0" y="12" width="11" height="11" fill="#00A4EF" />
      <rect x="12" y="12" width="11" height="11" fill="#FFB900" />
    </svg>
  );
}

function AppleLogo({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 814 1000" className={className} fill="currentColor" aria-hidden="true">
      <path d="M788.1 340.9c-5.8 4.5-108.2 62.2-108.2 190.5 0 148.4 130.3 200.9 134.2 202.2-.6 3.2-20.7 71.9-68.7 141.9-42.8 61.6-87.5 123.1-155.5 123.1s-85.5-39.5-164-39.5c-76 0-103.7 40.8-165.9 40.8s-105-42.4-145.5-112.7c-47.8-82.3-90-217.7-90-340.7 0-175.7 114.5-268.9 227.2-268.9 60.5 0 110.5 39.9 148.3 39.9 35.9 0 92.5-42.8 163.8-42.8zm-68.6-180.3c35.9-44.1 62.9-105.1 62.9-165.9 0-9-1.3-17.3-2.6-25.6-59.6 2.6-130.3 40.8-174.4 98.5-33.3 41.5-64.6 102.5-64.6 164.6 0 10.3 1.9 19.9 2.6 23.1 4.5.6 11.5 1.3 18.5 1.3 54.5 0 116.5-35.9 157.6-96z" />
    </svg>
  );
}

function GoogleLogo({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 272 272" className={className} aria-hidden="true">
      <path
        fill="#4285F4"
        d="M247.96 137.47c0-7.38-.66-14.47-1.89-21.28H138.34v40.28h61.45c-2.65 14.27-10.7 26.38-22.77 34.47v28.63h36.87c21.57-19.86 34.07-49.11 34.07-82.1z"
      />
      <path
        fill="#34A853"
        d="M138.34 276c30.9 0 56.78-10.24 75.71-27.72l-36.87-28.63c-10.22 6.85-23.3 10.9-38.84 10.9-29.87 0-55.17-20.17-64.2-47.29H36.06v29.55C54.88 246.9 94.11 276 138.34 276z"
      />
      <path
        fill="#FBBC04"
        d="M74.14 183.26c-2.29-6.85-3.6-14.16-3.6-21.74s1.31-14.89 3.6-21.74V110.23H36.06C28.53 125.19 24 142.11 24 161.52s4.53 36.33 12.06 51.29l38.08-29.55z"
      />
      <path
        fill="#EA4335"
        d="M138.34 70.49c16.83 0 31.9 5.79 43.79 17.14l32.83-32.83C193.06 36.28 167.18 25 138.34 25c-44.23 0-83.46 29.1-102.28 71.74l38.08 29.55c9.03-27.12 34.33-47.3 64.2-47.3z"
      />
    </svg>
  );
}

function ChatGptLogo({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 41 41" className={className} fill="currentColor" aria-hidden="true">
      <path d="M37.532 16.87a9.963 9.963 0 00-.856-8.184 10.078 10.078 0 00-10.855-4.835 9.964 9.964 0 00-7.504-3.331 10.079 10.079 0 00-9.614 6.977 9.967 9.967 0 00-6.664 4.834 10.08 10.08 0 001.24 11.817 9.965 9.965 0 00.856 8.185 10.079 10.079 0 0010.855 4.835 9.965 9.965 0 007.504 3.33 10.078 10.078 0 009.617-6.981 9.967 9.967 0 006.663-4.834 10.079 10.079 0 00-1.243-11.813zM22.498 37.886a7.474 7.474 0 01-4.799-1.735c.061-.033.168-.091.237-.134l7.964-4.6a1.294 1.294 0 00.655-1.134V19.054l3.366 1.944a.12.12 0 01.066.092v9.299a7.505 7.505 0 01-7.49 7.496zM6.392 31.006a7.471 7.471 0 01-.894-5.023c.06.036.162.099.237.141l7.964 4.6a1.297 1.297 0 001.308 0l9.724-5.614v3.888a.12.12 0 01-.048.103l-8.051 4.649a7.504 7.504 0 01-10.24-2.744zM4.297 13.62A7.469 7.469 0 018.2 10.333c0 .068-.004.19-.004.274v9.201a1.294 1.294 0 00.654 1.132l9.723 5.614-3.366 1.944a.12.12 0 01-.114.012L7.044 23.86a7.504 7.504 0 01-2.747-10.24zm27.658 6.437l-9.724-5.615 3.367-1.943a.121.121 0 01.114-.012l8.048 4.648a7.498 7.498 0 01-1.158 13.528v-9.476a1.293 1.293 0 00-.647-1.13zm3.35-5.043c-.059-.037-.162-.099-.236-.141l-7.965-4.6a1.298 1.298 0 00-1.308 0l-9.723 5.614v-3.888a.12.12 0 01.048-.103l8.05-4.645a7.497 7.497 0 0111.135 7.763zm-21.063 6.929l-3.367-1.944a.12.12 0 01-.065-.092v-9.299a7.497 7.497 0 0112.293-5.756 6.94 6.94 0 00-.236.134l-7.965 4.6a1.294 1.294 0 00-.654 1.132l-.006 11.225zm1.829-3.943l4.33-2.501 4.332 2.5v4.999l-4.331 2.5-4.331-2.5V18z" />
    </svg>
  );
}

function CiscoLogo({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 80 44" className={className} fill="currentColor" aria-hidden="true">
      <rect x="0" y="28" width="8" height="16" rx="2" />
      <rect x="12" y="20" width="8" height="24" rx="2" />
      <rect x="24" y="12" width="8" height="32" rx="2" />
      <rect x="36" y="4" width="8" height="40" rx="2" />
      <rect x="48" y="12" width="8" height="32" rx="2" />
      <rect x="60" y="20" width="8" height="24" rx="2" />
      <rect x="72" y="28" width="8" height="16" rx="2" />
    </svg>
  );
}

const techPartners = [
  {
    name: 'Microsoft',
    description:
      'Cloud infrastructure, Azure services, and enterprise productivity powering our digital solutions.',
    href: 'https://www.microsoft.com',
    Logo: MicrosoftLogo,
    logoBg: 'bg-white/5',
  },
  {
    name: 'Apple',
    description:
      'iOS and macOS platforms for our mobile applications and enterprise device management.',
    href: 'https://www.apple.com',
    Logo: AppleLogo,
    logoBg: 'bg-white/5',
  },
  {
    name: 'Google',
    description:
      'Google Workspace, cloud computing, and AI tools integrated across our software suite.',
    href: 'https://www.google.com',
    Logo: GoogleLogo,
    logoBg: 'bg-white/5',
  },
  {
    name: 'ChatGPT',
    description:
      'OpenAI AI capabilities embedded in our products for intelligent automation and insights.',
    href: 'https://openai.com',
    Logo: ChatGptLogo,
    logoBg: 'bg-white/5',
  },
  {
    name: 'Cisco',
    description:
      'Enterprise networking, cybersecurity infrastructure, and connectivity solutions.',
    href: 'https://www.cisco.com',
    Logo: CiscoLogo,
    logoBg: 'bg-white/5',
  },
];

export function TechPartnersSection() {
  return (
    <section className="np-section">
      <div className="np-container flex flex-col gap-16">
        <LandingSectionHeading
          eyebrow="Technology"
          title="Partners"
          description="We collaborate with the world's leading technology companies to build secure, scalable, and cutting-edge solutions for our clients."
        />
        <div className="np-reveal-stagger grid gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
          {techPartners.map((partner) => {
            const { Logo } = partner;
            return (
              <a
                key={partner.name}
                href={partner.href}
                target="_blank"
                rel="noreferrer"
                data-reveal="media"
                className="group np-card-texture flex flex-col gap-6 overflow-hidden rounded-lg border border-white/10 p-6 transition-[border-color,transform] duration-300 ease-out hover:-translate-y-1 hover:border-white/20"
              >
                <div
                  className={`flex size-14 items-center justify-center rounded-xl border border-white/10 ${partner.logoBg}`}
                >
                  <Logo className="size-7" />
                </div>
                <div className="flex flex-1 flex-col gap-2">
                  <h3 className="text-base font-semibold text-foreground">
                    {partner.name}
                  </h3>
                  <p className="text-sm leading-6 text-muted-foreground">
                    {partner.description}
                  </p>
                </div>
                <span className="inline-flex items-center gap-1.5 text-sm font-medium text-primary transition-gap duration-(--np-duration-fast) group-hover:gap-2">
                  Visit website
                  <ExternalLinkIcon className="size-3.5" aria-hidden="true" />
                </span>
              </a>
            );
          })}
        </div>
      </div>
    </section>
  );
}
