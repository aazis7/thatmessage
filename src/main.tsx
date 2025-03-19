import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import '@/styles/index.css'
import {
  ErrorComponent,
  RouterProvider,
  createRouter
} from '@tanstack/react-router'
import { QueryClientProvider } from '@tanstack/react-query'
import { queryClient } from '@/lib/query-client'
import { GlobalSpinner } from './components/GlobalSpinner'
import { GlobalNotFound } from '@/components/GlobalNotFound'

// Import the generated route tree
import { routeTree } from '@/routeTree.gen'

// Create a new router instance
const router = createRouter({
  routeTree,
  defaultPendingComponent: () => <GlobalSpinner />,
  defaultNotFoundComponent: () => <GlobalNotFound />,
  defaultErrorComponent: ({ error }) => <ErrorComponent error={error} />,
  context: {
    queryClient
  },
  defaultPreload: 'intent',
  defaultPreloadStaleTime: 0,
  scrollRestoration: true
})

// Register the router instance for type safety
declare module '@tanstack/react-router' {
  interface Register {
    router: typeof router
  }
}

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
    </QueryClientProvider>
  </StrictMode>
)
