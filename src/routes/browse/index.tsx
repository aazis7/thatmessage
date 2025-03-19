import { BrowseMessageForm } from '@/features/browse/components/BrowseMessageForm'
import { BrowseMessageInfo } from '@/features/browse/components/BrowseMessageInfo'
import MessageList from '@/features/browse/components/MessageList'
import { messagesQueryOptions } from '@/features/browse/services/messagesQueryOptions'
import { createFileRoute } from '@tanstack/react-router'
import { useEffect } from 'react'
import { useMessageActions } from '@/store/useMessageStore'

export const Route = createFileRoute('/browse/')({
  component: BrowseMessage,
  loader: async ({ context: { queryClient } }) => {
    return queryClient.ensureInfiniteQueryData(messagesQueryOptions)
  },
  staleTime: 1000 * 60,
  gcTime: 1000 * 60 * 5
})

function BrowseMessage() {
  const data = Route.useLoaderData()
  const { setMessages } = useMessageActions()

  useEffect(() => {
    if (!data?.pages) return
    const allMessages = data.pages.flatMap((page) => page.data)
    setMessages(allMessages)
  }, [data, setMessages])

  return (
    <section className="w-full max-w-sm md:max-w-xl mx-auto flex flex-col px-4 py-8">
      <div className="space-y-8">
        <BrowseMessageInfo />
        <BrowseMessageForm />
        <MessageList />
      </div>
    </section>
  )
}
