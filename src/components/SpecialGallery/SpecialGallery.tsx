import { Link } from 'react-router-dom'
import { useState } from 'react'
import art from '../../assets/img/image 1.png'
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

const data = [
  { img: art, title: 'Charles V bust length...', name: 'Giovanni Britto', status: 'Public' },
  { img: art, title: 'Charles V bust length...', name: 'Giovanni Britto', status: 'Public' },
  { img: art, title: 'Charles V bust length...', name: 'Giovanni Britto', status: 'Public' },
  { img: art, title: 'Charles V bust length...', name: 'Giovanni Britto', status: 'Public' }
]

const itemsPerPage = 3

const SpecialGallery: React.FC = () => {
  const [currentPage, setCurrentPage] = useState(1)
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
            {currentItems.map((item, index) => (
              <Link to="art-item" key={index}>
                <SpecialGalleryItem
                  img={item.img}
                  title={item.title}
                  name={item.name}
                  status={item.status}
                />
              </Link>
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
