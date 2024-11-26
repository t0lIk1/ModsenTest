import React, { useState } from 'react'
import { GalleryGrid, GalleryWrapper, TitleWrapper } from './Gallery.styles'
import GalleryItem from '../GalleryItem/GalleryItem'
import { Container } from '../../style/Container.styles'
import NoImg from '../../assets/Group 95.svg'
import SortButton from '../SortButton/SortButton.tsx'

interface GalleryProps {
  title?: string
  subtitle?: string
  artworks: Artwork[]
  sortButton?: boolean
}

interface Artwork {
  id: number
  title: string
  artist_title: string
  image_url?: string
  date_display?: string
}

const Gallery: React.FC<GalleryProps> = ({ title, subtitle, artworks, sortButton }) => {
  const [sortType, setSortType] = useState<'alphabetical' | 'date_display' | 'off'>('off')

  const sortedArtworks = [...artworks].sort((a, b) => {
    if (sortType === 'alphabetical') {
      return (a.title || '').localeCompare(b.title || '')
    } else if (sortType === 'date_display') {
      return (a.date_display || '').localeCompare(b.date_display || '')
    }
    return 0
  })
  return (
    <Container>
      <GalleryWrapper>
        <TitleWrapper>
          <span>{subtitle}</span>
          <h3>{title}</h3>
        </TitleWrapper>
        {sortButton ? <SortButton sortType={sortType} setSortType={setSortType} /> : null}
        <GalleryGrid>
          {sortedArtworks.map((item) => (
            <GalleryItem
              key={item.id}
              itemId={item.id}
              img={item.image_url || NoImg}
              title={item.title}
              name={item.artist_title}
              dateDisplay={item.date_display}
              to={`/art-item/${item.id}`}
            />
          ))}
        </GalleryGrid>
      </GalleryWrapper>
    </Container>
  )
}

export default Gallery
