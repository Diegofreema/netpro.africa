import { create } from 'zustand'

const themeStorageKey = 'netpro-theme-mode'

export type ThemeMode = 'dark' | 'light'

function getInitialThemeMode(): ThemeMode {
  if (typeof window === 'undefined') {
    return 'dark'
  }

  return window.localStorage.getItem(themeStorageKey) === 'light' ? 'light' : 'dark'
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
  themeMode: getInitialThemeMode(),
  inquiryContext: 'General inquiry',
  isMobileNavOpen: false,
  closeMobileNav: () => set({ isMobileNavOpen: false }),
  openMobileNav: () => set({ isMobileNavOpen: true }),
  setInquiryContext: (inquiryContext) => set({ inquiryContext }),
  setMobileNavOpen: (isMobileNavOpen) => set({ isMobileNavOpen }),
  setThemeMode: (themeMode) => {
    window.localStorage.setItem(themeStorageKey, themeMode)
    set({ themeMode })
  },
  toggleThemeMode: () =>
    set((state) => {
      const themeMode = state.themeMode === 'dark' ? 'light' : 'dark'

      window.localStorage.setItem(themeStorageKey, themeMode)

      return { themeMode }
    }),
}))
