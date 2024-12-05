// Gallery.tsx
import React, { useState } from 'react'

import NoImg from '@/assets/Group 95.svg'
import GalleryItem from '@/components/GalleryItem/index.tsx'
import SortButton from '@/components/SortButton/index.tsx'
import { PATHS } from '@/constants/paths.ts'
import { Container } from '@/style/Container.styles.ts'
import { GalleryProps } from '@/types/type.ts'
import { sortArtworks } from '@/utils/sortArtworks.ts'

import { GalleryGrid, GalleryWrapper, TitleWrapper } from './styled.ts'

const Gallery: React.FC<GalleryProps> = ({ title, subtitle, artworks, sortButton }) => {
  const [sortType, setSortType] = useState<'alphabetical' | 'date_display' | 'off'>('off')

  const sortedArtworks = sortArtworks(artworks, sortType)

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
              id={item.id}
              image_url={item.image_url || NoImg}
              title={item.title}
              artist_title={item.artist_title}
              date_display={item.date_display}
              to={PATHS.ART_ITEM.replace(':id', String(item.id))}
            />
          ))}
        </GalleryGrid>
      </GalleryWrapper>
    </Container>
  )
}

export default Gallery
