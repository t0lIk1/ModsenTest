import React from 'react'
import { Nav, Logo, Menu, Block } from './NavBar.styles'
import { Container } from '../../style/Container.styles.ts'
import MuseumLogo from '../../assets/museum-logo(white).svg'
import Favorite from '../../assets/Vector.svg'

const NavBar: React.FC = () => {
  return (
    <header>
      <Nav>
        <Container>
          <Block>
            <Logo>
              <a href="/">
                <img src={MuseumLogo} alt="Museum of Art" />
              </a>
            </Logo>
            <Menu>
              <a href="/">Home</a>
              <a href="/favorites">
                <img src={Favorite} alt="" />
                <span>Your Favorites</span>
              </a>
            </Menu>
          </Block>
        </Container>
      </Nav>
    </header>
  )
}

export default NavBar
