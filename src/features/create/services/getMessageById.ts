import { supabase } from '@/lib/supabase'

type Message = {
  id: string
  recipient: string
  message: string
  created_at: string
}

export const getMessageById = async (id: string) => {
  const { data, error } = await supabase
    .from('messages')
    .select('*')
    .eq('id', id)
    .single()

  if (error) throw new Error(error.message)

  return data as Message
}
