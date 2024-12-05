import { zodResolver } from '@hookform/resolvers/zod'
import { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'
import { z } from 'zod'

import { useArtworksService } from '@/api/apiService.ts'
import useDebounce from '@/hooks/useDeboune.ts'
import { Artwork } from '@/types/type.ts'

const schema = z.object({
  query: z.string().min(1, 'Query is required')
})

export const useSearchArtworks = (setIsSearching: (isSearching: boolean) => void) => {
  const [results, setResults] = useState<Artwork[]>([])
  const { searchArtworks } = useArtworksService()
  const { register, handleSubmit, watch, setValue } = useForm({
    resolver: zodResolver(schema),
    defaultValues: {
      query: ''
    }
  })

  const query = watch('query')
  const debouncedQuery = useDebounce(query, 500)

  useEffect(() => {
    if (debouncedQuery) {
      handleSearch()
      setIsSearching(true)
    } else {
      setIsSearching(false)
      setResults([])
    }
  }, [debouncedQuery, setIsSearching])

  const handleSearch = async () => {
    try {
      const artworks = await searchArtworks(debouncedQuery)
      setResults(artworks)
    } catch (error) {
      console.error('Error fetching artworks:', error)
    }
  }

  const onSubmit = (data: { query: string }) => {
    setValue('query', data.query)
    handleSearch()
  }

  return {
    register,
    handleSubmit,
    onSubmit,
    results
  }
}
