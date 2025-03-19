import { createFileRoute } from '@tanstack/react-router'
import { QuoteSection } from '@/features/home/components/QuoteSection'
import { ButtonSection } from '@/features/home/components/ButtonSection'
import { MessagesSection } from '@/features/home/components/MessagesSection'
import { fetchDataOptions } from '@/features/home/services/fetchDataOptions'
import {
  useSuspenseQuery,
  useSuspenseInfiniteQuery
} from '@tanstack/react-query'
import { InfiniteCarousel } from '@/features/home/components/InfiniteCarousel'
import { messagesQueryOptions } from '@/features/browse/services/messagesQueryOptions'

export const Route = createFileRoute('/')({
  component: Home,
  loader: ({ context: { queryClient } }) => {
    return {
      homeData: queryClient.ensureQueryData(fetchDataOptions),
      messagesData: queryClient.ensureInfiniteQueryData(messagesQueryOptions)
    }
  },
  staleTime: Infinity
})

function Home() {
  const { data: homeData } = useSuspenseQuery(fetchDataOptions)
  const { data: messagesData } = useSuspenseInfiniteQuery(messagesQueryOptions)

  const messages = messagesData?.pages.flatMap((page) => page.data) ?? []

  return (
    <section className="w-full max-w-sm md:max-w-xl mx-auto flex flex-col px-4 py-8">
      <QuoteSection quote={homeData?.quote} />
      <ButtonSection buttons={homeData?.buttons} />
      <MessagesSection messages={homeData?.messages} />
      <InfiniteCarousel items={messages} />
      <InfiniteCarousel items={messages} />
    </section>
  )
}
