import { teamMembers } from '@/features/about/data/about-page-content';
import { LandingSectionHeading } from '@/features/home/components/landing-section-heading';

export function TeamSection() {
  return (
    <section className="np-section">
      <div className="np-container flex flex-col gap-16">
        <LandingSectionHeading
          eyebrow="Our"
          title="Team Members"
          description="Partnering with NetPro means working with focused specialists across strategy, product design, software delivery, and digital growth."
        />
        <div className="np-reveal-stagger grid gap-8 sm:grid-cols-2 xl:grid-cols-4">
          {teamMembers.map((member) => (
            <article
              key={member.name}
              className="np-card-texture overflow-hidden rounded-(--np-radius-xl) border border-white/10 text-center"
              data-reveal="card"
            >
              <div className="px-6 pb-12 pt-16">
                <div className="mx-auto flex size-28 items-center justify-center rounded-full border-10 border-white/14 bg-black/30">
                  <div
                    className="flex size-16 items-center justify-center rounded-full text-lg font-bold text-white shadow-[0_18px_38px_rgba(0,0,0,.34)]"
                    style={{ background: member.tone }}
                  >
                    {member.initials}
                  </div>
                </div>
                <h3 className="mt-8 text-xl font-semibold text-foreground">
                  {member.name}
                </h3>
                <p className="mx-auto mt-6 inline-flex min-h-12 items-center rounded-full border border-white/10 bg-white/6 px-6 text-base text-foreground">
                  {member.role}
                </p>
              </div>
              {/* <div className="flex justify-center gap-4 border-t border-white/8 bg-black/10 px-6 py-7">
                {socialIcons.map((Icon, index) => (
                  <a
                    key={`${member.name}-${index}`}
                    href={withBasePath('/')}
                    className="np-focus inline-flex size-12 items-center justify-center rounded-full border border-white/10 bg-white/4 text-foreground transition-[background-color,transform] duration-(--np-duration-fast) hover:bg-white/8 active:scale-[0.96]"
                    aria-label={`${member.name} social link ${index + 1}`}
                  >
                    <Icon className="size-5" aria-hidden="true" />
                  </a>
                ))}
              </div> */}
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
