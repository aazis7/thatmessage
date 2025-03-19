import { create } from 'zustand'
import { Message } from '@/features/browse/services/fetchMessages'
import { fetchSearchResults as fetchSearchResultsService } from '@/features/browse/services/fetchSearchResults'

type MessageActions = {
  setMessages: (messages: Message[]) => void
  setSearchQuery: (query: string) => void
  fetchSearchResults: (query: string) => Promise<void>
  resetSearch: () => void
}

type MessageStore = {
  messages: Message[]
  searchResults: Message[]
  searchQuery: string
  actions: MessageActions
}

export const useMessageStore = create<MessageStore>((set) => ({
  messages: [],
  searchResults: [],
  searchQuery: '',
  actions: {
    setMessages: (messages) => set({ messages }),
    setSearchQuery: (query) => set({ searchQuery: query }),
    fetchSearchResults: async (query) => {
      const results = await fetchSearchResultsService(query)
      set({ searchResults: results })
    },
    resetSearch: () => set({ searchQuery: '', searchResults: [] })
  }
}))

export const useMessageActions = () => useMessageStore((state) => state.actions)
