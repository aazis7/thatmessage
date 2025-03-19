import { formatDate } from '@/utils/formatDate'
import { useBrowseMessages } from '../hooks/useBrowseMessages'
import { useMessageStore } from '@/store/useMessageStore'
import { useEffect, useRef, useState } from 'react'
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle
} from '@/components/ui/card'
import { useNavigate } from '@tanstack/react-router'

const MessageList = () => {
  const { data, fetchNextPage, hasNextPage, isFetchingNextPage } =
    useBrowseMessages()
  const { searchResults, searchQuery } = useMessageStore()
  const [isDelayedFetching, setIsDelayedFetching] = useState<boolean>(false)
  const lastMessageRef = useRef<HTMLDivElement | null>(null)
  const navigate = useNavigate()

  useEffect(() => {
    if (!hasNextPage || isFetchingNextPage) return

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setIsDelayedFetching(true)
          setTimeout(() => {
            fetchNextPage()
            setIsDelayedFetching(false)
          }, 250)
        }
      },
      { root: null, rootMargin: '200px', threshold: 0.1 }
    )

    if (lastMessageRef.current) {
      observer.observe(lastMessageRef.current)
    }

    return () => {
      if (lastMessageRef.current) observer.unobserve(lastMessageRef.current)
    }
  }, [hasNextPage, isFetchingNextPage, fetchNextPage, isDelayedFetching])

  const messagesToShow = searchQuery
    ? searchResults
    : data?.pages.flatMap((page) => page.data) || []

  return (
    <div className="w-full grid grid-cols-1 grid-flow-row md:grid-cols-2 md:grid-rows-4 gap-4">
      {messagesToShow.length > 0 ? (
        messagesToShow.map((message, index) => {
          const isLastMessage = index === messagesToShow.length - 1
          return (
            <div
              key={message.id}
              ref={isLastMessage ? lastMessageRef : null}
              className="w-full min-h-72"
              onClick={() =>
                navigate({
                  from: '/browse',
                  to: `/detail/$id`,
                  params: { id: `${message.id}` }
                })
              }
            >
              <Card className="flex flex-col gap-y-4 bg-zinc-950 border border-border h-full">
                <CardHeader>
                  <CardTitle className="font-normal font-lato">
                    To: {message.recipient}
                  </CardTitle>
                </CardHeader>
                <CardContent className="flex-1">
                  <p className="font-normal italic font-caveat text-2xl">
                    {message.message.length > 60
                      ? `${message.message.slice(0, 60)}...`
                      : message.message}
                  </p>
                </CardContent>
                <CardFooter>
                  <p className="font-normal font-lato text-xs">
                    Sent on {formatDate(message.created_at)}
                  </p>
                </CardFooter>
              </Card>
            </div>
          )
        })
      ) : (
        <p className="text-center font-normal font-lato col-span-full py-4 animate-pulse">
          No messages found
        </p>
      )}
      {(isFetchingNextPage || isDelayedFetching) && (
        <p className="text-center font-lato font-bold text-sm animate-pulse">
          Loading more messages...
        </p>
      )}
    </div>
  )
}

export default MessageList
