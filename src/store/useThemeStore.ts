import { create } from 'zustand'

type Theme = 'dark'

type ThemeActions = {
  setTheme: (theme: Theme) => void
  initializeTheme: () => void
}

type ThemeStore = {
  theme: Theme
  actions: ThemeActions
}

export const useThemeStore = create<ThemeStore>((set) => ({
  theme: 'dark',
  actions: {
    setTheme: (theme) => {
      localStorage.setItem('thatmessage-theme', theme)
      document.documentElement.classList.add(theme)
      set({ theme })
    },
    initializeTheme: () => {
      const savedTheme = localStorage.getItem(
        'thatmessage-theme'
      ) as Theme | null
      const theme = savedTheme || 'dark'
      document.documentElement.classList.add(theme)
      set({ theme })
    }
  }
}))

export const useThemeActions = () => useThemeStore((state) => state.actions)
