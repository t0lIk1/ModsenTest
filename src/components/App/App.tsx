// App.tsx
import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import NavBar from '../NavBar/NavBar.tsx'
import HomePage from '../../pages/HomePage.tsx'
import FavoritePage from '../../pages/FavoritePage.tsx'
import Footer from '../Footer/Footer.tsx'
import ArtItem from '../ArtItem/ArtItem.tsx'
import { FavoritesProvider } from '../FavoriteButton/FavoritesContext.tsx' // Импортируем провайдер контекста

const App: React.FC = () => {
  return (
    <Router>
      <FavoritesProvider>
        <NavBar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/favorites" element={<FavoritePage />} />
          <Route path="/art-item/:id" element={<ArtItem />} />
        </Routes>
        <Footer />
      </FavoritesProvider>
    </Router>
  )
}

export default App
