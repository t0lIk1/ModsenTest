import { ReactNode } from 'react'
interface Favorite {
  id: number
  title: string
  date: string
  artist_title: string
  image_url: string
}
interface FavoritesContextType {
  favorites: Favorite[]
  toggleFavorite: (item: Favorite) => void
  isFavorite: (itemId: number) => boolean
}
declare const FavoritesContext: import('react').Context<FavoritesContextType | undefined>
declare const FavoritesProvider: React.FC<{
  children: ReactNode
}>
export { FavoritesContext, FavoritesProvider }
