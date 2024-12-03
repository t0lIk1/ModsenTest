// src/components/NavBar/index.tsx
import { Link, useLocation } from 'react-router-dom'
import { Logo, Menu, NavBarBlock, NavBarWrapper } from './styled'
import { Container } from '@/style/Container.styles.ts'
import MuseumLogo from '@/assets/museum-logo(white).svg'
import Favorite from '@/assets/Vector.svg'
import Home from '@/assets/home.svg'
import { PATHS } from '@/constants/paths'

const NavBar: React.FC = () => {
  const location = useLocation()

  return (
    <NavBarWrapper>
      <Container>
        <NavBarBlock>
          <Logo>
            <Link to={PATHS.HOME}>
              <img src={MuseumLogo} alt="Museum of Art" />
            </Link>
          </Logo>
          <Menu>
            {location.pathname !== PATHS.HOME && (
              <Link to={PATHS.HOME}>
                <img src={Home} alt="Home Icon" />
                <span>Home</span>
              </Link>
            )}
            {location.pathname !== PATHS.FAVORITES && (
              <Link to={PATHS.FAVORITES}>
                <img src={Favorite} alt="Favorite Icon" />
                <span>Your Favorites</span>
              </Link>
            )}
          </Menu>
        </NavBarBlock>
      </Container>
    </NavBarWrapper>
  )
}

export default NavBar
