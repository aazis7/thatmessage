import { supabase } from '@/lib/supabase'
import { Message } from './fetchMessages'

export const searchMessages = async (recipient: string): Promise<Message[]> => {
  const { data, error } = await supabase
    .from('messages')
    .select('*')
    .order('created_at', { ascending: false })
    .ilike('recipient', `%${recipient}%`)

  if (error) throw new Error(error.message)
  return data ?? []
}
