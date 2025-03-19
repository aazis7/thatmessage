import React from 'react'
import { Button } from '@/components/ui/button'
import { useNavigate } from '@tanstack/react-router'
import { PenLine, Search } from 'lucide-react'

type ButtonData = {
  tellMessage: { route: string; label: string }
  browseMessage: { route: string; label: string }
}

type ButtonSectionProps = {
  buttons: ButtonData | undefined
}

export const ButtonSection: React.FC<ButtonSectionProps> = ({ buttons }) => {
  const navigate = useNavigate()
  return (
    <div className="flex flex-col gap-y-2 pb-4">
      <Button
        variant={'secondary'}
        className="font-lato font-normal text-center"
        onClick={() => navigate({ from: '/', to: buttons?.tellMessage.route })}
      >
        {buttons?.tellMessage.label} <PenLine />
      </Button>
      <Button
        variant={'default'}
        className="font-lato font-normal text-center"
        onClick={() =>
          navigate({ from: '/', to: buttons?.browseMessage.route })
        }
      >
        {buttons?.browseMessage.label} <Search />
      </Button>
    </div>
  )
}
