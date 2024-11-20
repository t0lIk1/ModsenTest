import NavBar from '../NavBar/NavBar'
import { Block } from './App.styles.ts'
import Footer from '../Footer/Footer.tsx'
import SpecialGallery from '../SpecialGallery/SpecialGallery.tsx'
import Gallery from '../Gallery/Gallery.tsx'
import SearchBar from '../SearchBar/SearchBar.tsx'
const App = () => {
  return (
    <Block>
      <NavBar />
      <SearchBar />
      <SpecialGallery />
      <Gallery />
      <Gallery />
      <Footer />
    </Block>
  )
}

export default App
