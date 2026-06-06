import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import {
  applicationSteps,
  applyIntro,
} from '@/features/careers/data/careers-page-content';

export function HowToApplySection() {
  return (
    <section className="np-container py-(--np-section-y)">
      <div className="mx-auto max-w-5xl text-center" data-reveal="title">
        <h2 className="font-heading text-[clamp(2.2rem,4.4vw,4rem)] font-semibold leading-[1.1] tracking-[-0.03em] text-foreground">
          <span className="text-(--np-subtle)">{applyIntro.titleLead}</span>{' '}
          {applyIntro.title}
        </h2>
        <p className="mx-auto mt-6 max-w-4xl text-base leading-7 text-muted-foreground sm:text-lg">
          {applyIntro.body}
        </p>
      </div>

      <div className="np-reveal-stagger mt-16 grid gap-7 md:grid-cols-2 xl:grid-cols-3">
        {applicationSteps.map((step) => (
          <Card
            key={step.step}
            className="overflow-hidden rounded-(--np-radius-xl) border border-white/10 bg-(--np-surface) py-0 shadow-none"
            data-reveal="card"
          >
            <CardHeader className="np-card-texture min-h-28 justify-center border-b pt-5 border-white/10 px-8">
              <CardTitle className="relative z-10 text-2xl font-semibold text-foreground">
                {step.step}
              </CardTitle>
            </CardHeader>
            <CardContent className="px-8 py-9">
              <h3 className="text-xl font-semibold text-foreground">
                {step.title}
              </h3>
              <p className="mt-5 text-base leading-7 text-muted-foreground">
                {step.body}
              </p>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
}
