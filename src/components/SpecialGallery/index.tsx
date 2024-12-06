import NoImg from '@/assets/Group 95.svg'
import ErrorBoundary from '@/components/ErrorBoundary'
import Loader from '@/components/Loader/index.tsx'
import Pagination from '@/components/Pagination/index.tsx'
import SpecialGalleryItem from '@/components/SpecialGalleryItem/index.tsx'
import { PATHS } from '@/constants/paths.ts'
import { useFetchArtworks } from '@/hooks/useFetchArtwork.ts'
import { usePagination } from '@/hooks/usePagination'
import useResponsiveItems from '@/hooks/useResponsiveItems.ts'
import { Container } from '@/style/common.styles.ts'
import { Artwork } from '@/types/type.ts'

import {
  GalleryGrid,
  GallerySection,
  GalleryWrapper,
  PaginationWrapper,
  TitleWrapper
} from './styled.ts'

const SpecialGallery: React.FC = () => {
  const itemsPerPage = useResponsiveItems()
  const { artworks, isLoading, hasError } = useFetchArtworks(undefined, 'special')

  const {
    currentPage,
    totalPages,
    currentItems,
    handlePageChange,
    handleNextClick,
    pageNumbers,
    handlePreviousClick
  } = usePagination(artworks ? artworks.length : 0, itemsPerPage)

  if (isLoading) {
    return <Loader />
  }

  if (hasError) {
    return <div>Error loading artworks</div>
  }

  return (
    <GallerySection>
      <Container>
        <ErrorBoundary>
          <GalleryWrapper>
            <TitleWrapper>
              <h3>Topics for you</h3>
              <span>Our Special Gallery</span>
            </TitleWrapper>
            <GalleryGrid>
              {artworks &&
                currentItems(artworks).map((item: Artwork) => (
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
              onPreviousClick={handlePreviousClick}
              currentPage={currentPage}
              totalPages={totalPages}
              pageNumbers={pageNumbers()}
              onPageChange={handlePageChange}
              onNextClick={handleNextClick}
            />
          </PaginationWrapper>
        </ErrorBoundary>
      </Container>
    </GallerySection>
  )
}

export default SpecialGallery
