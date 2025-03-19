import { Alert, AlertTitle, AlertDescription } from '@/components/ui/alert'
import { Info } from 'lucide-react'

export function BrowseMessageInfo() {
  return (
    <Alert>
      <Info className="h-4 w-4" />
      <AlertTitle>Find Message</AlertTitle>
      <AlertDescription>
        Scroll the latest messages or start typing recipient name to find your
        messages
      </AlertDescription>
    </Alert>
  )
}
