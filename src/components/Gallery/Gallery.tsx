import React from 'react'
import { GalleryWrapper, TitleWrapper, GalleryGrid } from './Gallery.styles'
import GalleryItem from '../GalleryItem/GalleryItem'
import { Container } from '../../style/Container.styles'
import NoImg from '../../assets/Group 95.svg'

interface GalleryProps {
  title: string
  subtitle: string
  artworks: Artwork[]
}

interface Artwork {
  id: number
  title: string
  artist_title: string
  image_url?: string
}

const Gallery: React.FC<GalleryProps> = ({ title, subtitle, artworks }) => {
  return (
    <Container>
      <GalleryWrapper>
        <TitleWrapper>
          <span>{subtitle}</span>
          <h3>{title}</h3>
        </TitleWrapper>
        <GalleryGrid>
          {artworks.map((item) => (
            <GalleryItem
              key={item.id}
              itemId={item.id}
              img={item.image_url || NoImg}
              title={item.title}
              name={item.artist_title}
              status="Public"
              to={`/art-item/${item.id}`}
            />
          ))}
        </GalleryGrid>
      </GalleryWrapper>
    </Container>
  )
}

export default Gallery
