import {
  SearchBarContainer,
  SearchBarInputWrapper,
  SearchBarInput,
  SearchIcon
} from './SearchBar.styles.ts'
import { Container } from '../../style/Container.styles.ts'
import Search from '../../assets/search.svg'
import Title from '../Title/Title.tsx'
const SearchBar = () => {
  return (
    <Container>
      <SearchBarContainer>
        <Title mainText="Let's Find Some Art" subText="Here!" />
        <SearchBarInputWrapper>
          <SearchBarInput placeholder="Search art, artist, work..." />
          <SearchIcon src={Search} alt="Search Icon" />
        </SearchBarInputWrapper>
      </SearchBarContainer>
    </Container>
  )
}

export default SearchBar
