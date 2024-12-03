// src/constants/routes.ts
import HomePage from '@/pages/HomePage.tsx'
import FavoritePage from '@/pages/FavoritePage.tsx'
import ArtItemPage from '@/components/ArtItem/index.tsx'
import { PATHS } from '@/constants/paths.ts'

const ROUTES = [
  { path: PATHS.HOME, element: <HomePage /> },
  { path: PATHS.FAVORITES, element: <FavoritePage /> },
  { path: PATHS.ART_ITEM, element: <ArtItemPage /> }
]

export default ROUTES
