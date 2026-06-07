import { create } from 'zustand'

export const themeStorageKey = 'netpro-theme-mode'

export type ThemeMode = 'dark' | 'light'

function getStoredThemeMode(): ThemeMode {
  if (typeof window === 'undefined') {
    return 'dark'
  }

  try {
    return window.localStorage.getItem(themeStorageKey) === 'light' ? 'light' : 'dark'
  } catch {
    return 'dark'
  }
}

export function applyThemeMode(themeMode: ThemeMode) {
  if (typeof document === 'undefined') {
    return
  }

  const root = document.documentElement

  root.classList.remove('dark', 'light')
  root.classList.add(themeMode)
  root.style.colorScheme = themeMode
}

function persistThemeMode(themeMode: ThemeMode) {
  if (typeof window === 'undefined') {
    return
  }

  try {
    window.localStorage.setItem(themeStorageKey, themeMode)
  } catch {
    // Fall back to the in-memory store if persistence is unavailable.
  }
}

export function initializeThemeMode() {
  const themeMode = getStoredThemeMode()

  applyThemeMode(themeMode)

  return themeMode
}

type UiState = {
  themeMode: ThemeMode
  inquiryContext: string
  isMobileNavOpen: boolean
  closeMobileNav: () => void
  openMobileNav: () => void
  setInquiryContext: (context: string) => void
  setMobileNavOpen: (isOpen: boolean) => void
  setThemeMode: (themeMode: ThemeMode) => void
  toggleThemeMode: () => void
}

export const useUiStore = create<UiState>((set) => ({
  themeMode: getStoredThemeMode(),
  inquiryContext: 'General inquiry',
  isMobileNavOpen: false,
  closeMobileNav: () => set({ isMobileNavOpen: false }),
  openMobileNav: () => set({ isMobileNavOpen: true }),
  setInquiryContext: (inquiryContext) => set({ inquiryContext }),
  setMobileNavOpen: (isMobileNavOpen) => set({ isMobileNavOpen }),
  setThemeMode: (themeMode) => {
    persistThemeMode(themeMode)
    applyThemeMode(themeMode)
    set({ themeMode })
  },
  toggleThemeMode: () =>
    set((state) => {
      const themeMode = state.themeMode === 'dark' ? 'light' : 'dark'

      persistThemeMode(themeMode)
      applyThemeMode(themeMode)

      return { themeMode }
    }),
}))
