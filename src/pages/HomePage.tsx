import NavBar from '../components/NavBar/NavBar.tsx'
import SearchBar from '../components/SearchBar/SearchBar.tsx'
import SpecialGallery from '../components/SpecialGallery/SpecialGallery.tsx'
import Gallery from '../components/Gallery/Gallery.tsx'
import Footer from '../components/Footer/Footer.tsx'
import { Block } from '../style/Pages.styles.ts'

function HomePage() {
  return (
    <>
      <NavBar />
      <Block>
        <SearchBar />
        <SpecialGallery />
        <Gallery title="Our special gallery" subtitle="Topics for you" />
      </Block>
      <Footer />
    </>
  )
}

export default HomePage
