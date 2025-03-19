import { Link } from '@tanstack/react-router'

export const GlobalNotFound = () => {
  return (
    <section className="w-full flex flex-col items-center justify-center px-4 py-8">
      <div className="max-w-md md:max-w-lg mx-auto">
        <h1 className="text-lg font-bold font-lato">404 | Not Found</h1>
        <p className="text-sm text-muted-foreground font-normal font-lato">
          Currently the page you are looking for is not found. Please back or
          compliment to author with following links on the Footer
        </p>
        <Link
          to="/"
          className="text-sm text-zinc-200 font-normal font-lato underline underline-offset-1"
        >
          Back Home
        </Link>
      </div>
    </section>
  )
}
