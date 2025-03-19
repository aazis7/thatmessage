import { createFileRoute } from '@tanstack/react-router'
import { CreateMessageForm } from '@/features/create/components/CreateMessageForm'

export const Route = createFileRoute('/create/')({
  component: CreateMessage
})

function CreateMessage() {
  return (
    <section className="w-full max-w-sm md:max-w-xl mx-auto flex flex-col px-4 py-8">
      <CreateMessageForm />
    </section>
  )
}
