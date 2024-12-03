import { useCallback } from 'react'
import { useHttp } from '@/hooks/useHttp.ts'

interface Artwork {
  id: number
  title: string
  artist_title: string
  image_url?: string
  date_display?: string
  dimensions?: string
  credit_line?: string
  place_of_origin?: string
  artist_nationality?: string
  date_end?: number
}

export const useArtworksService = () => {
  // Art Institute of Chicago API
  const API_URL = 'https://api.artic.edu/api/v1/artworks'
  const { request, isLoading, hasError } = useHttp()

  const getArtworks = useCallback(
    async (limit = 9): Promise<Artwork[]> => {
      try {
        const response = await request(`${API_URL}?limit=${limit}`)
        const data = response.data.map((item: any) => ({
          id: item.id,
          title: item.title,
          artist_title: item.artist_title,
          image_url: item.image_id
            ? `https://www.artic.edu/iiif/2/${item.image_id}/full/843,/0/default.jpg`
            : undefined,
          date_display: item.date_display
        }))
        return data
      } catch (error) {
        console.error('Error fetching artworks:', error)
        throw error
      }
    },
    [request]
  )

  const getArtwork = useCallback(
    async (id: number): Promise<Artwork> => {
      try {
        const response = await request(`${API_URL}/${id}`)
        const data = response.data

        const artistDisplayParts = data.artist_display.split('\n')
        const nationality = artistDisplayParts.length > 1 ? artistDisplayParts[1].trim() : 'Unknown'

        const artwork: Artwork = {
          id: data.id,
          title: data.title,
          artist_title: data.artist_title,
          image_url: data.image_id
            ? `https://www.artic.edu/iiif/2/${data.image_id}/full/843,/0/default.jpg`
            : undefined,
          date_display: data.date_display,
          dimensions: data.dimensions,
          credit_line: data.credit_line,
          place_of_origin: data.place_of_origin,
          artist_nationality: nationality
        }

        return artwork
      } catch (error) {
        console.error('Error fetching artwork:', error)
        throw error
      }
    },
    [request]
  )

  const getSpecialArtworks = useCallback(async (): Promise<Artwork[]> => {
    try {
      const response = await request(`${API_URL}?limit=100&boost_rank=1`)
      const data = response.data.map((item: any) => {
        return {
          id: item.id,
          title: item.title,
          artist_title: item.artist_title,
          image_url: item.image_id
            ? `https://www.artic.edu/iiif/2/${item.image_id}/full/843,/0/default.jpg`
            : undefined,
          date_display: item.date_display
        }
      })

      return data
    } catch (error) {
      console.error('Error fetching special artworks:', error)
      throw error
    }
  }, [request])

  const searchArtworks = useCallback(
    async (query: string): Promise<Artwork[]> => {
      try {
        const response = await request(
          `${API_URL}/search?q=${query}&fields=date_display,id,title,image_id,artist_title,lqip`
        )
        const data = response.data

        const artworks = data.map((item: any) => ({
          id: item.id,
          title: item.title,
          artist_title: item.artist_title,
          image_url: item.image_id
            ? `https://www.artic.edu/iiif/2/${item.image_id}/full/843,/0/default.jpg`
            : item.thumbnail?.lqip || undefined, // Используем lqip для Data URL, если image_id недоступен
          date_display: item.date_display
        }))

        return artworks
      } catch (e) {
        console.error('Error fetching artworks:', e)
        throw e
      }
    },
    [request]
  )

  return { getArtworks, getArtwork, getSpecialArtworks, searchArtworks, isLoading, hasError }
}
