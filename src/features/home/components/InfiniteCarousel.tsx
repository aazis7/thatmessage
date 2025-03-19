import { useEffect, useMemo, useState } from 'react'
import useEmblaCarousel from 'embla-carousel-react'
import Autoplay from 'embla-carousel-autoplay'
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle
} from '@/components/ui/card'
import { Message } from '@/features/browse/services/fetchMessages'
import { formatDate } from '@/utils/formatDate'

interface InfiniteCarouselProps {
  items: Message[]
  direction?: 'left' | 'right'
  speed?: number
}

export const InfiniteCarousel: React.FC<InfiniteCarouselProps> = ({
  items,
  direction = 'right',
  speed = 3500
}) => {
  const shuffledItems = useMemo(
    () => [...items].sort(() => Math.random() - 0.5),
    [items]
  )
  const [emblaRef, emblaApi] = useEmblaCarousel(
    {
      loop: true,
      align: 'center',
      direction: direction === 'left' ? 'rtl' : 'ltr'
    },
    [Autoplay({ delay: speed, stopOnInteraction: false })]
  )

  const [selectedIndex, setSelectedIndex] = useState(0)

  useEffect(() => {
    if (!emblaApi) return
    const onSelect = () => setSelectedIndex(emblaApi.selectedScrollSnap())
    emblaApi.on('select', onSelect)
    return () => {
      emblaApi.off('select', onSelect)
    }
  }, [emblaApi])

  return (
    <div className="w-full overflow-hidden" ref={emblaRef}>
      <div className="flex space-y-8">
        {shuffledItems.map((item, index) => (
          <div
            key={index}
            className={`transition-opacity duration-700 ease-in-out ${
              selectedIndex === index ? 'opacity-100' : 'opacity-0'
            } flex-shrink-0 w-full md:max-w-lg`}
          >
            <Card className="flex flex-col gap-y-4 bg-zinc-950 h-[180px]">
              <CardHeader>
                <CardTitle className="font-normal font-lato">
                  To: {item.recipient}
                </CardTitle>
              </CardHeader>
              <CardContent className="flex-1 flex items-center justify-center text-center px-4">
                <p className="font-normal italic font-caveat text-2xl">
                  {item.message.length > 50
                    ? `${item.message.slice(0, 50)}...`
                    : item.message}
                </p>
              </CardContent>
              <CardFooter>
                <p className="font-normal font-lato text-xs">
                  Sent on {formatDate(item.created_at)}
                </p>
              </CardFooter>
            </Card>
          </div>
        ))}
      </div>
    </div>
  )
}
