import { Link } from 'react-router-dom'

import ModsenLogo from '@/assets/logo modsen-02 2.svg'
import MuseumLogo from '@/assets/museum-logo(black).svg'
import { PATHS } from '@/constants/paths.ts'
import { Container } from '@/style/Container.styles.ts'

import { FooterContainer, FooterWrapper, Logo } from './styled.ts'

const Footer: React.FC = () => {
  return (
    <FooterWrapper>
      <Container>
        <FooterContainer>
          <Logo>
            <Link to={PATHS.HOME}>
              <img src={MuseumLogo} alt="ModsenArtMuseum" />
            </Link>
          </Logo>
          <Logo>
            <Link to={PATHS.HOME}>
              <img src={ModsenLogo} alt="Modsen" />
            </Link>
          </Logo>
        </FooterContainer>
      </Container>
    </FooterWrapper>
  )
}

export default Footer
