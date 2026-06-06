import { HeadContent, Outlet } from '@tanstack/react-router'

import { AppLayout } from '@/shared/layout/app-layout'

export function RootRouteComponent() {
  return (
    <>
      <HeadContent />
      <AppLayout>
        <Outlet />
      </AppLayout>
    </>
  )
}
