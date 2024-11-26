import React, { useContext } from 'react'
import { FavoriteBut } from './FavoriteButton.styles.ts'
import favorite from '../../assets/Vector.svg'
import { FavoritesContext } from './FavoritesContext' // Импортируем контекст

interface FavoriteButtonProps {
  itemId: number
  title: string
  artist_title: string
  image_url: string
  isFavorite: boolean
}

const FavoriteButton: React.FC<FavoriteButtonProps> = ({
  itemId,
  title,
  artist_title,
  image_url
}) => {
  const context = useContext(FavoritesContext)

  if (!context) {
    throw new Error('FavoriteButton must be used within a FavoritesProvider')
  }

  const { toggleFavorite, isFavorite } = context

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
