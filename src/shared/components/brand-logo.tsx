import { Link } from '@tanstack/react-router';

import { cn } from '@/lib/utils';
import { assetUrl } from '@/shared/config/site';

type BrandLogoProps = {
  className?: string;
};

export function BrandLogo({ className }: BrandLogoProps) {
  return (
    <Link
      to="/"
      className={cn(
        'np-focus inline-flex min-h-11 items-center rounded-sm transition-opacity duration-(--np-duration-fast) hover:opacity-90',
        className,
      )}
      aria-label="Netpro home"
    >
      <img
        src={assetUrl('/assets/netpro/logo.png')}
        alt=""
        className="h-10 w-auto max-w-40 object-contain sm:h-11 sm:max-w-44"
        aria-hidden="true"
      />
    </Link>
  );
}
