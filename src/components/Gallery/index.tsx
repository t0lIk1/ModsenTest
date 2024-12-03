import { useState } from 'react'
import { GalleryGrid, GalleryWrapper, TitleWrapper } from './styled.ts'
import GalleryItem from '@/components/GalleryItem/index.tsx'
import { Container } from '@/style/Container.styles.ts'
import NoImg from '@/assets/Group 95.svg'
import SortButton from '@/components/SortButton/index.tsx'
import { GalleryProps } from '@/types/type.ts'

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
              id={item.id}
              image_url={item.image_url || NoImg}
              title={item.title}
              artist_title={item.artist_title}
              date_display={item.date_display}
              to={`/art-item/${item.id}`}
            />
          ))}
        </GalleryGrid>
      </GalleryWrapper>
    </Container>
  )
}

export default Gallery
