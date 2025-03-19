import { Skeleton } from '@/components/ui/skeleton'

export const PendingComponent = () => {
  return (
    <section className="w-full max-w-sm md:max-w-xl mx-auto flex flex-col p-4">
      {/* Quote Section */}
      <div className="flex flex-col items-center justify-center space-y-8">
        <Skeleton className="w-[85%] h-28" />
        <Skeleton className="w-[90%] h-4" />
      </div>
      {/* Button Section */}
      <div className="flex flex-col gap-y-2 pb-8">
        <Skeleton className="w-full h-10" />
        <Skeleton className="w-full h-10" />
      </div>
      {/* Messages Section*/}
      <div className="max-w-sm md:max-w-xl w-full mx-auto flex flex-col items-center space-y-8">
        <Skeleton className="w-full h-36" />
        <Skeleton className="w-full h-36" />
        <Skeleton className="w-full h-36" />
      </div>
    </section>
  )
}
