import CountUp from '@/components/CountUp';

const heroStats = [
  { value: 25, suffix: '+', label: 'Years of Experience' },
  { value: 20, suffix: '+', label: 'Products' },
  { value: 9, suffix: '+', label: 'Service lines' },
  { value: 5, suffix: '+', label: 'Office locations' },
];

type HeroStatsPanelProps = {
  className?: string;
};

export function HeroStatsPanel({ className = '' }: HeroStatsPanelProps) {
  return (
    <div
      className={`grid grid-cols-2 gap-y-8 rounded-3xl border border-white/15 bg-[oklch(0.22_0_0/0.82)] px-6 py-7 text-center shadow-[0_24px_80px_oklch(0_0_0/0.35)] backdrop-blur-md sm:grid-cols-4 sm:px-8 xl:rounded-[1.75rem] xl:px-12 xl:py-9 ${className}`.trim()}
    >
      {heroStats.map((stat) => (
        <div
          key={stat.label}
          className="flex flex-col items-center"
          data-hero-stat
        >
          <div className="font-heading text-[clamp(2rem,3vw,3rem)] font-semibold leading-none text-foreground">
            <CountUp
              from={0}
              to={stat.value}
              duration={1.4}
              delay={0.15}
              className="tabular-nums"
            />
            <span>{stat.suffix}</span>
          </div>
          <p className="mt-2 text-sm leading-5 text-[oklch(0.93_0_0/0.82)] sm:text-base sm:leading-6">
            {stat.label}
          </p>
        </div>
      ))}
    </div>
  );
}
