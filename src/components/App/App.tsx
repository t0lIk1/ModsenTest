import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import NavBar from '../NavBar/NavBar.tsx'
import HomePage from '../../pages/HomePage.tsx'
import FavoritePage from '../../pages/FavoritePage.tsx'
import ArtItem from '../ArtItem/ArtItem.tsx'
import Footer from '../Footer/Footer.tsx'

const App: React.FC = () => {
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/favorites" element={<FavoritePage />} />
        <Route path="/art-item" element={<ArtItem />} />
      </Routes>
      <Footer />
    </Router>
  )
}

export default App
