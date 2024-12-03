import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import NavBar from '@/components/NavBar/index.tsx'
import Footer from '@/components/Footer/index.tsx'
import { FavoritesProvider } from '@/components/FavoriteButton/FavoritesContext.tsx'
import ROUTES from '@/constants/routes.tsx'
import { TRoute } from '@/types/type.ts'

const App: React.FC = () => {
  return (
    <Router>
      <FavoritesProvider>
        <NavBar />
        <Routes>
          {ROUTES.map((route: TRoute) => (
            <Route key={route.path} path={route.path} element={route.element} />
          ))}
        </Routes>
        <Footer />
      </FavoritesProvider>
    </Router>
  )
}

export default App
