import { searchMessages } from './searchMessages'

export const fetchSearchResults = async (query: string) => {
  if (!query.trim()) return
  try {
    const results = await searchMessages(query)
    return results
  } catch (error) {
    console.error('Search error:', error)
  }
}
