import React, { useEffect, useState } from 'react'
import { useArtworksService } from '../../services/ArtService.ts'
import { Container } from '../../style/Container.styles.ts'
import {
  GalleryGrid,
  GallerySection,
  GalleryWrapper,
  PaginationWrapper,
  TitleWrapper
} from './SpecialGallery.styles'
import SpecialGalleryItem from '../SpecialGalleryItem/SpecialGalleryItem'
import Pagination from '../Pagination/Pagination'

interface Artwork {
  id: number
  title: string
  artist_title: string
  image_url: string
  date_display: string
}

const itemsPerPage = 3

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
                itemId={item.id} // Преобразуем id в строку
                img={item.image_url || NoImg} // Используем значение по умолчанию для картинки
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
