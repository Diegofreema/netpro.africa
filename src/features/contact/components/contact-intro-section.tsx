import { ContactActionCard } from '@/features/contact/components/contact-action-card';
import {
  contactHero,
  emailContacts,
  phoneContacts,
} from '@/features/contact/data/contact-page-content';

export function ContactIntroSection() {
  return (
    <section className="np-container pb-14 pt-10 sm:pb-20 sm:pt-16">
      <div
        className="np-card-texture relative flex min-h-88 flex-col items-center justify-center overflow-visible rounded-(--np-radius-xl) border border-white/10 px-6 py-16 text-center sm:px-10 sm:py-20"
        data-reveal="media"
      >
        <h1 className="font-heading text-[clamp(2.25rem,4.8vw,4rem)] font-semibold leading-[1.08] tracking-[-0.03em] text-foreground">
          <span className="text-(--np-subtle)">{contactHero.titleLead}</span>{' '}
          {contactHero.title}
        </h1>
        <p className="mt-7 max-w-5xl text-base leading-7 text-muted-foreground sm:text-lg">
          {contactHero.body}
        </p>
        <span className="mt-8 inline-flex max-w-full rounded-full border border-white/10 bg-background px-5 py-3 text-center text-sm font-medium text-foreground shadow-(--np-shadow-soft) sm:px-6 sm:py-4 sm:text-base">
          {contactHero.pill}
        </span>
      </div>

      <ContactActionGroup
        className="mt-16 sm:mt-20"
        title="Contact Us Via Email"
        actions={emailContacts}
      />
      <ContactActionGroup
        className="mt-20"
        title="Contact Us By Phone"
        actions={phoneContacts}
      />
    </section>
  );
}

type ContactActionGroupProps = {
  title: string;
  actions: typeof emailContacts;
  className?: string;
};

function ContactActionGroup({
  title,
  actions,
  className,
}: ContactActionGroupProps) {
  return (
    <section className={className} data-reveal="media">
      <h2 className="text-center text-2xl font-semibold tracking-[-0.02em] text-foreground">
        {title}
      </h2>
      <div className="mt-10 grid min-w-0 overflow-hidden rounded-(--np-radius-xl) border border-white/10 bg-(--np-surface) lg:grid-cols-[repeat(auto-fit,minmax(18rem,1fr))]">
        {actions.map((action) => (
          <ContactActionCard key={`${title}-${action.label}`} action={action} />
        ))}
      </div>
    </section>
  );
}
