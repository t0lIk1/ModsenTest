import { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import { useArtworksService } from '@/services/ArtService.ts'
import { Container } from '@/style/Container.styles.ts'
import { SearchBarContainer, SearchBarInput, SearchBarInputWrapper, SearchIcon } from './styled.ts'
import Title from '@/components/Title/index.tsx'
import Gallery from '@/components/Gallery/index.tsx'
import useDebounce from '@/hooks/useDeboune.ts'
import Search from '@/assets/search.svg'
import { SearchBarProps } from '@/types/type.ts'

const schema = z.object({
  query: z.string().min(1, 'Query is required')
})

const useSearchArtworks = (setIsSearching: (isSearching: boolean) => void) => {
  const [results, setResults] = useState([])
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

const SearchBar: React.FC<SearchBarProps> = ({ setIsSearching }) => {
  const { register, handleSubmit, onSubmit, results } = useSearchArtworks(setIsSearching)

  return (
    <Container>
      <SearchBarContainer>
        <Title mainText="Let's Find Some Art" subText="Here!" />
        <SearchBarInputWrapper onSubmit={handleSubmit(onSubmit)}>
          <SearchBarInput placeholder="Search art, artist, work..." {...register('query')} />
          <SearchIcon src={Search} alt="Search Icon" />
        </SearchBarInputWrapper>
      </SearchBarContainer>
      {results.length > 0 && <Gallery artworks={results} />}
    </Container>
  )
}

export default SearchBar
