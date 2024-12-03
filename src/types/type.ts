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
  setIsSearching: (isSearching: boolean) => void
}

export interface PaginationProps {
  currentPage: number
  totalPages: number
  onPageChange: (page: number) => void
}

export interface SortButtonProps {
  sortType: 'alphabetical' | 'date_display'
  setSortType: React.Dispatch<React.SetStateAction<'alphabetical' | 'date_display'>>
}

export interface Artwork {
  id: number
  title?: string
  artist_title?: string
  image_url?: string
  date_display?: string
}

export interface TitleProps {
  mainText: string
  subText?: string
  icon?: string
}

export interface IGalleryProps extends Artwork {
  to: string
}

export interface ArtworkDetails {
  id: number
  title?: string
  artist_title?: string
  image_url?: string
  date_display?: string
  dimensions?: string
  credit_line?: string
  repository?: string
  place_of_origin?: string
  artist_nationality?: string
}

export interface FavoriteButtonProps {
  itemId: number
  title: string
  artist_title: string
  image_url: string
  isFavorite: boolean
}

export interface Favorite {
  id: number
  title: string
  date: string
  artist_title: string
  image_url: string
}

export interface FavoritesContextType {
  favorites: Favorite[]
  toggleFavorite: (item: Favorite) => void
  isFavorite: (itemId: number) => boolean
}
