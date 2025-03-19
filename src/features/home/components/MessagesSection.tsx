import React from 'react'

type MessagesData = {
  share: {
    title: string
    description: string
  }
  browse: {
    title: string
    description: string
  }
  detail: {
    title: string
    description: string
  }
}

type MessagesSectionProps = {
  messages: MessagesData | undefined
}

export const MessagesSection: React.FC<MessagesSectionProps> = ({
  messages
}) => {
  return (
    <div className="max-w-sm md:max-w-xl w-full mx-auto flex flex-col items-center gap-y-8 py-4">
      {Object.values(messages!).map((msg, index) => (
        <div
          key={index}
          className="flex flex-col gap-y-4 p-4 border border-border shadow-md rounded-md"
        >
          <h2 className="text-2xl font-normal font-caveat">{msg.title}</h2>
          <p className="text-sm font-normal font-lato">{msg.description}</p>
        </div>
      ))}
    </div>
  )
}
