import { Container } from '../../style/Container.styles.ts'
import { FooterContainer, Logo } from './Footer.ts'
import MuseumLogo from '../../assets/museum-logo(black).svg'
import ModsenLogo from '../../assets/logo modsen-02 2.svg'

const Footer = () => {
  return (
    <footer>
      <Container>
        <FooterContainer>
          <Logo>
            <a href="/">
              <img src={MuseumLogo} alt="ModsenArtMuseum" />
            </a>
          </Logo>
          <Logo>
            <a href="/">
              <img src={ModsenLogo} alt="Modsen" />
            </a>
          </Logo>
        </FooterContainer>
      </Container>
    </footer>
  )
}

export default Footer
