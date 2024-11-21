import { useCallback } from 'react'
import { useHttp } from '../hooks/useHttp'

interface Artwork {
  id: number
  title: string
  artist_title: string
  image_url?: string
}

export const useArtworksService = () => {
  const API_URL = 'https://api.artic.edu/api/v1/artworks'
  const { request, isLoading, hasError } = useHttp()

  const getArtworks = useCallback(async (): Promise<void> => {
    try {
      const response = await request(`${API_URL}?limit=100`)
      const data = response.data.map((item: any) => ({
        id: item.id,
        title: item.title,
        artist_title: item.artist_title,
        image_url: item.image_id
          ? `https://www.artic.edu/iiif/2/${item.image_id}/full/843,/0/default.jpg`
          : undefined
      }))
      return data
    } catch (error) {
      console.error('Error fetching artworks:', error)
      throw error
    }
  }, [request])

  const getArtwork = useCallback(
    async (id: number): Promise<void> => {
      try {
        const response = await request(`${API_URL}/${id}`)
        const data = response.data
        const artwork: Artwork = {
          id: data.id,
          title: data.title,
          artist_title: data.artist_title,
          image_url: data.image_id
            ? `https://www.artic.edu/iiif/2/${data.image_id}/full/843,/0/default.jpg`
            : undefined
        }
        return artwork
      } catch (error) {
        console.error('Error fetching artwork:', error)
        throw error
      }
    },
    [request]
  )

  return { getArtworks, getArtwork, isLoading, hasError }
}
