import { supabase } from '@/lib/supabase'
import type { Message } from './fetchMessages'

export const fetchMessageByRecipient = async (
  recipient: string
): Promise<Message[]> => {
  const { data, error } = await supabase
    .from('messages')
    .select('*')
    .eq('recipient', recipient)

  if (error) throw new Error(error.message)

  return data as Message[]
}
