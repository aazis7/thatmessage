import { getMessageById } from '@/features/create/services/getMessageById'

export const messageQueryOptions = (id: string) => ({
  queryKey: ['message'],
  queryFn: async () => await getMessageById(id)
})
