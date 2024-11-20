import React from 'react'
import { NavBarWrapper, Logo, Menu, NavBarBlock } from './NavBar.styles'
import { Container } from '../../style/Container.styles'
import MuseumLogo from '../../assets/museum-logo(white).svg'
import Favorite from '../../assets/Vector.svg'
import Home from '../../assets/home.svg'

const NavBar: React.FC = () => {
  return (
    <NavBarWrapper>
      <Container>
        <NavBarBlock>
          <Logo>
            <a href="/">
              <img src={MuseumLogo} alt="Museum of Art" />
            </a>
          </Logo>
          <Menu>
            <a href="/">
              <img src={Home} alt="Favorite Icon" />
              <span>Home</span>
            </a>
            <a href="/favorites">
              <img src={Favorite} alt="Favorite Icon" />
              <span>Your Favorites</span>
            </a>
          </Menu>
        </NavBarBlock>
      </Container>
    </NavBarWrapper>
  )
}

export default NavBar
