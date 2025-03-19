import React from 'react'

type QuoteData = {
  text: string
  author: string
  source: string
}

type QuoteSectionProps = {
  quote: QuoteData | undefined
}

export const QuoteSection: React.FC<QuoteSectionProps> = ({ quote }) => {
  return (
    <div className="flex flex-col items-center justify-center gap-y-8 space-y-4">
      <h1 className="md:max-w-md text-2xl md:text-4xl font-caveat text-center">
        "{quote?.text}"<br /> — {quote?.author}, {quote?.source}
      </h1>
      <p className="text-sm font-lato font-normal">
        Express your feelings through the message
      </p>
    </div>
  )
}
