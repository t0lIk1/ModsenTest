import FavoriteIcon from '@/assets/Favorite(orange).svg'
import Gallery from '@/components/Gallery'
import Loader from '@/components/Loader'
import Title from '@/components/Title'
import { useFetchFavoriteArtworks } from '@/hooks/useFetchFavoriteArtworks' // Хук
import { Block } from '@/style/Pages.styles'

const FavoritePage: React.FC = () => {
  const { favoriteArtworks, isLoading, hasError } = useFetchFavoriteArtworks()

  if (isLoading) return <Loader />
  if (hasError) return <p>Error loading favorite artworks.</p>

  return (
    <Block>
      <Title mainText="Here Are Your" subText="Favorites" icon={FavoriteIcon} />
      <Gallery title="Favorites" subtitle="Your favorite artworks" artworks={favoriteArtworks} />
    </Block>
  )
}

export default FavoritePage
