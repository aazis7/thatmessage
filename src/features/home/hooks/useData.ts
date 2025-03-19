import { fetchData } from '@/features/home/services/fetchData'
import { useQuery } from '@tanstack/react-query'

export const useHomeData = () => {
  return useQuery({
    queryKey: ['home-data'],
    queryFn: fetchData,
    staleTime: Infinity
  })
}
