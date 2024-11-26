import React, { createContext, ReactNode, useEffect, useState } from 'react'

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

const FavoritesContext = createContext<FavoritesContextType | undefined>(undefined)

const FavoritesProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [favorites, setFavorites] = useState<Favorite[]>(() => {
    const storedFavorites = localStorage.getItem('favorites')
    return storedFavorites ? JSON.parse(storedFavorites) : []
  })

  useEffect(() => {
    localStorage.setItem('favorites', JSON.stringify(favorites))
  }, [favorites])

  const toggleFavorite = (item: Favorite) => {
    setFavorites((prevFavorites) => {
      const isFavorite = prevFavorites.some((fav) => fav.id === item.id)
      return isFavorite
        ? prevFavorites.filter((fav) => fav.id !== item.id)
        : [...prevFavorites, item]
    })
  }

  const isFavorite = (itemId: number) => {
    return favorites.some((fav) => fav.id === itemId)
  }

  return (
    <FavoritesContext.Provider value={{ favorites, toggleFavorite, isFavorite }}>
      {children}
    </FavoritesContext.Provider>
  )
}

export { FavoritesContext, FavoritesProvider }
