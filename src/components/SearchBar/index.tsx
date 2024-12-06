import Search from '@/assets/search.svg'
import Gallery from '@/components/Gallery'
import Loader from '@/components/Loader/index.tsx'
import Title from '@/components/Title'
import { useSearchArtworks } from '@/hooks/useSearchArtworks'
import { Container } from '@/style/Container.styles'
import { SearchBarProps } from '@/types/type'

import {
  SearchBarContainer,
  SearchBarInput,
  SearchBarInputContainer,
  SearchBarInputWrapper,
  SearchIcon
} from './styled'

const SearchBar: React.FC<SearchBarProps> = ({ setIsSearching, isSearching }) => {
  const { register, handleSubmit, onSubmit, results, isLoading, errors, query } =
    useSearchArtworks(setIsSearching)

  return (
    <Container>
      <SearchBarContainer>
        <Title mainText="Let's Find Some Art" subText="Here!" />
        <SearchBarInputWrapper as="form" onSubmit={handleSubmit(onSubmit)}>
          <SearchBarInputContainer>
            <SearchBarInput
              placeholder="Search art, artist, work..."
              {...register('query')}
              hasError={!!errors.query}
            />
            <SearchIcon src={Search} alt="Search Icon" />
          </SearchBarInputContainer>
          {query?.length > 0 && errors.query && (
            <label style={{ color: 'red', fontSize: '12px' }}>{errors.query.message}</label>
          )}
        </SearchBarInputWrapper>
      </SearchBarContainer>
      {results.length > 0 ? (
        <Gallery artworks={results} />
      ) : isSearching && !isLoading ? (
        <Title mainText="No images" />
      ) : isLoading && results.length > 0 ? (
        <Loader />
      ) : null}
    </Container>
  )
}

export default SearchBar
