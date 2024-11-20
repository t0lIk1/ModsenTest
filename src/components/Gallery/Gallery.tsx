// Gallery.tsx
import React from 'react'
import { GallerySection, GalleryWrapper, TitleWrapper, GalleryGrid } from './Gallery.styles'
import GalleryItem from '../GalleryItem/GalleryItem'
import { Container } from '../../style/Container.styles'
import art from '../../assets/img/image 1.png'

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

const Gallery: React.FC = () => {
  return (
    <GallerySection>
      <Container>
        <GalleryWrapper>
          <TitleWrapper>
            <span>Here some more</span>
            <h3>Other works for you</h3>
          </TitleWrapper>
          <GalleryGrid>
            {data.map((item, index) => (
              // <a  href="#">
              <GalleryItem
                key={index}
                img={item.img}
                title={item.title}
                name={item.name}
                status={item.status}
              />
              // </a>
            ))}
          </GalleryGrid>
        </GalleryWrapper>
      </Container>
      {/*<button>see more</button>*/}
    </GallerySection>
  )
}

export default Gallery
