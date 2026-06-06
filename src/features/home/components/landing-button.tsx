import { Link } from '@tanstack/react-router'
import { ArrowRightIcon } from 'lucide-react'

import { Button } from '@/components/ui/button'
import type { NavigationPath } from '@/shared/config/navigation'
import { cn } from '@/lib/utils'

type LandingButtonProps = {
  children: string
  to: NavigationPath
  variant?: 'primary' | 'quiet'
  showArrow?: boolean
  className?: string
}

export function LandingButton({
  children,
  to,
  variant = 'primary',
  showArrow = false,
  className,
}: LandingButtonProps) {
  return (
    <Button
      asChild
      className={cn(
        'np-focus h-12 rounded-full px-6 text-base font-medium transition-[background-color,box-shadow,transform,border-color] duration-(--np-duration-fast) ease-(--np-ease-out) active:scale-[0.98]',
        variant === 'primary'
          ? 'border-primary bg-primary text-primary-foreground shadow-(--np-shadow-blue) hover:bg-[color:var(--np-blue-strong)]'
          : 'border-white/10 bg-white/[0.07] text-foreground hover:bg-white/[0.1]',
        className,
      )}
    >
      <Link to={to}>
        {children}
        {showArrow ? <ArrowRightIcon data-icon="inline-end" aria-hidden="true" /> : null}
      </Link>
    </Button>
  )
}
