import { Container } from '../../style/Container.styles.ts'
import { FooterContainer, Logo, FooterWrapper } from './Footer.styles.ts'
import MuseumLogo from '../../assets/museum-logo(black).svg'
import ModsenLogo from '../../assets/logo modsen-02 2.svg'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <FooterWrapper>
      <Container>
        <FooterContainer>
          <Logo>
            <Link to="/">
              <img src={MuseumLogo} alt="ModsenArtMuseum" />
            </Link>
          </Logo>
          <Logo>
            <Link to="/">
              <img src={ModsenLogo} alt="Modsen" />
            </Link>
          </Logo>
        </FooterContainer>
      </Container>
    </FooterWrapper>
  )
}

export default Footer
