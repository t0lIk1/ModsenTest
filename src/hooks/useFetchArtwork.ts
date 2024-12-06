import { useCallback, useEffect, useState } from 'react'

import { useArtworksService } from '@/api/apiService.ts'
import { Artwork, ArtworkDetails } from '@/types/type'

export const useFetchArtworks = (id?: number, type: string = 'default') => {
  const { isLoading, hasError, getArtwork, getArtworks, getSpecialArtworks } = useArtworksService()
  const [artworks, setArtworks] = useState<Artwork[]>([])
  const [artwork, setArtwork] = useState<ArtworkDetails>()

  const fetchData = useCallback(async () => {
    try {
      if (id !== undefined) {
        const data = await getArtwork(id)
        setArtwork(data)
      } else {
        const data = type === 'special' ? await getSpecialArtworks(12, 101) : await getArtworks()
        setArtworks(data)
      }
    } catch (e) {
      console.error(e)
    }
  }, [id, type, getArtwork, getArtworks, getSpecialArtworks])

  useEffect(() => {
    fetchData()
  }, [fetchData])

  return { isLoading, hasError, artworks, artwork }
}
