import { z } from 'zod'

export const browseRecipientFormSchema = z.object({
  recipient: z.string().optional()
})

export type BrowseRecipientFormSchema = z.infer<
  typeof browseRecipientFormSchema
>
