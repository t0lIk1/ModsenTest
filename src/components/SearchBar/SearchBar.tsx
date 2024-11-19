import {
  HomeHeader,
  SearchBarContainer,
  SearchBarInputWrapper,
  SearchBarInput,
  SearchIcon
} from './SearchBar.styles.ts'
import { Container } from '../../style/Container.styles.ts'
import Search from '../../assets/search.svg'

const SearchBar = () => {
  return (
    <Container>
      <SearchBarContainer>
        <HomeHeader>
          Let`&aposs Find Some <span>Art</span> Here!
        </HomeHeader>
        <SearchBarInputWrapper>
          <SearchBarInput placeholder="Search art, artist, work..." />
          <SearchIcon src={Search} alt="Search Icon" />
        </SearchBarInputWrapper>
      </SearchBarContainer>
    </Container>
  )
}

export default SearchBar
