import SearchBar from '../components/SearchBar/SearchBar.tsx'
import SpecialGallery from '../components/SpecialGallery/SpecialGallery.tsx'
import Gallery from '../components/Gallery/Gallery.tsx'
import { Block } from '../style/Pages.styles.ts'

function HomePage() {
  return (
    <>
      <Block>
        <SearchBar />
        <SpecialGallery />
        <Gallery title="Our special gallery" subtitle="Topics for you" />
      </Block>
    </>
  )
}

export default HomePage
