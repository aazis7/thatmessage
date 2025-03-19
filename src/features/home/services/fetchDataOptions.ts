import { queryOptions } from '@tanstack/react-query'
import { fetchData } from './fetchData'

export const fetchDataOptions = queryOptions({
  queryKey: ['home'],
  queryFn: () => fetchData()
})
