import { Navbar } from '@/components/Navbar'
import { QueryClient } from '@tanstack/react-query'
import { createRootRouteWithContext, Outlet } from '@tanstack/react-router'
import { Toaster } from '@/components/ui/sonner'
import { useThemeActions } from '@/store/useThemeStore'
import { useEffect } from 'react'
import { getFullYear } from '@/utils/getFullYear'

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()(
  {
    component: Root
  }
)

function Root() {
  const { initializeTheme } = useThemeActions()
  const currentYear = getFullYear()

  useEffect(() => {
    initializeTheme()
  }, [])

  return (
    <div className="flex min-h-dvh flex-col">
      {/* Header */}
      <header className="container sticky top-0 z-50 w-full shadow-md bg-zinc-950 border-b border-border mx-auto">
        <Navbar />
      </header>

      {/* Main Content */}
      <main className="container flex-1 mx-auto px-4 sm:px-6 lg:px-8">
        <Outlet />
        <Toaster />
      </main>

      {/* Footer */}
      <footer className="container w-full bg-zinc-950 py-4 text-center mx-auto border-t border-t-border">
        <div className="space-y-4">
          <p className="text-xs text-zinc-200 text-center font-lato font-normal">
            This website was inspired by{' '}
            <a
              href="https://sendthesong.xyz/"
              target="_blank"
              className="underline underline-offset-2"
            >
              SendTheSong
            </a>
          </p>
        </div>
        <div className="flex items-center justify-center gap-x-2">
          <a
            href="https://github.com/aazis7"
            target="_blank"
            className="text-xs text-zinc-600 font-lato font-normal pr-4 border-r border-r-border transition-all hover:text-zinc-400"
          >
            GitHub
          </a>
          <a
            href="https://instagram.com/aazis.7"
            target="_blank"
            className="text-xs text-zinc-600 font-lato font-normal pl-2 pr-4 border-r border-r-border transition-all hover:text-zinc-400"
          >
            Instagram
          </a>
          <a
            href="https://facebook.com/aaazis7"
            target="_blank"
            className="text-xs text-zinc-600 font-lato font-normal pl-2 transition-all hover:text-zinc-400"
          >
            Facebook
          </a>
        </div>
        <p className="text-sm text-muted-foreground font-lato cursor-pointer">
          &copy; {currentYear} ThatMessage. All rights reserved.
        </p>
      </footer>
    </div>
  )
}
