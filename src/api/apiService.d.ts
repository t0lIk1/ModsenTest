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
export declare const useArtworksService: () => {
  getArtworks: (limit?: number) => Promise<Artwork[]>
  getArtwork: (id: number) => Promise<Artwork>
  getSpecialArtworks: () => Promise<Artwork[]>
  searchArtworks: (query: string) => Promise<Artwork[]>
  isLoading: any
  hasError: any
}
export {}
