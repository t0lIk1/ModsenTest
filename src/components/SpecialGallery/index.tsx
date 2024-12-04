import { useState } from 'react'
import { Container } from '@/style/Container.styles.ts'
import {
  GalleryGrid,
  GallerySection,
  GalleryWrapper,
  PaginationWrapper,
  TitleWrapper
} from './styled.ts'
import SpecialGalleryItem from '@/components/SpecialGalleryItem/index.tsx'
import Pagination from '@/components/Pagination/index.tsx'
import NoImg from '@/assets/Group 95.svg'
import { itemsPerPage } from '@/constants/constants.ts'
import { useFetchArtworks } from '@/hooks/useFetchArtwork.ts'
import { PATHS } from '@/constants/paths.ts'

const SpecialGallery: React.FC = () => {
  const [currentPage, setCurrentPage] = useState(1)
  const { artworks } = useFetchArtworks('special') // добавить isLoadeing и haserror
  const totalPages = Math.ceil(artworks.length / itemsPerPage)
  const currentItems = artworks.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage)

  const handlePageChange = (page: number) => {
    if (page < 1 || page > totalPages) return
    setCurrentPage(page)
  }
  return (
    <GallerySection>
      <Container>
        <GalleryWrapper>
          <TitleWrapper>
            <h3>Topics for you</h3>
            <span>Our Special Gallery</span>
          </TitleWrapper>
          <GalleryGrid>
            {currentItems.map((item) => (
              <SpecialGalleryItem
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
        <PaginationWrapper>
          <Pagination
            currentPage={currentPage}
            totalPages={totalPages}
            onPageChange={handlePageChange}
          />
        </PaginationWrapper>
      </Container>
    </GallerySection>
  )
}

export default SpecialGallery
