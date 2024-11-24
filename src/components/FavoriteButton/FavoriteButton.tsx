import React, { useContext } from 'react'
import { FavoriteBut } from './FavoriteButton.styles.ts'
import favorite from '../../assets/Vector.svg'
import { FavoritesContext } from './FavoritesContext' // Импортируем контекст

interface FavoriteButtonProps {
  itemId: string
  title: string
  artist_title: string
  image_url: string
}

const FavoriteButton: React.FC<FavoriteButtonProps> = ({
  itemId,
  title,
  artist_title,
  image_url
}) => {
  // eslint-disable-next-line
  // @ts-ignore
  const { toggleFavorite, isFavorite } = useContext(FavoritesContext)

  const handleToggleFavorite = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation()
    const artwork = { id: itemId, title, artist_title, image_url }
    toggleFavorite(artwork)
    console.log(typeof itemId)
  }
  return (
    <FavoriteBut onClick={handleToggleFavorite}>
      <img
        src={favorite}
        alt="Favorite"
        style={{ filter: isFavorite(itemId) ? 'grayscale(0%)' : 'grayscale(100%)' }}
      />
    </FavoriteBut>
  )
}

export default FavoriteButton
