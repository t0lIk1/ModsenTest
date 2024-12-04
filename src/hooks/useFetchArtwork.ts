import { useCallback, useEffect, useState } from 'react'
import { useArtworksService } from '@/api/apiService.ts'
import { Artwork, ArtworkDetails } from '@/types/type'

export const useFetchArtworks = (id?: number, type: string = 'default') => {
  const { isLoading, hasError, getArtwork, getArtworks, getSpecialArtworks } = useArtworksService()
  const [artworks, setArtworks] = useState<Artwork[] | ArtworkDetails | null>(null)

  const fetchData = useCallback(async () => {
    try {
      let data
      if (id !== undefined) {
        data = await getArtwork(id)
      } else {
        data = type === 'special' ? await getSpecialArtworks() : await getArtworks()
      }
      setArtworks(data)
    } catch (e) {
      console.error(e)
    }
  }, [id, type, getArtwork, getArtworks, getSpecialArtworks])

  useEffect(() => {
    fetchData()
  }, [fetchData])

  return { isLoading, hasError, artworks }
}
