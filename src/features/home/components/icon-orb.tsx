import type { LucideIcon } from 'lucide-react'

type IconOrbProps = {
  icon: LucideIcon
  size?: 'sm' | 'lg'
}

export function IconOrb({ icon: Icon, size = 'sm' }: IconOrbProps) {
  const sizeClass = size === 'lg' ? 'size-24' : 'size-20'
  const iconClass = size === 'lg' ? 'size-8' : 'size-6'

  return (
    <span
      className={`np-icon-orb ${sizeClass} relative inline-flex items-center justify-center rounded-full border-[10px] border-white/20 bg-[radial-gradient(circle_at_50%_45%,rgba(255,255,255,.12),rgba(255,255,255,.02)_44%,rgba(0,0,0,.35)_100%)] shadow-[inset_0_0_0_1px_rgba(255,255,255,.08)]`}
      aria-hidden="true"
    >
      <span className="np-icon-orb-ring absolute inset-2 rounded-full border border-white/10" />
      <Icon className={`${iconClass} relative text-foreground`} strokeWidth={2.6} />
    </span>
  )
}
