import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import {
  createMessageFormSchema,
  CreateMessageFormSchema
} from '../schema/createMessageFormSchema.ts'
import { Form } from '@/components/ui/form'
import { CreateMessageFields } from './CreateMessageFields'
import { CreateMessageButton } from './CreateMessageButton'
import { CreateMessageInfo } from './CreateMessageInfo.tsx'
import { useCreateMessage } from '../hooks/useCreateMessage.ts'

export function CreateMessageForm() {
  const { onSubmitCreateMessage, isPending } = useCreateMessage()
  const form = useForm<CreateMessageFormSchema>({
    resolver: zodResolver(createMessageFormSchema),
    defaultValues: {
      recipient: '',
      message: ''
    }
  })

  const recipient = form.watch('recipient')
  const message = form.watch('message')

  const isDisabled = !recipient || !message

  return (
    <section className="w-full max-w-sm md:max-w-xl mx-auto flex flex-col space-y-8">
      <div className="flex flex-col items-center justify-center gap-y-8">
        <CreateMessageInfo />
      </div>
      <div className="flex flex-col items-center gap-y-8">
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmitCreateMessage)}
            className="w-full space-y-8"
          >
            <CreateMessageFields control={form.control} />
            <CreateMessageButton
              isPending={isPending}
              isDisabled={isDisabled}
            />
          </form>
        </Form>
      </div>
    </section>
  )
}
