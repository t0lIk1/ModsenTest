import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'

import Home from '@/assets/home.svg'
import MuseumLogo from '@/assets/museum-logo(white).svg'
import Favorite from '@/assets/Vector.svg'
import { PATHS } from '@/constants/paths'
import { Container } from '@/style/common.styles.ts'

import { BurgerMenu, Logo, Menu, MenuItem, MenuMobile, NavBarBlock, NavBarWrapper } from './styled'

const NavBar: React.FC = () => {
  const location = useLocation()
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  return (
    <NavBarWrapper>
      <Container>
        <NavBarBlock>
          <Logo>
            <Link to={PATHS.HOME}>
              <img src={MuseumLogo} alt="Museum of Art" />
            </Link>
          </Logo>
          <BurgerMenu onClick={toggleMenu}>
            <div className={`burger-icon ${isMenuOpen ? 'open' : ''}`}>
              <span></span>
              <span></span>
              <span></span>
            </div>
          </BurgerMenu>
          <Menu>
            {location.pathname !== PATHS.HOME && (
              <MenuItem>
                <Link to={PATHS.HOME} onClick={toggleMenu}>
                  <img src={Home} alt="Home Icon" />
                  <span>Home</span>
                </Link>
              </MenuItem>
            )}
            {location.pathname !== PATHS.FAVORITES && (
              <MenuItem>
                <Link to={PATHS.FAVORITES} onClick={toggleMenu}>
                  <img src={Favorite} alt="Favorite Icon" />
                  <span>Your Favorites</span>
                </Link>
              </MenuItem>
            )}
          </Menu>
          {isMenuOpen && (
            <MenuMobile className={`${isMenuOpen ? 'open' : ''}`}>
              {location.pathname !== PATHS.HOME && (
                <MenuItem>
                  <Link to={PATHS.HOME} onClick={toggleMenu}>
                    <img src={Home} alt="Home Icon" />
                    <span>Home</span>
                  </Link>
                </MenuItem>
              )}
              {location.pathname !== PATHS.FAVORITES && (
                <MenuItem>
                  <Link to={PATHS.FAVORITES} onClick={toggleMenu}>
                    <img src={Favorite} alt="Favorite Icon" />
                    <span>Your Favorites</span>
                  </Link>
                </MenuItem>
              )}
            </MenuMobile>
          )}
        </NavBarBlock>
      </Container>
    </NavBarWrapper>
  )
}

export default NavBar
