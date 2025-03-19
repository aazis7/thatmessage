import { LoaderCircle } from 'lucide-react'

export const GlobalSpinner = () => {
  return (
    <div className="w-full flex flex-col items-center px-4 py-8">
      <LoaderCircle size={32} className="animate-spin" />
    </div>
  )
}
