import ArtItemPage from '@/components/ArtItem/index.tsx'
import NotFound from '@/components/NotFound'
import { PATHS } from '@/constants/paths.ts'
import FavoritePage from '@/pages/FavoritePage.tsx'
import HomePage from '@/pages/HomePage.tsx'

const ROUTES = [
  { path: PATHS.HOME, element: <HomePage /> },
  { path: PATHS.FAVORITES, element: <FavoritePage /> },
  { path: PATHS.ART_ITEM, element: <ArtItemPage /> },
  { path: PATHS.NOT_FOUNDS, element: <NotFound /> }
]

export default ROUTES
