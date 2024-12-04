import React, { useContext } from 'react'
import { FavoriteBut } from './styled.ts'
import favorite from '@/assets/Vector.svg'
import { FavoritesContext } from './FavoritesContext'
import { FavoriteButtonProps } from '@/types/type.ts'

const FavoriteButton: React.FC<FavoriteButtonProps> = ({
  itemId,
  title,
  artist_title,
  image_url
}) => {
  const { toggleFavorite, isFavorite } = useContext(FavoritesContext)

  const handleToggleFavorite = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation()
    const artwork = { id: itemId, title, artist_title, image_url }
    toggleFavorite(artwork)
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
