import React from 'react'
interface FavoriteButtonProps {
  itemId: number
  title: string
  artist_title: string
  image_url: string
  isFavorite: boolean
}
declare const FavoriteButton: React.FC<FavoriteButtonProps>
export default FavoriteButton
