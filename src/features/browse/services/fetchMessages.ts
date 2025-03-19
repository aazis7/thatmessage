import { supabase } from '@/lib/supabase'

export type Message = {
  id: string
  recipient: string
  message: string
  created_at: string
}

export type FetchMessagesResponse = {
  data: Message[]
  nextCursor: string | null
}

export const fetchMessages = async (
  size: number,
  cursor?: string
): Promise<FetchMessagesResponse> => {
  let query = supabase
    .from('messages')
    .select('*')
    .order('created_at', { ascending: false })
    .limit(size)

  if (cursor) {
    query = query.lt('created_at', cursor)
  }

  const { data, error } = await query
  if (error) throw new Error(error.message)

  return {
    data: data ?? [],
    nextCursor: data?.length === size ? data[data.length - 1].created_at : null
  }
}
