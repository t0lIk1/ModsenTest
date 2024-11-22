import React, { useContext, useEffect, useState } from 'react'
import { Block } from '../style/Pages.styles.ts'
import Title from '../components/Title/Title.tsx'
import { FavoritesContext } from '../components/FavoriteButton/FavoritesContext'
import Gallery from '../components/Gallery/Gallery'
import FavoriteIcon from '../assets/Favorite(orange).svg'

const FavoritePage: React.FC = () => {
  // eslint-disable-next-line
  // @ts-ignore
  const { favorites } = useContext(FavoritesContext)
  const [favoriteArtworks, setFavoriteArtworks] = useState(favorites)

  useEffect(() => {
    setFavoriteArtworks(favorites)
  }, [favorites])

  return (
    <Block>
      <Title mainText="Here Are Your" subText="Favorites" icon={FavoriteIcon} />
      <Gallery title="Favorites" subtitle="Your favorite artworks" artworks={favoriteArtworks} />
    </Block>
  )
}

export default FavoritePage
