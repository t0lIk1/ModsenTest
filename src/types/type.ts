import { ReactNode } from 'react'

export interface TRoute {
  path: string
  element: ReactNode
  exact?: boolean
}

export interface GalleryProps {
  title?: string
  subtitle?: string
  artworks: ArtworkDetails[]
  sortButton?: boolean
}

export interface SearchBarProps {
  isSearching: boolean
  setIsSearching: (isSearching: boolean) => void
}

export interface PaginationProps {
  currentPage: number
  totalPages: number
  pageNumbers: number[]
  onPageChange: (page: number) => void
  onNextClick: () => void
}

export interface SortButtonProps {
  sortType: 'alphabetical' | 'date_display' | 'off'
  setSortType: React.Dispatch<React.SetStateAction<'alphabetical' | 'date_display' | 'off'>>
}

export interface Artwork {
  id: number
  title?: string
  artist_title?: string
  image_url?: string
  date_display?: string
}

export interface ArtworkData extends Artwork {
  image_id?: string
}

export interface ArtworkDetails extends Artwork {
  dimensions?: string
  credit_line?: string
  place_of_origin?: string
  artist_nationality?: string
}

export interface ArtworkDetailsData extends ArtworkDetails, ArtworkData {
  artist_display: string
}

export interface TitleProps {
  mainText: string
  subText?: string
  icon?: string
}

export interface IGalleryProps extends Artwork {
  to: string
}

export interface FavoriteButtonProps {
  itemId: number
}

export interface FavoritesContextType {
  favoriteIds: number[]
  toggleFavorite: (itemId: number) => void
  isFavorite: (itemId: number) => boolean
}

export interface HttpHook {
  isLoading: boolean
  hasError: string | null
  setLoading: (loading: boolean) => void
  request: (url: string, method?: string, body?: BodyInit | null) => Promise<any>
  clearError: () => void
}

export interface ResultState {
  favoriteArtworks: Artwork[]
  isLoading: boolean
  hasError: string | null
}
