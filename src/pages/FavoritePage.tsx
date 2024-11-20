import { Block } from '../style/Pages.styles.ts'
import Footer from '../components/Footer/Footer.tsx'
import NavBar from '../components/NavBar/NavBar.tsx'
import Gallery from '../components/Gallery/Gallery.tsx'
import FavoriteIcon from '../assets/Favorite(orange).svg'
import Title from '../components/Title/Title.tsx'

const FavoritePage = () => (
  <>
    <NavBar />
    <Block>
      <Title mainText="Here Are Your" subText="Favorites" icon={FavoriteIcon} />
      <Gallery title="Your favorites list" subtitle="Saved by you" />
    </Block>
    <Footer />
  </>
)

export default FavoritePage
