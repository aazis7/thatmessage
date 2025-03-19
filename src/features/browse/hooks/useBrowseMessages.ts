import { useInfiniteQuery } from '@tanstack/react-query'
import { messagesQueryOptions } from '../services/messagesQueryOptions'
import { useLoaderData } from '@tanstack/react-router'
import { FetchMessagesResponse } from '../services/fetchMessages'

export const useBrowseMessages = () => {
  const initialData = useLoaderData({
    from: '/browse/'
  }) as FetchMessagesResponse

  return useInfiniteQuery({
    ...messagesQueryOptions,
    initialData: {
      pages: [initialData],
      pageParams: ['']
    },
    getNextPageParam: (lastPage) => lastPage.nextCursor || undefined,
    retry: false,
    gcTime: 1000 * 60 * 5,
    staleTime: 1000 * 60
  })
}
