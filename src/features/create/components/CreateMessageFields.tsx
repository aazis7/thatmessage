import {
  FormField,
  FormItem,
  FormLabel,
  FormControl,
  FormMessage
} from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import type { Control } from 'react-hook-form'
import type { CreateMessageFormSchema } from '../schema/createMessageFormSchema'

interface CreateMessageFieldsProps {
  control: Control<CreateMessageFormSchema>
}

export function CreateMessageFields({ control }: CreateMessageFieldsProps) {
  return (
    <>
      <FormField
        control={control}
        name="recipient"
        render={({ field }) => (
          <FormItem>
            <FormLabel>Recipient</FormLabel>
            <FormControl>
              <Input placeholder="Enter recipient's name" {...field} />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />
      <FormField
        control={control}
        name="message"
        render={({ field }) => (
          <FormItem>
            <FormLabel>Message</FormLabel>
            <FormControl>
              <Textarea
                className="max-h-36 min-h-32 overflow-auto resize-y"
                placeholder="Write your message here"
                {...field}
              />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />
    </>
  )
}
