import { useContext, useEffect, useState } from 'react'
import { Block } from '@/style/Pages.styles.ts'
import Title from '@/components/Title/index.tsx'
import { FavoritesContext } from '@/components/FavoriteButton/FavoritesContext.tsx'
import Gallery from '@/components/Gallery/index.tsx'
import FavoriteIcon from '@/assets/Favorite(orange).svg'

const FavoritePage: React.FC = () => {
  const { favorites } = useContext(FavoritesContext)
  const [favoriteArtworks, setFavoriteArtworks] = useState(favorites)

  useEffect(() => {
    setFavoriteArtworks(favorites)
  }, [favorites])

  return (
    <Block>
      <Title mainText="Here Are Your" subText="Favorites" icon={FavoriteIcon} />
      {favoriteArtworks.length > 0 ? (
        <Gallery title="Favorites" subtitle="Your favorite artworks" artworks={favoriteArtworks} />
      ) : null}
    </Block>
  )
}

export default FavoritePage
