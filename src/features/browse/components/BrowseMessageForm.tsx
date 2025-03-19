import { useForm } from 'react-hook-form'
import { Form, FormControl, FormField, FormItem } from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import {
  browseRecipientFormSchema,
  BrowseRecipientFormSchema
} from '../schema/browseRecipientFormSchema'
import { zodResolver } from '@hookform/resolvers/zod'
import { useMessageActions, useMessageStore } from '@/store/useMessageStore'
import { useDebounce } from 'use-debounce'
import { useEffect } from 'react'

export function BrowseMessageForm() {
  const { searchQuery } = useMessageStore()
  const { setSearchQuery, fetchSearchResults, resetSearch } =
    useMessageActions()
  const [debouncedQuery] = useDebounce(searchQuery, 500)

  const form = useForm<BrowseRecipientFormSchema>({
    resolver: zodResolver(browseRecipientFormSchema),
    defaultValues: { recipient: searchQuery },
    mode: 'onBlur'
  })

  const onSubmit = async (values: BrowseRecipientFormSchema) => {
    if (!values.recipient) return null

    const query = values.recipient.trim()
    setSearchQuery(query)

    if (!query) {
      resetSearch()
    } else {
      await fetchSearchResults(query)
    }
  }

  useEffect(() => {
    setSearchQuery(debouncedQuery)

    if (debouncedQuery) {
      fetchSearchResults(debouncedQuery)
    } else {
      resetSearch()
    }
  }, [debouncedQuery])

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="w-full flex gap-x-2 space-y-4"
      >
        <FormField
          control={form.control}
          name="recipient"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <Input
                  placeholder="Enter recipient's name"
                  {...field}
                  onChange={(e) => {
                    field.onChange(e)
                    setSearchQuery(e.target.value)
                  }}
                />
              </FormControl>
            </FormItem>
          )}
        />
        <Button type="submit" variant={'default'} disabled={!searchQuery}>
          Search
        </Button>
      </form>
    </Form>
  )
}
