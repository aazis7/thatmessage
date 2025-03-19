import { z } from 'zod'

export const createMessageFormSchema = z.object({
  recipient: z.string().nonempty(),
  message: z.string().nonempty()
})

export type CreateMessageFormSchema = z.infer<typeof createMessageFormSchema>
