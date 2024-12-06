import { zodResolver } from '@hookform/resolvers/zod'
import { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'
import { z } from 'zod'

import { useArtworksService } from '@/api/apiService.ts'
import useDebounce from '@/hooks/useDeboune.ts'
import { Artwork } from '@/types/type.ts'

const schema = z.object({
  query: z
    .string()
    .optional()
    .refine((value) => !value || value.length >= 2, {
      message: 'Query must be at least 2 characters long'
    })
})

export const useSearchArtworks = (setIsSearching: (isSearching: boolean) => void) => {
  const [results, setResults] = useState<Artwork[]>([])
  const { searchArtworks, isLoading } = useArtworksService()

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
    setValue
  } = useForm({
    mode: 'onChange',
    resolver: zodResolver(schema),
    defaultValues: {
      query: ''
    }
  })

  const query = watch('query')
  const debouncedQuery = useDebounce(query || '', 700)

  useEffect(() => {
    if (debouncedQuery && !errors.query && query.length > 0) {
      handleSearch()
      setIsSearching(true)
    } else {
      setIsSearching(false)
      setResults([])
    }
  }, [debouncedQuery, errors.query, setIsSearching])

  const handleSearch = async () => {
    try {
      const artworks = await searchArtworks(debouncedQuery)
      setResults(artworks)
    } catch (error) {
      console.error('Error fetching artworks:', error)
    }
  }

  const onSubmit = async (data: { query: string }) => {
    if (!errors.query) {
      setValue('query', data.query)
      await handleSearch()
    }
  }

  return {
    register,
    handleSubmit,
    onSubmit,
    results,
    isLoading,
    errors,
    query
  }
}
