import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './style/style.css'
// import App from './components/App/App.tsx'
// import FavoritePage from './pages/FavoritePage.tsx'
import ArtItem from './components/ArtItem/ArtItem.tsx'
createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ArtItem />
  </StrictMode>
)
