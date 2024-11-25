import React, { useState, useEffect } from 'react'
import { useArtworksService } from '../../services/ArtService.ts'
import { Container } from '../../style/Container.styles'
import {
  GallerySection,
  GalleryWrapper,
  TitleWrapper,
  GalleryGrid,
  PaginationWrapper
} from './SpecialGallery.styles'
import SpecialGalleryItem from '../SpecialGalleryItem/SpecialGalleryItem'
import Pagination from '../Pagination/Pagination'
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
                itemId={item.id}
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
