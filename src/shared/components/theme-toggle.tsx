import { useEffect } from 'react'
import { MoonIcon, SunIcon } from 'lucide-react'

import { useUiStore } from '@/shared/stores/ui-store'

export function ThemeToggle() {
  const themeMode = useUiStore((state) => state.themeMode)
  const toggleThemeMode = useUiStore((state) => state.toggleThemeMode)
  const isDark = themeMode === 'dark'
  const Icon = isDark ? MoonIcon : SunIcon

  useEffect(() => {
    const root = document.documentElement

    root.classList.toggle('dark', isDark)
    root.classList.toggle('light', !isDark)
    root.style.colorScheme = themeMode
  }, [isDark, themeMode])

  return (
    <button
      className="np-focus fixed bottom-5 right-5 z-50 inline-flex min-h-14 items-center gap-3 rounded-full border border-[color:var(--np-border-strong)] bg-[color:var(--np-toggle-bg)] p-2 pl-5 text-base font-semibold text-muted-foreground shadow-(--np-shadow-soft) backdrop-blur transition-[background-color,border-color,color,transform] duration-(--np-duration-fast) hover:text-foreground active:scale-[0.98] sm:bottom-8 sm:right-8"
      type="button"
      aria-label={`Switch to ${isDark ? 'light' : 'dark'} mode`}
      aria-pressed={!isDark}
      onClick={toggleThemeMode}
    >
      <span>{isDark ? 'Dark' : 'Light'}</span>
      <span className="inline-flex size-11 items-center justify-center rounded-full bg-[color:var(--np-toggle-knob)] text-foreground">
        <Icon className="size-6 fill-current" aria-hidden="true" />
      </span>
    </button>
  )
}
