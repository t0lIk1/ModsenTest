// src/components/ArtItem/ArtItem.tsx
import React from 'react'
import { ArtText, ArtImg, ArtTitle, ArtDetails, ArtBlock, ArtInfo } from './ArtItem.styles'
import { Container } from '../../style/Container.styles'
import { Block } from '../../style/Pages.styles'
import { FavoriteButton } from '../GalleryItem/GalleryItem.styles'
import favorite from '../../assets/Vector.svg'

interface ArtItemProps {
  artwork: {
    id: number
    title: string
    artist_title: string
    image_url?: string
    date_display: string
    dimensions: string
    credit_line: string
    repository: string
    status: string
  }
}

const ArtItem: React.FC<ArtItemProps> = ({ artwork }) => {
  return (
    <Block>
      <Container>
        <ArtBlock>
          <ArtImg>
            <img src={artwork.image_url || ''} alt={artwork.title} />
            <FavoriteButton>
              <img src={favorite} alt="Favorite" />
            </FavoriteButton>
          </ArtImg>
          <ArtInfo>
            <ArtTitle>
              <h3>{artwork.title}</h3>
              <span>{artwork.artist_title}</span>
              <span>{artwork.date_display}</span>
            </ArtTitle>
            <ArtDetails>
              <h3>Overview</h3>
              <ArtText>
                <span>
                  <strong>Artist nationality:</strong> {artwork.artist_title.split(',')[1].trim()}
                </span>
                <span>
                  <strong>Dimensions:</strong> {artwork.dimensions}
                </span>
                <span>
                  <strong>Credit Line:</strong> {artwork.credit_line}
                </span>
                <span>
                  <strong>Repository:</strong> {artwork.repository}
                </span>
                <span>{artwork.status}</span>
              </ArtText>
            </ArtDetails>
          </ArtInfo>
        </ArtBlock>
      </Container>
    </Block>
  )
}

export default ArtItem
