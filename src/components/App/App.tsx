import NavBar from '../NavBar/NavBar'
import { Block } from './App.styles.ts'
import Footer from '../Footer/Footer.tsx'
import SpecialGallery from '../SpecialGallery/SpecialGallery.tsx'
const App = () => {
  return (
    <Block>
      <NavBar />
      <SpecialGallery />
      <Footer />
    </Block>
  )
}

export default App
