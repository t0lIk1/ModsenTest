import { useCallback, useContext, useEffect, useState } from 'react'

import { useArtworksService } from '@/api/apiService.ts'
import { FavoritesContext } from '@/components/FavoriteButton/FavoritesContext.tsx'
import { Artwork, ResultState } from '@/types/type.ts'

export const useFetchFavoriteArtworks = (): ResultState => {
  const { getArtworksByIds, isLoading, hasError } = useArtworksService()
  const [favoriteArtworks, setFavoriteArtworks] = useState<Artwork[]>([])
  const context = useContext(FavoritesContext)

  if (!context) {
    throw new Error('useFetchFavoriteArtworks must be used within a FavoritesProvider')
  }

  const { favoriteIds } = context

  const fetchFavoriteArtworks = useCallback(async () => {
    try {
      const data = await getArtworksByIds(favoriteIds)
      setFavoriteArtworks(data)
    } catch (error) {
      console.error('Error fetching favorite artworks:', error)
      setFavoriteArtworks([])
    }
  }, [getArtworksByIds, favoriteIds]) // Добавляем favoriteIds как зависимость

  useEffect(() => {
    fetchFavoriteArtworks()
  }, [fetchFavoriteArtworks])

  return { favoriteArtworks, isLoading, hasError }
}
