import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { RouterProvider } from '@tanstack/react-router'

import { AppProviders } from '@/app/providers/app-providers'
import { router } from '@/app/router'
import { initializeThemeMode } from '@/shared/stores/ui-store'
import './index.css'

initializeThemeMode()

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <AppProviders>
      <RouterProvider router={router} />
    </AppProviders>
  </StrictMode>,
)
