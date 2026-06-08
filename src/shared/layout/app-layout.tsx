import { Link, useRouterState } from '@tanstack/react-router';
import {
  CameraIcon,
  LinkIcon,
  MailIcon,
  MapPinIcon,
  MenuIcon,
  PhoneCallIcon,
  SendIcon,
} from 'lucide-react';
import { useLayoutEffect, type PropsWithChildren } from 'react';

import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet';
import { BrandLogo } from '@/shared/components/brand-logo';
import { SiteCta } from '@/shared/components/site-cta';
import { navigationItems } from '@/shared/config/navigation';
import { useUiStore } from '@/shared/stores/ui-store';

const navLinkClass =
  'rounded-full px-5 py-3 text-base font-medium text-muted-foreground transition-[background-color,color] duration-(--np-duration-fast) hover:bg-white/[0.04] hover:text-foreground';
const activeNavLinkClass = 'bg-white/[0.04] text-foreground';

const companyLinks = [
  { label: 'About Us', to: '/about-us' },
  { label: 'Services', to: '/services' },
  { label: 'Products', to: '/projects' },
  { label: 'Contact Us', to: '/contact-us' },
  { label: 'Demo Portal', to: '/contact-us' },
] as const;

const productLinks = [
  'EMS - Education ERP',
  'LMS - Learning Platform',
  'HMS - Hospital System',
  'SHIMS - Student Health',
  'RTMS - Results System',
  'MFBS - Microfinance Banking',
  'CSMS - Cooperative Management',
  'LMS-Fin - Digital Lending',
] as const;

const officeLocations = [
  'NetPro International Limited, 10 Wilfred Okereke Street, Obinze, Owerri West, Imo State',
  'NetPro International Limited, AUJ COMPLEX Block A, Central Business District, Abuja FCT',
  'NetPro International Limited, House U1 Northpoint Estate, by Chevron Drive, Lekki, Lagos State',
] as const;

const contactLinks = [
  {
    label: '+234 90-4679-5968',
    href: 'tel:+2349046795968',
    icon: PhoneCallIcon,
  },
  {
    label: '+234 90-1177-0294',
    href: 'tel:+2349011770294',
    icon: PhoneCallIcon,
  },
  {
    label: 'sales@netpro.africa',
    href: 'mailto:sales@netpro.africa',
    icon: MailIcon,
  },
  {
    label: 'support@netpro.africa',
    href: 'mailto:support@netpro.africa',
    icon: MailIcon,
  },
] as const;

const footerColumns = [
  {
    title: 'Company',
    links: companyLinks,
  },
  {
    title: 'Products',
    links: productLinks,
  },
  {
    title: 'Offices',
    links: officeLocations,
  },
] as const;

const socialLinks = [
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
] as const;

export function AppLayout({ children }: PropsWithChildren) {
  const isMobileNavOpen = useUiStore((state) => state.isMobileNavOpen);
  const setMobileNavOpen = useUiStore((state) => state.setMobileNavOpen);
  const pathname = useRouterState({
    select: (state) => state.location.pathname,
  });
  const search = useRouterState({
    select: (state) => state.location.searchStr,
  });
  const hash = useRouterState({
    select: (state) => state.location.hash,
  });

  useLayoutEffect(() => {
    if (hash) {
      return;
    }

    const resetScroll = () => {
      window.scrollTo({ top: 0, left: 0, behavior: 'auto' });
    };
    const animationFrame = window.requestAnimationFrame(resetScroll);
    const timeout = window.setTimeout(resetScroll, 0);

    resetScroll();

    return () => {
      window.cancelAnimationFrame(animationFrame);
      window.clearTimeout(timeout);
    };
  }, [hash, pathname, search]);

  return (
    <div className="flex min-h-svh flex-col bg-background text-foreground">
      <div className="hidden bg-primary text-primary-foreground md:block">
        <div className="np-container flex min-h-12 items-center justify-between gap-6 text-sm font-medium">
          <div className="flex flex-wrap items-center gap-4">
            <a
              className="inline-flex items-center gap-2"
              href="tel:+2349046795968"
            >
              <PhoneCallIcon className="size-4" aria-hidden="true" />
              +234 90-4679-5968
            </a>
            <span className="h-5 w-px bg-white/40" aria-hidden="true" />
            <a
              className="inline-flex items-center gap-2"
              href="tel:+2349011770294"
            >
              +234 90-1177-0294
            </a>
            <span className="h-5 w-px bg-white/40" aria-hidden="true" />
            <a
              className="inline-flex items-center gap-2"
              href="mailto:sales@netpro.africa"
            >
              <MailIcon className="size-4" aria-hidden="true" />
              sales@netpro.africa
            </a>
          </div>
          <span className="inline-flex items-center gap-2">
            <MapPinIcon className="size-4" aria-hidden="true" />
            Nigeria · Owerri · Abuja · Lagos
          </span>
        </div>
      </div>
      <header className="sticky top-0 z-40 border-b border-white/8 bg-background/94 supports-backdrop-filter:bg-background/90">
        <div className="np-container flex min-h-24 items-center justify-between gap-5">
          <BrandLogo />

          <nav
            className="hidden items-center gap-1 lg:flex"
            aria-label="Primary"
          >
            {navigationItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={navLinkClass}
                activeOptions={{ exact: item.path === '/' }}
                activeProps={{ className: activeNavLinkClass }}
              >
                {item.title}
              </Link>
            ))}
          </nav>

          <div className="hidden items-center gap-2 lg:flex">
            <Button
              asChild
              className="rounded-full border-white/10 bg-white/4 px-5 text-foreground hover:bg-white/8"
              variant="outline"
            >
              <Link to="/contact-us">Contact us</Link>
            </Button>
          </div>

          <Sheet open={isMobileNavOpen} onOpenChange={setMobileNavOpen}>
            <SheetTrigger asChild>
              <Button
                className="size-11 rounded-full lg:hidden"
                size="icon"
                variant="outline"
                aria-label="Open navigation"
              >
                <MenuIcon aria-hidden="true" />
              </Button>
            </SheetTrigger>
            <SheetContent
              side="right"
              className="border-white/10 bg-background text-foreground"
            >
              <SheetHeader>
                <SheetTitle>Navigation</SheetTitle>
                <SheetDescription className="sr-only">
                  Main website navigation links
                </SheetDescription>
              </SheetHeader>
              <nav
                className="flex flex-col gap-1 px-4"
                aria-label="Mobile primary"
              >
                {navigationItems.map((item) => (
                  <SheetClose asChild key={item.path}>
                    <Link
                      to={item.path}
                      className="rounded-lg px-3 py-2 text-sm font-medium text-muted-foreground transition hover:bg-white/6 hover:text-foreground"
                      activeOptions={{ exact: item.path === '/' }}
                      activeProps={{ className: activeNavLinkClass }}
                    >
                      {item.title}
                    </Link>
                  </SheetClose>
                ))}
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </header>

      <main className="flex w-full flex-1 flex-col">{children}</main>

      {/* <ThemeToggle /> */}

      <SiteCta />

      <footer className="border-t border-white/8 bg-background">
        <div className="np-container flex flex-col gap-12 py-16">
          <div className="grid gap-10 lg:grid-cols-[minmax(0,1.3fr)_minmax(0,2fr)]">
            <div className="flex max-w-xl flex-col gap-5">
              <BrandLogo className="w-fit" />
              <div className="space-y-3">
                <h2 className="text-xl font-semibold text-foreground">
                  NetPro International Limited
                </h2>
                <p className="text-base leading-8 text-(--np-subtle)">
                  Leading Innovation &amp; Technology Transformation since 2000.
                  Bespoke software and digital solutions built for Africa's
                  institutions, enterprises, financial institutions, and
                  governments.
                </p>
              </div>
              <div className="flex flex-col gap-3">
                {contactLinks.map((item) => {
                  const Icon = item.icon;

                  return (
                    <a
                      key={item.label}
                      href={item.href}
                      className="np-focus inline-flex min-h-11 w-fit items-center gap-3 rounded-full text-base text-foreground transition-colors duration-(--np-duration-fast) hover:text-primary"
                    >
                      <Icon
                        className="size-4 text-primary"
                        aria-hidden="true"
                      />
                      {item.label}
                    </a>
                  );
                })}
              </div>
            </div>

            <div className="grid gap-9 sm:grid-cols-3">
              {footerColumns.map((column) => (
                <div key={column.title} className="flex flex-col gap-5">
                  <h2 className="text-base font-semibold text-foreground">
                    {column.title}
                  </h2>
                  <ul className="flex flex-col gap-3 text-base text-(--np-subtle)">
                    {column.title === 'Company'
                      ? column.links.map((item) => (
                          <li key={item.label}>
                            <Link
                              className="np-focus inline-flex min-h-8 items-center rounded-sm transition-colors duration-(--np-duration-fast) hover:text-foreground"
                              to={item.to}
                            >
                              {item.label}
                            </Link>
                          </li>
                        ))
                      : column.links.map((item) => (
                          <li key={item} className="leading-7">
                            {item}
                          </li>
                        ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
          <Separator />
          <div className="flex flex-col justify-between gap-5 md:flex-row md:items-center">
            <span className="text-base text-foreground">
              Follow us on social media
            </span>
            <div className="flex flex-wrap items-center gap-4">
              {socialLinks.map((item) => {
                const Icon = item.icon;

                return (
                  <a
                    key={item.label}
                    href={item.href}
                    className="np-focus inline-flex min-h-12 items-center gap-2 rounded-full border border-white/10 bg-white/4 px-4 text-sm font-medium text-foreground transition-[background-color,transform] duration-(--np-duration-fast) hover:bg-white/8 active:scale-[0.96]"
                    aria-label={item.label}
                    target="_blank"
                    rel="noreferrer"
                  >
                    <Icon className="size-5" aria-hidden="true" />
                    {item.label}
                  </a>
                );
              })}
            </div>
          </div>
          <Separator />
          <div className="flex flex-col justify-between gap-4 text-base text-(--np-subtle) md:flex-row">
            <p>© 2026 NetPro International Limited. All Rights Reserved.</p>
            <div className="flex flex-wrap gap-5">
              <Link
                className="inline-flex min-h-11 items-center"
                to="/contact-us"
              >
                Privacy Policy
              </Link>
              <Link
                className="inline-flex min-h-11 items-center"
                to="/contact-us"
              >
                Terms & Conditions
              </Link>
              <Link
                className="inline-flex min-h-11 items-center"
                to="/contact-us"
              >
                Cookie Policy
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
