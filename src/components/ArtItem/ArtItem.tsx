import React from 'react'
import { ArtText, ArtImg, ArtTitle, ArtDetails, ArtBlock, ArtInfo } from './ArtItem.styles'
import { Container } from '../../style/Container.styles'
import { Block } from '../../style/Pages.styles'
import { FavoriteButton } from '../GalleryItem/GalleryItem.styles'
import favorite from '../../assets/Vector.svg'
import image from '../../assets/img/image 2.png'
import NavBar from '../NavBar/NavBar.tsx'
import Footer from '../Footer/Footer.tsx'

const ArtItem: React.FC = () => {
  return (
    <>
      <NavBar />
      <Block>
        <Container>
          <ArtBlock>
            <ArtImg>
              <img src={image} alt="" />
              <FavoriteButton>
                <img src={favorite} alt="" />
              </FavoriteButton>
            </ArtImg>
            <ArtInfo>
              <ArtTitle>
                <h3>Charles V, bust length, holding a sword, facing right</h3>
                <span>Giovanni Britto</span>
                <span>1535–45</span>
              </ArtTitle>
              <ArtDetails>
                <h3>Overview</h3>
                <ArtText>
                  <span>
                    <strong>Artist nacionality:</strong> German
                  </span>
                  <span>
                    <strong>Dimensions:</strong> Sheet: 19 3/8 × 13 11/16 in. (49.2 × 34.8 cm)
                  </span>
                  <span>
                    <strong>Credit Line:</strong> Rogers Fund, 1917
                  </span>
                  <span>
                    <strong>Repository:</strong> Metropolitan Museum of Art, New York, NY
                  </span>
                  <span>Public</span>
                </ArtText>
              </ArtDetails>
            </ArtInfo>
          </ArtBlock>
        </Container>
      </Block>
      <Footer />
    </>
  )
}

export default ArtItem
