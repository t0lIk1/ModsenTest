import { useEffect, useState } from 'react'
import { useArtworksService } from '@/services/ArtService.ts'
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
import { Artwork } from '@/types/type.ts'
import NoImg from '@/assets/Group 95.svg'
import { itemsPerPage } from '@/constants/constants.ts'

const SpecialGallery: React.FC = () => {
  const [currentPage, setCurrentPage] = useState(1)
  const [data, setData] = useState<Artwork[]>([])
  const { getSpecialArtworks } = useArtworksService()

  useEffect(() => {
    const fetchData = async () => {
      try {
        const artworks = await getSpecialArtworks()
        setData(artworks)
      } catch (error) {
        console.error(error)
      }
    }

    fetchData()
  }, [getSpecialArtworks])

  const totalPages = Math.ceil(data.length / itemsPerPage)
  const currentItems = data.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage)

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
                id={item.id} // Преобразуем id в строку
                image_url={item.image_url || NoImg}
                title={item.title}
                artist_title={item.artist_title}
                date_display={item.date_display}
                to={`/art-item/${item.id}`}
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
