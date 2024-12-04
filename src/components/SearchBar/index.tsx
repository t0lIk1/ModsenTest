import React from 'react'
import { Container } from '@/style/Container.styles'
import { SearchBarContainer, SearchBarInput, SearchBarInputWrapper, SearchIcon } from './styled'
import Title from '@/components/Title'
import Gallery from '@/components/Gallery'
import Search from '@/assets/search.svg'
import { SearchBarProps } from '@/types/type'
import { useSearchArtworks } from '@/hooks/useSearchArtworks'

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
