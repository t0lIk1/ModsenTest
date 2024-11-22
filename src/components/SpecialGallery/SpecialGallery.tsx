import { useState, useEffect } from 'react'
import SpecialGalleryItem from '../SpecialGalleryItem/SpecialGalleryItem'
import { Container } from '../../style/Container.styles'
import Pagination from '../Pagination/Pagination'
import {
  GallerySection,
  GalleryWrapper,
  TitleWrapper,
  GalleryGrid,
  PaginationWrapper
} from './SpecialGallery.styles'
import { useArtworksService } from '../../services/ArtService.ts'
import NoImg from '../../assets/img/NoImg(big).png'

const itemsPerPage = 3

interface Artwork {
  id: number
  title: string
  artist_title: string
  image_url?: string
  date_display: string
}

const SpecialGallery: React.FC = () => {
  const [currentPage, setCurrentPage] = useState(1)
  const [data, setData] = useState<Artwork[]>([])
  const { getSpecialArtworks, hasError, isLoading } = useArtworksService()
  useEffect(() => {
    const fetchData = async () => {
      try {
        const artworks = await getSpecialArtworks()
        // eslint-disable-next-line
        // @ts-ignore
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

  if (isLoading) return <div>Loading...</div>
  if (hasError) return <div>{hasError}</div>

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
                img={item.image_url || NoImg}
                title={item.title}
                name={item.artist_title}
                date={item.date_display}
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
