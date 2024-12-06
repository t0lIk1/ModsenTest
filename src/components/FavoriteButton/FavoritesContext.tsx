import { createContext, ReactNode, useCallback, useEffect, useMemo, useState } from 'react'

import { FavoritesContextType } from '@/types/type.ts'

const FavoritesContext = createContext<FavoritesContextType | null>(null)

const FavoritesProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [favoriteIds, setFavoriteIds] = useState<number[]>(() => {
    try {
      const storedFavoriteIds = localStorage.getItem('favoriteIds')
      return storedFavoriteIds ? JSON.parse(storedFavoriteIds) : []
    } catch (error) {
      console.error('Error reading favoriteIds from localStorage:', error)
      return []
    }
  })

  useEffect(() => {
    try {
      localStorage.setItem('favoriteIds', JSON.stringify(favoriteIds))
    } catch (error) {
      console.error('Error saving favoriteIds to localStorage:', error)
    }
  }, [favoriteIds])

  const toggleFavorite = useCallback((itemId: number) => {
    setFavoriteIds((prevFavoriteIds) =>
      prevFavoriteIds.includes(itemId)
        ? prevFavoriteIds.filter((id) => id !== itemId)
        : [...prevFavoriteIds, itemId]
    )
  }, [])

  const contextValue = useMemo(
    () => ({
      favoriteIds,
      toggleFavorite,
      isFavorite: (itemId: number) => favoriteIds.includes(itemId)
    }),
    [favoriteIds, toggleFavorite]
  )

  return <FavoritesContext.Provider value={contextValue}>{children}</FavoritesContext.Provider>
}

export { FavoritesContext, FavoritesProvider }
