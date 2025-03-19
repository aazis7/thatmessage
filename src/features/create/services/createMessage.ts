import { supabase } from '@/lib/supabase'

type CreateMessage = {
  recipient: string
  message: string
}

export const createMessage = async ({ recipient, message }: CreateMessage) => {
  const { error } = await supabase.from('messages').insert({
    recipient,
    message
  })

  if (error) throw new Error(error.message)
}
