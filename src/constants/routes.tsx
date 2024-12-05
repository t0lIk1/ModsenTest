// src/constants/routes.ts
import ArtItemPage from '@/components/ArtItem/index.tsx'
import { PATHS } from '@/constants/paths.ts'
import FavoritePage from '@/pages/FavoritePage.tsx'
import HomePage from '@/pages/HomePage.tsx'

const ROUTES = [
  { path: PATHS.HOME, element: <HomePage /> },
  { path: PATHS.FAVORITES, element: <FavoritePage /> },
  { path: PATHS.ART_ITEM, element: <ArtItemPage /> }
]

export default ROUTES
