import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './style/style.css'
// import App from './components/App/App.tsx'
import HomePage from './pages/HomePage.tsx'
// import FavoritePage from './pages/FavoritePage.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <HomePage />
  </StrictMode>
)
