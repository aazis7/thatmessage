import { fetchMessages, FetchMessagesResponse } from './fetchMessages'

export const messagesQueryOptions = {
  queryKey: ['messages'],
  queryFn: ({ pageParam = '' }: { pageParam?: string }) =>
    fetchMessages(8, pageParam),
  initialPageParam: '',
  getNextPageParam: (lastPage: FetchMessagesResponse) => {
    return lastPage.nextCursor ?? undefined
  }
}
