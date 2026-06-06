import { actionIcon, type ContactAction } from '@/features/contact/data/contact-page-content'

type ContactActionCardProps = {
  action: ContactAction
}

export function ContactActionCard({ action }: ContactActionCardProps) {
  const Icon = action.icon
  const ActionIcon = actionIcon

  return (
    <div className="min-w-0 border-white/10 p-5 sm:p-6 lg:border-r lg:last:border-r-0">
      <p className="text-base font-medium text-[color:var(--np-subtle)]">{action.label}</p>
      <a
        href={action.href}
        className="np-focus mt-6 flex min-h-14 min-w-0 items-center justify-between gap-3 rounded-full border border-white/10 bg-white/[0.025] py-2 pl-4 pr-2 text-base font-medium text-foreground transition-[background-color,border-color,transform] duration-(--np-duration-fast) hover:border-white/20 hover:bg-white/[0.05] active:scale-[0.99] sm:gap-4 sm:pl-5 sm:text-lg"
      >
        <span className="flex min-w-0 items-center gap-3">
          <Icon className="size-5 shrink-0 text-foreground" aria-hidden="true" />
          <span className="truncate">{action.value}</span>
        </span>
        <span className="inline-flex size-11 shrink-0 items-center justify-center rounded-full bg-primary text-primary-foreground">
          <ActionIcon className="size-5" aria-hidden="true" />
        </span>
      </a>
    </div>
  )
}
