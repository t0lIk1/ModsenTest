import React from 'react'
import { GalleryWrapper, TitleWrapper, GalleryGrid } from './Gallery.styles'
import GalleryItem from '../GalleryItem/GalleryItem'
import { Container } from '../../style/Container.styles'
import art from '../../assets/img/image 1.png'
import { Link } from 'react-router-dom'

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
            <Link to="/art-item" key={index}>
              <GalleryItem
                img={item.img}
                title={item.title}
                name={item.name}
                status={item.status}
              />
            </Link>
          ))}
        </GalleryGrid>
      </GalleryWrapper>
    </Container>
  )
}

export default Gallery
