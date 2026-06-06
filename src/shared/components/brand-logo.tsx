import { Link } from '@tanstack/react-router'

import { cn } from '@/lib/utils'

type BrandLogoProps = {
  className?: string
}

export function BrandLogo({ className }: BrandLogoProps) {
  return (
    <Link
      to="/"
      className={cn(
        'np-focus inline-flex min-h-11 items-center gap-1 rounded-full text-[2rem] font-light leading-none text-[#1f7fc8] transition-opacity duration-(--np-duration-fast) hover:opacity-90',
        className,
      )}
      aria-label="Netpro Africa home"
    >
      <span className="tracking-[-0.055em]">netpro</span>
      <span
        className="relative ml-0.5 inline-flex size-7 items-center justify-center rounded-full bg-[radial-gradient(circle_at_34%_28%,white_0_16%,#9fd6ff_17%_34%,#1f7fc8_35%_57%,#163758_58%_100%)] shadow-[0_0_0_2px_rgba(255,255,255,.22),0_8px_18px_rgba(31,127,200,.24)]"
        aria-hidden="true"
      >
        <span className="absolute -right-1 bottom-0 size-3 rounded-[3px] bg-[#77b83f] rotate-[-18deg]" />
      </span>
    </Link>
  )
}
