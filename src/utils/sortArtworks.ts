import { Artwork } from '@/types/type.ts'

type SortType = 'alphabetical' | 'date_display' | 'off'

export const sortArtworks = (artworks: Artwork[], sortType: SortType): Artwork[] => {
  return [...artworks].sort((a, b) => {
    if (sortType === 'alphabetical') {
      return (a.title || '').localeCompare(b.title || '')
    } else if (sortType === 'date_display') {
      return (a.date_display || '').localeCompare(b.date_display || '')
    }
    return 0
  })
}
