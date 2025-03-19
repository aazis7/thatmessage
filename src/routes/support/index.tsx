import { Button } from '@/components/ui/button'
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/support/')({
  component: Support
})

function Support() {
  return (
    <section className="w-full max-w-sm md:max-w-xl mx-auto flex flex-col px-4 py-8">
      <div className="flex flex-col items-center justify-center space-y-8">
        <div>
          <h1 className="text-3xl font-bold font-lato cursor-pointer">
            Support <span className="font-caveat">ThatMessage</span>
          </h1>
        </div>
        <div className="w-[95%] max-w-lg pb-8">
          <p className="text-md md:text-md lg:text-lg font-lato font-normal">
            ThatMessage is and will always be completely free to use! However,
            if you would like to support the development and server costs, you
            can make a voluntary contribution. Any amount is deeply appreciated
            and helps keep this service running smoothly for everyone :)
          </p>
        </div>
        <div className="w-full flex flex-col items-center gap-y-2">
          <Button variant={'secondary'} className="w-full">
            Support ThatMessage (Saweria)
          </Button>
          <Button variant={'default'} className="w-full">
            Support ThatMessage (SociaBuzz)
          </Button>
        </div>
      </div>
    </section>
  )
}
