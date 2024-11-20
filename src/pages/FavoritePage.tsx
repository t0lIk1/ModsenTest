import { Block } from '../style/Pages.styles.ts'
import Gallery from '../components/Gallery/Gallery.tsx'
import FavoriteIcon from '../assets/Favorite(orange).svg'
import Title from '../components/Title/Title.tsx'

const FavoritePage = () => (
  <Block>
    <Title mainText="Here Are Your" subText="Favorites" icon={FavoriteIcon} />
    <Gallery title="Your favorites list" subtitle="Saved by you" />
  </Block>
)

export default FavoritePage
