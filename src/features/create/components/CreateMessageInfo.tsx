import { Alert, AlertTitle, AlertDescription } from '@/components/ui/alert'
import { Info } from 'lucide-react'

export function CreateMessageInfo() {
  return (
    <Alert>
      <Info className="h-4 w-4" />
      <AlertTitle>Message Deletion Not Available</AlertTitle>
      <AlertDescription>
        Currently, we do not support message deletion. Once a message is posted,
        it cannot be removed. Please ensure your messages are appropriate before
        submitting.
      </AlertDescription>
    </Alert>
  )
}
