import React from 'react'
import { Link } from 'react-router-dom'
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
            <Link to="/">
              <img src={MuseumLogo} alt="Museum of Art" />
            </Link>
          </Logo>
          <Menu>
            <Link to="/">
              <img src={Home} alt="Home Icon" />
              <span>Home</span>
            </Link>
            <Link to="/favorites">
              <img src={Favorite} alt="Favorite Icon" />
              <span>Your Favorites</span>
            </Link>
          </Menu>
        </NavBarBlock>
      </Container>
    </NavBarWrapper>
  )
}

export default NavBar
