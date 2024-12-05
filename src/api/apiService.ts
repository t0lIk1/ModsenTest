import { useCallback } from 'react'
import { undefined } from 'zod'

import { API_URL, ARTIC_IMAGE_URL_TEMPLATE } from '@/constants/constants'
import { useHttp } from '@/hooks/useHttp'
import { Artwork, ArtworkData, ArtworkDetails, ArtworkDetailsData } from '@/types/type.ts'

export const useArtworksService = () => {
  const { request, isLoading, hasError } = useHttp()

  const getArtworks = useCallback(
    async (limit = 9): Promise<ArtworkData[]> => {
      try {
        const response = await request(`${API_URL}?limit=${limit}`)
        return response.data.map((data: ArtworkData) => ({
          id: data.id,
          title: data.title,
          artist_title: data.artist_title,
          image_url: data.image_id
            ? ARTIC_IMAGE_URL_TEMPLATE.replace('{image_id}', data.image_id)
            : undefined,
          date_display: data.date_display
        }))
      } catch (error) {
        console.error('Error fetching artworks:', error)
        throw error
      }
    },
    [request]
  )

  const getArtwork = useCallback(
    async (id: number): Promise<ArtworkDetails> => {
      try {
        const response = await request(`${API_URL}/${id}`)
        const data: ArtworkDetailsData = response.data

        const artistDisplayParts = data.artist_display.split('\n')
        const nationality = artistDisplayParts.length > 1 ? artistDisplayParts[1].trim() : 'Unknown'

        return {
          id: data.id,
          title: data.title,
          artist_title: data.artist_title,
          image_url: data.image_id
            ? ARTIC_IMAGE_URL_TEMPLATE.replace('{image_id}', data.image_id)
            : '',
          date_display: data.date_display,
          dimensions: data.dimensions,
          credit_line: data.credit_line,
          place_of_origin: data.place_of_origin,
          artist_nationality: nationality
        }
      } catch (error) {
        console.error('Error fetching artwork:', error)
        throw error
      }
    },
    [request]
  )

  const getSpecialArtworks = useCallback(
    async (limit: number = 12): Promise<Artwork[]> => {
      try {
        const response = await request(`${API_URL}?limit=${limit}&boost_rank=1`)
        return response.data.map((data: ArtworkData) => ({
          id: data.id,
          title: data.title,
          artist_title: data.artist_title,
          image_url: data.image_id
            ? ARTIC_IMAGE_URL_TEMPLATE.replace('{image_id}', data.image_id)
            : undefined,
          date_display: data.date_display
        }))
      } catch (error) {
        console.error('Error fetching special artworks:', error)
        throw error
      }
    },
    [request]
  )

  const searchArtworks = useCallback(
    async (query: string): Promise<Artwork[]> => {
      try {
        const response = await request(
          `${API_URL}/search?q=${query}&fields=date_display,id,title,image_id,artist_title,lqip`
        )

        return response.data.map((data: ArtworkData) => ({
          id: data.id,
          title: data.title,
          artist_title: data.artist_title,
          image_url: data.image_id
            ? ARTIC_IMAGE_URL_TEMPLATE.replace('{image_id}', data.image_id)
            : undefined,
          date_display: data.date_display
        }))
      } catch (e) {
        console.error('Error fetching artworks:', e)
        throw e
      }
    },
    [request]
  )

  const getArtworksByIds = useCallback(
    async (ids: number[]): Promise<Artwork[]> => {
      try {
        const response = await request(`${API_URL}?ids=${ids.join(',')}`)
        return response.data.map((data: ArtworkData) => ({
          id: data.id,
          title: data.title,
          artist_title: data.artist_title,
          image_url: data.image_id
            ? ARTIC_IMAGE_URL_TEMPLATE.replace('{image_id}', data.image_id)
            : undefined,
          date_display: data.date_display
        }))
      } catch (error) {
        console.error('Error fetching artworks:', error)
        throw error
      }
    },
    [request]
  )

  return {
    getArtworksByIds,
    getArtworks,
    getArtwork,
    getSpecialArtworks,
    searchArtworks,
    isLoading,
    hasError
  }
}
