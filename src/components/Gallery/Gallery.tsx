// Gallery.tsx
import React from 'react'
import { GalleryWrapper, TitleWrapper, GalleryGrid } from './Gallery.styles'
import GalleryItem from '../GalleryItem/GalleryItem'
import { Container } from '../../style/Container.styles'
import art from '../../assets/img/image 1.png'

interface GalleryProps {
  title: string
  subtitle: string
}

const data = [
  { img: art, title: 'Charles V bust length...', name: 'Giovanni Britto', status: 'Public' },
  { img: art, title: 'Charles V bust length...', name: 'Giovanni Britto', status: 'Public' },
  { img: art, title: 'Charles V bust length...', name: 'Giovanni Britto', status: 'Public' },
  { img: art, title: 'Charles V bust length...', name: 'Giovanni Britto', status: 'Public' },
  { img: art, title: 'Charles V bust length...', name: 'Giovanni Britto', status: 'Public' },
  { img: art, title: 'Charles V bust length...', name: 'Giovanni Britto', status: 'Public' },
  { img: art, title: 'Charles V bust length...', name: 'Giovanni Britto', status: 'Public' },
  { img: art, title: 'Charles V bust length...', name: 'Giovanni Britto', status: 'Public' },
  { img: art, title: 'Charles V bust length...', name: 'Giovanni Britto', status: 'Public' }
]

interface GalleryProps {
  title: string
  subtitle: string
}

const Gallery: React.FC<GalleryProps> = ({ title, subtitle }) => {
  return (
    <Container>
      <GalleryWrapper>
        <TitleWrapper>
          <span>{subtitle}</span>
          <h3>{title}</h3>
        </TitleWrapper>
        <GalleryGrid>
          {data.map((item, index) => (
            <GalleryItem
              key={index}
              img={item.img}
              title={item.title}
              name={item.name}
              status={item.status}
            />
          ))}
        </GalleryGrid>
      </GalleryWrapper>
    </Container>
  )
}

export default Gallery
