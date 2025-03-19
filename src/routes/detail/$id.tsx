import { messageQueryOptions } from '@/features/detail/services/messageQueryOptions'
import { formatDate } from '@/utils/formatDate'
import { createFileRoute } from '@tanstack/react-router'
import { useQuery } from '@tanstack/react-query'
import { Button } from '@/components/ui/button'
import { PenLine } from 'lucide-react'

export const Route = createFileRoute('/detail/$id')({
  component: DetailMessage
})

function DetailMessage() {
  const { id } = Route.useParams()
  const navigate = Route.useNavigate()
  const { data: message } = useQuery(messageQueryOptions(id))

  return (
    <section className="w-full max-w-md md:max-w-xl mx-auto flex flex-col px-4 py-8">
      {message && (
        <div className="flex flex-col space-y-4">
          <div className="space-y-4">
            <h1 className="text-4xl font-lato font-normal">
              Hello, <span className="font-caveat">{message?.recipient}</span>
            </h1>
            <p className="text-lg text-muted-foreground font-lato font-normal">
              There's someone sending you a message, they want you to read this
              message that maybe you'll like :)
            </p>
          </div>
          <div className="w-[95%] flex-1 space-y-4">
            <p className="font-normal italic font-caveat text-4xl text-zinc-200">
              {message.message}
            </p>
            <p className="font-normal font-lato text-xs text-center text-gray-300">
              Sent on {formatDate(message.created_at)}
            </p>
          </div>
          <div className="flex flex-col items-center space-y-4">
            <p className="text-sm font-normal font-lato">
              Wanna send a message to a friend?
            </p>
            <Button
              variant={'secondary'}
              className="font-lato"
              onClick={() => navigate({ to: '/create' })}
            >
              <PenLine /> Create a message
            </Button>
          </div>
        </div>
      )}
    </section>
  )
}
