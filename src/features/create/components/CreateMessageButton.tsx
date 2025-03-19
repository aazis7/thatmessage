import { Button } from '@/components/ui/button'

interface CreateMessageFormButtonProps {
  isPending: boolean
  isDisabled: boolean
}

export function CreateMessageButton({
  isPending,
  isDisabled
}: CreateMessageFormButtonProps) {
  return (
    <Button
      type="submit"
      variant={'default'}
      className="w-full text-center"
      disabled={isDisabled}
    >
      {isPending ? 'Submitting...' : 'Submit'}
    </Button>
  )
}
