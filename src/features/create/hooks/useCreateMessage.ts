import { useNavigate } from '@tanstack/react-router'
import { useMutation } from '@tanstack/react-query'
import { toast } from 'sonner'
import { createMessage } from '../services/createMessage'
import { CreateMessageFormSchema } from '../schema/createMessageFormSchema'

export const useCreateMessage = () => {
  const navigate = useNavigate()

  const { mutate, isPending } = useMutation({
    mutationFn: createMessage,
    onSuccess: () => {
      toast.success('Message sent successfully!')
      navigate({ to: '/browse' })
    },
    onError: (error: unknown) => {
      toast.error(
        error instanceof Error ? error.message : 'Failed to send message'
      )
    }
  })

  const onSubmitCreateMessage = async (values: CreateMessageFormSchema) =>
    mutate(values)

  return {
    onSubmitCreateMessage,
    isPending
  }
}
