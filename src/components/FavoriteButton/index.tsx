import React, { useCallback, useContext, useMemo } from 'react'

import favoriteIcon from '@/assets/Vector.svg'
import { FavoriteButtonProps } from '@/types/type.ts'

import { FavoritesContext } from './FavoritesContext'
import { FavoriteBut } from './styled'

const FavoriteButton: React.FC<FavoriteButtonProps> = ({ itemId }) => {
  const context = useContext(FavoritesContext)

  if (!context) {
    throw new Error('FavoriteButton must be used within a FavoritesProvider')
  }

  const { toggleFavorite, isFavorite } = context
  const isFavored = useMemo(() => isFavorite(itemId), [itemId, isFavorite])

  const handleClick = useCallback(
    (e: React.MouseEvent<HTMLButtonElement>) => {
      e.stopPropagation()
      toggleFavorite(itemId)
    },
    [itemId, toggleFavorite]
  )

  return (
    <FavoriteBut onClick={handleClick} aria-pressed={isFavored} aria-label="Toggle Favorite">
      <img
        src={favoriteIcon}
        alt={isFavored ? 'Remove from favorites' : 'Add to favorites'}
        style={{
          filter: isFavored ? 'grayscale(0%)' : 'grayscale(100%)',
          transition: 'filter 0.3s ease-in-out'
        }}
      />
    </FavoriteBut>
  )
}

export default FavoriteButton
